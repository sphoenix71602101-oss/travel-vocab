#!/usr/bin/env python3
"""Refresh the hiragana field in the reviewed Japanese phrase catalog."""
from __future__ import annotations

import json
import re
from pathlib import Path

from pykakasi import kakasi


CATALOG = Path(__file__).resolve().parent / "japanese_phrases.js"


def main() -> None:
    source = CATALOG.read_text(encoding="utf-8-sig")
    match = re.search(r"module\.exports\s*=\s*([\s\S]+);\s*$", source)
    if not match:
        raise ValueError("日语短句目录格式无效")
    catalog = json.loads(match.group(1))
    converter = kakasi()
    count = 0
    for rows in catalog.values():
        for row in rows:
            if len(row) != 3:
                raise ValueError(f"日语短句记录字段数无效：{row}")
            row[2] = "".join(part["hira"] for part in converter.convert(row[1]))
            count += 1
    if count != 240:
        raise ValueError(f"预期 240 条日语短句，实际 {count}")
    output = '"use strict";\n\n// Reviewed scenario phrases; no slot templates.\nmodule.exports = '
    output += json.dumps(catalog, ensure_ascii=False, indent=2) + ";\n"
    CATALOG.write_text(output, encoding="utf-8")
    print(f"已刷新 {count} 条日语假名读音")


if __name__ == "__main__":
    main()
