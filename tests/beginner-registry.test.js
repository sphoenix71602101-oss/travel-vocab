const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");

test("初学者模块注册表校验契约并拒绝重复注册", () => {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(root, "core/beginner-module-registry.js"), "utf8"), context);
  const valid = { id: "demo", createProgress() {}, normalizeProgress() {}, getHomeSummary() {}, renderRoute() {} };
  context.window.registerBeginnerModule(valid);
  assert.equal(context.window.TRAVEL_BEGINNER.get("demo").id, "demo");
  assert.throws(() => context.window.registerBeginnerModule(valid), /Invalid or duplicate/);
  assert.throws(() => context.window.registerBeginnerModule({ id: "incomplete" }), /Invalid or duplicate/);
});

test("日英模块注册统一接口并清理无效旧进度", () => {
  const context = { window: {} };
  vm.createContext(context);
  for (const file of ["languages/jp-ja/beginner/data.js", "languages/us-en/beginner/data.js", "languages/us-en/beginner/audio.js", "core/beginner-module-registry.js", "languages/jp-ja/beginner/module.js", "languages/us-en/beginner/module.js"]) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);
  }
  for (const id of ["jp-ja-beginner", "us-en-beginner"]) {
    const module = context.window.TRAVEL_BEGINNER.get(id);
    assert.ok(module);
    const normalized = module.normalizeProgress({ completedLessons: ["missing"], retryWords: ["missing"], challengeDone: 1, placementPassed: true });
    assert.deepEqual(Array.from(normalized.completedLessons), []);
    assert.deepEqual(Array.from(normalized.retryWords), []);
    assert.equal(normalized.challengeDone, false);
    assert.equal(normalized.placementPassed, true);
    assert.equal(typeof module.getHomeSummary(normalized), "string");
  }
});
