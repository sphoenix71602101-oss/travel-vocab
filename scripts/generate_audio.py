#!/usr/bin/env python3
"""为语见世界三语词库和日英韩旅行认读课程批量生成 MP3。

词库模式读取 scripts/source-data/legacy-bilingual-data.js；各语言认读模式读取
languages/<packId>/beginner/ 下的音频清单。生成时只写入 audio/ 目录，不修改网站代码。
首次使用请先运行对应的试听模式。
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
KOREAN_VOICE = "ko-KR-SunHiNeural"

RATE = "+0%"
VOLUME = "+0%"
PITCH = "+0Hz"

CONCURRENCY = 3
REQUEST_DELAY_SECONDS = 0.25
MAX_RETRIES = 2
TEST_ITEMS_PER_LANGUAGE = 5

# 用于避免旧双语源数据格式意外变化时静默漏读。词库增删后请同步更新此数字。
EXPECTED_ENTRY_COUNT = 795
TARGETED_EXAMPLES_FILE = Path(__file__).resolve().parent / "targeted_examples.json"
EXPECTED_EXAMPLE_COUNT = 160 + len(json.loads(TARGETED_EXAMPLES_FILE.read_text(encoding="utf-8-sig")))


SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
DATA_FILE = PROJECT_ROOT / "scripts" / "source-data" / "legacy-bilingual-data.js"
CONTENT_PACK_FILES = [
    PROJECT_ROOT / "languages" / "jp-ja" / "pack.js",
    PROJECT_ROOT / "languages" / "us-en" / "pack.js",
    PROJECT_ROOT / "languages" / "kr-ko" / "pack.js",
]
AUDIO_ROOT = PROJECT_ROOT / "audio"
BEGINNER_AUDIO_FILE = PROJECT_ROOT / "languages" / "jp-ja" / "beginner" / "audio.json"
ENGLISH_BEGINNER_AUDIO_FILE = PROJECT_ROOT / "languages" / "us-en" / "beginner" / "audio.js"
KOREAN_BEGINNER_AUDIO_FILE = PROJECT_ROOT / "languages" / "kr-ko" / "beginner" / "audio.js"
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
    rate: str = RATE


@dataclass(frozen=True)
class FailedItem:
    language: str
    entry_id: str
    text: str
    error: str


def parse_word_bank(data_file: Path) -> list[VocabularyEntry]:
    """解析旧双语源文件中的六字段词条数组，但不执行其中的 JavaScript。

    当前旧双语源文件的原始词条格式为：
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
                    f"旧双语源文件第 {line_number} 行不是有效的词条数组：{exc.msg}"
                ) from exc

            if not isinstance(fields, list) or len(fields) != 6:
                raise ValueError(
                    f"旧双语源文件第 {line_number} 行应包含 6 个字段，实际为 {len(fields) if isinstance(fields, list) else '非数组'}"
                )
            if not all(isinstance(value, str) for value in fields):
                raise ValueError(f"旧双语源文件第 {line_number} 行包含非字符串字段")

            entry_id, zh, ja, reading, en, entry_type = fields
            if not ID_PATTERN.fullmatch(entry_id):
                raise ValueError(
                    f"旧双语源文件第 {line_number} 行的 ID 不适合作为文件名：{entry_id!r}"
                )
            if not ja.strip() or not en.strip():
                raise ValueError(
                    f"旧双语源文件第 {line_number} 行缺少日语或英语文本：{entry_id}"
                )
            if entry_type not in {"word", "phrase"}:
                raise ValueError(
                    f"旧双语源文件第 {line_number} 行包含未知类型：{entry_type!r}"
                )

            entries.append(
                VocabularyEntry(entry_id, zh, ja, reading, en, entry_type)
            )

    if candidate_lines != len(entries):
        raise ValueError("检测到疑似词条，但未能全部解析")
    if len(entries) != EXPECTED_ENTRY_COUNT:
        raise ValueError(
            f"预期 {EXPECTED_ENTRY_COUNT} 条词汇，实际解析到 {len(entries)} 条。"
            "如词库刚刚增删过，请核对旧双语源文件后更新 EXPECTED_ENTRY_COUNT。"
        )

    ids = [entry.entry_id for entry in entries]
    duplicates = sorted({entry_id for entry_id in ids if ids.count(entry_id) > 1})
    if duplicates:
        raise ValueError(f"发现重复词条 ID：{', '.join(duplicates)}")

    return entries


