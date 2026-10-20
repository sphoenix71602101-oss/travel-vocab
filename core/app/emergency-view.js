(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["emergency-view"] = {
    exports: ["dictionaryOptions", "healthChoices", "formValue", "syncEmergencyCardForm", "toggleNationalityCustom", "enforceNoneChoice", "showEmergencyCardErrors", "renderEmergencyCardForm", "renderEmergencyCardPreview"],
    create(ctx) {
  const { view, state } = ctx;
  const { escapeHtml, uiIcon, showToast, scrollToTop, currentPack, stopSpeech, navigatePath } = ctx.actions;
  function dictionaryOptions(items, selected) {
    return items.map((item) => `<option value="${escapeHtml(item.code)}"${item.code === selected ? " selected" : ""}>${escapeHtml(item.zh)} · ${escapeHtml(item.target)}</option>`).join("");
  }

  function healthChoices(name, items, selected) {
    const active = new Set(selected || []);
    return items.map((item) => `<label class="choice-chip"><input type="checkbox" name="${name}" value="${escapeHtml(item.code)}"${active.has(item.code) ? " checked" : ""}><span>${escapeHtml(item.zh)}<small>${escapeHtml(item.target)}</small></span></label>`).join("");
  }

  function formValue(form, name) { return form.querySelector(`[name="${name}"]`)?.value.trim() || ""; }

  function syncEmergencyCardForm(form) {
    const card = state.emergencyCard;
    card.name = formValue(form, "name"); card.foreignName = formValue(form, "foreignName");
    card.birthDate = formValue(form, "birthDate"); card.bloodType = formValue(form, "bloodType");
    card.documentNumber = formValue(form, "documentNumber"); card.emergencyContact = formValue(form, "emergencyContact");
    card.emergencyPhone = formValue(form, "emergencyPhone");
    card.nationality = { code: formValue(form, "nationality"), customZh: formValue(form, "nationalityCustomZh"), customForeign: formValue(form, "nationalityCustomForeign") };
    ["allergies", "conditions"].forEach((key) => {
      card[key] = {
        codes: Array.from(form.querySelectorAll(`[name="${key}"]:checked`)).map((input) => input.value),
        customZh: formValue(form, `${key}CustomZh`), customForeign: formValue(form, `${key}CustomForeign`)
      };
    });
  }

  function toggleNationalityCustom(form) {
    const custom = form.querySelector("[data-nationality-custom]");
    custom.hidden = formValue(form, "nationality") !== "other";
  }

  function enforceNoneChoice(event) {
    const changed = event.target;
    if (!(changed instanceof HTMLInputElement) || changed.type !== "checkbox" || !changed.checked) return;
    const form = changed.form;
    const group = Array.from(form.querySelectorAll(`[name="${changed.name}"]`));
    if (changed.value === "none") group.forEach((input) => { if (input !== changed) input.checked = false; });
    else group.find((input) => input.value === "none").checked = false;
  }

  function showEmergencyCardErrors(form, errors) {
    form.querySelectorAll("[data-error]").forEach((element) => { element.textContent = ""; });
    form.querySelectorAll("[aria-invalid]").forEach((element) => element.removeAttribute("aria-invalid"));
    Object.entries(errors).forEach(([key, message]) => {
      const error = form.querySelector(`[data-error="${key}"]`);
      if (error) error.textContent = message;
      const field = form.querySelector(`[data-field="${key}"]`);
      field?.querySelector("input,select")?.setAttribute("aria-invalid", "true");
    });
    const firstKey = Object.keys(errors)[0];
    form.querySelector(`[data-field="${firstKey}"] input,[data-field="${firstKey}"] select`)?.focus();
  }

  function renderEmergencyCardForm() {
    stopSpeech();
    const pack = currentPack();
    if (!pack?.features?.emergencyCard) { navigatePath("tools", true); showToast("当前语言暂不支持紧急联系卡"); return; }
    if (!state.emergencyCard || state.emergencyCard.packId !== pack.id) state.emergencyCard = window.EMERGENCY_CARD.createModel(pack);
    const card = state.emergencyCard;
    const languageName = pack.languageLabel;
    const config = pack.features.emergencyCard;
    view.innerHTML = `<div class="card-maker page-enter">
      <div class="flow-header"><button class="text-btn" type="button" data-card-exit>‹ 返回工具</button><span>填写资料</span><small>1 / 2</small></div>
      <section class="privacy-banner"><span aria-hidden="true">${uiIcon("privacy")}</span><div><strong>资料只在当前页面处理</strong><p>不会上传或保存在浏览器中，刷新或关闭页面后即清除。</p></div></section>
      <section class="card-form-intro"><span class="eyebrow">${languageName}卡片</span><h1>制作紧急联系卡</h1><p>带 <b>*</b> 的内容为必填。其他信息留空后不会出现在卡片上。</p></section>
      <form class="emergency-form" id="emergencyCardForm" novalidate>
        <fieldset><legend>本人信息</legend><div class="form-grid">
          <label class="form-field" data-field="name"><span>姓名 <b>*</b></span><input name="name" autocomplete="name" maxlength="32" value="${escapeHtml(card.name)}"><small class="field-error" data-error="name"></small></label>
          <label class="form-field"><span>${escapeHtml(config.foreignNameLabel)}</span><input name="foreignName" maxlength="40" value="${escapeHtml(card.foreignName)}"><small>请按护照或证件上的写法填写</small></label>
          <label class="form-field"><span>国籍</span><select name="nationality"><option value="">不显示</option>${dictionaryOptions(config.dictionaries.nationalities, card.nationality.code)}</select></label>
          <label class="form-field" data-field="birthDate"><span>出生日期</span><input name="birthDate" type="date" max="${new Date().toISOString().slice(0, 10)}" value="${escapeHtml(card.birthDate)}"><small class="field-error" data-error="birthDate"></small></label>
          <label class="form-field"><span>血型</span><select name="bloodType"><option value="">不显示</option>${window.EMERGENCY_CARD.BLOOD_TYPES.map((type) => `<option value="${type}"${type === card.bloodType ? " selected" : ""}>${type === "unknown" ? "未知" : type}</option>`).join("")}</select></label>
          <label class="form-field sensitive-field" data-field="documentNumber"><span>身份证或护照号码</span><input name="documentNumber" maxlength="24" autocomplete="off" value="${escapeHtml(card.documentNumber)}"><small>敏感信息，仅在确有需要时填写</small><small class="field-error" data-error="documentNumber"></small></label>
        </div><div class="custom-pair" data-nationality-custom hidden><label class="form-field" data-field="nationalityCustomZh"><span>国籍中文名称</span><input name="nationalityCustomZh" maxlength="30" value="${escapeHtml(card.nationality.customZh)}"><small class="field-error" data-error="nationalityCustomZh"></small></label><label class="form-field" data-field="nationalityCustomForeign"><span>国籍${languageName}名称</span><input name="nationalityCustomForeign" maxlength="40" value="${escapeHtml(card.nationality.customForeign)}"><small class="field-error" data-error="nationalityCustomForeign"></small></label></div></fieldset>
        <fieldset><legend>紧急联系人</legend><div class="form-grid"><label class="form-field" data-field="emergencyContact"><span>联系人姓名 <b>*</b></span><input name="emergencyContact" maxlength="32" autocomplete="off" value="${escapeHtml(card.emergencyContact)}"><small class="field-error" data-error="emergencyContact"></small></label><label class="form-field" data-field="emergencyPhone"><span>联系电话 <b>*</b></span><input name="emergencyPhone" type="tel" inputmode="tel" maxlength="24" autocomplete="tel" placeholder="+86 138 0000 0000" value="${escapeHtml(card.emergencyPhone)}"><small class="field-error" data-error="emergencyPhone"></small></label></div></fieldset>
        <fieldset><legend>过敏信息</legend><p class="fieldset-hint">可多选；“无”与其他选项互斥。</p><div class="choice-chip-grid">${healthChoices("allergies", config.dictionaries.allergies, card.allergies.codes)}</div><div class="custom-pair" data-field="allergiesCustom"><label class="form-field"><span>其他过敏信息（中文）</span><input name="allergiesCustomZh" maxlength="40" value="${escapeHtml(card.allergies.customZh)}"></label><label class="form-field"><span>其他过敏信息（${languageName}）</span><input name="allergiesCustomForeign" maxlength="60" value="${escapeHtml(card.allergies.customForeign)}"></label><small class="field-error pair-error" data-error="allergiesCustom"></small></div></fieldset>
        <fieldset><legend>既往疾病</legend><p class="fieldset-hint">可多选；“无”与其他选项互斥。</p><div class="choice-chip-grid">${healthChoices("conditions", config.dictionaries.conditions, card.conditions.codes)}</div><div class="custom-pair" data-field="conditionsCustom"><label class="form-field"><span>其他疾病信息（中文）</span><input name="conditionsCustomZh" maxlength="40" value="${escapeHtml(card.conditions.customZh)}"></label><label class="form-field"><span>其他疾病信息（${languageName}）</span><input name="conditionsCustomForeign" maxlength="60" value="${escapeHtml(card.conditions.customForeign)}"></label><small class="field-error pair-error" data-error="conditionsCustom"></small></div></fieldset>
        <button class="primary-btn card-submit" type="submit">生成卡片预览</button>
      </form></div>`;
    const form = view.querySelector("#emergencyCardForm");
    toggleNationalityCustom(form);
    form.addEventListener("input", () => syncEmergencyCardForm(form));
    form.addEventListener("change", (event) => { enforceNoneChoice(event); syncEmergencyCardForm(form); toggleNationalityCustom(form); });
    form.addEventListener("submit", (event) => {
      event.preventDefault(); syncEmergencyCardForm(form);
      const errors = window.EMERGENCY_CARD.validate(state.emergencyCard);
      if (Object.keys(errors).length) { showEmergencyCardErrors(form, errors); return; }
      navigatePath("tools/emergency-card/preview");
    });
    view.querySelector("[data-card-exit]").addEventListener("click", () => navigatePath("tools"));
    scrollToTop();
  }

  async function renderEmergencyCardPreview() {
    stopSpeech();
    if (!state.emergencyCard || Object.keys(window.EMERGENCY_CARD.validate(state.emergencyCard)).length) {
      if (!state.emergencyCard && currentPack()?.features?.emergencyCard) state.emergencyCard = window.EMERGENCY_CARD.createModel(currentPack());
      navigatePath("tools/emergency-card", true); showToast("请先填写卡片资料"); return;
    }
    const rows = window.EMERGENCY_CARD.getRows(state.emergencyCard);
    view.innerHTML = `<div class="card-preview-page page-enter"><div class="flow-header"><button class="text-btn" type="button" data-card-edit>‹ 返回修改</button><span>卡片预览</span><small>2 / 2</small></div><section class="card-preview-lead"><span class="eyebrow">银行卡大小</span><h1>确认信息清晰无误</h1><p>导出的图片为 1011 × 638 px，按 100% 实际大小打印后约为 85.60 × 53.98 mm。</p></section><div class="canvas-frame"><canvas id="emergencyCardCanvas" width="1011" height="638" role="img" aria-label="紧急联系卡预览"></canvas></div><dl class="sr-only">${rows.map((row) => `<div><dt>${escapeHtml(row.label)}</dt><dd>${escapeHtml(row.value)}</dd></div>`).join("")}</dl><div class="privacy-note"><strong>下载前提醒</strong><p>请再次确认是否需要显示证件号码。图片下载后由你自行保管，本应用不会留存副本。</p></div><div class="card-preview-actions"><button class="secondary-btn" type="button" data-card-edit>返回修改</button><button class="primary-btn" type="button" data-card-download>保存为 PNG</button></div></div>`;
    const canvas = view.querySelector("#emergencyCardCanvas");
    if (document.fonts?.ready) await document.fonts.ready;
    const result = window.EMERGENCY_CARD.drawCard(canvas, state.emergencyCard);
    if (!result.ok) { showToast("部分内容过长，请返回缩短后再下载"); view.querySelector("[data-card-download]").disabled = true; }
    view.querySelectorAll("[data-card-edit]").forEach((button) => button.addEventListener("click", () => navigatePath("tools/emergency-card")));
    view.querySelector("[data-card-download]").addEventListener("click", async (event) => {
      const button = event.currentTarget; button.disabled = true; button.textContent = "正在生成…";
      try { await window.EMERGENCY_CARD.downloadPng(canvas); showToast("PNG 已生成，请妥善保管"); }
      catch (error) { showToast("图片生成失败，请重试"); }
      finally { button.disabled = !result.ok; button.textContent = "保存为 PNG"; }
    });
    scrollToTop();
  }

  return { dictionaryOptions, healthChoices, formValue, syncEmergencyCardForm, toggleNationalityCustom, enforceNoneChoice, showEmergencyCardErrors, renderEmergencyCardForm, renderEmergencyCardPreview };
    }
  };
})();
