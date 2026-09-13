(function () {
  "use strict";

  const WIDTH = 1011;
  const HEIGHT = 638;
  const PIXELS_PER_METER = 11811;

  const LABELS = {
    name: { zh: "姓名", en: "Name", ja: "名前" },
    nationality: { zh: "国籍", en: "Nationality", ja: "国籍" },
    birthDate: { zh: "出生日期", en: "Date of Birth", ja: "生年月日" },
    bloodType: { zh: "血型", en: "Blood Type", ja: "血液型" },
    documentNumber: { zh: "证件号码", en: "Passport / ID No.", ja: "旅券・身分証番号" },
    emergencyContact: { zh: "紧急联系人", en: "Emergency Contact", ja: "緊急連絡先" },
    emergencyPhone: { zh: "联系电话", en: "Contact Number", ja: "電話番号" },
    allergies: { zh: "过敏信息", en: "Allergies", ja: "アレルギー" },
    conditions: { zh: "既往疾病", en: "Medical Conditions", ja: "持病・既往症" }
  };

  const NATIONALITIES = [
    ["cn", "中国", "China", "中国"], ["jp", "日本", "Japan", "日本"],
    ["kr", "韩国", "South Korea", "韓国"], ["sg", "新加坡", "Singapore", "シンガポール"],
    ["my", "马来西亚", "Malaysia", "マレーシア"], ["us", "美国", "United States", "アメリカ合衆国"],
    ["gb", "英国", "United Kingdom", "イギリス"], ["ca", "加拿大", "Canada", "カナダ"],
    ["au", "澳大利亚", "Australia", "オーストラリア"], ["fr", "法国", "France", "フランス"],
    ["de", "德国", "Germany", "ドイツ"], ["es", "西班牙", "Spain", "スペイン"],
    ["it", "意大利", "Italy", "イタリア"], ["other", "其他", "Other", "その他"]
  ].map(([code, zh, en, ja]) => ({ code, zh, en, ja }));

  const ALLERGIES = [
    ["none", "无", "None", "なし"], ["penicillin", "青霉素", "Penicillin", "ペニシリン"],
    ["cephalosporin", "头孢菌素", "Cephalosporins", "セファロスポリン"],
    ["sulfonamides", "磺胺类", "Sulfonamides", "サルファ剤"],
    ["nsaids", "阿司匹林/NSAIDs", "Aspirin / NSAIDs", "アスピリン / NSAIDs"],
    ["peanuts", "花生", "Peanuts", "ピーナッツ"], ["nuts", "坚果", "Tree nuts", "ナッツ"],
    ["shellfish", "海鲜/甲壳类", "Seafood / Shellfish", "魚介類 / 甲殻類"],
    ["milk", "牛奶", "Milk", "牛乳"], ["eggs", "鸡蛋", "Eggs", "卵"],
    ["gluten", "小麦/麸质", "Wheat / Gluten", "小麦 / グルテン"], ["soy", "大豆", "Soy", "大豆"],
    ["latex", "乳胶", "Latex", "ラテックス"], ["insect", "昆虫蜇伤", "Insect stings", "虫刺され"]
  ].map(([code, zh, en, ja]) => ({ code, zh, en, ja }));

  const CONDITIONS = [
    ["none", "无", "None", "なし"], ["diabetes", "糖尿病", "Diabetes", "糖尿病"],
    ["hypertension", "高血压", "Hypertension", "高血圧"], ["heart", "心脏病", "Heart disease", "心臓病"],
    ["asthma", "哮喘", "Asthma", "喘息"], ["epilepsy", "癫痫", "Epilepsy", "てんかん"],
    ["kidney", "肾脏疾病", "Kidney disease", "腎臓病"],
    ["anticoagulants", "正在服用抗凝药", "Taking anticoagulants", "抗凝固薬を服用中"],
    ["pregnancy", "怀孕", "Pregnant", "妊娠中"]
  ].map(([code, zh, en, ja]) => ({ code, zh, en, ja }));

  const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "A", "B", "AB", "O", "unknown"];

  function createModel(language) {
    return {
      language: language === "ja" ? "ja" : "en",
      name: "", foreignName: "",
      nationality: { code: "", customZh: "", customForeign: "" },
      birthDate: "", bloodType: "", documentNumber: "",
      emergencyContact: "", emergencyPhone: "",
      allergies: { codes: [], customZh: "", customForeign: "" },
      conditions: { codes: [], customZh: "", customForeign: "" }
    };
  }

  function dictionaryItem(items, code) { return items.find((item) => item.code === code); }
  function bilingual(zh, foreign) { return foreign && foreign !== zh ? `${zh} / ${foreign}` : zh; }
  function labelFor(key, language) { return bilingual(LABELS[key].zh, LABELS[key][language]); }
  function nationalityValue(value, language) {
    if (!value?.code) return "";
    if (value.code === "other") return bilingual(value.customZh.trim(), value.customForeign.trim());
    const item = dictionaryItem(NATIONALITIES, value.code);
    return item ? bilingual(item.zh, item[language]) : "";
  }
  function multiValue(value, dictionary, language) {
    const parts = (value?.codes || []).map((code) => dictionaryItem(dictionary, code)).filter(Boolean)
      .map((item) => bilingual(item.zh, item[language]));
    const custom = bilingual(value?.customZh?.trim() || "", value?.customForeign?.trim() || "");
    if (custom) parts.push(custom);
    return parts.join("、");
  }
  function bloodValue(value, language) {
    if (!value) return "";
    if (value === "unknown") return language === "ja" ? "未知 / 不明" : "未知 / Unknown";
    return value;
  }

  function getRows(model) {
    const language = model.language === "ja" ? "ja" : "en";
    const rows = [
      { key: "name", column: "left", value: bilingual(model.name.trim(), model.foreignName.trim()) },
      { key: "nationality", column: "left", value: nationalityValue(model.nationality, language) },
      { key: "birthDate", column: "left", value: model.birthDate.trim() },
      { key: "bloodType", column: "left", value: bloodValue(model.bloodType, language) },
      { key: "documentNumber", column: "right", value: model.documentNumber.trim() },
      { key: "emergencyContact", column: "right", value: model.emergencyContact.trim() },
      { key: "emergencyPhone", column: "right", value: model.emergencyPhone.trim() },
      { key: "allergies", column: "right", value: multiValue(model.allergies, ALLERGIES, language) },
      { key: "conditions", column: "right", value: multiValue(model.conditions, CONDITIONS, language) }
    ];
    return rows.filter((row) => row.value).map((row) => ({ ...row, label: labelFor(row.key, language) }));
  }

  function validate(model) {
    const errors = {};
    if (!model.name.trim()) errors.name = "请填写本人姓名";
    if (!model.emergencyContact.trim()) errors.emergencyContact = "请填写紧急联系人姓名";
    if (!model.emergencyPhone.trim()) errors.emergencyPhone = "请填写联系电话";
    else if (!/^[+()\d\s-]{6,24}$/.test(model.emergencyPhone.trim()) || (model.emergencyPhone.match(/\d/g) || []).length < 6) {
      errors.emergencyPhone = "请输入至少 6 位数字，可包含 +、空格、括号或连字符";
    }
    if (model.birthDate && model.birthDate > new Date().toISOString().slice(0, 10)) errors.birthDate = "出生日期不能晚于今天";
    if (model.nationality.code === "other" && !model.nationality.customZh.trim()) errors.nationalityCustomZh = "请填写国籍中文名称";
    if (model.nationality.code === "other" && !model.nationality.customForeign.trim()) errors.nationalityCustomForeign = "请填写国籍的目标语言名称";
    [["allergies", model.allergies], ["conditions", model.conditions]].forEach(([key, value]) => {
      if ((value.customZh.trim() && !value.customForeign.trim()) || (!value.customZh.trim() && value.customForeign.trim())) {
        errors[`${key}Custom`] = "自定义内容需要同时填写中文和目标语言";
      }
    });
    const limits = { name: 32, foreignName: 40, documentNumber: 24, emergencyContact: 32, emergencyPhone: 24 };
    Object.entries(limits).forEach(([key, max]) => { if (model[key].trim().length > max) errors[key] = `请控制在 ${max} 个字符以内`; });
    if (model.allergies.customZh.length > 40 || model.allergies.customForeign.length > 60) errors.allergiesCustom = "自定义过敏信息过长，请缩短后重试";
    if (model.conditions.customZh.length > 40 || model.conditions.customForeign.length > 60) errors.conditionsCustom = "自定义疾病信息过长，请缩短后重试";
    return errors;
  }

  function fitText(ctx, text, maxWidth, startSize, minSize) {
    let size = startSize;
    while (size > minSize) {
      ctx.font = `700 ${size}px "Yu Gothic","PingFang SC","Microsoft YaHei",sans-serif`;
      if (ctx.measureText(text).width <= maxWidth) break;
      size -= 1;
    }
    return size;
  }

  function wrapText(ctx, text, maxWidth, maxLines) {
    const chars = Array.from(text);
    const lines = [];
    let line = "";
    chars.forEach((char) => {
      const candidate = line + char;
      if (line && ctx.measureText(candidate).width > maxWidth) { lines.push(line); line = char; }
      else line = candidate;
    });
    if (line) lines.push(line);
    if (lines.length > maxLines) return null;
    return lines;
  }

  function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y); ctx.arcTo(x + width, y, x + width, y + radius, radius);
    ctx.lineTo(x + width, y + height - radius); ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
    ctx.lineTo(x + radius, y + height); ctx.arcTo(x, y + height, x, y + height - radius, radius);
    ctx.lineTo(x, y + radius); ctx.arcTo(x, y, x + radius, y, radius);
    ctx.closePath();
    ctx.fill();
  }

  function drawCard(canvas, model) {
    const ctx = canvas.getContext("2d");
    const rows = getRows(model);
    const left = rows.filter((row) => row.column === "left");
    const right = rows.filter((row) => row.column === "right");
    canvas.width = WIDTH; canvas.height = HEIGHT;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = "#ffffff"; roundedRect(ctx, 0, 0, WIDTH, HEIGHT, 34);
    ctx.fillStyle = "#1686f7"; ctx.fillRect(0, 0, WIDTH, 12);
    ctx.fillStyle = "#ed3345"; roundedRect(ctx, 42, 38, 74, 74, 18);
    ctx.fillStyle = "#ffffff"; ctx.fillRect(69, 51, 20, 48); ctx.fillRect(55, 65, 48, 20);
    ctx.fillStyle = "#14233a"; ctx.font = '800 38px "Yu Gothic","PingFang SC","Microsoft YaHei",sans-serif';
    ctx.fillText(model.language === "ja" ? "緊急連絡カード" : "Emergency Contact Card", 138, 70);
    ctx.fillStyle = "#65758b"; ctx.font = '600 22px "Yu Gothic","PingFang SC","Microsoft YaHei",sans-serif';
    ctx.fillText("紧急联系卡", 140, 101);
    ctx.fillStyle = "#ed3345"; roundedRect(ctx, 883, 42, 86, 50, 16);
    ctx.fillStyle = "#ffffff"; ctx.font = '800 25px sans-serif'; ctx.textAlign = "center"; ctx.fillText("SOS", 926, 76); ctx.textAlign = "left";
    ctx.strokeStyle = "#dce7f2"; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(42, 132); ctx.lineTo(969, 132); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(504, 154); ctx.lineTo(504, 550); ctx.stroke();

    function drawColumn(items, x, width) {
      const areaTop = 157; const areaHeight = 382;
      const rowHeight = areaHeight / Math.max(items.length, 1);
      let overflow = false;
      items.forEach((row, index) => {
        const y = areaTop + index * rowHeight;
        ctx.fillStyle = "#65758b"; ctx.font = '600 18px "Yu Gothic","PingFang SC","Microsoft YaHei",sans-serif';
        ctx.fillText(row.label, x, y + 19);
        const size = fitText(ctx, row.value, width, 27, 21);
        ctx.font = `700 ${size}px "Yu Gothic","PingFang SC","Microsoft YaHei",sans-serif`;
        const lines = wrapText(ctx, row.value, width, 2);
        if (!lines) { overflow = true; return; }
        ctx.fillStyle = "#14233a";
        lines.forEach((line, lineIndex) => ctx.fillText(line, x, y + 50 + lineIndex * (size + 4)));
        if (index < items.length - 1) {
          ctx.strokeStyle = "#edf2f7"; ctx.lineWidth = 1; ctx.beginPath();
          ctx.moveTo(x, y + rowHeight - 6); ctx.lineTo(x + width, y + rowHeight - 6); ctx.stroke();
        }
      });
      return overflow;
    }
    const leftOverflow = drawColumn(left, 42, 426);
    const rightOverflow = drawColumn(right, 540, 429);
    const overflow = leftOverflow || rightOverflow;
    ctx.fillStyle = "#f5f9ff"; roundedRect(ctx, 42, 568, 927, 42, 12);
    ctx.fillStyle = "#65758b"; ctx.font = '600 17px "Yu Gothic","PingFang SC","Microsoft YaHei",sans-serif';
    const notice = model.language === "ja" ? "※ 緊急時の意思疎通にのみ使用してください。" : "For emergency communication only.";
    ctx.fillText(`※ 本卡仅用于紧急情况沟通。  ${notice}`, 62, 595);
    return { ok: !overflow, width: WIDTH, height: HEIGHT };
  }

  function crc32(bytes) {
    let crc = -1;
    for (const byte of bytes) {
      crc ^= byte;
      for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
    return (crc ^ -1) >>> 0;
  }
  async function addPngDensity(blob) {
    const original = new Uint8Array(await blob.arrayBuffer());
    const chunk = new Uint8Array(21);
    const view = new DataView(chunk.buffer);
    view.setUint32(0, 9);
    chunk.set([112, 72, 89, 115], 4);
    view.setUint32(8, PIXELS_PER_METER); view.setUint32(12, PIXELS_PER_METER); chunk[16] = 1;
    view.setUint32(17, crc32(chunk.slice(4, 17)));
    const output = new Uint8Array(original.length + chunk.length);
    output.set(original.slice(0, 33), 0); output.set(chunk, 33); output.set(original.slice(33), 54);
    return new Blob([output], { type: "image/png" });
  }
  function canvasBlob(canvas) {
    return new Promise((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("PNG 生成失败")), "image/png"));
  }
  async function downloadPng(canvas) {
    const blob = await addPngDensity(await canvasBlob(canvas));
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = `语见世界-紧急联系卡-${new Date().toISOString().slice(0, 10)}.png`;
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  window.EMERGENCY_CARD = {
    WIDTH, HEIGHT, PIXELS_PER_METER, LABELS, NATIONALITIES, ALLERGIES, CONDITIONS, BLOOD_TYPES,
    createModel, getRows, validate, drawCard, addPngDensity, downloadPng
  };
}());
