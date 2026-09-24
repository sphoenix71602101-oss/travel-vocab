const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const app = read("app.js");
const destinations = read("core/destinations.js");
const html = read("index.html");
const css = read("styles.css");
const beginnerRegistry = read("core/beginner-module-registry.js");
const japaneseBeginner = read("languages/jp-ja/beginner/module.js");
const englishBeginner = read("languages/us-en/beginner/module.js");

test("非历史界面品牌统一为语见世界", () => {
  const manifest = read("manifest.webmanifest");
  const guide = read("使用说明.md");
  for (const source of [html, manifest, guide]) {
    assert.match(source, /语见世界/);
    assert.doesNotMatch(source, /旅行单词/);
  }
  assert.match(html, /语见世界 · 旅行语言学习/);
  assert.match(manifest, /只学这趟旅行真正用得上的/);
});

test("四个主标签和场景页使用Hash路由", () => {
  for (const tab of ["home", "review", "tools", "me"]) {
    assert.match(html, new RegExp(`href="#/${tab}" data-tab="${tab}"`));
  }
  assert.doesNotMatch(html, /data-tab="test"/);
  assert.doesNotMatch(app, /parts\[0\] === "test"|legacy-test/);
  assert.match(app, /parts\[0\] === "scene"/);
  assert.match(app, /parts\[0\] === "learn"/);
  assert.match(app, /parts\[1\] === "emergency-card"/);
  assert.match(app, /emergency-card-preview/);
  assert.match(app, /window\.addEventListener\("hashchange", renderRoute\)/);
});

