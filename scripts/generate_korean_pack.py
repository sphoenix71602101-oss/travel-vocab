#!/usr/bin/env python3
"""Build the Korean content pack from the reviewed English pack and a cached translation catalog.

The first run fills scripts/korean_translation_cache.json through the Google Chrome
translation endpoint. Later runs are fully reproducible from the cache.
"""

from __future__ import annotations

import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path

from koroman import romanize


ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "languages" / "us-en" / "pack.js"
CACHE = ROOT / "scripts" / "korean_translation_cache.json"
OUTPUT = ROOT / "languages" / "kr-ko" / "pack.js"
TARGETED_EXAMPLES = json.loads((ROOT / "scripts" / "targeted_examples.json").read_text(encoding="utf-8-sig"))


# Korea-specific replacements are written in English first so they pass through the
# same translation and romanization pipeline as the rest of the catalog.
OVERRIDES = {
    "hotel_002": ("韩屋住宿", "hanok accommodation", "我们预订了一晚韩屋住宿。", "We booked a hanok stay for one night."),
    "numbers_012": ("百", "one hundred", "这张钞票是一百韩元。", "This bill is one hundred won."),
    "numbers_013": ("千", "one thousand", "交通卡里还有一千韩元。", "There is one thousand won left on the transportation card."),
    "numbers_015": ("韩元", "Korean won", "这家店只收韩元。", "This store only accepts Korean won."),
    "numbers_016": ("美元", "U.S. dollar", "可以把美元兑换成韩元吗？", "Can I exchange U.S. dollars for Korean won?"),
    "numbers_017": ("人民币", "Chinese yuan", "在哪里可以把人民币兑换成韩元？", "Where can I exchange Chinese yuan for Korean won?"),
    "en_airport_phrase_001": ("我已经填写了电子入境申报。", "I completed the electronic arrival declaration."),
    "en_airport_phrase_015": ("这是安检队伍吗？", "Is this the line for the security checkpoint?"),
    "en_airport_phrase_027": ("机场铁路在哪里乘坐？", "Where can I take the airport railroad?"),
    "en_transport_phrase_001": ("可以在这里购买 T-money 卡吗？", "Can I buy a T-money card here?"),
    "en_transport_phrase_006": ("下车时也需要刷交通卡吗？", "Do I need to tap my transportation card when I get off?"),
    "en_transport_phrase_011": ("这是 KTX 的乘车站台吗？", "Is this the platform for the KTX?"),
    "en_transport_phrase_016": ("出租车上车点在哪里？", "Where is the taxi pickup area?"),
    "en_transport_phrase_022": ("换乘时需要重新买票吗？", "Do I need another ticket when I transfer?"),
    "en_hotel_phrase_002": ("我预订的是韩屋房间。", "I booked a room in a hanok."),
    "en_hotel_phrase_011": ("房间里的地暖怎么调节？", "How do I adjust the floor heating in the room?"),
    "en_hotel_phrase_028": ("退房后可以寄存行李吗？", "Can you store my luggage after checkout?"),
    "en_food_phrase_005": ("有带图片的菜单吗？", "Do you have a menu with pictures?"),
    "en_food_phrase_008": ("请给我一份店里最受欢迎的菜。", "Please give me one of your most popular dishes."),
    "en_food_phrase_014": ("请做得不辣一点。", "Please make it less spicy."),
    "en_food_phrase_019": ("小菜可以再加一些吗？", "Could I have more side dishes?"),
    "en_food_phrase_020": ("水和小菜需要自取吗？", "Are the water and side dishes self-service?"),
    "en_food_phrase_023": ("需要在点餐机上点餐吗？", "Do I need to order at the kiosk?"),
    "en_food_phrase_027": ("这里需要付小费吗？", "Do I need to leave a tip here?"),
    "en_shopping_phrase_020": ("标价包含增值税吗？", "Does the listed price include VAT?"),
    "en_shopping_phrase_024": ("可以凭护照立即退税吗？", "Can I get an immediate tax refund with my passport?"),
    "en_directions_phrase_005": ("最近的地铁站出口是几号？", "What is the number of the nearest subway exit?"),
    "en_directions_phrase_018": ("可以在 Naver 地图上标出来吗？", "Could you mark it on Naver Map?"),
    "en_directions_phrase_023": ("请再慢一点说。", "Please say that again more slowly."),
    "en_emergency_phrase_006": ("附近有接诊游客的医院吗？", "Is there a hospital nearby that accepts travelers?"),
    "en_emergency_phrase_012": ("请帮我拨打 112 报警。", "Please call 112 for the police."),
    "en_emergency_phrase_022": ("请帮我拨打 119。", "Please call 119."),
    "en_emergency_phrase_027": ("可以联系 1330 旅游咨询热线吗？", "Could you contact the 1330 travel helpline?"),
    "en_basics_phrase_012": ("我不会说韩语。", "I do not speak Korean."),
    "en_basics_phrase_013": ("可以用中文写下来吗？", "Could you write it down in Chinese?"),
    "en_basics_phrase_015": ("请告诉我韩元的读法。", "Please tell me how to say the amount in Korean won."),
}

