(function () {
  "use strict";
  const ID = "jp-ja-beginner";
  const legacyKey = "ja";
  const fresh = () => ({ completedLessons: [], challengeDone: false, placementPassed: false, retryWords: [] });
  function normalizeProgress(raw) {
    const lessons = [...(window.BEGINNER_DATA?.rows || []), ...(window.BEGINNER_DATA?.rules || [])];
    const ids = new Set(lessons.map((lesson) => lesson.id));
    const words = new Set((window.BEGINNER_DATA?.challenge || []).map((item) => item.text));
    return { completedLessons: Array.from(new Set((raw?.completedLessons || []).filter((id) => ids.has(id)))), challengeDone: raw?.challengeDone === true, placementPassed: raw?.placementPassed === true, retryWords: Array.from(new Set((raw?.retryWords || []).filter((word) => words.has(word)))) };
  }
  function getHomeSummary(progress) { return progress.placementPassed ? "已通过认读测试" : progress.challengeDone ? "认读挑战已完成" : "从假名开始，读出旅行日语"; }
  function validateData() {
    return !window.BEGINNER_DATA || window.BEGINNER_DATA.rows?.length !== 11 || window.BEGINNER_DATA.rules?.length !== 7 || window.BEGINNER_DATA.placement?.length !== 12
      ? "日语认读课程数据不完整。 " : "";
  }
  let renderer = null;
  function createRenderer(ctx) {
    const { view, state, escapeHtml, speakerSvg: SPEAKER_SVG, currentPack, selectedDestination, navigatePath, scrollToTop, stopSpeech, playSpeech, shuffle, showToast } = ctx;
    const loadBeginnerState = () => ({ ja: ctx.getProgress() });
    const saveBeginnerState = (value) => ctx.saveProgress(value.ja);
    function beginnerLessons() { return [...window.BEGINNER_DATA.rows, ...window.BEGINNER_DATA.rules]; }
    function beginnerLesson(id) { return beginnerLessons().find((lesson) => lesson.id === id); }
    function beginnerAudioEntry(text, audioId) {
      const id = audioId || `beginner/kana-${text.codePointAt(0).toString(16).padStart(4, "0")}`;
      return { id, text, audioPath: `${currentPack().features.beginnerAudioBase}/${id}.mp3` };
    }
    function beginnerSpeaker(text, audioId, label = "播放发音") {
      return `<button class="speak-btn beginner-speak" type="button" data-audio-text="${escapeHtml(text)}" data-audio-id="${escapeHtml(audioId || "")}" aria-label="${escapeHtml(label)}">${SPEAKER_SVG}</button>`;
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
    function bindBeginnerSpeakers(root = view) {
      root.querySelectorAll(".beginner-speak").forEach((button) => button.addEventListener("click", () => {
        void playSpeech(beginnerAudioEntry(button.dataset.audioText, button.dataset.audioId));
      }));
    }
    function beginnerHeader(title, subtitle) {
      const destination = selectedDestination();
      return `<header class="screen-heading beginner-heading"><button class="back-link" type="button" data-beginner-back>← 首页</button><span class="eyebrow">${escapeHtml(destination?.language || "语言")} · 旅行认读</span><h1>${escapeHtml(title)}</h1><p>${escapeHtml(subtitle)}</p></header>`;
    }
    function bindBeginnerBack() { view.querySelector("[data-beginner-back]")?.addEventListener("click", () => navigatePath("home")); }
    function renderBeginnerPlaceholder() {
      stopSpeech();
      const destination = selectedDestination();
      view.innerHTML = `<div class="page-enter beginner-page">${beginnerHeader("课程筹备中", `${destination.country} · ${destination.language}的旅行认读内容正在准备。`)}
        <section class="beginner-intro-card"><strong>先从旅行场景开始</strong><p>你可以照常学习当前目的地的八大场景。认读课程上线后，这里会成为入口。</p><button class="primary-btn" type="button" data-go-scenes>返回首页选场景</button></section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-go-scenes]").addEventListener("click", () => navigatePath("home"));
      scrollToTop();
    }
    function renderBeginnerOverview() {
      stopSpeech();
      const beginner = loadBeginnerState().ja;
      const lessons = beginnerLessons();
      const next = lessons.find((lesson) => !beginner.completedLessons.includes(lesson.id));
      const count = beginner.completedLessons.length;
      const sections = [window.BEGINNER_DATA.rows, window.BEGINNER_DATA.rules].map((group, index) => `<section class="beginner-stage"><div class="section-heading"><div><span class="eyebrow">阶段 ${index + 1}</span><h2>${index ? "拼读规则" : "认识基础假名"}</h2></div><span>${group.length} 节短课</span></div>
        <div class="beginner-lesson-list">${group.map((lesson) => `<button class="beginner-lesson-row" type="button" data-lesson="${lesson.id}"><span class="lesson-mark">${beginner.completedLessons.includes(lesson.id) ? "✓" : "○"}</span><span><strong>${escapeHtml(lesson.title)}</strong><small>${index ? escapeHtml(lesson.note) : `${lesson.pairs.length} 个声音 · 平假名与片假名同步认识`}</small></span><span aria-hidden="true">›</span></button>`).join("")}</div></section>`).join("");
      view.innerHTML = `<div class="page-enter beginner-page">${beginnerHeader("旅行认读", "从假名与声音开始，练到能自己尝试读旅行日语。")} 
        <section class="beginner-intro-card"><span class="eyebrow">你的进度</span><h2>${beginner.placementPassed ? "已通过认读测试" : beginner.challengeDone ? "旅行认读挑战已完成" : `已完成 ${count} / ${lessons.length} 节短课`}</h2><p>课程围绕读音，不需要写字或使用麦克风。八大旅行场景随时可以进入。</p><div class="beginner-intro-actions"><button class="primary-btn" type="button" data-start-beginner>${next ? "继续短课" : "查看认读挑战"}</button><button class="secondary-btn compact" type="button" data-test-beginner>认读测试</button></div></section>
        ${sections}<section class="beginner-stage"><div class="section-heading"><div><h2>旅行认读挑战</h2></div></div><p class="beginner-stage-copy">先自己读，再听标准音频核对。</p><button class="secondary-btn" type="button" data-challenge ${next ? "disabled" : ""}>${next ? "完成短课后开始" : "进入挑战"}</button></section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-start-beginner]").addEventListener("click", () => navigatePath(next ? `beginner/lesson/${next.id}` : "beginner/challenge"));
      view.querySelector("[data-test-beginner]").addEventListener("click", () => navigatePath("beginner/placement"));
      view.querySelector("[data-challenge]")?.addEventListener("click", () => navigatePath("beginner/challenge"));
      view.querySelectorAll("[data-lesson]").forEach((button) => button.addEventListener("click", () => navigatePath(`beginner/lesson/${button.dataset.lesson}`)));
      scrollToTop();
    }
    function renderPlacementIntro() {
      stopSpeech();
      view.innerHTML = `<div class="page-enter beginner-page">${beginnerHeader("旅行认读测试", "已有基础？用 12 道题检查清音、片假名和拼读规则。")} 
        <section class="beginner-intro-card"><h2>先听、再看、再判断</h2><p>至少答对 10 题，且三个类别各有正确答案，就能跳过短课。没有达到标准也不影响进入旅行场景。</p><button class="primary-btn" type="button" data-start-placement>开始测试</button></section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-start-placement]").addEventListener("click", () => {
        state.beginnerSession = { kind: "placement", index: 0, answers: [],
          questions: shuffleQuestionOptions(window.BEGINNER_DATA.placement) };
        renderBeginnerQuestion();
      });
      scrollToTop();
    }
    function renderBeginnerQuestion() {
      stopSpeech();
      const session = state.beginnerSession;
      const question = session.questions[session.index];
      view.innerHTML = `<div class="page-enter beginner-page">${beginnerHeader("旅行认读测试", `第 ${session.index + 1} / 12 题 · ${question.category}`)}
        <section class="beginner-question-card"><span class="eyebrow">${question.category}</span><h2>${escapeHtml(question.prompt)}</h2>${question.audioKana ? `<div class="beginner-question-audio">${beginnerSpeaker(question.audioKana, null, "播放题目发音")}<span>点击听音，可重复播放</span></div>` : ""}<div class="beginner-options">${question.options.map((option) => `<button class="beginner-option" type="button" data-option="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}</div></section></div>`;
      bindBeginnerBack(); bindBeginnerSpeakers();
      view.querySelectorAll("[data-option]").forEach((button) => button.addEventListener("click", () => {
        session.answers.push({ category: question.category, correct: button.dataset.option === question.answer });
        if (session.index === window.BEGINNER_DATA.placement.length - 1) renderPlacementResult();
        else { session.index += 1; renderBeginnerQuestion(); }
      }));
      scrollToTop();
    }
    function renderPlacementResult() {
      stopSpeech();
      const answers = state.beginnerSession.answers;
      const score = answers.filter((answer) => answer.correct).length;
      const categories = ["清音", "片假名", "规则"];
      const passed = score >= 10 && categories.every((category) => answers.some((answer) => answer.category === category && answer.correct));
      if (passed) { const beginner = loadBeginnerState(); beginner.ja.placementPassed = true; saveBeginnerState(beginner); }
      view.innerHTML = `<div class="page-enter beginner-page">${beginnerHeader("测试结果", "这次测试仅用来选择学习路线。")}
        <section class="beginner-intro-card"><span class="beginner-score">${score} / 12</span><h2>${passed ? "你已经具备旅行认读基础" : "建议从短课练起"}</h2><p>${passed ? "可以跳过认读短课，直接使用八大旅行场景。" : "清音、片假名或拼读规则还有不熟悉的地方；场景仍可自由进入。"}</p><div class="beginner-intro-actions"><button class="primary-btn" type="button" data-result-home>进入旅行场景</button><button class="secondary-btn compact" type="button" data-result-lessons>${passed ? "仍想练习" : "开始短课"}</button></div></section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-result-home]").addEventListener("click", () => navigatePath("home"));
      view.querySelector("[data-result-lessons]").addEventListener("click", () => navigatePath("beginner"));
      scrollToTop();
    }
    function toKatakana(text) {
      return Array.from(text, (character) => {
        const code = character.codePointAt(0);
        return code >= 0x3041 && code <= 0x3096 ? String.fromCodePoint(code + 0x60) : character;
      }).join("");
    }
    function lessonQuestions(lesson) {
      if (lesson.question) {
        const questions = [{ kind: "choice", prompt: lesson.question.prompt, options: lesson.question.options, answer: lesson.question.answer }];
        if (lesson.example) {
          const other = window.BEGINNER_DATA.rules.filter((rule) => rule.example && rule.example.text !== lesson.example.text).slice(0, 2);
          questions.push({ kind: "choice", prompt: "听音后，选出刚才听到的词", audioText: lesson.example.audioText || lesson.example.text,
            audioId: lesson.example.audioId || `beginner/example-${lesson.id}`, options: [lesson.example.text, ...other.map((rule) => rule.example.text)], answer: lesson.example.text });
        }
        return shuffleQuestionOptions(questions);
      }
      const allPairs = window.BEGINNER_DATA.rows.flatMap((row) => row.pairs);
      const target = lesson.pairs[Math.min(1, lesson.pairs.length - 1)];
      const last = lesson.pairs.at(-1);
      const distractors = allPairs.filter((pair) => pair[0] !== target[0] && !lesson.pairs.some((item) => item[0] === pair[0])).slice(0, 2);
      const audioPairs = [target, ...distractors];
      const questions = [
        { kind: "choice", prompt: "听音后选出对应的平假名", audioText: target[0], options: audioPairs.map((pair) => pair[0]), answer: target[0] },
        { kind: "choice", prompt: `「${last[0]}」对应的片假名是什么？`, options: [last[1], ...distractors.map((pair) => pair[1])], answer: last[1] },
        { kind: "audio-choice", prompt: `看「${target[0]}」，听三个声音后选出正确的一个`, options: audioPairs.map((pair) => pair[0]), answer: target[0] }
      ];
      if (lesson.example && Array.from(lesson.example.text).length <= 3 && new Set(Array.from(lesson.example.text)).size > 1) {
        const reversed = Array.from(lesson.example.text).reverse().join("");
        questions.push({ kind: "choice", prompt: `按拼读顺序，哪个写法是「${lesson.example.zh}」？`, options: [lesson.example.text, reversed, `${lesson.example.text[0]}${last[0]}`], answer: lesson.example.text });
      }
      return shuffleQuestionOptions(questions);
    }
    function renderBeginnerLesson(lessonId) {
      stopSpeech();
      const lesson = beginnerLesson(lessonId);
      if (!lesson) { navigatePath("beginner", true); return; }
      const isRule = Boolean(lesson.question);
      const count = beginnerLessons().findIndex((item) => item.id === lesson.id) + 1;
      const cards = isRule
        ? lesson.pairs.map(([source, changed], index) => `<div class="beginner-kana-card"><small>${lesson.id === "n-context" ? "相同的鼻音" : `${escapeHtml(source)} →`}</small><strong>${escapeHtml(changed)}${toKatakana(changed) !== changed ? ` <span>/ ${escapeHtml(toKatakana(changed))}</span>` : ""}</strong>${["voiced-ks", "voiced-th", "semi-voiced", "contracted"].includes(lesson.id) ? beginnerSpeaker(changed, `beginner/rule-${lesson.id}-${index}`, `播放${changed}的读音`) : lesson.id === "n-context" ? beginnerSpeaker("ん", null, "播放ん和ン的共同读音") : ""}</div>`).join("")
        : lesson.pairs.map(([hira, kata]) => `<div class="beginner-kana-card"><strong>${escapeHtml(hira)} <span>/ ${escapeHtml(kata)}</span></strong>${beginnerSpeaker(hira, null, `播放${hira}和${kata}的共同读音`)}</div>`).join("");
      const example = lesson.example ? `<div class="beginner-example"><span class="eyebrow">试着自己拼读</span><strong>${escapeHtml(lesson.example.text)}</strong><p>${escapeHtml(lesson.example.zh)}</p>${beginnerSpeaker(lesson.example.audioText || lesson.example.text, lesson.example.audioId || `beginner/example-${lesson.id}`, `播放${lesson.example.text}的读音`)}</div>` : "";
      view.innerHTML = `<div class="page-enter beginner-page">${beginnerHeader(lesson.title, `短课 ${count} / ${beginnerLessons().length} · ${isRule ? "拼读规则" : "清音"}`)}
        <section class="beginner-intro-card"><h2>${isRule ? "这个规则怎样改变读音？" : "一个声音，两种字形"}</h2><p>${escapeHtml(isRule ? lesson.note : "先看平假名，再看对应的片假名。点击播放，听它们共同的读音。")}</p><div class="beginner-kana-grid">${cards}</div>${example}<button class="primary-btn" type="button" data-lesson-practice>开始练习</button></section></div>`;
      bindBeginnerBack(); bindBeginnerSpeakers();
      view.querySelector("[data-lesson-practice]").addEventListener("click", () => {
        state.beginnerSession = { kind: "lesson", lessonId: lesson.id, index: 0, questions: lessonQuestions(lesson), wrong: 0 };
        renderLessonQuestion();
      });
      scrollToTop();
    }
    function renderLessonQuestion(feedback = "") {
      stopSpeech();
      const session = state.beginnerSession;
      const question = session.questions[session.index];
      const audio = question.audioText ? `<div class="beginner-question-audio">${beginnerSpeaker(question.audioText, question.audioId, "播放题目发音")}<span>点击听音，可重复播放</span></div>` : "";
      const options = question.kind === "audio-choice"
        ? question.options.map((option, index) => `<div class="beginner-audio-option">${beginnerSpeaker(option, null, `播放声音${index + 1}`)}<button class="beginner-option" type="button" data-option="${escapeHtml(option)}">选择声音 ${index + 1}</button></div>`).join("")
        : question.options.map((option) => `<button class="beginner-option" type="button" data-option="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("");
      view.innerHTML = `<div class="page-enter beginner-page">${beginnerHeader(beginnerLesson(session.lessonId).title, `练习 ${session.index + 1} / ${session.questions.length}`)}
        <section class="beginner-question-card"><span class="eyebrow">认读练习</span><h2>${escapeHtml(question.prompt)}</h2>${audio}<div class="beginner-options">${options}</div>${feedback ? `<p class="beginner-feedback" role="status">${escapeHtml(feedback)}</p>` : ""}</section></div>`;
      bindBeginnerBack(); bindBeginnerSpeakers();
      view.querySelectorAll("[data-option]").forEach((button) => button.addEventListener("click", () => {
        if (button.dataset.option !== question.answer) { session.wrong += 1; renderLessonQuestion("再听或再看一次，然后重试这题。 "); return; }
        if (session.index === session.questions.length - 1) renderLessonSelfCheck();
        else { session.index += 1; renderLessonQuestion(); }
      }));
      scrollToTop();
    }
    function finishBeginnerLesson() {
      const beginner = loadBeginnerState();
      if (!beginner.ja.completedLessons.includes(state.beginnerSession.lessonId)) beginner.ja.completedLessons.push(state.beginnerSession.lessonId);
      saveBeginnerState(beginner);
      const next = beginnerLessons().find((lesson) => !beginner.ja.completedLessons.includes(lesson.id));
      navigatePath(next ? `beginner/lesson/${next.id}` : "beginner/challenge");
    }
    function renderLessonSelfCheck() {
      stopSpeech();
      const lesson = beginnerLesson(state.beginnerSession.lessonId);
      if (!lesson.example) { finishBeginnerLesson(); return; }
      const example = lesson.example;
      view.innerHTML = `<div class="page-enter beginner-page">${beginnerHeader("自己先读", "先看文字试读，再播放正确发音核对。")}
        <section class="beginner-question-card beginner-self-check"><span class="eyebrow">${escapeHtml(lesson.title)}</span><h2>${escapeHtml(example.text)}</h2><p>${escapeHtml(example.zh)}</p><div class="beginner-question-audio">${beginnerSpeaker(example.audioText || example.text, example.audioId || `beginner/example-${lesson.id}`, "播放正确发音")}</div><p>核对后选择自己的感觉；两种选择都可以继续。</p><div class="beginner-intro-actions"><button class="primary-btn" type="button" data-self-right>我读对了</button><button class="secondary-btn compact" type="button" data-self-again>再练一次</button></div></section></div>`;
      bindBeginnerBack(); bindBeginnerSpeakers();
      view.querySelector("[data-self-right]").addEventListener("click", finishBeginnerLesson);
      view.querySelector("[data-self-again]").addEventListener("click", () => { showToast("可以再读一遍，再播放音频核对"); });
      scrollToTop();
    }
    function renderChallengeIntro() {
      stopSpeech();
      const beginner = loadBeginnerState().ja;
      const unfinished = beginnerLessons().find((lesson) => !beginner.completedLessons.includes(lesson.id));
      if (unfinished) { navigatePath("beginner", true); return; }
      view.innerHTML = `<div class="page-enter beginner-page">${beginnerHeader("旅行认读挑战", "依次读出六个旅行词，再听标准音频核对。")} 
        <section class="beginner-intro-card"><h2>${beginner.challengeDone ? "再挑战一次" : "已经可以自己尝试读了"}</h2><p>没有麦克风评分，也不需要每个词都读对。遇到不熟的词可以标记为“再练一次”。</p><button class="primary-btn" type="button" data-start-challenge>开始挑战</button></section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-start-challenge]").addEventListener("click", () => {
        state.beginnerSession = { kind: "challenge", index: 0, retries: [] };
        renderChallengeWord();
      });
      scrollToTop();
    }
    function renderChallengeWord(ready = false, played = false) {
      stopSpeech();
      const session = state.beginnerSession;
      const word = window.BEGINNER_DATA.challenge[session.index];
      view.innerHTML = `<div class="page-enter beginner-page">${beginnerHeader("旅行认读挑战", `第 ${session.index + 1} / ${window.BEGINNER_DATA.challenge.length} 个词`)}
        <section class="beginner-question-card beginner-self-check"><span class="eyebrow">先读文字</span><h2>${escapeHtml(word.text)}</h2><p>${escapeHtml(word.zh)}</p>
        ${ready ? `<div class="beginner-question-audio"><button class="speak-btn" type="button" data-play-challenge aria-label="播放${escapeHtml(word.text)}的正确发音">${SPEAKER_SVG}</button><span>听正确发音核对</span></div>` : `<button class="primary-btn" type="button" data-read-first>我先自己读了</button>`}
        ${played ? `<p>和你刚才读的一样吗？</p><div class="beginner-intro-actions"><button class="primary-btn" type="button" data-challenge-result="right">我读对了</button><button class="secondary-btn compact" type="button" data-challenge-result="retry">再练一次</button></div>` : ""}</section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-read-first]")?.addEventListener("click", () => renderChallengeWord(true));
      view.querySelector("[data-play-challenge]")?.addEventListener("click", async (event) => {
        const button = event.currentTarget;
        button.disabled = true;
        const result = await playSpeech(beginnerAudioEntry(word.text, word.audioId));
        if (result.status === "played") renderChallengeWord(true, true);
        else { button.disabled = false; showToast("发音未能播放，请重试后再核对"); }
      });
      view.querySelectorAll("[data-challenge-result]").forEach((button) => button.addEventListener("click", () => {
        if (button.dataset.challengeResult === "retry") session.retries.push(word.text);
        if (session.index === window.BEGINNER_DATA.challenge.length - 1) renderChallengeResult();
        else { session.index += 1; renderChallengeWord(); }
      }));
      scrollToTop();
    }
    function renderChallengeResult() {
      stopSpeech();
      const session = state.beginnerSession;
      const beginner = loadBeginnerState();
      beginner.ja.challengeDone = true;
      beginner.ja.retryWords = Array.from(new Set(session.retries));
      saveBeginnerState(beginner);
      view.innerHTML = `<div class="page-enter beginner-page">${beginnerHeader("挑战完成", "你已经尝试不靠罗马音读出旅行日语。")}
        <section class="beginner-intro-card"><span class="beginner-score">✓</span><h2>现在可以带着认读能力去旅行场景</h2><p>${session.retries.length ? `有 ${session.retries.length} 个词想再练一次，随时可以重做挑战。` : "六个词都已核对，可以继续学习场景词汇和短句。"}</p><div class="beginner-intro-actions"><button class="primary-btn" type="button" data-finish-home>进入旅行场景</button><button class="secondary-btn compact" type="button" data-finish-overview>查看短课</button></div></section></div>`;
      bindBeginnerBack();
      view.querySelector("[data-finish-home]").addEventListener("click", () => navigatePath("home"));
      view.querySelector("[data-finish-overview]").addEventListener("click", () => navigatePath("beginner"));
      scrollToTop();
    }
    
    
    return { renderRoute(route) { if (route.page === "placement") renderPlacementIntro(); else if (route.page === "lesson") renderBeginnerLesson(route.lessonId); else if (route.page === "challenge") renderChallengeIntro(); else renderBeginnerOverview(); } };
  }
  window.registerBeginnerModule({ id: ID, legacyKey, createProgress: fresh, normalizeProgress, getHomeSummary, validateData, renderRoute(route, context) { renderer ||= createRenderer(context); renderer.renderRoute(route); } });
}());
