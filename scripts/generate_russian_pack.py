#!/usr/bin/env python3
"""Build the Russian travel pack from the English reference pack.

Translations are cached so regeneration is deterministic. High-risk and
Russia-specific expressions are reviewed below instead of trusting a generic
translation for emergency, transport and survival language.
"""

from __future__ import annotations

import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "languages" / "us-en" / "pack.js"
CACHE = ROOT / "scripts" / "russian_translation_cache.json"
OUTPUT = ROOT / "languages" / "ru-ru" / "pack.js"


OVERRIDES = {
    "airport_015": ("入境", "въезд в страну"),
    "airport_036": ("机场快线", "Аэроэкспресс"),
    "airport_038": ("火车站", "вокзал"),
    "airport_041": ("单程票", "билет в одну сторону"),
    "airport_042": ("往返票", "билет туда и обратно"),
    "airport_043": ("车票", "билет"),
    "airport_046": ("检票口", "турникет"),
    "airport_068": ("随身携带", "взять с собой"),
    "airport_069": ("托运", "сдать в багаж"),
    "hotel_002": ("小型酒店", "мини-отель"),
    "hotel_014": ("房卡", "ключ-карта"),
    "hotel_015": ("行李员", "носильщик"),
    "hotel_055": ("押金", "залог"),
    "food_045": ("罗宋汤", "борщ"),
    "food_017": ("俄式薄饼", "блины"),
    "food_018": ("俄式饺子", "пельмени"),
    "food_019": ("奶渣饼", "сырники"),
    "food_020": ("烤肉串", "шашлык"),
    "food_021": ("冷杂拌汤", "окрошка"),
    "food_022": ("俄式馅饼", "пирожки"),
    "food_023": ("卷心菜汤", "щи"),
    "food_066": ("账单", "счёт"),
    "food_067": ("收银台", "касса"),
    "food_073": ("堂食", "здесь"),
    "shopping_013": ("现金", "наличные"),
    "shopping_014": ("信用卡", "кредитная карта"),
    "shopping_017": ("付款", "оплата"),
    "directions_030": ("地铁站", "станция метро"),
    "emergency_001": ("救命 / 请帮帮我", "Помогите!"),
    "emergency_002": ("紧急情况", "экстренная ситуация"),
    "emergency_003": ("报警", "вызвать полицию"),
    "emergency_004": ("叫救护车", "вызвать скорую помощь"),
    "emergency_034": ("我的护照丢了。", "Я потерял паспорт."),
    "emergency_036": ("我需要帮助。", "Мне нужна помощь."),
    "emergency_037": ("请叫警察。", "Вызовите полицию, пожалуйста."),
    "emergency_038": ("请叫救护车。", "Вызовите скорую, пожалуйста."),
    "emergency_039": ("我不舒服。", "Мне плохо."),
    "emergency_041": ("我对药物过敏。", "У меня аллергия на лекарства."),
    "emergency_042": ("药店在哪里？", "Где находится аптека?"),
    "expressions_004": ("请 / 请给我", "Пожалуйста"),
    "expressions_005": ("不好意思 / 对不起", "Извините"),
    "expressions_008": ("早上好", "Доброе утро"),
    "expressions_012": ("晚安", "Спокойной ночи"),
    "expressions_013": ("欢迎光临", "Добро пожаловать"),
    "numbers_015": ("卢布", "рубль"),
    "expressions_014": ("我明白了。", "Я понимаю."),
    "expressions_015": ("我不明白。", "Я не понимаю."),
    "expressions_033": ("您会说英语吗？", "Вы говорите по-английски?"),
    "expressions_034": ("请说慢一点。", "Говорите, пожалуйста, помедленнее."),
    "expressions_035": ("请再说一遍。", "Повторите, пожалуйста."),
    "expressions_039": ("多少钱？", "Сколько это стоит?"),
    "expressions_040": ("在哪里？", "Где это?"),
}

