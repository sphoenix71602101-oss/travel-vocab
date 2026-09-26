(function () {
  "use strict";
  window.registerContentPack({
  "id": "es-es",
  "destinationId": "es",
  "locale": "es-ES",
  "speechLocale": "es-ES",
  "languageCode": "es",
  "languageLabel": "西班牙语",
  "nativeLabel": "Español",
  "pronunciationLabel": null,
  "features": {
    "beginnerModule": "es-es-beginner",
    "beginnerAudioBase": "audio/es/beginner",
    "emergencyCard": {
      "title": "Tarjeta de emergencia",
      "notice": "Solo para facilitar la comunicación en caso de emergencia.",
      "foreignNameLabel": "护照拼音姓名",
      "unknownBloodType": "Desconocido",
      "labels": {
        "name": "Nombre",
        "nationality": "Nacionalidad",
        "birthDate": "Fecha de nacimiento",
        "bloodType": "Grupo sanguíneo",
        "documentNumber": "Pasaporte / documento de identidad",
        "emergencyContact": "Contacto de emergencia",
        "emergencyPhone": "Teléfono",
        "allergies": "Alergias",
        "conditions": "Enfermedades / antecedentes"
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
            "target": "Japón"
          },
          {
            "code": "kr",
            "zh": "韩国",
            "target": "Corea del Sur"
          },
          {
            "code": "sg",
            "zh": "新加坡",
            "target": "Singapur"
          },
          {
            "code": "my",
            "zh": "马来西亚",
            "target": "Malasia"
          },
          {
            "code": "us",
            "zh": "美国",
            "target": "Estados Unidos"
          },
          {
            "code": "gb",
            "zh": "英国",
            "target": "Reino Unido"
          },
          {
            "code": "ca",
            "zh": "加拿大",
            "target": "Canadá"
          },
          {
            "code": "au",
            "zh": "澳大利亚",
            "target": "Australia"
          },
          {
            "code": "fr",
            "zh": "法国",
            "target": "Francia"
          },
          {
            "code": "de",
            "zh": "德国",
            "target": "Alemania"
          },
          {
            "code": "es",
            "zh": "西班牙",
            "target": "España"
          },
          {
            "code": "it",
            "zh": "意大利",
            "target": "Italia"
          },
          {
            "code": "other",
            "zh": "其他",
            "target": "Otra"
          }
        ],
        "allergies": [
          {
            "code": "none",
            "zh": "无",
            "target": "Ninguna"
          },
          {
            "code": "penicillin",
            "zh": "青霉素",
            "target": "Penicilina"
          },
          {
            "code": "cephalosporin",
            "zh": "头孢菌素",
            "target": "Cefalosporinas"
          },
          {
            "code": "sulfonamides",
            "zh": "磺胺类",
            "target": "Sulfamidas"
          },
          {
            "code": "nsaids",
            "zh": "阿司匹林/NSAIDs",
            "target": "Aspirina / AINE"
          },
          {
            "code": "peanuts",
            "zh": "花生",
            "target": "Cacahuetes"
          },
          {
            "code": "nuts",
            "zh": "坚果",
            "target": "Frutos secos"
          },
          {
            "code": "shellfish",
            "zh": "海鲜/甲壳类",
            "target": "Marisco / crustáceos"
          },
          {
            "code": "milk",
            "zh": "牛奶",
            "target": "Leche"
          },
          {
            "code": "eggs",
            "zh": "鸡蛋",
            "target": "Huevos"
          },
          {
            "code": "gluten",
            "zh": "小麦/麸质",
            "target": "Trigo / gluten"
          },
          {
            "code": "soy",
            "zh": "大豆",
            "target": "Soja"
          },
          {
            "code": "latex",
            "zh": "乳胶",
            "target": "Látex"
          },
          {
            "code": "insect",
            "zh": "昆虫蜇伤",
            "target": "Picaduras de insectos"
          }
        ],
        "conditions": [
          {
            "code": "none",
            "zh": "无",
            "target": "Ninguna"
          },
          {
            "code": "diabetes",
            "zh": "糖尿病",
            "target": "Diabetes"
          },
          {
            "code": "hypertension",
            "zh": "高血压",
            "target": "Hipertensión"
          },
          {
            "code": "heart",
            "zh": "心脏病",
            "target": "Cardiopatía"
          },
          {
            "code": "asthma",
            "zh": "哮喘",
            "target": "Asma"
          },
          {
            "code": "epilepsy",
            "zh": "癫痫",
            "target": "Epilepsia"
          },
          {
            "code": "kidney",
            "zh": "肾脏疾病",
            "target": "Enfermedad renal"
          },
          {
            "code": "anticoagulants",
            "zh": "正在服用抗凝药",
            "target": "Toma anticoagulantes"
          },
          {
            "code": "pregnancy",
            "zh": "怀孕",
            "target": "Embarazo"
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
      "text": "pasaporte",
      "audioPath": "audio/es/airport_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_001_example",
        "zh": "这是我的护照。",
        "text": "Aquí tiene mi pasaporte."
      }
    },
    {
      "id": "airport_002",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "签证",
      "text": "visado",
      "audioPath": "audio/es/airport_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_002_example",
        "zh": "入境西班牙需要签证吗？",
        "text": "¿Necesito visado para entrar en España?"
      }
    },
    {
      "id": "airport_003",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "机票",
      "text": "billete de avión",
      "audioPath": "audio/es/airport_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_003_example",
        "zh": "我想更改机票。",
        "text": "Quisiera cambiar mi billete de avión."
      }
    },
    {
      "id": "airport_004",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "登机牌",
      "text": "tarjeta de embarque",
      "audioPath": "audio/es/airport_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_004_example",
        "zh": "需要打印登机牌吗？",
        "text": "¿Tengo que imprimir la tarjeta de embarque?"
      }
    },
    {
      "id": "airport_005",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李",
      "text": "equipaje",
      "audioPath": "audio/es/airport_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_005_example",
        "zh": "这件行李可以托运吗？",
        "text": "¿Puedo facturar este equipaje?"
      }
    },
    {
      "id": "airport_006",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李箱",
      "text": "maleta",
      "audioPath": "audio/es/airport_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_006_example",
        "zh": "我的行李箱没有出来。",
        "text": "Mi maleta no ha salido por la cinta."
      }
    },
    {
      "id": "airport_007",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "手提行李",
      "text": "equipaje de mano",
      "audioPath": "audio/es/airport_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_007_example",
        "zh": "这件手提行李符合尺寸要求吗？",
        "text": "¿Este equipaje de mano cumple las medidas?"
      }
    },
    {
      "id": "airport_008",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "机场",
      "text": "aeropuerto",
      "audioPath": "audio/es/airport_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_008_example",
        "zh": "去机场怎么走？",
        "text": "¿Cómo se llega al aeropuerto?"
      }
    },
    {
      "id": "airport_009",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航站楼",
      "text": "terminal",
      "audioPath": "audio/es/airport_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_009_example",
        "zh": "这个航班从哪个航站楼出发？",
        "text": "¿De qué terminal sale este vuelo?"
      }
    },
    {
      "id": "airport_010",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "出发",
      "text": "salida",
      "audioPath": "audio/es/airport_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_010_example",
        "zh": "出发区在楼上。",
        "text": "La zona de salidas está arriba."
      }
    },
    {
      "id": "airport_011",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "到达",
      "text": "llegada",
      "audioPath": "audio/es/airport_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_011_example",
        "zh": "请看屏幕上的到达信息。",
        "text": "Mire las llegadas en la pantalla."
      }
    },
    {
      "id": "airport_012",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机口",
      "text": "puerta de embarque",
      "audioPath": "audio/es/airport_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_012_example",
        "zh": "登机口换了吗？",
        "text": "¿Ha cambiado la puerta de embarque?"
      }
    },
    {
      "id": "airport_013",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "安检",
      "text": "control de seguridad",
      "audioPath": "audio/es/airport_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_013_example",
        "zh": "安检大约需要多长时间？",
        "text": "¿Cuánto se tarda en pasar el control de seguridad?"
      }
    },
    {
      "id": "airport_014",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "海关",
      "text": "aduana",
      "audioPath": "audio/es/airport_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_014_example",
        "zh": "我没有需要向海关申报的物品。",
        "text": "No tengo nada que declarar en la aduana."
      }
    },
    {
      "id": "airport_015",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境",
      "text": "entrada al país",
      "audioPath": "audio/es/airport_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_015_example",
        "zh": "入境时要填写这张表吗？",
        "text": "¿Tengo que rellenar este formulario para entrar en el país?"
      }
    },
    {
      "id": "airport_016",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "出境",
      "text": "salida del país",
      "audioPath": "audio/es/airport_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_016_example",
        "zh": "离境检查在哪里？",
        "text": "¿Dónde está el control de salida del país?"
      }
    },
    {
      "id": "airport_017",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "转机",
      "text": "escala",
      "audioPath": "audio/es/airport_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_017_example",
        "zh": "我在马德里转机。",
        "text": "Tengo una escala en Madrid."
      }
    },
    {
      "id": "airport_018",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航班",
      "text": "vuelo",
      "audioPath": "audio/es/airport_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_018_example",
        "zh": "我的航班几点起飞？",
        "text": "¿A qué hora sale mi vuelo?"
      }
    },
    {
      "id": "airport_019",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "延误",
      "text": "retraso",
      "audioPath": "audio/es/airport_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_019_example",
        "zh": "航班延误了两个小时。",
        "text": "El vuelo lleva dos horas de retraso."
      }
    },
    {
      "id": "airport_020",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "取消",
      "text": "cancelación",
      "audioPath": "audio/es/airport_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_020_example",
        "zh": "航班取消后我该怎么办？",
        "text": "¿Qué hago si han cancelado el vuelo?"
      }
    },
    {
      "id": "airport_021",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "值机",
      "text": "facturación",
      "audioPath": "audio/es/airport_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_021_example",
        "zh": "值机柜台已经开了吗？",
        "text": "¿Ya está abierto el mostrador de facturación?"
      }
    },
    {
      "id": "airport_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机",
      "text": "embarque",
      "audioPath": "audio/es/airport_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_022_example",
        "zh": "登机已经开始了。",
        "text": "Ya ha empezado el embarque."
      }
    },
    {
      "id": "airport_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "起飞",
      "text": "despegue",
      "audioPath": "audio/es/airport_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_023_example",
        "zh": "起飞前请关闭手机。",
        "text": "Apague el móvil antes del despegue, por favor."
      }
    },
    {
      "id": "airport_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "降落",
      "text": "aterrizaje",
      "audioPath": "audio/es/airport_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_024_example",
        "zh": "着陆时请系好安全带。",
        "text": "Abróchese el cinturón durante el aterrizaje."
      }
    },
    {
      "id": "airport_025",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "座位",
      "text": "asiento",
      "audioPath": "audio/es/airport_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_026",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠窗座位",
      "text": "asiento de ventanilla",
      "audioPath": "audio/es/airport_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_027",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "过道座位",
      "text": "asiento de pasillo",
      "audioPath": "audio/es/airport_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_028",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李领取处",
      "text": "recogida de equipajes",
      "audioPath": "audio/es/airport_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_029",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李推车",
      "text": "carrito portaequipajes",
      "audioPath": "audio/es/airport_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_030",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照查验",
      "text": "control de pasaportes",
      "audioPath": "audio/es/airport_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_031",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "免税店",
      "text": "tienda libre de impuestos",
      "audioPath": "audio/es/airport_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_032",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "机场大巴",
      "text": "autobús del aeropuerto",
      "audioPath": "audio/es/airport_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_032_example",
        "zh": "机场大巴在哪里乘坐？",
        "text": "¿Dónde se coge el autobús del aeropuerto?"
      }
    },
    {
      "id": "airport_033",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "word",
      "zh": "出租车",
      "text": "taxi",
      "audioPath": "audio/es/airport_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_033_example",
        "zh": "请帮我叫一辆出租车。",
        "text": "¿Puede llamarme un taxi, por favor?"
      }
    },
    {
      "id": "airport_034",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "地铁",
      "text": "metro",
      "audioPath": "audio/es/airport_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_034_example",
        "zh": "去市中心可以坐地铁。",
        "text": "Puede ir al centro en metro."
      }
    },
    {
      "id": "airport_035",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "火车",
      "text": "tren",
      "audioPath": "audio/es/airport_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_035_example",
        "zh": "这趟火车去塞维利亚吗？",
        "text": "¿Este tren va a Sevilla?"
      }
    },
    {
      "id": "airport_036",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "高铁",
      "text": "tren de alta velocidad",
      "audioPath": "audio/es/airport_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_036_example",
        "zh": "去马德里的高铁从哪个站台开？",
        "text": "¿De qué andén sale el tren de alta velocidad a Madrid?"
      }
    },
    {
      "id": "airport_037",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "公交车",
      "text": "autobús",
      "audioPath": "audio/es/airport_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_037_example",
        "zh": "下一班公交车几点到？",
        "text": "¿A qué hora llega el próximo autobús?"
      }
    },
    {
      "id": "airport_038",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "车站",
      "text": "estación",
      "audioPath": "audio/es/airport_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_038_example",
        "zh": "车站离这里远吗？",
        "text": "¿Está lejos la estación?"
      }
    },
    {
      "id": "airport_039",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "站台",
      "text": "andén",
      "audioPath": "audio/es/airport_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_039_example",
        "zh": "我们的火车在三号站台。",
        "text": "Nuestro tren sale del andén tres."
      }
    },
    {
      "id": "airport_040",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "时刻表",
      "text": "horario",
      "audioPath": "audio/es/airport_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_040_example",
        "zh": "我在哪里能看时刻表？",
        "text": "¿Dónde puedo consultar el horario?"
      }
    },
    {
      "id": "airport_041",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "单程票",
      "text": "billete de ida",
      "audioPath": "audio/es/airport_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_041_example",
        "zh": "请给我一张去托莱多的单程票。",
        "text": "Un billete de ida a Toledo, por favor."
      }
    },
    {
      "id": "airport_042",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "往返票",
      "text": "billete de ida y vuelta",
      "audioPath": "audio/es/airport_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_042_example",
        "zh": "我想买一张往返票。",
        "text": "Quisiera un billete de ida y vuelta."
      }
    },
    {
      "id": "airport_043",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "车票",
      "text": "billete",
      "audioPath": "audio/es/airport_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_043_example",
        "zh": "这张票需要检票吗？",
        "text": "¿Hay que validar este billete?"
      }
    },
    {
      "id": "airport_044",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "售票处",
      "text": "taquilla",
      "audioPath": "audio/es/airport_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_044_example",
        "zh": "售票窗口几点关门？",
        "text": "¿A qué hora cierra la taquilla?"
      }
    },
    {
      "id": "airport_045",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "自动售票机",
      "text": "máquina expendedora",
      "audioPath": "audio/es/airport_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_045_example",
        "zh": "可以在自动售票机上用银行卡吗？",
        "text": "¿Se puede pagar con tarjeta en la máquina expendedora?"
      }
    },
    {
      "id": "airport_046",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "检票口",
      "text": "torno de acceso",
      "audioPath": "audio/es/airport_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_046_example",
        "zh": "请把车票放在闸机上。",
        "text": "Acerque el billete al torno de acceso."
      }
    },
    {
      "id": "airport_047",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "入口",
      "text": "entrada",
      "audioPath": "audio/es/airport_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_047_example",
        "zh": "地铁入口在广场旁边。",
        "text": "La entrada del metro está junto a la plaza."
      }
    },
    {
      "id": "airport_048",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "出口",
      "text": "salida",
      "audioPath": "audio/es/airport_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_048_example",
        "zh": "出口在左边。",
        "text": "La salida está a la izquierda."
      }
    },
    {
      "id": "airport_049",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "问讯处",
      "text": "oficina de información",
      "audioPath": "audio/es/airport_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_049_example",
        "zh": "我去问一下服务台。",
        "text": "Voy a preguntar en la oficina de información."
      }
    },
    {
      "id": "airport_050",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "地图",
      "text": "mapa",
      "audioPath": "audio/es/airport_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_050_example",
        "zh": "可以在地图上标出来吗？",
        "text": "¿Puede señalarlo en el mapa?"
      }
    },
    {
      "id": "airport_051",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "目的地",
      "text": "destino",
      "audioPath": "audio/es/airport_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_051_example",
        "zh": "我的目的地是格拉纳达。",
        "text": "Mi destino es Granada."
      }
    },
    {
      "id": "airport_052",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "汽车",
      "text": "coche",
      "audioPath": "audio/es/airport_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_053",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "租车",
      "text": "coche de alquiler",
      "audioPath": "audio/es/airport_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_053_example",
        "zh": "我想租一辆自动挡汽车。",
        "text": "Quisiera alquilar un coche automático."
      }
    },
    {
      "id": "airport_054",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "加油站",
      "text": "gasolinera",
      "audioPath": "audio/es/airport_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_055",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "停车场",
      "text": "aparcamiento",
      "audioPath": "audio/es/airport_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_056",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "红绿灯",
      "text": "semáforo",
      "audioPath": "audio/es/airport_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_057",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "人行横道",
      "text": "paso de peatones",
      "audioPath": "audio/es/airport_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_058",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "自行车",
      "text": "bicicleta",
      "audioPath": "audio/es/airport_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_059",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "摩托车",
      "text": "moto",
      "audioPath": "audio/es/airport_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_060",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "word",
      "zh": "步行",
      "text": "a pie",
      "audioPath": "audio/es/airport_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_060_example",
        "zh": "从这里可以步行过去吗？",
        "text": "¿Se puede ir a pie desde aquí?"
      }
    },
    {
      "id": "airport_061",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "直飞",
      "text": "vuelo directo",
      "audioPath": "audio/es/airport_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_061_example",
        "zh": "有飞往巴塞罗那的直飞航班吗？",
        "text": "¿Hay algún vuelo directo a Barcelona?"
      }
    },
    {
      "id": "airport_062",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李寄存",
      "text": "consigna de equipaje",
      "audioPath": "audio/es/airport_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_062_example",
        "zh": "哪里可以寄存行李？",
        "text": "¿Dónde está la consigna de equipaje?"
      }
    },
    {
      "id": "airport_063",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李丢失",
      "text": "equipaje perdido",
      "audioPath": "audio/es/airport_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_063_example",
        "zh": "我需要申报行李丢失。",
        "text": "Necesito comunicar que se ha perdido mi equipaje."
      }
    },
    {
      "id": "airport_064",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "护照号码",
      "text": "número de pasaporte",
      "audioPath": "audio/es/airport_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_065",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "航班号",
      "text": "número de vuelo",
      "audioPath": "audio/es/airport_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_066",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "word",
      "zh": "候机室",
      "text": "sala de espera",
      "audioPath": "audio/es/airport_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_067",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机时间",
      "text": "hora de embarque",
      "audioPath": "audio/es/airport_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_068",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "随身携带",
      "text": "llevar como equipaje de mano",
      "audioPath": "audio/es/airport_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_068_example",
        "zh": "这个可以作为手提行李带上飞机吗？",
        "text": "¿Puedo llevar esto como equipaje de mano?"
      }
    },
    {
      "id": "airport_069",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "托运",
      "text": "facturar el equipaje",
      "audioPath": "audio/es/airport_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_069_example",
        "zh": "我想托运这个行李箱。",
        "text": "Quiero facturar esta maleta."
      }
    },
    {
      "id": "airport_070",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李检查",
      "text": "inspección de equipaje",
      "audioPath": "audio/es/airport_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_071",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境卡",
      "text": "tarjeta de entrada",
      "audioPath": "audio/es/airport_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_072",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "海关申报",
      "text": "declaración de aduanas",
      "audioPath": "audio/es/airport_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_072_example",
        "zh": "我需要填写海关申报单吗？",
        "text": "¿Tengo que rellenar una declaración de aduanas?"
      }
    },
    {
      "id": "airport_073",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "转机柜台",
      "text": "mostrador de conexiones",
      "audioPath": "audio/es/airport_073.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_074",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "安全带",
      "text": "cinturón de seguridad",
      "audioPath": "audio/es/airport_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_075",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "空乘",
      "text": "auxiliar de vuelo",
      "audioPath": "audio/es/airport_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_076",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "机长",
      "text": "comandante",
      "audioPath": "audio/es/airport_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_077",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "登机桥",
      "text": "pasarela de embarque",
      "audioPath": "audio/es/airport_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_078",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "跑道",
      "text": "pista",
      "audioPath": "audio/es/airport_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_079",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "word",
      "zh": "签证延期",
      "text": "prórroga del visado",
      "audioPath": "audio/es/airport_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_079_example",
        "zh": "我想申请延长签证。",
        "text": "Quisiera solicitar una prórroga del visado."
      }
    },
    {
      "id": "airport_080",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "word",
      "zh": "入境检查",
      "text": "control de inmigración",
      "audioPath": "audio/es/airport_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_081",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "word",
      "zh": "行李超重",
      "text": "exceso de equipaje",
      "audioPath": "audio/es/airport_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_airport_081_example",
        "zh": "超重行李要付多少钱？",
        "text": "¿Cuánto tengo que pagar por el exceso de equipaje?"
      }
    },
    {
      "id": "airport_082",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠窗",
      "text": "junto a la ventanilla",
      "audioPath": "audio/es/airport_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_083",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "word",
      "zh": "靠过道",
      "text": "junto al pasillo",
      "audioPath": "audio/es/airport_083.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_084",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "word",
      "zh": "救生衣",
      "text": "chaleco salvavidas",
      "audioPath": "audio/es/airport_084.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "airport_085",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请问在哪里登机？",
      "text": "¿Dónde está la puerta de embarque?",
      "audioPath": "audio/es/airport_085.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "airport_086",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "请问在哪里取行李？",
      "text": "¿Dónde puedo recoger mi equipaje?",
      "audioPath": "audio/es/airport_086.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "airport_087",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "我想换乘。",
      "text": "Quiero hacer transbordo.",
      "audioPath": "audio/es/airport_087.mp3",
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
      "audioPath": "audio/es/hotel_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_001_example",
        "zh": "这家酒店有二十四小时前台吗？",
        "text": "¿Este hotel tiene recepción las veinticuatro horas?"
      }
    },
    {
      "id": "hotel_002",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "国营古堡酒店",
      "text": "parador",
      "audioPath": "audio/es/hotel_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_002_example",
        "zh": "我们想住一家有特色的国营古堡酒店。",
        "text": "Nos gustaría alojarnos en un parador."
      }
    },
    {
      "id": "hotel_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "民宿",
      "text": "alojamiento turístico",
      "audioPath": "audio/es/hotel_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_003_example",
        "zh": "这个旅游住宿登记过吗？",
        "text": "¿Está registrado este alojamiento turístico?"
      }
    },
    {
      "id": "hotel_004",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "前台",
      "text": "recepción",
      "audioPath": "audio/es/hotel_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_004_example",
        "zh": "请到前台领取房卡。",
        "text": "Recoja la tarjeta en recepción, por favor."
      }
    },
    {
      "id": "hotel_005",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "预订",
      "text": "reserva",
      "audioPath": "audio/es/hotel_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_005_example",
        "zh": "我用这个名字订了房。",
        "text": "Tengo una reserva a este nombre."
      }
    },
    {
      "id": "hotel_006",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "入住",
      "text": "entrada",
      "audioPath": "audio/es/hotel_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_006_example",
        "zh": "入住时间是下午三点。",
        "text": "La entrada es a partir de las tres de la tarde."
      }
    },
    {
      "id": "hotel_007",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "退房",
      "text": "salida",
      "audioPath": "audio/es/hotel_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_007_example",
        "zh": "退房时间是中午十二点。",
        "text": "La salida es antes de las doce."
      }
    },
    {
      "id": "hotel_008",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "房间",
      "text": "habitación",
      "audioPath": "audio/es/hotel_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_008_example",
        "zh": "房间还没准备好吗？",
        "text": "¿Todavía no está lista la habitación?"
      }
    },
    {
      "id": "hotel_009",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "单人房",
      "text": "habitación individual",
      "audioPath": "audio/es/hotel_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_009_example",
        "zh": "我预订的是单人间。",
        "text": "He reservado una habitación individual."
      }
    },
    {
      "id": "hotel_010",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "双人房",
      "text": "habitación con dos camas",
      "audioPath": "audio/es/hotel_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_010_example",
        "zh": "我们想要一间双床房。",
        "text": "Queremos una habitación con dos camas."
      }
    },
    {
      "id": "hotel_011",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "大床房",
      "text": "habitación doble",
      "audioPath": "audio/es/hotel_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_011_example",
        "zh": "双人间包含早餐吗？",
        "text": "¿La habitación doble incluye el desayuno?"
      }
    },
    {
      "id": "hotel_012",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "套房",
      "text": "suite",
      "audioPath": "audio/es/hotel_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_012_example",
        "zh": "这间套房可以住三个人吗？",
        "text": "¿Pueden alojarse tres personas en la suite?"
      }
    },
    {
      "id": "hotel_013",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "钥匙",
      "text": "llave",
      "audioPath": "audio/es/hotel_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_013_example",
        "zh": "我把房间钥匙落在里面了。",
        "text": "Me he dejado la llave dentro de la habitación."
      }
    },
    {
      "id": "hotel_014",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "房卡",
      "text": "tarjeta de la habitación",
      "audioPath": "audio/es/hotel_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_014_example",
        "zh": "我的房卡打不开门。",
        "text": "La tarjeta de la habitación no abre la puerta."
      }
    },
    {
      "id": "hotel_015",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "行李员",
      "text": "botones",
      "audioPath": "audio/es/hotel_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_015_example",
        "zh": "行李员可以帮您拿行李。",
        "text": "El botones puede ayudarle con el equipaje."
      }
    },
    {
      "id": "hotel_016",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "工作人员",
      "text": "personal",
      "audioPath": "audio/es/hotel_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_016_example",
        "zh": "工作人员非常友好。",
        "text": "El personal es muy amable."
      }
    },
    {
      "id": "hotel_017",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "客房服务",
      "text": "servicio de habitaciones",
      "audioPath": "audio/es/hotel_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_017_example",
        "zh": "客房服务到几点？",
        "text": "¿Hasta qué hora funciona el servicio de habitaciones?"
      }
    },
    {
      "id": "hotel_018",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "打扫",
      "text": "limpieza",
      "audioPath": "audio/es/hotel_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_018_example",
        "zh": "今天不用打扫房间。",
        "text": "Hoy no hace falta limpiar la habitación."
      }
    },
    {
      "id": "hotel_019",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "毛巾",
      "text": "toalla",
      "audioPath": "audio/es/hotel_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_019_example",
        "zh": "可以再给我一条毛巾吗？",
        "text": "¿Me puede traer otra toalla?"
      }
    },
    {
      "id": "hotel_020",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "床单",
      "text": "sábana",
      "audioPath": "audio/es/hotel_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_020_example",
        "zh": "床单上有一处污渍。",
        "text": "Hay una mancha en la sábana."
      }
    },
    {
      "id": "hotel_021",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "枕头",
      "text": "almohada",
      "audioPath": "audio/es/hotel_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_022",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "被子",
      "text": "edredón",
      "audioPath": "audio/es/hotel_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_023",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "毯子",
      "text": "manta",
      "audioPath": "audio/es/hotel_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_024",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "空调",
      "text": "aire acondicionado",
      "audioPath": "audio/es/hotel_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_025",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "暖气",
      "text": "calefacción",
      "audioPath": "audio/es/hotel_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_026",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "浴室",
      "text": "baño",
      "audioPath": "audio/es/hotel_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_027",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "淋浴",
      "text": "ducha",
      "audioPath": "audio/es/hotel_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_028",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "浴缸",
      "text": "bañera",
      "audioPath": "audio/es/hotel_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_029",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "热水",
      "text": "agua caliente",
      "audioPath": "audio/es/hotel_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_030",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "冷水",
      "text": "agua fría",
      "audioPath": "audio/es/hotel_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_031",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "卫生间",
      "text": "aseo",
      "audioPath": "audio/es/hotel_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_032",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "卫生纸",
      "text": "papel higiénico",
      "audioPath": "audio/es/hotel_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_033",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "洗发水",
      "text": "champú",
      "audioPath": "audio/es/hotel_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_034",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "沐浴露",
      "text": "gel de ducha",
      "audioPath": "audio/es/hotel_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_035",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "牙刷",
      "text": "cepillo de dientes",
      "audioPath": "audio/es/hotel_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_036",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "牙膏",
      "text": "pasta de dientes",
      "audioPath": "audio/es/hotel_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_037",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "吹风机",
      "text": "secador de pelo",
      "audioPath": "audio/es/hotel_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_038",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "插座",
      "text": "enchufe",
      "audioPath": "audio/es/hotel_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_039",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "转换插头",
      "text": "adaptador de enchufe",
      "audioPath": "audio/es/hotel_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_040",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "无线网络",
      "text": "wifi",
      "audioPath": "audio/es/hotel_040.mp3",
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
      "audioPath": "audio/es/hotel_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_042",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "电梯",
      "text": "ascensor",
      "audioPath": "audio/es/hotel_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_043",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "楼梯",
      "text": "escaleras",
      "audioPath": "audio/es/hotel_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_044",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "大堂",
      "text": "vestíbulo",
      "audioPath": "audio/es/hotel_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_045",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "餐厅",
      "text": "restaurante",
      "audioPath": "audio/es/hotel_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_046",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "早餐",
      "text": "desayuno",
      "audioPath": "audio/es/hotel_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_047",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "叫醒服务",
      "text": "servicio de despertador",
      "audioPath": "audio/es/hotel_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_047_example",
        "zh": "请明早七点叫醒我。",
        "text": "Quisiera el servicio de despertador a las siete."
      }
    },
    {
      "id": "hotel_048",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "洗衣服务",
      "text": "servicio de lavandería",
      "audioPath": "audio/es/hotel_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_048_example",
        "zh": "酒店有洗衣服务吗？",
        "text": "¿El hotel tiene servicio de lavandería?"
      }
    },
    {
      "id": "hotel_049",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "熨斗",
      "text": "plancha",
      "audioPath": "audio/es/hotel_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_050",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "保险箱",
      "text": "caja fuerte",
      "audioPath": "audio/es/hotel_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_051",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "退房时间",
      "text": "hora de salida",
      "audioPath": "audio/es/hotel_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_052",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "入住时间",
      "text": "hora de entrada",
      "audioPath": "audio/es/hotel_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_053",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "word",
      "zh": "空房",
      "text": "habitación disponible",
      "audioPath": "audio/es/hotel_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_053_example",
        "zh": "今晚还有空房吗？",
        "text": "¿Hay alguna habitación disponible para esta noche?"
      }
    },
    {
      "id": "hotel_054",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "满房",
      "text": "completo",
      "audioPath": "audio/es/hotel_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_054_example",
        "zh": "很抱歉，酒店已经满房了。",
        "text": "Lo siento, el hotel está completo."
      }
    },
    {
      "id": "hotel_055",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "押金",
      "text": "fianza",
      "audioPath": "audio/es/hotel_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_055_example",
        "zh": "入住时需要交押金吗？",
        "text": "¿Hay que dejar una fianza al entrar?"
      }
    },
    {
      "id": "hotel_056",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "收据",
      "text": "recibo",
      "audioPath": "audio/es/hotel_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_057",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "账单",
      "text": "cuenta",
      "audioPath": "audio/es/hotel_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_057_example",
        "zh": "可以把账单发到我的邮箱吗？",
        "text": "¿Puede enviarme la cuenta por correo electrónico?"
      }
    },
    {
      "id": "hotel_058",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "前台电话",
      "text": "teléfono de recepción",
      "audioPath": "audio/es/hotel_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_059",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "烟雾报警器",
      "text": "detector de humo",
      "audioPath": "audio/es/hotel_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_060",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "灭火器",
      "text": "extintor",
      "audioPath": "audio/es/hotel_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_061",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "婴儿床",
      "text": "cuna",
      "audioPath": "audio/es/hotel_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_062",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "加床",
      "text": "cama supletoria",
      "audioPath": "audio/es/hotel_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_063",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "床垫",
      "text": "colchón",
      "audioPath": "audio/es/hotel_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_064",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "冰箱",
      "text": "nevera",
      "audioPath": "audio/es/hotel_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_065",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "微波炉",
      "text": "microondas",
      "audioPath": "audio/es/hotel_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_066",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "水壶",
      "text": "hervidor",
      "audioPath": "audio/es/hotel_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_067",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "杯子",
      "text": "taza",
      "audioPath": "audio/es/hotel_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_068",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "拖鞋",
      "text": "zapatillas",
      "audioPath": "audio/es/hotel_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_069",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "衣架",
      "text": "percha",
      "audioPath": "audio/es/hotel_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_070",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "衣柜",
      "text": "armario",
      "audioPath": "audio/es/hotel_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_071",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "窗帘",
      "text": "cortina",
      "audioPath": "audio/es/hotel_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_072",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "阳台",
      "text": "balcón",
      "audioPath": "audio/es/hotel_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_073",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "景色",
      "text": "vistas",
      "audioPath": "audio/es/hotel_073.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_074",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "安静",
      "text": "tranquilo",
      "audioPath": "audio/es/hotel_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_074_example",
        "zh": "我想要一间安静的房间。",
        "text": "Quisiera una habitación tranquila."
      }
    },
    {
      "id": "hotel_075",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "word",
      "zh": "吵闹",
      "text": "ruidoso",
      "audioPath": "audio/es/hotel_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_075_example",
        "zh": "我的房间晚上很吵。",
        "text": "Mi habitación es muy ruidosa por la noche."
      }
    },
    {
      "id": "hotel_076",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "舒适",
      "text": "cómodo",
      "audioPath": "audio/es/hotel_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_076_example",
        "zh": "这张床很舒服。",
        "text": "Esta cama es muy cómoda."
      }
    },
    {
      "id": "hotel_077",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "房间号",
      "text": "número de habitación",
      "audioPath": "audio/es/hotel_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_078",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "word",
      "zh": "续住",
      "text": "prolongar la estancia",
      "audioPath": "audio/es/hotel_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_hotel_078_example",
        "zh": "我可以延住一晚吗？",
        "text": "¿Puedo prolongar la estancia una noche más?"
      }
    },
    {
      "id": "hotel_079",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我把钥匙弄丢了。",
      "text": "He perdido la llave.",
      "audioPath": "audio/es/hotel_079.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "hotel_080",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "可以寄存行李吗？",
      "text": "¿Puedo dejar aquí el equipaje?",
      "audioPath": "audio/es/hotel_080.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "hotel_081",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "请问几点退房？",
      "text": "¿A qué hora hay que dejar la habitación?",
      "audioPath": "audio/es/hotel_081.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "hotel_082",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "可以换个房间吗？",
      "text": "¿Me pueden cambiar de habitación?",
      "audioPath": "audio/es/hotel_082.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "food_001",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "早餐",
      "text": "desayuno",
      "audioPath": "audio/es/food_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_001_example",
        "zh": "早餐供应到几点？",
        "text": "¿Hasta qué hora sirven el desayuno?"
      }
    },
    {
      "id": "food_002",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "午餐",
      "text": "comida",
      "audioPath": "audio/es/food_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_002_example",
        "zh": "我们想在这里吃午饭。",
        "text": "Queremos comer aquí."
      }
    },
    {
      "id": "food_003",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "晚餐",
      "text": "cena",
      "audioPath": "audio/es/food_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_003_example",
        "zh": "今晚可以订一张桌子吗？",
        "text": "¿Podemos reservar una mesa para cenar esta noche?"
      }
    },
    {
      "id": "food_004",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "菜单",
      "text": "carta",
      "audioPath": "audio/es/food_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_004_example",
        "zh": "可以给我看一下菜单吗？",
        "text": "¿Me trae la carta, por favor?"
      }
    },
    {
      "id": "food_005",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "点菜",
      "text": "pedir",
      "audioPath": "audio/es/food_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_005_example",
        "zh": "我们可以点餐了吗？",
        "text": "¿Podemos pedir ya?"
      }
    },
    {
      "id": "food_006",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "水",
      "text": "agua",
      "audioPath": "audio/es/food_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_006_example",
        "zh": "请给我一瓶不带气的水。",
        "text": "Una botella de agua sin gas, por favor."
      }
    },
    {
      "id": "food_007",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "热水",
      "text": "agua caliente",
      "audioPath": "audio/es/food_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_007_example",
        "zh": "可以给我一杯热水吗？",
        "text": "¿Me puede traer un vaso de agua caliente?"
      }
    },
    {
      "id": "food_008",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "茶",
      "text": "té",
      "audioPath": "audio/es/food_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_008_example",
        "zh": "我想喝一杯红茶。",
        "text": "Quisiera un té negro."
      }
    },
    {
      "id": "food_009",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "咖啡",
      "text": "café",
      "audioPath": "audio/es/food_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_009_example",
        "zh": "请给我一杯加牛奶的咖啡。",
        "text": "Un café con leche, por favor."
      }
    },
    {
      "id": "food_010",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "牛奶",
      "text": "leche",
      "audioPath": "audio/es/food_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_010_example",
        "zh": "这道菜里有牛奶吗？",
        "text": "¿Este plato lleva leche?"
      }
    },
    {
      "id": "food_011",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "果汁",
      "text": "zumo",
      "audioPath": "audio/es/food_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_011_example",
        "zh": "请给我一杯鲜榨橙汁。",
        "text": "Un zumo de naranja natural, por favor."
      }
    },
    {
      "id": "food_012",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "啤酒",
      "text": "cerveza",
      "audioPath": "audio/es/food_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_012_example",
        "zh": "请给我一杯生啤。",
        "text": "Una cerveza de barril, por favor."
      }
    },
    {
      "id": "food_013",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "word",
      "zh": "红酒",
      "text": "vino tinto",
      "audioPath": "audio/es/food_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_013_example",
        "zh": "可以推荐一款西班牙红酒吗？",
        "text": "¿Me recomienda un vino tinto español?"
      }
    },
    {
      "id": "food_014",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "米饭",
      "text": "arroz",
      "audioPath": "audio/es/food_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_014_example",
        "zh": "米饭可以单点吗？",
        "text": "¿Se puede pedir arroz como acompañamiento?"
      }
    },
    {
      "id": "food_015",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "面包",
      "text": "pan",
      "audioPath": "audio/es/food_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_015_example",
        "zh": "可以再给我们一些面包吗？",
        "text": "¿Nos trae un poco más de pan?"
      }
    },
    {
      "id": "food_016",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "面条",
      "text": "fideos",
      "audioPath": "audio/es/food_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_016_example",
        "zh": "这道菜配的是面条吗？",
        "text": "¿Este plato viene con fideos?"
      }
    },
    {
      "id": "food_017",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "西班牙小吃",
      "text": "tapas",
      "audioPath": "audio/es/food_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_017_example",
        "zh": "我们想点几份西班牙小吃。",
        "text": "Queremos pedir unas tapas."
      }
    },
    {
      "id": "food_018",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "西班牙土豆饼",
      "text": "tortilla española",
      "audioPath": "audio/es/food_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_018_example",
        "zh": "西班牙土豆饼里有洋葱吗？",
        "text": "¿La tortilla española lleva cebolla?"
      }
    },
    {
      "id": "food_019",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "西班牙海鲜饭",
      "text": "paella",
      "audioPath": "audio/es/food_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_019_example",
        "zh": "请给我们一份海鲜饭。",
        "text": "Una paella, por favor."
      }
    },
    {
      "id": "food_020",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "西班牙冷汤",
      "text": "gazpacho",
      "audioPath": "audio/es/food_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_020_example",
        "zh": "这份西班牙冷汤是凉的吗？",
        "text": "¿El gazpacho se sirve frío?"
      }
    },
    {
      "id": "food_021",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "西班牙炸丸子",
      "text": "croquetas",
      "audioPath": "audio/es/food_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_022",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "伊比利亚火腿",
      "text": "jamón ibérico",
      "audioPath": "audio/es/food_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_023",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "吉事果",
      "text": "churros",
      "audioPath": "audio/es/food_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_024",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鸡蛋",
      "text": "huevo",
      "audioPath": "audio/es/food_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_025",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "肉",
      "text": "carne",
      "audioPath": "audio/es/food_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_026",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "牛肉",
      "text": "ternera",
      "audioPath": "audio/es/food_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_027",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "猪肉",
      "text": "cerdo",
      "audioPath": "audio/es/food_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_028",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鸡肉",
      "text": "pollo",
      "audioPath": "audio/es/food_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_029",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "鱼",
      "text": "pescado",
      "audioPath": "audio/es/food_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_030",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "虾",
      "text": "gambas",
      "audioPath": "audio/es/food_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_031",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "螃蟹",
      "text": "cangrejo",
      "audioPath": "audio/es/food_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_032",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "蔬菜",
      "text": "verduras",
      "audioPath": "audio/es/food_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_033",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "水果",
      "text": "fruta",
      "audioPath": "audio/es/food_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_034",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "苹果",
      "text": "manzana",
      "audioPath": "audio/es/food_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_035",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "香蕉",
      "text": "plátano",
      "audioPath": "audio/es/food_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_036",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "橙子",
      "text": "naranja",
      "audioPath": "audio/es/food_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_037",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "草莓",
      "text": "fresa",
      "audioPath": "audio/es/food_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_038",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "西瓜",
      "text": "sandía",
      "audioPath": "audio/es/food_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_039",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "沙拉",
      "text": "ensalada",
      "audioPath": "audio/es/food_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_040",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "汤",
      "text": "sopa",
      "audioPath": "audio/es/food_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_041",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "汉堡",
      "text": "hamburguesa",
      "audioPath": "audio/es/food_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_042",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "炸鸡",
      "text": "pollo frito",
      "audioPath": "audio/es/food_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_043",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "薯条",
      "text": "patatas fritas",
      "audioPath": "audio/es/food_043.mp3",
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
      "audioPath": "audio/es/food_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_045",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "三明治",
      "text": "bocadillo",
      "audioPath": "audio/es/food_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_046",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "冰淇淋",
      "text": "helado",
      "audioPath": "audio/es/food_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_047",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "蛋糕",
      "text": "tarta",
      "audioPath": "audio/es/food_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_048",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "甜点",
      "text": "postre",
      "audioPath": "audio/es/food_048.mp3",
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
      "audioPath": "audio/es/food_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_050",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "word",
      "zh": "糖果",
      "text": "caramelo",
      "audioPath": "audio/es/food_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_051",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "盐",
      "text": "sal",
      "audioPath": "audio/es/food_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_052",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "糖",
      "text": "azúcar",
      "audioPath": "audio/es/food_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_053",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "酱油",
      "text": "salsa de soja",
      "audioPath": "audio/es/food_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_054",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "醋",
      "text": "vinagre",
      "audioPath": "audio/es/food_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_055",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "胡椒",
      "text": "pimienta",
      "audioPath": "audio/es/food_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_056",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "辣椒",
      "text": "guindilla",
      "audioPath": "audio/es/food_056.mp3",
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
      "audioPath": "audio/es/food_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_058",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "筷子",
      "text": "palillos",
      "audioPath": "audio/es/food_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_059",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "勺子",
      "text": "cuchara",
      "audioPath": "audio/es/food_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_060",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "叉子",
      "text": "tenedor",
      "audioPath": "audio/es/food_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_061",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "刀",
      "text": "cuchillo",
      "audioPath": "audio/es/food_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_062",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "盘子",
      "text": "plato",
      "audioPath": "audio/es/food_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_063",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "碗",
      "text": "cuenco",
      "audioPath": "audio/es/food_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_064",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "玻璃杯",
      "text": "vaso",
      "audioPath": "audio/es/food_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_065",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "餐巾纸",
      "text": "servilleta",
      "audioPath": "audio/es/food_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_066",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "结账",
      "text": "la cuenta",
      "audioPath": "audio/es/food_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_066_example",
        "zh": "请结账。",
        "text": "La cuenta, por favor."
      }
    },
    {
      "id": "food_067",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "收银台",
      "text": "caja",
      "audioPath": "audio/es/food_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_068",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "服务员",
      "text": "camarero",
      "audioPath": "audio/es/food_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_069",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "空位",
      "text": "mesa libre",
      "audioPath": "audio/es/food_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_070",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "吸烟区",
      "text": "zona de fumadores",
      "audioPath": "audio/es/food_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_071",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "禁烟区",
      "text": "zona de no fumadores",
      "audioPath": "audio/es/food_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_072",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "word",
      "zh": "外带",
      "text": "para llevar",
      "audioPath": "audio/es/food_072.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_072_example",
        "zh": "这份请打包带走。",
        "text": "Esto es para llevar, por favor."
      }
    },
    {
      "id": "food_073",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "堂食",
      "text": "Para tomar aquí.",
      "audioPath": "audio/es/food_073.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_074",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "好吃",
      "text": "rico",
      "audioPath": "audio/es/food_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_074_example",
        "zh": "这道海鲜饭很好吃。",
        "text": "Esta paella está muy rica."
      }
    },
    {
      "id": "food_075",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "难吃",
      "text": "malo",
      "audioPath": "audio/es/food_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_075_example",
        "zh": "这道菜味道不太好。",
        "text": "Este plato no sabe muy bien."
      }
    },
    {
      "id": "food_076",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "甜",
      "text": "dulce",
      "audioPath": "audio/es/food_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_076_example",
        "zh": "这个甜点太甜了。",
        "text": "Este postre está demasiado dulce."
      }
    },
    {
      "id": "food_077",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "咸",
      "text": "salado",
      "audioPath": "audio/es/food_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_077_example",
        "zh": "汤有点咸。",
        "text": "La sopa está un poco salada."
      }
    },
    {
      "id": "food_078",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "辣",
      "text": "picante",
      "audioPath": "audio/es/food_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_078_example",
        "zh": "这个酱辣吗？",
        "text": "¿Esta salsa es picante?"
      }
    },
    {
      "id": "food_079",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "苦",
      "text": "amargo",
      "audioPath": "audio/es/food_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_079_example",
        "zh": "咖啡有点苦。",
        "text": "El café está un poco amargo."
      }
    },
    {
      "id": "food_080",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "酸",
      "text": "ácido",
      "audioPath": "audio/es/food_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_080_example",
        "zh": "这个柠檬很酸。",
        "text": "Este limón está muy ácido."
      }
    },
    {
      "id": "food_081",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "热",
      "text": "caliente",
      "audioPath": "audio/es/food_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_081_example",
        "zh": "小心，盘子很烫。",
        "text": "Cuidado, el plato está caliente."
      }
    },
    {
      "id": "food_082",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "冷",
      "text": "frío",
      "audioPath": "audio/es/food_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_082_example",
        "zh": "我想喝点冰水。",
        "text": "Quisiera agua fría."
      }
    },
    {
      "id": "food_083",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "新鲜",
      "text": "fresco",
      "audioPath": "audio/es/food_083.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_083_example",
        "zh": "今天的鱼新鲜吗？",
        "text": "¿El pescado es fresco de hoy?"
      }
    },
    {
      "id": "food_084",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "吃饱了",
      "text": "Ya no quiero más, gracias.",
      "audioPath": "audio/es/food_084.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_085",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "饿了",
      "text": "Tengo hambre.",
      "audioPath": "audio/es/food_085.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_086",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "渴了",
      "text": "Tengo sed.",
      "audioPath": "audio/es/food_086.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_087",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "过敏",
      "text": "alergia",
      "audioPath": "audio/es/food_087.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_087_example",
        "zh": "我对贝类过敏。",
        "text": "Tengo alergia al marisco."
      }
    },
    {
      "id": "food_088",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "素食者",
      "text": "vegetariano",
      "audioPath": "audio/es/food_088.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_088_example",
        "zh": "你们有素食菜品吗？",
        "text": "¿Tienen algún plato vegetariano?"
      }
    },
    {
      "id": "food_089",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请问有中文菜单吗？",
      "text": "¿Tienen la carta en chino?",
      "audioPath": "audio/es/food_089.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "food_090",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "请给我这个。",
      "text": "Póngame este, por favor.",
      "audioPath": "audio/es/food_090.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_091",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "不要辣。",
      "text": "Sin picante, por favor.",
      "audioPath": "audio/es/food_091.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_092",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "结账。",
      "text": "La cuenta, por favor.",
      "audioPath": "audio/es/food_092.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_093",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "我可以点餐吗？",
      "text": "¿Podemos pedir ya?",
      "audioPath": "audio/es/food_093.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "food_094",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "我对……过敏。",
      "text": "Tengo alergia a…",
      "audioPath": "audio/es/food_094.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_095",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "再来一杯水。",
      "text": "Otro vaso de agua, por favor.",
      "audioPath": "audio/es/food_095.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "food_096",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "这个好吃吗？",
      "text": "¿Está bueno?",
      "audioPath": "audio/es/food_096.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "shopping_001",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "商店",
      "text": "tienda",
      "audioPath": "audio/es/shopping_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_001_example",
        "zh": "这家店几点关门？",
        "text": "¿A qué hora cierra esta tienda?"
      }
    },
    {
      "id": "shopping_002",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "商场",
      "text": "grandes almacenes",
      "audioPath": "audio/es/shopping_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_002_example",
        "zh": "附近有百货商店吗？",
        "text": "¿Hay unos grandes almacenes cerca?"
      }
    },
    {
      "id": "shopping_003",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "超市",
      "text": "supermercado",
      "audioPath": "audio/es/shopping_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_003_example",
        "zh": "超市在地下层。",
        "text": "El supermercado está en la planta baja."
      }
    },
    {
      "id": "shopping_004",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "便利店",
      "text": "tienda de conveniencia",
      "audioPath": "audio/es/shopping_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_004_example",
        "zh": "这附近有便利店吗？",
        "text": "¿Hay alguna tienda de conveniencia por aquí?"
      }
    },
    {
      "id": "shopping_005",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "市场",
      "text": "mercado",
      "audioPath": "audio/es/shopping_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_005_example",
        "zh": "周日市场开门吗？",
        "text": "¿Abre el mercado los domingos?"
      }
    },
    {
      "id": "shopping_006",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "价格",
      "text": "precio",
      "audioPath": "audio/es/shopping_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_006_example",
        "zh": "这个价格含税吗？",
        "text": "¿Este precio incluye el IVA?"
      }
    },
    {
      "id": "shopping_007",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "多少钱",
      "text": "cuánto cuesta",
      "audioPath": "audio/es/shopping_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_007_example",
        "zh": "请问这个多少钱？",
        "text": "¿Cuánto cuesta esto?"
      }
    },
    {
      "id": "shopping_008",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "贵",
      "text": "caro",
      "audioPath": "audio/es/shopping_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_008_example",
        "zh": "对我来说有点贵。",
        "text": "Me parece un poco caro."
      }
    },
    {
      "id": "shopping_009",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "便宜",
      "text": "barato",
      "audioPath": "audio/es/shopping_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_009_example",
        "zh": "有没有更便宜的？",
        "text": "¿Tiene alguno más barato?"
      }
    },
    {
      "id": "shopping_010",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "打折",
      "text": "descuento",
      "audioPath": "audio/es/shopping_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_010_example",
        "zh": "学生可以享受折扣吗？",
        "text": "¿Hay descuento para estudiantes?"
      }
    },
    {
      "id": "shopping_011",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "word",
      "zh": "促销",
      "text": "oferta",
      "audioPath": "audio/es/shopping_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_011_example",
        "zh": "这件商品在促销吗？",
        "text": "¿Este artículo está de oferta?"
      }
    },
    {
      "id": "shopping_012",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "小票",
      "text": "tique",
      "audioPath": "audio/es/shopping_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_012_example",
        "zh": "可以给我购物小票吗？",
        "text": "¿Me da el tique, por favor?"
      }
    },
    {
      "id": "shopping_013",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "现金",
      "text": "efectivo",
      "audioPath": "audio/es/shopping_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_013_example",
        "zh": "我可以用现金付款。",
        "text": "Puedo pagar en efectivo."
      }
    },
    {
      "id": "shopping_014",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "信用卡",
      "text": "tarjeta de crédito",
      "audioPath": "audio/es/shopping_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_014_example",
        "zh": "你们接受信用卡吗？",
        "text": "¿Aceptan tarjetas de crédito?"
      }
    },
    {
      "id": "shopping_015",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "银行卡",
      "text": "tarjeta bancaria",
      "audioPath": "audio/es/shopping_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_015_example",
        "zh": "我的银行卡被拒绝了。",
        "text": "Han rechazado mi tarjeta bancaria."
      }
    },
    {
      "id": "shopping_016",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "零钱",
      "text": "cambio",
      "audioPath": "audio/es/shopping_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_016_example",
        "zh": "您有零钱吗？",
        "text": "¿Tiene cambio?"
      }
    },
    {
      "id": "shopping_017",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "支付",
      "text": "pago",
      "audioPath": "audio/es/shopping_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_017_example",
        "zh": "在哪里付款？",
        "text": "¿Dónde se paga?"
      }
    },
    {
      "id": "shopping_018",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "手机支付",
      "text": "pago con el móvil",
      "audioPath": "audio/es/shopping_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_018_example",
        "zh": "可以用手机支付吗？",
        "text": "¿Puedo pagar con el móvil?"
      }
    },
    {
      "id": "shopping_019",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "二维码",
      "text": "código QR",
      "audioPath": "audio/es/shopping_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_019_example",
        "zh": "请扫描这个二维码。",
        "text": "Escanee este código QR, por favor."
      }
    },
    {
      "id": "shopping_020",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "word",
      "zh": "试衣间",
      "text": "probador",
      "audioPath": "audio/es/shopping_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_020_example",
        "zh": "试衣间在哪里？",
        "text": "¿Dónde está el probador?"
      }
    },
    {
      "id": "shopping_021",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "word",
      "zh": "试穿",
      "text": "probarse",
      "audioPath": "audio/es/shopping_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_021_example",
        "zh": "我可以试穿这件吗？",
        "text": "¿Me puedo probar esto?"
      }
    },
    {
      "id": "shopping_022",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "尺寸",
      "text": "talla",
      "audioPath": "audio/es/shopping_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_023",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "大号",
      "text": "talla grande",
      "audioPath": "audio/es/shopping_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_024",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "中号",
      "text": "talla mediana",
      "audioPath": "audio/es/shopping_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_025",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "word",
      "zh": "小号",
      "text": "talla pequeña",
      "audioPath": "audio/es/shopping_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_026",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "衣服",
      "text": "ropa",
      "audioPath": "audio/es/shopping_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_027",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "衬衫",
      "text": "camisa",
      "audioPath": "audio/es/shopping_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_028",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "T恤",
      "text": "camiseta",
      "audioPath": "audio/es/shopping_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_029",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "裤子",
      "text": "pantalones",
      "audioPath": "audio/es/shopping_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_030",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "牛仔裤",
      "text": "vaqueros",
      "audioPath": "audio/es/shopping_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_031",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "裙子",
      "text": "falda",
      "audioPath": "audio/es/shopping_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_032",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "连衣裙",
      "text": "vestido",
      "audioPath": "audio/es/shopping_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_033",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "外套",
      "text": "abrigo",
      "audioPath": "audio/es/shopping_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_034",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "毛衣",
      "text": "jersey",
      "audioPath": "audio/es/shopping_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_035",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "内衣",
      "text": "ropa interior",
      "audioPath": "audio/es/shopping_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_036",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "袜子",
      "text": "calcetines",
      "audioPath": "audio/es/shopping_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_037",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "鞋子",
      "text": "zapatos",
      "audioPath": "audio/es/shopping_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_038",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "运动鞋",
      "text": "zapatillas deportivas",
      "audioPath": "audio/es/shopping_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_039",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "帽子",
      "text": "sombrero",
      "audioPath": "audio/es/shopping_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_040",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "围巾",
      "text": "bufanda",
      "audioPath": "audio/es/shopping_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_041",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手套",
      "text": "guantes",
      "audioPath": "audio/es/shopping_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_042",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "包",
      "text": "bolso",
      "audioPath": "audio/es/shopping_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_043",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "钱包",
      "text": "cartera",
      "audioPath": "audio/es/shopping_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_044",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "眼镜",
      "text": "gafas",
      "audioPath": "audio/es/shopping_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_045",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "太阳镜",
      "text": "gafas de sol",
      "audioPath": "audio/es/shopping_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_046",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手表",
      "text": "reloj",
      "audioPath": "audio/es/shopping_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_047",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "首饰",
      "text": "joyas",
      "audioPath": "audio/es/shopping_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_048",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "化妆品",
      "text": "cosméticos",
      "audioPath": "audio/es/shopping_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_049",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "护肤品",
      "text": "productos para la piel",
      "audioPath": "audio/es/shopping_049.mp3",
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
      "audioPath": "audio/es/shopping_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_051",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "口红",
      "text": "pintalabios",
      "audioPath": "audio/es/shopping_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_052",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "洗面奶",
      "text": "limpiador facial",
      "audioPath": "audio/es/shopping_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_053",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "食品",
      "text": "alimentos",
      "audioPath": "audio/es/shopping_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_054",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "饮料",
      "text": "bebidas",
      "audioPath": "audio/es/shopping_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_055",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "零食",
      "text": "aperitivos",
      "audioPath": "audio/es/shopping_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_056",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "纪念品",
      "text": "recuerdo",
      "audioPath": "audio/es/shopping_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_057",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "特产",
      "text": "producto local",
      "audioPath": "audio/es/shopping_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_shopping_057_example",
        "zh": "我想买一些当地特产。",
        "text": "Quisiera comprar algún producto local."
      }
    },
    {
      "id": "shopping_058",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "玩具",
      "text": "juguete",
      "audioPath": "audio/es/shopping_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_059",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "电子产品",
      "text": "productos electrónicos",
      "audioPath": "audio/es/shopping_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_060",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "手机",
      "text": "móvil",
      "audioPath": "audio/es/shopping_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_061",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "充电器",
      "text": "cargador",
      "audioPath": "audio/es/shopping_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_062",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "耳机",
      "text": "auriculares",
      "audioPath": "audio/es/shopping_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_063",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "相机",
      "text": "cámara",
      "audioPath": "audio/es/shopping_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_064",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "电池",
      "text": "pila",
      "audioPath": "audio/es/shopping_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_065",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "购物袋",
      "text": "bolsa de la compra",
      "audioPath": "audio/es/shopping_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_066",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "环保袋",
      "text": "bolsa reutilizable",
      "audioPath": "audio/es/shopping_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_067",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "可以退税吗？",
      "text": "¿Puedo solicitar la devolución del IVA?",
      "audioPath": "audio/es/shopping_067.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "shopping_068",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "可以便宜一点吗？",
      "text": "¿Me puede hacer algún descuento?",
      "audioPath": "audio/es/shopping_068.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "shopping_069",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我只是看看。",
      "text": "Solo estoy mirando, gracias.",
      "audioPath": "audio/es/shopping_069.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_070",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "我要这个。",
      "text": "Me llevo este.",
      "audioPath": "audio/es/shopping_070.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "shopping_071",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "可以刷卡吗？",
      "text": "¿Puedo pagar con tarjeta?",
      "audioPath": "audio/es/shopping_071.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "shopping_072",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有没有大一点的？",
      "text": "¿Lo tiene en una talla más grande?",
      "audioPath": "audio/es/shopping_072.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "shopping_073",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "可以试穿吗？",
      "text": "¿Me lo puedo probar?",
      "audioPath": "audio/es/shopping_073.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "directions_001",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "哪里",
      "text": "dónde",
      "audioPath": "audio/es/directions_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_001_example",
        "zh": "请问地铁站在哪里？",
        "text": "¿Dónde está la estación de metro?"
      }
    },
    {
      "id": "directions_002",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "这里",
      "text": "aquí",
      "audioPath": "audio/es/directions_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_002_example",
        "zh": "我们现在在这里。",
        "text": "Ahora estamos aquí."
      }
    },
    {
      "id": "directions_003",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "那里",
      "text": "allí",
      "audioPath": "audio/es/directions_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_003_example",
        "zh": "售票处在那边。",
        "text": "La taquilla está allí."
      }
    },
    {
      "id": "directions_004",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "左边",
      "text": "izquierda",
      "audioPath": "audio/es/directions_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_004_example",
        "zh": "在下一个路口左转。",
        "text": "Gire a la izquierda en el próximo cruce."
      }
    },
    {
      "id": "directions_005",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "右边",
      "text": "derecha",
      "audioPath": "audio/es/directions_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_005_example",
        "zh": "银行在右边。",
        "text": "El banco está a la derecha."
      }
    },
    {
      "id": "directions_006",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "前面",
      "text": "delante",
      "audioPath": "audio/es/directions_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_006_example",
        "zh": "博物馆就在前面。",
        "text": "El museo está delante."
      }
    },
    {
      "id": "directions_007",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "后面",
      "text": "detrás",
      "audioPath": "audio/es/directions_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_007_example",
        "zh": "停车场在酒店后面。",
        "text": "El aparcamiento está detrás del hotel."
      }
    },
    {
      "id": "directions_008",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "旁边",
      "text": "al lado de",
      "audioPath": "audio/es/directions_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_008_example",
        "zh": "药店就在邮局旁边。",
        "text": "La farmacia está al lado de Correos."
      }
    },
    {
      "id": "directions_009",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "对面",
      "text": "enfrente de",
      "audioPath": "audio/es/directions_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_009_example",
        "zh": "餐厅在车站对面。",
        "text": "El restaurante está enfrente de la estación."
      }
    },
    {
      "id": "directions_010",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "附近",
      "text": "cerca",
      "audioPath": "audio/es/directions_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_010_example",
        "zh": "附近有公共洗手间吗？",
        "text": "¿Hay un aseo público cerca?"
      }
    },
    {
      "id": "directions_011",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "word",
      "zh": "远",
      "text": "lejos",
      "audioPath": "audio/es/directions_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_011_example",
        "zh": "机场离市中心很远。",
        "text": "El aeropuerto está lejos del centro."
      }
    },
    {
      "id": "directions_012",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "word",
      "zh": "近",
      "text": "cerca",
      "audioPath": "audio/es/directions_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_012_example",
        "zh": "最近的药店在哪里？",
        "text": "¿Dónde está la farmacia más cercana?"
      }
    },
    {
      "id": "directions_013",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "直走",
      "text": "todo recto",
      "audioPath": "audio/es/directions_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_013_example",
        "zh": "一直往前走两百米。",
        "text": "Siga todo recto unos doscientos metros."
      }
    },
    {
      "id": "directions_014",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "word",
      "zh": "转弯",
      "text": "girar",
      "audioPath": "audio/es/directions_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_014_example",
        "zh": "到了广场后向右转。",
        "text": "Al llegar a la plaza, gire a la derecha."
      }
    },
    {
      "id": "directions_015",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "十字路口",
      "text": "cruce",
      "audioPath": "audio/es/directions_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_015_example",
        "zh": "在第二个十字路口左转。",
        "text": "Gire a la izquierda en el segundo cruce."
      }
    },
    {
      "id": "directions_016",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "桥",
      "text": "puente",
      "audioPath": "audio/es/directions_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_016_example",
        "zh": "过桥以后就是车站。",
        "text": "La estación está justo después del puente."
      }
    },
    {
      "id": "directions_017",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "路",
      "text": "carretera",
      "audioPath": "audio/es/directions_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_017_example",
        "zh": "这条公路通往机场。",
        "text": "Esta carretera lleva al aeropuerto."
      }
    },
    {
      "id": "directions_018",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "街道",
      "text": "calle",
      "audioPath": "audio/es/directions_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_018_example",
        "zh": "这条街叫什么名字？",
        "text": "¿Cómo se llama esta calle?"
      }
    },
    {
      "id": "directions_019",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "建筑",
      "text": "edificio",
      "audioPath": "audio/es/directions_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_019_example",
        "zh": "那栋白色建筑就是市政厅。",
        "text": "Ese edificio blanco es el ayuntamiento."
      }
    },
    {
      "id": "directions_020",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "派出所",
      "text": "comisaría",
      "audioPath": "audio/es/directions_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_directions_020_example",
        "zh": "最近的警察局在哪里？",
        "text": "¿Dónde está la comisaría más cercana?"
      }
    },
    {
      "id": "directions_021",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "医院",
      "text": "hospital",
      "audioPath": "audio/es/directions_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_022",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "药店",
      "text": "farmacia",
      "audioPath": "audio/es/directions_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_023",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "银行",
      "text": "banco",
      "audioPath": "audio/es/directions_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_024",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "邮局",
      "text": "oficina de correos",
      "audioPath": "audio/es/directions_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_025",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "厕所",
      "text": "aseo",
      "audioPath": "audio/es/directions_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_026",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "公交站",
      "text": "parada de autobús",
      "audioPath": "audio/es/directions_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_027",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "地铁站",
      "text": "estación de metro",
      "audioPath": "audio/es/directions_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_028",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "景点",
      "text": "lugar turístico",
      "audioPath": "audio/es/directions_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_029",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "博物馆",
      "text": "museo",
      "audioPath": "audio/es/directions_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_030",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "word",
      "zh": "公园",
      "text": "parque",
      "audioPath": "audio/es/directions_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "directions_031",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请问怎么走？",
      "text": "¿Cómo se llega?",
      "audioPath": "audio/es/directions_031.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "directions_032",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "……在哪里？",
      "text": "¿Dónde está…?",
      "audioPath": "audio/es/directions_032.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "directions_033",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "请带我去……",
      "text": "Lléveme a…, por favor.",
      "audioPath": "audio/es/directions_033.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_034",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我要去……",
      "text": "Quiero ir a…",
      "audioPath": "audio/es/directions_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_035",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "走路要几分钟？",
      "text": "¿Cuántos minutos se tarda andando?",
      "audioPath": "audio/es/directions_035.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "directions_036",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "坐地铁能到吗？",
      "text": "¿Se puede llegar en metro?",
      "audioPath": "audio/es/directions_036.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "directions_037",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "我迷路了。",
      "text": "Me he perdido.",
      "audioPath": "audio/es/directions_037.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "directions_038",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请问现在在哪里？",
      "text": "¿Dónde estoy ahora?",
      "audioPath": "audio/es/directions_038.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "directions_039",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "请在地图上指给我。",
      "text": "¿Me lo puede señalar en el mapa?",
      "audioPath": "audio/es/directions_039.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "directions_040",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "能再说一遍吗？",
      "text": "¿Puede repetirlo?",
      "audioPath": "audio/es/directions_040.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "directions_041",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "怎么去车站？",
      "text": "¿Cómo se llega a la estación?",
      "audioPath": "audio/es/directions_041.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "directions_042",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "这是哪条路？",
      "text": "¿Qué calle es esta?",
      "audioPath": "audio/es/directions_042.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "directions_043",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "洗手间在哪里？",
      "text": "¿Dónde está el aseo?",
      "audioPath": "audio/es/directions_043.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "numbers_001",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "零",
      "text": "cero",
      "audioPath": "audio/es/numbers_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_001_example",
        "zh": "费用是零欧元。",
        "text": "El coste es de cero euros."
      }
    },
    {
      "id": "numbers_002",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "一",
      "text": "uno",
      "audioPath": "audio/es/numbers_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_002_example",
        "zh": "我需要一张票。",
        "text": "Necesito un billete."
      }
    },
    {
      "id": "numbers_003",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "二",
      "text": "dos",
      "audioPath": "audio/es/numbers_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_003_example",
        "zh": "我们有两件行李。",
        "text": "Tenemos dos maletas."
      }
    },
    {
      "id": "numbers_004",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "三",
      "text": "tres",
      "audioPath": "audio/es/numbers_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_004_example",
        "zh": "请给我们一张三人桌。",
        "text": "Una mesa para tres, por favor."
      }
    },
    {
      "id": "numbers_005",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "四",
      "text": "cuatro",
      "audioPath": "audio/es/numbers_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_005_example",
        "zh": "我们住四晚。",
        "text": "Nos quedamos cuatro noches."
      }
    },
    {
      "id": "numbers_006",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "五",
      "text": "cinco",
      "audioPath": "audio/es/numbers_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_006_example",
        "zh": "五分钟后见。",
        "text": "Nos vemos en cinco minutos."
      }
    },
    {
      "id": "numbers_007",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "六",
      "text": "seis",
      "audioPath": "audio/es/numbers_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_007_example",
        "zh": "六点可以吗？",
        "text": "¿A las seis le viene bien?"
      }
    },
    {
      "id": "numbers_008",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "七",
      "text": "siete",
      "audioPath": "audio/es/numbers_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_008_example",
        "zh": "请早上七点叫醒我。",
        "text": "Despiérteme a las siete, por favor."
      }
    },
    {
      "id": "numbers_009",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "八",
      "text": "ocho",
      "audioPath": "audio/es/numbers_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_009_example",
        "zh": "商店八点开门。",
        "text": "La tienda abre a las ocho."
      }
    },
    {
      "id": "numbers_010",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "九",
      "text": "nueve",
      "audioPath": "audio/es/numbers_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_010_example",
        "zh": "火车九点出发。",
        "text": "El tren sale a las nueve."
      }
    },
    {
      "id": "numbers_011",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "十",
      "text": "diez",
      "audioPath": "audio/es/numbers_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_011_example",
        "zh": "步行需要十分钟。",
        "text": "Se tarda diez minutos andando."
      }
    },
    {
      "id": "numbers_012",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "百",
      "text": "cien",
      "audioPath": "audio/es/numbers_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_012_example",
        "zh": "这件东西一百欧元。",
        "text": "Esto cuesta cien euros."
      }
    },
    {
      "id": "numbers_013",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "千",
      "text": "mil",
      "audioPath": "audio/es/numbers_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_013_example",
        "zh": "这个城市有一千多年的历史。",
        "text": "Esta ciudad tiene más de mil años de historia."
      }
    },
    {
      "id": "numbers_014",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "万",
      "text": "diez mil",
      "audioPath": "audio/es/numbers_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_014_example",
        "zh": "这个景点每年接待一万多名游客。",
        "text": "Esta atracción recibe a más de diez mil visitantes al año."
      }
    },
    {
      "id": "numbers_015",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "欧元",
      "text": "euro",
      "audioPath": "audio/es/numbers_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_015_example",
        "zh": "这张纸币是十欧元。",
        "text": "Este billete es de diez euros."
      }
    },
    {
      "id": "numbers_016",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "美元",
      "text": "dólar",
      "audioPath": "audio/es/numbers_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_016_example",
        "zh": "我想把美元换成欧元。",
        "text": "Quiero cambiar dólares por euros."
      }
    },
    {
      "id": "numbers_017",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "word",
      "zh": "人民币",
      "text": "yuan",
      "audioPath": "audio/es/numbers_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_017_example",
        "zh": "可以把人民币换成欧元吗？",
        "text": "¿Puedo cambiar yuanes por euros?"
      }
    },
    {
      "id": "numbers_018",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "今天",
      "text": "hoy",
      "audioPath": "audio/es/numbers_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_018_example",
        "zh": "今天博物馆开门吗？",
        "text": "¿Está abierto hoy el museo?"
      }
    },
    {
      "id": "numbers_019",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "明天",
      "text": "mañana",
      "audioPath": "audio/es/numbers_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_019_example",
        "zh": "我们明天去塞维利亚。",
        "text": "Mañana vamos a Sevilla."
      }
    },
    {
      "id": "numbers_020",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "昨天",
      "text": "ayer",
      "audioPath": "audio/es/numbers_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_020_example",
        "zh": "我昨天到的马德里。",
        "text": "Llegué ayer a Madrid."
      }
    },
    {
      "id": "numbers_021",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "后天",
      "text": "pasado mañana",
      "audioPath": "audio/es/numbers_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_022",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "前天",
      "text": "anteayer",
      "audioPath": "audio/es/numbers_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_023",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "早上",
      "text": "mañana",
      "audioPath": "audio/es/numbers_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_024",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "中午",
      "text": "mediodía",
      "audioPath": "audio/es/numbers_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_025",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "下午",
      "text": "tarde",
      "audioPath": "audio/es/numbers_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_026",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "晚上",
      "text": "noche",
      "audioPath": "audio/es/numbers_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_027",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "现在",
      "text": "ahora",
      "audioPath": "audio/es/numbers_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_028",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "时间",
      "text": "hora",
      "audioPath": "audio/es/numbers_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_029",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一小时",
      "text": "una hora",
      "audioPath": "audio/es/numbers_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_030",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一分钟",
      "text": "un minuto",
      "audioPath": "audio/es/numbers_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_031",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "秒",
      "text": "segundo",
      "audioPath": "audio/es/numbers_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_032",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "几点",
      "text": "qué hora",
      "audioPath": "audio/es/numbers_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_032_example",
        "zh": "请问现在几点？",
        "text": "¿Qué hora es?"
      }
    },
    {
      "id": "numbers_033",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期",
      "text": "día de la semana",
      "audioPath": "audio/es/numbers_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_034",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期一",
      "text": "lunes",
      "audioPath": "audio/es/numbers_034.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_035",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期二",
      "text": "martes",
      "audioPath": "audio/es/numbers_035.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_036",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期三",
      "text": "miércoles",
      "audioPath": "audio/es/numbers_036.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_037",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期四",
      "text": "jueves",
      "audioPath": "audio/es/numbers_037.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_038",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期五",
      "text": "viernes",
      "audioPath": "audio/es/numbers_038.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_039",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期六",
      "text": "sábado",
      "audioPath": "audio/es/numbers_039.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_040",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "星期日",
      "text": "domingo",
      "audioPath": "audio/es/numbers_040.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_041",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "周末",
      "text": "fin de semana",
      "audioPath": "audio/es/numbers_041.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_042",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "工作日",
      "text": "día laborable",
      "audioPath": "audio/es/numbers_042.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_043",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "日期",
      "text": "fecha",
      "audioPath": "audio/es/numbers_043.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_044",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一月",
      "text": "enero",
      "audioPath": "audio/es/numbers_044.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_045",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "二月",
      "text": "febrero",
      "audioPath": "audio/es/numbers_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_046",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "三月",
      "text": "marzo",
      "audioPath": "audio/es/numbers_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_047",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "四月",
      "text": "abril",
      "audioPath": "audio/es/numbers_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_048",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "五月",
      "text": "mayo",
      "audioPath": "audio/es/numbers_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_049",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "六月",
      "text": "junio",
      "audioPath": "audio/es/numbers_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_050",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "七月",
      "text": "julio",
      "audioPath": "audio/es/numbers_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_051",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "八月",
      "text": "agosto",
      "audioPath": "audio/es/numbers_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_052",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "九月",
      "text": "septiembre",
      "audioPath": "audio/es/numbers_052.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_053",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十月",
      "text": "octubre",
      "audioPath": "audio/es/numbers_053.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_054",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十一月",
      "text": "noviembre",
      "audioPath": "audio/es/numbers_054.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_055",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十二月",
      "text": "diciembre",
      "audioPath": "audio/es/numbers_055.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_056",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "一日",
      "text": "día uno",
      "audioPath": "audio/es/numbers_056.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_057",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "二日",
      "text": "día dos",
      "audioPath": "audio/es/numbers_057.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_058",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "三日",
      "text": "día tres",
      "audioPath": "audio/es/numbers_058.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_059",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "四日",
      "text": "día cuatro",
      "audioPath": "audio/es/numbers_059.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_060",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "五日",
      "text": "día cinco",
      "audioPath": "audio/es/numbers_060.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_061",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "六日",
      "text": "día seis",
      "audioPath": "audio/es/numbers_061.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_062",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "七日",
      "text": "día siete",
      "audioPath": "audio/es/numbers_062.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_063",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "八日",
      "text": "día ocho",
      "audioPath": "audio/es/numbers_063.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_064",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "九日",
      "text": "día nueve",
      "audioPath": "audio/es/numbers_064.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_065",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "十日",
      "text": "día diez",
      "audioPath": "audio/es/numbers_065.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_066",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "今年",
      "text": "este año",
      "audioPath": "audio/es/numbers_066.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_067",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "去年",
      "text": "el año pasado",
      "audioPath": "audio/es/numbers_067.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_068",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "明年",
      "text": "el año que viene",
      "audioPath": "audio/es/numbers_068.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_069",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "这个月",
      "text": "este mes",
      "audioPath": "audio/es/numbers_069.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_070",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "上个月",
      "text": "el mes pasado",
      "audioPath": "audio/es/numbers_070.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_071",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "下个月",
      "text": "el mes que viene",
      "audioPath": "audio/es/numbers_071.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_072",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "几点开门？",
      "text": "¿A qué hora abren?",
      "audioPath": "audio/es/numbers_072.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "numbers_073",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "现在几点？",
      "text": "¿Qué hora es?",
      "audioPath": "audio/es/numbers_073.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "numbers_074",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "今天星期几？",
      "text": "¿Qué día de la semana es hoy?",
      "audioPath": "audio/es/numbers_074.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "numbers_075",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "今天是几号？",
      "text": "¿Qué fecha es hoy?",
      "audioPath": "audio/es/numbers_075.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "numbers_076",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "营业时间",
      "text": "horario de apertura",
      "audioPath": "audio/es/numbers_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_077",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "开门",
      "text": "abrir",
      "audioPath": "audio/es/numbers_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_077_example",
        "zh": "博物馆几点开门？",
        "text": "¿A qué hora abre el museo?"
      }
    },
    {
      "id": "numbers_078",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "关门",
      "text": "cerrar",
      "audioPath": "audio/es/numbers_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_078_example",
        "zh": "商店九点关门。",
        "text": "La tienda cierra a las nueve."
      }
    },
    {
      "id": "numbers_079",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "每天",
      "text": "todos los días",
      "audioPath": "audio/es/numbers_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_080",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "有时",
      "text": "a veces",
      "audioPath": "audio/es/numbers_080.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_081",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "经常",
      "text": "a menudo",
      "audioPath": "audio/es/numbers_081.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "numbers_082",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "word",
      "zh": "马上",
      "text": "enseguida",
      "audioPath": "audio/es/numbers_082.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_numbers_082_example",
        "zh": "救护车马上就到。",
        "text": "La ambulancia llegará enseguida."
      }
    },
    {
      "id": "numbers_083",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "稍等",
      "text": "Un momento, por favor.",
      "audioPath": "audio/es/numbers_083.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_001",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "救命",
      "text": "socorro",
      "audioPath": "audio/es/emergency_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_001_example",
        "zh": "救命！有人受伤了！",
        "text": "¡Socorro! ¡Hay una persona herida!"
      }
    },
    {
      "id": "emergency_002",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "紧急",
      "text": "emergencia",
      "audioPath": "audio/es/emergency_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_002_example",
        "zh": "这是紧急情况。",
        "text": "Es una emergencia."
      }
    },
    {
      "id": "emergency_003",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "word",
      "zh": "报警",
      "text": "llamar a la policía",
      "audioPath": "audio/es/emergency_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_003_example",
        "zh": "请马上报警。",
        "text": "Llame a la policía ahora mismo, por favor."
      }
    },
    {
      "id": "emergency_004",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "叫救护车",
      "text": "llamar a una ambulancia",
      "audioPath": "audio/es/emergency_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_004_example",
        "zh": "我们需要叫救护车。",
        "text": "Necesitamos llamar a una ambulancia."
      }
    },
    {
      "id": "emergency_005",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "医生",
      "text": "médico",
      "audioPath": "audio/es/emergency_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_005_example",
        "zh": "我需要看医生。",
        "text": "Necesito ver a un médico."
      }
    },
    {
      "id": "emergency_006",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "护士",
      "text": "enfermero",
      "audioPath": "audio/es/emergency_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_006_example",
        "zh": "可以请护士过来吗？",
        "text": "¿Puede venir un enfermero, por favor?"
      }
    },
    {
      "id": "emergency_007",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药",
      "text": "medicamento",
      "audioPath": "audio/es/emergency_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_007_example",
        "zh": "这种药一天吃几次？",
        "text": "¿Cuántas veces al día tengo que tomar este medicamento?"
      }
    },
    {
      "id": "emergency_008",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "处方",
      "text": "receta",
      "audioPath": "audio/es/emergency_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_008_example",
        "zh": "买这个需要处方吗？",
        "text": "¿Hace falta receta para comprarlo?"
      }
    },
    {
      "id": "emergency_009",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "发烧",
      "text": "fiebre",
      "audioPath": "audio/es/emergency_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_009_example",
        "zh": "我发烧到三十九度。",
        "text": "Tengo treinta y nueve grados de fiebre."
      }
    },
    {
      "id": "emergency_010",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "感冒",
      "text": "resfriado",
      "audioPath": "audio/es/emergency_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_010_example",
        "zh": "我好像感冒了。",
        "text": "Creo que estoy resfriado."
      }
    },
    {
      "id": "emergency_011",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "咳嗽",
      "text": "tos",
      "audioPath": "audio/es/emergency_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_011_example",
        "zh": "我咳嗽了三天。",
        "text": "Tengo tos desde hace tres días."
      }
    },
    {
      "id": "emergency_012",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "头疼",
      "text": "dolor de cabeza",
      "audioPath": "audio/es/emergency_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_012_example",
        "zh": "我头疼得很厉害。",
        "text": "Me duele mucho la cabeza."
      }
    },
    {
      "id": "emergency_013",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "肚子疼",
      "text": "dolor de estómago",
      "audioPath": "audio/es/emergency_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_013_example",
        "zh": "我从昨晚开始胃痛。",
        "text": "Me duele el estómago desde anoche."
      }
    },
    {
      "id": "emergency_014",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "牙疼",
      "text": "dolor de muelas",
      "audioPath": "audio/es/emergency_014.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_014_example",
        "zh": "我需要找牙医，我牙疼。",
        "text": "Necesito un dentista; me duelen las muelas."
      }
    },
    {
      "id": "emergency_015",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "恶心",
      "text": "náuseas",
      "audioPath": "audio/es/emergency_015.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_015_example",
        "zh": "我感到恶心。",
        "text": "Tengo náuseas."
      }
    },
    {
      "id": "emergency_016",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "呕吐",
      "text": "vómitos",
      "audioPath": "audio/es/emergency_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_016_example",
        "zh": "我一直在呕吐。",
        "text": "No paro de vomitar."
      }
    },
    {
      "id": "emergency_017",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "腹泻",
      "text": "diarrea",
      "audioPath": "audio/es/emergency_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_017_example",
        "zh": "我腹泻了。",
        "text": "Tengo diarrea."
      }
    },
    {
      "id": "emergency_018",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "便秘",
      "text": "estreñimiento",
      "audioPath": "audio/es/emergency_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_018_example",
        "zh": "这种药会导致便秘吗？",
        "text": "¿Este medicamento puede causar estreñimiento?"
      }
    },
    {
      "id": "emergency_019",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "受伤",
      "text": "herida",
      "audioPath": "audio/es/emergency_019.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_019_example",
        "zh": "伤口需要缝合吗？",
        "text": "¿Hay que dar puntos en la herida?"
      }
    },
    {
      "id": "emergency_020",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "流血",
      "text": "sangrado",
      "audioPath": "audio/es/emergency_020.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_020_example",
        "zh": "怎样才能止血？",
        "text": "¿Cómo puedo detener el sangrado?"
      }
    },
    {
      "id": "emergency_021",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "骨折",
      "text": "fractura",
      "audioPath": "audio/es/emergency_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_021_example",
        "zh": "我担心骨折了。",
        "text": "Creo que puede ser una fractura."
      }
    },
    {
      "id": "emergency_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "word",
      "zh": "烫伤",
      "text": "quemadura",
      "audioPath": "audio/es/emergency_022.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_022_example",
        "zh": "这个烫伤需要去医院吗？",
        "text": "¿Tengo que ir al hospital por esta quemadura?"
      }
    },
    {
      "id": "emergency_023",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "哮喘",
      "text": "asma",
      "audioPath": "audio/es/emergency_023.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_023_example",
        "zh": "我有哮喘，需要吸入器。",
        "text": "Tengo asma y necesito un inhalador."
      }
    },
    {
      "id": "emergency_024",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药片",
      "text": "pastilla",
      "audioPath": "audio/es/emergency_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_025",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "药膏",
      "text": "pomada",
      "audioPath": "audio/es/emergency_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_026",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "创可贴",
      "text": "tirita",
      "audioPath": "audio/es/emergency_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_027",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "绷带",
      "text": "venda",
      "audioPath": "audio/es/emergency_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_028",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "体温计",
      "text": "termómetro",
      "audioPath": "audio/es/emergency_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_029",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "口罩",
      "text": "mascarilla",
      "audioPath": "audio/es/emergency_029.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_030",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "消毒液",
      "text": "desinfectante",
      "audioPath": "audio/es/emergency_030.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_031",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "急救箱",
      "text": "botiquín",
      "audioPath": "audio/es/emergency_031.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_032",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "word",
      "zh": "保险",
      "text": "seguro",
      "audioPath": "audio/es/emergency_032.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_032_example",
        "zh": "我的旅行保险包含急诊吗？",
        "text": "¿Mi seguro de viaje cubre las urgencias?"
      }
    },
    {
      "id": "emergency_033",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "word",
      "zh": "保险卡",
      "text": "tarjeta del seguro",
      "audioPath": "audio/es/emergency_033.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_034",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我把护照弄丢了。",
      "text": "He perdido el pasaporte.",
      "audioPath": "audio/es/emergency_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_035",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我的钱包被偷了。",
      "text": "Me han robado la cartera.",
      "audioPath": "audio/es/emergency_035.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_036",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "我需要帮助。",
      "text": "Necesito ayuda.",
      "audioPath": "audio/es/emergency_036.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_037",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请叫警察。",
      "text": "Llame a la policía, por favor.",
      "audioPath": "audio/es/emergency_037.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_038",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请叫救护车。",
      "text": "Llame a una ambulancia, por favor.",
      "audioPath": "audio/es/emergency_038.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_039",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我不舒服。",
      "text": "No me encuentro bien.",
      "audioPath": "audio/es/emergency_039.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_040",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我生病了。",
      "text": "Estoy enfermo.",
      "audioPath": "audio/es/emergency_040.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_041",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我对药物过敏。",
      "text": "Tengo alergia a algún medicamento.",
      "audioPath": "audio/es/emergency_041.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_042",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "哪里有药店？",
      "text": "¿Dónde hay una farmacia?",
      "audioPath": "audio/es/emergency_042.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "emergency_043",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "我需要看医生。",
      "text": "Necesito ver a un médico.",
      "audioPath": "audio/es/emergency_043.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "emergency_044",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "这很紧急。",
      "text": "Es una emergencia.",
      "audioPath": "audio/es/emergency_044.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_001",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "谢谢",
      "text": "gracias",
      "audioPath": "audio/es/expressions_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_001_example",
        "zh": "谢谢您的帮助。",
        "text": "Gracias por su ayuda."
      }
    },
    {
      "id": "expressions_002",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "非常感谢",
      "text": "muchas gracias",
      "audioPath": "audio/es/expressions_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_002_example",
        "zh": "真的非常感谢。",
        "text": "Muchísimas gracias."
      }
    },
    {
      "id": "expressions_003",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "不客气",
      "text": "de nada",
      "audioPath": "audio/es/expressions_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_003_example",
        "zh": "不客气。",
        "text": "De nada."
      }
    },
    {
      "id": "expressions_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "请",
      "text": "por favor",
      "audioPath": "audio/es/expressions_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_004_example",
        "zh": "请给我一张地图。",
        "text": "Un mapa, por favor."
      }
    },
    {
      "id": "expressions_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "对不起",
      "text": "perdone",
      "audioPath": "audio/es/expressions_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_005_example",
        "zh": "劳驾，火车站在哪里？",
        "text": "Perdone, ¿dónde está la estación?"
      }
    },
    {
      "id": "expressions_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "抱歉",
      "text": "lo siento",
      "audioPath": "audio/es/expressions_006.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_006_example",
        "zh": "对不起，我听不懂。",
        "text": "Lo siento, no entiendo."
      }
    },
    {
      "id": "expressions_007",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "你好",
      "text": "hola",
      "audioPath": "audio/es/expressions_007.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_007_example",
        "zh": "你好，我有一个预订。",
        "text": "Hola, tengo una reserva."
      }
    },
    {
      "id": "expressions_008",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "早上好",
      "text": "buenos días",
      "audioPath": "audio/es/expressions_008.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_008_example",
        "zh": "早上好，请问有空房吗？",
        "text": "Buenos días, ¿tienen alguna habitación libre?"
      }
    },
    {
      "id": "expressions_009",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "下午好",
      "text": "buenas tardes",
      "audioPath": "audio/es/expressions_009.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_009_example",
        "zh": "下午好，我想办理入住。",
        "text": "Buenas tardes, quisiera registrarme."
      }
    },
    {
      "id": "expressions_010",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "再见",
      "text": "adiós",
      "audioPath": "audio/es/expressions_010.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_010_example",
        "zh": "再见，祝您愉快。",
        "text": "Adiós, que tenga un buen día."
      }
    },
    {
      "id": "expressions_011",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "回头见",
      "text": "hasta luego",
      "audioPath": "audio/es/expressions_011.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_011_example",
        "zh": "回头见，谢谢！",
        "text": "Hasta luego, ¡gracias!"
      }
    },
    {
      "id": "expressions_012",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "晚安",
      "text": "buenas noches",
      "audioPath": "audio/es/expressions_012.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_012_example",
        "zh": "晚安，明天见。",
        "text": "Buenas noches, hasta mañana."
      }
    },
    {
      "id": "expressions_013",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "word",
      "zh": "欢迎光临",
      "text": "bienvenido",
      "audioPath": "audio/es/expressions_013.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_013_example",
        "zh": "欢迎来到西班牙。",
        "text": "Bienvenido a España."
      }
    },
    {
      "id": "expressions_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我明白了",
      "text": "Entiendo.",
      "audioPath": "audio/es/expressions_014.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_015",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我不明白",
      "text": "No entiendo.",
      "audioPath": "audio/es/expressions_015.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_016",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "是的",
      "text": "sí",
      "audioPath": "audio/es/expressions_016.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_016_example",
        "zh": "是的，我有预订。",
        "text": "Sí, tengo una reserva."
      }
    },
    {
      "id": "expressions_017",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "不是",
      "text": "no",
      "audioPath": "audio/es/expressions_017.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_017_example",
        "zh": "不，谢谢。",
        "text": "No, gracias."
      }
    },
    {
      "id": "expressions_018",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "可以",
      "text": "vale",
      "audioPath": "audio/es/expressions_018.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_018_example",
        "zh": "好的，我们走吧。",
        "text": "Vale, vamos."
      }
    },
    {
      "id": "expressions_019",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "没关系",
      "text": "No pasa nada.",
      "audioPath": "audio/es/expressions_019.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_020",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "没问题",
      "text": "No hay problema.",
      "audioPath": "audio/es/expressions_020.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_021",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "word",
      "zh": "好的",
      "text": "de acuerdo",
      "audioPath": "audio/es/expressions_021.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_021_example",
        "zh": "好的，我同意。",
        "text": "De acuerdo, estoy conforme."
      }
    },
    {
      "id": "expressions_022",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我喜欢",
      "text": "Me gusta.",
      "audioPath": "audio/es/expressions_022.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_023",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "我不喜欢",
      "text": "No me gusta.",
      "audioPath": "audio/es/expressions_023.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_024",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "想要",
      "text": "querer",
      "audioPath": "audio/es/expressions_024.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_024_example",
        "zh": "我想要靠窗的座位。",
        "text": "Quiero un asiento junto a la ventanilla."
      }
    },
    {
      "id": "expressions_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "需要",
      "text": "necesitar",
      "audioPath": "audio/es/expressions_025.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_025_example",
        "zh": "我需要一名医生。",
        "text": "Necesito un médico."
      }
    },
    {
      "id": "expressions_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "有",
      "text": "hay",
      "audioPath": "audio/es/expressions_026.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_026_example",
        "zh": "附近有药店吗？",
        "text": "¿Hay una farmacia cerca?"
      }
    },
    {
      "id": "expressions_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "没有",
      "text": "no hay",
      "audioPath": "audio/es/expressions_027.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_027_example",
        "zh": "现在没有空桌。",
        "text": "No hay ninguna mesa libre ahora."
      }
    },
    {
      "id": "expressions_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "word",
      "zh": "是",
      "text": "es",
      "audioPath": "audio/es/expressions_028.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_expressions_028_example",
        "zh": "这是去市中心的公交车。",
        "text": "Este es el autobús que va al centro."
      }
    },
    {
      "id": "expressions_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不是",
      "text": "No es.",
      "audioPath": "audio/es/expressions_029.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_030",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我叫……",
      "text": "Me llamo…",
      "audioPath": "audio/es/expressions_030.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_031",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "你叫什么名字？",
      "text": "¿Cómo se llama?",
      "audioPath": "audio/es/expressions_031.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "expressions_032",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我是中国人。",
      "text": "Soy de China.",
      "audioPath": "audio/es/expressions_032.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_033",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "你会说英语吗？",
      "text": "¿Habla inglés?",
      "audioPath": "audio/es/expressions_033.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "expressions_034",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请说慢一点。",
      "text": "Hable más despacio, por favor.",
      "audioPath": "audio/es/expressions_034.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_035",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "请再说一遍。",
      "text": "Repítalo, por favor.",
      "audioPath": "audio/es/expressions_035.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_036",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "什么意思？",
      "text": "¿Qué significa?",
      "audioPath": "audio/es/expressions_036.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "expressions_037",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "怎么读？",
      "text": "¿Cómo se pronuncia?",
      "audioPath": "audio/es/expressions_037.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "expressions_038",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "怎么写？",
      "text": "¿Cómo se escribe?",
      "audioPath": "audio/es/expressions_038.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "expressions_039",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "多少钱？",
      "text": "¿Cuánto cuesta?",
      "audioPath": "audio/es/expressions_039.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "expressions_040",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "在哪里？",
      "text": "¿Dónde está?",
      "audioPath": "audio/es/expressions_040.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "expressions_041",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "什么时候？",
      "text": "¿Cuándo es?",
      "audioPath": "audio/es/expressions_041.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "expressions_042",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "为什么？",
      "text": "¿Por qué?",
      "audioPath": "audio/es/expressions_042.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "expressions_043",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "怎么办？",
      "text": "¿Qué hago?",
      "audioPath": "audio/es/expressions_043.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "expressions_044",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以吗？",
      "text": "¿Se puede?",
      "audioPath": "audio/es/expressions_044.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "expressions_045",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "可以。",
      "text": "Sí, se puede.",
      "audioPath": "audio/es/expressions_045.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_046",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "不行。",
      "text": "No se puede.",
      "audioPath": "audio/es/expressions_046.mp3",
      "direction": "traveler-says",
      "intent": "communicate"
    },
    {
      "id": "expressions_047",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "有中文吗？",
      "text": "¿Lo tienen en chino?",
      "audioPath": "audio/es/expressions_047.mp3",
      "direction": "traveler-says",
      "intent": "ask"
    },
    {
      "id": "es_airport_phrase_001",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "请问护照检查在哪里？",
      "text": "¿Dónde está el control de pasaportes?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_001.mp3"
    },
    {
      "id": "es_airport_phrase_002",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我的签证有问题，可以帮我吗？",
      "text": "Tengo un problema con el visado, ¿puede ayudarme?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_002.mp3"
    },
    {
      "id": "es_airport_phrase_003",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "可以确认一下机票上的日期吗？",
      "text": "¿Puede comprobar la fecha de mi billete?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_003.mp3"
    },
    {
      "id": "es_airport_phrase_004",
      "sceneId": "airport",
      "situationId": "documents-flights",
      "kind": "phrase",
      "zh": "我的航班从哪个航站楼出发？",
      "text": "¿De qué terminal sale mi vuelo?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_004.mp3"
    },
    {
      "id": "es_airport_phrase_005",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "这张登机牌可以用吗？",
      "text": "¿Es válida esta tarjeta de embarque?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_005.mp3"
    },
    {
      "id": "es_airport_phrase_006",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "值机柜台在哪里？",
      "text": "¿Dónde está el mostrador de facturación?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_006.mp3"
    },
    {
      "id": "es_airport_phrase_007",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "我想换一个座位。",
      "text": "Quisiera cambiar de asiento.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_airport_phrase_007.mp3"
    },
    {
      "id": "es_airport_phrase_008",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "还有靠窗的座位吗？",
      "text": "¿Queda algún asiento junto a la ventanilla?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_008.mp3"
    },
    {
      "id": "es_airport_phrase_009",
      "sceneId": "airport",
      "situationId": "check-in",
      "kind": "phrase",
      "zh": "可以给我一个靠过道的座位吗？",
      "text": "¿Me puede dar un asiento junto al pasillo?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_009.mp3"
    },
    {
      "id": "es_airport_phrase_010",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "我可以免费托运几件行李？",
      "text": "¿Cuántas piezas de equipaje puedo facturar gratis?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_010.mp3"
    },
    {
      "id": "es_airport_phrase_011",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "我的行李箱在运输中损坏了。",
      "text": "Mi maleta ha sufrido daños durante el viaje.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_airport_phrase_011.mp3"
    },
    {
      "id": "es_airport_phrase_012",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "这件行李可以带进客舱吗？",
      "text": "¿Puedo llevar este equipaje en la cabina?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_012.mp3"
    },
    {
      "id": "es_airport_phrase_013",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "这个航班的行李在几号转盘？",
      "text": "¿En qué cinta sale el equipaje de este vuelo?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_013.mp3"
    },
    {
      "id": "es_airport_phrase_014",
      "sceneId": "airport",
      "situationId": "baggage",
      "kind": "phrase",
      "zh": "哪里可以找到行李推车？",
      "text": "¿Dónde puedo encontrar un carrito para el equipaje?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_014.mp3"
    },
    {
      "id": "es_airport_phrase_015",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "这是排队过安检的队伍吗？",
      "text": "¿Es esta la cola para el control de seguridad?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_015.mp3"
    },
    {
      "id": "es_airport_phrase_016",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "免税店在安检后面吗？",
      "text": "¿La tienda libre de impuestos está después del control?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_016.mp3"
    },
    {
      "id": "es_airport_phrase_017",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "候机区有充电插座吗？",
      "text": "¿Hay enchufes en la sala de espera?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_017.mp3"
    },
    {
      "id": "es_airport_phrase_018",
      "sceneId": "airport",
      "situationId": "security-waiting",
      "kind": "phrase",
      "zh": "过安检时要取出电脑吗？",
      "text": "¿Tengo que sacar el ordenador en el control de seguridad?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_018.mp3"
    },
    {
      "id": "es_airport_phrase_019",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "您的航班延误了四十五分钟。",
      "text": "Su vuelo lleva cuarenta y cinco minutos de retraso.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_airport_phrase_019.mp3"
    },
    {
      "id": "es_airport_phrase_020",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "登机口已改到B12。",
      "text": "La puerta de embarque ha cambiado a la B12.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_airport_phrase_020.mp3"
    },
    {
      "id": "es_airport_phrase_021",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "请把笔记本电脑从包里取出。",
      "text": "Saque el portátil de la bolsa, por favor.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_airport_phrase_021.mp3"
    },
    {
      "id": "es_airport_phrase_022",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "登机时间是几点？",
      "text": "¿A qué hora es el embarque?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_022.mp3"
    },
    {
      "id": "es_airport_phrase_023",
      "sceneId": "airport",
      "situationId": "boarding-onboard",
      "kind": "phrase",
      "zh": "现在开始登机。",
      "text": "Ya ha comenzado el embarque.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_airport_phrase_023.mp3"
    },
    {
      "id": "es_airport_phrase_024",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "我已经在线提交了海关申报。",
      "text": "Ya he presentado la declaración de aduanas por internet.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_airport_phrase_024.mp3"
    },
    {
      "id": "es_airport_phrase_025",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "我需要申报这些物品吗？",
      "text": "¿Tengo que declarar estos artículos en la aduana?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_025.mp3"
    },
    {
      "id": "es_airport_phrase_026",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "您的行李超重了。",
      "text": "Su equipaje supera el peso permitido.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_airport_phrase_026.mp3"
    },
    {
      "id": "es_airport_phrase_027",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "预计几点着陆？",
      "text": "¿A qué hora está previsto el aterrizaje?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_airport_phrase_027.mp3"
    },
    {
      "id": "es_airport_phrase_028",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "请出示护照和登机牌。",
      "text": "¿Me muestra el pasaporte y la tarjeta de embarque?",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_airport_phrase_028.mp3"
    },
    {
      "id": "es_airport_phrase_029",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "这是本次航班的最后登机通知。",
      "text": "Este es el último aviso de embarque para su vuelo.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_airport_phrase_029.mp3"
    },
    {
      "id": "es_airport_phrase_030",
      "sceneId": "airport",
      "situationId": "arrival-immigration",
      "kind": "phrase",
      "zh": "您的行李会在五号转盘出来。",
      "text": "Su equipaje saldrá por la cinta cinco.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_airport_phrase_030.mp3"
    },
    {
      "id": "es_transport_phrase_001",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "可以直接刷非接触式银行卡乘车吗？",
      "text": "¿Puedo pagar el viaje directamente con una tarjeta sin contacto?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_001.mp3"
    },
    {
      "id": "es_transport_phrase_002",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "去市中心应该在哪一站下车？",
      "text": "¿En qué estación tengo que bajarme para ir al centro?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_002.mp3"
    },
    {
      "id": "es_transport_phrase_003",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "去马德里的车从哪个站台出发？",
      "text": "¿De qué andén sale el tren a Madrid?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_003.mp3"
    },
    {
      "id": "es_transport_phrase_004",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "下一班车几点出发？",
      "text": "¿A qué hora sale el próximo servicio?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_004.mp3"
    },
    {
      "id": "es_transport_phrase_005",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "phrase",
      "zh": "请给我一张去托莱多的单程票。",
      "text": "Un billete de ida a Toledo, por favor.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_transport_phrase_005.mp3"
    },
    {
      "id": "es_transport_phrase_006",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "最近的地铁入口在哪里？",
      "text": "¿Dónde está la entrada de metro más cercana?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_006.mp3"
    },
    {
      "id": "es_transport_phrase_007",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "这辆公交车去机场吗？",
      "text": "¿Este autobús va al aeropuerto?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_007.mp3"
    },
    {
      "id": "es_transport_phrase_008",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "我需要换乘地铁吗？",
      "text": "¿Tengo que hacer transbordo en el metro?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_008.mp3"
    },
    {
      "id": "es_transport_phrase_009",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "公交车票可以上车后买吗？",
      "text": "¿Se puede comprar el billete dentro del autobús?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_009.mp3"
    },
    {
      "id": "es_transport_phrase_010",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "phrase",
      "zh": "最后一班地铁是几点？",
      "text": "¿A qué hora pasa el último metro?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_010.mp3"
    },
    {
      "id": "es_transport_phrase_011",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "去塞维利亚的火车在哪里乘坐？",
      "text": "¿Dónde se coge el tren a Sevilla?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_011.mp3"
    },
    {
      "id": "es_transport_phrase_012",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "我错过了高铁，可以改签吗？",
      "text": "He perdido el tren de alta velocidad, ¿puedo cambiar el billete?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_012.mp3"
    },
    {
      "id": "es_transport_phrase_013",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "这趟火车需要预订座位吗？",
      "text": "¿Hay que reservar asiento en este tren?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_013.mp3"
    },
    {
      "id": "es_transport_phrase_014",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "这是直达高铁吗？",
      "text": "¿Es un tren de alta velocidad directo?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_014.mp3"
    },
    {
      "id": "es_transport_phrase_015",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "phrase",
      "zh": "火车会在哪些车站停靠？",
      "text": "¿En qué estaciones para el tren?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_015.mp3"
    },
    {
      "id": "es_transport_phrase_016",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "网约车上车点在哪里？",
      "text": "¿Dónde está la zona de recogida de vehículos con conductor?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_016.mp3"
    },
    {
      "id": "es_transport_phrase_017",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "可以帮我叫一辆出租车吗？",
      "text": "¿Puede llamarme un taxi?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_017.mp3"
    },
    {
      "id": "es_transport_phrase_018",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "出租车可以刷卡吗？",
      "text": "¿Se puede pagar el taxi con tarjeta?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_018.mp3"
    },
    {
      "id": "es_transport_phrase_019",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "这张票九十分钟内有效。",
      "text": "Este billete es válido durante noventa minutos.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_transport_phrase_019.mp3"
    },
    {
      "id": "es_transport_phrase_020",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "下一站是中央车站。",
      "text": "La próxima parada es Estación Central.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_transport_phrase_020.mp3"
    },
    {
      "id": "es_transport_phrase_021",
      "sceneId": "transport",
      "situationId": "taxi",
      "kind": "phrase",
      "zh": "末班车已经开走了。",
      "text": "El último tren ya ha salido.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_transport_phrase_021.mp3"
    },
    {
      "id": "es_transport_phrase_022",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "在哪里办理租车手续？",
      "text": "¿Dónde se recoge el coche de alquiler?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_022.mp3"
    },
    {
      "id": "es_transport_phrase_023",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "请在三号站台换乘。",
      "text": "Haga transbordo en el andén tres.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_transport_phrase_023.mp3"
    },
    {
      "id": "es_transport_phrase_024",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "这里可以停车吗？",
      "text": "¿Se puede aparcar aquí?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_transport_phrase_024.mp3"
    },
    {
      "id": "es_transport_phrase_025",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "phrase",
      "zh": "在红绿灯处右转。",
      "text": "Gire a la derecha en el semáforo.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_transport_phrase_025.mp3"
    },
    {
      "id": "es_transport_phrase_026",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "下车时也请刷交通卡。",
      "text": "Pase también la tarjeta al bajar.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_transport_phrase_026.mp3"
    },
    {
      "id": "es_transport_phrase_027",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "我预订了一辆租赁汽车。",
      "text": "Tengo reservado un coche de alquiler.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_transport_phrase_027.mp3"
    },
    {
      "id": "es_transport_phrase_028",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "到机场的车费大约是四十美元。",
      "text": "Hasta el aeropuerto son unos cuarenta euros.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_transport_phrase_028.mp3"
    },
    {
      "id": "es_transport_phrase_029",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "请在下一站下车。",
      "text": "Baje en la próxima parada.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_transport_phrase_029.mp3"
    },
    {
      "id": "es_transport_phrase_030",
      "sceneId": "transport",
      "situationId": "rental-driving",
      "kind": "phrase",
      "zh": "今天这条线路暂停运营。",
      "text": "Esta línea no presta servicio hoy.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_transport_phrase_030.mp3"
    },
    {
      "id": "es_hotel_phrase_001",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "请问酒店前台在哪里？",
      "text": "¿Dónde está la recepción del hotel?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_hotel_phrase_001.mp3"
    },
    {
      "id": "es_hotel_phrase_002",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "我想预订一家国营古堡酒店。",
      "text": "Quisiera reservar una habitación en un parador.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_hotel_phrase_002.mp3"
    },
    {
      "id": "es_hotel_phrase_003",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "这家旅游住宿可以寄存行李吗？",
      "text": "¿Puedo dejar el equipaje en este alojamiento turístico?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_hotel_phrase_003.mp3"
    },
    {
      "id": "es_hotel_phrase_004",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "我可以在前台办理入住吗？",
      "text": "¿Puedo registrarme en recepción?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_hotel_phrase_004.mp3"
    },
    {
      "id": "es_hotel_phrase_005",
      "sceneId": "hotel",
      "situationId": "reservation",
      "kind": "phrase",
      "zh": "请帮我查一下这个姓名下的预订。",
      "text": "¿Puede buscar la reserva a este nombre?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_hotel_phrase_005.mp3"
    },
    {
      "id": "es_hotel_phrase_006",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "最早几点可以入住？",
      "text": "¿A partir de qué hora se puede entrar en la habitación?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_hotel_phrase_006.mp3"
    },
    {
      "id": "es_hotel_phrase_007",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我把房间钥匙弄丢了。",
      "text": "He perdido la llave de la habitación.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_hotel_phrase_007.mp3"
    },
    {
      "id": "es_hotel_phrase_008",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我的房卡失效了。",
      "text": "La tarjeta de mi habitación no funciona.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_hotel_phrase_008.mp3"
    },
    {
      "id": "es_hotel_phrase_009",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "可以请人帮我拿行李吗？",
      "text": "¿Puede el botones ayudarme con el equipaje?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_hotel_phrase_009.mp3"
    },
    {
      "id": "es_hotel_phrase_010",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "phrase",
      "zh": "我需要找一位工作人员。",
      "text": "Necesito hablar con alguien del personal.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_hotel_phrase_010.mp3"
    },
    {
      "id": "es_hotel_phrase_011",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "可以再送两条毛巾吗？",
      "text": "¿Me pueden traer dos toallas más?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_hotel_phrase_011.mp3"
    },
    {
      "id": "es_hotel_phrase_012",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "请更换一下床单。",
      "text": "¿Pueden cambiar las sábanas, por favor?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_hotel_phrase_012.mp3"
    },
    {
      "id": "es_hotel_phrase_013",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "可以再给我一个枕头吗？",
      "text": "¿Me puede traer otra almohada?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_hotel_phrase_013.mp3"
    },
    {
      "id": "es_hotel_phrase_014",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "phrase",
      "zh": "被子不够暖和。",
      "text": "El edredón no abriga lo suficiente.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_hotel_phrase_014.mp3"
    },
    {
      "id": "es_hotel_phrase_015",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "可以晚一点退房吗？",
      "text": "¿Podría dejar la habitación un poco más tarde?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_hotel_phrase_015.mp3"
    },
    {
      "id": "es_hotel_phrase_016",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "今天不用打扫房间。",
      "text": "Hoy no hace falta limpiar la habitación.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_hotel_phrase_016.mp3"
    },
    {
      "id": "es_hotel_phrase_017",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "请明早七点叫醒我。",
      "text": "Quisiera el servicio de despertador a las siete.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_hotel_phrase_017.mp3"
    },
    {
      "id": "es_hotel_phrase_018",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "洗衣服务什么时候送回来？",
      "text": "¿Cuándo devuelven la ropa del servicio de lavandería?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_hotel_phrase_018.mp3"
    },
    {
      "id": "es_hotel_phrase_019",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "您的房间在八楼。",
      "text": "Su habitación está en la octava planta.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_hotel_phrase_019.mp3"
    },
    {
      "id": "es_hotel_phrase_020",
      "sceneId": "hotel",
      "situationId": "hotel-requests",
      "kind": "phrase",
      "zh": "早餐时间是六点半到十点。",
      "text": "El desayuno se sirve de seis y media a diez.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_hotel_phrase_020.mp3"
    },
    {
      "id": "es_hotel_phrase_021",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "Wi-Fi密码写在房卡套上。",
      "text": "La contraseña del wifi está en la funda de la tarjeta.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_hotel_phrase_021.mp3"
    },
    {
      "id": "es_hotel_phrase_022",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "烟雾报警器一直在响。",
      "text": "El detector de humo no deja de sonar.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_hotel_phrase_022.mp3"
    },
    {
      "id": "es_hotel_phrase_023",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "房间还没准备好。",
      "text": "La habitación todavía no está preparada.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_hotel_phrase_023.mp3"
    },
    {
      "id": "es_hotel_phrase_024",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我想要一间朝内院的安静房间。",
      "text": "Quisiera una habitación tranquila que dé al patio.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_hotel_phrase_024.mp3"
    },
    {
      "id": "es_hotel_phrase_025",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "隔壁房间太吵了。",
      "text": "La habitación de al lado hace demasiado ruido.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_hotel_phrase_025.mp3"
    },
    {
      "id": "es_hotel_phrase_026",
      "sceneId": "hotel",
      "situationId": "hotel-problems",
      "kind": "phrase",
      "zh": "我们可以免费寄存行李。",
      "text": "Podemos guardar su equipaje gratuitamente.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_hotel_phrase_026.mp3"
    },
    {
      "id": "es_hotel_phrase_027",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "我现在想办理退房。",
      "text": "Quisiera dejar la habitación ahora.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_hotel_phrase_027.mp3"
    },
    {
      "id": "es_hotel_phrase_028",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "延迟退房需要额外收费。",
      "text": "La salida tardía tiene un suplemento.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_hotel_phrase_028.mp3"
    },
    {
      "id": "es_hotel_phrase_029",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "请在这里签名。",
      "text": "Firme aquí, por favor.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_hotel_phrase_029.mp3"
    },
    {
      "id": "es_hotel_phrase_030",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "phrase",
      "zh": "电梯在前台右边。",
      "text": "El ascensor está a la derecha de recepción.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_hotel_phrase_030.mp3"
    },
    {
      "id": "es_food_phrase_001",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "早餐几点开始供应？",
      "text": "¿A qué hora empieza el desayuno?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_001.mp3"
    },
    {
      "id": "es_food_phrase_002",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "午餐有每日套餐吗？",
      "text": "¿Hay menú del día para la comida?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_002.mp3"
    },
    {
      "id": "es_food_phrase_003",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "我想预订今晚八点的晚餐。",
      "text": "Quisiera reservar una mesa para cenar a las ocho.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_food_phrase_003.mp3"
    },
    {
      "id": "es_food_phrase_004",
      "sceneId": "food",
      "situationId": "enter-wait",
      "kind": "phrase",
      "zh": "劳驾，我们可以点餐了吗？",
      "text": "Perdone, ¿podemos pedir ya?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_004.mp3"
    },
    {
      "id": "es_food_phrase_005",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "请给我看一下菜单。",
      "text": "¿Me trae la carta, por favor?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_005.mp3"
    },
    {
      "id": "es_food_phrase_006",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "米饭可以换成沙拉吗？",
      "text": "¿Puedo cambiar el arroz por una ensalada?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_006.mp3"
    },
    {
      "id": "es_food_phrase_007",
      "sceneId": "food",
      "situationId": "menu",
      "kind": "phrase",
      "zh": "可以再给我们一些面包吗？",
      "text": "¿Nos trae un poco más de pan?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_007.mp3"
    },
    {
      "id": "es_food_phrase_008",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "剩下的可以打包吗？",
      "text": "¿Me puede poner lo que queda para llevar?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_008.mp3"
    },
    {
      "id": "es_food_phrase_009",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请给我一瓶不带气的水。",
      "text": "Una botella de agua sin gas, por favor.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_food_phrase_009.mp3"
    },
    {
      "id": "es_food_phrase_010",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "可以给我一杯热水吗？",
      "text": "¿Me puede traer un vaso de agua caliente?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_010.mp3"
    },
    {
      "id": "es_food_phrase_011",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "你们有什么茶？",
      "text": "¿Qué tipos de té tienen?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_011.mp3"
    },
    {
      "id": "es_food_phrase_012",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "请给我一杯少量牛奶的咖啡。",
      "text": "Un café cortado, por favor.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_food_phrase_012.mp3"
    },
    {
      "id": "es_food_phrase_013",
      "sceneId": "food",
      "situationId": "ordering",
      "kind": "phrase",
      "zh": "有不含乳糖的牛奶吗？",
      "text": "¿Tienen leche sin lactosa?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_013.mp3"
    },
    {
      "id": "es_food_phrase_014",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "这道菜可以少放盐吗？",
      "text": "¿Pueden preparar este plato con poca sal?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_014.mp3"
    },
    {
      "id": "es_food_phrase_015",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "咖啡请不要加糖。",
      "text": "El café sin azúcar, por favor.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_food_phrase_015.mp3"
    },
    {
      "id": "es_food_phrase_016",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "有不含酱油的菜吗？",
      "text": "¿Hay algún plato sin salsa de soja?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_016.mp3"
    },
    {
      "id": "es_food_phrase_017",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请另外给我一点醋。",
      "text": "¿Me trae un poco de vinagre aparte?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_017.mp3"
    },
    {
      "id": "es_food_phrase_018",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "phrase",
      "zh": "请不要放胡椒。",
      "text": "Sin pimienta, por favor.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_food_phrase_018.mp3"
    },
    {
      "id": "es_food_phrase_019",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "这道菜含有花生。",
      "text": "Este plato contiene cacahuetes.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_food_phrase_019.mp3"
    },
    {
      "id": "es_food_phrase_020",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "这份汤不是素食。",
      "text": "Esta sopa no es vegetariana.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_food_phrase_020.mp3"
    },
    {
      "id": "es_food_phrase_021",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "今天的特色菜是烤鱼。",
      "text": "El plato del día es pescado a la plancha.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_food_phrase_021.mp3"
    },
    {
      "id": "es_food_phrase_022",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "phrase",
      "zh": "牛排刀不太锋利。",
      "text": "Este cuchillo no corta bien la carne.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_food_phrase_022.mp3"
    },
    {
      "id": "es_food_phrase_023",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "饮用水需要另外付费。",
      "text": "El agua se cobra aparte.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_food_phrase_023.mp3"
    },
    {
      "id": "es_food_phrase_024",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "这个鸡蛋是全熟的吗？",
      "text": "¿El huevo está bien hecho?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_024.mp3"
    },
    {
      "id": "es_food_phrase_025",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "我不吃肉。",
      "text": "No como carne.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_food_phrase_025.mp3"
    },
    {
      "id": "es_food_phrase_026",
      "sceneId": "food",
      "situationId": "food-confirm",
      "kind": "phrase",
      "zh": "您的菜大约十五分钟后上。",
      "text": "La comida tardará unos quince minutos.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_food_phrase_026.mp3"
    },
    {
      "id": "es_food_phrase_027",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "服务费已经包含在账单里了吗？",
      "text": "¿Está incluido el servicio en la cuenta?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_food_phrase_027.mp3"
    },
    {
      "id": "es_food_phrase_028",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "这份可以做成不辣的。",
      "text": "Podemos prepararlo sin picante.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_food_phrase_028.mp3"
    },
    {
      "id": "es_food_phrase_029",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "账单里已经包含服务费。",
      "text": "El servicio ya está incluido.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_food_phrase_029.mp3"
    },
    {
      "id": "es_food_phrase_030",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "phrase",
      "zh": "我们可以为您分开结账。",
      "text": "Podemos cobrarles por separado.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_food_phrase_030.mp3"
    },
    {
      "id": "es_shopping_phrase_001",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "请问商店入口在哪里？",
      "text": "¿Dónde está la entrada de la tienda?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_001.mp3"
    },
    {
      "id": "es_shopping_phrase_002",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "百货商店今天营业吗？",
      "text": "¿Abren hoy los grandes almacenes?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_002.mp3"
    },
    {
      "id": "es_shopping_phrase_003",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "这附近有大型超市吗？",
      "text": "¿Hay algún supermercado grande cerca?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_003.mp3"
    },
    {
      "id": "es_shopping_phrase_004",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "便利店是二十四小时营业吗？",
      "text": "¿La tienda de conveniencia abre las veinticuatro horas?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_004.mp3"
    },
    {
      "id": "es_shopping_phrase_005",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "phrase",
      "zh": "周末市场几点开始？",
      "text": "¿A qué hora empieza el mercado el fin de semana?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_005.mp3"
    },
    {
      "id": "es_shopping_phrase_006",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "这件衣服有我的尺码吗？",
      "text": "¿Tiene esta prenda en mi talla?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_006.mp3"
    },
    {
      "id": "es_shopping_phrase_007",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "可以给我大一码的吗？",
      "text": "¿Me puede dar una talla más grande?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_007.mp3"
    },
    {
      "id": "es_shopping_phrase_008",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "这件是中码吗？",
      "text": "¿Esta es la talla mediana?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_008.mp3"
    },
    {
      "id": "es_shopping_phrase_009",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "有没有小一码的？",
      "text": "¿Tiene una talla más pequeña?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_009.mp3"
    },
    {
      "id": "es_shopping_phrase_010",
      "sceneId": "shopping",
      "situationId": "size-color",
      "kind": "phrase",
      "zh": "可以帮我量一下尺码吗？",
      "text": "¿Puede ayudarme a elegir la talla?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_010.mp3"
    },
    {
      "id": "es_shopping_phrase_011",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试衣间在哪里？",
      "text": "¿Dónde están los probadores?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_011.mp3"
    },
    {
      "id": "es_shopping_phrase_012",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "我可以试穿这件外套吗？",
      "text": "¿Me puedo probar este abrigo?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_012.mp3"
    },
    {
      "id": "es_shopping_phrase_013",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试衣间需要排队吗？",
      "text": "¿Hay que hacer cola para el probador?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_013.mp3"
    },
    {
      "id": "es_shopping_phrase_014",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试穿后放在哪里？",
      "text": "¿Dónde dejo la ropa después de probármela?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_014.mp3"
    },
    {
      "id": "es_shopping_phrase_015",
      "sceneId": "shopping",
      "situationId": "try-products",
      "kind": "phrase",
      "zh": "试衣间里最多可以拿几件？",
      "text": "¿Cuántas prendas puedo llevar al probador?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_015.mp3"
    },
    {
      "id": "es_shopping_phrase_016",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "请问这件商品多少钱？",
      "text": "¿Cuánto cuesta este artículo?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_016.mp3"
    },
    {
      "id": "es_shopping_phrase_017",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "标签上标的是最终价格吗？",
      "text": "¿El precio de la etiqueta es el precio final?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_017.mp3"
    },
    {
      "id": "es_shopping_phrase_018",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "这个对我来说太贵了。",
      "text": "Esto es demasiado caro para mí.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_shopping_phrase_018.mp3"
    },
    {
      "id": "es_shopping_phrase_019",
      "sceneId": "shopping",
      "situationId": "price-discount",
      "kind": "phrase",
      "zh": "这个尺码已经缺货了。",
      "text": "Esa talla está agotada.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_shopping_phrase_019.mp3"
    },
    {
      "id": "es_shopping_phrase_020",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "退货需要出示收据。",
      "text": "Necesita el tique para devolverlo.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_shopping_phrase_020.mp3"
    },
    {
      "id": "es_shopping_phrase_021",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "退款会原路退回。",
      "text": "El reembolso se hará al método de pago original.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_shopping_phrase_021.mp3"
    },
    {
      "id": "es_shopping_phrase_022",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "这张银行卡为什么不能用？",
      "text": "¿Por qué no funciona esta tarjeta bancaria?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_022.mp3"
    },
    {
      "id": "es_shopping_phrase_023",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "phrase",
      "zh": "这件商品不能退税。",
      "text": "Este artículo no admite devolución de impuestos.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_shopping_phrase_023.mp3"
    },
    {
      "id": "es_shopping_phrase_024",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请把购物小票给我。",
      "text": "¿Me da el tique, por favor?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_024.mp3"
    },
    {
      "id": "es_shopping_phrase_025",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "退货时需要购物小票吗？",
      "text": "¿Hace falta el tique para devolverlo?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_shopping_phrase_025.mp3"
    },
    {
      "id": "es_shopping_phrase_026",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "请输入银行卡PIN码。",
      "text": "Introduzca el PIN de la tarjeta, por favor.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_shopping_phrase_026.mp3"
    },
    {
      "id": "es_shopping_phrase_027",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "我把购物小票弄丢了。",
      "text": "He perdido el tique de compra.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_shopping_phrase_027.mp3"
    },
    {
      "id": "es_shopping_phrase_028",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "这里支持非接触支付。",
      "text": "Aquí aceptamos pago sin contacto.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_shopping_phrase_028.mp3"
    },
    {
      "id": "es_shopping_phrase_029",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "折扣商品不能换货。",
      "text": "Los artículos rebajados no se pueden cambiar.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_shopping_phrase_029.mp3"
    },
    {
      "id": "es_shopping_phrase_030",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "phrase",
      "zh": "您可以在二楼办理退税。",
      "text": "Puede tramitar la devolución del IVA en la segunda planta.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_shopping_phrase_030.mp3"
    },
    {
      "id": "es_directions_phrase_001",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "请问游客服务中心在哪里？",
      "text": "¿Dónde está la oficina de turismo?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_001.mp3"
    },
    {
      "id": "es_directions_phrase_002",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "我们现在是在地图上的这里吗？",
      "text": "¿Estamos aquí en el mapa?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_002.mp3"
    },
    {
      "id": "es_directions_phrase_003",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "您说的是那边那栋楼吗？",
      "text": "¿Se refiere a aquel edificio de allí?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_003.mp3"
    },
    {
      "id": "es_directions_phrase_004",
      "sceneId": "directions",
      "situationId": "location-direction",
      "kind": "phrase",
      "zh": "下一个路口要左转吗？",
      "text": "¿Tengo que girar a la izquierda en el próximo cruce?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_004.mp3"
    },
    {
      "id": "es_directions_phrase_005",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "车站在道路右侧吗？",
      "text": "¿La estación está a la derecha?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_005.mp3"
    },
    {
      "id": "es_directions_phrase_006",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "博物馆就在我们前面吗？",
      "text": "¿Está el museo justo delante de nosotros?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_006.mp3"
    },
    {
      "id": "es_directions_phrase_007",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "停车场在酒店后面。",
      "text": "El aparcamiento está detrás del hotel.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_directions_phrase_007.mp3"
    },
    {
      "id": "es_directions_phrase_008",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "药店就在银行旁边。",
      "text": "La farmacia está al lado del banco.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_directions_phrase_008.mp3"
    },
    {
      "id": "es_directions_phrase_009",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "邮局在公园对面。",
      "text": "Correos está enfrente del parque.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_directions_phrase_009.mp3"
    },
    {
      "id": "es_directions_phrase_010",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "附近有地铁站吗？",
      "text": "¿Hay alguna estación de metro cerca?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_010.mp3"
    },
    {
      "id": "es_directions_phrase_011",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "机场离这里有多远？",
      "text": "¿A qué distancia está el aeropuerto?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_011.mp3"
    },
    {
      "id": "es_directions_phrase_012",
      "sceneId": "directions",
      "situationId": "ask-route",
      "kind": "phrase",
      "zh": "走路很近吗？",
      "text": "¿Está cerca para ir andando?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_012.mp3"
    },
    {
      "id": "es_directions_phrase_013",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "坐公交车去很远吗？",
      "text": "¿Está lejos para ir en autobús?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_013.mp3"
    },
    {
      "id": "es_directions_phrase_014",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "最近的药店是哪一家？",
      "text": "¿Cuál es la farmacia más cercana?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_014.mp3"
    },
    {
      "id": "es_directions_phrase_015",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "车站很远，最好坐地铁。",
      "text": "La estación está lejos; es mejor ir en metro.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_directions_phrase_015.mp3"
    },
    {
      "id": "es_directions_phrase_016",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "这附近有什么景点？",
      "text": "¿Qué lugares de interés hay cerca?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_016.mp3"
    },
    {
      "id": "es_directions_phrase_017",
      "sceneId": "directions",
      "situationId": "distance-time",
      "kind": "phrase",
      "zh": "步行过去会不会太远？",
      "text": "¿Está demasiado lejos para ir a pie?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_017.mp3"
    },
    {
      "id": "es_directions_phrase_018",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "最近的公共洗手间在哪里？",
      "text": "¿Dónde está el aseo público más cercano?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_018.mp3"
    },
    {
      "id": "es_directions_phrase_019",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "一直走到第二个路口。",
      "text": "Siga recto hasta el segundo cruce.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_directions_phrase_019.mp3"
    },
    {
      "id": "es_directions_phrase_020",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "在红绿灯处左转。",
      "text": "Gire a la izquierda en el semáforo.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_directions_phrase_020.mp3"
    },
    {
      "id": "es_directions_phrase_021",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "车站就在银行对面。",
      "text": "La estación está enfrente del banco.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_directions_phrase_021.mp3"
    },
    {
      "id": "es_directions_phrase_022",
      "sceneId": "directions",
      "situationId": "map-landmarks",
      "kind": "phrase",
      "zh": "我要找的是一栋白色建筑。",
      "text": "Busco un edificio blanco.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_directions_phrase_022.mp3"
    },
    {
      "id": "es_directions_phrase_023",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "步行大约需要十分钟。",
      "text": "Son unos diez minutos andando.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_directions_phrase_023.mp3"
    },
    {
      "id": "es_directions_phrase_024",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "邮局离这里远吗？",
      "text": "¿Está lejos la oficina de Correos?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_024.mp3"
    },
    {
      "id": "es_directions_phrase_025",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "这附近有公共厕所吗？",
      "text": "¿Hay algún aseo público por aquí?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_025.mp3"
    },
    {
      "id": "es_directions_phrase_026",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "过桥后您会看到博物馆。",
      "text": "Al cruzar el puente verá el museo.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_directions_phrase_026.mp3"
    },
    {
      "id": "es_directions_phrase_027",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "最近的地铁站有电梯吗？",
      "text": "¿La estación de metro más cercana tiene ascensor?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_directions_phrase_027.mp3"
    },
    {
      "id": "es_directions_phrase_028",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "您走错方向了。",
      "text": "Va en la dirección equivocada.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_directions_phrase_028.mp3"
    },
    {
      "id": "es_directions_phrase_029",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "入口在大楼后面。",
      "text": "La entrada está detrás del edificio.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_directions_phrase_029.mp3"
    },
    {
      "id": "es_directions_phrase_030",
      "sceneId": "directions",
      "situationId": "understand-route",
      "kind": "phrase",
      "zh": "这条路现在封闭了。",
      "text": "Esta calle está cortada ahora mismo.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_directions_phrase_030.mp3"
    },
    {
      "id": "es_emergency_phrase_001",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我发烧了，需要看医生。",
      "text": "Tengo fiebre y necesito ver a un médico.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_emergency_phrase_001.mp3"
    },
    {
      "id": "es_emergency_phrase_002",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我感冒了，哪里有药店？",
      "text": "Estoy resfriado, ¿dónde hay una farmacia?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_emergency_phrase_002.mp3"
    },
    {
      "id": "es_emergency_phrase_003",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "这种咳嗽药一天吃几次？",
      "text": "¿Cuántas veces al día se toma este medicamento para la tos?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_emergency_phrase_003.mp3"
    },
    {
      "id": "es_emergency_phrase_004",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我头疼得很厉害。",
      "text": "Me duele mucho la cabeza.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_emergency_phrase_004.mp3"
    },
    {
      "id": "es_emergency_phrase_005",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "phrase",
      "zh": "我从昨晚开始胃痛。",
      "text": "Me duele el estómago desde anoche.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_emergency_phrase_005.mp3"
    },
    {
      "id": "es_emergency_phrase_006",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "附近有值班药店吗？",
      "text": "¿Hay alguna farmacia de guardia cerca?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_emergency_phrase_006.mp3"
    },
    {
      "id": "es_emergency_phrase_007",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "可以请护士来看一下吗？",
      "text": "¿Puede venir un enfermero a verme?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_emergency_phrase_007.mp3"
    },
    {
      "id": "es_emergency_phrase_008",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "这种药需要处方吗？",
      "text": "¿Hace falta receta para este medicamento?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_emergency_phrase_008.mp3"
    },
    {
      "id": "es_emergency_phrase_009",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "在哪里可以配这张处方？",
      "text": "¿Dónde puedo comprar lo que indica esta receta?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_emergency_phrase_009.mp3"
    },
    {
      "id": "es_emergency_phrase_010",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "这药片需要饭后吃吗？",
      "text": "¿Tengo que tomar esta pastilla después de comer?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_emergency_phrase_010.mp3"
    },
    {
      "id": "es_emergency_phrase_011",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "phrase",
      "zh": "这种药膏一天涂几次？",
      "text": "¿Cuántas veces al día tengo que aplicar esta pomada?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_emergency_phrase_011.mp3"
    },
    {
      "id": "es_emergency_phrase_012",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "我的手机丢了，需要报警。",
      "text": "He perdido el móvil y necesito denunciarlo.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_emergency_phrase_012.mp3"
    },
    {
      "id": "es_emergency_phrase_013",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "我应该去哪个警察局报案？",
      "text": "¿En qué comisaría puedo presentar la denuncia?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_emergency_phrase_013.mp3"
    },
    {
      "id": "es_emergency_phrase_014",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "我需要一份报案证明。",
      "text": "Necesito una copia de la denuncia.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_emergency_phrase_014.mp3"
    },
    {
      "id": "es_emergency_phrase_015",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "有人偷了我的背包。",
      "text": "Me han robado la mochila.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_emergency_phrase_015.mp3"
    },
    {
      "id": "es_emergency_phrase_016",
      "sceneId": "emergency",
      "situationId": "police-help",
      "kind": "phrase",
      "zh": "请帮我联系警察。",
      "text": "Ayúdeme a contactar con la policía, por favor.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_emergency_phrase_016.mp3"
    },
    {
      "id": "es_emergency_phrase_017",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "我腹泻了两天。",
      "text": "Tengo diarrea desde hace dos días.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_emergency_phrase_017.mp3"
    },
    {
      "id": "es_emergency_phrase_018",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "这种药会引起便秘吗？",
      "text": "¿Este medicamento puede causar estreñimiento?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_emergency_phrase_018.mp3"
    },
    {
      "id": "es_emergency_phrase_019",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "救护车已经在路上了。",
      "text": "La ambulancia está de camino.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_emergency_phrase_019.mp3"
    },
    {
      "id": "es_emergency_phrase_020",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "请不要移动伤者。",
      "text": "No mueva a la persona herida, por favor.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_emergency_phrase_020.mp3"
    },
    {
      "id": "es_emergency_phrase_021",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "phrase",
      "zh": "最近的急诊室在两公里外。",
      "text": "Urgencias está a dos kilómetros.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_emergency_phrase_021.mp3"
    },
    {
      "id": "es_emergency_phrase_022",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "救命，有人昏倒了！",
      "text": "¡Socorro, alguien se ha desmayado!",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_emergency_phrase_022.mp3"
    },
    {
      "id": "es_emergency_phrase_023",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请告诉我您哪里疼。",
      "text": "Dígame dónde le duele.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_emergency_phrase_023.mp3"
    },
    {
      "id": "es_emergency_phrase_024",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "请拨打112叫救护车。",
      "text": "Llame al 112 y pida una ambulancia, por favor.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_emergency_phrase_024.mp3"
    },
    {
      "id": "es_emergency_phrase_025",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "我摔倒后受伤了。",
      "text": "Me he hecho daño al caerme.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_emergency_phrase_025.mp3"
    },
    {
      "id": "es_emergency_phrase_026",
      "sceneId": "emergency",
      "situationId": "danger-accident",
      "kind": "phrase",
      "zh": "您的护照已送到失物招领处。",
      "text": "Su pasaporte está en objetos perdidos.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_emergency_phrase_026.mp3"
    },
    {
      "id": "es_emergency_phrase_027",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "我的旅行保险涵盖这项治疗吗？",
      "text": "¿Mi seguro de viaje cubre este tratamiento?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_emergency_phrase_027.mp3"
    },
    {
      "id": "es_emergency_phrase_028",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "请在这里填写报失单。",
      "text": "Rellene aquí la denuncia de pérdida.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_emergency_phrase_028.mp3"
    },
    {
      "id": "es_emergency_phrase_029",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "请保持清醒并慢慢呼吸。",
      "text": "Manténgase despierto y respire despacio.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_emergency_phrase_029.mp3"
    },
    {
      "id": "es_emergency_phrase_030",
      "sceneId": "emergency",
      "situationId": "emergency-contact",
      "kind": "phrase",
      "zh": "警察大约十分钟后到。",
      "text": "La policía llegará en unos diez minutos.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_emergency_phrase_030.mp3"
    },
    {
      "id": "es_basics_phrase_001",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "你好，请问你会说英语吗？",
      "text": "Hola, ¿habla inglés?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_basics_phrase_001.mp3"
    },
    {
      "id": "es_basics_phrase_002",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "早上好，我有一个预订。",
      "text": "Buenos días, tengo una reserva.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_002.mp3"
    },
    {
      "id": "es_basics_phrase_003",
      "sceneId": "basics",
      "situationId": "greetings",
      "kind": "phrase",
      "zh": "晚上好，还有空桌吗？",
      "text": "Buenas tardes, ¿queda alguna mesa libre?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_basics_phrase_003.mp3"
    },
    {
      "id": "es_basics_phrase_004",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "谢谢您的帮助。",
      "text": "Gracias por su ayuda.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_004.mp3"
    },
    {
      "id": "es_basics_phrase_005",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "真的非常感谢。",
      "text": "Muchísimas gracias.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_005.mp3"
    },
    {
      "id": "es_basics_phrase_006",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "不客气，祝您愉快。",
      "text": "De nada, que tenga un buen día.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_006.mp3"
    },
    {
      "id": "es_basics_phrase_007",
      "sceneId": "basics",
      "situationId": "courtesy",
      "kind": "phrase",
      "zh": "劳驾，请给我一张地图。",
      "text": "Un mapa, por favor.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_007.mp3"
    },
    {
      "id": "es_basics_phrase_008",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "请给我七张票。",
      "text": "Siete billetes, por favor.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_008.mp3"
    },
    {
      "id": "es_basics_phrase_009",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "我们八点见。",
      "text": "Nos vemos a las ocho.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_009.mp3"
    },
    {
      "id": "es_basics_phrase_010",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "火车从九号站台出发。",
      "text": "El tren sale del andén nueve.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_010.mp3"
    },
    {
      "id": "es_basics_phrase_011",
      "sceneId": "basics",
      "situationId": "introductions",
      "kind": "phrase",
      "zh": "步行需要十分钟。",
      "text": "Se tarda diez minutos andando.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_011.mp3"
    },
    {
      "id": "es_basics_phrase_012",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "可以把地址发到我的手机上吗？",
      "text": "¿Puede enviarme la dirección al móvil?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_basics_phrase_012.mp3"
    },
    {
      "id": "es_basics_phrase_013",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "这个小镇有一千多年的历史。",
      "text": "Este pueblo tiene más de mil años de historia.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_013.mp3"
    },
    {
      "id": "es_basics_phrase_014",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "这里大约有一万人。",
      "text": "Aquí viven unas diez mil personas.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_014.mp3"
    },
    {
      "id": "es_basics_phrase_015",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "这里可以把日元换成欧元吗？",
      "text": "¿Puedo cambiar yenes por euros aquí?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_basics_phrase_015.mp3"
    },
    {
      "id": "es_basics_phrase_016",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "我想把美元换成欧元。",
      "text": "Quiero cambiar dólares por euros.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_016.mp3"
    },
    {
      "id": "es_basics_phrase_017",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "phrase",
      "zh": "可以把人民币换成欧元吗？",
      "text": "¿Se pueden cambiar yuanes por euros?",
      "direction": "traveler-says",
      "intent": "ask",
      "audioPath": "audio/es/es_basics_phrase_017.mp3"
    },
    {
      "id": "es_basics_phrase_018",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "费用是零欧元。",
      "text": "El coste es de cero euros.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_018.mp3"
    },
    {
      "id": "es_basics_phrase_019",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "我会说一点英语。",
      "text": "Hablo un poco de inglés.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_basics_phrase_019.mp3"
    },
    {
      "id": "es_basics_phrase_020",
      "sceneId": "basics",
      "situationId": "numbers-quantity",
      "kind": "phrase",
      "zh": "请稍等一下。",
      "text": "Espere un momento, por favor.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_basics_phrase_020.mp3"
    },
    {
      "id": "es_basics_phrase_021",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "这个词的意思是入口。",
      "text": "Esta palabra significa entrada.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_basics_phrase_021.mp3"
    },
    {
      "id": "es_basics_phrase_022",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "我们明天去格拉纳达。",
      "text": "Mañana vamos a Granada.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_022.mp3"
    },
    {
      "id": "es_basics_phrase_023",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "您可以在这里购买SIM卡。",
      "text": "Aquí puede comprar una tarjeta SIM.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_basics_phrase_023.mp3"
    },
    {
      "id": "es_basics_phrase_024",
      "sceneId": "basics",
      "situationId": "time-date",
      "kind": "phrase",
      "zh": "我们后天回来。",
      "text": "Volvemos pasado mañana.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_024.mp3"
    },
    {
      "id": "es_basics_phrase_025",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "是的，我有预订。",
      "text": "Sí, tengo una reserva.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_025.mp3"
    },
    {
      "id": "es_basics_phrase_026",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "这张eSIM会立即开通。",
      "text": "Esta eSIM se activará inmediatamente.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_basics_phrase_026.mp3"
    },
    {
      "id": "es_basics_phrase_027",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "好的，我们走吧。",
      "text": "Vale, vamos.",
      "direction": "traveler-says",
      "intent": "communicate",
      "audioPath": "audio/es/es_basics_phrase_027.mp3"
    },
    {
      "id": "es_basics_phrase_028",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "您的余额不足。",
      "text": "No tiene saldo suficiente.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_basics_phrase_028.mp3"
    },
    {
      "id": "es_basics_phrase_029",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "充值后请重启手机。",
      "text": "Reinicie el teléfono después de la recarga.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_basics_phrase_029.mp3"
    },
    {
      "id": "es_basics_phrase_030",
      "sceneId": "basics",
      "situationId": "basic-confirm",
      "kind": "phrase",
      "zh": "没问题，我可以写下来。",
      "text": "No hay problema, se lo puedo escribir.",
      "direction": "traveler-hears",
      "intent": "understand",
      "audioPath": "audio/es/es_basics_phrase_030.mp3"
    },
    {
      "id": "transport_001",
      "sceneId": "transport",
      "situationId": "tickets-stations",
      "kind": "word",
      "zh": "交通卡",
      "text": "tarjeta de transporte",
      "audioPath": "audio/es/transport_001.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "transport_002",
      "sceneId": "transport",
      "situationId": "rail",
      "kind": "word",
      "zh": "末班车",
      "text": "último tren",
      "audioPath": "audio/es/transport_002.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "transport_003",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "下一站",
      "text": "próxima parada",
      "audioPath": "audio/es/transport_003.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "transport_004",
      "sceneId": "transport",
      "situationId": "bus-metro",
      "kind": "word",
      "zh": "终点站",
      "text": "final de línea",
      "audioPath": "audio/es/transport_004.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "transport_005",
      "sceneId": "transport",
      "situationId": "transfer",
      "kind": "word",
      "zh": "换乘",
      "text": "transbordo",
      "audioPath": "audio/es/transport_005.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_083",
      "sceneId": "hotel",
      "situationId": "room-facilities",
      "kind": "word",
      "zh": "Wi-Fi密码",
      "text": "contraseña del wifi",
      "audioPath": "audio/es/hotel_083.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_084",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "提前入住",
      "text": "entrada anticipada",
      "audioPath": "audio/es/hotel_084.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_085",
      "sceneId": "hotel",
      "situationId": "checkout-storage",
      "kind": "word",
      "zh": "延迟退房",
      "text": "salida tardía",
      "audioPath": "audio/es/hotel_085.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "hotel_086",
      "sceneId": "hotel",
      "situationId": "hotel-check-in",
      "kind": "word",
      "zh": "自助入住",
      "text": "registro de entrada automático",
      "audioPath": "audio/es/hotel_086.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "food_097",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "纯素",
      "text": "vegano",
      "audioPath": "audio/es/food_097.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_097_example",
        "zh": "请问有纯素菜品吗？",
        "text": "¿Tienen algún plato vegano?"
      }
    },
    {
      "id": "food_098",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "清真",
      "text": "halal",
      "audioPath": "audio/es/food_098.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_098_example",
        "zh": "这道菜是清真的吗？",
        "text": "¿Este plato es halal?"
      }
    },
    {
      "id": "food_099",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "无麸质",
      "text": "sin gluten",
      "audioPath": "audio/es/food_099.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_099_example",
        "zh": "有无麸质的面包吗？",
        "text": "¿Tienen pan sin gluten?"
      }
    },
    {
      "id": "food_100",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "乳糖不耐",
      "text": "intolerancia a la lactosa",
      "audioPath": "audio/es/food_100.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_100_example",
        "zh": "我乳糖不耐，不能喝普通牛奶。",
        "text": "Soy intolerante a la lactosa y no puedo tomar leche normal."
      }
    },
    {
      "id": "food_101",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "花生",
      "text": "cacahuetes",
      "audioPath": "audio/es/food_101.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_101_example",
        "zh": "我对花生严重过敏。",
        "text": "Tengo una alergia grave a los cacahuetes."
      }
    },
    {
      "id": "food_102",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "坚果",
      "text": "frutos secos",
      "audioPath": "audio/es/food_102.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_102_example",
        "zh": "这份甜点里有坚果吗？",
        "text": "¿Este postre contiene frutos secos?"
      }
    },
    {
      "id": "food_103",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "甲壳类",
      "text": "crustáceos",
      "audioPath": "audio/es/food_103.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_103_example",
        "zh": "我对虾和其他甲壳类过敏。",
        "text": "Soy alérgico a las gambas y otros crustáceos."
      }
    },
    {
      "id": "food_104",
      "sceneId": "food",
      "situationId": "dining-requests",
      "kind": "word",
      "zh": "自来水",
      "text": "agua del grifo",
      "audioPath": "audio/es/food_104.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_104_example",
        "zh": "这里的自来水可以直接喝吗？",
        "text": "¿Se puede beber el agua del grifo aquí?"
      }
    },
    {
      "id": "food_105",
      "sceneId": "food",
      "situationId": "taste-diet",
      "kind": "word",
      "zh": "过敏原",
      "text": "alérgeno",
      "audioPath": "audio/es/food_105.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_105_example",
        "zh": "请告诉我这道菜含有哪些过敏原。",
        "text": "Dígame qué alérgenos contiene este plato, por favor."
      }
    },
    {
      "id": "food_106",
      "sceneId": "food",
      "situationId": "food-checkout",
      "kind": "word",
      "zh": "分开结账",
      "text": "pagar por separado",
      "audioPath": "audio/es/food_106.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_food_106_example",
        "zh": "请把账单分开结算。",
        "text": "Cóbranos por separado, por favor."
      }
    },
    {
      "id": "shopping_074",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "退款",
      "text": "reembolso",
      "audioPath": "audio/es/shopping_074.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_075",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "换货",
      "text": "cambio",
      "audioPath": "audio/es/shopping_075.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_076",
      "sceneId": "shopping",
      "situationId": "find-products",
      "kind": "word",
      "zh": "缺货",
      "text": "agotado",
      "audioPath": "audio/es/shopping_076.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_077",
      "sceneId": "shopping",
      "situationId": "return-tax",
      "kind": "word",
      "zh": "免税",
      "text": "libre de impuestos",
      "audioPath": "audio/es/shopping_077.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_078",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "PIN码",
      "text": "código PIN",
      "audioPath": "audio/es/shopping_078.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "shopping_079",
      "sceneId": "shopping",
      "situationId": "payment",
      "kind": "word",
      "zh": "非接触支付",
      "text": "pago sin contacto",
      "audioPath": "audio/es/shopping_079.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "emergency_045",
      "sceneId": "emergency",
      "situationId": "doctor-pharmacy",
      "kind": "word",
      "zh": "急诊室",
      "text": "urgencias",
      "audioPath": "audio/es/emergency_045.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_045_example",
        "zh": "请带我去最近的急诊室。",
        "text": "Lléveme a urgencias, por favor."
      }
    },
    {
      "id": "emergency_046",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "word",
      "zh": "被盗",
      "text": "robado",
      "audioPath": "audio/es/emergency_046.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_046_example",
        "zh": "我的手机被盗了。",
        "text": "Me han robado el móvil."
      }
    },
    {
      "id": "emergency_047",
      "sceneId": "emergency",
      "situationId": "lost-stolen",
      "kind": "word",
      "zh": "失物招领处",
      "text": "objetos perdidos",
      "audioPath": "audio/es/emergency_047.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_047_example",
        "zh": "失物招领处在哪里？",
        "text": "¿Dónde está la oficina de objetos perdidos?"
      }
    },
    {
      "id": "emergency_048",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "呼吸困难",
      "text": "dificultad para respirar",
      "audioPath": "audio/es/emergency_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_048_example",
        "zh": "我呼吸困难。",
        "text": "Me cuesta respirar."
      }
    },
    {
      "id": "emergency_049",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "胸痛",
      "text": "dolor en el pecho",
      "audioPath": "audio/es/emergency_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_049_example",
        "zh": "我胸口很痛。",
        "text": "Tengo un dolor fuerte en el pecho."
      }
    },
    {
      "id": "emergency_050",
      "sceneId": "emergency",
      "situationId": "feeling-unwell",
      "kind": "word",
      "zh": "昏倒",
      "text": "desmayarse",
      "audioPath": "audio/es/emergency_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize",
      "example": {
        "id": "es-es_emergency_050_example",
        "zh": "他刚才昏倒了。",
        "text": "Esta persona acaba de desmayarse."
      }
    },
    {
      "id": "expressions_048",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "eSIM",
      "text": "eSIM",
      "audioPath": "audio/es/expressions_048.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_049",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "SIM卡",
      "text": "tarjeta SIM",
      "audioPath": "audio/es/expressions_049.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_050",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "充值",
      "text": "recarga",
      "audioPath": "audio/es/expressions_050.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    },
    {
      "id": "expressions_051",
      "sceneId": "basics",
      "situationId": "language-help",
      "kind": "word",
      "zh": "余额",
      "text": "saldo",
      "audioPath": "audio/es/expressions_051.mp3",
      "direction": "traveler-says",
      "intent": "recognize"
    }
  ]
});
})();
