#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "scripts", "source-data", "legacy-bilingual-data.js"), "utf8"), sandbox);

const scenes = JSON.parse(JSON.stringify(sandbox.window.SCENE_PACKS));
const legacy = JSON.parse(JSON.stringify(sandbox.window.WORD_BANK));
const exampleCatalog = require("./content_examples.js");
const targetedExamples = require("./targeted_examples.json");
const englishPhrases = require("./english_phrases.js");
const japanesePhrases = require("./japanese_phrases.js");

const allocations = {
  airport: { "documents-flights": 4, "check-in": 5, baggage: 5, "security-waiting": 4, "boarding-onboard": 5, "arrival-immigration": 7 },
  transport: { "tickets-stations": 5, "bus-metro": 5, rail: 5, taxi: 6, transfer: 4, "rental-driving": 5 },
  hotel: { reservation: 5, "hotel-check-in": 5, "room-facilities": 4, "hotel-requests": 6, "hotel-problems": 6, "checkout-storage": 4 },
  food: { "enter-wait": 4, menu: 3, ordering: 6, "taste-diet": 5, "dining-requests": 4, "food-confirm": 4, "food-checkout": 4 },
  shopping: { "find-products": 5, "size-color": 5, "try-products": 5, "price-discount": 4, payment: 4, "return-tax": 7 },
  directions: { "location-direction": 4, "ask-route": 8, "distance-time": 5, "map-landmarks": 5, "understand-route": 8 },
  emergency: { "feeling-unwell": 5, "doctor-pharmacy": 6, "police-help": 5, "lost-stolen": 5, "danger-accident": 5, "emergency-contact": 4 },
  basics: { greetings: 3, courtesy: 4, introductions: 4, "language-help": 6, "numbers-quantity": 3, "time-date": 4, "basic-confirm": 6 }
};

const patterns = {
  ja: [
    ["请问“{zh}”在哪里？", "{text}はどこですか？", "{reading}はどこですか？", "ask"],
    ["我想确认一下“{zh}”。", "{text}について確認したいです。", "{reading}についてかくにんしたいです。", "confirm"],
    ["可以帮我处理“{zh}”吗？", "{text}について手伝っていただけますか？", "{reading}についててつだっていただけますか？", "request"],
    ["关于“{zh}”，接下来该怎么做？", "{text}について、次はどうすればいいですか？", "{reading}について、つぎはどうすればいいですか？", "repair"],
    ["请告诉我“{zh}”的相关信息。", "{text}について教えてください。", "{reading}についておしえてください。", "ask"]
  ],
  en: [
    ["请问可以在哪里咨询“{zh}”？", "Where can I ask about {text}?", "ask"],
    ["我需要处理“{zh}”。", "I need help with {text}.", "request"],
    ["可以帮我确认“{zh}”的相关信息吗？", "Could you check the details for {text}?", "confirm"],
    ["关于“{zh}”，下一步该怎么做？", "What should I do next about {text}?", "repair"],
    ["请告诉我“{zh}”的相关信息。", "Could you tell me about {text}?", "ask"]
  ]
};