PHRASE_OVERRIDES = {
    "en_airport_phrase_001": ("我需要填写入境卡吗？", "Мне нужно заполнить миграционную карту?"),
    "en_airport_phrase_015": ("这是安检队伍吗？", "Это очередь на досмотр?"),
    "en_airport_phrase_027": ("机场快线在哪里乘坐？", "Где можно сесть на Аэроэкспресс?"),
    "en_transport_phrase_001": ("在哪里可以买交通卡？", "Где можно купить транспортную карту?"),
    "en_transport_phrase_002": ("这里可以买“三套车”卡吗？", "Здесь можно купить карту «Тройка»?"),
    "en_transport_phrase_003": ("去圣彼得堡的列车从哪个站台出发？", "С какой платформы отправляется поезд в Санкт-Петербург?"),
    "en_transport_phrase_005": ("请给我一张去喀山的单程票。", "Один билет в одну сторону до Казани, пожалуйста."),
    "en_transport_phrase_011": ("这是去火车站的站台吗？", "Это платформа для поезда до вокзала?"),
    "en_transport_phrase_022": ("换乘需要重新买票吗？", "При пересадке нужно покупать новый билет?"),
    "en_hotel_phrase_002": ("我用这个名字订了房。", "У меня бронь на это имя."),
    "en_hotel_phrase_028": ("退房后可以寄存行李吗？", "Можно оставить багаж после выезда?"),
    "en_food_phrase_001": ("请问有两个人的桌位吗？", "У вас есть столик на двоих?"),
    "en_food_phrase_005": ("有带图片的菜单吗？", "У вас есть меню с фотографиями?"),
    "en_food_phrase_008": ("请推荐一道本地菜。", "Посоветуйте, пожалуйста, местное блюдо."),
    "en_food_phrase_014": ("请不要放辣。", "Пожалуйста, не остро."),
    "en_food_phrase_027": ("这里需要给小费吗？", "Здесь принято оставлять чаевые?"),
    "en_shopping_phrase_017": ("这件商品有折扣吗？", "На этот товар есть скидка?"),
    "en_shopping_phrase_020": ("标价包含增值税吗？", "НДС включён в цену?"),
    "en_shopping_phrase_023": ("可以用现金付款吗？", "Можно оплатить наличными?"),
    "en_shopping_phrase_024": ("可以用银行卡付款吗？", "Можно оплатить банковской картой?"),
    "en_directions_phrase_005": ("最近的地铁站在哪里？", "Где ближайшая станция метро?"),
    "en_directions_phrase_018": ("可以在地图上标出来吗？", "Покажите, пожалуйста, на карте."),
    "en_emergency_phrase_012": ("请帮我拨打112。", "Позвоните, пожалуйста, по номеру 112."),
    "en_emergency_phrase_013": ("请帮我拨打报警电话。", "Помогите позвонить в полицию, пожалуйста."),
    "en_emergency_phrase_022": ("请帮我拨打103叫救护车。", "Позвоните, пожалуйста, по номеру 103 и вызовите скорую."),
    "en_basics_phrase_012": ("我不会说俄语。", "Я не говорю по-русски."),
    "en_basics_phrase_013": ("请写下来。", "Напишите, пожалуйста."),
    "en_basics_phrase_015": ("这个金额用俄语怎么说？", "Как сказать эту сумму по-русски?"),
    "en_basics_phrase_016": ("在哪里可以兑换外币？", "Где можно обменять валюту?"),
    "en_basics_phrase_017": ("可以兑换人民币吗？", "Можно обменять китайские юани?"),
    "en_basics_phrase_018": ("手续费是零卢布。", "Комиссия составляет ноль рублей."),
    "en_basics_phrase_021": ("今天是星期几？", "Какой сегодня день недели?"),
    "en_basics_phrase_022": ("我们明天去喀山。", "Завтра мы едем в Казань."),
}

