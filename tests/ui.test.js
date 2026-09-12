const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const html = read("index.html");
const styles = read("styles.css");
const views = read("js/views.js");

test("四项主导航和现有 Hash 路由接口保持不变", () => {
  for (const item of ["学习", "自测", "工具", "我的"]) assert.match(views, new RegExp(`label: "${item}"`));
  for (const route of ["learn", "self-test", "tools", "me"]) assert.match(views, new RegExp(`route: "${route}"`));
  assert.match(views, /data-route=/);
});

test("Onboarding 使用现有图标和可访问的语言选择", () => {
  assert.match(views, /src="icons\/icon-192\.png" width="80" height="80"/);
  assert.match(views, /role="radiogroup" aria-label="学习语言"/);
  assert.match(views, /data-onboarding-language=/);
  assert.match(views, /aria-checked=/);
  assert.match(views, /data-complete-onboarding/);
});

test("场景页保留内容分栏和专用发音按钮", () => {
  assert.match(views, /role="tablist" aria-label="内容类型"/);
  assert.match(views, /data-content-tab="words"/);
  assert.match(views, /data-content-tab="phrases"/);
  assert.match(views, /data-speak-id=/);
  assert.match(views, /class="content-list grouped-list"/);
});

test("样式包含 Apple 色彩令牌和系统深色模式", () => {
  for (const token of ["#f2f2f7", "#ffffff", "#1d1d1f", "#6e6e73", "#007aff", "#000000", "#1c1c1e", "#2c2c2e", "#0a84ff"]) {
    assert.match(styles, new RegExp(token));
  }
  assert.match(styles, /@media \(prefers-color-scheme: dark\)/);
  assert.match(html, /media="\(prefers-color-scheme: light\)"/);
  assert.match(html, /media="\(prefers-color-scheme: dark\)"/);
});

test("移动端触摸、安全区、焦点和减少动态效果均有保护", () => {
  assert.match(styles, /min-height: 44px/);
  assert.match(styles, /env\(safe-area-inset-bottom\)/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /@supports not \(\(-webkit-backdrop-filter:/);
});
