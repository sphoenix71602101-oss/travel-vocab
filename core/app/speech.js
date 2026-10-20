(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules.speech = {
    exports: ["stopSpeech", "speechTimeout", "playAudio", "playSpeech", "bindSpeechButtons"],
    create({ view, state, runtime, actions }) {
      const { currentPack, wordBank, showToast } = actions;
      let cancel = null;
      function stopSpeech() {
        runtime.dismissFavoriteGuide?.();
        state.speechToken += 1;
        cancel?.();
        window.TRAVEL_BEGINNER?.all().forEach((module) => module.stop?.());
        try { window.speechSynthesis?.cancel(); } catch (error) { console.warn("无法停止语音", error); }
      }
      function speechTimeout(text) { return Math.min(30000, Math.max(3000, 1800 + Array.from(String(text)).length * 180)); }
      function playAudio({ text, url, locale, rate = .88, quiet = false, speechTimeoutMs }) {
        stopSpeech();
        const token = state.speechToken;
        return new Promise((resolve) => {
          let audio = null, utterance = null, timer = null, settled = false, fallingBack = false;
          const cleanAudio = () => {
            if (audio) { audio.onended = null; audio.onerror = null; audio.pause(); audio = null; }
          };
          const finish = (status) => {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            cleanAudio();
            if (utterance) { utterance.onend = null; utterance.onerror = null; }
            if (cancel === cancelThis) cancel = null;
            if (status === "error" && !quiet) showToast("语音播放失败，请检查音频或系统语音设置");
            resolve({ status });
          };
          const cancelThis = () => finish("canceled");
          cancel = cancelThis;
          const synthesize = () => {
            if (settled || fallingBack) return;
            fallingBack = true;
            clearTimeout(timer);
            cleanAudio();
            if (token !== state.speechToken) { finish("canceled"); return; }
            if (!("speechSynthesis" in window)) { finish("error"); return; }
            try {
              utterance = new SpeechSynthesisUtterance(text);
              utterance.lang = locale;
              utterance.rate = rate;
              utterance.onend = () => finish("played");
              utterance.onerror = () => finish("error");
              timer = setTimeout(() => { finish("error"); window.speechSynthesis.cancel(); }, speechTimeoutMs ?? (speechTimeout(text) / Math.max(.5, rate) + 2000));
              window.speechSynthesis.speak(utterance);
            } catch { finish("error"); }
          };
          if (!url) { synthesize(); return; }
          audio = new Audio(url);
          audio.onended = () => finish("played");
          audio.onerror = synthesize;
          timer = setTimeout(synthesize, speechTimeout(text) + 2000);
          try { audio.play()?.catch(synthesize); } catch { synthesize(); }
        });
      }
      function playSpeech(entry, quiet = false, isExample = false) {
        const pack = currentPack();
        return playAudio({ text: entry.text, url: entry.audioPath || `audio/packs/${pack.id}/${isExample ? "examples" : "entries"}/${entry.id}.mp3`, locale: pack.speechLocale, quiet });
      }
      function bindSpeechButtons(root = view) {
        root.querySelectorAll(".speak-btn").forEach((button) => button.addEventListener("click", () => {
          const entry = wordBank().find((item) => item.id === button.dataset.entryId);
          if (entry) { void playSpeech(entry); return; }
          const example = wordBank().map((item) => item.example).find((item) => item?.id === button.dataset.exampleId);
          if (example) void playSpeech(example, false, true);
        }));
      }
      return { stopSpeech, speechTimeout, playAudio, playSpeech, bindSpeechButtons };
    }
  };
})();
