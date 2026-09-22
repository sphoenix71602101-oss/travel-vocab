(function () {
  "use strict";
  window.registerContentPack({
  "id": "jp-ja",
  "destinationId": "jp",
  "locale": "ja-JP",
  "speechLocale": "ja-JP",
  "languageCode": "ja",
  "languageLabel": "日语",
  "nativeLabel": "日本語",
  "pronunciationLabel": "假名",
  "features": {
    "beginnerModule": "jp-ja-beginner",
    "beginnerAudioBase": "audio/ja",
    "emergencyCard": {
      "title": "緊急連絡カード",
      "notice": "※ 緊急時の意思疎通にのみ使用してください。",
      "foreignNameLabel": "护照拼音或日文姓名",
      "unknownBloodType": "不明",
      "labels": {
        "name": "名前",
        "nationality": "国籍",
        "birthDate": "生年月日",
        "bloodType": "血液型",
        "documentNumber": "旅券・身分証番号",
        "emergencyContact": "緊急連絡先",
        "emergencyPhone": "電話番号",
        "allergies": "アレルギー",
        "conditions": "持病・既往症"
      },
      "dictionaries": {
        "nationalities": [
          {
            "code": "cn",
            "zh": "中国",
            "target": "中国"
          },
          {
            "code": "jp",
            "zh": "日本",
            "target": "日本"
          },
          {
            "code": "kr",
            "zh": "韩国",
            "target": "韓国"
          },
          {
            "code": "sg",
            "zh": "新加坡",
            "target": "シンガポール"
          },
          {
            "code": "my",
            "zh": "马来西亚",
            "target": "マレーシア"
          },
          {
            "code": "us",
            "zh": "美国",
            "target": "アメリカ合衆国"
          },
          {
            "code": "gb",
            "zh": "英国",
            "target": "イギリス"
          },
          {
            "code": "ca",
            "zh": "加拿大",
            "target": "カナダ"
          },
          {
            "code": "au",
            "zh": "澳大利亚",
            "target": "オーストラリア"
          },
          {
            "code": "fr",
            "zh": "法国",
            "target": "フランス"
          },
          {
            "code": "de",
            "zh": "德国",
            "target": "ドイツ"
          },
          {
            "code": "es",
            "zh": "西班牙",
            "target": "スペイン"
          },
          {
            "code": "it",
            "zh": "意大利",
            "target": "イタリア"
          },
          {
            "code": "other",
            "zh": "其他",
            "target": "その他"
          }
        ],
        "allergies": [
          {
            "code": "none",
            "zh": "无",
            "target": "なし"
          },
          {
            "code": "penicillin",
            "zh": "青霉素",
            "target": "ペニシリン"
          },
          {
            "code": "cephalosporin",
            "zh": "头孢菌素",
            "target": "セファロスポリン"
          },
          {
            "code": "sulfonamides",
            "zh": "磺胺类",
            "target": "サルファ剤"
          },
          {
            "code": "nsaids",
            "zh": "阿司匹林/NSAIDs",
            "target": "アスピリン / NSAIDs"
          },
          {
            "code": "peanuts",
            "zh": "花生",
            "target": "ピーナッツ"
          },
          {
            "code": "nuts",
            "zh": "坚果",
            "target": "ナッツ"
          },
          {
            "code": "shellfish",
            "zh": "海鲜/甲壳类",
            "target": "魚介類 / 甲殻類"
          },
          {
            "code": "milk",
            "zh": "牛奶",
            "target": "牛乳"
          },
          {
            "code": "eggs",
            "zh": "鸡蛋",
            "target": "卵"
          },
          {
            "code": "gluten",
            "zh": "小麦/麸质",
            "target": "小麦 / グルテン"
          },
          {
            "code": "soy",
            "zh": "大豆",
            "target": "大豆"
          },
          {
            "code": "latex",
            "zh": "乳胶",
            "target": "ラテックス"
          },
          {
            "code": "insect",
            "zh": "昆虫蜇伤",
            "target": "虫刺され"
          }
        ],
        "conditions": [
          {
            "code": "none",
            "zh": "无",
            "target": "なし"
          },
          {
            "code": "diabetes",
            "zh": "糖尿病",
            "target": "糖尿病"
          },
          {
            "code": "hypertension",
            "zh": "高血压",
            "target": "高血圧"
          },
          {
            "code": "heart",
            "zh": "心脏病",
            "target": "心臓病"
          },
          {
            "code": "asthma",
            "zh": "哮喘",
            "target": "喘息"
          },
          {
            "code": "epilepsy",
            "zh": "癫痫",
            "target": "てんかん"
          },
          {
            "code": "kidney",
            "zh": "肾脏疾病",
            "target": "腎臓病"
          },
          {
            "code": "anticoagulants",
            "zh": "正在服用抗凝药",
            "target": "抗凝固薬を服用中"
          },
          {
            "code": "pregnancy",
            "zh": "怀孕",
            "target": "妊娠中"
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
      "text": "パスポート",
      "pronunciation": "ぱすぽーと",
      "audioPath": "audio/ja/airport_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_001_example",
        "zh": "您好，这是我的护照。",
        "text": "こんにちは、こちらが私のパスポートです。",
        "pronunciation": "こんにちは、こちらがわたしのぱすぽーとです。"
      }
    },
    {
      "id": "airport_002",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "签证",
      "text": "ビザ",
      "pronunciation": "びざ",
      "audioPath": "audio/ja/airport_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_002_example",
        "zh": "这个签证还在有效期内吗？",
        "text": "このビザはまだ有効ですか？",
        "pronunciation": "このびざはまだゆうこうですか？"
      }
    },
    {
      "id": "airport_003",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "机票",
      "text": "航空券",
      "pronunciation": "こうくうけん",
      "audioPath": "audio/ja/airport_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_003_example",
        "zh": "电子机票保存在我的手机里。",
        "text": "航空券はスマートフォンに入っています。",
        "pronunciation": "こうくうけんはすまーとふぉんにはいっています。"
      }
    },
    {
      "id": "airport_004",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "登机牌",
      "text": "搭乗券",
      "pronunciation": "とうじょうけん",
      "audioPath": "audio/ja/airport_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_004_example",
        "zh": "请出示您的登机牌。",
        "text": "搭乗券を見せてください。",
        "pronunciation": "とうじょうけんをみせてください。"
      }
    },
    {
      "id": "airport_005",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李",
      "text": "荷物",
      "pronunciation": "にもつ",
      "audioPath": "audio/ja/airport_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_005_example",
        "zh": "我的行李还没有出来。",
        "text": "私の荷物がまだ出てきません。",
        "pronunciation": "わたしのにもつがまだでてきません。"
      }
    },
    {
      "id": "airport_006",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李箱",
      "text": "スーツケース",
      "pronunciation": "すーつけーす",
      "audioPath": "audio/ja/airport_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_006_example",
        "zh": "这个行李箱重二十公斤。",
        "text": "このスーツケースは二十キロあります。",
        "pronunciation": "このすーつけーすはにじゅっきろあります。"
      }
    },
    {
      "id": "airport_007",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "手提行李",
      "text": "機内持ち込み手荷物",
      "pronunciation": "きないもちこみてにもつ",
      "audioPath": "audio/ja/airport_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_007_example",
        "zh": "随身行李限带一件。",
        "text": "機内持ち込み手荷物は一つまでです。",
        "pronunciation": "きないもちこみてにもつはひとつまでです。"
      }
    },
    {
      "id": "airport_008",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "机场",
      "text": "空港",
      "pronunciation": "くうこう",
      "audioPath": "audio/ja/airport_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_008_example",
        "zh": "从机场到市区坐什么最方便？",
        "text": "空港から市内までは何が便利ですか？",
        "pronunciation": "くうこうからしないまではなにがべんりですか？"
      }
    },
    {
      "id": "airport_009",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航站楼",
      "text": "ターミナル",
      "pronunciation": "たーみなる",
      "audioPath": "audio/ja/airport_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_009_example",
        "zh": "国际航班在二号航站楼。",
        "text": "国際線は第二ターミナルです。",
        "pronunciation": "こくさいせんはだいにたーみなるです。"
      }
    },
    {
      "id": "airport_010",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "出发",
      "text": "出発",
      "pronunciation": "しゅっぱつ",
      "audioPath": "audio/ja/airport_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_010_example",
        "zh": "出发时间改到下午三点了。",
        "text": "出発は午後三時に変更されました。",
        "pronunciation": "しゅっぱつはごごさんじにへんこうされました。"
      }
    },
    {
      "id": "airport_011",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "到达",
      "text": "到着",
      "pronunciation": "とうちゃく",
      "audioPath": "audio/ja/airport_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_011_example",
        "zh": "预计晚上七点到达。",
        "text": "到着は午後七時の予定です。",
        "pronunciation": "とうちゃくはごごしちじのよていです。"
      }
    },
    {
      "id": "airport_012",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机口",
      "text": "搭乗口",
      "pronunciation": "とうじょうぐち",
      "audioPath": "audio/ja/airport_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_012_example",
        "zh": "登机口已经变更。",
        "text": "搭乗口が変更になりました。",
        "pronunciation": "とうじょうぐちがへんこうになりました。"
      }
    },
    {
      "id": "airport_013",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "安检",
      "text": "保安検査",
      "pronunciation": "ほあんけんさ",
      "audioPath": "audio/ja/airport_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_013_example",
        "zh": "通过安检大约要多长时间？",
        "text": "保安検査にはどのくらい時間がかかりますか？",
        "pronunciation": "ほあんけんさにはどのくらいじかんがかかりますか？"
      }
    },
    {
      "id": "airport_014",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "海关",
      "text": "税関",
      "pronunciation": "ぜいかん",
      "audioPath": "audio/ja/airport_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_014_example",
        "zh": "这件物品需要向海关申报吗？",
        "text": "これは税関で申告する必要がありますか？",
        "pronunciation": "これはぜいかんでしんこくするひつようがありますか？"
      }
    },
    {
      "id": "airport_015",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境",
      "text": "入国",
      "pronunciation": "にゅうこく",
      "audioPath": "audio/ja/airport_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_015_example",
        "zh": "我入境日本的目的是旅游。",
        "text": "日本への入国目的は観光です。",
        "pronunciation": "にほんへのにゅうこくもくてきはかんこうです。"
      }
    },
    {
      "id": "airport_016",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "出境",
      "text": "出国",
      "pronunciation": "しゅっこく",
      "audioPath": "audio/ja/airport_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_016_example",
        "zh": "出境手续在哪里办理？",
        "text": "出国手続きはどこでしますか？",
        "pronunciation": "しゅっこくてつづきはどこでしますか？"
      }
    },
    {
      "id": "airport_017",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "转机",
      "text": "乗り継ぎ",
      "pronunciation": "のりつぎ",
      "audioPath": "audio/ja/airport_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_017_example",
        "zh": "我要在大阪转乘国内航班。",
        "text": "大阪で国内線に乗り継ぎます。",
        "pronunciation": "おおさかでこくないせんにのりつぎます。"
      }
    },
    {
      "id": "airport_018",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航班",
      "text": "便",
      "pronunciation": "びん",
      "audioPath": "audio/ja/airport_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_018_example",
        "zh": "这个航班已经满员了。",
        "text": "この便は満席です。",
        "pronunciation": "このびんはまんせきです。"
      }
    },
    {
      "id": "airport_019",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "延误",
      "text": "遅延",
      "pronunciation": "ちえん",
      "audioPath": "audio/ja/airport_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_019_example",
        "zh": "航班预计延误三十分钟。",
        "text": "便は三十分ほど遅延する見込みです。",
        "pronunciation": "びんはさんじゅっぷんほどちえんするみこみです。"
      }
    },
    {
      "id": "airport_020",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "取消",
      "text": "キャンセル",
      "pronunciation": "きゃんせる",
      "audioPath": "audio/ja/airport_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_020_example",
        "zh": "航班取消后可以退款吗？",
        "text": "便がキャンセルになった場合、払い戻しできますか？",
        "pronunciation": "びんがきゃんせるになったばあい、はらいもどしできますか？"
      }
    },
    {
      "id": "airport_021",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "值机",
      "text": "チェックイン",
      "pronunciation": "ちぇっくいん",
      "audioPath": "audio/ja/airport_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_021_example",
        "zh": "这个航班几点开始值机？",
        "text": "この便のチェックインは何時からですか？",
        "pronunciation": "このびんのちぇっくいんはなんじからですか？"
      }
    },
    {
      "id": "airport_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机",
      "text": "搭乗",
      "pronunciation": "とうじょう",
      "audioPath": "audio/ja/airport_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_022_example",
        "zh": "我们这趟航班已经开始登机了吗？",
        "text": "私たちの便はもう搭乗が始まりましたか？",
        "pronunciation": "わたしたちのびんはもうとうじょうがはじまりましたか？"
      }
    },
    {
      "id": "airport_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "起飞",
      "text": "離陸",
      "pronunciation": "りりく",
      "audioPath": "audio/ja/airport_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_023_example",
        "zh": "这架飞机预计几点起飞？",
        "text": "この飛行機は何時に離陸する予定ですか？",
        "pronunciation": "このひこうきはなんじにりりくするよていですか？"
      }
    },
    {
      "id": "airport_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "降落",
      "text": "着陸",
      "pronunciation": "ちゃくりく",
      "audioPath": "audio/ja/airport_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_024_example",
        "zh": "由于天气原因，飞机会晚些降落。",
        "text": "天候のため、飛行機の着陸が遅れます。",
        "pronunciation": "てんこうのため、ひこうきのちゃくりくがおくれます。"
      }
    },
    {
      "id": "airport_025",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "座位",
      "text": "座席",
      "pronunciation": "ざせき",
      "audioPath": "audio/ja/airport_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_026",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠窗座位",
      "text": "窓側の席",
      "pronunciation": "まどがわのせき",
      "audioPath": "audio/ja/airport_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_027",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "过道座位",
      "text": "通路側の席",
      "pronunciation": "つうろがわのせき",
      "audioPath": "audio/ja/airport_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_028",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李领取处",
      "text": "手荷物受取所",
      "pronunciation": "てにもつうけとりじょ",
      "audioPath": "audio/ja/airport_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_029",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李推车",
      "text": "カート",
      "pronunciation": "かーと",
      "audioPath": "audio/ja/airport_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_030",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照查验",
      "text": "パスポートコントロール",
      "pronunciation": "ぱすぽーとこんとろーる",
      "audioPath": "audio/ja/airport_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_031",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "免税店",
      "text": "免税店",
      "pronunciation": "めんぜいてん",
      "audioPath": "audio/ja/airport_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_032",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "机场大巴",
      "text": "空港バス",
      "pronunciation": "くうこうばす",
      "audioPath": "audio/ja/airport_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_032_example",
        "zh": "去市中心的机场大巴从哪里乘坐？",
        "text": "市内行きの空港バスはどこから乗りますか？",
        "pronunciation": "しないいきのくうこうばすはどこからのりますか？"
      }
    },
    {
      "id": "airport_033",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "word",
      "zh": "出租车",
      "text": "タクシー",
      "pronunciation": "たくしー",
      "audioPath": "audio/ja/airport_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_033_example",
        "zh": "请帮我叫一辆出租车。",
        "text": "タクシーを一台呼んでください。",
        "pronunciation": "たくしーをいちだいよんでください。"
      }
    },
    {
      "id": "airport_034",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "地铁",
      "text": "地下鉄",
      "pronunciation": "ちかてつ",
      "audioPath": "audio/ja/airport_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_034_example",
        "zh": "坐地铁去东京站需要换乘吗？",
        "text": "地下鉄で東京駅まで行くには乗り換えが必要ですか？",
        "pronunciation": "ちかてつでとうきょうえきまでいくにはのりかえがひつようですか？"
      }
    },
    {
      "id": "airport_035",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "火车",
      "text": "電車",
      "pronunciation": "でんしゃ",
      "audioPath": "audio/ja/airport_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_035_example",
        "zh": "这趟电车去新宿吗？",
        "text": "この電車は新宿に行きますか？",
        "pronunciation": "このでんしゃはしんじゅくにいきますか？"
      }
    },
    {
      "id": "airport_036",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "高铁",
      "text": "新幹線",
      "pronunciation": "しんかんせん",
      "audioPath": "audio/ja/airport_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_036_example",
        "zh": "我想预订明天的新干线指定席。",
        "text": "明日の新幹線の指定席を予約したいです。",
        "pronunciation": "あしたのしんかんせんのしていせきをよやくしたいです。"
      }
    },
    {
      "id": "airport_037",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "公交车",
      "text": "バス",
      "pronunciation": "ばす",
      "audioPath": "audio/ja/airport_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_037_example",
        "zh": "下一班公交车几点来？",
        "text": "次のバスは何時に来ますか？",
        "pronunciation": "つぎのばすはなんじにきますか？"
      }
    },
    {
      "id": "airport_038",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "车站",
      "text": "駅",
      "pronunciation": "えき",
      "audioPath": "audio/ja/airport_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_038_example",
        "zh": "最近的车站在哪里？",
        "text": "一番近い駅はどこですか？",
        "pronunciation": "いちばんちかいえきはどこですか？"
      }
    },
    {
      "id": "airport_039",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "站台",
      "text": "ホーム",
      "pronunciation": "ほーむ",
      "audioPath": "audio/ja/airport_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_039_example",
        "zh": "去京都的列车在几号站台？",
        "text": "京都行きの電車は何番ホームですか？",
        "pronunciation": "きょうといきのでんしゃはなんばんほーむですか？"
      }
    },
    {
      "id": "airport_040",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "时刻表",
      "text": "時刻表",
      "pronunciation": "じこくひょう",
      "audioPath": "audio/ja/airport_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_040_example",
        "zh": "请看一下墙上的时刻表。",
        "text": "壁の時刻表をご覧ください。",
        "pronunciation": "かべのじこくひょうをごらんください。"
      }
    },
    {
      "id": "airport_041",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "单程票",
      "text": "片道切符",
      "pronunciation": "かたみちきっぷ",
      "audioPath": "audio/ja/airport_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_041_example",
        "zh": "请给我一张去奈良的单程票。",
        "text": "奈良までの片道切符を一枚ください。",
        "pronunciation": "ならまでのかたみちきっぷをいちまいください。"
      }
    },
    {
      "id": "airport_042",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "往返票",
      "text": "往復切符",
      "pronunciation": "おうふくきっぷ",
      "audioPath": "audio/ja/airport_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_042_example",
        "zh": "往返票比两张单程票便宜吗？",
        "text": "往復切符のほうが安いですか？",
        "pronunciation": "おうふくきっぷのほうがやすいですか？"
      }
    },
    {
      "id": "airport_043",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "车票",
      "text": "切符",
      "pronunciation": "きっぷ",
      "audioPath": "audio/ja/airport_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_043_example",
        "zh": "我把车票弄丢了。",
        "text": "切符をなくしてしまいました。",
        "pronunciation": "きっぷをなくしてしまいました。"
      }
    },
    {
      "id": "airport_044",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "售票处",
      "text": "切符売り場",
      "pronunciation": "きっぷうりば",
      "audioPath": "audio/ja/airport_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_044_example",
        "zh": "售票处晚上几点关门？",
        "text": "切符売り場は夜何時までですか？",
        "pronunciation": "きっぷうりばはよるなんじまでですか？"
      }
    },
    {
      "id": "airport_045",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "自动售票机",
      "text": "自動券売機",
      "pronunciation": "じどうけんばいき",
      "audioPath": "audio/ja/airport_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_045_example",
        "zh": "这台自动售票机可以用信用卡吗？",
        "text": "この自動券売機でクレジットカードは使えますか？",
        "pronunciation": "このじどうけんばいきでくれじっとかーどはつかえますか？"
      }
    },
    {
      "id": "airport_046",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "检票口",
      "text": "改札口",
      "pronunciation": "かいさつぐち",
      "audioPath": "audio/ja/airport_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_046_example",
        "zh": "请在检票口刷交通卡。",
        "text": "改札口で交通系ICカードをタッチしてください。",
        "pronunciation": "かいさつぐちでこうつうけいあいしーかーどをたっちしてください。"
      }
    },
    {
      "id": "airport_047",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "入口",
      "text": "入口",
      "pronunciation": "いりぐち",
      "audioPath": "audio/ja/airport_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_047_example",
        "zh": "入口在大楼的右侧。",
        "text": "入口は建物の右側です。",
        "pronunciation": "いりぐちはたてもののみぎがわです。"
      }
    },
    {
      "id": "airport_048",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "出口",
      "text": "出口",
      "pronunciation": "でぐち",
      "audioPath": "audio/ja/airport_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_048_example",
        "zh": "从东出口出去更近。",
        "text": "東口から出るほうが近いです。",
        "pronunciation": "ひがしぐちからでるほうがちかいです。"
      }
    },
    {
      "id": "airport_049",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "问讯处",
      "text": "案内所",
      "pronunciation": "あんないじょ",
      "audioPath": "audio/ja/airport_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_049_example",
        "zh": "请去问讯处询问失物。",
        "text": "忘れ物は案内所で聞いてください。",
        "pronunciation": "わすれものはあんないじょできいてください。"
      }
    },
    {
      "id": "airport_050",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "地图",
      "text": "地図",
      "pronunciation": "ちず",
      "audioPath": "audio/ja/airport_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_050_example",
        "zh": "可以在地图上标出这个地方吗？",
        "text": "地図でこの場所を示してもらえますか？",
        "pronunciation": "ちずでこのばしょをしめしてもらえますか？"
      }
    },
    {
      "id": "airport_051",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "目的地",
      "text": "目的地",
      "pronunciation": "もくてきち",
      "audioPath": "audio/ja/airport_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_051_example",
        "zh": "请在这里输入目的地。",
        "text": "ここに目的地を入力してください。",
        "pronunciation": "ここにもくてきちをにゅうりょくしてください。"
      }
    },
    {
      "id": "airport_052",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "汽车",
      "text": "車",
      "pronunciation": "くるま",
      "audioPath": "audio/ja/airport_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_053",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "租车",
      "text": "レンタカー",
      "pronunciation": "れんたかー",
      "audioPath": "audio/ja/airport_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_053_example",
        "zh": "租车时需要出示什么证件？",
        "text": "レンタカーを借りるとき、どんな書類が必要ですか？",
        "pronunciation": "れんたかーをかりるとき、どんなしょるいがひつようですか？"
      }
    },
    {
      "id": "airport_054",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "加油站",
      "text": "ガソリンスタンド",
      "pronunciation": "がそりんすたんど",
      "audioPath": "audio/ja/airport_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_055",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "停车场",
      "text": "駐車場",
      "pronunciation": "ちゅうしゃじょう",
      "audioPath": "audio/ja/airport_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_056",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "红绿灯",
      "text": "信号",
      "pronunciation": "しんごう",
      "audioPath": "audio/ja/airport_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_057",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "人行横道",
      "text": "横断歩道",
      "pronunciation": "おうだんほどう",
      "audioPath": "audio/ja/airport_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_058",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "自行车",
      "text": "自転車",
      "pronunciation": "じてんしゃ",
      "audioPath": "audio/ja/airport_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_059",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "摩托车",
      "text": "バイク",
      "pronunciation": "ばいく",
      "audioPath": "audio/ja/airport_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_060",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "步行",
      "text": "徒歩",
      "pronunciation": "とほ",
      "audioPath": "audio/ja/airport_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_060_example",
        "zh": "从车站步行到酒店要多久？",
        "text": "駅からホテルまで徒歩で何分ですか？",
        "pronunciation": "えきからほてるまでとほでなんぷんですか？"
      }
    },
    {
      "id": "airport_061",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "直飞",
      "text": "直行便",
      "pronunciation": "ちょっこうびん",
      "audioPath": "audio/ja/airport_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_061_example",
        "zh": "这个航班是直飞，还是需要转机？",
        "text": "この便は直行便ですか、それとも乗り継ぎが必要ですか？",
        "pronunciation": "このびんはちょっこうびんですか、それとものりつぎがひつようですか？"
      }
    },
    {
      "id": "airport_062",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李寄存",
      "text": "荷物預かり",
      "pronunciation": "にもつあずかり",
      "audioPath": "audio/ja/airport_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_062_example",
        "zh": "转机期间，可以把行李寄存在机场吗？",
        "text": "乗り継ぎの間、空港で荷物を預けられますか？",
        "pronunciation": "のりつぎのあいだ、くうこうでにもつをあずけられますか？"
      }
    },
    {
      "id": "airport_063",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李丢失",
      "text": "荷物紛失",
      "pronunciation": "にもつふんしつ",
      "audioPath": "audio/ja/airport_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_063_example",
        "zh": "我的行李没有到达，我想申报行李丢失。",
        "text": "荷物が届いていません。紛失届を出したいです。",
        "pronunciation": "にもつがとどいていません。ふんしつとどけをだしたいです。"
      }
    },
    {
      "id": "airport_064",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照号码",
      "text": "パスポート番号",
      "pronunciation": "ぱすぽーとばんごう",
      "audioPath": "audio/ja/airport_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_065",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航班号",
      "text": "便名",
      "pronunciation": "びんめい",
      "audioPath": "audio/ja/airport_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_066",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "候机室",
      "text": "待合室",
      "pronunciation": "まちあいしつ",
      "audioPath": "audio/ja/airport_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_067",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机时间",
      "text": "搭乗時刻",
      "pronunciation": "とうじょうじこく",
      "audioPath": "audio/ja/airport_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_068",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "随身携带",
      "text": "持ち込む",
      "pronunciation": "もちこむ",
      "audioPath": "audio/ja/airport_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_068_example",
        "zh": "这瓶水可以随身携带上飞机吗？",
        "text": "この水は機内に持ち込めますか？",
        "pronunciation": "このみずはきないにもちこめますか？"
      }
    },
    {
      "id": "airport_069",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "托运",
      "text": "預ける",
      "pronunciation": "あずける",
      "audioPath": "audio/ja/airport_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_069_example",
        "zh": "我想托运这个行李箱。",
        "text": "このスーツケースを預けたいです。",
        "pronunciation": "このすーつけーすをあずけたいです。"
      }
    },
    {
      "id": "airport_070",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李检查",
      "text": "手荷物検査",
      "pronunciation": "てにもつけんさ",
      "audioPath": "audio/ja/airport_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_071",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境卡",
      "text": "入国カード",
      "pronunciation": "にゅうこくかーど",
      "audioPath": "audio/ja/airport_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_072",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "海关申报",
      "text": "税関申告",
      "pronunciation": "ぜいかんしんこく",
      "audioPath": "audio/ja/airport_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_072_example",
        "zh": "海关申报单在哪里填写？",
        "text": "税関申告書はどこで記入しますか？",
        "pronunciation": "ぜいかんしんこくしょはどこできにゅうしますか？"
      }
    },
    {
      "id": "airport_073",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "转机柜台",
      "text": "乗り継ぎカウンター",
      "pronunciation": "のりつぎかうんたー",
      "audioPath": "audio/ja/airport_073.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_074",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "安全带",
      "text": "シートベルト",
      "pronunciation": "しーとべると",
      "audioPath": "audio/ja/airport_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_075",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "空乘",
      "text": "客室乗務員",
      "pronunciation": "きゃくしつじょうむいん",
      "audioPath": "audio/ja/airport_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_076",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "机长",
      "text": "機長",
      "pronunciation": "きちょう",
      "audioPath": "audio/ja/airport_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_077",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机桥",
      "text": "搭乗橋",
      "pronunciation": "とうじょうきょう",
      "audioPath": "audio/ja/airport_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_078",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "跑道",
      "text": "滑走路",
      "pronunciation": "かっそうろ",
      "audioPath": "audio/ja/airport_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_079",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "签证延期",
      "text": "ビザ延長",
      "pronunciation": "びざえんちょう",
      "audioPath": "audio/ja/airport_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_079_example",
        "zh": "我的签证快到期了，在哪里申请延期？",
        "text": "ビザの期限が近いのですが、どこで延長を申請できますか？",
        "pronunciation": "びざのきげんがちかいのですが、どこでえんちょうをしんせいできますか？"
      }
    },
    {
      "id": "airport_080",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境检查",
      "text": "入国審査",
      "pronunciation": "にゅうこくしんさ",
      "audioPath": "audio/ja/airport_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_081",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李超重",
      "text": "超過手荷物",
      "pronunciation": "ちょうかてにもつ",
      "audioPath": "audio/ja/airport_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_airport_081_example",
        "zh": "行李超重了，要付多少费用？",
        "text": "荷物が重量オーバーです。追加料金はいくらですか？",
        "pronunciation": "にもつがじゅうりょうおーばーです。ついかりょうきんはいくらですか？"
      }
    },
    {
      "id": "airport_082",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠窗",
      "text": "窓側",
      "pronunciation": "まどがわ",
      "audioPath": "audio/ja/airport_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_083",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠过道",
      "text": "通路側",
      "pronunciation": "つうろがわ",
      "audioPath": "audio/ja/airport_083.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_084",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "救生衣",
      "text": "救命胴衣",
      "pronunciation": "きゅうめいどうい",
      "audioPath": "audio/ja/airport_084.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_085",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请问在哪里登机？",
      "text": "搭乗口はどこですか？",
      "pronunciation": "とうじょうぐちはどこですか？",
      "audioPath": "audio/ja/airport_085.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "airport_086",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "请问在哪里取行李？",
      "text": "荷物はどこで受け取りますか？",
      "pronunciation": "にもつはどこでうけとりますか？",
      "audioPath": "audio/ja/airport_086.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "airport_087",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "我想换乘。",
      "text": "乗り換えたいです。",
      "pronunciation": "のりかえたいです。",
      "audioPath": "audio/ja/airport_087.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "hotel_001",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "酒店",
      "text": "ホテル",
      "pronunciation": "ほてる",
      "audioPath": "audio/ja/hotel_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_001_example",
        "zh": "这家酒店离车站很近。",
        "text": "このホテルは駅から近いです。",
        "pronunciation": "このほてるはえきからちかいです。"
      }
    },
    {
      "id": "hotel_002",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "日式旅馆",
      "text": "旅館",
      "pronunciation": "りょかん",
      "audioPath": "audio/ja/hotel_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_002_example",
        "zh": "这家日式旅馆可以泡温泉。",
        "text": "この旅館では温泉に入れます。",
        "pronunciation": "このりょかんではおんせんにはいれます。"
      }
    },
    {
      "id": "hotel_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "民宿",
      "text": "民宿",
      "pronunciation": "みんしゅく",
      "audioPath": "audio/ja/hotel_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_003_example",
        "zh": "这家民宿包含早餐吗？",
        "text": "この民宿は朝食付きですか？",
        "pronunciation": "このみんしゅくはちょうしょくつきですか？"
      }
    },
    {
      "id": "hotel_004",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "前台",
      "text": "フロント",
      "pronunciation": "ふろんと",
      "audioPath": "audio/ja/hotel_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_004_example",
        "zh": "请把房卡交给前台。",
        "text": "ルームキーをフロントに預けてください。",
        "pronunciation": "るーむきーをふろんとにあずけてください。"
      }
    },
    {
      "id": "hotel_005",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "预订",
      "text": "予約",
      "pronunciation": "よやく",
      "audioPath": "audio/ja/hotel_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_005_example",
        "zh": "我以王这个名字预订了房间。",
        "text": "王の名前で予約しています。",
        "pronunciation": "わんのなまえでよやくしています。"
      }
    },
    {
      "id": "hotel_006",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "入住",
      "text": "チェックイン",
      "pronunciation": "ちぇっくいん",
      "audioPath": "audio/ja/hotel_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_006_example",
        "zh": "我想现在办理入住。",
        "text": "今、チェックインをお願いします。",
        "pronunciation": "いま、ちぇっくいんをおねがいします。"
      }
    },
    {
      "id": "hotel_007",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "退房",
      "text": "チェックアウト",
      "pronunciation": "ちぇっくあうと",
      "audioPath": "audio/ja/hotel_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_007_example",
        "zh": "退房时间是上午十一点。",
        "text": "チェックアウトは午前十一時です。",
        "pronunciation": "ちぇっくあうとはごぜんじゅういちじです。"
      }
    },
    {
      "id": "hotel_008",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "房间",
      "text": "部屋",
      "pronunciation": "へや",
      "audioPath": "audio/ja/hotel_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_008_example",
        "zh": "我的房间在几楼？",
        "text": "私の部屋は何階ですか？",
        "pronunciation": "わたしのへやはなんがいですか？"
      }
    },
    {
      "id": "hotel_009",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "单人房",
      "text": "シングルルーム",
      "pronunciation": "しんぐるるーむ",
      "audioPath": "audio/ja/hotel_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_009_example",
        "zh": "我预订了一间单人房。",
        "text": "シングルルームを一部屋予約しました。",
        "pronunciation": "しんぐるるーむをひとへやよやくしました。"
      }
    },
    {
      "id": "hotel_010",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "双人房",
      "text": "ツインルーム",
      "pronunciation": "ついんるーむ",
      "audioPath": "audio/ja/hotel_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_010_example",
        "zh": "有两张床的双人房吗？",
        "text": "ベッドが二台あるツインルームはありますか？",
        "pronunciation": "べっどがにだいあるついんるーむはありますか？"
      }
    },
    {
      "id": "hotel_011",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "大床房",
      "text": "ダブルルーム",
      "pronunciation": "だぶるるーむ",
      "audioPath": "audio/ja/hotel_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_011_example",
        "zh": "大床房可以住两个人吗？",
        "text": "ダブルルームに二人で泊まれますか？",
        "pronunciation": "だぶるるーむにふたりでとまれますか？"
      }
    },
    {
      "id": "hotel_012",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "套房",
      "text": "スイートルーム",
      "pronunciation": "すいーとるーむ",
      "audioPath": "audio/ja/hotel_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_012_example",
        "zh": "这间套房可以看到海。",
        "text": "このスイートルームから海が見えます。",
        "pronunciation": "このすいーとるーむからうみがみえます。"
      }
    },
    {
      "id": "hotel_013",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "钥匙",
      "text": "鍵",
      "pronunciation": "かぎ",
      "audioPath": "audio/ja/hotel_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_013_example",
        "zh": "我把房间钥匙忘在里面了。",
        "text": "部屋に鍵を忘れました。",
        "pronunciation": "へやにかぎをわすれました。"
      }
    },
    {
      "id": "hotel_014",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "房卡",
      "text": "ルームキー",
      "pronunciation": "るーむきー",
      "audioPath": "audio/ja/hotel_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_014_example",
        "zh": "我的房卡打不开门。",
        "text": "ルームキーでドアが開きません。",
        "pronunciation": "るーむきーでどあがあきません。"
      }
    },
    {
      "id": "hotel_015",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "行李员",
      "text": "ベルボーイ",
      "pronunciation": "べるぼーい",
      "audioPath": "audio/ja/hotel_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_015_example",
        "zh": "行李员会把行李送到房间。",
        "text": "ベルボーイが荷物を部屋まで運びます。",
        "pronunciation": "べるぼーいがにもつをへやまではこびます。"
      }
    },
    {
      "id": "hotel_016",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "工作人员",
      "text": "スタッフ",
      "pronunciation": "すたっふ",
      "audioPath": "audio/ja/hotel_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_016_example",
        "zh": "请问附近有工作人员吗？",
        "text": "近くにスタッフはいますか？",
        "pronunciation": "ちかくにすたっふはいますか？"
      }
    },
    {
      "id": "hotel_017",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "客房服务",
      "text": "ルームサービス",
      "pronunciation": "るーむさーびす",
      "audioPath": "audio/ja/hotel_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_017_example",
        "zh": "我想点一份客房服务的早餐。",
        "text": "ルームサービスで朝食を頼みたいです。",
        "pronunciation": "るーむさーびすでちょうしょくをたのみたいです。"
      }
    },
    {
      "id": "hotel_018",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "打扫",
      "text": "掃除",
      "pronunciation": "そうじ",
      "audioPath": "audio/ja/hotel_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_018_example",
        "zh": "今天不需要打扫房间。",
        "text": "今日は部屋の掃除は不要です。",
        "pronunciation": "きょうはへやのそうじはふようです。"
      }
    },
    {
      "id": "hotel_019",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "毛巾",
      "text": "タオル",
      "pronunciation": "たおる",
      "audioPath": "audio/ja/hotel_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_019_example",
        "zh": "可以再给我两条毛巾吗？",
        "text": "タオルをもう二枚いただけますか？",
        "pronunciation": "たおるをもうにまいいただけますか？"
      }
    },
    {
      "id": "hotel_020",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "床单",
      "text": "シーツ",
      "pronunciation": "しーつ",
      "audioPath": "audio/ja/hotel_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_020_example",
        "zh": "请帮我更换床单。",
        "text": "シーツを交換してください。",
        "pronunciation": "しーつをこうかんしてください。"
      }
    },
    {
      "id": "hotel_021",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "枕头",
      "text": "枕",
      "pronunciation": "まくら",
      "audioPath": "audio/ja/hotel_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_022",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "被子",
      "text": "布団",
      "pronunciation": "ふとん",
      "audioPath": "audio/ja/hotel_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_023",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "毯子",
      "text": "毛布",
      "pronunciation": "もうふ",
      "audioPath": "audio/ja/hotel_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_024",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "空调",
      "text": "エアコン",
      "pronunciation": "えあこん",
      "audioPath": "audio/ja/hotel_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_025",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "暖气",
      "text": "暖房",
      "pronunciation": "だんぼう",
      "audioPath": "audio/ja/hotel_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_026",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "浴室",
      "text": "浴室",
      "pronunciation": "よくしつ",
      "audioPath": "audio/ja/hotel_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_027",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "淋浴",
      "text": "シャワー",
      "pronunciation": "しゃわー",
      "audioPath": "audio/ja/hotel_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_028",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "浴缸",
      "text": "バスタブ",
      "pronunciation": "ばすたぶ",
      "audioPath": "audio/ja/hotel_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_029",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "热水",
      "text": "お湯",
      "pronunciation": "おゆ",
      "audioPath": "audio/ja/hotel_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_030",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "冷水",
      "text": "冷水",
      "pronunciation": "れいすい",
      "audioPath": "audio/ja/hotel_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_031",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "卫生间",
      "text": "トイレ",
      "pronunciation": "といれ",
      "audioPath": "audio/ja/hotel_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_032",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "卫生纸",
      "text": "トイレットペーパー",
      "pronunciation": "といれっとぺーぱー",
      "audioPath": "audio/ja/hotel_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_033",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "洗发水",
      "text": "シャンプー",
      "pronunciation": "しゃんぷー",
      "audioPath": "audio/ja/hotel_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_034",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "沐浴露",
      "text": "ボディソープ",
      "pronunciation": "ぼでぃそーぷ",
      "audioPath": "audio/ja/hotel_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_035",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "牙刷",
      "text": "歯ブラシ",
      "pronunciation": "はぶらし",
      "audioPath": "audio/ja/hotel_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_036",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "牙膏",
      "text": "歯磨き粉",
      "pronunciation": "はみがきこ",
      "audioPath": "audio/ja/hotel_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_037",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "吹风机",
      "text": "ドライヤー",
      "pronunciation": "どらいやー",
      "audioPath": "audio/ja/hotel_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_038",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "插座",
      "text": "コンセント",
      "pronunciation": "こんせんと",
      "audioPath": "audio/ja/hotel_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_039",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "转换插头",
      "text": "変換プラグ",
      "pronunciation": "へんかんぷらぐ",
      "audioPath": "audio/ja/hotel_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_040",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "无线网络",
      "text": "Wi-Fi",
      "pronunciation": "わいふぁい",
      "audioPath": "audio/ja/hotel_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_041",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "网络",
      "text": "インターネット",
      "pronunciation": "いんたーねっと",
      "audioPath": "audio/ja/hotel_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_042",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "电梯",
      "text": "エレベーター",
      "pronunciation": "えれべーたー",
      "audioPath": "audio/ja/hotel_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_043",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "楼梯",
      "text": "階段",
      "pronunciation": "かいだん",
      "audioPath": "audio/ja/hotel_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_044",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "大堂",
      "text": "ロビー",
      "pronunciation": "ろびー",
      "audioPath": "audio/ja/hotel_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_045",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "餐厅",
      "text": "レストラン",
      "pronunciation": "れすとらん",
      "audioPath": "audio/ja/hotel_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_046",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "早餐",
      "text": "朝食",
      "pronunciation": "ちょうしょく",
      "audioPath": "audio/ja/hotel_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_047",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "叫醒服务",
      "text": "モーニングコール",
      "pronunciation": "もーにんぐこーる",
      "audioPath": "audio/ja/hotel_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_047_example",
        "zh": "明早六点可以安排叫醒服务吗？",
        "text": "明日の朝六時にモーニングコールをお願いできますか？",
        "pronunciation": "あしたのあさろくじにもーにんぐこーるをおねがいできますか？"
      }
    },
    {
      "id": "hotel_048",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "洗衣服务",
      "text": "ランドリーサービス",
      "pronunciation": "らんどりーさーびす",
      "audioPath": "audio/ja/hotel_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_048_example",
        "zh": "洗衣服务今天送去，明天能取吗？",
        "text": "今日ランドリーサービスに出したら、明日受け取れますか？",
        "pronunciation": "きょうらんどりーさーびすにだしたら、あしたうけとれますか？"
      }
    },
    {
      "id": "hotel_049",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "熨斗",
      "text": "アイロン",
      "pronunciation": "あいろん",
      "audioPath": "audio/ja/hotel_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_050",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "保险箱",
      "text": "セーフティボックス",
      "pronunciation": "せーふてぃぼっくす",
      "audioPath": "audio/ja/hotel_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_051",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "退房时间",
      "text": "チェックアウト時間",
      "pronunciation": "ちぇっくあうとじかん",
      "audioPath": "audio/ja/hotel_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_052",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "入住时间",
      "text": "チェックイン時間",
      "pronunciation": "ちぇっくいんじかん",
      "audioPath": "audio/ja/hotel_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_053",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "空房",
      "text": "空室",
      "pronunciation": "くうしつ",
      "audioPath": "audio/ja/hotel_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_053_example",
        "zh": "今晚还有禁烟的空房吗？",
        "text": "今夜、禁煙の空室はありますか？",
        "pronunciation": "こんや、きんえんのくうしつはありますか？"
      }
    },
    {
      "id": "hotel_054",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "满房",
      "text": "満室",
      "pronunciation": "まんしつ",
      "audioPath": "audio/ja/hotel_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_054_example",
        "zh": "如果今晚满房，明晚还有房间吗？",
        "text": "今夜は満室なら、明日の夜は空室がありますか？",
        "pronunciation": "こんやはまんしつなら、あしたのよるはくうしつがありますか？"
      }
    },
    {
      "id": "hotel_055",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "押金",
      "text": "デポジット",
      "pronunciation": "でぽじっと",
      "audioPath": "audio/ja/hotel_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_055_example",
        "zh": "退房后押金什么时候退还？",
        "text": "チェックアウト後、デポジットはいつ返金されますか？",
        "pronunciation": "ちぇっくあうとご、でぽじっとはいつへんきんされますか？"
      }
    },
    {
      "id": "hotel_056",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "收据",
      "text": "領収書",
      "pronunciation": "りょうしゅうしょ",
      "audioPath": "audio/ja/hotel_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_057",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "账单",
      "text": "請求書",
      "pronunciation": "せいきゅうしょ",
      "audioPath": "audio/ja/hotel_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_057_example",
        "zh": "账单上这笔额外费用是什么？",
        "text": "請求書のこの追加料金は何ですか？",
        "pronunciation": "せいきゅうしょのこのついかりょうきんはなんですか？"
      }
    },
    {
      "id": "hotel_058",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "前台电话",
      "text": "フロント電話",
      "pronunciation": "ふろんとでんわ",
      "audioPath": "audio/ja/hotel_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_059",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "烟雾报警器",
      "text": "火災報知器",
      "pronunciation": "かさいほうちき",
      "audioPath": "audio/ja/hotel_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_060",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "灭火器",
      "text": "消火器",
      "pronunciation": "しょうかき",
      "audioPath": "audio/ja/hotel_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_061",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "婴儿床",
      "text": "ベビーベッド",
      "pronunciation": "べびーべっど",
      "audioPath": "audio/ja/hotel_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_062",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "加床",
      "text": "エキストラベッド",
      "pronunciation": "えきすとらべっど",
      "audioPath": "audio/ja/hotel_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_063",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "床垫",
      "text": "マットレス",
      "pronunciation": "まっとれす",
      "audioPath": "audio/ja/hotel_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_064",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "冰箱",
      "text": "冷蔵庫",
      "pronunciation": "れいぞうこ",
      "audioPath": "audio/ja/hotel_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_065",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "微波炉",
      "text": "電子レンジ",
      "pronunciation": "でんしれんじ",
      "audioPath": "audio/ja/hotel_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_066",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "水壶",
      "text": "ポット",
      "pronunciation": "ぽっと",
      "audioPath": "audio/ja/hotel_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_067",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "杯子",
      "text": "コップ",
      "pronunciation": "こっぷ",
      "audioPath": "audio/ja/hotel_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_068",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "拖鞋",
      "text": "スリッパ",
      "pronunciation": "すりっぱ",
      "audioPath": "audio/ja/hotel_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_069",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "衣架",
      "text": "ハンガー",
      "pronunciation": "はんがー",
      "audioPath": "audio/ja/hotel_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_070",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "衣柜",
      "text": "クローゼット",
      "pronunciation": "くろーぜっと",
      "audioPath": "audio/ja/hotel_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_071",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "窗帘",
      "text": "カーテン",
      "pronunciation": "かーてん",
      "audioPath": "audio/ja/hotel_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_072",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "阳台",
      "text": "バルコニー",
      "pronunciation": "ばるこにー",
      "audioPath": "audio/ja/hotel_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_073",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "景色",
      "text": "景色",
      "pronunciation": "けしき",
      "audioPath": "audio/ja/hotel_073.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_074",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "安静",
      "text": "静か",
      "pronunciation": "しずか",
      "audioPath": "audio/ja/hotel_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_074_example",
        "zh": "我想要一间比较安静的房间。",
        "text": "もう少し静かな部屋をお願いします。",
        "pronunciation": "もうすこししずかなへやをおねがいします。"
      }
    },
    {
      "id": "hotel_075",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "吵闹",
      "text": "うるさい",
      "pronunciation": "うるさい",
      "audioPath": "audio/ja/hotel_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_075_example",
        "zh": "隔壁房间太吵了，可以换房吗？",
        "text": "隣の部屋がうるさいので、部屋を替えられますか？",
        "pronunciation": "となりのへやがうるさいので、へやをかえられますか？"
      }
    },
    {
      "id": "hotel_076",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "舒适",
      "text": "快適",
      "pronunciation": "かいてき",
      "audioPath": "audio/ja/hotel_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_076_example",
        "zh": "这张床睡着不太舒适。",
        "text": "このベッドはあまり快適ではありません。",
        "pronunciation": "このべっどはあまりかいてきではありません。"
      }
    },
    {
      "id": "hotel_077",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "房间号",
      "text": "部屋番号",
      "pronunciation": "へやばんごう",
      "audioPath": "audio/ja/hotel_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_078",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "续住",
      "text": "延泊",
      "pronunciation": "えんぱく",
      "audioPath": "audio/ja/hotel_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_hotel_078_example",
        "zh": "我想续住一晚，还有空房吗？",
        "text": "もう一泊延泊したいのですが、空室はありますか？",
        "pronunciation": "もういっぱくえんぱくしたいのですが、くうしつはありますか？"
      }
    },
    {
      "id": "hotel_079",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我把钥匙弄丢了。",
      "text": "鍵をなくしました。",
      "pronunciation": "かぎをなくしました。",
      "audioPath": "audio/ja/hotel_079.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "hotel_080",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "可以寄存行李吗？",
      "text": "荷物を預かってもらえますか？",
      "pronunciation": "にもつをあずかってもらえますか？",
      "audioPath": "audio/ja/hotel_080.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "hotel_081",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "请问几点退房？",
      "text": "チェックアウトは何時ですか？",
      "pronunciation": "ちぇっくあうとはなんじですか？",
      "audioPath": "audio/ja/hotel_081.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "hotel_082",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "可以换个房间吗？",
      "text": "部屋を変えてもらえますか？",
      "pronunciation": "へやをかえてもらえますか？",
      "audioPath": "audio/ja/hotel_082.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_001",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "早餐",
      "text": "朝食",
      "pronunciation": "ちょうしょく",
      "audioPath": "audio/ja/food_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_001_example",
        "zh": "早餐供应到几点？",
        "text": "朝食は何時までですか？",
        "pronunciation": "ちょうしょくはなんじまでですか？"
      }
    },
    {
      "id": "food_002",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "午餐",
      "text": "昼食",
      "pronunciation": "ちゅうしょく",
      "audioPath": "audio/ja/food_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_002_example",
        "zh": "午餐套餐包含饮料。",
        "text": "昼食のセットには飲み物が付きます。",
        "pronunciation": "ちゅうしょくのせっとにはのみものがつきます。"
      }
    },
    {
      "id": "food_003",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "晚餐",
      "text": "夕食",
      "pronunciation": "ゆうしょく",
      "audioPath": "audio/ja/food_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_003_example",
        "zh": "今晚我想在这里吃晚餐。",
        "text": "今夜はこちらで夕食を食べたいです。",
        "pronunciation": "こんやはこちらでゆうしょくをたべたいです。"
      }
    },
    {
      "id": "food_004",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "菜单",
      "text": "メニュー",
      "pronunciation": "めにゅー",
      "audioPath": "audio/ja/food_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_004_example",
        "zh": "可以给我一份英文菜单吗？",
        "text": "英語のメニューをいただけますか？",
        "pronunciation": "えいごのめにゅーをいただけますか？"
      }
    },
    {
      "id": "food_005",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "点菜",
      "text": "注文",
      "pronunciation": "ちゅうもん",
      "audioPath": "audio/ja/food_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_005_example",
        "zh": "准备好后请按这里点菜。",
        "text": "お決まりになりましたら、こちらで注文してください。",
        "pronunciation": "おきまりになりましたら、こちらでちゅうもんしてください。"
      }
    },
    {
      "id": "food_006",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "水",
      "text": "水",
      "pronunciation": "みず",
      "audioPath": "audio/ja/food_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_006_example",
        "zh": "请给我一杯水。",
        "text": "水を一杯ください。",
        "pronunciation": "みずをいっぱいください。"
      }
    },
    {
      "id": "food_007",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "热水",
      "text": "お湯",
      "pronunciation": "おゆ",
      "audioPath": "audio/ja/food_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_007_example",
        "zh": "可以给孩子一点热水吗？",
        "text": "子ども用にお湯をいただけますか？",
        "pronunciation": "こどもようにおゆをいただけますか？"
      }
    },
    {
      "id": "food_008",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "茶",
      "text": "お茶",
      "pronunciation": "おちゃ",
      "audioPath": "audio/ja/food_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_008_example",
        "zh": "餐后请给我一杯茶。",
        "text": "食後にお茶をお願いします。",
        "pronunciation": "しょくごにおちゃをおねがいします。"
      }
    },
    {
      "id": "food_009",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "咖啡",
      "text": "コーヒー",
      "pronunciation": "こーひー",
      "audioPath": "audio/ja/food_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_009_example",
        "zh": "咖啡请不要加糖。",
        "text": "コーヒーは砂糖なしでお願いします。",
        "pronunciation": "こーひーはさとうなしでおねがいします。"
      }
    },
    {
      "id": "food_010",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "牛奶",
      "text": "牛乳",
      "pronunciation": "ぎゅうにゅう",
      "audioPath": "audio/ja/food_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_010_example",
        "zh": "这道菜里含牛奶吗？",
        "text": "この料理に牛乳は入っていますか？",
        "pronunciation": "このりょうりにぎゅうにゅうははいっていますか？"
      }
    },
    {
      "id": "food_011",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "果汁",
      "text": "ジュース",
      "pronunciation": "じゅーす",
      "audioPath": "audio/ja/food_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_011_example",
        "zh": "果汁有橙子和苹果两种。",
        "text": "ジュースはオレンジとりんごがあります。",
        "pronunciation": "じゅーすはおれんじとりんごがあります。"
      }
    },
    {
      "id": "food_012",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "啤酒",
      "text": "ビール",
      "pronunciation": "びーる",
      "audioPath": "audio/ja/food_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_012_example",
        "zh": "请先来一杯生啤。",
        "text": "まず生ビールを一杯ください。",
        "pronunciation": "まずなまびーるをいっぱいください。"
      }
    },
    {
      "id": "food_013",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "红酒",
      "text": "ワイン",
      "pronunciation": "わいん",
      "audioPath": "audio/ja/food_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_013_example",
        "zh": "这款红酒可以按杯点吗？",
        "text": "このワインはグラスで頼めますか？",
        "pronunciation": "このわいんはぐらすでたのめますか？"
      }
    },
    {
      "id": "food_014",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "米饭",
      "text": "ご飯",
      "pronunciation": "ごはん",
      "audioPath": "audio/ja/food_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_014_example",
        "zh": "米饭请少一点。",
        "text": "ご飯は少なめでお願いします。",
        "pronunciation": "ごはんはすくなめでおねがいします。"
      }
    },
    {
      "id": "food_015",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "面包",
      "text": "パン",
      "pronunciation": "ぱん",
      "audioPath": "audio/ja/food_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_015_example",
        "zh": "这个面包是刚烤好的。",
        "text": "このパンは焼きたてです。",
        "pronunciation": "このぱんはやきたてです。"
      }
    },
    {
      "id": "food_016",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "面条",
      "text": "麺",
      "pronunciation": "めん",
      "audioPath": "audio/ja/food_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_016_example",
        "zh": "这种面条很有嚼劲。",
        "text": "この麺はこしがあります。",
        "pronunciation": "このめんはこしがあります。"
      }
    },
    {
      "id": "food_017",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "拉面",
      "text": "ラーメン",
      "pronunciation": "らーめん",
      "audioPath": "audio/ja/food_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_017_example",
        "zh": "这碗拉面可以做得不辣吗？",
        "text": "このラーメンは辛くしないで作れますか？",
        "pronunciation": "このらーめんはからくしないでつくれますか？"
      }
    },
    {
      "id": "food_018",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "乌冬面",
      "text": "うどん",
      "pronunciation": "うどん",
      "audioPath": "audio/ja/food_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_018_example",
        "zh": "乌冬面请做成热的。",
        "text": "うどんは温かいものをお願いします。",
        "pronunciation": "うどんはあたたかいものをおねがいします。"
      }
    },
    {
      "id": "food_019",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "荞麦面",
      "text": "そば",
      "pronunciation": "そば",
      "audioPath": "audio/ja/food_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_019_example",
        "zh": "我想吃冷荞麦面。",
        "text": "冷たいそばが食べたいです。",
        "pronunciation": "つめたいそばがたべたいです。"
      }
    },
    {
      "id": "food_020",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "寿司",
      "text": "寿司",
      "pronunciation": "すし",
      "audioPath": "audio/ja/food_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_020_example",
        "zh": "这份寿司里有生鱼。",
        "text": "この寿司には生魚が入っています。",
        "pronunciation": "このすしにはなまざかながはいっています。"
      }
    },
    {
      "id": "food_021",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "生鱼片",
      "text": "刺身",
      "pronunciation": "さしみ",
      "audioPath": "audio/ja/food_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_022",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "天妇罗",
      "text": "天ぷら",
      "pronunciation": "てんぷら",
      "audioPath": "audio/ja/food_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_023",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "味噌汤",
      "text": "味噌汁",
      "pronunciation": "みそしる",
      "audioPath": "audio/ja/food_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_024",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鸡蛋",
      "text": "卵",
      "pronunciation": "たまご",
      "audioPath": "audio/ja/food_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_025",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "肉",
      "text": "肉",
      "pronunciation": "にく",
      "audioPath": "audio/ja/food_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_026",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "牛肉",
      "text": "牛肉",
      "pronunciation": "ぎゅうにく",
      "audioPath": "audio/ja/food_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_027",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "猪肉",
      "text": "豚肉",
      "pronunciation": "ぶたにく",
      "audioPath": "audio/ja/food_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_028",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鸡肉",
      "text": "鶏肉",
      "pronunciation": "とりにく",
      "audioPath": "audio/ja/food_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_029",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鱼",
      "text": "魚",
      "pronunciation": "さかな",
      "audioPath": "audio/ja/food_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_030",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "虾",
      "text": "海老",
      "pronunciation": "えび",
      "audioPath": "audio/ja/food_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_031",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "螃蟹",
      "text": "蟹",
      "pronunciation": "かに",
      "audioPath": "audio/ja/food_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_032",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "蔬菜",
      "text": "野菜",
      "pronunciation": "やさい",
      "audioPath": "audio/ja/food_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_033",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "水果",
      "text": "果物",
      "pronunciation": "くだもの",
      "audioPath": "audio/ja/food_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_034",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "苹果",
      "text": "りんご",
      "pronunciation": "りんご",
      "audioPath": "audio/ja/food_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_035",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "香蕉",
      "text": "バナナ",
      "pronunciation": "ばなな",
      "audioPath": "audio/ja/food_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_036",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "橙子",
      "text": "オレンジ",
      "pronunciation": "おれんじ",
      "audioPath": "audio/ja/food_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_037",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "草莓",
      "text": "いちご",
      "pronunciation": "いちご",
      "audioPath": "audio/ja/food_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_038",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "西瓜",
      "text": "スイカ",
      "pronunciation": "すいか",
      "audioPath": "audio/ja/food_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_039",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "沙拉",
      "text": "サラダ",
      "pronunciation": "さらだ",
      "audioPath": "audio/ja/food_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_040",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "汤",
      "text": "スープ",
      "pronunciation": "すーぷ",
      "audioPath": "audio/ja/food_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_041",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "汉堡",
      "text": "ハンバーガー",
      "pronunciation": "はんばーがー",
      "audioPath": "audio/ja/food_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_042",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "炸鸡",
      "text": "フライドチキン",
      "pronunciation": "ふらいどちきん",
      "audioPath": "audio/ja/food_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_043",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "薯条",
      "text": "フライドポテト",
      "pronunciation": "ふらいどぽてと",
      "audioPath": "audio/ja/food_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_044",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "披萨",
      "text": "ピザ",
      "pronunciation": "ぴざ",
      "audioPath": "audio/ja/food_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_045",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "三明治",
      "text": "サンドイッチ",
      "pronunciation": "さんどいっち",
      "audioPath": "audio/ja/food_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_046",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "冰淇淋",
      "text": "アイスクリーム",
      "pronunciation": "あいすくりーむ",
      "audioPath": "audio/ja/food_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_047",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "蛋糕",
      "text": "ケーキ",
      "pronunciation": "けーき",
      "audioPath": "audio/ja/food_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_048",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "甜点",
      "text": "デザート",
      "pronunciation": "でざーと",
      "audioPath": "audio/ja/food_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_049",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "巧克力",
      "text": "チョコレート",
      "pronunciation": "ちょこれーと",
      "audioPath": "audio/ja/food_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_050",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "糖果",
      "text": "キャンディー",
      "pronunciation": "きゃんでぃー",
      "audioPath": "audio/ja/food_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_051",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "盐",
      "text": "塩",
      "pronunciation": "しお",
      "audioPath": "audio/ja/food_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_052",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "糖",
      "text": "砂糖",
      "pronunciation": "さとう",
      "audioPath": "audio/ja/food_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_053",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "酱油",
      "text": "醤油",
      "pronunciation": "しょうゆ",
      "audioPath": "audio/ja/food_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_054",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "醋",
      "text": "酢",
      "pronunciation": "す",
      "audioPath": "audio/ja/food_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_055",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "胡椒",
      "text": "胡椒",
      "pronunciation": "こしょう",
      "audioPath": "audio/ja/food_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_056",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "辣椒",
      "text": "唐辛子",
      "pronunciation": "とうがらし",
      "audioPath": "audio/ja/food_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_057",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "芥末",
      "text": "わさび",
      "pronunciation": "わさび",
      "audioPath": "audio/ja/food_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_058",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "筷子",
      "text": "箸",
      "pronunciation": "はし",
      "audioPath": "audio/ja/food_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_059",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "勺子",
      "text": "スプーン",
      "pronunciation": "すぷーん",
      "audioPath": "audio/ja/food_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_060",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "叉子",
      "text": "フォーク",
      "pronunciation": "ふぉーく",
      "audioPath": "audio/ja/food_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_061",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "刀",
      "text": "ナイフ",
      "pronunciation": "ないふ",
      "audioPath": "audio/ja/food_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_062",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "盘子",
      "text": "皿",
      "pronunciation": "さら",
      "audioPath": "audio/ja/food_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_063",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "碗",
      "text": "茶碗",
      "pronunciation": "ちゃわん",
      "audioPath": "audio/ja/food_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_064",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "玻璃杯",
      "text": "グラス",
      "pronunciation": "ぐらす",
      "audioPath": "audio/ja/food_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_065",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "餐巾纸",
      "text": "ナプキン",
      "pronunciation": "なぷきん",
      "audioPath": "audio/ja/food_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_066",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "结账",
      "text": "お会計",
      "pronunciation": "おかいけい",
      "audioPath": "audio/ja/food_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_066_example",
        "zh": "我们可以分开结账吗？",
        "text": "別々にお会計できますか？",
        "pronunciation": "べつべつにおかいけいできますか？"
      }
    },
    {
      "id": "food_067",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "收银台",
      "text": "レジ",
      "pronunciation": "れじ",
      "audioPath": "audio/ja/food_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_068",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "服务员",
      "text": "ウェイター",
      "pronunciation": "うぇいたー",
      "audioPath": "audio/ja/food_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_069",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "空位",
      "text": "空席",
      "pronunciation": "くうせき",
      "audioPath": "audio/ja/food_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_070",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "吸烟区",
      "text": "喫煙席",
      "pronunciation": "きつえんせき",
      "audioPath": "audio/ja/food_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_071",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "禁烟区",
      "text": "禁煙席",
      "pronunciation": "きんえんせき",
      "audioPath": "audio/ja/food_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_072",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "外带",
      "text": "持ち帰り",
      "pronunciation": "もちかえり",
      "audioPath": "audio/ja/food_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_072_example",
        "zh": "剩下的菜可以打包外带吗？",
        "text": "残った料理を持ち帰れますか？",
        "pronunciation": "のこったりょうりをもちかえれますか？"
      }
    },
    {
      "id": "food_073",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "堂食",
      "text": "店内で食べる",
      "pronunciation": "てんないでたべる",
      "audioPath": "audio/ja/food_073.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_074",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "好吃",
      "text": "おいしい",
      "pronunciation": "おいしい",
      "audioPath": "audio/ja/food_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_074_example",
        "zh": "这道菜很好吃，叫什么名字？",
        "text": "この料理はおいしいですね。何という名前ですか？",
        "pronunciation": "このりょうりはおいしいですね。なんというなまえですか？"
      }
    },
    {
      "id": "food_075",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "难吃",
      "text": "まずい",
      "pronunciation": "まずい",
      "audioPath": "audio/ja/food_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_075_example",
        "zh": "这道菜不太好吃，可以换一道吗？",
        "text": "この料理はあまりおいしくありません。別の料理に替えられますか？",
        "pronunciation": "このりょうりはあまりおいしくありません。べつのりょうりにかえられますか？"
      }
    },
    {
      "id": "food_076",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "甜",
      "text": "甘い",
      "pronunciation": "あまい",
      "audioPath": "audio/ja/food_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_076_example",
        "zh": "有不太甜的甜点吗？",
        "text": "あまり甘くないデザートはありますか？",
        "pronunciation": "あまりあまくないでざーとはありますか？"
      }
    },
    {
      "id": "food_077",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "咸",
      "text": "しょっぱい",
      "pronunciation": "しょっぱい",
      "audioPath": "audio/ja/food_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_077_example",
        "zh": "这道菜对我来说有点咸。",
        "text": "この料理は私には少ししょっぱいです。",
        "pronunciation": "このりょうりはわたしにはすこししょっぱいです。"
      }
    },
    {
      "id": "food_078",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "辣",
      "text": "辛い",
      "pronunciation": "からい",
      "audioPath": "audio/ja/food_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_078_example",
        "zh": "这道菜很辣吗？我不太能吃辣。",
        "text": "この料理は辛いですか？辛いものは苦手です。",
        "pronunciation": "このりょうりはからいですか？からいものはにがてです。"
      }
    },
    {
      "id": "food_079",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "苦",
      "text": "苦い",
      "pronunciation": "にがい",
      "audioPath": "audio/ja/food_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_079_example",
        "zh": "这杯咖啡太苦了，可以加点牛奶吗？",
        "text": "このコーヒーは苦いので、牛乳を少し入れられますか？",
        "pronunciation": "このこーひーはにがいので、ぎゅうにゅうをすこしいれられますか？"
      }
    },
    {
      "id": "food_080",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "酸",
      "text": "酸っぱい",
      "pronunciation": "すっぱい",
      "audioPath": "audio/ja/food_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_080_example",
        "zh": "这个酱汁偏酸吗？",
        "text": "このソースは酸っぱいですか？",
        "pronunciation": "このそーすはすっぱいですか？"
      }
    },
    {
      "id": "food_081",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "热",
      "text": "熱い",
      "pronunciation": "あつい",
      "audioPath": "audio/ja/food_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_081_example",
        "zh": "汤很烫，请小心。",
        "text": "スープが熱いので、気をつけてください。",
        "pronunciation": "すーぷがあついので、きをつけてください。"
      }
    },
    {
      "id": "food_082",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "冷",
      "text": "冷たい",
      "pronunciation": "つめたい",
      "audioPath": "audio/ja/food_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_082_example",
        "zh": "这道菜是冷着吃的吗？",
        "text": "この料理は冷たいまま食べますか？",
        "pronunciation": "このりょうりはつめたいままたべますか？"
      }
    },
    {
      "id": "food_083",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "新鲜",
      "text": "新鮮",
      "pronunciation": "しんせん",
      "audioPath": "audio/ja/food_083.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_083_example",
        "zh": "今天有新鲜的鱼吗？",
        "text": "今日は新鮮な魚がありますか？",
        "pronunciation": "きょうはしんせんなさかながありますか？"
      }
    },
    {
      "id": "food_084",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "吃饱了",
      "text": "お腹いっぱい",
      "pronunciation": "おなかいっぱい",
      "audioPath": "audio/ja/food_084.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_085",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "饿了",
      "text": "お腹が空いた",
      "pronunciation": "おなかがすいた",
      "audioPath": "audio/ja/food_085.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_086",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "渴了",
      "text": "喉が渇いた",
      "pronunciation": "のどがかわいた",
      "audioPath": "audio/ja/food_086.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_087",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "过敏",
      "text": "アレルギー",
      "pronunciation": "あれるぎー",
      "audioPath": "audio/ja/food_087.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_087_example",
        "zh": "我对花生过敏，这道菜含花生吗？",
        "text": "ピーナッツアレルギーがあります。この料理にピーナッツは入っていますか？",
        "pronunciation": "ぴーなっつあれるぎーがあります。このりょうりにぴーなっつははいっていますか？"
      }
    },
    {
      "id": "food_088",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "素食者",
      "text": "ベジタリアン",
      "pronunciation": "べじたりあん",
      "audioPath": "audio/ja/food_088.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_food_088_example",
        "zh": "我是素食者，这道菜里有肉或鱼吗？",
        "text": "ベジタリアンです。この料理に肉や魚は入っていますか？",
        "pronunciation": "べじたりあんです。このりょうりににくやさかなははいっていますか？"
      }
    },
    {
      "id": "food_089",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请问有中文菜单吗？",
      "text": "中国語のメニューはありますか？",
      "pronunciation": "ちゅうごくごのめにゅーはありますか？",
      "audioPath": "audio/ja/food_089.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_090",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请给我这个。",
      "text": "これをください。",
      "pronunciation": "これをください。",
      "audioPath": "audio/ja/food_090.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_091",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "不要辣。",
      "text": "辛くしないでください。",
      "pronunciation": "からくしないでください。",
      "audioPath": "audio/ja/food_091.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_092",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "结账。",
      "text": "お会計をお願いします。",
      "pronunciation": "おかいけいをおねがいします。",
      "audioPath": "audio/ja/food_092.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_093",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "我可以点餐吗？",
      "text": "注文してもいいですか？",
      "pronunciation": "ちゅうもんしてもいいですか？",
      "audioPath": "audio/ja/food_093.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_094",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "我对……过敏。",
      "text": "…にアレルギーがあります。",
      "pronunciation": "…にあれるぎーがあります。",
      "audioPath": "audio/ja/food_094.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_095",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "再来一杯水。",
      "text": "水をもう一杯ください。",
      "pronunciation": "みずをもういっぱいください。",
      "audioPath": "audio/ja/food_095.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_096",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "这个好吃吗？",
      "text": "これはおいしいですか？",
      "pronunciation": "これはおいしいですか？",
      "audioPath": "audio/ja/food_096.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_001",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "商店",
      "text": "店",
      "pronunciation": "みせ",
      "audioPath": "audio/ja/shopping_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_001_example",
        "zh": "这家商店晚上九点关门。",
        "text": "この店は夜九時に閉まります。",
        "pronunciation": "このみせはよるくじにしまります。"
      }
    },
    {
      "id": "shopping_002",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "商场",
      "text": "デパート",
      "pronunciation": "でぱーと",
      "audioPath": "audio/ja/shopping_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_002_example",
        "zh": "车站旁边有一家百货商场。",
        "text": "駅の隣にデパートがあります。",
        "pronunciation": "えきのとなりにでぱーとがあります。"
      }
    },
    {
      "id": "shopping_003",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "超市",
      "text": "スーパー",
      "pronunciation": "すーぱー",
      "audioPath": "audio/ja/shopping_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_003_example",
        "zh": "我去超市买些水果。",
        "text": "スーパーで果物を買います。",
        "pronunciation": "すーぱーでくだものをかいます。"
      }
    },
    {
      "id": "shopping_004",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "便利店",
      "text": "コンビニ",
      "pronunciation": "こんびに",
      "audioPath": "audio/ja/shopping_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_004_example",
        "zh": "便利店全天营业。",
        "text": "コンビニは二十四時間営業です。",
        "pronunciation": "こんびにはにじゅうよじかんえいぎょうです。"
      }
    },
    {
      "id": "shopping_005",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "市场",
      "text": "市場",
      "pronunciation": "いちば",
      "audioPath": "audio/ja/shopping_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_005_example",
        "zh": "这个市场早上最热闹。",
        "text": "この市場は朝が一番にぎやかです。",
        "pronunciation": "このいちばはあさがいちばんにぎやかです。"
      }
    },
    {
      "id": "shopping_006",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "价格",
      "text": "値段",
      "pronunciation": "ねだん",
      "audioPath": "audio/ja/shopping_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_006_example",
        "zh": "这个价格包含税吗？",
        "text": "この値段は税込みですか？",
        "pronunciation": "このねだんはぜいこみですか？"
      }
    },
    {
      "id": "shopping_007",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "多少钱",
      "text": "いくら",
      "pronunciation": "いくら",
      "audioPath": "audio/ja/shopping_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_007_example",
        "zh": "这个多少钱？",
        "text": "これはいくらですか？",
        "pronunciation": "これはいくらですか？"
      }
    },
    {
      "id": "shopping_008",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "贵",
      "text": "高い",
      "pronunciation": "たかい",
      "audioPath": "audio/ja/shopping_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_008_example",
        "zh": "有点贵，可以便宜一些吗？",
        "text": "少し高いので、安くなりますか？",
        "pronunciation": "すこしたかいので、やすくなりますか？"
      }
    },
    {
      "id": "shopping_009",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "便宜",
      "text": "安い",
      "pronunciation": "やすい",
      "audioPath": "audio/ja/shopping_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_009_example",
        "zh": "这家店的纪念品很便宜。",
        "text": "この店のお土産は安いです。",
        "pronunciation": "このみせのおみやげはやすいです。"
      }
    },
    {
      "id": "shopping_010",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "打折",
      "text": "割引",
      "pronunciation": "わりびき",
      "audioPath": "audio/ja/shopping_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_010_example",
        "zh": "出示护照可以打折。",
        "text": "パスポートを見せると割引になります。",
        "pronunciation": "ぱすぽーとをみせるとわりびきになります。"
      }
    },
    {
      "id": "shopping_011",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "促销",
      "text": "セール",
      "pronunciation": "せーる",
      "audioPath": "audio/ja/shopping_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_011_example",
        "zh": "这件外套现在正在促销。",
        "text": "このコートは今セール中です。",
        "pronunciation": "このこーとはいませーるちゅうです。"
      }
    },
    {
      "id": "shopping_012",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "小票",
      "text": "レシート",
      "pronunciation": "れしーと",
      "audioPath": "audio/ja/shopping_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_012_example",
        "zh": "请给我小票。",
        "text": "レシートをください。",
        "pronunciation": "れしーとをください。"
      }
    },
    {
      "id": "shopping_013",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "现金",
      "text": "現金",
      "pronunciation": "げんきん",
      "audioPath": "audio/ja/shopping_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_013_example",
        "zh": "这里只能使用现金。",
        "text": "こちらは現金のみです。",
        "pronunciation": "こちらはげんきんのみです。"
      }
    },
    {
      "id": "shopping_014",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "信用卡",
      "text": "クレジットカード",
      "pronunciation": "くれじっとかーど",
      "audioPath": "audio/ja/shopping_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_014_example",
        "zh": "可以用信用卡支付吗？",
        "text": "クレジットカードで払えますか？",
        "pronunciation": "くれじっとかーどではらえますか？"
      }
    },
    {
      "id": "shopping_015",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "银行卡",
      "text": "キャッシュカード",
      "pronunciation": "きゃっしゅかーど",
      "audioPath": "audio/ja/shopping_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_015_example",
        "zh": "这张银行卡在自动取款机上不能用。",
        "text": "このキャッシュカードはATMで使えません。",
        "pronunciation": "このきゃっしゅかーどはえーてぃーえむでつかえません。"
      }
    },
    {
      "id": "shopping_016",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "零钱",
      "text": "小銭",
      "pronunciation": "こぜに",
      "audioPath": "audio/ja/shopping_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_016_example",
        "zh": "自动售货机需要零钱。",
        "text": "自動販売機には小銭が必要です。",
        "pronunciation": "じどうはんばいきにはこぜにがひつようです。"
      }
    },
    {
      "id": "shopping_017",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "支付",
      "text": "支払い",
      "pronunciation": "しはらい",
      "audioPath": "audio/ja/shopping_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_017_example",
        "zh": "请到一楼柜台付款。",
        "text": "一階のレジで支払いをお願いします。",
        "pronunciation": "いっかいのれじでしはらいをおねがいします。"
      }
    },
    {
      "id": "shopping_018",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "手机支付",
      "text": "スマホ決済",
      "pronunciation": "すまほけっさい",
      "audioPath": "audio/ja/shopping_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_018_example",
        "zh": "这里支持手机支付。",
        "text": "こちらはスマホ決済に対応しています。",
        "pronunciation": "こちらはすまほけっさいにたいおうしています。"
      }
    },
    {
      "id": "shopping_019",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "二维码",
      "text": "二次元コード",
      "pronunciation": "にじげんこーど",
      "audioPath": "audio/ja/shopping_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_019_example",
        "zh": "请扫描这个二维码。",
        "text": "この二次元コードを読み取ってください。",
        "pronunciation": "このにじげんこーどをよみとってください。"
      }
    },
    {
      "id": "shopping_020",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "word",
      "zh": "试衣间",
      "text": "試着室",
      "pronunciation": "しちゃくしつ",
      "audioPath": "audio/ja/shopping_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_020_example",
        "zh": "试衣间在里面。",
        "text": "試着室は奥にあります。",
        "pronunciation": "しちゃくしつはおくにあります。"
      }
    },
    {
      "id": "shopping_021",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "word",
      "zh": "试穿",
      "text": "試着する",
      "pronunciation": "しちゃくする",
      "audioPath": "audio/ja/shopping_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_021_example",
        "zh": "我想先试穿这件外套，再决定买不买。",
        "text": "このコートを試着してから、買うか決めたいです。",
        "pronunciation": "このこーとをしちゃくしてから、かうかきめたいです。"
      }
    },
    {
      "id": "shopping_022",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "尺寸",
      "text": "サイズ",
      "pronunciation": "さいず",
      "audioPath": "audio/ja/shopping_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_023",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "大号",
      "text": "Lサイズ",
      "pronunciation": "えるさいず",
      "audioPath": "audio/ja/shopping_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_024",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "中号",
      "text": "Mサイズ",
      "pronunciation": "えむさいず",
      "audioPath": "audio/ja/shopping_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_025",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "小号",
      "text": "Sサイズ",
      "pronunciation": "えすさいず",
      "audioPath": "audio/ja/shopping_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_026",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "衣服",
      "text": "服",
      "pronunciation": "ふく",
      "audioPath": "audio/ja/shopping_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_027",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "衬衫",
      "text": "シャツ",
      "pronunciation": "しゃつ",
      "audioPath": "audio/ja/shopping_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_028",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "T恤",
      "text": "Tシャツ",
      "pronunciation": "てぃーしゃつ",
      "audioPath": "audio/ja/shopping_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_029",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "裤子",
      "text": "ズボン",
      "pronunciation": "ずぼん",
      "audioPath": "audio/ja/shopping_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_030",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "牛仔裤",
      "text": "ジーンズ",
      "pronunciation": "じーんず",
      "audioPath": "audio/ja/shopping_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_031",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "裙子",
      "text": "スカート",
      "pronunciation": "すかーと",
      "audioPath": "audio/ja/shopping_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_032",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "连衣裙",
      "text": "ワンピース",
      "pronunciation": "わんぴーす",
      "audioPath": "audio/ja/shopping_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_033",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "外套",
      "text": "コート",
      "pronunciation": "こーと",
      "audioPath": "audio/ja/shopping_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_034",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "毛衣",
      "text": "セーター",
      "pronunciation": "せーたー",
      "audioPath": "audio/ja/shopping_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_035",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "内衣",
      "text": "下着",
      "pronunciation": "したぎ",
      "audioPath": "audio/ja/shopping_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_036",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "袜子",
      "text": "靴下",
      "pronunciation": "くつした",
      "audioPath": "audio/ja/shopping_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_037",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "鞋子",
      "text": "靴",
      "pronunciation": "くつ",
      "audioPath": "audio/ja/shopping_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_038",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "运动鞋",
      "text": "スニーカー",
      "pronunciation": "すにーかー",
      "audioPath": "audio/ja/shopping_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_039",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "帽子",
      "text": "帽子",
      "pronunciation": "ぼうし",
      "audioPath": "audio/ja/shopping_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_040",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "围巾",
      "text": "マフラー",
      "pronunciation": "まふらー",
      "audioPath": "audio/ja/shopping_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_041",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手套",
      "text": "手袋",
      "pronunciation": "てぶくろ",
      "audioPath": "audio/ja/shopping_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_042",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "包",
      "text": "バッグ",
      "pronunciation": "ばっぐ",
      "audioPath": "audio/ja/shopping_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_043",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "钱包",
      "text": "財布",
      "pronunciation": "さいふ",
      "audioPath": "audio/ja/shopping_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_044",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "眼镜",
      "text": "眼鏡",
      "pronunciation": "めがね",
      "audioPath": "audio/ja/shopping_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_045",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "太阳镜",
      "text": "サングラス",
      "pronunciation": "さんぐらす",
      "audioPath": "audio/ja/shopping_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_046",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手表",
      "text": "腕時計",
      "pronunciation": "うでどけい",
      "audioPath": "audio/ja/shopping_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_047",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "首饰",
      "text": "アクセサリー",
      "pronunciation": "あくせさりー",
      "audioPath": "audio/ja/shopping_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_048",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "化妆品",
      "text": "化粧品",
      "pronunciation": "けしょうひん",
      "audioPath": "audio/ja/shopping_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_049",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "护肤品",
      "text": "スキンケア用品",
      "pronunciation": "すきんけあようひん",
      "audioPath": "audio/ja/shopping_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_050",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "香水",
      "text": "香水",
      "pronunciation": "こうすい",
      "audioPath": "audio/ja/shopping_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_051",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "口红",
      "text": "口紅",
      "pronunciation": "くちべに",
      "audioPath": "audio/ja/shopping_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_052",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "洗面奶",
      "text": "洗顔料",
      "pronunciation": "せんがんりょう",
      "audioPath": "audio/ja/shopping_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_053",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "食品",
      "text": "食品",
      "pronunciation": "しょくひん",
      "audioPath": "audio/ja/shopping_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_054",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "饮料",
      "text": "飲み物",
      "pronunciation": "のみもの",
      "audioPath": "audio/ja/shopping_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_055",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "零食",
      "text": "お菓子",
      "pronunciation": "おかし",
      "audioPath": "audio/ja/shopping_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_056",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "纪念品",
      "text": "お土産",
      "pronunciation": "おみやげ",
      "audioPath": "audio/ja/shopping_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_057",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "特产",
      "text": "名物",
      "pronunciation": "めいぶつ",
      "audioPath": "audio/ja/shopping_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_shopping_057_example",
        "zh": "这个特产需要冷藏吗？",
        "text": "この名物は冷蔵する必要がありますか？",
        "pronunciation": "このめいぶつはれいぞうするひつようがありますか？"
      }
    },
    {
      "id": "shopping_058",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "玩具",
      "text": "おもちゃ",
      "pronunciation": "おもちゃ",
      "audioPath": "audio/ja/shopping_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_059",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "电子产品",
      "text": "電子機器",
      "pronunciation": "でんしきき",
      "audioPath": "audio/ja/shopping_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_060",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手机",
      "text": "携帯電話",
      "pronunciation": "けいたいでんわ",
      "audioPath": "audio/ja/shopping_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_061",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "充电器",
      "text": "充電器",
      "pronunciation": "じゅうでんき",
      "audioPath": "audio/ja/shopping_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_062",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "耳机",
      "text": "イヤホン",
      "pronunciation": "いやほん",
      "audioPath": "audio/ja/shopping_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_063",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "相机",
      "text": "カメラ",
      "pronunciation": "かめら",
      "audioPath": "audio/ja/shopping_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_064",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "电池",
      "text": "電池",
      "pronunciation": "でんち",
      "audioPath": "audio/ja/shopping_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_065",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "购物袋",
      "text": "買い物袋",
      "pronunciation": "かいものぶくろ",
      "audioPath": "audio/ja/shopping_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_066",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "环保袋",
      "text": "エコバッグ",
      "pronunciation": "えこばっぐ",
      "audioPath": "audio/ja/shopping_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_067",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以退税吗？",
      "text": "免税できますか？",
      "pronunciation": "めんぜいできますか？",
      "audioPath": "audio/ja/shopping_067.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_068",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "可以便宜一点吗？",
      "text": "安くしてもらえますか？",
      "pronunciation": "やすくしてもらえますか？",
      "audioPath": "audio/ja/shopping_068.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_069",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我只是看看。",
      "text": "見ているだけです。",
      "pronunciation": "みているだけです。",
      "audioPath": "audio/ja/shopping_069.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_070",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我要这个。",
      "text": "これをください。",
      "pronunciation": "これをください。",
      "audioPath": "audio/ja/shopping_070.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_071",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "可以刷卡吗？",
      "text": "カードで払えますか？",
      "pronunciation": "かーどではらえますか？",
      "audioPath": "audio/ja/shopping_071.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_072",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有没有大一点的？",
      "text": "もっと大きいのはありますか？",
      "pronunciation": "もっとおおきいのはありますか？",
      "audioPath": "audio/ja/shopping_072.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_073",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "可以试穿吗？",
      "text": "試着してもいいですか？",
      "pronunciation": "しちゃくしてもいいですか？",
      "audioPath": "audio/ja/shopping_073.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_001",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "哪里",
      "text": "どこ",
      "pronunciation": "どこ",
      "audioPath": "audio/ja/directions_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_001_example",
        "zh": "请问洗手间在哪里？",
        "text": "すみません、トイレはどこですか？",
        "pronunciation": "すみません、といれはどこですか？"
      }
    },
    {
      "id": "directions_002",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "这里",
      "text": "ここ",
      "pronunciation": "ここ",
      "audioPath": "audio/ja/directions_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_002_example",
        "zh": "我们在这里下车。",
        "text": "私たちはここで降ります。",
        "pronunciation": "わたしたちはここでおります。"
      }
    },
    {
      "id": "directions_003",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "那里",
      "text": "あそこ",
      "pronunciation": "あそこ",
      "audioPath": "audio/ja/directions_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_003_example",
        "zh": "出租车乘车点就在那里。",
        "text": "タクシー乗り場はあそこです。",
        "pronunciation": "たくしーのりばはあそこです。"
      }
    },
    {
      "id": "directions_004",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "左边",
      "text": "左",
      "pronunciation": "ひだり",
      "audioPath": "audio/ja/directions_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_004_example",
        "zh": "售票处在左边。",
        "text": "切符売り場は左にあります。",
        "pronunciation": "きっぷうりばはひだりにあります。"
      }
    },
    {
      "id": "directions_005",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "右边",
      "text": "右",
      "pronunciation": "みぎ",
      "audioPath": "audio/ja/directions_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_005_example",
        "zh": "请在下一个路口向右转。",
        "text": "次の角を右に曲がってください。",
        "pronunciation": "つぎのかどをみぎにまがってください。"
      }
    },
    {
      "id": "directions_006",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "前面",
      "text": "前",
      "pronunciation": "まえ",
      "audioPath": "audio/ja/directions_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_006_example",
        "zh": "车站就在那栋楼前面。",
        "text": "駅はあの建物の前です。",
        "pronunciation": "えきはあのたてもののまえです。"
      }
    },
    {
      "id": "directions_007",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "后面",
      "text": "後ろ",
      "pronunciation": "うしろ",
      "audioPath": "audio/ja/directions_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_007_example",
        "zh": "停车场在酒店后面。",
        "text": "駐車場はホテルの後ろです。",
        "pronunciation": "ちゅうしゃじょうはほてるのうしろです。"
      }
    },
    {
      "id": "directions_008",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "旁边",
      "text": "隣",
      "pronunciation": "となり",
      "audioPath": "audio/ja/directions_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_008_example",
        "zh": "药店就在便利店旁边。",
        "text": "薬局はコンビニの隣です。",
        "pronunciation": "やっきょくはこんびにのとなりです。"
      }
    },
    {
      "id": "directions_009",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "对面",
      "text": "向かい",
      "pronunciation": "むかい",
      "audioPath": "audio/ja/directions_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_009_example",
        "zh": "公交车站在邮局对面。",
        "text": "バス停は郵便局の向かいです。",
        "pronunciation": "ばすていはゆうびんきょくのむかいです。"
      }
    },
    {
      "id": "directions_010",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "附近",
      "text": "近く",
      "pronunciation": "ちかく",
      "audioPath": "audio/ja/directions_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_010_example",
        "zh": "这附近有可以吃饭的地方吗？",
        "text": "この近くに食事ができる場所はありますか？",
        "pronunciation": "このちかくにしょくじができるばしょはありますか？"
      }
    },
    {
      "id": "directions_011",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "word",
      "zh": "远",
      "text": "遠い",
      "pronunciation": "とおい",
      "audioPath": "audio/ja/directions_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_011_example",
        "zh": "从这里走过去很远吗？",
        "text": "ここから歩くと遠いですか？",
        "pronunciation": "ここからあるくととおいですか？"
      }
    },
    {
      "id": "directions_012",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "word",
      "zh": "近",
      "text": "近い",
      "pronunciation": "ちかい",
      "audioPath": "audio/ja/directions_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_012_example",
        "zh": "车站很近，步行五分钟。",
        "text": "駅は近くて、歩いて五分です。",
        "pronunciation": "えきはちかくて、あるいてごふんです。"
      }
    },
    {
      "id": "directions_013",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "直走",
      "text": "まっすぐ",
      "pronunciation": "まっすぐ",
      "audioPath": "audio/ja/directions_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_013_example",
        "zh": "沿着这条路一直走。",
        "text": "この道をまっすぐ進んでください。",
        "pronunciation": "このみちをまっすぐすすんでください。"
      }
    },
    {
      "id": "directions_014",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "转弯",
      "text": "曲がる",
      "pronunciation": "まがる",
      "audioPath": "audio/ja/directions_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_014_example",
        "zh": "过了桥后向左转。",
        "text": "橋を渡ったら左に曲がってください。",
        "pronunciation": "はしをわたったらひだりにまがってください。"
      }
    },
    {
      "id": "directions_015",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "十字路口",
      "text": "交差点",
      "pronunciation": "こうさてん",
      "audioPath": "audio/ja/directions_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_015_example",
        "zh": "在第二个十字路口右转。",
        "text": "二つ目の交差点を右に曲がってください。",
        "pronunciation": "ふたつめのこうさてんをみぎにまがってください。"
      }
    },
    {
      "id": "directions_016",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "桥",
      "text": "橋",
      "pronunciation": "はし",
      "audioPath": "audio/ja/directions_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_016_example",
        "zh": "过桥就能看到车站。",
        "text": "橋を渡ると駅が見えます。",
        "pronunciation": "はしをわたるとえきがみえます。"
      }
    },
    {
      "id": "directions_017",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "路",
      "text": "道",
      "pronunciation": "みち",
      "audioPath": "audio/ja/directions_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_017_example",
        "zh": "这条路晚上比较暗。",
        "text": "この道は夜になると暗いです。",
        "pronunciation": "このみちはよるになるとくらいです。"
      }
    },
    {
      "id": "directions_018",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "街道",
      "text": "通り",
      "pronunciation": "とおり",
      "audioPath": "audio/ja/directions_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_018_example",
        "zh": "这条街上有很多餐厅。",
        "text": "この通りにはレストランがたくさんあります。",
        "pronunciation": "このとおりにはれすとらんがたくさんあります。"
      }
    },
    {
      "id": "directions_019",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "建筑",
      "text": "建物",
      "pronunciation": "たてもの",
      "audioPath": "audio/ja/directions_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_019_example",
        "zh": "目的地是那栋白色建筑。",
        "text": "目的地はあの白い建物です。",
        "pronunciation": "もくてきちはあのしろいたてものです。"
      }
    },
    {
      "id": "directions_020",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "派出所",
      "text": "交番",
      "pronunciation": "こうばん",
      "audioPath": "audio/ja/directions_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_directions_020_example",
        "zh": "我把钱包交到了派出所。",
        "text": "財布を交番に届けました。",
        "pronunciation": "さいふをこうばんにとどけました。"
      }
    },
    {
      "id": "directions_021",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "医院",
      "text": "病院",
      "pronunciation": "びょういん",
      "audioPath": "audio/ja/directions_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_022",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "药店",
      "text": "薬局",
      "pronunciation": "やっきょく",
      "audioPath": "audio/ja/directions_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_023",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "银行",
      "text": "銀行",
      "pronunciation": "ぎんこう",
      "audioPath": "audio/ja/directions_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_024",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "邮局",
      "text": "郵便局",
      "pronunciation": "ゆうびんきょく",
      "audioPath": "audio/ja/directions_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_025",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "厕所",
      "text": "トイレ",
      "pronunciation": "といれ",
      "audioPath": "audio/ja/directions_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_026",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "公交站",
      "text": "バス停",
      "pronunciation": "ばすてい",
      "audioPath": "audio/ja/directions_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_027",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "地铁站",
      "text": "地下鉄の駅",
      "pronunciation": "ちかてつのえき",
      "audioPath": "audio/ja/directions_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_028",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "景点",
      "text": "観光地",
      "pronunciation": "かんこうち",
      "audioPath": "audio/ja/directions_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_029",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "博物馆",
      "text": "博物館",
      "pronunciation": "はくぶつかん",
      "audioPath": "audio/ja/directions_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_030",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "公园",
      "text": "公園",
      "pronunciation": "こうえん",
      "audioPath": "audio/ja/directions_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_031",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请问怎么走？",
      "text": "どうやって行きますか？",
      "pronunciation": "どうやっていきますか？",
      "audioPath": "audio/ja/directions_031.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_032",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "……在哪里？",
      "text": "…はどこですか？",
      "pronunciation": "…はどこですか？",
      "audioPath": "audio/ja/directions_032.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_033",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请带我去……",
      "text": "…まで連れて行ってください。",
      "pronunciation": "…までつれていってください。",
      "audioPath": "audio/ja/directions_033.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_034",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我要去……",
      "text": "…に行きたいです。",
      "pronunciation": "…にいきたいです。",
      "audioPath": "audio/ja/directions_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_035",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "走路要几分钟？",
      "text": "歩いて何分ですか？",
      "pronunciation": "あるいてなんぷんですか？",
      "audioPath": "audio/ja/directions_035.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_036",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "坐地铁能到吗？",
      "text": "地下鉄で行けますか？",
      "pronunciation": "ちかてつでいけますか？",
      "audioPath": "audio/ja/directions_036.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_037",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我迷路了。",
      "text": "道に迷いました。",
      "pronunciation": "みちにまよいました。",
      "audioPath": "audio/ja/directions_037.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_038",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请问现在在哪里？",
      "text": "今どこにいますか？",
      "pronunciation": "いまどこにいますか？",
      "audioPath": "audio/ja/directions_038.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_039",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请在地图上指给我。",
      "text": "地図で指してください。",
      "pronunciation": "ちずでさしてください。",
      "audioPath": "audio/ja/directions_039.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_040",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "能再说一遍吗？",
      "text": "もう一度言ってください。",
      "pronunciation": "もういちどいってください。",
      "audioPath": "audio/ja/directions_040.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_041",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "怎么去车站？",
      "text": "駅までどうやって行きますか？",
      "pronunciation": "えきまでどうやっていきますか？",
      "audioPath": "audio/ja/directions_041.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_042",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "这是哪条路？",
      "text": "この道は何という道ですか？",
      "pronunciation": "このみちはなんというみちですか？",
      "audioPath": "audio/ja/directions_042.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_043",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "洗手间在哪里？",
      "text": "お手洗いはどこですか？",
      "pronunciation": "おてあらいはどこですか？",
      "audioPath": "audio/ja/directions_043.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "numbers_001",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "零",
      "text": "ゼロ",
      "pronunciation": "ぜろ",
      "audioPath": "audio/ja/numbers_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_001_example",
        "zh": "这张卡的余额是零。",
        "text": "このカードの残高はゼロです。",
        "pronunciation": "このかーどのざんだかはぜろです。"
      }
    },
    {
      "id": "numbers_002",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "一",
      "text": "一",
      "pronunciation": "いち",
      "audioPath": "audio/ja/numbers_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_002_example",
        "zh": "请给我一张票。",
        "text": "切符を一枚ください。",
        "pronunciation": "きっぷをいちまいください。"
      }
    },
    {
      "id": "numbers_003",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "二",
      "text": "二",
      "pronunciation": "に",
      "audioPath": "audio/ja/numbers_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_003_example",
        "zh": "我们一共两个人。",
        "text": "私たちは二人です。",
        "pronunciation": "わたしたちはふたりです。"
      }
    },
    {
      "id": "numbers_004",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "三",
      "text": "三",
      "pronunciation": "さん",
      "audioPath": "audio/ja/numbers_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_004_example",
        "zh": "请给我三瓶水。",
        "text": "水を三本ください。",
        "pronunciation": "みずをさんぼんください。"
      }
    },
    {
      "id": "numbers_005",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "四",
      "text": "四",
      "pronunciation": "よん",
      "audioPath": "audio/ja/numbers_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_005_example",
        "zh": "我们预订了四个晚上。",
        "text": "四泊で予約しています。",
        "pronunciation": "よんはくでよやくしています。"
      }
    },
    {
      "id": "numbers_006",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "五",
      "text": "五",
      "pronunciation": "ご",
      "audioPath": "audio/ja/numbers_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_006_example",
        "zh": "走到车站大约五分钟。",
        "text": "駅まで歩いて五分くらいです。",
        "pronunciation": "えきまであるいてごふんくらいです。"
      }
    },
    {
      "id": "numbers_007",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "六",
      "text": "六",
      "pronunciation": "ろく",
      "audioPath": "audio/ja/numbers_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_007_example",
        "zh": "六岁以下的儿童免费。",
        "text": "六歳未満の子どもは無料です。",
        "pronunciation": "ろくさいみまんのこどもはむりょうです。"
      }
    },
    {
      "id": "numbers_008",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "七",
      "text": "七",
      "pronunciation": "なな",
      "audioPath": "audio/ja/numbers_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_008_example",
        "zh": "早餐从七点开始。",
        "text": "朝食は七時からです。",
        "pronunciation": "ちょうしょくはしちじからです。"
      }
    },
    {
      "id": "numbers_009",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "八",
      "text": "八",
      "pronunciation": "はち",
      "audioPath": "audio/ja/numbers_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_009_example",
        "zh": "商店晚上八点关门。",
        "text": "店は夜八時に閉まります。",
        "pronunciation": "みせはよるはちじにしまります。"
      }
    },
    {
      "id": "numbers_010",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "九",
      "text": "九",
      "pronunciation": "きゅう",
      "audioPath": "audio/ja/numbers_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_010_example",
        "zh": "九号巴士去机场。",
        "text": "九番のバスは空港に行きます。",
        "pronunciation": "きゅうばんのばすはくうこうにいきます。"
      }
    },
    {
      "id": "numbers_011",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "十",
      "text": "十",
      "pronunciation": "じゅう",
      "audioPath": "audio/ja/numbers_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_011_example",
        "zh": "最多可以等十分钟。",
        "text": "十分までなら待てます。",
        "pronunciation": "じゅっぷんまでならまてます。"
      }
    },
    {
      "id": "numbers_012",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "百",
      "text": "百",
      "pronunciation": "ひゃく",
      "audioPath": "audio/ja/numbers_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_012_example",
        "zh": "这个御守一百日元。",
        "text": "このお守りは百円です。",
        "pronunciation": "このおまもりはひゃくえんです。"
      }
    },
    {
      "id": "numbers_013",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "千",
      "text": "千",
      "pronunciation": "せん",
      "audioPath": "audio/ja/numbers_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_013_example",
        "zh": "这张一日券是一千日元。",
        "text": "この一日券は千円です。",
        "pronunciation": "このいちにちけんはせんえんです。"
      }
    },
    {
      "id": "numbers_014",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "万",
      "text": "万",
      "pronunciation": "まん",
      "audioPath": "audio/ja/numbers_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_014_example",
        "zh": "总计是一万日元。",
        "text": "合計は一万円です。",
        "pronunciation": "ごうけいはいちまんえんです。"
      }
    },
    {
      "id": "numbers_015",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "日元",
      "text": "円",
      "pronunciation": "えん",
      "audioPath": "audio/ja/numbers_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_015_example",
        "zh": "我可以用日元支付吗？",
        "text": "円で支払えますか？",
        "pronunciation": "えんでしはらえますか？"
      }
    },
    {
      "id": "numbers_016",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "美元",
      "text": "ドル",
      "pronunciation": "どる",
      "audioPath": "audio/ja/numbers_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_016_example",
        "zh": "这里不能使用美元。",
        "text": "こちらではドルは使えません。",
        "pronunciation": "こちらではどるはつかえません。"
      }
    },
    {
      "id": "numbers_017",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "人民币",
      "text": "人民元",
      "pronunciation": "じんみんげん",
      "audioPath": "audio/ja/numbers_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_017_example",
        "zh": "可以把人民币兑换成日元吗？",
        "text": "人民元を円に両替できますか？",
        "pronunciation": "じんみんげんをえんにりょうがえできますか？"
      }
    },
    {
      "id": "numbers_018",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "今天",
      "text": "今日",
      "pronunciation": "きょう",
      "audioPath": "audio/ja/numbers_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_018_example",
        "zh": "今天还有空房吗？",
        "text": "今日、空いている部屋はありますか？",
        "pronunciation": "きょう、あいているへやはありますか？"
      }
    },
    {
      "id": "numbers_019",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "明天",
      "text": "明日",
      "pronunciation": "あした",
      "audioPath": "audio/ja/numbers_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_019_example",
        "zh": "我想预订明天的车票。",
        "text": "明日の切符を予約したいです。",
        "pronunciation": "あしたのきっぷをよやくしたいです。"
      }
    },
    {
      "id": "numbers_020",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "昨天",
      "text": "昨日",
      "pronunciation": "きのう",
      "audioPath": "audio/ja/numbers_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_020_example",
        "zh": "昨天我把相机落在这里了。",
        "text": "昨日、ここにカメラを忘れました。",
        "pronunciation": "きのう、ここにかめらをわすれました。"
      }
    },
    {
      "id": "numbers_021",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "后天",
      "text": "明後日",
      "pronunciation": "あさって",
      "audioPath": "audio/ja/numbers_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_022",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "前天",
      "text": "一昨日",
      "pronunciation": "おととい",
      "audioPath": "audio/ja/numbers_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_023",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "早上",
      "text": "朝",
      "pronunciation": "あさ",
      "audioPath": "audio/ja/numbers_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_024",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "中午",
      "text": "昼",
      "pronunciation": "ひる",
      "audioPath": "audio/ja/numbers_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_025",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "下午",
      "text": "午後",
      "pronunciation": "ごご",
      "audioPath": "audio/ja/numbers_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_026",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "晚上",
      "text": "夜",
      "pronunciation": "よる",
      "audioPath": "audio/ja/numbers_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_027",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "现在",
      "text": "今",
      "pronunciation": "いま",
      "audioPath": "audio/ja/numbers_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_028",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "时间",
      "text": "時間",
      "pronunciation": "じかん",
      "audioPath": "audio/ja/numbers_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_029",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一小时",
      "text": "一時間",
      "pronunciation": "いちじかん",
      "audioPath": "audio/ja/numbers_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_030",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一分钟",
      "text": "一分",
      "pronunciation": "いっぷん",
      "audioPath": "audio/ja/numbers_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_031",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "秒",
      "text": "秒",
      "pronunciation": "びょう",
      "audioPath": "audio/ja/numbers_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_032",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "几点",
      "text": "何時",
      "pronunciation": "なんじ",
      "audioPath": "audio/ja/numbers_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_032_example",
        "zh": "早餐从几点开始？",
        "text": "朝食は何時からですか？",
        "pronunciation": "ちょうしょくはなんじからですか？"
      }
    },
    {
      "id": "numbers_033",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期",
      "text": "曜日",
      "pronunciation": "ようび",
      "audioPath": "audio/ja/numbers_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_034",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期一",
      "text": "月曜日",
      "pronunciation": "げつようび",
      "audioPath": "audio/ja/numbers_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_035",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期二",
      "text": "火曜日",
      "pronunciation": "かようび",
      "audioPath": "audio/ja/numbers_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_036",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期三",
      "text": "水曜日",
      "pronunciation": "すいようび",
      "audioPath": "audio/ja/numbers_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_037",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期四",
      "text": "木曜日",
      "pronunciation": "もくようび",
      "audioPath": "audio/ja/numbers_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_038",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期五",
      "text": "金曜日",
      "pronunciation": "きんようび",
      "audioPath": "audio/ja/numbers_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_039",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期六",
      "text": "土曜日",
      "pronunciation": "どようび",
      "audioPath": "audio/ja/numbers_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_040",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期日",
      "text": "日曜日",
      "pronunciation": "にちようび",
      "audioPath": "audio/ja/numbers_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_041",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "周末",
      "text": "週末",
      "pronunciation": "しゅうまつ",
      "audioPath": "audio/ja/numbers_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_042",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "工作日",
      "text": "平日",
      "pronunciation": "へいじつ",
      "audioPath": "audio/ja/numbers_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_043",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "日期",
      "text": "日付",
      "pronunciation": "ひづけ",
      "audioPath": "audio/ja/numbers_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_044",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一月",
      "text": "一月",
      "pronunciation": "いちがつ",
      "audioPath": "audio/ja/numbers_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_045",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "二月",
      "text": "二月",
      "pronunciation": "にがつ",
      "audioPath": "audio/ja/numbers_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_046",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "三月",
      "text": "三月",
      "pronunciation": "さんがつ",
      "audioPath": "audio/ja/numbers_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_047",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "四月",
      "text": "四月",
      "pronunciation": "しがつ",
      "audioPath": "audio/ja/numbers_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_048",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "五月",
      "text": "五月",
      "pronunciation": "ごがつ",
      "audioPath": "audio/ja/numbers_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_049",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "六月",
      "text": "六月",
      "pronunciation": "ろくがつ",
      "audioPath": "audio/ja/numbers_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_050",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "七月",
      "text": "七月",
      "pronunciation": "しちがつ",
      "audioPath": "audio/ja/numbers_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_051",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "八月",
      "text": "八月",
      "pronunciation": "はちがつ",
      "audioPath": "audio/ja/numbers_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_052",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "九月",
      "text": "九月",
      "pronunciation": "くがつ",
      "audioPath": "audio/ja/numbers_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_053",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十月",
      "text": "十月",
      "pronunciation": "じゅうがつ",
      "audioPath": "audio/ja/numbers_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_054",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十一月",
      "text": "十一月",
      "pronunciation": "じゅういちがつ",
      "audioPath": "audio/ja/numbers_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_055",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十二月",
      "text": "十二月",
      "pronunciation": "じゅうにがつ",
      "audioPath": "audio/ja/numbers_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_056",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一日",
      "text": "一日",
      "pronunciation": "ついたち",
      "audioPath": "audio/ja/numbers_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_057",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "二日",
      "text": "二日",
      "pronunciation": "ふつか",
      "audioPath": "audio/ja/numbers_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_058",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "三日",
      "text": "三日",
      "pronunciation": "みっか",
      "audioPath": "audio/ja/numbers_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_059",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "四日",
      "text": "四日",
      "pronunciation": "よっか",
      "audioPath": "audio/ja/numbers_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_060",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "五日",
      "text": "五日",
      "pronunciation": "いつか",
      "audioPath": "audio/ja/numbers_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_061",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "六日",
      "text": "六日",
      "pronunciation": "むいか",
      "audioPath": "audio/ja/numbers_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_062",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "七日",
      "text": "七日",
      "pronunciation": "なのか",
      "audioPath": "audio/ja/numbers_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_063",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "八日",
      "text": "八日",
      "pronunciation": "ようか",
      "audioPath": "audio/ja/numbers_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_064",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "九日",
      "text": "九日",
      "pronunciation": "ここのか",
      "audioPath": "audio/ja/numbers_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_065",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十日",
      "text": "十日",
      "pronunciation": "とおか",
      "audioPath": "audio/ja/numbers_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_066",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "今年",
      "text": "今年",
      "pronunciation": "ことし",
      "audioPath": "audio/ja/numbers_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_067",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "去年",
      "text": "去年",
      "pronunciation": "きょねん",
      "audioPath": "audio/ja/numbers_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_068",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "明年",
      "text": "来年",
      "pronunciation": "らいねん",
      "audioPath": "audio/ja/numbers_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_069",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "这个月",
      "text": "今月",
      "pronunciation": "こんげつ",
      "audioPath": "audio/ja/numbers_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_070",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "上个月",
      "text": "先月",
      "pronunciation": "せんげつ",
      "audioPath": "audio/ja/numbers_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_071",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "下个月",
      "text": "来月",
      "pronunciation": "らいげつ",
      "audioPath": "audio/ja/numbers_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_072",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "几点开门？",
      "text": "何時に開きますか？",
      "pronunciation": "なんじにあきますか？",
      "audioPath": "audio/ja/numbers_072.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "numbers_073",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "现在几点？",
      "text": "今何時ですか？",
      "pronunciation": "いまなんじですか？",
      "audioPath": "audio/ja/numbers_073.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "numbers_074",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "今天星期几？",
      "text": "今日は何曜日ですか？",
      "pronunciation": "きょうはなんようびですか？",
      "audioPath": "audio/ja/numbers_074.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "numbers_075",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "今天是几号？",
      "text": "今日は何日ですか？",
      "pronunciation": "きょうはなんにちですか？",
      "audioPath": "audio/ja/numbers_075.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "numbers_076",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "营业时间",
      "text": "営業時間",
      "pronunciation": "えいぎょうじかん",
      "audioPath": "audio/ja/numbers_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_077",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "开门",
      "text": "開く",
      "pronunciation": "ひらく",
      "audioPath": "audio/ja/numbers_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_077_example",
        "zh": "这家药店星期日也开门吗？",
        "text": "この薬局は日曜日も開いていますか？",
        "pronunciation": "このやっきょくはにちようびもあいていますか？"
      }
    },
    {
      "id": "numbers_078",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "关门",
      "text": "閉まる",
      "pronunciation": "しまる",
      "audioPath": "audio/ja/numbers_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_078_example",
        "zh": "博物馆几点关门？",
        "text": "博物館は何時に閉まりますか？",
        "pronunciation": "はくぶつかんはなんじにしまりますか？"
      }
    },
    {
      "id": "numbers_079",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "每天",
      "text": "毎日",
      "pronunciation": "まいにち",
      "audioPath": "audio/ja/numbers_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_080",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "有时",
      "text": "時々",
      "pronunciation": "ときどき",
      "audioPath": "audio/ja/numbers_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_081",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "经常",
      "text": "よく",
      "pronunciation": "よく",
      "audioPath": "audio/ja/numbers_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_082",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "马上",
      "text": "すぐ",
      "pronunciation": "すぐ",
      "audioPath": "audio/ja/numbers_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_numbers_082_example",
        "zh": "巴士马上到吗？",
        "text": "バスはもうすぐ来ますか？",
        "pronunciation": "ばすはもうすぐきますか？"
      }
    },
    {
      "id": "numbers_083",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "稍等",
      "text": "ちょっと待って",
      "pronunciation": "ちょっとまって",
      "audioPath": "audio/ja/numbers_083.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_001",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "救命",
      "text": "助けて",
      "pronunciation": "たすけて",
      "audioPath": "audio/ja/emergency_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_001_example",
        "zh": "救命！有人受伤了！",
        "text": "助けて！人が怪我をしています！",
        "pronunciation": "たすけて！ひとがけがをしています！"
      }
    },
    {
      "id": "emergency_002",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "紧急",
      "text": "緊急",
      "pronunciation": "きんきゅう",
      "audioPath": "audio/ja/emergency_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_002_example",
        "zh": "这是紧急情况。",
        "text": "これは緊急事態です。",
        "pronunciation": "これはきんきゅうじたいです。"
      }
    },
    {
      "id": "emergency_003",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "word",
      "zh": "报警",
      "text": "警察を呼ぶ",
      "pronunciation": "けいさつをよぶ",
      "audioPath": "audio/ja/emergency_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_003_example",
        "zh": "请帮我报警。",
        "text": "警察を呼んでください。",
        "pronunciation": "けいさつをよんでください。"
      }
    },
    {
      "id": "emergency_004",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "叫救护车",
      "text": "救急車を呼ぶ",
      "pronunciation": "きゅうきゅうしゃをよぶ",
      "audioPath": "audio/ja/emergency_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_004_example",
        "zh": "请马上叫救护车。",
        "text": "すぐに救急車を呼んでください。",
        "pronunciation": "すぐにきゅうきゅうしゃをよんでください。"
      }
    },
    {
      "id": "emergency_005",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "医生",
      "text": "医者",
      "pronunciation": "いしゃ",
      "audioPath": "audio/ja/emergency_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_005_example",
        "zh": "我需要看医生。",
        "text": "医者に診てもらいたいです。",
        "pronunciation": "いしゃにみてもらいたいです。"
      }
    },
    {
      "id": "emergency_006",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "护士",
      "text": "看護師",
      "pronunciation": "かんごし",
      "audioPath": "audio/ja/emergency_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_006_example",
        "zh": "护士马上就过来。",
        "text": "看護師がすぐに来ます。",
        "pronunciation": "かんごしがすぐにきます。"
      }
    },
    {
      "id": "emergency_007",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药",
      "text": "薬",
      "pronunciation": "くすり",
      "audioPath": "audio/ja/emergency_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_007_example",
        "zh": "这个药一天吃三次。",
        "text": "この薬は一日三回飲んでください。",
        "pronunciation": "このくすりはいちにちさんかいのんでください。"
      }
    },
    {
      "id": "emergency_008",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "处方",
      "text": "処方箋",
      "pronunciation": "しょほうせん",
      "audioPath": "audio/ja/emergency_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_008_example",
        "zh": "买这种药需要处方。",
        "text": "この薬には処方箋が必要です。",
        "pronunciation": "このくすりにはしょほうせんがひつようです。"
      }
    },
    {
      "id": "emergency_009",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "发烧",
      "text": "熱",
      "pronunciation": "ねつ",
      "audioPath": "audio/ja/emergency_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_009_example",
        "zh": "我从昨天开始发烧。",
        "text": "昨日から熱があります。",
        "pronunciation": "きのうからねつがあります。"
      }
    },
    {
      "id": "emergency_010",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "感冒",
      "text": "風邪",
      "pronunciation": "かぜ",
      "audioPath": "audio/ja/emergency_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_010_example",
        "zh": "我可能感冒了。",
        "text": "風邪をひいたかもしれません。",
        "pronunciation": "かぜをひいたかもしれません。"
      }
    },
    {
      "id": "emergency_011",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "咳嗽",
      "text": "咳",
      "pronunciation": "せき",
      "audioPath": "audio/ja/emergency_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_011_example",
        "zh": "咳嗽一直没有好。",
        "text": "咳がなかなか治りません。",
        "pronunciation": "せきがなかなかなおりません。"
      }
    },
    {
      "id": "emergency_012",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "头疼",
      "text": "頭痛",
      "pronunciation": "ずつう",
      "audioPath": "audio/ja/emergency_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_012_example",
        "zh": "我头疼得很厉害。",
        "text": "頭痛がひどいです。",
        "pronunciation": "ずつうがひどいです。"
      }
    },
    {
      "id": "emergency_013",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "肚子疼",
      "text": "腹痛",
      "pronunciation": "ふくつう",
      "audioPath": "audio/ja/emergency_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_013_example",
        "zh": "我吃完饭后肚子疼。",
        "text": "食事の後から腹痛があります。",
        "pronunciation": "しょくじのあとからふくつうがあります。"
      }
    },
    {
      "id": "emergency_014",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "牙疼",
      "text": "歯痛",
      "pronunciation": "しつう",
      "audioPath": "audio/ja/emergency_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_014_example",
        "zh": "我的牙突然疼起来了。",
        "text": "急に歯痛が始まりました。",
        "pronunciation": "きゅうにしつうがはじまりました。"
      }
    },
    {
      "id": "emergency_015",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "恶心",
      "text": "吐き気",
      "pronunciation": "はきけ",
      "audioPath": "audio/ja/emergency_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_015_example",
        "zh": "我感到恶心，吃不下东西。",
        "text": "吐き気がして、食べられません。",
        "pronunciation": "はきけがして、たべられません。"
      }
    },
    {
      "id": "emergency_016",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "呕吐",
      "text": "嘔吐",
      "pronunciation": "おうと",
      "audioPath": "audio/ja/emergency_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_016_example",
        "zh": "从早上开始一直呕吐。",
        "text": "朝から嘔吐が続いています。",
        "pronunciation": "あさからおうとがつづいています。"
      }
    },
    {
      "id": "emergency_017",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "腹泻",
      "text": "下痢",
      "pronunciation": "げり",
      "audioPath": "audio/ja/emergency_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_017_example",
        "zh": "我腹泻两天了。",
        "text": "二日前から下痢が続いています。",
        "pronunciation": "ふつかまえからげりがつづいています。"
      }
    },
    {
      "id": "emergency_018",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "便秘",
      "text": "便秘",
      "pronunciation": "べんぴ",
      "audioPath": "audio/ja/emergency_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_018_example",
        "zh": "这种药会引起便秘吗？",
        "text": "この薬で便秘になることはありますか？",
        "pronunciation": "このくすりでべんぴになることはありますか？"
      }
    },
    {
      "id": "emergency_019",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "受伤",
      "text": "怪我",
      "pronunciation": "けが",
      "audioPath": "audio/ja/emergency_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_019_example",
        "zh": "我摔倒后腿受伤了。",
        "text": "転んで足を怪我しました。",
        "pronunciation": "ころんであしをけがしました。"
      }
    },
    {
      "id": "emergency_020",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "流血",
      "text": "出血",
      "pronunciation": "しゅっけつ",
      "audioPath": "audio/ja/emergency_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_020_example",
        "zh": "伤口还在流血。",
        "text": "傷口からまだ出血しています。",
        "pronunciation": "きずぐちからまだしゅっけつしています。"
      }
    },
    {
      "id": "emergency_021",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "骨折",
      "text": "骨折",
      "pronunciation": "こっせつ",
      "audioPath": "audio/ja/emergency_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_021_example",
        "zh": "我摔倒后脚踝可能骨折了。",
        "text": "転んで足首を骨折したかもしれません。",
        "pronunciation": "ころんであしくびをこっせつしたかもしれません。"
      }
    },
    {
      "id": "emergency_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "烫伤",
      "text": "火傷",
      "pronunciation": "やけど",
      "audioPath": "audio/ja/emergency_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_022_example",
        "zh": "我的手被热水烫伤了。",
        "text": "熱いお湯で手をやけどしました。",
        "pronunciation": "あついおゆでてをやけどしました。"
      }
    },
    {
      "id": "emergency_023",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "哮喘",
      "text": "喘息",
      "pronunciation": "ぜんそく",
      "audioPath": "audio/ja/emergency_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_023_example",
        "zh": "我有哮喘，现在呼吸有点困难。",
        "text": "喘息があって、今少し息苦しいです。",
        "pronunciation": "ぜんそくがあって、いますこしいきぐるしいです。"
      }
    },
    {
      "id": "emergency_024",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药片",
      "text": "錠剤",
      "pronunciation": "じょうざい",
      "audioPath": "audio/ja/emergency_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_025",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药膏",
      "text": "軟膏",
      "pronunciation": "なんこう",
      "audioPath": "audio/ja/emergency_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_026",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "创可贴",
      "text": "絆創膏",
      "pronunciation": "ばんそうこう",
      "audioPath": "audio/ja/emergency_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_027",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "绷带",
      "text": "包帯",
      "pronunciation": "ほうたい",
      "audioPath": "audio/ja/emergency_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_028",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "体温计",
      "text": "体温計",
      "pronunciation": "たいおんけい",
      "audioPath": "audio/ja/emergency_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_029",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "口罩",
      "text": "マスク",
      "pronunciation": "ますく",
      "audioPath": "audio/ja/emergency_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_030",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "消毒液",
      "text": "消毒液",
      "pronunciation": "しょうどくえき",
      "audioPath": "audio/ja/emergency_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_031",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "急救箱",
      "text": "救急箱",
      "pronunciation": "きゅうきゅうばこ",
      "audioPath": "audio/ja/emergency_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_032",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "word",
      "zh": "保险",
      "text": "保険",
      "pronunciation": "ほけん",
      "audioPath": "audio/ja/emergency_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_emergency_032_example",
        "zh": "这家医院接受旅行保险吗？",
        "text": "この病院では旅行保険が使えますか？",
        "pronunciation": "このびょういんではりょこうほけんがつかえますか？"
      }
    },
    {
      "id": "emergency_033",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "word",
      "zh": "保险卡",
      "text": "保険証",
      "pronunciation": "ほけんしょう",
      "audioPath": "audio/ja/emergency_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_034",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我把护照弄丢了。",
      "text": "パスポートをなくしました。",
      "pronunciation": "ぱすぽーとをなくしました。",
      "audioPath": "audio/ja/emergency_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_035",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我的钱包被偷了。",
      "text": "財布を盗まれました。",
      "pronunciation": "さいふをぬすまれました。",
      "audioPath": "audio/ja/emergency_035.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_036",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "我需要帮助。",
      "text": "助けてください。",
      "pronunciation": "たすけてください。",
      "audioPath": "audio/ja/emergency_036.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_037",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请叫警察。",
      "text": "警察を呼んでください。",
      "pronunciation": "けいさつをよんでください。",
      "audioPath": "audio/ja/emergency_037.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_038",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请叫救护车。",
      "text": "救急車を呼んでください。",
      "pronunciation": "きゅうきゅうしゃをよんでください。",
      "audioPath": "audio/ja/emergency_038.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_039",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我不舒服。",
      "text": "気分が悪いです。",
      "pronunciation": "きぶんがわるいです。",
      "audioPath": "audio/ja/emergency_039.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_040",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我生病了。",
      "text": "病気です。",
      "pronunciation": "びょうきです。",
      "audioPath": "audio/ja/emergency_040.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_041",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我对……过敏。",
      "text": "…にアレルギーがあります。",
      "pronunciation": "…にあれるぎーがあります。",
      "audioPath": "audio/ja/emergency_041.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_042",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "哪里有药店？",
      "text": "薬局はどこですか？",
      "pronunciation": "やっきょくはどこですか？",
      "audioPath": "audio/ja/emergency_042.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_043",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "我需要看医生。",
      "text": "医者に診てもらいたいです。",
      "pronunciation": "いしゃにみてもらいたいです。",
      "audioPath": "audio/ja/emergency_043.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_044",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "这很紧急。",
      "text": "緊急です。",
      "pronunciation": "きんきゅうです。",
      "audioPath": "audio/ja/emergency_044.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_001",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "谢谢",
      "text": "ありがとう",
      "pronunciation": "ありがとう",
      "audioPath": "audio/ja/expressions_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_001_example",
        "zh": "谢谢你帮我指路。",
        "text": "道を教えてくれてありがとう。",
        "pronunciation": "みちをおしえてくれてありがとう。"
      }
    },
    {
      "id": "expressions_002",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "非常感谢",
      "text": "ありがとうございます",
      "pronunciation": "ありがとうございます",
      "audioPath": "audio/ja/expressions_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_002_example",
        "zh": "非常感谢您帮我找回护照。",
        "text": "パスポートを見つけてくださって、ありがとうございます。",
        "pronunciation": "ぱすぽーとをみつけてくださって、ありがとうございます。"
      }
    },
    {
      "id": "expressions_003",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "不客气",
      "text": "どういたしまして",
      "pronunciation": "どういたしまして",
      "audioPath": "audio/ja/expressions_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_003_example",
        "zh": "不客气，祝你旅途愉快。",
        "text": "どういたしまして。よい旅を。",
        "pronunciation": "どういたしまして。よいたびを。"
      }
    },
    {
      "id": "expressions_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "请",
      "text": "ください",
      "pronunciation": "ください",
      "audioPath": "audio/ja/expressions_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_004_example",
        "zh": "请在这里写下您的名字。",
        "text": "ここにお名前を書いてください。",
        "pronunciation": "ここにおなまえをかいてください。"
      }
    },
    {
      "id": "expressions_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "对不起",
      "text": "すみません",
      "pronunciation": "すみません",
      "audioPath": "audio/ja/expressions_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_005_example",
        "zh": "不好意思，请问出口在哪里？",
        "text": "すみません、出口はどこですか？",
        "pronunciation": "すみません、でぐちはどこですか？"
      }
    },
    {
      "id": "expressions_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "抱歉",
      "text": "ごめんなさい",
      "pronunciation": "ごめんなさい",
      "audioPath": "audio/ja/expressions_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_006_example",
        "zh": "抱歉，我不小心碰倒了杯子。",
        "text": "ごめんなさい、うっかりコップを倒してしまいました。",
        "pronunciation": "ごめんなさい、うっかりこっぷをたおしてしまいました。"
      }
    },
    {
      "id": "expressions_007",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "你好",
      "text": "こんにちは",
      "pronunciation": "こんにちは",
      "audioPath": "audio/ja/expressions_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_007_example",
        "zh": "你好，我预订了一个房间。",
        "text": "こんにちは、部屋を予約しています。",
        "pronunciation": "こんにちは、へやをよやくしています。"
      }
    },
    {
      "id": "expressions_008",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "早上好",
      "text": "おはようございます",
      "pronunciation": "おはようございます",
      "audioPath": "audio/ja/expressions_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_008_example",
        "zh": "早上好，早餐几点开始？",
        "text": "おはようございます。朝食は何時からですか？",
        "pronunciation": "おはようございます。ちょうしょくはなんじからですか？"
      }
    },
    {
      "id": "expressions_009",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "晚上好",
      "text": "こんばんは",
      "pronunciation": "こんばんは",
      "audioPath": "audio/ja/expressions_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_009_example",
        "zh": "晚上好，我现在可以办理入住吗？",
        "text": "こんばんは。今からチェックインできますか？",
        "pronunciation": "こんばんは。いまからちぇっくいんできますか？"
      }
    },
    {
      "id": "expressions_010",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "再见",
      "text": "さようなら",
      "pronunciation": "さようなら",
      "audioPath": "audio/ja/expressions_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_010_example",
        "zh": "再见，祝您旅途愉快。",
        "text": "さようなら。よい旅を。",
        "pronunciation": "さようなら。よいたびを。"
      }
    },
    {
      "id": "expressions_011",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "回头见",
      "text": "またね",
      "pronunciation": "またね",
      "audioPath": "audio/ja/expressions_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_011_example",
        "zh": "回头见，我们晚饭时在大堂集合。",
        "text": "またね。夕食のときにロビーで会おう。",
        "pronunciation": "またね。ゆうしょくのときにろびーであおう。"
      }
    },
    {
      "id": "expressions_012",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "晚安",
      "text": "おやすみなさい",
      "pronunciation": "おやすみなさい",
      "audioPath": "audio/ja/expressions_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_012_example",
        "zh": "晚安，明天见。",
        "text": "おやすみなさい。また明日。",
        "pronunciation": "おやすみなさい。またあした。"
      }
    },
    {
      "id": "expressions_013",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "欢迎光临",
      "text": "いらっしゃいませ",
      "pronunciation": "いらっしゃいませ",
      "audioPath": "audio/ja/expressions_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_013_example",
        "zh": "欢迎光临，请问您预订了吗？",
        "text": "いらっしゃいませ。ご予約はありますか？",
        "pronunciation": "いらっしゃいませ。ごよやくはありますか？"
      }
    },
    {
      "id": "expressions_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我明白了",
      "text": "わかりました",
      "pronunciation": "わかりました",
      "audioPath": "audio/ja/expressions_014.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_015",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我不明白",
      "text": "わかりません",
      "pronunciation": "わかりません",
      "audioPath": "audio/ja/expressions_015.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_016",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "是的",
      "text": "はい",
      "pronunciation": "はい",
      "audioPath": "audio/ja/expressions_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_016_example",
        "zh": "是的，我订了两晚。",
        "text": "はい、二泊予約しています。",
        "pronunciation": "はい、にはくよやくしています。"
      }
    },
    {
      "id": "expressions_017",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "不是",
      "text": "いいえ",
      "pronunciation": "いいえ",
      "audioPath": "audio/ja/expressions_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_017_example",
        "zh": "不是，这不是我的行李。",
        "text": "いいえ、これは私の荷物ではありません。",
        "pronunciation": "いいえ、これはわたしのにもつではありません。"
      }
    },
    {
      "id": "expressions_018",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "可以",
      "text": "大丈夫",
      "pronunciation": "だいじょうぶ",
      "audioPath": "audio/ja/expressions_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_018_example",
        "zh": "我现在可以进房间了吗？",
        "text": "もう部屋に入っても大丈夫ですか？",
        "pronunciation": "もうへやにはいってもだいじょうぶですか？"
      }
    },
    {
      "id": "expressions_019",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "没关系",
      "text": "大丈夫です",
      "pronunciation": "だいじょうぶです",
      "audioPath": "audio/ja/expressions_019.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_020",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "没问题",
      "text": "構いません",
      "pronunciation": "かまいません",
      "audioPath": "audio/ja/expressions_020.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_021",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "好的",
      "text": "オーケー",
      "pronunciation": "おーけー",
      "audioPath": "audio/ja/expressions_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_021_example",
        "zh": "好的，我会在八点到大堂。",
        "text": "オーケーです。八時にロビーへ行きます。",
        "pronunciation": "おーけーです。はちじにろびーへいきます。"
      }
    },
    {
      "id": "expressions_022",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我喜欢",
      "text": "好きです",
      "pronunciation": "すきです",
      "audioPath": "audio/ja/expressions_022.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_023",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我不喜欢",
      "text": "好きじゃありません",
      "pronunciation": "すきじゃありません",
      "audioPath": "audio/ja/expressions_023.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_024",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "想要",
      "text": "ほしい",
      "pronunciation": "ほしい",
      "audioPath": "audio/ja/expressions_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_024_example",
        "zh": "我想要一间安静的房间。",
        "text": "静かな部屋がほしいです。",
        "pronunciation": "しずかなへやがほしいです。"
      }
    },
    {
      "id": "expressions_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "需要",
      "text": "必要",
      "pronunciation": "ひつよう",
      "audioPath": "audio/ja/expressions_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_025_example",
        "zh": "办理入住需要护照吗？",
        "text": "チェックインにはパスポートが必要ですか？",
        "pronunciation": "ちぇっくいんにはぱすぽーとがひつようですか？"
      }
    },
    {
      "id": "expressions_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "有",
      "text": "あります",
      "pronunciation": "あります",
      "audioPath": "audio/ja/expressions_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_026_example",
        "zh": "今晚还有空房吗？",
        "text": "今夜、空室はありますか？",
        "pronunciation": "こんや、くうしつはありますか？"
      }
    },
    {
      "id": "expressions_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "没有",
      "text": "ありません",
      "pronunciation": "ありません",
      "audioPath": "audio/ja/expressions_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_027_example",
        "zh": "现在没有空房。",
        "text": "今、空室はありません。",
        "pronunciation": "いま、くうしつはありません。"
      }
    },
    {
      "id": "expressions_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "是",
      "text": "です",
      "pronunciation": "です",
      "audioPath": "audio/ja/expressions_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "jp-ja_expressions_028_example",
        "zh": "是的，这张票是去机场的。",
        "text": "はい、これは空港行きの切符です。",
        "pronunciation": "はい、これはくうこうゆきのきっぷです。"
      }
    },
    {
      "id": "expressions_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不是",
      "text": "じゃありません",
      "pronunciation": "じゃありません",
      "audioPath": "audio/ja/expressions_029.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_030",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我叫……",
      "text": "…と申します",
      "pronunciation": "…ともうします",
      "audioPath": "audio/ja/expressions_030.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_031",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "你叫什么名字？",
      "text": "お名前は何ですか？",
      "pronunciation": "おなまえはなんですか？",
      "audioPath": "audio/ja/expressions_031.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_032",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我是中国人。",
      "text": "私は中国人です。",
      "pronunciation": "わたしはちゅうごくじんです。",
      "audioPath": "audio/ja/expressions_032.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_033",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "你会说英语吗？",
      "text": "英語を話せますか？",
      "pronunciation": "えいごをはなせますか？",
      "audioPath": "audio/ja/expressions_033.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_034",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请说慢一点。",
      "text": "ゆっくり話してください。",
      "pronunciation": "ゆっくりはなしてください。",
      "audioPath": "audio/ja/expressions_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_035",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请再说一遍。",
      "text": "もう一度言ってください。",
      "pronunciation": "もういちどいってください。",
      "audioPath": "audio/ja/expressions_035.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_036",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "什么意思？",
      "text": "どういう意味ですか？",
      "pronunciation": "どういういみですか？",
      "audioPath": "audio/ja/expressions_036.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_037",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "怎么读？",
      "text": "どう読みますか？",
      "pronunciation": "どうよみますか？",
      "audioPath": "audio/ja/expressions_037.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_038",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "怎么写？",
      "text": "どう書きますか？",
      "pronunciation": "どうかきますか？",
      "audioPath": "audio/ja/expressions_038.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_039",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "多少钱？",
      "text": "いくらですか？",
      "pronunciation": "いくらですか？",
      "audioPath": "audio/ja/expressions_039.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_040",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "在哪里？",
      "text": "どこですか？",
      "pronunciation": "どこですか？",
      "audioPath": "audio/ja/expressions_040.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_041",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "什么时候？",
      "text": "いつですか？",
      "pronunciation": "いつですか？",
      "audioPath": "audio/ja/expressions_041.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_042",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "为什么？",
      "text": "なぜですか？",
      "pronunciation": "なぜですか？",
      "audioPath": "audio/ja/expressions_042.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_043",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "怎么办？",
      "text": "どうすればいいですか？",
      "pronunciation": "どうすればいいですか？",
      "audioPath": "audio/ja/expressions_043.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_044",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以吗？",
      "text": "いいですか？",
      "pronunciation": "いいですか？",
      "audioPath": "audio/ja/expressions_044.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_045",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以。",
      "text": "いいですよ。",
      "pronunciation": "いいですよ。",
      "audioPath": "audio/ja/expressions_045.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_046",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不行。",
      "text": "だめです。",
      "pronunciation": "だめです。",
      "audioPath": "audio/ja/expressions_046.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_047",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "有中文吗？",
      "text": "中国語はありますか？",
      "pronunciation": "ちゅうごくごはありますか？",
      "audioPath": "audio/ja/expressions_047.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "ja_airport_phrase_001",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "请问“护照”在哪里？",
      "text": "パスポートはどこですか？",
      "pronunciation": "ぱすぽーとはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_airport_phrase_002",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我想确认一下“签证”。",
      "text": "ビザについて確認したいです。",
      "pronunciation": "びざについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_003",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "可以帮我处理“机票”吗？",
      "text": "航空券について手伝っていただけますか？",
      "pronunciation": "こうくうけんについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_airport_phrase_004",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "关于“机场”，接下来该怎么做？",
      "text": "空港について、次はどうすればいいですか？",
      "pronunciation": "くうこうについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_airport_phrase_005",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "请告诉我“登机牌”的相关信息。",
      "text": "搭乗券について教えてください。",
      "pronunciation": "とうじょうけんについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_airport_phrase_006",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "请问“值机”在哪里？",
      "text": "チェックインはどこですか？",
      "pronunciation": "ちぇっくいんはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_airport_phrase_007",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "我想确认一下“座位”。",
      "text": "座席について確認したいです。",
      "pronunciation": "ざせきについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_008",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "可以帮我处理“靠窗座位”吗？",
      "text": "窓側の席について手伝っていただけますか？",
      "pronunciation": "まどがわのせきについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_airport_phrase_009",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "关于“过道座位”，接下来该怎么做？",
      "text": "通路側の席について、次はどうすればいいですか？",
      "pronunciation": "つうろがわのせきについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_airport_phrase_010",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "请告诉我“行李”的相关信息。",
      "text": "荷物について教えてください。",
      "pronunciation": "にもつについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_airport_phrase_011",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "请问“行李箱”在哪里？",
      "text": "スーツケースはどこですか？",
      "pronunciation": "すーつけーすはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_airport_phrase_012",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "我想确认一下“手提行李”。",
      "text": "機内持ち込み手荷物について確認したいです。",
      "pronunciation": "きないもちこみてにもつについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_013",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "可以帮我处理“行李领取处”吗？",
      "text": "手荷物受取所について手伝っていただけますか？",
      "pronunciation": "てにもつうけとりじょについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_airport_phrase_014",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "关于“行李推车”，接下来该怎么做？",
      "text": "カートについて、次はどうすればいいですか？",
      "pronunciation": "かーとについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_airport_phrase_015",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "这是安检队伍吗？",
      "text": "これは保安検査の列ですか？",
      "pronunciation": "これはほあんけんさのれつですか？",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "ja_airport_phrase_016",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "请问“免税店”在哪里？",
      "text": "免税店はどこですか？",
      "pronunciation": "めんぜいてんはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_airport_phrase_017",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "我想确认一下“候机室”。",
      "text": "待合室について確認したいです。",
      "pronunciation": "まちあいしつについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_018",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "可以帮我处理“安检”吗？",
      "text": "保安検査について手伝っていただけますか？",
      "pronunciation": "ほあんけんさについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_airport_phrase_019",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请确认“登机口”的相关信息。",
      "text": "搭乗口についてご確認ください。",
      "pronunciation": "とうじょうぐちについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_020",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请确认“登机”的相关信息。",
      "text": "搭乗についてご確認ください。",
      "pronunciation": "とうじょうについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_021",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请确认“起飞”的相关信息。",
      "text": "離陸についてご確認ください。",
      "pronunciation": "りりくについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请确认“登机时间”的相关信息。",
      "text": "搭乗時刻についてご確認ください。",
      "pronunciation": "とうじょうじこくについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请确认“安全带”的相关信息。",
      "text": "シートベルトについてご確認ください。",
      "pronunciation": "しーとべるとについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "Visit Japan Web 的二维码在这里。",
      "text": "Visit Japan WebのQRコードはこちらです。",
      "pronunciation": "びじっとじゃぱんうぇぶのきゅーあーるこーどはこちらです。",
      "direction": "traveler-hears",
      "intent": "local-use"
    },
    {
      "id": "ja_airport_phrase_025",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "请确认“海关”的相关信息。",
      "text": "税関についてご確認ください。",
      "pronunciation": "ぜいかんについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_026",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "请确认“入境”的相关信息。",
      "text": "入国についてご確認ください。",
      "pronunciation": "にゅうこくについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_027",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "我想确认一下“降落”。",
      "text": "着陸について確認したいです。",
      "pronunciation": "ちゃくりくについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_airport_phrase_028",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "可以帮我处理“入境卡”吗？",
      "text": "入国カードについて手伝っていただけますか？",
      "pronunciation": "にゅうこくかーどについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_airport_phrase_029",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "关于“海关申报”，接下来该怎么做？",
      "text": "税関申告について、次はどうすればいいですか？",
      "pronunciation": "ぜいかんしんこくについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_airport_phrase_030",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "请告诉我“入境检查”的相关信息。",
      "text": "入国審査について教えてください。",
      "pronunciation": "にゅうこくしんさについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_transport_phrase_001",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "这张交通 IC 卡可以使用吗？",
      "text": "この交通系ICカードは使えますか？",
      "pronunciation": "このこうつうけいあいしーかーどはつかえますか？",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "ja_transport_phrase_002",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "我想确认一下“车站”。",
      "text": "駅について確認したいです。",
      "pronunciation": "えきについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_003",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "可以帮我处理“站台”吗？",
      "text": "ホームについて手伝っていただけますか？",
      "pronunciation": "ほーむについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_transport_phrase_004",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "关于“时刻表”，接下来该怎么做？",
      "text": "時刻表について、次はどうすればいいですか？",
      "pronunciation": "じこくひょうについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_transport_phrase_005",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "请告诉我“单程票”的相关信息。",
      "text": "片道切符について教えてください。",
      "pronunciation": "かたみちきっぷについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_transport_phrase_006",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "请问“地铁”在哪里？",
      "text": "地下鉄はどこですか？",
      "pronunciation": "ちかてつはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_transport_phrase_007",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "我想确认一下“公交车”。",
      "text": "バスについて確認したいです。",
      "pronunciation": "ばすについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_008",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "可以帮我处理“地铁”吗？",
      "text": "地下鉄について手伝っていただけますか？",
      "pronunciation": "ちかてつについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_transport_phrase_009",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "关于“公交车”，接下来该怎么做？",
      "text": "バスについて、次はどうすればいいですか？",
      "pronunciation": "ばすについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_transport_phrase_010",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "请告诉我“地铁”的相关信息。",
      "text": "地下鉄について教えてください。",
      "pronunciation": "ちかてつについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_transport_phrase_011",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "这是指定席吗？",
      "text": "ここは指定席ですか？",
      "pronunciation": "ここはしていせきですか？",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "ja_transport_phrase_012",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "我想确认一下“高铁”。",
      "text": "新幹線について確認したいです。",
      "pronunciation": "しんかんせんについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_013",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "可以帮我处理“火车”吗？",
      "text": "電車について手伝っていただけますか？",
      "pronunciation": "でんしゃについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_transport_phrase_014",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "关于“高铁”，接下来该怎么做？",
      "text": "新幹線について、次はどうすればいいですか？",
      "pronunciation": "しんかんせんについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_transport_phrase_015",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "请告诉我“火车”的相关信息。",
      "text": "電車について教えてください。",
      "pronunciation": "でんしゃについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_transport_phrase_016",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "请问“出租车”在哪里？",
      "text": "タクシーはどこですか？",
      "pronunciation": "たくしーはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_transport_phrase_017",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "我想确认一下“出租车”。",
      "text": "タクシーについて確認したいです。",
      "pronunciation": "たくしーについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_018",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "可以帮我处理“出租车”吗？",
      "text": "タクシーについて手伝っていただけますか？",
      "pronunciation": "たくしーについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_transport_phrase_019",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "请确认“出租车”的相关信息。",
      "text": "タクシーについてご確認ください。",
      "pronunciation": "たくしーについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_020",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "请确认“出租车”的相关信息。",
      "text": "タクシーについてご確認ください。",
      "pronunciation": "たくしーについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_021",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "请确认“出租车”的相关信息。",
      "text": "タクシーについてご確認ください。",
      "pronunciation": "たくしーについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_022",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请确认“租车”的相关信息。",
      "text": "レンタカーについてご確認ください。",
      "pronunciation": "れんたかーについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_023",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请确认“加油站”的相关信息。",
      "text": "ガソリンスタンドについてご確認ください。",
      "pronunciation": "がそりんすたんどについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_024",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请确认“停车场”的相关信息。",
      "text": "駐車場についてご確認ください。",
      "pronunciation": "ちゅうしゃじょうについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_025",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请确认“红绿灯”的相关信息。",
      "text": "信号についてご確認ください。",
      "pronunciation": "しんごうについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_026",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "请确认“汽车”的相关信息。",
      "text": "車についてご確認ください。",
      "pronunciation": "くるまについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_027",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "我想确认一下“租车”。",
      "text": "レンタカーについて確認したいです。",
      "pronunciation": "れんたかーについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_transport_phrase_028",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "可以帮我处理“加油站”吗？",
      "text": "ガソリンスタンドについて手伝っていただけますか？",
      "pronunciation": "がそりんすたんどについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_transport_phrase_029",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "关于“停车场”，接下来该怎么做？",
      "text": "駐車場について、次はどうすればいいですか？",
      "pronunciation": "ちゅうしゃじょうについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_transport_phrase_030",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "请告诉我“红绿灯”的相关信息。",
      "text": "信号について教えてください。",
      "pronunciation": "しんごうについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_hotel_phrase_001",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "我预订的是日式房间。",
      "text": "和室を予約しています。",
      "pronunciation": "わしつをよやくしています。",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "ja_hotel_phrase_002",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "我想确认一下“日式旅馆”。",
      "text": "旅館について確認したいです。",
      "pronunciation": "りょかんについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "可以帮我处理“民宿”吗？",
      "text": "民宿について手伝っていただけますか？",
      "pronunciation": "みんしゅくについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_hotel_phrase_004",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "关于“前台”，接下来该怎么做？",
      "text": "フロントについて、次はどうすればいいですか？",
      "pronunciation": "ふろんとについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_hotel_phrase_005",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "请告诉我“预订”的相关信息。",
      "text": "予約について教えてください。",
      "pronunciation": "よやくについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_hotel_phrase_006",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "请问“入住”在哪里？",
      "text": "チェックインはどこですか？",
      "pronunciation": "ちぇっくいんはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_hotel_phrase_007",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我想确认一下“钥匙”。",
      "text": "鍵について確認したいです。",
      "pronunciation": "かぎについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_008",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "可以帮我处理“房卡”吗？",
      "text": "ルームキーについて手伝っていただけますか？",
      "pronunciation": "るーむきーについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_hotel_phrase_009",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "关于“行李员”，接下来该怎么做？",
      "text": "ベルボーイについて、次はどうすればいいですか？",
      "pronunciation": "べるぼーいについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_hotel_phrase_010",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "请告诉我“工作人员”的相关信息。",
      "text": "スタッフについて教えてください。",
      "pronunciation": "すたっふについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_hotel_phrase_011",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "请问“毛巾”在哪里？",
      "text": "タオルはどこですか？",
      "pronunciation": "たおるはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_hotel_phrase_012",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "我想确认一下“床单”。",
      "text": "シーツについて確認したいです。",
      "pronunciation": "しーつについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_013",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "可以帮我处理“枕头”吗？",
      "text": "枕について手伝っていただけますか？",
      "pronunciation": "まくらについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_hotel_phrase_014",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "关于“被子”，接下来该怎么做？",
      "text": "布団について、次はどうすればいいですか？",
      "pronunciation": "ふとんについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_hotel_phrase_015",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请告诉我“客房服务”的相关信息。",
      "text": "ルームサービスについて教えてください。",
      "pronunciation": "るーむさーびすについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_hotel_phrase_016",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请问“打扫”在哪里？",
      "text": "掃除はどこですか？",
      "pronunciation": "そうじはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_hotel_phrase_017",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "我想确认一下“叫醒服务”。",
      "text": "モーニングコールについて確認したいです。",
      "pronunciation": "もーにんぐこーるについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_018",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "可以帮我处理“洗衣服务”吗？",
      "text": "ランドリーサービスについて手伝っていただけますか？",
      "pronunciation": "らんどりーさーびすについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_hotel_phrase_019",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请确认“熨斗”的相关信息。",
      "text": "アイロンについてご確認ください。",
      "pronunciation": "あいろんについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_020",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请确认“婴儿床”的相关信息。",
      "text": "ベビーベッドについてご確認ください。",
      "pronunciation": "べびーべっどについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_021",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“满房”的相关信息。",
      "text": "満室についてご確認ください。",
      "pronunciation": "まんしつについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_022",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“烟雾报警器”的相关信息。",
      "text": "火災報知器についてご確認ください。",
      "pronunciation": "かさいほうちきについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_023",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“灭火器”的相关信息。",
      "text": "消火器についてご確認ください。",
      "pronunciation": "しょうかきについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_024",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“安静”的相关信息。",
      "text": "静かについてご確認ください。",
      "pronunciation": "しずかについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_025",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“吵闹”的相关信息。",
      "text": "うるさいについてご確認ください。",
      "pronunciation": "うるさいについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_026",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“满房”的相关信息。",
      "text": "満室についてご確認ください。",
      "pronunciation": "まんしつについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_027",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "我想确认一下“退房”。",
      "text": "チェックアウトについて確認したいです。",
      "pronunciation": "ちぇっくあうとについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_hotel_phrase_028",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "可以帮我处理“退房时间”吗？",
      "text": "チェックアウト時間について手伝っていただけますか？",
      "pronunciation": "ちぇっくあうとじかんについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_hotel_phrase_029",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "关于“收据”，接下来该怎么做？",
      "text": "領収書について、次はどうすればいいですか？",
      "pronunciation": "りょうしゅうしょについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_hotel_phrase_030",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "请告诉我“账单”的相关信息。",
      "text": "請求書について教えてください。",
      "pronunciation": "せいきゅうしょについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_food_phrase_001",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "有不收座位费的座位吗？",
      "text": "お通しなしの席はありますか？",
      "pronunciation": "おとおしなしのせきはありますか？",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "ja_food_phrase_002",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "我想确认一下“午餐”。",
      "text": "昼食について確認したいです。",
      "pronunciation": "ちゅうしょくについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_003",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "可以帮我处理“晚餐”吗？",
      "text": "夕食について手伝っていただけますか？",
      "pronunciation": "ゆうしょくについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_food_phrase_004",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "关于“服务员”，接下来该怎么做？",
      "text": "ウェイターについて、次はどうすればいいですか？",
      "pronunciation": "うぇいたーについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_food_phrase_005",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "请告诉我“菜单”的相关信息。",
      "text": "メニューについて教えてください。",
      "pronunciation": "めにゅーについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_food_phrase_006",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "请问“米饭”在哪里？",
      "text": "ご飯はどこですか？",
      "pronunciation": "ごはんはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_food_phrase_007",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "我想确认一下“面包”。",
      "text": "パンについて確認したいです。",
      "pronunciation": "ぱんについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_008",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请给我店员推荐的菜。",
      "text": "おすすめをお願いします。",
      "pronunciation": "おすすめをおねがいします。",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "ja_food_phrase_009",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "关于“水”，接下来该怎么做？",
      "text": "水について、次はどうすればいいですか？",
      "pronunciation": "みずについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_food_phrase_010",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请告诉我“热水”的相关信息。",
      "text": "お湯について教えてください。",
      "pronunciation": "おゆについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_food_phrase_011",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请问“茶”在哪里？",
      "text": "お茶はどこですか？",
      "pronunciation": "おちゃはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_food_phrase_012",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "我想确认一下“咖啡”。",
      "text": "コーヒーについて確認したいです。",
      "pronunciation": "こーひーについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_013",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "可以帮我处理“牛奶”吗？",
      "text": "牛乳について手伝っていただけますか？",
      "pronunciation": "ぎゅうにゅうについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_food_phrase_014",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "关于“盐”，接下来该怎么做？",
      "text": "塩について、次はどうすればいいですか？",
      "pronunciation": "しおについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_food_phrase_015",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请告诉我“糖”的相关信息。",
      "text": "砂糖について教えてください。",
      "pronunciation": "さとうについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_food_phrase_016",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请问“酱油”在哪里？",
      "text": "醤油はどこですか？",
      "pronunciation": "しょうゆはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_food_phrase_017",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "我想确认一下“醋”。",
      "text": "酢について確認したいです。",
      "pronunciation": "すについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_018",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "可以帮我处理“胡椒”吗？",
      "text": "胡椒について手伝っていただけますか？",
      "pronunciation": "こしょうについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_food_phrase_019",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "请确认“筷子”的相关信息。",
      "text": "箸についてご確認ください。",
      "pronunciation": "はしについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_020",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "请确认“勺子”的相关信息。",
      "text": "スプーンについてご確認ください。",
      "pronunciation": "すぷーんについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_021",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "请确认“叉子”的相关信息。",
      "text": "フォークについてご確認ください。",
      "pronunciation": "ふぉーくについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_022",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "请确认“刀”的相关信息。",
      "text": "ナイフについてご確認ください。",
      "pronunciation": "ないふについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_023",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请确认“味噌汤”的相关信息。",
      "text": "味噌汁についてご確認ください。",
      "pronunciation": "みそしるについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_024",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请确认“鸡蛋”的相关信息。",
      "text": "卵についてご確認ください。",
      "pronunciation": "たまごについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_025",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请确认“肉”的相关信息。",
      "text": "肉についてご確認ください。",
      "pronunciation": "にくについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_026",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请确认“牛肉”的相关信息。",
      "text": "牛肉についてご確認ください。",
      "pronunciation": "ぎゅうにくについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_027",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "我想确认一下“结账”。",
      "text": "お会計について確認したいです。",
      "pronunciation": "おかいけいについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_food_phrase_028",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "可以帮我处理“收银台”吗？",
      "text": "レジについて手伝っていただけますか？",
      "pronunciation": "れじについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_food_phrase_029",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "关于“结账”，接下来该怎么做？",
      "text": "お会計について、次はどうすればいいですか？",
      "pronunciation": "おかいけいについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_food_phrase_030",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "请告诉我“收银台”的相关信息。",
      "text": "レジについて教えてください。",
      "pronunciation": "れじについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_shopping_phrase_001",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "请问“商店”在哪里？",
      "text": "店はどこですか？",
      "pronunciation": "みせはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_shopping_phrase_002",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我想确认一下“商场”。",
      "text": "デパートについて確認したいです。",
      "pronunciation": "でぱーとについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_003",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "可以帮我处理“超市”吗？",
      "text": "スーパーについて手伝っていただけますか？",
      "pronunciation": "すーぱーについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_shopping_phrase_004",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "关于“便利店”，接下来该怎么做？",
      "text": "コンビニについて、次はどうすればいいですか？",
      "pronunciation": "こんびにについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_shopping_phrase_005",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "请告诉我“市场”的相关信息。",
      "text": "市場について教えてください。",
      "pronunciation": "いちばについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_shopping_phrase_006",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "请问“尺寸”在哪里？",
      "text": "サイズはどこですか？",
      "pronunciation": "さいずはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_shopping_phrase_007",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "我想确认一下“大号”。",
      "text": "Lサイズについて確認したいです。",
      "pronunciation": "えるさいずについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_008",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "可以帮我处理“中号”吗？",
      "text": "Mサイズについて手伝っていただけますか？",
      "pronunciation": "えむさいずについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_shopping_phrase_009",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "关于“小号”，接下来该怎么做？",
      "text": "Sサイズについて、次はどうすればいいですか？",
      "pronunciation": "えすさいずについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_shopping_phrase_010",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "请告诉我“尺寸”的相关信息。",
      "text": "サイズについて教えてください。",
      "pronunciation": "さいずについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_shopping_phrase_011",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "请问“试衣间”在哪里？",
      "text": "試着室はどこですか？",
      "pronunciation": "しちゃくしつはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_shopping_phrase_012",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "我想确认一下“试穿”。",
      "text": "試着するについて確認したいです。",
      "pronunciation": "しちゃくするについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_013",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "可以帮我处理“试衣间”吗？",
      "text": "試着室について手伝っていただけますか？",
      "pronunciation": "しちゃくしつについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_shopping_phrase_014",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "关于“试穿”，接下来该怎么做？",
      "text": "試着するについて、次はどうすればいいですか？",
      "pronunciation": "しちゃくするについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_shopping_phrase_015",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "请告诉我“试衣间”的相关信息。",
      "text": "試着室について教えてください。",
      "pronunciation": "しちゃくしつについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_shopping_phrase_016",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "请问“价格”在哪里？",
      "text": "値段はどこですか？",
      "pronunciation": "ねだんはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_shopping_phrase_017",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "我想确认一下“多少钱”。",
      "text": "いくらについて確認したいです。",
      "pronunciation": "いくらについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_018",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "可以帮我处理“贵”吗？",
      "text": "高いについて手伝っていただけますか？",
      "pronunciation": "たかいについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_shopping_phrase_019",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "请确认“便宜”的相关信息。",
      "text": "安いについてご確認ください。",
      "pronunciation": "やすいについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_020",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "请确认“现金”的相关信息。",
      "text": "現金についてご確認ください。",
      "pronunciation": "げんきんについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_021",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "请确认“信用卡”的相关信息。",
      "text": "クレジットカードについてご確認ください。",
      "pronunciation": "くれじっとかーどについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_022",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "请确认“银行卡”的相关信息。",
      "text": "キャッシュカードについてご確認ください。",
      "pronunciation": "きゃっしゅかーどについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_023",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "请确认“零钱”的相关信息。",
      "text": "小銭についてご確認ください。",
      "pronunciation": "こぜにについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_024",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以办理免税吗？",
      "text": "免税手続きはできますか？",
      "pronunciation": "めんぜいてつづきはできますか？",
      "direction": "traveler-hears",
      "intent": "local-use"
    },
    {
      "id": "ja_shopping_phrase_025",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请确认“小票”的相关信息。",
      "text": "レシートについてご確認ください。",
      "pronunciation": "れしーとについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_026",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请确认“小票”的相关信息。",
      "text": "レシートについてご確認ください。",
      "pronunciation": "れしーとについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_027",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "我想确认一下“小票”。",
      "text": "レシートについて確認したいです。",
      "pronunciation": "れしーとについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_shopping_phrase_028",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以帮我处理“小票”吗？",
      "text": "レシートについて手伝っていただけますか？",
      "pronunciation": "れしーとについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_shopping_phrase_029",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "关于“小票”，接下来该怎么做？",
      "text": "レシートについて、次はどうすればいいですか？",
      "pronunciation": "れしーとについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_shopping_phrase_030",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请告诉我“小票”的相关信息。",
      "text": "レシートについて教えてください。",
      "pronunciation": "れしーとについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_directions_phrase_001",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "请问“哪里”在哪里？",
      "text": "どこはどこですか？",
      "pronunciation": "どこはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_directions_phrase_002",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "我想确认一下“这里”。",
      "text": "ここについて確認したいです。",
      "pronunciation": "ここについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_003",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "可以帮我处理“那里”吗？",
      "text": "あそこについて手伝っていただけますか？",
      "pronunciation": "あそこについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_directions_phrase_004",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "关于“左边”，接下来该怎么做？",
      "text": "左について、次はどうすればいいですか？",
      "pronunciation": "ひだりについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_directions_phrase_005",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "最近的车站出口是几号？",
      "text": "最寄りの駅の出口は何番ですか？",
      "pronunciation": "もよりのえきのでぐちはなんばんですか？",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "ja_directions_phrase_006",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请问“前面”在哪里？",
      "text": "前はどこですか？",
      "pronunciation": "まえはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_directions_phrase_007",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我想确认一下“后面”。",
      "text": "後ろについて確認したいです。",
      "pronunciation": "うしろについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_008",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "可以帮我处理“旁边”吗？",
      "text": "隣について手伝っていただけますか？",
      "pronunciation": "となりについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_directions_phrase_009",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "关于“对面”，接下来该怎么做？",
      "text": "向かいについて、次はどうすればいいですか？",
      "pronunciation": "むかいについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_directions_phrase_010",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请告诉我“附近”的相关信息。",
      "text": "近くについて教えてください。",
      "pronunciation": "ちかくについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_directions_phrase_011",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请问“远”在哪里？",
      "text": "遠いはどこですか？",
      "pronunciation": "とおいはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_directions_phrase_012",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我想确认一下“近”。",
      "text": "近いについて確認したいです。",
      "pronunciation": "ちかいについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_013",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "可以帮我处理“远”吗？",
      "text": "遠いについて手伝っていただけますか？",
      "pronunciation": "とおいについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_directions_phrase_014",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "关于“近”，接下来该怎么做？",
      "text": "近いについて、次はどうすればいいですか？",
      "pronunciation": "ちかいについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_directions_phrase_015",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "请告诉我“远”的相关信息。",
      "text": "遠いについて教えてください。",
      "pronunciation": "とおいについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_directions_phrase_016",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "请问“近”在哪里？",
      "text": "近いはどこですか？",
      "pronunciation": "ちかいはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_directions_phrase_017",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "我想确认一下“远”。",
      "text": "遠いについて確認したいです。",
      "pronunciation": "とおいについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_018",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "可以帮我处理“十字路口”吗？",
      "text": "交差点について手伝っていただけますか？",
      "pronunciation": "こうさてんについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_directions_phrase_019",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请确认“桥”的相关信息。",
      "text": "橋についてご確認ください。",
      "pronunciation": "はしについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_020",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请确认“路”的相关信息。",
      "text": "道についてご確認ください。",
      "pronunciation": "みちについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_021",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请确认“街道”的相关信息。",
      "text": "通りについてご確認ください。",
      "pronunciation": "とおりについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_022",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请确认“建筑”的相关信息。",
      "text": "建物についてご確認ください。",
      "pronunciation": "たてものについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_023",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请确认“银行”的相关信息。",
      "text": "銀行についてご確認ください。",
      "pronunciation": "ぎんこうについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_024",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请确认“邮局”的相关信息。",
      "text": "郵便局についてご確認ください。",
      "pronunciation": "ゆうびんきょくについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_025",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请确认“厕所”的相关信息。",
      "text": "トイレについてご確認ください。",
      "pronunciation": "といれについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_026",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请确认“公交站”的相关信息。",
      "text": "バス停についてご確認ください。",
      "pronunciation": "ばすていについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_027",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "我想确认一下“地铁站”。",
      "text": "地下鉄の駅について確認したいです。",
      "pronunciation": "ちかてつのえきについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_directions_phrase_028",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "可以帮我处理“景点”吗？",
      "text": "観光地について手伝っていただけますか？",
      "pronunciation": "かんこうちについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_directions_phrase_029",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "关于“博物馆”，接下来该怎么做？",
      "text": "博物館について、次はどうすればいいですか？",
      "pronunciation": "はくぶつかんについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_directions_phrase_030",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请告诉我“公园”的相关信息。",
      "text": "公園について教えてください。",
      "pronunciation": "こうえんについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_emergency_phrase_001",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "请问“发烧”在哪里？",
      "text": "熱はどこですか？",
      "pronunciation": "ねつはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_emergency_phrase_002",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我想确认一下“感冒”。",
      "text": "風邪について確認したいです。",
      "pronunciation": "かぜについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_003",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "可以帮我处理“咳嗽”吗？",
      "text": "咳について手伝っていただけますか？",
      "pronunciation": "せきについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_emergency_phrase_004",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "关于“头疼”，接下来该怎么做？",
      "text": "頭痛について、次はどうすればいいですか？",
      "pronunciation": "ずつうについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_emergency_phrase_005",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "请告诉我“肚子疼”的相关信息。",
      "text": "腹痛について教えてください。",
      "pronunciation": "ふくつうについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_emergency_phrase_006",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "可以介绍附近能接诊游客的医院吗？",
      "text": "旅行者を診てくれる近くの病院を紹介してください。",
      "pronunciation": "りょこうしゃをみてくれるちかくのびょういんをしょうかいしてください。",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "ja_emergency_phrase_007",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "我想确认一下“护士”。",
      "text": "看護師について確認したいです。",
      "pronunciation": "かんごしについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_008",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "可以帮我处理“药”吗？",
      "text": "薬について手伝っていただけますか？",
      "pronunciation": "くすりについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_emergency_phrase_009",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "关于“处方”，接下来该怎么做？",
      "text": "処方箋について、次はどうすればいいですか？",
      "pronunciation": "しょほうせんについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_emergency_phrase_010",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "请告诉我“药片”的相关信息。",
      "text": "錠剤について教えてください。",
      "pronunciation": "じょうざいについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_emergency_phrase_011",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "请问“药膏”在哪里？",
      "text": "軟膏はどこですか？",
      "pronunciation": "なんこうはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_emergency_phrase_012",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "我想确认一下“报警”。",
      "text": "警察を呼ぶについて確認したいです。",
      "pronunciation": "けいさつをよぶについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_013",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "可以帮我处理“报警”吗？",
      "text": "警察を呼ぶについて手伝っていただけますか？",
      "pronunciation": "けいさつをよぶについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_emergency_phrase_014",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "关于“报警”，接下来该怎么做？",
      "text": "警察を呼ぶについて、次はどうすればいいですか？",
      "pronunciation": "けいさつをよぶについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_emergency_phrase_015",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请告诉我“报警”的相关信息。",
      "text": "警察を呼ぶについて教えてください。",
      "pronunciation": "けいさつをよぶについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_emergency_phrase_016",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请问“报警”在哪里？",
      "text": "警察を呼ぶはどこですか？",
      "pronunciation": "けいさつをよぶはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_emergency_phrase_017",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我想确认一下“腹泻”。",
      "text": "下痢について確認したいです。",
      "pronunciation": "げりについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_018",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "可以帮我处理“便秘”吗？",
      "text": "便秘について手伝っていただけますか？",
      "pronunciation": "べんぴについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_emergency_phrase_019",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请确认“受伤”的相关信息。",
      "text": "怪我についてご確認ください。",
      "pronunciation": "けがについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_020",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请确认“流血”的相关信息。",
      "text": "出血についてご確認ください。",
      "pronunciation": "しゅっけつについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_021",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请确认“骨折”的相关信息。",
      "text": "骨折についてご確認ください。",
      "pronunciation": "こっせつについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请确认“救命”的相关信息。",
      "text": "助けてについてご確認ください。",
      "pronunciation": "たすけてについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_023",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请确认“紧急”的相关信息。",
      "text": "緊急についてご確認ください。",
      "pronunciation": "きんきゅうについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_024",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请确认“叫救护车”的相关信息。",
      "text": "救急車を呼ぶについてご確認ください。",
      "pronunciation": "きゅうきゅうしゃをよぶについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_025",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请确认“受伤”的相关信息。",
      "text": "怪我についてご確認ください。",
      "pronunciation": "けがについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_026",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请确认“流血”的相关信息。",
      "text": "出血についてご確認ください。",
      "pronunciation": "しゅっけつについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_027",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "我想确认一下“保险”。",
      "text": "保険について確認したいです。",
      "pronunciation": "ほけんについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_emergency_phrase_028",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "可以帮我处理“保险卡”吗？",
      "text": "保険証について手伝っていただけますか？",
      "pronunciation": "ほけんしょうについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_emergency_phrase_029",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "关于“保险”，接下来该怎么做？",
      "text": "保険について、次はどうすればいいですか？",
      "pronunciation": "ほけんについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_emergency_phrase_030",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "请告诉我“保险卡”的相关信息。",
      "text": "保険証について教えてください。",
      "pronunciation": "ほけんしょうについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_basics_phrase_001",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "请问“你好”在哪里？",
      "text": "こんにちははどこですか？",
      "pronunciation": "こんにちははどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_basics_phrase_002",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "我想确认一下“早上好”。",
      "text": "おはようございますについて確認したいです。",
      "pronunciation": "おはようございますについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_003",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "可以帮我处理“晚上好”吗？",
      "text": "こんばんはについて手伝っていただけますか？",
      "pronunciation": "こんばんはについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_basics_phrase_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "麻烦您了。",
      "text": "よろしくお願いします。",
      "pronunciation": "よろしくおねがいします。",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "ja_basics_phrase_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "请告诉我“非常感谢”的相关信息。",
      "text": "ありがとうございますについて教えてください。",
      "pronunciation": "ありがとうございますについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_basics_phrase_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "请问“不客气”在哪里？",
      "text": "どういたしましてはどこですか？",
      "pronunciation": "どういたしましてはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_basics_phrase_007",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "我想确认一下“请”。",
      "text": "くださいについて確認したいです。",
      "pronunciation": "くださいについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_008",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "可以帮我处理“七”吗？",
      "text": "七について手伝っていただけますか？",
      "pronunciation": "ななについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_basics_phrase_009",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "关于“八”，接下来该怎么做？",
      "text": "八について、次はどうすればいいですか？",
      "pronunciation": "はちについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_basics_phrase_010",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "请告诉我“九”的相关信息。",
      "text": "九について教えてください。",
      "pronunciation": "きゅうについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_basics_phrase_011",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "请问“十”在哪里？",
      "text": "十はどこですか？",
      "pronunciation": "じゅうはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_basics_phrase_012",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我想确认一下“百”。",
      "text": "百について確認したいです。",
      "pronunciation": "ひゃくについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_013",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "可以帮我处理“千”吗？",
      "text": "千について手伝っていただけますか？",
      "pronunciation": "せんについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_basics_phrase_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "关于“万”，接下来该怎么做？",
      "text": "万について、次はどうすればいいですか？",
      "pronunciation": "まんについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_basics_phrase_015",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请告诉我“日元”的相关信息。",
      "text": "円について教えてください。",
      "pronunciation": "えんについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_basics_phrase_016",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请问“美元”在哪里？",
      "text": "ドルはどこですか？",
      "pronunciation": "どるはどこですか？",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "ja_basics_phrase_017",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我想确认一下“人民币”。",
      "text": "人民元について確認したいです。",
      "pronunciation": "じんみんげんについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_018",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "可以帮我处理“零”吗？",
      "text": "ゼロについて手伝っていただけますか？",
      "pronunciation": "ぜろについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_basics_phrase_019",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "请确认“一”的相关信息。",
      "text": "一についてご確認ください。",
      "pronunciation": "いちについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_020",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "请确认“二”的相关信息。",
      "text": "二についてご確認ください。",
      "pronunciation": "にについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_021",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "请确认“今天”的相关信息。",
      "text": "今日についてご確認ください。",
      "pronunciation": "きょうについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_022",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "请确认“明天”的相关信息。",
      "text": "明日についてご確認ください。",
      "pronunciation": "あしたについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_023",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "请确认“昨天”的相关信息。",
      "text": "昨日についてご確認ください。",
      "pronunciation": "きのうについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_024",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "请确认“后天”的相关信息。",
      "text": "明後日についてご確認ください。",
      "pronunciation": "あさってについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "请确认“是的”的相关信息。",
      "text": "はいについてご確認ください。",
      "pronunciation": "はいについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "请确认“不是”的相关信息。",
      "text": "いいえについてご確認ください。",
      "pronunciation": "いいえについてごかくにんください。",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我想确认一下“可以”。",
      "text": "大丈夫について確認したいです。",
      "pronunciation": "だいじょうぶについてかくにんしたいです。",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "ja_basics_phrase_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以帮我处理“想要”吗？",
      "text": "ほしいについて手伝っていただけますか？",
      "pronunciation": "ほしいについててつだっていただけますか？",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "ja_basics_phrase_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "关于“需要”，接下来该怎么做？",
      "text": "必要について、次はどうすればいいですか？",
      "pronunciation": "ひつようについて、つぎはどうすればいいですか？",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "ja_basics_phrase_030",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "请告诉我“有”的相关信息。",
      "text": "ありますについて教えてください。",
      "pronunciation": "ありますについておしえてください。",
      "direction": "traveler-says",
      "intent": "ask"
    }
  ]
});
})();
