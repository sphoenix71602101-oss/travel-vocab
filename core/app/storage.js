(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["storage"] = {
    exports: ["emptyLanguageState", "defaultLearningEnvelope", "validLocation", "normalizeStoredLanguageState", "normalizeLanguageState", "loadLearningEnvelope", "loadLearning", "summarizeLearningEnvelope", "saveLearning", "updateWordRecord", "markIntroduced", "markMastered", "recordReview", "setLastLocation", "saveLang", "loadLang", "saveDestination", "defaultBeginnerState", "loadBeginnerState", "saveBeginnerState", "loadDestinationId", "initializeDestination", "migrateLegacyData"],
    create(ctx) {
  const { LEARNING_KEY, LEGACY_LEARNING_KEY, LANG_KEY, DESTINATION_KEY, MIGRATION_KEY, BEGINNER_KEY, DESTINATION_OPTIONS, state } = ctx;
  const { clampInt, currentPack, destinationById, destinationForLang, situationById } = ctx.actions;
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
        lastSeen: clampInt(record.lastSeen),
        ...(record.status === "mastered" ? { reviewSchedule: window.TRAVEL_REVIEW.normalize(record, Date.now()) } : {})
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
    updateWordRecord(entry, (record) => ({ ...record, status: "mastered", lastSeen: Date.now(), reviewSchedule: record.status === "mastered" ? window.TRAVEL_REVIEW.normalize(record, Date.now()) : window.TRAVEL_REVIEW.first(Date.now()) }));
  }

  function recordReview(entry, isCorrect) {
    const learning = loadLearning();
    const record = learning.byId[entry.id];
    if (!record || record.status !== "mastered") return;
    record.reviewAttempts = clampInt(record.reviewAttempts) + 1;
    record.reviewCorrect = clampInt(record.reviewCorrect) + (isCorrect ? 1 : 0);
    const now = Date.now();
    record.reviewSchedule = window.TRAVEL_REVIEW.answer(record, isCorrect, now);
    record.lastSeen = now;
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
    state.beginnerSession = null;
    state.lookup = { query: "", sceneId: "", limit: 50 };
    state.favoriteQuery = "";
    state.showReturn = null;
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

  return { emptyLanguageState, defaultLearningEnvelope, validLocation, normalizeStoredLanguageState, normalizeLanguageState, loadLearningEnvelope, loadLearning, summarizeLearningEnvelope, saveLearning, updateWordRecord, markIntroduced, markMastered, recordReview, setLastLocation, saveLang, loadLang, saveDestination, defaultBeginnerState, loadBeginnerState, saveBeginnerState, loadDestinationId, initializeDestination, migrateLegacyData };
    }
  };
})();