test("首页提供可扩展目的地入口、状态化学习卡和旅行场景", () => {
  assert.doesNotMatch(html, /id="appHeader"|class="brand-lockup"/);
  assert.doesNotMatch(app, /appTitle|appSubtitle|PAGE_META/);
  assert.match(app, /class="brand-hero"/);
  assert.match(app, /const DESTINATION_OPTIONS = window\.TRAVEL_DESTINATIONS\.all/);
  assert.match(app, /function heroImageForDestination\(destinationId\)/);
  assert.match(destinations, /images\/heroes\/default-mobile\.webp/);
  assert.match(destinations, /images\/heroes\/jp-mobile\.webp/);
  assert.match(destinations, /images\/heroes\/us-mobile\.webp/);
  assert.match(app, /destination\?\.id === "us" \? " hero-image-us" : ""/);
  assert.match(app, /<picture>/);
  assert.match(app, /fetchpriority="high"/);
  assert.doesNotMatch(app, /brandTitle|用语言看见更大的世界|brand-landscape/);
  assert.doesNotMatch(app, /TRAVEL LANGUAGE|brand-flight/);
  assert.match(css, /\.brand-hero\{[^}]*height:200px/);
  assert.match(css, /@media \(min-width:560px\)[\s\S]*\.brand-hero\{height:232px/);
  assert.match(css, /\.brand-hero\{[^}]*background:transparent/);
  assert.match(css, /\.brand-hero-image\{[^}]*-webkit-mask-image:linear-gradient\(to bottom,#000 calc\(100% - 60px\),transparent 100%\)/);
  assert.match(css, /\.brand-hero-image\{[^}]*mask-image:linear-gradient\(to bottom,#000 calc\(100% - 60px\),transparent 100%\)/);
  assert.match(css, /@media \(min-width:560px\)\{\.brand-hero-image\.hero-image-us\{object-position:80% center\}\}/);
  assert.match(css, /\.destination-picker\{[^}]*margin:-32px 0 12px/);
  assert.match(css, /@media \(min-width:560px\)[^\n]*\.destination-picker\{margin-top:-40px/);
  assert.match(app, /id="destinationPicker"/);
  assert.match(app, /id="destinationPickerTitle"/);
  assert.match(app, /当前旅程/);
  assert.match(app, /data-toggle-destinations/);
  assert.match(app, /data-destination/);
  assert.match(app, /aria-pressed=/);
  assert.match(app, /aria-expanded=/);
  assert.match(app, /data-continue/);
  assert.match(app, /已掌握 \$\{resumePercentage\}%/);
  assert.match(app, /已掌握 \$\{percentage\}%/);
  assert.match(app, /选择一个旅行场景/);
  assert.match(app, /<h2>旅行场景<\/h2>/);
  assert.doesNotMatch(app, /里面有什么/);
  assert.doesNotMatch(app, /开始随机练习/);
  assert.doesNotMatch(app, /class="learning-summary"/);
  assert.doesNotMatch(app, /renderLanguageWelcome/);
  assert.doesNotMatch(app, /class="language-tabs"/);
  assert.match(app, /scrollIntoView/);
  assert.match(app, /从旅行场景中选择学习内容/);
  assert.doesNotMatch(app, /data-browse-scenes|按需选择<\/span><h2>旅行场景/);
  assert.match(app, /class="home-quick-actions"/);
  assert.match(app, /class="quick-entry \$\{hasResume \? "continue-entry" : "start-entry"\}"/);
  assert.match(app, /const learningTitle = hasResume \? "继续学习" : "开始学习"/);
  assert.match(app, /从实用场景出发，轻松掌握旅行外语/);
  assert.match(app, /`\$\{lastScene\.name\} · \$\{lastSituation\.name\} · 已掌握 \$\{resumePercentage\}%`/);
  assert.match(app, /class="quick-entry-progress">已掌握 \$\{resumePercentage\}%<\/span>/);
  assert.match(css, /\.quick-entry-progress\{display:block;white-space:nowrap\}/);
  assert.doesNotMatch(app, /LEARN FOR A BRIGHTER JOURNEY|READ THE WORLD AROUND YOU/);
  assert.match(app, /const ACTION_ARROW_SVG = '<svg/);
  assert.equal((app.match(/\$\{ACTION_ARROW_SVG\}/g) || []).length, 2);
  assert.match(app, /看见当地文字，也能听懂、读懂、用上/);
  assert.doesNotMatch(app, /images\/home-actions\/(learning|reading)-card\.svg/);
  assert.match(css, /\.home-quick-actions\{[^}]*display:grid[^}]*grid-template-columns:repeat\(2,minmax\(0,1fr\)\)[^}]*gap:10px/s);
  assert.match(css, /\.category-grid\s*\{[^}]*grid-template-columns:\s*repeat\(3,minmax\(0,1fr\)\)/s);
  assert.match(css, /@media \(min-width:560px\)[\s\S]*\.category-grid\{grid-template-columns:repeat\(4,minmax\(0,1fr\)\)/);
  for (const scene of ["airport", "transport", "hotel", "food", "shopping", "directions", "emergency", "basics"]) {
    assert.match(css, new RegExp(`\\.scene-${scene}`));
  }
});

test("旅行场景入口统一使用项目 PNG 图标映射", () => {
  assert.match(app, /const SCENE_ICON_PATHS = Object\.freeze\(\{/);
  assert.match(app, /function sceneIcon\(sceneId\)/);
  assert.match(app, /class="scene-icon"/);
  assert.match(app, /category-card scene-card scene-\$\{escapeHtml\(scene\.id\)\}[\s\S]*sceneIcon\(scene\.id\)/);
  assert.match(app, /const learningLabel = !destination[\s\S]*继续学习，\$\{learningSubtitle\}/);
  assert.match(app, /scene-detail page-enter scene-\$\{escapeHtml\(scene\.id\)\}[\s\S]*sceneIcon\(scene\.id\)/);
  assert.match(app, /review-scene-row scene-\$\{escapeHtml\(scene\.id\)\}[\s\S]*sceneIcon\(scene\.id\)/);
  assert.match(css, /\.scene-icon(?:,\.ui-spot-icon)?\{[^}]*object-fit:contain/);
  const sceneColors = {
    airport: ["#4A9FF5", "#EAF4FE"],
    transport: ["#32B8C6", "#E6F8FA"],
    hotel: ["#8D78D8", "#D8D0F0"],
    food: ["#F47A55", "#F9D2C6"],
    shopping: ["#DF6FAF", "#F5CEE4"],
    directions: ["#E9A23B", "#FEF4E5"],
    basics: ["#58B98C", "#EAF7F1"],
    emergency: ["#E45D64", "#FDEEEF"]
  };
  for (const [scene, [main, soft]] of Object.entries(sceneColors)) {
    assert.match(css, new RegExp(`\\.scene-${scene}\\{--scene:${main};--scene-soft:${soft}\\}`));
  }
});

test("页面语义插图使用彩色 PNG，小型播放和收藏控件使用 SVG", () => {
  assert.match(app, /const UI_ICON_PATHS = Object\.freeze\(\{/);
  assert.match(app, /function uiIcon\(name\)/);
  assert.match(app, /class="ui-spot-icon"/);
  for (const usage of [
    'uiIcon("review")',
    'uiIcon("complete")',
    'uiIcon("exchange")',
    'uiIcon("checklist")',
    'uiIcon("trip")',
    'uiIcon("favorite")',
    'uiIcon("emergencyCard")',
    'uiIcon("translate")',
    'uiIcon("privacy")',
    'uiIcon("install")',
    'uiIcon("deleteData")',
    'uiIcon("warning")'
  ]) assert.match(app, new RegExp(usage.replace(/[()]/g, "\\$&")));
  assert.match(css, /\.ui-spot-icon\{[^}]*object-fit:contain/);
  assert.doesNotMatch(app, /const ICONS\s*=/);
  assert.doesNotMatch(app, /function iconSvg|iconSvg\(/);
  assert.match(app, /const SPEAKER_SVG = '<svg/);
  assert.match(app, /const FAVORITE_SVG = '<svg/);
  assert.match(app, /language-required-card without-icon/);
  assert.match(app, /journey-quote without-icon/);
  assert.doesNotMatch(app, /icons\/ui\/language\.png/);
});

test("复习概览提供薄弱加强、收藏夹和场景复习", () => {
  assert.match(app, /class="review-overview"/);
  assert.match(app, /data-review-primary/);
  assert.match(app, /data-review-weak/);
  assert.match(app, /data-open-favorites/);
  assert.match(app, /navigatePath\("review\/favorites"\)/);
  assert.doesNotMatch(app, /data-review-random|随机复习/);
  assert.match(app, /data-review-scene/);
  assert.doesNotMatch(app, /今日计划|最近学习|生词本|错题本/);
});

test("首次看到星标时提供一次性收藏位置引导", () => {
  assert.match(app, /yujianWorld\.favoriteGuideSeen\.v1/);
  assert.match(app, /遇到常用表达，点星标收藏/);
  assert.match(app, /之后可在「复习 → 收藏夹」快速找到/);
  assert.match(app, /data-dismiss-favorite-guide>知道了/);
  assert.match(app, /document\.addEventListener\("pointerdown", onOutside\)/);
  assert.match(app, /event\.key === "Escape"/);
  assert.match(css, /\.favorite-guide\{[^}]*position:absolute[^}]*z-index:50/s);
  assert.match(css, /\.favorite-guide button\{[^}]*min-height:44px/s);
});

test("工具页使用紧凑翻译器，联系卡与计划工具同网格展示", () => {
  const toolsView = app.slice(app.indexOf("function renderTools()"), app.indexOf("function dictionaryOptions("));
  assert.match(toolsView, /const destination = selectedDestination\(\)/);
  assert.match(toolsView, /destination\?\.language \|\| "选择目的地"/);
  assert.ok(toolsView.indexOf('class="translator-card"') < toolsView.indexOf('data-emergency-card'));
  assert.match(toolsView, /class="translator-status">待开放<\/span>/);
  assert.match(toolsView, /<label for="translateInput">输入中文<\/label>/);
  assert.match(toolsView, /<textarea id="translateInput"[^>]*>\$\{escapeHtml\(state\.translateDraft\)\}<\/textarea>/);
  assert.match(toolsView, /data-clear-translate/);
  assert.match(toolsView, /data-translate-destination/);
  assert.match(toolsView, /<button class="translator-submit" type="button" disabled>翻译<\/button>/);
  assert.match(toolsView, /译文会显示在这里/);
  assert.match(toolsView, /state\.translateDraft = translateInput\.value/);
  assert.match(app, /state\.translateDraft = "";/);
  assert.match(app, /<button class="tool-placeholder tool-card"[^>]*data-emergency-card/);
  assert.match(toolsView, /aria-label="更多旅行工具"/);
  assert.ok(toolsView.indexOf('data-emergency-card') < toolsView.indexOf('<h3>汇率换算</h3>'));
  assert.match(toolsView, /<span class="coming-badge tool-available-badge">/);
  assert.match(toolsView, /<textarea id="translateInput" class="translator-input" rows="2"/);
  assert.match(css, /\.translator-result\{min-height:60px/);
  for (const label of ["汇率换算", "旅行清单"]) assert.match(app, new RegExp(`<h3>${label}<\\/h3>`));
  assert.equal((app.match(/<article class="tool-placeholder">/g) || []).length, 2);
  assert.doesNotMatch(app, /单位换算|地图导航|常用句速查/);
  assert.doesNotMatch(app, /data-(?:currency|trip-list)/);
});

test("我的页面不伪造账号并以设置列表承载现有能力", () => {
  const meView = app.slice(app.indexOf("function renderMe()"), app.indexOf("function resetData()"));
  assert.match(app, /class="settings-list"/);
  assert.match(app, /语见世界应用图标/);
  assert.match(app, /安装 App/);
  assert.match(app, /清除全部学习数据/);
  assert.match(app, /我的行程/);
  assert.doesNotMatch(meView, /收藏夹/);
  assert.match(app, /class="settings-row planned-row" aria-disabled="true"/);
  assert.match(app, /class="journey-quote without-icon"/);
  assert.doesNotMatch(app, /生词本|意见反馈|关于我们/);
});

test("未选择目的地时展开首页选择器而不进入语言相关流程", () => {
  assert.match(app, /function requireDestination\(\)/);
  assert.match(app, /请先选择目的地和语言/);
  assert.match(app, /pendingDestinationFocus/);
  assert.match(app, /\["review", "favorites", "scene", "learn", "beginner", "emergency-card-form", "emergency-card-preview"\]/);
  assert.match(app, /requestAnimationFrame\(focusDestinationPicker\)/);
});

test("我的页面不再选择目的地且空状态不伪造学习数据", () => {
  assert.match(app, /尚未选择目的地/);
  assert.match(app, /data-choose-destination/);
  assert.doesNotMatch(app, /data-lang=/);
  assert.match(app, /destination \? loadLearning\(\) : emptyLanguageState\(\)/);
});

test("目的地配置开放日美韩西俄", () => {
  assert.match(html, /src="core\/destinations\.js"/);
  for (const id of ["jp", "us", "kr", "ru", "es"]) assert.match(destinations, new RegExp(`id: "${id}"`));
  assert.match(destinations, /country: "美国", language: "英语"/);
  assert.match(destinations, /country: "韩国", language: "韩语"/);
  assert.match(destinations, /country: "西班牙", language: "西班牙语"/);
  assert.match(destinations, /id: "es"[\s\S]*?status: "available"/);
  assert.match(destinations, /id: "ru"[\s\S]*?status: "available"/);
  assert.match(destinations, /images\/heroes\/ru-mobile\.png/);
  assert.match(css, /\.destination-strip[^}]*overflow-x:\s*auto/s);
  assert.match(css, /\.destination-card:disabled/);
});

test("学习采用最多5条的认识、小测和错项重学闭环", () => {
  assert.match(app, /const LEARNING_BATCH_SIZE = 5/);
  assert.match(app, /introduced\.concat\(unseen\)\.slice\(0, LEARNING_BATCH_SIZE\)/);
  assert.match(app, /markIntroduced\(entry\)/);
  assert.match(app, /if \(correct\) markMastered\(entry\); else markIntroduced\(entry\)/);
  assert.match(app, /phase = "retry-review"/);
  assert.match(app, /重新小测/);
  assert.match(app, /稍后继续/);
});

test("复习只使用已掌握内容且答错不撤销掌握", () => {
  assert.match(app, /const REVIEW_BATCH_SIZE = 10/);
  assert.match(app, /status !== "mastered"/);
  assert.match(app, /const reviewStartsForward = Math\.random\(\) < \.5/);
  assert.match(app, /index % 2 === 0\) === reviewStartsForward/);
  assert.match(app, /if \(isCorrect\) weak\.delete\(entry\.id\); else weak\.add\(entry\.id\)/);
  assert.match(app, /recordReview\(entry, correct\)/);
  assert.doesNotMatch(app, /recordReview[\s\S]{0,500}status: "introduced"/);
});

test("新存储按目的地语言包隔离并迁移旧进度", () => {
  assert.match(app, /yujianWorld\.learning\.v2/);
  assert.match(app, /LEGACY_LEARNING_KEY = "yujianWorld\.learning\.v1"/);
  assert.match(app, /yujianWorld\.lang\.v1/);
  assert.match(app, /yujianWorld\.destination\.v1/);
  assert.match(app, /function initializeDestination\(\)/);
  assert.match(app, /destinationForLang\(state\.lang\)/);
  assert.match(app, /envelope\.packs\[packId\] = normalizeLanguageState/);
  assert.match(app, /\["ja", "jp-ja"\]/);
  assert.match(app, /\["en", "us-en"\]/);
  assert.match(app, /const oldLang = localStorage\.getItem\("travelVocab\.lang\.v1"\)/);
  assert.match(app, /travelVocab\.stats\.v2/);
  assert.match(app, /travelVocab\.wrongIds\.v2/);
});

test("沉浸式流程、触控尺寸和安全区完整", () => {
  assert.match(css, /--nav-height:\s*66px/);
  assert.match(css, /env\(safe-area-inset-bottom\)/);
  assert.match(css, /\.nav-item[^}]*min-height:\s*54px/s);
  assert.match(css, /\.nav-item>svg\{[^}]*fill:none[^}]*stroke:currentColor/s);
  assert.match(css, /\.nav-item\[aria-current="page"\] \.nav-icon-active\{opacity:1\}/);
  assert.match(css, /\.speak-btn[^}]*width:\s*44px[^}]*height:\s*44px/s);
  assert.match(app, /updateShell\("home", true\)/);
  assert.match(app, /updateShell\(quiz\.mode\.kind === "review" \? "review" : "home", true\)/);
});

test("日英韩西俄旅行认读通过独立注册模块复用现有入口", () => {
  assert.match(html, /<script src="core\/beginner-module-registry\.js"><\/script>/);
  for (const packId of ["jp-ja", "us-en", "kr-ko", "es-es", "ru-ru"]) assert.match(destinations, new RegExp(`languages/${packId}/beginner/module\\.js`));
  assert.match(app, /function loadLanguage\(packId\)/);
  assert.match(beginnerRegistry, /window\.registerBeginnerModule/);
  assert.match(beginnerRegistry, /requiredMethods = \["createProgress", "normalizeProgress", "getHomeSummary", "renderRoute"\]/);
  assert.match(japaneseBeginner, /id: ID, legacyKey/);
  assert.match(englishBeginner, /id: ID, legacyKey/);
  assert.match(englishBeginner, /function renderEnglishBeginnerOverview\(\)/);
  assert.match(englishBeginner, /function renderEnglishPlacementIntro\(\)/);
  assert.match(englishBeginner, /function renderEnglishLessonStep\(\)/);
  assert.match(englishBeginner, /function renderEnglishChallengeResult\(\)/);
  assert.match(englishBeginner, /utterance\.lang = "en-US"/);
  assert.match(englishBeginner, /currentPack\(\)\.features\.beginnerAudioBase/);
  assert.match(app, /window\.TRAVEL_BEGINNER\?\.get\(currentPack\(\)\?\.features\?\.beginnerModule\)/);
  assert.match(app, /window\.TRAVEL_BEGINNER\?\.has\(currentPack\(\)\?\.features\?\.beginnerModule\)/);
  assert.doesNotMatch(app, /BEGINNER_DATA|EN_BEGINNER_DATA|beginner\.ja|beginner\.en/);
  assert.match(css, /\.en-step-actions/);
  assert.match(css, /\.en-chunks/);
  assert.match(css, /\.en-stress-word mark/);
});
