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
  const DESTINATION_OPTIONS = window.TRAVEL_DESTINATIONS.all;
  const DEFAULT_HERO_IMAGE = window.TRAVEL_DESTINATIONS.defaultHero;
  // Home and review display priority only; preserve content-pack order and course progress.
  const HOME_SCENE_PRIORITY = Object.freeze({
    basics: 0, airport: 1, transport: 2, hotel: 3, food: 4, directions: 5, shopping: 6, emergency: 7
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
  const HOME_READING_ICON_SVG = '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M12 7h16a8 8 0 0 1 8 8v9a8 8 0 0 1-8 8H16l-7 4v-5a8 8 0 0 1-5-7v-9a8 8 0 0 1 8-8Z" fill="var(--home-reading-symbol-fill, #CADFC0)"/><path d="M11 19v4m6-10v16m6-13v10m6-7v4" stroke="var(--home-reading-symbol-stroke, #3C6D50)" stroke-width="2.4" stroke-linecap="round"/></svg>';
  const SPEAKER_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8a5 5 0 0 1 0 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  const FAVORITE_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17.2l-5.56 2.92 1.06-6.2L3 9.53l6.22-.9L12 3Z"/></svg>';
  const ACTION_ARROW_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const CLOUD_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 18.5h9.2a4.3 4.3 0 0 0 .6-8.56A5.8 5.8 0 0 0 6.2 8.7a4.9 4.9 0 0 0 1.3 9.8Z" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 11.5v5m-2-2 2 2 2-2" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>';

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
    translateDraft: "",
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
  const languageLoads = new Map();
  const loadedScripts = new Set();
  let routeRequest = 0;
  let disposeTranslator = null;
  let innerDockObserver = null;
  const innerSceneScroll = new Map();

  function loadScript(path) {
    if (loadedScripts.has(path)) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = path;
      script.onload = () => { loadedScripts.add(path); resolve(); };
      script.onerror = () => { script.remove(); reject(new Error(`无法加载 ${path}`)); };
      document.body.append(script);
    });
  }
  function loadLanguage(packId) {
    const destination = DESTINATION_OPTIONS.find((item) => item.contentPackId === packId && item.status === "available");
    if (!destination?.resources?.pack) return Promise.reject(new Error(`未知语言包：${packId}`));
    const existingPack = window.TRAVEL_CONTENT?.get(packId);
    if (existingPack && (!existingPack.features?.beginnerModule
      || window.TRAVEL_BEGINNER?.has(existingPack.features.beginnerModule))) return Promise.resolve();
    if (!languageLoads.has(packId)) {
      const loading = [destination.resources.pack, ...(destination.resources.beginner || [])]
        .reduce((previous, path) => previous.then(() => loadScript(path)), Promise.resolve())
        .then(() => {
          const pack = window.TRAVEL_CONTENT.get(packId);
          if (!pack || (pack.features?.beginnerModule && !window.TRAVEL_BEGINNER.has(pack.features.beginnerModule))) {
            throw new Error(`语言包不完整：${packId}`);
          }
        })
        .catch((error) => { languageLoads.delete(packId); throw error; });
      languageLoads.set(packId, loading);
    }
    return languageLoads.get(packId);
  }

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
    return destinationById(destinationId)?.hero || DEFAULT_HERO_IMAGE;
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
  function normalizeStoredLanguageState(input) {
    const output = emptyLanguageState();
    Object.entries(input?.byId || {}).forEach(([id, record]) => {
      if (!id || !["introduced", "mastered"].includes(record?.status)) return;
      output.byId[id] = {
        status: record.status,
        reviewAttempts: clampInt(record.reviewAttempts),
        reviewCorrect: clampInt(record.reviewCorrect, clampInt(record.reviewAttempts)),
        lastSeen: clampInt(record.lastSeen)
      };
    });
    output.weakIds = Array.isArray(input?.weakIds)
      ? Array.from(new Set(input.weakIds.filter((id) => typeof id === "string" && output.byId[id]?.status === "mastered")))
      : [];
    const location = input?.lastLocation;
    output.lastLocation = typeof location?.sceneId === "string" && typeof location?.situationId === "string"
      ? { sceneId: location.sceneId, situationId: location.situationId }
      : null;
    return output;
  }
  function normalizeLanguageState(input, pack = currentPack()) {
    const stored = normalizeStoredLanguageState(input);
    if (!pack) return stored;
    const output = emptyLanguageState();
    const validIds = new Set((pack?.entries || []).map((entry) => entry.id));
    Object.entries(stored.byId).forEach(([id, record]) => {
      if (validIds.has(id)) output.byId[id] = record;
    });
    output.weakIds = stored.weakIds.filter((id) => validIds.has(id) && output.byId[id]?.status === "mastered");
    output.lastLocation = validLocation(stored.lastLocation, pack);
    return output;
  }
  function loadLearningEnvelope() {
    try {
      const raw = JSON.parse(localStorage.getItem(LEARNING_KEY));
      const envelope = { packs: { ...(raw?.packs || {}) } };
      Object.assign(envelope.packs, defaultLearningEnvelope().packs);
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
  function summarizeLearningEnvelope(envelope) {
    return Object.values(envelope?.packs || {}).reduce((summary, learning) => {
      const records = Object.values(learning?.byId || {});
      summary.learned += records.length;
      summary.mastered += records.filter((record) => record.status === "mastered").length;
      summary.weak += Array.isArray(learning?.weakIds) ? learning.weakIds.length : 0;
      return summary;
    }, { learned: 0, mastered: 0, weak: 0 });
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
    disposeTranslator?.();
    state.destinationId = destination.id;
    state.destinationOpen = false;
    state.learning = null;
    state.quiz = null;
    state.emergencyCard = null;
    state.translateDraft = "";
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
      state.packs = { ...(raw?.packs || {}), ...state.packs };
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
            packs[packId] = legacyLearning[language];
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
    if (state.destinationId && !packs.length) return ["找不到目的地语言包。"];
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
      if (destination.id === state.destinationId && !window.TRAVEL_CONTENT.has(destination.contentPackId)) problems.push(`当前目的地缺少内容包：${destination.id}`);
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
    if (parts[0] === "me" && parts[1] === "footprints") return { name: "footprints" };
    if (parts[0] === "tools" && parts[1] === "trips") return { name: "footprints", legacy: true };
    if (parts[0] === "tools" && parts[1] === "checklist") return { name: "checklist" };
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
    if (route.name === "footprints") return "me";
    if (route.name.startsWith("emergency-card") || route.name === "checklist") return "tools";
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
    innerDockObserver?.disconnect();
    innerDockObserver = null;
    document.body.style.removeProperty("--inner-dock-height");
    document.body.classList.remove("is-review-page", "is-tools-page", "is-me-page", "is-inner-page", "is-inner-focus");
    document.body.classList.toggle("is-immersive", immersive);
    document.body.classList.toggle("is-home-page", !immersive && parseRoute().name === "home");
    bottomNav.hidden = immersive;
    if (immersive) return;
    bottomNav.querySelectorAll(".nav-item").forEach((item) => {
      if (item.dataset.tab === tab) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
  }
  function focusDestinationPicker() {
    const dialog = view.querySelector("#destinationOptions");
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    view.querySelector('[data-destination][aria-pressed="true"]')?.focus();
  }
  function openDestinationPicker(message) {
    state.destinationOpen = true;
    pendingDestinationFocus = true;
    if (message) showToast(message);
    if (parseRoute().name === "home") {
      renderHome();
    } else {
      navigatePath("home", true);
    }
  }
  function requireDestination() {
    openDestinationPicker("请先选择目的地和语言");
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
  async function renderRoute() {
    disposeTranslator?.();
    const request = ++routeRequest;
    const destination = selectedDestination();
    const pack = destination && window.TRAVEL_CONTENT?.get(destination.contentPackId);
    if (destination && (!pack || (pack.features?.beginnerModule && !window.TRAVEL_BEGINNER?.has(pack.features.beginnerModule)))) {
      view.innerHTML = '<p class="setting-note" role="status">正在加载当前语言内容…</p>';
      try { await loadLanguage(destination.contentPackId); }
      catch (error) { if (request === routeRequest) renderError([error.message]); return; }
      if (request !== routeRequest) return;
    }
    const problems = validateData();
    if (problems.length) { renderError(problems); return; }
    const route = parseRoute();
    // Footprints are temporarily closed; keep their data and implementation for restoration.
    if (route.name === "footprints") { navigatePath("me", true); return; }
    if (!state.destinationId && ["review", "favorites", "scene", "learn", "beginner", "emergency-card-form", "emergency-card-preview"].includes(route.name)) {
      requireDestination();
      return;
    }
    state.tab = routeTab(route);
    if (route.name !== "learn") state.learning = null;
    state.quiz = null;
    updateShell(state.tab, route.name === "learn" || route.name === "beginner" || route.name.startsWith("emergency-card") || route.name === "checklist");
    if (route.name === "beginner") renderBeginnerRoute(route);
    else if (route.name === "review") renderReview();
    else if (route.name === "favorites") renderFavorites();
    else if (route.name === "tools") renderTools();
    else if (route.name === "me") renderMe();
    else if (route.name === "footprints") renderFootprints();
    else if (route.name === "checklist") renderChecklist();
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
  function sceneMasteryMeter(mastered, total, className) {
    const percentage = total ? Math.max(0, Math.min(100, mastered / total * 100)) : 0;
    return `<span class="${className}-group" aria-hidden="true"><span class="scene-meter-value">${mastered}/${total}</span><span class="${className}"><i style="width:${percentage}%"></i></span></span>`;
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
    const hasResume = Boolean(lastScene && lastSituation);
    const resumeProgress = hasResume ? situationProgress(lastScene.id, lastSituation.id, learning) : null;
    const resumePercentage = resumeProgress?.total ? Math.round(resumeProgress.mastered / resumeProgress.total * 100) : 0;
    const homeIcons = { ...SCENE_ICON_PATHS, hotel: "icons/scenes/home-hotel.png", food: "icons/scenes/home-food.png", shopping: "icons/scenes/home-shopping.png" };
    const homeScenes = [...scenePacks()].sort((a, b) =>
      (HOME_SCENE_PRIORITY[a.id] ?? 99) - (HOME_SCENE_PRIORITY[b.id] ?? 99));
    const cards = homeScenes.map((scene) => {
      const progress = sceneProgress(scene.id, learning);
      const status = progress.mastered ? `已掌握 ${progress.mastered} / ${progress.total} 条` : progress.introduced ? "学习中" : "";
      return `<button class="home-c__scene" type="button" data-scene="${escapeHtml(scene.id)}" aria-label="${escapeHtml(`${scene.name}，${scene.homeTopics.join('、')}${status ? `，${status}` : ''}`)}">
        <span class="home-c__scene-main"><span class="home-c__scene-icon"><img src="${homeIcons[scene.id] || homeIcons.basics}" width="38" height="38" alt="" loading="lazy"></span><span class="home-c__scene-copy"><strong>${escapeHtml(scene.name)}</strong><span class="home-c__topics">${scene.homeTopics.slice(0, 3).map(topic => `<span>${escapeHtml(topic)}</span>`).join("")}</span></span></span>
        <span class="home-c__scene-end">${status ? sceneMasteryMeter(progress.mastered, progress.total, "home-c__scene-meter") : ""}<img src="icons/ui/home-forward.png" width="16" height="16" alt=""></span>
      </button>`;
    }).join("");
    const destinationCards = DESTINATION_OPTIONS.map((item) => {
      const available = item.status === "available";
      const selected = item.id === state.destinationId;
      return `<button class="home-c__destination-option" type="button" data-destination="${item.id}" ${available ? `aria-pressed="${selected}"` : "disabled"}>
        <img src="${item.flagSrc}" width="32" height="24" alt=""><span><strong>${escapeHtml(item.country)}</strong><small>${escapeHtml(item.language)} · ${escapeHtml(item.nativeLabel)}</small></span>${selected ? '<span class="home-c__selected">已选择</span>' : ''}
      </button>`;
    }).join("");
    const learningTitle = hasResume ? "继续学习" : "开始学习";
    const courseTitle = hasResume ? `${lastScene.name} · ${lastSituation.name}` : destination ? "为旅途，学会第一句" : "你的旅程，从这里开始";
    const learningLabel = !destination ? "选择目的地和语言" : hasResume ? `继续学习，${courseTitle}` : "开始学习，从旅行场景中选择学习内容";
    const beginner = loadBeginnerState();
    const beginnerModule = window.TRAVEL_BEGINNER?.get(currentPack()?.features?.beginnerModule);
    const beginnerSubtitle = beginnerModule ? beginnerModule.getHomeSummary(beginner.packs[currentPack().id]) : destination ? "课程筹备中" : "选择目的地后开始";
    const dimensions = { default: [[900,480],[1600,456]], jp: [[900,480],[1600,456]], us: [[900,480],[1600,456]], kr: [[900,480],[1600,456]], es: [[1200,640],[1640,547]], ru: [[1717,916],[2348,670]] }[destination?.id || "default"];
    view.innerHTML = `<div class="home home-c">
      <h1 class="sr-only">${destination ? `下一站，${escapeHtml(destination.country)}。` : "下一站，想去哪里？"}</h1>
      <div class="home-c__hero" aria-hidden="true"><picture><source media="(min-width:768px)" srcset="${heroImage.wide}" width="${dimensions[1][0]}" height="${dimensions[1][1]}"><img src="${heroImage.mobile}" alt="" width="${dimensions[0][0]}" height="${dimensions[0][1]}" decoding="async" fetchpriority="high"></picture></div>
      <div class="home-c__hero-inner" id="destinationPicker">
        <button class="destination-trigger home-c__destination-toggle" type="button" data-toggle-destinations aria-haspopup="dialog" aria-expanded="${state.destinationOpen}" aria-controls="destinationOptions">${destination ? `<img src="${destination.flagSrc}" width="24" height="18" alt=""><span>${escapeHtml(destination.country)} · ${escapeHtml(destination.language)}</span>` : '<span>选择目的地</span>'}<span class="home-c__chevron" aria-hidden="true"></span></button>
      </div>
      <div class="home-c__content">
        <section class="home-c__learning" aria-labelledby="homeCourseTitle"><div class="home-c__learning-copy"><p class="home-c__eyebrow">${hasResume ? '<span>上次学到</span>' : ''}<span>${destination ? `${escapeHtml(destination.country)} · ${escapeHtml(destination.language)}` : '选择目的地'}</span></p><h2 id="homeCourseTitle">${escapeHtml(courseTitle)}</h2></div>
          <div class="home-c__learning-actions">${hasResume ? `<div class="home-c__progress"><span class="home-c__progress-track" role="progressbar" aria-label="当前情境已掌握条数" aria-valuemin="0" aria-valuemax="${resumeProgress.total}" aria-valuenow="${resumeProgress.mastered}"><i style="width:${resumePercentage}%"></i></span><span>已掌握 <b>${resumeProgress.mastered} / ${resumeProgress.total}</b></span></div>` : ''}<button class="home-c__primary${destination ? ' home-c__primary--art' : ''}" type="button" data-continue aria-label="${escapeHtml(learningLabel)}">${destination ? `<img class="home-c__learning-lettering" src="icons/ui/home-learning-${hasResume ? 'continue' : 'start'}.png" width="120" height="24" alt="${learningTitle} →">` : ''}<span>${destination ? learningTitle : '选择目的地'}</span><span aria-hidden="true">→</span></button></div>
        </section>
        <button class="home-c__reading" type="button" data-beginner aria-label="零基础认读，${destination ? `${escapeHtml(destination.language)}入门，` : ''}${escapeHtml(beginnerSubtitle)}"><span class="home-c__reading-main"><span class="home-c__reading-symbol" aria-hidden="true">${HOME_READING_ICON_SVG}</span><span class="home-c__reading-copy"><strong>零基础认读</strong><span>${destination ? `${escapeHtml(destination.language)}入门 · 看字学发音` : '选择目的地后开始'}</span></span></span><span class="home-c__reading-action${destination ? ' home-c__reading-action--art' : ''}">${destination ? '<img class="home-c__reading-lettering" src="icons/ui/home-reading-start.png" width="60" height="24" alt="开始 →"><span class="home-c__reading-action-text" aria-hidden="true">开始 →</span>' : '选择 <span aria-hidden="true">→</span>'}</span></button>
        <section class="home-c__scenes" aria-labelledby="sceneTitle"><div class="home-c__section-heading" id="sceneHeading" tabindex="-1"><h2 id="sceneTitle">旅行场景</h2><span>自由选择，随时开始</span></div><div class="home-c__scene-list" id="sceneList">${cards || '<p class="home-c__empty">选好目的地，查看旅途会用到的旅行场景。</p>'}</div></section>
      </div>
      <dialog class="home-c__destination-dialog" id="destinationOptions" aria-labelledby="destinationPickerTitle"><div class="home-c__dialog-heading"><h2 id="destinationPickerTitle">下一站，想去哪里？</h2><button type="button" data-close-destinations aria-label="关闭目的地选择">×</button></div><p>选择目的地，同步切换学习语言。</p><div class="home-c__destination-list">${destinationCards}</div></dialog>
    </div>`;
    const dialog = view.querySelector("#destinationOptions");
    const trigger = view.querySelector("[data-toggle-destinations]");
    const closeDestinations = () => { state.destinationOpen = false; dialog.close(); };
    dialog.addEventListener("close", () => { state.destinationOpen = false; trigger.setAttribute("aria-expanded", "false"); if (trigger.isConnected && !levelSurveyOpen) trigger.focus({ preventScroll: true }); });
    trigger.addEventListener("click", () => { state.destinationOpen = true; trigger.setAttribute("aria-expanded", "true"); focusDestinationPicker(); });
    view.querySelector("[data-close-destinations]").addEventListener("click", closeDestinations);
    dialog.addEventListener("click", (event) => { if (event.target !== dialog) return; const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeDestinations(); });
    view.querySelectorAll("[data-destination]:not(:disabled)").forEach((button) => button.addEventListener("click", async () => {
      const next = destinationById(button.dataset.destination);
      if (!next) return;
      if (next.id === state.destinationId) { closeDestinations(); return; }
      const request = routeRequest;
      button.disabled = true;
      try { await loadLanguage(next.contentPackId); }
      catch (error) { if (button.isConnected) { button.disabled = false; showToast("语言内容加载失败，请检查网络后重试"); } return; }
      if (request !== routeRequest || !button.isConnected) return;
      if (!saveDestination(next.id)) { button.disabled = false; return; }
      state.destinationOpen = false;
      dialog.close();
      renderHome();
      view.querySelector("[data-toggle-destinations]").focus({ preventScroll: true });
      showToast(`已切换到${next.country} · ${next.language}`);
      maybeAskLevel();
    }));
    const learningLettering = view.querySelector(".home-c__learning-lettering");
    if (learningLettering) {
      const showLearningText = () => learningLettering.parentElement.classList.add("home-c__primary--fallback");
      learningLettering.addEventListener("error", showLearningText, { once: true });
      if (learningLettering.complete && !learningLettering.naturalWidth) showLearningText();
    }
    const readingLettering = view.querySelector(".home-c__reading-lettering");
    if (readingLettering) {
      const showReadingText = () => readingLettering.parentElement.classList.add("home-c__reading-action--fallback");
      readingLettering.addEventListener("error", showReadingText, { once: true });
      if (readingLettering.complete && !readingLettering.naturalWidth) showReadingText();
    }
    view.querySelector("[data-beginner]").addEventListener("click", () => {
      if (!destination) requireDestination();
      else if (loadBeginnerState().levels[destination.id] === "later") showLevelSurvey(true);
      else navigatePath("beginner");
    });
    view.querySelector("[data-continue]").addEventListener("click", () => {
      if (!destination) requireDestination();
      else if (hasResume) navigatePath(`learn/${lastScene.id}/${lastSituation.id}`);
      else { const heading = view.querySelector("#sceneHeading"); heading.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }); heading.focus({ preventScroll: true }); }
    });
    view.querySelectorAll("[data-scene]").forEach((button) => button.addEventListener("click", () => { if (!destination) requireDestination(); else navigatePath(`scene/${button.dataset.scene}`); }));
    if (pendingDestinationFocus || state.destinationOpen) { pendingDestinationFocus = false; requestAnimationFrame(focusDestinationPicker); }
    else scrollToTop();
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
  function innerSoundMark() {
    return `<span class="inner-sound" aria-hidden="true">${innerPngIcon("audio-wave", "听")}</span>`;
  }
  function innerPngIcon(name, fallback) {
    return `<span class="inner-png-icon" aria-hidden="true"><img src="icons/ui/${name}.png" alt="" width="20" height="20"><span class="inner-icon-fallback">${fallback}</span></span>`;
  }
  function bindInnerIcons(root = view) {
    root.querySelectorAll(".inner-png-icon img").forEach((img) => {
      const fallback = () => img.parentElement.classList.add("image-failed");
      img.addEventListener("error", fallback, { once: true });
      if (img.complete && !img.naturalWidth) fallback();
    });
  }
  function innerAudioButton(entry, text = "") {
    return audioButtonHtml(entry).replace('class="speak-btn"', `class="speak-btn inner-audio${text ? " inner-audio-label" : ""}"`)
      .replace(SPEAKER_SVG, innerSoundMark() + (text ? `<span>${escapeHtml(text)}</span>` : ""));
  }
  function innerFavoriteButton(entry) {
    return favoriteButtonHtml(entry, "inner-favorite").replace(FAVORITE_SVG,
      '<img src="icons/ui/favorite.png" alt=""><span class="inner-unsaved">收藏</span><span class="inner-saved">已收藏</span>');
  }
  function innerExample(entry, open = false) {
    if (!entry.example) return "";
    return `<details class="inner-example"${open ? " open" : ""}><summary>在旅途中这样说</summary>${exampleHtml(entry, true).replaceAll(SPEAKER_SVG, innerSoundMark())}</details>`;
  }
  function innerProgress(current, total, label) {
    return `<div class="inner-track" role="progressbar" aria-label="${escapeHtml(label)}" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${current}">${Array.from({ length: total }, (_, index) => `<i class="${index < current ? "done" : ""}"></i>`).join("")}</div>`;
  }
  function activateInnerPage() {
    document.body.classList.add("is-inner-page");
    bindInnerIcons();
    const dock = view.querySelector(".inner-dock");
    document.body.classList.toggle("is-inner-focus", Boolean(dock));
    if (!dock) return;
    const measure = () => {
      if (dock.isConnected && document.body.classList.contains("is-inner-page")) {
        document.body.style.setProperty("--inner-dock-height", `${dock.getBoundingClientRect().height}px`);
      }
    };
    measure();
    innerDockObserver = new ResizeObserver(measure);
    innerDockObserver.observe(dock);
  }
  function innerLearningCard(entry, hint) {
    return `<div class="inner-phase"><strong>${escapeHtml(hint)}</strong><span>听一听，跟着读</span></div>
      <section class="recognition-card inner-word" tabindex="-1" aria-labelledby="recognitionWord">
        <div class="inner-word-top"><span>${escapeHtml(langLabel())} · ${entry.kind === "phrase" ? "旅行短句" : "旅行词汇"}</span>${innerFavoriteButton(entry)}</div>
        <h1 id="recognitionWord" lang="${escapeHtml(currentPack().locale)}">${escapeHtml(foreignText(entry))}</h1>
        ${entry.pronunciation ? `<p class="inner-reading">${escapeHtml(entry.pronunciation)}</p>` : ""}
        <p class="inner-meaning">${escapeHtml(entry.zh)}</p>${innerAudioButton(entry, "听发音")}
      </section>${innerExample(entry, true)}`;
  }
  function renderScene(sceneId) {
    stopSpeech();
    const scene = sceneById(sceneId);
    if (!scene) { showToast("找不到这个旅行场景"); navigatePath("home", true); return; }
    const learning = loadLearning();
    const progress = sceneProgress(scene.id, learning);
    const next = firstIncompleteSituation(scene, learning);
    const started = sceneWords(scene.id).some(entry => learning.byId[entry.id]);
    const situations = scene.situations.map((situation) => {
      const value = situationProgress(scene.id, situation.id, learning);
      const status = statusFor(value);
      const active = next?.id === situation.id;
      return `<button class="situation-row inner-course${active ? " current" : ""}" type="button" data-situation="${escapeHtml(situation.id)}" aria-label="${escapeHtml(situation.name)}，${status.label}，已掌握 ${value.mastered}/${value.total}">
        <span><strong>${escapeHtml(situation.name)}</strong>${active ? `<small>${started ? "接着学" : "从这里开始"}</small>` : ""}</span>
        <span class="inner-row-progress" aria-hidden="true"><span>${value.mastered}/${value.total}</span><i><b style="width:${value.total ? value.mastered / value.total * 100 : 0}%"></b></i></span><span class="inner-arrow" aria-hidden="true">›</span>
      </button>`;
    }).join("");
    view.innerHTML = `<div class="scene-detail page-enter scene-${escapeHtml(scene.id)} inner-page inner-scene">
      <header class="inner-bar inner-scene-bar"><button class="inner-back" type="button" data-back>首页</button><span class="inner-bar-title">${escapeHtml(langLabel())}</span></header>
      <div class="inner-scene-heading"><span aria-hidden="true">${sceneIcon(scene.id)}</span><div><h1>${escapeHtml(scene.name)}</h1><p>${escapeHtml(scene.description)}</p></div></div>
      <div class="inner-overview"><span>已掌握 <strong>${progress.mastered} / ${progress.total}</strong></span><div class="inner-meter" role="progressbar" aria-label="${escapeHtml(scene.name)}掌握进度" aria-valuemin="0" aria-valuemax="${progress.total}" aria-valuenow="${progress.mastered}"><i style="width:${progress.total ? progress.mastered / progress.total * 100 : 0}%"></i></div></div>
      <section class="inner-resume"><div><small>${next ? started ? "接着学" : "从这一组开始" : "场景学习完成"}</small><strong>${next ? escapeHtml(next.name) : "这些表达都已掌握"}</strong></div><button class="primary-btn" type="button" data-scene-continue${next ? "" : " disabled"}>${next ? started ? "继续学习" : "开始学习" : "已全部掌握"}</button></section>
      <div class="inner-section-heading"><h2>情境目录</h2><span>${scene.situations.length} 个情境</span></div><div class="situation-list inner-course-list">${situations}</div>
    </div>`;
    view.querySelector("[data-back]").addEventListener("click", () => navigatePath("home"));
    const openSituation = id => {
      innerSceneScroll.set(`${state.destinationId}:${scene.id}`, window.scrollY);
      navigatePath(`learn/${scene.id}/${id}`);
    };
    view.querySelector("[data-scene-continue]").addEventListener("click", () => { if (next) openSituation(next.id); });
    view.querySelectorAll("[data-situation]").forEach(button => button.addEventListener("click", () => openSituation(button.dataset.situation)));
    activateInnerPage();
    window.scrollTo({ top: innerSceneScroll.get(`${state.destinationId}:${scene.id}`) || 0, left: 0, behavior: "auto" });
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
    view.innerHTML = `<div class="lesson page-enter inner-page">
      <header class="inner-bar"><button class="inner-back" type="button" data-quit>返回</button><strong class="inner-bar-title">${escapeHtml(situation.name)}</strong><span class="inner-count">${current} / ${total}</span></header>
      ${innerProgress(current, total, "认识进度")}${innerLearningCard(entry, "认识表达")}
    </div><div class="quiz-actions inner-dock"><div class="inner-action-row"><button class="secondary-btn" type="button" data-prev${learning.index === 0 ? " disabled" : ""}>上一条</button><button class="primary-btn" type="button" data-next>${current === total ? "开始小测" : "下一条"}</button></div></div>`;
    view.querySelector("[data-quit]").addEventListener("click", exitLearning);
    view.querySelector("[data-prev]").addEventListener("click", () => {
      if (learning.index > 0) { learning.index -= 1; renderIntroduction(); }
    });
    view.querySelector("[data-next]").addEventListener("click", () => {
      markIntroduced(entry);
      if (learning.index >= learning.batch.length - 1) startLearningQuiz(learning.batch);
      else { learning.index += 1; renderIntroduction(); }
    });
    bindSpeechButtons();
    bindFavoriteButtons();
    activateInnerPage();
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
    const prompt = direction === "reverse"
      ? `<div class="inner-foreign-prompt"><h1 id="questionText" lang="${escapeHtml(currentPack().locale)}">${escapeHtml(foreignText(entry))}</h1>${innerAudioButton(entry)}</div><p>请选择对应的中文含义</p>`
      : `<h1 id="questionText">${escapeHtml(entry.zh)}</h1><p>选出对应的${escapeHtml(langLabel())}表达</p>`;
    const optionsHtml = options.map((option, index) => `<div class="option-row">
      <button class="option-choice" type="button" data-id="${escapeHtml(option.id)}" aria-pressed="false">
        <span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
        <span class="option-text">${direction === "reverse" ? `<span class="answer-zh">${escapeHtml(option.zh)}</span>` : foreignContentHtml(option, false)}</span>
        <span class="choice-state" aria-hidden="true"></span><span class="sr-only" data-answer-status></span>
      </button></div>`).join("");
    view.innerHTML = `<div class="quiz page-enter inner-page">
      <header class="inner-bar"><button class="inner-back" type="button" data-quit>返回</button><strong class="inner-bar-title">${escapeHtml(questionTitle(quiz))}</strong><span class="inner-count">${current} / ${total}</span></header>
      ${innerProgress(current, total, "答题进度")}
      <section class="inner-prompt" id="questionPrompt" tabindex="-1" aria-labelledby="questionText"><div class="inner-phase"><strong>${quiz.mode.kind === "review" ? "复习表达" : "巩固小测"}</strong><span>${escapeHtml(langLabel())}</span></div>${prompt}</section>
      <div class="options" role="group" aria-label="答案选项">${optionsHtml}</div>
    </div><div class="quiz-actions inner-dock"><div id="feedback" class="inner-feedback" tabindex="-1" aria-live="polite" hidden></div><button class="primary-btn" id="confirmBtn" type="button" disabled>确认答案</button></div>`;
    const confirm = view.querySelector("#confirmBtn");
    view.querySelectorAll(".option-choice").forEach(button => button.addEventListener("click", () => selectOption(button, confirm)));
    view.querySelector("[data-quit]").addEventListener("click", quiz.mode.kind === "review" ? exitReview : exitLearning);
    confirm.addEventListener("click", () => { if (state.answered) advanceQuestion(); else confirmAnswer(entry, token); });
    bindSpeechButtons();
    activateInnerPage();
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
        row.querySelector(".choice-state").innerHTML = innerPngIcon("answer-correct", "✓");
        row.querySelector("[data-answer-status]").textContent = "正确答案";
      } else if (!correct && button.dataset.id === state.selectedId) {
        row.classList.add("wrong");
        row.querySelector(".choice-state").innerHTML = innerPngIcon("answer-wrong", "×");
        row.querySelector("[data-answer-status]").textContent = "你选择的答案，回答错误";
      }
    });
    const feedback = view.querySelector("#feedback");
    feedback.hidden = false;
    feedback.className = `inner-feedback ${correct ? "good" : "bad"}`;
    feedback.closest(".inner-dock").classList.add("inner-feedback-dock");
    feedback.innerHTML = `<strong class="inner-feedback-title"><span aria-hidden="true">${correct ? innerPngIcon("answer-correct", "✓") : "i"}</span>${correct ? "回答正确" : "记住这个正确答案"}</strong>
      <div class="inner-correct-answer"><div><strong lang="${escapeHtml(currentPack().locale)}">${escapeHtml(foreignText(entry))}</strong><span>${escapeHtml(entry.zh)}</span></div><div class="inner-feedback-controls">${innerAudioButton(entry)}${innerFavoriteButton(entry)}</div></div>${innerExample(entry)}`;
    const confirm = view.querySelector("#confirmBtn");
    confirm.disabled = false;
    confirm.textContent = state.quiz.index >= state.quiz.questions.length - 1 ? "查看结果" : "下一题";
    feedback.focus({ preventScroll: true });
    bindInnerIcons();
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
    view.innerHTML = `<div class="lesson page-enter inner-page"><header class="inner-bar"><button class="inner-back" type="button" data-later>稍后继续</button><strong class="inner-bar-title">再认识一次</strong><span class="inner-count">${current} / ${total}</span></header>${innerProgress(current, total, "再认识进度")}${innerLearningCard(entry, "刚才这条还不熟")}</div>
      <div class="quiz-actions inner-dock"><button class="primary-btn" type="button" data-next>${current === total ? "重新小测" : "下一条"}</button></div>`;
    view.querySelector("[data-later]").addEventListener("click", exitLearning);
    view.querySelector("[data-next]").addEventListener("click", () => {
      if (learning.index >= learning.batch.length - 1) startLearningQuiz(learning.batch);
      else { learning.index += 1; renderRetryReview(); }
    });
    bindSpeechButtons();
    bindFavoriteButtons();
    activateInnerPage();
    scrollToTop();
    requestAnimationFrame(() => view.querySelector(".recognition-card")?.focus({ preventScroll: true }));
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

  function reviewPngArrow() {
    return '<span class="review-png-arrow"><img src="icons/ui/home-learning-start.png" alt=""></span>';
  }
  function reviewActionLettering(label, asset) {
    return `<span class="review-lettering-visual" aria-hidden="true"><span class="review-wordmark review-wordmark--${asset}"><img src="icons/ui/review-${asset}.png" alt=""></span>${reviewPngArrow()}</span><span class="review-action-fallback" aria-hidden="true">${escapeHtml(label)}<span class="arrow">→</span></span>`;
  }
  function renderReview() {
    stopSpeech();
    document.body.classList.add("is-review-page");
    const destination = selectedDestination();
    const learning = loadLearning();
    const mastered = Object.values(learning.byId).filter((record) => record.status === "mastered").length;
    const weakCount = learning.weakIds.length;
    const favoriteCount = favoriteIds().length;
    const scenes = scenePacks().slice()
      .sort((a, b) => (HOME_SCENE_PRIORITY[a.id] ?? 99) - (HOME_SCENE_PRIORITY[b.id] ?? 99))
      .map((scene) => ({ scene, count: masteredWords({ sceneId: scene.id }).length, total: sceneWords(scene.id).length }));
    const availableScenes = scenes.filter(({ count }) => count > 0);
    const unlearnedScenes = scenes.filter(({ count }) => count === 0);
    const sceneRows = availableScenes.map(({ scene, count, total }) => `<button class="scene-choice" type="button" data-review-scene="${escapeHtml(scene.id)}" aria-label="复习${escapeHtml(scene.name)}，已掌握${count}/${total}条，可复习${count}条">
      <span class="scene-choice-icon" aria-hidden="true">${sceneIcon(scene.id)}</span>
      <span class="scene-choice-copy"><strong>${escapeHtml(scene.name)}</strong>${sceneMasteryMeter(count, total, "scene-choice-meter")}</span>
    </button>`).join("");
    const unlearnedHtml = unlearnedScenes.length
      ? `<details class="unlearned-scenes"><summary>尚未学习的场景</summary><ul>${unlearnedScenes.map(({ scene }) => `<li><span aria-hidden="true">${sceneIcon(scene.id)}</span>${escapeHtml(scene.name)}</li>`).join("")}</ul><p>在首页学过后，会出现在上方的复习选项中。</p></details>`
      : "";
    const lead = mastered
      ? `<section class="review-lead" aria-labelledby="reviewOverviewTitle">
          <span class="lead-label">${weakCount ? "薄弱加强" : "随时复习"}</span>
          <h2 id="reviewOverviewTitle">${weakCount ? "再练一次，记得更牢" : "让学过的表达更熟练"}</h2>
          <dl class="review-stats"><div><dt>已掌握</dt><dd>${mastered}<small>条</small></dd></div><div class="weak-stat"><dt>需要加强</dt><dd>${weakCount}<small>条</small></dd></div></dl>
          <button class="review-action" type="button" data-review-primary data-review-art aria-label="${weakCount ? "开始加强" : "开始复习"}">${reviewActionLettering(weakCount ? "开始加强" : "开始复习", weakCount ? "start-weak" : "start-review")}</button>
          <p class="action-note">本轮 ${Math.min(weakCount || mastered, REVIEW_BATCH_SIZE)} 条 · ${weakCount ? "巩固之前答错的表达" : "中外文双向练习"}</p>
        </section>`
      : `<section class="review-lead empty-lead" aria-labelledby="reviewOverviewTitle">
          <header class="empty-heading"><h2 id="reviewOverviewTitle">先学几句，再回来练</h2><img src="icons/ui/review-empty-book.png" width="36" height="36" alt=""></header>
          <p>掌握的表达会自动出现在这里。</p>
          <button class="review-action" type="button" data-go-home data-review-art aria-label="去首页学习">${reviewActionLettering("去首页学习", "go-home")}</button>
        </section>`;
    view.innerHTML = `<div class="page-enter review-page${mastered ? "" : " review-page--empty"}">
      <header class="review-top"><h1>复习</h1><span class="language-label"><img src="${escapeHtml(destination.flagSrc)}" alt="">${escapeHtml(destination.country)} · ${escapeHtml(destination.language)}</span></header>
      <div class="review-layout ${mastered ? "" : "is-empty"}"><div>${lead}
        <button class="favorite-link" type="button" data-open-favorites><span class="favorite-symbol" aria-hidden="true">${uiIcon("favorite")}</span><span class="favorite-copy"><strong>收藏夹</strong><small>${favoriteCount ? `${favoriteCount} 条常用表达，随时查看` : "收好旅行中常用的表达"}</small></span><span class="end-arrow review-favorite-arrow" data-review-art aria-hidden="true">${reviewPngArrow()}<span class="review-arrow-fallback">→</span></span></button>
      </div>
      ${mastered ? `<section aria-labelledby="reviewScenesTitle"><div class="scene-heading"><h2 id="reviewScenesTitle">按场景复习</h2></div><div class="scene-choices${availableScenes.length === 1 ? " is-single" : ""}">${sceneRows}</div>${unlearnedHtml}</section>` : ""}
      </div>
    </div>`;
    view.querySelectorAll("[data-review-art] img").forEach((img) => {
      const showText = () => img.closest("[data-review-art]").classList.add("review-art-fallback");
      img.addEventListener("error", showText, { once: true });
      if (img.complete && !img.naturalWidth) showText();
    });
    view.querySelector("[data-review-primary]")?.addEventListener("click", () => startReview(weakCount ? { weak: true } : undefined));
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

  const TRANSLATE_TIMEOUT_MS = 20000;
  const NETWORK_MESSAGE = "网络连接异常，请稍后重试";
  function translationError(status, error) {
    // Backend messages are untrusted: only known public errors are recognized.
    if (status === 429) {
      if (error === "今日翻译额度已用完，请明天再试") return error;
      if (error === "请求过于频繁，本站每分钟最多翻译 5 次") return "请求太频繁，请稍后再试";
      return "请求过于频繁，请稍后再试";
    }
    return ({
      400: "输入内容有误，请检查后重试",
      413: "输入内容过大",
      503: "翻译服务暂时不可用"
    })[status] || "翻译服务暂时不可用";
  }

  function bindTranslator(destination) {
    const card = view.querySelector(".translator-card");
    const input = card.querySelector("#translateInput");
    const clear = card.querySelector("[data-clear-translate]");
    const submit = card.querySelector(".translator-submit");
    const count = card.querySelector("#translateCount");
    const feedback = card.querySelector("#translateFeedback");
    const result = card.querySelector("[data-translate-result]");
    const resultActions = card.querySelector(".translator-result-actions");
    const copy = card.querySelector("[data-copy-translate]");
    const speak = card.querySelector("[data-speak-translate]");
    const locale = currentPack()?.speechLocale || destination?.lang;
    const hash = window.location.hash;
    let disposed = false, composing = false, activeRequest = null;
    let resultText = "", speaking = false, speechRun = 0, resultVersion = 0;
    const isCurrent = () => !disposed && card.isConnected && window.location.hash === hash && selectedDestination()?.id === destination?.id;
    const message = (text, error = false) => {
      feedback.textContent = text;
      feedback.classList.toggle("is-error", error);
    };
    const sync = () => {
      state.translateDraft = input.value;
      const length = Array.from(input.value).length;
      count.textContent = `${length} / 300`;
      count.setAttribute("aria-label", `${length} 个字符，上限 300`);
      input.setAttribute("aria-invalid", String(length > 300));
      submit.disabled = !destination || !input.value.trim() || length > 300 || composing || !!activeRequest || navigator.onLine === false;
      submit.textContent = activeRequest ? "正在翻译…" : "翻译";
      submit.setAttribute("aria-busy", String(!!activeRequest));
      input.readOnly = !!activeRequest;
      clear.hidden = !input.value;
    };
    const idleMessage = () => {
      if (!destination) message("请先选择目的地");
      else if (navigator.onLine === false) message("AI 翻译需要联网，请连接网络后重试");
      else if (Array.from(input.value).length > 300) message("最多输入 300 个字符，请删减后重试", true);
      else message("");
    };
    const stopReading = () => {
      speechRun += 1;
      if (speaking) stopSpeech();
      speaking = false;
      speak.textContent = "朗读";
      speak.setAttribute("aria-pressed", "false");
    };
    const resetResult = () => {
      resultVersion += 1;
      stopReading();
      resultText = "";
      result.textContent = "译文会显示在这里";
      result.removeAttribute("lang");
      resultActions.hidden = true;
      card.classList.remove("has-result");
    };
    const cancelRequest = () => {
      const request = activeRequest;
      activeRequest = null;
      if (request) {
        clearTimeout(request.timer);
        request.controller.abort();
      }
    };
    input.addEventListener("input", () => {
      cancelRequest();
      resetResult();
      sync();
      idleMessage();
    });
    input.addEventListener("compositionstart", () => { composing = true; sync(); });
    input.addEventListener("compositionend", () => { composing = false; sync(); idleMessage(); });
    clear.addEventListener("click", () => {
      cancelRequest();
      resetResult();
      input.value = "";
      sync();
      idleMessage();
      input.focus();
    });
    submit.addEventListener("click", async () => {
      if (!isCurrent() || activeRequest) return;
      sync();
      if (submit.disabled) { idleMessage(); return; }
      resetResult();
      const request = { controller: new AbortController(), timer: null, timedOut: false };
      activeRequest = request;
      sync();
      message("正在翻译…");
      // Abort covers both response headers and reading the response body.
      request.timer = setTimeout(() => {
        request.timedOut = true;
        request.controller.abort();
      }, TRANSLATE_TIMEOUT_MS);
      try {
        const response = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: input.value.trim(), target: destination.language }),
          cache: "no-store",
          signal: request.controller.signal
        });
        let data;
        try { data = await response.json(); }
        catch (error) {
          if (request.controller.signal.aborted || error?.name !== "SyntaxError") throw error;
          data = null;
        }
        if (!isCurrent() || activeRequest !== request || request.controller.signal.aborted) return;
        if (!response.ok) {
          message(translationError(response.status, data?.error), true);
        } else if (typeof data?.result !== "string" || !data.result.trim()) {
          message("翻译服务暂时不可用", true);
        } else {
          resultText = data.result;
          result.textContent = resultText;
          result.lang = destination.lang;
          resultActions.hidden = false;
          card.classList.add("has-result");
          message("翻译完成");
        }
      } catch {
        if (isCurrent() && activeRequest === request) {
          message(navigator.onLine === false ? "AI 翻译需要联网，请连接网络后重试" : NETWORK_MESSAGE, true);
        }
      } finally {
        clearTimeout(request.timer);
        if (isCurrent() && activeRequest === request) {
          activeRequest = null;
          if (request.timedOut) message(NETWORK_MESSAGE, true);
          sync();
        }
      }
    });
    copy.addEventListener("click", async () => {
      if (!isCurrent() || !resultText) return;
      const version = resultVersion;
      try {
        await navigator.clipboard.writeText(resultText);
        if (isCurrent() && version === resultVersion) showToast("译文已复制");
      } catch {
        if (isCurrent() && version === resultVersion) showToast("复制失败，请长按或选中译文复制");
      }
    });
    speak.addEventListener("click", async () => {
      if (!isCurrent() || !resultText) return;
      if (speaking) { stopReading(); return; }
      if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
        showToast("当前浏览器不支持朗读，可复制译文使用");
        return;
      }
      const run = ++speechRun;
      speaking = true;
      speak.textContent = "停止朗读";
      speak.setAttribute("aria-pressed", "true");
      // No URL: use the existing browser speech branch, never a generated Edge TTS file.
      const playback = await speakTranslation(resultText, locale);
      if (!isCurrent() || run !== speechRun) return;
      speaking = false;
      speak.textContent = "朗读";
      speak.setAttribute("aria-pressed", "false");
      if (playback.status === "error") showToast("朗读暂不可用，请检查系统语音设置或复制译文");
    });
    const connectionChanged = () => { sync(); if (!activeRequest) idleMessage(); };
    const dispose = () => {
      disposed = true;
      cancelRequest();
      stopReading();
      window.removeEventListener("online", connectionChanged);
      window.removeEventListener("offline", connectionChanged);
      window.removeEventListener("pagehide", leavePage);
      if (disposeTranslator === dispose) disposeTranslator = null;
    };
    // Keep a bfcache-restored page usable, while discarding in-flight work.
    const leavePage = () => { cancelRequest(); stopReading(); sync(); idleMessage(); };
    window.addEventListener("online", connectionChanged);
    window.addEventListener("offline", connectionChanged);
    window.addEventListener("pagehide", leavePage);
    disposeTranslator = dispose;
    sync();
    idleMessage();
  }

  // Live translation has no static MP3. Share the existing cancellation lifecycle.
  function speakTranslation(text, locale) {
    stopSpeech();
    return new Promise(resolve => {
      let utterance;
      try { utterance = new SpeechSynthesisUtterance(text); }
      catch { resolve({ status: "error" }); return; }
      let settled = false, timer;
      const finish = status => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        utterance.onend = null;
        utterance.onerror = null;
        if (cancelActiveAudio === cancel) cancelActiveAudio = null;
        if (status !== "played") {
          try { window.speechSynthesis.cancel(); } catch { /* unavailable */ }
        }
        resolve({ status });
      };
      const cancel = () => finish("canceled");
      cancelActiveAudio = cancel;
      utterance.lang = locale;
      utterance.rate = .88;
      utterance.onend = () => finish("played");
      utterance.onerror = () => finish("error");
      timer = setTimeout(() => finish("error"), Math.min(180000, Math.max(10000, Array.from(text).length * 500)));
      try { window.speechSynthesis.speak(utterance); }
      catch { finish("error"); }
    });
  }

  function renderTools() {
    disposeTranslator?.();
    stopSpeech();
    document.body.classList.add("is-tools-page");
    const destination = selectedDestination();
    const emergencyAvailable = Boolean(currentPack()?.features?.emergencyCard);
    const checklistSummary = window.TRAVEL_CHECKLIST.summarize(window.TRAVEL_CHECKLIST.getModel(), destination?.id, destination?.preparation);
    const entryArrow = '<span class="entry-arrow png-arrow" aria-hidden="true"><span class="png-arrow-crop"><img src="icons/ui/tools-arrow-thin.png" alt=""></span><span class="png-arrow-fallback">→</span></span>';
    view.innerHTML = `<div class="page-enter tools-page">
      <header class="tools-top"><h1>工具</h1><span class="language-label">${destination ? `<img src="${escapeHtml(destination.flagSrc)}" alt="">${escapeHtml(destination.country)} · ${escapeHtml(destination.language)}` : "未选目的地"}</span></header>
      <div class="tools-layout">
        <section class="translator-card translation-panel" aria-labelledby="translatorTitle">
          <header class="panel-heading"><div class="panel-title">${uiIcon("translate")}<h2 id="translatorTitle">快捷翻译</h2></div><p class="language-direction" aria-label="翻译方向">中文 <span aria-hidden="true">→</span> <strong>${escapeHtml(destination?.language || "目的地语言")}</strong></p></header>
          <div class="conversation-composer">
          <div class="input-heading"><label for="translateInput">想说的话</label><button class="translator-clear quiet-button" type="button" data-clear-translate hidden>清除</button></div>
          <textarea id="translateInput" class="translator-input" rows="3" aria-describedby="translateCount translateFeedback" placeholder="在这里写下想说的话…"${destination ? "" : " disabled"}>${escapeHtml(state.translateDraft)}</textarea>
          <div class="compose-actions"><span id="translateCount" class="translator-count" aria-label="字符数，上限 300">0 / 300</span>${destination ? "" : '<button class="translator-destination primary-action" type="button" data-translate-destination>选择目的地</button>'}<button class="translator-submit primary-action" type="button" disabled${destination ? "" : " hidden"}>翻译</button></div>
          </div>
          <div class="input-meta"><span id="translateFeedback" class="translator-feedback" role="status" aria-live="polite" aria-atomic="true"></span></div>
          <div class="translator-result translation-output" role="region" aria-label="译文"><span>译文 · ${escapeHtml(destination?.language || "目的地语言")}</span><p data-translate-result dir="auto">译文会显示在这里</p><div class="translator-result-actions output-actions" hidden><button type="button" data-copy-translate>复制译文</button><button type="button" data-speak-translate aria-pressed="false">朗读</button></div></div>
        </section>
        <section class="travel-tools" aria-labelledby="travelToolsTitle">
          <h2 id="travelToolsTitle">随身工具</h2>
          <button class="tool-entry" type="button" data-emergency-card${state.destinationId && !emergencyAvailable ? " disabled" : ""}>${uiIcon("emergencyCard")}<span class="tool-copy"><strong>紧急联系卡</strong><small>${emergencyAvailable ? "制作双语急救信息卡" : state.destinationId ? "当前语言暂不可用" : "选择目的地后制作"}</small></span>${entryArrow}</button>
          <button class="tool-entry" type="button" data-open-checklist>${uiIcon("checklist")}<span class="tool-copy"><strong>旅行清单</strong><small>还有 ${checklistSummary.remaining} 项未确认</small></span>${entryArrow}</button>
        </section>
      </div>
    </div>`;
    view.querySelectorAll(".png-arrow-crop img").forEach((img) => {
      const fallback = () => img.closest(".png-arrow").classList.add("is-unavailable");
      img.addEventListener("error", fallback, { once: true });
      if (img.complete && !img.naturalWidth) fallback();
    });
    bindTranslator(destination);
    view.querySelector("[data-translate-destination]")?.addEventListener("click", requireDestination);
    view.querySelector("[data-open-checklist]").addEventListener("click", () => navigatePath("tools/checklist"));
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

  function openToolDialog(content) {
    const previousFocus = document.activeElement;
    const shell = document.getElementById("appShell");
    const overlay = document.createElement("div");
    overlay.className = "level-overlay tool-dialog-overlay";
    overlay.innerHTML = content;
    shell.inert = true;
    document.body.append(overlay);
    const onKeydown = (event) => {
      if (event.key === "Escape") { event.preventDefault(); close(); return; }
      if (event.key !== "Tab") return;
      const controls = Array.from(overlay.querySelectorAll("button,input,select")).filter((element) => !element.disabled && !element.hidden);
      if (!controls.length) return;
      const index = controls.indexOf(document.activeElement);
      if (event.shiftKey && index <= 0) { event.preventDefault(); controls.at(-1).focus(); }
      else if (!event.shiftKey && index === controls.length - 1) { event.preventDefault(); controls[0].focus(); }
    };
    const close = () => {
      overlay.removeEventListener("keydown", onKeydown);
      overlay.remove();
      shell.inert = false;
      previousFocus?.focus?.();
    };
    overlay.addEventListener("keydown", onKeydown);
    overlay.querySelector("[data-dialog-cancel]")?.addEventListener("click", close);
    requestAnimationFrame(() => overlay.querySelector("[autofocus],button,input,select")?.focus());
    return { overlay, close };
  }

  function footprintStatusMeta(status) {
    if (status === window.TRAVEL_FOOTPRINTS.STATUS_VISITED) return { label: "去过", description: "已经到访过这里", className: "visited" };
    if (status === window.TRAVEL_FOOTPRINTS.STATUS_WISHLIST) return { label: "想去", description: "加入了想去清单", className: "wishlist" };
    return { label: "未记录", description: "还没有留下旅行记录", className: "unknown" };
  }

  function footprintStatusShape(className) {
    const heart = className === "wishlist" ? '<svg viewBox="0 0 24 24" focusable="false"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>' : "";
    return `<i class="footprint-status-shape ${className}" aria-hidden="true">${heart}</i>`;
  }

  function showFootprintStatusDialog(destination) {
    const destinationIds = DESTINATION_OPTIONS.map((item) => item.id);
    const status = window.TRAVEL_FOOTPRINTS.getStatus(destination.id, destinationIds);
    const dialog = openToolDialog(`<section class="level-dialog footprint-status-dialog" role="dialog" aria-modal="true" aria-labelledby="footprintStatusTitle" aria-describedby="footprintStatusDescription">
      <span class="eyebrow">${escapeHtml(destination.country)} · ${escapeHtml(destination.language)}</span>
      <h2 id="footprintStatusTitle">记录你的旅行足迹</h2>
      <p id="footprintStatusDescription">选择最符合现在的状态，地图和个人记录会立即更新。</p>
      <button class="footprint-status-choice visited${status === window.TRAVEL_FOOTPRINTS.STATUS_VISITED ? " selected" : ""}" type="button" data-footprint-status="visited" aria-pressed="${status === window.TRAVEL_FOOTPRINTS.STATUS_VISITED}" autofocus>${footprintStatusShape("visited")}<span><strong>去过</strong><small>在地图上留下到访标记</small></span></button>
      <button class="footprint-status-choice wishlist${status === window.TRAVEL_FOOTPRINTS.STATUS_WISHLIST ? " selected" : ""}" type="button" data-footprint-status="wishlist" aria-pressed="${status === window.TRAVEL_FOOTPRINTS.STATUS_WISHLIST}">${footprintStatusShape("wishlist")}<span><strong>想去</strong><small>把这里加入未来的旅行愿望</small></span></button>
      ${status !== window.TRAVEL_FOOTPRINTS.STATUS_UNKNOWN ? '<button class="text-btn footprint-clear-status" type="button" data-footprint-clear>清除这条记录</button>' : ""}
      <button class="text-btn level-later" type="button" data-dialog-cancel>取消</button>
    </section>`);
    dialog.overlay.querySelectorAll("[data-footprint-status]").forEach((button) => button.addEventListener("click", () => {
      const saved = window.TRAVEL_FOOTPRINTS.setStatus(destination.id, button.dataset.footprintStatus, destinationIds);
      if (!saved) { showToast("无法保存旅行足迹，请检查浏览器存储设置后重试"); return; }
      const label = button.dataset.footprintStatus === "visited" ? "去过" : "想去";
      dialog.close();
      renderFootprints();
      showToast(`已将${destination.country}标记为${label}`);
    }));
    dialog.overlay.querySelector("[data-footprint-clear]")?.addEventListener("click", () => {
      const saved = window.TRAVEL_FOOTPRINTS.clearStatus(destination.id, destinationIds);
      if (!saved) { showToast("无法清除旅行足迹，请检查浏览器存储设置后重试"); return; }
      dialog.close();
      renderFootprints();
      showToast(`已清除${destination.country}的旅行记录`);
    });
  }

  function renderFootprints() {
    stopSpeech();
    const destination = selectedDestination();
    const destinationIds = DESTINATION_OPTIONS.map((item) => item.id);
    const statuses = window.TRAVEL_FOOTPRINTS.getAll(destinationIds);
    const visitedCount = Object.values(statuses).filter((status) => status === window.TRAVEL_FOOTPRINTS.STATUS_VISITED).length;
    const wishlistCount = Object.values(statuses).filter((status) => status === window.TRAVEL_FOOTPRINTS.STATUS_WISHLIST).length;
    const markers = DESTINATION_OPTIONS.map((item) => {
      const meta = footprintStatusMeta(statuses[item.id] || window.TRAVEL_FOOTPRINTS.STATUS_UNKNOWN);
      const current = item.id === destination?.id;
      return `<button class="footprint-map-marker ${meta.className}${current ? " current" : ""}" type="button" data-footprint-destination="${item.id}" style="--map-x:${item.mapPosition.x}%;--map-y:${item.mapPosition.y}%" aria-label="${escapeHtml(item.country)}，${meta.label}，点击修改">${footprintStatusShape(meta.className)}<b>${escapeHtml(item.country)}</b></button>`;
    }).join("");
    const destinationRows = DESTINATION_OPTIONS.map((item) => {
      const meta = footprintStatusMeta(statuses[item.id] || window.TRAVEL_FOOTPRINTS.STATUS_UNKNOWN);
      const current = item.id === destination?.id;
      return `<li><button class="footprint-destination-row${current ? " current" : ""}" type="button" data-footprint-destination="${item.id}" aria-label="${escapeHtml(item.country)}，${meta.label}，点击修改"><img src="${item.flagSrc}" alt="" width="48" height="32"><span><strong>${escapeHtml(item.country)}</strong><small>${escapeHtml(item.language)}${current ? " · 当前学习" : ""}</small></span><em class="footprint-status-badge ${meta.className}">${footprintStatusShape(meta.className)}${meta.label}</em><span class="footprint-row-chevron" aria-hidden="true">›</span></button></li>`;
    }).join("");
    view.innerHTML = `<div class="footprint-page page-enter">
      <div class="flow-header"><button class="text-btn" type="button" data-footprint-back>‹ 返回我的</button><span>旅行足迹</span><small>个人记录</small></div>
      <header class="footprint-page-lead"><span class="eyebrow">我的旅行</span><h1>把走过和想去的世界留在这里</h1><p>旅行记录与你正在学习的语言相互独立，可以随时更新。</p></header>
      <figure class="footprint-map-card" aria-labelledby="footprintMapTitle">
        <div class="footprint-map-heading"><div id="footprintMapTitle" class="footprint-counts"><strong>${visitedCount}<small>去过</small></strong><strong>${wishlistCount}<small>想去</small></strong></div><p>每一次到访和期待，都会成为继续理解世界的理由。</p></div>
        <div class="footprint-map-visual"><img src="images/tools/world-map.svg" alt="" width="1000" height="520">${markers}</div>
        <figcaption><span>${footprintStatusShape("visited")}去过</span><span>${footprintStatusShape("wishlist")}想去</span><span>${footprintStatusShape("unknown")}未记录</span></figcaption>
      </figure>
      <p class="footprint-availability">当前可记录 ${DESTINATION_OPTIONS.length} 个语见世界语言目的地</p>
      <section class="footprint-destination-section" aria-labelledby="footprintDestinationTitle"><div class="section-heading"><div><span class="eyebrow">足迹记录</span><h2 id="footprintDestinationTitle">选择目的地更新状态</h2></div></div><ul class="footprint-destination-list">${destinationRows}</ul></section>
    </div>`;
    view.querySelector("[data-footprint-back]").addEventListener("click", () => navigatePath("me"));
    view.querySelectorAll("[data-footprint-destination]").forEach((button) => button.addEventListener("click", () => {
      const target = destinationById(button.dataset.footprintDestination);
      if (target) showFootprintStatusDialog(target);
    }));
    scrollToTop();
  }

  function showChecklistItemDialog(item) {
    const editing = Boolean(item);
    const categoryOptions = window.TRAVEL_CHECKLIST.CATEGORIES.map((category) => `<option value="${category.id}"${category.id === (item?.categoryId || "documents") ? " selected" : ""}>${escapeHtml(category.name)}</option>`).join("");
    const dialog = openToolDialog(`<section class="level-dialog checklist-item-dialog" role="dialog" aria-modal="true" aria-labelledby="checklistItemTitle">
      <span class="eyebrow">旅行清单</span><h2 id="checklistItemTitle">${editing ? "编辑项目" : "添加项目"}</h2>
      <form data-checklist-item-form novalidate>
        <label class="dialog-field"><span>项目名称</span><input name="itemText" maxlength="80" value="${escapeHtml(item?.text || "")}" autocomplete="off" autofocus><small data-item-error></small></label>
        <label class="dialog-field"><span>分类</span><select name="categoryId">${categoryOptions}</select></label>
        <div class="dialog-actions"><button class="secondary-btn" type="button" data-dialog-cancel>取消</button><button class="primary-btn" type="submit">${editing ? "保存修改" : "添加项目"}</button></div>
        ${editing ? '<button class="danger-text-btn" type="button" data-delete-checklist-item>删除这个项目</button>' : ""}
      </form>
    </section>`);
    const form = dialog.overlay.querySelector("[data-checklist-item-form]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = form.elements.itemText.value.trim();
      const error = form.querySelector("[data-item-error]");
      if (!text) { error.textContent = "请输入项目名称"; form.elements.itemText.setAttribute("aria-invalid", "true"); form.elements.itemText.focus(); return; }
      const result = editing
        ? window.TRAVEL_CHECKLIST.updateItem(item.id, { text, categoryId: form.elements.categoryId.value })
        : window.TRAVEL_CHECKLIST.addItem(text, form.elements.categoryId.value);
      if (!result.ok) { error.textContent = "无法保存，请检查浏览器存储设置"; return; }
      dialog.close();
      renderChecklist();
      showToast(editing ? "清单项目已更新" : "已添加到旅行清单");
    });
    dialog.overlay.querySelector("[data-delete-checklist-item]")?.addEventListener("click", () => {
      if (!window.confirm(`确定删除“${item.text}”吗？`)) return;
      const result = window.TRAVEL_CHECKLIST.deleteItem(item.id);
      if (!result.ok) { showToast("无法删除清单项目"); return; }
      dialog.close();
      renderChecklist();
      showToast("清单项目已删除");
    });
  }

  function showChecklistRecommendationsDialog(destination, model) {
    const recommendations = window.TRAVEL_CHECKLIST.availableRecommendations(model, destination.id, destination.preparation);
    if (!recommendations.length) { showToast("当前目的地的推荐项目已全部加入"); return; }
    const rows = recommendations.map((item) => `<button class="checklist-recommendation-choice" type="button" data-add-recommendation="${escapeHtml(item.id)}"><span><strong>${escapeHtml(item.text)}</strong><small>加入后会计入这次旅行的准备进度</small></span><b aria-hidden="true">＋</b></button>`).join("");
    const dialog = openToolDialog(`<section class="level-dialog checklist-recommendation-dialog" role="dialog" aria-modal="true" aria-labelledby="recommendationTitle" aria-describedby="recommendationDescription">
      <span class="eyebrow">${escapeHtml(destination.country)}旅行建议</span>
      <h2 id="recommendationTitle">添加更多推荐项目</h2>
      <p id="recommendationDescription">选择一项加入清单，之后也可以从目的地建议中移除。</p>
      <div class="checklist-recommendation-options">${rows}</div>
      <button class="text-btn level-later" type="button" data-dialog-cancel>取消</button>
    </section>`);
    dialog.overlay.querySelectorAll("[data-add-recommendation]").forEach((button) => button.addEventListener("click", () => {
      const item = recommendations.find((candidate) => candidate.id === button.dataset.addRecommendation);
      const result = window.TRAVEL_CHECKLIST.addRecommendation(destination.id, button.dataset.addRecommendation, destination.preparation);
      if (!result.ok) { showToast("无法添加推荐项目，请检查浏览器存储设置后重试"); return; }
      dialog.close();
      renderChecklist();
      showToast(`已添加“${item?.text || "推荐项目"}”`);
    }));
  }

  function renderChecklist(options = {}) {
    stopSpeech();
    const previousScroll = options.preserveScroll ? window.scrollY : 0;
    const destination = selectedDestination();
    const model = window.TRAVEL_CHECKLIST.getModel();
    const destinationItems = window.TRAVEL_CHECKLIST.destinationItems(model, destination?.id, destination?.preparation);
    const availableRecommendations = window.TRAVEL_CHECKLIST.availableRecommendations(model, destination?.id, destination?.preparation);
    const summary = window.TRAVEL_CHECKLIST.summarize(model, destination?.id, destination?.preparation);
    const complete = summary.total > 0 && summary.completed === summary.total;
    const categories = window.TRAVEL_CHECKLIST.CATEGORIES.map((category) => {
      const items = model.commonItems.filter((item) => item.categoryId === category.id);
      const completed = items.filter((item) => item.checked).length;
      const itemRows = items.length ? items.map((item) => `<li class="checklist-item${item.checked ? " checked" : ""}">
        <label><input type="checkbox" data-checklist-toggle="${escapeHtml(item.id)}"${item.checked ? " checked" : ""}><span>${escapeHtml(item.text)}</span></label>
        <button class="checklist-edit" type="button" data-checklist-edit="${escapeHtml(item.id)}" aria-label="编辑：${escapeHtml(item.text)}">编辑</button>
      </li>`).join("") : '<li class="checklist-category-empty">这个分类还没有项目</li>';
      return `<section class="checklist-category" aria-labelledby="checklist-${category.id}"><header><h3 id="checklist-${category.id}">${escapeHtml(category.name)}</h3><span>${completed} / ${items.length}</span></header><ul>${itemRows}</ul></section>`;
    }).join("");
    const destinationRows = destinationItems.map((item) => `<li class="checklist-item destination-checklist-item${item.checked ? " checked" : ""}">
      <label><input type="checkbox" data-recommendation-toggle="${escapeHtml(item.id)}"${item.checked ? " checked" : ""}><span>${escapeHtml(item.text)}</span></label>
      ${item.optional ? `<button class="checklist-edit" type="button" data-remove-recommendation="${escapeHtml(item.id)}" aria-label="移除：${escapeHtml(item.text)}">移除</button>` : '<span class="checklist-recommended-badge">推荐</span>'}
    </li>`).join("");
    const destinationSection = destination ? `<section class="destination-checklist-section" aria-labelledby="destinationChecklistTitle">
      <div class="checklist-toolbar destination-checklist-heading"><div><span class="eyebrow">因地准备</span><h2 id="destinationChecklistTitle">${escapeHtml(destination.country)}旅行建议</h2></div><span>${destinationItems.filter((item) => item.checked).length} / ${destinationItems.length}</span></div>
      <div class="destination-checklist-card"><ul>${destinationRows}</ul>${availableRecommendations.length ? `<button class="secondary-btn checklist-more-recommendations" type="button" data-open-recommendations>＋ 添加更多推荐项目 <span>${availableRecommendations.length}</span></button>` : '<p class="checklist-recommendations-complete">已添加当前目的地的全部推荐项目</p>'}</div>
    </section>` : `<section class="checklist-destination-empty" aria-labelledby="destinationChecklistTitle"><span class="feature-icon teal" aria-hidden="true">${uiIcon("trip")}</span><div><h2 id="destinationChecklistTitle">解锁目的地专属建议</h2><p>选择要学习的目的地后，会在通用清单之外补充当地准备事项。</p></div><button class="secondary-btn compact" type="button" data-choose-checklist-destination>选择目的地</button></section>`;
    view.innerHTML = `<div class="checklist-page page-enter">
      <div class="flow-header"><button class="text-btn" type="button" data-checklist-back>‹ 返回工具</button><span>旅行清单</span><small>${summary.completed} / ${summary.total}</small></div>
      <section class="checklist-overview${complete && options.celebrate ? " is-celebrating" : ""}" aria-labelledby="checklistTitle">
        <div><span class="eyebrow">${destination ? "目的地准备" : "通用出发准备"}</span><h1 id="checklistTitle">${complete ? "出发准备妥当" : destination ? `${escapeHtml(destination.country)}旅行准备` : "旅行准备"}</h1><p>${complete ? "清单已经全部确认，可以安心出发了。" : `出发前还有 ${summary.remaining} 项未确认`}</p></div>
        <strong>${summary.completed}<small> / ${summary.total}</small></strong>
        <div class="checklist-progress" role="progressbar" aria-label="旅行清单完成进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${summary.percentage}"><span style="width:${summary.percentage}%"></span></div>
      </section>
      ${complete ? `<section class="checklist-complete-card" role="status"><span aria-hidden="true">${uiIcon("complete")}</span><div><strong>所有准备都确认好了</strong><p>下次出发前，可以一键重置当前清单的勾选。</p></div><button class="secondary-btn compact" type="button" data-reset-checks>为下次重置</button></section>` : ""}
      <div class="checklist-toolbar"><div><span class="eyebrow">通用准备</span><h2>每次出发都值得确认</h2></div><button class="primary-btn compact" type="button" data-add-checklist-item>＋ 添加项目</button></div>
      <div class="checklist-categories">${categories}</div>
      ${destinationSection}
      <section class="checklist-management" aria-labelledby="checklistManagementTitle"><div><h2 id="checklistManagementTitle">清单管理</h2><p>重置只清除当前可见项目的勾选；恢复默认会移除自定义内容和所有目的地建议记录。</p></div><div><button class="secondary-btn compact" type="button" data-reset-checks${summary.completed ? "" : " disabled"}>重置勾选</button><button class="danger-text-btn" type="button" data-restore-checklist>恢复默认清单</button></div></section>
    </div>`;
    view.querySelector("[data-checklist-back]").addEventListener("click", () => navigatePath("tools"));
    view.querySelector("[data-add-checklist-item]").addEventListener("click", () => showChecklistItemDialog(null));
    view.querySelector("[data-choose-checklist-destination]")?.addEventListener("click", requireDestination);
    view.querySelector("[data-open-recommendations]")?.addEventListener("click", () => showChecklistRecommendationsDialog(destination, model));
    view.querySelectorAll("[data-checklist-edit]").forEach((button) => button.addEventListener("click", () => showChecklistItemDialog(model.commonItems.find((item) => item.id === button.dataset.checklistEdit))));
    view.querySelectorAll("[data-checklist-toggle]").forEach((input) => input.addEventListener("change", () => {
      const wasComplete = complete;
      const result = window.TRAVEL_CHECKLIST.setChecked(input.dataset.checklistToggle, input.checked);
      if (!result.ok) { input.checked = !input.checked; showToast("无法保存勾选状态"); return; }
      const nextSummary = window.TRAVEL_CHECKLIST.summarize(result.model, destination?.id, destination?.preparation);
      renderChecklist({ preserveScroll: true, celebrate: !wasComplete && nextSummary.total > 0 && nextSummary.completed === nextSummary.total });
    }));
    view.querySelectorAll("[data-recommendation-toggle]").forEach((input) => input.addEventListener("change", () => {
      const result = window.TRAVEL_CHECKLIST.setRecommendationChecked(destination.id, input.dataset.recommendationToggle, input.checked, destination.preparation);
      if (!result.ok) { input.checked = !input.checked; showToast("无法保存目的地建议状态"); return; }
      const nextSummary = window.TRAVEL_CHECKLIST.summarize(result.model, destination.id, destination.preparation);
      renderChecklist({ preserveScroll: true, celebrate: !complete && nextSummary.total > 0 && nextSummary.completed === nextSummary.total });
    }));
    view.querySelectorAll("[data-remove-recommendation]").forEach((button) => button.addEventListener("click", () => {
      const item = destinationItems.find((candidate) => candidate.id === button.dataset.removeRecommendation);
      const result = window.TRAVEL_CHECKLIST.removeRecommendation(destination.id, button.dataset.removeRecommendation, destination.preparation);
      if (!result.ok) { showToast("无法移除推荐项目"); return; }
      renderChecklist({ preserveScroll: true });
      showToast(`已移除“${item?.text || "推荐项目"}”`);
    }));
    view.querySelectorAll("[data-reset-checks]").forEach((button) => button.addEventListener("click", () => {
      if (!window.TRAVEL_CHECKLIST.resetChecks(destination?.id).ok) { showToast("无法重置清单"); return; }
      renderChecklist();
      showToast("已清除当前清单的全部勾选，内容保持不变");
    }));
    view.querySelector("[data-restore-checklist]").addEventListener("click", () => {
      if (!window.confirm("恢复默认清单会移除自定义项目、修改和所有目的地建议记录，确定继续吗？")) return;
      if (!window.TRAVEL_CHECKLIST.restoreDefaults().ok) { showToast("无法恢复默认清单"); return; }
      renderChecklist();
      showToast("已恢复默认旅行清单");
    });
    if (options.preserveScroll) window.scrollTo({ top: previousScroll, left: 0, behavior: "auto" });
    else scrollToTop();
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
    document.body.classList.add("is-me-page");
    const entryArrow = '<span class="png-arrow" aria-hidden="true"><span class="png-arrow-crop"><img src="icons/ui/tools-arrow-thin.png" alt=""></span><span class="png-arrow-fallback">→</span></span>';
    view.innerHTML = `<div class="page-enter settings-page me-page">
    <header class="me-top"><h1>我的</h1></header>
    <button type="button" class="member-card" data-me-detail="login" aria-haspopup="dialog" aria-label="登录或注册，开启你的旅行名片">
      <span class="member-identity"><span class="member-avatar" aria-hidden="true"><img class="me-decor-icon" src="icons/icon-192.png" width="60" height="60" alt=""></span><span class="member-copy"><span class="member-name">开启你的旅行名片</span><span class="member-description">无需登录也能学习，记录保存在当前设备。</span></span></span>
      <span class="member-cta">登录 / 注册 ${entryArrow}</span>
    </button>
    <section class="preferences" aria-labelledby="settings-title"><h2 id="settings-title">应用设置</h2><div class="preference-list">
      <button type="button" class="preference" data-me-detail="install" aria-haspopup="dialog"><span class="preference-icon" aria-hidden="true">${uiIcon("install")}</span><span class="preference-copy"><strong>安装到主屏幕</strong><small>${isStandalone() ? "已添加到当前设备" : "下次打开，更方便"}</small></span><span class="arrow-slot">${entryArrow}</span></button>
      <button type="button" class="preference" data-me-detail="privacy" aria-haspopup="dialog"><span class="preference-icon" aria-hidden="true">${uiIcon("privacy")}</span><span class="preference-copy"><strong>数据与隐私</strong><small>学习记录保存在当前设备</small></span><span class="arrow-slot">${entryArrow}</span></button>
      <button type="button" class="preference" data-me-detail="data" aria-haspopup="dialog"><span class="preference-icon" aria-hidden="true">${uiIcon("deleteData")}</span><span class="preference-copy"><strong>数据管理</strong><small>管理这台设备上的学习记录</small></span><span class="arrow-slot">${entryArrow}</span></button>
    </div></section>
  
      <dialog id="meDetailDialog" aria-labelledby="meDetailTitle"><div data-me-detail-content></div></dialog>
    </div>`;
    view.querySelectorAll(".png-arrow-crop img").forEach((img) => {
      const fallback = () => img.closest(".png-arrow").classList.add("is-unavailable");
      img.addEventListener("error", fallback, { once: true });
      if (img.complete && !img.naturalWidth) fallback();
    });
    view.querySelectorAll(".me-decor-icon, .preference-icon img").forEach((img) => {
      const fallback = () => { img.style.visibility = "hidden"; };
      img.addEventListener("error", fallback, { once: true });
      if (img.complete && !img.naturalWidth) fallback();
    });
    const dialog = view.querySelector("#meDetailDialog");
    view.querySelectorAll("[data-me-detail]").forEach((button) => button.addEventListener("click", () => {
      const type = button.dataset.meDetail;
      const closeButton = '<button type="button" data-me-close>返回</button>';
      let title, content;
      if (type === "login") {
        title = "登录功能暂未开放";
        content = '<p>你可以继续学习、复习和使用工具，学习记录会保存在当前设备。</p><div class="dialog-actions"><button type="button" class="primary" data-me-close>知道了</button></div>';
      } else if (type === "install") {
        title = isStandalone() ? "已添加到主屏幕" : "安装到主屏幕";
        content = installPromptHtml() + `<div class="dialog-actions">${closeButton}</div>`;
      } else if (type === "privacy") {
        title = "数据与隐私";
        content = '<p>学习进度和偏好保存在当前设备，暂不支持账号登录或跨设备同步。</p><p>清除浏览器的网站数据后，这些记录可能无法恢复。</p><div class="dialog-actions"><button type="button" class="primary" data-me-close>知道了</button></div>';
      } else {
        title = "数据管理";
        content = `<p>可清除全部语言的场景学习记录、认读进度和水平选择。当前目的地会保留。</p><p>清除后的学习记录无法恢复。</p><div class="dialog-actions">${closeButton}<button class="danger" type="button" data-reset>清除学习数据</button></div>`;
      }
      dialog.querySelector("[data-me-detail-content]").innerHTML = `<h2 id="meDetailTitle" tabindex="-1">${title}</h2>${content}`;
      dialog.querySelector("[data-me-close]").addEventListener("click", () => dialog.close());
      dialog.querySelector("[data-reset]")?.addEventListener("click", () => {
        resetData();
        if (!dialog.isConnected) view.querySelector('[data-me-detail="data"]')?.focus();
      });
      bindInstallPrompt();
      dialog.showModal();
      dialog.querySelector("h2").focus();
    }));
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
    migrateLegacyData();
    initializeDestination();
    if (!window.location.hash) history.replaceState(null, "", "#/home");
    window.addEventListener("hashchange", renderRoute);
    setupInstallPrompt();
    registerServiceWorker();
    void renderRoute();
  }

  init();
})();

