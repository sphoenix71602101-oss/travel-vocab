(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["review"] = {
    exports: ["renderReview", "renderReviewResults", "exitReview"],
    create(ctx) {
  const { view, state } = ctx;
  const { escapeHtml, actionIcon, sceneIcon, uiIcon, scrollToTop, scenePacks, sceneById, situationById, foreignContentHtml, audioButtonHtml, favoriteIds, favoriteButtonHtml, bindFavoriteButtons, loadLearning, stopSpeech, bindSpeechButtons, navigatePath, updateShell, masteredWords, startReview, wordBank } = ctx.actions;
  function renderReview() {
    stopSpeech();
    const learning = loadLearning();
    const mastered = Object.values(learning.byId).filter((record) => record.status === "mastered").length;
    const dueCount = window.TRAVEL_REVIEW.dueEntries(wordBank(), learning, Date.now()).length;
    const weakCount = learning.weakIds.length;
    const favoriteCount = favoriteIds().length;
    const sceneRows = scenePacks().map((scene) => {
      const count = masteredWords({ sceneId: scene.id }).length;
      return `<button class="review-scene-row scene-${escapeHtml(scene.id)}" type="button" data-review-scene="${scene.id}" ${count ? "" : "disabled"}>
        <span class="category-icon" aria-hidden="true">${sceneIcon(scene.id)}</span>
        <span><strong>${escapeHtml(scene.name)}</strong><small>${count ? `已掌握 ${count} 条` : "还没有已掌握内容"}</small></span>
        <span class="chevron" aria-hidden="true">›</span>
      </button>`;
    }).join("");
    view.innerHTML = `<div class="page-enter review-page">
      <header class="screen-heading"><span class="eyebrow">温故而知新</span><h1>复习</h1><p>把旅途中真正会用到的表达，练到随时都能想起来。</p></header>
      <section class="review-overview" aria-labelledby="reviewOverviewTitle">
        <div class="review-overview-copy"><span class="review-overview-symbol" aria-hidden="true">${actionIcon("review")}</span><div><span class="eyebrow">复习概览</span><h2 id="reviewOverviewTitle">${mastered ? dueCount ? `${dueCount} 条表达已到期` : "暂时没有到期内容" : "完成学习后，从这里开始复习"}</h2><p>${mastered ? "根据答题表现安排下次复习，也可以随时自由练习。" : "先完成一组认识和小测，掌握的内容会自动出现在这里。"}</p></div></div>
        <div class="review-overview-stats" aria-label="复习数据"><div><strong>${mastered}</strong><span>已掌握</span></div><div><strong>${weakCount}</strong><span>需要加强</span></div><div><strong>${dueCount}</strong><span>已到期</span></div></div>
        ${mastered ? `<button class="primary-btn" type="button" data-review-primary>${dueCount ? "开始到期复习" : "自由复习"}</button>` : ""}
      </section>
      <div class="feature-stack">
        <section class="feature-card featured"><span class="feature-icon violet" aria-hidden="true">${actionIcon("weak")}</span><div><h3>薄弱加强</h3><p>${weakCount ? `集中复习 ${weakCount} 条答错过的内容。` : "目前没有需要加强的内容。"}</p></div><button class="secondary-btn compact" type="button" data-review-weak ${weakCount ? "" : "disabled"}>${weakCount ? "去加强" : "状态良好"}</button></section>
        <section class="feature-card"><span class="feature-icon favorite" aria-hidden="true">${uiIcon("favorite")}</span><div><h3>收藏夹</h3><p>${favoriteCount ? `已收藏 ${favoriteCount} 条常用表达。` : "把旅途中常用的表达收在这里。"}</p></div><button class="secondary-btn compact" type="button" data-open-favorites>${favoriteCount ? "查看收藏" : "去收藏"}</button></section>
      </div>
      ${mastered ? `<div class="section-heading review-heading"><div><span class="eyebrow">按需选择</span><h2>按场景复习</h2></div></div>
      <div class="review-scene-list">${sceneRows}</div>`
      : `<div class="empty-state review-empty"><span aria-hidden="true">${uiIcon("review")}</span><strong>还没有可复习的内容</strong><p>先到首页选择一个旅行场景，完成认识和小测。</p><button class="primary-btn" type="button" data-go-home>去首页学习</button></div>`}
    </div>`;
    view.querySelector("[data-review-primary]")?.addEventListener("click", () => startReview(dueCount ? { due: true } : undefined));
    view.querySelector("[data-review-weak]")?.addEventListener("click", () => startReview({ weak: true }));
    view.querySelector("[data-open-favorites]")?.addEventListener("click", () => navigatePath("review/favorites"));
    view.querySelectorAll("[data-review-scene]").forEach((button) => button.addEventListener("click", () => startReview({ sceneId: button.dataset.reviewScene })));
    view.querySelector("[data-go-home]")?.addEventListener("click", () => navigatePath("home"));
    scrollToTop();
  }

  function renderReviewResults() {
    stopSpeech();
    updateShell("review");
    const quiz = state.quiz;
    const total = quiz.questions.length;
    const accuracy = total ? Math.round(quiz.score / total * 100) : 0;
    const canRepeat = quiz.mode.filter.due ? window.TRAVEL_REVIEW.dueEntries(wordBank(), loadLearning(), Date.now()).length > 0 : masteredWords(quiz.mode.filter).length > 0;
    const wrongHtml = quiz.wrong.length
      ? quiz.wrong.map((entry) => {
        const scene = sceneById(entry.sceneId);
        const situation = situationById(scene, entry.situationId);
        return `<div class="wrong-item"><div><strong>${escapeHtml(entry.zh)}</strong>${foreignContentHtml(entry, true)}<small>${escapeHtml(scene.name)} · ${escapeHtml(situation.name)}</small></div><div class="wrong-item-actions">${favoriteButtonHtml(entry)}${audioButtonHtml(entry)}</div></div>`;
      }).join("")
      : `<div class="empty-state"><span aria-hidden="true">${uiIcon("complete")}</span><strong>本轮全部答对</strong><p>这些旅行表达已经越来越熟了。</p></div>`;
    view.innerHTML = `<div class="results page-enter">
      <section class="result-card"><span class="eyebrow">本轮复习完成</span>
        <div class="score-ring" style="--score:${accuracy}"><div><strong>${accuracy}%</strong><span>${quiz.score} / ${total} 正确</span></div></div>
        <h2>${accuracy === 100 ? "全部稳稳记住" : accuracy >= 70 ? "大部分已经熟悉" : "再加强几次就好"}</h2>
        <p>${quiz.wrong.length ? "答错的内容已加入“需要加强”，掌握进度不会减少。" : "继续保持，旅行时会更自然。"}</p>
      </section>
      <section class="result-wrong"><div class="section-heading"><div><span class="eyebrow">回顾</span><h2>本轮错项</h2></div><span>需要加强 ${loadLearning().weakIds.length}</span></div>${wrongHtml}</section>
      <div class="result-actions"><button class="primary-btn" type="button" data-again${canRepeat ? "" : " disabled"}>${canRepeat ? "再来一轮" : quiz.mode.filter.due ? "到期复习已完成" : "薄弱内容已清空"}</button><button class="secondary-btn" type="button" data-return>返回复习</button></div>
    </div>`;
    bindSpeechButtons();
    bindFavoriteButtons();
    view.querySelector("[data-again]")?.addEventListener("click", () => {
      if (!canRepeat) return;
      const filter = quiz.mode.filter;
      state.quiz = null;
      startReview(filter);
    });
    view.querySelector("[data-return]").addEventListener("click", exitReview);
    scrollToTop();
  }

  function exitReview() {
    stopSpeech();
    state.quiz = null;
    updateShell("review");
    renderReview();
  }

  return { renderReview, renderReviewResults, exitReview };
    }
  };
})();