# Human review pass for short labels and high-stakes phrases where generic machine
# translation commonly chooses the wrong sense or an unsafe speech level.
KO_TEXT_OVERRIDES = {
    "airport_015": "입국", "airport_018": "항공편", "airport_068": "휴대", "airport_069": "위탁 수하물",
    "airport_071": "입국신고서", "airport_076": "기장", "airport_087": "환승하고 싶어요.",
    "airport_036": "KTX", "airport_041": "편도 승차권", "airport_042": "왕복 승차권", "airport_043": "승차권",
    "hotel_014": "카드 키", "hotel_015": "벨 데스크 직원", "hotel_022": "이불", "hotel_026": "욕실",
    "hotel_034": "바디 워시", "hotel_049": "다리미", "hotel_054": "객실이 없어요", "hotel_055": "보증금",
    "hotel_073": "전망", "hotel_078": "연박", "food_014": "밥", "food_029": "생선", "food_064": "유리잔",
    "food_066": "계산", "food_067": "계산대", "food_068": "직원", "food_073": "매장에서 먹기",
    "food_074": "맛있다", "food_075": "맛없다", "food_076": "달다", "food_077": "짜다", "food_078": "맵다",
    "food_079": "쓰다", "food_080": "시다", "food_081": "뜨겁다", "food_082": "차갑다", "food_083": "신선하다",
    "shopping_007": "얼마예요", "shopping_009": "싸다", "shopping_011": "할인 행사", "shopping_015": "체크카드",
    "shopping_016": "잔돈", "shopping_022": "사이즈", "shopping_023": "큰 사이즈", "shopping_024": "중간 사이즈",
    "shopping_025": "작은 사이즈", "directions_001": "어디", "directions_005": "오른쪽", "directions_007": "뒤",
    "directions_011": "멀다", "directions_012": "가깝다", "directions_013": "쭉 가다", "directions_014": "방향을 틀다",
    "emergency_001": "도와주세요", "emergency_002": "응급 상황", "emergency_003": "경찰에 신고하다",
    "emergency_007": "약", "emergency_024": "알약", "emergency_028": "체온계", "emergency_031": "구급함",
    "numbers_001": "영", "numbers_011": "열", "numbers_021": "모레", "numbers_030": "일 분", "numbers_031": "초",
    "numbers_032": "몇 시", "numbers_056": "1일", "numbers_057": "2일", "numbers_058": "3일", "numbers_059": "4일",
    "numbers_060": "5일", "numbers_061": "6일", "numbers_062": "7일", "expressions_004": "주세요",
    "expressions_005": "죄송합니다", "expressions_006": "미안합니다", "expressions_008": "안녕하세요",
    "expressions_010": "안녕히 가세요", "expressions_016": "네", "expressions_017": "아니요", "expressions_018": "괜찮아요",
    "expressions_019": "괜찮아요", "expressions_020": "문제없어요", "expressions_021": "알겠습니다",
    "expressions_024": "원해요", "expressions_025": "필요해요", "expressions_026": "있어요", "expressions_027": "없어요",
    "expressions_028": "맞아요", "food_084": "배불러요", "food_085": "배고파요", "food_086": "목말라요",
    "food_092": "계산해 주세요.", "food_094": "저는 …… 알레르기가 있어요.",
    "shopping_067": "택스 리펀드가 되나요?", "shopping_068": "조금 깎아 주실 수 있나요?",
    "shopping_069": "그냥 둘러보고 있어요.", "shopping_070": "이걸로 할게요.",
    "directions_032": "……은/는 어디에 있어요?", "directions_033": "……으로 가 주세요.",
    "directions_034": "……에 가고 싶어요.", "directions_035": "걸어서 몇 분 걸려요?", "directions_037": "길을 잃었어요.",
    "directions_038": "지금 여기가 어디예요?", "directions_039": "지도에서 가리켜 주세요.",
    "emergency_035": "지갑을 도난당했어요.", "emergency_037": "경찰을 불러 주세요.",
    "emergency_039": "몸이 안 좋아요.", "emergency_040": "아파요.", "emergency_041": "저는 …… 알레르기가 있어요.",
    "expressions_014": "알겠습니다", "expressions_015": "이해하지 못했어요", "expressions_022": "좋아해요",
    "expressions_023": "좋아하지 않아요", "expressions_029": "아니에요", "expressions_030": "제 이름은 ……이에요.",
    "expressions_031": "이름이 뭐예요?", "expressions_032": "저는 중국 사람이에요.",
    "expressions_036": "무슨 뜻이에요?", "expressions_039": "얼마예요?", "expressions_040": "어디예요?",
    "expressions_041": "언제예요?", "expressions_042": "왜요?", "expressions_044": "돼요?", "expressions_045": "네, 돼요.",
    "expressions_046": "안 돼요.", "expressions_047": "중국어로 된 것이 있나요?",
    "en_transport_phrase_014": "KTX는 어떻게 이용하면 돼요?",
}

