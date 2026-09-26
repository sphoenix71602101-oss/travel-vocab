(function () {
  "use strict";
  window.registerContentPack({
  "id": "us-en",
  "destinationId": "us",
  "locale": "en-US",
  "speechLocale": "en-US",
  "languageCode": "en",
  "languageLabel": "英语",
  "nativeLabel": "English",
  "pronunciationLabel": null,
  "features": {
    "beginnerModule": "us-en-beginner",
    "beginnerAudioBase": "audio/en/beginner",
    "emergencyCard": {
      "title": "Emergency Contact Card",
      "notice": "For emergency communication only.",
      "foreignNameLabel": "护照拼音或英文姓名",
      "unknownBloodType": "Unknown",
      "labels": {
        "name": "Name",
        "nationality": "Nationality",
        "birthDate": "Date of Birth",
        "bloodType": "Blood Type",
        "documentNumber": "Passport / ID No.",
        "emergencyContact": "Emergency Contact",
        "emergencyPhone": "Contact Number",
        "allergies": "Allergies",
        "conditions": "Medical Conditions"
      },
      "dictionaries": {
        "nationalities": [
          {
            "code": "cn",
            "zh": "中国",
            "target": "China"
          },
          {
            "code": "jp",
            "zh": "日本",
            "target": "Japan"
          },
          {
            "code": "kr",
            "zh": "韩国",
            "target": "South Korea"
          },
          {
            "code": "sg",
            "zh": "新加坡",
            "target": "Singapore"
          },
          {
            "code": "my",
            "zh": "马来西亚",
            "target": "Malaysia"
          },
          {
            "code": "us",
            "zh": "美国",
            "target": "United States"
          },
          {
            "code": "gb",
            "zh": "英国",
            "target": "United Kingdom"
          },
          {
            "code": "ca",
            "zh": "加拿大",
            "target": "Canada"
          },
          {
            "code": "au",
            "zh": "澳大利亚",
            "target": "Australia"
          },
          {
            "code": "fr",
            "zh": "法国",
            "target": "France"
          },
          {
            "code": "de",
            "zh": "德国",
            "target": "Germany"
          },
          {
            "code": "es",
            "zh": "西班牙",
            "target": "Spain"
          },
          {
            "code": "it",
            "zh": "意大利",
            "target": "Italy"
          },
          {
            "code": "other",
            "zh": "其他",
            "target": "Other"
          }
        ],
        "allergies": [
          {
            "code": "none",
            "zh": "无",
            "target": "None"
          },
          {
            "code": "penicillin",
            "zh": "青霉素",
            "target": "Penicillin"
          },
          {
            "code": "cephalosporin",
            "zh": "头孢菌素",
            "target": "Cephalosporins"
          },
          {
            "code": "sulfonamides",
            "zh": "磺胺类",
            "target": "Sulfonamides"
          },
          {
            "code": "nsaids",
            "zh": "阿司匹林/NSAIDs",
            "target": "Aspirin / NSAIDs"
          },
          {
            "code": "peanuts",
            "zh": "花生",
            "target": "Peanuts"
          },
          {
            "code": "nuts",
            "zh": "坚果",
            "target": "Tree nuts"
          },
          {
            "code": "shellfish",
            "zh": "海鲜/甲壳类",
            "target": "Seafood / Shellfish"
          },
          {
            "code": "milk",
            "zh": "牛奶",
            "target": "Milk"
          },
          {
            "code": "eggs",
            "zh": "鸡蛋",
            "target": "Eggs"
          },
          {
            "code": "gluten",
            "zh": "小麦/麸质",
            "target": "Wheat / Gluten"
          },
          {
            "code": "soy",
            "zh": "大豆",
            "target": "Soy"
          },
          {
            "code": "latex",
            "zh": "乳胶",
            "target": "Latex"
          },
          {
            "code": "insect",
            "zh": "昆虫蜇伤",
            "target": "Insect stings"
          }
        ],
        "conditions": [
          {
            "code": "none",
            "zh": "无",
            "target": "None"
          },
          {
            "code": "diabetes",
            "zh": "糖尿病",
            "target": "Diabetes"
          },
          {
            "code": "hypertension",
            "zh": "高血压",
            "target": "Hypertension"
          },
          {
            "code": "heart",
            "zh": "心脏病",
            "target": "Heart disease"
          },
          {
            "code": "asthma",
            "zh": "哮喘",
            "target": "Asthma"
          },
          {
            "code": "epilepsy",
            "zh": "癫痫",
            "target": "Epilepsy"
          },
          {
            "code": "kidney",
            "zh": "肾脏疾病",
            "target": "Kidney disease"
          },
          {
            "code": "anticoagulants",
            "zh": "正在服用抗凝药",
            "target": "Taking anticoagulants"
          },
          {
            "code": "pregnancy",
            "zh": "怀孕",
            "target": "Pregnant"
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
      "text": "passport",
      "audioPath": "audio/en/airport_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_001_example",
        "zh": "您好，这是我的护照。",
        "text": "Hi, here's my passport."
      }
    },
    {
      "id": "airport_002",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "签证",
      "text": "visa",
      "audioPath": "audio/en/airport_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_002_example",
        "zh": "这次旅行需要签证吗？",
        "text": "Do I need a visa for this trip?"
      }
    },
    {
      "id": "airport_003",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "机票",
      "text": "airline ticket",
      "audioPath": "audio/en/airport_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_003_example",
        "zh": "我在网上订了机票。",
        "text": "I booked my airline ticket online."
      }
    },
    {
      "id": "airport_004",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "登机牌",
      "text": "boarding pass",
      "audioPath": "audio/en/airport_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_004_example",
        "zh": "您的登机牌在手机上。",
        "text": "Your boarding pass is on your phone."
      }
    },
    {
      "id": "airport_005",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李",
      "text": "luggage",
      "audioPath": "audio/en/airport_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_005_example",
        "zh": "我的行李还没到。",
        "text": "My luggage didn't arrive."
      }
    },
    {
      "id": "airport_006",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李箱",
      "text": "suitcase",
      "audioPath": "audio/en/airport_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_006_example",
        "zh": "这个行李箱重四十二磅。",
        "text": "This suitcase weighs forty-two pounds."
      }
    },
    {
      "id": "airport_007",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "手提行李",
      "text": "carry-on baggage",
      "audioPath": "audio/en/airport_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_007_example",
        "zh": "每位乘客可以带一件手提行李。",
        "text": "Each passenger may bring one carry-on bag."
      }
    },
    {
      "id": "airport_008",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "机场",
      "text": "airport",
      "audioPath": "audio/en/airport_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_008_example",
        "zh": "从机场到市中心需要多久？",
        "text": "How long does it take to get downtown from the airport?"
      }
    },
    {
      "id": "airport_009",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航站楼",
      "text": "terminal",
      "audioPath": "audio/en/airport_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_009_example",
        "zh": "您的航班从四号航站楼出发。",
        "text": "Your flight leaves from Terminal 4."
      }
    },
    {
      "id": "airport_010",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "出发",
      "text": "departure",
      "audioPath": "audio/en/airport_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_010_example",
        "zh": "出发时间是下午三点二十分。",
        "text": "Departure is scheduled for 3:20 p.m."
      }
    },
    {
      "id": "airport_011",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "到达",
      "text": "arrival",
      "audioPath": "audio/en/airport_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_011_example",
        "zh": "我们预计晚上七点四十五分到达。",
        "text": "Our arrival time is 7:45 p.m."
      }
    },
    {
      "id": "airport_012",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机口",
      "text": "boarding gate",
      "audioPath": "audio/en/airport_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_012_example",
        "zh": "登机口改到 B12 了。",
        "text": "The boarding gate changed to B12."
      }
    },
    {
      "id": "airport_013",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "安检",
      "text": "security check",
      "audioPath": "audio/en/airport_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_013_example",
        "zh": "安检时请取出笔记本电脑。",
        "text": "Please take out your laptop at the security checkpoint."
      }
    },
    {
      "id": "airport_014",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "海关",
      "text": "customs",
      "audioPath": "audio/en/airport_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_014_example",
        "zh": "这个需要在海关申报吗？",
        "text": "Do I need to declare this at customs?"
      }
    },
    {
      "id": "airport_015",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境",
      "text": "entry",
      "audioPath": "audio/en/airport_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_015_example",
        "zh": "您这次入境的目的是什么？",
        "text": "What is the purpose of your entry?"
      }
    },
    {
      "id": "airport_016",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "出境",
      "text": "departure from the country",
      "audioPath": "audio/en/airport_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_016_example",
        "zh": "我星期五离开美国。",
        "text": "My departure from the United States is on Friday."
      }
    },
    {
      "id": "airport_017",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "转机",
      "text": "transfer",
      "audioPath": "audio/en/airport_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_017_example",
        "zh": "我在达拉斯有两个小时转机。",
        "text": "I have a two-hour connection in Dallas."
      }
    },
    {
      "id": "airport_018",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航班",
      "text": "flight",
      "audioPath": "audio/en/airport_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_018_example",
        "zh": "这个航班准点吗？",
        "text": "Is this flight on time?"
      }
    },
    {
      "id": "airport_019",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "延误",
      "text": "delay",
      "audioPath": "audio/en/airport_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_019_example",
        "zh": "航班延误了四十五分钟。",
        "text": "There's a forty-five-minute delay."
      }
    },
    {
      "id": "airport_020",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "取消",
      "text": "cancellation",
      "audioPath": "audio/en/airport_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_020_example",
        "zh": "航班取消后我可以退款吗？",
        "text": "Can I get a refund because of the cancellation?"
      }
    },
    {
      "id": "airport_021",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "值机",
      "text": "check-in",
      "audioPath": "audio/en/airport_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_021_example",
        "zh": "这个航班几点开始值机？",
        "text": "What time does check-in open for this flight?"
      }
    },
    {
      "id": "airport_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机",
      "text": "boarding",
      "audioPath": "audio/en/airport_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_022_example",
        "zh": "我们这趟航班已经开始登机了吗？",
        "text": "Has boarding started for our flight yet?"
      }
    },
    {
      "id": "airport_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "起飞",
      "text": "takeoff",
      "audioPath": "audio/en/airport_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_023_example",
        "zh": "这架飞机预计几点起飞？",
        "text": "What time is this plane expected to take off?"
      }
    },
    {
      "id": "airport_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "降落",
      "text": "landing",
      "audioPath": "audio/en/airport_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_024_example",
        "zh": "由于天气原因，飞机会晚些降落。",
        "text": "The plane will land later because of the weather."
      }
    },
    {
      "id": "airport_025",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "座位",
      "text": "seat",
      "audioPath": "audio/en/airport_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_026",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠窗座位",
      "text": "window seat",
      "audioPath": "audio/en/airport_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_027",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "过道座位",
      "text": "aisle seat",
      "audioPath": "audio/en/airport_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_028",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李领取处",
      "text": "baggage claim",
      "audioPath": "audio/en/airport_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_029",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李推车",
      "text": "luggage cart",
      "audioPath": "audio/en/airport_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_030",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照查验",
      "text": "passport control",
      "audioPath": "audio/en/airport_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_031",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "免税店",
      "text": "duty-free shop",
      "audioPath": "audio/en/airport_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_032",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "机场大巴",
      "text": "airport bus",
      "audioPath": "audio/en/airport_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_032_example",
        "zh": "机场大巴每三十分钟一班。",
        "text": "The airport bus runs every thirty minutes."
      }
    },
    {
      "id": "airport_033",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "word",
      "zh": "出租车",
      "text": "taxi",
      "audioPath": "audio/en/airport_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_033_example",
        "zh": "请帮我叫一辆出租车。",
        "text": "Could you call a taxi for me?"
      }
    },
    {
      "id": "airport_034",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "地铁",
      "text": "subway",
      "audioPath": "audio/en/airport_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_034_example",
        "zh": "坐地铁去市中心最快。",
        "text": "The subway is the fastest way downtown."
      }
    },
    {
      "id": "airport_035",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "火车",
      "text": "train",
      "audioPath": "audio/en/airport_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_035_example",
        "zh": "这趟火车去波士顿吗？",
        "text": "Does this train go to Boston?"
      }
    },
    {
      "id": "airport_036",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "高铁",
      "text": "bullet train",
      "audioPath": "audio/en/airport_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_036_example",
        "zh": "这两个城市之间有高铁吗？",
        "text": "Is there a high-speed train between these cities?"
      }
    },
    {
      "id": "airport_037",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "公交车",
      "text": "bus",
      "audioPath": "audio/en/airport_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_037_example",
        "zh": "这辆公交车在博物馆停吗？",
        "text": "Does this bus stop at the museum?"
      }
    },
    {
      "id": "airport_038",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "车站",
      "text": "station",
      "audioPath": "audio/en/airport_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_038_example",
        "zh": "最近的车站在哪里？",
        "text": "Where is the nearest station?"
      }
    },
    {
      "id": "airport_039",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "站台",
      "text": "platform",
      "audioPath": "audio/en/airport_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_039_example",
        "zh": "去华盛顿的火车从哪个站台发车？",
        "text": "Which platform does the train to Washington leave from?"
      }
    },
    {
      "id": "airport_040",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "时刻表",
      "text": "timetable",
      "audioPath": "audio/en/airport_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_040_example",
        "zh": "周末的时刻表不一样。",
        "text": "The weekend timetable is different."
      }
    },
    {
      "id": "airport_041",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "单程票",
      "text": "one-way ticket",
      "audioPath": "audio/en/airport_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_041_example",
        "zh": "我想买一张去费城的单程票。",
        "text": "I'd like a one-way ticket to Philadelphia."
      }
    },
    {
      "id": "airport_042",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "往返票",
      "text": "round-trip ticket",
      "audioPath": "audio/en/airport_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_042_example",
        "zh": "一张当天往返票多少钱？",
        "text": "How much is a same-day round-trip ticket?"
      }
    },
    {
      "id": "airport_043",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "车票",
      "text": "ticket",
      "audioPath": "audio/en/airport_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_043_example",
        "zh": "我可以在车上买票吗？",
        "text": "Can I buy a ticket on the train?"
      }
    },
    {
      "id": "airport_044",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "售票处",
      "text": "ticket office",
      "audioPath": "audio/en/airport_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_044_example",
        "zh": "售票处晚上八点关门。",
        "text": "The ticket office closes at eight."
      }
    },
    {
      "id": "airport_045",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "自动售票机",
      "text": "ticket machine",
      "audioPath": "audio/en/airport_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_045_example",
        "zh": "这台自动售票机可以刷卡吗？",
        "text": "Does this ticket machine take cards?"
      }
    },
    {
      "id": "airport_046",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "检票口",
      "text": "ticket gate",
      "audioPath": "audio/en/airport_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_046_example",
        "zh": "请在检票口轻触您的卡。",
        "text": "Tap your card at the ticket gate."
      }
    },
    {
      "id": "airport_047",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "入口",
      "text": "entrance",
      "audioPath": "audio/en/airport_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_047_example",
        "zh": "主入口在街角。",
        "text": "The main entrance is on the corner."
      }
    },
    {
      "id": "airport_048",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "出口",
      "text": "exit",
      "audioPath": "audio/en/airport_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_048_example",
        "zh": "请从下一个出口出去。",
        "text": "Take the next exit."
      }
    },
    {
      "id": "airport_049",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "问讯处",
      "text": "information desk",
      "audioPath": "audio/en/airport_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_049_example",
        "zh": "您可以到问讯处领取线路图。",
        "text": "You can get a route map at the information desk."
      }
    },
    {
      "id": "airport_050",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "地图",
      "text": "map",
      "audioPath": "audio/en/airport_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_050_example",
        "zh": "可以在地图上指给我看吗？",
        "text": "Could you show me on the map?"
      }
    },
    {
      "id": "airport_051",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "目的地",
      "text": "destination",
      "audioPath": "audio/en/airport_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_051_example",
        "zh": "请输入您的目的地。",
        "text": "Enter your destination, please."
      }
    },
    {
      "id": "airport_052",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "汽车",
      "text": "car",
      "audioPath": "audio/en/airport_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_053",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "租车",
      "text": "rental car",
      "audioPath": "audio/en/airport_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_053_example",
        "zh": "租车时需要出示什么证件？",
        "text": "What documents do I need to rent a car?"
      }
    },
    {
      "id": "airport_054",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "加油站",
      "text": "gas station",
      "audioPath": "audio/en/airport_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_055",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "停车场",
      "text": "parking lot",
      "audioPath": "audio/en/airport_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_056",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "红绿灯",
      "text": "traffic light",
      "audioPath": "audio/en/airport_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_057",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "人行横道",
      "text": "crosswalk",
      "audioPath": "audio/en/airport_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_058",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "自行车",
      "text": "bicycle",
      "audioPath": "audio/en/airport_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_059",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "摩托车",
      "text": "motorcycle",
      "audioPath": "audio/en/airport_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_060",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "步行",
      "text": "on foot",
      "audioPath": "audio/en/airport_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_060_example",
        "zh": "从车站步行到酒店要多久？",
        "text": "How long does it take to walk from the station to the hotel?"
      }
    },
    {
      "id": "airport_061",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "直飞",
      "text": "direct flight",
      "audioPath": "audio/en/airport_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_061_example",
        "zh": "这个航班是直飞，还是需要转机？",
        "text": "Is this a direct flight, or do I need to make a connection?"
      }
    },
    {
      "id": "airport_062",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李寄存",
      "text": "luggage storage",
      "audioPath": "audio/en/airport_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_062_example",
        "zh": "转机期间，可以把行李寄存在机场吗？",
        "text": "Can I store my luggage at the airport during my layover?"
      }
    },
    {
      "id": "airport_063",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李丢失",
      "text": "lost luggage",
      "audioPath": "audio/en/airport_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_063_example",
        "zh": "我的行李没有到达，我想申报行李丢失。",
        "text": "My luggage didn't arrive. I need to report it missing."
      }
    },
    {
      "id": "airport_064",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照号码",
      "text": "passport number",
      "audioPath": "audio/en/airport_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_065",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航班号",
      "text": "flight number",
      "audioPath": "audio/en/airport_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_066",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "候机室",
      "text": "waiting room",
      "audioPath": "audio/en/airport_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_067",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机时间",
      "text": "boarding time",
      "audioPath": "audio/en/airport_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_068",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "随身携带",
      "text": "to carry on",
      "audioPath": "audio/en/airport_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_068_example",
        "zh": "这瓶水可以随身携带上飞机吗？",
        "text": "Can I bring this bottle of water on board?"
      }
    },
    {
      "id": "airport_069",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "托运",
      "text": "to check in luggage",
      "audioPath": "audio/en/airport_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_069_example",
        "zh": "我想托运这个行李箱。",
        "text": "I'd like to check this suitcase."
      }
    },
    {
      "id": "airport_070",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李检查",
      "text": "baggage inspection",
      "audioPath": "audio/en/airport_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_071",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境卡",
      "text": "arrival card",
      "audioPath": "audio/en/airport_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_072",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "海关申报",
      "text": "customs declaration",
      "audioPath": "audio/en/airport_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_072_example",
        "zh": "海关申报单在哪里填写？",
        "text": "Where do I fill out the customs declaration form?"
      }
    },
    {
      "id": "airport_073",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "转机柜台",
      "text": "transfer counter",
      "audioPath": "audio/en/airport_073.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_074",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "安全带",
      "text": "seat belt",
      "audioPath": "audio/en/airport_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_075",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "空乘",
      "text": "flight attendant",
      "audioPath": "audio/en/airport_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_076",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "机长",
      "text": "captain",
      "audioPath": "audio/en/airport_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_077",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机桥",
      "text": "jet bridge",
      "audioPath": "audio/en/airport_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_078",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "跑道",
      "text": "runway",
      "audioPath": "audio/en/airport_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_079",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "签证延期",
      "text": "visa extension",
      "audioPath": "audio/en/airport_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_079_example",
        "zh": "我的签证快到期了，在哪里申请延期？",
        "text": "My visa is about to expire. Where can I apply for an extension?"
      }
    },
    {
      "id": "airport_080",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境检查",
      "text": "immigration inspection",
      "audioPath": "audio/en/airport_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_081",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李超重",
      "text": "excess baggage",
      "audioPath": "audio/en/airport_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_airport_081_example",
        "zh": "行李超重了，要付多少费用？",
        "text": "My bag is overweight. How much is the extra fee?"
      }
    },
    {
      "id": "airport_082",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠窗",
      "text": "window side",
      "audioPath": "audio/en/airport_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_083",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠过道",
      "text": "aisle side",
      "audioPath": "audio/en/airport_083.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_084",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "救生衣",
      "text": "life jacket",
      "audioPath": "audio/en/airport_084.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_085",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请问在哪里登机？",
      "text": "Where is the boarding gate?",
      "audioPath": "audio/en/airport_085.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "airport_086",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "请问在哪里取行李？",
      "text": "Where can I pick up my luggage?",
      "audioPath": "audio/en/airport_086.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "airport_087",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "我想换乘。",
      "text": "I want to transfer.",
      "audioPath": "audio/en/airport_087.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "hotel_001",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "酒店",
      "text": "hotel",
      "audioPath": "audio/en/hotel_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_001_example",
        "zh": "这家酒店含早餐吗？",
        "text": "Does this hotel include breakfast?"
      }
    },
    {
      "id": "hotel_002",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "汽车旅馆",
      "text": "motel",
      "audioPath": "audio/en/hotel_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_002_example",
        "zh": "我们在公路旅行途中住了一家汽车旅馆。",
        "text": "We stayed at a motel during our road trip."
      }
    },
    {
      "id": "hotel_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "民宿",
      "text": "guesthouse",
      "audioPath": "audio/en/hotel_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_003_example",
        "zh": "这家民宿有共用厨房。",
        "text": "This guesthouse has a shared kitchen."
      }
    },
    {
      "id": "hotel_004",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "前台",
      "text": "front desk",
      "audioPath": "audio/en/hotel_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_004_example",
        "zh": "您可以在前台领取额外的钥匙。",
        "text": "You can pick up an extra key at the front desk."
      }
    },
    {
      "id": "hotel_005",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "预订",
      "text": "reservation",
      "audioPath": "audio/en/hotel_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_005_example",
        "zh": "我有一个史密斯名下的预订。",
        "text": "I have a reservation under Smith."
      }
    },
    {
      "id": "hotel_006",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "入住",
      "text": "check-in",
      "audioPath": "audio/en/hotel_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_006_example",
        "zh": "下午三点可以办理入住。",
        "text": "Check-in starts at three p.m."
      }
    },
    {
      "id": "hotel_007",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "退房",
      "text": "check-out",
      "audioPath": "audio/en/hotel_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_007_example",
        "zh": "最晚几点退房？",
        "text": "What time is check-out?"
      }
    },
    {
      "id": "hotel_008",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "房间",
      "text": "room",
      "audioPath": "audio/en/hotel_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_008_example",
        "zh": "我的房间还没准备好吗？",
        "text": "Is my room ready yet?"
      }
    },
    {
      "id": "hotel_009",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "单人房",
      "text": "single room",
      "audioPath": "audio/en/hotel_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_009_example",
        "zh": "有安静一点的单人房吗？",
        "text": "Do you have a quiet single room?"
      }
    },
    {
      "id": "hotel_010",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "双人房",
      "text": "twin room",
      "audioPath": "audio/en/hotel_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_010_example",
        "zh": "我们想要一间有两张床的双人房。",
        "text": "We'd like a twin room with two beds."
      }
    },
    {
      "id": "hotel_011",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "大床房",
      "text": "double room",
      "audioPath": "audio/en/hotel_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_011_example",
        "zh": "我预订的是一间大床房。",
        "text": "I reserved a double room."
      }
    },
    {
      "id": "hotel_012",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "套房",
      "text": "suite",
      "audioPath": "audio/en/hotel_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_012_example",
        "zh": "这间套房有独立客厅吗？",
        "text": "Does this suite have a separate living room?"
      }
    },
    {
      "id": "hotel_013",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "钥匙",
      "text": "key",
      "audioPath": "audio/en/hotel_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_013_example",
        "zh": "我把钥匙落在房间里了。",
        "text": "I left my key in the room."
      }
    },
    {
      "id": "hotel_014",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "房卡",
      "text": "room key",
      "audioPath": "audio/en/hotel_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_014_example",
        "zh": "我的房卡打不开门。",
        "text": "My room key won't open the door."
      }
    },
    {
      "id": "hotel_015",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "行李员",
      "text": "bellboy",
      "audioPath": "audio/en/hotel_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_015_example",
        "zh": "行李员会把您的行李送到楼上。",
        "text": "The bell attendant will bring your bags upstairs."
      }
    },
    {
      "id": "hotel_016",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "工作人员",
      "text": "staff",
      "audioPath": "audio/en/hotel_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_016_example",
        "zh": "工作人员非常热心。",
        "text": "The staff was very helpful."
      }
    },
    {
      "id": "hotel_017",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "客房服务",
      "text": "room service",
      "audioPath": "audio/en/hotel_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_017_example",
        "zh": "客房服务供应到晚上十一点。",
        "text": "Room service is available until eleven p.m."
      }
    },
    {
      "id": "hotel_018",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "打扫",
      "text": "cleaning",
      "audioPath": "audio/en/hotel_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_018_example",
        "zh": "今天不用打扫房间，谢谢。",
        "text": "I don't need housekeeping today, thank you."
      }
    },
    {
      "id": "hotel_019",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "毛巾",
      "text": "towel",
      "audioPath": "audio/en/hotel_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_019_example",
        "zh": "可以再送两条毛巾吗？",
        "text": "Could you send up two more towels?"
      }
    },
    {
      "id": "hotel_020",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "床单",
      "text": "bed sheet",
      "audioPath": "audio/en/hotel_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_020_example",
        "zh": "床单上有一块污渍。",
        "text": "There's a stain on the bed sheet."
      }
    },
    {
      "id": "hotel_021",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "枕头",
      "text": "pillow",
      "audioPath": "audio/en/hotel_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_022",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "被子",
      "text": "futon / duvet",
      "audioPath": "audio/en/hotel_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_023",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "毯子",
      "text": "blanket",
      "audioPath": "audio/en/hotel_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_024",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "空调",
      "text": "air conditioner",
      "audioPath": "audio/en/hotel_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_025",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "暖气",
      "text": "heating",
      "audioPath": "audio/en/hotel_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_026",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "浴室",
      "text": "bathroom",
      "audioPath": "audio/en/hotel_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_027",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "淋浴",
      "text": "shower",
      "audioPath": "audio/en/hotel_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_028",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "浴缸",
      "text": "bathtub",
      "audioPath": "audio/en/hotel_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_029",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "热水",
      "text": "hot water",
      "audioPath": "audio/en/hotel_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_030",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "冷水",
      "text": "cold water",
      "audioPath": "audio/en/hotel_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_031",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "卫生间",
      "text": "toilet",
      "audioPath": "audio/en/hotel_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_032",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "卫生纸",
      "text": "toilet paper",
      "audioPath": "audio/en/hotel_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_033",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "洗发水",
      "text": "shampoo",
      "audioPath": "audio/en/hotel_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_034",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "沐浴露",
      "text": "body soap",
      "audioPath": "audio/en/hotel_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_035",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "牙刷",
      "text": "toothbrush",
      "audioPath": "audio/en/hotel_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_036",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "牙膏",
      "text": "toothpaste",
      "audioPath": "audio/en/hotel_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_037",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "吹风机",
      "text": "hair dryer",
      "audioPath": "audio/en/hotel_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_038",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "插座",
      "text": "outlet",
      "audioPath": "audio/en/hotel_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_039",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "转换插头",
      "text": "plug adapter",
      "audioPath": "audio/en/hotel_039.mp3",
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
      "audioPath": "audio/en/hotel_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_041",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "网络",
      "text": "internet",
      "audioPath": "audio/en/hotel_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_042",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "电梯",
      "text": "elevator",
      "audioPath": "audio/en/hotel_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_043",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "楼梯",
      "text": "stairs",
      "audioPath": "audio/en/hotel_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_044",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "大堂",
      "text": "lobby",
      "audioPath": "audio/en/hotel_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_045",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "餐厅",
      "text": "restaurant",
      "audioPath": "audio/en/hotel_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_046",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "早餐",
      "text": "breakfast",
      "audioPath": "audio/en/hotel_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_047",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "叫醒服务",
      "text": "wake-up call",
      "audioPath": "audio/en/hotel_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_047_example",
        "zh": "明早六点可以安排叫醒服务吗？",
        "text": "Could I request a wake-up call for six tomorrow morning?"
      }
    },
    {
      "id": "hotel_048",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "洗衣服务",
      "text": "laundry service",
      "audioPath": "audio/en/hotel_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_048_example",
        "zh": "洗衣服务今天送去，明天能取吗？",
        "text": "If I send this to the laundry service today, can I get it back tomorrow?"
      }
    },
    {
      "id": "hotel_049",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "熨斗",
      "text": "iron",
      "audioPath": "audio/en/hotel_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_050",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "保险箱",
      "text": "safe box",
      "audioPath": "audio/en/hotel_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_051",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "退房时间",
      "text": "check-out time",
      "audioPath": "audio/en/hotel_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_052",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "入住时间",
      "text": "check-in time",
      "audioPath": "audio/en/hotel_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_053",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "空房",
      "text": "vacant room",
      "audioPath": "audio/en/hotel_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_053_example",
        "zh": "今晚还有禁烟的空房吗？",
        "text": "Do you have a non-smoking room available tonight?"
      }
    },
    {
      "id": "hotel_054",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "满房",
      "text": "fully booked",
      "audioPath": "audio/en/hotel_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_054_example",
        "zh": "如果今晚满房，明晚还有房间吗？",
        "text": "If you're fully booked tonight, is a room available tomorrow night?"
      }
    },
    {
      "id": "hotel_055",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "押金",
      "text": "deposit",
      "audioPath": "audio/en/hotel_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_055_example",
        "zh": "退房后押金什么时候退还？",
        "text": "When will the deposit be refunded after checkout?"
      }
    },
    {
      "id": "hotel_056",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "收据",
      "text": "receipt",
      "audioPath": "audio/en/hotel_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_057",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "账单",
      "text": "bill",
      "audioPath": "audio/en/hotel_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_057_example",
        "zh": "账单上这笔额外费用是什么？",
        "text": "What is this extra charge on my bill?"
      }
    },
    {
      "id": "hotel_058",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "前台电话",
      "text": "front desk phone",
      "audioPath": "audio/en/hotel_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_059",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "烟雾报警器",
      "text": "smoke alarm",
      "audioPath": "audio/en/hotel_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_060",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "灭火器",
      "text": "fire extinguisher",
      "audioPath": "audio/en/hotel_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_061",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "婴儿床",
      "text": "baby bed",
      "audioPath": "audio/en/hotel_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_062",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "加床",
      "text": "extra bed",
      "audioPath": "audio/en/hotel_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_063",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "床垫",
      "text": "mattress",
      "audioPath": "audio/en/hotel_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_064",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "冰箱",
      "text": "refrigerator",
      "audioPath": "audio/en/hotel_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_065",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "微波炉",
      "text": "microwave",
      "audioPath": "audio/en/hotel_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_066",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "水壶",
      "text": "kettle",
      "audioPath": "audio/en/hotel_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_067",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "杯子",
      "text": "cup",
      "audioPath": "audio/en/hotel_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_068",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "拖鞋",
      "text": "slippers",
      "audioPath": "audio/en/hotel_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_069",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "衣架",
      "text": "hanger",
      "audioPath": "audio/en/hotel_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_070",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "衣柜",
      "text": "closet",
      "audioPath": "audio/en/hotel_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_071",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "窗帘",
      "text": "curtain",
      "audioPath": "audio/en/hotel_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_072",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "阳台",
      "text": "balcony",
      "audioPath": "audio/en/hotel_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_073",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "景色",
      "text": "view",
      "audioPath": "audio/en/hotel_073.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_074",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "安静",
      "text": "quiet",
      "audioPath": "audio/en/hotel_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_074_example",
        "zh": "我想要一间比较安静的房间。",
        "text": "Could I have a quieter room?"
      }
    },
    {
      "id": "hotel_075",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "吵闹",
      "text": "noisy",
      "audioPath": "audio/en/hotel_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_075_example",
        "zh": "隔壁房间太吵了，可以换房吗？",
        "text": "The room next door is too noisy. Could I change rooms?"
      }
    },
    {
      "id": "hotel_076",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "舒适",
      "text": "comfortable",
      "audioPath": "audio/en/hotel_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_076_example",
        "zh": "这张床睡着不太舒适。",
        "text": "This bed isn't very comfortable to sleep on."
      }
    },
    {
      "id": "hotel_077",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "房间号",
      "text": "room number",
      "audioPath": "audio/en/hotel_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_078",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "续住",
      "text": "extend stay",
      "audioPath": "audio/en/hotel_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_078_example",
        "zh": "我想续住一晚，还有空房吗？",
        "text": "I'd like to extend my stay by one night. Is a room available?"
      }
    },
    {
      "id": "hotel_079",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我把钥匙弄丢了。",
      "text": "I lost my key.",
      "audioPath": "audio/en/hotel_079.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "hotel_080",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "可以寄存行李吗？",
      "text": "Can I leave my luggage?",
      "audioPath": "audio/en/hotel_080.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "hotel_081",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "请问几点退房？",
      "text": "What time is checkout?",
      "audioPath": "audio/en/hotel_081.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "hotel_082",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "可以换个房间吗？",
      "text": "Can I change rooms?",
      "audioPath": "audio/en/hotel_082.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_001",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "早餐",
      "text": "breakfast",
      "audioPath": "audio/en/food_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_001_example",
        "zh": "早餐供应到几点？",
        "text": "What time does breakfast end?"
      }
    },
    {
      "id": "food_002",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "午餐",
      "text": "lunch",
      "audioPath": "audio/en/food_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_002_example",
        "zh": "午餐有套餐吗？",
        "text": "Do you have a lunch special?"
      }
    },
    {
      "id": "food_003",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "晚餐",
      "text": "dinner",
      "audioPath": "audio/en/food_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_003_example",
        "zh": "今晚两位用餐，有空桌吗？",
        "text": "Do you have a table for two for dinner tonight?"
      }
    },
    {
      "id": "food_004",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "菜单",
      "text": "menu",
      "audioPath": "audio/en/food_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_004_example",
        "zh": "可以给我一份菜单吗？",
        "text": "Could I see a menu, please?"
      }
    },
    {
      "id": "food_005",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "点菜",
      "text": "order",
      "audioPath": "audio/en/food_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_005_example",
        "zh": "我们可以点餐了吗？",
        "text": "We're ready to order."
      }
    },
    {
      "id": "food_006",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "水",
      "text": "water",
      "audioPath": "audio/en/food_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_006_example",
        "zh": "请给我一杯不加冰的水。",
        "text": "Could I have water with no ice?"
      }
    },
    {
      "id": "food_007",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "热水",
      "text": "hot water",
      "audioPath": "audio/en/food_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_007_example",
        "zh": "可以给我一些热水吗？",
        "text": "Could I get some hot water?"
      }
    },
    {
      "id": "food_008",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "茶",
      "text": "tea",
      "audioPath": "audio/en/food_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_008_example",
        "zh": "您有不含咖啡因的茶吗？",
        "text": "Do you have decaf tea?"
      }
    },
    {
      "id": "food_009",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "咖啡",
      "text": "coffee",
      "audioPath": "audio/en/food_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_009_example",
        "zh": "请给我一杯加燕麦奶的咖啡。",
        "text": "I'd like a coffee with oat milk."
      }
    },
    {
      "id": "food_010",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "牛奶",
      "text": "milk",
      "audioPath": "audio/en/food_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_010_example",
        "zh": "这个酱汁里有牛奶吗？",
        "text": "Is there milk in this sauce?"
      }
    },
    {
      "id": "food_011",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "果汁",
      "text": "juice",
      "audioPath": "audio/en/food_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_011_example",
        "zh": "请给孩子一杯小杯苹果汁。",
        "text": "A small apple juice for the child, please."
      }
    },
    {
      "id": "food_012",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "啤酒",
      "text": "beer",
      "audioPath": "audio/en/food_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_012_example",
        "zh": "你们有本地精酿啤酒吗？",
        "text": "Do you have any local craft beer?"
      }
    },
    {
      "id": "food_013",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "红酒",
      "text": "wine",
      "audioPath": "audio/en/food_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_013_example",
        "zh": "请给我一杯佐餐红酒。",
        "text": "I'd like a glass of red wine with dinner."
      }
    },
    {
      "id": "food_014",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "米饭",
      "text": "rice",
      "audioPath": "audio/en/food_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_014_example",
        "zh": "这个可以把薯条换成米饭吗？",
        "text": "Can I substitute rice for the fries?"
      }
    },
    {
      "id": "food_015",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "面包",
      "text": "bread",
      "audioPath": "audio/en/food_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_015_example",
        "zh": "面包可以免费续吗？",
        "text": "Are bread refills complimentary?"
      }
    },
    {
      "id": "food_016",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "面条",
      "text": "noodles",
      "audioPath": "audio/en/food_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_016_example",
        "zh": "这些面条可以做得不辣吗？",
        "text": "Can you make these noodles mild?"
      }
    },
    {
      "id": "food_017",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "煎饼",
      "text": "pancakes",
      "audioPath": "audio/en/food_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_017_example",
        "zh": "煎饼可以配枫糖浆吗？",
        "text": "Can I get maple syrup with the pancakes?"
      }
    },
    {
      "id": "food_018",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "华夫饼",
      "text": "waffles",
      "audioPath": "audio/en/food_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_018_example",
        "zh": "请给我一份水果华夫饼。",
        "text": "I'd like waffles with fruit, please."
      }
    },
    {
      "id": "food_019",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "烧烤",
      "text": "barbecue",
      "audioPath": "audio/en/food_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_019_example",
        "zh": "这份烧烤配什么酱？",
        "text": "What sauce comes with the barbecue?"
      }
    },
    {
      "id": "food_020",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "牛排",
      "text": "steak",
      "audioPath": "audio/en/food_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_020_example",
        "zh": "牛排请做五分熟。",
        "text": "I'd like the steak cooked medium."
      }
    },
    {
      "id": "food_021",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "蛤蜊浓汤",
      "text": "clam chowder",
      "audioPath": "audio/en/food_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_022",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "玉米卷",
      "text": "tacos",
      "audioPath": "audio/en/food_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_023",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "通心粉奶酪",
      "text": "mac and cheese",
      "audioPath": "audio/en/food_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_024",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鸡蛋",
      "text": "egg",
      "audioPath": "audio/en/food_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_025",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "肉",
      "text": "meat",
      "audioPath": "audio/en/food_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_026",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "牛肉",
      "text": "beef",
      "audioPath": "audio/en/food_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_027",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "猪肉",
      "text": "pork",
      "audioPath": "audio/en/food_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_028",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鸡肉",
      "text": "chicken",
      "audioPath": "audio/en/food_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_029",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鱼",
      "text": "fish",
      "audioPath": "audio/en/food_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_030",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "虾",
      "text": "shrimp",
      "audioPath": "audio/en/food_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_031",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "螃蟹",
      "text": "crab",
      "audioPath": "audio/en/food_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_032",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "蔬菜",
      "text": "vegetables",
      "audioPath": "audio/en/food_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_033",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "水果",
      "text": "fruit",
      "audioPath": "audio/en/food_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_034",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "苹果",
      "text": "apple",
      "audioPath": "audio/en/food_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_035",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "香蕉",
      "text": "banana",
      "audioPath": "audio/en/food_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_036",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "橙子",
      "text": "orange",
      "audioPath": "audio/en/food_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_037",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "草莓",
      "text": "strawberry",
      "audioPath": "audio/en/food_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_038",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "西瓜",
      "text": "watermelon",
      "audioPath": "audio/en/food_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_039",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "沙拉",
      "text": "salad",
      "audioPath": "audio/en/food_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_040",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "汤",
      "text": "soup",
      "audioPath": "audio/en/food_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_041",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "汉堡",
      "text": "hamburger",
      "audioPath": "audio/en/food_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_042",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "炸鸡",
      "text": "fried chicken",
      "audioPath": "audio/en/food_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_043",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "薯条",
      "text": "french fries",
      "audioPath": "audio/en/food_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_044",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "披萨",
      "text": "pizza",
      "audioPath": "audio/en/food_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_045",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "三明治",
      "text": "sandwich",
      "audioPath": "audio/en/food_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_046",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "冰淇淋",
      "text": "ice cream",
      "audioPath": "audio/en/food_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_047",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "蛋糕",
      "text": "cake",
      "audioPath": "audio/en/food_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_048",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "甜点",
      "text": "dessert",
      "audioPath": "audio/en/food_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_049",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "巧克力",
      "text": "chocolate",
      "audioPath": "audio/en/food_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_050",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "糖果",
      "text": "candy",
      "audioPath": "audio/en/food_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_051",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "盐",
      "text": "salt",
      "audioPath": "audio/en/food_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_052",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "糖",
      "text": "sugar",
      "audioPath": "audio/en/food_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_053",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "酱油",
      "text": "soy sauce",
      "audioPath": "audio/en/food_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_054",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "醋",
      "text": "vinegar",
      "audioPath": "audio/en/food_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_055",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "胡椒",
      "text": "pepper",
      "audioPath": "audio/en/food_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_056",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "辣椒",
      "text": "chili",
      "audioPath": "audio/en/food_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_057",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "芥末",
      "text": "wasabi",
      "audioPath": "audio/en/food_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_058",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "筷子",
      "text": "chopsticks",
      "audioPath": "audio/en/food_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_059",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "勺子",
      "text": "spoon",
      "audioPath": "audio/en/food_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_060",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "叉子",
      "text": "fork",
      "audioPath": "audio/en/food_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_061",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "刀",
      "text": "knife",
      "audioPath": "audio/en/food_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_062",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "盘子",
      "text": "plate",
      "audioPath": "audio/en/food_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_063",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "碗",
      "text": "bowl",
      "audioPath": "audio/en/food_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_064",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "玻璃杯",
      "text": "glass",
      "audioPath": "audio/en/food_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_065",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "餐巾纸",
      "text": "napkin",
      "audioPath": "audio/en/food_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_066",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "结账",
      "text": "bill",
      "audioPath": "audio/en/food_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_066_example",
        "zh": "我们可以分开结账吗？",
        "text": "Can we pay separately?"
      }
    },
    {
      "id": "food_067",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "收银台",
      "text": "cash register",
      "audioPath": "audio/en/food_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_068",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "服务员",
      "text": "waiter",
      "audioPath": "audio/en/food_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_069",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "空位",
      "text": "vacant seat",
      "audioPath": "audio/en/food_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_070",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "吸烟区",
      "text": "smoking seat",
      "audioPath": "audio/en/food_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_071",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "禁烟区",
      "text": "non-smoking seat",
      "audioPath": "audio/en/food_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_072",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "外带",
      "text": "takeout",
      "audioPath": "audio/en/food_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_072_example",
        "zh": "剩下的菜可以打包外带吗？",
        "text": "Could I take the leftovers to go?"
      }
    },
    {
      "id": "food_073",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "堂食",
      "text": "eat in",
      "audioPath": "audio/en/food_073.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_074",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "好吃",
      "text": "delicious",
      "audioPath": "audio/en/food_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_074_example",
        "zh": "这道菜很好吃，叫什么名字？",
        "text": "This dish is delicious. What is it called?"
      }
    },
    {
      "id": "food_075",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "难吃",
      "text": "not tasty",
      "audioPath": "audio/en/food_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_075_example",
        "zh": "这道菜不太好吃，可以换一道吗？",
        "text": "I don't like the taste of this dish. Could I exchange it?"
      }
    },
    {
      "id": "food_076",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "甜",
      "text": "sweet",
      "audioPath": "audio/en/food_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_076_example",
        "zh": "有不太甜的甜点吗？",
        "text": "Do you have a dessert that isn’t too sweet?"
      }
    },
    {
      "id": "food_077",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "咸",
      "text": "salty",
      "audioPath": "audio/en/food_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_077_example",
        "zh": "这道菜对我来说有点咸。",
        "text": "This dish is a little too salty for me."
      }
    },
    {
      "id": "food_078",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "辣",
      "text": "spicy",
      "audioPath": "audio/en/food_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_078_example",
        "zh": "这道菜很辣吗？我不太能吃辣。",
        "text": "Is this dish spicy? I can't handle much spice."
      }
    },
    {
      "id": "food_079",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "苦",
      "text": "bitter",
      "audioPath": "audio/en/food_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_079_example",
        "zh": "这杯咖啡太苦了，可以加点牛奶吗？",
        "text": "This coffee is too bitter. Could I add some milk?"
      }
    },
    {
      "id": "food_080",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "酸",
      "text": "sour",
      "audioPath": "audio/en/food_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_080_example",
        "zh": "这个酱汁偏酸吗？",
        "text": "Is this sauce sour?"
      }
    },
    {
      "id": "food_081",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "热",
      "text": "hot",
      "audioPath": "audio/en/food_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_081_example",
        "zh": "汤很烫，请小心。",
        "text": "The soup is hot, so please be careful."
      }
    },
    {
      "id": "food_082",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "冷",
      "text": "cold",
      "audioPath": "audio/en/food_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_082_example",
        "zh": "这道菜是冷着吃的吗？",
        "text": "Is this dish meant to be eaten cold?"
      }
    },
    {
      "id": "food_083",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "新鲜",
      "text": "fresh",
      "audioPath": "audio/en/food_083.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_083_example",
        "zh": "今天有新鲜的鱼吗？",
        "text": "Do you have fresh fish today?"
      }
    },
    {
      "id": "food_084",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "吃饱了",
      "text": "full",
      "audioPath": "audio/en/food_084.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_085",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "饿了",
      "text": "hungry",
      "audioPath": "audio/en/food_085.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_086",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "渴了",
      "text": "thirsty",
      "audioPath": "audio/en/food_086.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_087",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "过敏",
      "text": "allergy",
      "audioPath": "audio/en/food_087.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_087_example",
        "zh": "我对花生过敏，这道菜含花生吗？",
        "text": "I'm allergic to peanuts. Does this dish contain any?"
      }
    },
    {
      "id": "food_088",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "素食者",
      "text": "vegetarian",
      "audioPath": "audio/en/food_088.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_088_example",
        "zh": "我是素食者，这道菜里有肉或鱼吗？",
        "text": "I’m vegetarian. Does this dish contain any meat or fish?"
      }
    },
    {
      "id": "food_089",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请问有中文菜单吗？",
      "text": "Do you have a Chinese menu?",
      "audioPath": "audio/en/food_089.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_090",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请给我这个。",
      "text": "Please give me this one.",
      "audioPath": "audio/en/food_090.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_091",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "不要辣。",
      "text": "Not spicy, please.",
      "audioPath": "audio/en/food_091.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_092",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "结账。",
      "text": "Check, please.",
      "audioPath": "audio/en/food_092.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_093",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "我可以点餐吗？",
      "text": "Can I order?",
      "audioPath": "audio/en/food_093.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_094",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "我对……过敏。",
      "text": "I am allergic to ...",
      "audioPath": "audio/en/food_094.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_095",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "再来一杯水。",
      "text": "One more glass of water, please.",
      "audioPath": "audio/en/food_095.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_096",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "这个好吃吗？",
      "text": "Is this delicious?",
      "audioPath": "audio/en/food_096.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_001",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "商店",
      "text": "shop",
      "audioPath": "audio/en/shopping_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_001_example",
        "zh": "这家商店星期天营业吗？",
        "text": "Is this shop open on Sundays?"
      }
    },
    {
      "id": "shopping_002",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "商场",
      "text": "department store",
      "audioPath": "audio/en/shopping_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_002_example",
        "zh": "百货商场的鞋区在几楼？",
        "text": "What floor is the shoe department on?"
      }
    },
    {
      "id": "shopping_003",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "超市",
      "text": "supermarket",
      "audioPath": "audio/en/shopping_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_003_example",
        "zh": "这家超市有熟食区吗？",
        "text": "Does this supermarket have a deli?"
      }
    },
    {
      "id": "shopping_004",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "便利店",
      "text": "convenience store",
      "audioPath": "audio/en/shopping_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_004_example",
        "zh": "附近有二十四小时便利店吗？",
        "text": "Is there a twenty-four-hour convenience store nearby?"
      }
    },
    {
      "id": "shopping_005",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "市场",
      "text": "market",
      "audioPath": "audio/en/shopping_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_005_example",
        "zh": "周六的农贸市场在哪里？",
        "text": "Where is the farmers' market on Saturday?"
      }
    },
    {
      "id": "shopping_006",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "价格",
      "text": "price",
      "audioPath": "audio/en/shopping_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_006_example",
        "zh": "这个价格含销售税吗？",
        "text": "Does this price include sales tax?"
      }
    },
    {
      "id": "shopping_007",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "多少钱",
      "text": "how much",
      "audioPath": "audio/en/shopping_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_007_example",
        "zh": "加税后一共多少钱？",
        "text": "How much is it with tax?"
      }
    },
    {
      "id": "shopping_008",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "贵",
      "text": "expensive",
      "audioPath": "audio/en/shopping_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_008_example",
        "zh": "这个对我的预算来说太贵了。",
        "text": "That's too expensive for my budget."
      }
    },
    {
      "id": "shopping_009",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "便宜",
      "text": "cheap",
      "audioPath": "audio/en/shopping_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_009_example",
        "zh": "有更便宜的款式吗？",
        "text": "Do you have a cheaper option?"
      }
    },
    {
      "id": "shopping_010",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "打折",
      "text": "discount",
      "audioPath": "audio/en/shopping_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_010_example",
        "zh": "学生可以享受折扣吗？",
        "text": "Is there a student discount?"
      }
    },
    {
      "id": "shopping_011",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "促销",
      "text": "sale",
      "audioPath": "audio/en/shopping_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_011_example",
        "zh": "这件夹克现在打折。",
        "text": "This jacket is on sale right now."
      }
    },
    {
      "id": "shopping_012",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "小票",
      "text": "receipt",
      "audioPath": "audio/en/shopping_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_012_example",
        "zh": "请把小票放进袋子里。",
        "text": "Please put the receipt in the bag."
      }
    },
    {
      "id": "shopping_013",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "现金",
      "text": "cash",
      "audioPath": "audio/en/shopping_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_013_example",
        "zh": "我可以用现金支付。",
        "text": "I can pay in cash."
      }
    },
    {
      "id": "shopping_014",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "信用卡",
      "text": "credit card",
      "audioPath": "audio/en/shopping_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_014_example",
        "zh": "你们接受这张信用卡吗？",
        "text": "Do you accept this credit card?"
      }
    },
    {
      "id": "shopping_015",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "银行卡",
      "text": "bank card",
      "audioPath": "audio/en/shopping_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_015_example",
        "zh": "我的银行卡被拒了。",
        "text": "My bank card was declined."
      }
    },
    {
      "id": "shopping_016",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "零钱",
      "text": "small change",
      "audioPath": "audio/en/shopping_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_016_example",
        "zh": "您有二十美元的零钱吗？",
        "text": "Do you have change for a twenty?"
      }
    },
    {
      "id": "shopping_017",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "支付",
      "text": "payment",
      "audioPath": "audio/en/shopping_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_017_example",
        "zh": "付款没有成功。",
        "text": "The payment didn't go through."
      }
    },
    {
      "id": "shopping_018",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "手机支付",
      "text": "mobile payment",
      "audioPath": "audio/en/shopping_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_018_example",
        "zh": "我可以用手机支付吗？",
        "text": "Can I pay with my phone?"
      }
    },
    {
      "id": "shopping_019",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "二维码",
      "text": "QR code",
      "audioPath": "audio/en/shopping_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_019_example",
        "zh": "请扫描收据上的二维码。",
        "text": "Scan the QR code on the receipt."
      }
    },
    {
      "id": "shopping_020",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "word",
      "zh": "试衣间",
      "text": "fitting room",
      "audioPath": "audio/en/shopping_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_020_example",
        "zh": "试衣间在哪里？",
        "text": "Where is the fitting room?"
      }
    },
    {
      "id": "shopping_021",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "word",
      "zh": "试穿",
      "text": "to try on",
      "audioPath": "audio/en/shopping_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_021_example",
        "zh": "我想先试穿这件外套，再决定买不买。",
        "text": "I'd like to try on this coat before deciding whether to buy it."
      }
    },
    {
      "id": "shopping_022",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "尺寸",
      "text": "size",
      "audioPath": "audio/en/shopping_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_023",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "大号",
      "text": "large",
      "audioPath": "audio/en/shopping_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_024",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "中号",
      "text": "medium",
      "audioPath": "audio/en/shopping_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_025",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "小号",
      "text": "small",
      "audioPath": "audio/en/shopping_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_026",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "衣服",
      "text": "clothes",
      "audioPath": "audio/en/shopping_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_027",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "衬衫",
      "text": "shirt",
      "audioPath": "audio/en/shopping_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_028",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "T恤",
      "text": "T-shirt",
      "audioPath": "audio/en/shopping_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_029",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "裤子",
      "text": "pants",
      "audioPath": "audio/en/shopping_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_030",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "牛仔裤",
      "text": "jeans",
      "audioPath": "audio/en/shopping_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_031",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "裙子",
      "text": "skirt",
      "audioPath": "audio/en/shopping_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_032",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "连衣裙",
      "text": "dress",
      "audioPath": "audio/en/shopping_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_033",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "外套",
      "text": "coat",
      "audioPath": "audio/en/shopping_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_034",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "毛衣",
      "text": "sweater",
      "audioPath": "audio/en/shopping_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_035",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "内衣",
      "text": "underwear",
      "audioPath": "audio/en/shopping_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_036",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "袜子",
      "text": "socks",
      "audioPath": "audio/en/shopping_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_037",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "鞋子",
      "text": "shoes",
      "audioPath": "audio/en/shopping_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_038",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "运动鞋",
      "text": "sneakers",
      "audioPath": "audio/en/shopping_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_039",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "帽子",
      "text": "hat",
      "audioPath": "audio/en/shopping_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_040",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "围巾",
      "text": "scarf",
      "audioPath": "audio/en/shopping_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_041",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手套",
      "text": "gloves",
      "audioPath": "audio/en/shopping_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_042",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "包",
      "text": "bag",
      "audioPath": "audio/en/shopping_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_043",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "钱包",
      "text": "wallet",
      "audioPath": "audio/en/shopping_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_044",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "眼镜",
      "text": "glasses",
      "audioPath": "audio/en/shopping_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_045",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "太阳镜",
      "text": "sunglasses",
      "audioPath": "audio/en/shopping_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_046",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手表",
      "text": "watch",
      "audioPath": "audio/en/shopping_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_047",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "首饰",
      "text": "accessories",
      "audioPath": "audio/en/shopping_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_048",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "化妆品",
      "text": "cosmetics",
      "audioPath": "audio/en/shopping_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_049",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "护肤品",
      "text": "skincare",
      "audioPath": "audio/en/shopping_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_050",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "香水",
      "text": "perfume",
      "audioPath": "audio/en/shopping_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_051",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "口红",
      "text": "lipstick",
      "audioPath": "audio/en/shopping_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_052",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "洗面奶",
      "text": "facial cleanser",
      "audioPath": "audio/en/shopping_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_053",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "食品",
      "text": "food",
      "audioPath": "audio/en/shopping_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_054",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "饮料",
      "text": "drinks",
      "audioPath": "audio/en/shopping_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_055",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "零食",
      "text": "snacks",
      "audioPath": "audio/en/shopping_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_056",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "纪念品",
      "text": "souvenir",
      "audioPath": "audio/en/shopping_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_057",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "特产",
      "text": "local specialty",
      "audioPath": "audio/en/shopping_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_shopping_057_example",
        "zh": "这个特产需要冷藏吗？",
        "text": "Does this local specialty need to be refrigerated?"
      }
    },
    {
      "id": "shopping_058",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "玩具",
      "text": "toy",
      "audioPath": "audio/en/shopping_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_059",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "电子产品",
      "text": "electronics",
      "audioPath": "audio/en/shopping_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_060",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手机",
      "text": "mobile phone",
      "audioPath": "audio/en/shopping_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_061",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "充电器",
      "text": "charger",
      "audioPath": "audio/en/shopping_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_062",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "耳机",
      "text": "earphones",
      "audioPath": "audio/en/shopping_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_063",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "相机",
      "text": "camera",
      "audioPath": "audio/en/shopping_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_064",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "电池",
      "text": "battery",
      "audioPath": "audio/en/shopping_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_065",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "购物袋",
      "text": "shopping bag",
      "audioPath": "audio/en/shopping_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_066",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "环保袋",
      "text": "eco bag",
      "audioPath": "audio/en/shopping_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_067",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以退税吗？",
      "text": "Is this tax-free?",
      "audioPath": "audio/en/shopping_067.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_068",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "可以便宜一点吗？",
      "text": "Can you make it cheaper?",
      "audioPath": "audio/en/shopping_068.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_069",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我只是看看。",
      "text": "I'm just looking.",
      "audioPath": "audio/en/shopping_069.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_070",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我要这个。",
      "text": "I'll take this one.",
      "audioPath": "audio/en/shopping_070.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_071",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "可以刷卡吗？",
      "text": "Can I pay by card?",
      "audioPath": "audio/en/shopping_071.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_072",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有没有大一点的？",
      "text": "Do you have a bigger one?",
      "audioPath": "audio/en/shopping_072.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_073",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "可以试穿吗？",
      "text": "Can I try it on?",
      "audioPath": "audio/en/shopping_073.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_001",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "哪里",
      "text": "where",
      "audioPath": "audio/en/directions_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_001_example",
        "zh": "洗手间在哪里？",
        "text": "Where is the restroom?"
      }
    },
    {
      "id": "directions_002",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "这里",
      "text": "here",
      "audioPath": "audio/en/directions_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_002_example",
        "zh": "我们现在在这里。",
        "text": "We're right here."
      }
    },
    {
      "id": "directions_003",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "那里",
      "text": "over there",
      "audioPath": "audio/en/directions_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_003_example",
        "zh": "公交站就在那边。",
        "text": "The bus stop is over there."
      }
    },
    {
      "id": "directions_004",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "左边",
      "text": "left",
      "audioPath": "audio/en/directions_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_004_example",
        "zh": "银行在你的左边。",
        "text": "The bank will be on your left."
      }
    },
    {
      "id": "directions_005",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "右边",
      "text": "right",
      "audioPath": "audio/en/directions_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_005_example",
        "zh": "在红绿灯处向右转。",
        "text": "Turn right at the light."
      }
    },
    {
      "id": "directions_006",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "前面",
      "text": "front",
      "audioPath": "audio/en/directions_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_006_example",
        "zh": "出租车就在酒店前面。",
        "text": "The taxi is in front of the hotel."
      }
    },
    {
      "id": "directions_007",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "后面",
      "text": "back",
      "audioPath": "audio/en/directions_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_007_example",
        "zh": "停车场在大楼后面。",
        "text": "The parking lot is behind the building."
      }
    },
    {
      "id": "directions_008",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "旁边",
      "text": "next to",
      "audioPath": "audio/en/directions_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_008_example",
        "zh": "药店就在咖啡馆旁边。",
        "text": "The pharmacy is next to the cafe."
      }
    },
    {
      "id": "directions_009",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "对面",
      "text": "opposite",
      "audioPath": "audio/en/directions_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_009_example",
        "zh": "博物馆在公园对面。",
        "text": "The museum is across from the park."
      }
    },
    {
      "id": "directions_010",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "附近",
      "text": "nearby",
      "audioPath": "audio/en/directions_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_010_example",
        "zh": "附近有 ATM 吗？",
        "text": "Is there an ATM nearby?"
      }
    },
    {
      "id": "directions_011",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "word",
      "zh": "远",
      "text": "far",
      "audioPath": "audio/en/directions_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_011_example",
        "zh": "从这里走过去远吗？",
        "text": "Is it far to walk from here?"
      }
    },
    {
      "id": "directions_012",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "word",
      "zh": "近",
      "text": "near",
      "audioPath": "audio/en/directions_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_012_example",
        "zh": "火车站离这里很近。",
        "text": "The train station is close by."
      }
    },
    {
      "id": "directions_013",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "直走",
      "text": "straight",
      "audioPath": "audio/en/directions_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_013_example",
        "zh": "直走两个街区。",
        "text": "Go straight for two blocks."
      }
    },
    {
      "id": "directions_014",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "转弯",
      "text": "to turn",
      "audioPath": "audio/en/directions_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_014_example",
        "zh": "过桥后向左转。",
        "text": "Turn left after the bridge."
      }
    },
    {
      "id": "directions_015",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "十字路口",
      "text": "intersection",
      "audioPath": "audio/en/directions_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_015_example",
        "zh": "在下一个十字路口和我会合。",
        "text": "Meet me at the next intersection."
      }
    },
    {
      "id": "directions_016",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "桥",
      "text": "bridge",
      "audioPath": "audio/en/directions_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_016_example",
        "zh": "过桥后您会看到酒店。",
        "text": "You'll see the hotel after you cross the bridge."
      }
    },
    {
      "id": "directions_017",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "路",
      "text": "road",
      "audioPath": "audio/en/directions_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_017_example",
        "zh": "这条路通往国家公园吗？",
        "text": "Does this road lead to the national park?"
      }
    },
    {
      "id": "directions_018",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "街道",
      "text": "street",
      "audioPath": "audio/en/directions_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_018_example",
        "zh": "我们在第五大街上。",
        "text": "We're on Fifth Avenue."
      }
    },
    {
      "id": "directions_019",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "建筑",
      "text": "building",
      "audioPath": "audio/en/directions_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_019_example",
        "zh": "那座玻璃大楼就是图书馆。",
        "text": "The glass building is the library."
      }
    },
    {
      "id": "directions_020",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "派出所",
      "text": "police box",
      "audioPath": "audio/en/directions_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_directions_020_example",
        "zh": "最近的警察局在哪里？",
        "text": "Where is the nearest police station?"
      }
    },
    {
      "id": "directions_021",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "医院",
      "text": "hospital",
      "audioPath": "audio/en/directions_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_022",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "药店",
      "text": "pharmacy",
      "audioPath": "audio/en/directions_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_023",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "银行",
      "text": "bank",
      "audioPath": "audio/en/directions_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_024",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "邮局",
      "text": "post office",
      "audioPath": "audio/en/directions_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_025",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "厕所",
      "text": "toilet",
      "audioPath": "audio/en/directions_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_026",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "公交站",
      "text": "bus stop",
      "audioPath": "audio/en/directions_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_027",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "地铁站",
      "text": "subway station",
      "audioPath": "audio/en/directions_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_028",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "景点",
      "text": "tourist spot",
      "audioPath": "audio/en/directions_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_029",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "博物馆",
      "text": "museum",
      "audioPath": "audio/en/directions_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_030",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "公园",
      "text": "park",
      "audioPath": "audio/en/directions_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_031",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请问怎么走？",
      "text": "How do I get there?",
      "audioPath": "audio/en/directions_031.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_032",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "……在哪里？",
      "text": "Where is ...?",
      "audioPath": "audio/en/directions_032.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_033",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请带我去……",
      "text": "Please take me to ...",
      "audioPath": "audio/en/directions_033.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_034",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我要去……",
      "text": "I want to go to ...",
      "audioPath": "audio/en/directions_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_035",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "走路要几分钟？",
      "text": "How many minutes on foot?",
      "audioPath": "audio/en/directions_035.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_036",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "坐地铁能到吗？",
      "text": "Can I get there by subway?",
      "audioPath": "audio/en/directions_036.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_037",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我迷路了。",
      "text": "I'm lost.",
      "audioPath": "audio/en/directions_037.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_038",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请问现在在哪里？",
      "text": "Where am I now?",
      "audioPath": "audio/en/directions_038.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_039",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请在地图上指给我。",
      "text": "Please point on the map.",
      "audioPath": "audio/en/directions_039.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_040",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "能再说一遍吗？",
      "text": "Could you say it again?",
      "audioPath": "audio/en/directions_040.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_041",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "怎么去车站？",
      "text": "How do I get to the station?",
      "audioPath": "audio/en/directions_041.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_042",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "这是哪条路？",
      "text": "What street is this?",
      "audioPath": "audio/en/directions_042.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_043",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "洗手间在哪里？",
      "text": "Where is the restroom?",
      "audioPath": "audio/en/directions_043.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "numbers_001",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "零",
      "text": "zero",
      "audioPath": "audio/en/numbers_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_001_example",
        "zh": "这项服务没有额外费用。",
        "text": "There is zero extra charge for this service."
      }
    },
    {
      "id": "numbers_002",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "一",
      "text": "one",
      "audioPath": "audio/en/numbers_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_002_example",
        "zh": "我只需要一张票。",
        "text": "I only need one ticket."
      }
    },
    {
      "id": "numbers_003",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "二",
      "text": "two",
      "audioPath": "audio/en/numbers_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_003_example",
        "zh": "请给我们一张两人桌。",
        "text": "A table for two, please."
      }
    },
    {
      "id": "numbers_004",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "三",
      "text": "three",
      "audioPath": "audio/en/numbers_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_004_example",
        "zh": "我们住三个晚上。",
        "text": "We're staying for three nights."
      }
    },
    {
      "id": "numbers_005",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "四",
      "text": "four",
      "audioPath": "audio/en/numbers_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_005_example",
        "zh": "我们一行四个人。",
        "text": "There are four people in our group."
      }
    },
    {
      "id": "numbers_006",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "五",
      "text": "five",
      "audioPath": "audio/en/numbers_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_006_example",
        "zh": "步行只要五分钟。",
        "text": "It's only a five-minute walk."
      }
    },
    {
      "id": "numbers_007",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "六",
      "text": "six",
      "audioPath": "audio/en/numbers_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_007_example",
        "zh": "六岁以下儿童免费。",
        "text": "Children under six are free."
      }
    },
    {
      "id": "numbers_008",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "七",
      "text": "seven",
      "audioPath": "audio/en/numbers_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_008_example",
        "zh": "商店晚上七点关门。",
        "text": "The store closes at seven p.m."
      }
    },
    {
      "id": "numbers_009",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "八",
      "text": "eight",
      "audioPath": "audio/en/numbers_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_009_example",
        "zh": "早餐从早上八点开始。",
        "text": "Breakfast starts at eight a.m."
      }
    },
    {
      "id": "numbers_010",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "九",
      "text": "nine",
      "audioPath": "audio/en/numbers_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_010_example",
        "zh": "乘九路公交车去市中心。",
        "text": "Take bus number nine downtown."
      }
    },
    {
      "id": "numbers_011",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "十",
      "text": "ten",
      "audioPath": "audio/en/numbers_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_011_example",
        "zh": "最多需要十分钟。",
        "text": "It should take no more than ten minutes."
      }
    },
    {
      "id": "numbers_012",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "百",
      "text": "hundred",
      "audioPath": "audio/en/numbers_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_012_example",
        "zh": "这张钞票是一百美元。",
        "text": "This bill is one hundred dollars."
      }
    },
    {
      "id": "numbers_013",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "千",
      "text": "thousand",
      "audioPath": "audio/en/numbers_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_013_example",
        "zh": "租车押金是一千美元。",
        "text": "The rental car deposit is one thousand dollars."
      }
    },
    {
      "id": "numbers_014",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "万",
      "text": "ten thousand",
      "audioPath": "audio/en/numbers_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_014_example",
        "zh": "这个景点每年接待一万多名游客。",
        "text": "This attraction welcomes more than ten thousand visitors each year."
      }
    },
    {
      "id": "numbers_015",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "美元",
      "text": "U.S. dollar",
      "audioPath": "audio/en/numbers_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_015_example",
        "zh": "这家店只接受美元。",
        "text": "This store only accepts U.S. dollars."
      }
    },
    {
      "id": "numbers_016",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "美分",
      "text": "cent",
      "audioPath": "audio/en/numbers_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_016_example",
        "zh": "总价是十美元五十美分。",
        "text": "The total is ten dollars and fifty cents."
      }
    },
    {
      "id": "numbers_017",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "人民币",
      "text": "yuan",
      "audioPath": "audio/en/numbers_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_017_example",
        "zh": "我在哪里可以把人民币兑换成美元？",
        "text": "Where can I exchange yuan for dollars?"
      }
    },
    {
      "id": "numbers_018",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "今天",
      "text": "today",
      "audioPath": "audio/en/numbers_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_018_example",
        "zh": "今天还有去芝加哥的航班吗？",
        "text": "Are there any flights to Chicago today?"
      }
    },
    {
      "id": "numbers_019",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "明天",
      "text": "tomorrow",
      "audioPath": "audio/en/numbers_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_019_example",
        "zh": "我想预订明天上午的行程。",
        "text": "I'd like to book the trip for tomorrow morning."
      }
    },
    {
      "id": "numbers_020",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "昨天",
      "text": "yesterday",
      "audioPath": "audio/en/numbers_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_020_example",
        "zh": "我昨天把太阳镜落在出租车上了。",
        "text": "I left my sunglasses in a taxi yesterday."
      }
    },
    {
      "id": "numbers_021",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "后天",
      "text": "day after tomorrow",
      "audioPath": "audio/en/numbers_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_022",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "前天",
      "text": "day before yesterday",
      "audioPath": "audio/en/numbers_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_023",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "早上",
      "text": "morning",
      "audioPath": "audio/en/numbers_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_024",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "中午",
      "text": "noon",
      "audioPath": "audio/en/numbers_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_025",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "下午",
      "text": "afternoon",
      "audioPath": "audio/en/numbers_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_026",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "晚上",
      "text": "night",
      "audioPath": "audio/en/numbers_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_027",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "现在",
      "text": "now",
      "audioPath": "audio/en/numbers_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_028",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "时间",
      "text": "time",
      "audioPath": "audio/en/numbers_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_029",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一小时",
      "text": "one hour",
      "audioPath": "audio/en/numbers_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_030",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一分钟",
      "text": "one minute",
      "audioPath": "audio/en/numbers_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_031",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "秒",
      "text": "second",
      "audioPath": "audio/en/numbers_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_032",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "几点",
      "text": "what time",
      "audioPath": "audio/en/numbers_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_032_example",
        "zh": "早餐从几点开始？",
        "text": "What time does breakfast start?"
      }
    },
    {
      "id": "numbers_033",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期",
      "text": "day of the week",
      "audioPath": "audio/en/numbers_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_034",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期一",
      "text": "Monday",
      "audioPath": "audio/en/numbers_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_035",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期二",
      "text": "Tuesday",
      "audioPath": "audio/en/numbers_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_036",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期三",
      "text": "Wednesday",
      "audioPath": "audio/en/numbers_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_037",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期四",
      "text": "Thursday",
      "audioPath": "audio/en/numbers_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_038",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期五",
      "text": "Friday",
      "audioPath": "audio/en/numbers_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_039",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期六",
      "text": "Saturday",
      "audioPath": "audio/en/numbers_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_040",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期日",
      "text": "Sunday",
      "audioPath": "audio/en/numbers_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_041",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "周末",
      "text": "weekend",
      "audioPath": "audio/en/numbers_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_042",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "工作日",
      "text": "weekday",
      "audioPath": "audio/en/numbers_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_043",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "日期",
      "text": "date",
      "audioPath": "audio/en/numbers_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_044",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一月",
      "text": "January",
      "audioPath": "audio/en/numbers_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_045",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "二月",
      "text": "February",
      "audioPath": "audio/en/numbers_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_046",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "三月",
      "text": "March",
      "audioPath": "audio/en/numbers_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_047",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "四月",
      "text": "April",
      "audioPath": "audio/en/numbers_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_048",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "五月",
      "text": "May",
      "audioPath": "audio/en/numbers_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_049",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "六月",
      "text": "June",
      "audioPath": "audio/en/numbers_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_050",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "七月",
      "text": "July",
      "audioPath": "audio/en/numbers_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_051",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "八月",
      "text": "August",
      "audioPath": "audio/en/numbers_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_052",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "九月",
      "text": "September",
      "audioPath": "audio/en/numbers_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_053",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十月",
      "text": "October",
      "audioPath": "audio/en/numbers_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_054",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十一月",
      "text": "November",
      "audioPath": "audio/en/numbers_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_055",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十二月",
      "text": "December",
      "audioPath": "audio/en/numbers_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_056",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一日",
      "text": "1st",
      "audioPath": "audio/en/numbers_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_057",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "二日",
      "text": "2nd",
      "audioPath": "audio/en/numbers_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_058",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "三日",
      "text": "3rd",
      "audioPath": "audio/en/numbers_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_059",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "四日",
      "text": "4th",
      "audioPath": "audio/en/numbers_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_060",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "五日",
      "text": "5th",
      "audioPath": "audio/en/numbers_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_061",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "六日",
      "text": "6th",
      "audioPath": "audio/en/numbers_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_062",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "七日",
      "text": "7th",
      "audioPath": "audio/en/numbers_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_063",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "八日",
      "text": "8th",
      "audioPath": "audio/en/numbers_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_064",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "九日",
      "text": "9th",
      "audioPath": "audio/en/numbers_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_065",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十日",
      "text": "10th",
      "audioPath": "audio/en/numbers_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_066",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "今年",
      "text": "this year",
      "audioPath": "audio/en/numbers_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_067",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "去年",
      "text": "last year",
      "audioPath": "audio/en/numbers_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_068",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "明年",
      "text": "next year",
      "audioPath": "audio/en/numbers_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_069",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "这个月",
      "text": "this month",
      "audioPath": "audio/en/numbers_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_070",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "上个月",
      "text": "last month",
      "audioPath": "audio/en/numbers_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_071",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "下个月",
      "text": "next month",
      "audioPath": "audio/en/numbers_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_072",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "几点开门？",
      "text": "What time does it open?",
      "audioPath": "audio/en/numbers_072.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "numbers_073",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "现在几点？",
      "text": "What time is it now?",
      "audioPath": "audio/en/numbers_073.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "numbers_074",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "今天星期几？",
      "text": "What day is it today?",
      "audioPath": "audio/en/numbers_074.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "numbers_075",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "今天是几号？",
      "text": "What date is it today?",
      "audioPath": "audio/en/numbers_075.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "numbers_076",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "营业时间",
      "text": "business hours",
      "audioPath": "audio/en/numbers_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_077",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "开门",
      "text": "to open",
      "audioPath": "audio/en/numbers_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_077_example",
        "zh": "这家药店星期日也开门吗？",
        "text": "Is this pharmacy open on Sundays too?"
      }
    },
    {
      "id": "numbers_078",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "关门",
      "text": "to close",
      "audioPath": "audio/en/numbers_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_078_example",
        "zh": "博物馆几点关门？",
        "text": "What time does the museum close?"
      }
    },
    {
      "id": "numbers_079",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "每天",
      "text": "every day",
      "audioPath": "audio/en/numbers_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_080",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "有时",
      "text": "sometimes",
      "audioPath": "audio/en/numbers_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_081",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "经常",
      "text": "often",
      "audioPath": "audio/en/numbers_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_082",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "马上",
      "text": "soon",
      "audioPath": "audio/en/numbers_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_082_example",
        "zh": "巴士马上到吗？",
        "text": "Is the bus coming soon?"
      }
    },
    {
      "id": "numbers_083",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "稍等",
      "text": "wait a moment",
      "audioPath": "audio/en/numbers_083.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_001",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "救命",
      "text": "help",
      "audioPath": "audio/en/emergency_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_001_example",
        "zh": "救命！有人受伤了！",
        "text": "Help! Someone is hurt!"
      }
    },
    {
      "id": "emergency_002",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "紧急",
      "text": "emergency",
      "audioPath": "audio/en/emergency_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_002_example",
        "zh": "这是医疗紧急情况。",
        "text": "This is a medical emergency."
      }
    },
    {
      "id": "emergency_003",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "word",
      "zh": "报警",
      "text": "call the police",
      "audioPath": "audio/en/emergency_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_003_example",
        "zh": "请报警，我的钱包被偷了。",
        "text": "Please call the police. My wallet was stolen."
      }
    },
    {
      "id": "emergency_004",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "叫救护车",
      "text": "call an ambulance",
      "audioPath": "audio/en/emergency_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_004_example",
        "zh": "请叫救护车。",
        "text": "Please call an ambulance."
      }
    },
    {
      "id": "emergency_005",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "医生",
      "text": "doctor",
      "audioPath": "audio/en/emergency_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_005_example",
        "zh": "我今天需要看医生。",
        "text": "I need to see a doctor today."
      }
    },
    {
      "id": "emergency_006",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "护士",
      "text": "nurse",
      "audioPath": "audio/en/emergency_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_006_example",
        "zh": "护士会测量您的血压。",
        "text": "The nurse will check your blood pressure."
      }
    },
    {
      "id": "emergency_007",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药",
      "text": "medicine",
      "audioPath": "audio/en/emergency_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_007_example",
        "zh": "这种药多久服用一次？",
        "text": "How often should I take this medicine?"
      }
    },
    {
      "id": "emergency_008",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "处方",
      "text": "prescription",
      "audioPath": "audio/en/emergency_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_008_example",
        "zh": "在美国，这种药需要处方吗？",
        "text": "Do I need a prescription for this medicine in the U.S.?"
      }
    },
    {
      "id": "emergency_009",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "发烧",
      "text": "fever",
      "audioPath": "audio/en/emergency_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_009_example",
        "zh": "我从昨晚开始发烧。",
        "text": "I've had a fever since last night."
      }
    },
    {
      "id": "emergency_010",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "感冒",
      "text": "cold",
      "audioPath": "audio/en/emergency_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_010_example",
        "zh": "我可能只是感冒了。",
        "text": "I think I just have a cold."
      }
    },
    {
      "id": "emergency_011",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "咳嗽",
      "text": "cough",
      "audioPath": "audio/en/emergency_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_011_example",
        "zh": "这种咳嗽持续了三天。",
        "text": "I've had this cough for three days."
      }
    },
    {
      "id": "emergency_012",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "头疼",
      "text": "headache",
      "audioPath": "audio/en/emergency_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_012_example",
        "zh": "我头疼得很厉害。",
        "text": "I have a severe headache."
      }
    },
    {
      "id": "emergency_013",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "肚子疼",
      "text": "stomachache",
      "audioPath": "audio/en/emergency_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_013_example",
        "zh": "吃过晚饭后我开始胃疼。",
        "text": "My stomachache started after dinner."
      }
    },
    {
      "id": "emergency_014",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "牙疼",
      "text": "toothache",
      "audioPath": "audio/en/emergency_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_014_example",
        "zh": "我需要找急诊牙医治疗牙疼。",
        "text": "I need an emergency dentist for this toothache."
      }
    },
    {
      "id": "emergency_015",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "恶心",
      "text": "nausea",
      "audioPath": "audio/en/emergency_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_015_example",
        "zh": "这种药让我感到恶心。",
        "text": "This medicine is making me nauseous."
      }
    },
    {
      "id": "emergency_016",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "呕吐",
      "text": "vomiting",
      "audioPath": "audio/en/emergency_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_016_example",
        "zh": "我从早上起一直在呕吐。",
        "text": "I've been vomiting since this morning."
      }
    },
    {
      "id": "emergency_017",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "腹泻",
      "text": "diarrhea",
      "audioPath": "audio/en/emergency_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_017_example",
        "zh": "我旅行时开始腹泻。",
        "text": "I developed diarrhea while traveling."
      }
    },
    {
      "id": "emergency_018",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "便秘",
      "text": "constipation",
      "audioPath": "audio/en/emergency_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_018_example",
        "zh": "这会缓解便秘吗？",
        "text": "Will this help with constipation?"
      }
    },
    {
      "id": "emergency_019",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "受伤",
      "text": "injury",
      "audioPath": "audio/en/emergency_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_019_example",
        "zh": "我摔倒了，膝盖受伤。",
        "text": "I fell and injured my knee."
      }
    },
    {
      "id": "emergency_020",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "流血",
      "text": "bleeding",
      "audioPath": "audio/en/emergency_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_020_example",
        "zh": "伤口一直在流血。",
        "text": "The cut won't stop bleeding."
      }
    },
    {
      "id": "emergency_021",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "骨折",
      "text": "fracture",
      "audioPath": "audio/en/emergency_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_021_example",
        "zh": "我摔倒后脚踝可能骨折了。",
        "text": "I fell and may have fractured my ankle."
      }
    },
    {
      "id": "emergency_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "烫伤",
      "text": "burn",
      "audioPath": "audio/en/emergency_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_022_example",
        "zh": "我的手被热水烫伤了。",
        "text": "I burned my hand with hot water."
      }
    },
    {
      "id": "emergency_023",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "哮喘",
      "text": "asthma",
      "audioPath": "audio/en/emergency_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_023_example",
        "zh": "我有哮喘，现在呼吸有点困难。",
        "text": "I have asthma, and I'm having trouble breathing right now."
      }
    },
    {
      "id": "emergency_024",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药片",
      "text": "tablet",
      "audioPath": "audio/en/emergency_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_025",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药膏",
      "text": "ointment",
      "audioPath": "audio/en/emergency_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_026",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "创可贴",
      "text": "band-aid",
      "audioPath": "audio/en/emergency_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_027",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "绷带",
      "text": "bandage",
      "audioPath": "audio/en/emergency_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_028",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "体温计",
      "text": "thermometer",
      "audioPath": "audio/en/emergency_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_029",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "口罩",
      "text": "mask",
      "audioPath": "audio/en/emergency_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_030",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "消毒液",
      "text": "disinfectant",
      "audioPath": "audio/en/emergency_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_031",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "急救箱",
      "text": "first aid kit",
      "audioPath": "audio/en/emergency_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_032",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "word",
      "zh": "保险",
      "text": "insurance",
      "audioPath": "audio/en/emergency_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_032_example",
        "zh": "这家医院接受旅行保险吗？",
        "text": "Does this hospital accept travel insurance?"
      }
    },
    {
      "id": "emergency_033",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "word",
      "zh": "保险卡",
      "text": "insurance card",
      "audioPath": "audio/en/emergency_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_034",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我把护照弄丢了。",
      "text": "I lost my passport.",
      "audioPath": "audio/en/emergency_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_035",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我的钱包被偷了。",
      "text": "My wallet was stolen.",
      "audioPath": "audio/en/emergency_035.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_036",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "我需要帮助。",
      "text": "I need help.",
      "audioPath": "audio/en/emergency_036.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_037",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请叫警察。",
      "text": "Please call the police.",
      "audioPath": "audio/en/emergency_037.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_038",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请叫救护车。",
      "text": "Please call an ambulance.",
      "audioPath": "audio/en/emergency_038.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_039",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我不舒服。",
      "text": "I feel sick.",
      "audioPath": "audio/en/emergency_039.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_040",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我生病了。",
      "text": "I am ill.",
      "audioPath": "audio/en/emergency_040.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_041",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我对药物过敏。",
      "text": "I have a medication allergy.",
      "audioPath": "audio/en/emergency_041.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_042",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "哪里有药店？",
      "text": "Where is a pharmacy?",
      "audioPath": "audio/en/emergency_042.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_043",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "我需要看医生。",
      "text": "I need to see a doctor.",
      "audioPath": "audio/en/emergency_043.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_044",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "这很紧急。",
      "text": "This is an emergency.",
      "audioPath": "audio/en/emergency_044.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_001",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "谢谢",
      "text": "thank you",
      "audioPath": "audio/en/expressions_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_001_example",
        "zh": "谢谢你帮我指路。",
        "text": "Thank you for showing me the way."
      }
    },
    {
      "id": "expressions_002",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "非常感谢",
      "text": "thank you very much",
      "audioPath": "audio/en/expressions_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_002_example",
        "zh": "非常感谢您帮我找回护照。",
        "text": "Thank you very much for helping me find my passport."
      }
    },
    {
      "id": "expressions_003",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "不客气",
      "text": "you're welcome",
      "audioPath": "audio/en/expressions_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_003_example",
        "zh": "不客气，祝你旅途愉快。",
        "text": "You're welcome. Have a great trip."
      }
    },
    {
      "id": "expressions_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "请",
      "text": "please",
      "audioPath": "audio/en/expressions_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_004_example",
        "zh": "请在这里写下您的名字。",
        "text": "Please write your name here."
      }
    },
    {
      "id": "expressions_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "对不起",
      "text": "excuse me / sorry",
      "audioPath": "audio/en/expressions_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_005_example",
        "zh": "不好意思，请问出口在哪里？",
        "text": "Excuse me, where is the exit?"
      }
    },
    {
      "id": "expressions_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "抱歉",
      "text": "I'm sorry",
      "audioPath": "audio/en/expressions_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_006_example",
        "zh": "抱歉，我不小心碰倒了杯子。",
        "text": "I'm sorry, I accidentally knocked over the glass."
      }
    },
    {
      "id": "expressions_007",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "你好",
      "text": "hello",
      "audioPath": "audio/en/expressions_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_007_example",
        "zh": "你好，我预订了一个房间。",
        "text": "Hello, I have a room reservation."
      }
    },
    {
      "id": "expressions_008",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "早上好",
      "text": "good morning",
      "audioPath": "audio/en/expressions_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_008_example",
        "zh": "早上好，早餐几点开始？",
        "text": "Good morning. What time does breakfast start?"
      }
    },
    {
      "id": "expressions_009",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "晚上好",
      "text": "good evening",
      "audioPath": "audio/en/expressions_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_009_example",
        "zh": "晚上好，我现在可以办理入住吗？",
        "text": "Good evening. Can I check in now?"
      }
    },
    {
      "id": "expressions_010",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "再见",
      "text": "goodbye",
      "audioPath": "audio/en/expressions_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_010_example",
        "zh": "再见，祝您旅途愉快。",
        "text": "Goodbye. Have a pleasant trip."
      }
    },
    {
      "id": "expressions_011",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "回头见",
      "text": "see you later",
      "audioPath": "audio/en/expressions_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_011_example",
        "zh": "回头见，我们晚饭时在大堂集合。",
        "text": "See you later. Let’s meet in the lobby at dinner time."
      }
    },
    {
      "id": "expressions_012",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "晚安",
      "text": "good night",
      "audioPath": "audio/en/expressions_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_012_example",
        "zh": "晚安，明天见。",
        "text": "Good night. See you tomorrow."
      }
    },
    {
      "id": "expressions_013",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "欢迎光临",
      "text": "welcome",
      "audioPath": "audio/en/expressions_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_013_example",
        "zh": "欢迎光临，请问您预订了吗？",
        "text": "Welcome. Do you have a reservation?"
      }
    },
    {
      "id": "expressions_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我明白了",
      "text": "I understand",
      "audioPath": "audio/en/expressions_014.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_015",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我不明白",
      "text": "I don't understand",
      "audioPath": "audio/en/expressions_015.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_016",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "是的",
      "text": "yes",
      "audioPath": "audio/en/expressions_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_016_example",
        "zh": "是的，我订了两晚。",
        "text": "Yes, I booked two nights."
      }
    },
    {
      "id": "expressions_017",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "不是",
      "text": "no",
      "audioPath": "audio/en/expressions_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_017_example",
        "zh": "不是，这不是我的行李。",
        "text": "No, this is not my luggage."
      }
    },
    {
      "id": "expressions_018",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "可以",
      "text": "okay",
      "audioPath": "audio/en/expressions_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_018_example",
        "zh": "我现在可以进房间了吗？",
        "text": "Is it okay for me to go into the room now?"
      }
    },
    {
      "id": "expressions_019",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "没关系",
      "text": "it's okay",
      "audioPath": "audio/en/expressions_019.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_020",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "没问题",
      "text": "no problem",
      "audioPath": "audio/en/expressions_020.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_021",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "好的",
      "text": "OK",
      "audioPath": "audio/en/expressions_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_021_example",
        "zh": "好的，我会在八点到大堂。",
        "text": "OK, I’ll be in the lobby at eight."
      }
    },
    {
      "id": "expressions_022",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我喜欢",
      "text": "I like it",
      "audioPath": "audio/en/expressions_022.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_023",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我不喜欢",
      "text": "I don't like it",
      "audioPath": "audio/en/expressions_023.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_024",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "想要",
      "text": "want",
      "audioPath": "audio/en/expressions_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_024_example",
        "zh": "我想要一间安静的房间。",
        "text": "I'd like a quiet room."
      }
    },
    {
      "id": "expressions_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "需要",
      "text": "need",
      "audioPath": "audio/en/expressions_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_025_example",
        "zh": "办理入住需要护照吗？",
        "text": "Do I need my passport to check in?"
      }
    },
    {
      "id": "expressions_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "有",
      "text": "there is / have",
      "audioPath": "audio/en/expressions_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_026_example",
        "zh": "今晚还有空房吗？",
        "text": "Do you have any rooms available tonight?"
      }
    },
    {
      "id": "expressions_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "没有",
      "text": "there isn't / don't have",
      "audioPath": "audio/en/expressions_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_027_example",
        "zh": "现在没有空房。",
        "text": "There are no rooms available right now."
      }
    },
    {
      "id": "expressions_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "是",
      "text": "is",
      "audioPath": "audio/en/expressions_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_expressions_028_example",
        "zh": "是的，这张票是去机场的。",
        "text": "Yes, this is the ticket for the airport."
      }
    },
    {
      "id": "expressions_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不是",
      "text": "is not",
      "audioPath": "audio/en/expressions_029.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_030",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我叫……",
      "text": "my name is ...",
      "audioPath": "audio/en/expressions_030.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_031",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "你叫什么名字？",
      "text": "What is your name?",
      "audioPath": "audio/en/expressions_031.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_032",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我是中国人。",
      "text": "I am Chinese.",
      "audioPath": "audio/en/expressions_032.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_033",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "你会说英语吗？",
      "text": "Can you speak English?",
      "audioPath": "audio/en/expressions_033.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_034",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请说慢一点。",
      "text": "Please speak slowly.",
      "audioPath": "audio/en/expressions_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_035",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请再说一遍。",
      "text": "Please say it again.",
      "audioPath": "audio/en/expressions_035.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_036",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "什么意思？",
      "text": "What does it mean?",
      "audioPath": "audio/en/expressions_036.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_037",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "怎么读？",
      "text": "How do you read it?",
      "audioPath": "audio/en/expressions_037.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_038",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "怎么写？",
      "text": "How do you write it?",
      "audioPath": "audio/en/expressions_038.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_039",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "多少钱？",
      "text": "How much is it?",
      "audioPath": "audio/en/expressions_039.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_040",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "在哪里？",
      "text": "Where is it?",
      "audioPath": "audio/en/expressions_040.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_041",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "什么时候？",
      "text": "When is it?",
      "audioPath": "audio/en/expressions_041.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_042",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "为什么？",
      "text": "Why?",
      "audioPath": "audio/en/expressions_042.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_043",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "怎么办？",
      "text": "What should I do?",
      "audioPath": "audio/en/expressions_043.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_044",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以吗？",
      "text": "Is it okay?",
      "audioPath": "audio/en/expressions_044.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_045",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以。",
      "text": "It's fine.",
      "audioPath": "audio/en/expressions_045.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_046",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不行。",
      "text": "No / not allowed.",
      "audioPath": "audio/en/expressions_046.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_047",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "有中文吗？",
      "text": "Do you have Chinese?",
      "audioPath": "audio/en/expressions_047.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "en_airport_phrase_001",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "请问护照检查在哪里？",
      "text": "Where is passport control?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_002",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我的签证有问题，可以帮我吗？",
      "text": "I have a visa problem, can you help me?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_airport_phrase_003",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "可以确认一下机票上的日期吗？",
      "text": "Can you check the date on my ticket?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_004",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我的航班从哪个航站楼出发？",
      "text": "Which terminal does my flight depart from?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_airport_phrase_005",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "这张登机牌可以用吗？",
      "text": "Is this boarding pass valid?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_006",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "值机柜台在哪里？",
      "text": "Where is the check-in desk?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_007",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "我想换一个座位。",
      "text": "I would like to change seats.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_airport_phrase_008",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "还有靠窗的座位吗？",
      "text": "Is there a window seat left?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_009",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "可以给我一个靠过道的座位吗？",
      "text": "Can you give me a seat next to the aisle?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_airport_phrase_010",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "我可以免费托运几件行李？",
      "text": "How many pieces of luggage can I check in for free?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_011",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "我的行李箱在运输中损坏了。",
      "text": "My suitcase was damaged during the trip.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_012",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "这件行李可以带进客舱吗？",
      "text": "Can I carry this luggage in the cabin?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_airport_phrase_013",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "这个航班的行李在几号转盘？",
      "text": "Which carousel will the baggage from this flight arrive at?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_014",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "哪里可以找到行李推车？",
      "text": "Where can I find a luggage cart?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_airport_phrase_015",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "这是排队过安检的队伍吗？",
      "text": "Is this the line for the security checkpoint?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_airport_phrase_016",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "免税店在安检后面吗？",
      "text": "Is the duty-free shop past security?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_017",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "候机区有充电插座吗？",
      "text": "Are there charging outlets in the gate area?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_airport_phrase_018",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "过安检时要取出电脑吗？",
      "text": "Do I need to take my laptop out at security?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_019",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "您的航班延误了四十五分钟。",
      "text": "Your flight has been delayed by forty-five minutes.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_airport_phrase_020",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "登机口已改到B12。",
      "text": "Your gate has changed to B12.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_airport_phrase_021",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请把笔记本电脑从包里取出。",
      "text": "Please take your laptop out of your bag.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_airport_phrase_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "登机时间是几点？",
      "text": "What time is boarding?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "现在开始登机。",
      "text": "We are now boarding.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_airport_phrase_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "我已经在线提交了海关申报。",
      "text": "I have already submitted the customs declaration online.",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_airport_phrase_025",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "我需要申报这些物品吗？",
      "text": "Do I have to declare these items to customs?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_026",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "您的行李超重了。",
      "text": "Your bag is overweight.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_airport_phrase_027",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "预计几点着陆？",
      "text": "What time are we expected to land?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_airport_phrase_028",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "请出示护照和登机牌。",
      "text": "May I see your passport and boarding pass?",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_airport_phrase_029",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "这是本次航班的最后登机通知。",
      "text": "This is the final boarding call for your flight.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_airport_phrase_030",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "您的行李会在五号转盘出来。",
      "text": "Your luggage will arrive at carousel five.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_transport_phrase_001",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "可以直接刷非接触式银行卡乘车吗？",
      "text": "Can I tap a contactless card to pay the fare?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_transport_phrase_002",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "去市中心应该在哪一站下车？",
      "text": "What station do I have to get off at to go downtown?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_transport_phrase_003",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "去纽约的火车从哪个站台出发？",
      "text": "Which platform does the train to New York leave from?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_004",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "下一班车几点出发？",
      "text": "What time does the next train leave?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_transport_phrase_005",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "请给我一张去华盛顿的单程票。",
      "text": "One one-way ticket to Washington, please.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_transport_phrase_006",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "最近的地铁入口在哪里？",
      "text": "Where is the nearest subway entrance?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_transport_phrase_007",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "这辆公交车去机场吗？",
      "text": "Does this bus go to the airport?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_transport_phrase_008",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "我需要换乘地铁吗？",
      "text": "Do I have to transfer on the subway?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_009",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "公交车票可以上车后买吗？",
      "text": "Can I buy a ticket after I get on the bus?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_transport_phrase_010",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "最后一班地铁是几点？",
      "text": "What time is the last subway train?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_transport_phrase_011",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "去波士顿的火车在哪里乘坐？",
      "text": "Where do I board the train to Boston?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_transport_phrase_012",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "我错过了火车，可以改签吗？",
      "text": "I missed my train. Can I change my ticket?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_transport_phrase_013",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "这趟火车需要预订座位吗？",
      "text": "Do I have to reserve a seat on this train?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_014",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "这是直达列车吗？",
      "text": "Is this a direct train?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_transport_phrase_015",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "火车会在哪些车站停靠？",
      "text": "What stations does the train stop at?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_transport_phrase_016",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "网约车上车点在哪里？",
      "text": "Where is the rideshare pickup area?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_transport_phrase_017",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "可以帮我叫一辆出租车吗？",
      "text": "Can you call me a taxi?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_transport_phrase_018",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "出租车可以刷卡吗？",
      "text": "Can I pay for the taxi by card?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_019",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "这张票九十分钟内有效。",
      "text": "This ticket is valid for ninety minutes.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_transport_phrase_020",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "下一站是中央车站。",
      "text": "The next stop is Central Station.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_transport_phrase_021",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "末班车已经开走了。",
      "text": "The last train has already left.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_transport_phrase_022",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "在哪里办理租车手续？",
      "text": "Where do I pick up my rental car?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_023",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请在三号站台换乘。",
      "text": "Please transfer at platform three.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_transport_phrase_024",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "这里可以停车吗？",
      "text": "Can I park here?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_025",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "在红绿灯处右转。",
      "text": "Turn right at the traffic light.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_026",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "下车时也请刷交通卡。",
      "text": "Please tap your transit card when you get off as well.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_transport_phrase_027",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "我预订了一辆租赁汽车。",
      "text": "I have reserved a rental car.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_transport_phrase_028",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "到机场的车费大约是四十美元。",
      "text": "The fare to the airport is about forty dollars.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_transport_phrase_029",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "请在下一站下车。",
      "text": "Please get off at the next stop.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_transport_phrase_030",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "今天这条线路暂停运营。",
      "text": "This line is not running today.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_hotel_phrase_001",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "请问酒店前台在哪里？",
      "text": "Where is the hotel front desk?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_002",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "我想预订一家汽车旅馆。",
      "text": "I'd like to book a room at a motel.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_hotel_phrase_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "这家旅游住宿可以寄存行李吗？",
      "text": "Can this hotel store my luggage?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_004",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "我可以在前台办理入住吗？",
      "text": "Can I check in at the front desk?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_hotel_phrase_005",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "请帮我查一下这个姓名下的预订。",
      "text": "Could you look up the reservation under this name?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_006",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "最早几点可以入住？",
      "text": "What is the earliest time I can check in?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_007",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我把房间钥匙弄丢了。",
      "text": "I have lost the room key.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_hotel_phrase_008",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我的房卡失效了。",
      "text": "My key card isn't working.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_009",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "可以请人帮我拿行李吗？",
      "text": "Could someone help me with my luggage?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_hotel_phrase_010",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我需要找一位工作人员。",
      "text": "I need to speak to someone on staff.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_011",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "可以再送两条毛巾吗？",
      "text": "Can you bring me two more towels?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_012",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "请更换一下床单。",
      "text": "Can you change the sheets please?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_hotel_phrase_013",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "可以再给我一个枕头吗？",
      "text": "Can you bring me another pillow?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_014",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "被子不够暖和。",
      "text": "The comforter isn't warm enough.",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_hotel_phrase_015",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "可以晚一点退房吗？",
      "text": "Could I get a late checkout?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_hotel_phrase_016",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "今天不用打扫房间。",
      "text": "I don't need housekeeping today.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_017",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请明早七点叫醒我。",
      "text": "Could I get a wake-up call at seven tomorrow morning?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_hotel_phrase_018",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "洗衣服务什么时候送回来？",
      "text": "When will my laundry be returned?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_019",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "您的房间在八楼。",
      "text": "Your room is on the eighth floor.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_hotel_phrase_020",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "早餐时间是六点半到十点。",
      "text": "Breakfast is served from six thirty to ten.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_hotel_phrase_021",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "Wi-Fi密码写在房卡套上。",
      "text": "The Wi-Fi password is on your key-card holder.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_hotel_phrase_022",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "烟雾报警器一直在响。",
      "text": "The smoke detector does not stop ringing.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_023",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "房间还没准备好。",
      "text": "Your room is not ready yet.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_hotel_phrase_024",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我想要一间朝内院的安静房间。",
      "text": "I'd like a quiet room facing the courtyard.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_025",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "隔壁房间太吵了。",
      "text": "The room next door is too noisy.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_026",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我们可以免费寄存行李。",
      "text": "We can store your luggage free of charge.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_hotel_phrase_027",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "我现在想办理退房。",
      "text": "I'd like to check out now.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_hotel_phrase_028",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "延迟退房需要额外收费。",
      "text": "There is an extra charge for late checkout.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_hotel_phrase_029",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "请在这里签名。",
      "text": "Please sign here.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_hotel_phrase_030",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "电梯在前台右边。",
      "text": "The elevator is to the right of the front desk.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_food_phrase_001",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "早餐几点开始供应？",
      "text": "What time does breakfast start?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_002",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "午餐有套餐吗？",
      "text": "Do you have a lunch special?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_food_phrase_003",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "我想预订今晚八点的晚餐。",
      "text": "I would like to reserve a table for dinner at eight.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_004",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "劳驾，我们可以点餐了吗？",
      "text": "Excuse me, can we order now?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_food_phrase_005",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "请给我看一下菜单。",
      "text": "Could I see the menu, please?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_006",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "米饭可以换成沙拉吗？",
      "text": "Can I change the rice for a salad?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_007",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "可以再给我们一些面包吗？",
      "text": "Can you bring us some more bread?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_food_phrase_008",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "剩下的可以打包吗？",
      "text": "Can you give me what's left to take away?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_food_phrase_009",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请给我一瓶不带气的水。",
      "text": "A bottle of still water, please.",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_food_phrase_010",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "可以给我一杯热水吗？",
      "text": "Could I have a cup of hot water?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_011",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "你们有什么茶？",
      "text": "What types of tea do you have?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_012",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请给我一杯少量牛奶的咖啡。",
      "text": "A coffee with just a little milk, please.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_food_phrase_013",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "有不含乳糖的牛奶吗？",
      "text": "Do you have lactose-free milk?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_014",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "这道菜可以少放盐吗？",
      "text": "Can you prepare this dish with little salt?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_food_phrase_015",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "咖啡请不要加糖。",
      "text": "Coffee without sugar, please.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_016",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "有不含酱油的菜吗？",
      "text": "Are there any dishes without soy sauce?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_017",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请另外给我一点醋。",
      "text": "Could I have some vinegar on the side?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_food_phrase_018",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请不要放胡椒。",
      "text": "No pepper, please.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_019",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "这道菜含有花生。",
      "text": "This dish contains peanuts.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_food_phrase_020",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "这份汤不是素食。",
      "text": "This soup is not vegetarian.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_food_phrase_021",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "今天的特色菜是烤鱼。",
      "text": "Today's special is grilled fish.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_food_phrase_022",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "可以把配菜换成沙拉吗？",
      "text": "Could I substitute a salad for the side?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_023",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "饮用水需要另外付费。",
      "text": "There is a charge for drinking water.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_food_phrase_024",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "这个鸡蛋是全熟的吗？",
      "text": "Is the egg fully cooked?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_025",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "我不吃肉。",
      "text": "I don't eat meat.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_026",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "您的菜大约十五分钟后上。",
      "text": "Your food will be ready in about fifteen minutes.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_food_phrase_027",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "服务费已经包含在账单里了吗？",
      "text": "Is the service included in the bill?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_food_phrase_028",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "这份可以做成不辣的。",
      "text": "We can make this without spice.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_food_phrase_029",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "账单里已经包含服务费。",
      "text": "The service charge is already included.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_food_phrase_030",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "我们可以为您分开结账。",
      "text": "We can split the bill for you.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_shopping_phrase_001",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "请问商店入口在哪里？",
      "text": "Where is the entrance to the store?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_002",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "百货商店今天营业吗？",
      "text": "Is the department store open today?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_shopping_phrase_003",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "这附近有大型超市吗？",
      "text": "Is there a large supermarket nearby?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_004",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "便利店是二十四小时营业吗？",
      "text": "Is the convenience store open twenty-four hours?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_shopping_phrase_005",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "周末市场几点开始？",
      "text": "What time does the market start on the weekend?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_006",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "这件衣服有我的尺码吗？",
      "text": "Do you have this garment in my size?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_007",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "可以给我大一码的吗？",
      "text": "Can you give me a bigger size?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_shopping_phrase_008",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "这件是中码吗？",
      "text": "Is this the medium size?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_009",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有没有小一码的？",
      "text": "Do you have a smaller size?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_shopping_phrase_010",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "可以帮我量一下尺码吗？",
      "text": "Can you help me choose the size?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_011",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试衣间在哪里？",
      "text": "Where are the fitting rooms?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_012",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "我可以试穿这件外套吗？",
      "text": "Can I try this coat?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_shopping_phrase_013",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试衣间需要排队吗？",
      "text": "Do I have to wait in line for the fitting room?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_014",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试穿后放在哪里？",
      "text": "Where do I leave the clothes after trying them on?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_shopping_phrase_015",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试衣间里最多可以拿几件？",
      "text": "How many items can I bring to the fitting room?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_016",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "请问这件商品多少钱？",
      "text": "How much does this item cost?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_017",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "标签上标的是最终价格吗？",
      "text": "Is the sticker price the final price?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_shopping_phrase_018",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "这个对我来说太贵了。",
      "text": "This is too expensive for me.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_019",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "这个尺码已经缺货了。",
      "text": "That size is out of stock.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_shopping_phrase_020",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "退货需要出示收据。",
      "text": "You need the receipt to return this item.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_shopping_phrase_021",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "退款会原路退回。",
      "text": "The refund will go back to your original payment method.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_shopping_phrase_022",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "这张银行卡为什么不能用？",
      "text": "Why isn't this debit card working?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_023",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "这件商品不能退税。",
      "text": "This item is not eligible for a tax refund.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_shopping_phrase_024",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请把购物小票给我。",
      "text": "Could I have the receipt, please?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_025",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "退货时需要购物小票吗？",
      "text": "Do I need the receipt to return this?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_026",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请输入银行卡PIN码。",
      "text": "Please enter your card PIN.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_shopping_phrase_027",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "我把购物小票弄丢了。",
      "text": "I lost the receipt.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_shopping_phrase_028",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "这里支持非接触支付。",
      "text": "We accept contactless payment here.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_shopping_phrase_029",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "折扣商品不能换货。",
      "text": "Sale items cannot be exchanged.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_shopping_phrase_030",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "您可以在二楼办理退税。",
      "text": "You can claim your tax refund on the second floor.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_directions_phrase_001",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "请问游客服务中心在哪里？",
      "text": "Where is the visitor information center?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_002",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "我们现在是在地图上的这里吗？",
      "text": "Are we here on the map?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_directions_phrase_003",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "您说的是那边那栋楼吗？",
      "text": "Are you referring to that building over there?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_004",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "下一个路口要左转吗？",
      "text": "Do I have to turn left at the next intersection?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_directions_phrase_005",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "车站在道路右侧吗？",
      "text": "Is the station on the right?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_006",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "博物馆就在我们前面吗？",
      "text": "Is the museum right in front of us?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_007",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "停车场在酒店后面。",
      "text": "The parking lot is behind the hotel.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_directions_phrase_008",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "药店就在银行旁边。",
      "text": "The pharmacy is next to the bank.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_009",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "邮局在公园对面。",
      "text": "The post office is across from the park.",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_directions_phrase_010",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "附近有地铁站吗？",
      "text": "Is there a subway station nearby?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_011",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "机场离这里有多远？",
      "text": "How far is the airport?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_012",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "走路很近吗？",
      "text": "Is it close to walk?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_directions_phrase_013",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "坐公交车去很远吗？",
      "text": "Is it far to go by bus?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_014",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "最近的药店是哪一家？",
      "text": "What is the nearest pharmacy?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_directions_phrase_015",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "车站很远，最好坐地铁。",
      "text": "The station is far away; It is better to go by subway.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_016",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "这附近有什么景点？",
      "text": "What places of interest are nearby?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_017",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "步行过去会不会太远？",
      "text": "Is it too far to walk?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_directions_phrase_018",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "最近的公共洗手间在哪里？",
      "text": "Where is the nearest public restroom?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_directions_phrase_019",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "一直走到第二个路口。",
      "text": "Go straight to the second intersection.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_directions_phrase_020",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "在红绿灯处左转。",
      "text": "Turn left at the traffic light.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_directions_phrase_021",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "车站就在银行对面。",
      "text": "The station is across from the bank.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_directions_phrase_022",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "我要找的是一栋白色建筑。",
      "text": "I'm looking for a white building.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_023",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "步行大约需要十分钟。",
      "text": "It is about a ten-minute walk.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_directions_phrase_024",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "邮局离这里远吗？",
      "text": "Is the post office far from here?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_025",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "这附近有公共厕所吗？",
      "text": "Is there a public restroom nearby?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_026",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "过桥后您会看到博物馆。",
      "text": "You will see the museum after you cross the bridge.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_directions_phrase_027",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "最近的地铁站有电梯吗？",
      "text": "Does the nearest subway station have an elevator?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_directions_phrase_028",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "您走错方向了。",
      "text": "You are going the wrong way.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_directions_phrase_029",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "入口在大楼后面。",
      "text": "The entrance is behind the building.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_directions_phrase_030",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "这条路现在封闭了。",
      "text": "This road is closed right now.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_emergency_phrase_001",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我发烧了，需要看医生。",
      "text": "I have a fever and need to see a doctor.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_002",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "附近有二十四小时药店吗？",
      "text": "Is there a 24-hour pharmacy nearby?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_emergency_phrase_003",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "这种咳嗽药一天吃几次？",
      "text": "How many times a day do you take this cough medicine?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_004",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我头疼得很厉害。",
      "text": "My head hurts a lot.",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_emergency_phrase_005",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我从昨晚开始胃痛。",
      "text": "My stomach hurts since last night.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_006",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "附近有值班药店吗？",
      "text": "Is there a pharmacy on duty nearby?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_emergency_phrase_007",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "可以请护士来看一下吗？",
      "text": "Can a nurse come see me?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_emergency_phrase_008",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "这种药需要处方吗？",
      "text": "Do I need a prescription for this medication?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_009",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "在哪里可以配这张处方？",
      "text": "Where can I get this prescription filled?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_emergency_phrase_010",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "这药片需要饭后吃吗？",
      "text": "Do I have to take this pill after eating?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_011",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "这种药膏一天涂几次？",
      "text": "How many times a day do I have to apply this ointment?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_012",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "我的手机丢了，需要报警。",
      "text": "I lost my phone and need to file a police report.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_emergency_phrase_013",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "我应该去哪个警察局报案？",
      "text": "Which police station should I go to to file a report?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_014",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "我需要一份报案证明。",
      "text": "I need a copy of the police report.",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_emergency_phrase_015",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "有人偷了我的背包。",
      "text": "My backpack has been stolen.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_016",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请帮我联系警察。",
      "text": "Help me contact the police please.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_017",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我腹泻了两天。",
      "text": "I have had diarrhea for two days.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_emergency_phrase_018",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "这种药会引起便秘吗？",
      "text": "Can this medicine cause constipation?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_019",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "救护车已经在路上了。",
      "text": "The ambulance is on its way.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_emergency_phrase_020",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请不要移动伤者。",
      "text": "Please do not move the injured person.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_emergency_phrase_021",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "最近的急诊室在两公里外。",
      "text": "The nearest emergency room is two kilometers away.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_emergency_phrase_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "救命，有人昏倒了！",
      "text": "Help, someone has fainted!",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_023",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请告诉我您哪里疼。",
      "text": "Please tell me where it hurts.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_emergency_phrase_024",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请拨打911叫救护车。",
      "text": "Please call 911 for an ambulance.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_025",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "我摔倒后受伤了。",
      "text": "I hurt myself when I fell.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_026",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "您的护照已送到失物招领处。",
      "text": "Your passport has been taken to the lost and found.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_emergency_phrase_027",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "我的旅行保险涵盖这项治疗吗？",
      "text": "Does my travel insurance cover this treatment?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_emergency_phrase_028",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "请在这里填写报失单。",
      "text": "Please fill out a loss report here.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_emergency_phrase_029",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "请保持清醒并慢慢呼吸。",
      "text": "Stay awake and breathe slowly.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_emergency_phrase_030",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "警察大约十分钟后到。",
      "text": "The police will arrive in about ten minutes.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_basics_phrase_001",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "你好，请问你会说英语吗？",
      "text": "Hello, do you speak English?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_002",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "早上好，我有一个预订。",
      "text": "Good morning, I have a reservation.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_basics_phrase_003",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "晚上好，还有空桌吗？",
      "text": "Good evening, do you have a table available?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "谢谢您的帮助。",
      "text": "Thanks for your help.",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_basics_phrase_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "真的非常感谢。",
      "text": "Thanks a lot.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "不客气，祝您愉快。",
      "text": "You're welcome, have a good day.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_007",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "劳驾，请给我一张地图。",
      "text": "A map, please.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_basics_phrase_008",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "请给我七张票。",
      "text": "Seven tickets, please.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_009",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我们八点见。",
      "text": "See you at eight.",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_basics_phrase_010",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "火车从九号站台出发。",
      "text": "The train leaves platform nine.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_011",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "步行需要十分钟。",
      "text": "It takes ten minutes to walk.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_012",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "可以把地址发到我的手机上吗？",
      "text": "Could you text the address to my phone?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_basics_phrase_013",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "这个小镇有一千多年的历史。",
      "text": "This town has more than a thousand years of history.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "这里大约有一万人。",
      "text": "About ten thousand people live here.",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_basics_phrase_015",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "这里可以把日元换成美元吗？",
      "text": "Can I exchange yen for dollars here?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_016",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我想兑换一些美元。",
      "text": "I'd like to exchange some money for U.S. dollars.",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_017",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "可以把人民币换成美元吗？",
      "text": "Can I exchange Chinese yuan for U.S. dollars?",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_basics_phrase_018",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "费用是零美元。",
      "text": "The fee is zero dollars.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_019",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "我会说一点英语。",
      "text": "I speak a little English.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_basics_phrase_020",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "请稍等一下。",
      "text": "Please wait a moment.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_basics_phrase_021",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "这个词的意思是入口。",
      "text": "This word means entrance.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_basics_phrase_022",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "我们明天去芝加哥。",
      "text": "We're going to Chicago tomorrow.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_023",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "您可以在这里购买SIM卡。",
      "text": "You can buy a SIM card here.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_basics_phrase_024",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "我们后天回来。",
      "text": "We'll be back the day after tomorrow.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "是的，我有预订。",
      "text": "Yes, I have a reservation.",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "这张eSIM会立即开通。",
      "text": "This eSIM will activate immediately.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_basics_phrase_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "好的，我们走吧。",
      "text": "Okay, let's go.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_basics_phrase_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "您的余额不足。",
      "text": "Your balance is too low.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_basics_phrase_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "充值后请重启手机。",
      "text": "Please restart your phone after topping up.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "en_basics_phrase_030",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "没问题，我可以写下来。",
      "text": "No problem, I can write it down for you.",
      "direction": "traveler-hears",
      "intent": "understand"
    },
    {
      "id": "transport_001",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "交通卡",
      "text": "transit card",
      "audioPath": "audio/en/transport_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "transport_002",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "末班车",
      "text": "last train",
      "audioPath": "audio/en/transport_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "transport_003",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "下一站",
      "text": "next stop",
      "audioPath": "audio/en/transport_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "transport_004",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "终点站",
      "text": "last stop",
      "audioPath": "audio/en/transport_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "transport_005",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "word",
      "zh": "换乘",
      "text": "transfer",
      "audioPath": "audio/en/transport_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_083",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "Wi-Fi密码",
      "text": "Wi-Fi password",
      "audioPath": "audio/en/hotel_083.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_084",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "提前入住",
      "text": "early check-in",
      "audioPath": "audio/en/hotel_084.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_085",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "延迟退房",
      "text": "late checkout",
      "audioPath": "audio/en/hotel_085.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_086",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "自助入住",
      "text": "self check-in",
      "audioPath": "audio/en/hotel_086.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_097",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "纯素",
      "text": "vegan",
      "audioPath": "audio/en/food_097.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_097_example",
        "zh": "请问有纯素菜品吗？",
        "text": "Do you have any vegan dishes?"
      }
    },
    {
      "id": "food_098",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "清真",
      "text": "halal",
      "audioPath": "audio/en/food_098.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_098_example",
        "zh": "这道菜是清真的吗？",
        "text": "Is this dish halal?"
      }
    },
    {
      "id": "food_099",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "无麸质",
      "text": "gluten-free",
      "audioPath": "audio/en/food_099.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_099_example",
        "zh": "有无麸质的面包吗？",
        "text": "Do you have gluten-free bread?"
      }
    },
    {
      "id": "food_100",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "乳糖不耐",
      "text": "lactose intolerance",
      "audioPath": "audio/en/food_100.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_100_example",
        "zh": "我乳糖不耐，不能喝普通牛奶。",
        "text": "I am lactose intolerant, so I cannot drink regular milk."
      }
    },
    {
      "id": "food_101",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "花生",
      "text": "peanuts",
      "audioPath": "audio/en/food_101.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_101_example",
        "zh": "我对花生严重过敏。",
        "text": "I have a severe peanut allergy."
      }
    },
    {
      "id": "food_102",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "坚果",
      "text": "tree nuts",
      "audioPath": "audio/en/food_102.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_102_example",
        "zh": "这份甜点里有坚果吗？",
        "text": "Does this dessert contain tree nuts?"
      }
    },
    {
      "id": "food_103",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "甲壳类",
      "text": "shellfish",
      "audioPath": "audio/en/food_103.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_103_example",
        "zh": "我对虾和其他甲壳类过敏。",
        "text": "I am allergic to shrimp and other shellfish."
      }
    },
    {
      "id": "food_104",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "自来水",
      "text": "tap water",
      "audioPath": "audio/en/food_104.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_104_example",
        "zh": "这里的自来水可以直接喝吗？",
        "text": "Is the tap water safe to drink here?"
      }
    },
    {
      "id": "food_105",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "过敏原",
      "text": "allergen",
      "audioPath": "audio/en/food_105.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_105_example",
        "zh": "请告诉我这道菜含有哪些过敏原。",
        "text": "Please tell me which allergens are in this dish."
      }
    },
    {
      "id": "food_106",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "分开结账",
      "text": "split the bill",
      "audioPath": "audio/en/food_106.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_106_example",
        "zh": "请把账单分开结算。",
        "text": "Please split the bill for us."
      }
    },
    {
      "id": "shopping_074",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "退款",
      "text": "refund",
      "audioPath": "audio/en/shopping_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_075",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "换货",
      "text": "exchange",
      "audioPath": "audio/en/shopping_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_076",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "缺货",
      "text": "out of stock",
      "audioPath": "audio/en/shopping_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_077",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "免税",
      "text": "tax-free",
      "audioPath": "audio/en/shopping_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_078",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "PIN码",
      "text": "PIN",
      "audioPath": "audio/en/shopping_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_079",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "非接触支付",
      "text": "contactless payment",
      "audioPath": "audio/en/shopping_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_045",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "急诊室",
      "text": "emergency room",
      "audioPath": "audio/en/emergency_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_045_example",
        "zh": "请带我去最近的急诊室。",
        "text": "Please take me to the nearest emergency room."
      }
    },
    {
      "id": "emergency_046",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "word",
      "zh": "被盗",
      "text": "stolen",
      "audioPath": "audio/en/emergency_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_046_example",
        "zh": "我的手机被盗了。",
        "text": "My phone was stolen."
      }
    },
    {
      "id": "emergency_047",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "word",
      "zh": "失物招领处",
      "text": "lost and found",
      "audioPath": "audio/en/emergency_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_047_example",
        "zh": "失物招领处在哪里？",
        "text": "Where is the lost and found?"
      }
    },
    {
      "id": "emergency_048",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "呼吸困难",
      "text": "difficulty breathing",
      "audioPath": "audio/en/emergency_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_048_example",
        "zh": "我呼吸困难。",
        "text": "I am having difficulty breathing."
      }
    },
    {
      "id": "emergency_049",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "胸痛",
      "text": "chest pain",
      "audioPath": "audio/en/emergency_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_049_example",
        "zh": "我胸口很痛。",
        "text": "I have severe chest pain."
      }
    },
    {
      "id": "emergency_050",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "昏倒",
      "text": "faint",
      "audioPath": "audio/en/emergency_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_emergency_050_example",
        "zh": "他刚才昏倒了。",
        "text": "This person just fainted."
      }
    },
    {
      "id": "expressions_048",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "eSIM",
      "text": "eSIM",
      "audioPath": "audio/en/expressions_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_049",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "SIM卡",
      "text": "SIM card",
      "audioPath": "audio/en/expressions_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_050",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "充值",
      "text": "top up",
      "audioPath": "audio/en/expressions_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_051",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "余额",
      "text": "balance",
      "audioPath": "audio/en/expressions_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    }
  ]
});
})();
