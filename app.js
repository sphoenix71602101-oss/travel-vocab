(function () {
  "use strict";
  const ctx = window.createTravelAppContext();
  ctx.bottomNav.querySelectorAll("[data-nav-icon]").forEach((element) => {
    element.innerHTML = window.TRAVEL_ICONS.render(element.dataset.navIcon);
  });
  const implementations = {};
  ctx.actions = {};
  const modules = Object.values(window.TravelAppModules);
  for (const module of modules) {
    for (const name of module.exports) {
      if (ctx.actions[name]) throw new Error(`Duplicate application action: ${name}`);
      ctx.actions[name] = (...args) => implementations[name](...args);
    }
  }
  for (const module of modules) Object.assign(implementations, module.create(ctx));
  const { migrateLegacyData, initializeDestination, renderRoute, setupInstallPrompt, registerServiceWorker } = ctx.actions;
  migrateLegacyData();
  initializeDestination();
  if (!window.location.hash) history.replaceState(null, "", "#/home");
  window.addEventListener("hashchange", renderRoute);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && window.location.hash === "#/review" && !ctx.state.quiz) void renderRoute();
  });
  setupInstallPrompt();
  registerServiceWorker();
  void renderRoute();
})();