KO_EXAMPLE_OVERRIDES = {
    "airport_016": ("我星期五离开韩国。", "저는 금요일에 한국을 떠나요."),
    "airport_017": ("我在仁川有两个小时转机。", "인천에서 두 시간 동안 환승해요."),
    "airport_035": ("这趟火车去釜山吗？", "이 기차는 부산에 가나요?"),
    "airport_039": ("去首尔的列车从哪个站台发车？", "서울행 기차는 어느 승강장에서 출발하나요?"),
    "airport_041": ("我想买一张去庆州的单程票。", "경주행 편도 승차권 한 장 주세요."),
    "shopping_006": ("这个价格包含增值税吗？", "이 가격에 부가세가 포함되어 있나요?"),
    "numbers_018": ("今天还有去釜山的航班吗？", "오늘 부산행 항공편이 있나요?"),
    "emergency_008": ("在韩国，这种药需要处方吗？", "한국에서 이 약을 사려면 처방전이 필요한가요?"),
}

# The English reference pack contains mechanically expanded “ask about X” rows.
# They are understandable, but a literal Korean translation sounds like UI copy
# instead of something a traveler would actually say. Keep the useful concept
# while rewriting those rows into polite, conversational Korean.
GENERIC_PHRASE_PREFIXES = (
    "Where can I ask about ",
    "I need help with ",
    "Could you check the details for ",
    "What should I do next about ",
    "Could you tell me about ",
    "Please check the details for ",
)

