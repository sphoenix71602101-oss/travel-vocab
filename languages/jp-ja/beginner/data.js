// 日语旅行认读课程。每个基础音只生成一段音频，平假名和片假名共用。
window.BEGINNER_DATA = Object.freeze({
  rows: [
    { id: "a", title: "あ行 · 五个元音", pairs: [["あ", "ア"], ["い", "イ"], ["う", "ウ"], ["え", "エ"], ["お", "オ"]], example: { text: "あお", zh: "蓝色", audioId: "beginner/example-a" } },
    { id: "ka", title: "か行 · 第一次拼读", pairs: [["か", "カ"], ["き", "キ"], ["く", "ク"], ["け", "ケ"], ["こ", "コ"]], example: { text: "ここ", zh: "这里", audioId: "directions_002" } },
    { id: "sa", title: "さ行 · 读出熟悉的词", pairs: [["さ", "サ"], ["し", "シ"], ["す", "ス"], ["せ", "セ"], ["そ", "ソ"]], example: { text: "すし", zh: "寿司", audioId: "food_020" } },
    { id: "ta", title: "た行", pairs: [["た", "タ"], ["ち", "チ"], ["つ", "ツ"], ["て", "テ"], ["と", "ト"]], example: { text: "たてもの", zh: "建筑物", audioId: "beginner/example-ta" } },
    { id: "na", title: "な行", pairs: [["な", "ナ"], ["に", "ニ"], ["ぬ", "ヌ"], ["ね", "ネ"], ["の", "ノ"]], example: { text: "なに", zh: "什么", audioId: "beginner/example-na" } },
    { id: "ha", title: "は行", pairs: [["は", "ハ"], ["ひ", "ヒ"], ["ふ", "フ"], ["へ", "ヘ"], ["ほ", "ホ"]], example: { text: "ホテル", zh: "酒店", audioId: "hotel_001" } },
    { id: "ma", title: "ま行", pairs: [["ま", "マ"], ["み", "ミ"], ["む", "ム"], ["め", "メ"], ["も", "モ"]], example: { text: "まめ", zh: "豆", audioId: "beginner/example-ma" } },
    { id: "ya", title: "や行", pairs: [["や", "ヤ"], ["ゆ", "ユ"], ["よ", "ヨ"]], example: { text: "やすい", zh: "便宜", audioId: "beginner/example-ya" } },
    { id: "ra", title: "ら行", pairs: [["ら", "ラ"], ["り", "リ"], ["る", "ル"], ["れ", "レ"], ["ろ", "ロ"]], example: { text: "レストラン", zh: "餐厅", audioId: "hotel_045" } },
    { id: "wa", title: "わ行与ん", pairs: [["わ", "ワ"], ["を", "ヲ"], ["ん", "ン"]], example: { text: "ワイン", zh: "葡萄酒", audioId: "beginner/example-wa" } }
  ],
  rules: [
    { id: "voiced-ks", title: "浊音 · が行和ざ行", note: "か行、さ行加两点后形成两组完整浊音。", pairs: [["か", "が"], ["き", "ぎ"], ["く", "ぐ"], ["け", "げ"], ["こ", "ご"], ["さ", "ざ"], ["し", "じ"], ["す", "ず"], ["せ", "ぜ"], ["そ", "ぞ"]], example: { text: "かぎ", zh: "钥匙", audioId: "beginner/example-voiced-ks" }, question: { prompt: "「が」和哪个清音对应？", options: ["か", "さ", "た"], answer: "か" } },
    { id: "voiced-th", title: "浊音与半浊音 · だ、ば、ぱ行", note: "た行、は行加两点形成浊音；は行加小圆圈形成ぱ行。", pairs: [["た", "だ"], ["ち", "ぢ"], ["つ", "づ"], ["て", "で"], ["と", "ど"], ["は", "ば"], ["ひ", "び"], ["ふ", "ぶ"], ["へ", "べ"], ["ほ", "ぼ"], ["は", "ぱ"], ["ひ", "ぴ"], ["ふ", "ぷ"], ["へ", "ぺ"], ["ほ", "ぽ"]], example: { text: "きっぷ", zh: "车票", audioId: "airport_043" }, question: { prompt: "「ぷ」来自哪一个清音？", options: ["ふ", "く", "む"], answer: "ふ" } },
    { id: "contracted", title: "拗音 · 小字合读", note: "きゃ、しゅ、ちょ等是一个合起来的声音；片假名同理。", pairs: [["き", "きゃ"], ["し", "しゅ"], ["ち", "ちょ"]], example: { text: "きゃく", zh: "客人", audioText: "きゃく" }, question: { prompt: "「きゃ」怎样读？", options: ["一个合起来的声音", "き和や两个完整声音", "把き读两遍"], answer: "一个合起来的声音" } },
    { id: "small-tsu", title: "促音 · っ / ッ", note: "小「っ / ッ」让后面的辅音前有一个短暂停顿。", pairs: [["つ", "っ"], ["ツ", "ッ"]], example: { text: "きっぷ", zh: "车票", audioId: "airport_043" }, question: { prompt: "「きっぷ」里的小「っ」表示什么？", options: ["短暂停顿", "拉长前一个音", "读成つ"], answer: "短暂停顿" } },
    { id: "long-vowel", title: "长音 · 声音延长", note: "片假名常用「ー」拉长前面的元音；平假名也会用相应假名表示长音。", pairs: [["コ", "コー"], ["ヒ", "ヒー"]], example: { text: "コーヒー", zh: "咖啡", audioId: "food_009" }, question: { prompt: "「コーヒー」中的「ー」表示什么？", options: ["延长前面的声音", "短暂停顿", "读成一个新辅音"], answer: "延长前面的声音" } }
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

// 新版课程按五个认读阶段组织；rows/rules 继续保留，供专用假名练习复用。
{
  const base = window.BEGINNER_DATA;
  const reading = [
    { id: "word-flow", kind: "reading", title: "把假名连续拼成单词", note: "先按拍看清每个假名，再一次连续读完整单词。", pairs: [["たべもの", "た・べ・も・の"], ["のみもの", "の・み・も・の"], ["やすみ", "や・す・み"]], example: { text: "たべもの", zh: "单词连续认读", audioId: "beginner/example-word-flow" }, question: { prompt: "「たべもの」应怎样分拍？", options: ["た・べ・も・の", "たべ・もの", "た・べも・の"], answer: "た・べ・も・の" } },
    { id: "mixed-scripts", kind: "reading", title: "混合读取平假名与片假名词", note: "两套字形共享同一套基础声音，先认字形，再读完整词。", pairs: [["ホテル", "ほ・て・る"], ["タクシー", "た・く・しー"], ["レストラン", "れ・す・と・ら・ん"]], example: { text: "レストラン", zh: "片假名单词认读", audioId: "hotel_045" }, question: { prompt: "「タクシー」末尾的「ー」怎样处理？", options: ["延长前音", "完全不读", "短暂停顿"], answer: "延长前音" } },
    { id: "sentence-particles", kind: "reading", title: "句子中的 は、へ、を", note: "作助词时，は读 wa、へ读 e、を读 o；按词组组织停顿。", pairs: [["わたしは", "わたし・わ"], ["えきへ", "えき・え"], ["みずを", "みず・お"]], example: { text: "わたしは みずを のみます。", zh: "只作短句认读", audioId: "beginner/example-sentence" }, question: { prompt: "「わたしは」中的 は 怎样读？", options: ["wa", "ha", "ba"], answer: "wa" } }
  ];
  const placement = [
    { category: "基础假名", prompt: "听音后选出对应的假名", audioKana: "あ", options: ["あ", "お", "か"], answer: "あ" },
    { category: "基础假名", prompt: "听音后选出对应的假名", audioKana: "き", options: ["き", "さ", "ち"], answer: "き" },
    { category: "基础假名", prompt: "「て」对应的片假名是？", options: ["テ", "チ", "ト"], answer: "テ" },
    { category: "基础假名", prompt: "「ん」对应的片假名是？", options: ["ン", "ソ", "リ"], answer: "ン" },
    { category: "浊音变化", prompt: "「が」来自哪个清音？", options: ["か", "さ", "た"], answer: "か" },
    { category: "浊音变化", prompt: "「ぷ」来自哪个清音？", options: ["ふ", "く", "む"], answer: "ふ" },
    { category: "拼读规则", prompt: "「きっぷ」中的小「っ」表示？", options: ["短暂停顿", "延长前音", "读成つ"], answer: "短暂停顿" },
    { category: "拼读规则", prompt: "「コーヒー」中的「ー」表示？", options: ["延长前音", "短暂停顿", "不发音"], answer: "延长前音" },
    { category: "拼读规则", prompt: "「きゃ」中的小「ゃ」表示？", options: ["合成一个声音", "完整读や", "读两遍き"], answer: "合成一个声音" },
    { category: "连续认读", prompt: "「たべもの」应怎样分拍？", options: ["た・べ・も・の", "たべ・もの", "た・べも・の"], answer: "た・べ・も・の" },
    { category: "连续认读", prompt: "「タクシー」末尾怎样读？", options: ["延长前音", "完全不读", "短暂停顿"], answer: "延长前音" },
    { category: "连续认读", prompt: "助词「は」在「わたしは」中怎样读？", options: ["wa", "ha", "ba"], answer: "wa" }
  ];
  const challenge = [
    { text: "たべもの", zh: "单词认读", audioId: "beginner/example-word-flow" },
    { text: "きっぷ", zh: "促音认读", audioId: "airport_043" },
    { text: "コーヒー", zh: "长音认读", audioId: "food_009" },
    { text: "レストラン", zh: "片假名认读", audioId: "hotel_045" },
    { text: "わたしは みずを のみます。", zh: "助词与短句节奏", audioId: "beginner/example-sentence" },
    { text: "えきへ ゆっくり あるきます。", zh: "助词与短句节奏", audioId: "beginner/example-sentence-2" }
  ];
  window.BEGINNER_DATA = Object.freeze({ ...base, reading, placement, challenge, stages: [
    { id: "vowels", title: "基础声音", subtitle: "先认识五个元音", lessons: [base.rows[0]] },
    { id: "basic-kana", title: "基础假名", subtitle: "平假名与片假名同步认读", lessons: base.rows.slice(1) },
    { id: "voicing", title: "浊音与半浊音", subtitle: "从清音字形推到新声音", lessons: base.rules.slice(0, 2) },
    { id: "special-reading", title: "特殊拼读", subtitle: "拗音、促音与长音", lessons: base.rules.slice(2) },
    { id: "continuous-reading", title: "连续认读", subtitle: "从完整单词走到短句节奏", lessons: reading }
  ] });
}
