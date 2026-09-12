(function (app) {
  "use strict";
  let deferredPrompt = null;
  let onChange = function () {};

  function isStandalone() {
    return window.matchMedia?.("(display-mode: standalone)").matches || window.navigator.standalone === true;
  }
  function isIos() { return /iphone|ipad|ipod/i.test(window.navigator.userAgent); }
  function installState() {
    if (isStandalone()) return { type: "installed" };
    if (deferredPrompt) return { type: "native" };
    if (isIos()) return { type: "ios" };
    return { type: "unavailable" };
  }
  async function promptInstall() {
    if (!deferredPrompt) return false;
    const promptEvent = deferredPrompt;
    deferredPrompt = null;
    await promptEvent.prompt();
    const choice = await promptEvent.userChoice;
    onChange();
    return choice?.outcome === "accepted";
  }
  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js", { scope: "./" }).then((registration) => {
        if (registration.waiting) console.info("旅行单词有新版本，将在应用全部关闭后启用。");
        registration.addEventListener("updatefound", () => {
          registration.installing?.addEventListener("statechange", (event) => {
            if (event.target.state === "installed" && navigator.serviceWorker.controller) {
              console.info("旅行单词的新版本已准备好，将在稍后启用。");
            }
          });
        });
      }).catch((error) => console.warn("Service Worker 注册失败", error));
    });
  }
  function init(callback) {
    onChange = typeof callback === "function" ? callback : onChange;
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredPrompt = event;
      onChange();
    });
    window.addEventListener("appinstalled", () => {
      deferredPrompt = null;
      onChange();
    });
    registerServiceWorker();
  }
  app.pwa = { init, installState, promptInstall, isStandalone };
})(window.TravelVocabApp = window.TravelVocabApp || {});