def parse_content_pack(pack_file: Path) -> dict:
    source = pack_file.read_text(encoding="utf-8-sig")
    match = re.search(r"window\.registerContentPack\((\{[\s\S]*\})\);\s*\}\)\(\);\s*$", source)
    if not match:
        raise ValueError(f"语言包格式无效：{pack_file.name}")
    pack = json.loads(match.group(1))
    entries = pack.get("entries")
    if not isinstance(entries, list) or len(entries) != EXPECTED_ENTRY_COUNT:
        raise ValueError(f"{pack_file.name} 应包含 {EXPECTED_ENTRY_COUNT} 条正式内容")
    ids = [item.get("id") for item in entries]
    if len(ids) != len(set(ids)) or any(not isinstance(item, str) or not item for item in ids):
        raise ValueError(f"{pack_file.name} 的词条 ID 为空或重复")
    examples = [item["example"] for item in entries if item.get("example")]
    if len(examples) != EXPECTED_EXAMPLE_COUNT or len({item.get("id") for item in examples}) != len(examples):
        raise ValueError(f"{pack_file.name} 应包含 {EXPECTED_EXAMPLE_COUNT} 条唯一例句")
    for item in entries:
        if not isinstance(item.get("text"), str) or not item["text"].strip():
            raise ValueError(f"{pack_file.name}/{item.get('id')} 缺少朗读文字")
        if pack.get("pronunciationLabel") and not item.get("pronunciation"):
            raise ValueError(f"{pack_file.name}/{item.get('id')} 缺少读音")
    return pack


def build_pack_jobs(packs: list[dict], test_mode: bool, targeted_only: bool = False) -> list[AudioJob]:
    jobs: list[AudioJob] = []
    voices = {"ja-JP": JAPANESE_VOICE, "en-US": ENGLISH_VOICE, "ko-KR": KOREAN_VOICE}
    for pack in packs:
        voice = voices.get(pack.get("speechLocale"))
        if not voice:
            raise ValueError(f"尚未配置 {pack.get('speechLocale')} 的生成声音")
        entries = [] if targeted_only else pack["entries"][:TEST_ITEMS_PER_LANGUAGE] if test_mode else pack["entries"]
        for entry in entries:
            output_path = PROJECT_ROOT / entry.get(
                "audioPath", f"audio/packs/{pack['id']}/entries/{entry['id']}.mp3"
            )
            jobs.append(AudioJob(pack["id"], entry["id"], entry["text"], voice, output_path))
        examples = [item["example"] for item in pack["entries"] if item.get("example")]
        if targeted_only:
            targeted_ids = set(json.loads(TARGETED_EXAMPLES_FILE.read_text(encoding="utf-8-sig")))
            examples = [item["example"] for item in pack["entries"] if item["id"] in targeted_ids]
        if test_mode:
            examples = examples[:2]
        for example in examples:
            jobs.append(AudioJob(pack["id"], example["id"], example["text"], voice,
                                 AUDIO_ROOT / "packs" / pack["id"] / "examples" / f"{example['id']}.mp3"))
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


def parse_english_beginner_data() -> list[dict]:
    """读取网页与脚本共用的美国英语教学音清单。"""
    if not ENGLISH_BEGINNER_AUDIO_FILE.is_file():
        raise FileNotFoundError(f"找不到英语教学音清单：{ENGLISH_BEGINNER_AUDIO_FILE}")
    source = ENGLISH_BEGINNER_AUDIO_FILE.read_text(encoding="utf-8-sig")
    match = re.search(
        r"window\.EN_BEGINNER_AUDIO\s*=\s*Object\.freeze\((\[[\s\S]*\])\);\s*$",
        source,
    )
    if not match:
        raise ValueError("英语教学音清单格式无效")
    return json.loads(match.group(1))


