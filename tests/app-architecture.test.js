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

test("首页只保留继续学习和旅行场景", () => {
  assert.doesNotMatch(html, /id="appHeader"|class="brand-lockup"/);
  assert.doesNotMatch(app, /appTitle|appSubtitle|PAGE_META/);
  assert.match(app, /data-continue/);
  assert.match(app, /<h2>旅行场景<\/h2>/);
  assert.doesNotMatch(app, /开始随机练习/);
  assert.doesNotMatch(app, /class="learning-summary"/);
  assert.match(app, /scrollIntoView/);
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