EXAMPLE_OVERRIDES = {
    "airport_001": ("您好，这是我的护照。", "Здравствуйте, вот мой паспорт."),
    "airport_003": ("我已经在网上订好机票。", "У меня уже есть электронный авиабилет."),
    "airport_006": ("这个行李箱重十九公斤。", "Этот чемодан весит девятнадцать килограммов."),
    "airport_013": ("安检时请取出笔记本电脑。", "На досмотре достаньте ноутбук, пожалуйста."),
    "airport_015": ("您这次入境的目的是什么？", "Какова цель вашей поездки?"),
    "airport_016": ("我星期五离开俄罗斯。", "Я уезжаю из России в пятницу."),
    "airport_017": ("我在莫斯科有两个小时转机。", "У меня двухчасовая пересадка в Москве."),
    "airport_035": ("这趟火车去圣彼得堡吗？", "Этот поезд идёт в Санкт-Петербург?"),
    "airport_036": ("机场快线去谢列梅捷沃机场吗？", "Этот Аэроэкспресс идёт в аэропорт Шереметьево?"),
    "airport_039": ("去圣彼得堡的火车从哪个站台发车？", "С какой платформы отправляется поезд в Санкт-Петербург?"),
    "airport_041": ("我想买一张去喀山的单程票。", "Мне нужен билет в одну сторону до Казани."),
    "airport_043": ("我可以在车上买票吗？", "Можно купить билет в поезде?"),
    "airport_068": ("这瓶水可以随身带上飞机吗？", "Можно взять эту бутылку воды в салон?"),
    "airport_069": ("我想托运这个行李箱。", "Я хочу сдать этот чемодан в багаж."),
    "hotel_002": ("我们预订了一家市中心的小型酒店。", "Мы забронировали мини-отель в центре города."),
    "hotel_005": ("我用这个名字订了房。", "У меня бронь на это имя."),
    "hotel_011": ("我预订的是一间大床房。", "У меня забронирован номер с двуспальной кроватью."),
    "hotel_013": ("钥匙落在房间里了。", "Ключ остался в номере."),
    "hotel_047": ("请安排明早六点的叫醒服务。", "Разбудите меня завтра в шесть утра, пожалуйста."),
    "hotel_078": ("我想续住一晚，还有空房吗？", "Можно продлить проживание ещё на одну ночь? Есть свободный номер?"),
    "food_009": ("请给我一杯加燕麦奶的咖啡。", "Кофе с овсяным молоком, пожалуйста."),
    "food_013": ("请给我一杯佐餐红酒。", "Бокал красного вина, пожалуйста."),
    "food_017": ("请给我一份配酸奶油的俄式薄饼。", "Блины со сметаной, пожалуйста."),
    "food_018": ("请给我一份俄式饺子。", "Пельмени, пожалуйста."),
    "food_019": ("早餐有奶渣饼吗？", "У вас есть сырники на завтрак?"),
    "food_020": ("这份烤肉串是羊肉的吗？", "Этот шашлык из баранины?"),
    "food_014": ("这个可以把薯条换成米饭吗？", "Можно заменить картофель фри рисом?"),
    "food_016": ("这些面条可以做得不辣吗？", "Можно приготовить эту лапшу неострой?"),
    "food_075": ("这道菜不太合口味，可以换一道吗？", "Мне не подходит это блюдо. Можно его заменить?"),
    "food_078": ("这道菜很辣吗？我不能吃太辣。", "Это блюдо острое? Мне нельзя очень острое."),
    "food_087": ("我对花生过敏，这道菜含花生吗？", "У меня аллергия на арахис. В этом блюде есть арахис?"),
    "food_088": ("我不吃肉和鱼，这道菜可以吗？", "Я не ем мясо и рыбу. Мне подходит это блюдо?"),
    "shopping_021": ("我想先试穿这件外套，再决定买不买。", "Можно примерить это пальто?"),
    "shopping_016": ("您有五千卢布的零钱吗？", "У вас есть сдача с пяти тысяч рублей?"),
    "numbers_012": ("这张钞票是一百卢布。", "Это купюра в сто рублей."),
    "numbers_013": ("交通卡里还有一千卢布。", "На транспортной карте осталась тысяча рублей."),
    "numbers_015": ("这家店只收卢布。", "В этом магазине принимают только рубли."),
    "numbers_016": ("可以把美元兑换成卢布吗？", "Можно обменять доллары на рубли?"),
    "numbers_017": ("我在哪里可以兑换人民币？", "Где можно обменять китайские юани?"),
    "numbers_018": ("今天还有去喀山的航班吗？", "Сегодня ещё есть рейсы в Казань?"),
    "numbers_019": ("我想预订明天上午的行程。", "Можно забронировать поездку на завтра утром?"),
    "emergency_008": ("在俄罗斯，这种药需要处方吗？", "В России это лекарство продаётся по рецепту?"),
    "emergency_034": ("我的护照丢了。", "У меня пропал паспорт."),
    "expressions_016": ("是的，我订了两晚。", "Да, у меня бронь на две ночи."),
}

