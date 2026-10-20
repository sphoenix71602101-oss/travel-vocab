(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["ui"] = {
    exports: ["escapeHtml", "actionIcon", "sceneIcon", "uiIcon", "heroImageForDestination", "shuffle", "clampInt", "showToast", "scrollToTop", "currentPack", "scenePacks", "wordBank", "langLabel", "destinationById", "destinationForLang", "selectedDestination", "sceneById", "situationById", "sceneWords", "situationWords", "foreignText", "foreignContentHtml", "audioButtonHtml", "exampleAudioButtonHtml", "exampleHtml", "bindExampleDisclosure", "favoriteIds", "favoriteButtonHtml", "syncFavoriteButtons", "hasSeenFavoriteGuide", "rememberFavoriteGuide", "maybeShowFavoriteGuide", "bindFavoriteButtons", "renderError"],
    create(ctx) {
  const { FAVORITE_GUIDE_KEY, DESTINATION_OPTIONS, DEFAULT_HERO_IMAGE, SCENE_ICON_PATHS, UI_ICON_PATHS, SPEAKER_SVG, FAVORITE_SVG, view, toastEl, state, runtime } = ctx;
  const { stopSpeech, bindSpeechButtons, updateShell } = ctx.actions;
  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function actionIcon(name) { return window.TRAVEL_ICONS.render(name); }

  function sceneIcon(sceneId) {
    const src = SCENE_ICON_PATHS[sceneId] || SCENE_ICON_PATHS.basics;
    return `<img class="scene-icon" src="${src}" alt="" width="256" height="256" decoding="async">`;
  }

  function uiIcon(name) {
    const src = UI_ICON_PATHS[name] || UI_ICON_PATHS.complete;
    return `<img class="ui-spot-icon" src="${src}" alt="" width="256" height="256" decoding="async">`;
  }

  function heroImageForDestination(destinationId) {
    return destinationById(destinationId)?.hero || DEFAULT_HERO_IMAGE;
  }

  function shuffle(input) {
    const items = input.slice();
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }

  function clampInt(value, max) {
    const number = Number(value);
    if (!Number.isFinite(number) || number < 0) return 0;
    return Math.min(Math.floor(number), max == null ? Number.MAX_SAFE_INTEGER : max);
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(runtime.toastTimer);
    runtime.toastTimer = setTimeout(() => toastEl.classList.remove("show"), 3000);
  }

  function scrollToTop() { window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }

  function currentPack() { return window.TRAVEL_CONTENT?.get(selectedDestination()?.contentPackId) || null; }

  function scenePacks() { return currentPack()?.scenes || []; }

  function wordBank() { return currentPack()?.entries || []; }

  function langLabel() { return currentPack()?.languageLabel || selectedDestination()?.language || ""; }

  function destinationById(id) { return DESTINATION_OPTIONS.find((item) => item.id === id); }

  function destinationForLang(lang) { return DESTINATION_OPTIONS.find((item) => item.status === "available" && item.lang === lang); }

  function selectedDestination() { return destinationById(state.destinationId); }

  function sceneById(id) { return scenePacks().find((scene) => scene.id === id); }

  function situationById(scene, id) { return scene?.situations.find((situation) => situation.id === id); }

  function sceneWords(sceneId) { return wordBank().filter((entry) => entry.sceneId === sceneId); }

  function situationWords(sceneId, situationId) {
    return wordBank().filter((entry) => entry.sceneId === sceneId && entry.situationId === situationId);
  }

  function foreignText(entry) { return entry.text; }

  function foreignContentHtml(entry, includeReading = true) {
    return `<span class="answer-foreign">${escapeHtml(entry.text)}</span>${includeReading && entry.pronunciation ? `<span class="answer-reading">${escapeHtml(entry.pronunciation)}</span>` : ""}`;
  }

  function audioButtonHtml(entry) {
    return `<button class="speak-btn" type="button" aria-label="播放${langLabel()}：${escapeHtml(foreignText(entry))}" data-entry-id="${escapeHtml(entry.id)}">${SPEAKER_SVG}</button>`;
  }

  function exampleAudioButtonHtml(example) {
    return `<button class="speak-btn" type="button" aria-label="播放例句：${escapeHtml(example.text)}" data-example-id="${escapeHtml(example.id)}">${SPEAKER_SVG}</button>`;
  }

  function exampleHtml(entry, expanded = false) {
    if (!entry.example) return "";
    return `<div class="entry-example${expanded ? " expanded" : ""}">
      ${expanded ? `<div class="entry-example-content"><span class="eyebrow">例句</span><div><strong>${escapeHtml(entry.example.text)}</strong>${exampleAudioButtonHtml(entry.example)}</div>${entry.example.pronunciation ? `<p>${escapeHtml(entry.example.pronunciation)}</p>` : ""}<small>${escapeHtml(entry.example.zh)}</small></div>` : `<button class="example-toggle" type="button" data-show-example aria-expanded="false">看例句</button>`}
    </div>`;
  }

  function bindExampleDisclosure(entry, root = view) {
    root.querySelector("[data-show-example]")?.addEventListener("click", (event) => {
      const container = event.currentTarget.closest(".entry-example");
      container.outerHTML = exampleHtml(entry, true);
      bindSpeechButtons(root.querySelector(".entry-example.expanded"));
    });
  }

  function favoriteIds() {
    const pack = currentPack();
    return pack ? window.TRAVEL_FAVORITES.getIds(pack.id, pack.entries) : [];
  }

  function favoriteButtonHtml(entry, extraClass = "") {
    const active = favoriteIds().includes(entry.id);
    const action = active ? "取消收藏" : "收藏";
    return `<div class="favorite-control"><button class="favorite-toggle${extraClass ? ` ${extraClass}` : ""}${active ? " is-favorite" : ""}" type="button" data-favorite-id="${escapeHtml(entry.id)}" aria-pressed="${active}" aria-label="${action}：${escapeHtml(foreignText(entry))}" title="${action}">${FAVORITE_SVG}</button></div>`;
  }

  function syncFavoriteButtons(entry, active, root = document) {
    root.querySelectorAll("[data-favorite-id]").forEach((button) => {
      if (button.dataset.favoriteId !== entry.id) return;
      button.classList.toggle("is-favorite", active);
      button.setAttribute("aria-pressed", String(active));
      button.setAttribute("aria-label", `${active ? "取消收藏" : "收藏"}：${foreignText(entry)}`);
      button.title = active ? "取消收藏" : "收藏";
    });
  }

  function hasSeenFavoriteGuide() {
    try { return localStorage.getItem(FAVORITE_GUIDE_KEY) === "1"; }
    catch (error) { return false; }
  }

  function rememberFavoriteGuide() {
    try { localStorage.setItem(FAVORITE_GUIDE_KEY, "1"); }
    catch (error) { /* no-op */ }
  }

  function maybeShowFavoriteGuide(root) {
    if (runtime.dismissFavoriteGuide || hasSeenFavoriteGuide()) return;
    const control = Array.from(root.querySelectorAll(".favorite-control")).find((item) => item.offsetParent !== null);
    if (!control) return;
    const guide = document.createElement("aside");
    guide.className = "favorite-guide";
    guide.setAttribute("role", "dialog");
    guide.setAttribute("aria-label", "收藏功能提示");
    guide.innerHTML = `<strong>遇到常用表达，点星标收藏</strong><p>之后可在「复习 → 收藏夹」快速找到</p><button type="button" data-dismiss-favorite-guide>知道了</button>`;
    control.append(guide);
    let outsideTimer = null;
    const onOutside = (event) => { if (!control.contains(event.target)) dismiss(); };
    const onKeydown = (event) => { if (event.key === "Escape") dismiss(); };
    const dismiss = () => {
      rememberFavoriteGuide();
      clearTimeout(outsideTimer);
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("keydown", onKeydown);
      guide.remove();
      runtime.dismissFavoriteGuide = null;
    };
    runtime.dismissFavoriteGuide = dismiss;
    guide.querySelector("[data-dismiss-favorite-guide]").addEventListener("click", (event) => {
      event.stopPropagation();
      dismiss();
    });
    document.addEventListener("keydown", onKeydown);
    outsideTimer = setTimeout(() => document.addEventListener("pointerdown", onOutside), 0);
  }

  function bindFavoriteButtons(root = view, onChange) {
    root.querySelectorAll("[data-favorite-id]").forEach((button) => button.addEventListener("click", (event) => {
      event.stopPropagation();
      runtime.dismissFavoriteGuide?.();
      const entry = wordBank().find((item) => item.id === button.dataset.favoriteId);
      const pack = currentPack();
      if (!entry || !pack) return;
      const result = window.TRAVEL_FAVORITES.toggle(pack.id, entry.id, pack.entries);
      syncFavoriteButtons(entry, result.favorite);
      showToast(result.favorite ? "已加入收藏夹" : "已取消收藏");
      onChange?.(entry, result.favorite);
    }));
    maybeShowFavoriteGuide(root);
  }

  function renderError(problems) {
    stopSpeech();
    updateShell("home");
    view.innerHTML = `<section class="error-state" role="alert"><span aria-hidden="true">${uiIcon("warning")}</span><h2>内容暂时无法打开</h2><p>请检查目的地语言包后刷新页面。</p><ul>${problems.slice(0, 10).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`;
  }

  return { escapeHtml, actionIcon, sceneIcon, uiIcon, heroImageForDestination, shuffle, clampInt, showToast, scrollToTop, currentPack, scenePacks, wordBank, langLabel, destinationById, destinationForLang, selectedDestination, sceneById, situationById, sceneWords, situationWords, foreignText, foreignContentHtml, audioButtonHtml, exampleAudioButtonHtml, exampleHtml, bindExampleDisclosure, favoriteIds, favoriteButtonHtml, syncFavoriteButtons, hasSeenFavoriteGuide, rememberFavoriteGuide, maybeShowFavoriteGuide, bindFavoriteButtons, renderError };
    }
  };
})();