def build_english_beginner_jobs(data: list[dict], test_mode: bool) -> list[AudioJob]:
    if not isinstance(data, list) or len(data) != 53:
        raise ValueError("英语教学音清单应包含 53 段声音")
    rate_values = {"clear": "-8%", "slow": "-28%", "natural": "+0%"}
    jobs: list[AudioJob] = []
    seen_ids: set[str] = set()
    seen_content: set[tuple[str, str]] = set()
    for item in data:
        entry_id, text, rate_name = item.get("id"), item.get("text"), item.get("rate")
        if not isinstance(entry_id, str) or not re.fullmatch(r"en-[0-9]{3}", entry_id):
            raise ValueError(f"英语教学音 ID 无效：{entry_id}")
        if not isinstance(text, str) or not text.strip() or rate_name not in rate_values:
            raise ValueError(f"英语教学音文字或语速无效：{entry_id}")
        content_key = (text, rate_name)
        if entry_id in seen_ids or content_key in seen_content:
            raise ValueError(f"英语教学音 ID 或文字语速重复：{entry_id}")
        seen_ids.add(entry_id)
        seen_content.add(content_key)
        jobs.append(AudioJob(
            "en", entry_id, text, ENGLISH_VOICE,
            AUDIO_ROOT / "en" / "beginner" / f"{entry_id}.mp3",
            rate_values[rate_name],
        ))
    if not test_mode:
        return jobs
    sample_ids = {"en-001", "en-004", "en-039", "en-040", "en-049", "en-050"}
    return [job for job in jobs if job.entry_id in sample_ids]


def parse_korean_beginner_data() -> list[dict]:
    """读取韩语教学音清单中的二维数组。"""
    if not KOREAN_BEGINNER_AUDIO_FILE.is_file():
        raise FileNotFoundError(f"找不到韩语教学音清单：{KOREAN_BEGINNER_AUDIO_FILE}")
    source = KOREAN_BEGINNER_AUDIO_FILE.read_text(encoding="utf-8-sig")
    pairs = re.findall(r'\["(ko-[0-9]{3})","([^"]+)"\]', source)
    return [{"id": entry_id, "text": text} for entry_id, text in pairs]