CYRILLIC = {
    "а":"a","б":"b","в":"v","г":"g","д":"d","е":"ye","ё":"yo","ж":"zh","з":"z",
    "и":"i","й":"y","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r",
    "с":"s","т":"t","у":"u","ф":"f","х":"kh","ц":"ts","ч":"ch","ш":"sh","щ":"shch",
    "ъ":"","ы":"y","ь":"","э":"e","ю":"yu","я":"ya",
}


def transliterate(text: str) -> str:
    result = []
    for char in text:
        lower = char.lower()
        value = CYRILLIC.get(lower, char)
        if char.isupper() and value:
            value = value[0].upper() + value[1:]
        result.append(value)
    return "".join(result)


EMERGENCY = {
    "title": "Экстренная медицинская карточка",
    "notice": "Только для передачи важной информации в экстренной ситуации.",
    "foreignNameLabel": "护照拼音姓名",
    "unknownBloodType": "Неизвестно",
    "labels": {
        "name": "Имя", "nationality": "Гражданство", "birthDate": "Дата рождения",
        "bloodType": "Группа крови", "documentNumber": "Номер паспорта / документа",
        "emergencyContact": "Контакт для экстренной связи", "emergencyPhone": "Телефон",
        "allergies": "Аллергии", "conditions": "Заболевания / анамнез",
    },
    "dictionaries": {
        "nationalities": [
            {"code":"cn","zh":"中国","target":"Китай"},{"code":"jp","zh":"日本","target":"Япония"},
            {"code":"kr","zh":"韩国","target":"Республика Корея"},{"code":"sg","zh":"新加坡","target":"Сингапур"},
            {"code":"my","zh":"马来西亚","target":"Малайзия"},{"code":"us","zh":"美国","target":"США"},
            {"code":"gb","zh":"英国","target":"Великобритания"},{"code":"ca","zh":"加拿大","target":"Канада"},
            {"code":"au","zh":"澳大利亚","target":"Австралия"},{"code":"fr","zh":"法国","target":"Франция"},
            {"code":"de","zh":"德国","target":"Германия"},{"code":"es","zh":"西班牙","target":"Испания"},
            {"code":"it","zh":"意大利","target":"Италия"},{"code":"other","zh":"其他","target":"Другое"},
        ],
        "allergies": [
            {"code":"none","zh":"无","target":"Нет"},{"code":"penicillin","zh":"青霉素","target":"Пенициллин"},
            {"code":"cephalosporin","zh":"头孢菌素","target":"Цефалоспорины"},{"code":"sulfonamides","zh":"磺胺类","target":"Сульфаниламиды"},
            {"code":"nsaids","zh":"阿司匹林/NSAIDs","target":"Аспирин / НПВС"},{"code":"peanuts","zh":"花生","target":"Арахис"},
            {"code":"nuts","zh":"坚果","target":"Орехи"},{"code":"shellfish","zh":"海鲜/甲壳类","target":"Морепродукты / ракообразные"},
            {"code":"milk","zh":"牛奶","target":"Молоко"},{"code":"eggs","zh":"鸡蛋","target":"Яйца"},
            {"code":"gluten","zh":"小麦/麸质","target":"Пшеница / глютен"},{"code":"soy","zh":"大豆","target":"Соя"},
            {"code":"latex","zh":"乳胶","target":"Латекс"},{"code":"insect","zh":"昆虫蜇伤","target":"Укусы насекомых"},
        ],
        "conditions": [
            {"code":"none","zh":"无","target":"Нет"},{"code":"diabetes","zh":"糖尿病","target":"Диабет"},
            {"code":"hypertension","zh":"高血压","target":"Гипертония"},{"code":"heart","zh":"心脏病","target":"Заболевание сердца"},
            {"code":"asthma","zh":"哮喘","target":"Астма"},{"code":"epilepsy","zh":"癫痫","target":"Эпилепсия"},
            {"code":"kidney","zh":"肾脏疾病","target":"Заболевание почек"},{"code":"anticoagulants","zh":"正在服用抗凝药","target":"Принимает антикоагулянты"},
            {"code":"pregnancy","zh":"怀孕","target":"Беременность"},
        ],
    },
}