BASIC_PHRASE_OVERRIDES = {
    "en_basics_phrase_001": ("你好。", "안녕하세요."),
    "en_basics_phrase_002": ("早上好。", "좋은 아침이에요."),
    "en_basics_phrase_003": ("晚上好。", "좋은 저녁이에요."),
    "en_basics_phrase_004": ("谢谢。", "감사합니다."),
    "en_basics_phrase_005": ("非常感谢。", "정말 감사합니다."),
    "en_basics_phrase_006": ("不客气。", "별말씀을요."),
    "en_basics_phrase_007": ("拜托了。", "부탁드립니다."),
    "en_basics_phrase_008": ("一共七个人。", "일곱 명이에요."),
    "en_basics_phrase_009": ("请给我八个。", "여덟 개 주세요."),
    "en_basics_phrase_010": ("现在九点。", "아홉 시예요."),
    "en_basics_phrase_011": ("请给我十张。", "열 장 주세요."),
    "en_basics_phrase_012": ("我不会说韩语。", "한국어를 못해요."),
    "en_basics_phrase_013": ("请用中文写下来。", "중국어로 적어 주세요."),
    "en_basics_phrase_014": ("是一万韩元吗？", "만 원이에요?"),
    "en_basics_phrase_015": ("这个金额用韩语怎么说？", "이 금액을 한국어로 어떻게 말해요?"),
    "en_basics_phrase_016": ("可以兑换美元吗？", "미국 달러를 환전할 수 있어요?"),
    "en_basics_phrase_017": ("可以兑换人民币吗？", "중국 위안을 환전할 수 있어요?"),
    "en_basics_phrase_018": ("是零韩元吗？", "영 원이에요?"),
    "en_basics_phrase_019": ("一个人。", "한 명이에요."),
    "en_basics_phrase_020": ("请给我两个。", "두 개 주세요."),
    "en_basics_phrase_021": ("是今天。", "오늘이에요."),
    "en_basics_phrase_022": ("是明天。", "내일이에요."),
    "en_basics_phrase_023": ("是昨天。", "어제였어요."),
    "en_basics_phrase_024": ("是后天。", "모레예요."),
    "en_basics_phrase_025": ("对，没错。", "네, 맞아요."),
    "en_basics_phrase_026": ("不是。", "아니요."),
    "en_basics_phrase_027": ("可以。", "괜찮아요."),
    "en_basics_phrase_028": ("我想要这个。", "이걸 원해요."),
    "en_basics_phrase_029": ("我需要帮助。", "도움이 필요해요."),
    "en_basics_phrase_030": ("有空房吗？", "빈방이 있어요?"),
}

SPECIAL_PHRASE_OVERRIDES = {
    "en_hotel_phrase_021": ("有空房吗？", "빈방이 있나요?"),
    "en_hotel_phrase_024": ("请给我一间安静的房间。", "조용한 방으로 부탁드려요."),
    "en_hotel_phrase_025": ("房间太吵了。", "방이 너무 시끄러워요."),
    "en_hotel_phrase_026": ("没有其他空房了吗？", "다른 빈방은 없나요?"),
    "en_shopping_phrase_017": ("这个多少钱？", "이거 얼마예요?"),
    "en_shopping_phrase_018": ("这个有点贵。", "이거 조금 비싸요."),
    "en_shopping_phrase_019": ("有更便宜的吗？", "좀 더 싼 게 있나요?"),
    "en_shopping_phrase_006": ("有哪些尺寸？", "어떤 사이즈가 있어요?"),
    "en_shopping_phrase_007": ("有大号吗？", "큰 사이즈가 있어요?"),
    "en_shopping_phrase_008": ("有中号吗？", "중간 사이즈가 있어요?"),
    "en_shopping_phrase_009": ("有小号吗？", "작은 사이즈가 있어요?"),
    "en_shopping_phrase_010": ("可以帮我确认尺寸吗？", "사이즈를 확인해 주시겠어요?"),
    "en_shopping_phrase_011": ("试衣间在哪里？", "피팅룸이 어디예요?"),
    "en_shopping_phrase_012": ("可以试穿吗？", "입어봐도 돼요?"),
    "en_shopping_phrase_013": ("这里是试衣间吗？", "여기가 피팅룸이에요?"),
    "en_shopping_phrase_014": ("可以试穿这个吗？", "이거 입어봐도 돼요?"),
    "en_shopping_phrase_015": ("请告诉我试衣间在哪里。", "피팅룸이 어디인지 알려 주세요."),
    "en_directions_phrase_011": ("离这里远吗？", "여기서 멀어요?"),
    "en_directions_phrase_012": ("在附近吗？", "가까이에 있어요?"),
    "en_directions_phrase_013": ("需要走很远吗？", "많이 걸어야 해요?"),
    "en_directions_phrase_014": ("很近吗？", "아주 가까워요?"),
    "en_directions_phrase_015": ("目的地离这里远吗？", "목적지가 여기서 멀어요?"),
    "en_directions_phrase_016": ("目的地在附近吗？", "목적지가 가까이에 있어요?"),
    "en_directions_phrase_017": ("步行过去远吗？", "걸어가기에는 멀어요?"),
    "en_emergency_phrase_013": ("请帮我报警。", "경찰에 신고해 주세요."),
    "en_emergency_phrase_014": ("警察局在哪里？", "경찰서가 어디예요?"),
    "en_emergency_phrase_015": ("我需要警察的帮助。", "경찰의 도움이 필요해요."),
    "en_emergency_phrase_016": ("请叫警察。", "경찰을 불러 주세요."),
    "en_emergency_phrase_024": ("请叫救护车。", "구급차를 불러 주세요."),
}


