const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
for (const file of [
  "core/content-registry.js", "core/beginner-module-registry.js",
  "languages/ru-ru/pack.js", "languages/ru-ru/beginner/data.js",
  "languages/ru-ru/beginner/audio.js", "languages/ru-ru/beginner/module.js"
]) vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);

const pack = context.window.TRAVEL_CONTENT.get("ru-ru");
const beginner = context.window.TRAVEL_BEGINNER.get("ru-ru-beginner");

test("俄罗斯俄语包规模、结构和读音字段完整", () => {
  assert.ok(pack);
  assert.equal(pack.destinationId, "ru");
  assert.equal(pack.locale, "ru-RU");
  assert.equal(pack.speechLocale, "ru-RU");
  assert.equal(pack.scenes.length, 8);
  assert.equal(pack.entries.length, 795);
  assert.equal(pack.entries.filter((entry) => entry.kind === "word").length, 475);
  assert.equal(pack.entries.filter((entry) => entry.kind === "phrase").length, 320);
  assert.equal(pack.entries.filter((entry) => entry.example).length, 230);
  assert.equal(new Set(pack.entries.map((entry) => entry.id)).size, 795);
  for (const entry of pack.entries) {
    assert.match(entry.text, /[А-ЯЁа-яё]|^Wi-Fi$/u, entry.id);
    assert.ok(entry.pronunciation?.trim(), entry.id);
    if (entry.example) assert.ok(entry.example.pronunciation?.trim(), entry.example.id);
  }
});

test("俄语内容引用有效情境并能组成四个唯一选项", () => {
  const scenes = new Map(pack.scenes.map((scene) => [scene.id, new Set(scene.situations.map((item) => item.id))]));
  for (const entry of pack.entries) {
    assert.ok(scenes.get(entry.sceneId)?.has(entry.situationId), entry.id);
    const choices = new Set([entry.text.toLocaleLowerCase("ru-RU")]);
    for (const item of pack.entries.filter((item) => item.sceneId === entry.sceneId)) {
      if (choices.size < 4) choices.add(item.text.toLocaleLowerCase("ru-RU"));
    }
    assert.equal(choices.size, 4, entry.id);
  }
});

test("俄语本地化、紧急信息和例句审校标记完整", () => {
  const content = pack.entries.map((entry) => `${entry.zh}\n${entry.text}\n${entry.example?.text || ""}`).join("\n");
  for (const marker of ["Аэроэкспресс", "Тройка", "вокзал", "рубл", "наличн", "112", "103", "Шереметьево"]) {
    assert.match(content, new RegExp(marker, "iu"), marker);
  }
  assert.doesNotMatch(content, /\b(?:TSA|Dallas|Boston|Philadelphia|Washington|United States)\b/i);
  assert.doesNotMatch(content, /\bI need help with\b/i);
  assert.doesNotMatch(content, /Я (?:бы )?хотел(?:а)?\b|Я забронировал(?:а)?\b|Я вегетариан(?:ец|ка)\b/i);
  assert.equal(pack.features.emergencyCard.labels.bloodType, "Группа крови");
});

test("俄语例句没有少量模板批量覆盖", () => {
  const examples = pack.entries.filter((entry) => entry.example).map((entry) => entry.example.text);
  assert.equal(examples.length, 230);
  assert.equal(new Set(examples).size, 230);
  const prefixes = new Map();
  for (const text of examples) {
    const prefix = text.toLocaleLowerCase("ru-RU").replace(/[«».,!?;:]/g, "").split(/\s+/).slice(0, 3).join(" ");
    prefixes.set(prefix, (prefixes.get(prefix) || 0) + 1);
  }
  assert.ok(Math.max(...prefixes.values()) <= 12);
});

test("俄语认读课按能力点拆为十五课并覆盖音频", () => {
  assert.ok(beginner);
  const data = context.window.RU_BEGINNER_DATA;
  const lessons = data.stages.flatMap((stage) => stage.lessons);
  assert.equal(data.stages.length, 5);
  assert.equal(lessons.length, 15);
  assert.equal(data.placement.length, 12);
  assert.equal(data.challenge.length, 6);
  const audio = context.window.RU_BEGINNER_AUDIO;
  assert.equal(audio.length, 45);
  assert.equal(new Set(audio.map((item) => item.id)).size, 45);
  const ids = new Set(audio.map((item) => item.id));
  for (const item of lessons.flatMap((lesson) => lesson.items)) assert.ok(ids.has(item.audioId), item.audioId);
  for (const item of data.challenge) assert.ok(ids.has(item.audioId), item.audioId);
});
