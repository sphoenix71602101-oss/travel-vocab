const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "core/emergency-card.js"), "utf8");
const context = { window: {}, Blob, Uint8Array, DataView, Date, setTimeout };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "core/content-registry.js"), "utf8"), context);
for (const id of ["jp-ja", "us-en", "kr-ko"]) vm.runInContext(fs.readFileSync(path.join(root, "languages", id, "pack.js"), "utf8"), context);
vm.runInContext(source, context);
const card = context.window.EMERGENCY_CARD;
const japanesePack = context.window.TRAVEL_CONTENT.get("jp-ja");
const englishPack = context.window.TRAVEL_CONTENT.get("us-en");
const koreanPack = context.window.TRAVEL_CONTENT.get("kr-ko");

test("紧急联系卡使用银行卡300PPI尺寸且不持久化资料", () => {
  assert.equal(card.WIDTH, 1011);
  assert.equal(card.HEIGHT, 638);
  assert.equal(card.PIXELS_PER_METER, 11811);
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB|\bfetch\s*\(/);
  assert.doesNotMatch(source, /QR|二维码/);
});

test("日英韩内容包包含约定的紧急卡词典", () => {
  for (const pack of [japanesePack, englishPack, koreanPack]) {
    const dictionaries = pack.features.emergencyCard.dictionaries;
    assert.equal(dictionaries.nationalities.length, 14);
    assert.equal(dictionaries.allergies.length, 14);
    assert.equal(dictionaries.conditions.length, 9);
    for (const collection of Object.values(dictionaries)) {
      assert.equal(new Set(collection.map((item) => item.code)).size, collection.length);
      collection.forEach((item) => {
        for (const key of ["code", "zh", "target"]) assert.ok(item[key], `${pack.id}/${item.code} 缺少 ${key}`);
      });
    }
    assert.ok(dictionaries.nationalities.some((item) => item.code === "other"));
    assert.ok(dictionaries.allergies.some((item) => item.code === "none"));
    assert.ok(dictionaries.conditions.some((item) => item.code === "none"));
  }
});

test("必填、电话、日期和自定义双语内容校验完整", () => {
  const model = card.createModel(japanesePack);
  assert.deepEqual(Object.keys(card.validate(model)), ["name", "emergencyContact", "emergencyPhone"]);
  model.name = "张三";
  model.emergencyContact = "李四";
  model.emergencyPhone = "123";
  assert.ok(card.validate(model).emergencyPhone);
  model.emergencyPhone = "+86 138 0000 0000";
  model.birthDate = "2999-01-01";
  assert.ok(card.validate(model).birthDate);
  model.birthDate = "1995-05-20";
  model.allergies.customZh = "对某药物过敏";
  assert.ok(card.validate(model).allergiesCustom);
  model.allergies.customForeign = "薬剤アレルギー";
  assert.deepEqual(Object.keys(card.validate(model)), []);
});

test("空白可选项不进入卡片且固定内容生成双语文本", () => {
  const model = card.createModel(englishPack);
  model.name = "张三";
  model.foreignName = "Zhang San";
  model.emergencyContact = "李四";
  model.emergencyPhone = "+86 138 0000 0000";
  model.nationality.code = "cn";
  model.allergies.codes = ["penicillin"];
  const rows = card.getRows(model);
  assert.equal(rows.some((row) => row.key === "documentNumber"), false);
  assert.match(rows.find((row) => row.key === "name").value, /张三 \/ Zhang San/);
  assert.match(rows.find((row) => row.key === "nationality").value, /中国 \/ China/);
  assert.match(rows.find((row) => row.key === "allergies").value, /青霉素 \/ Penicillin/);
});

test("未知语言配置不会静默回退为英语", () => {
  assert.throws(() => card.createModel({ id: "kr-ko", features: { emergencyCard: true } }), /Invalid emergency card language config/);
});

test("PNG导出插入300PPI物理分辨率块", async () => {
  const fakePng = new Uint8Array(40);
  fakePng.set([137, 80, 78, 71, 13, 10, 26, 10]);
  const blob = await card.addPngDensity(new Blob([fakePng], { type: "image/png" }));
  const bytes = new Uint8Array(await blob.arrayBuffer());
  assert.equal(blob.type, "image/png");
  assert.equal(String.fromCharCode(...bytes.slice(37, 41)), "pHYs");
  assert.equal(new DataView(bytes.buffer).getUint32(41), 11811);
  assert.equal(new DataView(bytes.buffer).getUint32(45), 11811);
  assert.equal(bytes[49], 1);
});