def subject_particle(value: str) -> str:
    for character in reversed(value):
        codepoint = ord(character)
        if 0xAC00 <= codepoint <= 0xD7A3:
            return "은" if (codepoint - 0xAC00) % 28 else "는"
    return "는"


def object_particle(value: str) -> str:
    for character in reversed(value):
        codepoint = ord(character)
        if 0xAC00 <= codepoint <= 0xD7A3:
            return "을" if (codepoint - 0xAC00) % 28 else "를"
    return "를"


def rewrite_generic_phrase(source_text: str, term_ko: dict[str, str], term_zh: dict[str, str]):
    for index, prefix in enumerate(GENERIC_PHRASE_PREFIXES):
        if not source_text.startswith(prefix):
            continue
        term = source_text[len(prefix):].rstrip(".?")
        ko = term_ko.get(term)
        zh = term_zh.get(term)
        if not ko or not zh:
            return None
        ko_templates = (
            f"{ko}{subject_particle(ko)} 어디에 있어요?",
            f"{ko} 관련해서 도움이 필요해요.",
            f"{ko}{object_particle(ko)} 확인해 주시겠어요?",
            f"{ko}에 대해 문의하고 싶어요.",
            f"{ko}에 대해 알려 주세요.",
            f"{ko}{object_particle(ko)} 확인해 주세요.",
        )
        zh_templates = (
            f"请问在哪里咨询“{zh}”？",
            f"我需要关于“{zh}”的帮助。",
            f"可以帮我确认“{zh}”的相关信息吗？",
            f"我想咨询“{zh}”。",
            f"可以告诉我“{zh}”的相关信息吗？",
            f"请帮我确认“{zh}”的相关信息。",
        )
        return zh_templates[index], ko_templates[index]
    return None


