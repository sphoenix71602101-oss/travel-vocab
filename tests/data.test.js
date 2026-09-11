const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "data.js"), "utf8"), sandbox);

const categories = sandbox.window.CATEGORIES;
const words = sandbox.window.WORD_BANK;

function signature(entry, lang) {
  if (lang === "ja") return entry.ja.trim();
  if (lang === "en") return entry.en.trim().toLowerCase();
  return `${entry.ja.trim()}\u0000${entry.en.trim().toLowerCase()}`;
}

test("词库数量和分类保持完整", () => {
  assert.equal(categories.length, 8);
  assert.equal(words.length, 555);
});

test("每条词汇都有唯一、稳定且匹配分类的 ID", () => {
  const ids = new Set();
  for (const entry of words) {
    assert.match(entry.id, new RegExp(`^${entry.category}_[0-9]{3}$`));
    assert.equal(ids.has(entry.id), false, `重复 ID：${entry.id}`);
    ids.add(entry.id);
  }
});

test("词汇字段和分类有效", () => {
  const categoryIds = new Set(categories.map((item) => item.id));
  for (const entry of words) {
    for (const field of ["id", "category", "zh", "ja", "reading", "en", "type"]) {
      assert.equal(typeof entry[field], "string", `${entry.id} 的 ${field} 类型错误`);
      assert.notEqual(entry[field].trim(), "", `${entry.id} 的 ${field} 为空`);
    }
    assert.equal(categoryIds.has(entry.category), true, `${entry.id} 分类不存在`);
    assert.equal(["word", "phrase"].includes(entry.type), true, `${entry.id} 类型错误`);
  }
});

test("同分类同类型在各语言模式下没有答案冲突", () => {
  for (const lang of ["ja", "en", "bilingual"]) {
    const seen = new Map();
    for (const entry of words) {
      const key = `${entry.category}\u0000${entry.type}\u0000${signature(entry, lang)}`;
      assert.equal(seen.has(key), false, `${lang} 冲突：${seen.get(key)} 与 ${entry.id}`);
      seen.set(key, entry.id);
    }
  }
});

test("每个词条在各语言模式下都能组成四个唯一选项", () => {
  for (const lang of ["ja", "en", "bilingual"]) {
    for (const correct of words) {
      const signatures = new Set([signature(correct, lang)]);
      const ids = new Set([correct.id]);
      const tiers = [
        words.filter((item) => item.category === correct.category && item.type === correct.type),
        words.filter((item) => item.category === correct.category),
        words.filter((item) => item.type === correct.type),
        words
      ];
      for (const tier of tiers) {
        for (const item of tier) {
          if (signatures.size >= 4 || ids.has(item.id)) continue;
          const value = signature(item, lang);
          if (!signatures.has(value)) {
            signatures.add(value);
            ids.add(item.id);
          }
        }
      }
      assert.equal(signatures.size, 4, `${correct.id}/${lang} 候选不足`);
    }
  }
});

test("页面资源使用 GitHub Pages 兼容的相对路径", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /href="styles\.css"/);
  assert.match(html, /src="data\.js"/);
  assert.match(html, /src="app\.js"/);
  assert.doesNotMatch(html, /(?:src|href)="\//);
});
