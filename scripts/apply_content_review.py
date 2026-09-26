#!/usr/bin/env python3
"""Apply the hand-reviewed five-language travel content additions and corrections."""

from __future__ import annotations

import json
import re
from pathlib import Path

from koroman import romanize
from pykakasi import kakasi

from generate_russian_pack import transliterate


ROOT = Path(__file__).resolve().parent.parent
ADDITIONS = json.loads((ROOT / "scripts/content_review_additions.json").read_text(encoding="utf-8"))
ADDITION_EXAMPLES = {item["id"]: item for item in json.loads((ROOT / "scripts/content_review_examples.json").read_text(encoding="utf-8"))}
HEARD_PHRASES = json.loads((ROOT / "scripts/traveler_hears_review.json").read_text(encoding="utf-8"))
PACKS = {
    "jp-ja": ("ja", "audio/ja"),
    "us-en": ("en", "audio/en"),
    "kr-ko": ("ko", "audio/ko"),
    "es-es": ("es", "audio/es"),
    "ru-ru": ("ru", "audio/ru"),
}
EXPECTED_TOTAL = 795 + len(ADDITIONS)
# Keep locale-critical traveler requests (for example Russia 103/112 and Korea
# 119) in their reviewed slots; these eight slots are reserved for staff speech.
HEARD_SLOTS = (19, 20, 21, 23, 26, 28, 29, 30)
KAKASI = kakasi()


def read_pack(path: Path) -> dict:
    source = path.read_text(encoding="utf-8-sig")
    match = re.search(r"window\.registerContentPack\((\{[\s\S]*\})\);\s*\}\)\(\);\s*$", source)
    if not match:
        raise ValueError(f"Invalid content pack: {path}")
    return json.loads(match.group(1))


def write_pack(path: Path, pack: dict) -> None:
    output = '(function () {\n  "use strict";\n  window.registerContentPack(' + json.dumps(pack, ensure_ascii=False, indent=2) + ');\n})();\n'
    path.write_text(output, encoding="utf-8")


def japanese_reading(text: str) -> str:
    return "".join(item["hira"] for item in KAKASI.convert(text))


def pronunciation(locale: str, text: str) -> str | None:
    if locale == "ja":
        return japanese_reading(text)
    if locale == "ko":
        return romanize(text, casing="lower")
    if locale == "ru":
        return transliterate(text)
    return None


def update_pronunciation(pack: dict, entry: dict) -> None:
    value = pronunciation(pack["languageCode"], entry["text"])
    if value:
        entry["pronunciation"] = value
    if entry.get("example"):
        value = pronunciation(pack["languageCode"], entry["example"]["text"])
        if value:
            entry["example"]["pronunciation"] = value


def apply_specific_corrections(pack: dict) -> None:
    entries = {entry["id"]: entry for entry in pack["entries"]}
    locale = pack["languageCode"]

    if pack["id"] == "ru-ru":
        entry = entries["ru_emergency_phrase_024"]
        entry.update(zh="请拨打112联系紧急服务。", text="Пожалуйста, позвоните по номеру 112 в экстренную службу.", direction="traveler-says", intent="request")
        update_pronunciation(pack, entry)

    if pack["id"] == "kr-ko":
        corrections = {
            "ko_hotel_phrase_016": ("今天不用打扫房间。", "오늘은 객실 청소가 필요 없어요.", "traveler-says"),
            "ko_hotel_phrase_027": ("我现在想退房。", "지금 체크아웃하고 싶어요.", "traveler-says"),
            "ko_food_phrase_025": ("我不吃肉。", "저는 고기를 먹지 않아요.", "traveler-says"),
            "ko_food_phrase_018": ("可以再给我一些小菜吗？", "반찬을 조금 더 주세요.", "traveler-says"),
            "ko_emergency_phrase_004": ("我头很痛。", "머리가 너무 아파요.", "traveler-says"),
        }
        for entry_id, (zh, text, direction) in corrections.items():
            entries[entry_id].update(zh=zh, text=text, direction=direction, intent="communicate")
            update_pronunciation(pack, entries[entry_id])
        example_corrections = {
            "airport_003": ("我在网上订了机票。", "온라인으로 항공권을 예약했어요."),
            "directions_019": ("那座玻璃大楼就是图书馆。", "저 유리 건물이 도서관이에요."),
            "hotel_018": ("今天不用打扫房间，谢谢。", "오늘은 객실 청소를 안 해도 돼요. 감사합니다."),
        }
        for entry_id, (zh, text) in example_corrections.items():
            entries[entry_id]["example"].update(zh=zh, text=text)
            update_pronunciation(pack, entries[entry_id])

    if pack["id"] == "us-en":
        entries["numbers_015"].update(zh="美元", text="U.S. dollar")
        entries["numbers_016"].update(zh="美分", text="cent")
        if entries["numbers_015"].get("example"):
            entries["numbers_015"]["example"].update(zh="这家店只接受美元。", text="This store only accepts U.S. dollars.")
        if entries["numbers_016"].get("example"):
            entries["numbers_016"]["example"].update(zh="总价是十美元五十美分。", text="The total is ten dollars and fifty cents.")

    number_examples = {
        "ja": ("这个景点每年接待一万多名游客。", "この観光地には毎年一万人以上の観光客が訪れます。"),
        "en": ("这个景点每年接待一万多名游客。", "This attraction welcomes more than ten thousand visitors each year."),
        "ko": ("这个景点每年接待一万多名游客。", "이 관광지는 매년 만 명이 넘는 관광객이 찾아와요."),
        "es": ("这个景点每年接待一万多名游客。", "Esta atracción recibe a más de diez mil visitantes al año."),
        "ru": ("这个景点每年接待一万多名游客。", "Эту достопримечательность ежегодно посещают более десяти тысяч туристов."),
    }
    if entries["numbers_014"].get("example"):
        zh, text = number_examples[locale]
        entries["numbers_014"]["example"].update(zh=zh, text=text)
        update_pronunciation(pack, entries["numbers_014"])