EMERGENCY = {
    "title": "긴급 연락 카드",
    "notice": "긴급 상황에서 의사소통할 때만 사용해 주세요.",
    "foreignNameLabel": "护照拼音或韩文姓名",
    "unknownBloodType": "모름",
    "labels": {
        "name": "이름", "nationality": "국적", "birthDate": "생년월일", "bloodType": "혈액형",
        "documentNumber": "여권·신분증 번호", "emergencyContact": "비상 연락처",
        "emergencyPhone": "전화번호", "allergies": "알레르기", "conditions": "질환·병력",
    },
    "dictionaries": {
        "nationalities": [
            {"code": "cn", "zh": "中国", "target": "중국"}, {"code": "jp", "zh": "日本", "target": "일본"},
            {"code": "kr", "zh": "韩国", "target": "대한민국"}, {"code": "sg", "zh": "新加坡", "target": "싱가포르"},
            {"code": "my", "zh": "马来西亚", "target": "말레이시아"}, {"code": "us", "zh": "美国", "target": "미국"},
            {"code": "gb", "zh": "英国", "target": "영국"}, {"code": "ca", "zh": "加拿大", "target": "캐나다"},
            {"code": "au", "zh": "澳大利亚", "target": "호주"}, {"code": "fr", "zh": "法国", "target": "프랑스"},
            {"code": "de", "zh": "德国", "target": "독일"}, {"code": "es", "zh": "西班牙", "target": "스페인"},
            {"code": "it", "zh": "意大利", "target": "이탈리아"}, {"code": "other", "zh": "其他", "target": "기타"},
        ],
        "allergies": [
            {"code": "none", "zh": "无", "target": "없음"}, {"code": "penicillin", "zh": "青霉素", "target": "페니실린"},
            {"code": "cephalosporin", "zh": "头孢菌素", "target": "세팔로스포린"}, {"code": "sulfonamides", "zh": "磺胺类", "target": "설폰아미드"},
            {"code": "nsaids", "zh": "阿司匹林/NSAIDs", "target": "아스피린·비스테로이드성 소염진통제"},
            {"code": "peanuts", "zh": "花生", "target": "땅콩"}, {"code": "nuts", "zh": "坚果", "target": "견과류"},
            {"code": "shellfish", "zh": "海鲜/甲壳类", "target": "해산물·갑각류"}, {"code": "milk", "zh": "牛奶", "target": "우유"},
            {"code": "eggs", "zh": "鸡蛋", "target": "달걀"}, {"code": "gluten", "zh": "小麦/麸质", "target": "밀·글루텐"},
            {"code": "soy", "zh": "大豆", "target": "대두"}, {"code": "latex", "zh": "乳胶", "target": "라텍스"},
            {"code": "insect", "zh": "昆虫蜇伤", "target": "곤충 쏘임"},
        ],
        "conditions": [
            {"code": "none", "zh": "无", "target": "없음"}, {"code": "diabetes", "zh": "糖尿病", "target": "당뇨병"},
            {"code": "hypertension", "zh": "高血压", "target": "고혈압"}, {"code": "heart", "zh": "心脏病", "target": "심장 질환"},
            {"code": "asthma", "zh": "哮喘", "target": "천식"}, {"code": "epilepsy", "zh": "癫痫", "target": "뇌전증"},
            {"code": "kidney", "zh": "肾脏疾病", "target": "신장 질환"},
            {"code": "anticoagulants", "zh": "正在服用抗凝药", "target": "항응고제 복용 중"},
            {"code": "pregnancy", "zh": "怀孕", "target": "임신 중"},
        ],
    },
}


def parse_pack() -> dict:
    source = SOURCE.read_text(encoding="utf-8-sig")
    match = re.search(r"window\.registerContentPack\((\{[\s\S]*\})\);\s*\}\)\(\);\s*$", source)
    if not match:
        raise RuntimeError("Unable to parse us-en content pack")
    return json.loads(match.group(1))


def load_cache() -> dict[str, str]:
    if not CACHE.exists():
        return {}
    return json.loads(CACHE.read_text(encoding="utf-8"))


def save_cache(cache: dict[str, str]) -> None:
    CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def translate_batch(lines: list[str]) -> list[str]:
    query = "\n".join(lines)
    url = "https://clients5.google.com/translate_a/t?" + urllib.parse.urlencode({
        "client": "dict-chrome-ex", "sl": "en", "tl": "ko", "q": query,
    })
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=60) as response:
        payload = json.loads(response.read().decode("utf-8"))
    translated = payload[0].split("\n")
    if len(translated) != len(lines):
        raise RuntimeError(f"Translation batch mismatch: {len(lines)} -> {len(translated)}")
    return translated


