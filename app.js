(function () {
  "use strict";

  const LEARNING_KEY = "yujianWorld.learning.v1";
  const LANG_KEY = "yujianWorld.lang.v1";
  const MIGRATION_KEY = "yujianWorld.migrated.v1";
  const INSTALL_HINT_KEY = "yujianWorld.installHintDismissed.v1";
  const LEARNING_BATCH_SIZE = 5;
  const REVIEW_BATCH_SIZE = 10;
  const LANGS = new Set(["ja", "en"]);
  const MAIN_TABS = new Set(["home", "review", "tools", "me"]);
  const LANG_OPTIONS = [
    { value: "ja", label: "日语", helper: "日本語" },
    { value: "en", label: "英语", helper: "English" }
  ];
  const SPEAKER_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8a5 5 0 0 1 0 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  const ICONS = {
    review: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 5v6h-6"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>',
    card: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="8" cy="11" r="2"/><path d="M5.5 16c.7-1.5 1.5-2.2 2.5-2.2s1.8.7 2.5 2.2M13 10h5M13 14h5"/></svg>',
    translate: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h10M9 3v2c0 5-2 8-6 10M6 9c1.5 2.5 3.5 4.5 6 6M14 21l4-10 4 10M15.5 17h5"/></svg>',
    language: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
    install: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 17v3h14v-3"/></svg>',
    trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 3h6l1 4H8l1-4ZM6 7l1 14h10l1-14M10 11v6M14 11v6"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 6v5c0 4.6 2.8 8.2 7 10 4.2-1.8 7-5.4 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-5"/></svg>',
    warning: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 20h18.4L12 3z"/><path d="M12 9v5M12 17.2v.1"/></svg>',
    airport: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 9.5 9 3 12v2l7-1.5V18l-2 2v2l4-1 4 1v-2l-2-2v-5.5l7 1.5v-2L14.5 9 12 2Z"/></svg>',
    transport: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="16" rx="4"/><path d="M8 7h8v5H8zM8 19l-2 2M16 19l2 2"/><circle cx="8.5" cy="15.5" r=".7" fill="currentColor"/><circle cx="15.5" cy="15.5" r=".7" fill="currentColor"/></svg>',
    hotel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V5h10v15M14 10h6v10M8 9h2M8 13h2M8 17h2M17 14h1M17 17h1M2 20h20"/></svg>',
    food: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v7M4 3v5a3 3 0 0 0 6 0V3M7 10v11M16 3v18M16 3c3 2 4 5 4 8h-4"/></svg>',
    shopping: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8zM9 9V6a3 3 0 0 1 6 0v3"/></svg>',
    directions: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2z"/></svg>',
    emergency: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z"/></svg>',
    basics: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4V5z"/><path d="M8 9h8M8 12h5"/></svg>'
  };

  const view = document.getElementById("view");
  const bottomNav = document.getElementById("bottomNav");
  const toastEl = document.getElementById("toast");
  const state = {
    lang: null,
    tab: "home",
    learning: null,
    quiz: null,
    answered: false,
    selectedId: null,
    questionToken: 0,
    speechToken: 0,
    emergencyCard: null
  };
  let toastTimer = null;
  let activeAudio = null;
  let cancelActiveAudio = null;
  let deferredInstallPrompt = null;

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function iconSvg(name) { return ICONS[name] || ICONS.basics; }
  function shuffle(input) {
    const items = input.slice();
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }
  function clampInt(value, max) {
    const number = Number(value);
    if (!Number.isFinite(number) || number < 0) return 0;
    return Math.min(Math.floor(number), max == null ? Number.MAX_SAFE_INTEGER : max);
  }
  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 3000);
  }
  function scrollToTop() { window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }
  function langLabel(lang) { return lang === "ja" ? "日语" : "英语"; }
  function sceneById(id) { return window.SCENE_PACKS.find((scene) => scene.id === id); }
  function situationById(scene, id) { return scene?.situations.find((situation) => situation.id === id); }
  function sceneWords(sceneId) { return window.WORD_BANK.filter((entry) => entry.scene === sceneId); }
  function situationWords(sceneId, situationId) {
    return window.WORD_BANK.filter((entry) => entry.scene === sceneId && entry.situation === situationId);
  }
  function foreignText(entry) { return state.lang === "ja" ? entry.ja : entry.en; }
  function foreignContentHtml(entry, includeReading = true) {
    return state.lang === "ja"
      ? `<span class="answer-ja">${escapeHtml(entry.ja)}</span>${includeReading ? `<span class="answer-reading">${escapeHtml(entry.reading)}</span>` : ""}`
      : `<span class="answer-en">${escapeHtml(entry.en)}</span>`;
  }
  function audioButtonHtml(entry) {
    return `<button class="speak-btn" type="button" aria-label="播放${langLabel(state.lang)}：${escapeHtml(foreignText(entry))}" data-entry-id="${escapeHtml(entry.id)}">${SPEAKER_SVG}</button>`;
  }

  function emptyLanguageState() { return { byId: {}, weakIds: [], lastLocation: null }; }
  function defaultLearningEnvelope() { return { ja: emptyLanguageState(), en: emptyLanguageState() }; }
  function validLocation(location) {
    const scene = sceneById(location?.sceneId);
    return scene && situationById(scene, location?.situationId)
      ? { sceneId: scene.id, situationId: location.situationId }
      : null;
  }
  function normalizeLanguageState(input) {
    const output = emptyLanguageState();
    const validIds = new Set(window.WORD_BANK.map((entry) => entry.id));
    Object.entries(input?.byId || {}).forEach(([id, record]) => {
      if (!validIds.has(id) || !["introduced", "mastered"].includes(record?.status)) return;
      output.byId[id] = {
        status: record.status,
        reviewAttempts: clampInt(record.reviewAttempts),
        reviewCorrect: clampInt(record.reviewCorrect, clampInt(record.reviewAttempts)),
        lastSeen: clampInt(record.lastSeen)
      };
    });
    output.weakIds = Array.isArray(input?.weakIds)
      ? Array.from(new Set(input.weakIds.filter((id) => validIds.has(id) && output.byId[id]?.status === "mastered")))
      : [];
    output.lastLocation = validLocation(input?.lastLocation);
    return output;
  }
  function loadLearningEnvelope() {
    try {
      const raw = JSON.parse(localStorage.getItem(LEARNING_KEY));
      return { ja: normalizeLanguageState(raw?.ja), en: normalizeLanguageState(raw?.en) };
    } catch (error) {
      return defaultLearningEnvelope();
    }
  }
  function loadLearning(lang = state.lang) {
    return loadLearningEnvelope()[lang] || emptyLanguageState();
  }
  function saveLearning(languageState, lang = state.lang) {
    try {
      const envelope = loadLearningEnvelope();
      envelope[lang] = normalizeLanguageState(languageState);
      localStorage.setItem(LEARNING_KEY, JSON.stringify(envelope));
    } catch (error) {
      console.warn("无法保存学习数据", error);
    }
  }
  function updateWordRecord(entry, updater) {
    const learning = loadLearning();
    const current = learning.byId[entry.id] || {
      status: "introduced", reviewAttempts: 0, reviewCorrect: 0, lastSeen: 0
    };
    learning.byId[entry.id] = updater({ ...current });
    saveLearning(learning);
  }
  function markIntroduced(entry) {
    updateWordRecord(entry, (record) => ({
      ...record,
      status: record.status === "mastered" ? "mastered" : "introduced",
      lastSeen: Date.now()
    }));
  }
  function markMastered(entry) {
    updateWordRecord(entry, (record) => ({ ...record, status: "mastered", lastSeen: Date.now() }));
  }
  function recordReview(entry, isCorrect) {
    const learning = loadLearning();
    const record = learning.byId[entry.id];
    if (!record || record.status !== "mastered") return;
    record.reviewAttempts = clampInt(record.reviewAttempts) + 1;
    record.reviewCorrect = clampInt(record.reviewCorrect) + (isCorrect ? 1 : 0);
    record.lastSeen = Date.now();
    const weak = new Set(learning.weakIds);
    if (isCorrect) weak.delete(entry.id); else weak.add(entry.id);
    learning.weakIds = Array.from(weak);
    saveLearning(learning);
  }
  function setLastLocation(sceneId, situationId) {
    const learning = loadLearning();
    learning.lastLocation = validLocation({ sceneId, situationId });
    saveLearning(learning);
  }
  function saveLang(lang) {
    if (!LANGS.has(lang)) return;
    state.lang = lang;
    try { localStorage.setItem(LANG_KEY, lang); }
    catch (error) { console.warn("无法保存语言设置", error); }
  }
  function loadLang() {
    try {
      const value = localStorage.getItem(LANG_KEY);
      return LANGS.has(value) ? value : null;
    } catch (error) {
      return null;
    }
  }
  function migrateLegacyData() {
    try {
      if (localStorage.getItem(MIGRATION_KEY) === "1") return;
      const oldLang = localStorage.getItem("travelVocab.lang.v1");
      if (!localStorage.getItem(LANG_KEY) && LANGS.has(oldLang)) localStorage.setItem(LANG_KEY, oldLang);
      [
        "travelVocab.stats.v1", "travelVocab.stats.v2",
        "travelVocab.wrongIds.v1", "travelVocab.wrongIds.v2",
        "travelVocab.lang.v1", "travelVocab.migrated.v2",
        "travelVocab.installHintDismissed.v1"
      ].forEach((key) => localStorage.removeItem(key));
      localStorage.setItem(MIGRATION_KEY, "1");
    } catch (error) {
      console.warn("无法完成学习数据升级", error);
    }
  }

  function stopSpeech() {
    state.speechToken += 1;
    if (cancelActiveAudio) cancelActiveAudio();
    try { window.speechSynthesis?.cancel(); }
    catch (error) { console.warn("无法停止语音", error); }
  }
  function speechTimeout(text) {
    return Math.min(8000, Math.max(3000, 1800 + Array.from(String(text)).length * 140));
  }
  function playSpeech(entry, quiet = false) {
    stopSpeech();
    const token = state.speechToken;
    const language = state.lang;
    const text = foreignText(entry);
    return new Promise((resolve) => {
      const audio = new Audio(`audio/${language}/${entry.id}.mp3`);
      let settled = false;
      const finish = (status) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        audio.onended = null;
        audio.onerror = null;
        audio.pause();
        if (activeAudio === audio) activeAudio = null;
        if (cancelActiveAudio === cancel) cancelActiveAudio = null;
        if (status === "error" && "speechSynthesis" in window && token === state.speechToken) {
          try {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = language === "ja" ? "ja-JP" : "en-US";
            utterance.rate = .88;
            utterance.onend = () => resolve({ status: "played" });
            utterance.onerror = () => resolve({ status: "error" });
            window.speechSynthesis.speak(utterance);
            return;
          } catch (error) { /* fallback failed */ }
        }
        if (status === "error" && !quiet) showToast("语音播放失败，请检查音频或系统语音设置");
        resolve({ status });
      };
      const cancel = () => finish("canceled");
      const timer = setTimeout(() => finish("error"), speechTimeout(text) + 2000);
      activeAudio = audio;
      cancelActiveAudio = cancel;
      audio.preload = "auto";
      audio.onended = () => finish("played");
      audio.onerror = () => finish("error");
      try {
        const promise = audio.play();
        if (promise?.catch) promise.catch(() => finish("error"));
      } catch (error) {
        finish("error");
      }
    });
  }
  function bindSpeechButtons(root = view) {
    root.querySelectorAll(".speak-btn").forEach((button) => button.addEventListener("click", () => {
      const entry = window.WORD_BANK.find((item) => item.id === button.dataset.entryId);
      if (entry) void playSpeech(entry);
    }));
  }

  function validateData() {
    const problems = [];
    if (!Array.isArray(window.SCENE_PACKS) || !Array.isArray(window.WORD_BANK)) return ["找不到旅行场景或词库数据。"];
    const scenes = new Map(window.SCENE_PACKS.map((scene) => [scene.id, new Set(scene.situations.map((item) => item.id))]));
    const ids = new Set();
    window.WORD_BANK.forEach((entry, index) => {
      ["id", "scene", "situation", "zh", "ja", "reading", "en", "type"].forEach((field) => {
        if (typeof entry?.[field] !== "string" || !entry[field].trim()) problems.push(`第 ${index + 1} 条的 ${field} 字段无效。`);
      });
      if (ids.has(entry.id)) problems.push(`词条 ID 重复：${entry.id}`);
      ids.add(entry.id);
      if (!scenes.has(entry.scene)) problems.push(`未知旅行场景：${entry.scene}`);
      else if (!scenes.get(entry.scene).has(entry.situation)) problems.push(`未知小情境：${entry.scene}/${entry.situation}`);
    });
    window.SCENE_PACKS.forEach((scene) => {
      scene.situations.forEach((situation) => {
        if (!window.WORD_BANK.some((entry) => entry.scene === scene.id && entry.situation === situation.id)) {
          problems.push(`小情境没有内容：${scene.id}/${situation.id}`);
        }
      });
    });
    return problems;
  }

  function parseRoute() {
    const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (!parts.length) return { name: "home" };
    if (parts[0] === "test") return { name: "legacy-test" };
    if (parts[0] === "tools" && parts[1] === "emergency-card") {
      return { name: parts[2] === "preview" ? "emergency-card-preview" : "emergency-card-form" };
    }
    if (MAIN_TABS.has(parts[0])) return { name: parts[0] };
    if (parts[0] === "scene" && parts[1]) return { name: "scene", sceneId: parts[1] };
    if (parts[0] === "learn" && parts[1] && parts[2]) {
      return { name: "learn", sceneId: parts[1], situationId: parts[2] };
    }
    return { name: "home" };
  }
  function routeTab(route) {
    if (route.name === "scene" || route.name === "learn") return "home";
    if (route.name.startsWith("emergency-card")) return "tools";
    return MAIN_TABS.has(route.name) ? route.name : "home";
  }
  function navigatePath(path, replace = false) {
    const hash = `#/${String(path).replace(/^#?\/?/, "")}`;
    if (window.location.hash === hash) {
      renderRoute();
      return;
    }
    if (replace) {
      history.replaceState(null, "", hash);
      renderRoute();
    } else {
      window.location.hash = hash;
    }
  }
  function updateShell(tab, immersive = false) {
    document.body.classList.toggle("is-immersive", immersive);
    bottomNav.hidden = immersive;
    if (immersive) return;
    bottomNav.querySelectorAll(".nav-item").forEach((item) => {
      if (item.dataset.tab === tab) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
  }
  function renderRoute() {
    if (!state.lang) {
      renderLanguageWelcome();
      return;
    }
    document.body.classList.remove("is-onboarding");
    const route = parseRoute();
    if (route.name === "legacy-test") {
      navigatePath("review", true);
      return;
    }
    state.tab = routeTab(route);
    if (route.name !== "learn") state.learning = null;
    state.quiz = null;
    updateShell(state.tab, route.name === "learn" || route.name.startsWith("emergency-card"));
    if (route.name === "review") renderReview();
    else if (route.name === "tools") renderTools();
    else if (route.name === "me") renderMe();
    else if (route.name === "emergency-card-form") renderEmergencyCardForm();
    else if (route.name === "emergency-card-preview") void renderEmergencyCardPreview();
    else if (route.name === "scene") renderScene(route.sceneId);
    else if (route.name === "learn") beginLearningRoute(route.sceneId, route.situationId);
    else renderHome();
  }

  function renderLanguageWelcome() {
    stopSpeech();
    document.body.classList.add("is-onboarding");
    bottomNav.hidden = true;
    view.innerHTML = `<section class="welcome page-enter" aria-labelledby="welcomeTitle">
      <img src="icons/icon-192.png" width="96" height="96" alt="" class="welcome-icon">
      <span class="eyebrow">欢迎来到语见世界</span>
      <h1 id="welcomeTitle">这趟旅行，想先学哪种语言？</h1>
      <p>不必学完整一门语言。先选择日语或英语，再自由进入真正用得上的旅行场景。</p>
      <div class="welcome-options">${LANG_OPTIONS.map((item) => `<button class="language-choice" type="button" data-lang="${item.value}"><span>${item.label}</span><small>${item.helper}</small></button>`).join("")}</div>
    </section>`;
    view.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => {
      saveLang(button.dataset.lang);
      document.body.classList.remove("is-onboarding");
      navigatePath("home", true);
    }));
    scrollToTop();
  }

  function sceneProgress(sceneId, learning = loadLearning()) {
    const words = sceneWords(sceneId);
    const introduced = words.filter((entry) => learning.byId[entry.id]?.status === "introduced").length;
    const mastered = words.filter((entry) => learning.byId[entry.id]?.status === "mastered").length;
    return { total: words.length, introduced, mastered };
  }
  function situationProgress(sceneId, situationId, learning = loadLearning()) {
    const words = situationWords(sceneId, situationId);
    const introduced = words.filter((entry) => learning.byId[entry.id]?.status === "introduced").length;
    const mastered = words.filter((entry) => learning.byId[entry.id]?.status === "mastered").length;
    return { total: words.length, introduced, mastered };
  }
  function statusFor(progress) {
    if (progress.mastered === progress.total && progress.total) return { mark: "✓", label: "已掌握", className: "done" };
    if (progress.mastered || progress.introduced) return { mark: "▶", label: "学习中", className: "active" };
    return { mark: "○", label: "未开始", className: "new" };
  }

  function renderHome() {
    stopSpeech();
    const learning = loadLearning();
    const last = learning.lastLocation;
    let lastScene = sceneById(last?.sceneId);
    let lastSituation = situationById(lastScene, last?.situationId);
    if (lastScene && lastSituation) {
      const progress = situationProgress(lastScene.id, lastSituation.id, learning);
      if (progress.mastered === progress.total) lastSituation = firstIncompleteSituation(lastScene, learning);
      if (!lastSituation) lastScene = null;
    }
    const cards = window.SCENE_PACKS.map((scene) => {
      const progress = sceneProgress(scene.id, learning);
      const percentage = progress.total ? Math.round(progress.mastered / progress.total * 100) : 0;
      return `<button class="category-card scene-card" type="button" data-scene="${escapeHtml(scene.id)}">
        <span class="category-icon" aria-hidden="true">${iconSvg(scene.id)}</span>
        <span class="category-copy"><strong>${escapeHtml(scene.name)}</strong><small>${escapeHtml(scene.description)}</small>
          <span class="scene-progress-copy">已掌握 ${progress.mastered} / ${progress.total}</span>
          <span class="mini-progress" aria-hidden="true"><i style="width:${percentage}%"></i></span>
        </span><span class="chevron" aria-hidden="true">›</span>
      </button>`;
    }).join("");
    view.innerHTML = `<div class="home page-enter">
      <section class="journey-hero compact-hero">
        <div><span class="status-pill"><i></i>${langLabel(state.lang)}学习中</span>
          <h2>只学这趟旅行用得上的</h2>
          <p>自由选择场景，不设关卡，也不必按顺序学习。</p>
        </div>
      </section>
      <button class="primary-card continue-card" type="button" data-continue>
        <span class="primary-icon" aria-hidden="true">${iconSvg("review")}</span>
        <span><strong>${lastSituation ? "继续学习" : "开始学习"}</strong>
          <small>${lastSituation ? `${lastScene.name} · ${lastSituation.name}` : "从下面选择这趟旅行需要的场景"}</small>
        </span><span aria-hidden="true">›</span>
      </button>
      <div class="section-heading" id="sceneHeading" tabindex="-1"><div><span class="eyebrow">自由选择</span><h2>旅行场景</h2></div><span>${window.SCENE_PACKS.length} 个学习包</span></div>
      <div class="category-grid" id="sceneList">${cards}</div>
    </div>`;
    view.querySelector("[data-continue]").addEventListener("click", () => {
      if (lastScene && lastSituation) navigatePath(`learn/${lastScene.id}/${lastSituation.id}`);
      else {
        const heading = view.querySelector("#sceneHeading");
        heading.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
        heading.focus({ preventScroll: true });
      }
    });
    view.querySelectorAll("[data-scene]").forEach((button) => button.addEventListener("click", () => {
      navigatePath(`scene/${button.dataset.scene}`);
    }));
    scrollToTop();
  }

  function firstIncompleteSituation(scene, learning) {
    const last = learning.lastLocation;
    if (last?.sceneId === scene.id) {
      const candidate = situationById(scene, last.situationId);
      if (candidate && situationProgress(scene.id, candidate.id, learning).mastered < situationProgress(scene.id, candidate.id, learning).total) return candidate;
    }
    return scene.situations.find((situation) => {
      const progress = situationProgress(scene.id, situation.id, learning);
      return progress.mastered < progress.total;
    }) || null;
  }
  function renderScene(sceneId) {
    stopSpeech();
    const scene = sceneById(sceneId);
    if (!scene) {
      showToast("找不到这个旅行场景");
      navigatePath("home", true);
      return;
    }
    const learning = loadLearning();
    const progress = sceneProgress(scene.id, learning);
    const percentage = progress.total ? Math.round(progress.mastered / progress.total * 100) : 0;
    const next = firstIncompleteSituation(scene, learning);
    const situations = scene.situations.map((situation) => {
      const situationState = situationProgress(scene.id, situation.id, learning);
      const status = statusFor(situationState);
      return `<button class="situation-row" type="button" data-situation="${escapeHtml(situation.id)}">
        <span class="situation-status ${status.className}" aria-hidden="true">${status.mark}</span>
        <span><strong>${escapeHtml(situation.name)}</strong><small>${status.label} · ${situationState.mastered}/${situationState.total}</small></span>
        <span class="chevron" aria-hidden="true">›</span>
      </button>`;
    }).join("");
    view.innerHTML = `<div class="scene-detail page-enter">
      <button class="back-link" type="button" data-back>‹ 返回首页</button>
      <section class="scene-hero">
        <span class="category-icon scene-hero-icon" aria-hidden="true">${iconSvg(scene.id)}</span>
        <div><span class="eyebrow">旅行语言学习包</span><h2>${escapeHtml(scene.name)}</h2><p>${escapeHtml(scene.description)}</p></div>
        <div class="scene-total"><strong>已掌握 ${progress.mastered} / ${progress.total}</strong><span>${percentage}%</span></div>
        <div class="progress-track" role="progressbar" aria-label="${escapeHtml(scene.name)}掌握进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percentage}"><span style="width:${percentage}%"></span></div>
        <button class="primary-btn" type="button" data-scene-continue ${next ? "" : "disabled"}>${next ? "继续学习" : "这个场景已全部掌握"}</button>
      </section>
      <div class="section-heading"><div><span class="eyebrow">自由选择</span><h2>学习内容</h2></div><span>${scene.situations.length} 个小情境</span></div>
      <div class="situation-list">${situations}</div>
    </div>`;
    view.querySelector("[data-back]").addEventListener("click", () => navigatePath("home"));
    view.querySelector("[data-scene-continue]")?.addEventListener("click", () => {
      if (next) navigatePath(`learn/${scene.id}/${next.id}`);
    });
    view.querySelectorAll("[data-situation]").forEach((button) => button.addEventListener("click", () => {
      navigatePath(`learn/${scene.id}/${button.dataset.situation}`);
    }));
    scrollToTop();
  }

  function selectLearningBatch(sceneId, situationId) {
    const learning = loadLearning();
    const pool = situationWords(sceneId, situationId);
    const introduced = pool.filter((entry) => learning.byId[entry.id]?.status === "introduced");
    const unseen = pool.filter((entry) => !learning.byId[entry.id]);
    return introduced.concat(unseen).slice(0, LEARNING_BATCH_SIZE);
  }
  function beginLearningRoute(sceneId, situationId) {
    const scene = sceneById(sceneId);
    const situation = situationById(scene, situationId);
    if (!scene || !situation) {
      showToast("找不到这个学习情境");
      navigatePath("home", true);
      return;
    }
    updateShell("home", true);
    if (state.learning?.sceneId === sceneId && state.learning?.situationId === situationId) {
      renderLearningPhase();
      return;
    }
    setLastLocation(sceneId, situationId);
    const batch = selectLearningBatch(sceneId, situationId);
    state.learning = { sceneId, situationId, batch, groupSize: batch.length, index: 0, phase: batch.length ? "introduce" : "complete" };
    renderLearningPhase();
  }
  function renderLearningPhase() {
    if (!state.learning) return;
    if (state.learning.phase === "retry-review") renderRetryReview();
    else if (state.learning.phase === "batch-complete" || state.learning.phase === "complete") renderLearningComplete();
    else renderIntroduction();
  }
  function renderIntroduction() {
    stopSpeech();
    updateShell("home", true);
    const learning = state.learning;
    const scene = sceneById(learning.sceneId);
    const situation = situationById(scene, learning.situationId);
    const entry = learning.batch[learning.index];
    const current = learning.index + 1;
    const total = learning.batch.length;
    const progress = Math.round(current / total * 100);
    view.innerHTML = `<div class="lesson page-enter">
      <div class="quiz-top"><button class="text-btn" type="button" data-quit>退出</button><strong>${escapeHtml(situation.name)}</strong><span>${current} / ${total}</span></div>
      <div class="progress-track" role="progressbar" aria-label="认识进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></div>
      <section class="recognition-card" tabindex="-1" aria-labelledby="recognitionWord">
        <span class="question-meta">认识这句话</span>
        <div class="recognition-foreign"><h2 id="recognitionWord">${escapeHtml(foreignText(entry))}</h2>${audioButtonHtml(entry)}</div>
        ${state.lang === "ja" ? `<p class="recognition-reading">${escapeHtml(entry.reading)}</p>` : ""}
        <div class="recognition-divider"></div>
        <strong class="recognition-zh">${escapeHtml(entry.zh)}</strong>
        <small>${entry.type === "phrase" ? "旅行短句" : "旅行词汇"} · ${escapeHtml(scene.name)}</small>
      </section>
      <p class="lesson-hint">先听一遍并读出声，不需要死记。小测会帮你确认是否真正认得。</p>
    </div>
    <div class="quiz-actions lesson-actions">
      <button class="secondary-btn lesson-listen" type="button" data-listen>再听一遍</button>
      <button class="primary-btn" type="button" data-next>${current === total ? "开始小测" : "下一个"}</button>
    </div>`;
    view.querySelector("[data-quit]").addEventListener("click", exitLearning);
    view.querySelector("[data-listen]").addEventListener("click", () => void playSpeech(entry));
    view.querySelector("[data-next]").addEventListener("click", () => {
      markIntroduced(entry);
      if (learning.index >= learning.batch.length - 1) startLearningQuiz(learning.batch);
      else {
        learning.index += 1;
        renderIntroduction();
      }
    });
    bindSpeechButtons();
    scrollToTop();
    requestAnimationFrame(() => view.querySelector(".recognition-card")?.focus({ preventScroll: true }));
  }

  function answerSignature(entry, direction) {
    const value = direction === "reverse" ? entry.zh : foreignText(entry);
    return String(value || "").trim().toLocaleLowerCase(state.lang === "en" ? "en" : "ja");
  }
  function buildOptions(correct, direction, preferred = []) {
    const chosen = [];
    const ids = new Set([correct.id]);
    const signatures = new Set([answerSignature(correct, direction)]);
    const tiers = [
      preferred,
      situationWords(correct.scene, correct.situation),
      sceneWords(correct.scene),
      window.WORD_BANK.filter((item) => item.type === correct.type),
      window.WORD_BANK
    ];
    tiers.forEach((tier) => shuffle(tier).forEach((item) => {
      const signature = answerSignature(item, direction);
      if (chosen.length >= 3 || ids.has(item.id) || !signature || signatures.has(signature)) return;
      chosen.push(item);
      ids.add(item.id);
      signatures.add(signature);
    }));
    if (chosen.length < 3) throw new Error(`无法为 ${correct.id} 生成四个唯一答案`);
    return shuffle([correct].concat(chosen));
  }
  function makeQuestionSet(entries, mode) {
    const items = mode.kind === "learning" ? entries.slice() : shuffle(entries).slice(0, REVIEW_BATCH_SIZE);
    const reviewStartsForward = Math.random() < .5;
    return items.map((entry, index) => ({
      entry,
      direction: mode.kind === "learning"
        ? "forward"
        : ((index % 2 === 0) === reviewStartsForward ? "forward" : "reverse")
    }));
  }
  function startLearningQuiz(entries) {
    state.quiz = {
      mode: { kind: "learning", sceneId: state.learning.sceneId, situationId: state.learning.situationId },
      questions: makeQuestionSet(entries, { kind: "learning" }),
      preferred: entries,
      index: 0,
      score: 0,
      wrong: []
    };
    renderQuestion();
  }
  function masteredWords(filter = {}) {
    const learning = loadLearning();
    const weak = new Set(learning.weakIds);
    return window.WORD_BANK.filter((entry) => {
      if (learning.byId[entry.id]?.status !== "mastered") return false;
      if (filter.weak && !weak.has(entry.id)) return false;
      if (filter.sceneId && entry.scene !== filter.sceneId) return false;
      if (filter.situationId && entry.situation !== filter.situationId) return false;
      return true;
    });
  }
  function startReview(filter = {}) {
    const pool = masteredWords(filter);
    if (!pool.length) {
      showToast(filter.weak ? "目前没有需要加强的内容" : "先掌握一些内容，再开始复习");
      return;
    }
    if (parseRoute().name !== "review") history.replaceState(null, "", "#/review");
    state.tab = "review";
    state.quiz = {
      mode: { kind: "review", filter },
      questions: makeQuestionSet(pool, { kind: "review" }),
      preferred: pool,
      index: 0,
      score: 0,
      wrong: []
    };
    renderQuestion();
  }
  function questionTitle(quiz) {
    if (quiz.mode.kind === "review") return quiz.mode.filter.weak ? "加强薄弱内容" : "复习";
    const scene = sceneById(quiz.mode.sceneId);
    return situationById(scene, quiz.mode.situationId)?.name || "小测";
  }
  function renderQuestion() {
    stopSpeech();
    const quiz = state.quiz;
    updateShell(quiz.mode.kind === "review" ? "review" : "home", true);
    state.questionToken += 1;
    const token = state.questionToken;
    const question = quiz.questions[quiz.index];
    const entry = question.entry;
    const direction = question.direction;
    let options;
    try { options = buildOptions(entry, direction, quiz.preferred); }
    catch (error) { renderError([error.message]); return; }
    state.answered = false;
    state.selectedId = null;
    const current = quiz.index + 1;
    const total = quiz.questions.length;
    const progress = Math.round(current / total * 100);
    const scene = sceneById(entry.scene);
    const situation = situationById(scene, entry.situation);
    const prompt = direction === "reverse"
      ? `<div class="foreign-prompt"><h2 id="questionText">${escapeHtml(foreignText(entry))}</h2>${audioButtonHtml(entry)}</div><p>请选择对应的中文含义</p>`
      : `<h2 id="questionText">${escapeHtml(entry.zh)}</h2><p>请选择对应的${langLabel(state.lang)}表达</p>`;
    const optionsHtml = options.map((option, index) => `<div class="option-row">
      <button class="option-choice" type="button" data-id="${escapeHtml(option.id)}" aria-pressed="false">
        <span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
        <span class="option-text">${direction === "reverse" ? `<span class="answer-zh">${escapeHtml(option.zh)}</span>` : foreignContentHtml(option, false)}</span>
        <span class="choice-state" aria-hidden="true"></span>
      </button>
    </div>`).join("");
    view.innerHTML = `<div class="quiz page-enter">
      <div class="quiz-top"><button class="text-btn" type="button" data-quit>退出</button><strong>${escapeHtml(questionTitle(quiz))}</strong><span>${current} / ${total}</span></div>
      <div class="progress-track" role="progressbar" aria-label="答题进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></div>
      <section class="prompt-card" id="questionPrompt" tabindex="-1" aria-labelledby="questionText">
        <span class="question-meta">${escapeHtml(scene.name)} · ${escapeHtml(situation.name)}</span>${prompt}
      </section>
      <div class="options" role="group" aria-label="答案选项">${optionsHtml}</div>
      <div id="feedback" class="feedback" tabindex="-1" aria-live="polite" hidden></div>
    </div>
    <div class="quiz-actions"><button class="primary-btn" id="confirmBtn" type="button" disabled>确认答案</button></div>`;
    const confirm = view.querySelector("#confirmBtn");
    view.querySelectorAll(".option-choice").forEach((button) => button.addEventListener("click", () => selectOption(button, confirm)));
    view.querySelector("[data-quit]").addEventListener("click", quiz.mode.kind === "review" ? exitReview : exitLearning);
    confirm.addEventListener("click", () => {
      if (state.answered) advanceQuestion();
      else confirmAnswer(entry, token);
    });
    bindSpeechButtons();
    scrollToTop();
    requestAnimationFrame(() => view.querySelector("#questionPrompt")?.focus({ preventScroll: true }));
  }
  function selectOption(button, confirm) {
    if (state.answered) return;
    view.querySelectorAll(".option-choice").forEach((item) => {
      item.setAttribute("aria-pressed", "false");
      item.closest(".option-row").classList.remove("selected");
    });
    button.setAttribute("aria-pressed", "true");
    button.closest(".option-row").classList.add("selected");
    state.selectedId = button.dataset.id;
    confirm.disabled = false;
  }
  function confirmAnswer(entry, token) {
    if (!state.quiz || state.answered || !state.selectedId || token !== state.questionToken) return;
    state.answered = true;
    const correct = state.selectedId === entry.id;
    if (correct) state.quiz.score += 1;
    else if (!state.quiz.wrong.some((item) => item.id === entry.id)) state.quiz.wrong.push(entry);
    if (state.quiz.mode.kind === "learning") {
      if (correct) markMastered(entry); else markIntroduced(entry);
    } else {
      recordReview(entry, correct);
    }
    view.querySelectorAll(".option-choice").forEach((button) => {
      button.disabled = true;
      const row = button.closest(".option-row");
      if (button.dataset.id === entry.id) {
        row.classList.add("correct");
        row.querySelector(".choice-state").textContent = "✓";
      } else if (!correct && button.dataset.id === state.selectedId) {
        row.classList.add("wrong");
        row.querySelector(".choice-state").textContent = "×";
      }
    });
    const feedback = view.querySelector("#feedback");
    feedback.hidden = false;
    feedback.className = `feedback ${correct ? "good" : "bad"}`;
    feedback.innerHTML = `<span class="feedback-icon" aria-hidden="true">${correct ? "✓" : "!"}</span><div>
      <strong>${correct ? "回答正确" : "再看一次正确答案"}</strong>
      <div class="feedback-answer"><span class="answer-zh">${escapeHtml(entry.zh)}</span>${foreignContentHtml(entry, true)}</div>
    </div>`;
    const confirm = view.querySelector("#confirmBtn");
    confirm.disabled = false;
    confirm.textContent = state.quiz.index >= state.quiz.questions.length - 1 ? "查看结果" : "下一题";
    feedback.focus({ preventScroll: true });
    void playSpeech(entry, true);
  }
  function advanceQuestion() {
    if (!state.quiz || !state.answered) return;
    if (state.quiz.index >= state.quiz.questions.length - 1) finishQuiz();
    else {
      state.quiz.index += 1;
      renderQuestion();
    }
  }
  function finishQuiz() {
    const quiz = state.quiz;
    if (quiz.mode.kind === "learning") {
      if (quiz.wrong.length) {
        state.learning.batch = quiz.wrong.slice();
        state.learning.index = 0;
        state.learning.phase = "retry-review";
        state.quiz = null;
        renderRetryReview();
      } else {
        state.learning.phase = "batch-complete";
        state.quiz = null;
        renderLearningComplete();
      }
    } else {
      renderReviewResults();
    }
  }

  function renderRetryReview() {
    stopSpeech();
    updateShell("home", true);
    const learning = state.learning;
    const entry = learning.batch[learning.index];
    const current = learning.index + 1;
    const total = learning.batch.length;
    view.innerHTML = `<div class="lesson page-enter">
      <div class="quiz-top"><button class="text-btn" type="button" data-later>稍后继续</button><strong>再认识一次</strong><span>${current} / ${total}</span></div>
      <section class="recognition-card retry-card" tabindex="-1">
        <span class="question-meta">刚才这条还不熟</span>
        <div class="recognition-foreign"><h2>${escapeHtml(foreignText(entry))}</h2>${audioButtonHtml(entry)}</div>
        ${state.lang === "ja" ? `<p class="recognition-reading">${escapeHtml(entry.reading)}</p>` : ""}
        <div class="recognition-divider"></div><strong class="recognition-zh">${escapeHtml(entry.zh)}</strong>
      </section>
      <p class="lesson-hint">看清表达，再测一次。答对后就会进入已掌握。</p>
    </div>
    <div class="quiz-actions"><button class="primary-btn" type="button" data-next>${current === total ? "重新小测" : "下一个"}</button></div>`;
    view.querySelector("[data-later]").addEventListener("click", exitLearning);
    view.querySelector("[data-next]").addEventListener("click", () => {
      if (learning.index >= learning.batch.length - 1) startLearningQuiz(learning.batch);
      else {
        learning.index += 1;
        renderRetryReview();
      }
    });
    bindSpeechButtons();
    scrollToTop();
  }
  function renderLearningComplete() {
    stopSpeech();
    updateShell("home", true);
    const learning = state.learning;
    const scene = sceneById(learning.sceneId);
    const situation = situationById(scene, learning.situationId);
    const remaining = selectLearningBatch(scene.id, situation.id);
    const allDone = remaining.length === 0;
    view.innerHTML = `<div class="results lesson-result page-enter">
      <section class="result-card">
        <span class="result-check" aria-hidden="true">${iconSvg("check")}</span>
        <span class="eyebrow">${allDone ? "小情境完成" : "本组完成"}</span>
        <h2>${allDone ? `${escapeHtml(situation.name)}已掌握` : `这 ${learning.groupSize} 条已经掌握`}</h2>
        <p>${allDone ? "这些内容已经进入复习，可以随时回来巩固。" : "继续下一组，或先回到场景选择其他内容。"}</p>
      </section>
      <div class="result-actions">
        ${allDone ? `<button class="primary-btn" type="button" data-review-situation>复习这个情境</button>` : `<button class="primary-btn" type="button" data-next-batch>继续下一组</button>`}
        <button class="secondary-btn" type="button" data-scene-return>返回${escapeHtml(scene.name)}</button>
      </div>
    </div>`;
    view.querySelector("[data-next-batch]")?.addEventListener("click", () => {
      state.learning = null;
      beginLearningRoute(scene.id, situation.id);
    });
    view.querySelector("[data-review-situation]")?.addEventListener("click", () => {
      startReview({ sceneId: scene.id, situationId: situation.id });
    });
    view.querySelector("[data-scene-return]").addEventListener("click", () => navigatePath(`scene/${scene.id}`));
    scrollToTop();
  }
  function exitLearning() {
    const sceneId = state.learning?.sceneId || parseRoute().sceneId;
    stopSpeech();
    state.learning = null;
    state.quiz = null;
    navigatePath(sceneId ? `scene/${sceneId}` : "home", true);
  }

  function renderReview() {
    stopSpeech();
    const learning = loadLearning();
    const mastered = Object.values(learning.byId).filter((record) => record.status === "mastered").length;
    const weakCount = learning.weakIds.length;
    const sceneRows = window.SCENE_PACKS.map((scene) => {
      const count = masteredWords({ sceneId: scene.id }).length;
      return `<button class="review-scene-row" type="button" data-review-scene="${scene.id}" ${count ? "" : "disabled"}>
        <span class="category-icon" aria-hidden="true">${iconSvg(scene.id)}</span>
        <span><strong>${escapeHtml(scene.name)}</strong><small>${count ? `已掌握 ${count} 条` : "还没有已掌握内容"}</small></span>
        <span class="chevron" aria-hidden="true">›</span>
      </button>`;
    }).join("");
    view.innerHTML = `<div class="page-enter review-page">
      <section class="test-intro review-intro">
        <span class="eyebrow">巩固已学内容</span><h2>学过，更要能随时认出和说出</h2>
        <p>复习采用双向混合测试，不设日期限制，想练就练。</p>
        <div class="review-summary"><div><strong>${mastered}</strong><span>已掌握</span></div><div><strong>${weakCount}</strong><span>需要加强</span></div></div>
      </section>
      ${mastered ? `<div class="feature-stack">
        <section class="feature-card featured"><span class="feature-icon coral" aria-hidden="true">${iconSvg("review")}</span><div><h3>加强薄弱内容</h3><p>${weakCount ? `${weakCount} 条内容需要再巩固。` : "目前没有薄弱内容。"}</p></div><button class="primary-btn" type="button" data-review-weak ${weakCount ? "" : "disabled"}>开始加强</button></section>
        <section class="feature-card"><span class="feature-icon mint" aria-hidden="true">${iconSvg("check")}</span><div><h3>随机复习</h3><p>从全部已掌握内容中抽取最多 ${REVIEW_BATCH_SIZE} 题。</p></div><button class="secondary-btn" type="button" data-review-random>开始复习</button></section>
      </div>
      <div class="section-heading review-heading"><div><span class="eyebrow">按需选择</span><h2>按场景复习</h2></div></div>
      <div class="review-scene-list">${sceneRows}</div>`
      : `<div class="empty-state review-empty"><span aria-hidden="true">${iconSvg("review")}</span><strong>还没有可复习的内容</strong><p>先到首页选择一个旅行场景，完成认识和小测。</p><button class="primary-btn" type="button" data-go-home>去首页学习</button></div>`}
    </div>`;
    view.querySelector("[data-review-weak]")?.addEventListener("click", () => startReview({ weak: true }));
    view.querySelector("[data-review-random]")?.addEventListener("click", () => startReview());
    view.querySelectorAll("[data-review-scene]").forEach((button) => button.addEventListener("click", () => startReview({ sceneId: button.dataset.reviewScene })));
    view.querySelector("[data-go-home]")?.addEventListener("click", () => navigatePath("home"));
    scrollToTop();
  }
  function renderReviewResults() {
    stopSpeech();
    updateShell("review");
    const quiz = state.quiz;
    const total = quiz.questions.length;
    const accuracy = total ? Math.round(quiz.score / total * 100) : 0;
    const canRepeat = masteredWords(quiz.mode.filter).length > 0;
    const wrongHtml = quiz.wrong.length
      ? quiz.wrong.map((entry) => {
        const scene = sceneById(entry.scene);
        const situation = situationById(scene, entry.situation);
        return `<div class="wrong-item"><div><strong>${escapeHtml(entry.zh)}</strong>${foreignContentHtml(entry, true)}<small>${escapeHtml(scene.name)} · ${escapeHtml(situation.name)}</small></div>${audioButtonHtml(entry)}</div>`;
      }).join("")
      : `<div class="empty-state"><span aria-hidden="true">${iconSvg("check")}</span><strong>本轮全部答对</strong><p>这些旅行表达已经越来越熟了。</p></div>`;
    view.innerHTML = `<div class="results page-enter">
      <section class="result-card"><span class="eyebrow">本轮复习完成</span>
        <div class="score-ring" style="--score:${accuracy}"><div><strong>${accuracy}%</strong><span>${quiz.score} / ${total} 正确</span></div></div>
        <h2>${accuracy === 100 ? "全部稳稳记住" : accuracy >= 70 ? "大部分已经熟悉" : "再加强几次就好"}</h2>
        <p>${quiz.wrong.length ? "答错的内容已加入“需要加强”，掌握进度不会减少。" : "继续保持，旅行时会更自然。"}</p>
      </section>
      <section class="result-wrong"><div class="section-heading"><div><span class="eyebrow">回顾</span><h2>本轮错项</h2></div><span>需要加强 ${loadLearning().weakIds.length}</span></div>${wrongHtml}</section>
      <div class="result-actions"><button class="primary-btn" type="button" data-again${canRepeat ? "" : " disabled"}>${canRepeat ? "再来一轮" : "薄弱内容已清空"}</button><button class="secondary-btn" type="button" data-return>返回复习</button></div>
    </div>`;
    bindSpeechButtons();
    view.querySelector("[data-again]")?.addEventListener("click", () => {
      if (!canRepeat) return;
      const filter = quiz.mode.filter;
      state.quiz = null;
      startReview(filter);
    });
    view.querySelector("[data-return]").addEventListener("click", exitReview);
    scrollToTop();
  }
  function exitReview() {
    stopSpeech();
    state.quiz = null;
    updateShell("review");
    renderReview();
  }

  function renderTools() {
    stopSpeech();
    view.innerHTML = `<div class="page-enter"><section class="page-lead"><span class="eyebrow">旅途工具箱</span><h2>需要时，马上派上用场</h2><p>无需账号或复杂设置，重要信息只在当前设备中处理。</p></section><div class="preview-grid"><button class="preview-card tool-action-card" type="button" data-emergency-card><span class="feature-icon coral" aria-hidden="true">${iconSvg("card")}</span><span class="coming-badge ready-badge">可使用</span><h3>紧急联系卡</h3><p>制作一张可离线保存、方便随身携带的双语急救信息卡。</p><strong>立即制作 <span aria-hidden="true">›</span></strong></button><article class="preview-card"><span class="feature-icon mint" aria-hidden="true">${iconSvg("translate")}</span><span class="coming-badge">计划中</span><h3>快捷翻译</h3><p>在旅行场景中快速输入并获取常用表达。</p></article></div></div>`;
    view.querySelector("[data-emergency-card]").addEventListener("click", () => {
      if (!state.emergencyCard || state.emergencyCard.language !== state.lang) state.emergencyCard = window.EMERGENCY_CARD.createModel(state.lang);
      navigatePath("tools/emergency-card");
    });
    scrollToTop();
  }

  function dictionaryOptions(items, selected) {
    return items.map((item) => `<option value="${escapeHtml(item.code)}"${item.code === selected ? " selected" : ""}>${escapeHtml(item.zh)} · ${escapeHtml(item[state.lang])}</option>`).join("");
  }
  function healthChoices(name, items, selected) {
    const active = new Set(selected || []);
    return items.map((item) => `<label class="choice-chip"><input type="checkbox" name="${name}" value="${escapeHtml(item.code)}"${active.has(item.code) ? " checked" : ""}><span>${escapeHtml(item.zh)}<small>${escapeHtml(item[state.lang])}</small></span></label>`).join("");
  }
  function formValue(form, name) { return form.querySelector(`[name="${name}"]`)?.value.trim() || ""; }
  function syncEmergencyCardForm(form) {
    const card = state.emergencyCard;
    card.name = formValue(form, "name"); card.foreignName = formValue(form, "foreignName");
    card.birthDate = formValue(form, "birthDate"); card.bloodType = formValue(form, "bloodType");
    card.documentNumber = formValue(form, "documentNumber"); card.emergencyContact = formValue(form, "emergencyContact");
    card.emergencyPhone = formValue(form, "emergencyPhone");
    card.nationality = { code: formValue(form, "nationality"), customZh: formValue(form, "nationalityCustomZh"), customForeign: formValue(form, "nationalityCustomForeign") };
    ["allergies", "conditions"].forEach((key) => {
      card[key] = {
        codes: Array.from(form.querySelectorAll(`[name="${key}"]:checked`)).map((input) => input.value),
        customZh: formValue(form, `${key}CustomZh`), customForeign: formValue(form, `${key}CustomForeign`)
      };
    });
  }
  function toggleNationalityCustom(form) {
    const custom = form.querySelector("[data-nationality-custom]");
    custom.hidden = formValue(form, "nationality") !== "other";
  }
  function enforceNoneChoice(event) {
    const changed = event.target;
    if (!(changed instanceof HTMLInputElement) || changed.type !== "checkbox" || !changed.checked) return;
    const form = changed.form;
    const group = Array.from(form.querySelectorAll(`[name="${changed.name}"]`));
    if (changed.value === "none") group.forEach((input) => { if (input !== changed) input.checked = false; });
    else group.find((input) => input.value === "none").checked = false;
  }
  function showEmergencyCardErrors(form, errors) {
    form.querySelectorAll("[data-error]").forEach((element) => { element.textContent = ""; });
    form.querySelectorAll("[aria-invalid]").forEach((element) => element.removeAttribute("aria-invalid"));
    Object.entries(errors).forEach(([key, message]) => {
      const error = form.querySelector(`[data-error="${key}"]`);
      if (error) error.textContent = message;
      const field = form.querySelector(`[data-field="${key}"]`);
      field?.querySelector("input,select")?.setAttribute("aria-invalid", "true");
    });
    const firstKey = Object.keys(errors)[0];
    form.querySelector(`[data-field="${firstKey}"] input,[data-field="${firstKey}"] select`)?.focus();
  }
  function renderEmergencyCardForm() {
    stopSpeech();
    if (!state.emergencyCard || state.emergencyCard.language !== state.lang) state.emergencyCard = window.EMERGENCY_CARD.createModel(state.lang);
    const card = state.emergencyCard;
    const languageName = state.lang === "ja" ? "日语" : "英语";
    const foreignNameLabel = state.lang === "ja" ? "护照拼音或日文姓名" : "护照拼音或英文姓名";
    view.innerHTML = `<div class="card-maker page-enter">
      <div class="flow-header"><button class="text-btn" type="button" data-card-exit>‹ 返回工具</button><span>填写资料</span><small>1 / 2</small></div>
      <section class="privacy-banner"><span aria-hidden="true">${iconSvg("shield")}</span><div><strong>资料只在当前页面处理</strong><p>不会上传或保存在浏览器中，刷新或关闭页面后即清除。</p></div></section>
      <section class="card-form-intro"><span class="eyebrow">${languageName}卡片</span><h1>制作紧急联系卡</h1><p>带 <b>*</b> 的内容为必填。其他信息留空后不会出现在卡片上。</p></section>
      <form class="emergency-form" id="emergencyCardForm" novalidate>
        <fieldset><legend>本人信息</legend><div class="form-grid">
          <label class="form-field" data-field="name"><span>姓名 <b>*</b></span><input name="name" autocomplete="name" maxlength="32" value="${escapeHtml(card.name)}"><small class="field-error" data-error="name"></small></label>
          <label class="form-field"><span>${foreignNameLabel}</span><input name="foreignName" maxlength="40" value="${escapeHtml(card.foreignName)}"><small>请按护照或证件上的写法填写</small></label>
          <label class="form-field"><span>国籍</span><select name="nationality"><option value="">不显示</option>${dictionaryOptions(window.EMERGENCY_CARD.NATIONALITIES, card.nationality.code)}</select></label>
          <label class="form-field" data-field="birthDate"><span>出生日期</span><input name="birthDate" type="date" max="${new Date().toISOString().slice(0, 10)}" value="${escapeHtml(card.birthDate)}"><small class="field-error" data-error="birthDate"></small></label>
          <label class="form-field"><span>血型</span><select name="bloodType"><option value="">不显示</option>${window.EMERGENCY_CARD.BLOOD_TYPES.map((type) => `<option value="${type}"${type === card.bloodType ? " selected" : ""}>${type === "unknown" ? "未知" : type}</option>`).join("")}</select></label>
          <label class="form-field sensitive-field" data-field="documentNumber"><span>身份证或护照号码</span><input name="documentNumber" maxlength="24" autocomplete="off" value="${escapeHtml(card.documentNumber)}"><small>敏感信息，仅在确有需要时填写</small><small class="field-error" data-error="documentNumber"></small></label>
        </div><div class="custom-pair" data-nationality-custom hidden><label class="form-field" data-field="nationalityCustomZh"><span>国籍中文名称</span><input name="nationalityCustomZh" maxlength="30" value="${escapeHtml(card.nationality.customZh)}"><small class="field-error" data-error="nationalityCustomZh"></small></label><label class="form-field" data-field="nationalityCustomForeign"><span>国籍${languageName}名称</span><input name="nationalityCustomForeign" maxlength="40" value="${escapeHtml(card.nationality.customForeign)}"><small class="field-error" data-error="nationalityCustomForeign"></small></label></div></fieldset>
        <fieldset><legend>紧急联系人</legend><div class="form-grid"><label class="form-field" data-field="emergencyContact"><span>联系人姓名 <b>*</b></span><input name="emergencyContact" maxlength="32" autocomplete="off" value="${escapeHtml(card.emergencyContact)}"><small class="field-error" data-error="emergencyContact"></small></label><label class="form-field" data-field="emergencyPhone"><span>联系电话 <b>*</b></span><input name="emergencyPhone" type="tel" inputmode="tel" maxlength="24" autocomplete="tel" placeholder="+86 138 0000 0000" value="${escapeHtml(card.emergencyPhone)}"><small class="field-error" data-error="emergencyPhone"></small></label></div></fieldset>
        <fieldset><legend>过敏信息</legend><p class="fieldset-hint">可多选；“无”与其他选项互斥。</p><div class="choice-chip-grid">${healthChoices("allergies", window.EMERGENCY_CARD.ALLERGIES, card.allergies.codes)}</div><div class="custom-pair" data-field="allergiesCustom"><label class="form-field"><span>其他过敏信息（中文）</span><input name="allergiesCustomZh" maxlength="40" value="${escapeHtml(card.allergies.customZh)}"></label><label class="form-field"><span>其他过敏信息（${languageName}）</span><input name="allergiesCustomForeign" maxlength="60" value="${escapeHtml(card.allergies.customForeign)}"></label><small class="field-error pair-error" data-error="allergiesCustom"></small></div></fieldset>
        <fieldset><legend>既往疾病</legend><p class="fieldset-hint">可多选；“无”与其他选项互斥。</p><div class="choice-chip-grid">${healthChoices("conditions", window.EMERGENCY_CARD.CONDITIONS, card.conditions.codes)}</div><div class="custom-pair" data-field="conditionsCustom"><label class="form-field"><span>其他疾病信息（中文）</span><input name="conditionsCustomZh" maxlength="40" value="${escapeHtml(card.conditions.customZh)}"></label><label class="form-field"><span>其他疾病信息（${languageName}）</span><input name="conditionsCustomForeign" maxlength="60" value="${escapeHtml(card.conditions.customForeign)}"></label><small class="field-error pair-error" data-error="conditionsCustom"></small></div></fieldset>
        <button class="primary-btn card-submit" type="submit">生成卡片预览</button>
      </form></div>`;
    const form = view.querySelector("#emergencyCardForm");
    toggleNationalityCustom(form);
    form.addEventListener("input", () => syncEmergencyCardForm(form));
    form.addEventListener("change", (event) => { enforceNoneChoice(event); syncEmergencyCardForm(form); toggleNationalityCustom(form); });
    form.addEventListener("submit", (event) => {
      event.preventDefault(); syncEmergencyCardForm(form);
      const errors = window.EMERGENCY_CARD.validate(state.emergencyCard);
      if (Object.keys(errors).length) { showEmergencyCardErrors(form, errors); return; }
      navigatePath("tools/emergency-card/preview");
    });
    view.querySelector("[data-card-exit]").addEventListener("click", () => navigatePath("tools"));
    scrollToTop();
  }

  async function renderEmergencyCardPreview() {
    stopSpeech();
    if (!state.emergencyCard || Object.keys(window.EMERGENCY_CARD.validate(state.emergencyCard)).length) {
      if (!state.emergencyCard) state.emergencyCard = window.EMERGENCY_CARD.createModel(state.lang);
      navigatePath("tools/emergency-card", true); showToast("请先填写卡片资料"); return;
    }
    const rows = window.EMERGENCY_CARD.getRows(state.emergencyCard);
    view.innerHTML = `<div class="card-preview-page page-enter"><div class="flow-header"><button class="text-btn" type="button" data-card-edit>‹ 返回修改</button><span>卡片预览</span><small>2 / 2</small></div><section class="card-preview-lead"><span class="eyebrow">银行卡大小</span><h1>确认信息清晰无误</h1><p>导出的图片为 1011 × 638 px，按 100% 实际大小打印后约为 85.60 × 53.98 mm。</p></section><div class="canvas-frame"><canvas id="emergencyCardCanvas" width="1011" height="638" role="img" aria-label="紧急联系卡预览"></canvas></div><dl class="sr-only">${rows.map((row) => `<div><dt>${escapeHtml(row.label)}</dt><dd>${escapeHtml(row.value)}</dd></div>`).join("")}</dl><div class="privacy-note"><strong>下载前提醒</strong><p>请再次确认是否需要显示证件号码。图片下载后由你自行保管，本应用不会留存副本。</p></div><div class="card-preview-actions"><button class="secondary-btn" type="button" data-card-edit>返回修改</button><button class="primary-btn" type="button" data-card-download>保存为 PNG</button></div></div>`;
    const canvas = view.querySelector("#emergencyCardCanvas");
    if (document.fonts?.ready) await document.fonts.ready;
    const result = window.EMERGENCY_CARD.drawCard(canvas, state.emergencyCard);
    if (!result.ok) { showToast("部分内容过长，请返回缩短后再下载"); view.querySelector("[data-card-download]").disabled = true; }
    view.querySelectorAll("[data-card-edit]").forEach((button) => button.addEventListener("click", () => navigatePath("tools/emergency-card")));
    view.querySelector("[data-card-download]").addEventListener("click", async (event) => {
      const button = event.currentTarget; button.disabled = true; button.textContent = "正在生成…";
      try { await window.EMERGENCY_CARD.downloadPng(canvas); showToast("PNG 已生成，请妥善保管"); }
      catch (error) { showToast("图片生成失败，请重试"); }
      finally { button.disabled = !result.ok; button.textContent = "保存为 PNG"; }
    });
    scrollToTop();
  }
  function isStandalone() {
    return window.matchMedia?.("(display-mode: standalone)").matches === true || window.navigator.standalone === true;
  }
  function isAppleMobile() {
    const agent = String(window.navigator.userAgent || "");
    return /iPhone|iPad|iPod/i.test(agent) || (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  }
  function installPromptHtml() {
    if (isStandalone()) return '<p class="setting-note">语见世界已安装在当前设备上。</p>';
    if (isAppleMobile()) return '<p class="setting-note">点击浏览器分享按钮，然后选择“添加到主屏幕”。</p>';
    if (deferredInstallPrompt) return '<button class="secondary-btn compact" type="button" data-install-app>安装到当前设备</button>';
    return '<p class="setting-note">可通过支持 PWA 的浏览器菜单安装到设备。</p>';
  }
  function bindInstallPrompt() {
    view.querySelector("[data-install-app]")?.addEventListener("click", async (event) => {
      if (!deferredInstallPrompt) return;
      const button = event.currentTarget;
      button.disabled = true;
      button.textContent = "正在打开…";
      try {
        await deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
      } catch (error) {
        console.warn("无法打开安装提示", error);
      }
      deferredInstallPrompt = null;
      if (state.tab === "me") renderMe();
    });
  }
  function renderMe() {
    stopSpeech();
    const learning = loadLearning();
    const introduced = Object.values(learning.byId).filter((record) => record.status === "introduced").length;
    const mastered = Object.values(learning.byId).filter((record) => record.status === "mastered").length;
    const weak = learning.weakIds.length;
    view.innerHTML = `<div class="page-enter settings-page">
      <section class="profile-card"><img src="icons/icon-192.png" width="72" height="72" alt=""><div><span class="eyebrow">语见世界</span><h2>${langLabel(state.lang)}旅行语言</h2><p>不学完整一门语言，只学这趟旅行用得上的。</p></div></section>
      <section class="learning-data-card" aria-label="当前语言学习数据"><div><strong>${introduced}</strong><span>已认识</span></div><div><strong>${mastered}</strong><span>已掌握</span></div><div><strong>${weak}</strong><span>需加强</span></div></section>
      <section class="settings-group" aria-labelledby="languageSetting"><div class="setting-heading"><span class="setting-icon" aria-hidden="true">${iconSvg("language")}</span><div><h3 id="languageSetting">学习语言</h3><p>日语和英语分别记录学习进度</p></div></div><div class="language-tabs" role="group" aria-label="选择学习语言">${LANG_OPTIONS.map((item) => `<button type="button" data-lang="${item.value}" aria-pressed="${state.lang === item.value}"><strong>${item.label}</strong><small>${item.helper}</small></button>`).join("")}</div></section>
      <section class="settings-group"><div class="setting-heading"><span class="setting-icon blue" aria-hidden="true">${iconSvg("install")}</span><div><h3>安装 App</h3><p>从主屏幕更快打开并离线使用</p></div></div><div class="setting-action">${installPromptHtml()}</div></section>
      <section class="settings-group danger-zone"><div class="setting-heading"><span class="setting-icon red" aria-hidden="true">${iconSvg("trash")}</span><div><h3>学习数据</h3><p>清除日语和英语的认识、掌握与弱项</p></div></div><button class="danger-btn" type="button" data-reset>清除全部学习数据</button></section>
    </div>`;
    view.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => {
      if (button.dataset.lang === state.lang) return;
      saveLang(button.dataset.lang);
      renderMe();
      showToast(`已切换到${langLabel(state.lang)}`);
    }));
    view.querySelector("[data-reset]").addEventListener("click", resetData);
    bindInstallPrompt();
    scrollToTop();
  }
  function resetData() {
    if (!window.confirm("确定清除日语和英语的全部学习数据吗？语言选择会保留。")) return;
    stopSpeech();
    try { localStorage.removeItem(LEARNING_KEY); }
    catch (error) { console.warn("无法清除学习数据", error); }
    renderMe();
    showToast("全部学习数据已清除");
  }

  function renderError(problems) {
    stopSpeech();
    updateShell("home");
    view.innerHTML = `<section class="error-state" role="alert"><span aria-hidden="true">${iconSvg("warning")}</span><h2>内容暂时无法打开</h2><p>请检查 data.js 后刷新页面。</p><ul>${problems.slice(0, 10).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`;
  }
  function setupInstallPrompt() {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      if (state.tab === "me") renderMe();
    });
    window.addEventListener("appinstalled", () => {
      deferredInstallPrompt = null;
      try { localStorage.setItem(INSTALL_HINT_KEY, "1"); } catch (error) { /* no-op */ }
      if (state.tab === "me") renderMe();
    });
  }
  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js", { scope: "./" })
        .catch((error) => console.warn("Service Worker 注册失败", error));
    });
  }
  function init() {
    const problems = validateData();
    if (problems.length) {
      renderError(problems);
      return;
    }
    migrateLegacyData();
    state.lang = loadLang();
    if (!window.location.hash) history.replaceState(null, "", "#/home");
    window.addEventListener("hashchange", renderRoute);
    setupInstallPrompt();
    registerServiceWorker();
    renderRoute();
  }

  init();
})();
