(function () {
  "use strict";
  window.registerContentPack({
  "id": "ru-ru",
  "destinationId": "ru",
  "locale": "ru-RU",
  "speechLocale": "ru-RU",
  "languageCode": "ru",
  "languageLabel": "俄语",
  "nativeLabel": "Русский",
  "pronunciationLabel": "拉丁转写",
  "features": {
    "beginnerModule": "ru-ru-beginner",
    "beginnerAudioBase": "audio/ru/beginner",
    "emergencyCard": {
      "title": "Экстренная медицинская карточка",
      "notice": "Только для передачи важной информации в экстренной ситуации.",
      "foreignNameLabel": "护照拼音姓名",
      "unknownBloodType": "Неизвестно",
      "labels": {
        "name": "Имя",
        "nationality": "Гражданство",
        "birthDate": "Дата рождения",
        "bloodType": "Группа крови",
        "documentNumber": "Номер паспорта / документа",
        "emergencyContact": "Контакт для экстренной связи",
        "emergencyPhone": "Телефон",
        "allergies": "Аллергии",
        "conditions": "Заболевания / анамнез"
      },
      "dictionaries": {
        "nationalities": [
          {
            "code": "cn",
            "zh": "中国",
            "target": "Китай"
          },
          {
            "code": "jp",
            "zh": "日本",
            "target": "Япония"
          },
          {
            "code": "kr",
            "zh": "韩国",
            "target": "Республика Корея"
          },
          {
            "code": "sg",
            "zh": "新加坡",
            "target": "Сингапур"
          },
          {
            "code": "my",
            "zh": "马来西亚",
            "target": "Малайзия"
          },
          {
            "code": "us",
            "zh": "美国",
            "target": "США"
          },
          {
            "code": "gb",
            "zh": "英国",
            "target": "Великобритания"
          },
          {
            "code": "ca",
            "zh": "加拿大",
            "target": "Канада"
          },
          {
            "code": "au",
            "zh": "澳大利亚",
            "target": "Австралия"
          },
          {
            "code": "fr",
            "zh": "法国",
            "target": "Франция"
          },
          {
            "code": "de",
            "zh": "德国",
            "target": "Германия"
          },
          {
            "code": "es",
            "zh": "西班牙",
            "target": "Испания"
          },
          {
            "code": "it",
            "zh": "意大利",
            "target": "Италия"
          },
          {
            "code": "other",
            "zh": "其他",
            "target": "Другое"
          }
        ],
        "allergies": [
          {
            "code": "none",
            "zh": "无",
            "target": "Нет"
          },
          {
            "code": "penicillin",
            "zh": "青霉素",
            "target": "Пенициллин"
          },
          {
            "code": "cephalosporin",
            "zh": "头孢菌素",
            "target": "Цефалоспорины"
          },
          {
            "code": "sulfonamides",
            "zh": "磺胺类",
            "target": "Сульфаниламиды"
          },
          {
            "code": "nsaids",
            "zh": "阿司匹林/NSAIDs",
            "target": "Аспирин / НПВС"
          },
          {
            "code": "peanuts",
            "zh": "花生",
            "target": "Арахис"
          },
          {
            "code": "nuts",
            "zh": "坚果",
            "target": "Орехи"
          },
          {
            "code": "shellfish",
            "zh": "海鲜/甲壳类",
            "target": "Морепродукты / ракообразные"
          },
          {
            "code": "milk",
            "zh": "牛奶",
            "target": "Молоко"
          },
          {
            "code": "eggs",
            "zh": "鸡蛋",
            "target": "Яйца"
          },
          {
            "code": "gluten",
            "zh": "小麦/麸质",
            "target": "Пшеница / глютен"
          },
          {
            "code": "soy",
            "zh": "大豆",
            "target": "Соя"
          },
          {
            "code": "latex",
            "zh": "乳胶",
            "target": "Латекс"
          },
          {
            "code": "insect",
            "zh": "昆虫蜇伤",
            "target": "Укусы насекомых"
          }
        ],
        "conditions": [
          {
            "code": "none",
            "zh": "无",
            "target": "Нет"
          },
          {
            "code": "diabetes",
            "zh": "糖尿病",
            "target": "Диабет"
          },
          {
            "code": "hypertension",
            "zh": "高血压",
            "target": "Гипертония"
          },
          {
            "code": "heart",
            "zh": "心脏病",
            "target": "Заболевание сердца"
          },
          {
            "code": "asthma",
            "zh": "哮喘",
            "target": "Астма"
          },
          {
            "code": "epilepsy",
            "zh": "癫痫",
            "target": "Эпилепсия"
          },
          {
            "code": "kidney",
            "zh": "肾脏疾病",
            "target": "Заболевание почек"
          },
          {
            "code": "anticoagulants",
            "zh": "正在服用抗凝药",
            "target": "Принимает антикоагулянты"
          },
          {
            "code": "pregnancy",
            "zh": "怀孕",
            "target": "Беременность"
          }
        ]
      }
    }
  },
  "scenes": [
    {
      "id": "airport",
      "name": "机场",
      "description": "从值机、安检到入境，顺利完成每一段飞行。",
      "homeTopics": [
        "值机",
        "行李",
        "安检",
        "登机"
      ],
      "situations": [
        {
          "id": "documents-flights",
          "name": "证件与航班"
        },
        {
          "id": "check-in",
          "name": "办理值机"
        },
        {
          "id": "baggage",
          "name": "行李托运"
        },
        {
          "id": "security-waiting",
          "name": "安检与候机"
        },
        {
          "id": "boarding-onboard",
          "name": "登机与机上"
        },
        {
          "id": "arrival-immigration",
          "name": "到达与入境"
        }
      ]
    },
    {
      "id": "transport",
      "name": "交通",
      "description": "买票、换乘、打车和租车，找到适合自己的路线。",
      "homeTopics": [
        "车票",
        "地铁",
        "火车",
        "出租车"
      ],
      "situations": [
        {
          "id": "tickets-stations",
          "name": "车票与车站"
        },
        {
          "id": "bus-metro",
          "name": "公交与地铁"
        },
        {
          "id": "rail",
          "name": "火车出行"
        },
        {
          "id": "taxi",
          "name": "出租车"
        },
        {
          "id": "transfer",
          "name": "换乘"
        },
        {
          "id": "rental-driving",
          "name": "租车与驾驶"
        }
      ]
    },
    {
      "id": "hotel",
      "name": "酒店",
      "description": "完成预订、入住、提出需求和退房。",
      "homeTopics": [
        "预订",
        "入住",
        "房间",
        "退房"
      ],
      "situations": [
        {
          "id": "reservation",
          "name": "预订"
        },
        {
          "id": "hotel-check-in",
          "name": "办理入住"
        },
        {
          "id": "room-facilities",
          "name": "房间设施"
        },
        {
          "id": "hotel-requests",
          "name": "提出需求"
        },
        {
          "id": "hotel-problems",
          "name": "问题处理"
        },
        {
          "id": "checkout-storage",
          "name": "退房与寄存"
        }
      ]
    },
    {
      "id": "food",
      "name": "餐厅",
      "description": "从进店、点餐到结账，表达清楚自己的需要。",
      "homeTopics": [
        "等位",
        "菜单",
        "点餐",
        "结账"
      ],
      "situations": [
        {
          "id": "enter-wait",
          "name": "进入与等位"
        },
        {
          "id": "menu",
          "name": "查看菜单"
        },
        {
          "id": "ordering",
          "name": "点餐"
        },
        {
          "id": "taste-diet",
          "name": "口味与忌口"
        },
        {
          "id": "dining-requests",
          "name": "用餐需求"
        },
        {
          "id": "food-confirm",
          "name": "询问与确认"
        },
        {
          "id": "food-checkout",
          "name": "结账"
        }
      ]
    },
    {
      "id": "shopping",
      "name": "购物",
      "description": "找商品、问价格、试用并完成支付或退税。",
      "homeTopics": [
        "找商品",
        "尺码",
        "试用",
        "支付"
      ],
      "situations": [
        {
          "id": "find-products",
          "name": "寻找商品"
        },
        {
          "id": "size-color",
          "name": "颜色与尺码"
        },
        {
          "id": "try-products",
          "name": "试穿试用"
        },
        {
          "id": "price-discount",
          "name": "价格与优惠"
        },
        {
          "id": "payment",
          "name": "支付"
        },
        {
          "id": "return-tax",
          "name": "退换与退税"
        }
      ]
    },
    {
      "id": "directions",
      "name": "问路",
      "description": "确认位置、看懂方向，并在听不清时继续沟通。",
      "homeTopics": [
        "位置",
        "路线",
        "距离",
        "地标"
      ],
      "situations": [
        {
          "id": "location-direction",
          "name": "位置与方向"
        },
        {
          "id": "ask-route",
          "name": "询问路线"
        },
        {
          "id": "distance-time",
          "name": "距离与时间"
        },
        {
          "id": "map-landmarks",
          "name": "地图与地标"
        },
        {
          "id": "understand-route",
          "name": "听懂与确认"
        }
      ]
    },
    {
      "id": "emergency",
      "name": "紧急求助",
      "description": "身体不适、物品遗失或遇到危险时及时求助。",
      "homeTopics": [
        "身体不适",
        "药店",
        "报警",
        "失物"
      ],
      "situations": [
        {
          "id": "feeling-unwell",
          "name": "身体不适"
        },
        {
          "id": "doctor-pharmacy",
          "name": "看病与药店"
        },
        {
          "id": "police-help",
          "name": "报警求助"
        },
        {
          "id": "lost-stolen",
          "name": "丢失与被盗"
        },
        {
          "id": "danger-accident",
          "name": "危险与事故"
        },
        {
          "id": "emergency-contact",
          "name": "紧急联络"
        }
      ]
    },
    {
      "id": "basics",
      "name": "基础交流",
      "description": "先掌握问候、数字、时间和最常用的沟通方式。",
      "homeTopics": [
        "问候",
        "礼貌",
        "数字",
        "时间"
      ],
      "situations": [
        {
          "id": "greetings",
          "name": "问候与告别"
        },
        {
          "id": "courtesy",
          "name": "礼貌表达"
        },
        {
          "id": "introductions",
          "name": "自我介绍"
        },
        {
          "id": "language-help",
          "name": "听不懂与语言求助"
        },
        {
          "id": "numbers-quantity",
          "name": "数字与数量"
        },
        {
          "id": "time-date",
          "name": "时间与日期"
        },
        {
          "id": "basic-confirm",
          "name": "询问与确认"
        }
      ]
    }
  ],
  "entries": [
    {
      "id": "airport_001",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照",
      "text": "паспорт",
      "audioPath": "audio/ru/airport_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_001_example",
        "zh": "您好，这是我的护照。",
        "text": "Здравствуйте, вот мой паспорт.",
        "pronunciation": "Zdravstvuytye, vot moy pasport."
      },
      "pronunciation": "pasport"
    },
    {
      "id": "airport_002",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "签证",
      "text": "виза",
      "audioPath": "audio/ru/airport_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_002_example",
        "zh": "这次旅行需要签证吗？",
        "text": "Нужна ли мне виза для этой поездки?",
        "pronunciation": "Nuzhna li mnye viza dlya etoy poyezdki?"
      },
      "pronunciation": "viza"
    },
    {
      "id": "airport_003",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "机票",
      "text": "авиабилет",
      "audioPath": "audio/ru/airport_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_003_example",
        "zh": "我已经在网上订好机票。",
        "text": "У меня уже есть электронный авиабилет.",
        "pronunciation": "U myenya uzhye yest elyektronnyy aviabilyet."
      },
      "pronunciation": "aviabilyet"
    },
    {
      "id": "airport_004",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "登机牌",
      "text": "посадочный талон",
      "audioPath": "audio/ru/airport_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_004_example",
        "zh": "您的登机牌在手机上。",
        "text": "Посадочный талон у вас в телефоне.",
        "pronunciation": "Posadochnyy talon u vas v tyelyefonye."
      },
      "pronunciation": "posadochnyy talon"
    },
    {
      "id": "airport_005",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李",
      "text": "багаж",
      "audioPath": "audio/ru/airport_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_005_example",
        "zh": "我的行李还没到。",
        "text": "Мой багаж не прибыл.",
        "pronunciation": "Moy bagazh nye pribyl."
      },
      "pronunciation": "bagazh"
    },
    {
      "id": "airport_006",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李箱",
      "text": "чемодан",
      "audioPath": "audio/ru/airport_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_006_example",
        "zh": "这个行李箱重十九公斤。",
        "text": "Этот чемодан весит девятнадцать килограммов.",
        "pronunciation": "Etot chyemodan vyesit dyevyatnadtsat kilogrammov."
      },
      "pronunciation": "chyemodan"
    },
    {
      "id": "airport_007",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "手提行李",
      "text": "ручная кладь",
      "audioPath": "audio/ru/airport_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_007_example",
        "zh": "每位乘客可以带一件手提行李。",
        "text": "Каждый пассажир может взять с собой одну ручную кладь.",
        "pronunciation": "Kazhdyy passazhir mozhyet vzyat s soboy odnu ruchnuyu klad."
      },
      "pronunciation": "ruchnaya klad"
    },
    {
      "id": "airport_008",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "机场",
      "text": "аэропорт",
      "audioPath": "audio/ru/airport_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_008_example",
        "zh": "从机场到市中心需要多久？",
        "text": "Сколько времени занимает дорога до центра города из аэропорта?",
        "pronunciation": "Skolko vryemyeni zanimayet doroga do tsyentra goroda iz aeroporta?"
      },
      "pronunciation": "aeroport"
    },
    {
      "id": "airport_009",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航站楼",
      "text": "терминал",
      "audioPath": "audio/ru/airport_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_009_example",
        "zh": "您的航班从四号航站楼出发。",
        "text": "Ваш рейс отправляется из Терминала 4.",
        "pronunciation": "Vash ryeys otpravlyayetsya iz Tyerminala 4."
      },
      "pronunciation": "tyerminal"
    },
    {
      "id": "airport_010",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "出发",
      "text": "отъезд",
      "audioPath": "audio/ru/airport_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_010_example",
        "zh": "出发时间是下午三点二十分。",
        "text": "Выезд запланирован на 15:20.",
        "pronunciation": "Vyyezd zaplanirovan na 15:20."
      },
      "pronunciation": "otyezd"
    },
    {
      "id": "airport_011",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "到达",
      "text": "прибытие",
      "audioPath": "audio/ru/airport_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_011_example",
        "zh": "我们预计晚上七点四十五分到达。",
        "text": "Время нашего прибытия — 19:45.",
        "pronunciation": "Vryemya nashyego pribytiya — 19:45."
      },
      "pronunciation": "pribytiye"
    },
    {
      "id": "airport_012",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机口",
      "text": "выход на посадку",
      "audioPath": "audio/ru/airport_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_012_example",
        "zh": "登机口改到 B12 了。",
        "text": "Выход на посадку изменился на B12.",
        "pronunciation": "Vykhod na posadku izmyenilsya na B12."
      },
      "pronunciation": "vykhod na posadku"
    },
    {
      "id": "airport_013",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "安检",
      "text": "проверка безопасности",
      "audioPath": "audio/ru/airport_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_013_example",
        "zh": "安检时请取出笔记本电脑。",
        "text": "На досмотре достаньте ноутбук, пожалуйста.",
        "pronunciation": "Na dosmotrye dostantye noutbuk, pozhaluysta."
      },
      "pronunciation": "provyerka byezopasnosti"
    },
    {
      "id": "airport_014",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "海关",
      "text": "таможня",
      "audioPath": "audio/ru/airport_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_014_example",
        "zh": "这个需要在海关申报吗？",
        "text": "Нужно ли мне это декларировать на таможне?",
        "pronunciation": "Nuzhno li mnye eto dyeklarirovat na tamozhnye?"
      },
      "pronunciation": "tamozhnya"
    },
    {
      "id": "airport_015",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境",
      "text": "въезд в страну",
      "audioPath": "audio/ru/airport_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_015_example",
        "zh": "您这次入境的目的是什么？",
        "text": "Какова цель вашей поездки?",
        "pronunciation": "Kakova tsyel vashyey poyezdki?"
      },
      "pronunciation": "vyezd v stranu"
    },
    {
      "id": "airport_016",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "出境",
      "text": "выезд из страны",
      "audioPath": "audio/ru/airport_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_016_example",
        "zh": "我星期五离开俄罗斯。",
        "text": "Я уезжаю из России в пятницу.",
        "pronunciation": "Ya uyezzhayu iz Rossii v pyatnitsu."
      },
      "pronunciation": "vyyezd iz strany"
    },
    {
      "id": "airport_017",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "转机",
      "text": "трансфер",
      "audioPath": "audio/ru/airport_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_017_example",
        "zh": "我在莫斯科有两个小时转机。",
        "text": "У меня двухчасовая пересадка в Москве.",
        "pronunciation": "U myenya dvukhchasovaya pyeryesadka v Moskvye."
      },
      "pronunciation": "transfyer"
    },
    {
      "id": "airport_018",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航班",
      "text": "полет",
      "audioPath": "audio/ru/airport_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_018_example",
        "zh": "这个航班准点吗？",
        "text": "Этот рейс вовремя?",
        "pronunciation": "Etot ryeys vovryemya?"
      },
      "pronunciation": "polyet"
    },
    {
      "id": "airport_019",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "延误",
      "text": "задержка",
      "audioPath": "audio/ru/airport_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_019_example",
        "zh": "航班延误了四十五分钟。",
        "text": "Задержка сорок пять минут.",
        "pronunciation": "Zadyerzhka sorok pyat minut."
      },
      "pronunciation": "zadyerzhka"
    },
    {
      "id": "airport_020",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "取消",
      "text": "отмена",
      "audioPath": "audio/ru/airport_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_020_example",
        "zh": "航班取消后我可以退款吗？",
        "text": "Могу ли я получить возмещение из-за отмены?",
        "pronunciation": "Mogu li ya poluchit vozmyeshchyeniye iz-za otmyeny?"
      },
      "pronunciation": "otmyena"
    },
    {
      "id": "airport_021",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "值机",
      "text": "регистрация",
      "audioPath": "audio/ru/airport_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_021_example",
        "zh": "这个航班几点开始值机？",
        "text": "Во сколько открывается регистрация на этот рейс?",
        "pronunciation": "Vo skolko otkryvayetsya ryegistratsiya na etot ryeys?"
      },
      "pronunciation": "ryegistratsiya"
    },
    {
      "id": "airport_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机",
      "text": "посадка",
      "audioPath": "audio/ru/airport_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_022_example",
        "zh": "我们这趟航班已经开始登机了吗？",
        "text": "Посадка на наш рейс уже началась?",
        "pronunciation": "Posadka na nash ryeys uzhye nachalas?"
      },
      "pronunciation": "posadka"
    },
    {
      "id": "airport_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "起飞",
      "text": "взлет",
      "audioPath": "audio/ru/airport_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_023_example",
        "zh": "这架飞机预计几点起飞？",
        "text": "В какое время ожидается вылет этого самолета?",
        "pronunciation": "V kakoye vryemya ozhidayetsya vylyet etogo samolyeta?"
      },
      "pronunciation": "vzlyet"
    },
    {
      "id": "airport_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "降落",
      "text": "приземление",
      "audioPath": "audio/ru/airport_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_024_example",
        "zh": "由于天气原因，飞机会晚些降落。",
        "text": "Из-за погоды самолет приземлится позже.",
        "pronunciation": "Iz-za pogody samolyet prizyemlitsya pozzhye."
      },
      "pronunciation": "prizyemlyeniye"
    },
    {
      "id": "airport_025",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "座位",
      "text": "сиденье",
      "audioPath": "audio/ru/airport_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sidyenye"
    },
    {
      "id": "airport_026",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠窗座位",
      "text": "сиденье у окна",
      "audioPath": "audio/ru/airport_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sidyenye u okna"
    },
    {
      "id": "airport_027",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "过道座位",
      "text": "место у прохода",
      "audioPath": "audio/ru/airport_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "myesto u prokhoda"
    },
    {
      "id": "airport_028",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李领取处",
      "text": "выдача багажа",
      "audioPath": "audio/ru/airport_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vydacha bagazha"
    },
    {
      "id": "airport_029",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李推车",
      "text": "тележка для багажа",
      "audioPath": "audio/ru/airport_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tyelyezhka dlya bagazha"
    },
    {
      "id": "airport_030",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照查验",
      "text": "паспортный контроль",
      "audioPath": "audio/ru/airport_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pasportnyy kontrol"
    },
    {
      "id": "airport_031",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "免税店",
      "text": "магазин беспошлинной торговли",
      "audioPath": "audio/ru/airport_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "magazin byesposhlinnoy torgovli"
    },
    {
      "id": "airport_032",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "机场大巴",
      "text": "автобус из аэропорта",
      "audioPath": "audio/ru/airport_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_032_example",
        "zh": "机场大巴每三十分钟一班。",
        "text": "Автобус до аэропорта ходит каждые тридцать минут.",
        "pronunciation": "Avtobus do aeroporta khodit kazhdyye tridtsat minut."
      },
      "pronunciation": "avtobus iz aeroporta"
    },
    {
      "id": "airport_033",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "word",
      "zh": "出租车",
      "text": "такси",
      "audioPath": "audio/ru/airport_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_033_example",
        "zh": "请帮我叫一辆出租车。",
        "text": "Не могли бы вы вызвать мне такси?",
        "pronunciation": "Nye mogli by vy vyzvat mnye taksi?"
      },
      "pronunciation": "taksi"
    },
    {
      "id": "airport_034",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "地铁",
      "text": "метро",
      "audioPath": "audio/ru/airport_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_034_example",
        "zh": "坐地铁去市中心最快。",
        "text": "Метро – самый быстрый способ добраться до центра города.",
        "pronunciation": "Myetro – samyy bystryy sposob dobratsya do tsyentra goroda."
      },
      "pronunciation": "myetro"
    },
    {
      "id": "airport_035",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "火车",
      "text": "поезд",
      "audioPath": "audio/ru/airport_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_035_example",
        "zh": "这趟火车去圣彼得堡吗？",
        "text": "Этот поезд идёт в Санкт-Петербург?",
        "pronunciation": "Etot poyezd idyot v Sankt-Pyetyerburg?"
      },
      "pronunciation": "poyezd"
    },
    {
      "id": "airport_036",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "机场快线",
      "text": "Аэроэкспресс",
      "audioPath": "audio/ru/airport_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_036_example",
        "zh": "机场快线去谢列梅捷沃机场吗？",
        "text": "Этот Аэроэкспресс идёт в аэропорт Шереметьево?",
        "pronunciation": "Etot Aeroekspryess idyot v aeroport Shyeryemyetyevo?"
      },
      "pronunciation": "Aeroekspryess"
    },
    {
      "id": "airport_037",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "公交车",
      "text": "автобус",
      "audioPath": "audio/ru/airport_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_037_example",
        "zh": "这辆公交车在博物馆停吗？",
        "text": "Этот автобус останавливается у музея?",
        "pronunciation": "Etot avtobus ostanavlivayetsya u muzyeya?"
      },
      "pronunciation": "avtobus"
    },
    {
      "id": "airport_038",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "火车站",
      "text": "вокзал",
      "audioPath": "audio/ru/airport_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_038_example",
        "zh": "最近的车站在哪里？",
        "text": "Где ближайшая станция?",
        "pronunciation": "Gdye blizhayshaya stantsiya?"
      },
      "pronunciation": "vokzal"
    },
    {
      "id": "airport_039",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "站台",
      "text": "платформа",
      "audioPath": "audio/ru/airport_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_039_example",
        "zh": "去圣彼得堡的火车从哪个站台发车？",
        "text": "С какой платформы отправляется поезд в Санкт-Петербург?",
        "pronunciation": "S kakoy platformy otpravlyayetsya poyezd v Sankt-Pyetyerburg?"
      },
      "pronunciation": "platforma"
    },
    {
      "id": "airport_040",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "时刻表",
      "text": "расписание",
      "audioPath": "audio/ru/airport_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_040_example",
        "zh": "周末的时刻表不一样。",
        "text": "Расписание выходных другое.",
        "pronunciation": "Raspisaniye vykhodnykh drugoye."
      },
      "pronunciation": "raspisaniye"
    },
    {
      "id": "airport_041",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "单程票",
      "text": "билет в одну сторону",
      "audioPath": "audio/ru/airport_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_041_example",
        "zh": "我想买一张去喀山的单程票。",
        "text": "Мне нужен билет в одну сторону до Казани.",
        "pronunciation": "Mnye nuzhyen bilyet v odnu storonu do Kazani."
      },
      "pronunciation": "bilyet v odnu storonu"
    },
    {
      "id": "airport_042",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "往返票",
      "text": "билет туда и обратно",
      "audioPath": "audio/ru/airport_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_042_example",
        "zh": "一张当天往返票多少钱？",
        "text": "Сколько стоит билет туда и обратно в тот же день?",
        "pronunciation": "Skolko stoit bilyet tuda i obratno v tot zhye dyen?"
      },
      "pronunciation": "bilyet tuda i obratno"
    },
    {
      "id": "airport_043",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "车票",
      "text": "билет",
      "audioPath": "audio/ru/airport_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_043_example",
        "zh": "我可以在车上买票吗？",
        "text": "Можно купить билет в поезде?",
        "pronunciation": "Mozhno kupit bilyet v poyezdye?"
      },
      "pronunciation": "bilyet"
    },
    {
      "id": "airport_044",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "售票处",
      "text": "билетная касса",
      "audioPath": "audio/ru/airport_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_044_example",
        "zh": "售票处晚上八点关门。",
        "text": "Касса закрывается в восемь.",
        "pronunciation": "Kassa zakryvayetsya v vosyem."
      },
      "pronunciation": "bilyetnaya kassa"
    },
    {
      "id": "airport_045",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "自动售票机",
      "text": "билетный автомат",
      "audioPath": "audio/ru/airport_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_045_example",
        "zh": "这台自动售票机可以刷卡吗？",
        "text": "Этот билетный автомат принимает карты?",
        "pronunciation": "Etot bilyetnyy avtomat prinimayet karty?"
      },
      "pronunciation": "bilyetnyy avtomat"
    },
    {
      "id": "airport_046",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "检票口",
      "text": "турникет",
      "audioPath": "audio/ru/airport_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_046_example",
        "zh": "请在检票口轻触您的卡。",
        "text": "Прикоснитесь к своей карте у билетных ворот.",
        "pronunciation": "Prikosnityes k svoyey kartye u bilyetnykh vorot."
      },
      "pronunciation": "turnikyet"
    },
    {
      "id": "airport_047",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "入口",
      "text": "вход",
      "audioPath": "audio/ru/airport_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_047_example",
        "zh": "主入口在街角。",
        "text": "Главный вход находится на углу.",
        "pronunciation": "Glavnyy vkhod nakhoditsya na uglu."
      },
      "pronunciation": "vkhod"
    },
    {
      "id": "airport_048",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "出口",
      "text": "выход",
      "audioPath": "audio/ru/airport_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_048_example",
        "zh": "请从下一个出口出去。",
        "text": "Возьмите следующий выход.",
        "pronunciation": "Vozmitye slyeduyushchiy vykhod."
      },
      "pronunciation": "vykhod"
    },
    {
      "id": "airport_049",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "问讯处",
      "text": "информационная стойка",
      "audioPath": "audio/ru/airport_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_049_example",
        "zh": "您可以到问讯处领取线路图。",
        "text": "Схему маршрута можно получить на стойке информации.",
        "pronunciation": "Skhyemu marshruta mozhno poluchit na stoykye informatsii."
      },
      "pronunciation": "informatsionnaya stoyka"
    },
    {
      "id": "airport_050",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "地图",
      "text": "карта",
      "audioPath": "audio/ru/airport_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_050_example",
        "zh": "可以在地图上指给我看吗？",
        "text": "Не могли бы вы показать мне на карте?",
        "pronunciation": "Nye mogli by vy pokazat mnye na kartye?"
      },
      "pronunciation": "karta"
    },
    {
      "id": "airport_051",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "目的地",
      "text": "пункт назначения",
      "audioPath": "audio/ru/airport_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_051_example",
        "zh": "请输入您的目的地。",
        "text": "Введите пункт назначения, пожалуйста.",
        "pronunciation": "Vvyeditye punkt naznachyeniya, pozhaluysta."
      },
      "pronunciation": "punkt naznachyeniya"
    },
    {
      "id": "airport_052",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "汽车",
      "text": "машина",
      "audioPath": "audio/ru/airport_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "mashina"
    },
    {
      "id": "airport_053",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "租车",
      "text": "прокат автомобилей",
      "audioPath": "audio/ru/airport_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_053_example",
        "zh": "租车时需要出示什么证件？",
        "text": "Какие документы мне нужны для аренды автомобиля?",
        "pronunciation": "Kakiye dokumyenty mnye nuzhny dlya aryendy avtomobilya?"
      },
      "pronunciation": "prokat avtomobilyey"
    },
    {
      "id": "airport_054",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "加油站",
      "text": "заправочная станция",
      "audioPath": "audio/ru/airport_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "zapravochnaya stantsiya"
    },
    {
      "id": "airport_055",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "停车场",
      "text": "парковка",
      "audioPath": "audio/ru/airport_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "parkovka"
    },
    {
      "id": "airport_056",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "红绿灯",
      "text": "светофор",
      "audioPath": "audio/ru/airport_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "svyetofor"
    },
    {
      "id": "airport_057",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "人行横道",
      "text": "пешеходный переход",
      "audioPath": "audio/ru/airport_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pyeshyekhodnyy pyeryekhod"
    },
    {
      "id": "airport_058",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "自行车",
      "text": "велосипед",
      "audioPath": "audio/ru/airport_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vyelosipyed"
    },
    {
      "id": "airport_059",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "摩托车",
      "text": "мотоцикл",
      "audioPath": "audio/ru/airport_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "mototsikl"
    },
    {
      "id": "airport_060",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "步行",
      "text": "пешком",
      "audioPath": "audio/ru/airport_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_060_example",
        "zh": "从车站步行到酒店要多久？",
        "text": "Сколько времени занимает прогулка от вокзала до отеля?",
        "pronunciation": "Skolko vryemyeni zanimayet progulka ot vokzala do otyelya?"
      },
      "pronunciation": "pyeshkom"
    },
    {
      "id": "airport_061",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "直飞",
      "text": "прямой рейс",
      "audioPath": "audio/ru/airport_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_061_example",
        "zh": "这个航班是直飞，还是需要转机？",
        "text": "Это прямой рейс или мне нужно сделать пересадку?",
        "pronunciation": "Eto pryamoy ryeys ili mnye nuzhno sdyelat pyeryesadku?"
      },
      "pronunciation": "pryamoy ryeys"
    },
    {
      "id": "airport_062",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李寄存",
      "text": "камера хранения багажа",
      "audioPath": "audio/ru/airport_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_062_example",
        "zh": "转机期间，可以把行李寄存在机场吗？",
        "text": "Могу ли я оставить свой багаж в аэропорту во время пересадки?",
        "pronunciation": "Mogu li ya ostavit svoy bagazh v aeroportu vo vryemya pyeryesadki?"
      },
      "pronunciation": "kamyera khranyeniya bagazha"
    },
    {
      "id": "airport_063",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李丢失",
      "text": "потерянный багаж",
      "audioPath": "audio/ru/airport_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_063_example",
        "zh": "我的行李没有到达，我想申报行李丢失。",
        "text": "Мой багаж не прибыл. Мне нужно сообщить о его пропаже.",
        "pronunciation": "Moy bagazh nye pribyl. Mnye nuzhno soobshchit o yego propazhye."
      },
      "pronunciation": "potyeryannyy bagazh"
    },
    {
      "id": "airport_064",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照号码",
      "text": "номер паспорта",
      "audioPath": "audio/ru/airport_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "nomyer pasporta"
    },
    {
      "id": "airport_065",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航班号",
      "text": "номер рейса",
      "audioPath": "audio/ru/airport_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "nomyer ryeysa"
    },
    {
      "id": "airport_066",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "候机室",
      "text": "зал ожидания",
      "audioPath": "audio/ru/airport_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "zal ozhidaniya"
    },
    {
      "id": "airport_067",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机时间",
      "text": "время посадки",
      "audioPath": "audio/ru/airport_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vryemya posadki"
    },
    {
      "id": "airport_068",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "随身携带",
      "text": "взять с собой",
      "audioPath": "audio/ru/airport_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_068_example",
        "zh": "这瓶水可以随身带上飞机吗？",
        "text": "Можно взять эту бутылку воды в салон?",
        "pronunciation": "Mozhno vzyat etu butylku vody v salon?"
      },
      "pronunciation": "vzyat s soboy"
    },
    {
      "id": "airport_069",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "托运",
      "text": "сдать в багаж",
      "audioPath": "audio/ru/airport_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_069_example",
        "zh": "我想托运这个行李箱。",
        "text": "Я хочу сдать этот чемодан в багаж.",
        "pronunciation": "Ya khochu sdat etot chyemodan v bagazh."
      },
      "pronunciation": "sdat v bagazh"
    },
    {
      "id": "airport_070",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李检查",
      "text": "досмотр багажа",
      "audioPath": "audio/ru/airport_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dosmotr bagazha"
    },
    {
      "id": "airport_071",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境卡",
      "text": "карта прибытия",
      "audioPath": "audio/ru/airport_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "karta pribytiya"
    },
    {
      "id": "airport_072",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "海关申报",
      "text": "таможенная декларация",
      "audioPath": "audio/ru/airport_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_072_example",
        "zh": "海关申报单在哪里填写？",
        "text": "Где заполнить форму таможенной декларации?",
        "pronunciation": "Gdye zapolnit formu tamozhyennoy dyeklaratsii?"
      },
      "pronunciation": "tamozhyennaya dyeklaratsiya"
    },
    {
      "id": "airport_073",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "转机柜台",
      "text": "счетчик передачи",
      "audioPath": "audio/ru/airport_073.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "schyetchik pyeryedachi"
    },
    {
      "id": "airport_074",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "安全带",
      "text": "ремень безопасности",
      "audioPath": "audio/ru/airport_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ryemyen byezopasnosti"
    },
    {
      "id": "airport_075",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "空乘",
      "text": "стюардесса",
      "audioPath": "audio/ru/airport_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "styuardyessa"
    },
    {
      "id": "airport_076",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "机长",
      "text": "капитан",
      "audioPath": "audio/ru/airport_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kapitan"
    },
    {
      "id": "airport_077",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机桥",
      "text": "реактивный мостик",
      "audioPath": "audio/ru/airport_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ryeaktivnyy mostik"
    },
    {
      "id": "airport_078",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "跑道",
      "text": "взлетно-посадочная полоса",
      "audioPath": "audio/ru/airport_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vzlyetno-posadochnaya polosa"
    },
    {
      "id": "airport_079",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "签证延期",
      "text": "продление визы",
      "audioPath": "audio/ru/airport_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_079_example",
        "zh": "我的签证快到期了，在哪里申请延期？",
        "text": "Срок действия моей визы истекает. Где я могу подать заявление на продление?",
        "pronunciation": "Srok dyeystviya moyey vizy istyekayet. Gdye ya mogu podat zayavlyeniye na prodlyeniye?"
      },
      "pronunciation": "prodlyeniye vizy"
    },
    {
      "id": "airport_080",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境检查",
      "text": "иммиграционная инспекция",
      "audioPath": "audio/ru/airport_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "immigratsionnaya inspyektsiya"
    },
    {
      "id": "airport_081",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李超重",
      "text": "сверхнормативный багаж",
      "audioPath": "audio/ru/airport_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_airport_081_example",
        "zh": "行李超重了，要付多少费用？",
        "text": "Моя сумка имеет лишний вес. Сколько стоит дополнительная плата?",
        "pronunciation": "Moya sumka imyeyet lishniy vyes. Skolko stoit dopolnityelnaya plata?"
      },
      "pronunciation": "svyerkhnormativnyy bagazh"
    },
    {
      "id": "airport_082",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠窗",
      "text": "сторона окна",
      "audioPath": "audio/ru/airport_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "storona okna"
    },
    {
      "id": "airport_083",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠过道",
      "text": "сторона прохода",
      "audioPath": "audio/ru/airport_083.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "storona prokhoda"
    },
    {
      "id": "airport_084",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "救生衣",
      "text": "спасательный жилет",
      "audioPath": "audio/ru/airport_084.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "spasatyelnyy zhilyet"
    },
    {
      "id": "airport_085",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请问在哪里登机？",
      "text": "Где выход на посадку?",
      "audioPath": "audio/ru/airport_085.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Gdye vykhod na posadku?"
    },
    {
      "id": "airport_086",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "请问在哪里取行李？",
      "text": "Где я могу забрать свой багаж?",
      "audioPath": "audio/ru/airport_086.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Gdye ya mogu zabrat svoy bagazh?"
    },
    {
      "id": "airport_087",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "我想换乘。",
      "text": "Я хочу перевестись.",
      "audioPath": "audio/ru/airport_087.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Ya khochu pyeryevyestis."
    },
    {
      "id": "hotel_001",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "酒店",
      "text": "отель",
      "audioPath": "audio/ru/hotel_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_001_example",
        "zh": "这家酒店含早餐吗？",
        "text": "Включает ли этот отель завтрак?",
        "pronunciation": "Vklyuchayet li etot otyel zavtrak?"
      },
      "pronunciation": "otyel"
    },
    {
      "id": "hotel_002",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "小型酒店",
      "text": "мини-отель",
      "audioPath": "audio/ru/hotel_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_002_example",
        "zh": "我们预订了一家市中心的小型酒店。",
        "text": "Мы забронировали мини-отель в центре города.",
        "pronunciation": "My zabronirovali mini-otyel v tsyentrye goroda."
      },
      "pronunciation": "mini-otyel"
    },
    {
      "id": "hotel_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "民宿",
      "text": "гостевой дом",
      "audioPath": "audio/ru/hotel_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_003_example",
        "zh": "这家民宿有共用厨房。",
        "text": "В этом гостевом доме есть общая кухня.",
        "pronunciation": "V etom gostyevom domye yest obshchaya kukhnya."
      },
      "pronunciation": "gostyevoy dom"
    },
    {
      "id": "hotel_004",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "前台",
      "text": "стойка регистрации",
      "audioPath": "audio/ru/hotel_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_004_example",
        "zh": "您可以在前台领取额外的钥匙。",
        "text": "Дополнительный ключ можно получить на стойке регистрации.",
        "pronunciation": "Dopolnityelnyy klyuch mozhno poluchit na stoykye ryegistratsii."
      },
      "pronunciation": "stoyka ryegistratsii"
    },
    {
      "id": "hotel_005",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "预订",
      "text": "бронирование",
      "audioPath": "audio/ru/hotel_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_005_example",
        "zh": "我用这个名字订了房。",
        "text": "У меня бронь на это имя.",
        "pronunciation": "U myenya bron na eto imya."
      },
      "pronunciation": "bronirovaniye"
    },
    {
      "id": "hotel_006",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "入住",
      "text": "регистрация",
      "audioPath": "audio/ru/hotel_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_006_example",
        "zh": "下午三点可以办理入住。",
        "text": "Регистрация начинается в три часа дня.",
        "pronunciation": "Ryegistratsiya nachinayetsya v tri chasa dnya."
      },
      "pronunciation": "ryegistratsiya"
    },
    {
      "id": "hotel_007",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "退房",
      "text": "выезд",
      "audioPath": "audio/ru/hotel_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_007_example",
        "zh": "最晚几点退房？",
        "text": "Во сколько выезд?",
        "pronunciation": "Vo skolko vyyezd?"
      },
      "pronunciation": "vyyezd"
    },
    {
      "id": "hotel_008",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "房间",
      "text": "комната",
      "audioPath": "audio/ru/hotel_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_008_example",
        "zh": "我的房间还没准备好吗？",
        "text": "Моя комната уже готова?",
        "pronunciation": "Moya komnata uzhye gotova?"
      },
      "pronunciation": "komnata"
    },
    {
      "id": "hotel_009",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "单人房",
      "text": "одноместный номер",
      "audioPath": "audio/ru/hotel_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_009_example",
        "zh": "有安静一点的单人房吗？",
        "text": "У вас есть тихий одноместный номер?",
        "pronunciation": "U vas yest tikhiy odnomyestnyy nomyer?"
      },
      "pronunciation": "odnomyestnyy nomyer"
    },
    {
      "id": "hotel_010",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "双人房",
      "text": "двухместный номер с 2 отдельными кроватями",
      "audioPath": "audio/ru/hotel_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_010_example",
        "zh": "我们想要一间有两张床的双人房。",
        "text": "Нам нужен двухместный номер с двумя кроватями.",
        "pronunciation": "Nam nuzhyen dvukhmyestnyy nomyer s dvumya krovatyami."
      },
      "pronunciation": "dvukhmyestnyy nomyer s 2 otdyelnymi krovatyami"
    },
    {
      "id": "hotel_011",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "大床房",
      "text": "двухместный номер",
      "audioPath": "audio/ru/hotel_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_011_example",
        "zh": "我预订的是一间大床房。",
        "text": "У меня забронирован номер с двуспальной кроватью.",
        "pronunciation": "U myenya zabronirovan nomyer s dvuspalnoy krovatyu."
      },
      "pronunciation": "dvukhmyestnyy nomyer"
    },
    {
      "id": "hotel_012",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "套房",
      "text": "люкс",
      "audioPath": "audio/ru/hotel_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_012_example",
        "zh": "这间套房有独立客厅吗？",
        "text": "В этом люксе есть отдельная гостиная?",
        "pronunciation": "V etom lyuksye yest otdyelnaya gostinaya?"
      },
      "pronunciation": "lyuks"
    },
    {
      "id": "hotel_013",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "钥匙",
      "text": "ключ",
      "audioPath": "audio/ru/hotel_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_013_example",
        "zh": "钥匙落在房间里了。",
        "text": "Ключ остался в номере.",
        "pronunciation": "Klyuch ostalsya v nomyerye."
      },
      "pronunciation": "klyuch"
    },
    {
      "id": "hotel_014",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "房卡",
      "text": "ключ-карта",
      "audioPath": "audio/ru/hotel_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_014_example",
        "zh": "我的房卡打不开门。",
        "text": "Мой ключ от номера не открывает дверь.",
        "pronunciation": "Moy klyuch ot nomyera nye otkryvayet dvyer."
      },
      "pronunciation": "klyuch-karta"
    },
    {
      "id": "hotel_015",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "行李员",
      "text": "носильщик",
      "audioPath": "audio/ru/hotel_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_015_example",
        "zh": "行李员会把您的行李送到楼上。",
        "text": "Сопровождающий принесет ваши сумки наверх.",
        "pronunciation": "Soprovozhdayushchiy prinyesyet vashi sumki navyerkh."
      },
      "pronunciation": "nosilshchik"
    },
    {
      "id": "hotel_016",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "工作人员",
      "text": "персонал",
      "audioPath": "audio/ru/hotel_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_016_example",
        "zh": "工作人员非常热心。",
        "text": "Персонал был очень полезным.",
        "pronunciation": "Pyersonal byl ochyen polyeznym."
      },
      "pronunciation": "pyersonal"
    },
    {
      "id": "hotel_017",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "客房服务",
      "text": "обслуживание номеров",
      "audioPath": "audio/ru/hotel_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_017_example",
        "zh": "客房服务供应到晚上十一点。",
        "text": "Обслуживание номеров доступно до одиннадцати вечера.",
        "pronunciation": "Obsluzhivaniye nomyerov dostupno do odinnadtsati vyechyera."
      },
      "pronunciation": "obsluzhivaniye nomyerov"
    },
    {
      "id": "hotel_018",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "打扫",
      "text": "уборка",
      "audioPath": "audio/ru/hotel_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_018_example",
        "zh": "今天不用打扫房间，谢谢。",
        "text": "Мне сегодня не нужна уборка, спасибо.",
        "pronunciation": "Mnye syegodnya nye nuzhna uborka, spasibo."
      },
      "pronunciation": "uborka"
    },
    {
      "id": "hotel_019",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "毛巾",
      "text": "полотенце",
      "audioPath": "audio/ru/hotel_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_019_example",
        "zh": "可以再送两条毛巾吗？",
        "text": "Не могли бы вы прислать еще два полотенца?",
        "pronunciation": "Nye mogli by vy prislat yeshchye dva polotyentsa?"
      },
      "pronunciation": "polotyentsye"
    },
    {
      "id": "hotel_020",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "床单",
      "text": "простыня",
      "audioPath": "audio/ru/hotel_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_020_example",
        "zh": "床单上有一块污渍。",
        "text": "На простыне пятно.",
        "pronunciation": "Na prostynye pyatno."
      },
      "pronunciation": "prostynya"
    },
    {
      "id": "hotel_021",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "枕头",
      "text": "подушка",
      "audioPath": "audio/ru/hotel_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "podushka"
    },
    {
      "id": "hotel_022",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "被子",
      "text": "футон / пуховое одеяло",
      "audioPath": "audio/ru/hotel_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "futon / pukhovoye odyeyalo"
    },
    {
      "id": "hotel_023",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "毯子",
      "text": "одеяло",
      "audioPath": "audio/ru/hotel_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "odyeyalo"
    },
    {
      "id": "hotel_024",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "空调",
      "text": "кондиционер",
      "audioPath": "audio/ru/hotel_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "konditsionyer"
    },
    {
      "id": "hotel_025",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "暖气",
      "text": "отопление",
      "audioPath": "audio/ru/hotel_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "otoplyeniye"
    },
    {
      "id": "hotel_026",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "浴室",
      "text": "ванная комната",
      "audioPath": "audio/ru/hotel_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vannaya komnata"
    },
    {
      "id": "hotel_027",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "淋浴",
      "text": "душ",
      "audioPath": "audio/ru/hotel_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dush"
    },
    {
      "id": "hotel_028",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "浴缸",
      "text": "ванна",
      "audioPath": "audio/ru/hotel_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vanna"
    },
    {
      "id": "hotel_029",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "热水",
      "text": "горячая вода",
      "audioPath": "audio/ru/hotel_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "goryachaya voda"
    },
    {
      "id": "hotel_030",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "冷水",
      "text": "холодная вода",
      "audioPath": "audio/ru/hotel_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kholodnaya voda"
    },
    {
      "id": "hotel_031",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "卫生间",
      "text": "туалет",
      "audioPath": "audio/ru/hotel_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tualyet"
    },
    {
      "id": "hotel_032",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "卫生纸",
      "text": "туалетная бумага",
      "audioPath": "audio/ru/hotel_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tualyetnaya bumaga"
    },
    {
      "id": "hotel_033",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "洗发水",
      "text": "шампунь",
      "audioPath": "audio/ru/hotel_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "shampun"
    },
    {
      "id": "hotel_034",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "沐浴露",
      "text": "мыло для тела",
      "audioPath": "audio/ru/hotel_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "mylo dlya tyela"
    },
    {
      "id": "hotel_035",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "牙刷",
      "text": "зубная щетка",
      "audioPath": "audio/ru/hotel_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "zubnaya shchyetka"
    },
    {
      "id": "hotel_036",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "牙膏",
      "text": "зубная паста",
      "audioPath": "audio/ru/hotel_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "zubnaya pasta"
    },
    {
      "id": "hotel_037",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "吹风机",
      "text": "фен",
      "audioPath": "audio/ru/hotel_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "fyen"
    },
    {
      "id": "hotel_038",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "插座",
      "text": "выход",
      "audioPath": "audio/ru/hotel_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vykhod"
    },
    {
      "id": "hotel_039",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "转换插头",
      "text": "штепсельный адаптер",
      "audioPath": "audio/ru/hotel_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "shtyepsyelnyy adaptyer"
    },
    {
      "id": "hotel_040",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "无线网络",
      "text": "Wi-Fi",
      "audioPath": "audio/ru/hotel_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "Wi-Fi"
    },
    {
      "id": "hotel_041",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "网络",
      "text": "Интернет",
      "audioPath": "audio/ru/hotel_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "Intyernyet"
    },
    {
      "id": "hotel_042",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "电梯",
      "text": "лифт",
      "audioPath": "audio/ru/hotel_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "lift"
    },
    {
      "id": "hotel_043",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "楼梯",
      "text": "лестница",
      "audioPath": "audio/ru/hotel_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "lyestnitsa"
    },
    {
      "id": "hotel_044",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "大堂",
      "text": "лобби",
      "audioPath": "audio/ru/hotel_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "lobbi"
    },
    {
      "id": "hotel_045",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "餐厅",
      "text": "ресторан",
      "audioPath": "audio/ru/hotel_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ryestoran"
    },
    {
      "id": "hotel_046",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "早餐",
      "text": "завтрак",
      "audioPath": "audio/ru/hotel_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "zavtrak"
    },
    {
      "id": "hotel_047",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "叫醒服务",
      "text": "звонок для пробуждения",
      "audioPath": "audio/ru/hotel_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_047_example",
        "zh": "请安排明早六点的叫醒服务。",
        "text": "Разбудите меня завтра в шесть утра, пожалуйста.",
        "pronunciation": "Razbuditye myenya zavtra v shyest utra, pozhaluysta."
      },
      "pronunciation": "zvonok dlya probuzhdyeniya"
    },
    {
      "id": "hotel_048",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "洗衣服务",
      "text": "услуги прачечной",
      "audioPath": "audio/ru/hotel_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_048_example",
        "zh": "洗衣服务今天送去，明天能取吗？",
        "text": "Если я отправлю это в прачечную сегодня, смогу ли я получить это обратно завтра?",
        "pronunciation": "Yesli ya otpravlyu eto v prachyechnuyu syegodnya, smogu li ya poluchit eto obratno zavtra?"
      },
      "pronunciation": "uslugi prachyechnoy"
    },
    {
      "id": "hotel_049",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "熨斗",
      "text": "железо",
      "audioPath": "audio/ru/hotel_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "zhyelyezo"
    },
    {
      "id": "hotel_050",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "保险箱",
      "text": "сейф",
      "audioPath": "audio/ru/hotel_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "syeyf"
    },
    {
      "id": "hotel_051",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "退房时间",
      "text": "время выезда",
      "audioPath": "audio/ru/hotel_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vryemya vyyezda"
    },
    {
      "id": "hotel_052",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "入住时间",
      "text": "время заезда",
      "audioPath": "audio/ru/hotel_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vryemya zayezda"
    },
    {
      "id": "hotel_053",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "空房",
      "text": "свободная комната",
      "audioPath": "audio/ru/hotel_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_053_example",
        "zh": "今晚还有禁烟的空房吗？",
        "text": "У вас есть свободный номер для некурящих сегодня вечером?",
        "pronunciation": "U vas yest svobodnyy nomyer dlya nyekuryashchikh syegodnya vyechyerom?"
      },
      "pronunciation": "svobodnaya komnata"
    },
    {
      "id": "hotel_054",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "满房",
      "text": "полностью забронировано",
      "audioPath": "audio/ru/hotel_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_054_example",
        "zh": "如果今晚满房，明晚还有房间吗？",
        "text": "Если у вас все забронировано на сегодняшний вечер, будет ли свободен номер завтра вечером?",
        "pronunciation": "Yesli u vas vsye zabronirovano na syegodnyashniy vyechyer, budyet li svobodyen nomyer zavtra vyechyerom?"
      },
      "pronunciation": "polnostyu zabronirovano"
    },
    {
      "id": "hotel_055",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "押金",
      "text": "залог",
      "audioPath": "audio/ru/hotel_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_055_example",
        "zh": "退房后押金什么时候退还？",
        "text": "Когда будет возвращен залог после выезда?",
        "pronunciation": "Kogda budyet vozvrashchyen zalog poslye vyyezda?"
      },
      "pronunciation": "zalog"
    },
    {
      "id": "hotel_056",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "收据",
      "text": "квитанция",
      "audioPath": "audio/ru/hotel_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kvitantsiya"
    },
    {
      "id": "hotel_057",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "账单",
      "text": "счет",
      "audioPath": "audio/ru/hotel_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_057_example",
        "zh": "账单上这笔额外费用是什么？",
        "text": "Какова эта дополнительная плата в моем счете?",
        "pronunciation": "Kakova eta dopolnityelnaya plata v moyem schyetye?"
      },
      "pronunciation": "schyet"
    },
    {
      "id": "hotel_058",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "前台电话",
      "text": "телефон на стойке регистрации",
      "audioPath": "audio/ru/hotel_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tyelyefon na stoykye ryegistratsii"
    },
    {
      "id": "hotel_059",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "烟雾报警器",
      "text": "дымовая сигнализация",
      "audioPath": "audio/ru/hotel_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dymovaya signalizatsiya"
    },
    {
      "id": "hotel_060",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "灭火器",
      "text": "огнетушитель",
      "audioPath": "audio/ru/hotel_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ognyetushityel"
    },
    {
      "id": "hotel_061",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "婴儿床",
      "text": "детская кроватка",
      "audioPath": "audio/ru/hotel_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dyetskaya krovatka"
    },
    {
      "id": "hotel_062",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "加床",
      "text": "дополнительная кровать",
      "audioPath": "audio/ru/hotel_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dopolnityelnaya krovat"
    },
    {
      "id": "hotel_063",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "床垫",
      "text": "матрас",
      "audioPath": "audio/ru/hotel_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "matras"
    },
    {
      "id": "hotel_064",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "冰箱",
      "text": "холодильник",
      "audioPath": "audio/ru/hotel_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kholodilnik"
    },
    {
      "id": "hotel_065",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "微波炉",
      "text": "микроволновая печь",
      "audioPath": "audio/ru/hotel_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "mikrovolnovaya pyech"
    },
    {
      "id": "hotel_066",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "水壶",
      "text": "чайник",
      "audioPath": "audio/ru/hotel_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chaynik"
    },
    {
      "id": "hotel_067",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "杯子",
      "text": "чашка",
      "audioPath": "audio/ru/hotel_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chashka"
    },
    {
      "id": "hotel_068",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "拖鞋",
      "text": "тапочки",
      "audioPath": "audio/ru/hotel_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tapochki"
    },
    {
      "id": "hotel_069",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "衣架",
      "text": "вешалка",
      "audioPath": "audio/ru/hotel_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vyeshalka"
    },
    {
      "id": "hotel_070",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "衣柜",
      "text": "шкаф",
      "audioPath": "audio/ru/hotel_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "shkaf"
    },
    {
      "id": "hotel_071",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "窗帘",
      "text": "занавес",
      "audioPath": "audio/ru/hotel_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "zanavyes"
    },
    {
      "id": "hotel_072",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "阳台",
      "text": "балкон",
      "audioPath": "audio/ru/hotel_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "balkon"
    },
    {
      "id": "hotel_073",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "景色",
      "text": "просмотр",
      "audioPath": "audio/ru/hotel_073.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "prosmotr"
    },
    {
      "id": "hotel_074",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "安静",
      "text": "тихий",
      "audioPath": "audio/ru/hotel_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_074_example",
        "zh": "我想要一间比较安静的房间。",
        "text": "Можно мне комнату потише?",
        "pronunciation": "Mozhno mnye komnatu potishye?"
      },
      "pronunciation": "tikhiy"
    },
    {
      "id": "hotel_075",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "吵闹",
      "text": "шумный",
      "audioPath": "audio/ru/hotel_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_075_example",
        "zh": "隔壁房间太吵了，可以换房吗？",
        "text": "В соседней комнате слишком шумно. Могу ли я поменять комнату?",
        "pronunciation": "V sosyednyey komnatye slishkom shumno. Mogu li ya pomyenyat komnatu?"
      },
      "pronunciation": "shumnyy"
    },
    {
      "id": "hotel_076",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "舒适",
      "text": "удобный",
      "audioPath": "audio/ru/hotel_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_076_example",
        "zh": "这张床睡着不太舒适。",
        "text": "На этой кровати не очень удобно спать.",
        "pronunciation": "Na etoy krovati nye ochyen udobno spat."
      },
      "pronunciation": "udobnyy"
    },
    {
      "id": "hotel_077",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "房间号",
      "text": "номер комнаты",
      "audioPath": "audio/ru/hotel_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "nomyer komnaty"
    },
    {
      "id": "hotel_078",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "续住",
      "text": "продлить пребывание",
      "audioPath": "audio/ru/hotel_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_hotel_078_example",
        "zh": "我想续住一晚，还有空房吗？",
        "text": "Можно продлить проживание ещё на одну ночь? Есть свободный номер?",
        "pronunciation": "Mozhno prodlit prozhivaniye yeshchyo na odnu noch? Yest svobodnyy nomyer?"
      },
      "pronunciation": "prodlit pryebyvaniye"
    },
    {
      "id": "hotel_079",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我把钥匙弄丢了。",
      "text": "Я потерял ключ.",
      "audioPath": "audio/ru/hotel_079.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Ya potyeryal klyuch."
    },
    {
      "id": "hotel_080",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "可以寄存行李吗？",
      "text": "Могу ли я оставить свой багаж?",
      "audioPath": "audio/ru/hotel_080.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Mogu li ya ostavit svoy bagazh?"
    },
    {
      "id": "hotel_081",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "请问几点退房？",
      "text": "В какое время выезд?",
      "audioPath": "audio/ru/hotel_081.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "V kakoye vryemya vyyezd?"
    },
    {
      "id": "hotel_082",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "可以换个房间吗？",
      "text": "Могу ли я поменять номер?",
      "audioPath": "audio/ru/hotel_082.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Mogu li ya pomyenyat nomyer?"
    },
    {
      "id": "food_001",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "早餐",
      "text": "завтрак",
      "audioPath": "audio/ru/food_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_001_example",
        "zh": "早餐供应到几点？",
        "text": "Во сколько заканчивается завтрак?",
        "pronunciation": "Vo skolko zakanchivayetsya zavtrak?"
      },
      "pronunciation": "zavtrak"
    },
    {
      "id": "food_002",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "午餐",
      "text": "обед",
      "audioPath": "audio/ru/food_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_002_example",
        "zh": "午餐有套餐吗？",
        "text": "У вас есть специальный обед?",
        "pronunciation": "U vas yest spyetsialnyy obyed?"
      },
      "pronunciation": "obyed"
    },
    {
      "id": "food_003",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "晚餐",
      "text": "ужин",
      "audioPath": "audio/ru/food_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_003_example",
        "zh": "今晚两位用餐，有空桌吗？",
        "text": "У вас есть столик на двоих на ужин сегодня вечером?",
        "pronunciation": "U vas yest stolik na dvoikh na uzhin syegodnya vyechyerom?"
      },
      "pronunciation": "uzhin"
    },
    {
      "id": "food_004",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "菜单",
      "text": "меню",
      "audioPath": "audio/ru/food_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_004_example",
        "zh": "可以给我一份菜单吗？",
        "text": "Могу ли я увидеть меню, пожалуйста?",
        "pronunciation": "Mogu li ya uvidyet myenyu, pozhaluysta?"
      },
      "pronunciation": "myenyu"
    },
    {
      "id": "food_005",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "点菜",
      "text": "заказать",
      "audioPath": "audio/ru/food_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_005_example",
        "zh": "我们可以点餐了吗？",
        "text": "Мы готовы сделать заказ.",
        "pronunciation": "My gotovy sdyelat zakaz."
      },
      "pronunciation": "zakazat"
    },
    {
      "id": "food_006",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "水",
      "text": "вода",
      "audioPath": "audio/ru/food_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_006_example",
        "zh": "请给我一杯不加冰的水。",
        "text": "Можно ли мне воду без льда?",
        "pronunciation": "Mozhno li mnye vodu byez lda?"
      },
      "pronunciation": "voda"
    },
    {
      "id": "food_007",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "热水",
      "text": "горячая вода",
      "audioPath": "audio/ru/food_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_007_example",
        "zh": "可以给我一些热水吗？",
        "text": "Можно мне немного горячей воды?",
        "pronunciation": "Mozhno mnye nyemnogo goryachyey vody?"
      },
      "pronunciation": "goryachaya voda"
    },
    {
      "id": "food_008",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "茶",
      "text": "чай",
      "audioPath": "audio/ru/food_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_008_example",
        "zh": "您有不含咖啡因的茶吗？",
        "text": "У вас есть чай без кофеина?",
        "pronunciation": "U vas yest chay byez kofyeina?"
      },
      "pronunciation": "chay"
    },
    {
      "id": "food_009",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "咖啡",
      "text": "кофе",
      "audioPath": "audio/ru/food_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_009_example",
        "zh": "请给我一杯加燕麦奶的咖啡。",
        "text": "Кофе с овсяным молоком, пожалуйста.",
        "pronunciation": "Kofye s ovsyanym molokom, pozhaluysta."
      },
      "pronunciation": "kofye"
    },
    {
      "id": "food_010",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "牛奶",
      "text": "молоко",
      "audioPath": "audio/ru/food_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_010_example",
        "zh": "这个酱汁里有牛奶吗？",
        "text": "Есть ли в этом соусе молоко?",
        "pronunciation": "Yest li v etom sousye moloko?"
      },
      "pronunciation": "moloko"
    },
    {
      "id": "food_011",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "果汁",
      "text": "сок",
      "audioPath": "audio/ru/food_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_011_example",
        "zh": "请给孩子一杯小杯苹果汁。",
        "text": "Маленький яблочный сок для ребенка, пожалуйста.",
        "pronunciation": "Malyenkiy yablochnyy sok dlya ryebyenka, pozhaluysta."
      },
      "pronunciation": "sok"
    },
    {
      "id": "food_012",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "啤酒",
      "text": "пиво",
      "audioPath": "audio/ru/food_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_012_example",
        "zh": "你们有本地精酿啤酒吗？",
        "text": "У вас есть местное крафтовое пиво?",
        "pronunciation": "U vas yest myestnoye kraftovoye pivo?"
      },
      "pronunciation": "pivo"
    },
    {
      "id": "food_013",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "红酒",
      "text": "вино",
      "audioPath": "audio/ru/food_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_013_example",
        "zh": "请给我一杯佐餐红酒。",
        "text": "Бокал красного вина, пожалуйста.",
        "pronunciation": "Bokal krasnogo vina, pozhaluysta."
      },
      "pronunciation": "vino"
    },
    {
      "id": "food_014",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "米饭",
      "text": "рис",
      "audioPath": "audio/ru/food_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_014_example",
        "zh": "这个可以把薯条换成米饭吗？",
        "text": "Можно заменить картофель фри рисом?",
        "pronunciation": "Mozhno zamyenit kartofyel fri risom?"
      },
      "pronunciation": "ris"
    },
    {
      "id": "food_015",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "面包",
      "text": "хлеб",
      "audioPath": "audio/ru/food_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_015_example",
        "zh": "面包可以免费续吗？",
        "text": "Бесплатно ли добавление хлеба?",
        "pronunciation": "Byesplatno li dobavlyeniye khlyeba?"
      },
      "pronunciation": "khlyeb"
    },
    {
      "id": "food_016",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "面条",
      "text": "лапша",
      "audioPath": "audio/ru/food_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_016_example",
        "zh": "这些面条可以做得不辣吗？",
        "text": "Можно приготовить эту лапшу неострой?",
        "pronunciation": "Mozhno prigotovit etu lapshu nyeostroy?"
      },
      "pronunciation": "lapsha"
    },
    {
      "id": "food_017",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "俄式薄饼",
      "text": "блины",
      "audioPath": "audio/ru/food_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_017_example",
        "zh": "请给我一份配酸奶油的俄式薄饼。",
        "text": "Блины со сметаной, пожалуйста.",
        "pronunciation": "Bliny so smyetanoy, pozhaluysta."
      },
      "pronunciation": "bliny"
    },
    {
      "id": "food_018",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "俄式饺子",
      "text": "пельмени",
      "audioPath": "audio/ru/food_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_018_example",
        "zh": "请给我一份俄式饺子。",
        "text": "Пельмени, пожалуйста.",
        "pronunciation": "Pyelmyeni, pozhaluysta."
      },
      "pronunciation": "pyelmyeni"
    },
    {
      "id": "food_019",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "奶渣饼",
      "text": "сырники",
      "audioPath": "audio/ru/food_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_019_example",
        "zh": "早餐有奶渣饼吗？",
        "text": "У вас есть сырники на завтрак?",
        "pronunciation": "U vas yest syrniki na zavtrak?"
      },
      "pronunciation": "syrniki"
    },
    {
      "id": "food_020",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "烤肉串",
      "text": "шашлык",
      "audioPath": "audio/ru/food_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_020_example",
        "zh": "这份烤肉串是羊肉的吗？",
        "text": "Этот шашлык из баранины?",
        "pronunciation": "Etot shashlyk iz baraniny?"
      },
      "pronunciation": "shashlyk"
    },
    {
      "id": "food_021",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "冷杂拌汤",
      "text": "окрошка",
      "audioPath": "audio/ru/food_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "okroshka"
    },
    {
      "id": "food_022",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "俄式馅饼",
      "text": "пирожки",
      "audioPath": "audio/ru/food_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pirozhki"
    },
    {
      "id": "food_023",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "卷心菜汤",
      "text": "щи",
      "audioPath": "audio/ru/food_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "shchi"
    },
    {
      "id": "food_024",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鸡蛋",
      "text": "яйцо",
      "audioPath": "audio/ru/food_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yaytso"
    },
    {
      "id": "food_025",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "肉",
      "text": "мясо",
      "audioPath": "audio/ru/food_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "myaso"
    },
    {
      "id": "food_026",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "牛肉",
      "text": "говядина",
      "audioPath": "audio/ru/food_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "govyadina"
    },
    {
      "id": "food_027",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "猪肉",
      "text": "свинина",
      "audioPath": "audio/ru/food_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "svinina"
    },
    {
      "id": "food_028",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鸡肉",
      "text": "курица",
      "audioPath": "audio/ru/food_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kuritsa"
    },
    {
      "id": "food_029",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鱼",
      "text": "рыба",
      "audioPath": "audio/ru/food_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ryba"
    },
    {
      "id": "food_030",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "虾",
      "text": "креветки",
      "audioPath": "audio/ru/food_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kryevyetki"
    },
    {
      "id": "food_031",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "螃蟹",
      "text": "краб",
      "audioPath": "audio/ru/food_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "krab"
    },
    {
      "id": "food_032",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "蔬菜",
      "text": "овощи",
      "audioPath": "audio/ru/food_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ovoshchi"
    },
    {
      "id": "food_033",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "水果",
      "text": "фрукты",
      "audioPath": "audio/ru/food_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "frukty"
    },
    {
      "id": "food_034",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "苹果",
      "text": "яблоко",
      "audioPath": "audio/ru/food_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yabloko"
    },
    {
      "id": "food_035",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "香蕉",
      "text": "банан",
      "audioPath": "audio/ru/food_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "banan"
    },
    {
      "id": "food_036",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "橙子",
      "text": "оранжевый",
      "audioPath": "audio/ru/food_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "oranzhyevyy"
    },
    {
      "id": "food_037",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "草莓",
      "text": "клубника",
      "audioPath": "audio/ru/food_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "klubnika"
    },
    {
      "id": "food_038",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "西瓜",
      "text": "арбуз",
      "audioPath": "audio/ru/food_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "arbuz"
    },
    {
      "id": "food_039",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "沙拉",
      "text": "салат",
      "audioPath": "audio/ru/food_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "salat"
    },
    {
      "id": "food_040",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "汤",
      "text": "суп",
      "audioPath": "audio/ru/food_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sup"
    },
    {
      "id": "food_041",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "汉堡",
      "text": "гамбургер",
      "audioPath": "audio/ru/food_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gamburgyer"
    },
    {
      "id": "food_042",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "炸鸡",
      "text": "жареная курица",
      "audioPath": "audio/ru/food_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "zharyenaya kuritsa"
    },
    {
      "id": "food_043",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "薯条",
      "text": "картофель фри",
      "audioPath": "audio/ru/food_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kartofyel fri"
    },
    {
      "id": "food_044",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "披萨",
      "text": "пицца",
      "audioPath": "audio/ru/food_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pitstsa"
    },
    {
      "id": "food_045",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "罗宋汤",
      "text": "борщ",
      "audioPath": "audio/ru/food_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "borshch"
    },
    {
      "id": "food_046",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "冰淇淋",
      "text": "мороженое",
      "audioPath": "audio/ru/food_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "morozhyenoye"
    },
    {
      "id": "food_047",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "蛋糕",
      "text": "торт",
      "audioPath": "audio/ru/food_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tort"
    },
    {
      "id": "food_048",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "甜点",
      "text": "десерт",
      "audioPath": "audio/ru/food_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dyesyert"
    },
    {
      "id": "food_049",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "巧克力",
      "text": "шоколад",
      "audioPath": "audio/ru/food_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "shokolad"
    },
    {
      "id": "food_050",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "糖果",
      "text": "конфеты",
      "audioPath": "audio/ru/food_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "konfyety"
    },
    {
      "id": "food_051",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "盐",
      "text": "соль",
      "audioPath": "audio/ru/food_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sol"
    },
    {
      "id": "food_052",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "糖",
      "text": "сахар",
      "audioPath": "audio/ru/food_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sakhar"
    },
    {
      "id": "food_053",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "酱油",
      "text": "соевый соус",
      "audioPath": "audio/ru/food_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "soyevyy sous"
    },
    {
      "id": "food_054",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "醋",
      "text": "уксус",
      "audioPath": "audio/ru/food_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "uksus"
    },
    {
      "id": "food_055",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "胡椒",
      "text": "перец",
      "audioPath": "audio/ru/food_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pyeryets"
    },
    {
      "id": "food_056",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "辣椒",
      "text": "перец чили",
      "audioPath": "audio/ru/food_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pyeryets chili"
    },
    {
      "id": "food_057",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "芥末",
      "text": "васаби",
      "audioPath": "audio/ru/food_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vasabi"
    },
    {
      "id": "food_058",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "筷子",
      "text": "палочки для еды",
      "audioPath": "audio/ru/food_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "palochki dlya yedy"
    },
    {
      "id": "food_059",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "勺子",
      "text": "ложка",
      "audioPath": "audio/ru/food_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "lozhka"
    },
    {
      "id": "food_060",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "叉子",
      "text": "вилка",
      "audioPath": "audio/ru/food_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vilka"
    },
    {
      "id": "food_061",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "刀",
      "text": "нож",
      "audioPath": "audio/ru/food_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "nozh"
    },
    {
      "id": "food_062",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "盘子",
      "text": "тарелка",
      "audioPath": "audio/ru/food_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "taryelka"
    },
    {
      "id": "food_063",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "碗",
      "text": "чаша",
      "audioPath": "audio/ru/food_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chasha"
    },
    {
      "id": "food_064",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "玻璃杯",
      "text": "стекло",
      "audioPath": "audio/ru/food_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "styeklo"
    },
    {
      "id": "food_065",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "餐巾纸",
      "text": "салфетка",
      "audioPath": "audio/ru/food_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "salfyetka"
    },
    {
      "id": "food_066",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "账单",
      "text": "счёт",
      "audioPath": "audio/ru/food_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_066_example",
        "zh": "我们可以分开结账吗？",
        "text": "Можем ли мы заплатить отдельно?",
        "pronunciation": "Mozhyem li my zaplatit otdyelno?"
      },
      "pronunciation": "schyot"
    },
    {
      "id": "food_067",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "收银台",
      "text": "касса",
      "audioPath": "audio/ru/food_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kassa"
    },
    {
      "id": "food_068",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "服务员",
      "text": "официант",
      "audioPath": "audio/ru/food_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ofitsiant"
    },
    {
      "id": "food_069",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "空位",
      "text": "свободное место",
      "audioPath": "audio/ru/food_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "svobodnoye myesto"
    },
    {
      "id": "food_070",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "吸烟区",
      "text": "место для курения",
      "audioPath": "audio/ru/food_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "myesto dlya kuryeniya"
    },
    {
      "id": "food_071",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "禁烟区",
      "text": "место для некурящих",
      "audioPath": "audio/ru/food_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "myesto dlya nyekuryashchikh"
    },
    {
      "id": "food_072",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "外带",
      "text": "еда на вынос",
      "audioPath": "audio/ru/food_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_072_example",
        "zh": "剩下的菜可以打包外带吗？",
        "text": "Могу ли я взять остатки с собой?",
        "pronunciation": "Mogu li ya vzyat ostatki s soboy?"
      },
      "pronunciation": "yeda na vynos"
    },
    {
      "id": "food_073",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "堂食",
      "text": "здесь",
      "audioPath": "audio/ru/food_073.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "zdyes"
    },
    {
      "id": "food_074",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "好吃",
      "text": "вкусно",
      "audioPath": "audio/ru/food_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_074_example",
        "zh": "这道菜很好吃，叫什么名字？",
        "text": "Это блюдо очень вкусное. Как это называется?",
        "pronunciation": "Eto blyudo ochyen vkusnoye. Kak eto nazyvayetsya?"
      },
      "pronunciation": "vkusno"
    },
    {
      "id": "food_075",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "难吃",
      "text": "не вкусно",
      "audioPath": "audio/ru/food_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_075_example",
        "zh": "这道菜不太合口味，可以换一道吗？",
        "text": "Мне не подходит это блюдо. Можно его заменить?",
        "pronunciation": "Mnye nye podkhodit eto blyudo. Mozhno yego zamyenit?"
      },
      "pronunciation": "nye vkusno"
    },
    {
      "id": "food_076",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "甜",
      "text": "сладкий",
      "audioPath": "audio/ru/food_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_076_example",
        "zh": "有不太甜的甜点吗？",
        "text": "У вас есть не слишком сладкий десерт?",
        "pronunciation": "U vas yest nye slishkom sladkiy dyesyert?"
      },
      "pronunciation": "sladkiy"
    },
    {
      "id": "food_077",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "咸",
      "text": "соленый",
      "audioPath": "audio/ru/food_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_077_example",
        "zh": "这道菜对我来说有点咸。",
        "text": "Для меня это блюдо слишком соленое.",
        "pronunciation": "Dlya myenya eto blyudo slishkom solyenoye."
      },
      "pronunciation": "solyenyy"
    },
    {
      "id": "food_078",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "辣",
      "text": "пряный",
      "audioPath": "audio/ru/food_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_078_example",
        "zh": "这道菜很辣吗？我不能吃太辣。",
        "text": "Это блюдо острое? Мне нельзя очень острое.",
        "pronunciation": "Eto blyudo ostroye? Mnye nyelzya ochyen ostroye."
      },
      "pronunciation": "pryanyy"
    },
    {
      "id": "food_079",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "苦",
      "text": "горький",
      "audioPath": "audio/ru/food_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_079_example",
        "zh": "这杯咖啡太苦了，可以加点牛奶吗？",
        "text": "Этот кофе слишком горький. Можно ли добавить немного молока?",
        "pronunciation": "Etot kofye slishkom gorkiy. Mozhno li dobavit nyemnogo moloka?"
      },
      "pronunciation": "gorkiy"
    },
    {
      "id": "food_080",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "酸",
      "text": "кислый",
      "audioPath": "audio/ru/food_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_080_example",
        "zh": "这个酱汁偏酸吗？",
        "text": "Этот соус кислый?",
        "pronunciation": "Etot sous kislyy?"
      },
      "pronunciation": "kislyy"
    },
    {
      "id": "food_081",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "热",
      "text": "горячий",
      "audioPath": "audio/ru/food_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_081_example",
        "zh": "汤很烫，请小心。",
        "text": "Суп горячий, поэтому будьте осторожны.",
        "pronunciation": "Sup goryachiy, poetomu budtye ostorozhny."
      },
      "pronunciation": "goryachiy"
    },
    {
      "id": "food_082",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "冷",
      "text": "холодный",
      "audioPath": "audio/ru/food_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_082_example",
        "zh": "这道菜是冷着吃的吗？",
        "text": "Это блюдо нужно есть холодным?",
        "pronunciation": "Eto blyudo nuzhno yest kholodnym?"
      },
      "pronunciation": "kholodnyy"
    },
    {
      "id": "food_083",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "新鲜",
      "text": "свежий",
      "audioPath": "audio/ru/food_083.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_083_example",
        "zh": "今天有新鲜的鱼吗？",
        "text": "У вас есть сегодня свежая рыба?",
        "pronunciation": "U vas yest syegodnya svyezhaya ryba?"
      },
      "pronunciation": "svyezhiy"
    },
    {
      "id": "food_084",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "吃饱了",
      "text": "полный",
      "audioPath": "audio/ru/food_084.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "polnyy"
    },
    {
      "id": "food_085",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "饿了",
      "text": "голодный",
      "audioPath": "audio/ru/food_085.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "golodnyy"
    },
    {
      "id": "food_086",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "渴了",
      "text": "жаждущий",
      "audioPath": "audio/ru/food_086.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "zhazhdushchiy"
    },
    {
      "id": "food_087",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "过敏",
      "text": "аллергия",
      "audioPath": "audio/ru/food_087.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_087_example",
        "zh": "我对花生过敏，这道菜含花生吗？",
        "text": "У меня аллергия на арахис. В этом блюде есть арахис?",
        "pronunciation": "U myenya allyergiya na arakhis. V etom blyudye yest arakhis?"
      },
      "pronunciation": "allyergiya"
    },
    {
      "id": "food_088",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "素食者",
      "text": "вегетарианец",
      "audioPath": "audio/ru/food_088.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_food_088_example",
        "zh": "我不吃肉和鱼，这道菜可以吗？",
        "text": "Я не ем мясо и рыбу. Мне подходит это блюдо?",
        "pronunciation": "Ya nye yem myaso i rybu. Mnye podkhodit eto blyudo?"
      },
      "pronunciation": "vyegyetarianyets"
    },
    {
      "id": "food_089",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请问有中文菜单吗？",
      "text": "У вас есть китайское меню?",
      "audioPath": "audio/ru/food_089.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "U vas yest kitayskoye myenyu?"
    },
    {
      "id": "food_090",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请给我这个。",
      "text": "Пожалуйста, дайте мне это.",
      "audioPath": "audio/ru/food_090.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Pozhaluysta, daytye mnye eto."
    },
    {
      "id": "food_091",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "不要辣。",
      "text": "Не острое, пожалуйста.",
      "audioPath": "audio/ru/food_091.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Nye ostroye, pozhaluysta."
    },
    {
      "id": "food_092",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "结账。",
      "text": "Проверьте, пожалуйста.",
      "audioPath": "audio/ru/food_092.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Provyertye, pozhaluysta."
    },
    {
      "id": "food_093",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "我可以点餐吗？",
      "text": "Могу ли я заказать?",
      "audioPath": "audio/ru/food_093.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Mogu li ya zakazat?"
    },
    {
      "id": "food_094",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "我对……过敏。",
      "text": "У меня аллергия на...",
      "audioPath": "audio/ru/food_094.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "U myenya allyergiya na..."
    },
    {
      "id": "food_095",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "再来一杯水。",
      "text": "Еще один стакан воды, пожалуйста.",
      "audioPath": "audio/ru/food_095.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Yeshchye odin stakan vody, pozhaluysta."
    },
    {
      "id": "food_096",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "这个好吃吗？",
      "text": "Это вкусно?",
      "audioPath": "audio/ru/food_096.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Eto vkusno?"
    },
    {
      "id": "shopping_001",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "商店",
      "text": "магазин",
      "audioPath": "audio/ru/shopping_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_001_example",
        "zh": "这家商店星期天营业吗？",
        "text": "Этот магазин открыт по воскресеньям?",
        "pronunciation": "Etot magazin otkryt po voskryesyenyam?"
      },
      "pronunciation": "magazin"
    },
    {
      "id": "shopping_002",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "商场",
      "text": "универмаг",
      "audioPath": "audio/ru/shopping_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_002_example",
        "zh": "百货商场的鞋区在几楼？",
        "text": "На каком этаже обувной отдел?",
        "pronunciation": "Na kakom etazhye obuvnoy otdyel?"
      },
      "pronunciation": "univyermag"
    },
    {
      "id": "shopping_003",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "超市",
      "text": "супермаркет",
      "audioPath": "audio/ru/shopping_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_003_example",
        "zh": "这家超市有熟食区吗？",
        "text": "В этом супермаркете есть гастроном?",
        "pronunciation": "V etom supyermarkyetye yest gastronom?"
      },
      "pronunciation": "supyermarkyet"
    },
    {
      "id": "shopping_004",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "便利店",
      "text": "круглосуточный магазин",
      "audioPath": "audio/ru/shopping_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_004_example",
        "zh": "附近有二十四小时便利店吗？",
        "text": "Есть ли поблизости круглосуточный магазин?",
        "pronunciation": "Yest li poblizosti kruglosutochnyy magazin?"
      },
      "pronunciation": "kruglosutochnyy magazin"
    },
    {
      "id": "shopping_005",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "市场",
      "text": "рынок",
      "audioPath": "audio/ru/shopping_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_005_example",
        "zh": "周六的农贸市场在哪里？",
        "text": "Где фермерский рынок в субботу?",
        "pronunciation": "Gdye fyermyerskiy rynok v subbotu?"
      },
      "pronunciation": "rynok"
    },
    {
      "id": "shopping_006",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "价格",
      "text": "цена",
      "audioPath": "audio/ru/shopping_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_006_example",
        "zh": "这个价格含销售税吗？",
        "text": "Включает ли эта цена налог с продаж?",
        "pronunciation": "Vklyuchayet li eta tsyena nalog s prodazh?"
      },
      "pronunciation": "tsyena"
    },
    {
      "id": "shopping_007",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "多少钱",
      "text": "сколько",
      "audioPath": "audio/ru/shopping_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_007_example",
        "zh": "加税后一共多少钱？",
        "text": "Сколько это стоит с налогом?",
        "pronunciation": "Skolko eto stoit s nalogom?"
      },
      "pronunciation": "skolko"
    },
    {
      "id": "shopping_008",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "贵",
      "text": "дорогой",
      "audioPath": "audio/ru/shopping_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_008_example",
        "zh": "这个对我的预算来说太贵了。",
        "text": "Это слишком дорого для моего бюджета.",
        "pronunciation": "Eto slishkom dorogo dlya moyego byudzhyeta."
      },
      "pronunciation": "dorogoy"
    },
    {
      "id": "shopping_009",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "便宜",
      "text": "дешево",
      "audioPath": "audio/ru/shopping_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_009_example",
        "zh": "有更便宜的款式吗？",
        "text": "У вас есть более дешевый вариант?",
        "pronunciation": "U vas yest bolyeye dyeshyevyy variant?"
      },
      "pronunciation": "dyeshyevo"
    },
    {
      "id": "shopping_010",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "打折",
      "text": "скидка",
      "audioPath": "audio/ru/shopping_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_010_example",
        "zh": "学生可以享受折扣吗？",
        "text": "Есть ли студенческая скидка?",
        "pronunciation": "Yest li studyenchyeskaya skidka?"
      },
      "pronunciation": "skidka"
    },
    {
      "id": "shopping_011",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "促销",
      "text": "продажа",
      "audioPath": "audio/ru/shopping_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_011_example",
        "zh": "这件夹克现在打折。",
        "text": "Эта куртка сейчас в продаже.",
        "pronunciation": "Eta kurtka syeychas v prodazhye."
      },
      "pronunciation": "prodazha"
    },
    {
      "id": "shopping_012",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "小票",
      "text": "квитанция",
      "audioPath": "audio/ru/shopping_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_012_example",
        "zh": "请把小票放进袋子里。",
        "text": "Пожалуйста, положите чек в сумку.",
        "pronunciation": "Pozhaluysta, polozhitye chyek v sumku."
      },
      "pronunciation": "kvitantsiya"
    },
    {
      "id": "shopping_013",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "现金",
      "text": "наличные",
      "audioPath": "audio/ru/shopping_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_013_example",
        "zh": "我可以用现金支付。",
        "text": "Я могу заплатить наличными.",
        "pronunciation": "Ya mogu zaplatit nalichnymi."
      },
      "pronunciation": "nalichnyye"
    },
    {
      "id": "shopping_014",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "信用卡",
      "text": "кредитная карта",
      "audioPath": "audio/ru/shopping_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_014_example",
        "zh": "你们接受这张信用卡吗？",
        "text": "Вы принимаете эту кредитную карту?",
        "pronunciation": "Vy prinimayetye etu kryeditnuyu kartu?"
      },
      "pronunciation": "kryeditnaya karta"
    },
    {
      "id": "shopping_015",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "银行卡",
      "text": "банковская карта",
      "audioPath": "audio/ru/shopping_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_015_example",
        "zh": "我的银行卡被拒了。",
        "text": "Моя банковская карта была отклонена.",
        "pronunciation": "Moya bankovskaya karta byla otklonyena."
      },
      "pronunciation": "bankovskaya karta"
    },
    {
      "id": "shopping_016",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "零钱",
      "text": "небольшое изменение",
      "audioPath": "audio/ru/shopping_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_016_example",
        "zh": "您有五千卢布的零钱吗？",
        "text": "У вас есть сдача с пяти тысяч рублей?",
        "pronunciation": "U vas yest sdacha s pyati tysyach rublyey?"
      },
      "pronunciation": "nyebolshoye izmyenyeniye"
    },
    {
      "id": "shopping_017",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "付款",
      "text": "оплата",
      "audioPath": "audio/ru/shopping_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_017_example",
        "zh": "付款没有成功。",
        "text": "Платеж не прошел.",
        "pronunciation": "Platyezh nye proshyel."
      },
      "pronunciation": "oplata"
    },
    {
      "id": "shopping_018",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "手机支付",
      "text": "мобильный платеж",
      "audioPath": "audio/ru/shopping_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_018_example",
        "zh": "我可以用手机支付吗？",
        "text": "Могу ли я оплатить с помощью телефона?",
        "pronunciation": "Mogu li ya oplatit s pomoshchyu tyelyefona?"
      },
      "pronunciation": "mobilnyy platyezh"
    },
    {
      "id": "shopping_019",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "二维码",
      "text": "QR-код",
      "audioPath": "audio/ru/shopping_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_019_example",
        "zh": "请扫描收据上的二维码。",
        "text": "Отсканируйте QR-код на чеке.",
        "pronunciation": "Otskaniruytye QR-kod na chyekye."
      },
      "pronunciation": "QR-kod"
    },
    {
      "id": "shopping_020",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "word",
      "zh": "试衣间",
      "text": "примерочная",
      "audioPath": "audio/ru/shopping_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_020_example",
        "zh": "试衣间在哪里？",
        "text": "Где примерочная?",
        "pronunciation": "Gdye primyerochnaya?"
      },
      "pronunciation": "primyerochnaya"
    },
    {
      "id": "shopping_021",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "word",
      "zh": "试穿",
      "text": "примерить",
      "audioPath": "audio/ru/shopping_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_021_example",
        "zh": "我想先试穿这件外套，再决定买不买。",
        "text": "Можно примерить это пальто?",
        "pronunciation": "Mozhno primyerit eto palto?"
      },
      "pronunciation": "primyerit"
    },
    {
      "id": "shopping_022",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "尺寸",
      "text": "размер",
      "audioPath": "audio/ru/shopping_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "razmyer"
    },
    {
      "id": "shopping_023",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "大号",
      "text": "большой",
      "audioPath": "audio/ru/shopping_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "bolshoy"
    },
    {
      "id": "shopping_024",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "中号",
      "text": "средний",
      "audioPath": "audio/ru/shopping_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sryedniy"
    },
    {
      "id": "shopping_025",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "小号",
      "text": "маленький",
      "audioPath": "audio/ru/shopping_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "malyenkiy"
    },
    {
      "id": "shopping_026",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "衣服",
      "text": "одежда",
      "audioPath": "audio/ru/shopping_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "odyezhda"
    },
    {
      "id": "shopping_027",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "衬衫",
      "text": "рубашка",
      "audioPath": "audio/ru/shopping_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "rubashka"
    },
    {
      "id": "shopping_028",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "T恤",
      "text": "футболка",
      "audioPath": "audio/ru/shopping_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "futbolka"
    },
    {
      "id": "shopping_029",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "裤子",
      "text": "брюки",
      "audioPath": "audio/ru/shopping_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "bryuki"
    },
    {
      "id": "shopping_030",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "牛仔裤",
      "text": "джинсы",
      "audioPath": "audio/ru/shopping_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dzhinsy"
    },
    {
      "id": "shopping_031",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "裙子",
      "text": "юбка",
      "audioPath": "audio/ru/shopping_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yubka"
    },
    {
      "id": "shopping_032",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "连衣裙",
      "text": "платье",
      "audioPath": "audio/ru/shopping_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "platye"
    },
    {
      "id": "shopping_033",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "外套",
      "text": "пальто",
      "audioPath": "audio/ru/shopping_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "palto"
    },
    {
      "id": "shopping_034",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "毛衣",
      "text": "свитер",
      "audioPath": "audio/ru/shopping_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "svityer"
    },
    {
      "id": "shopping_035",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "内衣",
      "text": "нижнее белье",
      "audioPath": "audio/ru/shopping_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "nizhnyeye byelye"
    },
    {
      "id": "shopping_036",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "袜子",
      "text": "носки",
      "audioPath": "audio/ru/shopping_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "noski"
    },
    {
      "id": "shopping_037",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "鞋子",
      "text": "обувь",
      "audioPath": "audio/ru/shopping_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "obuv"
    },
    {
      "id": "shopping_038",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "运动鞋",
      "text": "кроссовки",
      "audioPath": "audio/ru/shopping_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "krossovki"
    },
    {
      "id": "shopping_039",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "帽子",
      "text": "шляпа",
      "audioPath": "audio/ru/shopping_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "shlyapa"
    },
    {
      "id": "shopping_040",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "围巾",
      "text": "шарф",
      "audioPath": "audio/ru/shopping_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sharf"
    },
    {
      "id": "shopping_041",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手套",
      "text": "перчатки",
      "audioPath": "audio/ru/shopping_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pyerchatki"
    },
    {
      "id": "shopping_042",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "包",
      "text": "сумка",
      "audioPath": "audio/ru/shopping_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sumka"
    },
    {
      "id": "shopping_043",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "钱包",
      "text": "кошелек",
      "audioPath": "audio/ru/shopping_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "koshyelyek"
    },
    {
      "id": "shopping_044",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "眼镜",
      "text": "очки",
      "audioPath": "audio/ru/shopping_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ochki"
    },
    {
      "id": "shopping_045",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "太阳镜",
      "text": "солнцезащитные очки",
      "audioPath": "audio/ru/shopping_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "solntsyezashchitnyye ochki"
    },
    {
      "id": "shopping_046",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手表",
      "text": "смотреть",
      "audioPath": "audio/ru/shopping_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "smotryet"
    },
    {
      "id": "shopping_047",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "首饰",
      "text": "аксессуары",
      "audioPath": "audio/ru/shopping_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "aksyessuary"
    },
    {
      "id": "shopping_048",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "化妆品",
      "text": "косметика",
      "audioPath": "audio/ru/shopping_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kosmyetika"
    },
    {
      "id": "shopping_049",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "护肤品",
      "text": "уход за кожей",
      "audioPath": "audio/ru/shopping_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ukhod za kozhyey"
    },
    {
      "id": "shopping_050",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "香水",
      "text": "духи",
      "audioPath": "audio/ru/shopping_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dukhi"
    },
    {
      "id": "shopping_051",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "口红",
      "text": "помада",
      "audioPath": "audio/ru/shopping_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pomada"
    },
    {
      "id": "shopping_052",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "洗面奶",
      "text": "очищающее средство для лица",
      "audioPath": "audio/ru/shopping_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ochishchayushchyeye sryedstvo dlya litsa"
    },
    {
      "id": "shopping_053",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "食品",
      "text": "еда",
      "audioPath": "audio/ru/shopping_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yeda"
    },
    {
      "id": "shopping_054",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "饮料",
      "text": "напитки",
      "audioPath": "audio/ru/shopping_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "napitki"
    },
    {
      "id": "shopping_055",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "零食",
      "text": "закуски",
      "audioPath": "audio/ru/shopping_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "zakuski"
    },
    {
      "id": "shopping_056",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "纪念品",
      "text": "сувенир",
      "audioPath": "audio/ru/shopping_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "suvyenir"
    },
    {
      "id": "shopping_057",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "特产",
      "text": "местная специальность",
      "audioPath": "audio/ru/shopping_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_shopping_057_example",
        "zh": "这个特产需要冷藏吗？",
        "text": "Нужно ли хранить это местное блюдо в холодильнике?",
        "pronunciation": "Nuzhno li khranit eto myestnoye blyudo v kholodilnikye?"
      },
      "pronunciation": "myestnaya spyetsialnost"
    },
    {
      "id": "shopping_058",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "玩具",
      "text": "игрушка",
      "audioPath": "audio/ru/shopping_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "igrushka"
    },
    {
      "id": "shopping_059",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "电子产品",
      "text": "электроника",
      "audioPath": "audio/ru/shopping_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "elyektronika"
    },
    {
      "id": "shopping_060",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手机",
      "text": "мобильный телефон",
      "audioPath": "audio/ru/shopping_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "mobilnyy tyelyefon"
    },
    {
      "id": "shopping_061",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "充电器",
      "text": "зарядное устройство",
      "audioPath": "audio/ru/shopping_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "zaryadnoye ustroystvo"
    },
    {
      "id": "shopping_062",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "耳机",
      "text": "наушники",
      "audioPath": "audio/ru/shopping_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "naushniki"
    },
    {
      "id": "shopping_063",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "相机",
      "text": "камера",
      "audioPath": "audio/ru/shopping_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kamyera"
    },
    {
      "id": "shopping_064",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "电池",
      "text": "батарея",
      "audioPath": "audio/ru/shopping_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "bataryeya"
    },
    {
      "id": "shopping_065",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "购物袋",
      "text": "сумка для покупок",
      "audioPath": "audio/ru/shopping_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sumka dlya pokupok"
    },
    {
      "id": "shopping_066",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "环保袋",
      "text": "эко сумка",
      "audioPath": "audio/ru/shopping_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "eko sumka"
    },
    {
      "id": "shopping_067",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以退税吗？",
      "text": "Это без налогов?",
      "audioPath": "audio/ru/shopping_067.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Eto byez nalogov?"
    },
    {
      "id": "shopping_068",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "可以便宜一点吗？",
      "text": "Можете ли вы сделать это дешевле?",
      "audioPath": "audio/ru/shopping_068.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Mozhyetye li vy sdyelat eto dyeshyevlye?"
    },
    {
      "id": "shopping_069",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我只是看看。",
      "text": "Я просто смотрю.",
      "audioPath": "audio/ru/shopping_069.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Ya prosto smotryu."
    },
    {
      "id": "shopping_070",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我要这个。",
      "text": "Я возьму этот.",
      "audioPath": "audio/ru/shopping_070.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Ya vozmu etot."
    },
    {
      "id": "shopping_071",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "可以刷卡吗？",
      "text": "Могу ли я оплатить картой?",
      "audioPath": "audio/ru/shopping_071.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Mogu li ya oplatit kartoy?"
    },
    {
      "id": "shopping_072",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有没有大一点的？",
      "text": "У вас есть побольше?",
      "audioPath": "audio/ru/shopping_072.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "U vas yest pobolshye?"
    },
    {
      "id": "shopping_073",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "可以试穿吗？",
      "text": "Могу ли я примерить это?",
      "audioPath": "audio/ru/shopping_073.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Mogu li ya primyerit eto?"
    },
    {
      "id": "directions_001",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "哪里",
      "text": "где",
      "audioPath": "audio/ru/directions_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_001_example",
        "zh": "洗手间在哪里？",
        "text": "Где туалет?",
        "pronunciation": "Gdye tualyet?"
      },
      "pronunciation": "gdye"
    },
    {
      "id": "directions_002",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "这里",
      "text": "здесь",
      "audioPath": "audio/ru/directions_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_002_example",
        "zh": "我们现在在这里。",
        "text": "Мы здесь.",
        "pronunciation": "My zdyes."
      },
      "pronunciation": "zdyes"
    },
    {
      "id": "directions_003",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "那里",
      "text": "там",
      "audioPath": "audio/ru/directions_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_003_example",
        "zh": "公交站就在那边。",
        "text": "Автобусная остановка там.",
        "pronunciation": "Avtobusnaya ostanovka tam."
      },
      "pronunciation": "tam"
    },
    {
      "id": "directions_004",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "左边",
      "text": "ушел",
      "audioPath": "audio/ru/directions_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_004_example",
        "zh": "银行在你的左边。",
        "text": "Банк будет слева от вас.",
        "pronunciation": "Bank budyet slyeva ot vas."
      },
      "pronunciation": "ushyel"
    },
    {
      "id": "directions_005",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "右边",
      "text": "правильно",
      "audioPath": "audio/ru/directions_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_005_example",
        "zh": "在红绿灯处向右转。",
        "text": "Поверните направо на свет.",
        "pronunciation": "Povyernitye napravo na svyet."
      },
      "pronunciation": "pravilno"
    },
    {
      "id": "directions_006",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "前面",
      "text": "фронт",
      "audioPath": "audio/ru/directions_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_006_example",
        "zh": "出租车就在酒店前面。",
        "text": "Такси стоит перед отелем.",
        "pronunciation": "Taksi stoit pyeryed otyelyem."
      },
      "pronunciation": "front"
    },
    {
      "id": "directions_007",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "后面",
      "text": "назад",
      "audioPath": "audio/ru/directions_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_007_example",
        "zh": "停车场在大楼后面。",
        "text": "Парковка находится за зданием.",
        "pronunciation": "Parkovka nakhoditsya za zdaniyem."
      },
      "pronunciation": "nazad"
    },
    {
      "id": "directions_008",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "旁边",
      "text": "рядом с",
      "audioPath": "audio/ru/directions_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_008_example",
        "zh": "药店就在咖啡馆旁边。",
        "text": "Аптека находится рядом с кафе.",
        "pronunciation": "Aptyeka nakhoditsya ryadom s kafye."
      },
      "pronunciation": "ryadom s"
    },
    {
      "id": "directions_009",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "对面",
      "text": "напротив",
      "audioPath": "audio/ru/directions_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_009_example",
        "zh": "博物馆在公园对面。",
        "text": "Музей находится напротив парка.",
        "pronunciation": "Muzyey nakhoditsya naprotiv parka."
      },
      "pronunciation": "naprotiv"
    },
    {
      "id": "directions_010",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "附近",
      "text": "поблизости",
      "audioPath": "audio/ru/directions_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_010_example",
        "zh": "附近有 ATM 吗？",
        "text": "Есть ли поблизости банкомат?",
        "pronunciation": "Yest li poblizosti bankomat?"
      },
      "pronunciation": "poblizosti"
    },
    {
      "id": "directions_011",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "word",
      "zh": "远",
      "text": "далеко",
      "audioPath": "audio/ru/directions_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_011_example",
        "zh": "从这里走过去远吗？",
        "text": "Далеко ли отсюда идти?",
        "pronunciation": "Dalyeko li otsyuda idti?"
      },
      "pronunciation": "dalyeko"
    },
    {
      "id": "directions_012",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "word",
      "zh": "近",
      "text": "рядом",
      "audioPath": "audio/ru/directions_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_012_example",
        "zh": "火车站离这里很近。",
        "text": "Железнодорожный вокзал находится рядом.",
        "pronunciation": "Zhyelyeznodorozhnyy vokzal nakhoditsya ryadom."
      },
      "pronunciation": "ryadom"
    },
    {
      "id": "directions_013",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "直走",
      "text": "прямой",
      "audioPath": "audio/ru/directions_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_013_example",
        "zh": "直走两个街区。",
        "text": "Идите прямо два квартала.",
        "pronunciation": "Iditye pryamo dva kvartala."
      },
      "pronunciation": "pryamoy"
    },
    {
      "id": "directions_014",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "转弯",
      "text": "поворачивать",
      "audioPath": "audio/ru/directions_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_014_example",
        "zh": "过桥后向左转。",
        "text": "Поверните налево после моста.",
        "pronunciation": "Povyernitye nalyevo poslye mosta."
      },
      "pronunciation": "povorachivat"
    },
    {
      "id": "directions_015",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "十字路口",
      "text": "пересечение",
      "audioPath": "audio/ru/directions_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_015_example",
        "zh": "在下一个十字路口和我会合。",
        "text": "Встретимся на следующем перекрестке.",
        "pronunciation": "Vstryetimsya na slyeduyushchyem pyeryekryestkye."
      },
      "pronunciation": "pyeryesyechyeniye"
    },
    {
      "id": "directions_016",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "桥",
      "text": "мост",
      "audioPath": "audio/ru/directions_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_016_example",
        "zh": "过桥后您会看到酒店。",
        "text": "Вы увидите отель после того, как пересечете мост.",
        "pronunciation": "Vy uviditye otyel poslye togo, kak pyeryesyechyetye most."
      },
      "pronunciation": "most"
    },
    {
      "id": "directions_017",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "路",
      "text": "дорога",
      "audioPath": "audio/ru/directions_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_017_example",
        "zh": "这条路通往国家公园吗？",
        "text": "Эта дорога ведет в национальный парк?",
        "pronunciation": "Eta doroga vyedyet v natsionalnyy park?"
      },
      "pronunciation": "doroga"
    },
    {
      "id": "directions_018",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "街道",
      "text": "улица",
      "audioPath": "audio/ru/directions_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_018_example",
        "zh": "我们在第五大街上。",
        "text": "Мы на Пятой авеню.",
        "pronunciation": "My na Pyatoy avyenyu."
      },
      "pronunciation": "ulitsa"
    },
    {
      "id": "directions_019",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "建筑",
      "text": "здание",
      "audioPath": "audio/ru/directions_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_019_example",
        "zh": "那座玻璃大楼就是图书馆。",
        "text": "Стеклянное здание — это библиотека.",
        "pronunciation": "Styeklyannoye zdaniye — eto bibliotyeka."
      },
      "pronunciation": "zdaniye"
    },
    {
      "id": "directions_020",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "派出所",
      "text": "полицейская будка",
      "audioPath": "audio/ru/directions_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_directions_020_example",
        "zh": "最近的警察局在哪里？",
        "text": "Где находится ближайший полицейский участок?",
        "pronunciation": "Gdye nakhoditsya blizhayshiy politsyeyskiy uchastok?"
      },
      "pronunciation": "politsyeyskaya budka"
    },
    {
      "id": "directions_021",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "医院",
      "text": "больница",
      "audioPath": "audio/ru/directions_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "bolnitsa"
    },
    {
      "id": "directions_022",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "药店",
      "text": "аптека",
      "audioPath": "audio/ru/directions_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "aptyeka"
    },
    {
      "id": "directions_023",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "银行",
      "text": "банк",
      "audioPath": "audio/ru/directions_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "bank"
    },
    {
      "id": "directions_024",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "邮局",
      "text": "почтовое отделение",
      "audioPath": "audio/ru/directions_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pochtovoye otdyelyeniye"
    },
    {
      "id": "directions_025",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "厕所",
      "text": "туалет",
      "audioPath": "audio/ru/directions_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tualyet"
    },
    {
      "id": "directions_026",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "公交站",
      "text": "автобусная остановка",
      "audioPath": "audio/ru/directions_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "avtobusnaya ostanovka"
    },
    {
      "id": "directions_027",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "地铁站",
      "text": "станция метро",
      "audioPath": "audio/ru/directions_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "stantsiya myetro"
    },
    {
      "id": "directions_028",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "景点",
      "text": "туристическое место",
      "audioPath": "audio/ru/directions_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "turistichyeskoye myesto"
    },
    {
      "id": "directions_029",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "博物馆",
      "text": "музей",
      "audioPath": "audio/ru/directions_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "muzyey"
    },
    {
      "id": "directions_030",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "地铁站",
      "text": "станция метро",
      "audioPath": "audio/ru/directions_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "stantsiya myetro"
    },
    {
      "id": "directions_031",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请问怎么走？",
      "text": "Как мне туда добраться?",
      "audioPath": "audio/ru/directions_031.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Kak mnye tuda dobratsya?"
    },
    {
      "id": "directions_032",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "……在哪里？",
      "text": "Где...?",
      "audioPath": "audio/ru/directions_032.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Gdye...?"
    },
    {
      "id": "directions_033",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请带我去……",
      "text": "Пожалуйста, отвезите меня в...",
      "audioPath": "audio/ru/directions_033.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Pozhaluysta, otvyezitye myenya v..."
    },
    {
      "id": "directions_034",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我要去……",
      "text": "Я хочу пойти в...",
      "audioPath": "audio/ru/directions_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Ya khochu poyti v..."
    },
    {
      "id": "directions_035",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "走路要几分钟？",
      "text": "Сколько минут пешком?",
      "audioPath": "audio/ru/directions_035.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Skolko minut pyeshkom?"
    },
    {
      "id": "directions_036",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "坐地铁能到吗？",
      "text": "Могу ли я добраться туда на метро?",
      "audioPath": "audio/ru/directions_036.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Mogu li ya dobratsya tuda na myetro?"
    },
    {
      "id": "directions_037",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我迷路了。",
      "text": "Я заблудился.",
      "audioPath": "audio/ru/directions_037.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Ya zabludilsya."
    },
    {
      "id": "directions_038",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请问现在在哪里？",
      "text": "Где я сейчас?",
      "audioPath": "audio/ru/directions_038.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Gdye ya syeychas?"
    },
    {
      "id": "directions_039",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请在地图上指给我。",
      "text": "Пожалуйста, укажите на карте.",
      "audioPath": "audio/ru/directions_039.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Pozhaluysta, ukazhitye na kartye."
    },
    {
      "id": "directions_040",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "能再说一遍吗？",
      "text": "Не могли бы вы сказать это еще раз?",
      "audioPath": "audio/ru/directions_040.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Nye mogli by vy skazat eto yeshchye raz?"
    },
    {
      "id": "directions_041",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "怎么去车站？",
      "text": "Как мне добраться до станции?",
      "audioPath": "audio/ru/directions_041.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Kak mnye dobratsya do stantsii?"
    },
    {
      "id": "directions_042",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "这是哪条路？",
      "text": "Что это за улица?",
      "audioPath": "audio/ru/directions_042.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Chto eto za ulitsa?"
    },
    {
      "id": "directions_043",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "洗手间在哪里？",
      "text": "Где туалет?",
      "audioPath": "audio/ru/directions_043.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Gdye tualyet?"
    },
    {
      "id": "numbers_001",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "零",
      "text": "ноль",
      "audioPath": "audio/ru/numbers_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_001_example",
        "zh": "这项服务没有额外费用。",
        "text": "За эту услугу дополнительная плата не взимается.",
        "pronunciation": "Za etu uslugu dopolnityelnaya plata nye vzimayetsya."
      },
      "pronunciation": "nol"
    },
    {
      "id": "numbers_002",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "一",
      "text": "один",
      "audioPath": "audio/ru/numbers_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_002_example",
        "zh": "我只需要一张票。",
        "text": "Мне нужен только один билет.",
        "pronunciation": "Mnye nuzhyen tolko odin bilyet."
      },
      "pronunciation": "odin"
    },
    {
      "id": "numbers_003",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "二",
      "text": "два",
      "audioPath": "audio/ru/numbers_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_003_example",
        "zh": "请给我们一张两人桌。",
        "text": "Столик на двоих, пожалуйста.",
        "pronunciation": "Stolik na dvoikh, pozhaluysta."
      },
      "pronunciation": "dva"
    },
    {
      "id": "numbers_004",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "三",
      "text": "три",
      "audioPath": "audio/ru/numbers_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_004_example",
        "zh": "我们住三个晚上。",
        "text": "Мы остаемся на три ночи.",
        "pronunciation": "My ostayemsya na tri nochi."
      },
      "pronunciation": "tri"
    },
    {
      "id": "numbers_005",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "四",
      "text": "четыре",
      "audioPath": "audio/ru/numbers_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_005_example",
        "zh": "我们一行四个人。",
        "text": "В нашей группе четыре человека.",
        "pronunciation": "V nashyey gruppye chyetyrye chyelovyeka."
      },
      "pronunciation": "chyetyrye"
    },
    {
      "id": "numbers_006",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "五",
      "text": "пять",
      "audioPath": "audio/ru/numbers_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_006_example",
        "zh": "步行只要五分钟。",
        "text": "Это всего лишь пять минут ходьбы.",
        "pronunciation": "Eto vsyego lish pyat minut khodby."
      },
      "pronunciation": "pyat"
    },
    {
      "id": "numbers_007",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "六",
      "text": "шесть",
      "audioPath": "audio/ru/numbers_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_007_example",
        "zh": "六岁以下儿童免费。",
        "text": "Дети до шести лет бесплатно.",
        "pronunciation": "Dyeti do shyesti lyet byesplatno."
      },
      "pronunciation": "shyest"
    },
    {
      "id": "numbers_008",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "七",
      "text": "семь",
      "audioPath": "audio/ru/numbers_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_008_example",
        "zh": "商店晚上七点关门。",
        "text": "Магазин закрывается в семь вечера.",
        "pronunciation": "Magazin zakryvayetsya v syem vyechyera."
      },
      "pronunciation": "syem"
    },
    {
      "id": "numbers_009",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "八",
      "text": "восемь",
      "audioPath": "audio/ru/numbers_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_009_example",
        "zh": "早餐从早上八点开始。",
        "text": "Завтрак начинается в восемь утра.",
        "pronunciation": "Zavtrak nachinayetsya v vosyem utra."
      },
      "pronunciation": "vosyem"
    },
    {
      "id": "numbers_010",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "九",
      "text": "девять",
      "audioPath": "audio/ru/numbers_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_010_example",
        "zh": "乘九路公交车去市中心。",
        "text": "Сядьте на автобус номер девять в центр города.",
        "pronunciation": "Syadtye na avtobus nomyer dyevyat v tsyentr goroda."
      },
      "pronunciation": "dyevyat"
    },
    {
      "id": "numbers_011",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "十",
      "text": "десять",
      "audioPath": "audio/ru/numbers_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_011_example",
        "zh": "最多需要十分钟。",
        "text": "Это должно занять не более десяти минут.",
        "pronunciation": "Eto dolzhno zanyat nye bolyeye dyesyati minut."
      },
      "pronunciation": "dyesyat"
    },
    {
      "id": "numbers_012",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "百",
      "text": "сто",
      "audioPath": "audio/ru/numbers_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_012_example",
        "zh": "这张钞票是一百卢布。",
        "text": "Это купюра в сто рублей.",
        "pronunciation": "Eto kupyura v sto rublyey."
      },
      "pronunciation": "sto"
    },
    {
      "id": "numbers_013",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "千",
      "text": "тысяча",
      "audioPath": "audio/ru/numbers_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_013_example",
        "zh": "交通卡里还有一千卢布。",
        "text": "На транспортной карте осталась тысяча рублей.",
        "pronunciation": "Na transportnoy kartye ostalas tysyacha rublyey."
      },
      "pronunciation": "tysyacha"
    },
    {
      "id": "numbers_014",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "万",
      "text": "десять тысяч",
      "audioPath": "audio/ru/numbers_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_014_example",
        "zh": "这个景点每年接待一万多名游客。",
        "text": "Эту достопримечательность ежегодно посещают более десяти тысяч туристов.",
        "pronunciation": "Etu dostoprimyechatyelnost yezhyegodno posyeshchayut bolyeye dyesyati tysyach turistov."
      },
      "pronunciation": "dyesyat tysyach"
    },
    {
      "id": "numbers_015",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "卢布",
      "text": "рубль",
      "audioPath": "audio/ru/numbers_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_015_example",
        "zh": "这家店只收卢布。",
        "text": "В этом магазине принимают только рубли.",
        "pronunciation": "V etom magazinye prinimayut tolko rubli."
      },
      "pronunciation": "rubl"
    },
    {
      "id": "numbers_016",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "美元",
      "text": "доллар",
      "audioPath": "audio/ru/numbers_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_016_example",
        "zh": "可以把美元兑换成卢布吗？",
        "text": "Можно обменять доллары на рубли?",
        "pronunciation": "Mozhno obmyenyat dollary na rubli?"
      },
      "pronunciation": "dollar"
    },
    {
      "id": "numbers_017",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "人民币",
      "text": "юань",
      "audioPath": "audio/ru/numbers_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_017_example",
        "zh": "我在哪里可以兑换人民币？",
        "text": "Где можно обменять китайские юани?",
        "pronunciation": "Gdye mozhno obmyenyat kitayskiye yuani?"
      },
      "pronunciation": "yuan"
    },
    {
      "id": "numbers_018",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "今天",
      "text": "сегодня",
      "audioPath": "audio/ru/numbers_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_018_example",
        "zh": "今天还有去喀山的航班吗？",
        "text": "Сегодня ещё есть рейсы в Казань?",
        "pronunciation": "Syegodnya yeshchyo yest ryeysy v Kazan?"
      },
      "pronunciation": "syegodnya"
    },
    {
      "id": "numbers_019",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "明天",
      "text": "завтра",
      "audioPath": "audio/ru/numbers_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_019_example",
        "zh": "我想预订明天上午的行程。",
        "text": "Можно забронировать поездку на завтра утром?",
        "pronunciation": "Mozhno zabronirovat poyezdku na zavtra utrom?"
      },
      "pronunciation": "zavtra"
    },
    {
      "id": "numbers_020",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "昨天",
      "text": "вчера",
      "audioPath": "audio/ru/numbers_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_020_example",
        "zh": "我昨天把太阳镜落在出租车上了。",
        "text": "Вчера я забыл свои солнцезащитные очки в такси.",
        "pronunciation": "Vchyera ya zabyl svoi solntsyezashchitnyye ochki v taksi."
      },
      "pronunciation": "vchyera"
    },
    {
      "id": "numbers_021",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "后天",
      "text": "послезавтра",
      "audioPath": "audio/ru/numbers_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "poslyezavtra"
    },
    {
      "id": "numbers_022",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "前天",
      "text": "позавчера",
      "audioPath": "audio/ru/numbers_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pozavchyera"
    },
    {
      "id": "numbers_023",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "早上",
      "text": "утро",
      "audioPath": "audio/ru/numbers_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "utro"
    },
    {
      "id": "numbers_024",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "中午",
      "text": "полдень",
      "audioPath": "audio/ru/numbers_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "poldyen"
    },
    {
      "id": "numbers_025",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "下午",
      "text": "полдень",
      "audioPath": "audio/ru/numbers_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "poldyen"
    },
    {
      "id": "numbers_026",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "晚上",
      "text": "ночь",
      "audioPath": "audio/ru/numbers_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "noch"
    },
    {
      "id": "numbers_027",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "现在",
      "text": "сейчас",
      "audioPath": "audio/ru/numbers_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "syeychas"
    },
    {
      "id": "numbers_028",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "时间",
      "text": "время",
      "audioPath": "audio/ru/numbers_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vryemya"
    },
    {
      "id": "numbers_029",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一小时",
      "text": "один час",
      "audioPath": "audio/ru/numbers_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "odin chas"
    },
    {
      "id": "numbers_030",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一分钟",
      "text": "одна минута",
      "audioPath": "audio/ru/numbers_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "odna minuta"
    },
    {
      "id": "numbers_031",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "秒",
      "text": "второй",
      "audioPath": "audio/ru/numbers_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vtoroy"
    },
    {
      "id": "numbers_032",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "几点",
      "text": "какое время",
      "audioPath": "audio/ru/numbers_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_032_example",
        "zh": "早餐从几点开始？",
        "text": "Во сколько начинается завтрак?",
        "pronunciation": "Vo skolko nachinayetsya zavtrak?"
      },
      "pronunciation": "kakoye vryemya"
    },
    {
      "id": "numbers_033",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期",
      "text": "день недели",
      "audioPath": "audio/ru/numbers_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dyen nyedyeli"
    },
    {
      "id": "numbers_034",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期一",
      "text": "понедельник",
      "audioPath": "audio/ru/numbers_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ponyedyelnik"
    },
    {
      "id": "numbers_035",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期二",
      "text": "вторник",
      "audioPath": "audio/ru/numbers_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vtornik"
    },
    {
      "id": "numbers_036",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期三",
      "text": "среда",
      "audioPath": "audio/ru/numbers_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sryeda"
    },
    {
      "id": "numbers_037",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期四",
      "text": "Четверг",
      "audioPath": "audio/ru/numbers_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "Chyetvyerg"
    },
    {
      "id": "numbers_038",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期五",
      "text": "Пятница",
      "audioPath": "audio/ru/numbers_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "Pyatnitsa"
    },
    {
      "id": "numbers_039",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期六",
      "text": "Суббота",
      "audioPath": "audio/ru/numbers_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "Subbota"
    },
    {
      "id": "numbers_040",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期日",
      "text": "воскресенье",
      "audioPath": "audio/ru/numbers_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "voskryesyenye"
    },
    {
      "id": "numbers_041",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "周末",
      "text": "выходные",
      "audioPath": "audio/ru/numbers_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vykhodnyye"
    },
    {
      "id": "numbers_042",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "工作日",
      "text": "будний день",
      "audioPath": "audio/ru/numbers_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "budniy dyen"
    },
    {
      "id": "numbers_043",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "日期",
      "text": "дата",
      "audioPath": "audio/ru/numbers_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "data"
    },
    {
      "id": "numbers_044",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一月",
      "text": "январь",
      "audioPath": "audio/ru/numbers_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yanvar"
    },
    {
      "id": "numbers_045",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "二月",
      "text": "февраль",
      "audioPath": "audio/ru/numbers_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "fyevral"
    },
    {
      "id": "numbers_046",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "三月",
      "text": "март",
      "audioPath": "audio/ru/numbers_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "mart"
    },
    {
      "id": "numbers_047",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "四月",
      "text": "апрель",
      "audioPath": "audio/ru/numbers_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "apryel"
    },
    {
      "id": "numbers_048",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "五月",
      "text": "май",
      "audioPath": "audio/ru/numbers_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "may"
    },
    {
      "id": "numbers_049",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "六月",
      "text": "июнь",
      "audioPath": "audio/ru/numbers_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "iyun"
    },
    {
      "id": "numbers_050",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "七月",
      "text": "июль",
      "audioPath": "audio/ru/numbers_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "iyul"
    },
    {
      "id": "numbers_051",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "八月",
      "text": "август",
      "audioPath": "audio/ru/numbers_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "avgust"
    },
    {
      "id": "numbers_052",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "九月",
      "text": "сентябрь",
      "audioPath": "audio/ru/numbers_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "syentyabr"
    },
    {
      "id": "numbers_053",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十月",
      "text": "Октябрь",
      "audioPath": "audio/ru/numbers_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "Oktyabr"
    },
    {
      "id": "numbers_054",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十一月",
      "text": "ноябрь",
      "audioPath": "audio/ru/numbers_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "noyabr"
    },
    {
      "id": "numbers_055",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十二月",
      "text": "декабрь",
      "audioPath": "audio/ru/numbers_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dyekabr"
    },
    {
      "id": "numbers_056",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一日",
      "text": "1-й",
      "audioPath": "audio/ru/numbers_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "1-y"
    },
    {
      "id": "numbers_057",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "二日",
      "text": "2-й",
      "audioPath": "audio/ru/numbers_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "2-y"
    },
    {
      "id": "numbers_058",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "三日",
      "text": "3-й",
      "audioPath": "audio/ru/numbers_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "3-y"
    },
    {
      "id": "numbers_059",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "四日",
      "text": "4-й",
      "audioPath": "audio/ru/numbers_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "4-y"
    },
    {
      "id": "numbers_060",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "五日",
      "text": "5-е место",
      "audioPath": "audio/ru/numbers_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "5-ye myesto"
    },
    {
      "id": "numbers_061",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "六日",
      "text": "6-е место",
      "audioPath": "audio/ru/numbers_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "6-ye myesto"
    },
    {
      "id": "numbers_062",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "七日",
      "text": "7-е место",
      "audioPath": "audio/ru/numbers_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "7-ye myesto"
    },
    {
      "id": "numbers_063",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "八日",
      "text": "8-е место",
      "audioPath": "audio/ru/numbers_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "8-ye myesto"
    },
    {
      "id": "numbers_064",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "九日",
      "text": "9-е",
      "audioPath": "audio/ru/numbers_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "9-ye"
    },
    {
      "id": "numbers_065",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十日",
      "text": "10-е место",
      "audioPath": "audio/ru/numbers_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "10-ye myesto"
    },
    {
      "id": "numbers_066",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "今年",
      "text": "в этом году",
      "audioPath": "audio/ru/numbers_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "v etom godu"
    },
    {
      "id": "numbers_067",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "去年",
      "text": "в прошлом году",
      "audioPath": "audio/ru/numbers_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "v proshlom godu"
    },
    {
      "id": "numbers_068",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "明年",
      "text": "в следующем году",
      "audioPath": "audio/ru/numbers_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "v slyeduyushchyem godu"
    },
    {
      "id": "numbers_069",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "这个月",
      "text": "в этом месяце",
      "audioPath": "audio/ru/numbers_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "v etom myesyatsye"
    },
    {
      "id": "numbers_070",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "上个月",
      "text": "в прошлом месяце",
      "audioPath": "audio/ru/numbers_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "v proshlom myesyatsye"
    },
    {
      "id": "numbers_071",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "下个月",
      "text": "в следующем месяце",
      "audioPath": "audio/ru/numbers_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "v slyeduyushchyem myesyatsye"
    },
    {
      "id": "numbers_072",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "几点开门？",
      "text": "Во сколько он открывается?",
      "audioPath": "audio/ru/numbers_072.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Vo skolko on otkryvayetsya?"
    },
    {
      "id": "numbers_073",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "现在几点？",
      "text": "Сколько сейчас времени?",
      "audioPath": "audio/ru/numbers_073.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Skolko syeychas vryemyeni?"
    },
    {
      "id": "numbers_074",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "今天星期几？",
      "text": "Какой сегодня день?",
      "audioPath": "audio/ru/numbers_074.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Kakoy syegodnya dyen?"
    },
    {
      "id": "numbers_075",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "今天是几号？",
      "text": "Какое сегодня число?",
      "audioPath": "audio/ru/numbers_075.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Kakoye syegodnya chislo?"
    },
    {
      "id": "numbers_076",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "营业时间",
      "text": "часы работы",
      "audioPath": "audio/ru/numbers_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chasy raboty"
    },
    {
      "id": "numbers_077",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "开门",
      "text": "открыть",
      "audioPath": "audio/ru/numbers_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_077_example",
        "zh": "这家药店星期日也开门吗？",
        "text": "Эта аптека работает и по воскресеньям?",
        "pronunciation": "Eta aptyeka rabotayet i po voskryesyenyam?"
      },
      "pronunciation": "otkryt"
    },
    {
      "id": "numbers_078",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "关门",
      "text": "закрыть",
      "audioPath": "audio/ru/numbers_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_078_example",
        "zh": "博物馆几点关门？",
        "text": "Во сколько музей закрывается?",
        "pronunciation": "Vo skolko muzyey zakryvayetsya?"
      },
      "pronunciation": "zakryt"
    },
    {
      "id": "numbers_079",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "每天",
      "text": "каждый день",
      "audioPath": "audio/ru/numbers_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kazhdyy dyen"
    },
    {
      "id": "numbers_080",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "有时",
      "text": "иногда",
      "audioPath": "audio/ru/numbers_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "inogda"
    },
    {
      "id": "numbers_081",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "经常",
      "text": "часто",
      "audioPath": "audio/ru/numbers_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chasto"
    },
    {
      "id": "numbers_082",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "马上",
      "text": "скоро",
      "audioPath": "audio/ru/numbers_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_numbers_082_example",
        "zh": "巴士马上到吗？",
        "text": "Автобус скоро придет?",
        "pronunciation": "Avtobus skoro pridyet?"
      },
      "pronunciation": "skoro"
    },
    {
      "id": "numbers_083",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "稍等",
      "text": "подожди минутку",
      "audioPath": "audio/ru/numbers_083.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "podozhdi minutku"
    },
    {
      "id": "emergency_001",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "救命 / 请帮帮我",
      "text": "Помогите!",
      "audioPath": "audio/ru/emergency_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_001_example",
        "zh": "救命！有人受伤了！",
        "text": "Помощь! Кто-то ранен!",
        "pronunciation": "Pomoshch! Kto-to ranyen!"
      },
      "pronunciation": "Pomogitye!"
    },
    {
      "id": "emergency_002",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "紧急情况",
      "text": "экстренная ситуация",
      "audioPath": "audio/ru/emergency_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_002_example",
        "zh": "这是医疗紧急情况。",
        "text": "Это неотложная медицинская помощь.",
        "pronunciation": "Eto nyeotlozhnaya myeditsinskaya pomoshch."
      },
      "pronunciation": "ekstryennaya situatsiya"
    },
    {
      "id": "emergency_003",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "word",
      "zh": "报警",
      "text": "вызвать полицию",
      "audioPath": "audio/ru/emergency_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_003_example",
        "zh": "请报警，我的钱包被偷了。",
        "text": "Пожалуйста, позвоните в полицию. У меня украли кошелек.",
        "pronunciation": "Pozhaluysta, pozvonitye v politsiyu. U myenya ukrali koshyelyek."
      },
      "pronunciation": "vyzvat politsiyu"
    },
    {
      "id": "emergency_004",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "叫救护车",
      "text": "вызвать скорую помощь",
      "audioPath": "audio/ru/emergency_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_004_example",
        "zh": "请叫救护车。",
        "text": "Пожалуйста, позвоните в скорую помощь.",
        "pronunciation": "Pozhaluysta, pozvonitye v skoruyu pomoshch."
      },
      "pronunciation": "vyzvat skoruyu pomoshch"
    },
    {
      "id": "emergency_005",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "医生",
      "text": "врач",
      "audioPath": "audio/ru/emergency_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_005_example",
        "zh": "我今天需要看医生。",
        "text": "Мне нужно обратиться к врачу сегодня.",
        "pronunciation": "Mnye nuzhno obratitsya k vrachu syegodnya."
      },
      "pronunciation": "vrach"
    },
    {
      "id": "emergency_006",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "护士",
      "text": "медсестра",
      "audioPath": "audio/ru/emergency_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_006_example",
        "zh": "护士会测量您的血压。",
        "text": "Медсестра проверит ваше кровяное давление.",
        "pronunciation": "Myedsyestra provyerit vashye krovyanoye davlyeniye."
      },
      "pronunciation": "myedsyestra"
    },
    {
      "id": "emergency_007",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药",
      "text": "медицина",
      "audioPath": "audio/ru/emergency_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_007_example",
        "zh": "这种药多久服用一次？",
        "text": "Как часто мне следует принимать это лекарство?",
        "pronunciation": "Kak chasto mnye slyeduyet prinimat eto lyekarstvo?"
      },
      "pronunciation": "myeditsina"
    },
    {
      "id": "emergency_008",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "处方",
      "text": "рецепт",
      "audioPath": "audio/ru/emergency_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_008_example",
        "zh": "在俄罗斯，这种药需要处方吗？",
        "text": "В России это лекарство продаётся по рецепту?",
        "pronunciation": "V Rossii eto lyekarstvo prodayotsya po ryetsyeptu?"
      },
      "pronunciation": "ryetsyept"
    },
    {
      "id": "emergency_009",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "发烧",
      "text": "лихорадка",
      "audioPath": "audio/ru/emergency_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_009_example",
        "zh": "我从昨晚开始发烧。",
        "text": "Со вчерашнего вечера у меня температура.",
        "pronunciation": "So vchyerashnyego vyechyera u myenya tyempyeratura."
      },
      "pronunciation": "likhoradka"
    },
    {
      "id": "emergency_010",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "感冒",
      "text": "холодный",
      "audioPath": "audio/ru/emergency_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_010_example",
        "zh": "我可能只是感冒了。",
        "text": "Я думаю, что у меня просто простуда.",
        "pronunciation": "Ya dumayu, chto u myenya prosto prostuda."
      },
      "pronunciation": "kholodnyy"
    },
    {
      "id": "emergency_011",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "咳嗽",
      "text": "кашель",
      "audioPath": "audio/ru/emergency_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_011_example",
        "zh": "这种咳嗽持续了三天。",
        "text": "У меня такой кашель уже три дня.",
        "pronunciation": "U myenya takoy kashyel uzhye tri dnya."
      },
      "pronunciation": "kashyel"
    },
    {
      "id": "emergency_012",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "头疼",
      "text": "головная боль",
      "audioPath": "audio/ru/emergency_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_012_example",
        "zh": "我头疼得很厉害。",
        "text": "У меня сильная головная боль.",
        "pronunciation": "U myenya silnaya golovnaya bol."
      },
      "pronunciation": "golovnaya bol"
    },
    {
      "id": "emergency_013",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "肚子疼",
      "text": "боли в животе",
      "audioPath": "audio/ru/emergency_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_013_example",
        "zh": "吃过晚饭后我开始胃疼。",
        "text": "У меня болит живот после ужина.",
        "pronunciation": "U myenya bolit zhivot poslye uzhina."
      },
      "pronunciation": "boli v zhivotye"
    },
    {
      "id": "emergency_014",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "牙疼",
      "text": "зубная боль",
      "audioPath": "audio/ru/emergency_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_014_example",
        "zh": "我需要找急诊牙医治疗牙疼。",
        "text": "Мне нужен срочный стоматолог из-за этой зубной боли.",
        "pronunciation": "Mnye nuzhyen srochnyy stomatolog iz-za etoy zubnoy boli."
      },
      "pronunciation": "zubnaya bol"
    },
    {
      "id": "emergency_015",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "恶心",
      "text": "тошнота",
      "audioPath": "audio/ru/emergency_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_015_example",
        "zh": "这种药让我感到恶心。",
        "text": "Это лекарство вызывает у меня тошноту.",
        "pronunciation": "Eto lyekarstvo vyzyvayet u myenya toshnotu."
      },
      "pronunciation": "toshnota"
    },
    {
      "id": "emergency_016",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "呕吐",
      "text": "рвота",
      "audioPath": "audio/ru/emergency_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_016_example",
        "zh": "我从早上起一直在呕吐。",
        "text": "Меня рвет с утра.",
        "pronunciation": "Myenya rvyet s utra."
      },
      "pronunciation": "rvota"
    },
    {
      "id": "emergency_017",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "腹泻",
      "text": "диарея",
      "audioPath": "audio/ru/emergency_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_017_example",
        "zh": "我旅行时开始腹泻。",
        "text": "Во время путешествия у меня развилась диарея.",
        "pronunciation": "Vo vryemya putyeshyestviya u myenya razvilas diaryeya."
      },
      "pronunciation": "diaryeya"
    },
    {
      "id": "emergency_018",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "便秘",
      "text": "запор",
      "audioPath": "audio/ru/emergency_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_018_example",
        "zh": "这会缓解便秘吗？",
        "text": "Поможет ли это при запоре?",
        "pronunciation": "Pomozhyet li eto pri zaporye?"
      },
      "pronunciation": "zapor"
    },
    {
      "id": "emergency_019",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "受伤",
      "text": "травма",
      "audioPath": "audio/ru/emergency_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_019_example",
        "zh": "我摔倒了，膝盖受伤。",
        "text": "Я упал и повредил колено.",
        "pronunciation": "Ya upal i povryedil kolyeno."
      },
      "pronunciation": "travma"
    },
    {
      "id": "emergency_020",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "流血",
      "text": "кровотечение",
      "audioPath": "audio/ru/emergency_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_020_example",
        "zh": "伤口一直在流血。",
        "text": "Порез не остановит кровотечение.",
        "pronunciation": "Poryez nye ostanovit krovotyechyeniye."
      },
      "pronunciation": "krovotyechyeniye"
    },
    {
      "id": "emergency_021",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "骨折",
      "text": "перелом",
      "audioPath": "audio/ru/emergency_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_021_example",
        "zh": "我摔倒后脚踝可能骨折了。",
        "text": "Я упал и, возможно, сломал лодыжку.",
        "pronunciation": "Ya upal i, vozmozhno, slomal lodyzhku."
      },
      "pronunciation": "pyeryelom"
    },
    {
      "id": "emergency_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "烫伤",
      "text": "сжечь",
      "audioPath": "audio/ru/emergency_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_022_example",
        "zh": "我的手被热水烫伤了。",
        "text": "Я обжег руку горячей водой.",
        "pronunciation": "Ya obzhyeg ruku goryachyey vodoy."
      },
      "pronunciation": "szhyech"
    },
    {
      "id": "emergency_023",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "哮喘",
      "text": "астма",
      "audioPath": "audio/ru/emergency_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_023_example",
        "zh": "我有哮喘，现在呼吸有点困难。",
        "text": "У меня астма, и мне сейчас трудно дышать.",
        "pronunciation": "U myenya astma, i mnye syeychas trudno dyshat."
      },
      "pronunciation": "astma"
    },
    {
      "id": "emergency_024",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药片",
      "text": "планшет",
      "audioPath": "audio/ru/emergency_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "planshyet"
    },
    {
      "id": "emergency_025",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药膏",
      "text": "мазь",
      "audioPath": "audio/ru/emergency_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "maz"
    },
    {
      "id": "emergency_026",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "创可贴",
      "text": "пластырь",
      "audioPath": "audio/ru/emergency_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "plastyr"
    },
    {
      "id": "emergency_027",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "绷带",
      "text": "повязка",
      "audioPath": "audio/ru/emergency_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "povyazka"
    },
    {
      "id": "emergency_028",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "体温计",
      "text": "термометр",
      "audioPath": "audio/ru/emergency_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tyermomyetr"
    },
    {
      "id": "emergency_029",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "口罩",
      "text": "маска",
      "audioPath": "audio/ru/emergency_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "maska"
    },
    {
      "id": "emergency_030",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "消毒液",
      "text": "дезинфицирующее средство",
      "audioPath": "audio/ru/emergency_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dyezinfitsiruyushchyeye sryedstvo"
    },
    {
      "id": "emergency_031",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "急救箱",
      "text": "аптечка первой помощи",
      "audioPath": "audio/ru/emergency_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "aptyechka pyervoy pomoshchi"
    },
    {
      "id": "emergency_032",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "word",
      "zh": "保险",
      "text": "страхование",
      "audioPath": "audio/ru/emergency_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_emergency_032_example",
        "zh": "这家医院接受旅行保险吗？",
        "text": "Принимает ли эта больница туристическую страховку?",
        "pronunciation": "Prinimayet li eta bolnitsa turistichyeskuyu strakhovku?"
      },
      "pronunciation": "strakhovaniye"
    },
    {
      "id": "emergency_033",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "word",
      "zh": "保险卡",
      "text": "страховая карта",
      "audioPath": "audio/ru/emergency_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "strakhovaya karta"
    },
    {
      "id": "emergency_034",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我的护照丢了。",
      "text": "Я потерял паспорт.",
      "audioPath": "audio/ru/emergency_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Ya potyeryal pasport."
    },
    {
      "id": "emergency_035",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我的钱包被偷了。",
      "text": "У меня украли кошелек.",
      "audioPath": "audio/ru/emergency_035.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "U myenya ukrali koshyelyek."
    },
    {
      "id": "emergency_036",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "我需要帮助。",
      "text": "Мне нужна помощь.",
      "audioPath": "audio/ru/emergency_036.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Mnye nuzhna pomoshch."
    },
    {
      "id": "emergency_037",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请叫警察。",
      "text": "Вызовите полицию, пожалуйста.",
      "audioPath": "audio/ru/emergency_037.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Vyzovitye politsiyu, pozhaluysta."
    },
    {
      "id": "emergency_038",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请叫救护车。",
      "text": "Вызовите скорую, пожалуйста.",
      "audioPath": "audio/ru/emergency_038.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Vyzovitye skoruyu, pozhaluysta."
    },
    {
      "id": "emergency_039",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我不舒服。",
      "text": "Мне плохо.",
      "audioPath": "audio/ru/emergency_039.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Mnye plokho."
    },
    {
      "id": "emergency_040",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我生病了。",
      "text": "Я болен.",
      "audioPath": "audio/ru/emergency_040.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Ya bolyen."
    },
    {
      "id": "emergency_041",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我对药物过敏。",
      "text": "У меня аллергия на лекарства.",
      "audioPath": "audio/ru/emergency_041.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "U myenya allyergiya na lyekarstva."
    },
    {
      "id": "emergency_042",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "药店在哪里？",
      "text": "Где находится аптека?",
      "audioPath": "audio/ru/emergency_042.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Gdye nakhoditsya aptyeka?"
    },
    {
      "id": "emergency_043",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "我需要看医生。",
      "text": "Мне нужно обратиться к врачу.",
      "audioPath": "audio/ru/emergency_043.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Mnye nuzhno obratitsya k vrachu."
    },
    {
      "id": "emergency_044",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "这很紧急。",
      "text": "Это чрезвычайная ситуация.",
      "audioPath": "audio/ru/emergency_044.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Eto chryezvychaynaya situatsiya."
    },
    {
      "id": "expressions_001",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "谢谢",
      "text": "спасибо",
      "audioPath": "audio/ru/expressions_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_001_example",
        "zh": "谢谢你帮我指路。",
        "text": "Спасибо, что показали мне путь.",
        "pronunciation": "Spasibo, chto pokazali mnye put."
      },
      "pronunciation": "spasibo"
    },
    {
      "id": "expressions_002",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "非常感谢",
      "text": "большое спасибо",
      "audioPath": "audio/ru/expressions_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_002_example",
        "zh": "非常感谢您帮我找回护照。",
        "text": "Спасибо большое, что помогли мне найти мой паспорт.",
        "pronunciation": "Spasibo bolshoye, chto pomogli mnye nayti moy pasport."
      },
      "pronunciation": "bolshoye spasibo"
    },
    {
      "id": "expressions_003",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "不客气",
      "text": "пожалуйста",
      "audioPath": "audio/ru/expressions_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_003_example",
        "zh": "不客气，祝你旅途愉快。",
        "text": "Пожалуйста. Удачной поездки.",
        "pronunciation": "Pozhaluysta. Udachnoy poyezdki."
      },
      "pronunciation": "pozhaluysta"
    },
    {
      "id": "expressions_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "请 / 请给我",
      "text": "Пожалуйста",
      "audioPath": "audio/ru/expressions_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_004_example",
        "zh": "请在这里写下您的名字。",
        "text": "Пожалуйста, напишите здесь свое имя.",
        "pronunciation": "Pozhaluysta, napishitye zdyes svoye imya."
      },
      "pronunciation": "Pozhaluysta"
    },
    {
      "id": "expressions_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "不好意思 / 对不起",
      "text": "Извините",
      "audioPath": "audio/ru/expressions_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_005_example",
        "zh": "不好意思，请问出口在哪里？",
        "text": "Простите, где выход?",
        "pronunciation": "Prostitye, gdye vykhod?"
      },
      "pronunciation": "Izvinitye"
    },
    {
      "id": "expressions_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "抱歉",
      "text": "мне очень жаль",
      "audioPath": "audio/ru/expressions_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_006_example",
        "zh": "抱歉，我不小心碰倒了杯子。",
        "text": "Извините, я случайно опрокинул стекло.",
        "pronunciation": "Izvinitye, ya sluchayno oprokinul styeklo."
      },
      "pronunciation": "mnye ochyen zhal"
    },
    {
      "id": "expressions_007",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "你好",
      "text": "привет",
      "audioPath": "audio/ru/expressions_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_007_example",
        "zh": "你好，我预订了一个房间。",
        "text": "Здравствуйте, у меня забронирован номер.",
        "pronunciation": "Zdravstvuytye, u myenya zabronirovan nomyer."
      },
      "pronunciation": "privyet"
    },
    {
      "id": "expressions_008",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "早上好",
      "text": "Доброе утро",
      "audioPath": "audio/ru/expressions_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_008_example",
        "zh": "早上好，早餐几点开始？",
        "text": "Доброе утро. Во сколько начинается завтрак?",
        "pronunciation": "Dobroye utro. Vo skolko nachinayetsya zavtrak?"
      },
      "pronunciation": "Dobroye utro"
    },
    {
      "id": "expressions_009",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "晚上好",
      "text": "добрый вечер",
      "audioPath": "audio/ru/expressions_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_009_example",
        "zh": "晚上好，我现在可以办理入住吗？",
        "text": "Добрый вечер. Могу ли я зарегистрироваться сейчас?",
        "pronunciation": "Dobryy vyechyer. Mogu li ya zaryegistrirovatsya syeychas?"
      },
      "pronunciation": "dobryy vyechyer"
    },
    {
      "id": "expressions_010",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "再见",
      "text": "до свидания",
      "audioPath": "audio/ru/expressions_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_010_example",
        "zh": "再见，祝您旅途愉快。",
        "text": "До свидания. Приятного путешествия.",
        "pronunciation": "Do svidaniya. Priyatnogo putyeshyestviya."
      },
      "pronunciation": "do svidaniya"
    },
    {
      "id": "expressions_011",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "回头见",
      "text": "увидимся позже",
      "audioPath": "audio/ru/expressions_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_011_example",
        "zh": "回头见，我们晚饭时在大堂集合。",
        "text": "Увидимся позже. Давай встретимся в холле во время ужина.",
        "pronunciation": "Uvidimsya pozzhye. Davay vstryetimsya v khollye vo vryemya uzhina."
      },
      "pronunciation": "uvidimsya pozzhye"
    },
    {
      "id": "expressions_012",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "晚安",
      "text": "Спокойной ночи",
      "audioPath": "audio/ru/expressions_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_012_example",
        "zh": "晚安，明天见。",
        "text": "Спокойной ночи. Увидимся завтра.",
        "pronunciation": "Spokoynoy nochi. Uvidimsya zavtra."
      },
      "pronunciation": "Spokoynoy nochi"
    },
    {
      "id": "expressions_013",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "欢迎光临",
      "text": "Добро пожаловать",
      "audioPath": "audio/ru/expressions_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_013_example",
        "zh": "欢迎光临，请问您预订了吗？",
        "text": "Добро пожаловать. Вы бронировали?",
        "pronunciation": "Dobro pozhalovat. Vy bronirovali?"
      },
      "pronunciation": "Dobro pozhalovat"
    },
    {
      "id": "expressions_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我明白了。",
      "text": "Я понимаю.",
      "audioPath": "audio/ru/expressions_014.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Ya ponimayu."
    },
    {
      "id": "expressions_015",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我不明白。",
      "text": "Я не понимаю.",
      "audioPath": "audio/ru/expressions_015.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Ya nye ponimayu."
    },
    {
      "id": "expressions_016",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "是的",
      "text": "да",
      "audioPath": "audio/ru/expressions_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_016_example",
        "zh": "是的，我订了两晚。",
        "text": "Да, у меня бронь на две ночи.",
        "pronunciation": "Da, u myenya bron na dvye nochi."
      },
      "pronunciation": "da"
    },
    {
      "id": "expressions_017",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "不是",
      "text": "нет",
      "audioPath": "audio/ru/expressions_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_017_example",
        "zh": "不是，这不是我的行李。",
        "text": "Нет, это не мой багаж.",
        "pronunciation": "Nyet, eto nye moy bagazh."
      },
      "pronunciation": "nyet"
    },
    {
      "id": "expressions_018",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "可以",
      "text": "окей",
      "audioPath": "audio/ru/expressions_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_018_example",
        "zh": "我现在可以进房间了吗？",
        "text": "Могу ли я сейчас войти в комнату?",
        "pronunciation": "Mogu li ya syeychas voyti v komnatu?"
      },
      "pronunciation": "okyey"
    },
    {
      "id": "expressions_019",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "没关系",
      "text": "все в порядке",
      "audioPath": "audio/ru/expressions_019.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "vsye v poryadkye"
    },
    {
      "id": "expressions_020",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "没问题",
      "text": "нет проблем",
      "audioPath": "audio/ru/expressions_020.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "nyet problyem"
    },
    {
      "id": "expressions_021",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "好的",
      "text": "ОК",
      "audioPath": "audio/ru/expressions_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_021_example",
        "zh": "好的，我会在八点到大堂。",
        "text": "Хорошо, я буду в вестибюле в восемь.",
        "pronunciation": "Khorosho, ya budu v vyestibyulye v vosyem."
      },
      "pronunciation": "OK"
    },
    {
      "id": "expressions_022",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我喜欢",
      "text": "мне это нравится",
      "audioPath": "audio/ru/expressions_022.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "mnye eto nravitsya"
    },
    {
      "id": "expressions_023",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我不喜欢",
      "text": "мне это не нравится",
      "audioPath": "audio/ru/expressions_023.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "mnye eto nye nravitsya"
    },
    {
      "id": "expressions_024",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "想要",
      "text": "хочу",
      "audioPath": "audio/ru/expressions_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_024_example",
        "zh": "我想要一间安静的房间。",
        "text": "Мне нужна тихая комната.",
        "pronunciation": "Mnye nuzhna tikhaya komnata."
      },
      "pronunciation": "khochu"
    },
    {
      "id": "expressions_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "需要",
      "text": "необходимость",
      "audioPath": "audio/ru/expressions_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_025_example",
        "zh": "办理入住需要护照吗？",
        "text": "Нужен ли мне паспорт для регистрации заезда?",
        "pronunciation": "Nuzhyen li mnye pasport dlya ryegistratsii zayezda?"
      },
      "pronunciation": "nyeobkhodimost"
    },
    {
      "id": "expressions_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "有",
      "text": "есть / есть",
      "audioPath": "audio/ru/expressions_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_026_example",
        "zh": "今晚还有空房吗？",
        "text": "У вас есть свободные номера сегодня вечером?",
        "pronunciation": "U vas yest svobodnyye nomyera syegodnya vyechyerom?"
      },
      "pronunciation": "yest / yest"
    },
    {
      "id": "expressions_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "没有",
      "text": "нет / нет",
      "audioPath": "audio/ru/expressions_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_027_example",
        "zh": "现在没有空房。",
        "text": "На данный момент свободных номеров нет.",
        "pronunciation": "Na dannyy momyent svobodnykh nomyerov nyet."
      },
      "pronunciation": "nyet / nyet"
    },
    {
      "id": "expressions_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "是",
      "text": "есть",
      "audioPath": "audio/ru/expressions_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "ru-ru_expressions_028_example",
        "zh": "是的，这张票是去机场的。",
        "text": "Да, это билет в аэропорт.",
        "pronunciation": "Da, eto bilyet v aeroport."
      },
      "pronunciation": "yest"
    },
    {
      "id": "expressions_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不是",
      "text": "не",
      "audioPath": "audio/ru/expressions_029.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "nye"
    },
    {
      "id": "expressions_030",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我叫……",
      "text": "меня зовут...",
      "audioPath": "audio/ru/expressions_030.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "myenya zovut..."
    },
    {
      "id": "expressions_031",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "你叫什么名字？",
      "text": "Как тебя зовут?",
      "audioPath": "audio/ru/expressions_031.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Kak tyebya zovut?"
    },
    {
      "id": "expressions_032",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我是中国人。",
      "text": "Я китаец.",
      "audioPath": "audio/ru/expressions_032.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Ya kitayets."
    },
    {
      "id": "expressions_033",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "您会说英语吗？",
      "text": "Вы говорите по-английски?",
      "audioPath": "audio/ru/expressions_033.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Vy govoritye po-angliyski?"
    },
    {
      "id": "expressions_034",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请说慢一点。",
      "text": "Говорите, пожалуйста, помедленнее.",
      "audioPath": "audio/ru/expressions_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Govoritye, pozhaluysta, pomyedlyennyeye."
    },
    {
      "id": "expressions_035",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请再说一遍。",
      "text": "Повторите, пожалуйста.",
      "audioPath": "audio/ru/expressions_035.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Povtoritye, pozhaluysta."
    },
    {
      "id": "expressions_036",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "什么意思？",
      "text": "Что это значит?",
      "audioPath": "audio/ru/expressions_036.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Chto eto znachit?"
    },
    {
      "id": "expressions_037",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "怎么读？",
      "text": "Как вы это читаете?",
      "audioPath": "audio/ru/expressions_037.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Kak vy eto chitayetye?"
    },
    {
      "id": "expressions_038",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "怎么写？",
      "text": "Как вы это пишете?",
      "audioPath": "audio/ru/expressions_038.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Kak vy eto pishyetye?"
    },
    {
      "id": "expressions_039",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "多少钱？",
      "text": "Сколько это стоит?",
      "audioPath": "audio/ru/expressions_039.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Skolko eto stoit?"
    },
    {
      "id": "expressions_040",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "在哪里？",
      "text": "Где это?",
      "audioPath": "audio/ru/expressions_040.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Gdye eto?"
    },
    {
      "id": "expressions_041",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "什么时候？",
      "text": "Когда это?",
      "audioPath": "audio/ru/expressions_041.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Kogda eto?"
    },
    {
      "id": "expressions_042",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "为什么？",
      "text": "Почему?",
      "audioPath": "audio/ru/expressions_042.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Pochyemu?"
    },
    {
      "id": "expressions_043",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "怎么办？",
      "text": "Что я должен делать?",
      "audioPath": "audio/ru/expressions_043.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Chto ya dolzhyen dyelat?"
    },
    {
      "id": "expressions_044",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以吗？",
      "text": "Это нормально?",
      "audioPath": "audio/ru/expressions_044.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Eto normalno?"
    },
    {
      "id": "expressions_045",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以。",
      "text": "Все в порядке.",
      "audioPath": "audio/ru/expressions_045.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Vsye v poryadkye."
    },
    {
      "id": "expressions_046",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不行。",
      "text": "Нет/не разрешено.",
      "audioPath": "audio/ru/expressions_046.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "Nyet/nye razryeshyeno."
    },
    {
      "id": "expressions_047",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "有中文吗？",
      "text": "У вас есть китайский?",
      "audioPath": "audio/ru/expressions_047.mp3",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "U vas yest kitayskiy?"
    },
    {
      "id": "ru_airport_phrase_001",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我需要填写入境卡吗？",
      "text": "Мне нужно заполнить миграционную карту?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Mnye nuzhno zapolnit migratsionnuyu kartu?",
      "audioPath": "audio/ru/ru_airport_phrase_001.mp3"
    },
    {
      "id": "ru_airport_phrase_002",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我的签证有问题，可以帮我吗？",
      "text": "У меня проблема с визой, вы можете мне помочь?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "U myenya problyema s vizoy, vy mozhyetye mnye pomoch?",
      "audioPath": "audio/ru/ru_airport_phrase_002.mp3"
    },
    {
      "id": "ru_airport_phrase_003",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "可以确认一下机票上的日期吗？",
      "text": "Можете ли вы проверить дату на моем билете?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Mozhyetye li vy provyerit datu na moyem bilyetye?",
      "audioPath": "audio/ru/ru_airport_phrase_003.mp3"
    },
    {
      "id": "ru_airport_phrase_004",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我的航班从哪个航站楼出发？",
      "text": "Из какого терминала вылетает мой рейс?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Iz kakogo tyerminala vylyetayet moy ryeys?",
      "audioPath": "audio/ru/ru_airport_phrase_004.mp3"
    },
    {
      "id": "ru_airport_phrase_005",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "这张登机牌可以用吗？",
      "text": "Действителен ли этот посадочный талон?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Dyeystvityelyen li etot posadochnyy talon?",
      "audioPath": "audio/ru/ru_airport_phrase_005.mp3"
    },
    {
      "id": "ru_airport_phrase_006",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "值机柜台在哪里？",
      "text": "Где находится стойка регистрации?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Gdye nakhoditsya stoyka ryegistratsii?",
      "audioPath": "audio/ru/ru_airport_phrase_006.mp3"
    },
    {
      "id": "ru_airport_phrase_007",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "我想换一个座位。",
      "text": "Я хотел бы пересесть.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Ya khotyel by pyeryesyest.",
      "audioPath": "audio/ru/ru_airport_phrase_007.mp3"
    },
    {
      "id": "ru_airport_phrase_008",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "还有靠窗的座位吗？",
      "text": "Осталось место у окна?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Ostalos myesto u okna?",
      "audioPath": "audio/ru/ru_airport_phrase_008.mp3"
    },
    {
      "id": "ru_airport_phrase_009",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "可以给我一个靠过道的座位吗？",
      "text": "Можете ли вы дать мне место рядом с проходом?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Mozhyetye li vy dat mnye myesto ryadom s prokhodom?",
      "audioPath": "audio/ru/ru_airport_phrase_009.mp3"
    },
    {
      "id": "ru_airport_phrase_010",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "我可以免费托运几件行李？",
      "text": "Сколько мест багажа я могу зарегистрировать бесплатно?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Skolko myest bagazha ya mogu zaryegistrirovat byesplatno?",
      "audioPath": "audio/ru/ru_airport_phrase_010.mp3"
    },
    {
      "id": "ru_airport_phrase_011",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "我的行李箱在运输中损坏了。",
      "text": "Мой чемодан повредился во время поездки.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Moy chyemodan povryedilsya vo vryemya poyezdki.",
      "audioPath": "audio/ru/ru_airport_phrase_011.mp3"
    },
    {
      "id": "ru_airport_phrase_012",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "这件行李可以带进客舱吗？",
      "text": "Могу ли я провезти этот багаж в салоне?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Mogu li ya provyezti etot bagazh v salonye?",
      "audioPath": "audio/ru/ru_airport_phrase_012.mp3"
    },
    {
      "id": "ru_airport_phrase_013",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "这个航班的行李在几号转盘？",
      "text": "На какую карусель прибудет багаж этого рейса?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Na kakuyu karusyel pribudyet bagazh etogo ryeysa?",
      "audioPath": "audio/ru/ru_airport_phrase_013.mp3"
    },
    {
      "id": "ru_airport_phrase_014",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "哪里可以找到行李推车？",
      "text": "Где найти тележку для багажа?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Gdye nayti tyelyezhku dlya bagazha?",
      "audioPath": "audio/ru/ru_airport_phrase_014.mp3"
    },
    {
      "id": "ru_airport_phrase_015",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "这是安检队伍吗？",
      "text": "Это очередь на досмотр?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "Eto ochyeryed na dosmotr?",
      "audioPath": "audio/ru/ru_airport_phrase_015.mp3"
    },
    {
      "id": "ru_airport_phrase_016",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "免税店在安检后面吗？",
      "text": "Магазин беспошлинной торговли прошел охрану?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Magazin byesposhlinnoy torgovli proshyel okhranu?",
      "audioPath": "audio/ru/ru_airport_phrase_016.mp3"
    },
    {
      "id": "ru_airport_phrase_017",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "候机区有充电插座吗？",
      "text": "Есть ли розетки для зарядки в зоне ворот?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Yest li rozyetki dlya zaryadki v zonye vorot?",
      "audioPath": "audio/ru/ru_airport_phrase_017.mp3"
    },
    {
      "id": "ru_airport_phrase_018",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "过安检时要取出电脑吗？",
      "text": "Нужно ли мне отнести свой ноутбук на охрану?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Nuzhno li mnye otnyesti svoy noutbuk na okhranu?",
      "audioPath": "audio/ru/ru_airport_phrase_018.mp3"
    },
    {
      "id": "ru_airport_phrase_019",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "您的航班延误了四十五分钟。",
      "text": "Ваш рейс задерживается на сорок пять минут.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vash ryeys zadyerzhivayetsya na sorok pyat minut.",
      "audioPath": "audio/ru/ru_airport_phrase_019.mp3"
    },
    {
      "id": "ru_airport_phrase_020",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "登机口已改到B12。",
      "text": "Выход на посадку изменён на B12.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vykhod na posadku izmyenyon na B12.",
      "audioPath": "audio/ru/ru_airport_phrase_020.mp3"
    },
    {
      "id": "ru_airport_phrase_021",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请把笔记本电脑从包里取出。",
      "text": "Пожалуйста, достаньте ноутбук из сумки.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Pozhaluysta, dostantye noutbuk iz sumki.",
      "audioPath": "audio/ru/ru_airport_phrase_021.mp3"
    },
    {
      "id": "ru_airport_phrase_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "登机时间是几点？",
      "text": "Во сколько посадка?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Vo skolko posadka?",
      "audioPath": "audio/ru/ru_airport_phrase_022.mp3"
    },
    {
      "id": "ru_airport_phrase_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "现在开始登机。",
      "text": "Посадка уже начинается.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Posadka uzhye nachinayetsya.",
      "audioPath": "audio/ru/ru_airport_phrase_023.mp3"
    },
    {
      "id": "ru_airport_phrase_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "我已经在线提交了海关申报。",
      "text": "Я уже подал таможенную декларацию онлайн.",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "Ya uzhye podal tamozhyennuyu dyeklaratsiyu onlayn.",
      "audioPath": "audio/ru/ru_airport_phrase_024.mp3"
    },
    {
      "id": "ru_airport_phrase_025",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "我需要申报这些物品吗？",
      "text": "Должен ли я декларировать эти предметы на таможне?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Dolzhyen li ya dyeklarirovat eti pryedmyety na tamozhnye?",
      "audioPath": "audio/ru/ru_airport_phrase_025.mp3"
    },
    {
      "id": "ru_airport_phrase_026",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "您的行李超重了。",
      "text": "Вес вашего багажа превышает норму.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vyes vashyego bagazha pryevyshayet normu.",
      "audioPath": "audio/ru/ru_airport_phrase_026.mp3"
    },
    {
      "id": "ru_airport_phrase_027",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "机场快线在哪里乘坐？",
      "text": "Где можно сесть на Аэроэкспресс?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Gdye mozhno syest na Aeroekspryess?",
      "audioPath": "audio/ru/ru_airport_phrase_027.mp3"
    },
    {
      "id": "ru_airport_phrase_028",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "请出示护照和登机牌。",
      "text": "Покажите, пожалуйста, паспорт и посадочный талон.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Pokazhitye, pozhaluysta, pasport i posadochnyy talon.",
      "audioPath": "audio/ru/ru_airport_phrase_028.mp3"
    },
    {
      "id": "ru_airport_phrase_029",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "这是本次航班的最后登机通知。",
      "text": "Это последнее объявление о посадке на ваш рейс.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Eto poslyednyeye obyavlyeniye o posadkye na vash ryeys.",
      "audioPath": "audio/ru/ru_airport_phrase_029.mp3"
    },
    {
      "id": "ru_airport_phrase_030",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "您的行李会在五号转盘出来。",
      "text": "Ваш багаж будет на пятой ленте.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vash bagazh budyet na pyatoy lyentye.",
      "audioPath": "audio/ru/ru_airport_phrase_030.mp3"
    },
    {
      "id": "ru_transport_phrase_001",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "在哪里可以买交通卡？",
      "text": "Где можно купить транспортную карту?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "Gdye mozhno kupit transportnuyu kartu?",
      "audioPath": "audio/ru/ru_transport_phrase_001.mp3"
    },
    {
      "id": "ru_transport_phrase_002",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "这里可以买“三套车”卡吗？",
      "text": "Здесь можно купить карту «Тройка»?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Zdyes mozhno kupit kartu «Troyka»?",
      "audioPath": "audio/ru/ru_transport_phrase_002.mp3"
    },
    {
      "id": "ru_transport_phrase_003",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "去圣彼得堡的列车从哪个站台出发？",
      "text": "С какой платформы отправляется поезд в Санкт-Петербург?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "S kakoy platformy otpravlyayetsya poyezd v Sankt-Pyetyerburg?",
      "audioPath": "audio/ru/ru_transport_phrase_003.mp3"
    },
    {
      "id": "ru_transport_phrase_004",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "下一班车几点出发？",
      "text": "Во сколько отправляется следующий поезд?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Vo skolko otpravlyayetsya slyeduyushchiy poyezd?",
      "audioPath": "audio/ru/ru_transport_phrase_004.mp3"
    },
    {
      "id": "ru_transport_phrase_005",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "请给我一张去喀山的单程票。",
      "text": "Один билет в одну сторону до Казани, пожалуйста.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Odin bilyet v odnu storonu do Kazani, pozhaluysta.",
      "audioPath": "audio/ru/ru_transport_phrase_005.mp3"
    },
    {
      "id": "ru_transport_phrase_006",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "最近的地铁入口在哪里？",
      "text": "Где ближайший вход в метро?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Gdye blizhayshiy vkhod v myetro?",
      "audioPath": "audio/ru/ru_transport_phrase_006.mp3"
    },
    {
      "id": "ru_transport_phrase_007",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "这辆公交车去机场吗？",
      "text": "Этот автобус идет в аэропорт?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Etot avtobus idyet v aeroport?",
      "audioPath": "audio/ru/ru_transport_phrase_007.mp3"
    },
    {
      "id": "ru_transport_phrase_008",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "我需要换乘地铁吗？",
      "text": "Нужно ли мне пересаживаться в метро?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Nuzhno li mnye pyeryesazhivatsya v myetro?",
      "audioPath": "audio/ru/ru_transport_phrase_008.mp3"
    },
    {
      "id": "ru_transport_phrase_009",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "公交车票可以上车后买吗？",
      "text": "Могу ли я купить билет после того, как сяду в автобус?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Mogu li ya kupit bilyet poslye togo, kak syadu v avtobus?",
      "audioPath": "audio/ru/ru_transport_phrase_009.mp3"
    },
    {
      "id": "ru_transport_phrase_010",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "最后一班地铁是几点？",
      "text": "Во сколько последний поезд метро?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Vo skolko poslyedniy poyezd myetro?",
      "audioPath": "audio/ru/ru_transport_phrase_010.mp3"
    },
    {
      "id": "ru_transport_phrase_011",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "这是去火车站的站台吗？",
      "text": "Это платформа для поезда до вокзала?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Eto platforma dlya poyezda do vokzala?",
      "audioPath": "audio/ru/ru_transport_phrase_011.mp3"
    },
    {
      "id": "ru_transport_phrase_012",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "我错过了火车，可以改签吗？",
      "text": "Я опоздал на поезд. Могу ли я поменять свой билет?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Ya opozdal na poyezd. Mogu li ya pomyenyat svoy bilyet?",
      "audioPath": "audio/ru/ru_transport_phrase_012.mp3"
    },
    {
      "id": "ru_transport_phrase_013",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "这趟火车需要预订座位吗？",
      "text": "Нужно ли мне бронировать место в этом поезде?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Nuzhno li mnye bronirovat myesto v etom poyezdye?",
      "audioPath": "audio/ru/ru_transport_phrase_013.mp3"
    },
    {
      "id": "ru_transport_phrase_014",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "这是直达列车吗？",
      "text": "Это прямой поезд?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Eto pryamoy poyezd?",
      "audioPath": "audio/ru/ru_transport_phrase_014.mp3"
    },
    {
      "id": "ru_transport_phrase_015",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "火车会在哪些车站停靠？",
      "text": "На каких станциях останавливается поезд?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Na kakikh stantsiyakh ostanavlivayetsya poyezd?",
      "audioPath": "audio/ru/ru_transport_phrase_015.mp3"
    },
    {
      "id": "ru_transport_phrase_016",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "网约车上车点在哪里？",
      "text": "Где находится зона посадки пассажиров?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "Gdye nakhoditsya zona posadki passazhirov?",
      "audioPath": "audio/ru/ru_transport_phrase_016.mp3"
    },
    {
      "id": "ru_transport_phrase_017",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "可以帮我叫一辆出租车吗？",
      "text": "Ты можешь вызвать мне такси?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Ty mozhyesh vyzvat mnye taksi?",
      "audioPath": "audio/ru/ru_transport_phrase_017.mp3"
    },
    {
      "id": "ru_transport_phrase_018",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "出租车可以刷卡吗？",
      "text": "Могу ли я оплатить такси картой?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Mogu li ya oplatit taksi kartoy?",
      "audioPath": "audio/ru/ru_transport_phrase_018.mp3"
    },
    {
      "id": "ru_transport_phrase_019",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "这张票九十分钟内有效。",
      "text": "Этот билет действует девяносто минут.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Etot bilyet dyeystvuyet dyevyanosto minut.",
      "audioPath": "audio/ru/ru_transport_phrase_019.mp3"
    },
    {
      "id": "ru_transport_phrase_020",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "下一站是中央车站。",
      "text": "Следующая остановка — Центральный вокзал.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Slyeduyushchaya ostanovka — Tsyentralnyy vokzal.",
      "audioPath": "audio/ru/ru_transport_phrase_020.mp3"
    },
    {
      "id": "ru_transport_phrase_021",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "末班车已经开走了。",
      "text": "Последний поезд уже ушёл.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Poslyedniy poyezd uzhye ushyol.",
      "audioPath": "audio/ru/ru_transport_phrase_021.mp3"
    },
    {
      "id": "ru_transport_phrase_022",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "换乘需要重新买票吗？",
      "text": "При пересадке нужно покупать новый билет?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Pri pyeryesadkye nuzhno pokupat novyy bilyet?",
      "audioPath": "audio/ru/ru_transport_phrase_022.mp3"
    },
    {
      "id": "ru_transport_phrase_023",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请在三号站台换乘。",
      "text": "Пересядьте на третьей платформе.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Pyeryesyadtye na tryetyey platformye.",
      "audioPath": "audio/ru/ru_transport_phrase_023.mp3"
    },
    {
      "id": "ru_transport_phrase_024",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "这里可以停车吗？",
      "text": "Можно ли здесь припарковаться?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Mozhno li zdyes priparkovatsya?",
      "audioPath": "audio/ru/ru_transport_phrase_024.mp3"
    },
    {
      "id": "ru_transport_phrase_025",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "在红绿灯处右转。",
      "text": "Поверните направо на светофоре.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Povyernitye napravo na svyetoforye.",
      "audioPath": "audio/ru/ru_transport_phrase_025.mp3"
    },
    {
      "id": "ru_transport_phrase_026",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "下车时也请刷交通卡。",
      "text": "При выходе тоже приложите транспортную карту.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Pri vykhodye tozhye prilozhitye transportnuyu kartu.",
      "audioPath": "audio/ru/ru_transport_phrase_026.mp3"
    },
    {
      "id": "ru_transport_phrase_027",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "我预订了一辆租赁汽车。",
      "text": "Я забронировал прокатный автомобиль.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Ya zabroniroval prokatnyy avtomobil.",
      "audioPath": "audio/ru/ru_transport_phrase_027.mp3"
    },
    {
      "id": "ru_transport_phrase_028",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "到机场的车费大约是四十美元。",
      "text": "Поездка до аэропорта стоит около сорока долларов.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Poyezdka do aeroporta stoit okolo soroka dollarov.",
      "audioPath": "audio/ru/ru_transport_phrase_028.mp3"
    },
    {
      "id": "ru_transport_phrase_029",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "请在下一站下车。",
      "text": "Выходите на следующей остановке.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vykhoditye na slyeduyushchyey ostanovkye.",
      "audioPath": "audio/ru/ru_transport_phrase_029.mp3"
    },
    {
      "id": "ru_transport_phrase_030",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "今天这条线路暂停运营。",
      "text": "Сегодня эта линия не работает.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Syegodnya eta liniya nye rabotayet.",
      "audioPath": "audio/ru/ru_transport_phrase_030.mp3"
    },
    {
      "id": "ru_hotel_phrase_001",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "请问酒店前台在哪里？",
      "text": "Где находится стойка регистрации отеля?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Gdye nakhoditsya stoyka ryegistratsii otyelya?",
      "audioPath": "audio/ru/ru_hotel_phrase_001.mp3"
    },
    {
      "id": "ru_hotel_phrase_002",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "我用这个名字订了房。",
      "text": "У меня бронь на это имя.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "U myenya bron na eto imya.",
      "audioPath": "audio/ru/ru_hotel_phrase_002.mp3"
    },
    {
      "id": "ru_hotel_phrase_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "这家旅游住宿可以寄存行李吗？",
      "text": "Может ли этот отель оставить мой багаж?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Mozhyet li etot otyel ostavit moy bagazh?",
      "audioPath": "audio/ru/ru_hotel_phrase_003.mp3"
    },
    {
      "id": "ru_hotel_phrase_004",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "我可以在前台办理入住吗？",
      "text": "Могу ли я зарегистрироваться на стойке регистрации?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Mogu li ya zaryegistrirovatsya na stoykye ryegistratsii?",
      "audioPath": "audio/ru/ru_hotel_phrase_004.mp3"
    },
    {
      "id": "ru_hotel_phrase_005",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "请帮我查一下这个姓名下的预订。",
      "text": "Не могли бы вы найти бронирование под этим именем?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Nye mogli by vy nayti bronirovaniye pod etim imyenyem?",
      "audioPath": "audio/ru/ru_hotel_phrase_005.mp3"
    },
    {
      "id": "ru_hotel_phrase_006",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "最早几点可以入住？",
      "text": "В какое самое раннее время я могу зарегистрироваться?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "V kakoye samoye rannyeye vryemya ya mogu zaryegistrirovatsya?",
      "audioPath": "audio/ru/ru_hotel_phrase_006.mp3"
    },
    {
      "id": "ru_hotel_phrase_007",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我把房间钥匙弄丢了。",
      "text": "Я потерял ключ от номера.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Ya potyeryal klyuch ot nomyera.",
      "audioPath": "audio/ru/ru_hotel_phrase_007.mp3"
    },
    {
      "id": "ru_hotel_phrase_008",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我的房卡失效了。",
      "text": "Моя ключ-карта не работает.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Moya klyuch-karta nye rabotayet.",
      "audioPath": "audio/ru/ru_hotel_phrase_008.mp3"
    },
    {
      "id": "ru_hotel_phrase_009",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "可以请人帮我拿行李吗？",
      "text": "Может ли кто-нибудь помочь мне с моим багажом?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Mozhyet li kto-nibud pomoch mnye s moim bagazhom?",
      "audioPath": "audio/ru/ru_hotel_phrase_009.mp3"
    },
    {
      "id": "ru_hotel_phrase_010",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我需要找一位工作人员。",
      "text": "Мне нужно поговорить с кем-нибудь из персонала.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Mnye nuzhno pogovorit s kyem-nibud iz pyersonala.",
      "audioPath": "audio/ru/ru_hotel_phrase_010.mp3"
    },
    {
      "id": "ru_hotel_phrase_011",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "可以再送两条毛巾吗？",
      "text": "Можешь принести мне еще два полотенца?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Mozhyesh prinyesti mnye yeshchye dva polotyentsa?",
      "audioPath": "audio/ru/ru_hotel_phrase_011.mp3"
    },
    {
      "id": "ru_hotel_phrase_012",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "请更换一下床单。",
      "text": "Можете ли вы сменить простыни, пожалуйста?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Mozhyetye li vy smyenit prostyni, pozhaluysta?",
      "audioPath": "audio/ru/ru_hotel_phrase_012.mp3"
    },
    {
      "id": "ru_hotel_phrase_013",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "可以再给我一个枕头吗？",
      "text": "Можешь принести мне еще одну подушку?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Mozhyesh prinyesti mnye yeshchye odnu podushku?",
      "audioPath": "audio/ru/ru_hotel_phrase_013.mp3"
    },
    {
      "id": "ru_hotel_phrase_014",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "被子不够暖和。",
      "text": "Одеяло недостаточно теплое.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Odyeyalo nyedostatochno tyeploye.",
      "audioPath": "audio/ru/ru_hotel_phrase_014.mp3"
    },
    {
      "id": "ru_hotel_phrase_015",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "可以晚一点退房吗？",
      "text": "Могу ли я получить поздний выезд?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "Mogu li ya poluchit pozdniy vyyezd?",
      "audioPath": "audio/ru/ru_hotel_phrase_015.mp3"
    },
    {
      "id": "ru_hotel_phrase_016",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "今天不用打扫房间。",
      "text": "Мне сегодня не нужна уборка.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Mnye syegodnya nye nuzhna uborka.",
      "audioPath": "audio/ru/ru_hotel_phrase_016.mp3"
    },
    {
      "id": "ru_hotel_phrase_017",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请明早七点叫醒我。",
      "text": "Могу ли я получить звонок для пробуждения завтра в семь утра?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Mogu li ya poluchit zvonok dlya probuzhdyeniya zavtra v syem utra?",
      "audioPath": "audio/ru/ru_hotel_phrase_017.mp3"
    },
    {
      "id": "ru_hotel_phrase_018",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "洗衣服务什么时候送回来？",
      "text": "Когда мне вернут мое белье?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Kogda mnye vyernut moye byelye?",
      "audioPath": "audio/ru/ru_hotel_phrase_018.mp3"
    },
    {
      "id": "ru_hotel_phrase_019",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "您的房间在八楼。",
      "text": "Ваш номер находится на восьмом этаже.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vash nomyer nakhoditsya na vosmom etazhye.",
      "audioPath": "audio/ru/ru_hotel_phrase_019.mp3"
    },
    {
      "id": "ru_hotel_phrase_020",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "早餐时间是六点半到十点。",
      "text": "Завтрак подают с половины седьмого до десяти.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Zavtrak podayut s poloviny syedmogo do dyesyati.",
      "audioPath": "audio/ru/ru_hotel_phrase_020.mp3"
    },
    {
      "id": "ru_hotel_phrase_021",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "Wi-Fi密码写在房卡套上。",
      "text": "Пароль от Wi-Fi указан на конверте от ключ-карты.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Parol ot Wi-Fi ukazan na konvyertye ot klyuch-karty.",
      "audioPath": "audio/ru/ru_hotel_phrase_021.mp3"
    },
    {
      "id": "ru_hotel_phrase_022",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "烟雾报警器一直在响。",
      "text": "Детектор дыма не перестает звонить.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Dyetyektor dyma nye pyeryestayet zvonit.",
      "audioPath": "audio/ru/ru_hotel_phrase_022.mp3"
    },
    {
      "id": "ru_hotel_phrase_023",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "房间还没准备好。",
      "text": "Ваш номер ещё не готов.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vash nomyer yeshchyo nye gotov.",
      "audioPath": "audio/ru/ru_hotel_phrase_023.mp3"
    },
    {
      "id": "ru_hotel_phrase_024",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我想要一间朝内院的安静房间。",
      "text": "Мне нужен тихий номер с видом во двор.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Mnye nuzhyen tikhiy nomyer s vidom vo dvor.",
      "audioPath": "audio/ru/ru_hotel_phrase_024.mp3"
    },
    {
      "id": "ru_hotel_phrase_025",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "隔壁房间太吵了。",
      "text": "В соседней комнате слишком шумно.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "V sosyednyey komnatye slishkom shumno.",
      "audioPath": "audio/ru/ru_hotel_phrase_025.mp3"
    },
    {
      "id": "ru_hotel_phrase_026",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我们可以免费寄存行李。",
      "text": "Мы можем бесплатно оставить ваш багаж на хранение.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "My mozhyem byesplatno ostavit vash bagazh na khranyeniye.",
      "audioPath": "audio/ru/ru_hotel_phrase_026.mp3"
    },
    {
      "id": "ru_hotel_phrase_027",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "我现在想办理退房。",
      "text": "Я хотел бы выехать сейчас.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Ya khotyel by vyyekhat syeychas.",
      "audioPath": "audio/ru/ru_hotel_phrase_027.mp3"
    },
    {
      "id": "ru_hotel_phrase_028",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "延迟退房需要额外收费。",
      "text": "За поздний выезд взимается дополнительная плата.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Za pozdniy vyyezd vzimayetsya dopolnityelnaya plata.",
      "audioPath": "audio/ru/ru_hotel_phrase_028.mp3"
    },
    {
      "id": "ru_hotel_phrase_029",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "请在这里签名。",
      "text": "Распишитесь, пожалуйста, здесь.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Raspishityes, pozhaluysta, zdyes.",
      "audioPath": "audio/ru/ru_hotel_phrase_029.mp3"
    },
    {
      "id": "ru_hotel_phrase_030",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "电梯在前台右边。",
      "text": "Лифт находится справа от стойки регистрации.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Lift nakhoditsya sprava ot stoyki ryegistratsii.",
      "audioPath": "audio/ru/ru_hotel_phrase_030.mp3"
    },
    {
      "id": "ru_food_phrase_001",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "请问有两个人的桌位吗？",
      "text": "У вас есть столик на двоих?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "U vas yest stolik na dvoikh?",
      "audioPath": "audio/ru/ru_food_phrase_001.mp3"
    },
    {
      "id": "ru_food_phrase_002",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "午餐有套餐吗？",
      "text": "У вас есть специальный обед?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "U vas yest spyetsialnyy obyed?",
      "audioPath": "audio/ru/ru_food_phrase_002.mp3"
    },
    {
      "id": "ru_food_phrase_003",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "我想预订今晚八点的晚餐。",
      "text": "Я хотел бы зарезервировать столик на ужин в восемь.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Ya khotyel by zaryezyervirovat stolik na uzhin v vosyem.",
      "audioPath": "audio/ru/ru_food_phrase_003.mp3"
    },
    {
      "id": "ru_food_phrase_004",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "劳驾，我们可以点餐了吗？",
      "text": "Извините, мы можем сделать заказ сейчас?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Izvinitye, my mozhyem sdyelat zakaz syeychas?",
      "audioPath": "audio/ru/ru_food_phrase_004.mp3"
    },
    {
      "id": "ru_food_phrase_005",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "有带图片的菜单吗？",
      "text": "У вас есть меню с фотографиями?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "U vas yest myenyu s fotografiyami?",
      "audioPath": "audio/ru/ru_food_phrase_005.mp3"
    },
    {
      "id": "ru_food_phrase_006",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "米饭可以换成沙拉吗？",
      "text": "Могу ли я заменить рис на салат?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Mogu li ya zamyenit ris na salat?",
      "audioPath": "audio/ru/ru_food_phrase_006.mp3"
    },
    {
      "id": "ru_food_phrase_007",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "可以再给我们一些面包吗？",
      "text": "Можешь принести нам еще хлеба?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Mozhyesh prinyesti nam yeshchye khlyeba?",
      "audioPath": "audio/ru/ru_food_phrase_007.mp3"
    },
    {
      "id": "ru_food_phrase_008",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请推荐一道本地菜。",
      "text": "Посоветуйте, пожалуйста, местное блюдо.",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "Posovyetuytye, pozhaluysta, myestnoye blyudo.",
      "audioPath": "audio/ru/ru_food_phrase_008.mp3"
    },
    {
      "id": "ru_food_phrase_009",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请给我一瓶不带气的水。",
      "text": "Бутылку негазированной воды, пожалуйста.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Butylku nyegazirovannoy vody, pozhaluysta.",
      "audioPath": "audio/ru/ru_food_phrase_009.mp3"
    },
    {
      "id": "ru_food_phrase_010",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "可以给我一杯热水吗？",
      "text": "Можно мне чашку горячей воды?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Mozhno mnye chashku goryachyey vody?",
      "audioPath": "audio/ru/ru_food_phrase_010.mp3"
    },
    {
      "id": "ru_food_phrase_011",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "你们有什么茶？",
      "text": "Какие сорта чая у вас есть?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Kakiye sorta chaya u vas yest?",
      "audioPath": "audio/ru/ru_food_phrase_011.mp3"
    },
    {
      "id": "ru_food_phrase_012",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请给我一杯少量牛奶的咖啡。",
      "text": "Кофе с небольшим количеством молока, пожалуйста.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Kofye s nyebolshim kolichyestvom moloka, pozhaluysta.",
      "audioPath": "audio/ru/ru_food_phrase_012.mp3"
    },
    {
      "id": "ru_food_phrase_013",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "有不含乳糖的牛奶吗？",
      "text": "У вас есть безлактозное молоко?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "U vas yest byezlaktoznoye moloko?",
      "audioPath": "audio/ru/ru_food_phrase_013.mp3"
    },
    {
      "id": "ru_food_phrase_014",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请不要放辣。",
      "text": "Пожалуйста, не остро.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Pozhaluysta, nye ostro.",
      "audioPath": "audio/ru/ru_food_phrase_014.mp3"
    },
    {
      "id": "ru_food_phrase_015",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "咖啡请不要加糖。",
      "text": "Кофе без сахара, пожалуйста.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Kofye byez sakhara, pozhaluysta.",
      "audioPath": "audio/ru/ru_food_phrase_015.mp3"
    },
    {
      "id": "ru_food_phrase_016",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "有不含酱油的菜吗？",
      "text": "Есть ли блюда без соевого соуса?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Yest li blyuda byez soyevogo sousa?",
      "audioPath": "audio/ru/ru_food_phrase_016.mp3"
    },
    {
      "id": "ru_food_phrase_017",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请另外给我一点醋。",
      "text": "Можно мне еще немного уксуса?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Mozhno mnye yeshchye nyemnogo uksusa?",
      "audioPath": "audio/ru/ru_food_phrase_017.mp3"
    },
    {
      "id": "ru_food_phrase_018",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请不要放胡椒。",
      "text": "Без перца, пожалуйста.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Byez pyertsa, pozhaluysta.",
      "audioPath": "audio/ru/ru_food_phrase_018.mp3"
    },
    {
      "id": "ru_food_phrase_019",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "这道菜含有花生。",
      "text": "В этом блюде есть арахис.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "V etom blyudye yest arakhis.",
      "audioPath": "audio/ru/ru_food_phrase_019.mp3"
    },
    {
      "id": "ru_food_phrase_020",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "这份汤不是素食。",
      "text": "Этот суп не вегетарианский.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Etot sup nye vyegyetarianskiy.",
      "audioPath": "audio/ru/ru_food_phrase_020.mp3"
    },
    {
      "id": "ru_food_phrase_021",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "今天的特色菜是烤鱼。",
      "text": "Сегодняшнее фирменное блюдо — рыба на гриле.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Syegodnyashnyeye firmyennoye blyudo — ryba na grilye.",
      "audioPath": "audio/ru/ru_food_phrase_021.mp3"
    },
    {
      "id": "ru_food_phrase_022",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "可以把配菜换成沙拉吗？",
      "text": "Могу ли я заменить салат на гарнир?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Mogu li ya zamyenit salat na garnir?",
      "audioPath": "audio/ru/ru_food_phrase_022.mp3"
    },
    {
      "id": "ru_food_phrase_023",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "饮用水需要另外付费。",
      "text": "Вода оплачивается отдельно.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Voda oplachivayetsya otdyelno.",
      "audioPath": "audio/ru/ru_food_phrase_023.mp3"
    },
    {
      "id": "ru_food_phrase_024",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "这个鸡蛋是全熟的吗？",
      "text": "Яйцо полностью готово?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Yaytso polnostyu gotovo?",
      "audioPath": "audio/ru/ru_food_phrase_024.mp3"
    },
    {
      "id": "ru_food_phrase_025",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "我不吃肉。",
      "text": "Я не ем мясо.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Ya nye yem myaso.",
      "audioPath": "audio/ru/ru_food_phrase_025.mp3"
    },
    {
      "id": "ru_food_phrase_026",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "您的菜大约十五分钟后上。",
      "text": "Ваш заказ будет готов примерно через пятнадцать минут.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vash zakaz budyet gotov primyerno chyeryez pyatnadtsat minut.",
      "audioPath": "audio/ru/ru_food_phrase_026.mp3"
    },
    {
      "id": "ru_food_phrase_027",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "这里需要给小费吗？",
      "text": "Здесь принято оставлять чаевые?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "Zdyes prinyato ostavlyat chayevyye?",
      "audioPath": "audio/ru/ru_food_phrase_027.mp3"
    },
    {
      "id": "ru_food_phrase_028",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "这份可以做成不辣的。",
      "text": "Это блюдо можно приготовить неострым.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Eto blyudo mozhno prigotovit nyeostrym.",
      "audioPath": "audio/ru/ru_food_phrase_028.mp3"
    },
    {
      "id": "ru_food_phrase_029",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "账单里已经包含服务费。",
      "text": "Сервисный сбор уже включён.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Syervisnyy sbor uzhye vklyuchyon.",
      "audioPath": "audio/ru/ru_food_phrase_029.mp3"
    },
    {
      "id": "ru_food_phrase_030",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "我们可以为您分开结账。",
      "text": "Мы можем рассчитать вас отдельно.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "My mozhyem rasschitat vas otdyelno.",
      "audioPath": "audio/ru/ru_food_phrase_030.mp3"
    },
    {
      "id": "ru_shopping_phrase_001",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "请问商店入口在哪里？",
      "text": "Где вход в магазин?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Gdye vkhod v magazin?",
      "audioPath": "audio/ru/ru_shopping_phrase_001.mp3"
    },
    {
      "id": "ru_shopping_phrase_002",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "百货商店今天营业吗？",
      "text": "Универмаг сегодня открыт?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Univyermag syegodnya otkryt?",
      "audioPath": "audio/ru/ru_shopping_phrase_002.mp3"
    },
    {
      "id": "ru_shopping_phrase_003",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "这附近有大型超市吗？",
      "text": "Есть ли поблизости большой супермаркет?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Yest li poblizosti bolshoy supyermarkyet?",
      "audioPath": "audio/ru/ru_shopping_phrase_003.mp3"
    },
    {
      "id": "ru_shopping_phrase_004",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "便利店是二十四小时营业吗？",
      "text": "Магазин открыт круглосуточно?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Magazin otkryt kruglosutochno?",
      "audioPath": "audio/ru/ru_shopping_phrase_004.mp3"
    },
    {
      "id": "ru_shopping_phrase_005",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "周末市场几点开始？",
      "text": "Во сколько начинается рынок в выходные?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Vo skolko nachinayetsya rynok v vykhodnyye?",
      "audioPath": "audio/ru/ru_shopping_phrase_005.mp3"
    },
    {
      "id": "ru_shopping_phrase_006",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "这件衣服有我的尺码吗？",
      "text": "У вас есть эта одежда моего размера?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "U vas yest eta odyezhda moyego razmyera?",
      "audioPath": "audio/ru/ru_shopping_phrase_006.mp3"
    },
    {
      "id": "ru_shopping_phrase_007",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "可以给我大一码的吗？",
      "text": "Можете ли вы дать мне больший размер?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Mozhyetye li vy dat mnye bolshiy razmyer?",
      "audioPath": "audio/ru/ru_shopping_phrase_007.mp3"
    },
    {
      "id": "ru_shopping_phrase_008",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "这件是中码吗？",
      "text": "Это средний размер?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Eto sryedniy razmyer?",
      "audioPath": "audio/ru/ru_shopping_phrase_008.mp3"
    },
    {
      "id": "ru_shopping_phrase_009",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有没有小一码的？",
      "text": "У вас есть размер меньше?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "U vas yest razmyer myenshye?",
      "audioPath": "audio/ru/ru_shopping_phrase_009.mp3"
    },
    {
      "id": "ru_shopping_phrase_010",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "可以帮我量一下尺码吗？",
      "text": "Можете ли вы помочь мне выбрать размер?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Mozhyetye li vy pomoch mnye vybrat razmyer?",
      "audioPath": "audio/ru/ru_shopping_phrase_010.mp3"
    },
    {
      "id": "ru_shopping_phrase_011",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试衣间在哪里？",
      "text": "Где примерочные?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Gdye primyerochnyye?",
      "audioPath": "audio/ru/ru_shopping_phrase_011.mp3"
    },
    {
      "id": "ru_shopping_phrase_012",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "我可以试穿这件外套吗？",
      "text": "Могу ли я примерить это пальто?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Mogu li ya primyerit eto palto?",
      "audioPath": "audio/ru/ru_shopping_phrase_012.mp3"
    },
    {
      "id": "ru_shopping_phrase_013",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试衣间需要排队吗？",
      "text": "Нужно ли стоять в очереди в примерочную?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Nuzhno li stoyat v ochyeryedi v primyerochnuyu?",
      "audioPath": "audio/ru/ru_shopping_phrase_013.mp3"
    },
    {
      "id": "ru_shopping_phrase_014",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试穿后放在哪里？",
      "text": "Где оставить одежду после примерки?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Gdye ostavit odyezhdu poslye primyerki?",
      "audioPath": "audio/ru/ru_shopping_phrase_014.mp3"
    },
    {
      "id": "ru_shopping_phrase_015",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试衣间里最多可以拿几件？",
      "text": "Сколько вещей можно принести в примерочную?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Skolko vyeshchyey mozhno prinyesti v primyerochnuyu?",
      "audioPath": "audio/ru/ru_shopping_phrase_015.mp3"
    },
    {
      "id": "ru_shopping_phrase_016",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "请问这件商品多少钱？",
      "text": "Сколько стоит этот товар?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Skolko stoit etot tovar?",
      "audioPath": "audio/ru/ru_shopping_phrase_016.mp3"
    },
    {
      "id": "ru_shopping_phrase_017",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "这件商品有折扣吗？",
      "text": "На этот товар есть скидка?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Na etot tovar yest skidka?",
      "audioPath": "audio/ru/ru_shopping_phrase_017.mp3"
    },
    {
      "id": "ru_shopping_phrase_018",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "这个对我来说太贵了。",
      "text": "Это слишком дорого для меня.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Eto slishkom dorogo dlya myenya.",
      "audioPath": "audio/ru/ru_shopping_phrase_018.mp3"
    },
    {
      "id": "ru_shopping_phrase_019",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "这个尺码已经缺货了。",
      "text": "Этого размера нет в наличии.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Etogo razmyera nyet v nalichii.",
      "audioPath": "audio/ru/ru_shopping_phrase_019.mp3"
    },
    {
      "id": "ru_shopping_phrase_020",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "退货需要出示收据。",
      "text": "Для возврата нужен чек.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Dlya vozvrata nuzhyen chyek.",
      "audioPath": "audio/ru/ru_shopping_phrase_020.mp3"
    },
    {
      "id": "ru_shopping_phrase_021",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "退款会原路退回。",
      "text": "Деньги вернутся на тот же способ оплаты.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Dyengi vyernutsya na tot zhye sposob oplaty.",
      "audioPath": "audio/ru/ru_shopping_phrase_021.mp3"
    },
    {
      "id": "ru_shopping_phrase_022",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "这张银行卡为什么不能用？",
      "text": "Почему эта дебетовая карта не работает?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Pochyemu eta dyebyetovaya karta nye rabotayet?",
      "audioPath": "audio/ru/ru_shopping_phrase_022.mp3"
    },
    {
      "id": "ru_shopping_phrase_023",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "这件商品不能退税。",
      "text": "На этот товар возврат налога не оформляется.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Na etot tovar vozvrat naloga nye oformlyayetsya.",
      "audioPath": "audio/ru/ru_shopping_phrase_023.mp3"
    },
    {
      "id": "ru_shopping_phrase_024",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以用银行卡付款吗？",
      "text": "Можно оплатить банковской картой?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Mozhno oplatit bankovskoy kartoy?",
      "audioPath": "audio/ru/ru_shopping_phrase_024.mp3"
    },
    {
      "id": "ru_shopping_phrase_025",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "退货时需要购物小票吗？",
      "text": "Нужна ли мне квитанция, чтобы вернуть это?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Nuzhna li mnye kvitantsiya, chtoby vyernut eto?",
      "audioPath": "audio/ru/ru_shopping_phrase_025.mp3"
    },
    {
      "id": "ru_shopping_phrase_026",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请输入银行卡PIN码。",
      "text": "Введите, пожалуйста, ПИН-код карты.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vvyeditye, pozhaluysta, PIN-kod karty.",
      "audioPath": "audio/ru/ru_shopping_phrase_026.mp3"
    },
    {
      "id": "ru_shopping_phrase_027",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "我把购物小票弄丢了。",
      "text": "Я потерял чек.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Ya potyeryal chyek.",
      "audioPath": "audio/ru/ru_shopping_phrase_027.mp3"
    },
    {
      "id": "ru_shopping_phrase_028",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "这里支持非接触支付。",
      "text": "Здесь принимают бесконтактную оплату.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Zdyes prinimayut byeskontaktnuyu oplatu.",
      "audioPath": "audio/ru/ru_shopping_phrase_028.mp3"
    },
    {
      "id": "ru_shopping_phrase_029",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "折扣商品不能换货。",
      "text": "Товары со скидкой обмену не подлежат.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Tovary so skidkoy obmyenu nye podlyezhat.",
      "audioPath": "audio/ru/ru_shopping_phrase_029.mp3"
    },
    {
      "id": "ru_shopping_phrase_030",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "您可以在二楼办理退税。",
      "text": "Возврат налога можно оформить на втором этаже.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vozvrat naloga mozhno oformit na vtorom etazhye.",
      "audioPath": "audio/ru/ru_shopping_phrase_030.mp3"
    },
    {
      "id": "ru_directions_phrase_001",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "请问游客服务中心在哪里？",
      "text": "Где находится информационный центр для посетителей?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Gdye nakhoditsya informatsionnyy tsyentr dlya posyetityelyey?",
      "audioPath": "audio/ru/ru_directions_phrase_001.mp3"
    },
    {
      "id": "ru_directions_phrase_002",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "我们现在是在地图上的这里吗？",
      "text": "Мы здесь, на карте?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "My zdyes, na kartye?",
      "audioPath": "audio/ru/ru_directions_phrase_002.mp3"
    },
    {
      "id": "ru_directions_phrase_003",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "您说的是那边那栋楼吗？",
      "text": "Вы имеете в виду вон то здание?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Vy imyeyetye v vidu von to zdaniye?",
      "audioPath": "audio/ru/ru_directions_phrase_003.mp3"
    },
    {
      "id": "ru_directions_phrase_004",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "下一个路口要左转吗？",
      "text": "Должен ли я повернуть налево на следующем перекрестке?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Dolzhyen li ya povyernut nalyevo na slyeduyushchyem pyeryekryestkye?",
      "audioPath": "audio/ru/ru_directions_phrase_004.mp3"
    },
    {
      "id": "ru_directions_phrase_005",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "最近的地铁站在哪里？",
      "text": "Где ближайшая станция метро?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Gdye blizhayshaya stantsiya myetro?",
      "audioPath": "audio/ru/ru_directions_phrase_005.mp3"
    },
    {
      "id": "ru_directions_phrase_006",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "博物馆就在我们前面吗？",
      "text": "Музей прямо перед нами?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Muzyey pryamo pyeryed nami?",
      "audioPath": "audio/ru/ru_directions_phrase_006.mp3"
    },
    {
      "id": "ru_directions_phrase_007",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "停车场在酒店后面。",
      "text": "Парковка находится за отелем.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Parkovka nakhoditsya za otyelyem.",
      "audioPath": "audio/ru/ru_directions_phrase_007.mp3"
    },
    {
      "id": "ru_directions_phrase_008",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "药店就在银行旁边。",
      "text": "Аптека находится рядом с банком.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Aptyeka nakhoditsya ryadom s bankom.",
      "audioPath": "audio/ru/ru_directions_phrase_008.mp3"
    },
    {
      "id": "ru_directions_phrase_009",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "邮局在公园对面。",
      "text": "Почтовое отделение находится напротив парка.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Pochtovoye otdyelyeniye nakhoditsya naprotiv parka.",
      "audioPath": "audio/ru/ru_directions_phrase_009.mp3"
    },
    {
      "id": "ru_directions_phrase_010",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "附近有地铁站吗？",
      "text": "Есть ли поблизости станция метро?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Yest li poblizosti stantsiya myetro?",
      "audioPath": "audio/ru/ru_directions_phrase_010.mp3"
    },
    {
      "id": "ru_directions_phrase_011",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "机场离这里有多远？",
      "text": "Как далеко находится аэропорт?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Kak dalyeko nakhoditsya aeroport?",
      "audioPath": "audio/ru/ru_directions_phrase_011.mp3"
    },
    {
      "id": "ru_directions_phrase_012",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "走路很近吗？",
      "text": "Это близко к прогулке?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Eto blizko k progulkye?",
      "audioPath": "audio/ru/ru_directions_phrase_012.mp3"
    },
    {
      "id": "ru_directions_phrase_013",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "坐公交车去很远吗？",
      "text": "Далеко ли ехать на автобусе?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Dalyeko li yekhat na avtobusye?",
      "audioPath": "audio/ru/ru_directions_phrase_013.mp3"
    },
    {
      "id": "ru_directions_phrase_014",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "最近的药店是哪一家？",
      "text": "Какая ближайшая аптека?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Kakaya blizhayshaya aptyeka?",
      "audioPath": "audio/ru/ru_directions_phrase_014.mp3"
    },
    {
      "id": "ru_directions_phrase_015",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "车站很远，最好坐地铁。",
      "text": "Станция находится далеко; Лучше ехать на метро.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Stantsiya nakhoditsya dalyeko; Luchshye yekhat na myetro.",
      "audioPath": "audio/ru/ru_directions_phrase_015.mp3"
    },
    {
      "id": "ru_directions_phrase_016",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "这附近有什么景点？",
      "text": "Какие достопримечательности находятся поблизости?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Kakiye dostoprimyechatyelnosti nakhodyatsya poblizosti?",
      "audioPath": "audio/ru/ru_directions_phrase_016.mp3"
    },
    {
      "id": "ru_directions_phrase_017",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "步行过去会不会太远？",
      "text": "Далеко туда идти?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Dalyeko tuda idti?",
      "audioPath": "audio/ru/ru_directions_phrase_017.mp3"
    },
    {
      "id": "ru_directions_phrase_018",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "可以在地图上标出来吗？",
      "text": "Покажите, пожалуйста, на карте.",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "Pokazhitye, pozhaluysta, na kartye.",
      "audioPath": "audio/ru/ru_directions_phrase_018.mp3"
    },
    {
      "id": "ru_directions_phrase_019",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "一直走到第二个路口。",
      "text": "Идите прямо до второго перекрёстка.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Iditye pryamo do vtorogo pyeryekryostka.",
      "audioPath": "audio/ru/ru_directions_phrase_019.mp3"
    },
    {
      "id": "ru_directions_phrase_020",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "在红绿灯处左转。",
      "text": "На светофоре поверните налево.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Na svyetoforye povyernitye nalyevo.",
      "audioPath": "audio/ru/ru_directions_phrase_020.mp3"
    },
    {
      "id": "ru_directions_phrase_021",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "车站就在银行对面。",
      "text": "Станция находится напротив банка.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Stantsiya nakhoditsya naprotiv banka.",
      "audioPath": "audio/ru/ru_directions_phrase_021.mp3"
    },
    {
      "id": "ru_directions_phrase_022",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "我要找的是一栋白色建筑。",
      "text": "Я ищу белое здание.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Ya ishchu byeloye zdaniye.",
      "audioPath": "audio/ru/ru_directions_phrase_022.mp3"
    },
    {
      "id": "ru_directions_phrase_023",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "步行大约需要十分钟。",
      "text": "Пешком около десяти минут.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Pyeshkom okolo dyesyati minut.",
      "audioPath": "audio/ru/ru_directions_phrase_023.mp3"
    },
    {
      "id": "ru_directions_phrase_024",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "邮局离这里远吗？",
      "text": "Почта далеко отсюда?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Pochta dalyeko otsyuda?",
      "audioPath": "audio/ru/ru_directions_phrase_024.mp3"
    },
    {
      "id": "ru_directions_phrase_025",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "这附近有公共厕所吗？",
      "text": "Есть ли поблизости общественный туалет?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Yest li poblizosti obshchyestvyennyy tualyet?",
      "audioPath": "audio/ru/ru_directions_phrase_025.mp3"
    },
    {
      "id": "ru_directions_phrase_026",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "过桥后您会看到博物馆。",
      "text": "После моста вы увидите музей.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Poslye mosta vy uviditye muzyey.",
      "audioPath": "audio/ru/ru_directions_phrase_026.mp3"
    },
    {
      "id": "ru_directions_phrase_027",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "最近的地铁站有电梯吗？",
      "text": "Есть ли на ближайшей станции метро лифт?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Yest li na blizhayshyey stantsii myetro lift?",
      "audioPath": "audio/ru/ru_directions_phrase_027.mp3"
    },
    {
      "id": "ru_directions_phrase_028",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "您走错方向了。",
      "text": "Вы идёте не в ту сторону.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vy idyotye nye v tu storonu.",
      "audioPath": "audio/ru/ru_directions_phrase_028.mp3"
    },
    {
      "id": "ru_directions_phrase_029",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "入口在大楼后面。",
      "text": "Вход находится за зданием.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vkhod nakhoditsya za zdaniyem.",
      "audioPath": "audio/ru/ru_directions_phrase_029.mp3"
    },
    {
      "id": "ru_directions_phrase_030",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "这条路现在封闭了。",
      "text": "Сейчас эта дорога перекрыта.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Syeychas eta doroga pyeryekryta.",
      "audioPath": "audio/ru/ru_directions_phrase_030.mp3"
    },
    {
      "id": "ru_emergency_phrase_001",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我发烧了，需要看医生。",
      "text": "У меня температура, и мне нужно обратиться к врачу.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "U myenya tyempyeratura, i mnye nuzhno obratitsya k vrachu.",
      "audioPath": "audio/ru/ru_emergency_phrase_001.mp3"
    },
    {
      "id": "ru_emergency_phrase_002",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "附近有二十四小时药店吗？",
      "text": "Есть ли поблизости круглосуточная аптека?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Yest li poblizosti kruglosutochnaya aptyeka?",
      "audioPath": "audio/ru/ru_emergency_phrase_002.mp3"
    },
    {
      "id": "ru_emergency_phrase_003",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "这种咳嗽药一天吃几次？",
      "text": "Сколько раз в день вы принимаете это лекарство от кашля?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Skolko raz v dyen vy prinimayetye eto lyekarstvo ot kashlya?",
      "audioPath": "audio/ru/ru_emergency_phrase_003.mp3"
    },
    {
      "id": "ru_emergency_phrase_004",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我头疼得很厉害。",
      "text": "У меня очень болит голова.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "U myenya ochyen bolit golova.",
      "audioPath": "audio/ru/ru_emergency_phrase_004.mp3"
    },
    {
      "id": "ru_emergency_phrase_005",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我从昨晚开始胃痛。",
      "text": "У меня болит живот со вчерашнего вечера.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "U myenya bolit zhivot so vchyerashnyego vyechyera.",
      "audioPath": "audio/ru/ru_emergency_phrase_005.mp3"
    },
    {
      "id": "ru_emergency_phrase_006",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "附近有值班药店吗？",
      "text": "Есть ли поблизости дежурная аптека?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "Yest li poblizosti dyezhurnaya aptyeka?",
      "audioPath": "audio/ru/ru_emergency_phrase_006.mp3"
    },
    {
      "id": "ru_emergency_phrase_007",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "可以请护士来看一下吗？",
      "text": "Может ли ко мне прийти медсестра?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Mozhyet li ko mnye priyti myedsyestra?",
      "audioPath": "audio/ru/ru_emergency_phrase_007.mp3"
    },
    {
      "id": "ru_emergency_phrase_008",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "这种药需要处方吗？",
      "text": "Нужен ли мне рецепт на это лекарство?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Nuzhyen li mnye ryetsyept na eto lyekarstvo?",
      "audioPath": "audio/ru/ru_emergency_phrase_008.mp3"
    },
    {
      "id": "ru_emergency_phrase_009",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "在哪里可以配这张处方？",
      "text": "Где я могу получить этот рецепт?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Gdye ya mogu poluchit etot ryetsyept?",
      "audioPath": "audio/ru/ru_emergency_phrase_009.mp3"
    },
    {
      "id": "ru_emergency_phrase_010",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "这药片需要饭后吃吗？",
      "text": "Нужно ли принимать эту таблетку после еды?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Nuzhno li prinimat etu tablyetku poslye yedy?",
      "audioPath": "audio/ru/ru_emergency_phrase_010.mp3"
    },
    {
      "id": "ru_emergency_phrase_011",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "这种药膏一天涂几次？",
      "text": "Сколько раз в день нужно наносить эту мазь?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Skolko raz v dyen nuzhno nanosit etu maz?",
      "audioPath": "audio/ru/ru_emergency_phrase_011.mp3"
    },
    {
      "id": "ru_emergency_phrase_012",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请帮我拨打112。",
      "text": "Позвоните, пожалуйста, по номеру 112.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Pozvonitye, pozhaluysta, po nomyeru 112.",
      "audioPath": "audio/ru/ru_emergency_phrase_012.mp3"
    },
    {
      "id": "ru_emergency_phrase_013",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请帮我拨打报警电话。",
      "text": "Помогите позвонить в полицию, пожалуйста.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Pomogitye pozvonit v politsiyu, pozhaluysta.",
      "audioPath": "audio/ru/ru_emergency_phrase_013.mp3"
    },
    {
      "id": "ru_emergency_phrase_014",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "我需要一份报案证明。",
      "text": "Мне нужна копия полицейского протокола.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Mnye nuzhna kopiya politsyeyskogo protokola.",
      "audioPath": "audio/ru/ru_emergency_phrase_014.mp3"
    },
    {
      "id": "ru_emergency_phrase_015",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "有人偷了我的背包。",
      "text": "Мой рюкзак украли.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Moy ryukzak ukrali.",
      "audioPath": "audio/ru/ru_emergency_phrase_015.mp3"
    },
    {
      "id": "ru_emergency_phrase_016",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请帮我联系警察。",
      "text": "Помогите мне связаться с полицией, пожалуйста.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Pomogitye mnye svyazatsya s politsiyey, pozhaluysta.",
      "audioPath": "audio/ru/ru_emergency_phrase_016.mp3"
    },
    {
      "id": "ru_emergency_phrase_017",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我腹泻了两天。",
      "text": "У меня был понос уже два дня.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "U myenya byl ponos uzhye dva dnya.",
      "audioPath": "audio/ru/ru_emergency_phrase_017.mp3"
    },
    {
      "id": "ru_emergency_phrase_018",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "这种药会引起便秘吗？",
      "text": "Может ли это лекарство вызвать запор?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Mozhyet li eto lyekarstvo vyzvat zapor?",
      "audioPath": "audio/ru/ru_emergency_phrase_018.mp3"
    },
    {
      "id": "ru_emergency_phrase_019",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "救护车已经在路上了。",
      "text": "Скорая помощь уже едет.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Skoraya pomoshch uzhye yedyet.",
      "audioPath": "audio/ru/ru_emergency_phrase_019.mp3"
    },
    {
      "id": "ru_emergency_phrase_020",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请不要移动伤者。",
      "text": "Пожалуйста, не двигайте пострадавшего.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Pozhaluysta, nye dvigaytye postradavshyego.",
      "audioPath": "audio/ru/ru_emergency_phrase_020.mp3"
    },
    {
      "id": "ru_emergency_phrase_021",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "最近的急诊室在两公里外。",
      "text": "Ближайшее приёмное отделение находится в двух километрах.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Blizhayshyeye priyomnoye otdyelyeniye nakhoditsya v dvukh kilomyetrakh.",
      "audioPath": "audio/ru/ru_emergency_phrase_021.mp3"
    },
    {
      "id": "ru_emergency_phrase_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请帮我拨打103叫救护车。",
      "text": "Позвоните, пожалуйста, по номеру 103 и вызовите скорую.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Pozvonitye, pozhaluysta, po nomyeru 103 i vyzovitye skoruyu.",
      "audioPath": "audio/ru/ru_emergency_phrase_022.mp3"
    },
    {
      "id": "ru_emergency_phrase_023",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请告诉我您哪里疼。",
      "text": "Скажите, пожалуйста, где у вас болит.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Skazhitye, pozhaluysta, gdye u vas bolit.",
      "audioPath": "audio/ru/ru_emergency_phrase_023.mp3"
    },
    {
      "id": "ru_emergency_phrase_024",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请拨打112联系紧急服务。",
      "text": "Пожалуйста, позвоните по номеру 112 в экстренную службу.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Pozhaluysta, pozvonitye po nomyeru 112 v ekstryennuyu sluzhbu.",
      "audioPath": "audio/ru/ru_emergency_phrase_024.mp3"
    },
    {
      "id": "ru_emergency_phrase_025",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "我摔倒后受伤了。",
      "text": "Я поранился, когда упал.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Ya poranilsya, kogda upal.",
      "audioPath": "audio/ru/ru_emergency_phrase_025.mp3"
    },
    {
      "id": "ru_emergency_phrase_026",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "您的护照已送到失物招领处。",
      "text": "Ваш паспорт передали в бюро находок.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Vash pasport pyeryedali v byuro nakhodok.",
      "audioPath": "audio/ru/ru_emergency_phrase_026.mp3"
    },
    {
      "id": "ru_emergency_phrase_027",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "我的旅行保险涵盖这项治疗吗？",
      "text": "Покрывает ли моя туристическая страховка это лечение?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Pokryvayet li moya turistichyeskaya strakhovka eto lyechyeniye?",
      "audioPath": "audio/ru/ru_emergency_phrase_027.mp3"
    },
    {
      "id": "ru_emergency_phrase_028",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "请在这里填写报失单。",
      "text": "Заполните здесь заявление об утере.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Zapolnitye zdyes zayavlyeniye ob utyerye.",
      "audioPath": "audio/ru/ru_emergency_phrase_028.mp3"
    },
    {
      "id": "ru_emergency_phrase_029",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "请保持清醒并慢慢呼吸。",
      "text": "Не теряйте сознание и дышите медленно.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Nye tyeryaytye soznaniye i dyshitye myedlyenno.",
      "audioPath": "audio/ru/ru_emergency_phrase_029.mp3"
    },
    {
      "id": "ru_emergency_phrase_030",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "警察大约十分钟后到。",
      "text": "Полиция будет примерно через десять минут.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Politsiya budyet primyerno chyeryez dyesyat minut.",
      "audioPath": "audio/ru/ru_emergency_phrase_030.mp3"
    },
    {
      "id": "ru_basics_phrase_001",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "你好，请问你会说英语吗？",
      "text": "Здравствуйте, вы говорите по-английски?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Zdravstvuytye, vy govoritye po-angliyski?",
      "audioPath": "audio/ru/ru_basics_phrase_001.mp3"
    },
    {
      "id": "ru_basics_phrase_002",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "早上好，我有一个预订。",
      "text": "Доброе утро, у меня бронь.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Dobroye utro, u myenya bron.",
      "audioPath": "audio/ru/ru_basics_phrase_002.mp3"
    },
    {
      "id": "ru_basics_phrase_003",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "晚上好，还有空桌吗？",
      "text": "Добрый вечер, у вас есть свободный столик?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Dobryy vyechyer, u vas yest svobodnyy stolik?",
      "audioPath": "audio/ru/ru_basics_phrase_003.mp3"
    },
    {
      "id": "ru_basics_phrase_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "谢谢您的帮助。",
      "text": "Спасибо за вашу помощь.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Spasibo za vashu pomoshch.",
      "audioPath": "audio/ru/ru_basics_phrase_004.mp3"
    },
    {
      "id": "ru_basics_phrase_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "真的非常感谢。",
      "text": "Большое спасибо.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Bolshoye spasibo.",
      "audioPath": "audio/ru/ru_basics_phrase_005.mp3"
    },
    {
      "id": "ru_basics_phrase_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "不客气，祝您愉快。",
      "text": "Пожалуйста, хорошего дня.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Pozhaluysta, khoroshyego dnya.",
      "audioPath": "audio/ru/ru_basics_phrase_006.mp3"
    },
    {
      "id": "ru_basics_phrase_007",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "劳驾，请给我一张地图。",
      "text": "Карту, пожалуйста.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Kartu, pozhaluysta.",
      "audioPath": "audio/ru/ru_basics_phrase_007.mp3"
    },
    {
      "id": "ru_basics_phrase_008",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "请给我七张票。",
      "text": "Семь билетов, пожалуйста.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Syem bilyetov, pozhaluysta.",
      "audioPath": "audio/ru/ru_basics_phrase_008.mp3"
    },
    {
      "id": "ru_basics_phrase_009",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我们八点见。",
      "text": "Увидимся в восемь.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Uvidimsya v vosyem.",
      "audioPath": "audio/ru/ru_basics_phrase_009.mp3"
    },
    {
      "id": "ru_basics_phrase_010",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "火车从九号站台出发。",
      "text": "Поезд уходит с девятой платформы.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Poyezd ukhodit s dyevyatoy platformy.",
      "audioPath": "audio/ru/ru_basics_phrase_010.mp3"
    },
    {
      "id": "ru_basics_phrase_011",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "步行需要十分钟。",
      "text": "Прогулка занимает десять минут.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Progulka zanimayet dyesyat minut.",
      "audioPath": "audio/ru/ru_basics_phrase_011.mp3"
    },
    {
      "id": "ru_basics_phrase_012",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我不会说俄语。",
      "text": "Я не говорю по-русски.",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "Ya nye govoryu po-russki.",
      "audioPath": "audio/ru/ru_basics_phrase_012.mp3"
    },
    {
      "id": "ru_basics_phrase_013",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请写下来。",
      "text": "Напишите, пожалуйста.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Napishitye, pozhaluysta.",
      "audioPath": "audio/ru/ru_basics_phrase_013.mp3"
    },
    {
      "id": "ru_basics_phrase_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "这里大约有一万人。",
      "text": "Здесь проживает около десяти тысяч человек.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "Zdyes prozhivayet okolo dyesyati tysyach chyelovyek.",
      "audioPath": "audio/ru/ru_basics_phrase_014.mp3"
    },
    {
      "id": "ru_basics_phrase_015",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "这个金额用俄语怎么说？",
      "text": "Как сказать эту сумму по-русски?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Kak skazat etu summu po-russki?",
      "audioPath": "audio/ru/ru_basics_phrase_015.mp3"
    },
    {
      "id": "ru_basics_phrase_016",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "在哪里可以兑换外币？",
      "text": "Где можно обменять валюту?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "Gdye mozhno obmyenyat valyutu?",
      "audioPath": "audio/ru/ru_basics_phrase_016.mp3"
    },
    {
      "id": "ru_basics_phrase_017",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "可以兑换人民币吗？",
      "text": "Можно обменять китайские юани?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Mozhno obmyenyat kitayskiye yuani?",
      "audioPath": "audio/ru/ru_basics_phrase_017.mp3"
    },
    {
      "id": "ru_basics_phrase_018",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "手续费是零卢布。",
      "text": "Комиссия составляет ноль рублей.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Komissiya sostavlyayet nol rublyey.",
      "audioPath": "audio/ru/ru_basics_phrase_018.mp3"
    },
    {
      "id": "ru_basics_phrase_019",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "我会说一点英语。",
      "text": "Я немного говорю по-английски.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Ya nyemnogo govoryu po-angliyski.",
      "audioPath": "audio/ru/ru_basics_phrase_019.mp3"
    },
    {
      "id": "ru_basics_phrase_020",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "请稍等一下。",
      "text": "Подождите, пожалуйста, минутку.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Podozhditye, pozhaluysta, minutku.",
      "audioPath": "audio/ru/ru_basics_phrase_020.mp3"
    },
    {
      "id": "ru_basics_phrase_021",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "这个词的意思是入口。",
      "text": "Это слово означает «вход».",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Eto slovo oznachayet «vkhod».",
      "audioPath": "audio/ru/ru_basics_phrase_021.mp3"
    },
    {
      "id": "ru_basics_phrase_022",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "我们明天去喀山。",
      "text": "Завтра мы едем в Казань.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Zavtra my yedyem v Kazan.",
      "audioPath": "audio/ru/ru_basics_phrase_022.mp3"
    },
    {
      "id": "ru_basics_phrase_023",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "您可以在这里购买SIM卡。",
      "text": "Здесь можно купить SIM-карту.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Zdyes mozhno kupit SIM-kartu.",
      "audioPath": "audio/ru/ru_basics_phrase_023.mp3"
    },
    {
      "id": "ru_basics_phrase_024",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "我们后天回来。",
      "text": "Мы вернемся послезавтра.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "My vyernyemsya poslyezavtra.",
      "audioPath": "audio/ru/ru_basics_phrase_024.mp3"
    },
    {
      "id": "ru_basics_phrase_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "是的，我有预订。",
      "text": "Да, у меня есть бронь.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "Da, u myenya yest bron.",
      "audioPath": "audio/ru/ru_basics_phrase_025.mp3"
    },
    {
      "id": "ru_basics_phrase_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "这张eSIM会立即开通。",
      "text": "Эта eSIM активируется сразу.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Eta eSIM aktiviruyetsya srazu.",
      "audioPath": "audio/ru/ru_basics_phrase_026.mp3"
    },
    {
      "id": "ru_basics_phrase_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "好的，我们走吧。",
      "text": "Хорошо, поехали.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "Khorosho, poyekhali.",
      "audioPath": "audio/ru/ru_basics_phrase_027.mp3"
    },
    {
      "id": "ru_basics_phrase_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "您的余额不足。",
      "text": "На вашем счёте недостаточно средств.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Na vashyem schyotye nyedostatochno sryedstv.",
      "audioPath": "audio/ru/ru_basics_phrase_028.mp3"
    },
    {
      "id": "ru_basics_phrase_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "充值后请重启手机。",
      "text": "После пополнения перезагрузите телефон.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Poslye popolnyeniya pyeryezagruzitye tyelyefon.",
      "audioPath": "audio/ru/ru_basics_phrase_029.mp3"
    },
    {
      "id": "ru_basics_phrase_030",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "没问题，我可以写下来。",
      "text": "Без проблем, я могу это написать.",
      "direction": "traveler-hears",
      "intent": "understand",
      "pronunciation": "Byez problyem, ya mogu eto napisat.",
      "audioPath": "audio/ru/ru_basics_phrase_030.mp3"
    },
    {
      "id": "transport_001",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "交通卡",
      "text": "транспортная карта",
      "audioPath": "audio/ru/transport_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "transportnaya karta"
    },
    {
      "id": "transport_002",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "末班车",
      "text": "последний поезд",
      "audioPath": "audio/ru/transport_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "poslyedniy poyezd"
    },
    {
      "id": "transport_003",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "下一站",
      "text": "следующая остановка",
      "audioPath": "audio/ru/transport_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "slyeduyushchaya ostanovka"
    },
    {
      "id": "transport_004",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "终点站",
      "text": "конечная остановка",
      "audioPath": "audio/ru/transport_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "konyechnaya ostanovka"
    },
    {
      "id": "transport_005",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "word",
      "zh": "换乘",
      "text": "пересадка",
      "audioPath": "audio/ru/transport_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pyeryesadka"
    },
    {
      "id": "hotel_083",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "Wi-Fi密码",
      "text": "пароль от Wi-Fi",
      "audioPath": "audio/ru/hotel_083.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "parol ot Wi-Fi"
    },
    {
      "id": "hotel_084",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "提前入住",
      "text": "ранний заезд",
      "audioPath": "audio/ru/hotel_084.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ranniy zayezd"
    },
    {
      "id": "hotel_085",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "延迟退房",
      "text": "поздний выезд",
      "audioPath": "audio/ru/hotel_085.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pozdniy vyyezd"
    },
    {
      "id": "hotel_086",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "自助入住",
      "text": "самостоятельное заселение",
      "audioPath": "audio/ru/hotel_086.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "samostoyatyelnoye zasyelyeniye"
    },
    {
      "id": "food_097",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "纯素",
      "text": "веганское блюдо",
      "audioPath": "audio/ru/food_097.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vyeganskoye blyudo",
      "example": {
        "id": "ru-ru_food_097_example",
        "zh": "请问有纯素菜品吗？",
        "text": "Есть ли у вас веганские блюда?",
        "pronunciation": "Yest li u vas vyeganskiye blyuda?"
      }
    },
    {
      "id": "food_098",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "清真",
      "text": "халяль",
      "audioPath": "audio/ru/food_098.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "khalyal",
      "example": {
        "id": "ru-ru_food_098_example",
        "zh": "这道菜是清真的吗？",
        "text": "Это блюдо халяльное?",
        "pronunciation": "Eto blyudo khalyalnoye?"
      }
    },
    {
      "id": "food_099",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "无麸质",
      "text": "без глютена",
      "audioPath": "audio/ru/food_099.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "byez glyutyena",
      "example": {
        "id": "ru-ru_food_099_example",
        "zh": "有无麸质的面包吗？",
        "text": "Можно заказать хлеб без глютена?",
        "pronunciation": "Mozhno zakazat khlyeb byez glyutyena?"
      }
    },
    {
      "id": "food_100",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "乳糖不耐",
      "text": "непереносимость лактозы",
      "audioPath": "audio/ru/food_100.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "nyepyeryenosimost laktozy",
      "example": {
        "id": "ru-ru_food_100_example",
        "zh": "我乳糖不耐，不能喝普通牛奶。",
        "text": "У меня непереносимость лактозы, поэтому обычное молоко мне нельзя.",
        "pronunciation": "U myenya nyepyeryenosimost laktozy, poetomu obychnoye moloko mnye nyelzya."
      }
    },
    {
      "id": "food_101",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "花生",
      "text": "арахис",
      "audioPath": "audio/ru/food_101.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "arakhis",
      "example": {
        "id": "ru-ru_food_101_example",
        "zh": "我对花生严重过敏。",
        "text": "У меня сильная аллергия на арахис.",
        "pronunciation": "U myenya silnaya allyergiya na arakhis."
      }
    },
    {
      "id": "food_102",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "坚果",
      "text": "орехи",
      "audioPath": "audio/ru/food_102.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "oryekhi",
      "example": {
        "id": "ru-ru_food_102_example",
        "zh": "这份甜点里有坚果吗？",
        "text": "В этом десерте есть орехи?",
        "pronunciation": "V etom dyesyertye yest oryekhi?"
      }
    },
    {
      "id": "food_103",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "甲壳类",
      "text": "ракообразные",
      "audioPath": "audio/ru/food_103.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "rakoobraznyye",
      "example": {
        "id": "ru-ru_food_103_example",
        "zh": "我对虾和其他甲壳类过敏。",
        "text": "У меня аллергия на креветки и других ракообразных.",
        "pronunciation": "U myenya allyergiya na kryevyetki i drugikh rakoobraznykh."
      }
    },
    {
      "id": "food_104",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "自来水",
      "text": "вода из-под крана",
      "audioPath": "audio/ru/food_104.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "voda iz-pod krana",
      "example": {
        "id": "ru-ru_food_104_example",
        "zh": "这里的自来水可以直接喝吗？",
        "text": "Здесь можно пить воду из-под крана?",
        "pronunciation": "Zdyes mozhno pit vodu iz-pod krana?"
      }
    },
    {
      "id": "food_105",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "过敏原",
      "text": "аллерген",
      "audioPath": "audio/ru/food_105.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "allyergyen",
      "example": {
        "id": "ru-ru_food_105_example",
        "zh": "请告诉我这道菜含有哪些过敏原。",
        "text": "Скажите, пожалуйста, какие аллергены есть в этом блюде.",
        "pronunciation": "Skazhitye, pozhaluysta, kakiye allyergyeny yest v etom blyudye."
      }
    },
    {
      "id": "food_106",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "分开结账",
      "text": "раздельный счёт",
      "audioPath": "audio/ru/food_106.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "razdyelnyy schyot",
      "example": {
        "id": "ru-ru_food_106_example",
        "zh": "请把账单分开结算。",
        "text": "Рассчитайте нас, пожалуйста, отдельно.",
        "pronunciation": "Rasschitaytye nas, pozhaluysta, otdyelno."
      }
    },
    {
      "id": "shopping_074",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "退款",
      "text": "возврат денег",
      "audioPath": "audio/ru/shopping_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "vozvrat dyenyeg"
    },
    {
      "id": "shopping_075",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "换货",
      "text": "обмен товара",
      "audioPath": "audio/ru/shopping_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "obmyen tovara"
    },
    {
      "id": "shopping_076",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "缺货",
      "text": "нет в наличии",
      "audioPath": "audio/ru/shopping_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "nyet v nalichii"
    },
    {
      "id": "shopping_077",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "免税",
      "text": "без налога",
      "audioPath": "audio/ru/shopping_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "byez naloga"
    },
    {
      "id": "shopping_078",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "PIN码",
      "text": "ПИН-код",
      "audioPath": "audio/ru/shopping_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "PIN-kod"
    },
    {
      "id": "shopping_079",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "非接触支付",
      "text": "бесконтактная оплата",
      "audioPath": "audio/ru/shopping_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "byeskontaktnaya oplata"
    },
    {
      "id": "emergency_045",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "急诊室",
      "text": "приёмное отделение",
      "audioPath": "audio/ru/emergency_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "priyomnoye otdyelyeniye",
      "example": {
        "id": "ru-ru_emergency_045_example",
        "zh": "请带我去最近的急诊室。",
        "text": "Отвезите меня, пожалуйста, в ближайшее приёмное отделение.",
        "pronunciation": "Otvyezitye myenya, pozhaluysta, v blizhayshyeye priyomnoye otdyelyeniye."
      }
    },
    {
      "id": "emergency_046",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "word",
      "zh": "被盗",
      "text": "украдено",
      "audioPath": "audio/ru/emergency_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ukradyeno",
      "example": {
        "id": "ru-ru_emergency_046_example",
        "zh": "我的手机被盗了。",
        "text": "У меня украли телефон.",
        "pronunciation": "U myenya ukrali tyelyefon."
      }
    },
    {
      "id": "emergency_047",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "word",
      "zh": "失物招领处",
      "text": "бюро находок",
      "audioPath": "audio/ru/emergency_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "byuro nakhodok",
      "example": {
        "id": "ru-ru_emergency_047_example",
        "zh": "失物招领处在哪里？",
        "text": "Где находится бюро находок?",
        "pronunciation": "Gdye nakhoditsya byuro nakhodok?"
      }
    },
    {
      "id": "emergency_048",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "呼吸困难",
      "text": "затруднённое дыхание",
      "audioPath": "audio/ru/emergency_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "zatrudnyonnoye dykhaniye",
      "example": {
        "id": "ru-ru_emergency_048_example",
        "zh": "我呼吸困难。",
        "text": "Мне трудно дышать.",
        "pronunciation": "Mnye trudno dyshat."
      }
    },
    {
      "id": "emergency_049",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "胸痛",
      "text": "боль в груди",
      "audioPath": "audio/ru/emergency_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "bol v grudi",
      "example": {
        "id": "ru-ru_emergency_049_example",
        "zh": "我胸口很痛。",
        "text": "У меня сильная боль в груди.",
        "pronunciation": "U myenya silnaya bol v grudi."
      }
    },
    {
      "id": "emergency_050",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "昏倒",
      "text": "потерять сознание",
      "audioPath": "audio/ru/emergency_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "potyeryat soznaniye",
      "example": {
        "id": "ru-ru_emergency_050_example",
        "zh": "他刚才昏倒了。",
        "text": "Этот человек только что потерял сознание.",
        "pronunciation": "Etot chyelovyek tolko chto potyeryal soznaniye."
      }
    },
    {
      "id": "expressions_048",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "eSIM",
      "text": "eSIM",
      "audioPath": "audio/ru/expressions_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "eSIM"
    },
    {
      "id": "expressions_049",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "SIM卡",
      "text": "SIM-карта",
      "audioPath": "audio/ru/expressions_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "SIM-karta"
    },
    {
      "id": "expressions_050",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "充值",
      "text": "пополнение",
      "audioPath": "audio/ru/expressions_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "popolnyeniye"
    },
    {
      "id": "expressions_051",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "余额",
      "text": "баланс",
      "audioPath": "audio/ru/expressions_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "balans"
    }
  ]
});
})();
