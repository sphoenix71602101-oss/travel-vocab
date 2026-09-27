const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "core/checklist.js"), "utf8");

function loadChecklist(initial = {}) {
  const values = new Map(Object.entries(initial));
  const localStorage = {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); }
  };
  let id = 0;
  const context = { window: { localStorage }, Object, JSON, Set, Date };
  vm.createContext(context);
  vm.runInContext(source, context);
  return { api: context.window.TRAVEL_CHECKLIST, values, makeStore: () => context.window.TRAVEL_CHECKLIST.createStore(localStorage, () => `custom-${++id}`) };
}

test("默认清单包含六类和常用出行项目", () => {
  const { api } = loadChecklist();
  const model = api.getModel();
  assert.equal(api.CATEGORIES.length, 6);
  assert.equal(model.items.length, 26);
  assert.ok(model.items.some((item) => item.text.includes("护照")));
  assert.ok(model.items.some((item) => item.text.includes("转换插头")));
  assert.deepEqual({ ...api.summarize(model) }, { total: 26, completed: 0, percentage: 0 });
});

test("支持添加、改名、换分类、勾选和删除", () => {
  const { makeStore } = loadChecklist();
  const store = makeStore();
  assert.equal(store.addItem("泳衣", "clothing").ok, true);
  assert.equal(store.updateItem("custom-1", { text: "速干泳衣", categoryId: "health" }).ok, true);
  assert.equal(store.setChecked("custom-1", true).ok, true);
  let item = store.getModel().items.find((candidate) => candidate.id === "custom-1");
  assert.deepEqual({ ...item }, { id: "custom-1", text: "速干泳衣", categoryId: "health", checked: true });
  assert.equal(store.deleteItem("custom-1").ok, true);
  assert.equal(store.getModel().items.some((candidate) => candidate.id === "custom-1"), false);
});

test("重置勾选保留内容，恢复默认移除自定义修改", () => {
  const { api, makeStore } = loadChecklist();
  const store = makeStore();
  store.setChecked("default-passport", true);
  store.updateItem("default-passport", { text: "有效护照", categoryId: "documents" });
  store.addItem("颈枕", "clothing");
  store.resetChecks();
  assert.equal(store.getModel().items.every((item) => !item.checked), true);
  assert.equal(store.getModel().items.some((item) => item.text === "颈枕"), true);
  store.restoreDefaults();
  assert.deepEqual(store.getModel(), api.createDefaultModel());
});

test("空清单可持久化，损坏数据回退默认值", () => {
  const key = "yujianWorld.checklist.v1";
  const empty = loadChecklist({ [key]: JSON.stringify({ items: [] }) });
  assert.equal(empty.api.getModel().items.length, 0);
  const broken = loadChecklist({ [key]: "{" });
  assert.equal(broken.api.getModel().items.length, 26);
});
