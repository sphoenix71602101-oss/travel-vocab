// 西班牙（es-ES）旅行认读课程。发音优先使用浏览器的 es-ES 系统语音。
window.ES_BEGINNER_DATA = Object.freeze({
  stages: [
    {
      id: "vowels", title: "先抓住五个元音", subtitle: "西班牙语的元音比英语稳定得多", lessons: [
        {
          id: "es-01", title: "a、e、i、o、u 基本不变", subtitle: "先建立最可靠的声音锚点",
          cards: [
            { type: "concept", title: "看到元音，就大胆读", body: "西班牙语的五个元音通常很稳定：a、e、i、o、u。先听清这五个声音，之后遇到新词也能试着读。" },
            { type: "words", title: "五个旅行声音锚点", items: [
              { text: "mapa", ipa: "/ˈmapa/", meaning: "地图", label: "a" }, { text: "metro", ipa: "/ˈmetɾo/", meaning: "地铁", label: "e" },
              { text: "vino", ipa: "/ˈbino/", meaning: "葡萄酒", label: "i" }, { text: "hotel", ipa: "/oˈtel/", meaning: "酒店", label: "o" },
              { text: "uno", ipa: "/ˈuno/", meaning: "一", label: "u" }
            ] },
            { type: "try-first", text: "mapa", ipa: "/ˈmapa/", meaning: "地图", note: "把两个 a 读成相同、清楚的声音。" }
          ],
          practice: [
            { type: "listen-choice", prompt: "听音后选出刚才的词", audio: { text: "mapa" }, options: ["mapa", "moto", "metro"], answer: "mapa", explanation: "mapa 里两个 a 的声音都很稳定。" },
            { type: "choice", prompt: "初次看到西班牙语元音时，哪种做法更合适？", options: ["按英语规则猜", "先用五个稳定声音试读", "跳过不读"], answer: "先用五个稳定声音试读", explanation: "稳定的元音是西班牙语认读最有用的起点。" }
          ]
        },
        {
          id: "es-02", title: "两个元音可能连在一起", subtitle: "先听见 ia、ie、ue 的滑动",
          cards: [
            { type: "concept", title: "不要在每个元音中间停住", body: "i 或 u 和另一个元音相邻时，声音常会自然滑在一起。先模仿整词，不必急着背术语。" },
            { type: "words", title: "旅行中常见的组合", items: [
              { text: "gracias", ipa: "/ˈɡɾaθjas/", meaning: "谢谢", label: "ia" }, { text: "bien", ipa: "/bjen/", meaning: "好", label: "ie" },
              { text: "puerta", ipa: "/ˈpweɾta/", meaning: "门；登机口", label: "ue" }, { text: "Europa", ipa: "/ewˈɾopa/", meaning: "欧洲", label: "eu" }
            ] },
            { type: "try-first", text: "puerta", ipa: "/ˈpweɾta/", meaning: "门；登机口", note: "试着把 pue 连起来，不要拆成三个独立音。" }
          ],
          practice: [
            { type: "listen-choice", prompt: "哪个词与音频一致？", audio: { text: "puerta" }, options: ["puerta", "parada", "plaza"], answer: "puerta", explanation: "puerta 开头的 ue 会自然滑在一起。" },
            { type: "choice", prompt: "gracias 中 ia 更适合怎样读？", options: ["自然连起来", "中间长停顿", "只读 a"], answer: "自然连起来", explanation: "先模仿完整声音最实用。" }
          ]
        }
      ]
    },
    {
      id: "consonants", title: "认识最容易读错的字母", subtitle: "把熟悉字母换成西班牙的声音", lessons: [
        {
          id: "es-03", title: "h 不发音，j 要有摩擦", subtitle: "hotel 与 jamón 的关键区别",
          cards: [
            { type: "concept", title: "看见 h，通常安静地跳过", body: "西班牙语中的 h 通常不发音；j 则是喉部的摩擦音。先听整词，不要把 j 读成英语的 /dʒ/。" },
            { type: "words", title: "对比着听", items: [
              { text: "hotel", ipa: "/oˈtel/", meaning: "酒店", label: "h 不发音" }, { text: "hora", ipa: "/ˈoɾa/", meaning: "小时；时间", label: "h 不发音" },
              { text: "jamón", ipa: "/xaˈmon/", meaning: "火腿", label: "j /x/" }, { text: "tarjeta", ipa: "/taɾˈxeta/", meaning: "卡片", label: "j /x/" }
            ] },
            { type: "try-first", text: "hotel", ipa: "/oˈtel/", meaning: "酒店", note: "从 o 开始读，不要给 h 加声音。" }
          ],
          practice: [
            { type: "choice", prompt: "哪个词开头的 h 不发音？", options: ["hotel", "jamón", "metro"], answer: "hotel", explanation: "hotel 的 h 不发音。" },
            { type: "listen-choice", prompt: "听音后选词", audio: { text: "jamón" }, options: ["jamón", "jabón", "jardín"], answer: "jamón", explanation: "注意开头 j 的摩擦音和结尾重音。" }
          ]
        },
        {
          id: "es-04", title: "ñ、ll 和 y", subtitle: "先认出招牌与地名里的特殊声音",
          cards: [
            { type: "concept", title: "ñ 不是普通的 n", body: "ñ 的声音接近“尼”的起始音。西班牙许多地区的 ll 和 y 发音相同或非常接近，作为初学者先把它们当作同一条线索。" },
            { type: "words", title: "常见例词", items: [
              { text: "España", ipa: "/esˈpaɲa/", meaning: "西班牙", label: "ñ" }, { text: "baño", ipa: "/ˈbaɲo/", meaning: "卫生间", label: "ñ" },
              { text: "calle", ipa: "/ˈkaʝe/", meaning: "街道", label: "ll" }, { text: "playa", ipa: "/ˈplaʝa/", meaning: "海滩", label: "y" }
            ] },
            { type: "try-first", text: "baño", ipa: "/ˈbaɲo/", meaning: "卫生间", note: "把 ñ 当作一个完整声音，不要拆成 n 加 y。" }
          ],
          practice: [
            { type: "listen-choice", prompt: "听音后选词", audio: { text: "baño" }, options: ["baño", "banco", "barco"], answer: "baño", explanation: "baño 中间是 ñ /ɲ/。" },
            { type: "choice", prompt: "哪个词包含 ñ？", options: ["España", "calle", "playa"], answer: "España", explanation: "España 的 ñ 是西班牙语字母。" }
          ]
        },
        {
          id: "es-05", title: "c、z、g 会随邻居变化", subtitle: "按西班牙本土发音先听懂线索",
          cards: [
            { type: "concept", title: "先看后面跟着谁", body: "在西班牙多数地区，c 遇到 e、i 以及字母 z 常读 /θ/；g 遇到 e、i 时接近 j 的摩擦音。其他位置通常更接近 /k/ 或 /g/。" },
            { type: "words", title: "西班牙常见读法", items: [
              { text: "centro", ipa: "/ˈθentɾo/", meaning: "市中心", label: "ce" }, { text: "cinco", ipa: "/ˈθiŋko/", meaning: "五", label: "ci" },
              { text: "plaza", ipa: "/ˈplaθa/", meaning: "广场", label: "z" }, { text: "gente", ipa: "/ˈxente/", meaning: "人们", label: "ge" }
            ] },
            { type: "try-first", text: "centro", ipa: "/ˈθentɾo/", meaning: "市中心", note: "这是西班牙常见读法；在拉丁美洲通常会听到 /s/。" }
          ],
          practice: [
            { type: "choice", prompt: "按西班牙常见读法，哪个词含 /θ/？", options: ["cinco", "gato", "museo"], answer: "cinco", explanation: "c 在 i 前常读 /θ/。" },
            { type: "listen-choice", prompt: "听音后选词", audio: { text: "plaza" }, options: ["plaza", "playa", "plato"], answer: "plaza", explanation: "注意 z 的西班牙本土读法。" }
          ]
        }
      ]
    },
    {
      id: "rhythm", title: "读出西班牙语的节奏", subtitle: "重音写出来，也能从规则猜出来", lessons: [
        {
          id: "es-06", title: "重音符号会直接告诉你重点", subtitle: "看到 á、é、í、ó、ú 就重读",
          cards: [
            { type: "concept", title: "小斜线不是装饰", body: "元音上的重音符号会标出这一拍要读得更明显。它不会改变字母身份，但会改变单词节奏，有时还会区分词义。" },
            { type: "words", title: "看见重音位置", items: [
              { text: "estación", ipa: "/estaˈθjon/", meaning: "车站" }, { text: "teléfono", ipa: "/teˈlefono/", meaning: "电话" },
              { text: "médico", ipa: "/ˈmediko/", meaning: "医生" }, { text: "menú", ipa: "/meˈnu/", meaning: "菜单" }
            ] },
            { type: "try-first", text: "estación", ipa: "/estaˈθjon/", meaning: "车站", note: "把最后的 ción 读得更明显。" }
          ],
          practice: [
            { type: "choice", prompt: "teléfono 哪一部分重读？", options: ["te", "lé", "fono"], answer: "lé", explanation: "重音符号在 é 上。" },
            { type: "listen-choice", prompt: "听音后选词", audio: { text: "menú" }, options: ["menú", "mano", "mapa"], answer: "menú", explanation: "menú 的重音在最后。" }
          ]
        },
        {
          id: "es-07", title: "没有重音符号也能先猜", subtitle: "元音、n、s 结尾通常重读倒数第二拍",
          cards: [
            { type: "concept", title: "先用默认节奏，再用耳朵核对", body: "单词以元音、n 或 s 结尾时，通常重读倒数第二个音节；其他辅音结尾通常重读最后一个音节。规则有例外，例外常用重音符号标出。" },
            { type: "syllables", title: "分块找节奏", items: [
              { text: "metro", ipa: "/ˈmetɾo/", meaning: "地铁", chunks: ["me", "tro"] }, { text: "maleta", ipa: "/maˈleta/", meaning: "行李箱", chunks: ["ma", "le", "ta"] },
              { text: "hotel", ipa: "/oˈtel/", meaning: "酒店", chunks: ["ho", "tel"] }, { text: "Madrid", ipa: "/maˈðɾið/", meaning: "马德里", chunks: ["Ma", "drid"] }
            ] },
            { type: "try-first", text: "maleta", ipa: "/maˈleta/", meaning: "行李箱", note: "它以元音结尾，先把 le 这一拍读得更明显。" }
          ],
          practice: [
            { type: "choice", prompt: "maleta 的主要重音在哪一部分？", options: ["ma", "le", "ta"], answer: "le", explanation: "以元音结尾且无重音符号，通常重读倒数第二拍。" },
            { type: "choice", prompt: "hotel 更接近哪种分块？", options: ["ho · tel", "hot · e · l", "h · o · t"], answer: "ho · tel", explanation: "hotel 分为两拍，最后一拍更明显。" }
          ]
        }
      ]
    },
    {
      id: "travel-reading", title: "开始读旅行现场", subtitle: "菜单、交通牌和营业时间", lessons: [
        {
          id: "es-08", title: "一眼认出交通与方向", subtitle: "Salida、entrada、andén、calle",
          cards: [
            { type: "concept", title: "先找路牌上的核心词", body: "交通牌往往省略完整句子。先认出入口、出口、站台和街道，就能快速判断方向。" },
            { type: "words", title: "路上最常见的词", items: [
              { text: "salida", ipa: "/saˈliða/", meaning: "出口" }, { text: "entrada", ipa: "/enˈtɾaða/", meaning: "入口" },
              { text: "andén", ipa: "/anˈden/", meaning: "站台" }, { text: "calle", ipa: "/ˈkaʝe/", meaning: "街道" }, { text: "centro", ipa: "/ˈθentɾo/", meaning: "市中心" }
            ] },
            { type: "try-first", text: "salida", ipa: "/saˈliða/", meaning: "出口", note: "先分成 sa · li · da，再连起来。" }
          ],
          practice: [
            { type: "choice", prompt: "哪一个词表示“出口”？", options: ["salida", "entrada", "andén"], answer: "salida", explanation: "Salida 是旅行中非常值得一眼认出的词。" },
            { type: "listen-choice", prompt: "听音后选词", audio: { text: "andén" }, options: ["andén", "entrada", "autobús"], answer: "andén", explanation: "andén 的重音写在 é 上。" }
          ]
        },
        {
          id: "es-09", title: "读懂菜单上的高频词", subtitle: "不是背菜名，而是先找到点餐线索",
          cards: [
            { type: "concept", title: "西班牙的 carta 和 menú 不完全一样", body: "carta 通常指单点菜单；menú，尤其 menú del día，常指套餐。结账时可以说 la cuenta。" },
            { type: "words", title: "餐馆实用词", items: [
              { text: "carta", ipa: "/ˈkaɾta/", meaning: "单点菜单" }, { text: "menú del día", ipa: "/meˈnu ðel ˈdia/", meaning: "今日套餐" },
              { text: "para llevar", ipa: "/ˈpaɾa ʝeˈβaɾ/", meaning: "打包带走" }, { text: "la cuenta", ipa: "/la ˈkwenta/", meaning: "账单" }
            ] },
            { type: "try-first", text: "la cuenta", ipa: "/la ˈkwenta/", meaning: "账单", note: "ue 连起来读；结账时可以直接说 La cuenta, por favor." }
          ],
          practice: [
            { type: "choice", prompt: "想看单点菜单，更合适的词是？", options: ["carta", "cuenta", "salida"], answer: "carta", explanation: "在西班牙餐馆，carta 通常是单点菜单。" },
            { type: "listen-choice", prompt: "听音后选短语", audio: { text: "la cuenta" }, options: ["la cuenta", "la carta", "la puerta"], answer: "la cuenta", explanation: "la cuenta 是“账单”。" }
          ]
        }
      ]
    },
    {
      id: "real-speech", title: "适应西班牙真人表达", subtitle: "常用短句、礼貌和自然语速", lessons: [
        {
          id: "es-10", title: "先会听懂 vale", subtitle: "西班牙日常交流里的高频确认词",
          cards: [
            { type: "concept", title: "vale 可以理解为“好、行、明白”", body: "在西班牙，vale 出现得非常频繁。它常用于接受建议、确认安排或表示听懂，语气通常自然、不生硬。" },
            { type: "phrases", title: "把 vale 放进真实对话", items: [
              { text: "Vale.", meaning: "好的。" }, { text: "Vale, gracias.", meaning: "好的，谢谢。" },
              { text: "¿A las ocho? Vale.", meaning: "八点吗？好的。" }
            ] },
            { type: "try-first", text: "Vale, gracias.", ipa: "/ˈbale ˈɡɾaθjas/", meaning: "好的，谢谢。", note: "先自然说完整句，再听慢速与自然语速。", dualSpeed: true }
          ],
          practice: [
            { type: "choice", prompt: "在西班牙，vale 常表示什么？", options: ["好的、明白", "再见", "不知道"], answer: "好的、明白", explanation: "vale 是非常高频的确认表达。" },
            { type: "listen-choice", prompt: "听自然语速，选出对应内容", audio: { text: "Vale, gracias.", rate: "natural" }, options: ["Vale, gracias.", "Hola, buenos días.", "No lo sé."], answer: "Vale, gracias.", explanation: "先抓住 vale，再听 gracias。" }
          ]
        },
        {
          id: "es-11", title: "用礼貌句型把需求说完整", subtitle: "Quisiera、¿Puede…?、por favor",
          cards: [
            { type: "concept", title: "记句框，比只记一个动词更好用", body: "Quisiera… 可以礼貌表达“我想要……”，¿Puede…? 用来请求对方帮忙，句尾加 por favor 会更自然。" },
            { type: "phrases", title: "三个万能句框", items: [
              { text: "Quisiera esto, por favor.", meaning: "我想要这个。" }, { text: "¿Puede ayudarme?", meaning: "您能帮我吗？" },
              { text: "¿Puede repetirlo?", meaning: "您能再说一遍吗？" }
            ] },
            { type: "try-first", text: "¿Puede ayudarme?", ipa: "/ˈpweðe aʝuˈðaɾme/", meaning: "您能帮我吗？", note: "问号前的倒问号也属于正式拼写。", dualSpeed: true }
          ],
          practice: [
            { type: "choice", prompt: "想礼貌表达“我想要这个”，哪一句更合适？", options: ["Quisiera esto, por favor.", "¿Dónde está?", "No hay."], answer: "Quisiera esto, por favor.", explanation: "Quisiera… 是旅行中很好用的礼貌句框。" },
            { type: "listen-choice", prompt: "听自然语速，选出对应句子", audio: { text: "¿Puede repetirlo?", rate: "natural" }, options: ["¿Puede repetirlo?", "¿Puede ayudarme?", "¿Cuánto cuesta?"], answer: "¿Puede repetirlo?", explanation: "没听清时可以直接用这句话。" }
          ]
        },
        {
          id: "es-12", title: "真人语速里，词会自然连起来", subtitle: "先抓重音和关键词，不追每个字母",
          cards: [
            { type: "concept", title: "听不见空格很正常", body: "相邻单词的元音和辅音会自然衔接。先抓住重读词和场景关键词，再逐步补齐整句。" },
            { type: "phrases", title: "慢速与自然语速", items: [
              { text: "¿Dónde está el metro?", meaning: "地铁在哪里？" }, { text: "Una mesa para dos.", meaning: "两个人的桌位。" },
              { text: "No hablo español.", meaning: "我不会说西班牙语。" }
            ] },
            { type: "try-first", text: "¿Dónde está el metro?", ipa: "/ˈdonde esˈta el ˈmetɾo/", meaning: "地铁在哪里？", note: "先抓 dónde、metro，再听中间怎样连起来。", dualSpeed: true }
          ],
          practice: [
            { type: "listen-choice", prompt: "听自然语速，选出对应句子", audio: { text: "¿Dónde está el metro?", rate: "natural" }, options: ["¿Dónde está el metro?", "¿Cuánto cuesta?", "¿Tiene una mesa?"], answer: "¿Dónde está el metro?", explanation: "先抓住 dónde 和 metro 两个关键词。" },
            { type: "choice", prompt: "听真人西班牙语时，更实用的第一步是？", options: ["先抓重音和关键词", "要求每个词完全分开", "只看中文谐音"], answer: "先抓重音和关键词", explanation: "真实语流有连接，关键词能先帮你判断意思。" }
          ]
        }
      ]
    }
  ],
  placement: [
    { category: "元音与拼读", type: "listen-choice", prompt: "听音后选词", audio: { text: "mapa" }, options: ["mapa", "moto", "metro"], answer: "mapa" },
    { category: "元音与拼读", type: "choice", prompt: "哪个词包含自然连读的 ue？", options: ["puerta", "mapa", "vino"], answer: "puerta" },
    { category: "字母线索", type: "choice", prompt: "哪个词的 h 不发音？", options: ["hotel", "jamón", "metro"], answer: "hotel" },
    { category: "字母线索", type: "listen-choice", prompt: "听音后选词", audio: { text: "baño" }, options: ["baño", "banco", "barco"], answer: "baño" },
    { category: "字母线索", type: "choice", prompt: "按西班牙常见读法，哪个词含 /θ/？", options: ["cinco", "gato", "museo"], answer: "cinco" },
    { category: "重音节奏", type: "choice", prompt: "teléfono 哪一部分重读？", options: ["te", "lé", "fono"], answer: "lé" },
    { category: "重音节奏", type: "choice", prompt: "maleta 的主要重音在哪一部分？", options: ["ma", "le", "ta"], answer: "le" },
    { category: "旅行认读", type: "choice", prompt: "哪个词表示“出口”？", options: ["salida", "entrada", "andén"], answer: "salida" },
    { category: "旅行认读", type: "choice", prompt: "在西班牙餐馆，单点菜单通常叫？", options: ["carta", "cuenta", "salida"], answer: "carta" },
    { category: "真实听感", type: "choice", prompt: "vale 常表示什么？", options: ["好的、明白", "再见", "不知道"], answer: "好的、明白" },
    { category: "真实听感", type: "listen-choice", prompt: "听自然语速，选句子", audio: { text: "¿Puede repetirlo?", rate: "natural" }, options: ["¿Puede repetirlo?", "¿Puede ayudarme?", "¿Cuánto cuesta?"], answer: "¿Puede repetirlo?" },
    { category: "真实听感", type: "listen-choice", prompt: "听自然语速，选句子", audio: { text: "¿Dónde está el metro?", rate: "natural" }, options: ["¿Dónde está el metro?", "¿Cuánto cuesta?", "¿Tiene una mesa?"], answer: "¿Dónde está el metro?" }
  ],
  challenge: [
    { text: "mapa", ipa: "/ˈmapa/", meaning: "地图" }, { text: "baño", ipa: "/ˈbaɲo/", meaning: "卫生间" },
    { text: "estación", ipa: "/estaˈθjon/", meaning: "车站" }, { text: "salida", ipa: "/saˈliða/", meaning: "出口" },
    { text: "Vale, gracias.", ipa: "/ˈbale ˈɡɾaθjas/", meaning: "好的，谢谢。" },
    { text: "¿Dónde está el metro?", ipa: "/ˈdonde esˈta el ˈmetɾo/", meaning: "地铁在哪里？" }
  ]
});
