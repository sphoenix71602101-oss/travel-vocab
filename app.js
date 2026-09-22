(function () {
  "use strict";

  const LEARNING_KEY = "yujianWorld.learning.v2";
  const LEGACY_LEARNING_KEY = "yujianWorld.learning.v1";
  const LANG_KEY = "yujianWorld.lang.v1";
  const DESTINATION_KEY = "yujianWorld.destination.v1";
  const MIGRATION_KEY = "yujianWorld.migrated.v2";
  const INSTALL_HINT_KEY = "yujianWorld.installHintDismissed.v1";
  const FAVORITE_GUIDE_KEY = "yujianWorld.favoriteGuideSeen.v1";
  const BEGINNER_KEY = "yujianWorld.beginner.v1";
  const LEARNING_BATCH_SIZE = 5;
  const REVIEW_BATCH_SIZE = 10;
  const FAVORITE_SEARCH_LIMIT = 50;
  const MAIN_TABS = new Set(["home", "review", "tools", "me"]);
  const DESTINATION_OPTIONS = [
    { id: "jp", contentPackId: "jp-ja", country: "日本", language: "日语", nativeLabel: "日本語", lang: "ja", status: "available", countryCode: "JP", flagSrc: "icons/flags/jp.png" },
    { id: "us", contentPackId: "us-en", country: "美国", language: "英语", nativeLabel: "English", lang: "en", status: "available", countryCode: "US", flagSrc: "icons/flags/us.png" },
    { id: "kr", contentPackId: "kr-ko", country: "韩国", language: "韩语", nativeLabel: "한국어", lang: "ko", status: "available", countryCode: "KR", flagSrc: "icons/flags/kr.png" },
    { id: "ru", contentPackId: "ru-ru", country: "俄罗斯", language: "俄语", nativeLabel: "Русский", lang: "ru", status: "coming-soon", countryCode: "RU", flagSrc: "icons/flags/ru.png" },
    { id: "es", contentPackId: "es-es", country: "西班牙", language: "西班牙语", nativeLabel: "Español", lang: "es", status: "coming-soon", countryCode: "ES", flagSrc: "icons/flags/es.png" }
  ];
  const DEFAULT_HERO_IMAGE = Object.freeze({
    mobile: "images/heroes/default-mobile.webp",
    wide: "images/heroes/default-wide.webp"
  });
  const HERO_IMAGE_PATHS = Object.freeze({
    jp: Object.freeze({
      mobile: "images/heroes/jp-mobile.webp",
      wide: "images/heroes/jp-wide.webp"
    }),
    us: Object.freeze({
      mobile: "images/heroes/us-mobile.webp",
      wide: "images/heroes/us-wide.webp"
    }),
    kr: Object.freeze({
      mobile: "images/heroes/kr-mobile.png",
      wide: "images/heroes/kr-wide.png"
    })
  });
  const SCENE_ICON_PATHS = Object.freeze({
    airport: "icons/scenes/airport.png",
    transport: "icons/scenes/transport.png",
    hotel: "icons/scenes/hotel.png",
    food: "icons/scenes/food.png",
    shopping: "icons/scenes/shopping.png",
    directions: "icons/scenes/directions.png",
    basics: "icons/scenes/basics.png",
    emergency: "icons/scenes/emergency.png"
  });
  const UI_ICON_PATHS = Object.freeze({
    review: "icons/ui/review.png",
    complete: "icons/ui/complete.png",
    exchange: "icons/ui/exchange.png",
    checklist: "icons/ui/checklist.png",
    trip: "icons/ui/trip-map.png",
    favorite: "icons/ui/favorite.png",
    emergencyCard: "icons/ui/emergency-card.png",
    translate: "icons/ui/translate.png",
    privacy: "icons/ui/privacy.png",
    install: "icons/ui/install.png",
    deleteData: "icons/ui/delete-data.png",
    warning: "icons/ui/warning.png"
  });
  const SPEAKER_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8a5 5 0 0 1 0 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  const FAVORITE_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17.2l-5.56 2.92 1.06-6.2L3 9.53l6.22-.9L12 3Z"/></svg>';
  const ACTION_ARROW_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const view = document.getElementById("view");
  const bottomNav = document.getElementById("bottomNav");
  const toastEl = document.getElementById("toast");
  const state = {
    lang: null,
    destinationId: null,
    destinationOpen: false,
    tab: "home",
    learning: null,
    quiz: null,
    answered: false,
    selectedId: null,
    questionToken: 0,
    speechToken: 0,
    emergencyCard: null,
    beginnerSession: null,
    favoriteQuery: ""
  };
  let toastTimer = null;
  let activeAudio = null;
  let cancelActiveAudio = null;
  let dismissFavoriteGuide = null;
  let deferredInstallPrompt = null;
  let pendingDestinationFocus = false;
  let levelSurveyOpen = false;

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function sceneIcon(sceneId) {
    const src = SCENE_ICON_PATHS[sceneId] || SCENE_ICON_PATHS.basics;
    return `<img class="scene-icon" src="${src}" alt="" width="256" height="256" decoding="async">`;
  }
  function uiIcon(name) {
    const src = UI_ICON_PATHS[name] || UI_ICON_PATHS.complete;
    return `<img class="ui-spot-icon" src="${src}" alt="" width="256" height="256" decoding="async">`;
  }
  function heroImageForDestination(destinationId) {
    return HERO_IMAGE_PATHS[destinationId] || DEFAULT_HERO_IMAGE;
  }
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
  function currentPack() { return window.TRAVEL_CONTENT?.get(selectedDestination()?.contentPackId) || null; }
  function scenePacks() { return currentPack()?.scenes || []; }
  function wordBank() { return currentPack()?.entries || []; }
  function langLabel() { return currentPack()?.languageLabel || selectedDestination()?.language || ""; }
  function destinationById(id) { return DESTINATION_OPTIONS.find((item) => item.id === id); }
  function destinationForLang(lang) { return DESTINATION_OPTIONS.find((item) => item.status === "available" && item.lang === lang); }
  function selectedDestination() { return destinationById(state.destinationId); }
  function sceneById(id) { return scenePacks().find((scene) => scene.id === id); }
  function situationById(scene, id) { return scene?.situations.find((situation) => situation.id === id); }
  function sceneWords(sceneId) { return wordBank().filter((entry) => entry.sceneId === sceneId); }
  function situationWords(sceneId, situationId) {
    return wordBank().filter((entry) => entry.sceneId === sceneId && entry.situationId === situationId);
  }
  function foreignText(entry) { return entry.text; }
  function foreignContentHtml(entry, includeReading = true) {
    return `<span class="answer-foreign">${escapeHtml(entry.text)}</span>${includeReading && entry.pronunciation ? `<span class="answer-reading">${escapeHtml(entry.pronunciation)}</span>` : ""}`;
  }
  function audioButtonHtml(entry) {
    return `<button class="speak-btn" type="button" aria-label="播放${langLabel()}：${escapeHtml(foreignText(entry))}" data-entry-id="${escapeHtml(entry.id)}">${SPEAKER_SVG}</button>`;
  }
  function exampleAudioButtonHtml(example) {
    return `<button class="speak-btn" type="button" aria-label="播放例句：${escapeHtml(example.text)}" data-example-id="${escapeHtml(example.id)}">${SPEAKER_SVG}</button>`;
  }
  function exampleHtml(entry, expanded = false) {
    if (!entry.example) return "";
    return `<div class="entry-example${expanded ? " expanded" : ""}">
      ${expanded ? `<div class="entry-example-content"><span class="eyebrow">例句</span><div><strong>${escapeHtml(entry.example.text)}</strong>${exampleAudioButtonHtml(entry.example)}</div>${entry.example.pronunciation ? `<p>${escapeHtml(entry.example.pronunciation)}</p>` : ""}<small>${escapeHtml(entry.example.zh)}</small></div>` : `<button class="example-toggle" type="button" data-show-example aria-expanded="false">看例句</button>`}
    </div>`;
  }
  function bindExampleDisclosure(entry, root = view) {
    root.querySelector("[data-show-example]")?.addEventListener("click", (event) => {
      const container = event.currentTarget.closest(".entry-example");
      container.outerHTML = exampleHtml(entry, true);
      bindSpeechButtons(root.querySelector(".entry-example.expanded"));
    });
  }

  function favoriteIds() {
    const pack = currentPack();
    return pack ? window.TRAVEL_FAVORITES.getIds(pack.id, pack.entries) : [];
  }
  function favoriteButtonHtml(entry, extraClass = "") {
    const active = favoriteIds().includes(entry.id);
    const action = active ? "取消收藏" : "收藏";
    return `<div class="favorite-control"><button class="favorite-toggle${extraClass ? ` ${extraClass}` : ""}${active ? " is-favorite" : ""}" type="button" data-favorite-id="${escapeHtml(entry.id)}" aria-pressed="${active}" aria-label="${action}：${escapeHtml(foreignText(entry))}" title="${action}">${FAVORITE_SVG}</button></div>`;
  }
  function syncFavoriteButtons(entry, active, root = document) {
    root.querySelectorAll("[data-favorite-id]").forEach((button) => {
      if (button.dataset.favoriteId !== entry.id) return;
      button.classList.toggle("is-favorite", active);
      button.setAttribute("aria-pressed", String(active));
      button.setAttribute("aria-label", `${active ? "取消收藏" : "收藏"}：${foreignText(entry)}`);
      button.title = active ? "取消收藏" : "收藏";
    });
  }
  function hasSeenFavoriteGuide() {
    try { return localStorage.getItem(FAVORITE_GUIDE_KEY) === "1"; }
    catch (error) { return false; }
  }
  function rememberFavoriteGuide() {
    try { localStorage.setItem(FAVORITE_GUIDE_KEY, "1"); }
    catch (error) { /* no-op */ }
  }
  function maybeShowFavoriteGuide(root) {
    if (dismissFavoriteGuide || hasSeenFavoriteGuide()) return;
    const control = Array.from(root.querySelectorAll(".favorite-control")).find((item) => item.offsetParent !== null);
    if (!control) return;
    const guide = document.createElement("aside");
    guide.className = "favorite-guide";
    guide.setAttribute("role", "dialog");
    guide.setAttribute("aria-label", "收藏功能提示");
    guide.innerHTML = `<strong>遇到常用表达，点星标收藏</strong><p>之后可在「复习 → 收藏夹」快速找到</p><button type="button" data-dismiss-favorite-guide>知道了</button>`;
    control.append(guide);
    let outsideTimer = null;
    const onOutside = (event) => { if (!control.contains(event.target)) dismiss(); };
    const onKeydown = (event) => { if (event.key === "Escape") dismiss(); };
    const dismiss = () => {
      rememberFavoriteGuide();
      clearTimeout(outsideTimer);
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("keydown", onKeydown);
      guide.remove();
      dismissFavoriteGuide = null;
    };
    dismissFavoriteGuide = dismiss;
    guide.querySelector("[data-dismiss-favorite-guide]").addEventListener("click", (event) => {
      event.stopPropagation();
      dismiss();
    });
    document.addEventListener("keydown", onKeydown);
    outsideTimer = setTimeout(() => document.addEventListener("pointerdown", onOutside), 0);
  }
  function bindFavoriteButtons(root = view, onChange) {
    root.querySelectorAll("[data-favorite-id]").forEach((button) => button.addEventListener("click", (event) => {
      event.stopPropagation();
      dismissFavoriteGuide?.();
      const entry = wordBank().find((item) => item.id === button.dataset.favoriteId);
      const pack = currentPack();
      if (!entry || !pack) return;
      const result = window.TRAVEL_FAVORITES.toggle(pack.id, entry.id, pack.entries);
      syncFavoriteButtons(entry, result.favorite);
      showToast(result.favorite ? "已加入收藏夹" : "已取消收藏");
      onChange?.(entry, result.favorite);
    }));
    maybeShowFavoriteGuide(root);
  }

  function emptyLanguageState() { return { byId: {}, weakIds: [], lastLocation: null }; }
  function defaultLearningEnvelope() { return { packs: Object.fromEntries((window.TRAVEL_CONTENT?.all() || []).map((pack) => [pack.id, emptyLanguageState()])) }; }
  function validLocation(location, pack = currentPack()) {
    const scene = pack?.scenes.find((item) => item.id === location?.sceneId);
    return scene && situationById(scene, location?.situationId)
      ? { sceneId: scene.id, situationId: location.situationId }
      : null;
  }
  function normalizeLanguageState(input, pack = currentPack()) {
    const output = emptyLanguageState();
    const validIds = new Set((pack?.entries || []).map((entry) => entry.id));
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
    output.lastLocation = validLocation(input?.lastLocation, pack);
    return output;
  }
  function loadLearningEnvelope() {
    try {
      const raw = JSON.parse(localStorage.getItem(LEARNING_KEY));
      const envelope = defaultLearningEnvelope();
      Object.keys(envelope.packs).forEach((packId) => {
        envelope.packs[packId] = normalizeLanguageState(raw?.packs?.[packId], window.TRAVEL_CONTENT.get(packId));
      });
      return envelope;
    } catch (error) {
      return defaultLearningEnvelope();
    }
  }
  function loadLearning(packId = currentPack()?.id) {
    return loadLearningEnvelope().packs[packId] || emptyLanguageState();
  }
  function saveLearning(languageState, packId = currentPack()?.id) {
    try {
      const envelope = loadLearningEnvelope();
      envelope.packs[packId] = normalizeLanguageState(languageState, window.TRAVEL_CONTENT.get(packId));
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
    if (!DESTINATION_OPTIONS.some((item) => item.lang === lang)) return;
    state.lang = lang;
    try { localStorage.setItem(LANG_KEY, lang); }
    catch (error) { console.warn("无法保存语言设置", error); }
  }
  function loadLang() {
    try {
      const value = localStorage.getItem(LANG_KEY);
      return DESTINATION_OPTIONS.some((item) => item.lang === value) ? value : null;
    } catch (error) {
      return null;
    }
  }
  function saveDestination(destinationId) {
    const destination = destinationById(destinationId);
    if (!destination || destination.status !== "available" || !window.TRAVEL_CONTENT?.has(destination.contentPackId)) return false;
    state.destinationId = destination.id;
    state.destinationOpen = false;
    state.learning = null;
    state.quiz = null;
    state.emergencyCard = null;
    saveLang(destination.lang);
    try { localStorage.setItem(DESTINATION_KEY, destination.id); }
    catch (error) { console.warn("无法保存目的地设置", error); }
    return true;
  }
  function defaultBeginnerState() {
    const packs = {};
    (window.TRAVEL_CONTENT?.all() || []).forEach((pack) => {
      const module = window.TRAVEL_BEGINNER?.get(pack.features?.beginnerModule);
      if (module) packs[pack.id] = module.createProgress();
    });
    return { levels: {}, packs };
  }
  function loadBeginnerState() {
    try {
      const raw = JSON.parse(localStorage.getItem(BEGINNER_KEY));
      const state = defaultBeginnerState();
      state.levels = Object.fromEntries(Object.entries(raw?.levels || {}).filter(([id, level]) =>
        DESTINATION_OPTIONS.some((item) => item.id === id && item.status === "available") && ["zero", "some", "later"].includes(level)));
      (window.TRAVEL_CONTENT?.all() || []).forEach((pack) => {
        const module = window.TRAVEL_BEGINNER?.get(pack.features?.beginnerModule);
        if (!module) return;
        state.packs[pack.id] = module.normalizeProgress(raw?.packs?.[pack.id] || raw?.[module.legacyKey]);
      });
      return state;
    } catch (error) { return defaultBeginnerState(); }
  }
  function saveBeginnerState(beginner) {
    try { localStorage.setItem(BEGINNER_KEY, JSON.stringify(beginner)); }
    catch (error) { console.warn("无法保存认读进度", error); }
  }
  function loadDestinationId() {
    try {
      const value = localStorage.getItem(DESTINATION_KEY);
      const destination = destinationById(value);
      return destination?.status === "available" ? destination.id : null;
    } catch (error) {
      return null;
    }
  }
  function initializeDestination() {
    const storedDestination = destinationById(loadDestinationId());
    if (storedDestination) {
      state.destinationId = storedDestination.id;
      saveLang(storedDestination.lang);
      return;
    }
    state.lang = loadLang();
    const legacyDestination = destinationForLang(state.lang);
    state.destinationId = legacyDestination?.id || null;
    if (!legacyDestination) return;
    try { localStorage.setItem(DESTINATION_KEY, legacyDestination.id); }
    catch (error) { console.warn("无法迁移目的地设置", error); }
  }
  function migrateLegacyData() {
    try {
      if (localStorage.getItem(MIGRATION_KEY) === "1") return;
      const oldLang = localStorage.getItem("travelVocab.lang.v1");
      if (!localStorage.getItem(LANG_KEY) && DESTINATION_OPTIONS.some((item) => item.lang === oldLang)) localStorage.setItem(LANG_KEY, oldLang);
      if (!localStorage.getItem(LEARNING_KEY)) {
        const legacyLearning = JSON.parse(localStorage.getItem(LEGACY_LEARNING_KEY) || "null");
        if (legacyLearning) {
          const packs = {};
          for (const [language, packId] of [["ja", "jp-ja"], ["en", "us-en"]]) {
            packs[packId] = normalizeLanguageState(legacyLearning[language], window.TRAVEL_CONTENT.get(packId));
          }
          localStorage.setItem(LEARNING_KEY, JSON.stringify({ packs }));
        }
      }
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
    dismissFavoriteGuide?.();
    state.speechToken += 1;
    if (cancelActiveAudio) cancelActiveAudio();
    window.TRAVEL_BEGINNER?.all().forEach((module) => module.stop?.());
    try { window.speechSynthesis?.cancel(); }
    catch (error) { console.warn("无法停止语音", error); }
  }
  function speechTimeout(text) {
    return Math.min(8000, Math.max(3000, 1800 + Array.from(String(text)).length * 140));
  }
  function playSpeech(entry, quiet = false, isExample = false) {
    stopSpeech();
    const token = state.speechToken;
    const pack = currentPack();
    const text = entry.text;
    return new Promise((resolve) => {
      const group = isExample ? "examples" : "entries";
      const audio = new Audio(entry.audioPath || `audio/packs/${pack.id}/${group}/${entry.id}.mp3`);
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
            utterance.lang = pack.speechLocale;
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
      const entry = wordBank().find((item) => item.id === button.dataset.entryId);
      if (entry) { void playSpeech(entry); return; }
      const example = wordBank().map((item) => item.example).find((item) => item?.id === button.dataset.exampleId);
      if (example) void playSpeech(example, false, true);
    }));
  }

  function validateData() {
    const problems = [];
    const packs = window.TRAVEL_CONTENT?.all() || [];
    if (!packs.length) return ["找不到目的地语言包。"];
    window.TRAVEL_BEGINNER?.all().forEach((module) => {
      const problem = module.validateData?.();
      if (problem) problems.push(problem);
    });
    const destinationIds = new Set();
    DESTINATION_OPTIONS.forEach((destination) => {
      ["id", "contentPackId", "country", "language", "nativeLabel", "lang", "status", "countryCode", "flagSrc"].forEach((field) => {
        if (typeof destination[field] !== "string" || !destination[field].trim()) problems.push(`目的地 ${destination.id || "未知"} 的 ${field} 字段无效。`);
      });
      if (destinationIds.has(destination.id)) problems.push(`目的地 ID 重复：${destination.id}`);
      destinationIds.add(destination.id);
      if (!['available', 'coming-soon'].includes(destination.status)) problems.push(`目的地状态无效：${destination.id}`);
      if (destination.status === "available" && !window.TRAVEL_CONTENT.has(destination.contentPackId)) problems.push(`已开放目的地缺少内容包：${destination.id}`);
    });
    packs.forEach((pack) => {
      const scenes = new Map(pack.scenes.map((scene) => [scene.id, new Set(scene.situations.map((item) => item.id))]));
      const ids = new Set();
      const exampleIds = new Set();
      pack.entries.forEach((entry, index) => {
        ["id", "sceneId", "situationId", "zh", "text", "kind", "direction", "intent"].forEach((field) => {
          if (typeof entry?.[field] !== "string" || !entry[field].trim()) problems.push(`${pack.id} 第 ${index + 1} 条的 ${field} 字段无效。`);
        });
        if (pack.pronunciationLabel && !entry.pronunciation?.trim()) problems.push(`${pack.id}/${entry.id} 缺少读音。`);
        if (ids.has(entry.id)) problems.push(`${pack.id} 词条 ID 重复：${entry.id}`);
        ids.add(entry.id);
        if (!scenes.has(entry.sceneId)) problems.push(`${pack.id} 未知旅行场景：${entry.sceneId}`);
        else if (!scenes.get(entry.sceneId).has(entry.situationId)) problems.push(`${pack.id} 未知小情境：${entry.sceneId}/${entry.situationId}`);
        if (entry.example) {
          ["id", "zh", "text"].forEach((field) => {
            if (typeof entry.example[field] !== "string" || !entry.example[field].trim()) problems.push(`${pack.id}/${entry.id} 例句 ${field} 无效。`);
          });
          if (exampleIds.has(entry.example.id)) problems.push(`${pack.id} 例句 ID 重复：${entry.example.id}`);
          exampleIds.add(entry.example.id);
        }
      });
      pack.scenes.forEach((scene) => {
        if (!Array.isArray(scene.homeTopics) || scene.homeTopics.length !== 4) problems.push(`${pack.id} 首页摘要无效：${scene.id}`);
        scene.situations.forEach((situation) => {
          if (!pack.entries.some((entry) => entry.sceneId === scene.id && entry.situationId === situation.id)) problems.push(`${pack.id} 小情境没有内容：${scene.id}/${situation.id}`);
        });
      });
    });
    return problems;
  }

  function parseRoute() {
    const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (!parts.length) return { name: "home" };
    if (parts[0] === "beginner") return { name: "beginner", page: parts[1] || "overview", lessonId: parts[2] || null };
    if (parts[0] === "review" && parts[1] === "favorites") return { name: "favorites" };
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
    if (route.name === "beginner") return "home";
    if (route.name === "scene" || route.name === "learn") return "home";
    if (route.name === "favorites") return "review";
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
  function focusDestinationPicker() {
    const picker = view.querySelector("#destinationPicker");
    if (!picker) return;
    picker.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    picker.focus({ preventScroll: true });
  }
  function requireDestination() {
    state.destinationOpen = true;
    pendingDestinationFocus = true;
    showToast("请先选择目的地和语言");
    if (parseRoute().name === "home") {
      renderHome();
    } else {
      navigatePath("home", true);
    }
  }
  function maybeAskLevel() {
    const destination = selectedDestination();
    if (!destination || loadBeginnerState().levels[destination.id] || levelSurveyOpen) return;
    showLevelSurvey();
  }
  function showLevelSurvey(fromEntry = false) {
    const destination = selectedDestination();
    if (!destination || levelSurveyOpen) return;
    levelSurveyOpen = true;
    const previousFocus = document.activeElement;
    const overlay = document.createElement("div");
    overlay.className = "level-overlay";
    const shell = document.getElementById("appShell");
    shell.inert = true;
    overlay.innerHTML = `<section class="level-dialog" role="dialog" aria-modal="true" aria-labelledby="levelTitle" aria-describedby="levelDescription">
      <span class="eyebrow">${escapeHtml(destination.country)} · ${escapeHtml(destination.language)}</span>
      <h2 id="levelTitle">你现在能读这种语言吗？</h2>
      <p id="levelDescription">选一个最接近的情况，我们会推荐合适的旅行认读路线。旅行场景随时可以进入。</p>
      <button class="level-choice" type="button" data-level="zero"><strong>零基础</strong><span>从文字与声音的对应关系开始</span></button>
      <button class="level-choice" type="button" data-level="some"><strong>有一定基础</strong><span>先做一次认读测试，再决定是否跳过</span></button>
      <button class="text-btn level-later" type="button" data-level="later">稍后再说</button>
    </section>`;
    document.body.append(overlay);
    const close = (level) => {
      const beginner = loadBeginnerState();
      beginner.levels[destination.id] = level;
      saveBeginnerState(beginner);
      overlay.remove();
      levelSurveyOpen = false;
      shell.inert = false;
      previousFocus?.focus?.();
      if (level === "later") { if (fromEntry) navigatePath("beginner"); return; }
      if (window.TRAVEL_BEGINNER?.has(currentPack()?.features?.beginnerModule)) navigatePath(level === "some" ? "beginner/placement" : "beginner");
      else if (fromEntry) navigatePath("beginner");
      else if (state.tab === "home") renderHome();
    };
    overlay.querySelectorAll("[data-level]").forEach((button) => button.addEventListener("click", () => close(button.dataset.level)));
    overlay.addEventListener("keydown", (event) => {
      if (event.key === "Escape") { event.preventDefault(); close("later"); }
      if (event.key !== "Tab") return;
      const buttons = Array.from(overlay.querySelectorAll("button"));
      const index = buttons.indexOf(document.activeElement);
      if (event.shiftKey && index <= 0) { event.preventDefault(); buttons.at(-1).focus(); }
      else if (!event.shiftKey && index === buttons.length - 1) { event.preventDefault(); buttons[0].focus(); }
    });
    overlay.querySelector("button").focus();
  }
  function renderRoute() {
    const route = parseRoute();
    if (!state.destinationId && ["review", "favorites", "scene", "learn", "beginner", "emergency-card-form", "emergency-card-preview"].includes(route.name)) {
      requireDestination();
      return;
    }
    state.tab = routeTab(route);
    if (route.name !== "learn") state.learning = null;
    state.quiz = null;
    updateShell(state.tab, route.name === "learn" || route.name === "beginner" || route.name.startsWith("emergency-card"));
    if (route.name === "beginner") renderBeginnerRoute(route);
    else if (route.name === "review") renderReview();
    else if (route.name === "favorites") renderFavorites();
    else if (route.name === "tools") renderTools();
    else if (route.name === "me") renderMe();
    else if (route.name === "emergency-card-form") renderEmergencyCardForm();
    else if (route.name === "emergency-card-preview") void renderEmergencyCardPreview();
    else if (route.name === "scene") renderScene(route.sceneId);
    else if (route.name === "learn") beginLearningRoute(route.sceneId, route.situationId);
    else renderHome();
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
    const destination = selectedDestination();
    const heroImage = heroImageForDestination(destination?.id);
    const learning = destination ? loadLearning() : emptyLanguageState();
    const last = learning.lastLocation;
    let lastScene = sceneById(last?.sceneId);
    let lastSituation = situationById(lastScene, last?.situationId);
    if (lastScene && lastSituation) {
      const progress = situationProgress(lastScene.id, lastSituation.id, learning);
      if (progress.mastered === progress.total) lastSituation = firstIncompleteSituation(lastScene, learning);
      if (!lastSituation) lastScene = null;
    }
    const resumeProgress = lastScene && lastSituation
      ? situationProgress(lastScene.id, lastSituation.id, learning)
      : null;
    const resumePercentage = resumeProgress?.total
      ? Math.round(resumeProgress.mastered / resumeProgress.total * 100)
      : 0;
    const cards = scenePacks().map((scene) => {
      const progress = sceneProgress(scene.id, learning);
      const percentage = progress.total ? Math.round(progress.mastered / progress.total * 100) : 0;
      return `<button class="category-card scene-card scene-${escapeHtml(scene.id)}" type="button" data-scene="${escapeHtml(scene.id)}">
        <span class="category-icon" aria-hidden="true">${sceneIcon(scene.id)}</span>
        <span class="category-copy"><strong>${escapeHtml(scene.name)}</strong><small>${escapeHtml(scene.homeTopics.join("、"))}</small>
          <span class="scene-progress-copy">${destination ? `已掌握 ${percentage}%` : "选择旅程后记录"}</span>
          <span class="mini-progress" role="progressbar" aria-label="${escapeHtml(scene.name)}掌握进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${destination ? percentage : 0}"><i style="width:${destination ? percentage : 0}%"></i></span>
        </span>
      </button>`;
    }).join("");
    const destinationCards = DESTINATION_OPTIONS.map((item) => {
      const available = item.status === "available";
      const selected = item.id === state.destinationId;
      return `<button class="destination-card${selected ? " selected" : ""}" type="button" data-destination="${item.id}" aria-label="${escapeHtml(`${item.country}，${item.language}${available ? selected ? "，当前目的地" : "，可学习" : "，即将开放"}`)}" ${available ? `aria-pressed="${selected}"` : "disabled"}>
        <span class="destination-code destination-flag" aria-hidden="true"><img src="${item.flagSrc}" width="384" height="256" alt=""></span>
        <span class="destination-card-copy"><strong>${escapeHtml(item.country)}</strong><small>${escapeHtml(item.language)} · ${escapeHtml(item.nativeLabel)}</small><em>${available ? selected ? "当前目的地" : "可学习" : "即将开放"}</em></span>
        ${selected ? '<span class="destination-check" aria-hidden="true">✓</span>' : ""}
      </button>`;
    }).join("");
    const destinationTrigger = destination
      ? `<span class="destination-code destination-flag" aria-hidden="true"><img src="${destination.flagSrc}" width="384" height="256" alt=""></span><span class="destination-trigger-copy"><strong>${escapeHtml(destination.country)}</strong><small>${escapeHtml(destination.language)} · ${escapeHtml(destination.nativeLabel)}</small></span>`
      : `<span class="destination-code empty" aria-hidden="true">--</span><span class="destination-trigger-copy"><strong>选择目的地和语言</strong><small>日本、美国及更多目的地</small></span>`;
    const hasResume = Boolean(lastScene && lastSituation);
    const learningTitle = hasResume ? "继续学习" : "开始学习";
    const learningSubtitle = hasResume
      ? `${lastScene.name} · ${lastSituation.name} · 已掌握 ${resumePercentage}%`
      : "从实用场景出发，轻松掌握旅行外语";
    const learningLabel = !destination
      ? "开始学习，请先选择目的地和语言"
      : hasResume
        ? `继续学习，${learningSubtitle}`
        : "开始学习，从旅行场景中选择学习内容";
    const continueContent = `<button class="quick-entry ${hasResume ? "continue-entry" : "start-entry"}" type="button" data-continue aria-label="${escapeHtml(learningLabel)}">
      <span class="quick-entry-copy"><strong>${learningTitle}</strong><span class="quick-entry-subtitle">${escapeHtml(learningSubtitle)}</span></span>
      <span class="quick-entry-arrow" aria-hidden="true">${ACTION_ARROW_SVG}</span>
    </button>`;
    const beginner = loadBeginnerState();
    const beginnerModule = window.TRAVEL_BEGINNER?.get(currentPack()?.features?.beginnerModule);
    const beginnerSubtitle = beginnerModule
      ? beginnerModule.getHomeSummary(beginner.packs[currentPack().id])
      : destination ? "课程筹备中" : "选择目的地后开始";
    view.innerHTML = `<div class="home page-enter">
      <div class="brand-hero" aria-hidden="true">
        <picture>
          <source media="(min-width:560px)" srcset="${heroImage.wide}">
          <img class="brand-hero-image${destination?.id === "us" ? " hero-image-us" : ""}" src="${heroImage.mobile}" alt="" width="900" height="480" loading="eager" decoding="async" fetchpriority="high">
        </picture>
      </div>
      <section class="destination-picker${state.destinationOpen ? " open" : ""}" id="destinationPicker" tabindex="-1" aria-labelledby="destinationPickerTitle">
        <div class="destination-picker-copy"><span class="eyebrow">当前旅程</span><h2 id="destinationPickerTitle">${destination ? `${escapeHtml(destination.country)} · ${escapeHtml(destination.language)}` : "打算去哪？"}</h2><p>${destination ? "切换目的地会同步切换学习语言和进度。" : "选择目的地，学习当地真正用得上的表达。"}</p></div>
        <button class="destination-trigger" type="button" data-toggle-destinations aria-expanded="${state.destinationOpen}" aria-controls="destinationOptions">${destinationTrigger}<span class="destination-chevron" aria-hidden="true">⌄</span></button>
        <div class="destination-options" id="destinationOptions" aria-label="选择目的地和语言" ${state.destinationOpen ? "" : "hidden"}>
          <div class="destination-strip">${destinationCards}</div>
          <p>左右滑动查看更多目的地</p>
        </div>
      </section>
      <section class="home-quick-actions" aria-label="学习入口">${continueContent}<button class="quick-entry beginner-entry" type="button" data-beginner aria-label="旅行认读，${escapeHtml(beginnerSubtitle)}"><span class="quick-entry-copy"><strong>旅行认读</strong><span class="quick-entry-subtitle">看见当地文字，也能听懂、读懂、用上</span></span><span class="quick-entry-arrow" aria-hidden="true">${ACTION_ARROW_SVG}</span></button></section>
      <div class="section-heading" id="sceneHeading" tabindex="-1"><div><h2>旅行场景</h2></div><span>${scenePacks().length} 个场景</span></div>
      <div class="category-grid" id="sceneList">${cards}</div>
    </div>`;
    view.querySelector("[data-toggle-destinations]").addEventListener("click", (event) => {
      state.destinationOpen = !state.destinationOpen;
      event.currentTarget.setAttribute("aria-expanded", String(state.destinationOpen));
      view.querySelector("#destinationOptions").hidden = !state.destinationOpen;
      view.querySelector("#destinationPicker").classList.toggle("open", state.destinationOpen);
    });
    view.querySelectorAll("[data-destination]:not(:disabled)").forEach((button) => button.addEventListener("click", () => {
      if (!saveDestination(button.dataset.destination)) return;
      const nextDestination = selectedDestination();
      renderHome();
      showToast(`已切换到${nextDestination.country} · ${nextDestination.language}`);
      maybeAskLevel();
    }));
    view.querySelector("[data-beginner]").addEventListener("click", () => {
      if (!destination) requireDestination();
      else if (loadBeginnerState().levels[destination.id] === "later") showLevelSurvey(true);
      else navigatePath("beginner");
    });
    view.querySelector("[data-continue]").addEventListener("click", () => {
      if (!destination) requireDestination();
      else if (lastScene && lastSituation) navigatePath(`learn/${lastScene.id}/${lastSituation.id}`);
      else {
        const heading = view.querySelector("#sceneHeading");
        heading.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
        heading.focus({ preventScroll: true });
      }
    });
    view.querySelectorAll("[data-scene]").forEach((button) => button.addEventListener("click", () => {
      if (!destination) requireDestination();
      else navigatePath(`scene/${button.dataset.scene}`);
    }));
    if (pendingDestinationFocus) {
      pendingDestinationFocus = false;
      requestAnimationFrame(focusDestinationPicker);
    } else {
      scrollToTop();
    }
    if (destination && !beginner.levels[destination.id]) requestAnimationFrame(maybeAskLevel);
  }

  function beginnerContext() {
    const packId = currentPack()?.id;
    return {
      view, state, escapeHtml, speakerSvg: SPEAKER_SVG, currentPack, selectedDestination,
      navigatePath, scrollToTop, stopSpeech, playSpeech, shuffle, showToast, speechTimeout,
      getProgress: () => loadBeginnerState().packs[packId],
      saveProgress(progress) { const beginner = loadBeginnerState(); beginner.packs[packId] = progress; saveBeginnerState(beginner); }
    };
  }
  function renderBeginnerRoute(route) {
    const module = window.TRAVEL_BEGINNER?.get(currentPack()?.features?.beginnerModule);
    if (module) module.renderRoute(route, beginnerContext());
    else renderBeginnerPlaceholder();
  }
  function renderBeginnerPlaceholder() {
    stopSpeech();
    const destination = selectedDestination();
    view.innerHTML = `<div class="page-enter beginner-page"><header class="screen-heading beginner-heading"><button class="back-link" type="button" data-beginner-back>← 首页</button><span class="eyebrow">${escapeHtml(destination?.language || "语言")} · 旅行认读</span><h1>课程筹备中</h1><p>${escapeHtml(`${destination.country} · ${destination.language}的旅行认读内容正在准备。`)}</p></header>
      <section class="beginner-intro-card"><strong>先从旅行场景开始</strong><p>你可以照常学习当前目的地的八大场景。认读课程上线后，这里会成为入口。</p><button class="primary-btn" type="button" data-go-scenes>返回首页选场景</button></section></div>`;
    view.querySelector("[data-beginner-back]").addEventListener("click", () => navigatePath("home"));
    view.querySelector("[data-go-scenes]").addEventListener("click", () => navigatePath("home"));
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
    view.innerHTML = `<div class="scene-detail page-enter scene-${escapeHtml(scene.id)}">
      <button class="back-link" type="button" data-back>‹ 返回首页</button>
      <section class="scene-hero">
        <span class="category-icon scene-hero-icon" aria-hidden="true">${sceneIcon(scene.id)}</span>
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
        <div class="recognition-meta"><span class="question-meta">认识这句话</span>${favoriteButtonHtml(entry)}</div>
        <div class="recognition-foreign"><h2 id="recognitionWord">${escapeHtml(foreignText(entry))}</h2>${audioButtonHtml(entry)}</div>
        ${entry.pronunciation ? `<p class="recognition-reading">${escapeHtml(entry.pronunciation)}</p>` : ""}
        <div class="recognition-divider"></div>
        <strong class="recognition-zh">${escapeHtml(entry.zh)}</strong>
        <small>${entry.kind === "phrase" ? "旅行短句" : "旅行词汇"} · ${escapeHtml(scene.name)}</small>
        ${exampleHtml(entry)}
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
    bindFavoriteButtons();
    bindExampleDisclosure(entry);
    scrollToTop();
    requestAnimationFrame(() => view.querySelector(".recognition-card")?.focus({ preventScroll: true }));
  }

  function answerSignature(entry, direction) {
    const value = direction === "reverse" ? entry.zh : foreignText(entry);
    return String(value || "").trim().toLocaleLowerCase(currentPack()?.locale || "zh-CN");
  }
  function buildOptions(correct, direction, preferred = []) {
    const chosen = [];
    const ids = new Set([correct.id]);
    const signatures = new Set([answerSignature(correct, direction)]);
    const tiers = [
      preferred,
      situationWords(correct.sceneId, correct.situationId),
      sceneWords(correct.sceneId),
      wordBank().filter((item) => item.kind === correct.kind),
      wordBank()
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
    return wordBank().filter((entry) => {
      if (learning.byId[entry.id]?.status !== "mastered") return false;
      if (filter.weak && !weak.has(entry.id)) return false;
      if (filter.sceneId && entry.sceneId !== filter.sceneId) return false;
      if (filter.situationId && entry.situationId !== filter.situationId) return false;
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
    const scene = sceneById(entry.sceneId);
    const situation = situationById(scene, entry.situationId);
    const prompt = direction === "reverse"
      ? `<div class="foreign-prompt"><h2 id="questionText">${escapeHtml(foreignText(entry))}</h2>${audioButtonHtml(entry)}</div><p>请选择对应的中文含义</p>`
      : `<h2 id="questionText">${escapeHtml(entry.zh)}</h2><p>请选择对应的${langLabel()}表达</p>`;
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
      <div class="feedback-entry"><div class="feedback-answer"><span class="answer-zh">${escapeHtml(entry.zh)}</span>${foreignContentHtml(entry, true)}</div>${favoriteButtonHtml(entry, "feedback-favorite")}</div>
      ${exampleHtml(entry, true)}
    </div>`;
    const confirm = view.querySelector("#confirmBtn");
    confirm.disabled = false;
    confirm.textContent = state.quiz.index >= state.quiz.questions.length - 1 ? "查看结果" : "下一题";
    feedback.focus({ preventScroll: true });
    bindSpeechButtons(feedback);
    bindFavoriteButtons(feedback);
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
        <div class="recognition-meta"><span class="question-meta">刚才这条还不熟</span>${favoriteButtonHtml(entry)}</div>
        <div class="recognition-foreign"><h2>${escapeHtml(foreignText(entry))}</h2>${audioButtonHtml(entry)}</div>
        ${entry.pronunciation ? `<p class="recognition-reading">${escapeHtml(entry.pronunciation)}</p>` : ""}
        <div class="recognition-divider"></div><strong class="recognition-zh">${escapeHtml(entry.zh)}</strong>
        ${exampleHtml(entry)}
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
    bindFavoriteButtons();
    bindExampleDisclosure(entry);
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
        <span class="result-check" aria-hidden="true">${uiIcon("complete")}</span>
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
    const favoriteCount = favoriteIds().length;
    const sceneRows = scenePacks().map((scene) => {
      const count = masteredWords({ sceneId: scene.id }).length;
      return `<button class="review-scene-row scene-${escapeHtml(scene.id)}" type="button" data-review-scene="${scene.id}" ${count ? "" : "disabled"}>
        <span class="category-icon" aria-hidden="true">${sceneIcon(scene.id)}</span>
        <span><strong>${escapeHtml(scene.name)}</strong><small>${count ? `已掌握 ${count} 条` : "还没有已掌握内容"}</small></span>
        <span class="chevron" aria-hidden="true">›</span>
      </button>`;
    }).join("");
    view.innerHTML = `<div class="page-enter review-page">
      <header class="screen-heading"><span class="eyebrow">温故而知新</span><h1>复习</h1><p>把旅途中真正会用到的表达，练到随时都能想起来。</p></header>
      <section class="review-overview" aria-labelledby="reviewOverviewTitle">
        <div><span class="eyebrow">复习概览</span><h2 id="reviewOverviewTitle">${mastered ? weakCount ? `${weakCount} 条需要再巩固` : "已学内容保持得很好" : "完成学习后，从这里开始复习"}</h2><p>${mastered ? "双向混合测试，不设日期限制，想练就练。" : "先完成一组认识和小测，掌握的内容会自动出现在这里。"}</p></div>
        <div class="review-overview-stats" aria-label="复习数据"><div><strong>${mastered}</strong><span>已掌握</span></div><div><strong>${weakCount}</strong><span>需要加强</span></div></div>
        ${mastered ? `<button class="primary-btn" type="button" data-review-primary>${weakCount ? "开始加强" : "开始复习"}</button>` : ""}
      </section>
      <div class="feature-stack">
        <section class="feature-card featured"><span class="feature-icon violet" aria-hidden="true">${uiIcon("review")}</span><div><h3>薄弱加强</h3><p>${weakCount ? `集中复习 ${weakCount} 条答错过的内容。` : "目前没有需要加强的内容。"}</p></div><button class="secondary-btn compact" type="button" data-review-weak ${weakCount ? "" : "disabled"}>${weakCount ? "去加强" : "状态良好"}</button></section>
        <section class="feature-card"><span class="feature-icon favorite" aria-hidden="true">${uiIcon("favorite")}</span><div><h3>收藏夹</h3><p>${favoriteCount ? `已收藏 ${favoriteCount} 条常用表达。` : "把旅途中常用的表达收在这里。"}</p></div><button class="secondary-btn compact" type="button" data-open-favorites>${favoriteCount ? "查看收藏" : "去收藏"}</button></section>
      </div>
      ${mastered ? `<div class="section-heading review-heading"><div><span class="eyebrow">按需选择</span><h2>按场景复习</h2></div></div>
      <div class="review-scene-list">${sceneRows}</div>`
      : `<div class="empty-state review-empty"><span aria-hidden="true">${uiIcon("review")}</span><strong>还没有可复习的内容</strong><p>先到首页选择一个旅行场景，完成认识和小测。</p><button class="primary-btn" type="button" data-go-home>去首页学习</button></div>`}
    </div>`;
    view.querySelector("[data-review-primary]")?.addEventListener("click", () => startReview(weakCount ? { weak: true } : undefined));
    view.querySelector("[data-review-weak]")?.addEventListener("click", () => startReview({ weak: true }));
    view.querySelector("[data-open-favorites]")?.addEventListener("click", () => navigatePath("review/favorites"));
    view.querySelectorAll("[data-review-scene]").forEach((button) => button.addEventListener("click", () => startReview({ sceneId: button.dataset.reviewScene })));
    view.querySelector("[data-go-home]")?.addEventListener("click", () => navigatePath("home"));
    scrollToTop();
  }

  function favoriteEntryCardHtml(entry) {
    const scene = sceneById(entry.sceneId);
    const situation = situationById(scene, entry.situationId);
    return `<article class="favorite-entry-card" data-favorite-card="${escapeHtml(entry.id)}">
      <div class="favorite-entry-meta"><span>${escapeHtml(scene?.name || "旅行场景")} · ${escapeHtml(situation?.name || "常用表达")} · ${entry.kind === "phrase" ? "短句" : "词汇"}</span>${favoriteButtonHtml(entry)}</div>
      <div class="favorite-entry-main"><div><strong>${escapeHtml(foreignText(entry))}</strong>${entry.pronunciation ? `<p>${escapeHtml(entry.pronunciation)}</p>` : ""}<span>${escapeHtml(entry.zh)}</span></div>${audioButtonHtml(entry)}</div>
      ${exampleHtml(entry)}
    </article>`;
  }
  function favoriteSectionHtml(title, entries, description = "") {
    if (!entries.length) return "";
    return `<section class="favorite-results-section"><div class="section-heading"><div><h2>${escapeHtml(title)}</h2>${description ? `<p>${escapeHtml(description)}</p>` : ""}</div><span>${entries.length} 条</span></div><div class="favorite-entry-list">${entries.map(favoriteEntryCardHtml).join("")}</div></section>`;
  }
  function favoriteResultsHtml(query) {
    const ids = favoriteIds();
    const favoriteSet = new Set(ids);
    const byId = new Map(wordBank().map((entry) => [entry.id, entry]));
    if (!query.trim()) {
      const entries = ids.map((id) => byId.get(id)).filter(Boolean);
      if (entries.length) return favoriteSectionHtml("我的收藏", entries, "最近收藏的内容排在前面");
      return `<div class="empty-state favorite-empty"><span aria-hidden="true">${uiIcon("favorite")}</span><strong>还没有收藏内容</strong><p>搜索常用表达，或在学习和复习时点击星标。</p></div>`;
    }
    const matches = window.TRAVEL_FAVORITES.searchEntries(wordBank(), query, currentPack()?.locale);
    if (!matches.length) return `<div class="empty-state favorite-empty"><span aria-hidden="true">${uiIcon("favorite")}</span><strong>没有找到相关表达</strong><p>试试更短的中文、${langLabel()}或读音关键词。</p></div>`;
    const saved = matches.filter((entry) => favoriteSet.has(entry.id));
    const available = matches.filter((entry) => !favoriteSet.has(entry.id));
    const visibleAvailable = available.slice(0, FAVORITE_SEARCH_LIMIT);
    return `${favoriteSectionHtml("收藏中", saved)}${favoriteSectionHtml("全部表达", visibleAvailable)}${available.length > FAVORITE_SEARCH_LIMIT ? `<p class="search-limit-note">还有 ${available.length - FAVORITE_SEARCH_LIMIT} 条结果，请继续输入以缩小范围。</p>` : ""}`;
  }
  function bindFavoriteEntryCards(root, refresh) {
    bindSpeechButtons(root);
    bindFavoriteButtons(root, refresh);
    root.querySelectorAll("[data-favorite-card]").forEach((card) => {
      const entry = wordBank().find((item) => item.id === card.dataset.favoriteCard);
      if (entry) bindExampleDisclosure(entry, card);
    });
  }
  function renderFavorites() {
    stopSpeech();
    updateShell("review");
    view.innerHTML = `<div class="page-enter favorites-page">
      <button class="back-link" type="button" data-favorites-back>‹ 返回复习</button>
      <header class="screen-heading"><span class="eyebrow">随时快速找到</span><h1>收藏夹</h1><p>保存这趟旅程中常用的词汇和短句，也可以搜索当前${escapeHtml(langLabel())}内容。</p></header>
      <form class="favorite-search" role="search">
        <label for="favoriteSearch">搜索收藏和全部表达</label>
        <div><input id="favoriteSearch" name="query" type="search" inputmode="search" autocomplete="off" placeholder="输入中文、${escapeHtml(langLabel())}或读音" value="${escapeHtml(state.favoriteQuery)}"><button class="text-btn" type="button" data-clear-favorite-search${state.favoriteQuery ? "" : " hidden"}>清除</button></div>
        <small>完全一致的结果优先，同时支持部分关键词。</small>
      </form>
      <div id="favoriteResults" aria-live="polite">${favoriteResultsHtml(state.favoriteQuery)}</div>
    </div>`;
    const input = view.querySelector("#favoriteSearch");
    const results = view.querySelector("#favoriteResults");
    const clear = view.querySelector("[data-clear-favorite-search]");
    const refresh = () => {
      results.innerHTML = favoriteResultsHtml(state.favoriteQuery);
      bindFavoriteEntryCards(results, refresh);
    };
    input.addEventListener("input", () => {
      state.favoriteQuery = input.value;
      clear.hidden = !state.favoriteQuery;
      refresh();
    });
    view.querySelector(".favorite-search").addEventListener("submit", (event) => event.preventDefault());
    clear.addEventListener("click", () => {
      state.favoriteQuery = "";
      input.value = "";
      clear.hidden = true;
      refresh();
      input.focus();
    });
    view.querySelector("[data-favorites-back]").addEventListener("click", () => navigatePath("review"));
    bindFavoriteEntryCards(results, refresh);
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
        const scene = sceneById(entry.sceneId);
        const situation = situationById(scene, entry.situationId);
        return `<div class="wrong-item"><div><strong>${escapeHtml(entry.zh)}</strong>${foreignContentHtml(entry, true)}<small>${escapeHtml(scene.name)} · ${escapeHtml(situation.name)}</small></div><div class="wrong-item-actions">${favoriteButtonHtml(entry)}${audioButtonHtml(entry)}</div></div>`;
      }).join("")
      : `<div class="empty-state"><span aria-hidden="true">${uiIcon("complete")}</span><strong>本轮全部答对</strong><p>这些旅行表达已经越来越熟了。</p></div>`;
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
    bindFavoriteButtons();
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
    const emergencyAvailable = Boolean(currentPack()?.features?.emergencyCard);
    view.innerHTML = `<div class="page-enter tools-page">
      <header class="screen-heading"><span class="eyebrow">旅途工具箱</span><h1>工具</h1><p>需要时马上找到，重要信息只在当前设备中处理。</p></header>
      <button class="tool-spotlight" type="button" data-emergency-card${state.destinationId && !emergencyAvailable ? " disabled" : ""}><span class="feature-icon coral" aria-hidden="true">${uiIcon("emergencyCard")}</span><span class="tool-spotlight-copy"><small>${emergencyAvailable ? "已可使用" : "当前语言暂不可用"}</small><strong>紧急联系卡</strong><span>制作一张可离线保存、方便随身携带的双语急救信息卡。</span></span><b>${emergencyAvailable ? "立即制作" : "暂未开放"} <i aria-hidden="true">›</i></b></button>
      <div class="section-heading tool-section-heading"><div><span class="eyebrow">正在准备</span><h2>更多旅行工具</h2></div><span>计划中</span></div>
      <div class="tool-placeholder-grid" aria-label="计划中的工具">
        <article class="tool-placeholder"><span class="feature-icon teal" aria-hidden="true">${uiIcon("translate")}</span><span class="coming-badge">计划中</span><h3>快捷翻译</h3><p>快速输入并获取旅行场景中的常用表达。</p></article>
        <article class="tool-placeholder"><span class="feature-icon amber" aria-hidden="true">${uiIcon("exchange")}</span><span class="coming-badge">计划中</span><h3>汇率换算</h3><p>旅途中快速估算常用货币金额。</p></article>
        <article class="tool-placeholder"><span class="feature-icon blue" aria-hidden="true">${uiIcon("checklist")}</span><span class="coming-badge">计划中</span><h3>旅行清单</h3><p>整理出发前和旅途中需要确认的事项。</p></article>
      </div>
    </div>`;
    view.querySelector("[data-emergency-card]").addEventListener("click", () => {
      if (!state.destinationId) {
        requireDestination();
        return;
      }
      const pack = currentPack();
      if (!pack?.features?.emergencyCard) { showToast("当前语言暂不支持紧急联系卡"); return; }
      if (!state.emergencyCard || state.emergencyCard.packId !== pack.id) state.emergencyCard = window.EMERGENCY_CARD.createModel(pack);
      navigatePath("tools/emergency-card");
    });
    scrollToTop();
  }

  function dictionaryOptions(items, selected) {
    return items.map((item) => `<option value="${escapeHtml(item.code)}"${item.code === selected ? " selected" : ""}>${escapeHtml(item.zh)} · ${escapeHtml(item.target)}</option>`).join("");
  }
  function healthChoices(name, items, selected) {
    const active = new Set(selected || []);
    return items.map((item) => `<label class="choice-chip"><input type="checkbox" name="${name}" value="${escapeHtml(item.code)}"${active.has(item.code) ? " checked" : ""}><span>${escapeHtml(item.zh)}<small>${escapeHtml(item.target)}</small></span></label>`).join("");
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
    const pack = currentPack();
    if (!pack?.features?.emergencyCard) { navigatePath("tools", true); showToast("当前语言暂不支持紧急联系卡"); return; }
    if (!state.emergencyCard || state.emergencyCard.packId !== pack.id) state.emergencyCard = window.EMERGENCY_CARD.createModel(pack);
    const card = state.emergencyCard;
    const languageName = pack.languageLabel;
    const config = pack.features.emergencyCard;
    view.innerHTML = `<div class="card-maker page-enter">
      <div class="flow-header"><button class="text-btn" type="button" data-card-exit>‹ 返回工具</button><span>填写资料</span><small>1 / 2</small></div>
      <section class="privacy-banner"><span aria-hidden="true">${uiIcon("privacy")}</span><div><strong>资料只在当前页面处理</strong><p>不会上传或保存在浏览器中，刷新或关闭页面后即清除。</p></div></section>
      <section class="card-form-intro"><span class="eyebrow">${languageName}卡片</span><h1>制作紧急联系卡</h1><p>带 <b>*</b> 的内容为必填。其他信息留空后不会出现在卡片上。</p></section>
      <form class="emergency-form" id="emergencyCardForm" novalidate>
        <fieldset><legend>本人信息</legend><div class="form-grid">
          <label class="form-field" data-field="name"><span>姓名 <b>*</b></span><input name="name" autocomplete="name" maxlength="32" value="${escapeHtml(card.name)}"><small class="field-error" data-error="name"></small></label>
          <label class="form-field"><span>${escapeHtml(config.foreignNameLabel)}</span><input name="foreignName" maxlength="40" value="${escapeHtml(card.foreignName)}"><small>请按护照或证件上的写法填写</small></label>
          <label class="form-field"><span>国籍</span><select name="nationality"><option value="">不显示</option>${dictionaryOptions(config.dictionaries.nationalities, card.nationality.code)}</select></label>
          <label class="form-field" data-field="birthDate"><span>出生日期</span><input name="birthDate" type="date" max="${new Date().toISOString().slice(0, 10)}" value="${escapeHtml(card.birthDate)}"><small class="field-error" data-error="birthDate"></small></label>
          <label class="form-field"><span>血型</span><select name="bloodType"><option value="">不显示</option>${window.EMERGENCY_CARD.BLOOD_TYPES.map((type) => `<option value="${type}"${type === card.bloodType ? " selected" : ""}>${type === "unknown" ? "未知" : type}</option>`).join("")}</select></label>
          <label class="form-field sensitive-field" data-field="documentNumber"><span>身份证或护照号码</span><input name="documentNumber" maxlength="24" autocomplete="off" value="${escapeHtml(card.documentNumber)}"><small>敏感信息，仅在确有需要时填写</small><small class="field-error" data-error="documentNumber"></small></label>
        </div><div class="custom-pair" data-nationality-custom hidden><label class="form-field" data-field="nationalityCustomZh"><span>国籍中文名称</span><input name="nationalityCustomZh" maxlength="30" value="${escapeHtml(card.nationality.customZh)}"><small class="field-error" data-error="nationalityCustomZh"></small></label><label class="form-field" data-field="nationalityCustomForeign"><span>国籍${languageName}名称</span><input name="nationalityCustomForeign" maxlength="40" value="${escapeHtml(card.nationality.customForeign)}"><small class="field-error" data-error="nationalityCustomForeign"></small></label></div></fieldset>
        <fieldset><legend>紧急联系人</legend><div class="form-grid"><label class="form-field" data-field="emergencyContact"><span>联系人姓名 <b>*</b></span><input name="emergencyContact" maxlength="32" autocomplete="off" value="${escapeHtml(card.emergencyContact)}"><small class="field-error" data-error="emergencyContact"></small></label><label class="form-field" data-field="emergencyPhone"><span>联系电话 <b>*</b></span><input name="emergencyPhone" type="tel" inputmode="tel" maxlength="24" autocomplete="tel" placeholder="+86 138 0000 0000" value="${escapeHtml(card.emergencyPhone)}"><small class="field-error" data-error="emergencyPhone"></small></label></div></fieldset>
        <fieldset><legend>过敏信息</legend><p class="fieldset-hint">可多选；“无”与其他选项互斥。</p><div class="choice-chip-grid">${healthChoices("allergies", config.dictionaries.allergies, card.allergies.codes)}</div><div class="custom-pair" data-field="allergiesCustom"><label class="form-field"><span>其他过敏信息（中文）</span><input name="allergiesCustomZh" maxlength="40" value="${escapeHtml(card.allergies.customZh)}"></label><label class="form-field"><span>其他过敏信息（${languageName}）</span><input name="allergiesCustomForeign" maxlength="60" value="${escapeHtml(card.allergies.customForeign)}"></label><small class="field-error pair-error" data-error="allergiesCustom"></small></div></fieldset>
        <fieldset><legend>既往疾病</legend><p class="fieldset-hint">可多选；“无”与其他选项互斥。</p><div class="choice-chip-grid">${healthChoices("conditions", config.dictionaries.conditions, card.conditions.codes)}</div><div class="custom-pair" data-field="conditionsCustom"><label class="form-field"><span>其他疾病信息（中文）</span><input name="conditionsCustomZh" maxlength="40" value="${escapeHtml(card.conditions.customZh)}"></label><label class="form-field"><span>其他疾病信息（${languageName}）</span><input name="conditionsCustomForeign" maxlength="60" value="${escapeHtml(card.conditions.customForeign)}"></label><small class="field-error pair-error" data-error="conditionsCustom"></small></div></fieldset>
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
      if (!state.emergencyCard && currentPack()?.features?.emergencyCard) state.emergencyCard = window.EMERGENCY_CARD.createModel(currentPack());
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
    const destination = selectedDestination();
    const learning = destination ? loadLearning() : emptyLanguageState();
    const introduced = Object.values(learning.byId).filter((record) => record.status === "introduced").length;
    const mastered = Object.values(learning.byId).filter((record) => record.status === "mastered").length;
    const weak = learning.weakIds.length;
    const learningDataHtml = destination
      ? `<section class="learning-data-card" aria-label="${langLabel()}学习数据"><div><strong>${introduced}</strong><span>已认识</span></div><div><strong>${mastered}</strong><span>已掌握</span></div><div><strong>${weak}</strong><span>需加强</span></div></section>`
      : `<section class="language-required-card without-icon"><div><h3>尚未选择目的地</h3><p>请先回到首页选择目的地和语言，再查看对应的学习数据。</p></div><button class="secondary-btn compact" type="button" data-choose-destination>去首页选择</button></section>`;
    view.innerHTML = `<div class="page-enter settings-page">
      <header class="screen-heading"><span class="eyebrow">你的学习旅程</span><h1>我的</h1><p>管理当前旅程、学习数据与离线使用方式。</p></header>
      <section class="profile-card"><img src="icons/icon-192.png" width="72" height="72" alt="语见世界应用图标"><div><span class="eyebrow">当前旅程</span><h2>${destination ? `${destination.country} · ${destination.language}` : "尚未选择目的地"}</h2><p>${destination ? `为${destination.country}之旅学习真正用得上的表达。` : "从首页选择这趟旅行的目的地和语言。"}</p></div></section>
      ${learningDataHtml}
      <div class="section-heading settings-heading"><div><span class="eyebrow">应用管理</span><h2>设置</h2></div></div>
      <section class="settings-list">
        <div class="settings-row planned-row" aria-disabled="true"><div class="setting-heading"><span class="setting-icon teal" aria-hidden="true">${uiIcon("trip")}</span><div><h3>我的行程</h3><p>整理不同旅程的学习内容</p></div></div><span class="planned-badge">计划中</span></div>
        <div class="settings-row"><div class="setting-heading"><span class="setting-icon blue" aria-hidden="true">${uiIcon("install")}</span><div><h3>安装 App</h3><p>从主屏幕更快打开并离线使用</p></div></div><div class="setting-action">${installPromptHtml()}</div></div>
        <div class="settings-row danger-zone"><div class="setting-heading"><span class="setting-icon red" aria-hidden="true">${uiIcon("deleteData")}</span><div><h3>学习数据</h3><p>清除场景学习数据、认读进度和水平选择</p></div></div><button class="danger-btn" type="button" data-reset>清除全部学习数据</button></div>
      </section>
      <aside class="journey-quote without-icon" aria-label="旅行寄语"><p>语言或许不同，<br>但对世界的好奇心相同</p></aside>
    </div>`;
    view.querySelector("[data-choose-destination]")?.addEventListener("click", requireDestination);
    view.querySelector("[data-reset]").addEventListener("click", resetData);
    bindInstallPrompt();
    scrollToTop();
  }
  function resetData() {
    if (!window.confirm("确定清除全部学习数据与旅行认读进度吗？目的地选择会保留。")) return;
    stopSpeech();
    try { localStorage.removeItem(LEARNING_KEY); localStorage.removeItem(BEGINNER_KEY); }
    catch (error) { console.warn("无法清除学习数据", error); }
    renderMe();
    showToast("全部学习数据已清除");
  }

  function renderError(problems) {
    stopSpeech();
    updateShell("home");
    view.innerHTML = `<section class="error-state" role="alert"><span aria-hidden="true">${uiIcon("warning")}</span><h2>内容暂时无法打开</h2><p>请检查目的地语言包后刷新页面。</p><ul>${problems.slice(0, 10).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`;
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
    initializeDestination();
    if (!window.location.hash) history.replaceState(null, "", "#/home");
    window.addEventListener("hashchange", renderRoute);
    setupInstallPrompt();
    registerServiceWorker();
    renderRoute();
  }

  init();
})();
