"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const specs = [
  { label: "日语", count: 18, dataFile: "languages/jp-ja/beginner/data.js", dataKey: "BEGINNER_DATA", moduleFile: "languages/jp-ja/beginner/module.js" },
  { label: "英语", count: 12, dataFile: "languages/us-en/beginner/data.js", dataKey: "EN_BEGINNER_DATA", moduleFile: "languages/us-en/beginner/module.js" },
  { label: "韩语", count: 15, dataFile: "languages/kr-ko/beginner/data.js", dataKey: "KO_BEGINNER_DATA", moduleFile: "languages/kr-ko/beginner/module.js" },
  { label: "西语", count: 12, dataFile: "languages/es-es/beginner/data.js", dataKey: "ES_BEGINNER_DATA", moduleFile: "languages/es-es/beginner/module.js" },
  { label: "俄语", count: 15, dataFile: "languages/ru-ru/beginner/data.js", dataKey: "RU_BEGINNER_DATA", moduleFile: "languages/ru-ru/beginner/module.js" }
];

function load(spec) {
  const context = { window: {} };
  context.window.registerBeginnerModule = (module) => { context.module = module; };
  vm.createContext(context);
  for (const file of [spec.dataFile, spec.moduleFile]) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
  }
  return { data: context.window[spec.dataKey], module: context.module };
}

test("五语言零基础课程统一为五阶段并使用各自合理课数", () => {
  for (const spec of specs) {
    const { data } = load(spec);
    const lessons = data.stages.flatMap((stage) => stage.lessons);
    assert.equal(data.stages.length, 5, spec.label);
    assert.equal(lessons.length, spec.count, spec.label);
    assert.equal(new Set(lessons.map((lesson) => lesson.id)).size, spec.count, `${spec.label} 课 ID`);
    assert.equal(data.placement.length, 12, `${spec.label} 测试`);
    assert.equal(data.challenge.length, 6, `${spec.label} 挑战`);
  }
});

test("测试只检查认读，结课挑战固定为四词两句", () => {
  const semanticQuestion = /是什么意思|哪个词表示|用于什么场景|看到.+应该找|哪一句适合/u;
  for (const spec of specs) {
    const { data } = load(spec);
    for (const question of data.placement) assert.doesNotMatch(question.prompt, semanticQuestion, `${spec.label}: ${question.prompt}`);
    assert.equal(data.challenge.slice(0, 4).every((item) => !/[。？！.!?\s]/u.test(item.text)), true, `${spec.label} 前四项应为单词`);
    assert.equal(data.challenge.slice(4).every((item) => /[。？！.!?\s]/u.test(item.text)), true, `${spec.label} 后两项应为短句`);
  }
});

test("五语言旧版课程进度重置，新版进度可恢复并过滤失效课 ID", () => {
  for (const spec of specs) {
    const { data, module } = load(spec);
    const firstLesson = data.stages[0].lessons[0].id;
    const firstChallenge = data.challenge[0].text;
    const legacy = module.normalizeProgress({ completedLessons: [firstLesson], placementPassed: true, challengeDone: true, retryWords: [firstChallenge] });
    assert.equal(legacy.curriculumVersion, 2, spec.label);
    assert.deepEqual(Array.from(legacy.completedLessons), [], spec.label);
    assert.equal(legacy.placementPassed, false, spec.label);
    assert.equal(legacy.challengeDone, false, spec.label);
    const current = module.normalizeProgress({ curriculumVersion: 2, completedLessons: [firstLesson, "missing"], placementPassed: true, challengeDone: true, retryWords: [firstChallenge, "missing"] });
    assert.deepEqual(Array.from(current.completedLessons), [firstLesson], spec.label);
    assert.deepEqual(Array.from(current.retryWords), [firstChallenge], spec.label);
    assert.equal(current.placementPassed, true, spec.label);
    assert.equal(current.challengeDone, true, spec.label);
  }
});
