const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "data.js"), "utf8"), sandbox);

const scenes = sandbox.window.SCENE_PACKS;
const words = sandbox.window.WORD_BANK;

function signature(entry, lang) {
  return (lang === "ja" ? entry.ja : entry.en).trim().toLowerCase();
}

test("八个旅行学习包和555条内容保持完整", () => {
  assert.equal(scenes.length, 8);
  assert.equal(words.length, 555);
  assert.deepEqual(
    Array.from(scenes, (scene) => scene.id),
    ["airport", "transport", "hotel", "food", "shopping", "directions", "emergency", "basics"]
  );
});

test("每个旅行场景提供四项首页内容摘要", () => {
  const expected = {
    airport: ["值机", "行李", "安检", "登机"],
    transport: ["车票", "地铁", "火车", "出租车"],
    hotel: ["预订", "入住", "房间", "退房"],
    food: ["等位", "菜单", "点餐", "结账"],
    shopping: ["找商品", "尺码", "试用", "支付"],
    directions: ["位置", "路线", "距离", "地标"],
    emergency: ["身体不适", "药店", "报警", "失物"],
    basics: ["问候", "礼貌", "数字", "时间"]
  };
  for (const scene of scenes) assert.deepEqual(Array.from(scene.homeTopics), expected[scene.id]);
});

test("每条内容都有唯一稳定的原始ID", () => {
  const ids = new Set();
  for (const entry of words) {
    assert.match(entry.id, /^(airport|hotel|food|shopping|directions|numbers|emergency|expressions)_[0-9]{3}$/);
    assert.equal(ids.has(entry.id), false, `重复 ID：${entry.id}`);
    ids.add(entry.id);
  }
});

test("全部内容仅归入一个有效场景和小情境", () => {
  const situationSets = new Map(scenes.map((scene) => [
    scene.id,
    new Set(Array.from(scene.situations, (situation) => situation.id))
  ]));
  for (const entry of words) {
    for (const field of ["id", "scene", "situation", "zh", "ja", "reading", "en", "type"]) {
      assert.equal(typeof entry[field], "string", `${entry.id} 的 ${field} 类型错误`);
      assert.notEqual(entry[field].trim(), "", `${entry.id} 的 ${field} 为空`);
    }
    assert.equal(situationSets.has(entry.scene), true, `${entry.id} 场景不存在`);
    assert.equal(situationSets.get(entry.scene).has(entry.situation), true, `${entry.id} 小情境不存在`);
    assert.equal(["word", "phrase"].includes(entry.type), true, `${entry.id} 类型错误`);
  }
  for (const scene of scenes) {
    assert.ok(words.some((entry) => entry.scene === scene.id), `${scene.id} 没有内容`);
    for (const situation of scene.situations) {
      assert.ok(
        words.some((entry) => entry.scene === scene.id && entry.situation === situation.id),
        `${scene.id}/${situation.id} 没有内容`
      );
    }
  }
});

test("各语言都能为每条内容组成四个唯一选项", () => {
  for (const lang of ["ja", "en"]) {
    for (const correct of words) {
      const signatures = new Set([signature(correct, lang)]);
      const tiers = [
        words.filter((item) => item.scene === correct.scene && item.situation === correct.situation),
        words.filter((item) => item.scene === correct.scene),
        words.filter((item) => item.type === correct.type),
        words
      ];
      for (const tier of tiers) {
        for (const item of tier) {
          if (signatures.size >= 4 || item.id === correct.id) continue;
          signatures.add(signature(item, lang));
        }
      }
      assert.equal(signatures.size, 4, `${correct.id}/${lang} 候选不足`);
    }
  }
});

test("页面资源使用静态托管兼容的相对路径", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /href="styles\.css"/);
  assert.match(html, /src="data\.js"/);
  assert.match(html, /src="app\.js"/);
  assert.doesNotMatch(html, /(?:src|href)="\//);
});