def append_additions(pack: dict) -> None:
    locale, audio_base = PACKS[pack["id"]]
    existing = {entry["id"] for entry in pack["entries"]}
    for source in ADDITIONS:
        if source["id"] in existing:
            entry = next(item for item in pack["entries"] if item["id"] == source["id"])
            if source["id"] in ADDITION_EXAMPLES:
                example = ADDITION_EXAMPLES[source["id"]]
                entry["example"] = {
                    "id": f"{pack['id']}_{source['id']}_example",
                    "zh": example["zh"],
                    "text": example[locale],
                }
                update_pronunciation(pack, entry)
            continue
        text = source[locale]
        entry = {
            "id": source["id"],
            "sceneId": source["sceneId"],
            "situationId": source["situationId"],
            "kind": "word",
            "zh": source["zh"],
            "text": text,
            "audioPath": f"{audio_base}/{source['id']}.mp3",
            "direction": "traveler-says",
            "intent": "recognize",
        }
        if source["id"] in ADDITION_EXAMPLES:
            example = ADDITION_EXAMPLES[source["id"]]
            entry["example"] = {
                "id": f"{pack['id']}_{source['id']}_example",
                "zh": example["zh"],
                "text": example[locale],
            }
        value = pronunciation(locale, text)
        if value:
            entry["pronunciation"] = value
        update_pronunciation(pack, entry)
        pack["entries"].append(entry)
        existing.add(source["id"])


def apply_traveler_hears(pack: dict) -> None:
    locale = pack["languageCode"]
    for scene_id, localized in HEARD_PHRASES.items():
        phrases = [
            entry for entry in pack["entries"]
            if entry["sceneId"] == scene_id and re.search(r"_phrase_\d{3}$", entry["id"])
        ]
        by_slot = {int(entry["id"][-3:]): entry for entry in phrases}
        if len(by_slot) != 30:
            raise ValueError(f"{pack['id']}/{scene_id}: expected 30 expansion phrases")
        for entry in phrases:
            entry["direction"] = "traveler-says"
        for index, slot in enumerate(HEARD_SLOTS):
            entry = by_slot[slot]
            entry.update(
                zh=localized["zh"][index],
                text=localized[locale][index],
                direction="traveler-hears",
                intent="understand",
            )
            update_pronunciation(pack, entry)


def validate(pack: dict) -> None:
    locale, audio_base = PACKS[pack["id"]]
    entries = pack["entries"]
    if len(entries) != EXPECTED_TOTAL or len({entry["id"] for entry in entries}) != EXPECTED_TOTAL:
        raise ValueError(f"{pack['id']}: expected {EXPECTED_TOTAL} unique entries")
    valid_scenes = {scene["id"]: {item["id"] for item in scene["situations"]} for scene in pack["scenes"]}
    for entry in entries:
        if entry["sceneId"] not in valid_scenes or entry["situationId"] not in valid_scenes[entry["sceneId"]]:
            raise ValueError(f"{pack['id']}/{entry['id']}: invalid scene classification")
        if pack.get("pronunciationLabel") and not entry.get("pronunciation"):
            raise ValueError(f"{pack['id']}/{entry['id']}: missing pronunciation")
        if entry["id"] in {item["id"] for item in ADDITIONS} and not entry["audioPath"].startswith(audio_base + "/"):
            raise ValueError(f"{pack['id']}/{entry['id']}: cross-language audio path")
        if locale == "ja" and re.search(r"[\uac00-\ud7af\u0400-\u04ff]", entry["text"]):
            raise ValueError(f"{pack['id']}/{entry['id']}: foreign-script contamination")
    for scene in pack["scenes"]:
        phrases = [entry for entry in entries if entry["sceneId"] == scene["id"] and re.search(r"_phrase_\d{3}$", entry["id"])]
        if sum(entry["direction"] == "traveler-hears" for entry in phrases) != 8:
            raise ValueError(f"{pack['id']}/{scene['id']}: traveler-hears count is not 8")
        if locale == "ko" and re.search(r"[\u3040-\u30ff\u0400-\u04ff]", entry["text"]):
            raise ValueError(f"{pack['id']}/{entry['id']}: foreign-script contamination")
        if locale == "ru" and re.search(r"[\u3040-\u30ff\uac00-\ud7af]", entry["text"]):
            raise ValueError(f"{pack['id']}/{entry['id']}: foreign-script contamination")


def main() -> None:
    for pack_id in PACKS:
        path = ROOT / "languages" / pack_id / "pack.js"
        pack = read_pack(path)
        apply_specific_corrections(pack)
        apply_traveler_hears(pack)
        append_additions(pack)
        validate(pack)
        write_pack(path, pack)
        print(f"{pack_id}: {len(pack['entries'])} entries")


if __name__ == "__main__":
    main()
