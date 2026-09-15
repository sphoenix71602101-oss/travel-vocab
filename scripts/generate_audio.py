#!/usr/bin/env python3
"""为语见世界词库和日语旅行识读课程批量生成 MP3。

词库模式读取 data.js；日语识读模式读取 beginner-audio.json。生成时只写入
audio/ 目录，不修改网站代码。首次使用请先运行 --test 或 --beginner-test 试听。
"""

from __future__ import annotations

import argparse
import asyncio
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path


# ── 常用设置：更换声音或语速时只需修改这里 ──────────────────────────────
JAPANESE_VOICE = "ja-JP-NanamiNeural"
ENGLISH_VOICE = "en-US-JennyNeural"

RATE = "+0%"
VOLUME = "+0%"
PITCH = "+0Hz"

CONCURRENCY = 3
REQUEST_DELAY_SECONDS = 0.25
MAX_RETRIES = 2
TEST_ITEMS_PER_LANGUAGE = 5

# 用于避免 data.js 格式意外变化时静默漏读。词库增删后请同步更新此数字。
EXPECTED_ENTRY_COUNT = 555


SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
DATA_FILE = PROJECT_ROOT / "data.js"
AUDIO_ROOT = PROJECT_ROOT / "audio"
BEGINNER_AUDIO_FILE = PROJECT_ROOT / "beginner-audio.json"
ID_PATTERN = re.compile(r"^[a-z][a-z0-9]*_[0-9]{3}$")


@dataclass(frozen=True)
class VocabularyEntry:
    entry_id: str
    zh: str
    ja: str
    reading: str
    en: str
    entry_type: str


@dataclass(frozen=True)
class AudioJob:
    language: str
    entry_id: str
    text: str
    voice: str
    output_path: Path


@dataclass(frozen=True)
class FailedItem:
    language: str
    entry_id: str
    text: str
    error: str


def parse_word_bank(data_file: Path) -> list[VocabularyEntry]:
    """解析 data.js 中的六字段词条数组，但不执行其中的 JavaScript。

    当前 data.js 的原始词条格式为：
    [id, zh, ja, reading, en, type]

    每条记录本身是合法 JSON 数组。逐行使用 json.loads 可以正确处理 Unicode、
    标点和转义字符，同时避免通过 eval 或 Node 执行网站脚本。
    """
    if not data_file.is_file():
        raise FileNotFoundError(f"找不到词库文件：{data_file}")

    entries: list[VocabularyEntry] = []
    candidate_lines = 0

    with data_file.open("r", encoding="utf-8-sig") as source:
        for line_number, raw_line in enumerate(source, start=1):
            line = raw_line.strip()
            if not line.startswith('["'):
                continue

            candidate_lines += 1
            json_text = line[:-1] if line.endswith(",") else line
            try:
                fields = json.loads(json_text)
            except json.JSONDecodeError as exc:
                raise ValueError(
                    f"data.js 第 {line_number} 行不是有效的词条数组：{exc.msg}"
                ) from exc

            if not isinstance(fields, list) or len(fields) != 6:
                raise ValueError(
                    f"data.js 第 {line_number} 行应包含 6 个字段，实际为 {len(fields) if isinstance(fields, list) else '非数组'}"
                )
            if not all(isinstance(value, str) for value in fields):
                raise ValueError(f"data.js 第 {line_number} 行包含非字符串字段")

            entry_id, zh, ja, reading, en, entry_type = fields
            if not ID_PATTERN.fullmatch(entry_id):
                raise ValueError(
                    f"data.js 第 {line_number} 行的 ID 不适合作为文件名：{entry_id!r}"
                )
            if not ja.strip() or not en.strip():
                raise ValueError(
                    f"data.js 第 {line_number} 行缺少日语或英语文本：{entry_id}"
                )
            if entry_type not in {"word", "phrase"}:
                raise ValueError(
                    f"data.js 第 {line_number} 行包含未知类型：{entry_type!r}"
                )

            entries.append(
                VocabularyEntry(entry_id, zh, ja, reading, en, entry_type)
            )

    if candidate_lines != len(entries):
        raise ValueError("检测到疑似词条，但未能全部解析")
    if len(entries) != EXPECTED_ENTRY_COUNT:
        raise ValueError(
            f"预期 {EXPECTED_ENTRY_COUNT} 条词汇，实际解析到 {len(entries)} 条。"
            "如词库刚刚增删过，请核对 data.js 后更新 EXPECTED_ENTRY_COUNT。"
        )

    ids = [entry.entry_id for entry in entries]
    duplicates = sorted({entry_id for entry_id in ids if ids.count(entry_id) > 1})
    if duplicates:
        raise ValueError(f"发现重复词条 ID：{', '.join(duplicates)}")

    return entries