const localPhrases = {
  "jp-ja": {
    airport: [
      ["security-waiting", "这是安检队伍吗？", "これは保安検査の列ですか？", "これはほあんけんさのれつですか？"],
      ["arrival-immigration", "Visit Japan Web 的二维码在这里。", "Visit Japan WebのQRコードはこちらです。", "びじっとじゃぱんうぇぶのきゅーあーるこーどはこちらです。"]
    ],
    transport: [
      ["tickets-stations", "这张交通 IC 卡可以使用吗？", "この交通系ICカードは使えますか？", "このこうつうけいあいしーかーどはつかえますか？"],
      ["rail", "这是指定席吗？", "ここは指定席ですか？", "ここはしていせきですか？"]
    ],
    hotel: [["reservation", "我预订的是日式房间。", "和室を予約しています。", "わしつをよやくしています。"]],
    food: [
      ["enter-wait", "有不收座位费的座位吗？", "お通しなしの席はありますか？", "おとおしなしのせきはありますか？"],
      ["ordering", "请给我店员推荐的菜。", "おすすめをお願いします。", "おすすめをおねがいします。"]
    ],
    shopping: [["return-tax", "可以办理免税吗？", "免税手続きはできますか？", "めんぜいてつづきはできますか？"]],
    directions: [["ask-route", "最近的车站出口是几号？", "最寄りの駅の出口は何番ですか？", "もよりのえきのでぐちはなんばんですか？"]],
    emergency: [["doctor-pharmacy", "可以介绍附近能接诊游客的医院吗？", "旅行者を診てくれる近くの病院を紹介してください。", "りょこうしゃをみてくれるちかくのびょういんをしょうかいしてください。"]],
    basics: [["courtesy", "麻烦您了。", "よろしくお願いします。", "よろしくおねがいします。"]]
  },
  "us-en": {
    airport: [
      ["security-waiting", "这是 TSA 安检队伍吗？", "Is this the line for TSA security?"],
      ["arrival-immigration", "我的海关申报已在线提交。", "I submitted my customs declaration online."]
    ],
    transport: [
      ["taxi", "网约车上车点在哪里？", "Where is the rideshare pickup area?"],
      ["tickets-stations", "可以刷非接触式信用卡乘车吗？", "Can I tap my contactless card to ride?"]
    ],
    hotel: [["hotel-requests", "可以延迟退房吗？", "Could I get a late checkout?"]],
    food: [
      ["ordering", "这份可以打包带走吗？", "Can I get this to go?"],
      ["food-checkout", "小费已经包含在账单里了吗？", "Is gratuity already included?"]
    ],
    shopping: [["payment", "标价包含销售税吗？", "Does the listed price include sales tax?"]],
    directions: [["map-landmarks", "最近的公共洗手间在哪里？", "Where is the nearest public restroom?"]],
    emergency: [["doctor-pharmacy", "附近有 urgent care 吗？", "Is there an urgent care clinic nearby?"]],
    basics: [["language-help", "可以把地址发短信给我吗？", "Could you text me the address?"]]
  }
};

const emergencyDictionaries = {
  nationalities: [
    ["cn", "中国", "China", "中国"], ["jp", "日本", "Japan", "日本"], ["kr", "韩国", "South Korea", "韓国"],
    ["sg", "新加坡", "Singapore", "シンガポール"], ["my", "马来西亚", "Malaysia", "マレーシア"],
    ["us", "美国", "United States", "アメリカ合衆国"], ["gb", "英国", "United Kingdom", "イギリス"],
    ["ca", "加拿大", "Canada", "カナダ"], ["au", "澳大利亚", "Australia", "オーストラリア"],
    ["fr", "法国", "France", "フランス"], ["de", "德国", "Germany", "ドイツ"],
    ["es", "西班牙", "Spain", "スペイン"], ["it", "意大利", "Italy", "イタリア"], ["other", "其他", "Other", "その他"]
  ],
  allergies: [
    ["none", "无", "None", "なし"], ["penicillin", "青霉素", "Penicillin", "ペニシリン"],
    ["cephalosporin", "头孢菌素", "Cephalosporins", "セファロスポリン"], ["sulfonamides", "磺胺类", "Sulfonamides", "サルファ剤"],
    ["nsaids", "阿司匹林/NSAIDs", "Aspirin / NSAIDs", "アスピリン / NSAIDs"], ["peanuts", "花生", "Peanuts", "ピーナッツ"],
    ["nuts", "坚果", "Tree nuts", "ナッツ"], ["shellfish", "海鲜/甲壳类", "Seafood / Shellfish", "魚介類 / 甲殻類"],
    ["milk", "牛奶", "Milk", "牛乳"], ["eggs", "鸡蛋", "Eggs", "卵"], ["gluten", "小麦/麸质", "Wheat / Gluten", "小麦 / グルテン"],
    ["soy", "大豆", "Soy", "大豆"], ["latex", "乳胶", "Latex", "ラテックス"], ["insect", "昆虫蜇伤", "Insect stings", "虫刺され"]
  ],
  conditions: [
    ["none", "无", "None", "なし"], ["diabetes", "糖尿病", "Diabetes", "糖尿病"], ["hypertension", "高血压", "Hypertension", "高血圧"],
    ["heart", "心脏病", "Heart disease", "心臓病"], ["asthma", "哮喘", "Asthma", "喘息"], ["epilepsy", "癫痫", "Epilepsy", "てんかん"],
    ["kidney", "肾脏疾病", "Kidney disease", "腎臓病"], ["anticoagulants", "正在服用抗凝药", "Taking anticoagulants", "抗凝固薬を服用中"],
    ["pregnancy", "怀孕", "Pregnant", "妊娠中"]
  ]
};

