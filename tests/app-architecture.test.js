const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const app = read("app.js");
const html = read("index.html");
const css = read("styles.css");

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(read("data.js"), sandbox);
const words = sandbox.window.WORD_BANK;

test("四个主标签使用可刷新和返回的 Hash 路由", () => {
  for (const tab of ["home", "test", "tools", "me"]) {
    assert.match(html, new RegExp(`href="#/${tab}" data-tab="${tab}"`));
  }
  assert.match(app, /window\.addEventListener\("hashchange", renderRoute\)/);
  assert.match(app, /history\.pushState\(\{ quiz: true \}/);
  assert.match(app, /window\.addEventListener\("popstate"/);
});

test("语言与学习数据按日语和英语隔离", () => {
  assert.match(app, /const LANGS = new Set\(\["ja", "en"\]\)/);
  assert.match(app, /travelVocab\.stats\.v2/);
  assert.match(app, /travelVocab\.wrongIds\.v2/);
  assert.match(app, /return \{ ja: normalizeStats\(raw\?\.ja\), en: normalizeStats\(raw\?\.en\) \}/);
  assert.match(app, /localStorage\.removeItem\("travelVocab\.stats\.v1"\)/);
  assert.match(app, /localStorage\.removeItem\("travelVocab\.wrongIds\.v1"\)/);
  assert.doesNotMatch(app, /value:\s*"bilingual"/);
});

test("自测只抽取当前语言已学习词条且不写学习统计", () => {
  assert.match(app, /mode\.kind === "self-test"/);
  assert.match(app, /stats\.byId\[entry\.id\]\?\.attempts/);
  assert.match(app, /if \(state\.quiz\.mode\.trackLearning\) recordLearningAnswer\(entry, correct\); else updateWrongBook\(entry, correct\)/);
  assert.match(app, /kind: "self-test", direction: "reverse", sourceTab: "test", trackLearning: false/);
  assert.match(app, /kind: "wrong", direction: "reverse", sourceTab: "test", trackLearning: false/);
});

test("所有词条都能组成四个不重复的中文选项", () => {
  for (const correct of words) {
    const signatures = new Set([correct.zh.trim()]);
    const tiers = [
      words.filter((item) => item.category === correct.category && item.type === correct.type),
      words.filter((item) => item.category === correct.category),
      words.filter((item) => item.type === correct.type),
      words
    ];
    for (const tier of tiers) {
      for (const item of tier) {
        if (item.id !== correct.id && signatures.size < 4) signatures.add(item.zh.trim());
      }
    }
    assert.equal(signatures.size, 4, `${correct.id} 中文选项不足`);
  }
});

test("底栏和沉浸式答题处理触控尺寸与安全区", () => {
  assert.match(css, /--nav-height:\s*72px/);
  assert.match(css, /env\(safe-area-inset-bottom\)/);
  assert.match(css, /\.nav-item[^}]*min-height:\s*56px/s);
  assert.match(css, /\.speak-btn[^}]*width:\s*48px[^}]*height:\s*48px/s);
  assert.match(app, /bottomNav\.hidden = immersive/);
});