def build_korean_beginner_jobs(data: list[dict], test_mode: bool) -> list[AudioJob]:
    if not isinstance(data, list) or len(data) != 36:
        raise ValueError("韩语教学音清单应包含 36 段声音")
    jobs: list[AudioJob] = []
    seen: set[str] = set()
    for item in data:
        entry_id, text = item.get("id"), item.get("text")
        if not isinstance(entry_id, str) or not re.fullmatch(r"ko-[0-9]{3}", entry_id):
            raise ValueError(f"韩语教学音 ID 无效：{entry_id}")
        if not isinstance(text, str) or not text.strip() or entry_id in seen:
            raise ValueError(f"韩语教学音文字为空或 ID 重复：{entry_id}")
        seen.add(entry_id)
        jobs.append(AudioJob("ko", entry_id, text, KOREAN_VOICE,
                             AUDIO_ROOT / "ko" / "beginner" / f"{entry_id}.mp3", "-10%"))
    return jobs[:6] if test_mode else jobs


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
        return None

    job.output_path.parent.mkdir(parents=True, exist_ok=True)
    temporary_path = job.output_path.with_suffix(".mp3.part")

    for attempt in range(1, MAX_RETRIES + 2):
        try:
            temporary_path.unlink(missing_ok=True)
            communicate = edge_tts_module.Communicate(
                text=job.text,
                voice=job.voice,
                rate=job.rate,
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
        description="生成词库或旅行认读教学 MP3（已有文件会自动跳过）。"
    )
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument(
        "--test",
        action="store_true",
        help="每个语言包处理前 5 条正式内容和 2 条例句",
    )
    mode.add_argument(
        "--full",
        action="store_true",
        help="处理三个完整语言包的正式内容和例句",
    )
    mode.add_argument(
        "--validate-only",
        action="store_true",
        help="只验证三个独立目的地语言包，不安装 edge-tts 也可运行",
    )
    mode.add_argument("--targeted-examples-only", action="store_true", help="仅生成本次补充的三语例句音频")
    mode.add_argument("--beginner-test", action="store_true", help="生成前 5 个日语教学音试听")
    mode.add_argument("--beginner-full", action="store_true", help="生成全部 57 段日语教学音")
    mode.add_argument("--beginner-validate-only", action="store_true", help="只验证日语教学音清单")
    mode.add_argument("--beginner-repair", action="store_true", help="为 い、ふ、ら、ん 生成 12 段候选音，不覆盖正式音频")
    mode.add_argument("--english-beginner-test", action="store_true", help="生成 6 段美国英语教学音试听（含 cat、map 和双语速短句）")
    mode.add_argument("--english-beginner-full", action="store_true", help="生成全部 53 段美国英语教学音")
    mode.add_argument("--english-beginner-validate-only", action="store_true", help="只验证美国英语教学音清单")
    mode.add_argument("--korean-beginner-test", action="store_true", help="生成前 6 个韩语教学音试听")
    mode.add_argument("--korean-beginner-full", action="store_true", help="生成全部 36 段韩语教学音")
    mode.add_argument("--korean-beginner-validate-only", action="store_true", help="只验证韩语教学音清单")
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    beginner_mode = args.beginner_test or args.beginner_full or args.beginner_validate_only
    english_beginner_mode = args.english_beginner_test or args.english_beginner_full or args.english_beginner_validate_only
    korean_beginner_mode = args.korean_beginner_test or args.korean_beginner_full or args.korean_beginner_validate_only
    if args.beginner_repair:
        jobs = build_repair_jobs()
        print(f"准备生成 {len(jobs)} 段修复候选音；正式教学音不会被覆盖。")
    elif korean_beginner_mode:
        try:
            jobs = build_korean_beginner_jobs(
                parse_korean_beginner_data(), test_mode=args.korean_beginner_test
            )
        except (OSError, ValueError, json.JSONDecodeError) as exc:
            print(f"韩语教学音清单检查失败：{exc}", file=sys.stderr)
            return 2
        print(f"已验证韩国韩语教学音清单：{len(jobs)} 个目标。")
        if args.korean_beginner_validate_only:
            return 0
    elif english_beginner_mode:
        try:
            jobs = build_english_beginner_jobs(
                parse_english_beginner_data(), test_mode=args.english_beginner_test
            )
        except (OSError, ValueError, json.JSONDecodeError) as exc:
            print(f"英语教学音清单检查失败：{exc}", file=sys.stderr)
            return 2
        print(f"已验证美国英语教学音清单：{len(jobs)} 个目标。")
        if args.english_beginner_validate_only:
            return 0
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
            packs = [parse_content_pack(pack_file) for pack_file in CONTENT_PACK_FILES]
            jobs = build_pack_jobs(packs, test_mode=args.test, targeted_only=args.targeted_examples_only)
        except (OSError, ValueError, json.JSONDecodeError) as exc:
            print(f"语言包检查失败：{exc}", file=sys.stderr)
            return 2
        print("已验证语言包：" + "；".join(
            f"{pack['id']} {len(pack['entries'])} 条正式内容、{sum(bool(item.get('example')) for item in pack['entries'])} 条例句"
            for pack in packs
        ))
        if args.validate_only:
            return 0

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
    mode_name = "试听模式" if args.test or args.beginner_test or args.beginner_repair or args.english_beginner_test or args.korean_beginner_test else "完整模式"
    voice_summary = KOREAN_VOICE if korean_beginner_mode else ENGLISH_VOICE if english_beginner_mode else JAPANESE_VOICE if beginner_mode or args.beginner_repair else f"{JAPANESE_VOICE} / {ENGLISH_VOICE} / {KOREAN_VOICE}"
    print(
        f"{mode_name}：共 {len(jobs)} 个目标，已有 {existing} 个；"
        f"声音 {voice_summary}，并发 {CONCURRENCY}。"
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