function emergencyCardConfig(languageCode) {
  const japanese = languageCode === "ja";
  const targetIndex = japanese ? 3 : 2;
  const labels = japanese
    ? ["名前", "国籍", "生年月日", "血液型", "旅券・身分証番号", "緊急連絡先", "電話番号", "アレルギー", "持病・既往症"]
    : ["Name", "Nationality", "Date of Birth", "Blood Type", "Passport / ID No.", "Emergency Contact", "Contact Number", "Allergies", "Medical Conditions"];
  return {
    title: japanese ? "緊急連絡カード" : "Emergency Contact Card",
    notice: japanese ? "※ 緊急時の意思疎通にのみ使用してください。" : "For emergency communication only.",
    foreignNameLabel: japanese ? "护照拼音或日文姓名" : "护照拼音或英文姓名",
    unknownBloodType: japanese ? "不明" : "Unknown",
    labels: Object.fromEntries(["name", "nationality", "birthDate", "bloodType", "documentNumber", "emergencyContact", "emergencyPhone", "allergies", "conditions"].map((key, index) => [key, labels[index]])),
    dictionaries: Object.fromEntries(Object.entries(emergencyDictionaries).map(([key, rows]) => [key, rows.map(([code, zh, en, ja]) => ({ code, zh, target: [en, ja][targetIndex - 2] }))]))
  };
}

const packConfigs = [
  { id: "jp-ja", destinationId: "jp", locale: "ja-JP", speechLocale: "ja-JP", languageCode: "ja", languageLabel: "日语", nativeLabel: "日本語", pronunciationLabel: "假名", beginnerModule: "jp-ja-beginner", beginnerAudioBase: "audio/ja", sourceField: "ja", pronunciationField: "reading" },
  { id: "us-en", destinationId: "us", locale: "en-US", speechLocale: "en-US", languageCode: "en", languageLabel: "英语", nativeLabel: "English", pronunciationLabel: null, beginnerModule: "us-en-beginner", beginnerAudioBase: "audio/en/beginner", sourceField: "en", pronunciationField: null }
];

const vocabularyOverrides = {
  "us-en": {
    hotel_002: { zh: "汽车旅馆", text: "motel" },
    food_017: { zh: "煎饼", text: "pancakes" },
    food_018: { zh: "华夫饼", text: "waffles" },
    food_019: { zh: "烧烤", text: "barbecue" },
    food_020: { zh: "牛排", text: "steak" },
    food_021: { zh: "蛤蜊浓汤", text: "clam chowder" },
    food_022: { zh: "玉米卷", text: "tacos" },
    food_023: { zh: "通心粉奶酪", text: "mac and cheese" }
  }
};

function interpolate(template, values) {
  return template.replace(/\{(zh|text|reading)\}/g, (_, key) => values[key] || values.text);
}

function legacyEntries(config) {
  return legacy.map((entry) => ({
    id: entry.id,
    sceneId: entry.scene,
    situationId: entry.situation,
    kind: entry.type,
    zh: vocabularyOverrides[config.id]?.[entry.id]?.zh || entry.zh,
    text: vocabularyOverrides[config.id]?.[entry.id]?.text || entry[config.sourceField],
    ...(config.pronunciationField ? { pronunciation: entry[config.pronunciationField] } : {}),
    audioPath: `audio/${config.languageCode}/${entry.id}.mp3`,
    direction: "traveler-says",
    intent: entry.type === "phrase" ? "communicate" : "recognize"
  }));
}

function phraseEntries(config, entries) {
  const result = [];
  for (const scene of scenes) {
    let sceneIndex = 0;
    const overrides = (localPhrases[config.id][scene.id] || []).slice();
    for (const [situationId, count] of Object.entries(allocations[scene.id])) {
      const pool = entries.filter((entry) => entry.sceneId === scene.id && entry.situationId === situationId && entry.kind === "word");
      const fallback = entries.filter((entry) => entry.sceneId === scene.id && entry.kind === "word");
      for (let index = 0; index < count; index += 1) {
        sceneIndex += 1;
        const localIndex = overrides.findIndex((row) => row[0] === situationId);
        const local = localIndex >= 0 ? overrides.splice(localIndex, 1)[0] : null;
        const word = pool[index % Math.max(pool.length, 1)] || fallback[(sceneIndex - 1) % fallback.length];
        const pattern = patterns[config.languageCode][(sceneIndex - 1) % patterns[config.languageCode].length];
        const values = { zh: word.zh, text: word.text, reading: word.pronunciation };
        const heard = sceneIndex > 18 && sceneIndex <= 26;
        const reviewed = config.id === "us-en"
          ? englishPhrases[scene.id]?.[sceneIndex - 1]
          : config.id === "jp-ja" ? japanesePhrases[scene.id]?.[sceneIndex - 1] : null;
        const reviewedLength = config.id === "jp-ja" ? 3 : 2;
        if (["us-en", "jp-ja"].includes(config.id) && (!reviewed || reviewed.length !== reviewedLength)) {
          throw new Error(`${config.id}/${scene.id}/${sceneIndex} missing reviewed phrase`);
        }
        const entry = {
          id: `${config.languageCode}_${scene.id}_phrase_${String(sceneIndex).padStart(3, "0")}`,
          sceneId: scene.id,
          situationId,
          kind: "phrase",
          zh: reviewed ? reviewed[0] : local ? local[1] : heard ? `请确认“${word.zh}”的相关信息。` : interpolate(pattern[0], values),
          text: reviewed ? reviewed[1] : local ? local[2] : heard ? (config.languageCode === "ja" ? `${word.text}についてご確認ください。` : `Please check the details for ${word.text}.`) : interpolate(pattern[1], values),
          ...(config.languageCode === "ja" ? { pronunciation: reviewed ? reviewed[2] : local ? local[3] : heard ? `${word.pronunciation}についてごかくにんください。` : interpolate(pattern[2], values) } : {}),
          direction: heard ? "traveler-hears" : "traveler-says",
          intent: local ? "local-use" : heard ? "confirm" : pattern[config.languageCode === "ja" ? 3 : 2]
        };
        result.push(entry);
      }
    }
    if (sceneIndex !== 30) throw new Error(`${scene.id} generated ${sceneIndex} phrases`);
  }
  return result;
}

