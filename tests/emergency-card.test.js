const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "emergency-card.js"), "utf8");
const context = { window: {}, Blob, Uint8Array, DataView, Date, setTimeout };
vm.createContext(context);
vm.runInContext(source, context);
const card = context.window.EMERGENCY_CARD;

test("紧急联系卡使用银行卡300PPI尺寸且不持久化资料", () => {
  assert.equal(card.WIDTH, 1011);
  assert.equal(card.HEIGHT, 638);
  assert.equal(card.PIXELS_PER_METER, 11811);
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB|\bfetch\s*\(/);
  assert.doesNotMatch(source, /QR|二维码/);
});

test("日英词典包含约定的国籍、过敏和疾病选项", () => {
  assert.equal(card.NATIONALITIES.length, 14);
  assert.equal(card.ALLERGIES.length, 14);
  assert.equal(card.CONDITIONS.length, 9);
  for (const collection of [card.NATIONALITIES, card.ALLERGIES, card.CONDITIONS]) {
    assert.equal(new Set(collection.map((item) => item.code)).size, collection.length);
    collection.forEach((item) => {
      for (const key of ["code", "zh", "ja", "en"]) assert.ok(item[key], `${item.code} 缺少 ${key}`);
    });
  }
  assert.ok(card.NATIONALITIES.some((item) => item.code === "other"));
  assert.ok(card.ALLERGIES.some((item) => item.code === "none"));
  assert.ok(card.CONDITIONS.some((item) => item.code === "none"));
});

test("必填、电话、日期和自定义双语内容校验完整", () => {
  const model = card.createModel("ja");
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
  const model = card.createModel("en");
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