def build_jobs(entries: list[VocabularyEntry], test_mode: bool) -> list[AudioJob]:
    selected = entries[:TEST_ITEMS_PER_LANGUAGE] if test_mode else entries
    jobs: list[AudioJob] = []

    for entry in selected:
        jobs.append(
            AudioJob(
                "ja",
                entry.entry_id,
                entry.ja,
                JAPANESE_VOICE,
                AUDIO_ROOT / "ja" / f"{entry.entry_id}.mp3",
            )
        )
        jobs.append(
            AudioJob(
                "en",
                entry.entry_id,
                entry.en,
                ENGLISH_VOICE,
                AUDIO_ROOT / "en" / f"{entry.entry_id}.mp3",
            )
        )

    return jobs


def parse_beginner_data() -> list[dict]:
    """读取独立的教学音频清单；用户无需安装 Node.js。"""
    if not BEGINNER_AUDIO_FILE.is_file():
        raise FileNotFoundError(f"找不到教学音频清单：{BEGINNER_AUDIO_FILE}")
    with BEGINNER_AUDIO_FILE.open("r", encoding="utf-8-sig") as source:
        return json.load(source)


def build_beginner_jobs(data: list[dict], test_mode: bool) -> list[AudioJob]:
    if not isinstance(data, list) or len(data) != 57:
        raise ValueError("教学音频清单应包含 57 段声音")
    jobs: list[AudioJob] = []
    seen: set[str] = set()
    for item in data:
        entry_id, display_text = item.get("id"), item.get("text")
        sound = item.get("synthesisText", display_text)
        if not isinstance(entry_id, str) or not re.fullmatch(r"(?:kana-[0-9a-f]{4}|example-[a-z-]+|rule-[a-z-]+-[0-9])", entry_id):
            raise ValueError(f"教学音 ID 无效：{entry_id}")
        if not isinstance(display_text, str) or not display_text.strip() or not isinstance(sound, str) or not sound.strip() or entry_id in seen:
            raise ValueError(f"教学音文字为空或 ID 重复：{entry_id}")
        seen.add(entry_id)
        jobs.append(AudioJob("ja", entry_id, sound, JAPANESE_VOICE,
                             AUDIO_ROOT / "ja" / "beginner" / f"{entry_id}.mp3"))
    return jobs[:5] if test_mode else jobs


def build_repair_jobs() -> list[AudioJob]:
    """为反馈有瑕疵的假名生成候选试听，不覆盖正式教学音。"""
    targets = {
        "kana-3044": ("い", "イ"),
        "kana-3075": ("ふ", "フ"),
        "kana-3089": ("ら", "ラ"),
        "kana-3093": ("ん", "ン"),
    }
    jobs: list[AudioJob] = []
    for entry_id, (hiragana, katakana) in targets.items():
        for variant, sound in (("retry", hiragana), ("katakana", katakana), ("sentence", f"{hiragana}。")):
            candidate_id = f"{entry_id}-{variant}"
            jobs.append(AudioJob("ja", candidate_id, sound, JAPANESE_VOICE,
                                 AUDIO_ROOT / "ja" / "beginner" / "candidates" / f"{candidate_id}.mp3"))
    return jobs


async def generate_one(job: AudioJob, edge_tts_module: object) -> FailedItem | None:
    if job.output_path.is_file() and job.output_path.stat().st_size > 0:
        print(f"[跳过] {job.language}/{job.output_path.name}")
        return None

    job.output_path.parent.mkdir(parents=True, exist_ok=True)
    temporary_path = job.output_path.with_suffix(".mp3.part")

    for attempt in range(1, MAX_RETRIES + 2):
        try:
            temporary_path.unlink(missing_ok=True)
            communicate = edge_tts_module.Communicate(
                text=job.text,
                voice=job.voice,
                rate=RATE,
                volume=VOLUME,
                pitch=PITCH,
                connect_timeout=15,
                receive_timeout=60,
            )
            await communicate.save(str(temporary_path))
            if not temporary_path.is_file() or temporary_path.stat().st_size == 0:
                raise RuntimeError("服务未返回有效音频")
            temporary_path.replace(job.output_path)
            print(f"[完成] {job.language}/{job.output_path.name}  ←  {job.text}")
            return None
        except Exception as exc:  # 网络和服务错误需汇总后继续处理其他词条
            temporary_path.unlink(missing_ok=True)
            if attempt <= MAX_RETRIES:
                wait_seconds = REQUEST_DELAY_SECONDS + attempt
                print(
                    f"[重试 {attempt}/{MAX_RETRIES}] {job.language}/{job.output_path.name}: {exc}"
                )
                await asyncio.sleep(wait_seconds)
                continue
            return FailedItem(job.language, job.entry_id, job.text, str(exc))
        finally:
            await asyncio.sleep(REQUEST_DELAY_SECONDS)

    return FailedItem(job.language, job.entry_id, job.text, "未知错误")