function attachExamples(config, entries) {
  const catalog = exampleCatalog[config.id];
  if (!catalog || Object.keys(catalog).length !== 160) {
    throw new Error(`${config.id} must define exactly 160 hand-written examples`);
  }

  const entriesById = new Map(entries.map((entry) => [entry.id, entry]));
  const sceneCounts = new Map();
  for (const [entryId, example] of Object.entries(catalog)) {
    const entry = entriesById.get(entryId);
    if (!entry) throw new Error(`${config.id} example references unknown entry ${entryId}`);
    if (entry.kind !== "word") throw new Error(`${config.id}/${entryId} example must belong to a word`);
    const expectedLength = config.pronunciationLabel ? 3 : 2;
    if (!Array.isArray(example) || example.length !== expectedLength || example.some((value) => typeof value !== "string" || !value.trim())) {
      throw new Error(`${config.id}/${entryId} has an invalid hand-written example`);
    }
    const [zh, text, pronunciation] = example;
    entry.example = {
      id: `${config.id}_${entryId}_example`,
      zh,
      text,
      ...(pronunciation ? { pronunciation } : {})
    };
    sceneCounts.set(entry.sceneId, (sceneCounts.get(entry.sceneId) || 0) + 1);
  }

  for (const scene of scenes) {
    if (sceneCounts.get(scene.id) !== 20) {
      throw new Error(`${config.id}/${scene.id} must define exactly 20 hand-written examples`);
    }
  }
  for (const [entryId, [priority, zh, ja, jaReading, en, ko]] of Object.entries(targetedExamples)) {
    const entry = entriesById.get(entryId);
    if (!entry || entry.kind !== "word" || entry.example) throw new Error(`Invalid targeted example: ${entryId}`);
    if (!["must", "recommended"].includes(priority) || [zh, ja, jaReading, en, ko].some((value) => typeof value !== "string" || !value.trim())) {
      throw new Error(`Incomplete targeted example: ${entryId}`);
    }
    entry.example = {
      id: `${config.id}_${entryId}_example`,
      zh,
      text: config.id === "jp-ja" ? ja : en,
      ...(config.id === "jp-ja" ? { pronunciation: jaReading } : {})
    };
  }
}

for (const config of packConfigs) {
  const entries = legacyEntries(config);
  entries.push(...phraseEntries(config, entries));
  attachExamples(config, entries);
  const pack = {
    id: config.id,
    destinationId: config.destinationId,
    locale: config.locale,
    speechLocale: config.speechLocale,
    languageCode: config.languageCode,
    languageLabel: config.languageLabel,
    nativeLabel: config.nativeLabel,
    pronunciationLabel: config.pronunciationLabel,
    features: { beginnerModule: config.beginnerModule, beginnerAudioBase: config.beginnerAudioBase, emergencyCard: emergencyCardConfig(config.languageCode) },
    scenes,
    entries
  };
  const output = `(function () {\n  "use strict";\n  window.registerContentPack(${JSON.stringify(pack, null, 2)});\n})();\n`;
  const directory = path.join(root, "languages", config.id);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "pack.js"), output, "utf8");
  console.log(`${config.id}: ${entries.length} entries, ${entries.filter((item) => item.example).length} examples`);
}
