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
  assert.equal(data.stages.length, 5);
  assert.equal(data.stages.flatMap((stage) => stage.lessons).length, 18);
  assert.equal(data.rows.length, 10);
  assert.equal(data.rules.length, 5);
  const pairs = data.rows.flatMap((row) => row.pairs);
  assert.equal(pairs.length, 46);
  assert.equal(new Set(pairs.map((pair) => pair[0])).size, 46);
  assert.equal(new Set(pairs.map((pair) => pair[1])).size, 46);
  for (const pair of pairs) assert.equal(pair.length, 2);
});

test("教学音频清单覆盖假名、规则示例与连续认读材料", () => {
  assert.equal(audio.length, 92);
  assert.equal(new Set(audio.map((item) => item.id)).size, 92);
  const ids = new Set(audio.map((item) => item.id));
  for (const row of data.rows) {
    for (const [kana] of row.pairs) assert.ok(ids.has(`kana-${kana.codePointAt(0).toString(16).padStart(4, "0")}`));
    if (row.example.audioId.startsWith("beginner/")) assert.ok(ids.has(row.example.audioId.replace("beginner/", "")), row.example.audioId);
  }
  for (const rule of data.rules) {
    const exampleId = rule.example.audioId?.replace("beginner/", "") || `example-${rule.id}`;
    if (!rule.example.audioId || rule.example.audioId.startsWith("beginner/")) assert.ok(ids.has(exampleId), exampleId);
    if (["voiced-ks", "voiced-th", "contracted"].includes(rule.id)) {
      rule.pairs.forEach((pair, index) => assert.ok(ids.has(`rule-${rule.id}-${index}`), pair[1]));
    }
  }
  for (const id of ["example-word-flow", "example-sentence", "example-sentence-2", "reading-word-flow-1", "reading-word-flow-2", "reading-mixed-scripts-0", "reading-mixed-scripts-1", "reading-sentence-particles-0", "reading-sentence-particles-1", "reading-sentence-particles-2"]) assert.ok(ids.has(id), id);
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

test("跳过测试覆盖四类认读能力，结课挑战为四词两句", () => {
  assert.equal(data.placement.length, 12);
  for (const category of ["基础假名", "浊音变化", "拼读规则", "连续认读"]) {
    assert.ok(data.placement.some((item) => item.category === category), category);
  }
  for (const item of data.placement) assert.equal(item.options.includes(item.answer), true);
  assert.equal(data.challenge.length, 6);
  assert.equal(data.challenge.slice(0, 4).every((item) => !/[。？！\s]/u.test(item.text)), true);
  assert.equal(data.challenge.slice(4).every((item) => /[。？！\s]/u.test(item.text)), true);
  const audioIds = new Set(audio.map((item) => item.id));
  for (const item of data.challenge) {
    if (item.audioId.startsWith("beginner/")) assert.ok(audioIds.has(item.audioId.replace("beginner/", "")), item.audioId);
    else assert.equal(fs.existsSync(path.join(root, "audio", "ja", `${item.audioId}.mp3`)), true, item.audioId);
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
  assert.deepEqual(JSON.parse(JSON.stringify(english.challenge.map((item) => item.text))), ["map", "gate", "shuttle", "station", "It's a map.", "What's on the table?"]);
  assert.ok(english.challenge.every((item) => item.ipa && item.meaning));
});

test("英语教学音清单覆盖课程、测试和挑战中的全部播放内容", () => {
  assert.equal(englishAudio.length, 54);
  assert.equal(new Set(englishAudio.map((item) => item.id)).size, 54);
  assert.equal(new Set(englishAudio.map((item) => `${item.rate}|${item.text}`)).size, 54);
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
