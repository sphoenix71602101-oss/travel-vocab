(function () {
  "use strict";

  const STATS_KEY = "travelVocab.stats.v1";
  const WRONG_KEY = "travelVocab.wrongIds.v1";
  const LANG_KEY = "travelVocab.lang.v1";
  const QUESTION_COUNT = 10;
  const SPEAKER_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8a5 5 0 0 1 0 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  const view = document.getElementById("view");
  const resetBtn = document.getElementById("resetBtn");
  const toastEl = document.getElementById("toast");

  const state = {
    quiz: null,
    answered: false,
    selectedId: null,
    speechToken: 0,
  };

  let toastTimer = null;

  /* ---------- 工具函数 ---------- */
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
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }

  function categoryName(id) {
    const category = window.CATEGORIES.find((c) => c.id === id);
    return category ? category.name : id;
  }

  function categoryIcon(id) {
    const category = window.CATEGORIES.find((c) => c.id === id);
    return category ? category.icon : "📚";
  }

  /* ---------- 语言模式 ---------- */
  const LANG_OPTIONS = [
    { value: "ja", label: "日语" },
    { value: "en", label: "英语" },
    { value: "bilingual", label: "双语" }
  ];

  function loadLang() {
    try {
      const value = localStorage.getItem(LANG_KEY);
      if (["ja", "en", "bilingual"].includes(value)) return value;
    } catch (error) {
      /* ignore */
    }
    return "bilingual";
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (error) {
      console.warn("无法保存语言设置", error);
    }
  }

  function currentLang() {
    return loadLang();
  }

  function promptHint(entry, lang) {
    if (lang === "en") {
      return entry.type === "phrase" ? "请选择对应的英文短句" : "请选择对应的英文";
    }
    if (lang === "ja") {
      return entry.type === "phrase" ? "请选择对应的日文短句" : "请选择对应的日文";
    }
    return entry.type === "phrase" ? "请选择对应的日文短句（含英文）" : "请选择对应的日文（含英文）";
  }

  function contentHtml(entry, lang) {
    const parts = [];
    if (lang !== "en") {
      parts.push(`<div class="ja">${escapeHtml(entry.ja)}</div>`);
      parts.push(`<div class="reading">${escapeHtml(entry.reading)}</div>`);
    }
    if (lang !== "ja") {
      parts.push(`<div class="en">${escapeHtml(entry.en)}</div>`);
    }
    return parts.join("");
  }

  function audioButtonsHtml(entry, lang) {
    const jaButton = `<button class="speak-btn" type="button" title="日文发音" data-speak="ja" data-ja="${escapeHtml(entry.ja)}">${SPEAKER_SVG}<span>日</span></button>`;
    const enButton = `<button class="speak-btn" type="button" title="英文发音" data-speak="en" data-en="${escapeHtml(entry.en)}">${SPEAKER_SVG}<span>EN</span></button>`;
    if (lang === "ja") return jaButton;
    if (lang === "en") return enButton;
    return jaButton + enButton;
  }

  /* ---------- 语音 ---------- */
  function speechSupported() {
    return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  }

  function makeUtterance(text, lang) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.88;
    const voices = window.speechSynthesis.getVoices();
    const match =
      voices.find((v) => v.lang && v.lang.toLowerCase() === lang.toLowerCase()) ||
      voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(lang.split("-")[0].toLowerCase()));
    if (match) utterance.voice = match;
    return utterance;
  }

  function stopSpeech() {
    state.speechToken += 1;
    if (speechSupported()) {
      try {
        window.speechSynthesis.cancel();
      } catch (error) {
        /* ignore */
      }
    }
  }

  function speak(text, lang) {
    if (!speechSupported()) {
      showToast("当前浏览器不支持语音播放");
      return;
    }
    stopSpeech();
    try {
      window.speechSynthesis.speak(makeUtterance(text, lang));
    } catch (error) {
      showToast("语音播放失败，请检查系统语音设置");
    }
  }

  function speakSequence(items, onDone) {
    const token = ++state.speechToken;
    if (!speechSupported() || !items.length) {
      setTimeout(() => {
        if (token === state.speechToken) onDone();
      }, 600);
      return;
    }

    try {
      window.speechSynthesis.cancel();
    } catch (error) {
      /* ignore */
    }

    let index = 0;
    const playNext = () => {
      if (token !== state.speechToken) return;
      if (index >= items.length) {
        onDone();
        return;
      }

      const item = items[index++];
      const utterance = makeUtterance(item.text, item.lang);
      let finished = false;
      const finish = () => {
        if (finished || token !== state.speechToken) return;
        finished = true;
        clearTimeout(fallback);
        playNext();
      };
      const fallback = setTimeout(finish, 2600);
      utterance.onend = finish;
      utterance.onerror = finish;
      try {
        window.speechSynthesis.speak(utterance);
      } catch (error) {
        finish();
      }
    };
    playNext();
  }

  /* ---------- 本地存储 ---------- */
  function defaultStats() {
    return { byId: {}, byCategory: {} };
  }

  function loadStats() {
    try {
      const raw = JSON.parse(localStorage.getItem(STATS_KEY));
      if (raw && typeof raw === "object" && raw.byId && raw.byCategory) return raw;
    } catch (error) {
      /* ignore */
    }
    return defaultStats();
  }

  function saveStats(stats) {
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch (error) {
      console.warn("无法保存学习统计", error);
    }
  }

  function loadWrongIds() {
    try {
      const raw = JSON.parse(localStorage.getItem(WRONG_KEY));
      return new Set(Array.isArray(raw) ? raw : []);
    } catch (error) {
      return new Set();
    }
  }

  function saveWrongIds(wrongIds) {
    try {
      localStorage.setItem(WRONG_KEY, JSON.stringify(Array.from(wrongIds)));
    } catch (error) {
      console.warn("无法保存错题", error);
    }
  }

  function recordAnswer(entry, isCorrect) {
    const stats = loadStats();
    const idStats = stats.byId[entry.id] || { attempts: 0, correct: 0 };
    idStats.attempts += 1;
    if (isCorrect) idStats.correct += 1;
    stats.byId[entry.id] = idStats;

    const catStats = stats.byCategory[entry.category] || { attempts: 0, correct: 0 };
    catStats.attempts += 1;
    if (isCorrect) catStats.correct += 1;
    stats.byCategory[entry.category] = catStats;
    saveStats(stats);

    const wrongIds = loadWrongIds();
    if (isCorrect) {
      wrongIds.delete(entry.id);
    } else {
      wrongIds.add(entry.id);
    }
    saveWrongIds(wrongIds);
  }

  function resetData() {
    if (!window.confirm("确定要清空所有学习记录和错题吗？此操作无法撤销。")) return;
    try {
      localStorage.removeItem(STATS_KEY);
      localStorage.removeItem(WRONG_KEY);
    } catch (error) {
      /* ignore */
    }
    renderHome();
    showToast("学习数据已重置");
  }

  /* ---------- 数据校验 ---------- */
  function validateData() {
    if (!Array.isArray(window.CATEGORIES) || !Array.isArray(window.WORD_BANK)) {
      console.error("数据文件加载失败：缺少 CATEGORIES 或 WORD_BANK");
      return false;
    }

    const categoryIds = new Set(window.CATEGORIES.map((c) => c.id));
    const ids = new Set();
    const problems = [];

    window.WORD_BANK.forEach((entry, index) => {
      ["id", "category", "zh", "ja", "reading", "en", "type"].forEach((field) => {
        if (entry[field] == null || String(entry[field]).trim() === "") {
          problems.push(`第 ${index + 1} 条缺少字段 ${field}`);
        }
      });
      if (entry.id && ids.has(entry.id)) problems.push(`id 重复：${entry.id}`);
      if (entry.id) ids.add(entry.id);
      if (entry.category && !categoryIds.has(entry.category)) {
        problems.push(`未知分类：${entry.category}（${entry.zh || entry.ja}）`);
      }
      if (entry.type && !["word", "phrase"].includes(entry.type)) {
        problems.push(`type 非法：${entry.type}（${entry.zh || entry.ja}）`);
      }
    });

    if (problems.length) {
      console.warn("词库校验发现问题：", problems.slice(0, 20));
    }
    return problems.length === 0;
  }

  /* ---------- 首页 ---------- */
  function renderLangSwitch() {
    const current = currentLang();
    const buttons = LANG_OPTIONS.map((option) => {
      const active = option.value === current ? " active" : "";
      return `<button class="lang-btn${active}" data-lang="${option.value}">${option.label}</button>`;
    }).join("");
    return `<div class="lang-switch" role="group" aria-label="语言模式">${buttons}</div>`;
  }

  function renderHome() {
    state.quiz = null;
    state.answered = false;
    state.selectedId = null;
    stopSpeech();

    const stats = loadStats();
    const wrongIds = loadWrongIds();
    let totalAttempts = 0;
    let totalCorrect = 0;
    Object.values(stats.byId).forEach((s) => {
      totalAttempts += s.attempts;
      totalCorrect += s.correct;
    });
    const accuracy = totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    const categoriesHtml = window.CATEGORIES.map((category) => {
      const words = window.WORD_BANK.filter((w) => w.category === category.id);
      const catStats = stats.byCategory[category.id] || { attempts: 0, correct: 0 };
      const catAccuracy = catStats.attempts ? Math.round((catStats.correct / catStats.attempts) * 100) : null;
      const meta = `${words.length} 条${catAccuracy == null ? "" : ` · 正确率 ${catAccuracy}%`}`;
      return `
        <button class="category-card" data-category="${escapeHtml(category.id)}">
          <span class="icon">${escapeHtml(category.icon)}</span>
          <span class="body">
            <span class="name">${escapeHtml(category.name)}</span>
            <span class="meta">${escapeHtml(meta)}</span>
          </span>
          <span class="chevron">›</span>
        </button>`;
    }).join("");

    view.innerHTML = `
      <div class="home">
        ${renderLangSwitch()}

        <section class="stats-strip">
          <div class="stat"><span class="num">${escapeHtml(totalAttempts)}</span><span class="label">已练习</span></div>
          <div class="stat"><span class="num">${escapeHtml(accuracy)}%</span><span class="label">总正确率</span></div>
          <div class="stat"><span class="num">${escapeHtml(wrongIds.size)}</span><span class="label">待复习错题</span></div>
        </section>

        <div class="quick-actions">
          <button class="quick-card" data-start="mixed">
            <span class="big">🎲</span>
            <span class="name">随机混合练习</span>
            <span class="desc">从全部词条中随机出题</span>
          </button>
          <button class="quick-card wrong-card" data-start="wrong">
            <span class="big">📌</span>
            <span class="name">错题复习</span>
            <span class="desc">${wrongIds.size ? `还有 ${wrongIds.size} 个词待复习` : "暂无错题"}</span>
          </button>
        </div>

        <h2 class="section-title">按分类练习</h2>
        <div class="category-grid">${categoriesHtml}</div>
      </div>`;

    view.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        saveLang(btn.dataset.lang);
        renderHome();
      });
    });
    view.querySelectorAll(".category-card").forEach((card) => {
      card.addEventListener("click", () => {
        startQuiz({ kind: "category", categoryId: card.dataset.category });
      });
    });
    view.querySelector('[data-start="mixed"]').addEventListener("click", () => startQuiz({ kind: "mixed" }));
    view.querySelector('[data-start="wrong"]').addEventListener("click", () => startQuiz({ kind: "wrong" }));
  }

  /* ---------- 测验 ---------- */
  function startQuiz(mode) {
    let pool;
    if (mode.kind === "category") {
      pool = window.WORD_BANK.filter((w) => w.category === mode.categoryId);
    } else if (mode.kind === "wrong") {
      const wrongIds = loadWrongIds();
      pool = window.WORD_BANK.filter((w) => wrongIds.has(w.id));
    } else {
      pool = window.WORD_BANK.slice();
    }

    if (!pool.length) {
      renderHome();
      showToast(mode.kind === "wrong" ? "太棒了，当前没有错题" : "该分类暂无词条");
      return;
    }

    stopSpeech();
    const questions = shuffle(pool).slice(0, Math.min(QUESTION_COUNT, pool.length));
    state.quiz = {
      mode,
      questions,
      index: 0,
      score: 0,
      wrong: [],
      correctId: null,
    };
    state.answered = false;
    state.selectedId = null;
    renderQuestion();
  }

  function buildOptions(correct) {
    const sameCategory = window.WORD_BANK.filter(
      (w) => w.id !== correct.id && w.category === correct.category
    );
    const otherCategories = window.WORD_BANK.filter(
      (w) => w.id !== correct.id && w.category !== correct.category
    );
    const candidates = shuffle(sameCategory).concat(shuffle(otherCategories));
    const chosen = [];
    for (const item of candidates) {
      if (chosen.length >= 3) break;
      if (chosen.some((c) => c.ja === item.ja)) continue;
      chosen.push(item);
    }
    return shuffle([correct].concat(chosen));
  }

  function renderQuestion() {
    const quiz = state.quiz;
    const entry = quiz.questions[quiz.index];
    const options = buildOptions(entry);
    const lang = currentLang();
    quiz.correctId = entry.id;
    state.answered = false;
    state.selectedId = null;

    const total = quiz.questions.length;
    const current = quiz.index + 1;
    const progressPercent = ((quiz.index) / total) * 100;
    const percent = Math.round((current / total) * 100);
    const modeTitle =
      quiz.mode.kind === "wrong"
        ? "错题复习"
        : quiz.mode.kind === "mixed"
          ? "随机混合"
          : categoryName(quiz.mode.categoryId);

    const optionsHtml = options.map((option, index) => {
      return `
        <div class="option" role="button" tabindex="0" data-id="${escapeHtml(option.id)}">
          <span class="letter">${String.fromCharCode(65 + index)}</span>
          <div class="text">${contentHtml(option, lang)}</div>
          ${audioButtonsHtml(option, lang)}
        </div>`;
    }).join("");

    view.innerHTML = `
      <div class="quiz">
        <div class="quiz-top">
          <button class="back-btn" id="quitBtn">退出</button>
          <div class="quiz-title">${escapeHtml(modeTitle)}</div>
          <div class="progress">${current} / ${total} · ${percent}%</div>
        </div>
        <div class="progress-bar"><span style="width:${progressPercent}%"></span></div>

        <div class="prompt-card">
          <span class="hint">${escapeHtml(categoryIcon(entry.category))} ${escapeHtml(categoryName(entry.category))}</span>
          <div class="zh">${escapeHtml(entry.zh)}</div>
          <div class="en-hint">${escapeHtml(promptHint(entry, lang))}</div>
        </div>

        <div class="options">${optionsHtml}</div>
        <div id="feedback" class="feedback" hidden></div>
      </div>

      <div class="quiz-actions">
        <button id="confirmBtn" class="next-btn" disabled>确认</button>
      </div>`;

    const confirmBtn = view.querySelector("#confirmBtn");

    view.querySelectorAll(".option").forEach((optionEl) => {
      optionEl.addEventListener("click", (event) => {
        if (event.target.closest(".speak-btn")) return;
        if (state.answered) return;
        selectOption(optionEl, confirmBtn);
      });
      optionEl.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          if (state.answered) return;
          selectOption(optionEl, confirmBtn);
        }
      });
    });

    view.querySelectorAll(".speak-btn").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.stopPropagation();
        if (btn.dataset.speak === "ja") {
          speak(btn.dataset.ja, "ja-JP");
        } else {
          speak(btn.dataset.en, "en-US");
        }
      });
    });

    view.querySelector("#quitBtn").addEventListener("click", renderHome);
    confirmBtn.addEventListener("click", () => confirmAnswer(entry));
  }

  function selectOption(optionEl, confirmBtn) {
    if (state.answered) return;
    view.querySelectorAll(".option").forEach((el) => el.classList.remove("selected"));
    optionEl.classList.add("selected");
    state.selectedId = optionEl.dataset.id;
    confirmBtn.disabled = false;
    confirmBtn.textContent = "确认";
  }

  function confirmAnswer(entry) {
    const quiz = state.quiz;
    if (!quiz || state.answered || !state.selectedId) return;

    state.answered = true;
    const selectedId = state.selectedId;
    const isCorrect = selectedId === quiz.correctId;

    if (isCorrect) quiz.score += 1;
    else if (!quiz.wrong.some((w) => w.id === entry.id)) {
      quiz.wrong.push(entry);
    }
    recordAnswer(entry, isCorrect);

    const optionsContainer = view.querySelector(".options");
    optionsContainer.classList.add("locked");
    view.querySelectorAll(".option").forEach((optionEl) => {
      optionEl.classList.remove("selected");
      if (optionEl.dataset.id === quiz.correctId) {
        optionEl.classList.add("correct");
        optionEl.insertAdjacentHTML("beforeend", '<span class="mark">✓</span>');
      }
      if (!isCorrect && optionEl.dataset.id === selectedId) {
        optionEl.classList.add("wrong");
        optionEl.insertAdjacentHTML("beforeend", '<span class="mark">✗</span>');
      }
    });

    const feedback = view.querySelector("#feedback");
    feedback.hidden = false;
    feedback.className = "feedback " + (isCorrect ? "good" : "bad");
    feedback.textContent = isCorrect
      ? "回答正确！"
      : `回答错误，正确答案是「${entry.ja}」`;

    const confirmBtn = view.querySelector("#confirmBtn");
    confirmBtn.disabled = true;
    confirmBtn.textContent = "播放中…";

    const lang = currentLang();
    const audioItems = [];
    if (lang !== "en") audioItems.push({ text: entry.ja, lang: "ja-JP" });
    if (lang !== "ja") audioItems.push({ text: entry.en, lang: "en-US" });
    speakSequence(audioItems, nextQuestion);
  }

  function nextQuestion() {
    stopSpeech();
    const quiz = state.quiz;
    if (!quiz) return;
    if (quiz.index >= quiz.questions.length - 1) {
      renderResults();
    } else {
      quiz.index += 1;
      renderQuestion();
    }
  }

  /* ---------- 结果页 ---------- */
  function renderResults() {
    const quiz = state.quiz;
    const total = quiz.questions.length;
    const score = quiz.score;
    const accuracy = total ? Math.round((score / total) * 100) : 0;
    const wrongIds = loadWrongIds();
    const lang = currentLang();

    const wrongHtml = quiz.wrong.length
      ? quiz.wrong.map((entry) => `
          <div class="wrong-item">
            <div class="text">
              <div class="zh">${escapeHtml(entry.zh)}</div>
              ${contentHtml(entry, lang)}
              <span class="chip">${escapeHtml(categoryIcon(entry.category))} ${escapeHtml(categoryName(entry.category))}</span>
            </div>
            ${audioButtonsHtml(entry, lang)}
          </div>`).join("")
      : `<div class="empty"><span class="emoji">🎉</span>本轮全部答对，太棒了！</div>`;

    view.innerHTML = `
      <div class="results">
        <div class="result-hero">
          <div class="result-ring" style="--score:${accuracy}">
            <div class="result-ring-inner">
              <div class="result-score">${accuracy}%</div>
              <div class="result-label">${score} / ${total} 正确</div>
            </div>
          </div>
        </div>
        <div class="result-wrong">
          <h3>本轮答错的词</h3>
          ${wrongHtml}
        </div>
        <div class="actions">
          <button class="primary-btn" id="againBtn">再来一轮</button>
          <button class="secondary-btn" id="wrongRetryBtn" ${wrongIds.size ? "" : "disabled"}>重练错题（${wrongIds.size}）</button>
          <button class="secondary-btn" id="homeBtn">返回首页</button>
        </div>
      </div>`;

    view.querySelectorAll(".speak-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.speak === "ja") speak(btn.dataset.ja, "ja-JP");
        else speak(btn.dataset.en, "en-US");
      });
    });
    view.querySelector("#againBtn").addEventListener("click", () => startQuiz(quiz.mode));
    view.querySelector("#wrongRetryBtn").addEventListener("click", () => startQuiz({ kind: "wrong" }));
    view.querySelector("#homeBtn").addEventListener("click", renderHome);
  }

  /* ---------- 启动 ---------- */
  function init() {
    if (!validateData()) {
      console.warn("词库存在数据问题，请检查 data.js");
    }
    if (speechSupported()) {
      window.speechSynthesis.onvoiceschanged = () => {};
      window.speechSynthesis.getVoices();
    }
    resetBtn.addEventListener("click", resetData);
    renderHome();
  }

  init();
})();
