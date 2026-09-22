(function () {
  "use strict";
  window.registerContentPack({
  "id": "kr-ko",
  "destinationId": "kr",
  "locale": "ko-KR",
  "speechLocale": "ko-KR",
  "languageCode": "ko",
  "languageLabel": "韩语",
  "nativeLabel": "한국어",
  "pronunciationLabel": "罗马字",
  "features": {
    "beginnerModule": "kr-ko-beginner",
    "beginnerAudioBase": "audio/ko/beginner",
    "emergencyCard": {
      "title": "긴급 연락 카드",
      "notice": "긴급 상황에서 의사소통할 때만 사용해 주세요.",
      "foreignNameLabel": "护照拼音或韩文姓名",
      "unknownBloodType": "모름",
      "labels": {
        "name": "이름",
        "nationality": "국적",
        "birthDate": "생년월일",
        "bloodType": "혈액형",
        "documentNumber": "여권·신분증 번호",
        "emergencyContact": "비상 연락처",
        "emergencyPhone": "전화번호",
        "allergies": "알레르기",
        "conditions": "질환·병력"
      },
      "dictionaries": {
        "nationalities": [
          {
            "code": "cn",
            "zh": "中国",
            "target": "중국"
          },
          {
            "code": "jp",
            "zh": "日本",
            "target": "일본"
          },
          {
            "code": "kr",
            "zh": "韩国",
            "target": "대한민국"
          },
          {
            "code": "sg",
            "zh": "新加坡",
            "target": "싱가포르"
          },
          {
            "code": "my",
            "zh": "马来西亚",
            "target": "말레이시아"
          },
          {
            "code": "us",
            "zh": "美国",
            "target": "미국"
          },
          {
            "code": "gb",
            "zh": "英国",
            "target": "영국"
          },
          {
            "code": "ca",
            "zh": "加拿大",
            "target": "캐나다"
          },
          {
            "code": "au",
            "zh": "澳大利亚",
            "target": "호주"
          },
          {
            "code": "fr",
            "zh": "法国",
            "target": "프랑스"
          },
          {
            "code": "de",
            "zh": "德国",
            "target": "독일"
          },
          {
            "code": "es",
            "zh": "西班牙",
            "target": "스페인"
          },
          {
            "code": "it",
            "zh": "意大利",
            "target": "이탈리아"
          },
          {
            "code": "other",
            "zh": "其他",
            "target": "기타"
          }
        ],
        "allergies": [
          {
            "code": "none",
            "zh": "无",
            "target": "없음"
          },
          {
            "code": "penicillin",
            "zh": "青霉素",
            "target": "페니실린"
          },
          {
            "code": "cephalosporin",
            "zh": "头孢菌素",
            "target": "세팔로스포린"
          },
          {
            "code": "sulfonamides",
            "zh": "磺胺类",
            "target": "설폰아미드"
          },
          {
            "code": "nsaids",
            "zh": "阿司匹林/NSAIDs",
            "target": "아스피린·비스테로이드성 소염진통제"
          },
          {
            "code": "peanuts",
            "zh": "花生",
            "target": "땅콩"
          },
          {
            "code": "nuts",
            "zh": "坚果",
            "target": "견과류"
          },
          {
            "code": "shellfish",
            "zh": "海鲜/甲壳类",
            "target": "해산물·갑각류"
          },
          {
            "code": "milk",
            "zh": "牛奶",
            "target": "우유"
          },
          {
            "code": "eggs",
            "zh": "鸡蛋",
            "target": "달걀"
          },
          {
            "code": "gluten",
            "zh": "小麦/麸质",
            "target": "밀·글루텐"
          },
          {
            "code": "soy",
            "zh": "大豆",
            "target": "대두"
          },
          {
            "code": "latex",
            "zh": "乳胶",
            "target": "라텍스"
          },
          {
            "code": "insect",
            "zh": "昆虫蜇伤",
            "target": "곤충 쏘임"
          }
        ],
        "conditions": [
          {
            "code": "none",
            "zh": "无",
            "target": "없음"
          },
          {
            "code": "diabetes",
            "zh": "糖尿病",
            "target": "당뇨병"
          },
          {
            "code": "hypertension",
            "zh": "高血压",
            "target": "고혈압"
          },
          {
            "code": "heart",
            "zh": "心脏病",
            "target": "심장 질환"
          },
          {
            "code": "asthma",
            "zh": "哮喘",
            "target": "천식"
          },
          {
            "code": "epilepsy",
            "zh": "癫痫",
            "target": "뇌전증"
          },
          {
            "code": "kidney",
            "zh": "肾脏疾病",
            "target": "신장 질환"
          },
          {
            "code": "anticoagulants",
            "zh": "正在服用抗凝药",
            "target": "항응고제 복용 중"
          },
          {
            "code": "pregnancy",
            "zh": "怀孕",
            "target": "임신 중"
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
      "text": "여권",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_001_example",
        "zh": "您好，这是我的护照。",
        "text": "안녕하세요, 여기 제 여권이 있어요.",
        "pronunciation": "annyeonghaseyo, yeogi je yeogwoni isseoyo."
      },
      "pronunciation": "yeogwon"
    },
    {
      "id": "airport_002",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "签证",
      "text": "비자",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_002_example",
        "zh": "这次旅行需要签证吗？",
        "text": "이번 여행에 비자가 필요한가요?",
        "pronunciation": "ibeon yeohaenge bijaga pillyohangayo?"
      },
      "pronunciation": "bija"
    },
    {
      "id": "airport_003",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "机票",
      "text": "항공권",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_003_example",
        "zh": "我在网上订了机票。",
        "text": "나는 온라인으로 항공권을 예약했다.",
        "pronunciation": "naneun ollaineuro hanggonggwoneul yeyakaetda."
      },
      "pronunciation": "hanggonggwon"
    },
    {
      "id": "airport_004",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "登机牌",
      "text": "탑승권",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_004_example",
        "zh": "您的登机牌在手机上。",
        "text": "탑승권은 휴대전화에 있습니다.",
        "pronunciation": "tapseunggwoneun hyudaejeonhwae itseumnida."
      },
      "pronunciation": "tapseunggwon"
    },
    {
      "id": "airport_005",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李",
      "text": "수하물",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_005_example",
        "zh": "我的行李还没到。",
        "text": "내 짐이 도착하지 않았어요.",
        "pronunciation": "nae jimi dochakaji anasseoyo."
      },
      "pronunciation": "suhamul"
    },
    {
      "id": "airport_006",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李箱",
      "text": "여행 가방",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_006_example",
        "zh": "这个行李箱重四十二磅。",
        "text": "이 여행가방의 무게는 42파운드입니다.",
        "pronunciation": "i yeohaenggabangui mugeneun 42paundeuimnida."
      },
      "pronunciation": "yeohaeng gabang"
    },
    {
      "id": "airport_007",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "手提行李",
      "text": "휴대 수하물",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_007_example",
        "zh": "每位乘客可以带一件手提行李。",
        "text": "승객 1인당 기내 수하물 1개를 지참할 수 있습니다.",
        "pronunciation": "seunggaek 1indang ginae suhamul 1gaereul jichamhal su itseumnida."
      },
      "pronunciation": "hyudae suhamul"
    },
    {
      "id": "airport_008",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "机场",
      "text": "공항",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_008_example",
        "zh": "从机场到市中心需要多久？",
        "text": "공항에서 시내까지 얼마나 걸리나요?",
        "pronunciation": "gonghangeseo sinaekkaji eolmana geollinayo?"
      },
      "pronunciation": "gonghang"
    },
    {
      "id": "airport_009",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航站楼",
      "text": "터미널",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_009_example",
        "zh": "您的航班从四号航站楼出发。",
        "text": "항공편은 터미널 4에서 출발합니다.",
        "pronunciation": "hanggongpyeoneun teomineol 4eseo chulbalhamnida."
      },
      "pronunciation": "teomineol"
    },
    {
      "id": "airport_010",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "出发",
      "text": "출발",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_010_example",
        "zh": "出发时间是下午三点二十分。",
        "text": "오후 3시 20분 출발 예정입니다.",
        "pronunciation": "ohu 3si 20bun chulbal yejeongimnida."
      },
      "pronunciation": "chulbal"
    },
    {
      "id": "airport_011",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "到达",
      "text": "도착",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_011_example",
        "zh": "我们预计晚上七点四十五分到达。",
        "text": "우리 도착시간은 오후 7시 45분.",
        "pronunciation": "uri dochaksiganeun ohu 7si 45bun."
      },
      "pronunciation": "dochak"
    },
    {
      "id": "airport_012",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机口",
      "text": "탑승구",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_012_example",
        "zh": "登机口改到 B12 了。",
        "text": "탑승 게이트가 B12로 변경되었습니다.",
        "pronunciation": "tapseung geiteuga b12ro byeongyeongdoeeotseumnida."
      },
      "pronunciation": "tapseunggu"
    },
    {
      "id": "airport_013",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "安检",
      "text": "보안 검색",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_013_example",
        "zh": "安检时请取出笔记本电脑。",
        "text": "보안 검색대에서 노트북을 꺼내시기 바랍니다.",
        "pronunciation": "boan geomsaekdaeeseo noteubugeul kkeonaesigi baramnida."
      },
      "pronunciation": "boan geomsaek"
    },
    {
      "id": "airport_014",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "海关",
      "text": "세관",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_014_example",
        "zh": "这个需要在海关申报吗？",
        "text": "이것을 세관에 신고해야 합니까?",
        "pronunciation": "igeoseul segwane singohaeya hamnikka?"
      },
      "pronunciation": "segwan"
    },
    {
      "id": "airport_015",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境",
      "text": "입국",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_015_example",
        "zh": "您这次入境的目的是什么？",
        "text": "귀하의 입국 목적은 무엇입니까?",
        "pronunciation": "gwihaui ipguk mokjeogeun mueosimnikka?"
      },
      "pronunciation": "ipguk"
    },
    {
      "id": "airport_016",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "出境",
      "text": "출국",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_016_example",
        "zh": "我星期五离开韩国。",
        "text": "저는 금요일에 한국을 떠나요.",
        "pronunciation": "jeoneun geumyoire hangugeul tteonayo."
      },
      "pronunciation": "chulguk"
    },
    {
      "id": "airport_017",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "转机",
      "text": "환승",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_017_example",
        "zh": "我在仁川有两个小时转机。",
        "text": "인천에서 두 시간 동안 환승해요.",
        "pronunciation": "incheoneseo du sigan dongan hwanseunghaeyo."
      },
      "pronunciation": "hwanseung"
    },
    {
      "id": "airport_018",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航班",
      "text": "항공편",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_018_example",
        "zh": "这个航班准点吗？",
        "text": "이 비행기가 정시에 도착하나요?",
        "pronunciation": "i bihaenggiga jeongsie dochakanayo?"
      },
      "pronunciation": "hanggongpyeon"
    },
    {
      "id": "airport_019",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "延误",
      "text": "지연",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_019_example",
        "zh": "航班延误了四十五分钟。",
        "text": "45분 지연됩니다.",
        "pronunciation": "45bun jiyeondoemnida."
      },
      "pronunciation": "jiyeon"
    },
    {
      "id": "airport_020",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "取消",
      "text": "취소",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_020_example",
        "zh": "航班取消后我可以退款吗？",
        "text": "취소로 인해 환불을 받을 수 있나요?",
        "pronunciation": "chwisoro inhae hwanbureul badeul su innayo?"
      },
      "pronunciation": "chwiso"
    },
    {
      "id": "airport_021",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "值机",
      "text": "체크인",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_021_example",
        "zh": "这个航班几点开始值机？",
        "text": "이 항공편 체크인은 몇 시부터 가능한가요?",
        "pronunciation": "i hanggongpyeon chekeuineun myeot sibuteo ganeunghangayo?"
      },
      "pronunciation": "chekeuin"
    },
    {
      "id": "airport_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机",
      "text": "탑승",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_022_example",
        "zh": "我们这趟航班已经开始登机了吗？",
        "text": "저희 항공편은 벌써 탑승이 시작됐나요?",
        "pronunciation": "jeohui hanggongpyeoneun beolsseo tapseungi sijakdwaennayo?"
      },
      "pronunciation": "tapseung"
    },
    {
      "id": "airport_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "起飞",
      "text": "이륙",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_023_example",
        "zh": "这架飞机预计几点起飞？",
        "text": "이 비행기는 몇 시에 이륙할 예정인가요?",
        "pronunciation": "i bihaenggineun myeot sie iryukal yejeongingayo?"
      },
      "pronunciation": "iryuk"
    },
    {
      "id": "airport_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "降落",
      "text": "착륙",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_024_example",
        "zh": "由于天气原因，飞机会晚些降落。",
        "text": "날씨 때문에 비행기가 늦게 착륙할 예정입니다.",
        "pronunciation": "nalssi ttaemune bihaenggiga neutge changnyukal yejeongimnida."
      },
      "pronunciation": "changnyuk"
    },
    {
      "id": "airport_025",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "座位",
      "text": "좌석",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jwaseok"
    },
    {
      "id": "airport_026",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠窗座位",
      "text": "창가 좌석",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "changga jwaseok"
    },
    {
      "id": "airport_027",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "过道座位",
      "text": "통로 좌석",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tongno jwaseok"
    },
    {
      "id": "airport_028",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李领取处",
      "text": "수하물 찾는 곳",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "suhamul channeun got"
    },
    {
      "id": "airport_029",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李推车",
      "text": "수하물 카트",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "suhamul kateu"
    },
    {
      "id": "airport_030",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照查验",
      "text": "여권 심사",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yeogwon simsa"
    },
    {
      "id": "airport_031",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "免税店",
      "text": "면세점",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "myeonsejeom"
    },
    {
      "id": "airport_032",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "机场大巴",
      "text": "공항버스",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_032_example",
        "zh": "机场大巴每三十分钟一班。",
        "text": "공항버스는 30분 간격으로 운행됩니다.",
        "pronunciation": "gonghangbeoseuneun 30bun gangyeogeuro unhaengdoemnida."
      },
      "pronunciation": "gonghangbeoseu"
    },
    {
      "id": "airport_033",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "word",
      "zh": "出租车",
      "text": "택시",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_033_example",
        "zh": "请帮我叫一辆出租车。",
        "text": "택시 좀 불러 주시겠어요?",
        "pronunciation": "taeksi jom bulleo jusigesseoyo?"
      },
      "pronunciation": "taeksi"
    },
    {
      "id": "airport_034",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "地铁",
      "text": "지하철",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_034_example",
        "zh": "坐地铁去市中心最快。",
        "text": "지하철은 시내에서 가장 빠른 길입니다.",
        "pronunciation": "jihacheoreun sinaeeseo gajang ppareun girimnida."
      },
      "pronunciation": "jihacheol"
    },
    {
      "id": "airport_035",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "火车",
      "text": "기차",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_035_example",
        "zh": "这趟火车去釜山吗？",
        "text": "이 기차는 부산에 가나요?",
        "pronunciation": "i gichaneun busane ganayo?"
      },
      "pronunciation": "gicha"
    },
    {
      "id": "airport_036",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "高铁",
      "text": "KTX",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_036_example",
        "zh": "这两个城市之间有高铁吗？",
        "text": "이 도시들 사이에 고속열차가 있나요?",
        "pronunciation": "i dosideul saie gosongnyeolchaga innayo?"
      },
      "pronunciation": "ktx"
    },
    {
      "id": "airport_037",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "公交车",
      "text": "버스",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_037_example",
        "zh": "这辆公交车在博物馆停吗？",
        "text": "이 버스가 박물관에 정차하나요?",
        "pronunciation": "i beoseuga bangmulgwane jeongchahanayo?"
      },
      "pronunciation": "beoseu"
    },
    {
      "id": "airport_038",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "车站",
      "text": "역",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_038_example",
        "zh": "最近的车站在哪里？",
        "text": "가장 가까운 역은 어디인가요?",
        "pronunciation": "gajang gakkaun yeogeun eodiingayo?"
      },
      "pronunciation": "yeok"
    },
    {
      "id": "airport_039",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "站台",
      "text": "플랫폼",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_039_example",
        "zh": "去首尔的列车从哪个站台发车？",
        "text": "서울행 기차는 어느 승강장에서 출발하나요?",
        "pronunciation": "seoulhaeng gichaneun eoneu seunggangjangeseo chulbalhanayo?"
      },
      "pronunciation": "peullaetpom"
    },
    {
      "id": "airport_040",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "时刻表",
      "text": "시간표",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_040_example",
        "zh": "周末的时刻表不一样。",
        "text": "주말 시간표가 다릅니다.",
        "pronunciation": "jumal siganpyoga dareumnida."
      },
      "pronunciation": "siganpyo"
    },
    {
      "id": "airport_041",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "单程票",
      "text": "편도 승차권",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_041_example",
        "zh": "我想买一张去庆州的单程票。",
        "text": "경주행 편도 승차권 한 장 주세요.",
        "pronunciation": "gyeongjuhaeng pyeondo seungchagwon han jang juseyo."
      },
      "pronunciation": "pyeondo seungchagwon"
    },
    {
      "id": "airport_042",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "往返票",
      "text": "왕복 승차권",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_042_example",
        "zh": "一张当天往返票多少钱？",
        "text": "당일 왕복 티켓은 얼마인가요?",
        "pronunciation": "dangil wangbok tikeseun eolmaingayo?"
      },
      "pronunciation": "wangbok seungchagwon"
    },
    {
      "id": "airport_043",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "车票",
      "text": "승차권",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_043_example",
        "zh": "我可以在车上买票吗？",
        "text": "기차에서 표를 살 수 있나요?",
        "pronunciation": "gichaeseo pyoreul sal su innayo?"
      },
      "pronunciation": "seungchagwon"
    },
    {
      "id": "airport_044",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "售票处",
      "text": "매표소",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_044_example",
        "zh": "售票处晚上八点关门。",
        "text": "매표소는 8시에 문을 닫습니다.",
        "pronunciation": "maepyosoneun 8sie muneul datseumnida."
      },
      "pronunciation": "maepyoso"
    },
    {
      "id": "airport_045",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "自动售票机",
      "text": "매표기",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_045_example",
        "zh": "这台自动售票机可以刷卡吗？",
        "text": "이 매표기에서는 카드를 사용할 수 있나요?",
        "pronunciation": "i maepyogieseoneun kadeureul sayonghal su innayo?"
      },
      "pronunciation": "maepyogi"
    },
    {
      "id": "airport_046",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "检票口",
      "text": "개찰구",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_046_example",
        "zh": "请在检票口轻触您的卡。",
        "text": "개찰구에 카드를 탭하세요.",
        "pronunciation": "gaechalgue kadeureul taepaseyo."
      },
      "pronunciation": "gaechalgu"
    },
    {
      "id": "airport_047",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "入口",
      "text": "입구",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_047_example",
        "zh": "主入口在街角。",
        "text": "정문은 모퉁이에 있습니다.",
        "pronunciation": "jeongmuneun motungie itseumnida."
      },
      "pronunciation": "ipgu"
    },
    {
      "id": "airport_048",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "出口",
      "text": "출구",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_048_example",
        "zh": "请从下一个出口出去。",
        "text": "다음 출구로 나가세요.",
        "pronunciation": "daeum chulguro nagaseyo."
      },
      "pronunciation": "chulgu"
    },
    {
      "id": "airport_049",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "问讯处",
      "text": "안내 데스크",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_049_example",
        "zh": "您可以到问讯处领取线路图。",
        "text": "안내데스크에서 노선도를 받으실 수 있습니다.",
        "pronunciation": "annaedeseukeueseo noseondoreul badeusil su itseumnida."
      },
      "pronunciation": "annae deseukeu"
    },
    {
      "id": "airport_050",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "地图",
      "text": "지도",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_050_example",
        "zh": "可以在地图上指给我看吗？",
        "text": "지도에서 보여 주시겠어요?",
        "pronunciation": "jidoeseo boyeo jusigesseoyo?"
      },
      "pronunciation": "jido"
    },
    {
      "id": "airport_051",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "目的地",
      "text": "목적지",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_051_example",
        "zh": "请输入您的目的地。",
        "text": "목적지를 입력해주세요.",
        "pronunciation": "mokjeokjireul imnyeokaejuseyo."
      },
      "pronunciation": "mokjeokji"
    },
    {
      "id": "airport_052",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "汽车",
      "text": "자동차",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jadongcha"
    },
    {
      "id": "airport_053",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "租车",
      "text": "렌터카",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_053_example",
        "zh": "租车时需要出示什么证件？",
        "text": "렌터카를 빌릴 때 어떤 서류가 필요한가요?",
        "pronunciation": "renteokareul billil ttae eotteon seoryuga pillyohangayo?"
      },
      "pronunciation": "renteoka"
    },
    {
      "id": "airport_054",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "加油站",
      "text": "주유소",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "juyuso"
    },
    {
      "id": "airport_055",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "停车场",
      "text": "주차장",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "juchajang"
    },
    {
      "id": "airport_056",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "红绿灯",
      "text": "신호등",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sinhodeung"
    },
    {
      "id": "airport_057",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "人行横道",
      "text": "횡단보도",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "hoengdanbodo"
    },
    {
      "id": "airport_058",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "自行车",
      "text": "자전거",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jajeongeo"
    },
    {
      "id": "airport_059",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "摩托车",
      "text": "오토바이",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "otobai"
    },
    {
      "id": "airport_060",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "步行",
      "text": "도보로",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_060_example",
        "zh": "从车站步行到酒店要多久？",
        "text": "역에서 호텔까지 걸어서 얼마나 걸리나요?",
        "pronunciation": "yeogeseo hotelkkaji georeoseo eolmana geollinayo?"
      },
      "pronunciation": "doboro"
    },
    {
      "id": "airport_061",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "直飞",
      "text": "직항편",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_061_example",
        "zh": "这个航班是直飞，还是需要转机？",
        "text": "이 항공편은 직항인가요, 아니면 환승해야 하나요?",
        "pronunciation": "i hanggongpyeoneun jikangingayo, animyeon hwanseunghaeya hanayo?"
      },
      "pronunciation": "jikangpyeon"
    },
    {
      "id": "airport_062",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李寄存",
      "text": "수하물 보관소",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_062_example",
        "zh": "转机期间，可以把行李寄存在机场吗？",
        "text": "환승하는 동안 공항에 짐을 맡길 수 있나요?",
        "pronunciation": "hwanseunghaneun dongan gonghange jimeul matgil su innayo?"
      },
      "pronunciation": "suhamul bogwanso"
    },
    {
      "id": "airport_063",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李丢失",
      "text": "잃어버린 수하물",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_063_example",
        "zh": "我的行李没有到达，我想申报行李丢失。",
        "text": "제 짐이 도착하지 않았어요. 분실 신고를 하고 싶어요.",
        "pronunciation": "je jimi dochakaji anasseoyo. bunsil singoreul hago sipeoyo."
      },
      "pronunciation": "ireobeorin suhamul"
    },
    {
      "id": "airport_064",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照号码",
      "text": "여권번호",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yeogwonbeonho"
    },
    {
      "id": "airport_065",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航班号",
      "text": "항공편 번호",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "hanggongpyeon beonho"
    },
    {
      "id": "airport_066",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "候机室",
      "text": "대기실",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "daegisil"
    },
    {
      "id": "airport_067",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机时间",
      "text": "탑승 시간",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tapseung sigan"
    },
    {
      "id": "airport_068",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "随身携带",
      "text": "휴대",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_068_example",
        "zh": "这瓶水可以随身携带上飞机吗？",
        "text": "이 물병을 기내에 가지고 들어갈 수 있나요?",
        "pronunciation": "i mulbyeongeul ginaee gajigo deureogal su innayo?"
      },
      "pronunciation": "hyudae"
    },
    {
      "id": "airport_069",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "托运",
      "text": "위탁 수하물",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_069_example",
        "zh": "我想托运这个行李箱。",
        "text": "이 여행 가방을 위탁 수하물로 부치고 싶어요.",
        "pronunciation": "i yeohaeng gabangeul witak suhamullo buchigo sipeoyo."
      },
      "pronunciation": "witak suhamul"
    },
    {
      "id": "airport_070",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李检查",
      "text": "수하물 검사",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "suhamul geomsa"
    },
    {
      "id": "airport_071",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境卡",
      "text": "입국신고서",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ipguksingoseo"
    },
    {
      "id": "airport_072",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "海关申报",
      "text": "세관 신고서",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_072_example",
        "zh": "海关申报单在哪里填写？",
        "text": "세관 신고서는 어디에서 작성하나요?",
        "pronunciation": "segwan singoseoneun eodieseo jakseonghanayo?"
      },
      "pronunciation": "segwan singoseo"
    },
    {
      "id": "airport_073",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "转机柜台",
      "text": "환승 카운터",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "hwanseung kaunteo"
    },
    {
      "id": "airport_074",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "安全带",
      "text": "안전벨트",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "anjeonbelteu"
    },
    {
      "id": "airport_075",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "空乘",
      "text": "승무원",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "seungmuwon"
    },
    {
      "id": "airport_076",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "机长",
      "text": "기장",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gijang"
    },
    {
      "id": "airport_077",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机桥",
      "text": "제트 브리지",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jeteu beuriji"
    },
    {
      "id": "airport_078",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "跑道",
      "text": "활주로",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "hwaljuro"
    },
    {
      "id": "airport_079",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "签证延期",
      "text": "비자 연장",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_079_example",
        "zh": "我的签证快到期了，在哪里申请延期？",
        "text": "비자 만료일이 다가오는데 어디에서 연장 신청을 하나요?",
        "pronunciation": "bija mallyoiri dagaoneunde eodieseo yeonjang sincheongeul hanayo?"
      },
      "pronunciation": "bija yeonjang"
    },
    {
      "id": "airport_080",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境检查",
      "text": "출입국심사",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "churipguksimsa"
    },
    {
      "id": "airport_081",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李超重",
      "text": "초과 수하물",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_airport_081_example",
        "zh": "行李超重了，要付多少费用？",
        "text": "짐이 무게 제한을 초과했어요. 추가 요금이 얼마인가요?",
        "pronunciation": "jimi muge jehaneul chogwahaesseoyo. chuga yogeumi eolmaingayo?"
      },
      "pronunciation": "chogwa suhamul"
    },
    {
      "id": "airport_082",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠窗",
      "text": "창가쪽",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "changgajjok"
    },
    {
      "id": "airport_083",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠过道",
      "text": "통로 쪽",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tongno jjok"
    },
    {
      "id": "airport_084",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "救生衣",
      "text": "구명조끼",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gumyeongjokki"
    },
    {
      "id": "airport_085",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请问在哪里登机？",
      "text": "탑승 게이트는 어디에 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "tapseung geiteuneun eodie innayo?"
    },
    {
      "id": "airport_086",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "请问在哪里取行李？",
      "text": "수하물은 어디서 찾을 수 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "suhamureun eodiseo chajeul su innayo?"
    },
    {
      "id": "airport_087",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "我想换乘。",
      "text": "환승하고 싶어요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "hwanseunghago sipeoyo."
    },
    {
      "id": "hotel_001",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "酒店",
      "text": "호텔",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_001_example",
        "zh": "这家酒店含早餐吗？",
        "text": "이 호텔에는 아침 식사가 포함되어 있나요?",
        "pronunciation": "i hotereneun achim siksaga pohamdoeeo innayo?"
      },
      "pronunciation": "hotel"
    },
    {
      "id": "hotel_002",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "韩屋住宿",
      "text": "한옥 숙소",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_002_example",
        "zh": "我们预订了一晚韩屋住宿。",
        "text": "우리는 한옥스테이를 1박 예약했습니다.",
        "pronunciation": "urineun hanokseuteireul 1bak yeyakaetseumnida."
      },
      "pronunciation": "hanok sukso"
    },
    {
      "id": "hotel_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "民宿",
      "text": "게스트하우스",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_003_example",
        "zh": "这家民宿有共用厨房。",
        "text": "이 게스트하우스에는 공용 주방이 있습니다.",
        "pronunciation": "i geseuteuhauseueneun gongyong jubangi itseumnida."
      },
      "pronunciation": "geseuteuhauseu"
    },
    {
      "id": "hotel_004",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "前台",
      "text": "프런트 데스크",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_004_example",
        "zh": "您可以在前台领取额外的钥匙。",
        "text": "프런트 데스크에서 추가 열쇠를 수령하실 수 있습니다.",
        "pronunciation": "peureonteu deseukeueseo chuga yeolsoereul suryeonghasil su itseumnida."
      },
      "pronunciation": "peureonteu deseukeu"
    },
    {
      "id": "hotel_005",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "预订",
      "text": "예약",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_005_example",
        "zh": "我有一个史密斯名下的预订。",
        "text": "저는 Smith로 예약했습니다.",
        "pronunciation": "jeoneun smithro yeyakaetseumnida."
      },
      "pronunciation": "yeyak"
    },
    {
      "id": "hotel_006",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "入住",
      "text": "체크인",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_006_example",
        "zh": "下午三点可以办理入住。",
        "text": "체크인은 오후 3시부터 시작됩니다.",
        "pronunciation": "chekeuineun ohu 3sibuteo sijakdoemnida."
      },
      "pronunciation": "chekeuin"
    },
    {
      "id": "hotel_007",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "退房",
      "text": "체크아웃",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_007_example",
        "zh": "最晚几点退房？",
        "text": "체크아웃은 몇시입니까?",
        "pronunciation": "chekeuauseun myeotsiimnikka?"
      },
      "pronunciation": "chekeuaut"
    },
    {
      "id": "hotel_008",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "房间",
      "text": "방",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_008_example",
        "zh": "我的房间还没准备好吗？",
        "text": "내 방은 아직 준비됐나요?",
        "pronunciation": "nae bangeun ajik junbidwaennayo?"
      },
      "pronunciation": "bang"
    },
    {
      "id": "hotel_009",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "单人房",
      "text": "싱글룸",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_009_example",
        "zh": "有安静一点的单人房吗？",
        "text": "조용한 싱글룸이 있나요?",
        "pronunciation": "joyonghan singgeullumi innayo?"
      },
      "pronunciation": "singgeullum"
    },
    {
      "id": "hotel_010",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "双人房",
      "text": "트윈룸",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_010_example",
        "zh": "我们想要一间有两张床的双人房。",
        "text": "우리는 침대 2개가 있는 트윈룸을 원합니다.",
        "pronunciation": "urineun chimdae 2gaega inneun teuwillumeul wonhamnida."
      },
      "pronunciation": "teuwillum"
    },
    {
      "id": "hotel_011",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "大床房",
      "text": "더블룸",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_011_example",
        "zh": "我预订的是一间大床房。",
        "text": "더블룸을 예약했어요.",
        "pronunciation": "deobeullumeul yeyakaesseoyo."
      },
      "pronunciation": "deobeullum"
    },
    {
      "id": "hotel_012",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "套房",
      "text": "스위트룸",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_012_example",
        "zh": "这间套房有独立客厅吗？",
        "text": "이 스위트룸에는 별도의 거실이 있나요?",
        "pronunciation": "i seuwiteurumeneun byeoldoui geosiri innayo?"
      },
      "pronunciation": "seuwiteurum"
    },
    {
      "id": "hotel_013",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "钥匙",
      "text": "열쇠",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_013_example",
        "zh": "我把钥匙落在房间里了。",
        "text": "열쇠를 방에 두고 왔습니다.",
        "pronunciation": "yeolsoereul bange dugo watseumnida."
      },
      "pronunciation": "yeolsoe"
    },
    {
      "id": "hotel_014",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "房卡",
      "text": "카드 키",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_014_example",
        "zh": "我的房卡打不开门。",
        "text": "내 방 열쇠가 문을 열지 않아요.",
        "pronunciation": "nae bang yeolsoega muneul yeolji anayo."
      },
      "pronunciation": "kadeu ki"
    },
    {
      "id": "hotel_015",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "行李员",
      "text": "벨 데스크 직원",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_015_example",
        "zh": "行李员会把您的行李送到楼上。",
        "text": "벨 담당 직원이 가방을 위층으로 가져올 것입니다.",
        "pronunciation": "bel damdang jigwoni gabangeul wicheungeuro gajyeool geosimnida."
      },
      "pronunciation": "bel deseukeu jigwon"
    },
    {
      "id": "hotel_016",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "工作人员",
      "text": "직원",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_016_example",
        "zh": "工作人员非常热心。",
        "text": "직원들은 매우 도움이 되었습니다.",
        "pronunciation": "jigwondeureun maeu doumi doeeotseumnida."
      },
      "pronunciation": "jigwon"
    },
    {
      "id": "hotel_017",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "客房服务",
      "text": "룸서비스",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_017_example",
        "zh": "客房服务供应到晚上十一点。",
        "text": "룸서비스는 오후 11시까지 이용 가능합니다.",
        "pronunciation": "rumseobiseuneun ohu 11sikkaji iyong ganeunghamnida."
      },
      "pronunciation": "rumseobiseu"
    },
    {
      "id": "hotel_018",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "打扫",
      "text": "청소",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_018_example",
        "zh": "今天不用打扫房间，谢谢。",
        "text": "오늘은 가사가 필요하지 않습니다. 감사합니다.",
        "pronunciation": "oneureun gasaga pillyohaji anseumnida. gamsahamnida."
      },
      "pronunciation": "cheongso"
    },
    {
      "id": "hotel_019",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "毛巾",
      "text": "수건",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_019_example",
        "zh": "可以再送两条毛巾吗？",
        "text": "수건을 두 개 더 보내 주시겠어요?",
        "pronunciation": "sugeoneul du gae deo bonae jusigesseoyo?"
      },
      "pronunciation": "sugeon"
    },
    {
      "id": "hotel_020",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "床单",
      "text": "침대 시트",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_020_example",
        "zh": "床单上有一块污渍。",
        "text": "침대시트에 얼룩이 있어요.",
        "pronunciation": "chimdaesiteue eollugi isseoyo."
      },
      "pronunciation": "chimdae siteu"
    },
    {
      "id": "hotel_021",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "枕头",
      "text": "베개",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "begae"
    },
    {
      "id": "hotel_022",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "被子",
      "text": "이불",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ibul"
    },
    {
      "id": "hotel_023",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "毯子",
      "text": "담요",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "damyo"
    },
    {
      "id": "hotel_024",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "空调",
      "text": "에어컨",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "eeokeon"
    },
    {
      "id": "hotel_025",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "暖气",
      "text": "난방",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "nanbang"
    },
    {
      "id": "hotel_026",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "浴室",
      "text": "욕실",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yoksil"
    },
    {
      "id": "hotel_027",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "淋浴",
      "text": "샤워",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "syawo"
    },
    {
      "id": "hotel_028",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "浴缸",
      "text": "욕조",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yokjo"
    },
    {
      "id": "hotel_029",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "热水",
      "text": "뜨거운 물",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tteugeoun mul"
    },
    {
      "id": "hotel_030",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "冷水",
      "text": "찬물",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chanmul"
    },
    {
      "id": "hotel_031",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "卫生间",
      "text": "화장실",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "hwajangsil"
    },
    {
      "id": "hotel_032",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "卫生纸",
      "text": "화장지",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "hwajangji"
    },
    {
      "id": "hotel_033",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "洗发水",
      "text": "샴푸",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "syampu"
    },
    {
      "id": "hotel_034",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "沐浴露",
      "text": "바디 워시",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "badi wosi"
    },
    {
      "id": "hotel_035",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "牙刷",
      "text": "칫솔",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chitsol"
    },
    {
      "id": "hotel_036",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "牙膏",
      "text": "치약",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chiyak"
    },
    {
      "id": "hotel_037",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "吹风机",
      "text": "헤어드라이어",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "heeodeuraieo"
    },
    {
      "id": "hotel_038",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "插座",
      "text": "콘센트",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "konsenteu"
    },
    {
      "id": "hotel_039",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "转换插头",
      "text": "플러그 어댑터",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "peulleogeu eodaepteo"
    },
    {
      "id": "hotel_040",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "无线网络",
      "text": "Wi-Fi",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "wi-fi"
    },
    {
      "id": "hotel_041",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "网络",
      "text": "인터넷",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "inteonet"
    },
    {
      "id": "hotel_042",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "电梯",
      "text": "엘리베이터",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ellibeiteo"
    },
    {
      "id": "hotel_043",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "楼梯",
      "text": "계단",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gyedan"
    },
    {
      "id": "hotel_044",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "大堂",
      "text": "로비",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "robi"
    },
    {
      "id": "hotel_045",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "餐厅",
      "text": "레스토랑",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "reseutorang"
    },
    {
      "id": "hotel_046",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "早餐",
      "text": "아침 식사",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "achim siksa"
    },
    {
      "id": "hotel_047",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "叫醒服务",
      "text": "모닝콜",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_047_example",
        "zh": "明早六点可以安排叫醒服务吗？",
        "text": "내일 아침 여섯 시에 모닝콜을 부탁드려도 될까요?",
        "pronunciation": "naeil achim yeoseot sie moningkoreul butakdeuryeodo doelkkayo?"
      },
      "pronunciation": "moningkol"
    },
    {
      "id": "hotel_048",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "洗衣服务",
      "text": "세탁 서비스",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_048_example",
        "zh": "洗衣服务今天送去，明天能取吗？",
        "text": "오늘 세탁 서비스를 맡기면 내일 받을 수 있나요?",
        "pronunciation": "oneul setak seobiseureul matgimyeon naeil badeul su innayo?"
      },
      "pronunciation": "setak seobiseu"
    },
    {
      "id": "hotel_049",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "熨斗",
      "text": "다리미",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "darimi"
    },
    {
      "id": "hotel_050",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "保险箱",
      "text": "금고",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "geumgo"
    },
    {
      "id": "hotel_051",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "退房时间",
      "text": "체크아웃 시간",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chekeuaut sigan"
    },
    {
      "id": "hotel_052",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "入住时间",
      "text": "체크인 시간",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chekeuin sigan"
    },
    {
      "id": "hotel_053",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "空房",
      "text": "빈 방",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_053_example",
        "zh": "今晚还有禁烟的空房吗？",
        "text": "오늘 밤 금연 빈 방이 있나요?",
        "pronunciation": "oneul bam geumyeon bin bangi innayo?"
      },
      "pronunciation": "bin bang"
    },
    {
      "id": "hotel_054",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "满房",
      "text": "객실이 없어요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_054_example",
        "zh": "如果今晚满房，明晚还有房间吗？",
        "text": "오늘 객실이 없으면 내일 밤에는 방이 있나요?",
        "pronunciation": "oneul gaeksiri eopseumyeon naeil bameneun bangi innayo?"
      },
      "pronunciation": "gaeksiri eopseoyo"
    },
    {
      "id": "hotel_055",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "押金",
      "text": "보증금",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_055_example",
        "zh": "退房后押金什么时候退还？",
        "text": "체크아웃 후 보증금은 언제 환불되나요?",
        "pronunciation": "chekeuaut hu bojeunggeumeun eonje hwanbuldoenayo?"
      },
      "pronunciation": "bojeunggeum"
    },
    {
      "id": "hotel_056",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "收据",
      "text": "영수증",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yeongsujeung"
    },
    {
      "id": "hotel_057",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "账单",
      "text": "계산서",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_057_example",
        "zh": "账单上这笔额外费用是什么？",
        "text": "계산서에 있는 이 추가 요금은 무엇인가요?",
        "pronunciation": "gyesanseoe inneun i chuga yogeumeun mueosingayo?"
      },
      "pronunciation": "gyesanseo"
    },
    {
      "id": "hotel_058",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "前台电话",
      "text": "프론트 데스크 전화",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "peuronteu deseukeu jeonhwa"
    },
    {
      "id": "hotel_059",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "烟雾报警器",
      "text": "연기 경보기",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yeongi gyeongbogi"
    },
    {
      "id": "hotel_060",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "灭火器",
      "text": "소화기",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sohwagi"
    },
    {
      "id": "hotel_061",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "婴儿床",
      "text": "아기 침대",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "agi chimdae"
    },
    {
      "id": "hotel_062",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "加床",
      "text": "엑스트라 베드",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ekseuteura bedeu"
    },
    {
      "id": "hotel_063",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "床垫",
      "text": "매트리스",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "maeteuriseu"
    },
    {
      "id": "hotel_064",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "冰箱",
      "text": "냉장고",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "naengjanggo"
    },
    {
      "id": "hotel_065",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "微波炉",
      "text": "전자레인지",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jeonjareinji"
    },
    {
      "id": "hotel_066",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "水壶",
      "text": "주전자",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jujeonja"
    },
    {
      "id": "hotel_067",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "杯子",
      "text": "컵",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "keop"
    },
    {
      "id": "hotel_068",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "拖鞋",
      "text": "슬리퍼",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "seullipeo"
    },
    {
      "id": "hotel_069",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "衣架",
      "text": "옷걸이",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "otgeori"
    },
    {
      "id": "hotel_070",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "衣柜",
      "text": "옷장",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "otjang"
    },
    {
      "id": "hotel_071",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "窗帘",
      "text": "커튼",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "keoteun"
    },
    {
      "id": "hotel_072",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "阳台",
      "text": "발코니",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "balkoni"
    },
    {
      "id": "hotel_073",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "景色",
      "text": "전망",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jeonmang"
    },
    {
      "id": "hotel_074",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "安静",
      "text": "조용한",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_074_example",
        "zh": "我想要一间比较安静的房间。",
        "text": "좀 더 조용한 방을 부탁드려요.",
        "pronunciation": "jom deo joyonghan bangeul butakdeuryeoyo."
      },
      "pronunciation": "joyonghan"
    },
    {
      "id": "hotel_075",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "吵闹",
      "text": "시끄러운",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_075_example",
        "zh": "隔壁房间太吵了，可以换房吗？",
        "text": "옆방이 너무 시끄러운데 방을 바꿀 수 있나요?",
        "pronunciation": "yeopbangi neomu sikkeureounde bangeul bakkul su innayo?"
      },
      "pronunciation": "sikkeureoun"
    },
    {
      "id": "hotel_076",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "舒适",
      "text": "편안하다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_076_example",
        "zh": "这张床睡着不太舒适。",
        "text": "이 침대는 자기에 별로 편안하지 않아요.",
        "pronunciation": "i chimdaeneun jagie byeollo pyeonanhaji anayo."
      },
      "pronunciation": "pyeonanhada"
    },
    {
      "id": "hotel_077",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "房间号",
      "text": "방 번호",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "bang beonho"
    },
    {
      "id": "hotel_078",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "续住",
      "text": "연박",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_hotel_078_example",
        "zh": "我想续住一晚，还有空房吗？",
        "text": "하루 더 연박하고 싶은데 빈 방이 있나요?",
        "pronunciation": "haru deo yeonbakago sipeunde bin bangi innayo?"
      },
      "pronunciation": "yeonbak"
    },
    {
      "id": "hotel_079",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我把钥匙弄丢了。",
      "text": "열쇠를 잃어버렸어요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "yeolsoereul ireobeoryeosseoyo."
    },
    {
      "id": "hotel_080",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "可以寄存行李吗？",
      "text": "짐을 맡길 수 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "jimeul matgil su innayo?"
    },
    {
      "id": "hotel_081",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "请问几点退房？",
      "text": "체크아웃은 몇시인가요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "chekeuauseun myeotsiingayo?"
    },
    {
      "id": "hotel_082",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "可以换个房间吗？",
      "text": "방을 바꿀 수 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "bangeul bakkul su innayo?"
    },
    {
      "id": "food_001",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "早餐",
      "text": "아침 식사",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_001_example",
        "zh": "早餐供应到几点？",
        "text": "아침 식사는 몇 시에 끝나나요?",
        "pronunciation": "achim siksaneun myeot sie kkeunnanayo?"
      },
      "pronunciation": "achim siksa"
    },
    {
      "id": "food_002",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "午餐",
      "text": "점심",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_002_example",
        "zh": "午餐有套餐吗？",
        "text": "점심특선 드시나요?",
        "pronunciation": "jeomsimteukseon deusinayo?"
      },
      "pronunciation": "jeomsim"
    },
    {
      "id": "food_003",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "晚餐",
      "text": "저녁 식사",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_003_example",
        "zh": "今晚两位用餐，有空桌吗？",
        "text": "오늘 저녁에 2인용 테이블이 있나요?",
        "pronunciation": "oneul jeonyeoge 2inyong teibeuri innayo?"
      },
      "pronunciation": "jeonyeok siksa"
    },
    {
      "id": "food_004",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "菜单",
      "text": "메뉴",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_004_example",
        "zh": "可以给我一份菜单吗？",
        "text": "메뉴 좀 보여 주시겠어요?",
        "pronunciation": "menyu jom boyeo jusigesseoyo?"
      },
      "pronunciation": "menyu"
    },
    {
      "id": "food_005",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "点菜",
      "text": "주문",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_005_example",
        "zh": "我们可以点餐了吗？",
        "text": "주문할 준비가 되었습니다.",
        "pronunciation": "jumunhal junbiga doeeotseumnida."
      },
      "pronunciation": "jumun"
    },
    {
      "id": "food_006",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "水",
      "text": "물",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_006_example",
        "zh": "请给我一杯不加冰的水。",
        "text": "얼음 없이 물만 마실 수 있나요?",
        "pronunciation": "eoreum eopsi mulman masil su innayo?"
      },
      "pronunciation": "mul"
    },
    {
      "id": "food_007",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "热水",
      "text": "뜨거운 물",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_007_example",
        "zh": "可以给我一些热水吗？",
        "text": "뜨거운 물 좀 가져다 주시겠어요?",
        "pronunciation": "tteugeoun mul jom gajyeoda jusigesseoyo?"
      },
      "pronunciation": "tteugeoun mul"
    },
    {
      "id": "food_008",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "茶",
      "text": "차",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_008_example",
        "zh": "您有不含咖啡因的茶吗？",
        "text": "디카페인 차 있어요?",
        "pronunciation": "dikapein cha isseoyo?"
      },
      "pronunciation": "cha"
    },
    {
      "id": "food_009",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "咖啡",
      "text": "커피",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_009_example",
        "zh": "请给我一杯加燕麦奶的咖啡。",
        "text": "귀리 우유를 넣은 커피를 마시고 싶습니다.",
        "pronunciation": "gwiri uyureul neoeun keopireul masigo sipseumnida."
      },
      "pronunciation": "keopi"
    },
    {
      "id": "food_010",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "牛奶",
      "text": "우유",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_010_example",
        "zh": "这个酱汁里有牛奶吗？",
        "text": "이 소스에 우유가 들어있나요?",
        "pronunciation": "i soseue uyuga deureoinnayo?"
      },
      "pronunciation": "uyu"
    },
    {
      "id": "food_011",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "果汁",
      "text": "주스",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_011_example",
        "zh": "请给孩子一杯小杯苹果汁。",
        "text": "어린이용 작은 사과 주스 주세요.",
        "pronunciation": "eoriniyong jageun sagwa juseu juseyo."
      },
      "pronunciation": "juseu"
    },
    {
      "id": "food_012",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "啤酒",
      "text": "맥주",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_012_example",
        "zh": "你们有本地精酿啤酒吗？",
        "text": "현지 수제 맥주가 있나요?",
        "pronunciation": "hyeonji suje maekjuga innayo?"
      },
      "pronunciation": "maekju"
    },
    {
      "id": "food_013",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "红酒",
      "text": "와인",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_013_example",
        "zh": "请给我一杯佐餐红酒。",
        "text": "저녁 식사와 함께 레드 와인 한 잔을 주세요.",
        "pronunciation": "jeonyeok siksawa hamkke redeu wain han janeul juseyo."
      },
      "pronunciation": "wain"
    },
    {
      "id": "food_014",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "米饭",
      "text": "밥",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_014_example",
        "zh": "这个可以把薯条换成米饭吗？",
        "text": "감자튀김을 밥으로 대체할 수 있나요?",
        "pronunciation": "gamjatwigimeul babeuro daechehal su innayo?"
      },
      "pronunciation": "bap"
    },
    {
      "id": "food_015",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "面包",
      "text": "빵",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_015_example",
        "zh": "面包可以免费续吗？",
        "text": "빵 리필은 무료인가요?",
        "pronunciation": "ppang ripireun muryoingayo?"
      },
      "pronunciation": "ppang"
    },
    {
      "id": "food_016",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "面条",
      "text": "국수",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_016_example",
        "zh": "这些面条可以做得不辣吗？",
        "text": "이 국수를 순하게 만들 수 있나요?",
        "pronunciation": "i guksureul sunhage mandeul su innayo?"
      },
      "pronunciation": "guksu"
    },
    {
      "id": "food_017",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "拉面",
      "text": "라면",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_017_example",
        "zh": "这碗拉面是用猪骨汤做的吗？",
        "text": "이 라면은 돼지고기 육수로 만든 라면인가요?",
        "pronunciation": "i ramyeoneun dwaejigogi yuksuro mandeun ramyeoningayo?"
      },
      "pronunciation": "ramyeon"
    },
    {
      "id": "food_018",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "乌冬面",
      "text": "우동",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_018_example",
        "zh": "我想要一份蔬菜乌冬面。",
        "text": "야채 우동을 주세요.",
        "pronunciation": "yachae udongeul juseyo."
      },
      "pronunciation": "udong"
    },
    {
      "id": "food_019",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "荞麦面",
      "text": "소바",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_019_example",
        "zh": "荞麦面里含麸质吗？",
        "text": "메밀국수에는 글루텐이 포함되어 있나요?",
        "pronunciation": "memilguksueneun geulluteni pohamdoeeo innayo?"
      },
      "pronunciation": "soba"
    },
    {
      "id": "food_020",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "寿司",
      "text": "초밥",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_020_example",
        "zh": "请来一份三文鱼寿司外带。",
        "text": "연어 초밥을 주문하고 싶습니다.",
        "pronunciation": "yeoneo chobabeul jumunhago sipseumnida."
      },
      "pronunciation": "chobap"
    },
    {
      "id": "food_021",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "生鱼片",
      "text": "생선회",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "saengseonhoe"
    },
    {
      "id": "food_022",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "天妇罗",
      "text": "튀김",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "twigim"
    },
    {
      "id": "food_023",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "味噌汤",
      "text": "된장국",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "doenjangguk"
    },
    {
      "id": "food_024",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鸡蛋",
      "text": "계란",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gyeran"
    },
    {
      "id": "food_025",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "肉",
      "text": "고기",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gogi"
    },
    {
      "id": "food_026",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "牛肉",
      "text": "쇠고기",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "soegogi"
    },
    {
      "id": "food_027",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "猪肉",
      "text": "돼지고기",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dwaejigogi"
    },
    {
      "id": "food_028",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鸡肉",
      "text": "닭고기",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dakgogi"
    },
    {
      "id": "food_029",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鱼",
      "text": "생선",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "saengseon"
    },
    {
      "id": "food_030",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "虾",
      "text": "새우",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "saeu"
    },
    {
      "id": "food_031",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "螃蟹",
      "text": "게",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ge"
    },
    {
      "id": "food_032",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "蔬菜",
      "text": "야채",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yachae"
    },
    {
      "id": "food_033",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "水果",
      "text": "과일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gwail"
    },
    {
      "id": "food_034",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "苹果",
      "text": "사과",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sagwa"
    },
    {
      "id": "food_035",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "香蕉",
      "text": "바나나",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "banana"
    },
    {
      "id": "food_036",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "橙子",
      "text": "오렌지",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "orenji"
    },
    {
      "id": "food_037",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "草莓",
      "text": "딸기",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ttalgi"
    },
    {
      "id": "food_038",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "西瓜",
      "text": "수박",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "subak"
    },
    {
      "id": "food_039",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "沙拉",
      "text": "샐러드",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "saelleodeu"
    },
    {
      "id": "food_040",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "汤",
      "text": "수프",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "supeu"
    },
    {
      "id": "food_041",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "汉堡",
      "text": "햄버거",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "haembeogeo"
    },
    {
      "id": "food_042",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "炸鸡",
      "text": "프라이드치킨",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "peuraideuchikin"
    },
    {
      "id": "food_043",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "薯条",
      "text": "감자튀김",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gamjatwigim"
    },
    {
      "id": "food_044",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "披萨",
      "text": "피자",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pija"
    },
    {
      "id": "food_045",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "三明治",
      "text": "샌드위치",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "saendeuwichi"
    },
    {
      "id": "food_046",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "冰淇淋",
      "text": "아이스크림",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "aiseukeurim"
    },
    {
      "id": "food_047",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "蛋糕",
      "text": "케이크",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "keikeu"
    },
    {
      "id": "food_048",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "甜点",
      "text": "디저트",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "dijeoteu"
    },
    {
      "id": "food_049",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "巧克力",
      "text": "초콜릿",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chokollit"
    },
    {
      "id": "food_050",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "糖果",
      "text": "사탕",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "satang"
    },
    {
      "id": "food_051",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "盐",
      "text": "소금",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sogeum"
    },
    {
      "id": "food_052",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "糖",
      "text": "설탕",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "seoltang"
    },
    {
      "id": "food_053",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "酱油",
      "text": "간장",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ganjang"
    },
    {
      "id": "food_054",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "醋",
      "text": "식초",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sikcho"
    },
    {
      "id": "food_055",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "胡椒",
      "text": "후추",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "huchu"
    },
    {
      "id": "food_056",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "辣椒",
      "text": "칠리",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chilli"
    },
    {
      "id": "food_057",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "芥末",
      "text": "와사비",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "wasabi"
    },
    {
      "id": "food_058",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "筷子",
      "text": "젓가락",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jeotgarak"
    },
    {
      "id": "food_059",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "勺子",
      "text": "숟가락",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sutgarak"
    },
    {
      "id": "food_060",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "叉子",
      "text": "포크",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pokeu"
    },
    {
      "id": "food_061",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "刀",
      "text": "칼",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kal"
    },
    {
      "id": "food_062",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "盘子",
      "text": "접시",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jeopsi"
    },
    {
      "id": "food_063",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "碗",
      "text": "그릇",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "geureut"
    },
    {
      "id": "food_064",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "玻璃杯",
      "text": "유리잔",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yurijan"
    },
    {
      "id": "food_065",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "餐巾纸",
      "text": "냅킨",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "naepkin"
    },
    {
      "id": "food_066",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "结账",
      "text": "계산",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_066_example",
        "zh": "我们可以分开结账吗？",
        "text": "따로 계산할 수 있나요?",
        "pronunciation": "ttaro gyesanhal su innayo?"
      },
      "pronunciation": "gyesan"
    },
    {
      "id": "food_067",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "收银台",
      "text": "계산대",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gyesandae"
    },
    {
      "id": "food_068",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "服务员",
      "text": "직원",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jigwon"
    },
    {
      "id": "food_069",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "空位",
      "text": "빈자리",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "binjari"
    },
    {
      "id": "food_070",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "吸烟区",
      "text": "흡연석",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "heubyeonseok"
    },
    {
      "id": "food_071",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "禁烟区",
      "text": "금연석",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "geumyeonseok"
    },
    {
      "id": "food_072",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "外带",
      "text": "테이크아웃",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_072_example",
        "zh": "剩下的菜可以打包外带吗？",
        "text": "남은 음식을 포장해서 가져갈 수 있나요?",
        "pronunciation": "nameun eumsigeul pojanghaeseo gajyeogal su innayo?"
      },
      "pronunciation": "teikeuaut"
    },
    {
      "id": "food_073",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "堂食",
      "text": "매장에서 먹기",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "maejangeseo meokgi"
    },
    {
      "id": "food_074",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "好吃",
      "text": "맛있다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_074_example",
        "zh": "这道菜很好吃，叫什么名字？",
        "text": "이 음식 정말 맛있네요. 이름이 뭐예요?",
        "pronunciation": "i eumsik jeongmal masinneyo. ireumi mwoyeyo?"
      },
      "pronunciation": "masitda"
    },
    {
      "id": "food_075",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "难吃",
      "text": "맛없다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_075_example",
        "zh": "这道菜不太好吃，可以换一道吗？",
        "text": "이 음식은 별로 맛이 없는데 다른 메뉴로 바꿀 수 있나요?",
        "pronunciation": "i eumsigeun byeollo masi eomneunde dareun menyuro bakkul su innayo?"
      },
      "pronunciation": "maseopda"
    },
    {
      "id": "food_076",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "甜",
      "text": "달다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_076_example",
        "zh": "有不太甜的甜点吗？",
        "text": "덜 단 디저트가 있나요?",
        "pronunciation": "deol dan dijeoteuga innayo?"
      },
      "pronunciation": "dalda"
    },
    {
      "id": "food_077",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "咸",
      "text": "짜다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_077_example",
        "zh": "这道菜对我来说有点咸。",
        "text": "이 음식은 제 입맛에는 조금 짜요.",
        "pronunciation": "i eumsigeun je immaseneun jogeum jjayo."
      },
      "pronunciation": "jjada"
    },
    {
      "id": "food_078",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "辣",
      "text": "맵다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_078_example",
        "zh": "这道菜很辣吗？我不太能吃辣。",
        "text": "이 음식은 매운가요? 저는 매운 음식을 잘 못 먹어요.",
        "pronunciation": "i eumsigeun maeungayo? jeoneun maeun eumsigeul jal mot meogeoyo."
      },
      "pronunciation": "maepda"
    },
    {
      "id": "food_079",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "苦",
      "text": "쓰다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_079_example",
        "zh": "这杯咖啡太苦了，可以加点牛奶吗？",
        "text": "이 커피는 너무 써요. 우유를 조금 넣어도 될까요?",
        "pronunciation": "i keopineun neomu sseoyo. uyureul jogeum neoeodo doelkkayo?"
      },
      "pronunciation": "sseuda"
    },
    {
      "id": "food_080",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "酸",
      "text": "시다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_080_example",
        "zh": "这个酱汁偏酸吗？",
        "text": "이 소스는 신맛이 나나요?",
        "pronunciation": "i soseuneun sinmasi nanayo?"
      },
      "pronunciation": "sida"
    },
    {
      "id": "food_081",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "热",
      "text": "뜨겁다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_081_example",
        "zh": "汤很烫，请小心。",
        "text": "국이 뜨거우니 조심하세요.",
        "pronunciation": "gugi tteugeouni josimhaseyo."
      },
      "pronunciation": "tteugeopda"
    },
    {
      "id": "food_082",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "冷",
      "text": "차갑다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_082_example",
        "zh": "这道菜是冷着吃的吗？",
        "text": "이 음식은 차갑게 먹는 건가요?",
        "pronunciation": "i eumsigeun chagapge meongneun geongayo?"
      },
      "pronunciation": "chagapda"
    },
    {
      "id": "food_083",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "新鲜",
      "text": "신선하다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_083_example",
        "zh": "今天有新鲜的鱼吗？",
        "text": "오늘 신선한 생선이 있나요?",
        "pronunciation": "oneul sinseonhan saengseoni innayo?"
      },
      "pronunciation": "sinseonhada"
    },
    {
      "id": "food_084",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "吃饱了",
      "text": "배불러요",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "baebulleoyo"
    },
    {
      "id": "food_085",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "饿了",
      "text": "배고파요",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "baegopayo"
    },
    {
      "id": "food_086",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "渴了",
      "text": "목말라요",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "mongmallayo"
    },
    {
      "id": "food_087",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "过敏",
      "text": "알레르기",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_087_example",
        "zh": "我对花生过敏，这道菜含花生吗？",
        "text": "저는 땅콩 알레르기가 있어요. 이 음식에 땅콩이 들어 있나요?",
        "pronunciation": "jeoneun ttangkong allereugiga isseoyo. i eumsige ttangkongi deureo innayo?"
      },
      "pronunciation": "allereugi"
    },
    {
      "id": "food_088",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "素食者",
      "text": "채식주의자",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_food_088_example",
        "zh": "我是素食者，这道菜里有肉或鱼吗？",
        "text": "저는 채식주의자예요. 이 음식에 고기나 생선이 들어 있나요?",
        "pronunciation": "jeoneun chaesikjuuijayeyo. i eumsige gogina saengseoni deureo innayo?"
      },
      "pronunciation": "chaesikjuuija"
    },
    {
      "id": "food_089",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请问有中文菜单吗？",
      "text": "중국어 메뉴가 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "junggugeo menyuga innayo?"
    },
    {
      "id": "food_090",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请给我这个。",
      "text": "이것을 주세요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "igeoseul juseyo."
    },
    {
      "id": "food_091",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "不要辣。",
      "text": "맵지 않게 주세요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "maepji anke juseyo."
    },
    {
      "id": "food_092",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "结账。",
      "text": "계산해 주세요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "gyesanhae juseyo."
    },
    {
      "id": "food_093",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "我可以点餐吗？",
      "text": "주문할 수 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "jumunhal su innayo?"
    },
    {
      "id": "food_094",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "我对……过敏。",
      "text": "저는 …… 알레르기가 있어요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "jeoneun …… allereugiga isseoyo."
    },
    {
      "id": "food_095",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "再来一杯水。",
      "text": "물 한 잔 더 주세요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "mul han jan deo juseyo."
    },
    {
      "id": "food_096",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "这个好吃吗？",
      "text": "이거 맛있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "igeo masinnayo?"
    },
    {
      "id": "shopping_001",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "商店",
      "text": "가게",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_001_example",
        "zh": "这家商店星期天营业吗？",
        "text": "이 가게는 일요일에도 영업하나요?",
        "pronunciation": "i gageneun illyoiredo yeongeopanayo?"
      },
      "pronunciation": "gage"
    },
    {
      "id": "shopping_002",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "商场",
      "text": "백화점",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_002_example",
        "zh": "百货商场的鞋区在几楼？",
        "text": "신발 매장은 몇 층에 있나요?",
        "pronunciation": "sinbal maejangeun myeot cheunge innayo?"
      },
      "pronunciation": "baekwajeom"
    },
    {
      "id": "shopping_003",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "超市",
      "text": "슈퍼마켓",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_003_example",
        "zh": "这家超市有熟食区吗？",
        "text": "이 슈퍼마켓에는 델리가 있나요?",
        "pronunciation": "i syupeomakeseneun delliga innayo?"
      },
      "pronunciation": "syupeomaket"
    },
    {
      "id": "shopping_004",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "便利店",
      "text": "편의점",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_004_example",
        "zh": "附近有二十四小时便利店吗？",
        "text": "근처에 24시간 편의점이 있나요?",
        "pronunciation": "geuncheoe 24sigan pyeonuijeomi innayo?"
      },
      "pronunciation": "pyeonuijeom"
    },
    {
      "id": "shopping_005",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "市场",
      "text": "시장",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_005_example",
        "zh": "周六的农贸市场在哪里？",
        "text": "토요일에 농산물 직거래 장터는 어디에 있나요?",
        "pronunciation": "toyoire nongsanmul jikgeorae jangteoneun eodie innayo?"
      },
      "pronunciation": "sijang"
    },
    {
      "id": "shopping_006",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "价格",
      "text": "가격",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_006_example",
        "zh": "这个价格包含增值税吗？",
        "text": "이 가격에 부가세가 포함되어 있나요?",
        "pronunciation": "i gagyeoge bugasega pohamdoeeo innayo?"
      },
      "pronunciation": "gagyeok"
    },
    {
      "id": "shopping_007",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "多少钱",
      "text": "얼마예요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_007_example",
        "zh": "加税后一共多少钱？",
        "text": "세금 포함하면 얼마인가요?",
        "pronunciation": "segeum pohamhamyeon eolmaingayo?"
      },
      "pronunciation": "eolmayeyo"
    },
    {
      "id": "shopping_008",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "贵",
      "text": "비싸다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_008_example",
        "zh": "这个对我的预算来说太贵了。",
        "text": "내 예산에 비해 너무 비싸네요.",
        "pronunciation": "nae yesane bihae neomu bissaneyo."
      },
      "pronunciation": "bissada"
    },
    {
      "id": "shopping_009",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "便宜",
      "text": "싸다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_009_example",
        "zh": "有更便宜的款式吗？",
        "text": "더 저렴한 옵션이 있나요?",
        "pronunciation": "deo jeoryeomhan opsyeoni innayo?"
      },
      "pronunciation": "ssada"
    },
    {
      "id": "shopping_010",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "打折",
      "text": "할인",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_010_example",
        "zh": "学生可以享受折扣吗？",
        "text": "학생 할인이 있나요?",
        "pronunciation": "haksaeng harini innayo?"
      },
      "pronunciation": "harin"
    },
    {
      "id": "shopping_011",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "促销",
      "text": "할인 행사",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_011_example",
        "zh": "这件夹克现在打折。",
        "text": "이 재킷은 현재 세일 중이에요.",
        "pronunciation": "i jaekiseun hyeonjae seil jungieyo."
      },
      "pronunciation": "harin haengsa"
    },
    {
      "id": "shopping_012",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "小票",
      "text": "영수증",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_012_example",
        "zh": "请把小票放进袋子里。",
        "text": "영수증은 가방에 넣어주세요.",
        "pronunciation": "yeongsujeungeun gabange neoeojuseyo."
      },
      "pronunciation": "yeongsujeung"
    },
    {
      "id": "shopping_013",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "现金",
      "text": "현금",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_013_example",
        "zh": "我可以用现金支付。",
        "text": "현금으로 지불할 수 있어요.",
        "pronunciation": "hyeongeumeuro jibulhal su isseoyo."
      },
      "pronunciation": "hyeongeum"
    },
    {
      "id": "shopping_014",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "信用卡",
      "text": "신용카드",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_014_example",
        "zh": "你们接受这张信用卡吗？",
        "text": "이 신용카드를 받나요?",
        "pronunciation": "i sinyongkadeureul bannayo?"
      },
      "pronunciation": "sinyongkadeu"
    },
    {
      "id": "shopping_015",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "银行卡",
      "text": "체크카드",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_015_example",
        "zh": "我的银行卡被拒了。",
        "text": "내 은행 카드가 거부되었습니다.",
        "pronunciation": "nae eunhaeng kadeuga geobudoeeotseumnida."
      },
      "pronunciation": "chekeukadeu"
    },
    {
      "id": "shopping_016",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "零钱",
      "text": "잔돈",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_016_example",
        "zh": "您有二十美元的零钱吗？",
        "text": "20짜리 잔돈 있나요?",
        "pronunciation": "20jjari jandon innayo?"
      },
      "pronunciation": "jandon"
    },
    {
      "id": "shopping_017",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "支付",
      "text": "결제",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_017_example",
        "zh": "付款没有成功。",
        "text": "결제가 이루어지지 않았습니다.",
        "pronunciation": "gyeoljega irueojiji anatseumnida."
      },
      "pronunciation": "gyeolje"
    },
    {
      "id": "shopping_018",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "手机支付",
      "text": "모바일 결제",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_018_example",
        "zh": "我可以用手机支付吗？",
        "text": "휴대폰으로 결제할 수 있나요?",
        "pronunciation": "hyudaeponeuro gyeoljehal su innayo?"
      },
      "pronunciation": "mobail gyeolje"
    },
    {
      "id": "shopping_019",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "二维码",
      "text": "QR 코드",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_019_example",
        "zh": "请扫描收据上的二维码。",
        "text": "영수증에 있는 QR 코드를 스캔하세요.",
        "pronunciation": "yeongsujeunge inneun qr kodeureul seukaenhaseyo."
      },
      "pronunciation": "qr kodeu"
    },
    {
      "id": "shopping_020",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "word",
      "zh": "试衣间",
      "text": "탈의실",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_020_example",
        "zh": "试衣间在哪里？",
        "text": "피팅룸은 어디에 있나요?",
        "pronunciation": "pitingnumeun eodie innayo?"
      },
      "pronunciation": "taruisil"
    },
    {
      "id": "shopping_021",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "word",
      "zh": "试穿",
      "text": "입어보기",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_021_example",
        "zh": "我想先试穿这件外套，再决定买不买。",
        "text": "이 코트를 입어 보고 살지 결정하고 싶어요.",
        "pronunciation": "i koteureul ibeo bogo salji gyeoljeonghago sipeoyo."
      },
      "pronunciation": "ibeobogi"
    },
    {
      "id": "shopping_022",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "尺寸",
      "text": "사이즈",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "saijeu"
    },
    {
      "id": "shopping_023",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "大号",
      "text": "큰 사이즈",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "keun saijeu"
    },
    {
      "id": "shopping_024",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "中号",
      "text": "중간 사이즈",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "junggan saijeu"
    },
    {
      "id": "shopping_025",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "小号",
      "text": "작은 사이즈",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jageun saijeu"
    },
    {
      "id": "shopping_026",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "衣服",
      "text": "옷",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ot"
    },
    {
      "id": "shopping_027",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "衬衫",
      "text": "셔츠",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "syeocheu"
    },
    {
      "id": "shopping_028",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "T恤",
      "text": "티셔츠",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "tisyeocheu"
    },
    {
      "id": "shopping_029",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "裤子",
      "text": "바지",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "baji"
    },
    {
      "id": "shopping_030",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "牛仔裤",
      "text": "청바지",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "cheongbaji"
    },
    {
      "id": "shopping_031",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "裙子",
      "text": "스커트",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "seukeoteu"
    },
    {
      "id": "shopping_032",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "连衣裙",
      "text": "드레스",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "deureseu"
    },
    {
      "id": "shopping_033",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "外套",
      "text": "코트",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "koteu"
    },
    {
      "id": "shopping_034",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "毛衣",
      "text": "스웨터",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "seuweteo"
    },
    {
      "id": "shopping_035",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "内衣",
      "text": "속옷",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sogot"
    },
    {
      "id": "shopping_036",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "袜子",
      "text": "양말",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yangmal"
    },
    {
      "id": "shopping_037",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "鞋子",
      "text": "신발",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sinbal"
    },
    {
      "id": "shopping_038",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "运动鞋",
      "text": "운동화",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "undonghwa"
    },
    {
      "id": "shopping_039",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "帽子",
      "text": "모자",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "moja"
    },
    {
      "id": "shopping_040",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "围巾",
      "text": "스카프",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "seukapeu"
    },
    {
      "id": "shopping_041",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手套",
      "text": "장갑",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "janggap"
    },
    {
      "id": "shopping_042",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "包",
      "text": "가방",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gabang"
    },
    {
      "id": "shopping_043",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "钱包",
      "text": "지갑",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jigap"
    },
    {
      "id": "shopping_044",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "眼镜",
      "text": "안경",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "angyeong"
    },
    {
      "id": "shopping_045",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "太阳镜",
      "text": "선글라스",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "seongeullaseu"
    },
    {
      "id": "shopping_046",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手表",
      "text": "시계",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sigye"
    },
    {
      "id": "shopping_047",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "首饰",
      "text": "액세서리",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "aekseseori"
    },
    {
      "id": "shopping_048",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "化妆品",
      "text": "화장품",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "hwajangpum"
    },
    {
      "id": "shopping_049",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "护肤品",
      "text": "스킨케어",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "seukinkeeo"
    },
    {
      "id": "shopping_050",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "香水",
      "text": "향수",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "hyangsu"
    },
    {
      "id": "shopping_051",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "口红",
      "text": "립스틱",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ripseutik"
    },
    {
      "id": "shopping_052",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "洗面奶",
      "text": "페이셜 클렌저",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "peisyeol keullenjeo"
    },
    {
      "id": "shopping_053",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "食品",
      "text": "음식",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "eumsik"
    },
    {
      "id": "shopping_054",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "饮料",
      "text": "음료수",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "eumnyosu"
    },
    {
      "id": "shopping_055",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "零食",
      "text": "간식",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gansik"
    },
    {
      "id": "shopping_056",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "纪念品",
      "text": "기념품",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ginyeompum"
    },
    {
      "id": "shopping_057",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "特产",
      "text": "지역 특산품",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_shopping_057_example",
        "zh": "这个特产需要冷藏吗？",
        "text": "이 지역 특산품은 냉장 보관해야 하나요?",
        "pronunciation": "i jiyeok teuksanpumeun naengjang bogwanhaeya hanayo?"
      },
      "pronunciation": "jiyeok teuksanpum"
    },
    {
      "id": "shopping_058",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "玩具",
      "text": "장난감",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jangnangam"
    },
    {
      "id": "shopping_059",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "电子产品",
      "text": "전자 제품",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jeonja jepum"
    },
    {
      "id": "shopping_060",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手机",
      "text": "휴대전화",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "hyudaejeonhwa"
    },
    {
      "id": "shopping_061",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "充电器",
      "text": "충전기",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "chungjeongi"
    },
    {
      "id": "shopping_062",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "耳机",
      "text": "이어폰",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ieopon"
    },
    {
      "id": "shopping_063",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "相机",
      "text": "카메라",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "kamera"
    },
    {
      "id": "shopping_064",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "电池",
      "text": "배터리",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "baeteori"
    },
    {
      "id": "shopping_065",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "购物袋",
      "text": "쇼핑백",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "syopingbaek"
    },
    {
      "id": "shopping_066",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "环保袋",
      "text": "에코백",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ekobaek"
    },
    {
      "id": "shopping_067",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以退税吗？",
      "text": "택스 리펀드가 되나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "taekseu ripeondeuga doenayo?"
    },
    {
      "id": "shopping_068",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "可以便宜一点吗？",
      "text": "조금 깎아 주실 수 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "jogeum kkakka jusil su innayo?"
    },
    {
      "id": "shopping_069",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我只是看看。",
      "text": "그냥 둘러보고 있어요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "geunyang dulleobogo isseoyo."
    },
    {
      "id": "shopping_070",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我要这个。",
      "text": "이걸로 할게요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "igeollo halgeyo."
    },
    {
      "id": "shopping_071",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "可以刷卡吗？",
      "text": "카드로 결제할 수 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "kadeuro gyeoljehal su innayo?"
    },
    {
      "id": "shopping_072",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有没有大一点的？",
      "text": "더 큰 것도 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "deo keun geotdo innayo?"
    },
    {
      "id": "shopping_073",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "可以试穿吗？",
      "text": "입어봐도 될까요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "ibeobwado doelkkayo?"
    },
    {
      "id": "directions_001",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "哪里",
      "text": "어디",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_001_example",
        "zh": "洗手间在哪里？",
        "text": "화장실은 어디에 있나요?",
        "pronunciation": "hwajangsireun eodie innayo?"
      },
      "pronunciation": "eodi"
    },
    {
      "id": "directions_002",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "这里",
      "text": "여기",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_002_example",
        "zh": "我们现在在这里。",
        "text": "우리는 바로 여기에 있습니다.",
        "pronunciation": "urineun baro yeogie itseumnida."
      },
      "pronunciation": "yeogi"
    },
    {
      "id": "directions_003",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "那里",
      "text": "저기",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_003_example",
        "zh": "公交站就在那边。",
        "text": "버스 정류장은 저기에 있어요.",
        "pronunciation": "beoseu jeongnyujangeun jeogie isseoyo."
      },
      "pronunciation": "jeogi"
    },
    {
      "id": "directions_004",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "左边",
      "text": "왼쪽",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_004_example",
        "zh": "银行在你的左边。",
        "text": "은행은 왼쪽에 있을 거예요.",
        "pronunciation": "eunhaengeun oenjjoge isseul geoyeyo."
      },
      "pronunciation": "oenjjok"
    },
    {
      "id": "directions_005",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "右边",
      "text": "오른쪽",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_005_example",
        "zh": "在红绿灯处向右转。",
        "text": "신호등에서 우회전하세요.",
        "pronunciation": "sinhodeungeseo uhoejeonhaseyo."
      },
      "pronunciation": "oreunjjok"
    },
    {
      "id": "directions_006",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "前面",
      "text": "앞",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_006_example",
        "zh": "出租车就在酒店前面。",
        "text": "택시가 호텔 앞에 있어요.",
        "pronunciation": "taeksiga hotel ape isseoyo."
      },
      "pronunciation": "ap"
    },
    {
      "id": "directions_007",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "后面",
      "text": "뒤",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_007_example",
        "zh": "停车场在大楼后面。",
        "text": "주차장은 건물뒤에 있어요.",
        "pronunciation": "juchajangeun geonmuldwie isseoyo."
      },
      "pronunciation": "dwi"
    },
    {
      "id": "directions_008",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "旁边",
      "text": "옆에",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_008_example",
        "zh": "药店就在咖啡馆旁边。",
        "text": "약국은 카페 옆에 있어요.",
        "pronunciation": "yakgugeun kape yeope isseoyo."
      },
      "pronunciation": "yeope"
    },
    {
      "id": "directions_009",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "对面",
      "text": "반대편",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_009_example",
        "zh": "博物馆在公园对面。",
        "text": "박물관은 공원 건너편에 있습니다.",
        "pronunciation": "bangmulgwaneun gongwon geonneopyeone itseumnida."
      },
      "pronunciation": "bandaepyeon"
    },
    {
      "id": "directions_010",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "附近",
      "text": "근처",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_010_example",
        "zh": "附近有 ATM 吗？",
        "text": "근처에 ATM이 있나요?",
        "pronunciation": "geuncheoe atmi innayo?"
      },
      "pronunciation": "geuncheo"
    },
    {
      "id": "directions_011",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "word",
      "zh": "远",
      "text": "멀다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_011_example",
        "zh": "从这里走过去远吗？",
        "text": "여기서 걸어가려면 먼가요?",
        "pronunciation": "yeogiseo georeogaryeomyeon meongayo?"
      },
      "pronunciation": "meolda"
    },
    {
      "id": "directions_012",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "word",
      "zh": "近",
      "text": "가깝다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_012_example",
        "zh": "火车站离这里很近。",
        "text": "기차역이 가까이에 있습니다.",
        "pronunciation": "gichayeogi gakkaie itseumnida."
      },
      "pronunciation": "gakkapda"
    },
    {
      "id": "directions_013",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "直走",
      "text": "쭉 가다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_013_example",
        "zh": "直走两个街区。",
        "text": "두 블록 직진하세요.",
        "pronunciation": "du beullok jikjinhaseyo."
      },
      "pronunciation": "jjuk gada"
    },
    {
      "id": "directions_014",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "转弯",
      "text": "방향을 틀다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_014_example",
        "zh": "过桥后向左转。",
        "text": "다리를 지나면 좌회전하세요.",
        "pronunciation": "darireul jinamyeon jwahoejeonhaseyo."
      },
      "pronunciation": "banghyangeul teulda"
    },
    {
      "id": "directions_015",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "十字路口",
      "text": "교차로",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_015_example",
        "zh": "在下一个十字路口和我会合。",
        "text": "다음 교차로에서 만나요.",
        "pronunciation": "daeum gyocharoeseo mannayo."
      },
      "pronunciation": "gyocharo"
    },
    {
      "id": "directions_016",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "桥",
      "text": "다리",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_016_example",
        "zh": "过桥后您会看到酒店。",
        "text": "다리를 건너면 호텔이 보입니다.",
        "pronunciation": "darireul geonneomyeon hoteri boimnida."
      },
      "pronunciation": "dari"
    },
    {
      "id": "directions_017",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "路",
      "text": "도로",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_017_example",
        "zh": "这条路通往国家公园吗？",
        "text": "이 길이 국립공원으로 연결되어 있나요?",
        "pronunciation": "i giri gungnipgongwoneuro yeongyeoldoeeo innayo?"
      },
      "pronunciation": "doro"
    },
    {
      "id": "directions_018",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "街道",
      "text": "거리",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_018_example",
        "zh": "我们在第五大街上。",
        "text": "우리는 5번가에 있어요.",
        "pronunciation": "urineun 5beongae isseoyo."
      },
      "pronunciation": "geori"
    },
    {
      "id": "directions_019",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "建筑",
      "text": "건물",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_019_example",
        "zh": "那座玻璃大楼就是图书馆。",
        "text": "유리 건물은 도서관이다.",
        "pronunciation": "yuri geonmureun doseogwanida."
      },
      "pronunciation": "geonmul"
    },
    {
      "id": "directions_020",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "派出所",
      "text": "파출소",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_directions_020_example",
        "zh": "最近的警察局在哪里？",
        "text": "가장 가까운 경찰서는 어디에 있나요?",
        "pronunciation": "gajang gakkaun gyeongchalseoneun eodie innayo?"
      },
      "pronunciation": "pachulso"
    },
    {
      "id": "directions_021",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "医院",
      "text": "병원",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "byeongwon"
    },
    {
      "id": "directions_022",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "药店",
      "text": "약국",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yakguk"
    },
    {
      "id": "directions_023",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "银行",
      "text": "은행",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "eunhaeng"
    },
    {
      "id": "directions_024",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "邮局",
      "text": "우체국",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ucheguk"
    },
    {
      "id": "directions_025",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "厕所",
      "text": "화장실",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "hwajangsil"
    },
    {
      "id": "directions_026",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "公交站",
      "text": "버스 정류장",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "beoseu jeongnyujang"
    },
    {
      "id": "directions_027",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "地铁站",
      "text": "지하철역",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jihacheollyeok"
    },
    {
      "id": "directions_028",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "景点",
      "text": "관광지",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gwangwangji"
    },
    {
      "id": "directions_029",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "博物馆",
      "text": "박물관",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "bangmulgwan"
    },
    {
      "id": "directions_030",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "公园",
      "text": "공원",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gongwon"
    },
    {
      "id": "directions_031",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请问怎么走？",
      "text": "거기까지 어떻게 가나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "geogikkaji eotteoke ganayo?"
    },
    {
      "id": "directions_032",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "……在哪里？",
      "text": "……은/는 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "……eun/neun eodie isseoyo?"
    },
    {
      "id": "directions_033",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请带我去……",
      "text": "……으로 가 주세요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "……euro ga juseyo."
    },
    {
      "id": "directions_034",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我要去……",
      "text": "……에 가고 싶어요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "……e gago sipeoyo."
    },
    {
      "id": "directions_035",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "走路要几分钟？",
      "text": "걸어서 몇 분 걸려요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "georeoseo myeot bun geollyeoyo?"
    },
    {
      "id": "directions_036",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "坐地铁能到吗？",
      "text": "거기 지하철로 갈 수 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "geogi jihacheollo gal su innayo?"
    },
    {
      "id": "directions_037",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我迷路了。",
      "text": "길을 잃었어요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "gireul ireosseoyo."
    },
    {
      "id": "directions_038",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请问现在在哪里？",
      "text": "지금 여기가 어디예요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "jigeum yeogiga eodiyeyo?"
    },
    {
      "id": "directions_039",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请在地图上指给我。",
      "text": "지도에서 가리켜 주세요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "jidoeseo garikyeo juseyo."
    },
    {
      "id": "directions_040",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "能再说一遍吗？",
      "text": "다시 말씀해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "dasi malsseumhae jusigesseoyo?"
    },
    {
      "id": "directions_041",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "怎么去车站？",
      "text": "역까지 어떻게 가나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "yeokkkaji eotteoke ganayo?"
    },
    {
      "id": "directions_042",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "这是哪条路？",
      "text": "이것은 무슨 거리입니까?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "igeoseun museun georiimnikka?"
    },
    {
      "id": "directions_043",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "洗手间在哪里？",
      "text": "화장실은 어디에 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "hwajangsireun eodie innayo?"
    },
    {
      "id": "numbers_001",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "零",
      "text": "영",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_001_example",
        "zh": "这项服务没有额外费用。",
        "text": "이 서비스에는 추가 비용이 없습니다.",
        "pronunciation": "i seobiseueneun chuga biyongi eopseumnida."
      },
      "pronunciation": "yeong"
    },
    {
      "id": "numbers_002",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "一",
      "text": "하나",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_002_example",
        "zh": "我只需要一张票。",
        "text": "티켓 한 장만 필요해요.",
        "pronunciation": "tiket han jangman pillyohaeyo."
      },
      "pronunciation": "hana"
    },
    {
      "id": "numbers_003",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "二",
      "text": "두",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_003_example",
        "zh": "请给我们一张两人桌。",
        "text": "2인용 테이블 주세요.",
        "pronunciation": "2inyong teibeul juseyo."
      },
      "pronunciation": "du"
    },
    {
      "id": "numbers_004",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "三",
      "text": "세",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_004_example",
        "zh": "我们住三个晚上。",
        "text": "우리는 3박을 묵을 예정이에요.",
        "pronunciation": "urineun 3bageul mugeul yejeongieyo."
      },
      "pronunciation": "se"
    },
    {
      "id": "numbers_005",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "四",
      "text": "네",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_005_example",
        "zh": "我们一行四个人。",
        "text": "우리 그룹에는 4명이 있습니다.",
        "pronunciation": "uri geurubeneun 4myeongi itseumnida."
      },
      "pronunciation": "ne"
    },
    {
      "id": "numbers_006",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "五",
      "text": "다섯",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_006_example",
        "zh": "步行只要五分钟。",
        "text": "도보로 단 5분 거리입니다.",
        "pronunciation": "doboro dan 5bun georiimnida."
      },
      "pronunciation": "daseot"
    },
    {
      "id": "numbers_007",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "六",
      "text": "여섯",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_007_example",
        "zh": "六岁以下儿童免费。",
        "text": "6세 미만의 어린이는 무료입니다.",
        "pronunciation": "6se mimanui eorinineun muryoimnida."
      },
      "pronunciation": "yeoseot"
    },
    {
      "id": "numbers_008",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "七",
      "text": "일곱",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_008_example",
        "zh": "商店晚上七点关门。",
        "text": "그 가게는 오후 7시에 문을 닫습니다.",
        "pronunciation": "geu gageneun ohu 7sie muneul datseumnida."
      },
      "pronunciation": "ilgop"
    },
    {
      "id": "numbers_009",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "八",
      "text": "여덟",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_009_example",
        "zh": "早餐从早上八点开始。",
        "text": "아침 식사는 오전 8시에 시작됩니다.",
        "pronunciation": "achim siksaneun ojeon 8sie sijakdoemnida."
      },
      "pronunciation": "yeodeol"
    },
    {
      "id": "numbers_010",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "九",
      "text": "아홉",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_010_example",
        "zh": "乘九路公交车去市中心。",
        "text": "시내에서 9번 버스를 타세요.",
        "pronunciation": "sinaeeseo 9beon beoseureul taseyo."
      },
      "pronunciation": "ahop"
    },
    {
      "id": "numbers_011",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "十",
      "text": "열",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_011_example",
        "zh": "最多需要十分钟。",
        "text": "10분 이상 걸리지 않습니다.",
        "pronunciation": "10bun isang geolliji anseumnida."
      },
      "pronunciation": "yeol"
    },
    {
      "id": "numbers_012",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "百",
      "text": "백",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_012_example",
        "zh": "这张钞票是一百韩元。",
        "text": "이 지폐는 100원입니다.",
        "pronunciation": "i jipyeneun 100wonimnida."
      },
      "pronunciation": "baek"
    },
    {
      "id": "numbers_013",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "千",
      "text": "천",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_013_example",
        "zh": "交通卡里还有一千韩元。",
        "text": "교통카드에 천원 남았습니다.",
        "pronunciation": "gyotongkadeue cheonwon namatseumnida."
      },
      "pronunciation": "cheon"
    },
    {
      "id": "numbers_014",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "万",
      "text": "만",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_014_example",
        "zh": "演唱会吸引了一万名观众。",
        "text": "콘서트에는 1만 명이 모였다.",
        "pronunciation": "konseoteueneun 1man myeongi moyeotda."
      },
      "pronunciation": "man"
    },
    {
      "id": "numbers_015",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "韩元",
      "text": "원화",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_015_example",
        "zh": "这家店只收韩元。",
        "text": "이 가게는 한국 원화만 받습니다.",
        "pronunciation": "i gageneun hanguk wonhwaman batseumnida."
      },
      "pronunciation": "wonhwa"
    },
    {
      "id": "numbers_016",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "美元",
      "text": "미국 달러",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_016_example",
        "zh": "可以把美元兑换成韩元吗？",
        "text": "미국 달러를 한국 원화로 바꿀 수 있나요?",
        "pronunciation": "miguk dalleoreul hanguk wonhwaro bakkul su innayo?"
      },
      "pronunciation": "miguk dalleo"
    },
    {
      "id": "numbers_017",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "人民币",
      "text": "중국 위안",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_017_example",
        "zh": "在哪里可以把人民币兑换成韩元？",
        "text": "중국 위안화를 한국 원화로 어디서 환전할 수 있나요?",
        "pronunciation": "jungguk wianhwareul hanguk wonhwaro eodiseo hwanjeonhal su innayo?"
      },
      "pronunciation": "jungguk wian"
    },
    {
      "id": "numbers_018",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "今天",
      "text": "오늘",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_018_example",
        "zh": "今天还有去釜山的航班吗？",
        "text": "오늘 부산행 항공편이 있나요?",
        "pronunciation": "oneul busanhaeng hanggongpyeoni innayo?"
      },
      "pronunciation": "oneul"
    },
    {
      "id": "numbers_019",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "明天",
      "text": "내일",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_019_example",
        "zh": "我想预订明天上午的行程。",
        "text": "내일 아침 여행을 예약하고 싶습니다.",
        "pronunciation": "naeil achim yeohaengeul yeyakago sipseumnida."
      },
      "pronunciation": "naeil"
    },
    {
      "id": "numbers_020",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "昨天",
      "text": "어제",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_020_example",
        "zh": "我昨天把太阳镜落在出租车上了。",
        "text": "어제 택시에 선글라스를 두고 내렸습니다.",
        "pronunciation": "eoje taeksie seongeullaseureul dugo naeryeotseumnida."
      },
      "pronunciation": "eoje"
    },
    {
      "id": "numbers_021",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "后天",
      "text": "모레",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "more"
    },
    {
      "id": "numbers_022",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "前天",
      "text": "그저께",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "geujeokke"
    },
    {
      "id": "numbers_023",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "早上",
      "text": "아침",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "achim"
    },
    {
      "id": "numbers_024",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "中午",
      "text": "정오",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jeongo"
    },
    {
      "id": "numbers_025",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "下午",
      "text": "오후",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ohu"
    },
    {
      "id": "numbers_026",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "晚上",
      "text": "밤",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "bam"
    },
    {
      "id": "numbers_027",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "现在",
      "text": "지금",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jigeum"
    },
    {
      "id": "numbers_028",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "时间",
      "text": "시간",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sigan"
    },
    {
      "id": "numbers_029",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一小时",
      "text": "한 시간",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "han sigan"
    },
    {
      "id": "numbers_030",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一分钟",
      "text": "일 분",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "il bun"
    },
    {
      "id": "numbers_031",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "秒",
      "text": "초",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "cho"
    },
    {
      "id": "numbers_032",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "几点",
      "text": "몇 시",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_032_example",
        "zh": "早餐从几点开始？",
        "text": "아침 식사는 몇 시부터인가요?",
        "pronunciation": "achim siksaneun myeot sibuteoingayo?"
      },
      "pronunciation": "myeot si"
    },
    {
      "id": "numbers_033",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期",
      "text": "요일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yoil"
    },
    {
      "id": "numbers_034",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期一",
      "text": "월요일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "wollyoil"
    },
    {
      "id": "numbers_035",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期二",
      "text": "화요일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "hwayoil"
    },
    {
      "id": "numbers_036",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期三",
      "text": "수요일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "suyoil"
    },
    {
      "id": "numbers_037",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期四",
      "text": "목요일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "mongnyoil"
    },
    {
      "id": "numbers_038",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期五",
      "text": "금요일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "geumyoil"
    },
    {
      "id": "numbers_039",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期六",
      "text": "토요일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "toyoil"
    },
    {
      "id": "numbers_040",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期日",
      "text": "일요일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "illyoil"
    },
    {
      "id": "numbers_041",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "周末",
      "text": "주말",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jumal"
    },
    {
      "id": "numbers_042",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "工作日",
      "text": "평일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "pyeongil"
    },
    {
      "id": "numbers_043",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "日期",
      "text": "날짜",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "naljja"
    },
    {
      "id": "numbers_044",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一月",
      "text": "1월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "1wol"
    },
    {
      "id": "numbers_045",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "二月",
      "text": "2월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "2wol"
    },
    {
      "id": "numbers_046",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "三月",
      "text": "3월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "3wol"
    },
    {
      "id": "numbers_047",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "四月",
      "text": "4월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "4wol"
    },
    {
      "id": "numbers_048",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "五月",
      "text": "5월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "5wol"
    },
    {
      "id": "numbers_049",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "六月",
      "text": "6월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "6wol"
    },
    {
      "id": "numbers_050",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "七月",
      "text": "7월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "7wol"
    },
    {
      "id": "numbers_051",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "八月",
      "text": "8월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "8wol"
    },
    {
      "id": "numbers_052",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "九月",
      "text": "9월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "9wol"
    },
    {
      "id": "numbers_053",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十月",
      "text": "10월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "10wol"
    },
    {
      "id": "numbers_054",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十一月",
      "text": "11월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "11wol"
    },
    {
      "id": "numbers_055",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十二月",
      "text": "12월",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "12wol"
    },
    {
      "id": "numbers_056",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一日",
      "text": "1일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "1il"
    },
    {
      "id": "numbers_057",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "二日",
      "text": "2일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "2il"
    },
    {
      "id": "numbers_058",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "三日",
      "text": "3일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "3il"
    },
    {
      "id": "numbers_059",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "四日",
      "text": "4일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "4il"
    },
    {
      "id": "numbers_060",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "五日",
      "text": "5일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "5il"
    },
    {
      "id": "numbers_061",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "六日",
      "text": "6일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "6il"
    },
    {
      "id": "numbers_062",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "七日",
      "text": "7일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "7il"
    },
    {
      "id": "numbers_063",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "八日",
      "text": "8일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "8il"
    },
    {
      "id": "numbers_064",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "九日",
      "text": "9일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "9il"
    },
    {
      "id": "numbers_065",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十日",
      "text": "10일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "10il"
    },
    {
      "id": "numbers_066",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "今年",
      "text": "올해",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "olhae"
    },
    {
      "id": "numbers_067",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "去年",
      "text": "작년에",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jangnyeone"
    },
    {
      "id": "numbers_068",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "明年",
      "text": "내년",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "naenyeon"
    },
    {
      "id": "numbers_069",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "这个月",
      "text": "이번 달",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "ibeon dal"
    },
    {
      "id": "numbers_070",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "上个月",
      "text": "지난달",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jinandal"
    },
    {
      "id": "numbers_071",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "下个月",
      "text": "다음 달",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "daeum dal"
    },
    {
      "id": "numbers_072",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "几点开门？",
      "text": "몇시에 문을 열어요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "myeotsie muneul yeoreoyo?"
    },
    {
      "id": "numbers_073",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "现在几点？",
      "text": "지금은 몇시입니까?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "jigeumeun myeotsiimnikka?"
    },
    {
      "id": "numbers_074",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "今天星期几？",
      "text": "오늘은 무슨 날인가요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "oneureun museun naringayo?"
    },
    {
      "id": "numbers_075",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "今天是几号？",
      "text": "오늘은 무슨 날짜인가요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "oneureun museun naljjaingayo?"
    },
    {
      "id": "numbers_076",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "营业时间",
      "text": "영업 시간",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yeongeop sigan"
    },
    {
      "id": "numbers_077",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "开门",
      "text": "열다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_077_example",
        "zh": "这家药店星期日也开门吗？",
        "text": "이 약국은 일요일에도 문을 여나요?",
        "pronunciation": "i yakgugeun illyoiredo muneul yeonayo?"
      },
      "pronunciation": "yeolda"
    },
    {
      "id": "numbers_078",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "关门",
      "text": "닫다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_078_example",
        "zh": "博物馆几点关门？",
        "text": "박물관은 몇 시에 문을 닫나요?",
        "pronunciation": "bangmulgwaneun myeot sie muneul dannayo?"
      },
      "pronunciation": "datda"
    },
    {
      "id": "numbers_079",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "每天",
      "text": "매일",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "maeil"
    },
    {
      "id": "numbers_080",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "有时",
      "text": "가끔",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gakkeum"
    },
    {
      "id": "numbers_081",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "经常",
      "text": "자주",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "jaju"
    },
    {
      "id": "numbers_082",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "马上",
      "text": "곧",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_numbers_082_example",
        "zh": "巴士马上到吗？",
        "text": "버스가 곧 오나요?",
        "pronunciation": "beoseuga got onayo?"
      },
      "pronunciation": "got"
    },
    {
      "id": "numbers_083",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "稍等",
      "text": "잠깐만요",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "jamkkanmanyo"
    },
    {
      "id": "emergency_001",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "救命",
      "text": "도와주세요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_001_example",
        "zh": "救命！有人受伤了！",
        "text": "도와주세요! 누군가 다쳤어요!",
        "pronunciation": "dowajuseyo! nugunga dachyeosseoyo!"
      },
      "pronunciation": "dowajuseyo"
    },
    {
      "id": "emergency_002",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "紧急",
      "text": "응급 상황",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_002_example",
        "zh": "这是医疗紧急情况。",
        "text": "이는 의료적 응급 상황입니다.",
        "pronunciation": "ineun uiryojeok eunggeup sanghwangimnida."
      },
      "pronunciation": "eunggeup sanghwang"
    },
    {
      "id": "emergency_003",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "word",
      "zh": "报警",
      "text": "경찰에 신고하다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_003_example",
        "zh": "请报警，我的钱包被偷了。",
        "text": "경찰에 전화해주세요. 내 지갑을 도난당했어요.",
        "pronunciation": "gyeongchare jeonhwahaejuseyo. nae jigabeul donandanghaesseoyo."
      },
      "pronunciation": "gyeongchare singohada"
    },
    {
      "id": "emergency_004",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "叫救护车",
      "text": "구급차를 부르다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_004_example",
        "zh": "请叫救护车。",
        "text": "구급차를 불러주세요.",
        "pronunciation": "gugeupchareul bulleojuseyo."
      },
      "pronunciation": "gugeupchareul bureuda"
    },
    {
      "id": "emergency_005",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "医生",
      "text": "의사",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_005_example",
        "zh": "我今天需要看医生。",
        "text": "오늘 의사를 만나야 해요.",
        "pronunciation": "oneul uisareul mannaya haeyo."
      },
      "pronunciation": "uisa"
    },
    {
      "id": "emergency_006",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "护士",
      "text": "간호사",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_006_example",
        "zh": "护士会测量您的血压。",
        "text": "간호사가 혈압을 측정할 것입니다.",
        "pronunciation": "ganhosaga hyeorabeul cheukjeonghal geosimnida."
      },
      "pronunciation": "ganhosa"
    },
    {
      "id": "emergency_007",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药",
      "text": "약",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_007_example",
        "zh": "这种药多久服用一次？",
        "text": "이 약을 얼마나 자주 복용해야 합니까?",
        "pronunciation": "i yageul eolmana jaju bongnyonghaeya hamnikka?"
      },
      "pronunciation": "yak"
    },
    {
      "id": "emergency_008",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "处方",
      "text": "처방",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_008_example",
        "zh": "在韩国，这种药需要处方吗？",
        "text": "한국에서 이 약을 사려면 처방전이 필요한가요?",
        "pronunciation": "hangugeseo i yageul saryeomyeon cheobangjeoni pillyohangayo?"
      },
      "pronunciation": "cheobang"
    },
    {
      "id": "emergency_009",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "发烧",
      "text": "발열",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_009_example",
        "zh": "我从昨晚开始发烧。",
        "text": "어젯밤부터 열이 나더라구요.",
        "pronunciation": "eojetbambuteo yeori nadeoraguyo."
      },
      "pronunciation": "ballyeol"
    },
    {
      "id": "emergency_010",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "感冒",
      "text": "감기",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_010_example",
        "zh": "我可能只是感冒了。",
        "text": "그냥 감기에 걸린 것 같아요.",
        "pronunciation": "geunyang gamgie geollin geot gatayo."
      },
      "pronunciation": "gamgi"
    },
    {
      "id": "emergency_011",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "咳嗽",
      "text": "기침",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_011_example",
        "zh": "这种咳嗽持续了三天。",
        "text": "저는 3일 동안 기침을 했습니다.",
        "pronunciation": "jeoneun 3il dongan gichimeul haetseumnida."
      },
      "pronunciation": "gichim"
    },
    {
      "id": "emergency_012",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "头疼",
      "text": "두통",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_012_example",
        "zh": "我头疼得很厉害。",
        "text": "두통이 심해요.",
        "pronunciation": "dutongi simhaeyo."
      },
      "pronunciation": "dutong"
    },
    {
      "id": "emergency_013",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "肚子疼",
      "text": "복통",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_013_example",
        "zh": "吃过晚饭后我开始胃疼。",
        "text": "저녁 식사 후에 복통이 시작되었습니다.",
        "pronunciation": "jeonyeok siksa hue boktongi sijakdoeeotseumnida."
      },
      "pronunciation": "boktong"
    },
    {
      "id": "emergency_014",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "牙疼",
      "text": "치통",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_014_example",
        "zh": "我需要找急诊牙医治疗牙疼。",
        "text": "이 치통 때문에 응급 치과 의사가 필요해요.",
        "pronunciation": "i chitong ttaemune eunggeup chigwa uisaga pillyohaeyo."
      },
      "pronunciation": "chitong"
    },
    {
      "id": "emergency_015",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "恶心",
      "text": "메스꺼움",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_015_example",
        "zh": "这种药让我感到恶心。",
        "text": "이 약 때문에 구역질이 나네요.",
        "pronunciation": "i yak ttaemune guyeokjiri naneyo."
      },
      "pronunciation": "meseukkeoum"
    },
    {
      "id": "emergency_016",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "呕吐",
      "text": "구토",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_016_example",
        "zh": "我从早上起一直在呕吐。",
        "text": "오늘 아침부터 계속 토하고 있어요.",
        "pronunciation": "oneul achimbuteo gyesok tohago isseoyo."
      },
      "pronunciation": "guto"
    },
    {
      "id": "emergency_017",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "腹泻",
      "text": "설사",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_017_example",
        "zh": "我旅行时开始腹泻。",
        "text": "여행 중에 설사가 발생했습니다.",
        "pronunciation": "yeohaeng junge seolsaga balsaenghaetseumnida."
      },
      "pronunciation": "seolsa"
    },
    {
      "id": "emergency_018",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "便秘",
      "text": "변비",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_018_example",
        "zh": "这会缓解便秘吗？",
        "text": "변비에 도움이 될까요?",
        "pronunciation": "byeonbie doumi doelkkayo?"
      },
      "pronunciation": "byeonbi"
    },
    {
      "id": "emergency_019",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "受伤",
      "text": "부상",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_019_example",
        "zh": "我摔倒了，膝盖受伤。",
        "text": "넘어져서 무릎을 다쳤어요.",
        "pronunciation": "neomeojyeoseo mureupeul dachyeosseoyo."
      },
      "pronunciation": "busang"
    },
    {
      "id": "emergency_020",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "流血",
      "text": "출혈",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_020_example",
        "zh": "伤口一直在流血。",
        "text": "베인 상처는 출혈을 멈추지 않습니다.",
        "pronunciation": "bein sangcheoneun chulhyeoreul meomchuji anseumnida."
      },
      "pronunciation": "chulhyeol"
    },
    {
      "id": "emergency_021",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "骨折",
      "text": "골절",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_021_example",
        "zh": "我摔倒后脚踝可能骨折了。",
        "text": "넘어져서 발목이 골절됐을지도 몰라요.",
        "pronunciation": "neomeojyeoseo balmogi goljeoldwaesseuljido mollayo."
      },
      "pronunciation": "goljeol"
    },
    {
      "id": "emergency_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "烫伤",
      "text": "화상",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_022_example",
        "zh": "我的手被热水烫伤了。",
        "text": "뜨거운 물에 손을 데었어요.",
        "pronunciation": "tteugeoun mure soneul deeosseoyo."
      },
      "pronunciation": "hwasang"
    },
    {
      "id": "emergency_023",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "哮喘",
      "text": "천식",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_023_example",
        "zh": "我有哮喘，现在呼吸有点困难。",
        "text": "저는 천식이 있어서 지금 숨쉬기가 조금 힘들어요.",
        "pronunciation": "jeoneun cheonsigi isseoseo jigeum sumswigiga jogeum himdeureoyo."
      },
      "pronunciation": "cheonsik"
    },
    {
      "id": "emergency_024",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药片",
      "text": "알약",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "allyak"
    },
    {
      "id": "emergency_025",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药膏",
      "text": "연고",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "yeongo"
    },
    {
      "id": "emergency_026",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "创可贴",
      "text": "반창고",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "banchanggo"
    },
    {
      "id": "emergency_027",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "绷带",
      "text": "붕대",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "bungdae"
    },
    {
      "id": "emergency_028",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "体温计",
      "text": "체온계",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "cheongye"
    },
    {
      "id": "emergency_029",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "口罩",
      "text": "마스크",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "maseukeu"
    },
    {
      "id": "emergency_030",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "消毒液",
      "text": "소독제",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "sodokje"
    },
    {
      "id": "emergency_031",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "急救箱",
      "text": "구급함",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "gugeupam"
    },
    {
      "id": "emergency_032",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "word",
      "zh": "保险",
      "text": "보험",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_emergency_032_example",
        "zh": "这家医院接受旅行保险吗？",
        "text": "이 병원에서 여행자 보험을 사용할 수 있나요?",
        "pronunciation": "i byeongwoneseo yeohaengja boheomeul sayonghal su innayo?"
      },
      "pronunciation": "boheom"
    },
    {
      "id": "emergency_033",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "word",
      "zh": "保险卡",
      "text": "보험 카드",
      "direction": "traveler-says",
      "intent": "recognize",
      "pronunciation": "boheom kadeu"
    },
    {
      "id": "emergency_034",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我把护照弄丢了。",
      "text": "여권을 잃어버렸어요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "yeogwoneul ireobeoryeosseoyo."
    },
    {
      "id": "emergency_035",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我的钱包被偷了。",
      "text": "지갑을 도난당했어요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "jigabeul donandanghaesseoyo."
    },
    {
      "id": "emergency_036",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "我需要帮助。",
      "text": "도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "doumi pillyohaeyo."
    },
    {
      "id": "emergency_037",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请叫警察。",
      "text": "경찰을 불러 주세요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "gyeongchareul bulleo juseyo."
    },
    {
      "id": "emergency_038",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请叫救护车。",
      "text": "구급차를 불러주세요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "gugeupchareul bulleojuseyo."
    },
    {
      "id": "emergency_039",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我不舒服。",
      "text": "몸이 안 좋아요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "momi an joayo."
    },
    {
      "id": "emergency_040",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我生病了。",
      "text": "아파요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "apayo."
    },
    {
      "id": "emergency_041",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我对……过敏。",
      "text": "저는 …… 알레르기가 있어요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "jeoneun …… allereugiga isseoyo."
    },
    {
      "id": "emergency_042",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "哪里有药店？",
      "text": "약국은 어디에 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "yakgugeun eodie innayo?"
    },
    {
      "id": "emergency_043",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "我需要看医生。",
      "text": "의사를 만나야 해요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "uisareul mannaya haeyo."
    },
    {
      "id": "emergency_044",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "这很紧急。",
      "text": "이것은 긴급 상황입니다.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "igeoseun gingeup sanghwangimnida."
    },
    {
      "id": "expressions_001",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "谢谢",
      "text": "감사합니다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_001_example",
        "zh": "谢谢你帮我指路。",
        "text": "길을 알려 주셔서 감사합니다.",
        "pronunciation": "gireul allyeo jusyeoseo gamsahamnida."
      },
      "pronunciation": "gamsahamnida"
    },
    {
      "id": "expressions_002",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "非常感谢",
      "text": "정말 고마워요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_002_example",
        "zh": "非常感谢您帮我找回护照。",
        "text": "여권을 찾는 데 도와주셔서 정말 고마워요.",
        "pronunciation": "yeogwoneul channeun de dowajusyeoseo jeongmal gomawoyo."
      },
      "pronunciation": "jeongmal gomawoyo"
    },
    {
      "id": "expressions_003",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "不客气",
      "text": "천만에요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_003_example",
        "zh": "不客气，祝你旅途愉快。",
        "text": "천만에요. 좋은 여행 되세요.",
        "pronunciation": "cheonmaneyo. joeun yeohaeng doeseyo."
      },
      "pronunciation": "cheonmaneyo"
    },
    {
      "id": "expressions_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "请",
      "text": "주세요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_004_example",
        "zh": "请在这里写下您的名字。",
        "text": "여기에 이름을 적어 주세요.",
        "pronunciation": "yeogie ireumeul jeogeo juseyo."
      },
      "pronunciation": "juseyo"
    },
    {
      "id": "expressions_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "对不起",
      "text": "죄송합니다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_005_example",
        "zh": "不好意思，请问出口在哪里？",
        "text": "죄송합니다. 출구가 어디인가요?",
        "pronunciation": "joesonghamnida. chulguga eodiingayo?"
      },
      "pronunciation": "joesonghamnida"
    },
    {
      "id": "expressions_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "抱歉",
      "text": "미안합니다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_006_example",
        "zh": "抱歉，我不小心碰倒了杯子。",
        "text": "미안합니다. 제가 실수로 컵을 넘어뜨렸어요.",
        "pronunciation": "mianhamnida. jega silsuro keobeul neomeotteuryeosseoyo."
      },
      "pronunciation": "mianhamnida"
    },
    {
      "id": "expressions_007",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "你好",
      "text": "안녕하세요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_007_example",
        "zh": "你好，我预订了一个房间。",
        "text": "안녕하세요. 방을 예약했어요.",
        "pronunciation": "annyeonghaseyo. bangeul yeyakaesseoyo."
      },
      "pronunciation": "annyeonghaseyo"
    },
    {
      "id": "expressions_008",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "早上好",
      "text": "안녕하세요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_008_example",
        "zh": "早上好，早餐几点开始？",
        "text": "안녕하세요. 아침 식사는 몇 시부터인가요?",
        "pronunciation": "annyeonghaseyo. achim siksaneun myeot sibuteoingayo?"
      },
      "pronunciation": "annyeonghaseyo"
    },
    {
      "id": "expressions_009",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "晚上好",
      "text": "안녕하세요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_009_example",
        "zh": "晚上好，我现在可以办理入住吗？",
        "text": "안녕하세요. 지금 체크인할 수 있나요?",
        "pronunciation": "annyeonghaseyo. jigeum chekeuinhal su innayo?"
      },
      "pronunciation": "annyeonghaseyo"
    },
    {
      "id": "expressions_010",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "再见",
      "text": "안녕히 가세요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_010_example",
        "zh": "再见，祝您旅途愉快。",
        "text": "안녕히 가세요. 즐거운 여행 되세요.",
        "pronunciation": "annyeonghi gaseyo. jeulgeoun yeohaeng doeseyo."
      },
      "pronunciation": "annyeonghi gaseyo"
    },
    {
      "id": "expressions_011",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "回头见",
      "text": "나중에 봐요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_011_example",
        "zh": "回头见，我们晚饭时在大堂集合。",
        "text": "나중에 봐요. 저녁때 로비에서 만나요.",
        "pronunciation": "najunge bwayo. jeonyeokttae robieseo mannayo."
      },
      "pronunciation": "najunge bwayo"
    },
    {
      "id": "expressions_012",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "晚安",
      "text": "안녕히 주무세요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_012_example",
        "zh": "晚安，明天见。",
        "text": "안녕히 주무세요. 내일 뵐게요.",
        "pronunciation": "annyeonghi jumuseyo. naeil boelgeyo."
      },
      "pronunciation": "annyeonghi jumuseyo"
    },
    {
      "id": "expressions_013",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "欢迎光临",
      "text": "환영합니다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_013_example",
        "zh": "欢迎光临，请问您预订了吗？",
        "text": "환영합니다. 예약하셨나요?",
        "pronunciation": "hwanyeonghamnida. yeyakasyeonnayo?"
      },
      "pronunciation": "hwanyeonghamnida"
    },
    {
      "id": "expressions_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我明白了",
      "text": "알겠습니다",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "algetseumnida"
    },
    {
      "id": "expressions_015",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我不明白",
      "text": "이해하지 못했어요",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "ihaehaji mothaesseoyo"
    },
    {
      "id": "expressions_016",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "是的",
      "text": "네",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_016_example",
        "zh": "是的，我订了两晚。",
        "text": "네, 이틀 밤 예약했어요.",
        "pronunciation": "ne, iteul bam yeyakaesseoyo."
      },
      "pronunciation": "ne"
    },
    {
      "id": "expressions_017",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "不是",
      "text": "아니요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_017_example",
        "zh": "不是，这不是我的行李。",
        "text": "아니요, 이건 제 짐이 아니에요.",
        "pronunciation": "aniyo, igeon je jimi anieyo."
      },
      "pronunciation": "aniyo"
    },
    {
      "id": "expressions_018",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "可以",
      "text": "괜찮아요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_018_example",
        "zh": "我现在可以进房间了吗？",
        "text": "이제 방에 들어가도 괜찮아요?",
        "pronunciation": "ije bange deureogado gwaenchanayo?"
      },
      "pronunciation": "gwaenchanayo"
    },
    {
      "id": "expressions_019",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "没关系",
      "text": "괜찮아요",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "gwaenchanayo"
    },
    {
      "id": "expressions_020",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "没问题",
      "text": "문제없어요",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "munjeeopseoyo"
    },
    {
      "id": "expressions_021",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "好的",
      "text": "알겠습니다",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_021_example",
        "zh": "好的，我会在八点到大堂。",
        "text": "알겠습니다. 여덟 시에 로비로 갈게요.",
        "pronunciation": "algetseumnida. yeodeol sie robiro galgeyo."
      },
      "pronunciation": "algetseumnida"
    },
    {
      "id": "expressions_022",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我喜欢",
      "text": "좋아해요",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "joahaeyo"
    },
    {
      "id": "expressions_023",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我不喜欢",
      "text": "좋아하지 않아요",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "joahaji anayo"
    },
    {
      "id": "expressions_024",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "想要",
      "text": "원해요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_024_example",
        "zh": "我想要一间安静的房间。",
        "text": "조용한 방을 원해요.",
        "pronunciation": "joyonghan bangeul wonhaeyo."
      },
      "pronunciation": "wonhaeyo"
    },
    {
      "id": "expressions_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "需要",
      "text": "필요해요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_025_example",
        "zh": "办理入住需要护照吗？",
        "text": "체크인할 때 여권이 필요해요?",
        "pronunciation": "chekeuinhal ttae yeogwoni pillyohaeyo?"
      },
      "pronunciation": "pillyohaeyo"
    },
    {
      "id": "expressions_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "有",
      "text": "있어요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_026_example",
        "zh": "今晚还有空房吗？",
        "text": "오늘 밤 빈 방이 있어요?",
        "pronunciation": "oneul bam bin bangi isseoyo?"
      },
      "pronunciation": "isseoyo"
    },
    {
      "id": "expressions_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "没有",
      "text": "없어요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_027_example",
        "zh": "现在没有空房。",
        "text": "지금은 빈 방이 없어요.",
        "pronunciation": "jigeumeun bin bangi eopseoyo."
      },
      "pronunciation": "eopseoyo"
    },
    {
      "id": "expressions_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "是",
      "text": "맞아요",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "kr-ko_expressions_028_example",
        "zh": "是的，这张票是去机场的。",
        "text": "네, 맞아요. 이 표는 공항행이에요.",
        "pronunciation": "ne, majayo. i pyoneun gonghanghaengieyo."
      },
      "pronunciation": "majayo"
    },
    {
      "id": "expressions_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不是",
      "text": "아니에요",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "anieyo"
    },
    {
      "id": "expressions_030",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我叫……",
      "text": "제 이름은 ……이에요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "je ireumeun ……ieyo."
    },
    {
      "id": "expressions_031",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "你叫什么名字？",
      "text": "이름이 뭐예요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "ireumi mwoyeyo?"
    },
    {
      "id": "expressions_032",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我是中国人。",
      "text": "저는 중국 사람이에요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "jeoneun jungguk saramieyo."
    },
    {
      "id": "expressions_033",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "你会说英语吗？",
      "text": "영어를 할 수 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "yeongeoreul hal su innayo?"
    },
    {
      "id": "expressions_034",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请说慢一点。",
      "text": "천천히 말씀해주세요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "cheoncheonhi malsseumhaejuseyo."
    },
    {
      "id": "expressions_035",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请再说一遍。",
      "text": "다시 말씀해주세요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "dasi malsseumhaejuseyo."
    },
    {
      "id": "expressions_036",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "什么意思？",
      "text": "무슨 뜻이에요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "museun tteusieyo?"
    },
    {
      "id": "expressions_037",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "怎么读？",
      "text": "어떻게 읽나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "eotteoke ingnayo?"
    },
    {
      "id": "expressions_038",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "怎么写？",
      "text": "어떻게 쓰나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "eotteoke sseunayo?"
    },
    {
      "id": "expressions_039",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "多少钱？",
      "text": "얼마예요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "eolmayeyo?"
    },
    {
      "id": "expressions_040",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "在哪里？",
      "text": "어디예요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "eodiyeyo?"
    },
    {
      "id": "expressions_041",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "什么时候？",
      "text": "언제예요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "eonjeyeyo?"
    },
    {
      "id": "expressions_042",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "为什么？",
      "text": "왜요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "waeyo?"
    },
    {
      "id": "expressions_043",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "怎么办？",
      "text": "어떻게 해야 하나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "eotteoke haeya hanayo?"
    },
    {
      "id": "expressions_044",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以吗？",
      "text": "돼요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "dwaeyo?"
    },
    {
      "id": "expressions_045",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以。",
      "text": "네, 돼요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "ne, dwaeyo."
    },
    {
      "id": "expressions_046",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不行。",
      "text": "안 돼요.",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "an dwaeyo."
    },
    {
      "id": "expressions_047",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "有中文吗？",
      "text": "중국어로 된 것이 있나요?",
      "direction": "traveler-says",
      "intent": "communicate",
      "pronunciation": "junggugeoro doen geosi innayo?"
    },
    {
      "id": "ko_airport_phrase_001",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我已经填写了电子入境申报。",
      "text": "전자도착신고를 완료했습니다.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "jeonjadochaksingoreul wallyohaetseumnida."
    },
    {
      "id": "ko_airport_phrase_002",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我需要关于“签证”的帮助。",
      "text": "비자 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "bija gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_airport_phrase_003",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "可以帮我确认“机票”的相关信息吗？",
      "text": "항공권을 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "hanggonggwoneul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_airport_phrase_004",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我想咨询“机场”。",
      "text": "공항에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "gonghange daehae munuihago sipeoyo."
    },
    {
      "id": "ko_airport_phrase_005",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "可以告诉我“登机牌”的相关信息吗？",
      "text": "탑승권에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "tapseunggwone daehae allyeo juseyo."
    },
    {
      "id": "ko_airport_phrase_006",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "请问在哪里咨询“入住”？",
      "text": "체크인은 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "chekeuineun eodie isseoyo?"
    },
    {
      "id": "ko_airport_phrase_007",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "我需要关于“座位”的帮助。",
      "text": "좌석 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "jwaseok gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_airport_phrase_008",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "可以帮我确认“靠窗座位”的相关信息吗？",
      "text": "창가 좌석을 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "changga jwaseogeul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_airport_phrase_009",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "我想咨询“过道座位”。",
      "text": "통로 좌석에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "tongno jwaseoge daehae munuihago sipeoyo."
    },
    {
      "id": "ko_airport_phrase_010",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "可以告诉我“行李”的相关信息吗？",
      "text": "수하물에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "suhamure daehae allyeo juseyo."
    },
    {
      "id": "ko_airport_phrase_011",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "请问在哪里咨询“行李箱”？",
      "text": "여행 가방은 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "yeohaeng gabangeun eodie isseoyo?"
    },
    {
      "id": "ko_airport_phrase_012",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "我需要关于“手提行李”的帮助。",
      "text": "휴대 수하물 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "hyudae suhamul gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_airport_phrase_013",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "可以帮我确认“行李领取处”的相关信息吗？",
      "text": "수하물 찾는 곳을 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "suhamul channeun goseul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_airport_phrase_014",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "我想咨询“行李推车”。",
      "text": "수하물 카트에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "suhamul kateue daehae munuihago sipeoyo."
    },
    {
      "id": "ko_airport_phrase_015",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "这是安检队伍吗？",
      "text": "여기가 보안 검색대를 위한 줄인가요?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "yeogiga boan geomsaekdaereul wihan juringayo?"
    },
    {
      "id": "ko_airport_phrase_016",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "请问在哪里咨询“免税店”？",
      "text": "면세점은 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "myeonsejeomeun eodie isseoyo?"
    },
    {
      "id": "ko_airport_phrase_017",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "我需要关于“候机室”的帮助。",
      "text": "대기실 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "daegisil gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_airport_phrase_018",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "可以帮我确认“安检”的相关信息吗？",
      "text": "보안 검색을 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "boan geomsaegeul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_airport_phrase_019",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请帮我确认“登机口”的相关信息。",
      "text": "탑승구를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "tapseunggureul hwaginhae juseyo."
    },
    {
      "id": "ko_airport_phrase_020",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请帮我确认“登机”的相关信息。",
      "text": "탑승을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "tapseungeul hwaginhae juseyo."
    },
    {
      "id": "ko_airport_phrase_021",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请帮我确认“起飞”的相关信息。",
      "text": "이륙을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "iryugeul hwaginhae juseyo."
    },
    {
      "id": "ko_airport_phrase_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请帮我确认“登机时间”的相关信息。",
      "text": "탑승 시간을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "tapseung siganeul hwaginhae juseyo."
    },
    {
      "id": "ko_airport_phrase_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请帮我确认“安全带”的相关信息。",
      "text": "안전벨트를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "anjeonbelteureul hwaginhae juseyo."
    },
    {
      "id": "ko_airport_phrase_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "我的海关申报已在线提交。",
      "text": "온라인으로 세관신고서를 제출했습니다.",
      "direction": "traveler-hears",
      "intent": "local-use",
      "pronunciation": "ollaineuro segwansingoseoreul jechulhaetseumnida."
    },
    {
      "id": "ko_airport_phrase_025",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "请帮我确认“海关”的相关信息。",
      "text": "세관을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "segwaneul hwaginhae juseyo."
    },
    {
      "id": "ko_airport_phrase_026",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "请帮我确认“入境”的相关信息。",
      "text": "입국을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "ipgugeul hwaginhae juseyo."
    },
    {
      "id": "ko_airport_phrase_027",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "机场铁路在哪里乘坐？",
      "text": "공항철도는 어디서 탈 수 있나요?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "gonghangcheoldoneun eodiseo tal su innayo?"
    },
    {
      "id": "ko_airport_phrase_028",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "可以帮我确认“入境卡”的相关信息吗？",
      "text": "입국신고서를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "ipguksingoseoreul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_airport_phrase_029",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "我想咨询“海关申报”。",
      "text": "세관 신고서에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "segwan singoseoe daehae munuihago sipeoyo."
    },
    {
      "id": "ko_airport_phrase_030",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "可以告诉我“入境检查”的相关信息吗？",
      "text": "출입국심사에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "churipguksimsae daehae allyeo juseyo."
    },
    {
      "id": "ko_transport_phrase_001",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "可以在这里购买 T-money 卡吗？",
      "text": "여기서 티머니 카드를 살 수 있나요?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "yeogiseo timeoni kadeureul sal su innayo?"
    },
    {
      "id": "ko_transport_phrase_002",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "我需要关于“车站”的帮助。",
      "text": "역 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "yeok gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_transport_phrase_003",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "可以帮我确认“站台”的相关信息吗？",
      "text": "플랫폼을 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "peullaetpomeul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_transport_phrase_004",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "我想咨询“时刻表”。",
      "text": "시간표에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "siganpyoe daehae munuihago sipeoyo."
    },
    {
      "id": "ko_transport_phrase_005",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "可以告诉我“单程票”的相关信息吗？",
      "text": "편도 승차권에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "pyeondo seungchagwone daehae allyeo juseyo."
    },
    {
      "id": "ko_transport_phrase_006",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "下车时也需要刷交通卡吗？",
      "text": "하차할 때 교통카드를 탭해야 하나요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "hachahal ttae gyotongkadeureul taepaeya hanayo?"
    },
    {
      "id": "ko_transport_phrase_007",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "我需要关于“公交车”的帮助。",
      "text": "버스 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "beoseu gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_transport_phrase_008",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "可以帮我确认“地铁”的相关信息吗？",
      "text": "지하철을 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "jihacheoreul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_transport_phrase_009",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "我想咨询“公交车”。",
      "text": "버스에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "beoseue daehae munuihago sipeoyo."
    },
    {
      "id": "ko_transport_phrase_010",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "可以告诉我“地铁”的相关信息吗？",
      "text": "지하철에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "jihacheore daehae allyeo juseyo."
    },
    {
      "id": "ko_transport_phrase_011",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "这是 KTX 的乘车站台吗？",
      "text": "여기가 KTX 플랫폼인가요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "yeogiga ktx peullaetpomingayo?"
    },
    {
      "id": "ko_transport_phrase_012",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "我需要关于“高铁”的帮助。",
      "text": "KTX 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "ktx gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_transport_phrase_013",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "可以帮我确认“火车”的相关信息吗？",
      "text": "기차를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "gichareul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_transport_phrase_014",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "我想咨询“高铁”。",
      "text": "KTX에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "ktxe daehae munuihago sipeoyo."
    },
    {
      "id": "ko_transport_phrase_015",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "可以告诉我“火车”的相关信息吗？",
      "text": "기차에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "gichae daehae allyeo juseyo."
    },
    {
      "id": "ko_transport_phrase_016",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "出租车上车点在哪里？",
      "text": "택시 픽업 장소는 어디인가요?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "taeksi pigeop jangsoneun eodiingayo?"
    },
    {
      "id": "ko_transport_phrase_017",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "我需要关于“出租车”的帮助。",
      "text": "택시 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "taeksi gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_transport_phrase_018",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "可以帮我确认“出租车”的相关信息吗？",
      "text": "택시를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "taeksireul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_transport_phrase_019",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "请帮我确认“出租车”的相关信息。",
      "text": "택시를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "taeksireul hwaginhae juseyo."
    },
    {
      "id": "ko_transport_phrase_020",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "请帮我确认“出租车”的相关信息。",
      "text": "택시를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "taeksireul hwaginhae juseyo."
    },
    {
      "id": "ko_transport_phrase_021",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "请帮我确认“出租车”的相关信息。",
      "text": "택시를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "taeksireul hwaginhae juseyo."
    },
    {
      "id": "ko_transport_phrase_022",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "换乘时需要重新买票吗？",
      "text": "환승할 때 또 다른 티켓이 필요한가요?",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "hwanseunghal ttae tto dareun tikesi pillyohangayo?"
    },
    {
      "id": "ko_transport_phrase_023",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请帮我确认“加油站”的相关信息。",
      "text": "주유소를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "juyusoreul hwaginhae juseyo."
    },
    {
      "id": "ko_transport_phrase_024",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请帮我确认“停车场”的相关信息。",
      "text": "주차장을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "juchajangeul hwaginhae juseyo."
    },
    {
      "id": "ko_transport_phrase_025",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请帮我确认“红绿灯”的相关信息。",
      "text": "신호등을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "sinhodeungeul hwaginhae juseyo."
    },
    {
      "id": "ko_transport_phrase_026",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "请帮我确认“汽车”的相关信息。",
      "text": "자동차를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "jadongchareul hwaginhae juseyo."
    },
    {
      "id": "ko_transport_phrase_027",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "我需要关于“租车”的帮助。",
      "text": "렌터카 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "renteoka gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_transport_phrase_028",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "可以帮我确认“加油站”的相关信息吗？",
      "text": "주유소를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "juyusoreul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_transport_phrase_029",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "我想咨询“停车场”。",
      "text": "주차장에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "juchajange daehae munuihago sipeoyo."
    },
    {
      "id": "ko_transport_phrase_030",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "可以告诉我“红绿灯”的相关信息吗？",
      "text": "신호등에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "sinhodeunge daehae allyeo juseyo."
    },
    {
      "id": "ko_hotel_phrase_001",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "请问在哪里咨询“酒店”？",
      "text": "호텔은 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "hotereun eodie isseoyo?"
    },
    {
      "id": "ko_hotel_phrase_002",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "我预订的是韩屋房间。",
      "text": "한옥에 방을 예약했어요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "hanoge bangeul yeyakaesseoyo."
    },
    {
      "id": "ko_hotel_phrase_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "可以帮我确认“民宿”的相关信息吗？",
      "text": "게스트하우스를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "geseuteuhauseureul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_hotel_phrase_004",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "我想咨询“前台”。",
      "text": "프런트 데스크에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "peureonteu deseukeue daehae munuihago sipeoyo."
    },
    {
      "id": "ko_hotel_phrase_005",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "可以告诉我“预订”的相关信息吗？",
      "text": "예약에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "yeyage daehae allyeo juseyo."
    },
    {
      "id": "ko_hotel_phrase_006",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "请问在哪里咨询“入住”？",
      "text": "체크인은 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "chekeuineun eodie isseoyo?"
    },
    {
      "id": "ko_hotel_phrase_007",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我需要关于“钥匙”的帮助。",
      "text": "열쇠 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "yeolsoe gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_hotel_phrase_008",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "可以帮我确认“房卡”的相关信息吗？",
      "text": "카드 키를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "kadeu kireul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_hotel_phrase_009",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我想咨询“行李员”。",
      "text": "벨 데스크 직원에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "bel deseukeu jigwone daehae munuihago sipeoyo."
    },
    {
      "id": "ko_hotel_phrase_010",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "可以告诉我“工作人员”的相关信息吗？",
      "text": "직원에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "jigwone daehae allyeo juseyo."
    },
    {
      "id": "ko_hotel_phrase_011",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "房间里的地暖怎么调节？",
      "text": "방 바닥 난방은 어떻게 조절하나요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "bang badak nanbangeun eotteoke jojeolhanayo?"
    },
    {
      "id": "ko_hotel_phrase_012",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "我需要关于“床单”的帮助。",
      "text": "침대 시트 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "chimdae siteu gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_hotel_phrase_013",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "可以帮我确认“枕头”的相关信息吗？",
      "text": "베개를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "begaereul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_hotel_phrase_014",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "我想咨询“被子”。",
      "text": "이불에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "ibure daehae munuihago sipeoyo."
    },
    {
      "id": "ko_hotel_phrase_015",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "可以延迟退房吗？",
      "text": "체크아웃 시간을 연장할 수 있나요?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "chekeuaut siganeul yeonjanghal su innayo?"
    },
    {
      "id": "ko_hotel_phrase_016",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请问在哪里咨询“打扫”？",
      "text": "청소는 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "cheongsoneun eodie isseoyo?"
    },
    {
      "id": "ko_hotel_phrase_017",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "我需要关于“叫醒服务”的帮助。",
      "text": "모닝콜 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "moningkol gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_hotel_phrase_018",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "可以帮我确认“洗衣服务”的相关信息吗？",
      "text": "세탁 서비스를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "setak seobiseureul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_hotel_phrase_019",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请帮我确认“熨斗”的相关信息。",
      "text": "다리미를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "darimireul hwaginhae juseyo."
    },
    {
      "id": "ko_hotel_phrase_020",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请帮我确认“婴儿床”的相关信息。",
      "text": "아기 침대를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "agi chimdaereul hwaginhae juseyo."
    },
    {
      "id": "ko_hotel_phrase_021",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "有空房吗？",
      "text": "빈방이 있나요?",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "binbangi innayo?"
    },
    {
      "id": "ko_hotel_phrase_022",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请帮我确认“烟雾报警器”的相关信息。",
      "text": "연기 경보기를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "yeongi gyeongbogireul hwaginhae juseyo."
    },
    {
      "id": "ko_hotel_phrase_023",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请帮我确认“灭火器”的相关信息。",
      "text": "소화기를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "sohwagireul hwaginhae juseyo."
    },
    {
      "id": "ko_hotel_phrase_024",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "请给我一间安静的房间。",
      "text": "조용한 방으로 부탁드려요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "joyonghan bangeuro butakdeuryeoyo."
    },
    {
      "id": "ko_hotel_phrase_025",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "房间太吵了。",
      "text": "방이 너무 시끄러워요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "bangi neomu sikkeureowoyo."
    },
    {
      "id": "ko_hotel_phrase_026",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "没有其他空房了吗？",
      "text": "다른 빈방은 없나요?",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "dareun binbangeun eomnayo?"
    },
    {
      "id": "ko_hotel_phrase_027",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "我需要关于“退房”的帮助。",
      "text": "체크아웃 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "chekeuaut gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_hotel_phrase_028",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "退房后可以寄存行李吗？",
      "text": "체크아웃 후에 짐을 보관할 수 있나요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "chekeuaut hue jimeul bogwanhal su innayo?"
    },
    {
      "id": "ko_hotel_phrase_029",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "我想咨询“小票”。",
      "text": "영수증에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "yeongsujeunge daehae munuihago sipeoyo."
    },
    {
      "id": "ko_hotel_phrase_030",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "可以告诉我“结账”的相关信息吗？",
      "text": "계산에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "gyesane daehae allyeo juseyo."
    },
    {
      "id": "ko_food_phrase_001",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "请问在哪里咨询“早餐”？",
      "text": "아침 식사는 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "achim siksaneun eodie isseoyo?"
    },
    {
      "id": "ko_food_phrase_002",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "我需要关于“午餐”的帮助。",
      "text": "점심 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "jeomsim gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_food_phrase_003",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "可以帮我确认“晚餐”的相关信息吗？",
      "text": "저녁 식사를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "jeonyeok siksareul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_food_phrase_004",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "我想咨询“服务员”。",
      "text": "직원에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "jigwone daehae munuihago sipeoyo."
    },
    {
      "id": "ko_food_phrase_005",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "有带图片的菜单吗？",
      "text": "사진이 있는 메뉴가 있나요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "sajini inneun menyuga innayo?"
    },
    {
      "id": "ko_food_phrase_006",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "请问在哪里咨询“米饭”？",
      "text": "밥은 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "babeun eodie isseoyo?"
    },
    {
      "id": "ko_food_phrase_007",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "我需要关于“面包”的帮助。",
      "text": "빵 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "ppang gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_food_phrase_008",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请给我一份店里最受欢迎的菜。",
      "text": "가장 인기 있는 요리 중 하나를 주세요.",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "gajang ingi inneun yori jung hanareul juseyo."
    },
    {
      "id": "ko_food_phrase_009",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "我想咨询“水”。",
      "text": "물에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "mure daehae munuihago sipeoyo."
    },
    {
      "id": "ko_food_phrase_010",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "可以告诉我“热水”的相关信息吗？",
      "text": "뜨거운 물에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "tteugeoun mure daehae allyeo juseyo."
    },
    {
      "id": "ko_food_phrase_011",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请问在哪里咨询“茶”？",
      "text": "차는 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "chaneun eodie isseoyo?"
    },
    {
      "id": "ko_food_phrase_012",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "我需要关于“咖啡”的帮助。",
      "text": "커피 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "keopi gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_food_phrase_013",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "可以帮我确认“牛奶”的相关信息吗？",
      "text": "우유를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "uyureul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_food_phrase_014",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请做得不辣一点。",
      "text": "덜 맵게 해주세요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "deol maepge haejuseyo."
    },
    {
      "id": "ko_food_phrase_015",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "可以告诉我“糖”的相关信息吗？",
      "text": "설탕에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "seoltange daehae allyeo juseyo."
    },
    {
      "id": "ko_food_phrase_016",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请问在哪里咨询“酱油”？",
      "text": "간장은 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "ganjangeun eodie isseoyo?"
    },
    {
      "id": "ko_food_phrase_017",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "我需要关于“醋”的帮助。",
      "text": "식초 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "sikcho gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_food_phrase_018",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "可以帮我确认“胡椒”的相关信息吗？",
      "text": "후추를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "huchureul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_food_phrase_019",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "小菜可以再加一些吗？",
      "text": "반찬을 더 드릴까요?",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "banchaneul deo deurilkkayo?"
    },
    {
      "id": "ko_food_phrase_020",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "水和小菜需要自取吗？",
      "text": "물과 반찬은 셀프서비스인가요?",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "mulgwa banchaneun selpeuseobiseuingayo?"
    },
    {
      "id": "ko_food_phrase_021",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "请帮我确认“叉子”的相关信息。",
      "text": "포크를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "pokeureul hwaginhae juseyo."
    },
    {
      "id": "ko_food_phrase_022",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "请帮我确认“刀”的相关信息。",
      "text": "칼을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "kareul hwaginhae juseyo."
    },
    {
      "id": "ko_food_phrase_023",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "需要在点餐机上点餐吗？",
      "text": "키오스크에서 주문해야 하나요?",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "kioseukeueseo jumunhaeya hanayo?"
    },
    {
      "id": "ko_food_phrase_024",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请帮我确认“鸡蛋”的相关信息。",
      "text": "계란을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "gyeraneul hwaginhae juseyo."
    },
    {
      "id": "ko_food_phrase_025",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请帮我确认“肉”的相关信息。",
      "text": "고기를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "gogireul hwaginhae juseyo."
    },
    {
      "id": "ko_food_phrase_026",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请帮我确认“牛肉”的相关信息。",
      "text": "쇠고기를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "soegogireul hwaginhae juseyo."
    },
    {
      "id": "ko_food_phrase_027",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "这里需要付小费吗？",
      "text": "여기에 팁을 남겨야 하나요?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "yeogie tibeul namgyeoya hanayo?"
    },
    {
      "id": "ko_food_phrase_028",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "可以帮我确认“收银台”的相关信息吗？",
      "text": "계산대를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "gyesandaereul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_food_phrase_029",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "我想咨询“结账”。",
      "text": "계산에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "gyesane daehae munuihago sipeoyo."
    },
    {
      "id": "ko_food_phrase_030",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "可以告诉我“收银台”的相关信息吗？",
      "text": "계산대에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "gyesandaee daehae allyeo juseyo."
    },
    {
      "id": "ko_shopping_phrase_001",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "请问在哪里咨询“商店”？",
      "text": "가게는 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "gageneun eodie isseoyo?"
    },
    {
      "id": "ko_shopping_phrase_002",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我需要关于“商场”的帮助。",
      "text": "백화점 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "baekwajeom gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_shopping_phrase_003",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "可以帮我确认“超市”的相关信息吗？",
      "text": "슈퍼마켓을 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "syupeomakeseul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_shopping_phrase_004",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我想咨询“便利店”。",
      "text": "편의점에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "pyeonuijeome daehae munuihago sipeoyo."
    },
    {
      "id": "ko_shopping_phrase_005",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "可以告诉我“市场”的相关信息吗？",
      "text": "시장에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "sijange daehae allyeo juseyo."
    },
    {
      "id": "ko_shopping_phrase_006",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有哪些尺寸？",
      "text": "어떤 사이즈가 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "eotteon saijeuga isseoyo?"
    },
    {
      "id": "ko_shopping_phrase_007",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有大号吗？",
      "text": "큰 사이즈가 있어요?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "keun saijeuga isseoyo?"
    },
    {
      "id": "ko_shopping_phrase_008",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有中号吗？",
      "text": "중간 사이즈가 있어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "junggan saijeuga isseoyo?"
    },
    {
      "id": "ko_shopping_phrase_009",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有小号吗？",
      "text": "작은 사이즈가 있어요?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "jageun saijeuga isseoyo?"
    },
    {
      "id": "ko_shopping_phrase_010",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "可以帮我确认尺寸吗？",
      "text": "사이즈를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "saijeureul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_shopping_phrase_011",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试衣间在哪里？",
      "text": "피팅룸이 어디예요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "pitingnumi eodiyeyo?"
    },
    {
      "id": "ko_shopping_phrase_012",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "可以试穿吗？",
      "text": "입어봐도 돼요?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "ibeobwado dwaeyo?"
    },
    {
      "id": "ko_shopping_phrase_013",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "这里是试衣间吗？",
      "text": "여기가 피팅룸이에요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "yeogiga pitingnumieyo?"
    },
    {
      "id": "ko_shopping_phrase_014",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "可以试穿这个吗？",
      "text": "이거 입어봐도 돼요?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "igeo ibeobwado dwaeyo?"
    },
    {
      "id": "ko_shopping_phrase_015",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "请告诉我试衣间在哪里。",
      "text": "피팅룸이 어디인지 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "pitingnumi eodiinji allyeo juseyo."
    },
    {
      "id": "ko_shopping_phrase_016",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "请问在哪里咨询“价格”？",
      "text": "가격은 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "gagyeogeun eodie isseoyo?"
    },
    {
      "id": "ko_shopping_phrase_017",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "这个多少钱？",
      "text": "이거 얼마예요?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "igeo eolmayeyo?"
    },
    {
      "id": "ko_shopping_phrase_018",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "这个有点贵。",
      "text": "이거 조금 비싸요.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "igeo jogeum bissayo."
    },
    {
      "id": "ko_shopping_phrase_019",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "有更便宜的吗？",
      "text": "좀 더 싼 게 있나요?",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "jom deo ssan ge innayo?"
    },
    {
      "id": "ko_shopping_phrase_020",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "标价包含增值税吗？",
      "text": "표시된 가격에 VAT가 포함되어 있나요?",
      "direction": "traveler-hears",
      "intent": "local-use",
      "pronunciation": "pyosidoen gagyeoge vatga pohamdoeeo innayo?"
    },
    {
      "id": "ko_shopping_phrase_021",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "请帮我确认“信用卡”的相关信息。",
      "text": "신용카드를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "sinyongkadeureul hwaginhae juseyo."
    },
    {
      "id": "ko_shopping_phrase_022",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "请帮我确认“银行卡”的相关信息。",
      "text": "체크카드를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "chekeukadeureul hwaginhae juseyo."
    },
    {
      "id": "ko_shopping_phrase_023",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "请帮我确认“零钱”的相关信息。",
      "text": "잔돈을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "jandoneul hwaginhae juseyo."
    },
    {
      "id": "ko_shopping_phrase_024",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以凭护照立即退税吗？",
      "text": "여권으로 즉시 세금 환급을 받을 수 있나요?",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "yeogwoneuro jeuksi segeum hwangeubeul badeul su innayo?"
    },
    {
      "id": "ko_shopping_phrase_025",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请帮我确认“小票”的相关信息。",
      "text": "영수증을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "yeongsujeungeul hwaginhae juseyo."
    },
    {
      "id": "ko_shopping_phrase_026",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请帮我确认“小票”的相关信息。",
      "text": "영수증을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "yeongsujeungeul hwaginhae juseyo."
    },
    {
      "id": "ko_shopping_phrase_027",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "我需要关于“小票”的帮助。",
      "text": "영수증 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "yeongsujeung gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_shopping_phrase_028",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以帮我确认“小票”的相关信息吗？",
      "text": "영수증을 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "yeongsujeungeul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_shopping_phrase_029",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "我想咨询“小票”。",
      "text": "영수증에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "yeongsujeunge daehae munuihago sipeoyo."
    },
    {
      "id": "ko_shopping_phrase_030",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以告诉我“小票”的相关信息吗？",
      "text": "영수증에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "yeongsujeunge daehae allyeo juseyo."
    },
    {
      "id": "ko_directions_phrase_001",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "请问在哪里咨询“哪里”？",
      "text": "어디는 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "eodineun eodie isseoyo?"
    },
    {
      "id": "ko_directions_phrase_002",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "我需要关于“这里”的帮助。",
      "text": "여기 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "yeogi gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_directions_phrase_003",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "可以帮我确认“那里”的相关信息吗？",
      "text": "저기를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "jeogireul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_directions_phrase_004",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "我想咨询“左边”。",
      "text": "왼쪽에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "oenjjoge daehae munuihago sipeoyo."
    },
    {
      "id": "ko_directions_phrase_005",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "最近的地铁站出口是几号？",
      "text": "가장 가까운 지하철 출구 번호는 몇 번입니까?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "gajang gakkaun jihacheol chulgu beonhoneun myeot beonimnikka?"
    },
    {
      "id": "ko_directions_phrase_006",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请问在哪里咨询“前面”？",
      "text": "앞은 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "apeun eodie isseoyo?"
    },
    {
      "id": "ko_directions_phrase_007",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我需要关于“后面”的帮助。",
      "text": "뒤 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "dwi gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_directions_phrase_008",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "可以帮我确认“旁边”的相关信息吗？",
      "text": "옆에를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "yeopereul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_directions_phrase_009",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我想咨询“对面”。",
      "text": "반대편에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "bandaepyeone daehae munuihago sipeoyo."
    },
    {
      "id": "ko_directions_phrase_010",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "可以告诉我“附近”的相关信息吗？",
      "text": "근처에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "geuncheoe daehae allyeo juseyo."
    },
    {
      "id": "ko_directions_phrase_011",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "离这里远吗？",
      "text": "여기서 멀어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "yeogiseo meoreoyo?"
    },
    {
      "id": "ko_directions_phrase_012",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "在附近吗？",
      "text": "가까이에 있어요?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "gakkaie isseoyo?"
    },
    {
      "id": "ko_directions_phrase_013",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "需要走很远吗？",
      "text": "많이 걸어야 해요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "mani georeoya haeyo?"
    },
    {
      "id": "ko_directions_phrase_014",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "很近吗？",
      "text": "아주 가까워요?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "aju gakkawoyo?"
    },
    {
      "id": "ko_directions_phrase_015",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "目的地离这里远吗？",
      "text": "목적지가 여기서 멀어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "mokjeokjiga yeogiseo meoreoyo?"
    },
    {
      "id": "ko_directions_phrase_016",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "目的地在附近吗？",
      "text": "목적지가 가까이에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "mokjeokjiga gakkaie isseoyo?"
    },
    {
      "id": "ko_directions_phrase_017",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "步行过去远吗？",
      "text": "걸어가기에는 멀어요?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "georeogagieneun meoreoyo?"
    },
    {
      "id": "ko_directions_phrase_018",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "可以在 Naver 地图上标出来吗？",
      "text": "네이버 지도에 표시해 주실 수 있나요?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "neibeo jidoe pyosihae jusil su innayo?"
    },
    {
      "id": "ko_directions_phrase_019",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请帮我确认“桥”的相关信息。",
      "text": "다리를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "darireul hwaginhae juseyo."
    },
    {
      "id": "ko_directions_phrase_020",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请帮我确认“路”的相关信息。",
      "text": "도로를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "dororeul hwaginhae juseyo."
    },
    {
      "id": "ko_directions_phrase_021",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请帮我确认“街道”的相关信息。",
      "text": "거리를 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "georireul hwaginhae juseyo."
    },
    {
      "id": "ko_directions_phrase_022",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请帮我确认“建筑”的相关信息。",
      "text": "건물을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "geonmureul hwaginhae juseyo."
    },
    {
      "id": "ko_directions_phrase_023",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请再慢一点说。",
      "text": "좀 더 천천히 다시 말씀해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "jom deo cheoncheonhi dasi malsseumhae juseyo."
    },
    {
      "id": "ko_directions_phrase_024",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请帮我确认“邮局”的相关信息。",
      "text": "우체국을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "uchegugeul hwaginhae juseyo."
    },
    {
      "id": "ko_directions_phrase_025",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请帮我确认“厕所”的相关信息。",
      "text": "화장실을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "hwajangsireul hwaginhae juseyo."
    },
    {
      "id": "ko_directions_phrase_026",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "请帮我确认“公交站”的相关信息。",
      "text": "버스 정류장을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "beoseu jeongnyujangeul hwaginhae juseyo."
    },
    {
      "id": "ko_directions_phrase_027",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "我需要关于“地铁站”的帮助。",
      "text": "지하철역 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "jihacheollyeok gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_directions_phrase_028",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "可以帮我确认“景点”的相关信息吗？",
      "text": "관광지를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "gwangwangjireul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_directions_phrase_029",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "我想咨询“博物馆”。",
      "text": "박물관에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "bangmulgwane daehae munuihago sipeoyo."
    },
    {
      "id": "ko_directions_phrase_030",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "可以告诉我“公园”的相关信息吗？",
      "text": "공원에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "gongwone daehae allyeo juseyo."
    },
    {
      "id": "ko_emergency_phrase_001",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "请问在哪里咨询“发烧”？",
      "text": "발열은 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "ballyeoreun eodie isseoyo?"
    },
    {
      "id": "ko_emergency_phrase_002",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我需要关于“感冒”的帮助。",
      "text": "감기 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "gamgi gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_emergency_phrase_003",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "可以帮我确认“咳嗽”的相关信息吗？",
      "text": "기침을 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "gichimeul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_emergency_phrase_004",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我想咨询“头疼”。",
      "text": "두통에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "dutonge daehae munuihago sipeoyo."
    },
    {
      "id": "ko_emergency_phrase_005",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "可以告诉我“肚子疼”的相关信息吗？",
      "text": "복통에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "boktonge daehae allyeo juseyo."
    },
    {
      "id": "ko_emergency_phrase_006",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "附近有接诊游客的医院吗？",
      "text": "근처에 여행자를 받아들이는 병원이 있나요?",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "geuncheoe yeohaengjareul badadeurineun byeongwoni innayo?"
    },
    {
      "id": "ko_emergency_phrase_007",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "我需要关于“护士”的帮助。",
      "text": "간호사 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "ganhosa gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_emergency_phrase_008",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "可以帮我确认“药”的相关信息吗？",
      "text": "약을 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "yageul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_emergency_phrase_009",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "我想咨询“处方”。",
      "text": "처방에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "cheobange daehae munuihago sipeoyo."
    },
    {
      "id": "ko_emergency_phrase_010",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "可以告诉我“药片”的相关信息吗？",
      "text": "알약에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "allyage daehae allyeo juseyo."
    },
    {
      "id": "ko_emergency_phrase_011",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "请问在哪里咨询“药膏”？",
      "text": "연고는 어디에 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "yeongoneun eodie isseoyo?"
    },
    {
      "id": "ko_emergency_phrase_012",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请帮我拨打 112 报警。",
      "text": "경찰에 신고하려면 112에 전화하세요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "gyeongchare singoharyeomyeon 112e jeonhwahaseyo."
    },
    {
      "id": "ko_emergency_phrase_013",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请帮我报警。",
      "text": "경찰에 신고해 주세요.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "gyeongchare singohae juseyo."
    },
    {
      "id": "ko_emergency_phrase_014",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "警察局在哪里？",
      "text": "경찰서가 어디예요?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "gyeongchalseoga eodiyeyo?"
    },
    {
      "id": "ko_emergency_phrase_015",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "我需要警察的帮助。",
      "text": "경찰의 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "gyeongcharui doumi pillyohaeyo."
    },
    {
      "id": "ko_emergency_phrase_016",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请叫警察。",
      "text": "경찰을 불러 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "gyeongchareul bulleo juseyo."
    },
    {
      "id": "ko_emergency_phrase_017",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我需要关于“腹泻”的帮助。",
      "text": "설사 관련해서 도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "seolsa gwallyeonhaeseo doumi pillyohaeyo."
    },
    {
      "id": "ko_emergency_phrase_018",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "可以帮我确认“便秘”的相关信息吗？",
      "text": "변비를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "byeonbireul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_emergency_phrase_019",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请帮我确认“受伤”的相关信息。",
      "text": "부상을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "busangeul hwaginhae juseyo."
    },
    {
      "id": "ko_emergency_phrase_020",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请帮我确认“流血”的相关信息。",
      "text": "출혈을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "chulhyeoreul hwaginhae juseyo."
    },
    {
      "id": "ko_emergency_phrase_021",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请帮我确认“骨折”的相关信息。",
      "text": "골절을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "goljeoreul hwaginhae juseyo."
    },
    {
      "id": "ko_emergency_phrase_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请帮我拨打 119。",
      "text": "119로 전화주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "119ro jeonhwajuseyo."
    },
    {
      "id": "ko_emergency_phrase_023",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请帮我确认“紧急”的相关信息。",
      "text": "응급 상황을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "eunggeup sanghwangeul hwaginhae juseyo."
    },
    {
      "id": "ko_emergency_phrase_024",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请叫救护车。",
      "text": "구급차를 불러 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "gugeupchareul bulleo juseyo."
    },
    {
      "id": "ko_emergency_phrase_025",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请帮我确认“受伤”的相关信息。",
      "text": "부상을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "busangeul hwaginhae juseyo."
    },
    {
      "id": "ko_emergency_phrase_026",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请帮我确认“流血”的相关信息。",
      "text": "출혈을 확인해 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "chulhyeoreul hwaginhae juseyo."
    },
    {
      "id": "ko_emergency_phrase_027",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "可以联系 1330 旅游咨询热线吗？",
      "text": "1330 여행상담전화로 연락주시겠어요?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "1330 yeohaengsangdamjeonhwaro yeollakjusigesseoyo?"
    },
    {
      "id": "ko_emergency_phrase_028",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "可以帮我确认“保险卡”的相关信息吗？",
      "text": "보험 카드를 확인해 주시겠어요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "boheom kadeureul hwaginhae jusigesseoyo?"
    },
    {
      "id": "ko_emergency_phrase_029",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "我想咨询“保险”。",
      "text": "보험에 대해 문의하고 싶어요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "boheome daehae munuihago sipeoyo."
    },
    {
      "id": "ko_emergency_phrase_030",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "可以告诉我“保险卡”的相关信息吗？",
      "text": "보험 카드에 대해 알려 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "boheom kadeue daehae allyeo juseyo."
    },
    {
      "id": "ko_basics_phrase_001",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "你好。",
      "text": "안녕하세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "annyeonghaseyo."
    },
    {
      "id": "ko_basics_phrase_002",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "早上好。",
      "text": "좋은 아침이에요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "joeun achimieyo."
    },
    {
      "id": "ko_basics_phrase_003",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "晚上好。",
      "text": "좋은 저녁이에요.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "joeun jeonyeogieyo."
    },
    {
      "id": "ko_basics_phrase_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "谢谢。",
      "text": "감사합니다.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "gamsahamnida."
    },
    {
      "id": "ko_basics_phrase_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "非常感谢。",
      "text": "정말 감사합니다.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "jeongmal gamsahamnida."
    },
    {
      "id": "ko_basics_phrase_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "不客气。",
      "text": "별말씀을요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "byeolmalsseumeullyo."
    },
    {
      "id": "ko_basics_phrase_007",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "拜托了。",
      "text": "부탁드립니다.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "butakdeurimnida."
    },
    {
      "id": "ko_basics_phrase_008",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "一共七个人。",
      "text": "일곱 명이에요.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "ilgop myeongieyo."
    },
    {
      "id": "ko_basics_phrase_009",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "请给我八个。",
      "text": "여덟 개 주세요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "yeodeol gae juseyo."
    },
    {
      "id": "ko_basics_phrase_010",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "现在九点。",
      "text": "아홉 시예요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "ahop siyeyo."
    },
    {
      "id": "ko_basics_phrase_011",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "请给我十张。",
      "text": "열 장 주세요.",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "yeol jang juseyo."
    },
    {
      "id": "ko_basics_phrase_012",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我不会说韩语。",
      "text": "한국어를 못해요.",
      "direction": "traveler-says",
      "intent": "local-use",
      "pronunciation": "hangugeoreul mothaeyo."
    },
    {
      "id": "ko_basics_phrase_013",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请用中文写下来。",
      "text": "중국어로 적어 주세요.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "junggugeoro jeogeo juseyo."
    },
    {
      "id": "ko_basics_phrase_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "是一万韩元吗？",
      "text": "만 원이에요?",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "man wonieyo?"
    },
    {
      "id": "ko_basics_phrase_015",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "这个金额用韩语怎么说？",
      "text": "이 금액을 한국어로 어떻게 말해요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "i geumaegeul hangugeoro eotteoke malhaeyo?"
    },
    {
      "id": "ko_basics_phrase_016",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "可以兑换美元吗？",
      "text": "미국 달러를 환전할 수 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "miguk dalleoreul hwanjeonhal su isseoyo?"
    },
    {
      "id": "ko_basics_phrase_017",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "可以兑换人民币吗？",
      "text": "중국 위안을 환전할 수 있어요?",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "jungguk wianeul hwanjeonhal su isseoyo?"
    },
    {
      "id": "ko_basics_phrase_018",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "是零韩元吗？",
      "text": "영 원이에요?",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "yeong wonieyo?"
    },
    {
      "id": "ko_basics_phrase_019",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "一个人。",
      "text": "한 명이에요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "han myeongieyo."
    },
    {
      "id": "ko_basics_phrase_020",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "请给我两个。",
      "text": "두 개 주세요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "du gae juseyo."
    },
    {
      "id": "ko_basics_phrase_021",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "是今天。",
      "text": "오늘이에요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "oneurieyo."
    },
    {
      "id": "ko_basics_phrase_022",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "是明天。",
      "text": "내일이에요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "naeirieyo."
    },
    {
      "id": "ko_basics_phrase_023",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "是昨天。",
      "text": "어제였어요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "eojeyeosseoyo."
    },
    {
      "id": "ko_basics_phrase_024",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "是后天。",
      "text": "모레예요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "moreyeyo."
    },
    {
      "id": "ko_basics_phrase_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "对，没错。",
      "text": "네, 맞아요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "ne, majayo."
    },
    {
      "id": "ko_basics_phrase_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不是。",
      "text": "아니요.",
      "direction": "traveler-hears",
      "intent": "confirm",
      "pronunciation": "aniyo."
    },
    {
      "id": "ko_basics_phrase_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以。",
      "text": "괜찮아요.",
      "direction": "traveler-says",
      "intent": "request",
      "pronunciation": "gwaenchanayo."
    },
    {
      "id": "ko_basics_phrase_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我想要这个。",
      "text": "이걸 원해요.",
      "direction": "traveler-says",
      "intent": "confirm",
      "pronunciation": "igeol wonhaeyo."
    },
    {
      "id": "ko_basics_phrase_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我需要帮助。",
      "text": "도움이 필요해요.",
      "direction": "traveler-says",
      "intent": "repair",
      "pronunciation": "doumi pillyohaeyo."
    },
    {
      "id": "ko_basics_phrase_030",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "有空房吗？",
      "text": "빈방이 있어요?",
      "direction": "traveler-says",
      "intent": "ask",
      "pronunciation": "binbangi isseoyo?"
    }
  ]
});
})();
