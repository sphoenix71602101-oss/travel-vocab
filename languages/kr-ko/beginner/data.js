// 韩国韩语旅行认读课程：先学会拆音节块，再读旅行中真正会看到的字。
window.KO_BEGINNER_DATA = Object.freeze({
  stages: [
    { id: "blocks", title: "先看懂韩文方块", subtitle: "字母组合成一个音节", lessons: [
      { id: "ko-01", title: "韩文不是一整块图案", subtitle: "从左到右、从上到下拆开看", note: "韩文由辅音和元音组成，再拼成方块。", items: [
        { text: "가", parts: "ㄱ + ㅏ", pronunciation: "ga", meaning: "一个音节", audioId: "ko-001" },
        { text: "나", parts: "ㄴ + ㅏ", pronunciation: "na", meaning: "一个音节", audioId: "ko-002" },
        { text: "한", parts: "ㅎ + ㅏ + ㄴ", pronunciation: "han", meaning: "带收音的音节", audioId: "ko-003" }
      ], practice: { prompt: "「가」由哪两个字母组成？", options: ["ㄱ + ㅏ", "ㄴ + ㅏ", "ㅎ + ㅏ"], answer: "ㄱ + ㅏ", explanation: "ㄱ 在左，ㅏ 在右，合成 가。" } },
      { id: "ko-02", title: "六个核心元音", subtitle: "先抓住最常见的声音", note: "竖形元音写在辅音右边，横形元音写在辅音下方。", items: [
        { text: "아 어", parts: "ㅏ · ㅓ", pronunciation: "a · eo", meaning: "两个容易混淆的元音", audioId: "ko-004" },
        { text: "오 우", parts: "ㅗ · ㅜ", pronunciation: "o · u", meaning: "上下方向不同", audioId: "ko-005" },
        { text: "으 이", parts: "ㅡ · ㅣ", pronunciation: "eu · i", meaning: "横线与竖线", audioId: "ko-006" }
      ], practice: { prompt: "哪个元音按修订罗马字写作 eo？", options: ["ㅓ", "ㅗ", "ㅡ"], answer: "ㅓ", explanation: "ㅓ 写作 eo；不要按英文字母逐个读。" } }
    ] },
    { id: "consonants", title: "拼出常见音节", subtitle: "认识旅行词里最常见的辅音", lessons: [
      { id: "ko-03", title: "ㄱ ㄴ ㄷ ㄹ ㅁ", subtitle: "先读五个高频辅音", note: "辅音在词首和词中可能听起来略有不同，先跟整词音频。", items: [
        { text: "가게", parts: "ㄱ", pronunciation: "gage", meaning: "商店", audioId: "ko-007" },
        { text: "나라", parts: "ㄴ · ㄹ", pronunciation: "nara", meaning: "国家", audioId: "ko-008" },
        { text: "도로", parts: "ㄷ · ㄹ", pronunciation: "doro", meaning: "道路", audioId: "ko-009" }
      ], practice: { prompt: "「나」开头的辅音是？", options: ["ㄴ", "ㄷ", "ㅁ"], answer: "ㄴ", explanation: "나 = ㄴ + ㅏ。" } },
      { id: "ko-04", title: "ㅂ ㅅ ㅇ ㅈ ㅎ", subtitle: "读出入口和车站常见字", note: "ㅇ 在音节开头不发音，在末尾通常读作 ng。", items: [
        { text: "입구", parts: "ㅇ · ㅂ · ㄱ", pronunciation: "ipgu", meaning: "入口", audioId: "ko-010" },
        { text: "시장", parts: "ㅅ · ㅈ · ㅇ", pronunciation: "sijang", meaning: "市场", audioId: "ko-011" },
        { text: "호텔", parts: "ㅎ", pronunciation: "hotel", meaning: "酒店", audioId: "ko-012" }
      ], practice: { prompt: "ㅇ 放在音节开头时通常怎样读？", options: ["不单独发音", "读 ng", "读 m"], answer: "不单独发音", explanation: "例如 입 的开头 ㅇ 只帮助元音组成音节。" } },
      { id: "ko-05", title: "带 y 和 w 的复合元音", subtitle: "看懂 여、요、와、워", note: "先把复合元音当作一个整体声音。", items: [
        { text: "여기", parts: "ㅕ", pronunciation: "yeogi", meaning: "这里", audioId: "ko-013" },
        { text: "요금", parts: "ㅛ", pronunciation: "yogeum", meaning: "费用", audioId: "ko-014" },
        { text: "환전", parts: "ㅘ", pronunciation: "hwanjeon", meaning: "换钱", audioId: "ko-015" }
      ], practice: { prompt: "「여기」里的 여 对应哪组罗马字？", options: ["yeo", "yo", "wa"], answer: "yeo", explanation: "ㅕ 写作 yeo。" } }
    ] },
    { id: "contrast", title: "分清相近的声音", subtitle: "送气音、紧音和收音", lessons: [
      { id: "ko-06", title: "ㅋ ㅌ ㅍ ㅊ", subtitle: "送气音要更有气流", note: "它们分别常写作 k、t、p、ch。", items: [
        { text: "카드", parts: "ㅋ", pronunciation: "kadeu", meaning: "卡", audioId: "ko-016" },
        { text: "택시", parts: "ㅌ", pronunciation: "taeksi", meaning: "出租车", audioId: "ko-017" },
        { text: "출구", parts: "ㅊ", pronunciation: "chulgu", meaning: "出口", audioId: "ko-018" }
      ], practice: { prompt: "「택시」开头是哪一个送气音？", options: ["ㅌ", "ㄷ", "ㄸ"], answer: "ㅌ", explanation: "택시 的第一个字母是 ㅌ。" } },
      { id: "ko-07", title: "ㄲ ㄸ ㅃ ㅆ ㅉ", subtitle: "紧音短而有力", note: "紧音不是把声音拖长，而是起音更紧。", items: [
        { text: "싸요", parts: "ㅆ", pronunciation: "ssayo", meaning: "便宜", audioId: "ko-019" },
        { text: "빨리", parts: "ㅃ", pronunciation: "ppalli", meaning: "快一点", audioId: "ko-020" },
        { text: "조금", parts: "ㅈ", pronunciation: "jogeum", meaning: "一点", audioId: "ko-021" }
      ], practice: { prompt: "哪个写法表示紧音？", options: ["ㅆ", "ㅅ", "ㅊ"], answer: "ㅆ", explanation: "相同辅音并写可形成紧音。" } },
      { id: "ko-08", title: "收音 받침", subtitle: "音节下面还有一个尾音", note: "先辨认有没有收音，再听它在词里的实际变化。", items: [
        { text: "문", parts: "ㅁ + ㅜ + ㄴ", pronunciation: "mun", meaning: "门", audioId: "ko-022" },
        { text: "역", parts: "ㅇ + ㅕ + ㄱ", pronunciation: "yeok", meaning: "车站", audioId: "ko-023" },
        { text: "방", parts: "ㅂ + ㅏ + ㅇ", pronunciation: "bang", meaning: "房间", audioId: "ko-024" }
      ], practice: { prompt: "「역」最下面的收音是？", options: ["ㄱ", "ㅇ", "ㅕ"], answer: "ㄱ", explanation: "역 的结构是 ㅇ + ㅕ + ㄱ。" } }
    ] },
    { id: "sound-change", title: "听懂真实读法", subtitle: "书写不变，连接后声音会调整", lessons: [
      { id: "ko-09", title: "收音与后面的元音连起来", subtitle: "先按音节看，再按整词听", note: "当前一个音节有收音、后一个以 ㅇ 开头时，常会发生连音。", items: [
        { text: "한국어", parts: "한 · 국 · 어", pronunciation: "hangugeo", meaning: "韩语", audioId: "ko-025" },
        { text: "서울역", parts: "서 · 울 · 역", pronunciation: "seoullyeok", meaning: "首尔站", audioId: "ko-026" },
        { text: "할인", parts: "할 · 인", pronunciation: "harin", meaning: "折扣", audioId: "ko-027" }
      ], practice: { prompt: "练习连音时，最可靠的核对方式是？", options: ["听完整词音频", "只看每个字母", "写中文谐音"], answer: "听完整词音频", explanation: "罗马字只是辅助，整词音频更接近真实发音。" } },
      { id: "ko-10", title: "先掌握旅行中最常见的音变", subtitle: "不背术语，也能认出整词", note: "先记常用词的整体声音，规则会在重复中变熟。", items: [
        { text: "감사합니다", parts: "감 · 사 · 합 · 니 · 다", pronunciation: "gamsahamnida", meaning: "谢谢", audioId: "ko-028" },
        { text: "같이", parts: "같 · 이", pronunciation: "gachi", meaning: "一起", audioId: "ko-029" },
        { text: "몇 명", parts: "몇 · 명", pronunciation: "myeon myeong", meaning: "几位", audioId: "ko-030" }
      ], practice: { prompt: "「같이」实际更接近哪种读法？", options: ["gachi", "gati", "gassi"], answer: "gachi", explanation: "ㅌ 与后面的 이 连接时，实际读音接近 ch。" } }
    ] },
    { id: "travel-reading", title: "把韩文用在旅途中", subtitle: "直接认路牌、菜单和求助词", lessons: [
      { id: "ko-11", title: "先认五个关键标识", subtitle: "不用完整句子也能找到方向", note: "看到这些词时先直接理解，不必先转成罗马字。", items: [
        { text: "입구 · 출구", parts: "", pronunciation: "ipgu · chulgu", meaning: "入口 · 出口", audioId: "ko-031" },
        { text: "화장실", parts: "", pronunciation: "hwajangsil", meaning: "洗手间", audioId: "ko-032" },
        { text: "약국 · 병원", parts: "", pronunciation: "yakguk · byeongwon", meaning: "药店 · 医院", audioId: "ko-033" }
      ], practice: { prompt: "看到「출구」应该找什么？", options: ["出口", "入口", "售票处"], answer: "出口", explanation: "출구 是出口，입구 是入口。" } },
      { id: "ko-12", title: "读出三句旅行救场话", subtitle: "礼貌、短、可以直接使用", note: "先读韩文，再展开罗马字并听音核对。", items: [
        { text: "이거 주세요.", parts: "", pronunciation: "igeo juseyo", meaning: "请给我这个。", audioId: "ko-034" },
        { text: "어디예요?", parts: "", pronunciation: "eodiyeyo", meaning: "在哪里？", audioId: "ko-035" },
        { text: "천천히 말해 주세요.", parts: "", pronunciation: "cheoncheonhi malhae juseyo", meaning: "请慢一点说。", audioId: "ko-036" }
      ], practice: { prompt: "想请对方慢一点说，应选哪句？", options: ["천천히 말해 주세요.", "이거 주세요.", "어디예요?"], answer: "천천히 말해 주세요.", explanation: "这是对陌生人安全、礼貌的请求方式。" } }
    ] }
  ],
  placement: [
    { category: "音节结构", prompt: "「가」由哪两个字母组成？", options: ["ㄱ + ㅏ", "ㄴ + ㅏ", "ㄱ + ㅓ"], answer: "ㄱ + ㅏ" },
    { category: "音节结构", prompt: "哪个字的元音写在辅音下方？", options: ["고", "가", "너"], answer: "고" },
    { category: "基础音", prompt: "ㅓ 的修订罗马字是？", options: ["eo", "o", "eu"], answer: "eo" },
    { category: "基础音", prompt: "「나」开头的辅音是？", options: ["ㄴ", "ㄷ", "ㅁ"], answer: "ㄴ" },
    { category: "基础音", prompt: "「출구」开头的送气音是？", options: ["ㅊ", "ㅈ", "ㅉ"], answer: "ㅊ" },
    { category: "收音与音变", prompt: "「역」最下面的收音是？", options: ["ㄱ", "ㅇ", "ㅕ"], answer: "ㄱ" },
    { category: "收音与音变", prompt: "ㅇ 在音节末尾通常接近哪个音？", options: ["ng", "m", "s"], answer: "ng" },
    { category: "收音与音变", prompt: "「같이」更接近哪种实际读法？", options: ["gachi", "gati", "gassi"], answer: "gachi" },
    { category: "旅行标识", prompt: "「입구」是什么意思？", options: ["入口", "出口", "车站"], answer: "入口" },
    { category: "旅行标识", prompt: "「화장실」是什么意思？", options: ["洗手间", "药店", "酒店"], answer: "洗手间" },
    { category: "旅行标识", prompt: "「약국」是什么意思？", options: ["药店", "医院", "市场"], answer: "药店" },
    { category: "旅行标识", prompt: "“请给我这个”是哪一句？", options: ["이거 주세요.", "어디예요?", "감사합니다."], answer: "이거 주세요." }
  ],
  challenge: [
    { text: "출구", pronunciation: "chulgu", zh: "出口", audioId: "ko-018" },
    { text: "화장실", pronunciation: "hwajangsil", zh: "洗手间", audioId: "ko-032" },
    { text: "서울역", pronunciation: "seoullyeok", zh: "首尔站", audioId: "ko-026" },
    { text: "이거 주세요.", pronunciation: "igeo juseyo", zh: "请给我这个。", audioId: "ko-034" },
    { text: "어디예요?", pronunciation: "eodiyeyo", zh: "在哪里？", audioId: "ko-035" },
    { text: "천천히 말해 주세요.", pronunciation: "cheoncheonhi malhae juseyo", zh: "请慢一点说。", audioId: "ko-036" }
  ]
});
