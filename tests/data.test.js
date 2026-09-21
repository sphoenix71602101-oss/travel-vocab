const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "core/content-registry.js"), "utf8"), sandbox);
for (const id of ["jp-ja", "us-en", "kr-ko"]) vm.runInContext(fs.readFileSync(path.join(root, "languages", id, "pack.js"), "utf8"), sandbox);
const packs = sandbox.window.TRAVEL_CONTENT.all();

test("日英韩是三个独立完整语言包", () => {
  assert.deepEqual(Array.from(packs, (pack) => pack.id), ["jp-ja", "us-en", "kr-ko"]);
  assert.notEqual(packs[0].entries, packs[1].entries);
  for (const pack of packs) {
    for (const field of ["languageCode", "languageLabel", "nativeLabel", "locale", "speechLocale"]) assert.ok(pack[field], `${pack.id}/${field}`);
    assert.match(pack.features.beginnerModule, /-beginner$/);
    const emergency = pack.features.emergencyCard;
    for (const field of ["title", "notice", "foreignNameLabel", "unknownBloodType"]) assert.ok(emergency[field], `${pack.id}/emergencyCard/${field}`);
    for (const key of ["name", "nationality", "birthDate", "bloodType", "documentNumber", "emergencyContact", "emergencyPhone", "allergies", "conditions"]) assert.ok(emergency.labels[key], `${pack.id}/emergencyCard/labels/${key}`);
    assert.equal(pack.scenes.length, 8);
    assert.equal(pack.entries.length, 795);
    assert.equal(pack.entries.filter((entry) => entry.kind === "phrase").length, 320);
    assert.equal(pack.entries.filter((entry) => entry.example).length, 160);
  }
});

test("人工例句按场景均匀配置且不含旧模板话术", () => {
  const bannedChinese = /相关信息|我需要了解[“\"]/;
  const bannedJapanese = /について(?:確認したい|教えてください|質問があります)/;
  const bannedEnglish = /^(?:I need (?:some )?information about|Could you tell me about|I have a question about)/i;
  for (const pack of packs) {
    for (const scene of pack.scenes) {
      const examples = pack.entries.filter((entry) => entry.sceneId === scene.id && entry.example);
      assert.equal(examples.length, 20, `${pack.id}/${scene.id}`);
    }
    for (const entry of pack.entries.filter((item) => item.example)) {
      assert.doesNotMatch(entry.example.zh, bannedChinese, `${pack.id}/${entry.id}`);
      if (pack.id === "jp-ja") assert.doesNotMatch(entry.example.text, bannedJapanese, `${pack.id}/${entry.id}`);
      if (pack.id === "us-en") assert.doesNotMatch(entry.example.text, bannedEnglish, `${pack.id}/${entry.id}`);
    }
  }
});

test("每个语言包新增八个场景各30条短句", () => {
  for (const pack of packs) for (const scene of pack.scenes) {
    const added = pack.entries.filter((entry) => entry.sceneId === scene.id && /_phrase_/.test(entry.id));
    assert.equal(added.length, 30, `${pack.id}/${scene.id}`);
    assert.equal(added.filter((entry) => entry.direction === "traveler-says").length, 22);
    assert.equal(added.filter((entry) => entry.direction === "traveler-hears").length, 8);
  }
});

test("词条、例句和小情境引用完整且包内ID唯一", () => {
  for (const pack of packs) {
    const scenes = new Map(pack.scenes.map((scene) => [scene.id, new Set(scene.situations.map((item) => item.id))]));
    const ids = new Set();
    const exampleIds = new Set();
    for (const entry of pack.entries) {
      for (const field of ["id", "sceneId", "situationId", "kind", "zh", "text", "direction", "intent"]) {
        assert.equal(typeof entry[field], "string", `${pack.id}/${entry.id}/${field}`);
        assert.notEqual(entry[field].trim(), "", `${pack.id}/${entry.id}/${field}`);
      }
      assert.equal(ids.has(entry.id), false, `${pack.id}/${entry.id}`);
      ids.add(entry.id);
      assert.ok(scenes.get(entry.sceneId)?.has(entry.situationId), `${pack.id}/${entry.id} 小情境无效`);
      assert.ok(["word", "phrase"].includes(entry.kind));
      if (pack.pronunciationLabel) assert.ok(entry.pronunciation?.trim(), `${pack.id}/${entry.id} 缺少读音`);
      if (entry.example) {
        assert.ok(entry.example.id && entry.example.zh && entry.example.text);
        if (pack.pronunciationLabel) assert.ok(entry.example.pronunciation);
        assert.doesNotMatch(entry.example.zh, /[ぁ-んァ-ン]/, `${pack.id}/${entry.example.id} 的中文翻译混入日文假名`);
        assert.notEqual(entry.example.zh, entry.example.pronunciation, `${pack.id}/${entry.example.id} 的中文翻译与读音重复`);
        assert.equal(exampleIds.has(entry.example.id), false);
        exampleIds.add(entry.example.id);
      }
    }
  }
});

test("每个语言包都能为每条正式内容组成四个唯一选项", () => {
  for (const pack of packs) for (const correct of pack.entries) {
    const signatures = new Set([correct.text.trim().toLocaleLowerCase(pack.locale)]);
    const tiers = [
      pack.entries.filter((item) => item.sceneId === correct.sceneId && item.situationId === correct.situationId),
      pack.entries.filter((item) => item.sceneId === correct.sceneId),
      pack.entries.filter((item) => item.kind === correct.kind),
      pack.entries
    ];
    for (const tier of tiers) for (const item of tier) {
      if (signatures.size < 4) signatures.add(item.text.trim().toLocaleLowerCase(pack.locale));
    }
    assert.equal(signatures.size, 4, `${pack.id}/${correct.id}`);
  }
});

test("韩语包提供韩文、修订罗马字和韩国本地高频表达", () => {
  const korean = packs.find((pack) => pack.id === "kr-ko");
  assert.equal(korean.pronunciationLabel, "罗马字");
  for (const entry of korean.entries) {
    assert.match(entry.text, /[가-힣]|^(?:Wi-Fi|KTX)$/, `${entry.id} 缺少韩文`);
    assert.match(entry.pronunciation, /[a-z]/i, `${entry.id} 缺少罗马字`);
    assert.doesNotMatch(entry.text, /신칸센|TSA|일본식 여관/, `${entry.id} 残留其他国家表达`);
  }
  const text = korean.entries.map((entry) => `${entry.zh}\n${entry.text}`).join("\n");
  for (const marker of ["티머니", "KTX", "한옥", "반찬", "112", "119", "1330", "택스 리펀드"]) {
    assert.match(text, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `缺少韩国本地表达 ${marker}`);
  }
});

test("页面以静态相对路径加载内容注册表和三个语言包", () => {
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  assert.match(html, /src="core\/content-registry\.js"/);
  assert.match(html, /src="languages\/jp-ja\/pack\.js"/);
  assert.match(html, /src="languages\/us-en\/pack\.js"/);
  assert.match(html, /src="languages\/kr-ko\/pack\.js"/);
  assert.doesNotMatch(html, /src="data\.js"/);
  assert.doesNotMatch(html, /(?:src|href)="\//);
});