def parse_pack() -> dict:
    source = SOURCE.read_text(encoding="utf-8-sig")
    match = re.search(r"window\.registerContentPack\((\{[\s\S]*\})\);\s*\}\)\(\);\s*$", source)
    if not match:
        raise RuntimeError("Unable to parse us-en content pack")
    return json.loads(match.group(1))


def translate_batch(lines: list[str]) -> list[str]:
    query = "\n".join(lines)
    url = "https://translate.googleapis.com/translate_a/single?" + urllib.parse.urlencode({
        "client": "gtx", "sl": "en", "tl": "ru", "dt": "t", "q": query,
    })
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    last_error = None
    for attempt in range(8):
        try:
            with urllib.request.urlopen(request, timeout=20) as response:
                payload = json.loads(response.read().decode("utf-8"))
            break
        except Exception as error:
            last_error = error
            time.sleep(1.5 * (attempt + 1))
    else:
        raise RuntimeError(f"Translation failed after retries: {last_error}")
    translated = "".join(part[0] for part in payload[0] if part and part[0]).split("\n")
    if len(translated) != len(lines):
        raise RuntimeError(f"Translation batch mismatch: {len(lines)} -> {len(translated)}")
    return translated


def translate_all(values: list[str], cache: dict[str, str]) -> None:
    pending = list(dict.fromkeys(value for value in values if value not in cache))
    while pending:
        batch, length = [], 0
        while pending and len(batch) < 10 and length + len(pending[0]) < 600:
            item = pending.pop(0)
            batch.append(item)
            length += len(item) + 1
        cache.update(zip(batch, translate_batch(batch)))
        CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"Translated {len(cache)} unique strings; {len(pending)} remaining")
        time.sleep(0.35)


def main() -> None:
    source = parse_pack()
    prepared, values = [], []
    for entry in source["entries"]:
        item = json.loads(json.dumps(entry))
        if entry["id"] in OVERRIDES:
            item["zh"], item["text"] = OVERRIDES[entry["id"]]
        elif entry["id"] in PHRASE_OVERRIDES:
            item["zh"], item["text"] = PHRASE_OVERRIDES[entry["id"]]
        if entry["id"] not in OVERRIDES and entry["id"] not in PHRASE_OVERRIDES:
            values.append(item["text"])
        if item.get("example") and entry["id"] not in EXAMPLE_OVERRIDES:
            values.append(item["example"]["text"])
        prepared.append(item)
    cache = json.loads(CACHE.read_text(encoding="utf-8")) if CACHE.exists() else {}
    translate_all(values, cache)
    entries = []
    for item in prepared:
        original_id = item["id"]
        is_reviewed = original_id in OVERRIDES or original_id in PHRASE_OVERRIDES
        item["id"] = re.sub(r"^en_", "ru_", original_id)
        item["text"] = item["text"] if is_reviewed else cache[item["text"]]
        item["pronunciation"] = transliterate(item["text"])
        item["audioPath"] = f"audio/ru/{item['id']}.mp3"
        if item.get("example"):
            item["example"]["id"] = f"ru-ru_{item['id']}_example"
            if original_id in EXAMPLE_OVERRIDES:
                item["example"]["zh"], item["example"]["text"] = EXAMPLE_OVERRIDES[original_id]
            else:
                item["example"]["text"] = cache[item["example"]["text"]]
            item["example"]["pronunciation"] = transliterate(item["example"]["text"])
        entries.append(item)
    pack = {
        "id":"ru-ru", "destinationId":"ru", "locale":"ru-RU", "speechLocale":"ru-RU",
        "languageCode":"ru", "languageLabel":"俄语", "nativeLabel":"Русский", "pronunciationLabel":"拉丁转写",
        "features":{"beginnerModule":"ru-ru-beginner", "beginnerAudioBase":"audio/ru/beginner", "emergencyCard":EMERGENCY},
        "scenes":source["scenes"], "entries":entries,
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    output = '(function () {\n  "use strict";\n  window.registerContentPack(' + json.dumps(pack, ensure_ascii=False, indent=2) + ');\n})();\n'
    OUTPUT.write_text(output, encoding="utf-8")
    print(f"Wrote {OUTPUT}: {len(entries)} entries")


if __name__ == "__main__":
    main()
