(function () {
  "use strict";
  const ID = "kr-ko-beginner";
  const CURRICULUM_VERSION = 2;
  const fresh = () => ({ curriculumVersion: CURRICULUM_VERSION, completedLessons: [], challengeDone: false, placementPassed: false, retryWords: [] });
  const lessons = () => (window.KO_BEGINNER_DATA?.stages || []).flatMap((stage) => stage.lessons || []);
  function normalizeProgress(raw) {
    if (raw?.curriculumVersion !== CURRICULUM_VERSION) return fresh();
    const validLessons = new Set(lessons().map((item) => item.id));
    const validWords = new Set((window.KO_BEGINNER_DATA?.challenge || []).map((item) => item.text));
    return {
      curriculumVersion: CURRICULUM_VERSION,
      completedLessons: Array.from(new Set((raw?.completedLessons || []).filter((id) => validLessons.has(id)))),
      challengeDone: raw?.challengeDone === true,
      placementPassed: raw?.placementPassed === true,
      retryWords: Array.from(new Set((raw?.retryWords || []).filter((word) => validWords.has(word))))
    };
  }
  function getHomeSummary(progress) {
    if (progress.placementPassed) return "已通过韩文认读测试";
    if (progress.challengeDone) return "韩文认读挑战已完成";
    return progress.completedLessons.length ? `已完成 ${progress.completedLessons.length} / ${lessons().length} 节短课` : "从韩文方块开始，尝试读出韩语";
  }
  function createProgress() { return fresh(); }
  let renderer = null;

  function createRenderer(ctx) {
    const { view, escapeHtml, speakerSvg, navigatePath, scrollToTop, playSpeech, shuffle, showToast } = ctx;
    let placementSession = null;
    let challengeIndex = 0;
    const progress = () => normalizeProgress(ctx.getProgress());
    const save = (value) => ctx.saveProgress(normalizeProgress(value));
    const audioById = () => new Map((window.KO_BEGINNER_AUDIO || []).map((item) => [item.id, item]));
    const speakButton = (item, label = "播放韩语发音") => `<button class="speak-btn" type="button" data-ko-audio="${escapeHtml(item.audioId)}" aria-label="${escapeHtml(label)}">${speakerSvg}</button>`;
    function bindAudio(root = view) {
      root.querySelectorAll("[data-ko-audio]").forEach((button) => button.addEventListener("click", () => {
        const item = audioById().get(button.dataset.koAudio);
        if (!item) { showToast("这段教学音尚未配置"); return; }
        void playSpeech({ id: item.id, text: item.text, audioPath: `audio/ko/beginner/${item.id}.mp3` });
      }));
    }
    const header = (title, subtitle) => `<header class="screen-heading beginner-heading"><button class="back-link" type="button" data-ko-back>← 首页</button><span class="eyebrow">韩语 · 韩文认读</span><h1>${escapeHtml(title)}</h1><p>${escapeHtml(subtitle)}</p></header>`;
    function bindBack() { view.querySelector("[data-ko-back]")?.addEventListener("click", () => navigatePath("home")); }

    function renderOverview() {
      const current = progress();
      const all = lessons();
      const next = all.find((item) => !current.completedLessons.includes(item.id));
      const stages = window.KO_BEGINNER_DATA.stages.map((stage) => `<section class="beginner-stage"><div class="section-heading"><div><span class="eyebrow">${escapeHtml(stage.subtitle)}</span><h2>${escapeHtml(stage.title)}</h2></div></div><div class="beginner-lesson-list">${stage.lessons.map((lesson) => `<button class="beginner-lesson-row" type="button" data-ko-lesson="${lesson.id}"><span class="lesson-mark">${current.completedLessons.includes(lesson.id) ? "✓" : "○"}</span><span><strong>${escapeHtml(lesson.title)}</strong><small>${escapeHtml(lesson.subtitle)}</small></span><span aria-hidden="true">›</span></button>`).join("")}</div></section>`).join("");
      view.innerHTML = `<div class="page-enter beginner-page">${header("从韩文方块开始", `${all.length} 节短课带你从字母组合走到单词和短句认读。`)}
        <section class="beginner-intro-card"><span class="eyebrow">你的进度</span><h2>${current.placementPassed ? "已通过认读测试" : current.challengeDone ? "认读挑战已完成" : `已完成 ${current.completedLessons.length} / ${all.length} 节短课`}</h2><p>罗马字只是可展开的过渡扶手；课程始终先显示韩文。</p><div class="beginner-intro-actions"><button class="primary-btn" type="button" data-ko-start>${next ? "继续短课" : "进入认读挑战"}</button><button class="secondary-btn compact" type="button" data-ko-placement>认读测试</button></div></section>
        ${stages}<section class="beginner-stage"><div class="section-heading"><div><span class="eyebrow">完成短课后</span><h2>结课认读挑战</h2></div></div><p class="beginner-stage-copy">先自己读韩文，再听音并展开罗马字核对。</p><button class="secondary-btn" type="button" data-ko-challenge ${next ? "disabled" : ""}>${next ? "完成短课后开始" : "进入挑战"}</button></section></div>`;
      bindBack();
      view.querySelector("[data-ko-start]").addEventListener("click", () => navigatePath(next ? `beginner/lesson/${next.id}` : "beginner/challenge"));
      view.querySelector("[data-ko-placement]").addEventListener("click", () => navigatePath("beginner/placement"));
      view.querySelector("[data-ko-challenge]")?.addEventListener("click", () => navigatePath("beginner/challenge"));
      view.querySelectorAll("[data-ko-lesson]").forEach((button) => button.addEventListener("click", () => navigatePath(`beginner/lesson/${button.dataset.koLesson}`)));
      scrollToTop();
    }

    function renderLesson(id) {
      const lesson = lessons().find((item) => item.id === id);
      if (!lesson) { navigatePath("beginner", true); return; }
      const current = progress();
      const index = lessons().findIndex((item) => item.id === id);
      view.innerHTML = `<div class="page-enter beginner-page">${header(lesson.title, lesson.subtitle)}<section class="beginner-intro-card"><span class="eyebrow">第 ${index + 1} / ${lessons().length} 课</span><p>${escapeHtml(lesson.note)}</p></section>
        <section class="beginner-stage"><div class="beginner-sound-grid">${lesson.items.map((item) => `<article class="beginner-sound-card"><div class="beginner-sound-head"><strong lang="ko">${escapeHtml(item.text)}</strong>${speakButton(item)}</div>${item.parts ? `<span>${escapeHtml(item.parts)}</span>` : ""}<p>${escapeHtml(item.pronunciation)}</p><small>${escapeHtml(item.meaning)}</small></article>`).join("")}</div></section>
        <section class="beginner-stage ko-practice-card" data-ko-practice><span class="eyebrow">马上试一题</span><h2>${escapeHtml(lesson.practice.prompt)}</h2><div class="beginner-options">${shuffle(lesson.practice.options).map((option) => `<button class="beginner-option" type="button" data-ko-option="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}</div><div class="feedback" data-ko-feedback hidden></div></section></div>`;
      bindBack(); bindAudio();
      view.querySelectorAll("[data-ko-option]").forEach((button) => button.addEventListener("click", () => {
        const correct = button.dataset.koOption === lesson.practice.answer;
        view.querySelectorAll("[data-ko-option]").forEach((item) => { item.disabled = true; item.classList.toggle("correct", item.dataset.koOption === lesson.practice.answer); });
        const feedback = view.querySelector("[data-ko-feedback]");
        feedback.hidden = false;
        feedback.innerHTML = `<strong>${correct ? "答对了" : "再看一次正确答案"}</strong><p>${escapeHtml(lesson.practice.explanation)}</p><button class="primary-btn" type="button" data-ko-next>${index === lessons().length - 1 ? "查看课程总览" : "下一课"}</button>`;
        if (correct && !current.completedLessons.includes(id)) { current.completedLessons.push(id); save(current); }
        feedback.querySelector("[data-ko-next]").addEventListener("click", () => navigatePath(index === lessons().length - 1 ? "beginner" : `beginner/lesson/${lessons()[index + 1].id}`));
      }));
      scrollToTop();
    }

    function renderPlacement() {
      const questions = window.KO_BEGINNER_DATA.placement;
      if (!placementSession) {
        view.innerHTML = `<div class="page-enter beginner-page">${header("韩文认读测试", "12 道题检查音节结构、基础音、收音音变和连续认读。")} 
          <section class="beginner-intro-card"><h2>有一点基础？先试试看</h2><p>至少答对 10 题，并在四类能力中都有正确答案即可跳过短课。没有通过也不影响使用旅行场景。</p><button class="primary-btn" type="button" data-ko-placement-start>开始测试</button></section></div>`;
        bindBack();
        view.querySelector("[data-ko-placement-start]").addEventListener("click", () => { placementSession = { questions: shuffle(questions), index: 0, score: 0, categories: new Set() }; renderPlacement(); });
        scrollToTop(); return;
      }
      if (placementSession.index >= placementSession.questions.length) {
        const passed = placementSession.score >= 10 && placementSession.categories.size === 4;
        const current = progress();
        if (passed) { current.placementPassed = true; current.completedLessons = lessons().map((item) => item.id); save(current); }
        const score = placementSession.score; placementSession = null;
        view.innerHTML = `<div class="page-enter beginner-page">${header("测试完成", passed ? "你已经可以直接尝试旅行韩文。" : "从短课开始，会读得更稳。")}
          <section class="beginner-intro-card"><span class="eyebrow">本次成绩</span><h2>${score} / 12</h2><p>${passed ? "四类能力均已覆盖，短课已标记完成。" : "目标是答对至少 10 题，并覆盖四类能力。"}</p><button class="primary-btn" type="button" data-ko-overview>返回课程</button></section></div>`;
        bindBack(); view.querySelector("[data-ko-overview]").addEventListener("click", () => navigatePath("beginner")); scrollToTop(); return;
      }
      const question = placementSession.questions[placementSession.index];
      view.innerHTML = `<div class="page-enter beginner-page">${header("韩文认读测试", `${placementSession.index + 1} / ${questions.length} · ${question.category}`)}<section class="beginner-stage ko-practice-card"><h2>${escapeHtml(question.prompt)}</h2><div class="beginner-options">${shuffle(question.options).map((option) => `<button class="beginner-option" type="button" data-ko-test-option="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}</div></section></div>`;
      bindBack();
      view.querySelectorAll("[data-ko-test-option]").forEach((button) => button.addEventListener("click", () => { if (button.dataset.koTestOption === question.answer) { placementSession.score += 1; placementSession.categories.add(question.category); } placementSession.index += 1; renderPlacement(); }));
      scrollToTop();
    }

    function renderChallenge() {
      const items = window.KO_BEGINNER_DATA.challenge;
      const item = items[challengeIndex];
      if (!item) {
        const current = progress(); current.challengeDone = true; current.retryWords = []; save(current); challengeIndex = 0;
        view.innerHTML = `<div class="page-enter beginner-page">${header("挑战完成", "你已经读完四个单词和两个短句。")} 
          <section class="beginner-intro-card"><h2>下一站：真实旅行场景</h2><p>罗马字可以继续辅助你，但请优先看韩文并多听整词发音。</p><button class="primary-btn" type="button" data-ko-finish>返回课程</button></section></div>`;
        bindBack(); view.querySelector("[data-ko-finish]").addEventListener("click", () => navigatePath("beginner")); scrollToTop(); return;
      }
      view.innerHTML = `<div class="page-enter beginner-page">${header("结课认读挑战", `${challengeIndex + 1} / ${items.length} · 先自己读，再核对`)}<section class="beginner-intro-card"><span class="eyebrow">先读韩文</span><h2 lang="ko">${escapeHtml(item.text)}</h2><div data-ko-reveal hidden><p class="recognition-reading">${escapeHtml(item.pronunciation)}</p><strong>${escapeHtml(item.zh)}</strong></div><div class="beginner-intro-actions"><button class="secondary-btn" type="button" data-ko-show>展开读音</button>${speakButton(item)}</div></section><button class="primary-btn" type="button" data-ko-challenge-next>我核对好了</button></div>`;
      bindBack(); bindAudio();
      view.querySelector("[data-ko-show]").addEventListener("click", (event) => { view.querySelector("[data-ko-reveal]").hidden = false; event.currentTarget.disabled = true; });
      view.querySelector("[data-ko-challenge-next]").addEventListener("click", () => { challengeIndex += 1; renderChallenge(); });
      scrollToTop();
    }

    return { renderOverview, renderLesson, renderPlacement, renderChallenge };
  }

  window.registerBeginnerModule({
    id: ID,
    createProgress,
    normalizeProgress,
    getHomeSummary,
    renderRoute(route, ctx) {
      if (!window.KO_BEGINNER_DATA || window.KO_BEGINNER_DATA.stages?.length !== 5 || lessons().length !== 15 || window.KO_BEGINNER_DATA.placement?.length !== 12 || window.KO_BEGINNER_DATA.challenge?.length !== 6) {
        ctx.view.innerHTML = '<div class="empty-state"><strong>韩语认读课程数据不完整</strong><p>请刷新页面后重试。</p></div>'; return;
      }
      renderer ||= createRenderer(ctx);
      if (route.page === "lesson") renderer.renderLesson(route.lessonId);
      else if (route.page === "placement") renderer.renderPlacement();
      else if (route.page === "challenge") renderer.renderChallenge();
      else renderer.renderOverview();
    }
  });
}());
