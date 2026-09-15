const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
for (const file of ["data.js", "beginner-data.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);
}
const data = context.window.BEGINNER_DATA;
const words = context.window.WORD_BANK;
const audio = JSON.parse(fs.readFileSync(path.join(root, "beginner-audio.json"), "utf8"));

test("识读课程覆盖 46 个不同基础音及两套字形", () => {
  assert.equal(data.rows.length, 11);
  assert.equal(data.rules.length, 7);
  const pairs = data.rows.flatMap((row) => row.pairs);
  assert.equal(pairs.length, 46);
  assert.equal(new Set(pairs.map((pair) => pair[0])).size, 46);
  assert.equal(new Set(pairs.map((pair) => pair[1])).size, 46);
  for (const pair of pairs) assert.equal(pair.length, 2);
});

test("教学音频清单与短课声音和新增示例一致", () => {
  const expected = data.rows.flatMap((row) => row.pairs.map(([kana]) => ({
    id: `kana-${kana.codePointAt(0).toString(16).padStart(4, "0")}`, text: kana
  }))).concat(data.rules.filter((rule) => rule.example?.audioText).map((rule) => ({
    id: `example-${rule.id}`, text: rule.example.audioText
  }))).concat(data.rules.filter((rule) => ["voiced-ks", "voiced-th", "semi-voiced", "contracted"].includes(rule.id))
    .flatMap((rule) => rule.pairs.map((pair, index) => ({ id: `rule-${rule.id}-${index}`, text: pair[1] }))));
  assert.deepEqual(audio.map(({ id, text }) => ({ id, text })), JSON.parse(JSON.stringify(expected)));
  for (const item of audio) {
    if ("synthesisText" in item) assert.ok(typeof item.synthesisText === "string" && item.synthesisText.trim());
  }
  assert.deepEqual(audio.filter((item) => "synthesisText" in item).map(({ id, synthesisText }) => ({ id, synthesisText })), [
    { id: "kana-3044", synthesisText: "い。" },
    { id: "kana-3075", synthesisText: "フ" },
    { id: "kana-3089", synthesisText: "ら。" },
    { id: "kana-3093", synthesisText: "ん。" }
  ]);
  for (const item of audio) {
    const file = path.join(root, "audio", "ja", "beginner", `${item.id}.mp3`);
    assert.equal(fs.existsSync(file), true, `${item.id} 缺少教学音频`);
    assert.ok(fs.statSync(file).size > 0, `${item.id} 音频为空`);
  }
});

test("跳过测试覆盖三类识读能力，旅行挑战沿用现有日语音频", () => {
  assert.equal(data.placement.length, 12);
  for (const category of ["清音", "片假名", "规则"]) {
    assert.equal(data.placement.filter((item) => item.category === category).length, 4);
  }
  for (const item of data.placement) assert.equal(item.options.includes(item.answer), true);
  assert.equal(data.challenge.length, 6);
  for (const item of data.challenge) {
    assert.equal(words.some((word) => word.id === item.audioId), true, `${item.text} 缺少词条音频`);
    assert.equal(fs.existsSync(path.join(root, "audio", "ja", `${item.audioId}.mp3`)), true);
  }
});
