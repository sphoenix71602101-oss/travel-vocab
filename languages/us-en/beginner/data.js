// 美国英语旅行认读课程。正式 MP3 后续生成；当前由浏览器 en-US 语音朗读。
window.EN_BEGINNER_DATA = Object.freeze({
  stages: [
    {
      id: "sound-foundation",
      title: "先认识英语的声音",
      subtitle: "字母名称不等于单词读音",
      lessons: [
        {
          id: "en-01",
          title: "英语不是把字母一个个念出来",
          subtitle: "先把单词当成一组连起来的声音",
          cards: [
            { type: "concept", title: "先听整个单词", body: "英语单词不是把每个字母的名称依次念出来。先看完整拼写、听完整声音，再留意中间发生了什么。" },
            { type: "words", title: "看词，也听声音", items: [
              { text: "cat", ipa: "/kæt/", meaning: "猫" },
              { text: "bed", ipa: "/bɛd/", meaning: "床" },
              { text: "sit", ipa: "/sɪt/", meaning: "坐" }
            ] },
            { type: "try-first", text: "map", ipa: "/mæp/", meaning: "地图", note: "先自己试着读，再听完整单词。" }
          ],
          practice: [
            { type: "listen-choice", prompt: "听音后，选出刚才听到的词", audio: { text: "sit" }, options: ["sit", "seat", "set"], answer: "sit", explanation: "sit 中间是短促的 /ɪ/。" },
            { type: "choice", prompt: "读英语单词时，第一步更适合怎么做？", options: ["把字母名称逐个念出", "把单词当成一组声音", "先写中文谐音"], answer: "把单词当成一组声音", explanation: "先建立完整声音印象，再逐步发现拼读规律。" }
          ]
        },
        {
          id: "en-02",
          title: "几个最常见的短元音",
          subtitle: "a、e、i、o、u 不只有一种读法",
          cards: [
            { type: "concept", title: "先记声音感觉", body: "这一课不要求背音标。听每个词中间短促的声音，并用对比来分辨。" },
            { type: "words", title: "五个声音锚点", items: [
              { text: "map", ipa: "/mæp/", meaning: "地图" },
              { text: "desk", ipa: "/dɛsk/", meaning: "桌子" },
              { text: "ticket", ipa: "/ˈtɪkɪt/", meaning: "票" },
              { text: "hot", ipa: "/hɑt/", meaning: "热的" },
              { text: "bus", ipa: "/bʌs/", meaning: "公交车" }
            ] },
            { type: "try-first", text: "bag", ipa: "/bæɡ/", meaning: "包", note: "中间的 a 不是字母名称 /eɪ/。" }
          ],
          practice: [
            { type: "listen-choice", prompt: "听音后选单词", audio: { text: "bed" }, options: ["bad", "bed", "bid"], answer: "bed", explanation: "bed 的元音是 /ɛ/。" },
            { type: "listen-choice", prompt: "哪个词和音频一致？", audio: { text: "ship" }, options: ["ship", "sheep", "shop"], answer: "ship", explanation: "ship 中是较短的 /ɪ/，不要拉长。" }
          ]
        }
      ]
    },
    {
      id: "basic-decoding",
      title: "开始自己拼单词",
      subtitle: "从稳定的辅音到简单拼读",
      lessons: [
        {
          id: "en-03",
          title: "常见辅音其实比较稳定",
          subtitle: "先抓住单词两边比较清楚的声音",
          cards: [
            { type: "concept", title: "先找熟悉的辅音", body: "很多常见辅音比元音稳定。看到它们时，可以先猜开头或结尾，再听整词核对。" },
            { type: "words", title: "字母与例词", items: [
              { text: "bag", ipa: "/bæɡ/", meaning: "包", label: "b" },
              { text: "desk", ipa: "/dɛsk/", meaning: "桌子", label: "d" },
              { text: "food", ipa: "/fuːd/", meaning: "食物", label: "f" },
              { text: "map", ipa: "/mæp/", meaning: "地图", label: "m" },
              { text: "passport", ipa: "/ˈpæsˌpɔrt/", meaning: "护照", label: "p" },
              { text: "ticket", ipa: "/ˈtɪkɪt/", meaning: "票", label: "t" }
            ] },
            { type: "try-first", text: "name", ipa: "/neɪm/", meaning: "名字", note: "先抓住开头 n 和结尾 m。" }
          ],
          practice: [
            { type: "choice", prompt: "哪个词以 m 的声音开头？", options: ["map", "bag", "ticket"], answer: "map", explanation: "map 开头是 /m/。" },
            { type: "listen-choice", prompt: "听音后选出单词", audio: { text: "passport" }, options: ["passport", "ticket", "map"], answer: "passport", explanation: "先听开头 /p/，再核对整词。" }
          ]
        },
        {
          id: "en-04",
          title: "把几个声音组合起来",
          subtitle: "从看词听音，走到自己先尝试",
          cards: [
            { type: "concept", title: "从左到右连起来", body: "先找开头辅音，再听中间元音，最后收住结尾。不要在每个字母之间停顿。" },
            { type: "words", title: "短词拼读", items: [
              { text: "bag", ipa: "/bæɡ/", meaning: "包" },
              { text: "bed", ipa: "/bɛd/", meaning: "床" },
              { text: "big", ipa: "/bɪɡ/", meaning: "大的" },
              { text: "map", ipa: "/mæp/", meaning: "地图" },
              { text: "men", ipa: "/mɛn/", meaning: "男士们" },
              { text: "milk", ipa: "/mɪlk/", meaning: "牛奶" }
            ] },
            { type: "try-first", text: "milk", ipa: "/mɪlk/", meaning: "牛奶", note: "先自己连起来读，不必追求一次完全正确。" }
          ],
          practice: [
            { type: "listen-choice", prompt: "听音后选词", audio: { text: "big" }, options: ["bag", "bed", "big"], answer: "big", explanation: "三个词只有中间的元音不同。" },
            { type: "choice", prompt: "拼读短词时，哪种做法更合适？", options: ["每个字母间都停顿", "把几个声音连续合起来", "只读第一个字母"], answer: "把几个声音连续合起来", explanation: "连续合起来，才更接近真实单词。" }
          ]
        },
        {
          id: "en-05",
          title: "结尾的 e 有时会改变前面的声音",
          subtitle: "认识常见的 Magic E 现象",
          cards: [
            { type: "concept", title: "e 常常安静，但会带来变化", body: "单词最后的 e 有时不单独发音，却会让前面的元音发生变化。英语有例外，这是一条线索，不是万能公式。" },
            { type: "words", title: "对比着听", items: [
              { text: "cap → cape", speech: "cap, cape", ipa: "/kæp/ → /keɪp/", meaning: "帽子 → 斗篷" },
              { text: "kit → kite", speech: "kit, kite", ipa: "/kɪt/ → /kaɪt/", meaning: "工具包 → 风筝" },
              { text: "not → note", speech: "not, note", ipa: "/nɑt/ → /noʊt/", meaning: "不 → 便条" }
            ] },
            { type: "try-first", text: "gate", ipa: "/ɡeɪt/", meaning: "登机口", note: "先猜 a 的声音，再播放核对。" }
          ],
          practice: [
            { type: "listen-choice", prompt: "听音后选词", audio: { text: "kite" }, options: ["kit", "kite", "cat"], answer: "kite", explanation: "结尾 e 让 i 在这个词里读 /aɪ/。" },
            { type: "choice", prompt: "下面哪个词符合本课介绍的结尾 e 现象？", options: ["gate", "bag", "bus"], answer: "gate", explanation: "gate 中结尾 e 不单独发音，a 读 /eɪ/。" }
          ]
        }
      ]
    },
    {
      id: "common-patterns",
      title: "最值得认识的字母组合",
      subtitle: "看到常见组合，不再完全陌生",
      lessons: [
        {
          id: "en-06",
          title: "sh、ch、th",
          subtitle: "三个旅行中很常见的组合",
          cards: [
            { type: "concept", title: "把组合看成一个声音线索", body: "看到 sh、ch、th 时，不要把两个字母完全分开念。th 有两种常见声音，先靠听来区分。" },
            { type: "words", title: "三组常见组合", items: [
              { text: "shop · shower · shuttle", speech: "shop, shower, shuttle", ipa: "sh /ʃ/", meaning: "商店 · 淋浴 · 接驳车" },
              { text: "check · chair · lunch", speech: "check, chair, lunch", ipa: "ch /tʃ/", meaning: "检查 · 椅子 · 午餐" },
              { text: "thank · three · this · there", speech: "thank, three, this, there", ipa: "th /θ/ 或 /ð/", meaning: "谢谢 · 三 · 这个 · 那里" }
            ] },
            { type: "try-first", text: "shuttle", ipa: "/ˈʃʌtəl/", meaning: "接驳车", note: "先注意开头 sh 的声音。" }
          ],
          practice: [
            { type: "choice", prompt: "哪个词和 shop 有相同的开头声音？", options: ["shower", "chair", "three"], answer: "shower", explanation: "shop 和 shower 都以 sh /ʃ/ 开头。" },
            { type: "listen-choice", prompt: "听音后选词", audio: { text: "chair" }, options: ["chair", "share", "there"], answer: "chair", explanation: "chair 开头是 ch /tʃ/。" }
          ]
        },
        {
          id: "en-07",
          title: "ee、ea、oo",
          subtitle: "先掌握最常见的读法，也记得会有例外",
          cards: [
            { type: "concept", title: "两个字母常常一起工作", body: "ee、ea、oo 经常作为一个整体影响元音。它们并非永远只有一种读法，本课先建立最常见的声音印象。" },
            { type: "words", title: "旅行中常见的例词", items: [
              { text: "see · street · coffee", speech: "see, street, coffee", ipa: "ee 常见 /iː/", meaning: "看见 · 街道 · 咖啡" },
              { text: "seat · meal · please", speech: "seat, meal, please", ipa: "ea 常见 /iː/", meaning: "座位 · 餐食 · 请" },
              { text: "food · room", speech: "food, room", ipa: "oo 常见 /uː/", meaning: "食物 · 房间" },
              { text: "book", ipa: "/bʊk/", meaning: "书；预订", label: "常见例外" }
            ] },
            { type: "try-first", text: "street", ipa: "/striːt/", meaning: "街道", note: "把 ee 看作一个整体，再试着读。" }
          ],
          practice: [
            { type: "choice", prompt: "哪个词和 see 的元音最接近？", options: ["street", "book", "hot"], answer: "street", explanation: "see 和 street 中的 ee 都读 /iː/。" },
            { type: "listen-choice", prompt: "听音后选词", audio: { text: "room" }, options: ["room", "book", "meal"], answer: "room", explanation: "room 中的 oo 在这里读 /uː/。" }
          ]
        },
        {
          id: "en-08",
          title: "长单词里经常出现的组合",
          subtitle: "先认出 -tion 和 -ture",
          cards: [
            { type: "concept", title: "长词里也有熟面孔", body: "一些看起来很长的单词，结尾其实反复出现。先认出常见部分，就不用把每个词都当成全新的结构。" },
            { type: "words", title: "常见结尾", items: [
              { text: "station", ipa: "/ˈsteɪʃən/", meaning: "车站", label: "-tion" },
              { text: "information", ipa: "/ˌɪnfərˈmeɪʃən/", meaning: "信息", label: "-tion" },
              { text: "reservation", ipa: "/ˌrɛzərˈveɪʃən/", meaning: "预订", label: "-tion" },
              { text: "departure", ipa: "/dɪˈpɑrtʃər/", meaning: "出发", label: "-ture" }
            ] },
            { type: "try-first", text: "station", ipa: "/ˈsteɪʃən/", meaning: "车站", note: "先找出结尾 -tion，再尝试完整读出。" }
          ],
          practice: [
            { type: "choice", prompt: "哪个词包含本课学习的 -tion？", options: ["reservation", "passport", "hotel"], answer: "reservation", explanation: "reservation 结尾包含常见的 -tion。" },
            { type: "listen-choice", prompt: "听音后选词", audio: { text: "departure" }, options: ["departure", "reservation", "station"], answer: "departure", explanation: "departure 结尾包含 -ture。" }
          ]
        }
      ]
    },
    {
      id: "rhythm",
      title: "长单词也不用怕",
      subtitle: "用分块和重音找到节奏",
      lessons: [
        {
          id: "en-09",
          title: "把长单词分开读",
          subtitle: "分块只是读音辅助，不是新的拼写",
          cards: [
            { type: "concept", title: "一小块一小块地听", body: "长单词可以听成几个音节。下面的圆点只帮助你练习节奏，正式书写时仍使用完整单词。" },
            { type: "syllables", title: "读音辅助分块", items: [
              { text: "hotel", ipa: "/hoʊˈtɛl/", meaning: "酒店", chunks: ["ho", "tel"] },
              { text: "ticket", ipa: "/ˈtɪkɪt/", meaning: "票", chunks: ["tick", "et"] },
              { text: "passport", ipa: "/ˈpæsˌpɔrt/", meaning: "护照", chunks: ["pass", "port"] },
              { text: "reservation", ipa: "/ˌrɛzərˈveɪʃən/", meaning: "预订", chunks: ["res", "er", "va", "tion"] },
              { text: "information", ipa: "/ˌɪnfərˈmeɪʃən/", meaning: "信息", chunks: ["in", "for", "ma", "tion"] }
            ] },
            { type: "try-first", text: "information", ipa: "/ˌɪnfərˈmeɪʃən/", meaning: "信息", note: "按 in · for · ma · tion 分块尝试，再连起来。" }
          ],
          practice: [
            { type: "choice", prompt: "哪一种是 reservation 的读音辅助分块？", options: ["res · er · va · tion", "re · servat · ion", "r · e · s · e"], answer: "res · er · va · tion", explanation: "分成四块更容易找到单词节奏。" },
            { type: "choice", prompt: "辅助分块应该用在什么时候？", options: ["练习读音时", "正式填写英文时", "代替单词拼写"], answer: "练习读音时", explanation: "正式书写仍然写 reservation。" }
          ]
        },
        {
          id: "en-10",
          title: "英语单词不是每一部分都一样重",
          subtitle: "找到读得最明显的那一拍",
          cards: [
            { type: "concept", title: "重音让单词有节奏", body: "英语单词里通常有一部分更清楚、更有力。先找到这一拍，长单词会更容易听懂和尝试。" },
            { type: "stress", title: "看见重读位置", items: [
              { text: "hotel", ipa: "/hoʊˈtɛl/", meaning: "酒店", segments: [{ text: "ho" }, { text: "tel", stress: true }] },
              { text: "airport", ipa: "/ˈɛrˌpɔrt/", meaning: "机场", segments: [{ text: "air", stress: true }, { text: "port" }] },
              { text: "passport", ipa: "/ˈpæsˌpɔrt/", meaning: "护照", segments: [{ text: "pass", stress: true }, { text: "port" }] },
              { text: "reservation", ipa: "/ˌrɛzərˈveɪʃən/", meaning: "预订", segments: [{ text: "reser" }, { text: "va", stress: true }, { text: "tion" }] },
              { text: "information", ipa: "/ˌɪnfərˈmeɪʃən/", meaning: "信息", segments: [{ text: "infor" }, { text: "ma", stress: true }, { text: "tion" }] }
            ] },
            { type: "try-first", text: "reservation", ipa: "/ˌrɛzərˈveɪʃən/", meaning: "预订", note: "把 va 这一拍读得更明显。" }
          ],
          practice: [
            { type: "listen-choice", prompt: "听 reservation，重音最接近哪一项？", audio: { text: "reservation" }, options: ["re", "ser", "va"], answer: "va", explanation: "reservation 的主要重音在 va。" },
            { type: "choice", prompt: "information 中哪一部分更明显？", options: ["in", "ma", "tion"], answer: "ma", explanation: "information 的主要重音在 ma。" }
          ]
        }
      ]
    },
    {
      id: "real-speech",
      title: "为什么真人英语听起来不一样",
      subtitle: "提前适应连读、缩略和自然语速",
      lessons: [
        {
          id: "en-11",
          title: "单词放在一起时可能会连起来",
          subtitle: "先比较慢速分开和自然连读",
          cards: [
            { type: "concept", title: "边界可能没有想象中清楚", body: "真实英语不一定把每个单词清楚分开。听不出空格并不代表你没学会，只是声音自然地接在了一起。" },
            { type: "phrases", title: "慢速与自然语速", items: [
              { text: "check in", meaning: "办理入住；值机" },
              { text: "turn off", meaning: "关闭" },
              { text: "an apple", meaning: "一个苹果" }
            ] },
            { type: "try-first", text: "check in", ipa: "/ˌtʃɛk ˈɪn/", meaning: "办理入住；值机", note: "先自然连起来读，再比较两种语速。", dualSpeed: true }
          ],
          practice: [
            { type: "listen-choice", prompt: "听自然语速，选出对应内容", audio: { text: "check in", rate: "natural" }, options: ["check in", "check out", "chicken"], answer: "check in", explanation: "结尾的 k 会自然接向后面的元音。" },
            { type: "choice", prompt: "真人英语里，单词之间通常怎样？", options: ["永远完全分开", "有时会自然连起来", "每个词后都长时间停顿"], answer: "有时会自然连起来", explanation: "先知道这种现象，真实听力会更有心理准备。" }
          ]
        },
        {
          id: "en-12",
          title: "缩略与自然语速",
          subtitle: "书面形式和真人听感可能不完全一样",
          cards: [
            { type: "concept", title: "把缩略形式当成一个声音整体", body: "It's、What's、Where's、They're 等写法在连续朗读中不会逐字母念出。这里只练文字与听感，不展开句型用途。" },
            { type: "phrases", title: "短句中的缩略与弱读", items: [
              { text: "It's a map.", meaning: "只作缩略读音练习" },
              { text: "What's on the table?", meaning: "只作连读练习" },
              { text: "Where's Anna?", meaning: "只作缩略读音练习" },
              { text: "They're at home.", meaning: "只作弱读练习" }
            ] },
            { type: "try-first", text: "What's on the table?", ipa: "/wʌts ɑn ðə ˈteɪbəl/", meaning: "只作短句节奏练习", note: "先尝试完整读出，再比较慢速和自然语速。", dualSpeed: true }
          ],
          practice: [
            { type: "choice", prompt: "Where's 在这里最接近哪两个词的缩略？", options: ["Where is", "Where does", "Where did"], answer: "Where is", explanation: "先把 Where's 作为一个连续的声音整体来读。" },
            { type: "listen-choice", prompt: "听自然语速，选出对应句子", audio: { text: "It's a map.", rate: "natural" }, options: ["It's a map.", "Is it a map?", "It's a bag."], answer: "It's a map.", explanation: "注意 It's 与后面的弱读 a 连续衔接。" }
          ]
        }
      ]
    }
  ],
  placement: [
    { category: "声音辨识", type: "listen-choice", prompt: "听音后选出单词", audio: { text: "sit" }, options: ["sit", "seat", "set"], answer: "sit" },
    { category: "声音辨识", type: "listen-choice", prompt: "听音后选出单词", audio: { text: "bed" }, options: ["bad", "bed", "bid"], answer: "bed" },
    { category: "声音辨识", type: "listen-choice", prompt: "听音后选出单词", audio: { text: "ship" }, options: ["ship", "sheep", "shop"], answer: "ship" },
    { category: "拼读规律", type: "choice", prompt: "哪个词以 sh 的声音开头？", options: ["shuttle", "chair", "three"], answer: "shuttle" },
    { category: "拼读规律", type: "choice", prompt: "哪个词包含常见的结尾 -tion？", options: ["station", "passport", "hotel"], answer: "station" },
    { category: "拼读规律", type: "listen-choice", prompt: "听音后选出符合结尾 e 规律的词", audio: { text: "gate" }, options: ["gate", "get", "gap"], answer: "gate" },
    { category: "音节与重音", type: "choice", prompt: "reservation 的读音辅助分块是哪一项？", options: ["res · er · va · tion", "re · servat · ion", "r · e · s · e"], answer: "res · er · va · tion" },
    { category: "音节与重音", type: "listen-choice", prompt: "听 reservation，哪一部分重读？", audio: { text: "reservation" }, options: ["re", "ser", "va"], answer: "va" },
    { category: "音节与重音", type: "choice", prompt: "hotel 的主要重音在哪一部分？", options: ["ho", "tel", "两部分完全一样"], answer: "tel" },
    { category: "真实听感", type: "listen-choice", prompt: "听自然语速，选出对应内容", audio: { text: "check in", rate: "natural" }, options: ["check in", "check out", "chicken"], answer: "check in" },
    { category: "真实听感", type: "choice", prompt: "Where's Anna? 中 Where's 怎样展开？", options: ["Where is", "Where does", "Where did"], answer: "Where is" },
    { category: "真实听感", type: "listen-choice", prompt: "听自然语速，选出对应句子", audio: { text: "It's a map.", rate: "natural" }, options: ["It's a map.", "Is it a map?", "It's a bag."], answer: "It's a map." }
  ],
  challenge: [
    { text: "map", ipa: "/mæp/", meaning: "地图" },
    { text: "gate", ipa: "/ɡeɪt/", meaning: "登机口" },
    { text: "shuttle", ipa: "/ˈʃʌtəl/", meaning: "接驳车" },
    { text: "station", ipa: "/ˈsteɪʃən/", meaning: "车站" },
    { text: "It's a map.", ipa: "/ɪts ə mæp/", meaning: "只作缩略与弱读练习" },
    { text: "What's on the table?", ipa: "/wʌts ɑn ðə ˈteɪbəl/", meaning: "只作短句节奏练习" }
  ]
});