async def generate_all(jobs: list[AudioJob], edge_tts_module: object) -> list[FailedItem]:
    queue: asyncio.Queue[AudioJob | None] = asyncio.Queue()
    failures: list[FailedItem] = []

    for job in jobs:
        queue.put_nowait(job)
    worker_count = min(max(1, CONCURRENCY), len(jobs))
    for _ in range(worker_count):
        queue.put_nowait(None)

    async def worker() -> None:
        while True:
            job = await queue.get()
            try:
                if job is None:
                    return
                failure = await generate_one(job, edge_tts_module)
                if failure:
                    failures.append(failure)
            finally:
                queue.task_done()

    workers = [asyncio.create_task(worker()) for _ in range(worker_count)]
    await queue.join()
    await asyncio.gather(*workers)
    return failures


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="生成词库或旅行识读教学 MP3（已有文件会自动跳过）。"
    )
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument(
        "--test",
        action="store_true",
        help="仅处理前 5 条词汇：生成 5 个日语和 5 个英语文件",
    )
    mode.add_argument(
        "--full",
        action="store_true",
        help="处理完整词库：生成 555 个日语和 555 个英语文件",
    )
    mode.add_argument(
        "--validate-only",
        action="store_true",
        help="只验证 data.js，不安装 edge-tts 也可运行",
    )
    mode.add_argument("--beginner-test", action="store_true", help="生成前 5 个日语教学音试听")
    mode.add_argument("--beginner-full", action="store_true", help="生成全部 57 段日语教学音")
    mode.add_argument("--beginner-validate-only", action="store_true", help="只验证日语教学音清单")
    mode.add_argument("--beginner-repair", action="store_true", help="为 い、ふ、ら、ん 生成 12 段候选音，不覆盖正式音频")
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    beginner_mode = args.beginner_test or args.beginner_full or args.beginner_validate_only
    if args.beginner_repair:
        jobs = build_repair_jobs()
        print(f"准备生成 {len(jobs)} 段修复候选音；正式教学音不会被覆盖。")
    elif beginner_mode:
        try:
            jobs = build_beginner_jobs(parse_beginner_data(), test_mode=args.beginner_test)
        except (OSError, ValueError, json.JSONDecodeError) as exc:
            print(f"教学音清单检查失败：{exc}", file=sys.stderr)
            return 2
        print(f"已验证日语教学音清单：{len(jobs)} 个目标。")
        if args.beginner_validate_only:
            return 0
    else:
        try:
            entries = parse_word_bank(DATA_FILE)
        except (OSError, ValueError) as exc:
            print(f"词库检查失败：{exc}", file=sys.stderr)
            return 2
        print(f"已验证词库：{len(entries)} 条，ID 均唯一，日语和英语字段完整。")
        if args.validate_only:
            return 0
        jobs = build_jobs(entries, test_mode=args.test)

    try:
        import edge_tts
    except ImportError:
        print(
            "缺少依赖 edge-tts。请运行：python -m pip install -r scripts/requirements-audio.txt",
            file=sys.stderr,
        )
        return 2

    existing = sum(
        job.output_path.is_file() and job.output_path.stat().st_size > 0 for job in jobs
    )
    mode_name = "试听模式" if args.test or args.beginner_test or args.beginner_repair else "完整模式"
    print(
        f"{mode_name}：共 {len(jobs)} 个目标，已有 {existing} 个；"
        f"日语声音 {JAPANESE_VOICE}，英语声音 {ENGLISH_VOICE}，并发 {CONCURRENCY}。"
    )

    failures = asyncio.run(generate_all(jobs, edge_tts))
    succeeded_or_existing = len(jobs) - len(failures)
    print(f"\n处理结束：成功或已存在 {succeeded_or_existing}/{len(jobs)}。")

    if failures:
        print(f"失败 {len(failures)} 项：")
        for item in failures:
            print(
                f"- {item.language}/{item.entry_id}.mp3 | {item.text} | {item.error}"
            )
        return 1

    print(f"音频目录：{AUDIO_ROOT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
