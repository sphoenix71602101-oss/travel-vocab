const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
for (const file of [
  "core/content-registry.js",
  "core/beginner-module-registry.js",
  "languages/es-es/pack.js",
  "languages/es-es/beginner/data.js",
  "languages/es-es/beginner/audio.js",
  "languages/es-es/beginner/module.js"
]) vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);

const pack = context.window.TRAVEL_CONTENT.get("es-es");
const beginnerModule = context.window.TRAVEL_BEGINNER.get("es-es-beginner");

test("西班牙西语包与现有语言包规模和结构一致", () => {
  assert.ok(pack);
  assert.equal(pack.destinationId, "es");
  assert.equal(pack.locale, "es-ES");
  assert.equal(pack.speechLocale, "es-ES");
  assert.equal(pack.scenes.length, 8);
  assert.equal(pack.entries.length, 795);
  assert.equal(pack.entries.filter((entry) => entry.kind === "word").length, 475);
  assert.equal(pack.entries.filter((entry) => entry.kind === "phrase").length, 320);
  assert.equal(new Set(pack.entries.map((entry) => entry.id)).size, 795);
});

test("每条西语内容都有完整情境、文本和四选一干扰项", () => {
  const scenes = new Map(pack.scenes.map((scene) => [scene.id, new Set(scene.situations.map((item) => item.id))]));
  for (const entry of pack.entries) {
    assert.ok(entry.id && entry.zh && entry.text && entry.direction && entry.intent, entry.id);
    assert.ok(scenes.get(entry.sceneId)?.has(entry.situationId), entry.id);
    const choices = new Set([entry.text.toLocaleLowerCase("es-ES")]);
    for (const item of pack.entries.filter((item) => item.sceneId === entry.sceneId)) {
      if (choices.size < 4) choices.add(item.text.toLocaleLowerCase("es-ES"));
    }
    assert.equal(choices.size, 4, entry.id);
  }
});

test("西班牙本地化表达和紧急信息已配置", () => {
  const content = pack.entries.map((entry) => `${entry.zh}\n${entry.text}`).join("\n");
  for (const marker of ["vale", "zumo", "móvil", "menú del día", "devolución del IVA", "farmacia de guardia", "112"]) {
    assert.match(content.toLocaleLowerCase("es-ES"), new RegExp(marker.toLocaleLowerCase("es-ES").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), marker);
  }
  assert.equal(pack.features.emergencyCard.title, "Tarjeta de emergencia");
  assert.equal(pack.features.emergencyCard.labels.bloodType, "Grupo sanguíneo");
});

test("西语正式短语和例句不再由少量插槽模板批量生成", () => {
  const phrases = pack.entries.filter((entry) => entry.kind === "phrase");
  const examples = pack.entries.filter((entry) => entry.example).map((entry) => entry.example);
  const allText = [...phrases.map((entry) => entry.text), ...examples.map((entry) => entry.text)].join("\n");
  for (const rejected of [
    "Quisiera información sobre", "Necesito ayuda con", "¿Puede confirmar lo de",
    "¿Qué tengo que hacer con", "¿Me puede explicar lo de", "Quisiera pedir pedir"
  ]) assert.doesNotMatch(allText, new RegExp(rejected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), rejected);
  assert.equal(examples.length, 230);
  assert.equal(new Set(examples.map((item) => item.text)).size, 230);
  const prefixes = new Map();
  for (const item of examples) {
    const prefix = item.text.toLocaleLowerCase("es-ES").replace(/[¿¡.,!?;:]/g, "").split(/\s+/).slice(0, 3).join(" ");
    prefixes.set(prefix, (prefixes.get(prefix) || 0) + 1);
  }
  assert.ok(Math.max(...prefixes.values()) <= 6, "同一三词句首不应覆盖大量例句");
});

test("西语零基础课包含五阶段十二课、测试和挑战", () => {
  assert.ok(beginnerModule);
  assert.equal(beginnerModule.id, "es-es-beginner");
  assert.equal(context.window.ES_BEGINNER_DATA.stages.length, 5);
  assert.equal(context.window.ES_BEGINNER_DATA.stages.flatMap((stage) => stage.lessons).length, 12);
  assert.equal(context.window.ES_BEGINNER_DATA.placement.length, 12);
  assert.equal(context.window.ES_BEGINNER_DATA.challenge.length, 6);
  assert.equal(beginnerModule.validateData(), "");
});

test("西语认读教学音清单覆盖课程所需的清晰、慢速和自然语速", () => {
  const audio = context.window.ES_BEGINNER_AUDIO;
  assert.equal(audio.length, 53);
  assert.equal(new Set(audio.map((item) => item.id)).size, 53);
  assert.equal(new Set(audio.map((item) => `${item.text}\0${item.rate}`)).size, 53);
  for (const item of audio) {
    assert.match(item.id, /^es-\d{3}$/);
    assert.ok(["clear", "slow", "natural"].includes(item.rate));
  }
  for (const key of [
    "mapa\0clear", "baño\0clear", "Vale, gracias.\0slow", "Vale, gracias.\0natural",
    "¿Dónde está el metro?\0slow", "¿Dónde está el metro?\0natural"
  ]) assert.ok(audio.some((item) => `${item.text}\0${item.rate}` === key), key);
});
