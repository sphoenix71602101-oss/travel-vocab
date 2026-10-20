(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["home"] = {
    exports: ["sceneProgress", "situationProgress", "statusFor", "renderHome"],
    create(ctx) {
  const { DESTINATION_OPTIONS, view, state, runtime } = ctx;
  const { loadContentPack, escapeHtml, actionIcon, sceneIcon, heroImageForDestination, showToast, scrollToTop, currentPack, scenePacks, destinationById, selectedDestination, sceneById, situationById, sceneWords, situationWords, emptyLanguageState, loadLearning, saveDestination, loadBeginnerState, stopSpeech, navigatePath, focusDestinationPicker, requireDestination, maybeAskLevel, showLevelSurvey, firstIncompleteSituation, beginnerHomeSummary } = ctx.actions;
  function sceneProgress(sceneId, learning = loadLearning()) {
    const words = sceneWords(sceneId);
    const introduced = words.filter((entry) => learning.byId[entry.id]?.status === "introduced").length;
    const mastered = words.filter((entry) => learning.byId[entry.id]?.status === "mastered").length;
    return { total: words.length, introduced, mastered };
  }

  function situationProgress(sceneId, situationId, learning = loadLearning()) {
    const words = situationWords(sceneId, situationId);
    const introduced = words.filter((entry) => learning.byId[entry.id]?.status === "introduced").length;
    const mastered = words.filter((entry) => learning.byId[entry.id]?.status === "mastered").length;
    return { total: words.length, introduced, mastered };
  }

  function statusFor(progress) {
    if (progress.mastered === progress.total && progress.total) return { mark: "✓", label: "已掌握", className: "done" };
    if (progress.mastered || progress.introduced) return { mark: "▶", label: "学习中", className: "active" };
    return { mark: "○", label: "未开始", className: "new" };
  }

  function renderHome() {
    stopSpeech();
    const destination = selectedDestination();
    const heroImage = heroImageForDestination(destination?.id);
    const learning = destination ? loadLearning() : emptyLanguageState();
    const last = learning.lastLocation;
    let lastScene = sceneById(last?.sceneId);
    let lastSituation = situationById(lastScene, last?.situationId);
    if (lastScene && lastSituation) {
      const progress = situationProgress(lastScene.id, lastSituation.id, learning);
      if (progress.mastered === progress.total) lastSituation = firstIncompleteSituation(lastScene, learning);
      if (!lastSituation) lastScene = null;
    }
    const resumeProgress = lastScene && lastSituation
      ? situationProgress(lastScene.id, lastSituation.id, learning)
      : null;
    const resumePercentage = resumeProgress?.total
      ? Math.round(resumeProgress.mastered / resumeProgress.total * 100)
      : 0;
    const cards = scenePacks().map((scene) => {
      const progress = sceneProgress(scene.id, learning);
      const percentage = progress.total ? Math.round(progress.mastered / progress.total * 100) : 0;
      return `<button class="category-card scene-card scene-${escapeHtml(scene.id)}" type="button" data-scene="${escapeHtml(scene.id)}">
        <span class="category-icon" aria-hidden="true">${sceneIcon(scene.id)}</span>
        <span class="category-copy"><strong>${escapeHtml(scene.name)}</strong><small>${escapeHtml(scene.homeTopics.join("、"))}</small>
          <span class="scene-progress-copy">${destination ? `已掌握 ${percentage}%` : "选择旅程后记录"}</span>
          <span class="mini-progress" role="progressbar" aria-label="${escapeHtml(scene.name)}掌握进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${destination ? percentage : 0}"><i style="width:${destination ? percentage : 0}%"></i></span>
        </span>
      </button>`;
    }).join("");
    const destinationCards = DESTINATION_OPTIONS.map((item) => {
      const available = item.status === "available";
      const selected = item.id === state.destinationId;
      return `<button class="destination-card${selected ? " selected" : ""}" type="button" data-destination="${item.id}" aria-label="${escapeHtml(`${item.country}，${item.language}${available ? selected ? "，当前目的地" : "，可学习" : "，即将开放"}`)}" ${available ? `aria-pressed="${selected}"` : "disabled"}>
        <span class="destination-code destination-flag" aria-hidden="true"><img src="${item.flagSrc}" width="384" height="256" alt=""></span>
        <span class="destination-card-copy"><strong>${escapeHtml(item.country)}</strong><small>${escapeHtml(item.language)} · ${escapeHtml(item.nativeLabel)}</small><em>${available ? selected ? "当前目的地" : "可学习" : "即将开放"}</em></span>
        ${selected ? '<span class="destination-check" aria-hidden="true">✓</span>' : ""}
      </button>`;
    }).join("");
    const destinationTrigger = destination
      ? `<span class="destination-code destination-flag" aria-hidden="true"><img src="${destination.flagSrc}" width="384" height="256" alt=""></span><span class="destination-trigger-copy"><strong>${escapeHtml(destination.country)}</strong><small>${escapeHtml(destination.language)} · ${escapeHtml(destination.nativeLabel)}</small></span>`
      : `<span class="destination-code empty" aria-hidden="true">--</span><span class="destination-trigger-copy"><strong>选择目的地和语言</strong><small>日本、美国、西班牙及更多目的地</small></span>`;
    const hasResume = Boolean(lastScene && lastSituation);
    const learningTitle = hasResume ? "继续学习" : "开始学习";
    const learningSubtitle = hasResume
      ? `${lastScene.name} · ${lastSituation.name} · 已掌握 ${resumePercentage}%`
      : "从实用场景出发，轻松掌握旅行外语";
    const learningSubtitleMarkup = hasResume
      ? `${escapeHtml(lastScene.name)} · ${escapeHtml(lastSituation.name)}<span class="quick-entry-progress">已掌握 ${resumePercentage}%</span>`
      : escapeHtml(learningSubtitle);
    const learningLabel = !destination
      ? "开始学习，请先选择目的地和语言"
      : hasResume
        ? `继续学习，${learningSubtitle}`
        : "开始学习，从旅行场景中选择学习内容";
    const continueContent = `<button class="quick-entry ${hasResume ? "continue-entry" : "start-entry"}" type="button" data-continue aria-label="${escapeHtml(learningLabel)}">
      <span class="quick-entry-copy"><strong>${learningTitle}</strong><span class="quick-entry-subtitle">${learningSubtitleMarkup}</span></span>
      <span class="quick-entry-symbol" aria-hidden="true">${actionIcon("learn")}</span>
    </button>`;
    const beginner = loadBeginnerState();
    const beginnerSubtitle = beginnerHomeSummary(destination, beginner.packs[currentPack()?.id]);
    view.innerHTML = `<div class="home page-enter">
      <div class="brand-hero" aria-hidden="true">
        <picture>
          <source media="(min-width:560px)" srcset="${heroImage.wide}">
          <img class="brand-hero-image${destination?.id === "us" ? " hero-image-us" : ""}" src="${heroImage.mobile}" alt="" width="900" height="480" loading="eager" decoding="async" fetchpriority="high">
        </picture>
      </div>
      <section class="destination-picker${state.destinationOpen ? " open" : ""}" id="destinationPicker" tabindex="-1" aria-labelledby="destinationPickerTitle">
        <h2 class="sr-only" id="destinationPickerTitle">${destination ? "当前旅程" : "选择目的地"}</h2>
        <button class="destination-trigger" type="button" data-toggle-destinations aria-expanded="${state.destinationOpen}" aria-controls="destinationOptions">${destinationTrigger}<span class="destination-chevron" aria-hidden="true">${actionIcon("chevronDown")}</span></button>
        <div class="destination-options" id="destinationOptions" aria-label="选择目的地和语言" ${state.destinationOpen ? "" : "hidden"}>
          <div class="destination-strip">${destinationCards}</div>
          <p>左右滑动查看更多目的地，切换后显示对应语言的学习进度。</p>
        </div>
      </section>
      <section class="home-quick-actions" aria-label="学习入口">${continueContent}<button class="quick-entry beginner-entry" type="button" data-beginner aria-label="旅行认读，${escapeHtml(beginnerSubtitle)}"><span class="quick-entry-copy"><strong>旅行认读</strong><span class="quick-entry-subtitle">看见当地文字，也能听懂、读懂、用上</span></span><span class="quick-entry-symbol" aria-hidden="true">${actionIcon("reading")}</span></button></section>
      <div class="section-heading" id="sceneHeading" tabindex="-1"><div><h2>旅行场景</h2></div><span>${scenePacks().length} 个场景</span></div>
      <div class="category-grid" id="sceneList">${cards}</div>
    </div>`;
    view.querySelector("[data-toggle-destinations]").addEventListener("click", (event) => {
      state.destinationOpen = !state.destinationOpen;
      event.currentTarget.setAttribute("aria-expanded", String(state.destinationOpen));
      view.querySelector("#destinationOptions").hidden = !state.destinationOpen;
      view.querySelector("#destinationPicker").classList.toggle("open", state.destinationOpen);
    });
    view.querySelectorAll("[data-destination]:not(:disabled)").forEach((button) => button.addEventListener("click", async () => {
      const destination = destinationById(button.dataset.destination);
      if (!destination || destination.id === state.destinationId) return;
      const request = ++runtime.destinationRequest;
      const routeRequest = runtime.routeRequest;
      button.disabled = true;
      try { await loadContentPack(destination.contentPackId); }
      catch (error) { if (request === runtime.destinationRequest && routeRequest === runtime.routeRequest) { button.disabled = false; showToast("语言内容加载失败，请检查网络后重试"); } return; }
      button.disabled = false;
      if (request !== runtime.destinationRequest || routeRequest !== runtime.routeRequest || !button.isConnected) return;
      if (!saveDestination(destination.id)) return;
      const nextDestination = selectedDestination();
      renderHome();
      showToast(`已切换到${nextDestination.country} · ${nextDestination.language}`);
      maybeAskLevel();
    }));
    view.querySelector("[data-beginner]").addEventListener("click", () => {
      if (!destination) requireDestination();
      else if (loadBeginnerState().levels[destination.id] === "later") showLevelSurvey(true);
      else navigatePath("beginner");
    });
    view.querySelector("[data-continue]").addEventListener("click", () => {
      if (!destination) requireDestination();
      else if (lastScene && lastSituation) navigatePath(`learn/${lastScene.id}/${lastSituation.id}`);
      else {
        const heading = view.querySelector("#sceneHeading");
        heading.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
        heading.focus({ preventScroll: true });
      }
    });
    view.querySelectorAll("[data-scene]").forEach((button) => button.addEventListener("click", () => {
      if (!destination) requireDestination();
      else navigatePath(`scene/${button.dataset.scene}`);
    }));
    if (runtime.pendingDestinationFocus) {
      runtime.pendingDestinationFocus = false;
      requestAnimationFrame(focusDestinationPicker);
    } else {
      scrollToTop();
    }
    if (destination && !beginner.levels[destination.id]) requestAnimationFrame(maybeAskLevel);
  }

  return { sceneProgress, situationProgress, statusFor, renderHome };
    }
  };
})();
