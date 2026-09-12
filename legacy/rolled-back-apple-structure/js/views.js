(function (app) {
  "use strict";
  const { icon } = app.icons;

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function navigation(active) {
    const items = [
      { route: "learn", label: "学习", icon: "learn" }, { route: "self-test", label: "自测", icon: "test" },
      { route: "tools", label: "工具", icon: "tools" }, { route: "me", label: "我的", icon: "profile" }
    ];
    return items.map((item) => `<a class="nav-item${active === item.route ? " active" : ""}" href="#/${item.route}" data-route="${item.route}"${active === item.route ? ' aria-current="page"' : ""}>${icon(item.icon)}<span>${item.label}</span></a>`).join("");
  }
  function pageHeader(title, subtitle, backRoute) {
    return `<header class="page-header${backRoute ? " detail-header" : ""}>${backRoute ? `<a class="back-button" href="#/${backRoute}" data-route="${backRoute}" aria-label="返回学习页">${icon("arrow")}<span>学习</span></a>` : ""}<div class="page-title-group"><h1>${escapeHtml(title)}</h1>${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""}</div></header>`;
  }
  function onboarding(selectedLanguage) {
    return `<section class="onboarding page-narrow"><img class="onboarding-icon" src="icons/icon-192.png" width="80" height="80" alt=""><p class="eyebrow">旅行单词</p><h1>旅途中，开口更简单。</h1><p class="lead">先选择要学习的语言。无需注册，设置和进度只保存在这台设备。</p><div class="language-options grouped-list" role="radiogroup" aria-label="学习语言">${app.catalog.LANGUAGES.map((language) => `<button class="language-option${selectedLanguage === language.id ? " selected" : ""}" type="button" role="radio" aria-checked="${selectedLanguage === language.id}" data-onboarding-language="${language.id}"><span><strong>${language.label}</strong><small>${language.nativeLabel}</small></span><span class="selection-check" aria-hidden="true">${icon("check")}</span></button>`).join("")}</div><button class="button primary full" type="button" data-complete-onboarding>继续</button><p class="onboarding-footnote">之后可以随时在“我的”中切换语言。</p></section>`;
  }
  function installBanner(pwaState, dismissed) {
    if (dismissed || !["native", "ios"].includes(pwaState.type)) return "";
    const ios = pwaState.type === "ios";
    return `<aside class="install-note"><div><strong>${ios ? "添加到主屏幕" : "安装旅行单词"}</strong><p>${ios ? "在 Safari 中点“分享”，再选择“添加到主屏幕”。" : "安装后可以从桌面独立打开，核心内容也可离线查看。"}</p></div><div class="install-actions">${ios ? "" : '<button class="text-button" type="button" data-install>安装</button>'}<button class="icon-button" type="button" data-dismiss-install aria-label="关闭安装提示">×</button></div></aside>`;
  }
  function learn(language, pwaState, installDismissed) {
    const foundation = app.catalog.FOUNDATION;
    return `<div class="page page-with-nav"><header class="learn-header"><div><p class="eyebrow">旅行单词</p><h1>学习</h1></div><a class="language-chip" href="#/me" data-route="me" aria-label="当前学习语言：${language.label}，前往设置">${language.label}</a></header><p class="lead compact">按旅行场景，找到现在就能用上的表达。</p>${installBanner(pwaState, installDismissed)}<section class="section-block"><div class="section-heading"><h2>开始之前</h2><span>可选</span></div><div class="grouped-list"><a class="feature-row" href="#/learn/foundation" data-route="learn/foundation"><span class="row-icon">${icon("foundation")}</span><span class="row-copy"><strong>${foundation.title}</strong><small>${foundation.description}</small></span>${icon("chevron", "chevron")}</a></div></section><section class="section-block"><div class="section-heading"><h2>旅行场景</h2><span>自由浏览</span></div><div class="scenario-list grouped-list">${app.catalog.SCENARIOS.map((scenario) => { const counts = app.catalog.scenarioCounts(scenario.id); const status = scenario.status === "ready" ? `${counts.total} 条` : "内容整理中"; return `<a class="scenario-row" href="#/learn/${scenario.id}" data-route="learn/${scenario.id}"><span class="row-icon">${icon(scenario.icon)}</span><span class="row-copy"><strong>${scenario.title}</strong><small>${scenario.description}</small></span><span class="row-meta">${status}</span>${icon("chevron", "chevron")}</a>`; }).join("")}</div></section></div>`;
  }
  function foundation() {
    return `<div class="page page-with-nav">${pageHeader("旅行基础", "可选学习，不会限制任何旅行场景。", "learn")}<section class="notice-panel grouped-list"><h2>内容正在按用途整理</h2><p>现有词库中包含数字、时间和礼貌表达，但这些内容也会用于交通、景点和日常沟通。为了避免重复或错误归类，目前暂不直接合并。</p><p class="muted">原始内容仍完整保存在词库中，后续会逐条完成场景标注。</p></section></div>`;
  }
  function contentRow(entry, language) {
    const target = language.id === "ja" ? entry.ja : entry.en;
    const secondary = language.id === "ja" ? entry.reading : "";
    return `<article class="content-row"><div class="term-copy"><strong lang="${language.id}">${escapeHtml(target)}</strong>${secondary ? `<span class="reading">${escapeHtml(secondary)}</span>` : ""}<span class="meaning">${escapeHtml(entry.zh)}</span></div><button class="speak-button" type="button" data-speak-id="${escapeHtml(entry.id)}" aria-label="播放${escapeHtml(target)}的发音">${icon("speaker")}<span class="sr-only">播放发音</span></button></article>`;
  }
  function scenarioPage(scenario, language, selectedTab) {
    if (scenario.status !== "ready") return `<div class="page page-with-nav">${pageHeader(scenario.title, scenario.description, "learn")}<section class="notice-panel grouped-list"><span class="status-label">内容整理中</span><h2>这个场景还需要人工整理</h2><p>候选内容分散在多个旧分类中，或与其他场景混在一起。为了不重复、不猜测词条归属，目前先保留真实入口，不展示未经确认的内容。</p><p class="muted">候选来源：${scenario.candidateSourceCategories.map(escapeHtml).join("、")}</p></section></div>`;
    const counts = app.catalog.scenarioCounts(scenario.id);
    const entries = app.catalog.scenarioEntries(scenario.id).filter((entry) => entry.type === (selectedTab === "phrases" ? "phrase" : "word"));
    return `<div class="page page-with-nav">${pageHeader(scenario.title, scenario.description, "learn")}<div class="scenario-summary"><span>${language.label}</span><span>${counts.words} 个词汇 · ${counts.phrases} 个短语</span></div><div class="content-tabs" role="tablist" aria-label="内容类型"><button type="button" role="tab" aria-selected="${selectedTab === "words"}" class="${selectedTab === "words" ? "active" : ""}" data-content-tab="words">词汇 <span>${counts.words}</span></button><button type="button" role="tab" aria-selected="${selectedTab === "phrases"}" class="${selectedTab === "phrases" ? "active" : ""}" data-content-tab="phrases">短语 <span>${counts.phrases}</span></button></div><section class="content-list grouped-list" aria-live="polite">${entries.length ? entries.map((entry) => contentRow(entry, language)).join("") : '<div class="empty-state"><h2>这个分类暂时没有内容</h2><p>词库保持原样，没有用重复内容填充。</p></div>'}</section></div>`;
  }
  function selfTest(summary) {
    return `<div class="page page-with-nav">${pageHeader("自测", "后续会从真实旅行场景生成练习。")}
      <section class="notice-panel grouped-list"><h2>自测结构已预留</h2><p>随机练习、场景练习和错题复习将在内容分类稳定后接入，避免使用尚未整理的场景映射。</p><dl class="legacy-summary"><div><dt>${summary.learned}</dt><dd>旧版已有记录</dd></div><div><dt>${summary.wrong}</dt><dd>旧版错题</dd></div></dl></section></div>`;
  }
  function tools() {
    return `<div class="page page-with-nav">${pageHeader("工具", "旅行途中随手可用的辅助功能。")}
      <section class="simple-list grouped-list"><div><strong>快速翻译</strong><span>结构预留，暂未开放</span></div><div><strong>紧急信息卡</strong><span>结构预留，暂未开放</span></div></section></div>`;
  }
  function me(language, summary, pwaState) {
    const installCopy = pwaState.type === "installed" ? "已从主屏幕独立运行" : pwaState.type === "ios" ? "Safari 分享 → 添加到主屏幕" : pwaState.type === "native" ? "当前浏览器支持直接安装" : "可从浏览器菜单添加到主屏幕";
    return `<div class="page page-with-nav">${pageHeader("我的", "设置和学习记录只保存在当前浏览器。")}
      <section class="settings-section"><h2>学习语言</h2><div class="inline-language" role="radiogroup" aria-label="学习语言">${app.catalog.LANGUAGES.map((item) => `<button type="button" role="radio" aria-checked="${language.id === item.id}" class="${language.id === item.id ? "active" : ""}" data-set-language="${item.id}">${item.label}<small>${item.nativeLabel}</small></button>`).join("")}</div></section>
      <section class="settings-section"><h2>本地记录</h2><div class="settings-group grouped-list"><dl class="legacy-summary"><div><dt>${summary.learned}</dt><dd>已有学习记录</dd></div><div><dt>${summary.wrong}</dt><dd>旧版错题</dd></div></dl><button class="settings-action danger-action" type="button" data-reset-learning>清除学习记录</button></div></section>
      <section class="settings-section"><h2>安装应用</h2><div class="settings-group grouped-list"><p>${installCopy}</p>${pwaState.type === "native" ? '<button class="settings-action" type="button" data-install>安装旅行单词</button>' : ""}</div></section></div>`;
  }
  app.views = { navigation, onboarding, learn, foundation, scenarioPage, selfTest, tools, me };
})(window.TravelVocabApp = window.TravelVocabApp || {});
