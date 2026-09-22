const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("仅加载用户选择的语言，切回已加载语言不重复请求", async () => {
  const requested = [];
  const context = vm.createContext({ window: {}, Promise, Map, Set });
  context.document = {
    createElement() { return { remove() {} }; },
    body: {
      append(script) {
        requested.push(script.src);
        try {
          vm.runInContext(read(script.src), context, { filename: script.src });
          script.onload();
        } catch (error) { script.onerror(error); }
      }
    }
  };
  vm.runInContext(read("core/destinations.js"), context);
  vm.runInContext(read("core/content-registry.js"), context);
  vm.runInContext(read("core/beginner-module-registry.js"), context);
  const app = read("app.js");
  const loader = app.slice(app.indexOf("  const languageLoads = new Map();"), app.indexOf("  function escapeHtml("));
  vm.runInContext(`const DESTINATION_OPTIONS = window.TRAVEL_DESTINATIONS.all; ${loader}\nglobalThis.loadLanguage = loadLanguage;`, context);

  assert.equal(requested.length, 0);
  await context.loadLanguage("jp-ja");
  assert.ok(context.window.TRAVEL_CONTENT.has("jp-ja"));
  assert.equal(context.window.TRAVEL_CONTENT.has("us-en"), false);
  const japanese = context.window.TRAVEL_DESTINATIONS.all[0];
  assert.deepEqual(requested, [japanese.resources.pack, ...japanese.resources.beginner]);

  await Promise.all([context.loadLanguage("us-en"), context.loadLanguage("us-en")]);
  assert.ok(context.window.TRAVEL_CONTENT.has("us-en"));
  const count = requested.length;
  await context.loadLanguage("jp-ja");
  await context.loadLanguage("us-en");
  assert.equal(requested.length, count);
  assert.equal(context.window.TRAVEL_CONTENT.has("kr-ko"), false);
});
