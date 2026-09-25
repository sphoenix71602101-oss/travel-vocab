(function () {
  "use strict";
  const words = (title, items) => ({ type: "words", title, items });
  const concept = (title, body) => ({ type: "concept", title, body });
  const attempt = (text, ipa, meaning, note, dualSpeed = false) => ({ type: "try-first", text, ipa, meaning, note, dualSpeed });
  const choice = (prompt, options, answer, explanation) => ({ type: "choice", prompt, options, answer, explanation });
  const listen = (prompt, text, options, answer, explanation, rate = "clear") => ({ type: "listen-choice", prompt, audio: { text, rate }, options, answer, explanation });
  window.ES_BEGINNER_DATA = Object.freeze({
    stages: [
      { id: "vowels", title: "先抓住稳定的元音", subtitle: "从单个声音走到连续拼读", lessons: [
        { id: "es-01", title: "a、e、i、o、u 基本不变", subtitle: "建立五个可靠的声音锚点", cards: [
          concept("看到元音，就大胆读", "西班牙语五个元音通常比英语稳定。先把字母和声音直接连起来，不借助中文谐音。"),
          words("五个声音锚点", [
            { text: "mapa", ipa: "/ˈmapa/", meaning: "地图" }, { text: "metro", ipa: "/ˈmetɾo/", meaning: "地铁" },
            { text: "vino", ipa: "/ˈbino/", meaning: "葡萄酒" }, { text: "moto", ipa: "/ˈmoto/", meaning: "摩托车" }, { text: "uno", ipa: "/ˈuno/", meaning: "一" }
          ]), attempt("mapa", "/ˈmapa/", "地图", "按 m-a-p-a 连续读出，不要念字母名称。")
        ], practice: [listen("听音后选出对应单词", "mapa", ["mapa", "moto", "metro"], "mapa", "a 始终保持清晰的 /a/。"), choice("元音入门时更适合怎样练？", ["保持稳定短促", "按英语元音变化", "念字母名称"], "保持稳定短促", "五个元音是后续拼读的稳定锚点。") ] },
        { id: "es-02", title: "相邻元音要顺滑连接", subtitle: "认识 ia、ie、ue 等常见组合", cards: [
          concept("声音滑过去，不在中间停住", "i 或 u 与另一个元音相邻时常形成连续滑动。先模仿整词，再观察字母组合。"),
          words("常见元音组合", [{ text: "viaje", ipa: "/ˈbjaχe/", meaning: "旅行" }, { text: "tiene", ipa: "/ˈtjene/", meaning: "有" }, { text: "puerta", ipa: "/ˈpweɾta/", meaning: "门" }]),
          attempt("puerta", "/ˈpweɾta/", "门", "ue 连续滑过，不拆成两个孤立声音。")
        ], practice: [listen("听音后选出对应单词", "puerta", ["puerta", "parte", "pista"], "puerta", "puerta 开头包含顺滑的 /pwe/。"), choice("读 viaje 时，ia 应怎样处理？", ["自然连起来", "中间停顿", "只读 a"], "自然连起来", "相邻元音需要保持连续。") ] }
      ] },
      { id: "letters", title: "掌握会改变读法的字母", subtitle: "按邻近字母判断声音", lessons: [
        { id: "es-03", title: "h 不发音，j 有摩擦", subtitle: "不要按英语方式猜", cards: [
          concept("h 通常安静，j 从喉部摩擦", "h 通常不单独发音；j 在西班牙西语中是明显的喉部摩擦音。"),
          words("对比着听", [{ text: "hotel", ipa: "/oˈtel/", meaning: "酒店" }, { text: "hora", ipa: "/ˈoɾa/", meaning: "小时" }, { text: "jamón", ipa: "/χaˈmon/", meaning: "火腿" }]),
          attempt("hotel", "/oˈtel/", "酒店", "从 o 开始读，不给 h 添加声音。")
        ], practice: [choice("哪个词开头的 h 不发音？", ["hotel", "jamón", "metro"], "hotel", "hotel 实际从元音 o 开始。"), listen("听音后选词", "jamón", ["jamón", "hotel", "metro"], "jamón", "j 带有明显摩擦。") ] },
        { id: "es-04", title: "ñ、ll 和 y", subtitle: "认识三个高频声音线索", cards: [
          concept("ñ 不是普通 n", "ñ 接近 /ɲ/。在西班牙许多地区，ll 与 y 的读音相同或接近，初学时可先作为同一类线索。"),
          words("看拼写听声音", [{ text: "baño", ipa: "/ˈbaɲo/", meaning: "卫生间" }, { text: "calle", ipa: "/ˈkaʝe/", meaning: "街道" }, { text: "playa", ipa: "/ˈplaʝa/", meaning: "海滩" }]),
          attempt("baño", "/ˈbaɲo/", "卫生间", "把 ñ 当成一个整体声音。")
        ], practice: [listen("听音后选词", "baño", ["baño", "banco", "barco"], "baño", "ñ 对应 /ɲ/。"), choice("哪个词包含 ll？", ["calle", "playa", "baño"], "calle", "calle 中 ll 在许多地区接近 y 的声音。") ] },
        { id: "es-05", title: "c、z 和 qu", subtitle: "按西班牙本土读法判断", cards: [
          concept("先看 c 后面跟谁", "c 在 e、i 前以及 z 通常读 /θ/；c 在其他位置以及 qu 在 e、i 前通常读 /k/，qu 中的 u 不发音。"),
          words("两条读音路线", [{ text: "centro", ipa: "/ˈθentɾo/", meaning: "中心" }, { text: "cinco", ipa: "/ˈθinko/", meaning: "五" }, { text: "casa", ipa: "/ˈkasa/", meaning: "房子" }, { text: "queso", ipa: "/ˈkeso/", meaning: "奶酪" }]),
          attempt("queso", "/ˈkeso/", "奶酪", "qu 合起来给出 /k/，u 不单独发音。")
        ], practice: [choice("哪个词中的 qu 读 /k/？", ["queso", "centro", "plaza"], "queso", "que 中 u 不发音。"), listen("听音后选词", "cinco", ["cinco", "casa", "queso"], "cinco", "西班牙常见读法中 ci 开头是 /θi/。") ] },
        { id: "es-06", title: "g、gu 和 gü", subtitle: "u 有时安静，有时要读", cards: [
          concept("e、i 会改变 g 的读法", "g 在 e、i 前接近 j 的摩擦音；gue、gui 中 u 通常不发音；ü 明确告诉你 u 要读出来。"),
          words("看清 u 上有没有两点", [{ text: "gente", ipa: "/ˈχente/", meaning: "人们" }, { text: "guitarra", ipa: "/ɡiˈtara/", meaning: "吉他" }, { text: "pingüino", ipa: "/piŋˈɡwino/", meaning: "企鹅" }]),
          attempt("pingüino", "/piŋˈɡwino/", "企鹅", "ü 表示 u 的声音必须保留。")
        ], practice: [choice("哪个词中的 u 需要读出来？", ["pingüino", "guitarra", "guerra"], "pingüino", "ü 上的两点表示 u 要发音。"), listen("听音后选词", "guitarra", ["guitarra", "gente", "jamón"], "guitarra", "gui 中 u 不发音，开头接近 /ɡi/。") ] },
        { id: "es-07", title: "单 r、rr 与词首 r", subtitle: "分清轻触音和颤音", cards: [
          concept("位置决定 r 的力度", "元音之间的单 r 通常轻触一次；rr 与词首 r 通常更强。重点先放在听出差别。"),
          words("三种常见位置", [{ text: "pero", ipa: "/ˈpeɾo/", meaning: "但是" }, { text: "perro", ipa: "/ˈpero/", meaning: "狗" }, { text: "radio", ipa: "/ˈraðjo/", meaning: "收音机" }]),
          attempt("perro", "/ˈpero/", "狗", "rr 比 pero 中的单 r 更有连续颤动。")
        ], practice: [listen("听音后选词", "perro", ["perro", "pero", "pelo"], "perro", "perro 中 rr 是较强的颤音。"), choice("哪个位置通常使用较强的 r 音？", ["词首 r", "元音间单 r", "字母 l"], "词首 r", "词首 r 与 rr 通常更强。") ] }
      ] },
      { id: "stress", title: "找到单词的节奏", subtitle: "从重音符号到默认规则", lessons: [
        { id: "es-08", title: "重音符号直接标出重点", subtitle: "á、é、í、ó、ú 都要看见", cards: [
          concept("小斜线标出重读音节", "重音符号不会改变字母身份，却会告诉你哪一拍最明显。"),
          words("看见重读位置", [{ text: "estación", ipa: "/estaˈθjon/", meaning: "车站" }, { text: "teléfono", ipa: "/teˈlefono/", meaning: "电话" }, { text: "médico", ipa: "/ˈmeðiko/", meaning: "医生" }]),
          attempt("estación", "/estaˈθjon/", "车站", "重音落在 ón。")
        ], practice: [choice("teléfono 哪一部分重读？", ["te", "lé", "fono"], "lé", "é 上的重音符号直接标出重读。"), listen("听音后选词", "estación", ["estación", "estancia", "entrada"], "estación", "最后的 ón 最明显。") ] },
        { id: "es-09", title: "没有符号也能先猜重音", subtitle: "根据结尾使用默认规则", cards: [
          concept("先用规则，再用耳朵核对", "元音、n、s 结尾通常重读倒数第二个音节；其他辅音结尾通常重读最后一个音节。"),
          { type: "syllables", title: "分块找重音", items: [
            { text: "maleta", chunks: ["ma", "le", "ta"], ipa: "/maˈleta/", meaning: "行李箱" }, { text: "Madrid", chunks: ["Ma", "drid"], ipa: "/maˈðɾið/", meaning: "马德里" }, { text: "hotel", chunks: ["ho", "tel"], ipa: "/oˈtel/", meaning: "酒店" }
          ] }, attempt("maleta", "/maˈleta/", "行李箱", "以元音结尾，先猜倒数第二拍。")
        ], practice: [choice("maleta 的主要重音在哪一部分？", ["ma", "le", "ta"], "le", "元音结尾通常重读倒数第二个音节。"), choice("Madrid 的默认重音通常在哪里？", ["最后一拍", "第一拍", "每拍一样"], "最后一拍", "以 d 结尾，通常重读最后一个音节。") ] }
      ] },
      { id: "word-reading", title: "独立读出更长的单词", subtitle: "用音节分块保持连续", lessons: [
        { id: "es-10", title: "把长单词分成音节", subtitle: "分块是读音辅助，不改变拼写", cards: [
          concept("先分块，再重新连起来", "每个音节围绕元音展开。练习时可以短暂分块，最后仍要连续读成一个单词。"),
          { type: "syllables", title: "三组长词", items: [
            { text: "aeropuerto", chunks: ["a", "e", "ro", "puer", "to"], ipa: "/aeɾoˈpweɾto/", meaning: "机场" }, { text: "información", chunks: ["in", "for", "ma", "ción"], ipa: "/infoɾmaˈθjon/", meaning: "信息" }, { text: "restaurante", chunks: ["res", "tau", "ran", "te"], ipa: "/restauˈɾante/", meaning: "餐厅" }
          ] }, attempt("aeropuerto", "/aeɾoˈpweɾto/", "机场", "分块找准声音后，再一次连读完整词。")
        ], practice: [choice("哪一种是 información 的合理分块？", ["in-for-ma-ción", "i-nf-or-mación", "info-rmación"], "in-for-ma-ción", "每个音节都围绕元音形成。"), listen("听音后选词", "aeropuerto", ["aeropuerto", "apartamento", "autobús"], "aeropuerto", "先抓结尾 puerto 的声音。") ] }
      ] },
      { id: "sentence-reading", title: "把单词连成短句", subtitle: "只练声音衔接、重音和停顿", lessons: [
        { id: "es-11", title: "相邻单词会自然衔接", subtitle: "空格不一定对应声音停顿", cards: [
          concept("保持气流，不逐词停住", "前一个词结尾与后一个词开头会自然连接。这里只观察声音，不讲句子的使用场景。"),
          { type: "phrases", title: "慢速与自然语速", items: [{ text: "Veo una avenida.", meaning: "只作连读练习" }, { text: "El hotel está abierto.", meaning: "只作连读练习" }, { text: "Ana usa el metro.", meaning: "只作连读练习" }] },
          attempt("Ana usa el metro.", "/ˈana ˈusa el ˈmetɾo/", "只作连读练习", "先逐词读准，再保持连续气流。", true)
        ], practice: [listen("听自然语速，选出对应文字", "Ana usa el metro.", ["Ana usa el metro.", "Ana mira el mapa.", "El metro está lejos."], "Ana usa el metro.", "注意 usa 与 el 之间没有明显停顿。", "natural"), choice("短句认读时，空格应怎样处理？", ["按词组自然衔接", "每个空格都长停顿", "忽略单词重音"], "按词组自然衔接", "书写空格不等于声音必须断开。") ] },
        { id: "es-12", title: "用重音和标点读完整短句", subtitle: "从慢速拼读走向自然节奏", cards: [
          concept("重读词清楚，逗号处短停", "先读准每个单词，再让重读音节更清楚；句号和逗号帮助安排停顿。"),
          { type: "phrases", title: "两种速度核对", items: [{ text: "Mi maleta es pequeña.", meaning: "只作节奏练习" }, { text: "Carlos mira el teléfono.", meaning: "只作节奏练习" }, { text: "Marta, mira el mapa.", meaning: "只作停顿练习" }] },
          attempt("Marta, mira el mapa.", "/ˈmaɾta ˈmiɾa el ˈmapa/", "只作停顿练习", "逗号处短暂停顿，其余部分保持连贯。", true)
        ], practice: [listen("听自然语速，选出对应文字", "Marta, mira el mapa.", ["Marta, mira el mapa.", "Marta mira la maleta.", "Carlos mira el mapa."], "Marta, mira el mapa.", "先抓三个重读位置，再核对逗号停顿。", "natural"), choice("读带逗号的短句时应怎样做？", ["逗号处短停", "每个音节都停", "完全忽略重音"], "逗号处短停", "标点帮助组织节奏。") ] }
      ] }
    ],
    placement: [
      { category: "声音辨识", type: "listen-choice", prompt: "听音后选词", audio: { text: "mapa" }, options: ["mapa", "moto", "metro"], answer: "mapa" },
      { category: "声音辨识", type: "listen-choice", prompt: "听音后选词", audio: { text: "baño" }, options: ["baño", "banco", "barco"], answer: "baño" },
      { category: "拼读规律", type: "choice", prompt: "哪个词中的 qu 读 /k/？", options: ["queso", "centro", "plaza"], answer: "queso" },
      { category: "拼读规律", type: "choice", prompt: "哪个词中的 ü 表示 u 要发音？", options: ["pingüino", "guitarra", "guerra"], answer: "pingüino" },
      { category: "拼读规律", type: "choice", prompt: "哪个词包含较强的 rr？", options: ["perro", "pero", "pelo"], answer: "perro" },
      { category: "音节与重音", type: "choice", prompt: "teléfono 哪一部分重读？", options: ["te", "lé", "fono"], answer: "lé" },
      { category: "音节与重音", type: "choice", prompt: "maleta 的主要重音在哪一部分？", options: ["ma", "le", "ta"], answer: "le" },
      { category: "音节与重音", type: "choice", prompt: "哪一种是 información 的合理分块？", options: ["in-for-ma-ción", "i-nf-or-mación", "info-rmación"], answer: "in-for-ma-ción" },
      { category: "真实听感", type: "listen-choice", prompt: "听自然语速，选出对应文字", audio: { text: "Ana usa el metro.", rate: "natural" }, options: ["Ana usa el metro.", "Ana mira el mapa.", "El metro está lejos."], answer: "Ana usa el metro." },
      { category: "真实听感", type: "listen-choice", prompt: "听自然语速，选出对应文字", audio: { text: "Marta, mira el mapa.", rate: "natural" }, options: ["Marta, mira el mapa.", "Marta mira la maleta.", "Carlos mira el mapa."], answer: "Marta, mira el mapa." },
      { category: "真实听感", type: "choice", prompt: "短句中的空格应怎样处理？", options: ["按词组自然衔接", "每处长停", "忽略重音"], answer: "按词组自然衔接" },
      { category: "真实听感", type: "choice", prompt: "逗号通常提示什么？", options: ["短暂停顿", "改变元音", "重读每个词"], answer: "短暂停顿" }
    ],
    challenge: [
      { text: "pingüino", ipa: "/piŋˈɡwino/", meaning: "企鹅" }, { text: "perro", ipa: "/ˈpero/", meaning: "狗" },
      { text: "información", ipa: "/infoɾmaˈθjon/", meaning: "信息" }, { text: "aeropuerto", ipa: "/aeɾoˈpweɾto/", meaning: "机场" },
      { text: "Ana usa el metro.", ipa: "/ˈana ˈusa el ˈmetɾo/", meaning: "只作连读练习" }, { text: "Marta, mira el mapa.", ipa: "/ˈmaɾta ˈmiɾa el ˈmapa/", meaning: "只作停顿练习" }
    ]
  });
}());
