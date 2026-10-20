(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["beginner"] = {
    exports: ["beginnerContext", "renderBeginnerRoute", "renderBeginnerPlaceholder"],
    create(ctx) {
  const { SPEAKER_SVG, view, state } = ctx;
  const { escapeHtml, shuffle, showToast, scrollToTop, currentPack, selectedDestination, loadBeginnerState, saveBeginnerState, stopSpeech, speechTimeout, playSpeech, navigatePath, renderRoute, playAudio } = ctx.actions;
  function beginnerContext() {
    const packId = currentPack()?.id;
    return {
      view, state, escapeHtml, speakerSvg: SPEAKER_SVG, currentPack, selectedDestination,
      navigatePath, scrollToTop, stopSpeech, playSpeech, playAudio, shuffle, showToast, speechTimeout,
      getProgress: () => loadBeginnerState().packs[packId],
      saveProgress(progress) { const beginner = loadBeginnerState(); beginner.packs[packId] = progress; saveBeginnerState(beginner); }
    };
  }

  function renderBeginnerRoute(route) {
    const module = window.TRAVEL_BEGINNER?.get(currentPack()?.features?.beginnerModule);
    if (module) module.renderRoute(route, beginnerContext());
    else renderBeginnerPlaceholder();
  }

  function renderBeginnerPlaceholder() {
    stopSpeech();
    const destination = selectedDestination();
    view.innerHTML = `<div class="page-enter beginner-page"><header class="screen-heading beginner-heading"><button class="back-link" type="button" data-beginner-back>← 首页</button><span class="eyebrow">${escapeHtml(destination?.language || "语言")} · 旅行认读</span><h1>课程筹备中</h1><p>${escapeHtml(`${destination.country} · ${destination.language}的旅行认读内容正在准备。`)}</p></header>
      <section class="beginner-intro-card"><strong>先从旅行场景开始</strong><p>你可以照常学习当前目的地的八大场景。认读课程上线后，这里会成为入口。</p><button class="primary-btn" type="button" data-go-scenes>返回首页选场景</button></section></div>`;
    view.querySelector("[data-beginner-back]").addEventListener("click", () => navigatePath("home"));
    view.querySelector("[data-go-scenes]").addEventListener("click", () => navigatePath("home"));
    scrollToTop();
  }

  return { beginnerContext, renderBeginnerRoute, renderBeginnerPlaceholder };
    }
  };
})();
