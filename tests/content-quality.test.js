const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const packIds = ["jp-ja", "us-en", "kr-ko", "es-es", "ru-ru"];

function loadPack(id) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(root, "core/content-registry.js"), "utf8"), sandbox);
  vm.runInContext(fs.readFileSync(path.join(root, "languages", id, "pack.js"), "utf8"), sandbox);
  return sandbox.window.TRAVEL_CONTENT.get(id);
}

const packs = packIds.map(loadPack);

test("五个语言包的短句和例句无机械模板或完全重复", () => {
  const mechanical = /相关信息|下一步该怎么做|我需要处理|我想咨询|在哪里咨询|我想了解|请告诉我.+的情况/;
  for (const pack of packs) {
    const phrases = pack.entries.filter((entry) => entry.kind === "phrase");
    const examples = pack.entries.filter((entry) => entry.example).map((entry) => entry.example);
    assert.equal(phrases.length, 320, pack.id);
    assert.equal(new Set(phrases.map((entry) => entry.zh)).size, phrases.length, `${pack.id}/中文短句重复`);
    assert.equal(new Set(phrases.map((entry) => entry.text)).size, phrases.length, `${pack.id}/外语短句重复`);
    assert.equal(new Set(examples.map((entry) => entry.zh)).size, examples.length, `${pack.id}/中文例句重复`);
    assert.equal(new Set(examples.map((entry) => entry.text)).size, examples.length, `${pack.id}/外语例句重复`);
    for (const phrase of phrases) assert.doesNotMatch(phrase.zh, mechanical, `${pack.id}/${phrase.id}`);
  }
});

test("非日语包不再串用整组日本料理词汇", () => {
  const japaneseCluster = new Set(["拉面", "乌冬面", "荞麦面", "寿司", "生鱼片", "天妇罗", "味噌汤"]);
  for (const pack of packs.filter((item) => item.id !== "jp-ja")) {
    const localized = pack.entries.filter((entry) => /^food_0(?:17|18|19|20|21|22|23)$/.test(entry.id));
    assert.equal(localized.length, 7, pack.id);
    for (const entry of localized) assert.equal(japaneseCluster.has(entry.zh), false, `${pack.id}/${entry.id}`);
  }
});

test("重点本地化纠错保持正确", () => {
  const expected = {
    "us-en": { hotel_002: ["汽车旅馆", "motel"], food_020: ["牛排", "steak"] },
    "jp-ja": { hotel_002: ["日式旅馆", "旅館"], food_020: ["寿司", "寿司"] },
    "kr-ko": { numbers_005: ["四", "넷"], food_020: ["炒年糕", "떡볶이"] },
    "es-es": { hotel_002: ["国营古堡酒店", "parador"], expressions_009: ["下午好", "buenas tardes"], numbers_015: ["欧元", "euro"] },
    "ru-ru": { numbers_015: ["卢布", "рубль"], food_020: ["烤肉串", "шашлык"] },
  };
  for (const pack of packs) for (const [id, [zh, text]] of Object.entries(expected[pack.id])) {
    const entry = pack.entries.find((item) => item.id === id);
    assert.deepEqual([entry?.zh, entry?.text], [zh, text], `${pack.id}/${id}`);
  }
});

test("韩国和俄罗斯扩展短句不残留美国城市或错误本币", () => {
  const checks = {
    "kr-ko": /纽约|华盛顿|芝加哥|五十美元/,
    "ru-ru": /纽约|华盛顿|芝加哥|零美元/,
  };
  for (const pack of packs.filter((item) => item.id in checks)) {
    for (const entry of pack.entries.filter((item) => /_phrase_/.test(item.id))) {
      assert.doesNotMatch(entry.zh, checks[pack.id], `${pack.id}/${entry.id}`);
    }
  }
});
