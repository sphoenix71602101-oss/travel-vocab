(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["favorites-view"] = {
    exports: ["favoriteEntryCardHtml", "favoriteSectionHtml", "favoriteResultsHtml", "bindFavoriteEntryCards", "renderFavorites"],
    create(ctx) {
  const { FAVORITE_SEARCH_LIMIT, view, state } = ctx;
  const { escapeHtml, actionIcon, uiIcon, scrollToTop, currentPack, wordBank, langLabel, sceneById, situationById, foreignText, audioButtonHtml, exampleHtml, bindExampleDisclosure, favoriteIds, favoriteButtonHtml, bindFavoriteButtons, stopSpeech, bindSpeechButtons, navigatePath, updateShell, showEntryButton, bindShowButtons } = ctx.actions;
  function favoriteEntryCardHtml(entry) {
    const scene = sceneById(entry.sceneId);
    const situation = situationById(scene, entry.situationId);
    return `<article class="favorite-entry-card" data-favorite-card="${escapeHtml(entry.id)}">
      <div class="favorite-entry-meta"><span>${escapeHtml(scene?.name || "旅行场景")} · ${escapeHtml(situation?.name || "常用表达")} · ${entry.kind === "phrase" ? "短句" : "词汇"}</span>${favoriteButtonHtml(entry)}</div>
      <div class="favorite-entry-main"><div><strong>${escapeHtml(foreignText(entry))}</strong>${entry.pronunciation ? `<p>${escapeHtml(entry.pronunciation)}</p>` : ""}<span>${escapeHtml(entry.zh)}</span></div>${audioButtonHtml(entry)}</div>
      ${showEntryButton(entry)}
      ${exampleHtml(entry)}
    </article>`;
  }

  function favoriteSectionHtml(title, entries, description = "") {
    if (!entries.length) return "";
    return `<section class="favorite-results-section"><div class="section-heading"><div><h2>${escapeHtml(title)}</h2>${description ? `<p>${escapeHtml(description)}</p>` : ""}</div><span>${entries.length} 条</span></div><div class="favorite-entry-list">${entries.map(favoriteEntryCardHtml).join("")}</div></section>`;
  }

  function favoriteResultsHtml(query) {
    const ids = favoriteIds();
    const favoriteSet = new Set(ids);
    const byId = new Map(wordBank().map((entry) => [entry.id, entry]));
    if (!query.trim()) {
      const entries = ids.map((id) => byId.get(id)).filter(Boolean);
      if (entries.length) return favoriteSectionHtml("我的收藏", entries, "最近收藏的内容排在前面");
      return `<div class="empty-state favorite-empty"><span aria-hidden="true">${uiIcon("favorite")}</span><strong>还没有收藏内容</strong><p>搜索常用表达，或在学习和复习时点击星标。</p></div>`;
    }
    const matches = window.TRAVEL_FAVORITES.searchEntries(wordBank(), query, currentPack()?.locale);
    if (!matches.length) return `<div class="empty-state favorite-empty is-search-empty"><span aria-hidden="true">${actionIcon("search")}</span><strong>没有找到相关表达</strong><p>试试更短的中文、${langLabel()}或读音关键词。</p></div>`;
    const saved = matches.filter((entry) => favoriteSet.has(entry.id));
    const available = matches.filter((entry) => !favoriteSet.has(entry.id));
    const visibleAvailable = available.slice(0, FAVORITE_SEARCH_LIMIT);
    return `${favoriteSectionHtml("已收藏", saved)}${favoriteSectionHtml("更多词句", visibleAvailable)}${available.length > FAVORITE_SEARCH_LIMIT ? `<p class="search-limit-note">还有 ${available.length - FAVORITE_SEARCH_LIMIT} 条结果，请继续输入以缩小范围。</p>` : ""}`;
  }

  function bindFavoriteEntryCards(root, refresh) {
    bindSpeechButtons(root);
    bindShowButtons(root);
    bindFavoriteButtons(root, refresh);
    root.querySelectorAll("[data-favorite-card]").forEach((card) => {
      const entry = wordBank().find((item) => item.id === card.dataset.favoriteCard);
      if (entry) bindExampleDisclosure(entry, card);
    });
  }

  function renderFavorites() {
    stopSpeech();
    updateShell("review");
    view.innerHTML = `<div class="page-enter favorites-page">
      <button class="back-link" type="button" data-favorites-back>${actionIcon("arrowLeft")}返回复习</button>
      <header class="screen-heading"><span class="eyebrow">随时快速找到</span><h1>收藏夹</h1><p>收好旅途中常用的词句，也能搜索更多${escapeHtml(langLabel())}内容，找到后点星标收藏。</p></header>
      <form class="favorite-search" role="search">
        <label for="favoriteSearch">搜索收藏或查找更多词句</label>
        <div class="search-input-row">${actionIcon("search")}<input id="favoriteSearch" name="query" type="search" inputmode="search" autocomplete="off" aria-describedby="favoriteSearchHint" placeholder="搜索收藏或查找更多词句" value="${escapeHtml(state.favoriteQuery)}"><button class="text-btn" type="button" data-clear-favorite-search${state.favoriteQuery ? "" : " hidden"}>清除</button></div>
        <small id="favoriteSearchHint">支持中文、${escapeHtml(langLabel())}或读音，已收藏和更多词句会分开展示。</small>
      </form>
      <div id="favoriteResults" aria-live="polite">${favoriteResultsHtml(state.favoriteQuery)}</div>
    </div>`;
    const input = view.querySelector("#favoriteSearch");
    const results = view.querySelector("#favoriteResults");
    const clear = view.querySelector("[data-clear-favorite-search]");
    const refresh = () => {
      results.innerHTML = favoriteResultsHtml(state.favoriteQuery);
      bindFavoriteEntryCards(results, refresh);
    };
    input.addEventListener("input", () => {
      state.favoriteQuery = input.value;
      clear.hidden = !state.favoriteQuery;
      refresh();
    });
    view.querySelector(".favorite-search").addEventListener("submit", (event) => event.preventDefault());
    clear.addEventListener("click", () => {
      state.favoriteQuery = "";
      input.value = "";
      clear.hidden = true;
      refresh();
      input.focus();
    });
    view.querySelector("[data-favorites-back]").addEventListener("click", () => navigatePath("review"));
    bindFavoriteEntryCards(results, refresh);
    scrollToTop();
  }

  return { favoriteEntryCardHtml, favoriteSectionHtml, favoriteResultsHtml, bindFavoriteEntryCards, renderFavorites };
    }
  };
})();
