(function () {
  "use strict";

  const STATS_KEY = "travelVocab.stats.v2";
  const WRONG_KEY = "travelVocab.wrongIds.v2";
  const LANG_KEY = "travelVocab.lang.v1";
  const MIGRATION_KEY = "travelVocab.migrated.v2";
  const INSTALL_HINT_KEY = "travelVocab.installHintDismissed.v1";
  const QUESTION_COUNT = 10;
  const LANGS = new Set(["ja", "en"]);
  const TABS = new Set(["home", "test", "tools", "me"]);
  const PAGE_META = {
    home: ["首页", "继续今天的旅行语言练习"], test: ["自测", "换个方向，检查是否真正记住"],
    tools: ["工具", "让旅途沟通更从容"], me: ["我的", "管理语言与学习数据"]
  };
  const LANG_OPTIONS = [{ value: "ja", label: "日语", helper: "日本語" }, { value: "en", label: "英语", helper: "English" }];
  const SPEAKER_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8a5 5 0 0 1 0 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  const ICONS = {
    dice: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="8" cy="8" r="1"/><circle cx="16" cy="8" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/></svg>',
    review: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="3"/><path d="m8.5 13 2.2 2.2 4.8-5"/></svg>',
    card: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="8" cy="11" r="2"/><path d="M5.5 16c.7-1.5 1.5-2.2 2.5-2.2s1.8.7 2.5 2.2M13 10h5M13 14h5"/></svg>',
    translate: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h10M9 3v2c0 5-2 8-6 10M6 9c1.5 2.5 3.5 4.5 6 6M14 21l4-10 4 10M15.5 17h5"/></svg>',
    language: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
    install: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 17v3h14v-3"/></svg>',
    trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 3h6l1 4H8l1-4ZM6 7l1 14h10l1-14M10 11v6M14 11v6"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>',
    warning: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.8 20h18.4L12 3z"/><path d="M12 9v5M12 17.2v.1"/></svg>',
    airport: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 9.5 9 3 12v2l7-1.5V18l-2 2v2l4-1 4 1v-2l-2-2v-5.5l7 1.5v-2L14.5 9 12 2Z"/></svg>',
    hotel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V5h10v15M14 10h6v10M8 9h2M8 13h2M8 17h2M17 14h1M17 17h1M2 20h20"/></svg>',
    food: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v7M4 3v5a3 3 0 0 0 6 0V3M7 10v11M16 3v18M16 3c3 2 4 5 4 8h-4"/></svg>',
    shopping: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8zM9 9V6a3 3 0 0 1 6 0v3"/></svg>',
    directions: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2z"/></svg>',
    numbers: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    emergency: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z"/></svg>',
    expressions: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4V5z"/><path d="M8 9h8M8 12h5"/></svg>'
  };

  const view = document.getElementById("view");
  const header = document.getElementById("appHeader");
  const titleEl = document.getElementById("appTitle");
  const subtitleEl = document.getElementById("appSubtitle");
  const bottomNav = document.getElementById("bottomNav");
  const toastEl = document.getElementById("toast");
  const state = { lang: null, tab: "home", quiz: null, answered: false, selectedId: null, speechToken: 0, questionToken: 0, quizHistoryActive: false };
  let toastTimer = null;
  let activeAudio = null;
  let cancelActiveAudio = null;
  let deferredInstallPrompt = null;

  function escapeHtml(value) { return String(value == null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"); }
  function iconSvg(name) { return ICONS[name] || ICONS.expressions; }
  function shuffle(input) { const items = input.slice(); for (let i = items.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [items[i], items[j]] = [items[j], items[i]]; } return items; }
  function clampInt(value, max) { const number = Number(value); if (!Number.isFinite(number) || number < 0) return 0; return Math.min(Math.floor(number), max == null ? Number.MAX_SAFE_INTEGER : max); }
  function showToast(message) { toastEl.textContent = message; toastEl.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove("show"), 3000); }
  function scrollToTop() { window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }
  function categoryName(id) { return window.CATEGORIES.find((category) => category.id === id)?.name || id; }
  function langLabel(lang) { return lang === "ja" ? "日语" : "英语"; }

  function migrateLegacyData() {
    try { if (localStorage.getItem(MIGRATION_KEY) === "1") return; localStorage.removeItem("travelVocab.stats.v1"); localStorage.removeItem("travelVocab.wrongIds.v1"); localStorage.setItem(MIGRATION_KEY, "1"); }
    catch (error) { console.warn("无法完成旧数据迁移", error); }
  }
  function loadLang() { try { const value = localStorage.getItem(LANG_KEY); return LANGS.has(value) ? value : null; } catch (error) { return null; } }
  function saveLang(lang) { if (!LANGS.has(lang)) return; state.lang = lang; try { localStorage.setItem(LANG_KEY, lang); } catch (error) { console.warn("无法保存语言设置", error); } }
  function defaultStats() { return { byId: {}, byCategory: {} }; }
  function normalizeRecord(record) { const attempts = clampInt(record?.attempts); return { attempts, correct: clampInt(record?.correct, attempts), streak: clampInt(record?.streak), lastSeen: clampInt(record?.lastSeen) }; }
  function normalizeStats(stats) {
    const normalized = defaultStats(); if (!stats || typeof stats !== "object") return normalized;
    const validIds = new Set(window.WORD_BANK.map((entry) => entry.id)); const validCategories = new Set(window.CATEGORIES.map((category) => category.id));
    Object.entries(stats.byId || {}).forEach(([id, record]) => { if (validIds.has(id)) normalized.byId[id] = normalizeRecord(record); });
    Object.entries(stats.byCategory || {}).forEach(([id, record]) => { if (validCategories.has(id)) normalized.byCategory[id] = normalizeRecord(record); }); return normalized;
  }
  function loadStatsEnvelope() { try { const raw = JSON.parse(localStorage.getItem(STATS_KEY)); return { ja: normalizeStats(raw?.ja), en: normalizeStats(raw?.en) }; } catch (error) { return { ja: defaultStats(), en: defaultStats() }; } }
  function loadStats(lang = state.lang) { return loadStatsEnvelope()[lang] || defaultStats(); }
  function saveStats(stats, lang = state.lang) { try { const envelope = loadStatsEnvelope(); envelope[lang] = normalizeStats(stats); localStorage.setItem(STATS_KEY, JSON.stringify(envelope)); } catch (error) { console.warn("无法保存学习统计", error); } }
  function loadWrongEnvelope() {
    const validIds = new Set(window.WORD_BANK.map((entry) => entry.id));
    try { const raw = JSON.parse(localStorage.getItem(WRONG_KEY)); const clean = (items) => Array.isArray(items) ? items.filter((id) => validIds.has(id)) : []; return { ja: clean(raw?.ja), en: clean(raw?.en) }; }
    catch (error) { return { ja: [], en: [] }; }
  }
  function loadWrongIds(lang = state.lang) { return new Set(loadWrongEnvelope()[lang] || []); }
  function saveWrongIds(ids, lang = state.lang) { try { const envelope = loadWrongEnvelope(); envelope[lang] = Array.from(ids); localStorage.setItem(WRONG_KEY, JSON.stringify(envelope)); } catch (error) { console.warn("无法保存错题", error); } }
  function updateWrongBook(entry, isCorrect) { const ids = loadWrongIds(); if (isCorrect) ids.delete(entry.id); else ids.add(entry.id); saveWrongIds(ids); }
  function recordLearningAnswer(entry, isCorrect) {
    const stats = loadStats(); const item = normalizeRecord(stats.byId[entry.id]); item.attempts += 1; item.correct += isCorrect ? 1 : 0; item.streak = isCorrect ? item.streak + 1 : 0; item.lastSeen = Date.now(); stats.byId[entry.id] = item;
    const category = normalizeRecord(stats.byCategory[entry.category]); category.attempts += 1; category.correct += isCorrect ? 1 : 0; category.streak = isCorrect ? category.streak + 1 : 0; category.lastSeen = Date.now(); stats.byCategory[entry.category] = category; saveStats(stats); updateWrongBook(entry, isCorrect);
  }

  function answerSignature(entry, direction) { return direction === "reverse" ? String(entry.zh || "").trim() : String(entry[state.lang] || "").trim().toLocaleLowerCase(state.lang === "en" ? "en" : "ja"); }
  function foreignContentHtml(entry, includeReading = true) { return state.lang === "ja" ? `<span class="answer-ja">${escapeHtml(entry.ja)}</span>${includeReading ? `<span class="answer-reading">${escapeHtml(entry.reading)}</span>` : ""}` : `<span class="answer-en">${escapeHtml(entry.en)}</span>`; }
  function audioButtonHtml(entry) { const text = state.lang === "ja" ? entry.ja : entry.en; return `<button class="speak-btn" type="button" aria-label="播放${langLabel(state.lang)}：${escapeHtml(text)}" data-entry-id="${escapeHtml(entry.id)}">${SPEAKER_SVG}</button>`; }
  function stopSpeech() { state.speechToken += 1; if (cancelActiveAudio) cancelActiveAudio(); try { window.speechSynthesis?.cancel(); } catch (error) { console.warn("无法停止语音", error); } }
  function speechTimeout(text) { return Math.min(8000, Math.max(3000, 1800 + Array.from(String(text)).length * 140)); }
  function playSpeech(entry, quiet = false) {
    stopSpeech(); const token = state.speechToken; const language = state.lang; const text = language === "ja" ? entry.ja : entry.en;
    return new Promise((resolve) => {
      const audio = new Audio(`audio/${language}/${entry.id}.mp3`); let settled = false;
      const finish = (status) => { if (settled) return; settled = true; clearTimeout(timer); audio.onended = null; audio.onerror = null; audio.pause(); if (activeAudio === audio) activeAudio = null; if (cancelActiveAudio === cancel) cancelActiveAudio = null;
        if (status === "error" && "speechSynthesis" in window && token === state.speechToken) { try { const utterance = new SpeechSynthesisUtterance(text); utterance.lang = language === "ja" ? "ja-JP" : "en-US"; utterance.rate = .88; utterance.onend = () => resolve({ status: "played", playedCount: 1 }); utterance.onerror = () => resolve({ status: "error", playedCount: 0 }); window.speechSynthesis.speak(utterance); return; } catch (error) { /* fallback failed */ } }
        if (status === "error" && !quiet) showToast("语音播放失败，请检查音频或系统语音设置"); resolve({ status, playedCount: status === "played" ? 1 : 0 }); };
      const cancel = () => finish("canceled"); const timer = setTimeout(() => finish("error"), speechTimeout(text) + 2000); activeAudio = audio; cancelActiveAudio = cancel; audio.preload = "auto"; audio.onended = () => finish("played"); audio.onerror = () => finish("error");
      try { const promise = audio.play(); if (promise?.catch) promise.catch(() => finish("error")); } catch (error) { finish("error"); }
    });
  }
  function bindSpeechButtons(root = view) { root.querySelectorAll(".speak-btn").forEach((button) => button.addEventListener("click", () => { const entry = window.WORD_BANK.find((item) => item.id === button.dataset.entryId); if (entry) void playSpeech(entry); })); }

  function accuracyOf(record) { return record?.attempts ? record.correct / record.attempts : 0; }
  function selectLearningQuestions(pool, stats) { const unseen = [], seen = []; pool.forEach((entry) => (stats.byId[entry.id]?.attempts ? seen : unseen).push(entry)); const ordered = shuffle(seen).sort((a, b) => accuracyOf(stats.byId[a.id]) - accuracyOf(stats.byId[b.id]) || stats.byId[a.id].lastSeen - stats.byId[b.id].lastSeen); return shuffle(unseen).concat(ordered).slice(0, Math.min(QUESTION_COUNT, pool.length)); }
  function buildOptions(correct, direction) {
    const chosen = []; const ids = new Set([correct.id]); const signatures = new Set([answerSignature(correct, direction)]);
    const tiers = [window.WORD_BANK.filter((item) => item.category === correct.category && item.type === correct.type), window.WORD_BANK.filter((item) => item.category === correct.category), window.WORD_BANK.filter((item) => item.type === correct.type), window.WORD_BANK];
    tiers.forEach((tier) => shuffle(tier).forEach((item) => { const signature = answerSignature(item, direction); if (chosen.length >= 3 || ids.has(item.id) || !signature || signatures.has(signature)) return; chosen.push(item); ids.add(item.id); signatures.add(signature); }));
    if (chosen.length < 3) throw new Error(`无法为 ${correct.id} 生成四个唯一答案`); return shuffle([correct].concat(chosen));
  }
  function validateData() { const problems = []; if (!Array.isArray(window.CATEGORIES) || !Array.isArray(window.WORD_BANK)) return ["找不到分类或词库数据。"]; const categories = new Set(window.CATEGORIES.map((item) => item.id)); const ids = new Set(); window.WORD_BANK.forEach((entry, index) => { ["id", "category", "zh", "ja", "reading", "en", "type"].forEach((field) => { if (typeof entry?.[field] !== "string" || !entry[field].trim()) problems.push(`第 ${index + 1} 条的 ${field} 字段无效。`); }); if (ids.has(entry.id)) problems.push(`词条 ID 重复：${entry.id}`); ids.add(entry.id); if (!categories.has(entry.category)) problems.push(`未知分类：${entry.category}`); }); return problems; }

  function currentTabFromHash() { const tab = window.location.hash.replace(/^#\/?/, "").split("/")[0]; return TABS.has(tab) ? tab : "home"; }
  function updateShell(tab, immersive = false) { document.body.classList.toggle("is-immersive", immersive); header.hidden = immersive; bottomNav.hidden = immersive; if (immersive) return; const [title, subtitle] = PAGE_META[tab]; titleEl.textContent = title; subtitleEl.textContent = subtitle; bottomNav.querySelectorAll(".nav-item").forEach((item) => item.dataset.tab === tab ? item.setAttribute("aria-current", "page") : item.removeAttribute("aria-current")); }
  function navigate(tab, replace = false) { const hash = `#/${TABS.has(tab) ? tab : "home"}`; if (window.location.hash === hash) { renderRoute(); return; } if (replace) { history.replaceState(null, "", hash); renderRoute(); } else window.location.hash = hash; }
  function renderRoute() { if (!state.lang) { renderLanguageWelcome(); return; } state.quiz = null; state.quizHistoryActive = false; state.tab = currentTabFromHash(); updateShell(state.tab); if (state.tab === "test") renderTest(); else if (state.tab === "tools") renderTools(); else if (state.tab === "me") renderMe(); else renderHome(); }

  function renderLanguageWelcome() {
    stopSpeech(); document.body.classList.add("is-onboarding"); header.hidden = true; bottomNav.hidden = true;
    view.innerHTML = `<section class="welcome page-enter" aria-labelledby="welcomeTitle"><img src="icons/icon-192.png" width="96" height="96" alt="" class="welcome-icon"><span class="eyebrow">欢迎启程</span><h1 id="welcomeTitle">先选择想学习的语言</h1><p>之后可以随时在“我的”里切换。日语和英语的学习进度会分别保存。</p><div class="welcome-options">${LANG_OPTIONS.map((item) => `<button class="language-choice" type="button" data-lang="${item.value}"><span>${item.label}</span><small>${item.helper}</small></button>`).join("")}</div></section>`;
    view.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => { saveLang(button.dataset.lang); document.body.classList.remove("is-onboarding"); navigate("home", true); })); scrollToTop();
  }
  function renderHome() {
    stopSpeech(); const stats = loadStats(); const learned = Object.values(stats.byId).filter((record) => record.attempts > 0).length; const totals = Object.values(stats.byId).reduce((sum, record) => ({ attempts: sum.attempts + record.attempts, correct: sum.correct + record.correct }), { attempts: 0, correct: 0 }); const accuracy = totals.attempts ? Math.round(totals.correct / totals.attempts * 100) : 0;
    const categories = window.CATEGORIES.map((category) => { const words = window.WORD_BANK.filter((entry) => entry.category === category.id); const count = words.filter((entry) => stats.byId[entry.id]?.attempts).length; const categoryStats = stats.byCategory[category.id]; const score = categoryStats?.attempts ? Math.round(accuracyOf(categoryStats) * 100) : null; return `<button class="category-card" type="button" data-category="${escapeHtml(category.id)}"><span class="category-icon" aria-hidden="true">${iconSvg(category.id)}</span><span class="category-copy"><strong>${escapeHtml(category.name)}</strong><small>已学习 ${count}/${words.length}${score == null ? "" : ` · 正确率 ${score}%`}</small><span class="mini-progress" aria-hidden="true"><i style="width:${Math.round(count / words.length * 100)}%"></i></span></span><span class="chevron" aria-hidden="true">›</span></button>`; }).join("");
    view.innerHTML = `<div class="home page-enter"><section class="journey-hero"><div><span class="status-pill"><i></i>${langLabel(state.lang)}学习中</span><h2>今天想去哪里？</h2><p>从熟悉的中文出发，把旅途中的每句话装进口袋。</p></div></section><section class="learning-summary" aria-label="学习概览"><div><strong>${learned}<small> / ${window.WORD_BANK.length}</small></strong><span>已学习</span></div><div><strong>${totals.attempts}</strong><span>练习次数</span></div><div><strong>${accuracy}%</strong><span>正确率</span></div></section><button class="primary-card" type="button" data-start="mixed"><span class="primary-icon" aria-hidden="true">${iconSvg("dice")}</span><span><strong>开始随机练习</strong><small>优先练习新词和薄弱内容</small></span><span aria-hidden="true">›</span></button><div class="section-heading"><div><span class="eyebrow">按场景学习</span><h2>旅行场景</h2></div><span>${window.CATEGORIES.length} 个场景</span></div><div class="category-grid">${categories}</div></div>`;
    view.querySelector("[data-start='mixed']").addEventListener("click", () => startQuiz({ kind: "mixed", direction: "forward", sourceTab: "home", trackLearning: true })); view.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => startQuiz({ kind: "category", categoryId: button.dataset.category, direction: "forward", sourceTab: "home", trackLearning: true }))); scrollToTop();
  }
  function renderTest() {
    stopSpeech(); const stats = loadStats(); const learned = window.WORD_BANK.filter((entry) => stats.byId[entry.id]?.attempts); const wrongCount = loadWrongIds().size;
    view.innerHTML = `<div class="page-enter"><section class="test-intro"><span class="eyebrow">反向回忆</span><h2>不看中文，也能认出来吗？</h2><p>题目显示${langLabel(state.lang)}，从中文选项中找出正确含义。</p><div class="test-count"><strong>${learned.length}</strong><span>个已学习词条可测试</span></div></section><div class="feature-stack"><section class="feature-card featured"><span class="feature-icon" aria-hidden="true">${iconSvg("check")}</span><div><h3>开始自测</h3><p>${learned.length ? `从已学习内容中随机抽取最多 ${QUESTION_COUNT} 题。` : "先去首页完成一些练习，再回来检验成果。"}</p></div><button class="primary-btn" type="button" data-start="self-test" ${learned.length ? "" : "disabled"}>${learned.length ? "开始测试" : "暂无可测试内容"}</button></section><section class="feature-card"><span class="feature-icon mint" aria-hidden="true">${iconSvg("review")}</span><div><h3>错题复习</h3><p>${wrongCount ? `${wrongCount} 个词条等待重新掌握。` : "目前没有错题，继续保持。"}</p></div><button class="secondary-btn" type="button" data-start="wrong" ${wrongCount ? "" : "disabled"}>复习错题${wrongCount ? `（${wrongCount}）` : ""}</button></section></div>${learned.length ? "" : '<button class="text-link-btn" type="button" data-go-home>前往首页学习</button>'}</div>`;
    view.querySelector("[data-start='self-test']")?.addEventListener("click", () => startQuiz({ kind: "self-test", direction: "reverse", sourceTab: "test", trackLearning: false })); view.querySelector("[data-start='wrong']")?.addEventListener("click", () => startQuiz({ kind: "wrong", direction: "reverse", sourceTab: "test", trackLearning: false })); view.querySelector("[data-go-home]")?.addEventListener("click", () => navigate("home")); scrollToTop();
  }
  function renderTools() { stopSpeech(); view.innerHTML = `<div class="page-enter"><section class="page-lead"><span class="eyebrow">旅途工具箱</span><h2>需要时，马上派上用场</h2><p>这里会逐步加入无需复杂设置、在旅途中可以快速打开的实用工具。</p></section><div class="preview-grid"><article class="preview-card"><span class="feature-icon coral" aria-hidden="true">${iconSvg("card")}</span><span class="coming-badge">计划中</span><h3>紧急联系卡</h3><p>制作可快速出示的个人信息与紧急联络卡。</p></article><article class="preview-card"><span class="feature-icon mint" aria-hidden="true">${iconSvg("translate")}</span><span class="coming-badge">计划中</span><h3>快捷翻译</h3><p>在旅行场景中快速输入并获取常用表达。</p></article></div></div>`; scrollToTop(); }

  function isStandalone() { return window.matchMedia?.("(display-mode: standalone)").matches === true || window.navigator.standalone === true; }
  function isAppleMobile() { const agent = String(window.navigator.userAgent || ""); return /iPhone|iPad|iPod/i.test(agent) || (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1); }
  function installPromptHtml() { if (isStandalone()) return '<p class="setting-note">已作为 App 安装在当前设备上。</p>'; if (isAppleMobile()) return '<p class="setting-note">点击浏览器分享按钮，然后选择“添加到主屏幕”。</p>'; if (deferredInstallPrompt) return '<button class="secondary-btn compact" type="button" data-install-app>安装到当前设备</button>'; return '<p class="setting-note">可通过支持 PWA 的浏览器菜单安装到设备。</p>'; }
  function bindInstallPrompt() { view.querySelector("[data-install-app]")?.addEventListener("click", async (event) => { if (!deferredInstallPrompt) return; const button = event.currentTarget; button.disabled = true; button.textContent = "正在打开…"; try { await deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; } catch (error) { console.warn("无法打开安装提示", error); } deferredInstallPrompt = null; if (state.tab === "me") renderMe(); }); }
  function renderMe() {
    stopSpeech(); view.innerHTML = `<div class="page-enter settings-page"><section class="profile-card"><img src="icons/icon-192.png" width="72" height="72" alt=""><div><span class="eyebrow">旅行单词</span><h2>${langLabel(state.lang)}学习旅程</h2><p>切换语言后，会显示对应语言的独立进度。</p></div></section><section class="settings-group" aria-labelledby="languageSetting"><div class="setting-heading"><span class="setting-icon" aria-hidden="true">${iconSvg("language")}</span><div><h3 id="languageSetting">学习语言</h3><p>日语和英语分别记录学习进度</p></div></div><div class="language-tabs" role="group" aria-label="选择学习语言">${LANG_OPTIONS.map((item) => `<button type="button" data-lang="${item.value}" aria-pressed="${state.lang === item.value}"><strong>${item.label}</strong><small>${item.helper}</small></button>`).join("")}</div></section><section class="settings-group"><div class="setting-heading"><span class="setting-icon blue" aria-hidden="true">${iconSvg("install")}</span><div><h3>安装 App</h3><p>从主屏幕更快打开并离线使用</p></div></div><div class="setting-action">${installPromptHtml()}</div></section><section class="settings-group danger-zone"><div class="setting-heading"><span class="setting-icon red" aria-hidden="true">${iconSvg("trash")}</span><div><h3>学习数据</h3><p>清除日语和英语的全部进度与错题</p></div></div><button class="danger-btn" type="button" data-reset>清除全部学习数据</button></section></div>`;
    view.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => { if (button.dataset.lang === state.lang) return; saveLang(button.dataset.lang); renderMe(); showToast(`已切换到${langLabel(state.lang)}`); })); view.querySelector("[data-reset]").addEventListener("click", resetData); bindInstallPrompt(); scrollToTop();
  }

  function quizPool(mode) { if (mode.kind === "category") return window.WORD_BANK.filter((entry) => entry.category === mode.categoryId); if (mode.kind === "self-test") { const stats = loadStats(); return window.WORD_BANK.filter((entry) => stats.byId[entry.id]?.attempts); } if (mode.kind === "wrong") { const ids = loadWrongIds(); return window.WORD_BANK.filter((entry) => ids.has(entry.id)); } return window.WORD_BANK.slice(); }
  function startQuiz(mode) {
    const pool = quizPool(mode); if (!pool.length) { showToast(mode.kind === "self-test" ? "先完成一些首页练习，再开始自测" : mode.kind === "wrong" ? "当前没有错题" : "这个场景暂时没有词条"); navigate(mode.sourceTab); return; }
    stopSpeech(); state.quiz = { mode, questions: mode.trackLearning ? selectLearningQuestions(pool, loadStats()) : shuffle(pool).slice(0, Math.min(QUESTION_COUNT, pool.length)), index: 0, score: 0, wrong: [] };
    if (!state.quizHistoryActive) { history.pushState({ quiz: true }, "", window.location.href); state.quizHistoryActive = true; } renderQuestion();
  }
  function modeTitle(mode) { if (mode.kind === "self-test") return "学习自测"; if (mode.kind === "wrong") return "错题复习"; if (mode.kind === "mixed") return "随机练习"; return categoryName(mode.categoryId); }
  function renderQuestion() {
    stopSpeech(); updateShell(state.quiz.mode.sourceTab, true); state.questionToken += 1; const token = state.questionToken; const quiz = state.quiz; const entry = quiz.questions[quiz.index]; const direction = quiz.mode.direction; let options;
    try { options = buildOptions(entry, direction); } catch (error) { renderError([error.message]); return; }
    state.answered = false; state.selectedId = null; const current = quiz.index + 1; const total = quiz.questions.length; const progress = Math.round(current / total * 100);
    const prompt = direction === "reverse" ? `<div class="foreign-prompt"><h2 id="questionText">${escapeHtml(entry[state.lang])}</h2>${audioButtonHtml(entry)}</div><p>请选择对应的中文含义</p>` : `<h2 id="questionText">${escapeHtml(entry.zh)}</h2><p>请选择对应的${langLabel(state.lang)}表达</p>`;
    const optionsHtml = options.map((option, index) => `<div class="option-row"><button class="option-choice" type="button" data-id="${escapeHtml(option.id)}" aria-pressed="false"><span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span><span class="option-text">${direction === "reverse" ? `<span class="answer-zh">${escapeHtml(option.zh)}</span>` : foreignContentHtml(option)}</span><span class="choice-state" aria-hidden="true"></span></button>${direction === "forward" ? `<div class="option-audio">${audioButtonHtml(option)}</div>` : ""}</div>`).join("");
    view.innerHTML = `<div class="quiz page-enter"><div class="quiz-top"><button class="text-btn" type="button" data-quit>退出</button><strong>${escapeHtml(modeTitle(quiz.mode))}</strong><span>${current} / ${total}</span></div><div class="progress-track" role="progressbar" aria-label="答题进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></div><section class="prompt-card" id="questionPrompt" tabindex="-1" aria-labelledby="questionText"><span class="question-meta">${escapeHtml(categoryName(entry.category))} · ${entry.type === "phrase" ? "短句" : "单词"}</span>${prompt}</section><div class="options" role="group" aria-label="答案选项">${optionsHtml}</div><div id="feedback" class="feedback" tabindex="-1" aria-live="polite" hidden></div></div><div class="quiz-actions"><button class="primary-btn" id="confirmBtn" type="button" disabled>确认答案</button></div>`;
    const confirm = view.querySelector("#confirmBtn"); view.querySelectorAll(".option-choice").forEach((button) => button.addEventListener("click", () => selectOption(button, confirm))); view.querySelector("[data-quit]").addEventListener("click", exitQuiz); confirm.addEventListener("click", () => confirmAnswer(entry, token)); bindSpeechButtons(); scrollToTop(); requestAnimationFrame(() => view.querySelector("#questionPrompt")?.focus({ preventScroll: true }));
  }
  function selectOption(button, confirm) { if (state.answered) return; view.querySelectorAll(".option-choice").forEach((item) => { item.setAttribute("aria-pressed", "false"); item.closest(".option-row").classList.remove("selected"); }); button.setAttribute("aria-pressed", "true"); button.closest(".option-row").classList.add("selected"); state.selectedId = button.dataset.id; confirm.disabled = false; }
  function confirmAnswer(entry, token) {
    if (!state.quiz || state.answered || !state.selectedId || token !== state.questionToken) return; state.answered = true; const correct = state.selectedId === entry.id; if (correct) state.quiz.score += 1; else state.quiz.wrong.push(entry); if (state.quiz.mode.trackLearning) recordLearningAnswer(entry, correct); else updateWrongBook(entry, correct);
    view.querySelectorAll(".option-choice").forEach((button) => { button.disabled = true; const row = button.closest(".option-row"); if (button.dataset.id === entry.id) { row.classList.add("correct"); row.querySelector(".choice-state").textContent = "✓"; } else if (!correct && button.dataset.id === state.selectedId) { row.classList.add("wrong"); row.querySelector(".choice-state").textContent = "×"; } }); view.querySelectorAll(".speak-btn").forEach((button) => { button.disabled = true; });
    const feedback = view.querySelector("#feedback"); feedback.hidden = false; feedback.className = `feedback ${correct ? "good" : "bad"}`; feedback.innerHTML = `<span class="feedback-icon" aria-hidden="true">${correct ? "✓" : "!"}</span><div><strong>${correct ? "回答正确" : "再看一次正确答案"}</strong><div class="feedback-answer"><span class="answer-zh">${escapeHtml(entry.zh)}</span>${foreignContentHtml(entry, true)}</div></div>`; const confirm = view.querySelector("#confirmBtn"); confirm.disabled = true; confirm.textContent = "正在播放答案…"; feedback.focus({ preventScroll: true }); void advanceAfterAnswer(entry, token);
  }
  async function advanceAfterAnswer(entry, token) { const result = await playSpeech(entry, true); if (result.playedCount) await new Promise((resolve) => setTimeout(resolve, 400)); if (!state.quiz || !state.answered || token !== state.questionToken) return; if (state.quiz.index >= state.quiz.questions.length - 1) renderResults(); else { state.quiz.index += 1; renderQuestion(); } }
  function renderResults() {
    stopSpeech(); const quiz = state.quiz; const total = quiz.questions.length; const accuracy = Math.round(quiz.score / total * 100); updateShell(quiz.mode.sourceTab); const wrongIds = loadWrongIds();
    const wrongHtml = quiz.wrong.length ? quiz.wrong.map((entry) => `<div class="wrong-item"><div><strong>${escapeHtml(entry.zh)}</strong>${foreignContentHtml(entry, true)}<small>${escapeHtml(categoryName(entry.category))}</small></div>${audioButtonHtml(entry)}</div>`).join("") : `<div class="empty-state"><span aria-hidden="true">${iconSvg("check")}</span><strong>本轮全部答对</strong><p>这段旅程走得很稳。</p></div>`;
    view.innerHTML = `<div class="results page-enter"><section class="result-card"><span class="eyebrow">本轮完成</span><div class="score-ring" style="--score:${accuracy}"><div><strong>${accuracy}%</strong><span>${quiz.score} / ${total} 正确</span></div></div><h2>${accuracy === 100 ? "完美抵达" : accuracy >= 70 ? "状态不错" : "继续积累里程"}</h2><p>${accuracy === 100 ? "所有题目都掌握了。" : "错题已经收好，随时可以回来复习。"}</p></section><section class="result-wrong"><div class="section-heading"><div><span class="eyebrow">回顾</span><h2>本轮错题</h2></div><span>错题本 ${wrongIds.size}</span></div>${wrongHtml}</section><div class="result-actions"><button class="primary-btn" type="button" data-again>再来一轮</button><button class="secondary-btn" type="button" data-wrong ${wrongIds.size ? "" : "disabled"}>复习全部错题</button><button class="text-link-btn" type="button" data-return>返回${quiz.mode.sourceTab === "test" ? "自测" : "首页"}</button></div></div>`;
    bindSpeechButtons(); view.querySelector("[data-again]").addEventListener("click", () => startQuiz(quiz.mode)); view.querySelector("[data-wrong]").addEventListener("click", () => startQuiz({ kind: "wrong", direction: "reverse", sourceTab: "test", trackLearning: false })); view.querySelector("[data-return]").addEventListener("click", () => { state.quiz = null; state.quizHistoryActive = false; navigate(quiz.mode.sourceTab); }); scrollToTop();
  }
  function exitQuiz() { const source = state.quiz?.mode.sourceTab || state.tab; stopSpeech(); state.quiz = null; if (state.quizHistoryActive) { state.quizHistoryActive = false; history.back(); setTimeout(() => { if (!state.quiz) { state.tab = source; updateShell(source); renderRoute(); } }, 80); } else navigate(source); }
  function resetData() { if (!window.confirm("确定清除日语和英语的全部学习进度与错题吗？语言选择会保留。")) return; stopSpeech(); try { localStorage.removeItem(STATS_KEY); localStorage.removeItem(WRONG_KEY); } catch (error) { console.warn("无法清除学习数据", error); } renderMe(); showToast("全部学习数据已清除"); }
  function renderError(problems) { stopSpeech(); updateShell("home"); view.innerHTML = `<section class="error-state" role="alert"><span aria-hidden="true">${iconSvg("warning")}</span><h2>词库暂时无法启程</h2><p>请检查 data.js 后刷新页面。</p><ul>${problems.slice(0, 8).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`; }
  function setupInstallPrompt() { window.addEventListener("beforeinstallprompt", (event) => { event.preventDefault(); deferredInstallPrompt = event; if (state.tab === "me") renderMe(); }); window.addEventListener("appinstalled", () => { deferredInstallPrompt = null; try { localStorage.setItem(INSTALL_HINT_KEY, "1"); } catch (error) { /* no-op */ } if (state.tab === "me") renderMe(); }); }
  function registerServiceWorker() { if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return; window.addEventListener("load", () => { navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch((error) => console.warn("Service Worker 注册失败", error)); }); }
  function init() { const problems = validateData(); if (problems.length) { renderError(problems); return; } migrateLegacyData(); state.lang = loadLang(); if (!window.location.hash) history.replaceState(null, "", "#/home"); window.addEventListener("hashchange", renderRoute); window.addEventListener("popstate", () => { if (!state.quiz) return; state.quiz = null; state.quizHistoryActive = false; renderRoute(); }); setupInstallPrompt(); registerServiceWorker(); renderRoute(); }
  init();
})();
