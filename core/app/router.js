(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["router"] = {
    exports: ["parseRoute", "routeTab", "navigatePath", "updateShell", "focusDestinationPicker", "openDestinationPicker", "requireDestination", "maybeAskLevel", "showLevelSurvey", "renderRoute"],
    create(ctx) {
  const { MAIN_TABS, view, bottomNav, state, runtime } = ctx;
  const { loadContentPack, escapeHtml, showToast, currentPack, selectedDestination, loadBeginnerState, saveBeginnerState, validateData, renderHome, renderBeginnerRoute, renderScene, beginLearningRoute, renderReview, renderFavorites, renderTools, renderFootprints, renderChecklist, renderEmergencyCardForm, renderEmergencyCardPreview, renderMe, renderError, loadBeginnerModule, stopSpeech, renderLookup, renderShow, restoreShowOrigin } = ctx.actions;
  function parseRoute() {
    const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts[0] === "lookup") return { name: "lookup" };
    if (parts[0] === "show") return { name: "show", entryId: parts[1] || "" };
    if (!parts.length) return { name: "home" };
    if (parts[0] === "beginner") return { name: "beginner", page: parts[1] || "overview", lessonId: parts[2] || null };
    if (parts[0] === "review" && parts[1] === "favorites") return { name: "favorites" };
    if (parts[0] === "me" && parts[1] === "footprints") return { name: "footprints" };
    if (parts[0] === "tools" && parts[1] === "trips") return { name: "footprints", legacy: true };
    if (parts[0] === "tools" && parts[1] === "checklist") return { name: "checklist" };
    if (parts[0] === "tools" && parts[1] === "emergency-card") {
      return { name: parts[2] === "preview" ? "emergency-card-preview" : "emergency-card-form" };
    }
    if (MAIN_TABS.has(parts[0])) return { name: parts[0] };
    if (parts[0] === "scene" && parts[1]) return { name: "scene", sceneId: parts[1] };
    if (parts[0] === "learn" && parts[1] && parts[2]) {
      return { name: "learn", sceneId: parts[1], situationId: parts[2] };
    }
    return { name: "home" };
  }

  function routeTab(route) {
    if (route.name === "lookup" || route.name === "show") return "tools";
    if (route.name === "beginner") return "home";
    if (route.name === "scene" || route.name === "learn") return "home";
    if (route.name === "favorites") return "review";
    if (route.name === "footprints") return "me";
    if (route.name.startsWith("emergency-card") || route.name === "checklist") return "tools";
    return MAIN_TABS.has(route.name) ? route.name : "home";
  }

  function navigatePath(path, replace = false) {
    const hash = `#/${String(path).replace(/^#?\/?/, "")}`;
    if (window.location.hash === hash) {
      renderRoute();
      return;
    }
    if (replace) {
      history.replaceState(null, "", hash);
      renderRoute();
    } else {
      window.location.hash = hash;
    }
  }

  function updateShell(tab, immersive = false) {
    document.body.classList.toggle("is-immersive", immersive);
    document.body.classList.toggle("is-show", parseRoute().name === "show");
    bottomNav.hidden = immersive;
    if (immersive) return;
    bottomNav.querySelectorAll(".nav-item").forEach((item) => {
      if (item.dataset.tab === tab) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
  }

  function focusDestinationPicker() {
    const picker = view.querySelector("#destinationPicker");
    if (!picker) return;
    picker.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    picker.focus({ preventScroll: true });
  }

  function openDestinationPicker(message) {
    state.destinationOpen = true;
    runtime.pendingDestinationFocus = true;
    if (message) showToast(message);
    if (parseRoute().name === "home") {
      renderHome();
    } else {
      navigatePath("home", true);
    }
  }

  function requireDestination() {
    openDestinationPicker("请先选择目的地和语言");
  }

  function maybeAskLevel() {
    const destination = selectedDestination();
    if (!destination || loadBeginnerState().levels[destination.id] || runtime.levelSurveyOpen) return;
    showLevelSurvey();
  }

  function showLevelSurvey(fromEntry = false) {
    const destination = selectedDestination();
    if (!destination || runtime.levelSurveyOpen) return;
    runtime.levelSurveyOpen = true;
    const previousFocus = document.activeElement;
    const overlay = document.createElement("div");
    overlay.className = "level-overlay";
    const shell = document.getElementById("appShell");
    shell.inert = true;
    overlay.innerHTML = `<section class="level-dialog" role="dialog" aria-modal="true" aria-labelledby="levelTitle" aria-describedby="levelDescription">
      <span class="eyebrow">${escapeHtml(destination.country)} · ${escapeHtml(destination.language)}</span>
      <h2 id="levelTitle">你现在能读这种语言吗？</h2>
      <p id="levelDescription">选一个最接近的情况，我们会推荐合适的旅行认读路线。旅行场景随时可以进入。</p>
      <button class="level-choice" type="button" data-level="zero"><strong>零基础</strong><span>从文字与声音的对应关系开始</span></button>
      <button class="level-choice" type="button" data-level="some"><strong>有一定基础</strong><span>先做一次认读测试，再决定是否跳过</span></button>
      <button class="text-btn level-later" type="button" data-level="later">稍后再说</button>
    </section>`;
    document.body.append(overlay);
    const close = (level) => {
      const beginner = loadBeginnerState();
      beginner.levels[destination.id] = level;
      saveBeginnerState(beginner);
      overlay.remove();
      runtime.levelSurveyOpen = false;
      shell.inert = false;
      previousFocus?.focus?.();
      if (level === "later") { if (fromEntry) navigatePath("beginner"); return; }
      if (currentPack()?.features?.beginnerModule) navigatePath(level === "some" ? "beginner/placement" : "beginner");
      else if (fromEntry) navigatePath("beginner");
      else if (state.tab === "home") renderHome();
    };
    overlay.querySelectorAll("[data-level]").forEach((button) => button.addEventListener("click", () => close(button.dataset.level)));
    overlay.addEventListener("keydown", (event) => {
      if (event.key === "Escape") { event.preventDefault(); close("later"); }
      if (event.key !== "Tab") return;
      const buttons = Array.from(overlay.querySelectorAll("button"));
      const index = buttons.indexOf(document.activeElement);
      if (event.shiftKey && index <= 0) { event.preventDefault(); buttons.at(-1).focus(); }
      else if (!event.shiftKey && index === buttons.length - 1) { event.preventDefault(); buttons[0].focus(); }
    });
    overlay.querySelector("button").focus();
  }

  async function renderRoute() {
    runtime.disposeTools?.();
    const request = ++runtime.routeRequest;
    const route = parseRoute();
    stopSpeech();
    const destination = selectedDestination();
    const pack = destination && window.TRAVEL_CONTENT?.get(destination.contentPackId);
    if (destination && (!pack || route.name === "beginner")) {
      updateShell(routeTab(route), route.name === "beginner");
      view.innerHTML = '<p class="setting-note" role="status">正在加载当前语言内容…</p>';
      try {
        await loadContentPack(destination.contentPackId);
        if (request !== runtime.routeRequest) return;
        if (route.name === "beginner") await loadBeginnerModule(destination.contentPackId);
      } catch (error) {
        if (request !== runtime.routeRequest) return;
        renderError([error.message]);
        view.insertAdjacentHTML("beforeend", '<div class="load-error-actions"><button class="primary-btn" data-load-retry>重新加载</button><button class="secondary-btn" data-load-home>返回首页</button></div>');
        view.querySelector("[data-load-retry]").addEventListener("click", renderRoute);
        view.querySelector("[data-load-home]").addEventListener("click", () => navigatePath("home"));
        return;
      }
      if (request !== runtime.routeRequest) return;
    }
    const problems = validateData();
    if (problems.length) { renderError(problems); return; }
    if (route.legacy) { navigatePath("me/footprints", true); return; }
    if (!state.destinationId && ["lookup", "show", "review", "favorites", "scene", "learn", "beginner", "emergency-card-form", "emergency-card-preview"].includes(route.name)) {
      requireDestination();
      return;
    }
    state.tab = routeTab(route);
    if (route.name !== "learn" && route.name !== "show") state.learning = null;
    state.quiz = null;
    updateShell(state.tab, route.name === "show" || route.name === "learn" || route.name === "beginner" || route.name.startsWith("emergency-card") || route.name === "checklist");
    if (route.name === "lookup") renderLookup();
    else if (route.name === "show") renderShow(route.entryId);
    else if (route.name === "beginner") renderBeginnerRoute(route);
    else if (route.name === "review") renderReview();
    else if (route.name === "favorites") renderFavorites();
    else if (route.name === "tools") renderTools();
    else if (route.name === "me") renderMe();
    else if (route.name === "footprints") renderFootprints();
    else if (route.name === "checklist") renderChecklist();
    else if (route.name === "emergency-card-form") renderEmergencyCardForm();
    else if (route.name === "emergency-card-preview") void renderEmergencyCardPreview();
    else if (route.name === "scene") renderScene(route.sceneId);
    else if (route.name === "learn") beginLearningRoute(route.sceneId, route.situationId);
    else renderHome();
    restoreShowOrigin(route);
  }

  return { parseRoute, routeTab, navigatePath, updateShell, focusDestinationPicker, openDestinationPicker, requireDestination, maybeAskLevel, showLevelSurvey, renderRoute };
    }
  };
})();
