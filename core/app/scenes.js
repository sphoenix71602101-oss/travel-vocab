(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["scenes"] = {
    exports: ["firstIncompleteSituation", "renderScene"],
    create(ctx) {
  const { view } = ctx;
  const { escapeHtml, sceneIcon, showToast, scrollToTop, sceneById, situationById, loadLearning, stopSpeech, navigatePath, sceneProgress, situationProgress, statusFor } = ctx.actions;
  function firstIncompleteSituation(scene, learning) {
    const last = learning.lastLocation;
    if (last?.sceneId === scene.id) {
      const candidate = situationById(scene, last.situationId);
      if (candidate && situationProgress(scene.id, candidate.id, learning).mastered < situationProgress(scene.id, candidate.id, learning).total) return candidate;
    }
    return scene.situations.find((situation) => {
      const progress = situationProgress(scene.id, situation.id, learning);
      return progress.mastered < progress.total;
    }) || null;
  }

  function renderScene(sceneId) {
    stopSpeech();
    const scene = sceneById(sceneId);
    if (!scene) {
      showToast("找不到这个旅行场景");
      navigatePath("home", true);
      return;
    }
    const learning = loadLearning();
    const progress = sceneProgress(scene.id, learning);
    const percentage = progress.total ? Math.round(progress.mastered / progress.total * 100) : 0;
    const next = firstIncompleteSituation(scene, learning);
    const situations = scene.situations.map((situation) => {
      const situationState = situationProgress(scene.id, situation.id, learning);
      const status = statusFor(situationState);
      return `<button class="situation-row" type="button" data-situation="${escapeHtml(situation.id)}">
        <span class="situation-status ${status.className}" aria-hidden="true">${status.mark}</span>
        <span><strong>${escapeHtml(situation.name)}</strong><small>${status.label} · ${situationState.mastered}/${situationState.total}</small></span>
        <span class="chevron" aria-hidden="true">›</span>
      </button>`;
    }).join("");
    view.innerHTML = `<div class="scene-detail page-enter scene-${escapeHtml(scene.id)}">
      <button class="back-link" type="button" data-back>‹ 返回首页</button>
      <section class="scene-hero">
        <span class="category-icon scene-hero-icon" aria-hidden="true">${sceneIcon(scene.id)}</span>
        <div><span class="eyebrow">旅行语言学习包</span><h2>${escapeHtml(scene.name)}</h2><p>${escapeHtml(scene.description)}</p></div>
        <div class="scene-total"><strong>已掌握 ${progress.mastered} / ${progress.total}</strong><span>${percentage}%</span></div>
        <div class="progress-track" role="progressbar" aria-label="${escapeHtml(scene.name)}掌握进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percentage}"><span style="width:${percentage}%"></span></div>
        <button class="primary-btn" type="button" data-scene-continue ${next ? "" : "disabled"}>${next ? "继续学习" : "这个场景已全部掌握"}</button>
      </section>
      <div class="section-heading"><div><span class="eyebrow">自由选择</span><h2>学习内容</h2></div><span>${scene.situations.length} 个小情境</span></div>
      <div class="situation-list">${situations}</div>
    </div>`;
    view.querySelector("[data-back]").addEventListener("click", () => navigatePath("home"));
    view.querySelector("[data-scene-continue]")?.addEventListener("click", () => {
      if (next) navigatePath(`learn/${scene.id}/${next.id}`);
    });
    view.querySelectorAll("[data-situation]").forEach((button) => button.addEventListener("click", () => {
      navigatePath(`learn/${scene.id}/${button.dataset.situation}`);
    }));
    scrollToTop();
  }

  return { firstIncompleteSituation, renderScene };
    }
  };
})();
