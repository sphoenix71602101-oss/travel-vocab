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
      { id: "ru-03", title: "把常见辅音补起来", subtitle: "Б Г Д Л П Ф З Й", note: "先认常用单词里经常出现的一组，不必一次背完整张字母表。", items: [
        { text: "Б · Г · Д · З", parts: "b · g · d · z", pronunciation: "b · g · d · z", meaning: "四个浊辅音", audioId: "ru-007" },
        { text: "Л · П · Ф · Й", parts: "l · p · f · y", pronunciation: "l · p · f · y", meaning: "四个高频辅音", audioId: "ru-008" },
        { text: "билет", parts: "б · и · л · е · т", pronunciation: "bilét", meaning: "票", audioId: "ru-009" }
      ], practice: { prompt: "「билет」开头的 Б 对应哪个声音？", options: ["b", "v", "p"], answer: "b", explanation: "Б 对应 b；把它与后面的 и 连起来读。" } },
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
      ], practice: { prompt: "「такси」的重音落在哪一部分？", options: ["си", "так", "两个音节同样重"], answer: "си", explanation: "такси 的重音在最后一个音节。" } },
      { id: "ru-06", title: "Я Е Ё Ю 会带出 y 音", subtitle: "先听 ya、ye、yo、yu", note: "在词首或元音后，它们常带出 y；在辅音后还会提示辅音变软。", items: [
        { text: "Я · Е", parts: "ya · ye", pronunciation: "ya · ye", meaning: "带 y 的元音", audioId: "ru-016" },
        { text: "Ё · Ю", parts: "yo · yu", pronunciation: "yo · yu", meaning: "带 y 的元音", audioId: "ru-017" },
        { text: "еда", parts: "е · да", pronunciation: "yedá", meaning: "食物", audioId: "ru-018" }
      ], practice: { prompt: "词首的 Е 通常更接近哪个读法？", options: ["ye", "e", "yo"], answer: "ye", explanation: "例如 еда 开头读作 ye。" } },
      { id: "ru-07", title: "Ы 和 И 要分开", subtitle: "两个都不是中文里完全相同的音", note: "不要追求一次完美；先靠整词音频建立区别。", items: [
        { text: "И", parts: "i", pronunciation: "i", meaning: "较靠前的元音", audioId: "ru-019" },
        { text: "Ы", parts: "y", pronunciation: "y", meaning: "较靠后的俄语元音", audioId: "ru-020" },
        { text: "выход", parts: "вы · ход", pronunciation: "výkhod", meaning: "出口", audioId: "ru-021" }
      ], practice: { prompt: "「выход」开头的 ы 更接近哪一个元音提示？", options: ["y", "i", "u"], answer: "y", explanation: "Ы 与 И 不同，转写中常用 y 提示这个俄语元音。" } },
      { id: "ru-08", title: "Ь 和 Ъ 本身不单独发音", subtitle: "软音符号与硬音符号", note: "它们主要影响相邻字母的读法；初学阶段先学会看见而不强读。", items: [
        { text: "Ь", parts: "мягкий знак", pronunciation: "myágkiy znak", meaning: "软音符号", audioId: "ru-022" },
        { text: "Ъ", parts: "твёрдый знак", pronunciation: "tvyórdyy znak", meaning: "硬音符号", audioId: "ru-023" },
        { text: "дверь", parts: "дверь", pronunciation: "dver'", meaning: "门", audioId: "ru-024" }
      ], practice: { prompt: "Ь 应该怎样处理？", options: ["不单独发音，提示前音变软", "固定读 i", "固定读 y"], answer: "不单独发音，提示前音变软", explanation: "它是读音提示符号，不是独立元音。" } }
    ] },
    { id: "real-speech", title: "从拼字走向真实读音", subtitle: "重音、弱化和辅音变化", lessons: [
      { id: "ru-09", title: "重音决定单词怎么听", subtitle: "教学转写用重音符号标出重点", note: "俄文日常书写通常不标重音，所以每个新词都要连同声音一起记。", items: [
        { text: "вокза́л", parts: "вок · зал", pronunciation: "vagzál", meaning: "火车站", audioId: "ru-025" },
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
    { id: "word-reading", title: "把字母连成更长的单词", subtitle: "辅音组合、软硬过渡和音节分块", lessons: [
      { id: "ru-12", title: "辅音组合与软硬过渡", subtitle: "不要在每个辅音之间加入元音", note: "先看组合，再听完整词；转写只提示实际听感。", items: [
        { text: "встреча", parts: "встре · ча", pronunciation: "fstrécha", meaning: "辅音组合练习", audioId: "ru-046" },
        { text: "просьба", parts: "прось · ба", pronunciation: "próz'ba", meaning: "软音过渡练习", audioId: "ru-047" },
        { text: "дверь", parts: "дверь", pronunciation: "dver'", meaning: "词尾软音练习", audioId: "ru-048" }
      ], practice: { prompt: "读 встреча 时应该怎样处理 встр？", options: ["连续读出辅音组合", "每个辅音后加元音", "只读最后一个辅音"], answer: "连续读出辅音组合", explanation: "俄语辅音组合中不要自行插入元音。" } },
      { id: "ru-13", title: "把长单词分成音节", subtitle: "先找元音，再重新连成完整词", note: "圆点只用于练习，正式书写仍保留完整单词。", items: [
        { text: "информация", parts: "ин · фор · ма · ци · я", pronunciation: "informátsiya", meaning: "五音节词", audioId: "ru-049" },
        { text: "регистрация", parts: "ре · ги · стра · ци · я", pronunciation: "registrátsiya", meaning: "五音节词", audioId: "ru-050" },
        { text: "фотография", parts: "фо · то · гра · фи · я", pronunciation: "fatagráfiya", meaning: "五音节词", audioId: "ru-051" }
      ], practice: { prompt: "哪一种是 информация 的合理分块？", options: ["ин · фор · ма · ци · я", "и · нфо · рмация", "инф · орм · ация"], answer: "ин · фор · ма · ци · я", explanation: "先围绕元音划分音节，再连回完整单词。" } }
    ] },
    { id: "sentence-reading", title: "把单词连成短句", subtitle: "只练词组、标点和自然节奏", lessons: [
      { id: "ru-14", title: "词组边界与标点停顿", subtitle: "词内连续，词组之间短停", note: "句子只作为认读材料，不讲交际用途。", items: [
        { text: "Анна читает книгу.", parts: "Анна · читает · книгу", pronunciation: "Ánna chitáyet knígu.", meaning: "只作分组练习", audioId: "ru-052" },
        { text: "Это новый телефон.", parts: "Это · новый телефон", pronunciation: "Éta nóvyy telefón.", meaning: "只作重音练习", audioId: "ru-053" },
        { text: "Мама, это Москва.", parts: "Мама | это Москва", pronunciation: "Máma, éta Maskvá.", meaning: "只作停顿练习", audioId: "ru-054" }
      ], practice: { prompt: "句中逗号通常提示什么？", options: ["短暂停顿", "改变前一个字母", "每个词都重读"], answer: "短暂停顿", explanation: "标点组织句子节奏，不改变单词拼写。" } },
      { id: "ru-15", title: "从慢速拼读到自然连续朗读", subtitle: "保留重音，减少逐字停顿", note: "先读准每个词，再按词组连续读完整短句。", items: [
        { text: "Анна работает в Москве.", parts: "Анна работает · в Москве", pronunciation: "Ánna rabótayet f Maskvé.", meaning: "只作连续认读", audioId: "ru-055" },
        { text: "Мы читаем новые слова.", parts: "Мы читаем · новые слова", pronunciation: "My chitáyem nóvyye slavá.", meaning: "只作节奏练习", audioId: "ru-056" },
        { text: "Это маленькая фотография.", parts: "Это · маленькая фотография", pronunciation: "Éta málen'kaya fatagráfiya.", meaning: "只作长句练习", audioId: "ru-057" }
      ], practice: { prompt: "自然朗读短句时，哪种做法更合适？", options: ["按词组连续读", "逐字母停顿", "忽略单词重音"], answer: "按词组连续读", explanation: "先保留单词重音，再减少不必要的停顿。" } }
    ] }
  ],
  placement: [
    { category:"字母", prompt:"俄文字母 Р 通常读什么？", options:["r","p","b"], answer:"r" },
    { category:"字母", prompt:"哪个字母通常读 s？", options:["С","В","Н"], answer:"С" },
    { category:"字母", prompt:"Ш 通常对应哪个声音？", options:["sh","zh","ch"], answer:"sh" },
    { category:"拼读", prompt:"Ь 应该怎样读？", options:["不单独发音","固定读 i","固定读 y"], answer:"不单独发音" },
    { category:"拼读", prompt:"词首 Я 通常更接近什么？", options:["ya","a","yo"], answer:"ya" },
    { category:"拼读", prompt:"「такси」第一部分应怎样读？", options:["tak","tas","tik"], answer:"tak" },
    { category:"真实读音", prompt:"俄文日常书写通常标重音吗？", options:["通常不标","每个词都标","只给地名标"], answer:"通常不标" },
    { category:"真实读音", prompt:"非重读 о 可能听起来接近什么？", options:["a","u","i"], answer:"a" },
    { category:"真实读音", prompt:"核对辅音变化最可靠的方法是？", options:["听整词音频","逐个念字母","写中文谐音"], answer:"听整词音频" },
    { category:"连续认读", prompt:"哪一种是 информация 的合理分块？", options:["ин · фор · ма · ци · я","и · нфо · рмация","инф · орм · ация"], answer:"ин · фор · ма · ци · я" },
    { category:"连续认读", prompt:"句中逗号通常提示什么？", options:["短暂停顿","改变元音","重读每个词"], answer:"短暂停顿" },
    { category:"连续认读", prompt:"完整短句更适合怎样读？", options:["按词组连续读","逐字母停顿","忽略重音"], answer:"按词组连续读" }
  ],
  challenge: [
    { text:"ВОКЗАЛ", pronunciation:"vagzál", zh:"重音与弱化", audioId:"ru-025" },
    { text:"встреча", pronunciation:"fstrécha", zh:"辅音组合", audioId:"ru-046" },
    { text:"информация", pronunciation:"informátsiya", zh:"长词分块", audioId:"ru-049" },
    { text:"фотография", pronunciation:"fatagráfiya", zh:"长词分块", audioId:"ru-051" },
    { text:"Мама, это Москва.", pronunciation:"Máma, éta Maskvá.", zh:"标点停顿", audioId:"ru-054" },
    { text:"Мы читаем новые слова.", pronunciation:"My chitáyem nóvyye slavá.", zh:"短句节奏", audioId:"ru-056" }
  ]
});
