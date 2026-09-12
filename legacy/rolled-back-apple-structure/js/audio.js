(function (app) {
  "use strict";

  let activeAudio = null;
  let speechToken = 0;

  function stop() {
    speechToken += 1;
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.removeAttribute("src");
      activeAudio.load();
      activeAudio = null;
    }
    try {
      window.speechSynthesis?.cancel();
    } catch (error) {
      console.warn("无法停止语音", error);
    }
  }

  function bundledPath(entryId, language) {
    return `audio/${language}/${entryId}.mp3`;
  }

  function systemSpeech(text, language, token) {
    return new Promise((resolve) => {
      if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
        resolve(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === "ja" ? "ja-JP" : "en-US";
      utterance.rate = 0.88;
      utterance.onend = () => resolve(true);
      utterance.onerror = () => resolve(false);
      if (token !== speechToken) {
        resolve(false);
        return;
      }
      try {
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        resolve(false);
      }
    });
  }

  function playFile(entry, language, token) {
    return new Promise((resolve) => {
      const audio = new Audio(bundledPath(entry.id, language));
      let settled = false;
      const finish = (played) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        audio.onended = null;
        audio.onerror = null;
        if (activeAudio === audio) activeAudio = null;
        resolve(played);
      };
      const timer = setTimeout(() => finish(false), 10000);
      activeAudio = audio;
      audio.preload = "auto";
      audio.onended = () => finish(true);
      audio.onerror = () => finish(false);
      try {
        const result = audio.play();
        result?.catch(() => finish(false));
      } catch (error) {
        finish(false);
      }
      if (token !== speechToken) finish(false);
    });
  }

  async function play(entry, language) {
    if (!entry || !["ja", "en"].includes(language)) return false;
    stop();
    const token = speechToken;
    const played = await playFile(entry, language, token);
    if (played || token !== speechToken) return played;
    const text = language === "ja" ? entry.ja : entry.en;
    return systemSpeech(text, language, token);
  }

  app.audio = { play, stop, bundledPath };
})(window.TravelVocabApp = window.TravelVocabApp || {});
