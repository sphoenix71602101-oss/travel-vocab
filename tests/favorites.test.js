const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "core/favorites.js"), "utf8");

function loadFavorites(initial = {}) {
  const values = new Map(Object.entries(initial));
  const localStorage = {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); }
  };
  const context = { window: { localStorage } };
  vm.createContext(context);
  vm.runInContext(source, context);
  return { api: context.window.TRAVEL_FAVORITES, values };
}

test("搜索按精确、前缀、包含排序并忽略大小写空格和标点", () => {
  const { api } = loadFavorites();
  const entries = [
    { id: "contains", zh: "问候", text: "Please say hello now" },
    { id: "prefix", zh: "打招呼", text: "Hello there" },
    { id: "exact", zh: "你好", text: "  HELLO!  " }
  ];
  assert.deepEqual(Array.from(api.searchEntries(entries, "hello", "en-US"), (entry) => entry.id), ["exact", "prefix", "contains"]);
  assert.equal(api.normalizeSearchText(" 你，好！ ", "zh-CN"), "你好");
});

test("搜索同时覆盖中文、外语和读音字段", () => {
  const { api } = loadFavorites();
  const entries = [
    { id: "airport", zh: "机场", text: "空港", pronunciation: "くうこう" },
    { id: "station", zh: "车站", text: "駅", pronunciation: "えき" }
  ];
  assert.equal(api.searchEntries(entries, "机场", "ja-JP")[0].id, "airport");
  assert.equal(api.searchEntries(entries, "空港", "ja-JP")[0].id, "airport");
  assert.equal(api.searchEntries(entries, "くう", "ja-JP")[0].id, "airport");
});

test("收藏按语言包隔离、最近收藏优先并过滤失效 ID", () => {
  const { api, values } = loadFavorites();
  const entries = [{ id: "one" }, { id: "two" }];
  api.toggle("jp-ja", "one", entries);
  api.toggle("jp-ja", "two", entries);
  api.toggle("us-en", "one", entries);
  assert.deepEqual(Array.from(api.getIds("jp-ja", entries)), ["two", "one"]);
  assert.deepEqual(Array.from(api.getIds("us-en", entries)), ["one"]);

  const reloaded = loadFavorites(Object.fromEntries(values));
  assert.deepEqual(Array.from(reloaded.api.getIds("jp-ja", [{ id: "two" }])), ["two"]);
  assert.deepEqual(Array.from(reloaded.api.getIds("us-en", entries)), ["one"]);
});

test("再次切换同一条内容会取消收藏", () => {
  const { api } = loadFavorites();
  const entries = [{ id: "one" }];
  assert.equal(api.toggle("jp-ja", "one", entries).favorite, true);
  assert.equal(api.toggle("jp-ja", "one", entries).favorite, false);
  assert.deepEqual(Array.from(api.getIds("jp-ja", entries)), []);
});
