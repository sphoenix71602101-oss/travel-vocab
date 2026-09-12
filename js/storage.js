(function (app) {
  "use strict";

  const KEYS = {
    language: "travelVocab.lang.v1",
    onboarding: "travelVocab.onboarding.v1",
    stats: "travelVocab.stats.v1",
    wrong: "travelVocab.wrongIds.v1",
    installDismissed: "travelVocab.installHintDismissed.v1"
  };
  const LANGUAGES = new Set(["ja", "en"]);

  function read(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn("无法读取本地设置", error);
      return null;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn("无法保存本地设置", error);
      return false;
    }
  }

  function remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.warn("无法清除本地设置", error);
    }
  }

  function safeJson(key, fallback) {
    try {
      const raw = read(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function getLanguage() {
    const stored = read(KEYS.language);
    return LANGUAGES.has(stored) ? stored : null;
  }

  function setLanguage(language) {
    if (!LANGUAGES.has(language)) return false;
    return write(KEYS.language, language);
  }

  function onboardingComplete() {
    return read(KEYS.onboarding) === "1" && Boolean(getLanguage());
  }

  function completeOnboarding(language) {
    if (!setLanguage(language)) return false;
    return write(KEYS.onboarding, "1");
  }

  function learningSummary() {
    const validIds = new Set((window.WORD_BANK || []).map((entry) => entry.id));
    const stats = safeJson(KEYS.stats, {});
    const wrong = safeJson(KEYS.wrong, []);
    const learned = stats && typeof stats === "object"
      ? Object.keys(stats).filter((id) => validIds.has(id)).length
      : 0;
    const wrongCount = Array.isArray(wrong)
      ? new Set(wrong.filter((id) => validIds.has(id))).size
      : 0;
    return { learned, wrong: wrongCount };
  }

  function resetLearningData() {
    remove(KEYS.stats);
    remove(KEYS.wrong);
  }

  function installHintDismissed() {
    return read(KEYS.installDismissed) === "1";
  }

  function dismissInstallHint() {
    write(KEYS.installDismissed, "1");
  }

  app.storage = {
    KEYS,
    getLanguage,
    setLanguage,
    onboardingComplete,
    completeOnboarding,
    learningSummary,
    resetLearningData,
    installHintDismissed,
    dismissInstallHint
  };
})(window.TravelVocabApp = window.TravelVocabApp || {});
