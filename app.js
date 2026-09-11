(function () {
  "use strict";

  const STATS_KEY = "travelVocab.stats.v1";
  const WRONG_KEY = "travelVocab.wrongIds.v1";
  const LANG_KEY = "travelVocab.lang.v1";
  const INSTALL_HINT_KEY = "travelVocab.installHintDismissed.v1";
  const QUESTION_COUNT = 10;
  const LANGS = new Set(["ja", "en", "bilingual"]);
  const LANG_OPTIONS = [
    { value: "ja", label: "日语" },
    { value: "en", label: "英语" },
    { value: "bilingual", label: "双语" }
  ];
  const SPEAKER_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8a5 5 0 0 1 0 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  const DEVICE_ICONS = {
    dice: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><circle cx="8" cy="8" r="1"/><circle cx="16" cy="8" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/></svg>',
    review: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m8.5 14 2.2 2.2 4.8-5"/></svg>',
    airport: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 9.5 9 3 12v2l7-1.5V18l-2 2v2l4-1 4 1v-2l-2-2v-5.5l7 1.5v-2L14.5 9 12 2Z"/></svg>',
    hotel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V5h10v15M14 10h6v10M8 9h2M8 13h2M8 17h2M17 14h1M17 17h1M2 20h20"/></svg>',
    food: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v7M4 3v5a3 3 0 0 0 6 0V3M7 10v11M16 3v18M16 3c3 2 4 5 4 8h-4"/></svg>',
    shopping: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8zM9 9V6a3 3 0 0 1 6 0v3"/></svg>',
    directions: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2z"/></svg>',
    numbers: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    emergency: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z"/></svg>',
    expressions: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4V5z"/><path d="M8 9h8M8 12h5"/></svg>',
    install: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 16v4h14v-4"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>',
    warning: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 20h18.4L12 3z"/><path d="M12 9v5M12 17.2v.1"/></svg>'
  };

  const view = document.getElementById("view");
  const resetBtn = document.getElementById("resetBtn");
  const toastEl = document.getElementById("toast");
  const subtitleEl = document.getElementById("appSubtitle");

  const state = {
    quiz: null,
    answered: false,
    selectedId: null,
    lang: loadLang(),
    speechToken: 0,
    questionToken: 0
  };

  let toastTimer = null;
  let voicesPromise = null;
  let activeAudio = null;
  let cancelActiveAudio = null;
  let deferredInstallPrompt = null;
  const missingVoiceWarnings = new Set();

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function shuffle(input) {
    const arr = input.slice();
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
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
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2400);
  }

  function categoryById(id) {
    return window.CATEGORIES.find((category) => category.id === id);
  }

  function categoryName(id) {
    return categoryById(id)?.name || id;
  }

  function iconSvg(name) {
    return DEVICE_ICONS[name] || DEVICE_ICONS.expressions;
  }

  function loadLang() {
    try {
      const value = localStorage.getItem(LANG_KEY);
      return LANGS.has(value) ? value : "bilingual";
    } catch (error) {
      return "bilingual";
    }
  }

  function saveLang(lang) {
    state.lang = LANGS.has(lang) ? lang : "bilingual";
    try {
      localStorage.setItem(LANG_KEY, state.lang);
    } catch (error) {
      console.warn("无法保存语言设置", error);
    }
  }

  function langLabel(lang) {
    return LANG_OPTIONS.find((option) => option.value === lang)?.label || "双语";
  }

  function updateSubtitle(context) {
    if (context === "home") {
      subtitleEl.textContent = `旅行场景词汇 · ${langLabel(state.lang)}模式`;
    } else {
      subtitleEl.textContent = `本轮练习 · ${langLabel(state.lang)}模式`;
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  function promptHint(entry) {
    const suffix = entry.type === "phrase" ? "短句" : "表达";
    if (state.lang === "en") return `请选择对应的英文${suffix}`;
    if (state.lang === "ja") return `请选择对应的日文${suffix}`;
    return `请选择对应的日文与英文${suffix}`;
  }

  function answerSignature(entry, lang) {
    const ja = String(entry.ja || "").trim();
    const en = String(entry.en || "").trim().toLocaleLowerCase("en");
    if (lang === "ja") return ja;
    if (lang === "en") return en;
    return `${ja}\u0000${en}`;
  }

  function contentHtml(entry, lang) {
    const parts = [];
    if (lang !== "en") {
      parts.push(`<span class="answer-ja">${escapeHtml(entry.ja)}</span>`);
      parts.push(`<span class="answer-reading">${escapeHtml(entry.reading)}</span>`);
    }
    if (lang !== "ja") {
      parts.push(`<span class="answer-en">${escapeHtml(entry.en)}</span>`);
    }
    return parts.join("");
  }

  function audioButtonsHtml(entry, lang) {
    const jaLabel = `播放日文：${entry.ja}`;
    const enLabel = `播放英文：${entry.en}`;
    const jaButton = `<button class="speak-btn" type="button" aria-label="${escapeHtml(jaLabel)}" data-entry-id="${escapeHtml(entry.id)}" data-speak="ja" data-text="${escapeHtml(entry.ja)}">${SPEAKER_SVG}<span>日</span></button>`;
    const enButton = `<button class="speak-btn" type="button" aria-label="${escapeHtml(enLabel)}" data-entry-id="${escapeHtml(entry.id)}" data-speak="en" data-text="${escapeHtml(entry.en)}">${SPEAKER_SVG}<span>EN</span></button>`;
    if (lang === "ja") return jaButton;
    if (lang === "en") return enButton;
    return jaButton + enButton;
  }

  function speechSupported() {
    return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  }

  function stopSpeech() {
    state.speechToken += 1;
    if (cancelActiveAudio) cancelActiveAudio();
    if (!speechSupported()) return;
    try {
      window.speechSynthesis.cancel();
    } catch (error) {
      console.warn("无法停止语音", error);
    }
  }

  function loadVoices() {
    const available = window.speechSynthesis.getVoices();
    if (available.length) return Promise.resolve(available);
    if (voicesPromise) return voicesPromise;

    voicesPromise = new Promise((resolve) => {
      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        clearTimeout(timer);
        window.speechSynthesis.removeEventListener?.("voiceschanged", finish);
        const voices = window.speechSynthesis.getVoices();
        voicesPromise = null;
        resolve(voices);
      };
      const timer = setTimeout(finish, 1200);
      if (window.speechSynthesis.addEventListener) {
        window.speechSynthesis.addEventListener("voiceschanged", finish, { once: true });
      } else {
        window.speechSynthesis.onvoiceschanged = finish;
      }
    });
    return voicesPromise;
  }

  function findVoice(voices, lang) {
    const expected = lang.toLowerCase();
    const prefix = expected.split("-")[0];
    const normalized = (voice) => String(voice.lang || "").toLowerCase().replace("_", "-");
    return voices.find((voice) => normalized(voice) === expected) ||
      voices.find((voice) => normalized(voice).startsWith(`${prefix}-`)) ||
      voices.find((voice) => normalized(voice) === prefix);
  }

  function makeUtterance(text, lang, voice) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.88;
    utterance.voice = voice;
    return utterance;
  }

  function wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  function speechTimeout(text) {
    return Math.min(8000, Math.max(3000, 1800 + Array.from(String(text)).length * 140));
  }

  function bundledAudioPath(item) {
    const language = item.lang.startsWith("ja") ? "ja" : "en";
    return `audio/${language}/${item.entryId}.mp3`;
  }

  function playBundledAudio(item, token) {
    return new Promise((resolve) => {
      if (token !== state.speechToken || !item.entryId) {
        resolve(token !== state.speechToken ? "canceled" : "error");
        return;
      }

      const audio = new Audio(bundledAudioPath(item));
      let settled = false;
      const finish = (status) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        audio.onended = null;
        audio.onerror = null;
        audio.pause();
        audio.removeAttribute("src");
        audio.load();
        if (activeAudio === audio) activeAudio = null;
        if (cancelActiveAudio === cancel) cancelActiveAudio = null;
        resolve(status);
      };
      const cancel = () => finish("canceled");
      const timer = setTimeout(() => finish("timeout"), speechTimeout(item.text) + 2000);

      activeAudio = audio;
      cancelActiveAudio = cancel;
      audio.preload = "auto";
      audio.onended = () => finish("played");
      audio.onerror = () => finish("error");

      try {
        const playPromise = audio.play();
        if (playPromise?.catch) playPromise.catch(() => finish("error"));
      } catch (error) {
        finish("error");
      }
    });
  }

  function playUtterance(item, voice, token, quiet) {
    return new Promise((resolve) => {
      if (token !== state.speechToken) {
        resolve("canceled");
        return;
      }

      let settled = false;
      const utterance = makeUtterance(item.text, item.lang, voice);
      const finish = (status) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        resolve(status);
      };
      const timer = setTimeout(() => {
        if (token === state.speechToken) {
          try {
            window.speechSynthesis.cancel();
          } catch (error) {
            console.warn("无法停止超时语音", error);
          }
        }
        finish("timeout");
      }, speechTimeout(item.text));

      utterance.onend = () => finish("played");
      utterance.onerror = (event) => {
        const canceled = event.error === "canceled" || event.error === "interrupted";
        if (!quiet && !canceled) showToast("语音播放失败，请检查系统语音设置");
        finish(canceled ? "canceled" : "error");
      };

      try {
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        if (!quiet) showToast("语音播放失败，请检查系统语音设置");
        finish("error");
      }
    });
  }

  function voiceName(lang) {
    return lang.startsWith("ja") ? "日语" : "英语";
  }

  async function queueSpeech(items, quiet) {
    stopSpeech();
    const token = state.speechToken;
    try {
      let playedCount = 0;
      let status = items.length ? "played" : "missing";
      let voices = null;
      for (const item of items) {
        if (token !== state.speechToken) return { status: "canceled", playedCount };
        const bundledStatus = await playBundledAudio(item, token);
        if (bundledStatus === "played") {
          playedCount += 1;
          continue;
        }
        if (bundledStatus === "canceled") return { status: "canceled", playedCount };

        if (!speechSupported()) {
          if (!quiet) showToast("音频文件无法播放，当前浏览器也不支持系统语音");
          status = "unsupported";
          continue;
        }

        if (!voices) voices = await loadVoices();
        if (token !== state.speechToken) return { status: "canceled", playedCount };
        const voice = findVoice(voices, item.lang);
        if (!voice) {
          const name = voiceName(item.lang);
          if (!quiet || !missingVoiceWarnings.has(name)) {
            showToast(`音频文件无法播放，且未找到${name}系统语音`);
          }
          missingVoiceWarnings.add(name);
          status = "missing";
          continue;
        }

        const itemStatus = await playUtterance(item, voice, token, quiet);
        if (itemStatus === "played") playedCount += 1;
        else status = itemStatus;
        if (itemStatus === "canceled") break;
      }
      return { status, playedCount };
    } catch (error) {
      if (!quiet) showToast("语音播放失败，请检查系统语音设置");
      return { status: "error", playedCount: 0 };
    }
  }

  function speak(entryId, text, lang, quiet) {
    queueSpeech([{ entryId, text, lang }], quiet);
  }

  function speakAnswer(entry) {
    const items = [];
    if (state.lang !== "en") items.push({ entryId: entry.id, text: entry.ja, lang: "ja-JP" });
    if (state.lang !== "ja") items.push({ entryId: entry.id, text: entry.en, lang: "en-US" });
    return queueSpeech(items, true);
  }

  function bindSpeechButtons(root) {
    root.querySelectorAll(".speak-btn").forEach((button) => {
      button.addEventListener("click", () => {
        speak(button.dataset.entryId, button.dataset.text, button.dataset.speak === "ja" ? "ja-JP" : "en-US");
      });
    });
  }

  function defaultStats() {
    return { byId: {}, byCategory: {} };
  }

  function normalizeRecord(record) {
    const attempts = clampInt(record?.attempts);
    return {
      attempts,
      correct: clampInt(record?.correct, attempts),
      streak: clampInt(record?.streak),
      lastSeen: clampInt(record?.lastSeen)
    };
  }

  function normalizeStats(raw) {
    const normalized = defaultStats();
    if (!raw || typeof raw !== "object") return normalized;
    const validIds = new Set(window.WORD_BANK.map((entry) => entry.id));
    const validCategories = new Set(window.CATEGORIES.map((category) => category.id));

    if (raw.byId && typeof raw.byId === "object") {
      Object.entries(raw.byId).forEach(([id, record]) => {
        if (validIds.has(id)) normalized.byId[id] = normalizeRecord(record);
      });
    }
    if (raw.byCategory && typeof raw.byCategory === "object") {
      Object.entries(raw.byCategory).forEach(([id, record]) => {
        if (validCategories.has(id)) normalized.byCategory[id] = normalizeRecord(record);
      });
    }
    return normalized;
  }

  function loadStats() {
    try {
      return normalizeStats(JSON.parse(localStorage.getItem(STATS_KEY)));
    } catch (error) {
      return defaultStats();
    }
  }

  function saveStats(stats) {
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch (error) {
      console.warn("无法保存学习统计", error);
    }
  }

  function loadWrongIds() {
    const validIds = new Set(window.WORD_BANK.map((entry) => entry.id));
    let stored = [];
    try {
      const raw = JSON.parse(localStorage.getItem(WRONG_KEY));
      stored = Array.isArray(raw) ? raw : [];
    } catch (error) {
      stored = [];
    }
    const cleaned = new Set(stored.filter((id) => validIds.has(id)));
    if (cleaned.size !== stored.length) saveWrongIds(cleaned);
    return cleaned;
  }

  function saveWrongIds(ids) {
    try {
      localStorage.setItem(WRONG_KEY, JSON.stringify(Array.from(ids)));
    } catch (error) {
      console.warn("无法保存错题", error);
    }
  }

  function recordAnswer(entry, isCorrect) {
    const stats = loadStats();
    const itemStats = normalizeRecord(stats.byId[entry.id]);
    itemStats.attempts += 1;
    itemStats.correct += isCorrect ? 1 : 0;
    itemStats.streak = isCorrect ? itemStats.streak + 1 : 0;
    itemStats.lastSeen = Date.now();
    stats.byId[entry.id] = itemStats;

    const categoryStats = normalizeRecord(stats.byCategory[entry.category]);
    categoryStats.attempts += 1;
    categoryStats.correct += isCorrect ? 1 : 0;
    categoryStats.streak = isCorrect ? categoryStats.streak + 1 : 0;
    categoryStats.lastSeen = Date.now();
    stats.byCategory[entry.category] = categoryStats;
    saveStats(stats);

    const wrongIds = loadWrongIds();
    if (isCorrect) wrongIds.delete(entry.id);
    else wrongIds.add(entry.id);
    saveWrongIds(wrongIds);
  }

  function resetData() {
    if (!window.confirm("确定要清空学习记录和错题吗？语言选择会保留。")) return;
    stopSpeech();
    try {
      localStorage.removeItem(STATS_KEY);
      localStorage.removeItem(WRONG_KEY);
    } catch (error) {
      console.warn("无法清空学习记录", error);
    }
    renderHome();
    showToast("学习记录已清空");
  }

  function validateData() {
    const problems = [];
    const warnings = [];
    if (!Array.isArray(window.CATEGORIES) || !Array.isArray(window.WORD_BANK)) {
      return { valid: false, problems: ["找不到分类或词库数据。"], warnings };
    }

    const categoryIds = new Set();
    window.CATEGORIES.forEach((category, index) => {
      if (!category || typeof category.id !== "string" || !category.id.trim()) {
        problems.push(`第 ${index + 1} 个分类缺少有效 ID。`);
        return;
      }
      if (categoryIds.has(category.id)) problems.push(`分类 ID 重复：${category.id}`);
      categoryIds.add(category.id);
    });

    const ids = new Set();
    window.WORD_BANK.forEach((entry, index) => {
      ["id", "category", "zh", "ja", "reading", "en", "type"].forEach((field) => {
        if (typeof entry?.[field] !== "string" || !entry[field].trim()) {
          problems.push(`第 ${index + 1} 条的 ${field} 字段无效。`);
        }
      });
      if (entry?.id && ids.has(entry.id)) problems.push(`词条 ID 重复：${entry.id}`);
      if (entry?.id) ids.add(entry.id);
      if (entry?.category && !categoryIds.has(entry.category)) problems.push(`未知分类：${entry.category}`);
      if (entry?.type && !["word", "phrase"].includes(entry.type)) problems.push(`类型无效：${entry.id}`);
    });

    ["ja", "en", "bilingual"].forEach((lang) => {
      window.CATEGORIES.forEach((category) => {
        ["word", "phrase"].forEach((type) => {
          const seen = new Map();
          window.WORD_BANK.filter((entry) => entry.category === category.id && entry.type === type)
            .forEach((entry) => {
              const signature = answerSignature(entry, lang);
              if (seen.has(signature)) {
                warnings.push(`${category.id}/${type}/${lang} 答案重复：${seen.get(signature)}、${entry.id}`);
              } else {
                seen.set(signature, entry.id);
              }
            });
        });
      });
    });

    return { valid: problems.length === 0, problems, warnings };
  }

  function renderError(problems) {
    stopSpeech();
    state.questionToken += 1;
    updateSubtitle("home");
    view.innerHTML = `
      <section class="error-state" role="alert">
        <span class="error-icon" aria-hidden="true">${iconSvg("warning")}</span>
        <h2>词库暂时无法启程</h2>
        <p>请检查 <code>data.js</code> 后刷新页面。</p>
        <ul>${problems.slice(0, 8).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>`;
  }

  function accuracyOf(record) {
    return record?.attempts ? record.correct / record.attempts : 0;
  }

  function selectQuestions(pool, stats) {
    const unseen = [];
    const seen = [];
    pool.forEach((entry) => {
      if (stats.byId[entry.id]?.attempts) seen.push(entry);
      else unseen.push(entry);
    });
    const orderedSeen = shuffle(seen).sort((a, b) => {
      const aStats = stats.byId[a.id];
      const bStats = stats.byId[b.id];
      return accuracyOf(aStats) - accuracyOf(bStats) || aStats.lastSeen - bStats.lastSeen;
    });
    return shuffle(unseen).concat(orderedSeen).slice(0, Math.min(QUESTION_COUNT, pool.length));
  }

  function buildOptions(correct, lang) {
    const correctSignature = answerSignature(correct, lang);
    const chosen = [];
    const chosenIds = new Set([correct.id]);
    const signatures = new Set([correctSignature]);
    const tiers = [
      window.WORD_BANK.filter((item) => item.category === correct.category && item.type === correct.type),
      window.WORD_BANK.filter((item) => item.category === correct.category),
      window.WORD_BANK.filter((item) => item.type === correct.type),
      window.WORD_BANK
    ];

    tiers.forEach((tier) => {
      shuffle(tier).forEach((item) => {
        if (chosen.length >= 3 || chosenIds.has(item.id)) return;
        const signature = answerSignature(item, lang);
        if (!signature || signatures.has(signature)) return;
        chosen.push(item);
        chosenIds.add(item.id);
        signatures.add(signature);
      });
    });

    if (chosen.length < 3) throw new Error(`无法为 ${correct.id} 生成四个唯一答案`);
    return shuffle([correct].concat(chosen));
  }

  function renderLangSwitch() {
    return `<section class="channel-panel" aria-labelledby="channelLabel">
      <div class="control-label"><span id="channelLabel">语言频道</span><span class="signal-label"><i></i> READY</span></div>
      <div class="passport-tabs" role="group" aria-label="选择练习语言">
      ${LANG_OPTIONS.map((option) => `<button class="passport-tab" type="button" data-lang="${option.value}" aria-pressed="${option.value === state.lang}">${option.label}</button>`).join("")}
      </div>
    </section>`;
  }

  function isStandalone() {
    return window.matchMedia?.("(display-mode: standalone)").matches === true ||
      window.navigator.standalone === true;
  }

  function isAppleMobile() {
    const agent = String(window.navigator.userAgent || "");
    return /iPhone|iPad|iPod/i.test(agent) ||
      (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  }

  function installHintDismissed() {
    try {
      return localStorage.getItem(INSTALL_HINT_KEY) === "1";
    } catch (error) {
      return false;
    }
  }

  function saveInstallHintDismissed() {
    try {
      localStorage.setItem(INSTALL_HINT_KEY, "1");
    } catch (error) {
      console.warn("无法保存安装提示设置", error);
    }
  }

  function installPromptHtml() {
    if (isStandalone() || installHintDismissed()) return "";
    const appleMobile = isAppleMobile();
    if (!appleMobile && !deferredInstallPrompt) return "";

    const instructions = appleMobile
      ? `<span class="install-steps"><span><b>1</b>点击浏览器的分享按钮</span><span><b>2</b>选择“添加到主屏幕”</span></span>`
      : `<button class="install-primary" type="button" data-install-app>立即安装</button>`;

    return `<section class="install-card" aria-labelledby="installPromptTitle">
      <span class="install-icon" aria-hidden="true">${iconSvg("install")}</span>
      <div class="install-copy">
        <strong id="installPromptTitle">${appleMobile ? "把旅行单词放到主屏幕" : "安装旅行单词"}</strong>
        <small>${appleMobile ? "下次可以像 App 一样直接打开。" : "安装后可从桌面直接打开，并离线使用词库。"}</small>
        ${instructions}
      </div>
      <button class="install-dismiss" type="button" data-dismiss-install aria-label="关闭安装提示">×</button>
    </section>`;
  }

  function bindInstallPrompt() {
    const slot = view.querySelector("#installPromptSlot");
    if (!slot) return;
    slot.querySelector("[data-dismiss-install]")?.addEventListener("click", () => {
      saveInstallHintDismissed();
      deferredInstallPrompt = null;
      slot.replaceChildren();
    });
    slot.querySelector("[data-install-app]")?.addEventListener("click", async (event) => {
      const promptEvent = deferredInstallPrompt;
      if (!promptEvent) return;
      const button = event.currentTarget;
      button.disabled = true;
      button.textContent = "正在打开…";
      deferredInstallPrompt = null;
      try {
        await promptEvent.prompt();
        await promptEvent.userChoice;
      } catch (error) {
        console.warn("无法打开安装提示", error);
      }
      refreshInstallPrompt();
    });
  }

  function refreshInstallPrompt() {
    const slot = view.querySelector("#installPromptSlot");
    if (!slot) return;
    slot.innerHTML = installPromptHtml();
    bindInstallPrompt();
  }

  function setupInstallPrompt() {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      refreshInstallPrompt();
    });
    window.addEventListener("appinstalled", () => {
      deferredInstallPrompt = null;
      saveInstallHintDismissed();
      refreshInstallPrompt();
    });
  }

  function renderHome() {
    stopSpeech();
    state.questionToken += 1;
    state.quiz = null;
    state.answered = false;
    state.selectedId = null;
    updateSubtitle("home");

    const stats = loadStats();
    const wrongIds = loadWrongIds();
    const learned = Object.values(stats.byId).filter((record) => record.attempts > 0).length;
    const totals = Object.values(stats.byId).reduce((sum, record) => ({
      attempts: sum.attempts + record.attempts,
      correct: sum.correct + record.correct
    }), { attempts: 0, correct: 0 });
    const accuracy = totals.attempts ? Math.round((totals.correct / totals.attempts) * 100) : 0;

    const categoriesHtml = window.CATEGORIES.map((category, index) => {
      const words = window.WORD_BANK.filter((entry) => entry.category === category.id);
      const categoryLearned = words.filter((entry) => stats.byId[entry.id]?.attempts).length;
      const categoryStats = stats.byCategory[category.id];
      const categoryAccuracy = categoryStats?.attempts ? Math.round(accuracyOf(categoryStats) * 100) : null;
      const progress = words.length ? Math.round((categoryLearned / words.length) * 100) : 0;
      return `
        <button class="category-card" type="button" data-category="${escapeHtml(category.id)}">
          <span class="category-icon" aria-hidden="true">${iconSvg(category.id)}</span>
          <span class="category-body">
            <span class="category-code">CH ${String(index + 1).padStart(2, "0")}</span>
            <span class="category-name">${escapeHtml(category.name)}</span>
            <span class="category-meta">已学习 ${categoryLearned}/${words.length}${categoryAccuracy == null ? "" : ` · 正确率 ${categoryAccuracy}%`}</span>
            <span class="mini-progress" aria-hidden="true"><span style="width:${progress}%"></span></span>
          </span>
        </button>`;
    }).join("");

    view.innerHTML = `
      <div class="home page-enter">
        ${renderLangSwitch()}
        <div id="installPromptSlot" aria-live="polite">${installPromptHtml()}</div>
        <section class="learning-summary" aria-label="学习概览">
          <div class="screen-topline"><span>学习状态</span><span>${langLabel(state.lang)} · MEMORY</span></div>
          <div class="summary-grid">
            <div><strong>${learned}<small> / ${window.WORD_BANK.length}</small></strong><span>已学习词数</span></div>
            <div><strong>${totals.attempts}</strong><span>答题次数</span></div>
            <div><strong>${accuracy}%</strong><span>总正确率</span></div>
            <div><strong>${wrongIds.size}</strong><span>待复习</span></div>
          </div>
        </section>

        <section class="quick-actions" aria-label="快捷练习">
          <button class="quick-card quick-primary" type="button" data-start="mixed">
            <span class="quick-icon" aria-hidden="true">${iconSvg("dice")}</span>
            <span><strong>开始随机练习</strong><small>从未学习和薄弱词汇开始</small></span>
            <span class="key-mark" aria-hidden="true">START</span>
          </button>
          <button class="quick-card quick-secondary" type="button" data-start="wrong">
            <span class="secondary-icon" aria-hidden="true">${iconSvg("review")}</span>
            <span><strong>错题复习</strong><small>${wrongIds.size ? `${wrongIds.size} 个词等待复习` : "目前没有错题"}</small></span>
            <span class="key-count">${wrongIds.size}</span>
          </button>
        </section>

        <div class="section-heading">
          <div><span class="control-label-text">CHANNEL SELECT</span><h2>旅行场景</h2></div>
          <span>${window.CATEGORIES.length} CH</span>
        </div>
        <div class="category-grid">${categoriesHtml}</div>
      </div>`;
    scrollToTop();

    bindInstallPrompt();
    view.querySelectorAll(".passport-tab").forEach((button) => {
      button.addEventListener("click", () => {
        saveLang(button.dataset.lang);
        renderHome();
      });
    });
    view.querySelectorAll(".category-card").forEach((button) => {
      button.addEventListener("click", () => startQuiz({ kind: "category", categoryId: button.dataset.category }));
    });
    view.querySelector('[data-start="mixed"]').addEventListener("click", () => startQuiz({ kind: "mixed" }));
    view.querySelector('[data-start="wrong"]').addEventListener("click", () => startQuiz({ kind: "wrong" }));
  }

  function startQuiz(mode) {
    let pool;
    if (mode.kind === "category") pool = window.WORD_BANK.filter((entry) => entry.category === mode.categoryId);
    else if (mode.kind === "wrong") {
      const wrongIds = loadWrongIds();
      pool = window.WORD_BANK.filter((entry) => wrongIds.has(entry.id));
    } else pool = window.WORD_BANK.slice();

    if (!pool.length) {
      renderHome();
      showToast(mode.kind === "wrong" ? "当前没有错题，继续保持！" : "这个场景暂时没有词条");
      return;
    }

    stopSpeech();
    state.quiz = {
      mode,
      questions: selectQuestions(pool, loadStats()),
      index: 0,
      score: 0,
      wrong: []
    };
    renderQuestion();
  }

  function modeTitle(mode) {
    if (mode.kind === "wrong") return "错题复习";
    if (mode.kind === "mixed") return "随机混合";
    return categoryName(mode.categoryId);
  }

  function renderQuestion() {
    stopSpeech();
    state.questionToken += 1;
    const questionToken = state.questionToken;
    updateSubtitle("quiz");
    const quiz = state.quiz;
    const entry = quiz.questions[quiz.index];
    let options;
    try {
      options = buildOptions(entry, state.lang);
    } catch (error) {
      console.error(error);
      renderError([error.message]);
      return;
    }

    state.answered = false;
    state.selectedId = null;
    const current = quiz.index + 1;
    const total = quiz.questions.length;
    const progress = Math.round((current / total) * 100);

    const optionsHtml = options.map((option, index) => `
      <div class="option-row" data-id="${escapeHtml(option.id)}">
        <button class="option-choice" type="button" data-id="${escapeHtml(option.id)}" aria-pressed="false">
          <span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
          <span class="option-text">${contentHtml(option, state.lang)}</span>
          <span class="choice-state" aria-hidden="true"></span>
        </button>
        <div class="option-audio" aria-label="发音">${audioButtonsHtml(option, state.lang)}</div>
      </div>`).join("");

    view.innerHTML = `
      <div class="quiz page-enter">
        <div class="quiz-top">
          <button class="text-btn" id="quitBtn" type="button">退出</button>
          <strong>${escapeHtml(modeTitle(quiz.mode))}</strong>
          <span>${current} / ${total}</span>
        </div>
        <div class="progress-track" role="progressbar" aria-label="练习进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
          <span style="width:${progress}%"></span>
        </div>

        <section class="prompt-ticket" id="questionPrompt" tabindex="-1" aria-labelledby="questionText">
          <div class="screen-topline"><span>VOICE DISPLAY</span><span>${state.lang === "ja" ? "JP" : state.lang === "en" ? "EN" : "JP + EN"}</span></div>
          <span class="prompt-route"><span aria-hidden="true">${iconSvg(entry.category)}</span>${escapeHtml(categoryName(entry.category))} · ${entry.type === "phrase" ? "短句" : "单词"}</span>
          <h2 id="questionText">${escapeHtml(entry.zh)}</h2>
          <p>${escapeHtml(promptHint(entry))}</p>
        </section>

        <div class="control-label answer-bank-label"><span>答案键</span><span>SELECT A–D</span></div>
        <div class="options" role="group" aria-label="答案选项">${optionsHtml}</div>
        <div id="feedback" class="feedback" tabindex="-1" aria-live="polite" hidden></div>
      </div>
      <div class="quiz-actions"><button id="confirmBtn" class="primary-btn" type="button" disabled>确认答案</button></div>`;
    scrollToTop();

    const confirmBtn = view.querySelector("#confirmBtn");
    view.querySelectorAll(".option-choice").forEach((button) => {
      button.addEventListener("click", () => selectOption(button, confirmBtn));
    });
    bindSpeechButtons(view);
    view.querySelector("#quitBtn").addEventListener("click", renderHome);
    confirmBtn.addEventListener("click", () => confirmAnswer(entry, questionToken));
    requestAnimationFrame(() => {
      if (questionToken === state.questionToken) view.querySelector("#questionPrompt")?.focus({ preventScroll: true });
    });
  }

  function selectOption(button, confirmBtn) {
    if (state.answered) return;
    view.querySelectorAll(".option-choice").forEach((item) => {
      item.setAttribute("aria-pressed", "false");
      item.closest(".option-row").classList.remove("selected");
    });
    button.setAttribute("aria-pressed", "true");
    button.closest(".option-row").classList.add("selected");
    state.selectedId = button.dataset.id;
    confirmBtn.disabled = false;
  }

  function confirmAnswer(entry, questionToken) {
    if (!state.quiz || state.answered || !state.selectedId || questionToken !== state.questionToken) return;
    state.answered = true;
    const isCorrect = state.selectedId === entry.id;
    if (isCorrect) state.quiz.score += 1;
    else state.quiz.wrong.push(entry);
    recordAnswer(entry, isCorrect);

    view.querySelectorAll(".option-choice").forEach((button) => {
      button.disabled = true;
      const row = button.closest(".option-row");
      if (button.dataset.id === entry.id) {
        row.classList.add("correct");
        row.querySelector(".choice-state").textContent = "✓";
      } else if (!isCorrect && button.dataset.id === state.selectedId) {
        row.classList.add("wrong");
        row.querySelector(".choice-state").textContent = "×";
      }
    });
    view.querySelectorAll(".speak-btn").forEach((button) => {
      button.disabled = true;
    });

    const feedback = view.querySelector("#feedback");
    feedback.hidden = false;
    feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
    feedback.innerHTML = `
      <span class="feedback-icon" aria-hidden="true">${isCorrect ? "✓" : "!"}</span>
      <div><strong>${isCorrect ? "回答正确" : "回答错误，再看一次正确表达"}</strong>
      ${isCorrect ? "" : `<span class="feedback-label">正确答案</span>`}
      <div class="feedback-answer">${contentHtml(entry, state.lang)}</div></div>`;

    const confirmBtn = view.querySelector("#confirmBtn");
    confirmBtn.disabled = true;
    confirmBtn.textContent = "正在播放答案…";
    feedback.focus({ preventScroll: true });
    void advanceAfterAnswer(entry, questionToken);
  }

  async function advanceAfterAnswer(entry, questionToken) {
    const startedAt = Date.now();
    const result = await speakAnswer(entry);
    const elapsed = Date.now() - startedAt;
    const hold = result.playedCount > 0 ? 450 : Math.max(0, 900 - elapsed);
    if (hold) await wait(hold);
    if (!state.quiz || !state.answered || questionToken !== state.questionToken) return;
    nextQuestion();
  }

  function nextQuestion() {
    stopSpeech();
    if (!state.quiz) return;
    if (state.quiz.index >= state.quiz.questions.length - 1) renderResults();
    else {
      state.quiz.index += 1;
      renderQuestion();
    }
  }

  function renderResults() {
    stopSpeech();
    state.questionToken += 1;
    updateSubtitle("home");
    const quiz = state.quiz;
    const total = quiz.questions.length;
    const score = quiz.score;
    const accuracy = Math.round((score / total) * 100);
    const wrongIds = loadWrongIds();
    const wrongHtml = quiz.wrong.length ? quiz.wrong.map((entry) => `
      <div class="wrong-item">
        <div class="wrong-copy"><strong>${escapeHtml(entry.zh)}</strong>${contentHtml(entry, state.lang)}<span>${escapeHtml(categoryName(entry.category))}</span></div>
        <div class="option-audio">${audioButtonsHtml(entry, state.lang)}</div>
      </div>`).join("") : `<div class="empty-state"><span aria-hidden="true">${iconSvg("check")}</span><strong>本轮全部答对</strong><p>这段旅程走得很稳！</p></div>`;

    view.innerHTML = `
      <div class="results page-enter">
         <section class="passport-result">
           <div class="screen-topline"><span>SESSION REPORT</span><span>COMPLETE</span></div>
           <div class="result-stamp" style="--score:${accuracy}"><div><strong>${accuracy}%</strong><span>${score} / ${total} 正确</span></div></div>
           <p>${accuracy === 100 ? "完美抵达，继续探索下一站吧。" : accuracy >= 70 ? "状态不错，再走一遍会更熟练。" : "每次练习都算里程，错题已经收好。"}</p>
           <div class="result-metrics" aria-label="本轮学习数据">
             <div><strong>${total}</strong><span>本轮题数</span></div>
             <div><strong>${quiz.wrong.length}</strong><span>本轮错题</span></div>
             <div><strong>${wrongIds.size}</strong><span>待复习</span></div>
           </div>
         </section>
        <section class="result-wrong">
          <div class="section-heading"><div><h2>本轮错题</h2></div><span>错题本共 ${wrongIds.size} 条</span></div>
          ${wrongHtml}
        </section>
        <div class="result-actions">
          <button class="primary-btn" id="againBtn" type="button">再来一轮</button>
          <button class="secondary-btn" id="wrongRetryBtn" type="button" ${wrongIds.size ? "" : "disabled"}>复习全部错题（${wrongIds.size}）</button>
          <button class="text-link-btn" id="homeBtn" type="button">返回首页</button>
        </div>
      </div>`;
    scrollToTop();

    bindSpeechButtons(view);
    view.querySelector("#againBtn").addEventListener("click", () => startQuiz(quiz.mode));
    view.querySelector("#wrongRetryBtn").addEventListener("click", () => startQuiz({ kind: "wrong" }));
    view.querySelector("#homeBtn").addEventListener("click", renderHome);
  }

  function resetData() {
    if (!window.confirm("确定清空答题记录和错题本吗？语言选择会保留。")) return;
    stopSpeech();
    try {
      localStorage.removeItem(STATS_KEY);
      localStorage.removeItem(WRONG_KEY);
    } catch (error) {
      console.warn("无法清空学习数据", error);
    }
    renderHome();
    showToast("学习记录已清空");
  }

  function init() {
    const validation = validateData();
    if (validation.warnings.length) console.warn("词库校验提醒：", validation.warnings);
    if (!validation.valid) {
      console.error("词库校验失败：", validation.problems);
      renderError(validation.problems);
      return;
    }
    loadWrongIds();
    resetBtn.addEventListener("click", resetData);
    renderHome();
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch((error) => {
        console.warn("Service Worker 注册失败，应用将继续以普通网页模式运行", error);
      });
    });
  }

  setupInstallPrompt();
  registerServiceWorker();
  init();
})();
