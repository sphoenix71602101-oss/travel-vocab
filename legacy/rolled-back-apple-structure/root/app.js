(function (app) {
  "use strict";
  const view = document.getElementById("view");
  const primaryNav = document.getElementById("primaryNav");
  const toast = document.getElementById("toast");
  let toastTimer = null;
  let onboardingLanguage = app.storage.getLanguage();
  let selectedContentTab = "words";
  let currentRoute = { name: "learn", path: "learn", section: "learn" };

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  }
  function currentLanguage() { return app.catalog.language(app.storage.getLanguage() || "ja"); }
  function render(route) {
    currentRoute = route || router.current();
    app.audio.stop();
    if (!app.storage.onboardingComplete()) {
      primaryNav.hidden = true;
      view.innerHTML = app.views.onboarding(onboardingLanguage);
      return;
    }
    primaryNav.hidden = false;
    primaryNav.innerHTML = app.views.navigation(currentRoute.section);
    const language = currentLanguage();
    const pwaState = app.pwa.installState();
    if (currentRoute.name === "learn") view.innerHTML = app.views.learn(language, pwaState, app.storage.installHintDismissed());
    else if (currentRoute.name === "foundation") view.innerHTML = app.views.foundation();
    else if (currentRoute.name === "scenario") {
      const scenario = app.catalog.scenario(currentRoute.id);
      view.innerHTML = scenario ? app.views.scenarioPage(scenario, language, selectedContentTab) : app.views.learn(language, pwaState, app.storage.installHintDismissed());
    } else if (currentRoute.name === "self-test") view.innerHTML = app.views.selfTest(app.storage.learningSummary());
    else if (currentRoute.name === "tools") view.innerHTML = app.views.tools();
    else view.innerHTML = app.views.me(language, app.storage.learningSummary(), pwaState);
    document.title = currentRoute.name === "learn" ? "学习 · 旅行单词" : "旅行单词 · 日语 / 英语";
    view.focus({ preventScroll: true });
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  const router = app.router.create((route) => {
    if (route.path !== currentRoute.path) selectedContentTab = "words";
    render(route);
  });

  document.addEventListener("click", async (event) => {
    const routeLink = event.target.closest("[data-route]");
    if (routeLink) { event.preventDefault(); router.navigate(routeLink.dataset.route); return; }
    const onboardingChoice = event.target.closest("[data-onboarding-language]");
    if (onboardingChoice) { onboardingLanguage = onboardingChoice.dataset.onboardingLanguage; render(currentRoute); return; }
    if (event.target.closest("[data-complete-onboarding]")) {
      if (!onboardingLanguage) { showToast("请先选择日语或英语"); return; }
      if (app.storage.completeOnboarding(onboardingLanguage)) render(currentRoute);
      else showToast("无法保存设置，请检查浏览器存储权限");
      return;
    }
    const languageButton = event.target.closest("[data-set-language]");
    if (languageButton) { app.storage.setLanguage(languageButton.dataset.setLanguage); render(currentRoute); return; }
    const tab = event.target.closest("[data-content-tab]");
    if (tab) { selectedContentTab = tab.dataset.contentTab; render(currentRoute); return; }
    const speaker = event.target.closest("[data-speak-id]");
    if (speaker) {
      const entry = (window.WORD_BANK || []).find((item) => item.id === speaker.dataset.speakId);
      if (!entry) return;
      speaker.classList.add("playing");
      const played = await app.audio.play(entry, currentLanguage().id);
      speaker.classList.remove("playing");
      if (!played) showToast("发音暂时无法播放，请检查网络或系统语音设置");
      return;
    }
    if (event.target.closest("[data-install]")) {
      const installed = await app.pwa.promptInstall();
      if (!installed && app.pwa.installState().type !== "installed") showToast("可以稍后从浏览器菜单安装");
      return;
    }
    if (event.target.closest("[data-dismiss-install]")) { app.storage.dismissInstallHint(); render(currentRoute); return; }
    if (event.target.closest("[data-reset-learning]")) {
      if (window.confirm("确定清除旧版学习记录和错题吗？语言选择不会改变。")) {
        app.storage.resetLearningData(); render(currentRoute); showToast("学习记录已清除");
      }
    }
  });

  app.pwa.init(() => { if (app.storage.onboardingComplete()) render(currentRoute); });
  router.start();
})(window.TravelVocabApp = window.TravelVocabApp || {});
