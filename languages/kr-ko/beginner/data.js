// 面向中文零基础学习者的韩文认读课程，只训练字形、拼读、音变和连续认读。
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
    { id: "consonants", title: "拼出常见音节", subtitle: "认识两组基础辅音与复合元音", lessons: [
      { id: "ko-03", title: "ㄱ ㄴ ㄷ ㄹ ㅁ", subtitle: "先读五个高频辅音", note: "辅音在词首和词中可能听起来略有不同，先跟整词音频。", items: [
        { text: "가게", parts: "ㄱ", pronunciation: "gage", meaning: "商店", audioId: "ko-007" },
        { text: "나라", parts: "ㄴ · ㄹ", pronunciation: "nara", meaning: "国家", audioId: "ko-008" },
        { text: "도로", parts: "ㄷ · ㄹ", pronunciation: "doro", meaning: "道路", audioId: "ko-009" }
      ], practice: { prompt: "「나」开头的辅音是？", options: ["ㄴ", "ㄷ", "ㅁ"], answer: "ㄴ", explanation: "나 = ㄴ + ㅏ。" } },
      { id: "ko-04", title: "ㅂ ㅅ ㅇ ㅈ ㅎ", subtitle: "再补五个基础辅音", note: "ㅇ 在音节开头不发音，在末尾通常读作 ng。", items: [
        { text: "입구", parts: "ㅇ · ㅂ · ㄱ", pronunciation: "ipgu", meaning: "入口", audioId: "ko-010" },
        { text: "시장", parts: "ㅅ · ㅈ · ㅇ", pronunciation: "sijang", meaning: "市场", audioId: "ko-011" },
        { text: "호텔", parts: "ㅎ", pronunciation: "hotel", meaning: "酒店", audioId: "ko-012" }
      ], practice: { prompt: "ㅇ 放在音节开头时通常怎样读？", options: ["不单独发音", "读 ng", "读 m"], answer: "不单独发音", explanation: "例如 입 的开头 ㅇ 只帮助元音组成音节。" } },
      { id: "ko-05", title: "常见复合元音", subtitle: "补齐 y、w 与相近元音", note: "把复合元音当作整体声音，并通过完整单词核对。", items: [
        { text: "메뉴 · 새", parts: "ㅔ · ㅐ", pronunciation: "menyu · sae", meaning: "练习 ㅔ 与 ㅐ", audioId: "ko-037" },
        { text: "외국 · 위", parts: "ㅚ · ㅟ", pronunciation: "oeguk · wi", meaning: "练习 ㅚ 与 ㅟ", audioId: "ko-038" },
        { text: "의자 · 여기 · 환전", parts: "ㅢ · ㅕ · ㅘ", pronunciation: "uija · yeogi · hwanjeon", meaning: "三个常见组合", audioId: "ko-039" }
      ], practice: { prompt: "「위」中的复合元音是？", options: ["ㅟ", "ㅚ", "ㅢ"], answer: "ㅟ", explanation: "위 由 ㅇ 与 ㅟ 组成。" } }
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
      ], practice: { prompt: "「역」最下面的收音是？", options: ["ㄱ", "ㅇ", "ㅕ"], answer: "ㄱ", explanation: "역 的结构是 ㅇ + ㅕ + ㄱ。" } },
      { id: "ko-09", title: "多种收音归到七种尾音", subtitle: "写法较多，词尾听感较少", note: "先认识常见归并，不要求一次背完所有收音表。", items: [
        { text: "옷 · 낮", parts: "ㅅ · ㅈ → t", pronunciation: "ot · nat", meaning: "词尾听感接近 t", audioId: "ko-040" },
        { text: "앞 · 밥", parts: "ㅍ · ㅂ → p", pronunciation: "ap · bap", meaning: "词尾听感接近 p", audioId: "ko-041" },
        { text: "밖 · 역", parts: "ㄲ · ㄱ → k", pronunciation: "bak · yeok", meaning: "词尾听感接近 k", audioId: "ko-042" }
      ], practice: { prompt: "옷 的词尾听感更接近哪一个？", options: ["t", "s", "j"], answer: "t", explanation: "ㅅ 在词尾会归并为接近 t 的收音。" } }
    ] },
    { id: "sound-change", title: "听懂真实读法", subtitle: "书写不变，连接后声音会调整", lessons: [
      { id: "ko-10", title: "收音与后面的元音连起来", subtitle: "先按音节看，再按整词听", note: "当前一个音节有收音、后一个以 ㅇ 开头时，常会发生连音。", items: [
        { text: "한국어", parts: "한 · 국 · 어", pronunciation: "hangugeo", meaning: "韩语", audioId: "ko-025" },
        { text: "서울역", parts: "서 · 울 · 역", pronunciation: "seoullyeok", meaning: "首尔站", audioId: "ko-026" },
        { text: "할인", parts: "할 · 인", pronunciation: "harin", meaning: "折扣", audioId: "ko-027" }
      ], practice: { prompt: "练习连音时，最可靠的核对方式是？", options: ["听完整词音频", "只看每个字母", "写中文谐音"], answer: "听完整词音频", explanation: "罗马字只是辅助，整词音频更接近真实发音。" } },
      { id: "ko-11", title: "鼻音化、紧音化与腭化", subtitle: "书写不变，整词读音会调整", note: "用完整单词认识高频变化，不用先背术语。", items: [
        { text: "감사합니다", parts: "감 · 사 · 합 · 니 · 다", pronunciation: "gamsahamnida", meaning: "谢谢", audioId: "ko-028" },
        { text: "같이", parts: "같 · 이", pronunciation: "gachi", meaning: "一起", audioId: "ko-029" },
        { text: "몇 명", parts: "몇 · 명", pronunciation: "myeon myeong", meaning: "几位", audioId: "ko-030" }
      ], practice: { prompt: "「같이」实际更接近哪种读法？", options: ["gachi", "gati", "gassi"], answer: "gachi", explanation: "ㅌ 与后面的 이 连接时，实际读音接近 ch。" } }
    ] },
    { id: "continuous-reading", title: "从单词走到短句", subtitle: "分块、空格、助词和自然节奏", lessons: [
      { id: "ko-12", title: "把多音节单词分开再连起来", subtitle: "先看音节块，再读完整词", note: "圆点只帮助练习，正式书写不添加分隔符。", items: [
        { text: "지하철", parts: "지 · 하 · 철", pronunciation: "jihacheol", meaning: "三音节词", audioId: "ko-043" },
        { text: "도서관", parts: "도 · 서 · 관", pronunciation: "doseogwan", meaning: "三音节词", audioId: "ko-044" },
        { text: "아이스크림", parts: "아 · 이 · 스 · 크 · 림", pronunciation: "aiseukeurim", meaning: "五音节词", audioId: "ko-045" }
      ], practice: { prompt: "哪一种是 도서관 的正确分块？", options: ["도 · 서 · 관", "돗 · 어 · 관", "도서 · ㄱ · 완"], answer: "도 · 서 · 관", explanation: "每个韩文方块就是一个音节。" } },
      { id: "ko-13", title: "空格分开词组，助词贴在词后", subtitle: "看清书写边界再安排停顿", note: "助词与前面的词连写，短句中的空格通常划分词组。", items: [
        { text: "저는 민수예요.", parts: "저는 · 민수예요", pronunciation: "jeoneun minsuyeyo", meaning: "只作分组练习", audioId: "ko-046" },
        { text: "서울에 가요.", parts: "서울에 · 가요", pronunciation: "seoure gayo", meaning: "只作分组练习", audioId: "ko-047" },
        { text: "문이 열려요.", parts: "문이 · 열려요", pronunciation: "muni yeollyeoyo", meaning: "只作分组练习", audioId: "ko-048" }
      ], practice: { prompt: "「서울에 가요」更适合怎样分组？", options: ["서울에 · 가요", "서 · 울에가 · 요", "서울 · 에가요"], answer: "서울에 · 가요", explanation: "에 与 서울 连写，空格后进入下一个词组。" } },
      { id: "ko-14", title: "短句里的音变仍然连续发生", subtitle: "不要在每个方块之间停顿", note: "先读准单词，再听词组中怎样自然连接。", items: [
        { text: "한국어를 읽어요.", parts: "한국어를 · 읽어요", pronunciation: "hangugeoreul ilgeoyo", meaning: "只作连读练习", audioId: "ko-049" },
        { text: "같이 걸어요.", parts: "같이 · 걸어요", pronunciation: "gachi georeoyo", meaning: "只作音变练习", audioId: "ko-050" },
        { text: "문 앞에 있어요.", parts: "문 앞에 · 있어요", pronunciation: "mun ape isseoyo", meaning: "只作连读练习", audioId: "ko-051" }
      ], practice: { prompt: "같이 在短句中仍更接近哪种读法？", options: ["gachi", "gati", "gassi"], answer: "gachi", explanation: "ㅌ 与 이 相接时的腭化不会因为进入句子而消失。" } },
      { id: "ko-15", title: "从慢速拼读到自然节奏", subtitle: "按词组连续读完整短句", note: "这一课只练发音和停顿，不讲句子的交际用途。", items: [
        { text: "민수는 지하철을 타요.", parts: "민수는 · 지하철을 · 타요", pronunciation: "minsuneun jihacheoreul tayo", meaning: "只作节奏练习", audioId: "ko-052" },
        { text: "수지는 도서관에 가요.", parts: "수지는 · 도서관에 · 가요", pronunciation: "sujineun doseogwane gayo", meaning: "只作节奏练习", audioId: "ko-053" },
        { text: "저는 한국어를 읽어요.", parts: "저는 · 한국어를 · 읽어요", pronunciation: "jeoneun hangugeoreul ilgeoyo", meaning: "只作节奏练习", audioId: "ko-054" }
      ], practice: { prompt: "读完整短句时，哪里最适合短暂停顿？", options: ["词组边界", "每个方块后", "每个辅音后"], answer: "词组边界", explanation: "先保持词内连续，再按词组组织句子节奏。" } }
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
    { category: "连续认读", prompt: "「도서관」应怎样按音节分块？", options: ["도 · 서 · 관", "돗 · 어 · 관", "도서 · ㄱ · 완"], answer: "도 · 서 · 관" },
    { category: "连续认读", prompt: "「서울에 가요」更适合怎样分组？", options: ["서울에 · 가요", "서 · 울에가 · 요", "서울 · 에가요"], answer: "서울에 · 가요" },
    { category: "连续认读", prompt: "短句中助词通常怎样书写？", options: ["与前词连写", "单独空开", "写在下一词后"], answer: "与前词连写" },
    { category: "连续认读", prompt: "读完整韩语短句时应在哪里短停？", options: ["词组边界", "每个方块后", "每个辅音后"], answer: "词组边界" }
  ],
  challenge: [
    { text: "한국어", pronunciation: "hangugeo", zh: "单词认读", audioId: "ko-025" },
    { text: "같이", pronunciation: "gachi", zh: "音变认读", audioId: "ko-029" },
    { text: "도서관", pronunciation: "doseogwan", zh: "多音节词", audioId: "ko-044" },
    { text: "아이스크림", pronunciation: "aiseukeurim", zh: "多音节词", audioId: "ko-045" },
    { text: "수지는 도서관에 가요.", pronunciation: "sujineun doseogwane gayo", zh: "短句节奏", audioId: "ko-053" },
    { text: "저는 한국어를 읽어요.", pronunciation: "jeoneun hangugeoreul ilgeoyo", zh: "短句节奏", audioId: "ko-054" }
  ]
});
