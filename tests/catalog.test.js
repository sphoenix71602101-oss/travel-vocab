const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "data.js"), "utf8"), sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "js", "catalog.js"), "utf8"), sandbox);

const catalog = sandbox.window.TravelVocabApp.catalog;

test("新目录包含两种语言、可选基础和八个旅行场景", () => {
  assert.deepEqual(Array.from(catalog.LANGUAGES, (item) => item.id), ["ja", "en"]);
  assert.equal(catalog.FOUNDATION.id, "foundation");
  assert.equal(catalog.SCENARIOS.length, 8);
  assert.deepEqual(Array.from(catalog.SCENARIOS, (item) => item.id), [
    "airport-immigration", "transportation", "hotel", "restaurant",
    "shopping", "attractions", "daily-communication", "emergency"
  ]);
});

test("Restaurant 只映射现有 food 内容且词汇短语数量完整", () => {
  const entries = Array.from(catalog.scenarioEntries("restaurant"));
  assert.equal(entries.length, 96);
  assert.equal(entries.every((entry) => entry.category === "food"), true);
  assert.deepEqual({ ...catalog.scenarioCounts("restaurant") }, { total: 96, words: 84, phrases: 12 });
});

test("语义清晰的旧分类可用，混合分类不会被自动填充", () => {
  assert.equal(catalog.scenarioEntries("hotel").length, 82);
  assert.equal(catalog.scenarioEntries("shopping").length, 73);
  assert.equal(catalog.scenarioEntries("daily-communication").length, 47);
  assert.equal(catalog.scenarioEntries("emergency").length, 44);
  for (const id of ["airport-immigration", "transportation", "attractions"]) {
    assert.equal(catalog.scenario(id).status, "curation");
    assert.equal(catalog.scenarioEntries(id).length, 0);
  }
});

test("目录适配不会改变原始词库对象或数量", () => {
  assert.equal(sandbox.window.WORD_BANK.length, 555);
  assert.equal(sandbox.window.CATEGORIES.length, 8);
  assert.equal(new Set(sandbox.window.WORD_BANK.map((entry) => entry.id)).size, 555);
});
