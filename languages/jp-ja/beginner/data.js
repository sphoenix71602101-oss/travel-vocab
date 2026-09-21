// 日语旅行认读课程。每个基础音只生成一段音频，平假名和片假名共用。
window.BEGINNER_DATA = Object.freeze({
  rows: [
    { id: "a", title: "あ行 · 五个元音", pairs: [["あ", "ア"], ["い", "イ"], ["う", "ウ"], ["え", "エ"], ["お", "オ"]], example: null },
    { id: "ka", title: "か行 · 第一次拼读", pairs: [["か", "カ"], ["き", "キ"], ["く", "ク"], ["け", "ケ"], ["こ", "コ"]], example: { text: "ここ", zh: "这里", audioId: "directions_002" } },
    { id: "sa", title: "さ行 · 读出熟悉的词", pairs: [["さ", "サ"], ["し", "シ"], ["す", "ス"], ["せ", "セ"], ["そ", "ソ"]], example: { text: "すし", zh: "寿司", audioId: "food_020" } },
    { id: "ta", title: "た行", pairs: [["た", "タ"], ["ち", "チ"], ["つ", "ツ"], ["て", "テ"], ["と", "ト"]], example: { text: "えき", zh: "车站", audioId: "airport_038" } },
    { id: "na", title: "な行", pairs: [["な", "ナ"], ["に", "ニ"], ["ぬ", "ヌ"], ["ね", "ネ"], ["の", "ノ"]], example: null },
    { id: "ha", title: "は行", pairs: [["は", "ハ"], ["ひ", "ヒ"], ["ふ", "フ"], ["へ", "ヘ"], ["ほ", "ホ"]], example: null },
    { id: "ma", title: "ま行", pairs: [["ま", "マ"], ["み", "ミ"], ["む", "ム"], ["め", "メ"], ["も", "モ"]], example: null },
    { id: "ya", title: "や行", pairs: [["や", "ヤ"], ["ゆ", "ユ"], ["よ", "ヨ"]], example: null },
    { id: "ra", title: "ら行", pairs: [["ら", "ラ"], ["り", "リ"], ["る", "ル"], ["れ", "レ"], ["ろ", "ロ"]], example: null },
    { id: "wa", title: "わ行", pairs: [["わ", "ワ"], ["を", "ヲ"]], example: null },
    { id: "n", title: "ん · 鼻音", pairs: [["ん", "ン"]], example: { text: "レストラン", zh: "餐厅", audioId: "hotel_045" } }
  ],
  rules: [
    { id: "voiced-ks", title: "浊音 · が行和ざ行", note: "在原来的字形上加两点，读音也跟着改变。", pairs: [["か", "が"], ["さ", "ざ"]], example: { text: "ビザ", zh: "签证", audioId: "airport_002" }, question: { prompt: "「が」和哪个清音对应？", options: ["か", "さ", "た"], answer: "か" } },
    { id: "voiced-th", title: "浊音 · だ行和ば行", note: "だ、ぢ、づ、で、ど与ば、び、ぶ、べ、ぼ也有对应的片假名。", pairs: [["た", "だ"], ["は", "ば"]], example: { text: "ください", zh: "请", audioId: "expressions_004" }, question: { prompt: "「ば」来自哪一行？", options: ["は行", "ま行", "ら行"], answer: "は行" } },
    { id: "semi-voiced", title: "半浊音 · ぱ行", note: "は行加小圆圈后成为ぱ、ぴ、ぷ、ぺ、ぽ。", pairs: [["は", "ぱ"], ["ひ", "ぴ"], ["ふ", "ぷ"]], example: { text: "きっぷ", zh: "车票", audioId: "airport_043" }, question: { prompt: "「ぷ」属于哪一种变化？", options: ["半浊音", "长音", "拗音"], answer: "半浊音" } },
    { id: "contracted", title: "拗音 · 小字合读", note: "きゃ、しゅ、ちょ等是一个合起来的声音；片假名同理。", pairs: [["き", "きゃ"], ["し", "しゅ"], ["ち", "ちょ"]], example: { text: "きゃく", zh: "客人", audioText: "きゃく" }, question: { prompt: "「きゃ」怎样读？", options: ["一个合起来的声音", "き和や两个完整声音", "把き读两遍"], answer: "一个合起来的声音" } },
    { id: "small-tsu", title: "促音 · っ / ッ", note: "小「っ / ッ」让后面的辅音前有一个短暂停顿。", pairs: [["つ", "っ"], ["ツ", "ッ"]], example: { text: "きっぷ", zh: "车票", audioId: "airport_043" }, question: { prompt: "「きっぷ」里的小「っ」表示什么？", options: ["短暂停顿", "拉长前一个音", "读成つ"], answer: "短暂停顿" } },
    { id: "long-vowel", title: "长音 · 声音延长", note: "片假名常用「ー」拉长前面的元音；平假名也会用相应假名表示长音。", pairs: [["コ", "コー"], ["ヒ", "ヒー"]], example: { text: "コーヒー", zh: "咖啡", audioId: "food_009" }, question: { prompt: "「コーヒー」中的「ー」表示什么？", options: ["延长前面的声音", "短暂停顿", "读成一个新辅音"], answer: "延长前面的声音" } },
    { id: "n-context", title: "ん / ン · 接在词里", note: "「ん / ン」接在其他音后，也要在拼读时保留下来。", pairs: [["ん", "ン"]], example: { text: "レストラン", zh: "餐厅", audioId: "hotel_045" }, question: { prompt: "「レストラン」结尾的「ン」应该怎样处理？", options: ["把鼻音读出来", "完全不读", "读成ー"], answer: "把鼻音读出来" } }
  ],
  placement: [
    { category: "清音", prompt: "听音后选出对应的假名", audioKana: "あ", options: ["あ", "お", "か"], answer: "あ" },
    { category: "清音", prompt: "听音后选出对应的假名", audioKana: "き", options: ["き", "さ", "ち"], answer: "き" },
    { category: "清音", prompt: "听音后选出对应的假名", audioKana: "す", options: ["す", "つ", "ふ"], answer: "す" },
    { category: "清音", prompt: "「えき」中第一个假名是什么？", options: ["え", "き", "け"], answer: "え" },
    { category: "片假名", prompt: "听音后选出对应的片假名", audioKana: "こ", options: ["コ", "ア", "サ"], answer: "コ" },
    { category: "片假名", prompt: "「し」对应的片假名是？", options: ["シ", "ツ", "ソ"], answer: "シ" },
    { category: "片假名", prompt: "「ん」对应的片假名是？", options: ["ン", "ソ", "リ"], answer: "ン" },
    { category: "片假名", prompt: "「ホテル」开头的假名是？", options: ["ホ", "ハ", "ヘ"], answer: "ホ" },
    { category: "规则", prompt: "「きっぷ」中的小「っ」表示？", options: ["短暂停顿", "延长前一个音", "读成つ"], answer: "短暂停顿" },
    { category: "规则", prompt: "「コーヒー」中的「ー」表示？", options: ["延长前一个音", "短暂停顿", "不发音"], answer: "延长前一个音" },
    { category: "规则", prompt: "「きゃ」中的小「ゃ」表示？", options: ["合成一个声音", "把や完整读出", "读两遍き"], answer: "合成一个声音" },
    { category: "规则", prompt: "「ぷ」是哪个音加小圆圈得到的？", options: ["ふ", "く", "む"], answer: "ふ" }
  ],
  challenge: [
    { text: "ホテル", zh: "酒店", audioId: "hotel_001" },
    { text: "えき", zh: "车站", audioId: "airport_038" },
    { text: "きっぷ", zh: "车票", audioId: "airport_043" },
    { text: "タクシー", zh: "出租车", audioId: "airport_033" },
    { text: "レストラン", zh: "餐厅", audioId: "hotel_045" },
    { text: "ください", zh: "请", audioId: "expressions_004" }
  ]
});
