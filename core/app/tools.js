(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["tools"] = {
    exports: ["renderTools", "openToolDialog", "footprintStatusMeta", "footprintStatusShape", "showFootprintStatusDialog", "renderFootprints", "showChecklistItemDialog", "showChecklistRecommendationsDialog", "renderChecklist"],
    create(ctx) {
  const { DESTINATION_OPTIONS, view, state, runtime } = ctx;
  const { escapeHtml, uiIcon, showToast, scrollToTop, currentPack, destinationById, selectedDestination, stopSpeech, playAudio, navigatePath, requireDestination } = ctx.actions;
  const TRANSLATE_TIMEOUT_MS = 20000;
  const NETWORK_MESSAGE = "网络连接异常，请稍后重试";
  function translationError(status, error) {
    // Backend messages are untrusted: only known public errors are recognized.
    if (status === 429) {
      if (error === "今日翻译额度已用完，请明天再试") return error;
      if (error === "请求过于频繁，本站每分钟最多翻译 5 次") return "请求太频繁，请稍后再试";
      return "请求过于频繁，请稍后再试";
    }
    return ({
      400: "输入内容有误，请检查后重试",
      413: "输入内容过大",
      503: "翻译服务暂时不可用"
    })[status] || "翻译服务暂时不可用";
  }

  function bindTranslator(destination) {
    const card = view.querySelector(".translator-card");
    const input = card.querySelector("#translateInput");
    const clear = card.querySelector("[data-clear-translate]");
    const submit = card.querySelector(".translator-submit");
    const count = card.querySelector("#translateCount");
    const feedback = card.querySelector("#translateFeedback");
    const result = card.querySelector("[data-translate-result]");
    const resultActions = card.querySelector(".translator-result-actions");
    const copy = card.querySelector("[data-copy-translate]");
    const speak = card.querySelector("[data-speak-translate]");
    const locale = currentPack()?.speechLocale || destination?.lang;
    const hash = window.location.hash;
    let disposed = false, composing = false, activeRequest = null;
    let resultText = "", speaking = false, speechRun = 0, resultVersion = 0;
    const isCurrent = () => !disposed && card.isConnected && window.location.hash === hash && selectedDestination()?.id === destination?.id;
    const message = (text, error = false) => {
      feedback.textContent = text;
      feedback.classList.toggle("is-error", error);
    };
    const sync = () => {
      state.translateDraft = input.value;
      const length = Array.from(input.value).length;
      count.textContent = `${length} / 300`;
      count.setAttribute("aria-label", `${length} 个字符，上限 300`);
      input.setAttribute("aria-invalid", String(length > 300));
      submit.disabled = !destination || !input.value.trim() || length > 300 || composing || !!activeRequest || navigator.onLine === false;
      submit.textContent = activeRequest ? "正在翻译…" : "翻译";
      submit.setAttribute("aria-busy", String(!!activeRequest));
      input.readOnly = !!activeRequest;
      clear.hidden = !input.value;
    };
    const idleMessage = () => {
      if (!destination) message("请先选择目的地");
      else if (navigator.onLine === false) message("AI 翻译需要联网，请连接网络后重试");
      else if (Array.from(input.value).length > 300) message("最多输入 300 个字符，请删减后重试", true);
      else message("");
    };
    const stopReading = () => {
      speechRun += 1;
      if (speaking) stopSpeech();
      speaking = false;
      speak.textContent = "朗读";
      speak.setAttribute("aria-pressed", "false");
    };
    const resetResult = () => {
      resultVersion += 1;
      stopReading();
      resultText = "";
      result.textContent = "译文会显示在这里";
      result.removeAttribute("lang");
      resultActions.hidden = true;
      card.classList.remove("has-result");
    };
    const cancelRequest = () => {
      const request = activeRequest;
      activeRequest = null;
      if (request) {
        clearTimeout(request.timer);
        request.controller.abort();
      }
    };
    input.addEventListener("input", () => {
      cancelRequest();
      resetResult();
      sync();
      idleMessage();
    });
    input.addEventListener("compositionstart", () => { composing = true; sync(); });
    input.addEventListener("compositionend", () => { composing = false; sync(); idleMessage(); });
    clear.addEventListener("click", () => {
      cancelRequest();
      resetResult();
      input.value = "";
      sync();
      idleMessage();
      input.focus();
    });
    submit.addEventListener("click", async () => {
      if (!isCurrent() || activeRequest) return;
      sync();
      if (submit.disabled) { idleMessage(); return; }
      resetResult();
      const request = { controller: new AbortController(), timer: null, timedOut: false };
      activeRequest = request;
      sync();
      message("正在翻译…");
      // Abort covers both response headers and reading the response body.
      request.timer = setTimeout(() => {
        request.timedOut = true;
        request.controller.abort();
      }, TRANSLATE_TIMEOUT_MS);
      try {
        const response = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: input.value.trim(), target: destination.language }),
          cache: "no-store",
          signal: request.controller.signal
        });
        let data;
        try { data = await response.json(); }
        catch (error) {
          if (request.controller.signal.aborted || error?.name !== "SyntaxError") throw error;
          data = null;
        }
        if (!isCurrent() || activeRequest !== request || request.controller.signal.aborted) return;
        if (!response.ok) {
          message(translationError(response.status, data?.error), true);
        } else if (typeof data?.result !== "string" || !data.result.trim()) {
          message("翻译服务暂时不可用", true);
        } else {
          resultText = data.result;
          result.textContent = resultText;
          result.lang = destination.lang;
          resultActions.hidden = false;
          card.classList.add("has-result");
          message("翻译完成");
        }
      } catch {
        if (isCurrent() && activeRequest === request) {
          message(navigator.onLine === false ? "AI 翻译需要联网，请连接网络后重试" : NETWORK_MESSAGE, true);
        }
      } finally {
        clearTimeout(request.timer);
        if (isCurrent() && activeRequest === request) {
          activeRequest = null;
          if (request.timedOut) message(NETWORK_MESSAGE, true);
          sync();
        }
      }
    });
    copy.addEventListener("click", async () => {
      if (!isCurrent() || !resultText) return;
      const version = resultVersion;
      try {
        await navigator.clipboard.writeText(resultText);
        if (isCurrent() && version === resultVersion) showToast("译文已复制");
      } catch {
        if (isCurrent() && version === resultVersion) showToast("复制失败，请长按或选中译文复制");
      }
    });
    speak.addEventListener("click", async () => {
      if (!isCurrent() || !resultText) return;
      if (speaking) { stopReading(); return; }
      if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
        showToast("当前浏览器不支持朗读，可复制译文使用");
        return;
      }
      const run = ++speechRun;
      speaking = true;
      speak.textContent = "停止朗读";
      speak.setAttribute("aria-pressed", "true");
      // No URL: use the existing browser speech branch, never a generated Edge TTS file.
      const playback = await playAudio({
        text: resultText, locale, rate: .88, quiet: true,
        speechTimeoutMs: Math.min(180000, Math.max(10000, Array.from(resultText).length * 500))
      });
      if (!isCurrent() || run !== speechRun) return;
      speaking = false;
      speak.textContent = "朗读";
      speak.setAttribute("aria-pressed", "false");
      if (playback.status === "error") showToast("朗读暂不可用，请检查系统语音设置或复制译文");
    });
    const connectionChanged = () => { sync(); if (!activeRequest) idleMessage(); };
    const dispose = () => {
      disposed = true;
      cancelRequest();
      stopReading();
      window.removeEventListener("online", connectionChanged);
      window.removeEventListener("offline", connectionChanged);
      window.removeEventListener("pagehide", leavePage);
      if (runtime.disposeTools === dispose) runtime.disposeTools = null;
    };
    // Keep a bfcache-restored page usable, while discarding in-flight work.
    const leavePage = () => { cancelRequest(); stopReading(); sync(); idleMessage(); };
    window.addEventListener("online", connectionChanged);
    window.addEventListener("offline", connectionChanged);
    window.addEventListener("pagehide", leavePage);
    runtime.disposeTools = dispose;
    sync();
    idleMessage();
  }

  function renderTools() {
    runtime.disposeTools?.();
    stopSpeech();
    const destination = selectedDestination();
    const emergencyAvailable = Boolean(currentPack()?.features?.emergencyCard);
    const checklistSummary = window.TRAVEL_CHECKLIST.summarize(window.TRAVEL_CHECKLIST.getModel(), destination?.id, destination?.preparation);
    view.innerHTML = `<div class="page-enter tools-page">
      <header class="screen-heading"><span class="eyebrow">旅途工具箱</span><h1>工具</h1><p>随时找到旅途中用得上的实用工具。</p></header>
      <section class="translator-card" aria-labelledby="translatorTitle">
        <div class="translator-heading"><span class="feature-icon teal" aria-hidden="true">${uiIcon("translate")}</span><div><span class="eyebrow">随身表达</span><h2 id="translatorTitle">快捷翻译</h2></div><span class="translator-status">需联网</span></div>
        <div class="translator-direction" aria-label="翻译方向"><span>中文</span><span class="translator-direction-arrow" aria-hidden="true">→</span><span>${escapeHtml(destination?.language || "选择目的地")}</span></div>
        <div class="translator-field-heading"><label for="translateInput">输入中文</label><button class="translator-clear" type="button" data-clear-translate hidden>清除</button></div>
        <textarea id="translateInput" class="translator-input" rows="2" aria-describedby="translateCount translateFeedback" placeholder="输入想在旅途中表达的内容"${destination ? "" : " disabled"}>${escapeHtml(state.translateDraft)}</textarea>
        <div class="translator-input-meta"><span id="translateFeedback" class="translator-feedback" role="status" aria-live="polite" aria-atomic="true"></span><span id="translateCount" class="translator-count" aria-label="字符数，上限 300">0 / 300</span></div>
        <div class="translator-actions">${destination ? "" : '<button class="translator-destination" type="button" data-translate-destination>选择目的地</button>'}<button class="translator-submit" type="button" disabled>翻译</button></div>
        <div class="translator-result" role="region" aria-label="译文"><span>译文 · ${escapeHtml(destination?.language || "目的地语言")}</span><p data-translate-result dir="auto">译文会显示在这里</p><div class="translator-result-actions" hidden><button type="button" data-copy-translate>复制译文</button><button type="button" data-speak-translate aria-pressed="false">朗读</button></div></div>
      </section>
      <div class="section-heading tool-section-heading"><div><span class="eyebrow">随身备用</span><h2>更多旅行工具</h2></div></div>
      <div class="tool-placeholder-grid" aria-label="更多旅行工具">
        <button class="tool-placeholder tool-card" type="button" data-emergency-card${state.destinationId && !emergencyAvailable ? " disabled" : ""}><span class="tool-card-top"><span class="feature-icon coral" aria-hidden="true">${uiIcon("emergencyCard")}</span><span class="coming-badge tool-available-badge">${emergencyAvailable ? "已可使用" : state.destinationId ? "暂不可用" : "选择后使用"}</span></span><h3>紧急联系卡</h3><p>制作并保存双语急救信息卡。</p></button>
        <button class="tool-placeholder tool-card" type="button" data-open-checklist><span class="tool-card-top"><span class="feature-icon blue" aria-hidden="true">${uiIcon("checklist")}</span><span class="coming-badge tool-available-badge">已可使用</span></span><h3>旅行清单</h3><p>${destination ? `${escapeHtml(destination.country)} · 还有 ${checklistSummary.remaining} 项未确认。` : "15 项通用准备，选择目的地解锁专属建议。"}</p></button>
        <article class="tool-placeholder"><span class="feature-icon amber" aria-hidden="true">${uiIcon("exchange")}</span><span class="coming-badge">计划中</span><h3>汇率换算</h3><p>旅途中快速估算常用货币金额。</p></article>
      </div>
    </div>`;
    bindTranslator(destination);
    view.querySelector("[data-translate-destination]")?.addEventListener("click", requireDestination);
    view.querySelector("[data-open-checklist]").addEventListener("click", () => navigatePath("tools/checklist"));
    view.querySelector("[data-emergency-card]").addEventListener("click", () => {
      if (!state.destinationId) {
        requireDestination();
        return;
      }
      const pack = currentPack();
      if (!pack?.features?.emergencyCard) { showToast("当前语言暂不支持紧急联系卡"); return; }
      if (!state.emergencyCard || state.emergencyCard.packId !== pack.id) state.emergencyCard = window.EMERGENCY_CARD.createModel(pack);
      navigatePath("tools/emergency-card");
    });
    scrollToTop();
  }

  function openToolDialog(content) {
    const previousFocus = document.activeElement;
    const shell = document.getElementById("appShell");
    const overlay = document.createElement("div");
    overlay.className = "level-overlay tool-dialog-overlay";
    overlay.innerHTML = content;
    shell.inert = true;
    document.body.append(overlay);
    const onKeydown = (event) => {
      if (event.key === "Escape") { event.preventDefault(); close(); return; }
      if (event.key !== "Tab") return;
      const controls = Array.from(overlay.querySelectorAll("button,input,select")).filter((element) => !element.disabled && !element.hidden);
      if (!controls.length) return;
      const index = controls.indexOf(document.activeElement);
      if (event.shiftKey && index <= 0) { event.preventDefault(); controls.at(-1).focus(); }
      else if (!event.shiftKey && index === controls.length - 1) { event.preventDefault(); controls[0].focus(); }
    };
    const close = () => {
      overlay.removeEventListener("keydown", onKeydown);
      overlay.remove();
      shell.inert = false;
      previousFocus?.focus?.();
    };
    overlay.addEventListener("keydown", onKeydown);
    overlay.querySelector("[data-dialog-cancel]")?.addEventListener("click", close);
    requestAnimationFrame(() => overlay.querySelector("[autofocus],button,input,select")?.focus());
    return { overlay, close };
  }

  function footprintStatusMeta(status) {
    if (status === window.TRAVEL_FOOTPRINTS.STATUS_VISITED) return { label: "去过", description: "已经到访过这里", className: "visited" };
    if (status === window.TRAVEL_FOOTPRINTS.STATUS_WISHLIST) return { label: "想去", description: "加入了想去清单", className: "wishlist" };
    return { label: "未记录", description: "还没有留下旅行记录", className: "unknown" };
  }

  function footprintStatusShape(className) {
    const heart = className === "wishlist" ? '<svg viewBox="0 0 24 24" focusable="false"><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg>' : "";
    return `<i class="footprint-status-shape ${className}" aria-hidden="true">${heart}</i>`;
  }

  function showFootprintStatusDialog(destination) {
    const destinationIds = DESTINATION_OPTIONS.map((item) => item.id);
    const status = window.TRAVEL_FOOTPRINTS.getStatus(destination.id, destinationIds);
    const dialog = openToolDialog(`<section class="level-dialog footprint-status-dialog" role="dialog" aria-modal="true" aria-labelledby="footprintStatusTitle" aria-describedby="footprintStatusDescription">
      <span class="eyebrow">${escapeHtml(destination.country)} · ${escapeHtml(destination.language)}</span>
      <h2 id="footprintStatusTitle">记录你的旅行足迹</h2>
      <p id="footprintStatusDescription">选择最符合现在的状态，地图和个人记录会立即更新。</p>
      <button class="footprint-status-choice visited${status === window.TRAVEL_FOOTPRINTS.STATUS_VISITED ? " selected" : ""}" type="button" data-footprint-status="visited" aria-pressed="${status === window.TRAVEL_FOOTPRINTS.STATUS_VISITED}" autofocus>${footprintStatusShape("visited")}<span><strong>去过</strong><small>在地图上留下到访标记</small></span></button>
      <button class="footprint-status-choice wishlist${status === window.TRAVEL_FOOTPRINTS.STATUS_WISHLIST ? " selected" : ""}" type="button" data-footprint-status="wishlist" aria-pressed="${status === window.TRAVEL_FOOTPRINTS.STATUS_WISHLIST}">${footprintStatusShape("wishlist")}<span><strong>想去</strong><small>把这里加入未来的旅行愿望</small></span></button>
      ${status !== window.TRAVEL_FOOTPRINTS.STATUS_UNKNOWN ? '<button class="text-btn footprint-clear-status" type="button" data-footprint-clear>清除这条记录</button>' : ""}
      <button class="text-btn level-later" type="button" data-dialog-cancel>取消</button>
    </section>`);
    dialog.overlay.querySelectorAll("[data-footprint-status]").forEach((button) => button.addEventListener("click", () => {
      const saved = window.TRAVEL_FOOTPRINTS.setStatus(destination.id, button.dataset.footprintStatus, destinationIds);
      if (!saved) { showToast("无法保存旅行足迹，请检查浏览器存储设置后重试"); return; }
      const label = button.dataset.footprintStatus === "visited" ? "去过" : "想去";
      dialog.close();
      renderFootprints();
      showToast(`已将${destination.country}标记为${label}`);
    }));
    dialog.overlay.querySelector("[data-footprint-clear]")?.addEventListener("click", () => {
      const saved = window.TRAVEL_FOOTPRINTS.clearStatus(destination.id, destinationIds);
      if (!saved) { showToast("无法清除旅行足迹，请检查浏览器存储设置后重试"); return; }
      dialog.close();
      renderFootprints();
      showToast(`已清除${destination.country}的旅行记录`);
    });
  }

  function renderFootprints() {
    stopSpeech();
    const destination = selectedDestination();
    const destinationIds = DESTINATION_OPTIONS.map((item) => item.id);
    const statuses = window.TRAVEL_FOOTPRINTS.getAll(destinationIds);
    const visitedCount = Object.values(statuses).filter((status) => status === window.TRAVEL_FOOTPRINTS.STATUS_VISITED).length;
    const wishlistCount = Object.values(statuses).filter((status) => status === window.TRAVEL_FOOTPRINTS.STATUS_WISHLIST).length;
    const markers = DESTINATION_OPTIONS.map((item) => {
      const meta = footprintStatusMeta(statuses[item.id] || window.TRAVEL_FOOTPRINTS.STATUS_UNKNOWN);
      const current = item.id === destination?.id;
      return `<button class="footprint-map-marker ${meta.className}${current ? " current" : ""}" type="button" data-footprint-destination="${item.id}" style="--map-x:${item.mapPosition.x}%;--map-y:${item.mapPosition.y}%" aria-label="${escapeHtml(item.country)}，${meta.label}，点击修改">${footprintStatusShape(meta.className)}<b>${escapeHtml(item.country)}</b></button>`;
    }).join("");
    const destinationRows = DESTINATION_OPTIONS.map((item) => {
      const meta = footprintStatusMeta(statuses[item.id] || window.TRAVEL_FOOTPRINTS.STATUS_UNKNOWN);
      const current = item.id === destination?.id;
      return `<li><button class="footprint-destination-row${current ? " current" : ""}" type="button" data-footprint-destination="${item.id}" aria-label="${escapeHtml(item.country)}，${meta.label}，点击修改"><img src="${item.flagSrc}" alt="" width="48" height="32"><span><strong>${escapeHtml(item.country)}</strong><small>${escapeHtml(item.language)}${current ? " · 当前学习" : ""}</small></span><em class="footprint-status-badge ${meta.className}">${footprintStatusShape(meta.className)}${meta.label}</em><span class="footprint-row-chevron" aria-hidden="true">›</span></button></li>`;
    }).join("");
    view.innerHTML = `<div class="footprint-page page-enter">
      <div class="flow-header"><button class="text-btn" type="button" data-footprint-back>‹ 返回我的</button><span>旅行足迹</span><small>个人记录</small></div>
      <header class="footprint-page-lead"><span class="eyebrow">我的旅行</span><h1>把走过和想去的世界留在这里</h1><p>旅行记录与你正在学习的语言相互独立，可以随时更新。</p></header>
      <figure class="footprint-map-card" aria-labelledby="footprintMapTitle">
        <div class="footprint-map-heading"><div id="footprintMapTitle" class="footprint-counts"><strong>${visitedCount}<small>去过</small></strong><strong>${wishlistCount}<small>想去</small></strong></div><p>每一次到访和期待，都会成为继续理解世界的理由。</p></div>
        <div class="footprint-map-visual"><img src="images/tools/world-map.svg" alt="" width="1000" height="520">${markers}</div>
        <figcaption><span>${footprintStatusShape("visited")}去过</span><span>${footprintStatusShape("wishlist")}想去</span><span>${footprintStatusShape("unknown")}未记录</span></figcaption>
      </figure>
      <p class="footprint-availability">当前可记录 ${DESTINATION_OPTIONS.length} 个语见世界语言目的地</p>
      <section class="footprint-destination-section" aria-labelledby="footprintDestinationTitle"><div class="section-heading"><div><span class="eyebrow">足迹记录</span><h2 id="footprintDestinationTitle">选择目的地更新状态</h2></div></div><ul class="footprint-destination-list">${destinationRows}</ul></section>
    </div>`;
    view.querySelector("[data-footprint-back]").addEventListener("click", () => navigatePath("me"));
    view.querySelectorAll("[data-footprint-destination]").forEach((button) => button.addEventListener("click", () => {
      const target = destinationById(button.dataset.footprintDestination);
      if (target) showFootprintStatusDialog(target);
    }));
    scrollToTop();
  }

  function showChecklistItemDialog(item) {
    const editing = Boolean(item);
    const categoryOptions = window.TRAVEL_CHECKLIST.CATEGORIES.map((category) => `<option value="${category.id}"${category.id === (item?.categoryId || "documents") ? " selected" : ""}>${escapeHtml(category.name)}</option>`).join("");
    const dialog = openToolDialog(`<section class="level-dialog checklist-item-dialog" role="dialog" aria-modal="true" aria-labelledby="checklistItemTitle">
      <span class="eyebrow">旅行清单</span><h2 id="checklistItemTitle">${editing ? "编辑项目" : "添加项目"}</h2>
      <form data-checklist-item-form novalidate>
        <label class="dialog-field"><span>项目名称</span><input name="itemText" maxlength="80" value="${escapeHtml(item?.text || "")}" autocomplete="off" autofocus><small data-item-error></small></label>
        <label class="dialog-field"><span>分类</span><select name="categoryId">${categoryOptions}</select></label>
        <div class="dialog-actions"><button class="secondary-btn" type="button" data-dialog-cancel>取消</button><button class="primary-btn" type="submit">${editing ? "保存修改" : "添加项目"}</button></div>
        ${editing ? '<button class="danger-text-btn" type="button" data-delete-checklist-item>删除这个项目</button>' : ""}
      </form>
    </section>`);
    const form = dialog.overlay.querySelector("[data-checklist-item-form]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const text = form.elements.itemText.value.trim();
      const error = form.querySelector("[data-item-error]");
      if (!text) { error.textContent = "请输入项目名称"; form.elements.itemText.setAttribute("aria-invalid", "true"); form.elements.itemText.focus(); return; }
      const result = editing
        ? window.TRAVEL_CHECKLIST.updateItem(item.id, { text, categoryId: form.elements.categoryId.value })
        : window.TRAVEL_CHECKLIST.addItem(text, form.elements.categoryId.value);
      if (!result.ok) { error.textContent = "无法保存，请检查浏览器存储设置"; return; }
      dialog.close();
      renderChecklist();
      showToast(editing ? "清单项目已更新" : "已添加到旅行清单");
    });
    dialog.overlay.querySelector("[data-delete-checklist-item]")?.addEventListener("click", () => {
      if (!window.confirm(`确定删除“${item.text}”吗？`)) return;
      const result = window.TRAVEL_CHECKLIST.deleteItem(item.id);
      if (!result.ok) { showToast("无法删除清单项目"); return; }
      dialog.close();
      renderChecklist();
      showToast("清单项目已删除");
    });
  }

  function showChecklistRecommendationsDialog(destination, model) {
    const recommendations = window.TRAVEL_CHECKLIST.availableRecommendations(model, destination.id, destination.preparation);
    if (!recommendations.length) { showToast("当前目的地的推荐项目已全部加入"); return; }
    const rows = recommendations.map((item) => `<button class="checklist-recommendation-choice" type="button" data-add-recommendation="${escapeHtml(item.id)}"><span><strong>${escapeHtml(item.text)}</strong><small>加入后会计入这次旅行的准备进度</small></span><b aria-hidden="true">＋</b></button>`).join("");
    const dialog = openToolDialog(`<section class="level-dialog checklist-recommendation-dialog" role="dialog" aria-modal="true" aria-labelledby="recommendationTitle" aria-describedby="recommendationDescription">
      <span class="eyebrow">${escapeHtml(destination.country)}旅行建议</span>
      <h2 id="recommendationTitle">添加更多推荐项目</h2>
      <p id="recommendationDescription">选择一项加入清单，之后也可以从目的地建议中移除。</p>
      <div class="checklist-recommendation-options">${rows}</div>
      <button class="text-btn level-later" type="button" data-dialog-cancel>取消</button>
    </section>`);
    dialog.overlay.querySelectorAll("[data-add-recommendation]").forEach((button) => button.addEventListener("click", () => {
      const item = recommendations.find((candidate) => candidate.id === button.dataset.addRecommendation);
      const result = window.TRAVEL_CHECKLIST.addRecommendation(destination.id, button.dataset.addRecommendation, destination.preparation);
      if (!result.ok) { showToast("无法添加推荐项目，请检查浏览器存储设置后重试"); return; }
      dialog.close();
      renderChecklist();
      showToast(`已添加“${item?.text || "推荐项目"}”`);
    }));
  }

  function renderChecklist(options = {}) {
    stopSpeech();
    const previousScroll = options.preserveScroll ? window.scrollY : 0;
    const destination = selectedDestination();
    const model = window.TRAVEL_CHECKLIST.getModel();
    const destinationItems = window.TRAVEL_CHECKLIST.destinationItems(model, destination?.id, destination?.preparation);
    const availableRecommendations = window.TRAVEL_CHECKLIST.availableRecommendations(model, destination?.id, destination?.preparation);
    const summary = window.TRAVEL_CHECKLIST.summarize(model, destination?.id, destination?.preparation);
    const complete = summary.total > 0 && summary.completed === summary.total;
    const categories = window.TRAVEL_CHECKLIST.CATEGORIES.map((category) => {
      const items = model.commonItems.filter((item) => item.categoryId === category.id);
      const completed = items.filter((item) => item.checked).length;
      const itemRows = items.length ? items.map((item) => `<li class="checklist-item${item.checked ? " checked" : ""}">
        <label><input type="checkbox" data-checklist-toggle="${escapeHtml(item.id)}"${item.checked ? " checked" : ""}><span>${escapeHtml(item.text)}</span></label>
        <button class="checklist-edit" type="button" data-checklist-edit="${escapeHtml(item.id)}" aria-label="编辑：${escapeHtml(item.text)}">编辑</button>
      </li>`).join("") : '<li class="checklist-category-empty">这个分类还没有项目</li>';
      return `<section class="checklist-category" aria-labelledby="checklist-${category.id}"><header><h3 id="checklist-${category.id}">${escapeHtml(category.name)}</h3><span>${completed} / ${items.length}</span></header><ul>${itemRows}</ul></section>`;
    }).join("");
    const destinationRows = destinationItems.map((item) => `<li class="checklist-item destination-checklist-item${item.checked ? " checked" : ""}">
      <label><input type="checkbox" data-recommendation-toggle="${escapeHtml(item.id)}"${item.checked ? " checked" : ""}><span>${escapeHtml(item.text)}</span></label>
      ${item.optional ? `<button class="checklist-edit" type="button" data-remove-recommendation="${escapeHtml(item.id)}" aria-label="移除：${escapeHtml(item.text)}">移除</button>` : '<span class="checklist-recommended-badge">推荐</span>'}
    </li>`).join("");
    const destinationSection = destination ? `<section class="destination-checklist-section" aria-labelledby="destinationChecklistTitle">
      <div class="checklist-toolbar destination-checklist-heading"><div><span class="eyebrow">因地准备</span><h2 id="destinationChecklistTitle">${escapeHtml(destination.country)}旅行建议</h2></div><span>${destinationItems.filter((item) => item.checked).length} / ${destinationItems.length}</span></div>
      <div class="destination-checklist-card"><ul>${destinationRows}</ul>${availableRecommendations.length ? `<button class="secondary-btn checklist-more-recommendations" type="button" data-open-recommendations>＋ 添加更多推荐项目 <span>${availableRecommendations.length}</span></button>` : '<p class="checklist-recommendations-complete">已添加当前目的地的全部推荐项目</p>'}</div>
    </section>` : `<section class="checklist-destination-empty" aria-labelledby="destinationChecklistTitle"><span class="feature-icon teal" aria-hidden="true">${uiIcon("trip")}</span><div><h2 id="destinationChecklistTitle">解锁目的地专属建议</h2><p>选择要学习的目的地后，会在通用清单之外补充当地准备事项。</p></div><button class="secondary-btn compact" type="button" data-choose-checklist-destination>选择目的地</button></section>`;
    view.innerHTML = `<div class="checklist-page page-enter">
      <div class="flow-header"><button class="text-btn" type="button" data-checklist-back>‹ 返回工具</button><span>旅行清单</span><small>${summary.completed} / ${summary.total}</small></div>
      <section class="checklist-overview${complete && options.celebrate ? " is-celebrating" : ""}" aria-labelledby="checklistTitle">
        <div><span class="eyebrow">${destination ? "目的地准备" : "通用出发准备"}</span><h1 id="checklistTitle">${complete ? "出发准备妥当" : destination ? `${escapeHtml(destination.country)}旅行准备` : "旅行准备"}</h1><p>${complete ? "清单已经全部确认，可以安心出发了。" : `出发前还有 ${summary.remaining} 项未确认`}</p></div>
        <strong>${summary.completed}<small> / ${summary.total}</small></strong>
        <div class="checklist-progress" role="progressbar" aria-label="旅行清单完成进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${summary.percentage}"><span style="width:${summary.percentage}%"></span></div>
      </section>
      ${complete ? `<section class="checklist-complete-card" role="status"><span aria-hidden="true">${uiIcon("complete")}</span><div><strong>所有准备都确认好了</strong><p>下次出发前，可以一键重置当前清单的勾选。</p></div><button class="secondary-btn compact" type="button" data-reset-checks>为下次重置</button></section>` : ""}
      <div class="checklist-toolbar"><div><span class="eyebrow">通用准备</span><h2>每次出发都值得确认</h2></div><button class="primary-btn compact" type="button" data-add-checklist-item>＋ 添加项目</button></div>
      <div class="checklist-categories">${categories}</div>
      ${destinationSection}
      <section class="checklist-management" aria-labelledby="checklistManagementTitle"><div><h2 id="checklistManagementTitle">清单管理</h2><p>重置只清除当前可见项目的勾选；恢复默认会移除自定义内容和所有目的地建议记录。</p></div><div><button class="secondary-btn compact" type="button" data-reset-checks${summary.completed ? "" : " disabled"}>重置勾选</button><button class="danger-text-btn" type="button" data-restore-checklist>恢复默认清单</button></div></section>
    </div>`;
    view.querySelector("[data-checklist-back]").addEventListener("click", () => navigatePath("tools"));
    view.querySelector("[data-add-checklist-item]").addEventListener("click", () => showChecklistItemDialog(null));
    view.querySelector("[data-choose-checklist-destination]")?.addEventListener("click", requireDestination);
    view.querySelector("[data-open-recommendations]")?.addEventListener("click", () => showChecklistRecommendationsDialog(destination, model));
    view.querySelectorAll("[data-checklist-edit]").forEach((button) => button.addEventListener("click", () => showChecklistItemDialog(model.commonItems.find((item) => item.id === button.dataset.checklistEdit))));
    view.querySelectorAll("[data-checklist-toggle]").forEach((input) => input.addEventListener("change", () => {
      const wasComplete = complete;
      const result = window.TRAVEL_CHECKLIST.setChecked(input.dataset.checklistToggle, input.checked);
      if (!result.ok) { input.checked = !input.checked; showToast("无法保存勾选状态"); return; }
      const nextSummary = window.TRAVEL_CHECKLIST.summarize(result.model, destination?.id, destination?.preparation);
      renderChecklist({ preserveScroll: true, celebrate: !wasComplete && nextSummary.total > 0 && nextSummary.completed === nextSummary.total });
    }));
    view.querySelectorAll("[data-recommendation-toggle]").forEach((input) => input.addEventListener("change", () => {
      const result = window.TRAVEL_CHECKLIST.setRecommendationChecked(destination.id, input.dataset.recommendationToggle, input.checked, destination.preparation);
      if (!result.ok) { input.checked = !input.checked; showToast("无法保存目的地建议状态"); return; }
      const nextSummary = window.TRAVEL_CHECKLIST.summarize(result.model, destination.id, destination.preparation);
      renderChecklist({ preserveScroll: true, celebrate: !complete && nextSummary.total > 0 && nextSummary.completed === nextSummary.total });
    }));
    view.querySelectorAll("[data-remove-recommendation]").forEach((button) => button.addEventListener("click", () => {
      const item = destinationItems.find((candidate) => candidate.id === button.dataset.removeRecommendation);
      const result = window.TRAVEL_CHECKLIST.removeRecommendation(destination.id, button.dataset.removeRecommendation, destination.preparation);
      if (!result.ok) { showToast("无法移除推荐项目"); return; }
      renderChecklist({ preserveScroll: true });
      showToast(`已移除“${item?.text || "推荐项目"}”`);
    }));
    view.querySelectorAll("[data-reset-checks]").forEach((button) => button.addEventListener("click", () => {
      if (!window.TRAVEL_CHECKLIST.resetChecks(destination?.id).ok) { showToast("无法重置清单"); return; }
      renderChecklist();
      showToast("已清除当前清单的全部勾选，内容保持不变");
    }));
    view.querySelector("[data-restore-checklist]").addEventListener("click", () => {
      if (!window.confirm("恢复默认清单会移除自定义项目、修改和所有目的地建议记录，确定继续吗？")) return;
      if (!window.TRAVEL_CHECKLIST.restoreDefaults().ok) { showToast("无法恢复默认清单"); return; }
      renderChecklist();
      showToast("已恢复默认旅行清单");
    });
    if (options.preserveScroll) window.scrollTo({ top: previousScroll, left: 0, behavior: "auto" });
    else scrollToTop();
  }

  return { renderTools, openToolDialog, footprintStatusMeta, footprintStatusShape, showFootprintStatusDialog, renderFootprints, showChecklistItemDialog, showChecklistRecommendationsDialog, renderChecklist };
    }
  };
})();
