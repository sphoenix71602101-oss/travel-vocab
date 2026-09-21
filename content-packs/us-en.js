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
    "beginnerModule": "english",
    "beginnerAudioBase": "audio/en/beginner",
    "emergencyCard": true
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机",
      "text": "boarding",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "起飞",
      "text": "takeoff",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "降落",
      "text": "landing",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_025",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "座位",
      "text": "seat",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_054",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "加油站",
      "text": "gas station",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_061",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "直飞",
      "text": "direct flight",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_062",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李寄存",
      "text": "luggage storage",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_063",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李丢失",
      "text": "lost luggage",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_064",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照号码",
      "text": "passport number",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_069",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "托运",
      "text": "to check in luggage",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_070",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李检查",
      "text": "baggage inspection",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_073",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "转机柜台",
      "text": "transfer counter",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_080",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境检查",
      "text": "immigration inspection",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_082",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠窗",
      "text": "window side",
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
      "zh": "日式旅馆",
      "text": "Japanese inn",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_hotel_002_example",
        "zh": "我们在日本住过一家传统日式旅馆。",
        "text": "We stayed at a traditional Japanese inn in Japan."
      }
    },
    {
      "id": "hotel_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "民宿",
      "text": "guesthouse",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_048",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "洗衣服务",
      "text": "laundry service",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_049",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "熨斗",
      "text": "iron",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_054",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "满房",
      "text": "fully booked",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_055",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "押金",
      "text": "deposit",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_056",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "收据",
      "text": "receipt",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_058",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "前台电话",
      "text": "front desk phone",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_075",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "吵闹",
      "text": "noisy",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_076",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "舒适",
      "text": "comfortable",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_077",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "房间号",
      "text": "room number",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_079",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我把钥匙弄丢了。",
      "text": "I lost my key.",
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
      "zh": "拉面",
      "text": "ramen",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_017_example",
        "zh": "这碗拉面是用猪骨汤做的吗？",
        "text": "Is this ramen made with pork broth?"
      }
    },
    {
      "id": "food_018",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "乌冬面",
      "text": "udon",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_018_example",
        "zh": "我想要一份蔬菜乌冬面。",
        "text": "I'd like the vegetable udon."
      }
    },
    {
      "id": "food_019",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "荞麦面",
      "text": "soba",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_019_example",
        "zh": "荞麦面里含麸质吗？",
        "text": "Do the soba noodles contain gluten?"
      }
    },
    {
      "id": "food_020",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "寿司",
      "text": "sushi",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_food_020_example",
        "zh": "请来一份三文鱼寿司外带。",
        "text": "I'd like an order of salmon sushi to go."
      }
    },
    {
      "id": "food_021",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "生鱼片",
      "text": "sashimi",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_022",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "天妇罗",
      "text": "tempura",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_023",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "味噌汤",
      "text": "miso soup",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_067",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "收银台",
      "text": "cash register",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_073",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "堂食",
      "text": "eat in",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_075",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "难吃",
      "text": "not tasty",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_076",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "甜",
      "text": "sweet",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_077",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "咸",
      "text": "salty",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_078",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "辣",
      "text": "spicy",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_079",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "苦",
      "text": "bitter",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_080",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "酸",
      "text": "sour",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_081",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "热",
      "text": "hot",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_082",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "冷",
      "text": "cold",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_083",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "新鲜",
      "text": "fresh",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_084",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "吃饱了",
      "text": "full",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_088",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "素食者",
      "text": "vegetarian",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_089",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请问有中文菜单吗？",
      "text": "Do you have a Chinese menu?",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_022",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "尺寸",
      "text": "size",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_058",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "玩具",
      "text": "toy",
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
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_014_example",
        "zh": "演唱会吸引了一万名观众。",
        "text": "The concert drew ten thousand people."
      }
    },
    {
      "id": "numbers_015",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "日元",
      "text": "yen",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_015_example",
        "zh": "这家店不接受日元。",
        "text": "This store doesn't accept yen."
      }
    },
    {
      "id": "numbers_016",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "美元",
      "text": "dollar",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "us-en_numbers_016_example",
        "zh": "我可以用美元付款吗？",
        "text": "Can I pay in U.S. dollars?"
      }
    },
    {
      "id": "numbers_017",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "人民币",
      "text": "yuan",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_033",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期",
      "text": "day of the week",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_078",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "关门",
      "text": "to close",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_079",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "每天",
      "text": "every day",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_083",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "稍等",
      "text": "wait a moment",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "烫伤",
      "text": "burn",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_023",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "哮喘",
      "text": "asthma",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_024",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药片",
      "text": "tablet",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_033",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "word",
      "zh": "保险卡",
      "text": "insurance card",
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
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_041",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我对……过敏。",
      "text": "I am allergic to ...",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_002",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "非常感谢",
      "text": "thank you very much",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_003",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "不客气",
      "text": "you're welcome",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "请",
      "text": "please",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "对不起",
      "text": "excuse me / sorry",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "抱歉",
      "text": "I'm sorry",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_007",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "你好",
      "text": "hello",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_008",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "早上好",
      "text": "good morning",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_009",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "晚上好",
      "text": "good evening",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_010",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "再见",
      "text": "goodbye",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_011",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "回头见",
      "text": "see you later",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_012",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "晚安",
      "text": "good night",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_013",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "欢迎光临",
      "text": "welcome",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我明白了",
      "text": "I understand",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_017",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "不是",
      "text": "no",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_018",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "可以",
      "text": "okay",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_019",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "没关系",
      "text": "it's okay",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_022",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我喜欢",
      "text": "I like it",
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
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "需要",
      "text": "need",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "有",
      "text": "there is / have",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "没有",
      "text": "there isn't / don't have",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "是",
      "text": "is",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不是",
      "text": "is not",
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
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "en_airport_phrase_001",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“护照”？",
      "text": "Where can I ask about passport?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_002",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我需要处理“签证”。",
      "text": "I need help with visa.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_airport_phrase_003",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "可以帮我确认“机票”的相关信息吗？",
      "text": "Could you check the details for airline ticket?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_004",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "关于“机场”，下一步该怎么做？",
      "text": "What should I do next about airport?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_airport_phrase_005",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "请告诉我“登机牌”的相关信息。",
      "text": "Could you tell me about boarding pass?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_006",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“值机”？",
      "text": "Where can I ask about check-in?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_007",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "我需要处理“座位”。",
      "text": "I need help with seat.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_airport_phrase_008",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "可以帮我确认“靠窗座位”的相关信息吗？",
      "text": "Could you check the details for window seat?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_009",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "关于“过道座位”，下一步该怎么做？",
      "text": "What should I do next about aisle seat?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_airport_phrase_010",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "请告诉我“行李”的相关信息。",
      "text": "Could you tell me about luggage?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_011",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“行李箱”？",
      "text": "Where can I ask about suitcase?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_012",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "我需要处理“手提行李”。",
      "text": "I need help with carry-on baggage.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_airport_phrase_013",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "可以帮我确认“行李领取处”的相关信息吗？",
      "text": "Could you check the details for baggage claim?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_014",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "关于“行李推车”，下一步该怎么做？",
      "text": "What should I do next about luggage cart?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_airport_phrase_015",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "这是 TSA 安检队伍吗？",
      "text": "Is this the line for TSA security?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_airport_phrase_016",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“免税店”？",
      "text": "Where can I ask about duty-free shop?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_airport_phrase_017",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "我需要处理“候机室”。",
      "text": "I need help with waiting room.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_airport_phrase_018",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "可以帮我确认“安检”的相关信息吗？",
      "text": "Could you check the details for security check?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_019",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请确认“登机口”的相关信息。",
      "text": "Please check the details for boarding gate.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_020",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请确认“登机”的相关信息。",
      "text": "Please check the details for boarding.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_021",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请确认“起飞”的相关信息。",
      "text": "Please check the details for takeoff.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请确认“登机时间”的相关信息。",
      "text": "Please check the details for boarding time.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请确认“安全带”的相关信息。",
      "text": "Please check the details for seat belt.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "我的海关申报已在线提交。",
      "text": "I submitted my customs declaration online.",
      "direction": "traveler-hears",
      "intent": "local-use"
    },
    {
      "id": "en_airport_phrase_025",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "请确认“海关”的相关信息。",
      "text": "Please check the details for customs.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_026",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "请确认“入境”的相关信息。",
      "text": "Please check the details for entry.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_027",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "我需要处理“降落”。",
      "text": "I need help with landing.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_airport_phrase_028",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "可以帮我确认“入境卡”的相关信息吗？",
      "text": "Could you check the details for arrival card?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_airport_phrase_029",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "关于“海关申报”，下一步该怎么做？",
      "text": "What should I do next about customs declaration?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_airport_phrase_030",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "请告诉我“入境检查”的相关信息。",
      "text": "Could you tell me about immigration inspection?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_transport_phrase_001",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "可以刷非接触式信用卡乘车吗？",
      "text": "Can I tap my contactless card to ride?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_transport_phrase_002",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "我需要处理“车站”。",
      "text": "I need help with station.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_transport_phrase_003",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "可以帮我确认“站台”的相关信息吗？",
      "text": "Could you check the details for platform?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_004",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "关于“时刻表”，下一步该怎么做？",
      "text": "What should I do next about timetable?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_transport_phrase_005",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "请告诉我“单程票”的相关信息。",
      "text": "Could you tell me about one-way ticket?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_transport_phrase_006",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“地铁”？",
      "text": "Where can I ask about subway?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_transport_phrase_007",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "我需要处理“公交车”。",
      "text": "I need help with bus.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_transport_phrase_008",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "可以帮我确认“地铁”的相关信息吗？",
      "text": "Could you check the details for subway?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_009",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "关于“公交车”，下一步该怎么做？",
      "text": "What should I do next about bus?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_transport_phrase_010",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "请告诉我“地铁”的相关信息。",
      "text": "Could you tell me about subway?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_transport_phrase_011",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“火车”？",
      "text": "Where can I ask about train?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_transport_phrase_012",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "我需要处理“高铁”。",
      "text": "I need help with bullet train.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_transport_phrase_013",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "可以帮我确认“火车”的相关信息吗？",
      "text": "Could you check the details for train?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_014",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "关于“高铁”，下一步该怎么做？",
      "text": "What should I do next about bullet train?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_transport_phrase_015",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "请告诉我“火车”的相关信息。",
      "text": "Could you tell me about train?",
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
      "zh": "我需要处理“出租车”。",
      "text": "I need help with taxi.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_transport_phrase_018",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "可以帮我确认“出租车”的相关信息吗？",
      "text": "Could you check the details for taxi?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_019",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "请确认“出租车”的相关信息。",
      "text": "Please check the details for taxi.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_020",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "请确认“出租车”的相关信息。",
      "text": "Please check the details for taxi.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_021",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "请确认“出租车”的相关信息。",
      "text": "Please check the details for taxi.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_022",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请确认“租车”的相关信息。",
      "text": "Please check the details for rental car.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_023",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请确认“加油站”的相关信息。",
      "text": "Please check the details for gas station.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_024",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请确认“停车场”的相关信息。",
      "text": "Please check the details for parking lot.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_025",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请确认“红绿灯”的相关信息。",
      "text": "Please check the details for traffic light.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_026",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "请确认“汽车”的相关信息。",
      "text": "Please check the details for car.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_027",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "我需要处理“租车”。",
      "text": "I need help with rental car.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_transport_phrase_028",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "可以帮我确认“加油站”的相关信息吗？",
      "text": "Could you check the details for gas station?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_transport_phrase_029",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "关于“停车场”，下一步该怎么做？",
      "text": "What should I do next about parking lot?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_transport_phrase_030",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "请告诉我“红绿灯”的相关信息。",
      "text": "Could you tell me about traffic light?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_001",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“酒店”？",
      "text": "Where can I ask about hotel?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_002",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "我需要处理“日式旅馆”。",
      "text": "I need help with Japanese inn.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_hotel_phrase_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "可以帮我确认“民宿”的相关信息吗？",
      "text": "Could you check the details for guesthouse?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_004",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "关于“前台”，下一步该怎么做？",
      "text": "What should I do next about front desk?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_hotel_phrase_005",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "请告诉我“预订”的相关信息。",
      "text": "Could you tell me about reservation?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_006",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“入住”？",
      "text": "Where can I ask about check-in?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_007",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我需要处理“钥匙”。",
      "text": "I need help with key.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_hotel_phrase_008",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "可以帮我确认“房卡”的相关信息吗？",
      "text": "Could you check the details for room key?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_009",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "关于“行李员”，下一步该怎么做？",
      "text": "What should I do next about bellboy?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_hotel_phrase_010",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "请告诉我“工作人员”的相关信息。",
      "text": "Could you tell me about staff?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_011",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“毛巾”？",
      "text": "Where can I ask about towel?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_012",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "我需要处理“床单”。",
      "text": "I need help with bed sheet.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_hotel_phrase_013",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "可以帮我确认“枕头”的相关信息吗？",
      "text": "Could you check the details for pillow?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_014",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "关于“被子”，下一步该怎么做？",
      "text": "What should I do next about futon / duvet?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_hotel_phrase_015",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "可以延迟退房吗？",
      "text": "Could I get a late checkout?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_hotel_phrase_016",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“打扫”？",
      "text": "Where can I ask about cleaning?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_hotel_phrase_017",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "我需要处理“叫醒服务”。",
      "text": "I need help with wake-up call.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_hotel_phrase_018",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "可以帮我确认“洗衣服务”的相关信息吗？",
      "text": "Could you check the details for laundry service?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_019",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请确认“熨斗”的相关信息。",
      "text": "Please check the details for iron.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_020",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请确认“婴儿床”的相关信息。",
      "text": "Please check the details for baby bed.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_021",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“满房”的相关信息。",
      "text": "Please check the details for fully booked.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_022",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“烟雾报警器”的相关信息。",
      "text": "Please check the details for smoke alarm.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_023",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“灭火器”的相关信息。",
      "text": "Please check the details for fire extinguisher.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_024",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“安静”的相关信息。",
      "text": "Please check the details for quiet.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_025",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“吵闹”的相关信息。",
      "text": "Please check the details for noisy.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_026",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请确认“满房”的相关信息。",
      "text": "Please check the details for fully booked.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_027",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "我需要处理“退房”。",
      "text": "I need help with check-out.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_hotel_phrase_028",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "可以帮我确认“退房时间”的相关信息吗？",
      "text": "Could you check the details for check-out time?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_hotel_phrase_029",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "关于“收据”，下一步该怎么做？",
      "text": "What should I do next about receipt?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_hotel_phrase_030",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "请告诉我“账单”的相关信息。",
      "text": "Could you tell me about bill?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_001",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“早餐”？",
      "text": "Where can I ask about breakfast?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_002",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "我需要处理“午餐”。",
      "text": "I need help with lunch.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_food_phrase_003",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "可以帮我确认“晚餐”的相关信息吗？",
      "text": "Could you check the details for dinner?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_004",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "关于“服务员”，下一步该怎么做？",
      "text": "What should I do next about waiter?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_food_phrase_005",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "请告诉我“菜单”的相关信息。",
      "text": "Could you tell me about menu?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_006",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“米饭”？",
      "text": "Where can I ask about rice?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_007",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "我需要处理“面包”。",
      "text": "I need help with bread.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_food_phrase_008",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "这份可以打包带走吗？",
      "text": "Can I get this to go?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_food_phrase_009",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "关于“水”，下一步该怎么做？",
      "text": "What should I do next about water?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_food_phrase_010",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请告诉我“热水”的相关信息。",
      "text": "Could you tell me about hot water?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_011",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“茶”？",
      "text": "Where can I ask about tea?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_012",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "我需要处理“咖啡”。",
      "text": "I need help with coffee.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_food_phrase_013",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "可以帮我确认“牛奶”的相关信息吗？",
      "text": "Could you check the details for milk?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_014",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "关于“盐”，下一步该怎么做？",
      "text": "What should I do next about salt?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_food_phrase_015",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请告诉我“糖”的相关信息。",
      "text": "Could you tell me about sugar?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_016",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“酱油”？",
      "text": "Where can I ask about soy sauce?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_food_phrase_017",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "我需要处理“醋”。",
      "text": "I need help with vinegar.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_food_phrase_018",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "可以帮我确认“胡椒”的相关信息吗？",
      "text": "Could you check the details for pepper?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_019",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "请确认“筷子”的相关信息。",
      "text": "Please check the details for chopsticks.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_020",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "请确认“勺子”的相关信息。",
      "text": "Please check the details for spoon.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_021",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "请确认“叉子”的相关信息。",
      "text": "Please check the details for fork.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_022",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "请确认“刀”的相关信息。",
      "text": "Please check the details for knife.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_023",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请确认“味噌汤”的相关信息。",
      "text": "Please check the details for miso soup.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_024",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请确认“鸡蛋”的相关信息。",
      "text": "Please check the details for egg.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_025",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请确认“肉”的相关信息。",
      "text": "Please check the details for meat.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_026",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请确认“牛肉”的相关信息。",
      "text": "Please check the details for beef.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_027",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "小费已经包含在账单里了吗？",
      "text": "Is gratuity already included?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_food_phrase_028",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "可以帮我确认“收银台”的相关信息吗？",
      "text": "Could you check the details for cash register?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_food_phrase_029",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "关于“结账”，下一步该怎么做？",
      "text": "What should I do next about bill?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_food_phrase_030",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "请告诉我“收银台”的相关信息。",
      "text": "Could you tell me about cash register?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_001",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“商店”？",
      "text": "Where can I ask about shop?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_002",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我需要处理“商场”。",
      "text": "I need help with department store.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_shopping_phrase_003",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "可以帮我确认“超市”的相关信息吗？",
      "text": "Could you check the details for supermarket?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_004",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "关于“便利店”，下一步该怎么做？",
      "text": "What should I do next about convenience store?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_shopping_phrase_005",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "请告诉我“市场”的相关信息。",
      "text": "Could you tell me about market?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_006",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“尺寸”？",
      "text": "Where can I ask about size?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_007",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "我需要处理“大号”。",
      "text": "I need help with large.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_shopping_phrase_008",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "可以帮我确认“中号”的相关信息吗？",
      "text": "Could you check the details for medium?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_009",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "关于“小号”，下一步该怎么做？",
      "text": "What should I do next about small?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_shopping_phrase_010",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "请告诉我“尺寸”的相关信息。",
      "text": "Could you tell me about size?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_011",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“试衣间”？",
      "text": "Where can I ask about fitting room?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_012",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "我需要处理“试穿”。",
      "text": "I need help with to try on.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_shopping_phrase_013",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "可以帮我确认“试衣间”的相关信息吗？",
      "text": "Could you check the details for fitting room?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_014",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "关于“试穿”，下一步该怎么做？",
      "text": "What should I do next about to try on?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_shopping_phrase_015",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "请告诉我“试衣间”的相关信息。",
      "text": "Could you tell me about fitting room?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_016",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“价格”？",
      "text": "Where can I ask about price?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_shopping_phrase_017",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "我需要处理“多少钱”。",
      "text": "I need help with how much.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_shopping_phrase_018",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "可以帮我确认“贵”的相关信息吗？",
      "text": "Could you check the details for expensive?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_019",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "请确认“便宜”的相关信息。",
      "text": "Please check the details for cheap.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_020",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "标价包含销售税吗？",
      "text": "Does the listed price include sales tax?",
      "direction": "traveler-hears",
      "intent": "local-use"
    },
    {
      "id": "en_shopping_phrase_021",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "请确认“信用卡”的相关信息。",
      "text": "Please check the details for credit card.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_022",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "请确认“银行卡”的相关信息。",
      "text": "Please check the details for bank card.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_023",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "请确认“零钱”的相关信息。",
      "text": "Please check the details for small change.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_024",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请确认“小票”的相关信息。",
      "text": "Please check the details for receipt.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_025",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请确认“小票”的相关信息。",
      "text": "Please check the details for receipt.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_026",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请确认“小票”的相关信息。",
      "text": "Please check the details for receipt.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_027",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "我需要处理“小票”。",
      "text": "I need help with receipt.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_shopping_phrase_028",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以帮我确认“小票”的相关信息吗？",
      "text": "Could you check the details for receipt?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_shopping_phrase_029",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "关于“小票”，下一步该怎么做？",
      "text": "What should I do next about receipt?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_shopping_phrase_030",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请告诉我“小票”的相关信息。",
      "text": "Could you tell me about receipt?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_001",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“哪里”？",
      "text": "Where can I ask about where?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_002",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "我需要处理“这里”。",
      "text": "I need help with here.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_directions_phrase_003",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "可以帮我确认“那里”的相关信息吗？",
      "text": "Could you check the details for over there?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_004",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "关于“左边”，下一步该怎么做？",
      "text": "What should I do next about left?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_directions_phrase_005",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请告诉我“右边”的相关信息。",
      "text": "Could you tell me about right?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_006",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“前面”？",
      "text": "Where can I ask about front?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_007",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我需要处理“后面”。",
      "text": "I need help with back.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_directions_phrase_008",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "可以帮我确认“旁边”的相关信息吗？",
      "text": "Could you check the details for next to?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_009",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "关于“对面”，下一步该怎么做？",
      "text": "What should I do next about opposite?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_directions_phrase_010",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请告诉我“附近”的相关信息。",
      "text": "Could you tell me about nearby?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_011",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“远”？",
      "text": "Where can I ask about far?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_012",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我需要处理“近”。",
      "text": "I need help with near.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_directions_phrase_013",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "可以帮我确认“远”的相关信息吗？",
      "text": "Could you check the details for far?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_014",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "关于“近”，下一步该怎么做？",
      "text": "What should I do next about near?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_directions_phrase_015",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "请告诉我“远”的相关信息。",
      "text": "Could you tell me about far?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_016",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“近”？",
      "text": "Where can I ask about near?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_directions_phrase_017",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "我需要处理“远”。",
      "text": "I need help with far.",
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
      "zh": "请确认“桥”的相关信息。",
      "text": "Please check the details for bridge.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_020",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请确认“路”的相关信息。",
      "text": "Please check the details for road.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_021",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请确认“街道”的相关信息。",
      "text": "Please check the details for street.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_022",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请确认“建筑”的相关信息。",
      "text": "Please check the details for building.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_023",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请确认“银行”的相关信息。",
      "text": "Please check the details for bank.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_024",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请确认“邮局”的相关信息。",
      "text": "Please check the details for post office.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_025",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请确认“厕所”的相关信息。",
      "text": "Please check the details for toilet.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_026",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请确认“公交站”的相关信息。",
      "text": "Please check the details for bus stop.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_027",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "我需要处理“地铁站”。",
      "text": "I need help with subway station.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_directions_phrase_028",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "可以帮我确认“景点”的相关信息吗？",
      "text": "Could you check the details for tourist spot?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_directions_phrase_029",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "关于“博物馆”，下一步该怎么做？",
      "text": "What should I do next about museum?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_directions_phrase_030",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请告诉我“公园”的相关信息。",
      "text": "Could you tell me about park?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_001",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“发烧”？",
      "text": "Where can I ask about fever?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_002",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我需要处理“感冒”。",
      "text": "I need help with cold.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_emergency_phrase_003",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "可以帮我确认“咳嗽”的相关信息吗？",
      "text": "Could you check the details for cough?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_004",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "关于“头疼”，下一步该怎么做？",
      "text": "What should I do next about headache?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_emergency_phrase_005",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "请告诉我“肚子疼”的相关信息。",
      "text": "Could you tell me about stomachache?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_006",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "附近有 urgent care 吗？",
      "text": "Is there an urgent care clinic nearby?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_emergency_phrase_007",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "我需要处理“护士”。",
      "text": "I need help with nurse.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_emergency_phrase_008",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "可以帮我确认“药”的相关信息吗？",
      "text": "Could you check the details for medicine?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_009",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "关于“处方”，下一步该怎么做？",
      "text": "What should I do next about prescription?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_emergency_phrase_010",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "请告诉我“药片”的相关信息。",
      "text": "Could you tell me about tablet?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_011",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“药膏”？",
      "text": "Where can I ask about ointment?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_012",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "我需要处理“报警”。",
      "text": "I need help with call the police.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_emergency_phrase_013",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "可以帮我确认“报警”的相关信息吗？",
      "text": "Could you check the details for call the police?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_014",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "关于“报警”，下一步该怎么做？",
      "text": "What should I do next about call the police?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_emergency_phrase_015",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请告诉我“报警”的相关信息。",
      "text": "Could you tell me about call the police?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_016",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“报警”？",
      "text": "Where can I ask about call the police?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_emergency_phrase_017",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我需要处理“腹泻”。",
      "text": "I need help with diarrhea.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_emergency_phrase_018",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "可以帮我确认“便秘”的相关信息吗？",
      "text": "Could you check the details for constipation?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_019",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请确认“受伤”的相关信息。",
      "text": "Please check the details for injury.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_020",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请确认“流血”的相关信息。",
      "text": "Please check the details for bleeding.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_021",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请确认“骨折”的相关信息。",
      "text": "Please check the details for fracture.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请确认“救命”的相关信息。",
      "text": "Please check the details for help.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_023",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请确认“紧急”的相关信息。",
      "text": "Please check the details for emergency.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_024",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请确认“叫救护车”的相关信息。",
      "text": "Please check the details for call an ambulance.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_025",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请确认“受伤”的相关信息。",
      "text": "Please check the details for injury.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_026",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请确认“流血”的相关信息。",
      "text": "Please check the details for bleeding.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_027",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "我需要处理“保险”。",
      "text": "I need help with insurance.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_emergency_phrase_028",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "可以帮我确认“保险卡”的相关信息吗？",
      "text": "Could you check the details for insurance card?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_emergency_phrase_029",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "关于“保险”，下一步该怎么做？",
      "text": "What should I do next about insurance?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_emergency_phrase_030",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "请告诉我“保险卡”的相关信息。",
      "text": "Could you tell me about insurance card?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_001",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“你好”？",
      "text": "Where can I ask about hello?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_002",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "我需要处理“早上好”。",
      "text": "I need help with good morning.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_basics_phrase_003",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "可以帮我确认“晚上好”的相关信息吗？",
      "text": "Could you check the details for good evening?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "关于“谢谢”，下一步该怎么做？",
      "text": "What should I do next about thank you?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_basics_phrase_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "请告诉我“非常感谢”的相关信息。",
      "text": "Could you tell me about thank you very much?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“不客气”？",
      "text": "Where can I ask about you're welcome?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_007",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "我需要处理“请”。",
      "text": "I need help with please.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_basics_phrase_008",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "可以帮我确认“七”的相关信息吗？",
      "text": "Could you check the details for seven?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_009",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "关于“八”，下一步该怎么做？",
      "text": "What should I do next about eight?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_basics_phrase_010",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "请告诉我“九”的相关信息。",
      "text": "Could you tell me about nine?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_011",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“十”？",
      "text": "Where can I ask about ten?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_012",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "可以把地址发短信给我吗？",
      "text": "Could you text me the address?",
      "direction": "traveler-says",
      "intent": "local-use"
    },
    {
      "id": "en_basics_phrase_013",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "可以帮我确认“千”的相关信息吗？",
      "text": "Could you check the details for thousand?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "关于“万”，下一步该怎么做？",
      "text": "What should I do next about ten thousand?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_basics_phrase_015",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请告诉我“日元”的相关信息。",
      "text": "Could you tell me about yen?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_016",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请问可以在哪里咨询“美元”？",
      "text": "Where can I ask about dollar?",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "en_basics_phrase_017",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我需要处理“人民币”。",
      "text": "I need help with yuan.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_basics_phrase_018",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "可以帮我确认“零”的相关信息吗？",
      "text": "Could you check the details for zero?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_019",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "请确认“一”的相关信息。",
      "text": "Please check the details for one.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_020",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "请确认“二”的相关信息。",
      "text": "Please check the details for two.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_021",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "请确认“今天”的相关信息。",
      "text": "Please check the details for today.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_022",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "请确认“明天”的相关信息。",
      "text": "Please check the details for tomorrow.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_023",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "请确认“昨天”的相关信息。",
      "text": "Please check the details for yesterday.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_024",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "请确认“后天”的相关信息。",
      "text": "Please check the details for day after tomorrow.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "请确认“是的”的相关信息。",
      "text": "Please check the details for yes.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "请确认“不是”的相关信息。",
      "text": "Please check the details for no.",
      "direction": "traveler-hears",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我需要处理“可以”。",
      "text": "I need help with okay.",
      "direction": "traveler-says",
      "intent": "request"
    },
    {
      "id": "en_basics_phrase_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以帮我确认“想要”的相关信息吗？",
      "text": "Could you check the details for want?",
      "direction": "traveler-says",
      "intent": "confirm"
    },
    {
      "id": "en_basics_phrase_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "关于“需要”，下一步该怎么做？",
      "text": "What should I do next about need?",
      "direction": "traveler-says",
      "intent": "repair"
    },
    {
      "id": "en_basics_phrase_030",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "请告诉我“有”的相关信息。",
      "text": "Could you tell me about there is / have?",
      "direction": "traveler-says",
      "intent": "ask"
    }
  ]
});
})();
