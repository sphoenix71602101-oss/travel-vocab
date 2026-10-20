(function () {
  window.createReadingCourse = function (config) {
  "use strict";
  const ID = config.id;
  const legacyKey = config.legacyKey;
  const languageLabel = config.languageLabel;
  const speechLabel = config.speechLabel;
  const CURRICULUM_VERSION = 2;
  const fresh = () => ({ curriculumVersion: CURRICULUM_VERSION, completedLessons: [], challengeDone: false, placementPassed: false, retryWords: [] });
  function normalizeProgress(raw) {
    if (raw?.curriculumVersion !== CURRICULUM_VERSION) return fresh();
    const lessons = (config.getData()?.stages || []).flatMap((stage) => stage.lessons);
    const ids = new Set(lessons.map((lesson) => lesson.id));
    const words = new Set((config.getData()?.challenge || []).map((item) => item.text));
    return { curriculumVersion: CURRICULUM_VERSION, completedLessons: Array.from(new Set((raw?.completedLessons || []).filter((id) => ids.has(id)))), challengeDone: raw?.challengeDone === true, placementPassed: raw?.placementPassed === true, retryWords: Array.from(new Set((raw?.retryWords || []).filter((word) => words.has(word)))) };
  }
  function getHomeSummary(progress) { const count = (config.getData()?.stages || []).flatMap((stage) => stage.lessons || []).length; if (progress.placementPassed) return "已通过认读测试"; if (progress.challengeDone) return "认读挑战已完成"; return progress.completedLessons.length ? `已完成 ${progress.completedLessons.length} / ${count} 节短课` : config.summary; }
  function validateData() {
    const stages = config.getData()?.stages;
    return !Array.isArray(stages) || stages.length !== 5 || stages.flatMap((stage) => stage.lessons || []).length !== 12 || config.getData()?.placement?.length !== 12 || config.getData()?.challenge?.length !== 6
      ? `${languageLabel}认读课程数据不完整。 ` : "";
  }
  let renderer = null;
  function createRenderer(ctx) {
    const { view, state, escapeHtml, speakerSvg: SPEAKER_SVG, currentPack, selectedDestination, navigatePath, scrollToTop, stopSpeech, shuffle, showToast, speechTimeout } = ctx;
    const loadBeginnerState = () => ({ [legacyKey]: ctx.getProgress() });
    const saveBeginnerState = (value) => ctx.saveProgress(value[legacyKey]);
    function readingBeginnerSpeaker(text, rate = "clear", label = `播放${speechLabel}发音`) {
      return `<button class="speak-btn en-beginner-speak" type="button" data-speech-text="${escapeHtml(text)}" data-speech-rate="${escapeHtml(rate)}" aria-label="${escapeHtml(label)}">${SPEAKER_SVG}</button>`;
    }
    function playReadingBeginnerSpeech(text, rate = "clear") {
      const entry = (config.getAudio() || []).find((item) => item.text === text && item.rate === rate);
      return ctx.playAudio({ text, url: entry ? `${currentPack().features.beginnerAudioBase}/${entry.id}.mp3` : null, locale: config.locale, rate: rate === "slow" ? .68 : rate === "natural" ? 1 : .84 });
    }
    function shuffleQuestionOptions(questions) {
      const offset = Math.floor(Math.random() * 3);
      const positions = shuffle(questions.map((_, index) => (index + offset) % 3));
      return questions.map((question, index) => {
        const options = shuffle(question.options.filter((option) => option !== question.answer));
        options.splice(Math.min(positions[index], options.length), 0, question.answer);
        return { ...question, options };
      });
    }
    function bindReadingBeginnerSpeakers(root = view) {
      root.querySelectorAll(".en-beginner-speak").forEach((button) => button.addEventListener("click", () => {
        void playReadingBeginnerSpeech(button.dataset.speechText, button.dataset.speechRate);
      }));
    }
    function beginnerHeader(title, subtitle) {
      const destination = selectedDestination();
      return `<header class="screen-heading beginner-heading"><button class="back-link" type="button" data-beginner-back>← 首页</button><span class="eyebrow">${escapeHtml(destination?.language || "语言")} · 零基础认读</span><h1>${escapeHtml(title)}</h1><p>${escapeHtml(subtitle)}</p></header>`;
    }
    function bindBeginnerBack() { view.querySelector("[data-beginner-back]")?.addEventListener("click", () => navigatePath("home")); }
    function readingBeginnerLessons() {
      return config.getData().stages.flatMap((stage) => stage.lessons);
    }
    function readingBeginnerLesson(id) {
      return readingBeginnerLessons().find((lesson) => lesson.id === id);
    }
    function renderReadingBeginnerRoute(route) {
      if (route.page === "placement") renderReadingPlacementIntro();
      else if (route.page === "lesson") renderReadingBeginnerLesson(route.lessonId);
      else if (route.page === "challenge") renderReadingChallengeIntro();
      else renderReadingBeginnerOverview();
    }
    function renderReadingBeginnerOverview() {
      stopSpeech();
      const progress = loadBeginnerState()[legacyKey];
      const lessons = readingBeginnerLessons();
      const next = lessons.find((lesson) => !progress.completedLessons.includes(lesson.id));
      const stages = config.getData().stages.map((stage, stageIndex) => `<section class="beginner-stage en-stage">
        <div class="section-heading"><div><span class="eyebrow">阶段 ${stageIndex + 1}</span><h2>${escapeHtml(stage.title)}</h2><p>${escapeHtml(stage.subtitle)}</p></div><span>${stage.lessons.length} 节短课</span></div>
        <div class="beginner-lesson-list">${stage.lessons.map((lesson) => `<button class="beginner-lesson-row" type="button" data-en-lesson="${escapeHtml(lesson.id)}"><span class="lesson-mark">${progress.completedLessons.includes(lesson.id) ? "✓" : String(lessons.indexOf(lesson) + 1).padStart(2, "0")}</span><span><strong>${escapeHtml(lesson.title)}</strong><small>${escapeHtml(lesson.subtitle)}</small></span><span aria-hidden="true">›</span></button>`).join("")}</div>
      </section>`).join("");
      view.innerHTML = `<div class="page-enter beginner-page en-beginner-page">${beginnerHeader("零基础认读", config.intro)} 
        <section class="beginner-intro-card en-beginner-hero"><span class="eyebrow">你的进度</span><h2>${progress.placementPassed ? "已通过认读测试" : progress.challengeDone ? `${languageLabel}认读挑战已完成` : `已完成 ${progress.completedLessons.length} / ${lessons.length} 节短课`}</h2><div class="progress-track" role="progressbar" aria-label="${languageLabel}认读课程完成进度" aria-valuemin="0" aria-valuemax="${lessons.length}" aria-valuenow="${progress.completedLessons.length}"><span style="width:${Math.round(progress.completedLessons.length / lessons.length * 100)}%"></span></div><p>课程只练文字与声音的对应关系，不要求写字、录音或接受发音评分。</p><div class="beginner-intro-actions"><button class="primary-btn" type="button" data-en-continue>${next ? "继续短课" : "查看认读挑战"}</button><button class="secondary-btn compact" type="button" data-en-placement>认读测试</button></div></section>
        ${stages}<section class="beginner-stage en-challenge-stage"><div class="section-heading"><div><span class="eyebrow">结课</span><h2>${languageLabel}认读挑战</h2></div></div><p class="beginner-stage-copy">用四个单词和两个短句，把声音线索串起来。</p><button class="secondary-btn" type="button" data-en-challenge ${next ? "disabled" : ""}>${next ? `完成 ${lessons.length} 节短课后开始` : progress.challengeDone ? "再挑战一次" : "进入挑战"}</button></section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-en-continue]").addEventListener("click", () => navigatePath(next ? `beginner/lesson/${next.id}` : "beginner/challenge"));
      view.querySelector("[data-en-placement]").addEventListener("click", () => navigatePath("beginner/placement"));
      view.querySelector("[data-en-challenge]")?.addEventListener("click", () => navigatePath("beginner/challenge"));
      view.querySelectorAll("[data-en-lesson]").forEach((button) => button.addEventListener("click", () => navigatePath(`beginner/lesson/${button.dataset.enLesson}`)));
      scrollToTop();
    }
    function renderReadingPlacementIntro() {
      stopSpeech();
      view.innerHTML = `<div class="page-enter beginner-page en-beginner-page">${beginnerHeader(`${languageLabel}认读测试`, "已有基础？用 12 道题检查声音、拼读、重音和真实听感。")}
        <section class="beginner-intro-card"><span class="eyebrow">只用来推荐路线</span><h2>先听、再看、再判断</h2><p>答对至少 10 题，且四类题目都有正确答案，即可跳过短课。结果不会限制旅行场景，也不会替你完成课程。</p><button class="primary-btn" type="button" data-start-en-placement>开始测试</button></section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-start-en-placement]").addEventListener("click", () => {
        state.beginnerSession = { kind: "en-placement", index: 0, answers: [], questions: shuffleQuestionOptions(config.getData().placement) };
        renderReadingPlacementQuestion();
      });
      scrollToTop();
    }
    function renderReadingPlacementQuestion() {
      stopSpeech();
      const session = state.beginnerSession;
      if (!session || session.kind !== "en-placement") { navigatePath("beginner/placement", true); return; }
      const question = session.questions[session.index];
      const audio = question.audio ? `<div class="beginner-question-audio">${readingBeginnerSpeaker(question.audio.text, question.audio.rate || "clear", `播放题目${speechLabel}发音`)}<span>点击听音，可重复播放</span></div>` : "";
      view.innerHTML = `<div class="page-enter beginner-page en-beginner-page">${beginnerHeader(`${languageLabel}认读测试`, `第 ${session.index + 1} / ${session.questions.length} 题 · ${question.category}`)}
        <div class="progress-track"><span style="width:${Math.round((session.index + 1) / session.questions.length * 100)}%"></span></div>
        <section class="beginner-question-card"><span class="eyebrow">${escapeHtml(question.category)}</span><h2>${escapeHtml(question.prompt)}</h2>${audio}<div class="beginner-options">${question.options.map((option) => `<button class="beginner-option" type="button" data-en-placement-option="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}</div></section></div>`;
      bindBeginnerBack(); bindReadingBeginnerSpeakers();
      view.querySelectorAll("[data-en-placement-option]").forEach((button) => button.addEventListener("click", () => {
        session.answers.push({ category: question.category, correct: button.dataset.enPlacementOption === question.answer });
        if (session.index === session.questions.length - 1) renderReadingPlacementResult();
        else { session.index += 1; renderReadingPlacementQuestion(); }
      }));
      scrollToTop();
    }
    function renderReadingPlacementResult() {
      stopSpeech();
      const session = state.beginnerSession;
      const score = session.answers.filter((answer) => answer.correct).length;
      const categories = ["声音辨识", "拼读规律", "音节与重音", "真实听感"];
      const passed = score >= 10 && categories.every((category) => session.answers.some((answer) => answer.category === category && answer.correct));
      if (passed) { const beginner = loadBeginnerState(); beginner[legacyKey].placementPassed = true; saveBeginnerState(beginner); }
      view.innerHTML = `<div class="page-enter beginner-page en-beginner-page">${beginnerHeader("测试结果", "这次测试只帮助你选择更合适的学习路线。")}
        <section class="beginner-intro-card"><span class="beginner-score">${score} / 12</span><h2>${passed ? `你已经具备${languageLabel}基础认读能力` : "建议从短课练起"}</h2><p>${passed ? "可以跳过认读短课；课程仍然可以随时练习。" : "还有一些声音线索不够熟悉，可以从短课开始。"}</p><div class="beginner-intro-actions"><button class="primary-btn" type="button" data-en-result-home>返回首页</button><button class="secondary-btn compact" type="button" data-en-result-lessons>${passed ? "仍想练习" : "开始短课"}</button></div></section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-en-result-home]").addEventListener("click", () => navigatePath("home"));
      view.querySelector("[data-en-result-lessons]").addEventListener("click", () => navigatePath("beginner"));
      scrollToTop();
    }
    function renderReadingWordRows(items) {
      return `<div class="en-word-list">${items.map((item) => `<div class="en-word-row"><span class="en-word-copy">${item.label ? `<small>${escapeHtml(item.label)}</small>` : ""}<strong>${escapeHtml(item.text)}</strong><i>${escapeHtml(item.ipa)}</i><em>${escapeHtml(item.meaning)}</em></span>${readingBeginnerSpeaker(item.speech || item.text, "clear", `播放${item.text}的${speechLabel}发音`)}</div>`).join("")}</div>`;
    }
    function renderReadingLessonCard(card, revealed) {
      if (card.type === "concept") return `<section class="en-lesson-card en-concept-card"><span class="en-card-index" aria-hidden="true">Aa</span><span class="eyebrow">先理解</span><h2>${escapeHtml(card.title)}</h2><p>${escapeHtml(card.body)}</p></section>`;
      if (card.type === "words") return `<section class="en-lesson-card"><span class="eyebrow">看词听音</span><h2>${escapeHtml(card.title)}</h2>${renderReadingWordRows(card.items)}</section>`;
      if (card.type === "syllables") return `<section class="en-lesson-card"><span class="eyebrow">音节轨道</span><h2>${escapeHtml(card.title)}</h2><p class="en-card-note">圆点只用于辅助读音，正式书写仍使用完整单词。</p><div class="en-pattern-list">${card.items.map((item) => `<div class="en-pattern-row"><div><strong>${escapeHtml(item.text)}</strong><span class="en-chunks">${item.chunks.map((chunk) => `<b>${escapeHtml(chunk)}</b>`).join('<i aria-hidden="true">·</i>')}</span><small>${escapeHtml(item.ipa)} · ${escapeHtml(item.meaning)}</small></div>${readingBeginnerSpeaker(item.text, "clear", `播放${item.text}的${speechLabel}发音`)}</div>`).join("")}</div></section>`;
      if (card.type === "stress") return `<section class="en-lesson-card"><span class="eyebrow">重音轨道</span><h2>${escapeHtml(card.title)}</h2><div class="en-pattern-list">${card.items.map((item) => `<div class="en-pattern-row"><div><strong class="en-stress-word">${item.segments.map((segment) => segment.stress ? `<mark>${escapeHtml(segment.text)}</mark>` : escapeHtml(segment.text)).join("")}</strong><small>${escapeHtml(item.ipa)} · ${escapeHtml(item.meaning)}</small></div>${readingBeginnerSpeaker(item.text, "clear", `播放${item.text}的${speechLabel}发音`)}</div>`).join("")}</div></section>`;
      if (card.type === "phrases") return `<section class="en-lesson-card"><span class="eyebrow">真实听感</span><h2>${escapeHtml(card.title)}</h2><div class="en-phrase-list">${card.items.map((item) => `<article><strong>${escapeHtml(item.text)}</strong><span>${escapeHtml(item.meaning)}</span><div><span>${readingBeginnerSpeaker(item.text, "slow", `慢速播放${item.text}`)}<small>慢速</small></span><span>${readingBeginnerSpeaker(item.text, "natural", `自然语速播放${item.text}`)}<small>自然</small></span></div></article>`).join("")}</div></section>`;
      if (card.type === "try-first") return `<section class="en-lesson-card en-try-card"><span class="eyebrow">Try First · 自己先读</span><h2>${escapeHtml(card.text)}</h2><p>${escapeHtml(card.meaning)}</p><span class="en-try-note">${escapeHtml(card.note)}</span>${revealed ? `<div class="en-reveal"><strong>${escapeHtml(card.ipa)}</strong><div>${card.dualSpeed ? `<span>${readingBeginnerSpeaker(card.text, "slow", `慢速播放${card.text}`)}<small>慢速</small></span><span>${readingBeginnerSpeaker(card.text, "natural", `自然语速播放${card.text}`)}<small>自然</small></span>` : readingBeginnerSpeaker(card.text, "clear", `播放${card.text}的正确发音`)}</div></div>` : `<button class="primary-btn" type="button" data-en-reveal>我先试读了</button>`}</section>`;
      return "";
    }
    function renderReadingBeginnerLesson(lessonId) {
      const lesson = readingBeginnerLesson(lessonId);
      if (!lesson) { navigatePath("beginner", true); return; }
      if (state.beginnerSession?.kind !== "en-lesson" || state.beginnerSession.lessonId !== lessonId) {
        state.beginnerSession = { kind: "en-lesson", lessonId, stepIndex: 0, revealedSteps: [], answer: null };
      }
      renderReadingLessonStep();
    }
    function renderReadingLessonStep() {
      stopSpeech();
      const session = state.beginnerSession;
      const lesson = readingBeginnerLesson(session?.lessonId);
      if (!lesson) { navigatePath("beginner", true); return; }
      const lessonIndex = readingBeginnerLessons().findIndex((item) => item.id === lesson.id) + 1;
      const steps = [...lesson.cards.map((card) => ({ kind: "card", value: card })), ...lesson.practice.map((question) => ({ kind: "practice", value: question }))];
      const step = steps[session.stepIndex];
      const progress = Math.round((session.stepIndex + 1) / steps.length * 100);
      const isPractice = step.kind === "practice";
      let content = "";
      if (!isPractice) {
        content = renderReadingLessonCard(step.value, session.revealedSteps.includes(session.stepIndex));
      } else {
        const question = step.value;
        const audio = question.audio ? `<div class="beginner-question-audio">${readingBeginnerSpeaker(question.audio.text, question.audio.rate || "clear", `播放练习题${speechLabel}发音`)}<span>点击听音，可重复播放</span></div>` : "";
        content = `<section class="beginner-question-card en-practice-card"><span class="eyebrow">轻量练习 ${session.stepIndex - lesson.cards.length + 1} / ${lesson.practice.length}</span><h2>${escapeHtml(question.prompt)}</h2>${audio}<div class="beginner-options">${question.options.map((option) => `<button class="beginner-option${session.answer ? option === question.answer ? " correct" : option === session.answer ? " wrong" : "" : ""}" type="button" data-en-answer="${escapeHtml(option)}" ${session.answer ? "disabled" : ""}>${escapeHtml(option)}</button>`).join("")}</div>${session.answer ? `<div class="en-answer-feedback ${session.answer === question.answer ? "good" : "retry"}" role="status"><strong>${session.answer === question.answer ? "答对了" : `正确答案：${escapeHtml(question.answer)}`}</strong><p>${escapeHtml(question.explanation)}</p></div>` : ""}</section>`;
      }
      const canAdvance = isPractice
        ? Boolean(session.answer)
        : step.value.type !== "try-first" || session.revealedSteps.includes(session.stepIndex);
      view.innerHTML = `<div class="page-enter beginner-page en-beginner-page en-lesson-flow">${beginnerHeader(lesson.title, `短课 ${lessonIndex} / ${readingBeginnerLessons().length} · ${lesson.subtitle}`)}<div class="en-step-meta"><span>第 ${session.stepIndex + 1} / ${steps.length} 项</span><div class="progress-track"><span style="width:${progress}%"></span></div></div>${content}<div class="en-step-actions"><button class="secondary-btn compact" type="button" data-en-step-prev ${session.stepIndex === 0 ? "disabled" : ""}>上一项</button>${canAdvance ? `<button class="primary-btn" type="button" data-en-step-next>${session.stepIndex === steps.length - 1 ? "完成本课" : "下一项"}</button>` : '<span aria-hidden="true"></span>'}</div></div>`;
      bindBeginnerBack(); bindReadingBeginnerSpeakers();
      view.querySelector("[data-en-reveal]")?.addEventListener("click", () => { session.revealedSteps.push(session.stepIndex); renderReadingLessonStep(); });
      view.querySelector("[data-en-step-prev]")?.addEventListener("click", () => { session.stepIndex -= 1; session.answer = null; renderReadingLessonStep(); });
      view.querySelectorAll("[data-en-answer]").forEach((button) => button.addEventListener("click", () => { session.answer = button.dataset.enAnswer; renderReadingLessonStep(); }));
      view.querySelector("[data-en-step-next]")?.addEventListener("click", () => {
        if (session.stepIndex === steps.length - 1) finishReadingBeginnerLesson();
        else { session.stepIndex += 1; session.answer = null; renderReadingLessonStep(); }
      });
      scrollToTop();
    }
    function finishReadingBeginnerLesson() {
      const lessonId = state.beginnerSession.lessonId;
      const beginner = loadBeginnerState();
      if (!beginner[legacyKey].completedLessons.includes(lessonId)) beginner[legacyKey].completedLessons.push(lessonId);
      saveBeginnerState(beginner);
      const next = readingBeginnerLessons().find((lesson) => !beginner[legacyKey].completedLessons.includes(lesson.id));
      navigatePath(next ? `beginner/lesson/${next.id}` : "beginner/challenge");
    }
    function renderReadingChallengeIntro() {
      stopSpeech();
      const beginner = loadBeginnerState()[legacyKey];
      const unfinished = readingBeginnerLessons().find((lesson) => !beginner.completedLessons.includes(lesson.id));
      if (unfinished) { navigatePath("beginner", true); return; }
      view.innerHTML = `<div class="page-enter beginner-page en-beginner-page">${beginnerHeader(`${languageLabel}认读挑战`, `四个单词和两个短句：先自己读，再听${speechLabel}核对。`)}
        <section class="beginner-intro-card"><span class="eyebrow">结课挑战</span><h2>${beginner.challengeDone ? "再挑战一次" : `你已经走完 ${readingBeginnerLessons().length} 节短课`}</h2><p>没有麦克风评分，也没有及格线。遇到不熟悉的内容，可以标记为“再练一次”。</p><button class="primary-btn" type="button" data-start-en-challenge>开始挑战</button></section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-start-en-challenge]").addEventListener("click", () => { state.beginnerSession = { kind: "en-challenge", index: 0, retries: [] }; renderReadingChallengeItem(); });
      scrollToTop();
    }
    function renderReadingChallengeItem(ready = false, played = false) {
      stopSpeech();
      const session = state.beginnerSession;
      const item = config.getData().challenge[session.index];
      view.innerHTML = `<div class="page-enter beginner-page en-beginner-page">${beginnerHeader(`${languageLabel}结课认读挑战`, `第 ${session.index + 1} / ${config.getData().challenge.length} 项`)}
        <section class="beginner-question-card beginner-self-check en-challenge-card"><span class="eyebrow">先看文字试读</span><h2>${escapeHtml(item.text)}</h2><p>${escapeHtml(item.meaning)}</p>${ready ? `<strong class="en-challenge-ipa">${escapeHtml(item.ipa)}</strong><div class="beginner-question-audio">${readingBeginnerSpeaker(item.text, "clear", `播放${item.text}的正确发音`)}<span>听正确发音核对</span></div>` : `<button class="primary-btn" type="button" data-en-read-first>我先自己读了</button>`}${played ? `<p>和你刚才读的一样吗？</p><div class="beginner-intro-actions"><button class="primary-btn" type="button" data-en-challenge-result="right">我读对了</button><button class="secondary-btn compact" type="button" data-en-challenge-result="retry">再练一次</button></div>` : ""}</section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-en-read-first]")?.addEventListener("click", () => renderReadingChallengeItem(true));
      view.querySelector(".en-beginner-speak")?.addEventListener("click", async (event) => {
        const button = event.currentTarget;
        button.disabled = true;
        const result = await playReadingBeginnerSpeech(button.dataset.speechText, button.dataset.speechRate);
        if (!button.isConnected || state.beginnerSession !== session) return;
        if (result.status === "played") renderReadingChallengeItem(true, true);
        else button.disabled = false;
      });
      view.querySelectorAll("[data-en-challenge-result]").forEach((button) => button.addEventListener("click", () => {
        if (button.dataset.enChallengeResult === "retry") session.retries.push(item.text);
        if (session.index === config.getData().challenge.length - 1) renderReadingChallengeResult();
        else { session.index += 1; renderReadingChallengeItem(); }
      }));
      scrollToTop();
    }
    function renderReadingChallengeResult() {
      stopSpeech();
      const session = state.beginnerSession;
      const beginner = loadBeginnerState();
      beginner[legacyKey].challengeDone = true;
      beginner[legacyKey].retryWords = Array.from(new Set(session.retries));
      saveBeginnerState(beginner);
      view.innerHTML = `<div class="page-enter beginner-page en-beginner-page">${beginnerHeader(`${languageLabel}基础入门完成`, `你已经知道怎样看词、找线索，并尝试读出旅行${languageLabel}。`)}
        <section class="beginner-intro-card"><span class="beginner-score">✓</span><h2>接下来，去学习真正会用到的旅行${languageLabel}</h2><p>${session.retries.length ? `有 ${session.retries.length} 项想再练一次，随时可以重做挑战。` : "六项内容都已核对，可以继续学习场景词汇和短句。"}</p><div class="beginner-intro-actions"><button class="primary-btn" type="button" data-en-finish-home>开始学习旅行${languageLabel}</button><button class="secondary-btn compact" type="button" data-en-finish-overview>查看短课</button></div></section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-en-finish-home]").addEventListener("click", () => navigatePath("home"));
      view.querySelector("[data-en-finish-overview]").addEventListener("click", () => navigatePath("beginner"));
      scrollToTop();
    }
    
    
    return { renderRoute(route) { if (route.page === "placement") renderReadingPlacementIntro(); else if (route.page === "lesson") renderReadingBeginnerLesson(route.lessonId); else if (route.page === "challenge") renderReadingChallengeIntro(); else renderReadingBeginnerOverview(); }, stop() {} };
  }
  return { id: ID, legacyKey, createProgress: fresh, normalizeProgress, getHomeSummary, validateData, renderRoute(route, context) { renderer ||= createRenderer(context); renderer.renderRoute(route); }, stop() { renderer?.stop(); } };
  };
}());
