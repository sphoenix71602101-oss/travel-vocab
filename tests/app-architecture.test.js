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
  assert.match(app, /id="destinationPicker"/);
  assert.match(app, /<h1 id="destinationPickerTitle">打算去哪？<\/h1>/);
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
  assert.match(css, /--nav-height:\s*72px/);
  assert.match(css, /env\(safe-area-inset-bottom\)/);
  assert.match(css, /\.nav-item[^}]*min-height:\s*56px/s);
  assert.match(css, /\.speak-btn[^}]*width:\s*48px[^}]*height:\s*48px/s);
  assert.match(app, /updateShell\("home", true\)/);
  assert.match(app, /updateShell\(quiz\.mode\.kind === "review" \? "review" : "home", true\)/);
});
