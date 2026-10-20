(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules.lookup = {
    exports: ["renderLookup", "showEntryButton", "bindShowButtons", "renderShow", "restoreShowOrigin"],
    create({ view, state, actions }) {
      const { escapeHtml, actionIcon, wordBank, currentPack, scenePacks, favoriteIds, favoriteEntryCardHtml, bindFavoriteEntryCards, audioButtonHtml, bindSpeechButtons, navigatePath, updateShell, stopSpeech, scrollToTop } = actions;

      function showEntryButton(entry) {
        return `<button class="show-entry-btn" type="button" data-show-entry="${escapeHtml(entry.id)}">${actionIcon("show")}给对方看</button>`;
      }
      function bindShowButtons(root = view) {
        root.querySelectorAll("[data-show-entry]").forEach((button) => button.addEventListener("click", () => {
          state.showReturn = { hash: window.location.hash, scroll: window.scrollY, packId: currentPack().id, entryId: button.dataset.showEntry };
          navigatePath(`show/${encodeURIComponent(button.dataset.showEntry)}`);
        }));
      }
      function restoreShowOrigin(route) {
        const origin = state.showReturn;
        if (route.name === "show" || !origin) return;
        state.showReturn = null;
        if (origin.hash !== window.location.hash || origin.packId !== currentPack()?.id) return;
        requestAnimationFrame(() => {
          const target = Array.from(view.querySelectorAll("[data-show-entry]")).find((button) => button.dataset.showEntry === origin.entryId);
          target?.focus({ preventScroll: true });
          window.scrollTo({ top: origin.scroll, behavior: "auto" });
        });
      }
      function renderLookup() {
        stopSpeech();
        updateShell("tools");
        const model = state.lookup;
        view.innerHTML = `<div class="lookup-page page-enter">
          <header class="screen-heading"><span class="eyebrow">随身表达 · ${escapeHtml(currentPack().languageLabel)}</span><h1>常用表达速查</h1><p>找到这句话，听一遍，或直接给对方看。</p></header>
          <form class="favorite-search lookup-search" role="search">
            <label for="lookupInput">搜索中文、外语或读音</label>
            <div class="search-input-row">${actionIcon("search")}<input id="lookupInput" type="search" autocomplete="off" placeholder="例如：洗手间、多少钱" value="${escapeHtml(model.query)}"><button class="text-btn" type="button" data-lookup-clear${model.query ? "" : " hidden"}>清除</button></div>
            <label for="lookupScene">旅行场景</label>
            <select id="lookupScene"><option value="">全部场景</option>${scenePacks().map((scene) => `<option value="${escapeHtml(scene.id)}"${model.sceneId === scene.id ? " selected" : ""}>${escapeHtml(scene.name)}</option>`).join("")}</select>
          </form>
          <p class="lookup-count" id="lookupCount" role="status"></p><div id="lookupResults"></div>
          <button class="secondary-btn lookup-more" type="button" data-lookup-more hidden>再显示 50 条</button>
        </div>`;
        const input = view.querySelector("#lookupInput");
        const results = view.querySelector("#lookupResults");
        const more = view.querySelector("[data-lookup-more]");
        const clear = view.querySelector("[data-lookup-clear]");
        let composing = false;
        function refresh() {
          const entries = wordBank();
          let matches;
          if (model.query.trim()) matches = window.TRAVEL_SEARCH.searchEntries(entries, model.query, currentPack().locale);
          else if (model.sceneId) matches = entries;
          else {
            const byId = new Map(entries.map((entry) => [entry.id, entry]));
            matches = favoriteIds().map((id) => byId.get(id)).filter(Boolean);
          }
          if (model.sceneId) matches = matches.filter((entry) => entry.sceneId === model.sceneId);
          const visible = matches.slice(0, model.limit);
          view.querySelector("#lookupCount").textContent = `${!model.query.trim() && !model.sceneId ? "我的收藏" : "匹配表达"} · 显示 ${visible.length} / ${matches.length} 条`;
          results.innerHTML = visible.length ? `<div class="favorite-entry-list">${visible.map(favoriteEntryCardHtml).join("")}</div>` : `<div class="empty-state"><strong>${model.query.trim() || model.sceneId ? "没有找到相关表达" : "从一句常用表达开始"}</strong><p>${model.query.trim() || model.sceneId ? "试试更短的关键词，或切换旅行场景。" : "输入关键词或选择场景；收藏的表达会显示在这里。"}</p></div>`;
          more.hidden = matches.length <= model.limit;
          clear.hidden = !model.query;
          bindFavoriteEntryCards(results, refresh);
        }
        function search() { model.query = input.value; model.limit = 50; refresh(); }
        input.addEventListener("compositionstart", () => { composing = true; });
        input.addEventListener("compositionend", () => { composing = false; search(); });
        input.addEventListener("input", () => { if (!composing) search(); });
        view.querySelector("form").addEventListener("submit", (event) => { event.preventDefault(); if (!composing) search(); });
        view.querySelector("#lookupScene").addEventListener("change", (event) => { model.sceneId = event.target.value; model.limit = 50; refresh(); });
        clear.addEventListener("click", () => { input.value = ""; search(); input.focus(); });
        more.addEventListener("click", () => { model.limit += 50; refresh(); if (more.hidden) view.querySelector("#lookupCount").scrollIntoView({ block: "nearest" }); });
        refresh();
        scrollToTop();
      }
      function renderShow(encodedId) {
        stopSpeech();
        updateShell("tools", true);
        let id;
        try { id = decodeURIComponent(encodedId); } catch { id = ""; }
        const entry = wordBank().find((item) => item.id === id);
        const pack = currentPack();
        view.innerHTML = `<div class="show-page page-enter">
          <header class="show-header"><button class="text-btn" type="button" data-show-close>${actionIcon("arrowLeft")}返回</button><span>给对方看 · ${escapeHtml(pack.languageLabel)}</span></header>
          ${entry ? `<section class="show-message" aria-labelledby="showText"><h1 id="showText" tabindex="-1" lang="${escapeHtml(pack.locale)}">${escapeHtml(entry.text)}</h1><p>${escapeHtml(entry.zh)}</p></section><div class="show-audio">${audioButtonHtml(entry)}<span>播放这句话</span></div>` : '<section class="empty-state"><h1 id="showText" tabindex="-1">找不到这条表达</h1><p>返回速查，重新选择当前语言的表达。</p></section>'}
        </div>`;
        const close = () => {
          if (state.showReturn?.packId === pack.id) history.back();
          else navigatePath("lookup", true);
        };
        view.querySelector("[data-show-close]").addEventListener("click", close);
        view.querySelector(".show-page").addEventListener("keydown", (event) => { if (event.key === "Escape") { event.preventDefault(); close(); } });
        bindSpeechButtons(view);
        scrollToTop();
        requestAnimationFrame(() => view.querySelector("#showText")?.focus({ preventScroll: true }));
      }
      return { renderLookup, showEntryButton, bindShowButtons, renderShow, restoreShowOrigin };
    }
  };
})();
