"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const sandbox = { window: {} };
sandbox.window.registerBeginnerModule = (module) => { sandbox.module = module; };
vm.createContext(sandbox);
for (const file of ["languages/kr-ko/beginner/data.js", "languages/kr-ko/beginner/audio.js", "languages/kr-ko/beginner/module.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox, { filename: file });
}

test("韩语认读课程包含五阶段十五课及完整测试挑战", () => {
  const data = sandbox.window.KO_BEGINNER_DATA;
  assert.equal(data.stages.length, 5);
  assert.equal(data.stages.flatMap((stage) => stage.lessons).length, 15);
  assert.equal(data.placement.length, 12);
  assert.equal(new Set(data.placement.map((item) => item.category)).size, 4);
  assert.equal(data.challenge.length, 6);
  assert.equal(data.challenge.slice(0, 4).every((item) => !/[.?!。？！\s]/u.test(item.text)), true);
  assert.equal(data.challenge.slice(4).every((item) => /[.?!。？！\s]/u.test(item.text)), true);
});

test("韩语认读教学音覆盖课程和挑战中的全部播放项", () => {
  const data = sandbox.window.KO_BEGINNER_DATA;
  const audio = sandbox.window.KO_BEGINNER_AUDIO;
  const ids = new Set(audio.map((item) => item.id));
  assert.equal(ids.size, audio.length);
  for (const item of audio) {
    const file = path.join(root, "audio", "ko", "beginner", `${item.id}.mp3`);
    assert.equal(fs.existsSync(file), true, `${item.id} 缺少韩语教学音频`);
    assert.ok(fs.statSync(file).size > 0, `${item.id} 韩语教学音频为空`);
  }
  for (const item of data.stages.flatMap((stage) => stage.lessons).flatMap((lesson) => lesson.items)) {
    assert.ok(ids.has(item.audioId), item.audioId);
    assert.match(item.text, /[가-힣]/);
    assert.match(item.pronunciation, /[a-z]/i);
  }
  for (const item of data.challenge) assert.ok(ids.has(item.audioId), item.audioId);
});

test("韩语认读模块遵循注册接口并清理无效进度", () => {
  assert.equal(sandbox.module.id, "kr-ko-beginner");
  for (const method of ["createProgress", "normalizeProgress", "getHomeSummary", "renderRoute"]) {
    assert.equal(typeof sandbox.module[method], "function");
  }
  const normalized = sandbox.module.normalizeProgress({
    curriculumVersion: 2,
    completedLessons: ["ko-01", "missing", "ko-01"],
    challengeDone: true,
    placementPassed: false,
    retryWords: ["한국어", "不存在"]
  });
  assert.deepEqual(Array.from(normalized.completedLessons), ["ko-01"]);
  assert.deepEqual(Array.from(normalized.retryWords), ["한국어"]);
  assert.equal(normalized.challengeDone, true);
  const legacy = sandbox.module.normalizeProgress({ completedLessons: ["ko-01"], challengeDone: true, placementPassed: true });
  assert.equal(legacy.curriculumVersion, 2);
  assert.deepEqual(Array.from(legacy.completedLessons), []);
  assert.equal(legacy.challengeDone, false);
  assert.equal(legacy.placementPassed, false);
});
