const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const app = read("app.js");
const html = read("index.html");
const css = read("styles.css");

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
  assert.match(app, /parts\[0\] === "test"/);
  assert.match(app, /navigatePath\("review", true\)/);
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
  assert.match(app, /const HERO_IMAGE_PATHS = Object\.freeze\(\{/);
  assert.match(app, /function heroImageForDestination\(destinationId\)/);
  assert.match(app, /images\/heroes\/default-mobile\.webp/);
  assert.match(app, /images\/heroes\/jp-mobile\.webp/);
  assert.match(app, /us: Object\.freeze\(\{\s*mobile: "images\/heroes\/us-mobile\.webp",\s*wide: "images\/heroes\/us-wide\.webp"/);
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
  assert.match(app, /请选择旅行场景/);
  assert.doesNotMatch(app, /data-browse-scenes|按需选择<\/span><h2>旅行场景/);
  assert.match(app, /class="home-quick-actions"/);
  assert.match(app, /class="quick-entry continue-entry"/);
  assert.equal((app.match(/class="quick-entry continue-entry"/g) || []).length, 1);
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
  assert.match(app, /quick-entry continue-entry[\s\S]*quick-entry-icon scene-\$\{escapeHtml\(lastScene\.id\)\}[\s\S]*sceneIcon\(lastScene\.id\)/);
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

test("页面语义图标统一使用彩色 PNG 且只保留播放控件 SVG", () => {
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
    'uiIcon("randomReview")',
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
  assert.match(app, /language-required-card without-icon/);
  assert.match(app, /journey-quote without-icon/);
  assert.doesNotMatch(app, /icons\/ui\/language\.png/);
});

test("复习概览只重组现有随机、薄弱和场景复习", () => {
  assert.match(app, /class="review-overview"/);
  assert.match(app, /data-review-primary/);
  assert.match(app, /data-review-weak/);
  assert.match(app, /data-review-random/);
  assert.match(app, /data-review-scene/);
  assert.doesNotMatch(app, /今日计划|最近学习|生词本|错题本/);
});

test("工具页仅为确认的三项未来能力提供非交互占位", () => {
  assert.match(app, /class="tool-spotlight"[^>]*data-emergency-card/);
  for (const label of ["快捷翻译", "汇率换算", "旅行清单"]) assert.match(app, new RegExp(`<h3>${label}<\\/h3>`));
  assert.equal((app.match(/<article class="tool-placeholder">/g) || []).length, 3);
  assert.doesNotMatch(app, /单位换算|地图导航|常用句速查/);
  assert.doesNotMatch(app, /data-(?:translate|currency|trip-list)/);
});

test("我的页面不伪造账号并以设置列表承载现有能力", () => {
  assert.match(app, /class="settings-list"/);
  assert.match(app, /语见世界应用图标/);
  assert.match(app, /安装 App/);
  assert.match(app, /清除全部学习数据/);
  assert.match(app, /我的行程/);
  assert.match(app, /收藏夹/);
  assert.match(app, /class="settings-row planned-row" aria-disabled="true"/);
  assert.match(app, /class="journey-quote without-icon"/);
  assert.doesNotMatch(app, /生词本|意见反馈|关于我们/);
});

test("未选择目的地时展开首页选择器而不进入语言相关流程", () => {
  assert.match(app, /function requireDestination\(\)/);
  assert.match(app, /请先选择目的地和语言/);
  assert.match(app, /pendingDestinationFocus/);
  assert.match(app, /\["review", "scene", "learn", "emergency-card-form", "emergency-card-preview"\]/);
  assert.match(app, /requestAnimationFrame\(focusDestinationPicker\)/);
});

test("我的页面不再选择目的地且空状态不伪造学习数据", () => {
  assert.match(app, /尚未选择目的地/);
  assert.match(app, /data-choose-destination/);
  assert.doesNotMatch(app, /data-lang=/);
  assert.match(app, /destination \? loadLearning\(\) : emptyLanguageState\(\)/);
});

test("目的地配置开放日美并预留三个未开放国家", () => {
  assert.match(app, /const DESTINATION_OPTIONS = \[/);
  for (const id of ["jp", "us", "kr", "ru", "es"]) assert.match(app, new RegExp(`id: "${id}"`));
  assert.match(app, /country: "美国", language: "英语"/);
  assert.match(app, /status: "coming-soon"/);
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

test("新存储按语言隔离并清理旧进度但保留语言", () => {
  assert.match(app, /yujianWorld\.learning\.v1/);
  assert.match(app, /yujianWorld\.lang\.v1/);
  assert.match(app, /yujianWorld\.destination\.v1/);
  assert.match(app, /function initializeDestination\(\)/);
  assert.match(app, /destinationForLang\(state\.lang\)/);
  assert.match(app, /return \{ ja: normalizeLanguageState\(raw\?\.ja\), en: normalizeLanguageState\(raw\?\.en\) \}/);
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
