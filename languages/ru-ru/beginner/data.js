// 面向中文零基础旅行者的俄语认读课程。重音符号只用于教学提示。
window.RU_BEGINNER_DATA = Object.freeze({
  stages: [
    { id: "alphabet", title: "先拆掉西里尔字母的陌生感", subtitle: "认形、避开假朋友，再补齐旅行高频字母", lessons: [
      { id: "ru-01", title: "五个一眼就会的字母", subtitle: "А К М О Т 与拉丁字母读音接近", note: "先建立信心：这些字母的外形和基本读音都很熟悉。", items: [
        { text: "А · К · М", parts: "a · k · m", pronunciation: "a · k · m", meaning: "熟悉的外形和声音", audioId: "ru-001" },
        { text: "О · Т", parts: "o · t", pronunciation: "o · t", meaning: "熟悉的外形和声音", audioId: "ru-002" },
        { text: "том", parts: "т · о · м", pronunciation: "tom", meaning: "卷、册", audioId: "ru-003" }
      ], practice: { prompt: "哪个字母通常读 m？", options: ["М", "Н", "Р"], answer: "М", explanation: "М 的外形和读音都与拉丁字母 M 接近。" } },
      { id: "ru-02", title: "六个最会骗人的字母", subtitle: "В Н Р С У Х 不能按英语猜", note: "把它们当成新的声音：v、n、r、s、u、kh。", items: [
        { text: "В · Н · Р", parts: "v · n · r", pronunciation: "v · n · r", meaning: "外形熟悉，声音不同", audioId: "ru-004" },
        { text: "С · У · Х", parts: "s · u · kh", pronunciation: "s · u · kh", meaning: "不要按 c、y、x 猜", audioId: "ru-005" },
        { text: "метро", parts: "м · е · т · р · о", pronunciation: "metró", meaning: "地铁", audioId: "ru-006" }
      ], practice: { prompt: "俄文字母 Р 通常对应哪个声音？", options: ["r", "p", "b"], answer: "r", explanation: "Р 看起来像 P，但表示颤音 r。" } },
      { id: "ru-03", title: "把常见辅音补起来", subtitle: "Б Г Д Л П Ф З Й", note: "先认旅行词里最常出现的一组，不必一次背完整张字母表。", items: [
        { text: "Б · Г · Д · З", parts: "b · g · d · z", pronunciation: "b · g · d · z", meaning: "四个浊辅音", audioId: "ru-007" },
        { text: "Л · П · Ф · Й", parts: "l · p · f · y", pronunciation: "l · p · f · y", meaning: "四个高频辅音", audioId: "ru-008" },
        { text: "билет", parts: "б · и · л · е · т", pronunciation: "bilét", meaning: "票", audioId: "ru-009" }
      ], practice: { prompt: "「билет」是什么意思？", options: ["票", "护照", "出口"], answer: "票", explanation: "билет 是车票、门票等各种票的通用词。" } },
      { id: "ru-04", title: "认识俄语特有的辅音", subtitle: "Ж Ц Ч Ш Щ", note: "这组字母在路牌和常用词里很常见，先记整体声音。", items: [
        { text: "Ж · Ш", parts: "zh · sh", pronunciation: "zh · sh", meaning: "两个摩擦音", audioId: "ru-010" },
        { text: "Ц · Ч · Щ", parts: "ts · ch · shch", pronunciation: "ts · ch · shch", meaning: "三个组合音", audioId: "ru-011" },
        { text: "багаж", parts: "ба · гаж", pronunciation: "bagázh", meaning: "行李", audioId: "ru-012" }
      ], practice: { prompt: "哪个字母通常读 sh？", options: ["Ш", "Ж", "Ч"], answer: "Ш", explanation: "Ш 对应 sh；Ж 更接近 zh。" } }
    ] },
    { id: "decoding", title: "开始真正拼读", subtitle: "元音、软化字母和软硬音符号", lessons: [
      { id: "ru-05", title: "五个直接元音", subtitle: "А Э И О У", note: "先听清基本元音；真实口语里非重读元音稍后再处理。", items: [
        { text: "А · Э · И", parts: "a · e · i", pronunciation: "a · e · i", meaning: "三个基本元音", audioId: "ru-013" },
        { text: "О · У", parts: "o · u", pronunciation: "o · u", meaning: "两个圆唇元音", audioId: "ru-014" },
        { text: "такси", parts: "так · си", pronunciation: "taksí", meaning: "出租车", audioId: "ru-015" }
      ], practice: { prompt: "「такси」是什么意思？", options: ["出租车", "地铁", "车站"], answer: "出租车", explanation: "такси 与英语 taxi 很像，重音在最后。" } },
      { id: "ru-06", title: "Я Е Ё Ю 会带出 y 音", subtitle: "先听 ya、ye、yo、yu", note: "在词首或元音后，它们常带出 y；在辅音后还会提示辅音变软。", items: [
        { text: "Я · Е", parts: "ya · ye", pronunciation: "ya · ye", meaning: "带 y 的元音", audioId: "ru-016" },
        { text: "Ё · Ю", parts: "yo · yu", pronunciation: "yo · yu", meaning: "带 y 的元音", audioId: "ru-017" },
        { text: "еда", parts: "е · да", pronunciation: "yedá", meaning: "食物", audioId: "ru-018" }
      ], practice: { prompt: "词首的 Е 通常更接近哪个读法？", options: ["ye", "e", "yo"], answer: "ye", explanation: "例如 еда 开头读作 ye。" } },
      { id: "ru-07", title: "Ы 和 И 要分开", subtitle: "两个都不是中文里完全相同的音", note: "不要追求一次完美；先靠整词音频建立区别。", items: [
        { text: "И", parts: "i", pronunciation: "i", meaning: "较靠前的元音", audioId: "ru-019" },
        { text: "Ы", parts: "y", pronunciation: "y", meaning: "较靠后的俄语元音", audioId: "ru-020" },
        { text: "выход", parts: "вы · ход", pronunciation: "výkhod", meaning: "出口", audioId: "ru-021" }
      ], practice: { prompt: "看到「ВЫХОД」应该找什么？", options: ["出口", "入口", "售票处"], answer: "出口", explanation: "ВЫХОД 是路牌上最重要的词之一。" } },
      { id: "ru-08", title: "Ь 和 Ъ 本身不单独发音", subtitle: "软音符号与硬音符号", note: "它们主要影响相邻字母的读法；初学阶段先学会看见而不强读。", items: [
        { text: "Ь", parts: "мягкий знак", pronunciation: "myágkiy znak", meaning: "软音符号", audioId: "ru-022" },
        { text: "Ъ", parts: "твёрдый знак", pronunciation: "tvyórdyy znak", meaning: "硬音符号", audioId: "ru-023" },
        { text: "дверь", parts: "дверь", pronunciation: "dver'", meaning: "门", audioId: "ru-024" }
      ], practice: { prompt: "Ь 应该怎样处理？", options: ["不单独发音，提示前音变软", "固定读 i", "固定读 y"], answer: "不单独发音，提示前音变软", explanation: "它是读音提示符号，不是独立元音。" } }
    ] },
    { id: "real-speech", title: "从拼字走向真实读音", subtitle: "重音、弱化和辅音变化", lessons: [
      { id: "ru-09", title: "重音决定单词怎么听", subtitle: "教学转写用重音符号标出重点", note: "俄文日常书写通常不标重音，所以每个新词都要连同声音一起记。", items: [
        { text: "вокза́л", parts: "вок · зал", pronunciation: "vokzál", meaning: "火车站", audioId: "ru-025" },
        { text: "апте́ка", parts: "ап · те · ка", pronunciation: "aptéka", meaning: "药店", audioId: "ru-026" },
        { text: "рестора́н", parts: "рес · то · ран", pronunciation: "restorán", meaning: "餐厅", audioId: "ru-027" }
      ], practice: { prompt: "俄文路牌通常会标出重音吗？", options: ["通常不会", "每个词都会", "只有地名不会"], answer: "通常不会", explanation: "课程里的重音符号是学习辅助，真实路牌通常省略。" } },
      { id: "ru-10", title: "非重读 О 常听起来接近 А", subtitle: "先认拼写，再接受声音变化", note: "不要把每个 о 都机械读成清晰的 o；整词音频更可靠。", items: [
        { text: "Москва́", parts: "Мос · ква", pronunciation: "Maskvá", meaning: "莫斯科", audioId: "ru-028" },
        { text: "хорошо́", parts: "хо · ро · шо", pronunciation: "kharashó", meaning: "好、可以", audioId: "ru-029" },
        { text: "молоко́", parts: "мо · ло · ко", pronunciation: "malakó", meaning: "牛奶", audioId: "ru-030" }
      ], practice: { prompt: "「Москва」更接近哪个实际听感？", options: ["Maskvá", "Moskva 每个 o 都很清楚", "Muskva"], answer: "Maskvá", explanation: "第一个 о 不受重读，常弱化得接近 a。" } },
      { id: "ru-11", title: "词尾和相邻辅音会互相影响", subtitle: "先记整词，不必背术语", note: "词尾浊辅音可能听起来变清；旅行中以听懂整词为目标。", items: [
        { text: "багаж", parts: "ба · гаж", pronunciation: "bagásh", meaning: "行李（词尾听感接近 sh）", audioId: "ru-031" },
        { text: "вокзал", parts: "вок · зал", pronunciation: "vagzál", meaning: "火车站", audioId: "ru-032" },
        { text: "вход", parts: "вход", pronunciation: "fkhod", meaning: "入口", audioId: "ru-033" }
      ], practice: { prompt: "遇到辅音变化时最可靠的核对方式是？", options: ["听完整词音频", "只按字母逐个念", "改写成中文谐音"], answer: "听完整词音频", explanation: "转写只是扶手，整词音频更接近真实俄语。" } }
    ] },
    { id: "travel-reading", title: "把俄文用在旅行现场", subtitle: "先认标识，再读服务场景", lessons: [
      { id: "ru-12", title: "先认六个方向标识", subtitle: "不必组成句子也能找到路", note: "优先直接建立“俄文形状—含义”的联系。", items: [
        { text: "ВХОД · ВЫХОД", parts: "入口 · 出口", pronunciation: "vkhod · výkhod", meaning: "入口 · 出口", audioId: "ru-034" },
        { text: "МЕТРО · ВОКЗАЛ", parts: "地铁 · 火车站", pronunciation: "metró · vokzál", meaning: "地铁 · 火车站", audioId: "ru-035" },
        { text: "ТУАЛЕТ · АПТЕКА", parts: "洗手间 · 药店", pronunciation: "tualét · aptéka", meaning: "洗手间 · 药店", audioId: "ru-036" }
      ], practice: { prompt: "看到「АПТЕКА」应该找什么？", options: ["药店", "医院", "餐厅"], answer: "药店", explanation: "АПТЕКА 是药店。" } },
      { id: "ru-13", title: "读懂票务、菜单和付款", subtitle: "识别柜台上最有用的词", note: "这些词常单独出现在按钮、票据和招牌上。", items: [
        { text: "КАССА · БИЛЕТ", parts: "收银/售票处 · 票", pronunciation: "kássa · bilét", meaning: "收银/售票处 · 票", audioId: "ru-037" },
        { text: "МЕНЮ · СЧЁТ", parts: "菜单 · 账单", pronunciation: "menyú · shchyot", meaning: "菜单 · 账单", audioId: "ru-038" },
        { text: "НАЛИЧНЫЕ · КАРТА", parts: "现金 · 卡", pronunciation: "nalíchnyye · kárta", meaning: "现金 · 卡", audioId: "ru-039" }
      ], practice: { prompt: "结账时看到「СЧЁТ」指什么？", options: ["账单", "菜单", "小费"], answer: "账单", explanation: "可以说 Счёт, пожалуйста. 请求结账。" } }
    ] },
    { id: "survival", title: "开口完成一次真实沟通", subtitle: "礼貌句型与自然语速", lessons: [
      { id: "ru-14", title: "用礼貌框架提出需求", subtitle: "Извините 与 Пожалуйста", note: "对陌生人先说 Извините，再使用请求句和 Пожалуйста，安全而自然。", items: [
        { text: "Извините.", parts: "引起注意 / 不好意思", pronunciation: "Izviníte.", meaning: "不好意思。", audioId: "ru-040" },
        { text: "Скажите, пожалуйста…", parts: "请问……", pronunciation: "Skazhíte, pozháluysta…", meaning: "请告诉我……", audioId: "ru-041" },
        { text: "Где находится метро?", parts: "Где + 地点", pronunciation: "Gde nakhóditsya metró?", meaning: "地铁在哪里？", audioId: "ru-042" }
      ], practice: { prompt: "想礼貌地问地铁在哪里，应选哪句？", options: ["Где находится метро?", "Мне плохо.", "Счёт, пожалуйста."], answer: "Где находится метро?", explanation: "Где находится…? 是询问地点的通用框架。" } },
      { id: "ru-15", title: "听懂并说出三句救场话", subtitle: "慢速先稳住，再听自然语速", note: "先读俄文，再展开转写并反复听完整句，不必追求一次读得像母语者。", items: [
        { text: "Я не говорю по-русски.", parts: "语言求助", pronunciation: "Ya ne govoryú pa-rússki.", meaning: "我不会说俄语。", audioId: "ru-043" },
        { text: "Повторите, пожалуйста.", parts: "沟通修复", pronunciation: "Pavtaríte, pozháluysta.", meaning: "请再说一遍。", audioId: "ru-044" },
        { text: "Помогите, пожалуйста!", parts: "紧急求助", pronunciation: "Pamagíte, pozháluysta!", meaning: "请帮帮我！", audioId: "ru-045" }
      ], practice: { prompt: "听不懂、想请对方再说一次，应选哪句？", options: ["Повторите, пожалуйста.", "Я не говорю по-русски.", "Помогите, пожалуйста!"], answer: "Повторите, пожалуйста.", explanation: "Повторите 是对陌生人的礼貌命令式。" } }
    ] }
  ],
  placement: [
    { category:"字母", prompt:"俄文字母 Р 通常读什么？", options:["r","p","b"], answer:"r" },
    { category:"字母", prompt:"哪个字母通常读 s？", options:["С","В","Н"], answer:"С" },
    { category:"字母", prompt:"Ш 通常对应哪个声音？", options:["sh","zh","ch"], answer:"sh" },
    { category:"拼读", prompt:"Ь 应该怎样读？", options:["不单独发音","固定读 i","固定读 y"], answer:"不单独发音" },
    { category:"拼读", prompt:"词首 Я 通常更接近什么？", options:["ya","a","yo"], answer:"ya" },
    { category:"拼读", prompt:"「такси」是什么意思？", options:["出租车","地铁","酒店"], answer:"出租车" },
    { category:"真实读音", prompt:"俄文日常书写通常标重音吗？", options:["通常不标","每个词都标","只给地名标"], answer:"通常不标" },
    { category:"真实读音", prompt:"非重读 о 可能听起来接近什么？", options:["a","u","i"], answer:"a" },
    { category:"真实读音", prompt:"核对辅音变化最可靠的方法是？", options:["听整词音频","逐个念字母","写中文谐音"], answer:"听整词音频" },
    { category:"旅行标识", prompt:"「ВЫХОД」是什么意思？", options:["出口","入口","车站"], answer:"出口" },
    { category:"旅行标识", prompt:"「АПТЕКА」是什么意思？", options:["药店","餐厅","酒店"], answer:"药店" },
    { category:"旅行标识", prompt:"「СЧЁТ」在餐厅常指什么？", options:["账单","菜单","座位"], answer:"账单" }
  ],
  challenge: [
    { text:"ВЫХОД", pronunciation:"výkhod", zh:"出口", audioId:"ru-021" },
    { text:"АПТЕКА", pronunciation:"aptéka", zh:"药店", audioId:"ru-026" },
    { text:"ВОКЗАЛ", pronunciation:"vokzál", zh:"火车站", audioId:"ru-025" },
    { text:"Где находится метро?", pronunciation:"Gde nakhóditsya metró?", zh:"地铁在哪里？", audioId:"ru-042" },
    { text:"Повторите, пожалуйста.", pronunciation:"Pavtaríte, pozháluysta.", zh:"请再说一遍。", audioId:"ru-044" },
    { text:"Помогите, пожалуйста!", pronunciation:"Pamagíte, pozháluysta!", zh:"请帮帮我！", audioId:"ru-045" }
  ]
});
