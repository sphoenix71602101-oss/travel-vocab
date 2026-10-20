(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["learning"] = {
    exports: ["selectLearningBatch", "beginLearningRoute", "renderLearningPhase", "renderIntroduction", "answerSignature", "buildOptions", "makeQuestionSet", "startLearningQuiz", "masteredWords", "startReview", "questionTitle", "renderQuestion", "selectOption", "confirmAnswer", "advanceQuestion", "finishQuiz", "renderRetryReview", "renderLearningComplete", "exitLearning"],
    create(ctx) {
  const { LEARNING_BATCH_SIZE, REVIEW_BATCH_SIZE, view, state } = ctx;
  const { escapeHtml, uiIcon, shuffle, showToast, scrollToTop, currentPack, wordBank, langLabel, sceneById, situationById, sceneWords, situationWords, foreignText, foreignContentHtml, audioButtonHtml, exampleHtml, bindExampleDisclosure, favoriteButtonHtml, bindFavoriteButtons, loadLearning, markIntroduced, markMastered, recordReview, setLastLocation, stopSpeech, playSpeech, bindSpeechButtons, parseRoute, navigatePath, updateShell, renderReviewResults, exitReview, renderError, showEntryButton, bindShowButtons } = ctx.actions;
  function selectLearningBatch(sceneId, situationId) {
    const learning = loadLearning();
    const pool = situationWords(sceneId, situationId);
    const introduced = pool.filter((entry) => learning.byId[entry.id]?.status === "introduced");
    const unseen = pool.filter((entry) => !learning.byId[entry.id]);
    return introduced.concat(unseen).slice(0, LEARNING_BATCH_SIZE);
  }

  function beginLearningRoute(sceneId, situationId) {
    const scene = sceneById(sceneId);
    const situation = situationById(scene, situationId);
    if (!scene || !situation) {
      showToast("找不到这个学习情境");
      navigatePath("home", true);
      return;
    }
    updateShell("home", true);
    if (state.learning?.sceneId === sceneId && state.learning?.situationId === situationId) {
      renderLearningPhase();
      return;
    }
    setLastLocation(sceneId, situationId);
    const batch = selectLearningBatch(sceneId, situationId);
    state.learning = { sceneId, situationId, batch, groupSize: batch.length, index: 0, phase: batch.length ? "introduce" : "complete" };
    renderLearningPhase();
  }

  function renderLearningPhase() {
    if (!state.learning) return;
    if (state.learning.phase === "retry-review") renderRetryReview();
    else if (state.learning.phase === "batch-complete" || state.learning.phase === "complete") renderLearningComplete();
    else renderIntroduction();
  }

  function renderIntroduction() {
    stopSpeech();
    updateShell("home", true);
    const learning = state.learning;
    const scene = sceneById(learning.sceneId);
    const situation = situationById(scene, learning.situationId);
    const entry = learning.batch[learning.index];
    const current = learning.index + 1;
    const total = learning.batch.length;
    const progress = Math.round(current / total * 100);
    view.innerHTML = `<div class="lesson page-enter">
      <div class="quiz-top"><button class="text-btn" type="button" data-quit>退出</button><strong>${escapeHtml(situation.name)}</strong><span>${current} / ${total}</span></div>
      <div class="progress-track" role="progressbar" aria-label="认识进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></div>
      <section class="recognition-card" tabindex="-1" aria-labelledby="recognitionWord">
        <div class="recognition-meta"><span class="question-meta">认识这句话</span>${favoriteButtonHtml(entry)}</div>
        <div class="recognition-foreign"><h2 id="recognitionWord">${escapeHtml(foreignText(entry))}</h2>${audioButtonHtml(entry)}</div>
        ${entry.pronunciation ? `<p class="recognition-reading">${escapeHtml(entry.pronunciation)}</p>` : ""}
        <div class="recognition-divider"></div>
        <strong class="recognition-zh">${escapeHtml(entry.zh)}</strong>
        <small>${entry.kind === "phrase" ? "旅行短句" : "旅行词汇"} · ${escapeHtml(scene.name)}</small>
        ${showEntryButton(entry)}
        ${exampleHtml(entry)}
      </section>
      <p class="lesson-hint">先听一遍并读出声，不需要死记。小测会帮你确认是否真正认得。</p>
    </div>
    <div class="quiz-actions lesson-actions">
      <button class="secondary-btn lesson-listen" type="button" data-listen>再听一遍</button>
      <button class="primary-btn" type="button" data-next>${current === total ? "开始小测" : "下一个"}</button>
    </div>`;
    view.querySelector("[data-quit]").addEventListener("click", exitLearning);
    view.querySelector("[data-listen]").addEventListener("click", () => void playSpeech(entry));
    view.querySelector("[data-next]").addEventListener("click", () => {
      markIntroduced(entry);
      if (learning.index >= learning.batch.length - 1) startLearningQuiz(learning.batch);
      else {
        learning.index += 1;
        renderIntroduction();
      }
    });
    bindSpeechButtons();
    bindFavoriteButtons();
    bindExampleDisclosure(entry);
    bindShowButtons(view);
    scrollToTop();
    requestAnimationFrame(() => view.querySelector(".recognition-card")?.focus({ preventScroll: true }));
  }

  function answerSignature(entry, direction) {
    const value = direction === "reverse" ? entry.zh : foreignText(entry);
    return String(value || "").trim().toLocaleLowerCase(currentPack()?.locale || "zh-CN");
  }

  function buildOptions(correct, direction, preferred = []) {
    const chosen = [];
    const ids = new Set([correct.id]);
    const signatures = new Set([answerSignature(correct, direction)]);
    const tiers = [
      preferred,
      situationWords(correct.sceneId, correct.situationId),
      sceneWords(correct.sceneId),
      wordBank().filter((item) => item.kind === correct.kind),
      wordBank()
    ];
    tiers.forEach((tier) => shuffle(tier).forEach((item) => {
      const signature = answerSignature(item, direction);
      if (chosen.length >= 3 || ids.has(item.id) || !signature || signatures.has(signature)) return;
      chosen.push(item);
      ids.add(item.id);
      signatures.add(signature);
    }));
    if (chosen.length < 3) throw new Error(`无法为 ${correct.id} 生成四个唯一答案`);
    return shuffle([correct].concat(chosen));
  }

  function makeQuestionSet(entries, mode) {
    const items = mode.kind === "learning" ? entries.slice() : shuffle(entries).slice(0, REVIEW_BATCH_SIZE);
    const reviewStartsForward = Math.random() < .5;
    return items.map((entry, index) => ({
      entry,
      direction: mode.kind === "learning"
        ? "forward"
        : ((index % 2 === 0) === reviewStartsForward ? "forward" : "reverse")
    }));
  }

  function startLearningQuiz(entries) {
    state.quiz = {
      mode: { kind: "learning", sceneId: state.learning.sceneId, situationId: state.learning.situationId },
      questions: makeQuestionSet(entries, { kind: "learning" }),
      preferred: entries,
      index: 0,
      score: 0,
      wrong: []
    };
    renderQuestion();
  }

  function masteredWords(filter = {}) {
    const learning = loadLearning();
    const weak = new Set(learning.weakIds);
    return wordBank().filter((entry) => {
      if (learning.byId[entry.id]?.status !== "mastered") return false;
      if (filter.weak && !weak.has(entry.id)) return false;
      if (filter.sceneId && entry.sceneId !== filter.sceneId) return false;
      if (filter.situationId && entry.situationId !== filter.situationId) return false;
      return true;
    });
  }

  function startReview(filter = {}) {
    const pool = filter.due ? window.TRAVEL_REVIEW.dueEntries(wordBank(), loadLearning(), Date.now()).slice(0, REVIEW_BATCH_SIZE) : masteredWords(filter);
    if (!pool.length) {
      showToast(filter.due ? "目前没有到期内容，可以自由复习" : filter.weak ? "目前没有需要加强的内容" : "先掌握一些内容，再开始复习");
      return;
    }
    if (parseRoute().name !== "review") history.replaceState(null, "", "#/review");
    state.tab = "review";
    state.quiz = {
      mode: { kind: "review", filter },
      questions: makeQuestionSet(pool, { kind: "review" }),
      preferred: pool,
      index: 0,
      score: 0,
      wrong: []
    };
    renderQuestion();
  }

  function questionTitle(quiz) {
    if (quiz.mode.kind === "review") return quiz.mode.filter.due ? "到期复习" : quiz.mode.filter.weak ? "加强薄弱内容" : "复习";
    const scene = sceneById(quiz.mode.sceneId);
    return situationById(scene, quiz.mode.situationId)?.name || "小测";
  }

  function renderQuestion() {
    stopSpeech();
    const quiz = state.quiz;
    updateShell(quiz.mode.kind === "review" ? "review" : "home", true);
    state.questionToken += 1;
    const token = state.questionToken;
    const question = quiz.questions[quiz.index];
    const entry = question.entry;
    const direction = question.direction;
    let options;
    try { options = buildOptions(entry, direction, quiz.preferred); }
    catch (error) { renderError([error.message]); return; }
    state.answered = false;
    state.selectedId = null;
    const current = quiz.index + 1;
    const total = quiz.questions.length;
    const progress = Math.round(current / total * 100);
    const scene = sceneById(entry.sceneId);
    const situation = situationById(scene, entry.situationId);
    const prompt = direction === "reverse"
      ? `<div class="foreign-prompt"><h2 id="questionText">${escapeHtml(foreignText(entry))}</h2>${audioButtonHtml(entry)}</div><p>请选择对应的中文含义</p>`
      : `<h2 id="questionText">${escapeHtml(entry.zh)}</h2><p>请选择对应的${langLabel()}表达</p>`;
    const optionsHtml = options.map((option, index) => `<div class="option-row">
      <button class="option-choice" type="button" data-id="${escapeHtml(option.id)}" aria-pressed="false">
        <span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
        <span class="option-text">${direction === "reverse" ? `<span class="answer-zh">${escapeHtml(option.zh)}</span>` : foreignContentHtml(option, false)}</span>
        <span class="choice-state" aria-hidden="true"></span>
      </button>
    </div>`).join("");
    view.innerHTML = `<div class="quiz page-enter">
      <div class="quiz-top"><button class="text-btn" type="button" data-quit>退出</button><strong>${escapeHtml(questionTitle(quiz))}</strong><span>${current} / ${total}</span></div>
      <div class="progress-track" role="progressbar" aria-label="答题进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}"><span style="width:${progress}%"></span></div>
      <section class="prompt-card" id="questionPrompt" tabindex="-1" aria-labelledby="questionText">
        <span class="question-meta">${escapeHtml(scene.name)} · ${escapeHtml(situation.name)}</span>${prompt}
      </section>
      <div class="options" role="group" aria-label="答案选项">${optionsHtml}</div>
      <div id="feedback" class="feedback" tabindex="-1" aria-live="polite" hidden></div>
    </div>
    <div class="quiz-actions"><button class="primary-btn" id="confirmBtn" type="button" disabled>确认答案</button></div>`;
    const confirm = view.querySelector("#confirmBtn");
    view.querySelectorAll(".option-choice").forEach((button) => button.addEventListener("click", () => selectOption(button, confirm)));
    view.querySelector("[data-quit]").addEventListener("click", quiz.mode.kind === "review" ? exitReview : exitLearning);
    confirm.addEventListener("click", () => {
      if (state.answered) advanceQuestion();
      else confirmAnswer(entry, token);
    });
    bindSpeechButtons();
    scrollToTop();
    requestAnimationFrame(() => view.querySelector("#questionPrompt")?.focus({ preventScroll: true }));
  }

  function selectOption(button, confirm) {
    if (state.answered) return;
    view.querySelectorAll(".option-choice").forEach((item) => {
      item.setAttribute("aria-pressed", "false");
      item.closest(".option-row").classList.remove("selected");
    });
    button.setAttribute("aria-pressed", "true");
    button.closest(".option-row").classList.add("selected");
    state.selectedId = button.dataset.id;
    confirm.disabled = false;
  }

  function confirmAnswer(entry, token) {
    if (!state.quiz || state.answered || !state.selectedId || token !== state.questionToken) return;
    state.answered = true;
    const correct = state.selectedId === entry.id;
    if (correct) state.quiz.score += 1;
    else if (!state.quiz.wrong.some((item) => item.id === entry.id)) state.quiz.wrong.push(entry);
    if (state.quiz.mode.kind === "learning") {
      if (correct) markMastered(entry); else markIntroduced(entry);
    } else {
      recordReview(entry, correct);
    }
    view.querySelectorAll(".option-choice").forEach((button) => {
      button.disabled = true;
      const row = button.closest(".option-row");
      if (button.dataset.id === entry.id) {
        row.classList.add("correct");
        row.querySelector(".choice-state").textContent = "✓";
      } else if (!correct && button.dataset.id === state.selectedId) {
        row.classList.add("wrong");
        row.querySelector(".choice-state").textContent = "×";
      }
    });
    const feedback = view.querySelector("#feedback");
    feedback.hidden = false;
    feedback.className = `feedback ${correct ? "good" : "bad"}`;
    feedback.innerHTML = `<span class="feedback-icon" aria-hidden="true">${correct ? "✓" : "!"}</span><div>
      <strong>${correct ? "回答正确" : "再看一次正确答案"}</strong>
      <div class="feedback-entry"><div class="feedback-answer"><span class="answer-zh">${escapeHtml(entry.zh)}</span>${foreignContentHtml(entry, true)}</div>${favoriteButtonHtml(entry, "feedback-favorite")}</div>
      ${exampleHtml(entry, true)}
    </div>`;
    const confirm = view.querySelector("#confirmBtn");
    confirm.disabled = false;
    confirm.textContent = state.quiz.index >= state.quiz.questions.length - 1 ? "查看结果" : "下一题";
    feedback.focus({ preventScroll: true });
    bindSpeechButtons(feedback);
    bindFavoriteButtons(feedback);
    void playSpeech(entry, true);
  }

  function advanceQuestion() {
    if (!state.quiz || !state.answered) return;
    if (state.quiz.index >= state.quiz.questions.length - 1) finishQuiz();
    else {
      state.quiz.index += 1;
      renderQuestion();
    }
  }

  function finishQuiz() {
    const quiz = state.quiz;
    if (quiz.mode.kind === "learning") {
      if (quiz.wrong.length) {
        state.learning.batch = quiz.wrong.slice();
        state.learning.index = 0;
        state.learning.phase = "retry-review";
        state.quiz = null;
        renderRetryReview();
      } else {
        state.learning.phase = "batch-complete";
        state.quiz = null;
        renderLearningComplete();
      }
    } else {
      renderReviewResults();
    }
  }

  function renderRetryReview() {
    stopSpeech();
    updateShell("home", true);
    const learning = state.learning;
    const entry = learning.batch[learning.index];
    const current = learning.index + 1;
    const total = learning.batch.length;
    view.innerHTML = `<div class="lesson page-enter">
      <div class="quiz-top"><button class="text-btn" type="button" data-later>稍后继续</button><strong>再认识一次</strong><span>${current} / ${total}</span></div>
      <section class="recognition-card retry-card" tabindex="-1">
        <div class="recognition-meta"><span class="question-meta">刚才这条还不熟</span>${favoriteButtonHtml(entry)}</div>
        <div class="recognition-foreign"><h2>${escapeHtml(foreignText(entry))}</h2>${audioButtonHtml(entry)}</div>
        ${entry.pronunciation ? `<p class="recognition-reading">${escapeHtml(entry.pronunciation)}</p>` : ""}
        <div class="recognition-divider"></div><strong class="recognition-zh">${escapeHtml(entry.zh)}</strong>
        ${showEntryButton(entry)}
        ${exampleHtml(entry)}
      </section>
      <p class="lesson-hint">看清表达，再测一次。答对后就会进入已掌握。</p>
    </div>
    <div class="quiz-actions"><button class="primary-btn" type="button" data-next>${current === total ? "重新小测" : "下一个"}</button></div>`;
    view.querySelector("[data-later]").addEventListener("click", exitLearning);
    view.querySelector("[data-next]").addEventListener("click", () => {
      if (learning.index >= learning.batch.length - 1) startLearningQuiz(learning.batch);
      else {
        learning.index += 1;
        renderRetryReview();
      }
    });
    bindSpeechButtons();
    bindFavoriteButtons();
    bindExampleDisclosure(entry);
    bindShowButtons(view);
    scrollToTop();
  }

  function renderLearningComplete() {
    stopSpeech();
    updateShell("home", true);
    const learning = state.learning;
    const scene = sceneById(learning.sceneId);
    const situation = situationById(scene, learning.situationId);
    const remaining = selectLearningBatch(scene.id, situation.id);
    const allDone = remaining.length === 0;
    view.innerHTML = `<div class="results lesson-result page-enter">
      <section class="result-card">
        <span class="result-check" aria-hidden="true">${uiIcon("complete")}</span>
        <span class="eyebrow">${allDone ? "小情境完成" : "本组完成"}</span>
        <h2>${allDone ? `${escapeHtml(situation.name)}已掌握` : `这 ${learning.groupSize} 条已经掌握`}</h2>
        <p>${allDone ? "这些内容已经进入复习，可以随时回来巩固。" : "继续下一组，或先回到场景选择其他内容。"}</p>
      </section>
      <div class="result-actions">
        ${allDone ? `<button class="primary-btn" type="button" data-review-situation>复习这个情境</button>` : `<button class="primary-btn" type="button" data-next-batch>继续下一组</button>`}
        <button class="secondary-btn" type="button" data-scene-return>返回${escapeHtml(scene.name)}</button>
      </div>
    </div>`;
    view.querySelector("[data-next-batch]")?.addEventListener("click", () => {
      state.learning = null;
      beginLearningRoute(scene.id, situation.id);
    });
    view.querySelector("[data-review-situation]")?.addEventListener("click", () => {
      startReview({ sceneId: scene.id, situationId: situation.id });
    });
    view.querySelector("[data-scene-return]").addEventListener("click", () => navigatePath(`scene/${scene.id}`));
    scrollToTop();
  }

  function exitLearning() {
    const sceneId = state.learning?.sceneId || parseRoute().sceneId;
    stopSpeech();
    state.learning = null;
    state.quiz = null;
    navigatePath(sceneId ? `scene/${sceneId}` : "home", true);
  }

  return { selectLearningBatch, beginLearningRoute, renderLearningPhase, renderIntroduction, answerSignature, buildOptions, makeQuestionSet, startLearningQuiz, masteredWords, startReview, questionTitle, renderQuestion, selectOption, confirmAnswer, advanceQuestion, finishQuiz, renderRetryReview, renderLearningComplete, exitLearning };
    }
  };
})();
