(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["profile"] = {
    exports: ["isStandalone", "isAppleMobile", "installPromptHtml", "bindInstallPrompt", "renderMe", "resetData", "setupInstallPrompt", "registerServiceWorker"],
    create(ctx) {
  const { LEARNING_KEY, INSTALL_HINT_KEY, BEGINNER_KEY, DESTINATION_OPTIONS, CLOUD_SVG, view, state, runtime } = ctx;
  const { escapeHtml, uiIcon, showToast, scrollToTop, selectedDestination, loadLearningEnvelope, summarizeLearningEnvelope, stopSpeech, navigatePath, openDestinationPicker, requireDestination } = ctx.actions;
  function isStandalone() {
    return window.matchMedia?.("(display-mode: standalone)").matches === true || window.navigator.standalone === true;
  }

  function isAppleMobile() {
    const agent = String(window.navigator.userAgent || "");
    return /iPhone|iPad|iPod/i.test(agent) || (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
  }

  function installPromptHtml() {
    if (isStandalone()) return '<p class="setting-note">语见世界已安装在当前设备上。</p>';
    if (isAppleMobile()) return '<p class="setting-note">点击浏览器分享按钮，然后选择“添加到主屏幕”。</p>';
    if (runtime.deferredInstallPrompt) return '<button class="secondary-btn compact" type="button" data-install-app>安装到当前设备</button>';
    return '<p class="setting-note">可通过支持 PWA 的浏览器菜单安装到设备。</p>';
  }

  function bindInstallPrompt() {
    view.querySelector("[data-install-app]")?.addEventListener("click", async (event) => {
      if (!runtime.deferredInstallPrompt) return;
      const button = event.currentTarget;
      button.disabled = true;
      button.textContent = "正在打开…";
      try {
        await runtime.deferredInstallPrompt.prompt();
        await runtime.deferredInstallPrompt.userChoice;
      } catch (error) {
        console.warn("无法打开安装提示", error);
      }
      runtime.deferredInstallPrompt = null;
      if (state.tab === "me") renderMe();
    });
  }

  function renderMe() {
    stopSpeech();
    const destination = selectedDestination();
    const summary = summarizeLearningEnvelope(loadLearningEnvelope());
    const destinationIds = DESTINATION_OPTIONS.map((item) => item.id);
    const footprintStatuses = window.TRAVEL_FOOTPRINTS.getAll(destinationIds);
    const visitedCount = Object.values(footprintStatuses).filter((status) => status === window.TRAVEL_FOOTPRINTS.STATUS_VISITED).length;
    const wishlistCount = Object.values(footprintStatuses).filter((status) => status === window.TRAVEL_FOOTPRINTS.STATUS_WISHLIST).length;
    const currentLearningHtml = destination
      ? `<section class="current-learning-card" aria-labelledby="currentLearningTitle"><span class="current-learning-flag" aria-hidden="true"><img src="${destination.flagSrc}" width="384" height="256" alt=""></span><div class="current-learning-copy"><span class="eyebrow">当前目的地</span><h3 id="currentLearningTitle">${escapeHtml(destination.country)} · ${escapeHtml(destination.language)}</h3><p>${escapeHtml(destination.nativeLabel)}，学习这趟旅程真正用得上的表达。</p></div><button class="secondary-btn compact current-learning-action" type="button" data-change-destination>切换</button></section>`
      : `<section class="current-learning-card empty" aria-labelledby="currentLearningTitle"><span class="current-learning-empty" aria-hidden="true">--</span><div class="current-learning-copy"><h3 id="currentLearningTitle">尚未选择目的地</h3><p>选择后会在这里显示当前学习语言。</p></div><button class="secondary-btn compact current-learning-action" type="button" data-choose-destination>选择目的地</button></section>`;
    view.innerHTML = `<div class="page-enter settings-page">
      <header class="screen-heading"><span class="eyebrow">本地个人档案</span><h1>我的</h1><p>查看学习进度、旅行足迹与当前设备设置。</p></header>
      <section class="profile-card" aria-labelledby="profileName"><span class="profile-avatar"><img src="icons/icon-192.png" width="72" height="72" alt="语见世界应用图标，作为游客头像"></span><div class="profile-copy"><span class="local-status-badge">本地使用</span><h2 id="profileName">旅行学习者</h2><p>登录功能开放后，可跨设备同步学习进度、收藏和足迹。</p></div><div class="account-preview" aria-label="账号与云同步，即将开放"><span class="account-preview-icon" aria-hidden="true">${CLOUD_SVG}</span><span><strong>账号与云同步</strong><small>为未来的云端个人档案预留</small></span><span class="planned-badge">即将开放</span></div></section>
      <div class="section-heading profile-section-heading"><div><span class="eyebrow">全部语言</span><h2>学习概览</h2></div></div>
      <section class="learning-data-card" aria-label="全部语言学习数据"><div><strong>${summary.learned}</strong><span>已学习</span></div><div><strong>${summary.mastered}</strong><span>已掌握</span></div><div><strong>${summary.weak}</strong><span>需加强</span></div></section>
      <div class="section-heading profile-section-heading"><div><span class="eyebrow">当前选择</span><h2>当前学习</h2></div></div>
      ${currentLearningHtml}
      <div class="section-heading profile-section-heading"><div><span class="eyebrow">个人记录</span><h2>我的旅行</h2></div></div>
      <button class="travel-profile-card" type="button" data-open-footprints><span class="feature-icon teal" aria-hidden="true">${uiIcon("trip")}</span><span><strong>旅行足迹</strong><small>${visitedCount ? `去过 ${visitedCount} 个目的地` : "还没有记录去过的目的地"} · ${wishlistCount ? `想去 ${wishlistCount} 个` : "暂无想去记录"}</small></span><b>查看旅行足迹 <i aria-hidden="true">›</i></b></button>
      <div class="section-heading settings-heading"><div><span class="eyebrow">当前设备</span><h2>应用设置</h2></div></div>
      <section class="settings-list">
        <div class="settings-row"><div class="setting-heading"><span class="setting-icon blue" aria-hidden="true">${uiIcon("install")}</span><div><h3>安装 App</h3><p>从主屏幕更快打开</p></div></div><div class="setting-action">${installPromptHtml()}</div></div>
        <div class="settings-row"><div class="setting-heading"><span class="setting-icon teal" aria-hidden="true">${uiIcon("privacy")}</span><div><h3>数据与隐私</h3><p>学习数据和偏好目前仅保存在当前设备，不会自动上传。</p></div></div></div>
      </section>
      <section class="data-management-card" aria-labelledby="dataManagementTitle"><div class="setting-heading"><span class="setting-icon red" aria-hidden="true">${uiIcon("deleteData")}</span><div><h3 id="dataManagementTitle">数据管理</h3><p>清除场景学习数据、认读进度和水平选择；目的地选择会保留。</p></div></div><button class="danger-btn" type="button" data-reset>清除全部学习数据</button></section>
      <aside class="journey-quote without-icon" aria-label="旅行寄语"><p>语言或许不同，<br>但对世界的好奇心相同</p></aside>
    </div>`;
    view.querySelector("[data-choose-destination]")?.addEventListener("click", requireDestination);
    view.querySelector("[data-change-destination]")?.addEventListener("click", () => openDestinationPicker());
    view.querySelector("[data-open-footprints]").addEventListener("click", () => navigatePath("me/footprints"));
    view.querySelector("[data-reset]").addEventListener("click", resetData);
    bindInstallPrompt();
    scrollToTop();
  }

  function resetData() {
    if (!window.confirm("确定清除全部学习数据与旅行认读进度吗？目的地选择会保留。")) return;
    stopSpeech();
    try { localStorage.removeItem(LEARNING_KEY); localStorage.removeItem(BEGINNER_KEY); }
    catch (error) { console.warn("无法清除学习数据", error); }
    renderMe();
    showToast("全部学习数据已清除");
  }

  function setupInstallPrompt() {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      runtime.deferredInstallPrompt = event;
      if (state.tab === "me") renderMe();
    });
    window.addEventListener("appinstalled", () => {
      runtime.deferredInstallPrompt = null;
      try { localStorage.setItem(INSTALL_HINT_KEY, "1"); } catch (error) { /* no-op */ }
      if (state.tab === "me") renderMe();
    });
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js", { scope: "./" })
        .catch((error) => console.warn("Service Worker 注册失败", error));
    });
  }

  return { isStandalone, isAppleMobile, installPromptHtml, bindInstallPrompt, renderMe, resetData, setupInstallPrompt, registerServiceWorker };
    }
  };
})();