def translate_all(values: list[str], cache: dict[str, str]) -> None:
    pending = list(dict.fromkeys(value for value in values if value not in cache))
    while pending:
        batch: list[str] = []
        length = 0
        while pending and len(batch) < 36 and length + len(pending[0]) < 1800:
            item = pending.pop(0)
            batch.append(item)
            length += len(item) + 1
        translated = translate_batch(batch)
        cache.update(zip(batch, translated))
        save_cache(cache)
        print(f"Translated {len(cache)} unique strings; {len(pending)} remaining")
        time.sleep(0.35)


def main() -> None:
    source = parse_pack()
    prepared = []
    all_text: list[str] = []
    for entry in source["entries"]:
        item = json.loads(json.dumps(entry))
        override = OVERRIDES.get(item["id"])
        if override:
            if len(override) == 4:
                item["zh"], item["text"], example_zh, example_text = override
                if item.get("example"):
                    item["example"]["zh"], item["example"]["text"] = example_zh, example_text
            else:
                item["zh"], item["text"] = override
        all_text.append(item["text"])
        if item.get("example") and item["id"] not in TARGETED_EXAMPLES:
            all_text.append(item["example"]["text"])
        prepared.append(item)

    cache = load_cache()
    translate_all(all_text, cache)

    term_ko = {}
    term_zh = {}
    for entry in prepared:
        if entry["id"].startswith("en_"):
            continue
        term_ko[entry["text"]] = KO_TEXT_OVERRIDES.get(entry["id"], cache[entry["text"]])
        term_zh[entry["text"]] = entry["zh"]

    output_entries = []
    for item in prepared:
        old_id = item["id"]
        source_text = item["text"]
        item["id"] = re.sub(r"^en_", "ko_", old_id)
        item["text"] = cache[item["text"]]
        item["text"] = KO_TEXT_OVERRIDES.get(old_id, item["text"])
        if old_id in BASIC_PHRASE_OVERRIDES:
            item["zh"], item["text"] = BASIC_PHRASE_OVERRIDES[old_id]
        elif old_id in SPECIAL_PHRASE_OVERRIDES:
            item["zh"], item["text"] = SPECIAL_PHRASE_OVERRIDES[old_id]
        elif old_id.startswith("en_") and old_id not in OVERRIDES:
            rewrite = rewrite_generic_phrase(source_text, term_ko, term_zh)
            if rewrite:
                item["zh"], item["text"] = rewrite
        item["pronunciation"] = romanize(item["text"], casing="lower")
        item.pop("audioPath", None)
        if item.get("example"):
            item["example"]["id"] = f"kr-ko_{item['id']}_example"
            if old_id in TARGETED_EXAMPLES:
                item["example"]["text"] = TARGETED_EXAMPLES[old_id][5]
            else:
                item["example"]["text"] = cache[item["example"]["text"]]
            if old_id in KO_EXAMPLE_OVERRIDES and old_id not in TARGETED_EXAMPLES:
                item["example"]["zh"], item["example"]["text"] = KO_EXAMPLE_OVERRIDES[old_id]
            item["example"]["pronunciation"] = romanize(item["example"]["text"], casing="lower")
        output_entries.append(item)

    pack = {
        "id": "kr-ko", "destinationId": "kr", "locale": "ko-KR", "speechLocale": "ko-KR",
        "languageCode": "ko", "languageLabel": "韩语", "nativeLabel": "한국어", "pronunciationLabel": "罗马字",
        "features": {"beginnerModule": "kr-ko-beginner", "beginnerAudioBase": "audio/ko/beginner", "emergencyCard": EMERGENCY},
        "scenes": source["scenes"], "entries": output_entries,
    }
    expected_examples = 160 + len(TARGETED_EXAMPLES)
    if len(output_entries) != 795 or sum(bool(item.get("example")) for item in output_entries) != expected_examples:
        raise RuntimeError("Unexpected Korean pack size")
    output = '(function () {\n  "use strict";\n  window.registerContentPack(' + json.dumps(pack, ensure_ascii=False, indent=2) + ');\n})();\n'
    OUTPUT.write_text(output, encoding="utf-8")
    print(f"Wrote {OUTPUT}: 795 entries, {expected_examples} examples")


if __name__ == "__main__":
    main()
