(function (app) {
  "use strict";

  const LANGUAGES = [
    { id: "ja", label: "日语", nativeLabel: "日本語", locale: "ja-JP" },
    { id: "en", label: "英语", nativeLabel: "English", locale: "en-US" }
  ];

  const FOUNDATION = {
    id: "foundation",
    title: "旅行基础",
    description: "数字、时间、礼貌表达等通用基础。可选学习，不影响场景浏览。",
    status: "curation",
    candidateSourceCategories: ["numbers", "expressions"]
  };

  // A scenario is marked ready only when an existing source category has the same
  // practical meaning. Mixed source categories remain unavailable until entries
  // are reviewed individually; this avoids duplicating or guessing content.
  const SCENARIOS = [
    {
      id: "airport-immigration",
      title: "机场与入境",
      description: "值机、安检、海关与入境沟通",
      icon: "plane",
      status: "curation",
      candidateSourceCategories: ["airport"]
    },
    {
      id: "transportation",
      title: "交通出行",
      description: "车站、出租车、路线与时间",
      icon: "train",
      status: "curation",
      candidateSourceCategories: ["airport", "directions", "numbers"]
    },
    {
      id: "hotel",
      title: "酒店住宿",
      description: "预订、入住、设施与退房",
      icon: "bed",
      status: "ready",
      sourceCategories: ["hotel"]
    },
    {
      id: "restaurant",
      title: "餐厅用餐",
      description: "点餐、口味、结账与用餐沟通",
      icon: "utensils",
      status: "ready",
      sourceCategories: ["food"]
    },
    {
      id: "shopping",
      title: "购物",
      description: "价格、尺寸、试用与付款",
      icon: "bag",
      status: "ready",
      sourceCategories: ["shopping"]
    },
    {
      id: "attractions",
      title: "景点游览",
      description: "购票、开放时间、路线与参观沟通",
      icon: "map",
      status: "curation",
      candidateSourceCategories: ["directions", "numbers", "expressions"]
    },
    {
      id: "daily-communication",
      title: "日常沟通",
      description: "问候、礼貌表达与常用交流",
      icon: "message",
      status: "ready",
      sourceCategories: ["expressions"]
    },
    {
      id: "emergency",
      title: "紧急情况",
      description: "求助、健康、安全与紧急联系",
      icon: "medical",
      status: "ready",
      sourceCategories: ["emergency"]
    }
  ];

  function entries() {
    return Array.isArray(window.WORD_BANK) ? window.WORD_BANK : [];
  }

  function language(id) {
    return LANGUAGES.find((item) => item.id === id) || LANGUAGES[0];
  }

  function scenario(id) {
    return SCENARIOS.find((item) => item.id === id) || null;
  }

  function scenarioEntries(id) {
    const item = scenario(id);
    if (!item || item.status !== "ready") return [];
    const categories = new Set(item.sourceCategories);
    return entries().filter((entry) => categories.has(entry.category));
  }

  function scenarioCounts(id) {
    const mapped = scenarioEntries(id);
    return {
      total: mapped.length,
      words: mapped.filter((entry) => entry.type === "word").length,
      phrases: mapped.filter((entry) => entry.type === "phrase").length
    };
  }

  app.catalog = {
    LANGUAGES,
    FOUNDATION,
    SCENARIOS,
    language,
    scenario,
    scenarioEntries,
    scenarioCounts
  };
})(window.TravelVocabApp = window.TravelVocabApp || {});
