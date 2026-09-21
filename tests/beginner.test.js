const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
for (const file of ["scripts/source-data/legacy-bilingual-data.js", "languages/jp-ja/beginner/data.js", "languages/us-en/beginner/data.js", "languages/us-en/beginner/audio.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);
}
const data = context.window.BEGINNER_DATA;
const english = context.window.EN_BEGINNER_DATA;
const englishAudio = context.window.EN_BEGINNER_AUDIO;
const words = context.window.WORD_BANK;
const audio = JSON.parse(fs.readFileSync(path.join(root, "languages/jp-ja/beginner/audio.json"), "utf8"));

test("认读课程覆盖 46 个不同基础音及两套字形", () => {
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

test("跳过测试覆盖三类认读能力，旅行挑战沿用现有日语音频", () => {
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

test("英语认读课程包含五阶段十二课及规定的逐卡内容", () => {
  assert.equal(english.stages.length, 5);
  const lessons = english.stages.flatMap((stage) => stage.lessons);
  assert.equal(lessons.length, 12);
  assert.equal(new Set(lessons.map((lesson) => lesson.id)).size, 12);
  assert.deepEqual(JSON.parse(JSON.stringify(lessons.map((lesson) => lesson.id))), Array.from({ length: 12 }, (_, index) => `en-${String(index + 1).padStart(2, "0")}`));
  const validCardTypes = new Set(["concept", "words", "try-first", "syllables", "stress", "phrases"]);
  for (const lesson of lessons) {
    assert.ok(lesson.title && lesson.subtitle);
    assert.ok(lesson.cards.length >= 3, `${lesson.id} 教学卡不足`);
    assert.equal(lesson.cards.some((card) => card.type === "try-first"), true, `${lesson.id} 缺少 Try First`);
    assert.equal(lesson.practice.length, 2, `${lesson.id} 应有两道轻量练习`);
    for (const card of lesson.cards) assert.equal(validCardTypes.has(card.type), true, `${lesson.id} 包含未知卡片类型`);
    for (const question of lesson.practice) {
      assert.equal(question.options.includes(question.answer), true, `${lesson.id} 练习缺少正确选项`);
      assert.ok(question.explanation);
    }
  }
});

test("英语课程使用广义美式音标并提供音节、重音和双语速内容", () => {
  const serialized = JSON.stringify(english);
  assert.doesNotMatch(serialized, /ɒ|ɑː/);
  const cards = english.stages.flatMap((stage) => stage.lessons).flatMap((lesson) => lesson.cards);
  assert.equal(cards.filter((card) => card.type === "syllables").length, 1);
  assert.equal(cards.filter((card) => card.type === "stress").length, 1);
  assert.equal(cards.filter((card) => card.type === "phrases").length, 2);
  assert.ok(cards.filter((card) => card.type === "phrases").every((card) => card.items.length >= 3));
  assert.ok(cards.filter((card) => card.type === "try-first" && card.dualSpeed).length >= 2);
});

test("英语跳过测试覆盖四类能力并提供六项结课挑战", () => {
  assert.equal(english.placement.length, 12);
  for (const category of ["声音辨识", "拼读规律", "音节与重音", "真实听感"]) {
    assert.equal(english.placement.filter((item) => item.category === category).length, 3);
  }
  for (const item of english.placement) assert.equal(item.options.includes(item.answer), true);
  assert.deepEqual(JSON.parse(JSON.stringify(english.challenge.map((item) => item.text))), ["map", "gate", "shuttle", "station", "reservation", "Where's the station?"]);
  assert.ok(english.challenge.every((item) => item.ipa && item.meaning));
});

test("英语教学音清单覆盖课程、测试和挑战中的全部播放内容", () => {
  assert.equal(englishAudio.length, 53);
  assert.equal(new Set(englishAudio.map((item) => item.id)).size, 53);
  assert.equal(new Set(englishAudio.map((item) => `${item.rate}|${item.text}`)).size, 53);
  for (const item of englishAudio) {
    assert.match(item.id, /^en-[0-9]{3}$/);
    assert.equal(["clear", "slow", "natural"].includes(item.rate), true);
    const file = path.join(root, "audio", "en", "beginner", `${item.id}.mp3`);
    assert.equal(fs.existsSync(file), true, `${item.id} 缺少英语教学音频`);
    assert.ok(fs.statSync(file).size > 0, `${item.id} 英语教学音频为空`);
  }
  const expected = new Set();
  const add = (text, rate = "clear") => expected.add(`${rate}|${text}`);
  for (const stage of english.stages) for (const lesson of stage.lessons) {
    for (const card of lesson.cards) {
      if (card.type === "words") for (const item of card.items) add(item.speech || item.text);
      if (["syllables", "stress"].includes(card.type)) for (const item of card.items) add(item.text);
      if (card.type === "phrases") for (const item of card.items) { add(item.text, "slow"); add(item.text, "natural"); }
      if (card.type === "try-first") {
        if (card.dualSpeed) { add(card.text, "slow"); add(card.text, "natural"); }
        else add(card.text);
      }
    }
    for (const question of lesson.practice) if (question.audio) add(question.audio.text, question.audio.rate || "clear");
  }
  for (const question of english.placement) if (question.audio) add(question.audio.text, question.audio.rate || "clear");
  for (const item of english.challenge) add(item.text);
  assert.deepEqual(new Set(englishAudio.map((item) => `${item.rate}|${item.text}`)), expected);
});
