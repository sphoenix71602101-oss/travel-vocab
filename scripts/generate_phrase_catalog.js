#!/usr/bin/env node
"use strict";

// One-time catalog builder. Generated catalogs are committed source files;
// normal pack builds never call the network.
const fs = require("node:fs");
const path = require("node:path");
const [target = "en", outputName = "english_phrases.js"] = process.argv.slice(2);
const source = target === "en" ? require("./spanish_phrases.js") : require("./english_phrases.js");
const outputPath = path.join(__dirname, outputName);
const cachePath = path.join(__dirname, `.phrase-translation-${target}.json`);
const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, "utf8")) : {};

if (process.argv.includes("--probe")) {
  (async () => {
    const url = new URL("https://translate.googleapis.com/translate_a/single");
    for (const [key, value] of Object.entries({ client: "gtx", sl: "en", tl: "ja", dt: "t", q: "Where is the nearest train station?" })) url.searchParams.append(key, value);
    url.searchParams.append("dt", "rm");
    const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    const payload = await response.json();
    console.log(JSON.stringify(payload));
    const romanization = payload[0]?.find((part) => part?.[2])?.[2];
    const inputUrl = new URL("https://inputtools.google.com/request");
    for (const [key, value] of Object.entries({ text: romanization, itc: "ja-t-i0-und", num: "1" })) inputUrl.searchParams.set(key, value);
    const inputResponse = await fetch(inputUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
    console.log(JSON.stringify(await inputResponse.json()));
  })().catch((error) => { console.error(error); process.exitCode = 1; });
  return;
}

const englishOverrides = {
  "airport:26": ["持中国护照应该走哪条入境通道？", "Which immigration line should I use with a Chinese passport?"],
  "airport:30": ["非美国护照应该排哪一队？", "Which line is for non-U.S. passports?"],
  "transport:3": ["去纽约的火车从哪个站台出发？", "Which platform does the train to New York leave from?"],
  "transport:5": ["请给我一张去华盛顿的单程票。", "One one-way ticket to Washington, please."],
  "transport:11": ["去波士顿的火车在哪里乘坐？", "Where do I board the train to Boston?"],
  "transport:12": ["我错过了火车，可以改签吗？", "I missed my train. Can I change my ticket?"],
  "transport:14": ["这是直达列车吗？", "Is this a direct train?"],
  "transport:28": ["请加满普通无铅汽油。", "Fill it up with regular unleaded, please."],
  "hotel:2": ["我想预订一家汽车旅馆。", "I'd like to book a room at a motel."],
  "food:2": ["午餐有套餐吗？", "Do you have a lunch special?"],
  "food:22": ["可以把配菜换成沙拉吗？", "Could I substitute a salad for the side?"],
  "food:23": ["请把酱汁放在旁边。", "Could I get the dressing on the side?"],
  "shopping:20": ["标价包含销售税吗？", "Does the listed price include sales tax?"],
  "shopping:23": ["可以找开五十美元吗？", "Do you have change for fifty dollars?"],
  "shopping:30": ["可以给我一张礼品小票吗？", "Could I get a gift receipt?"],
  "emergency:2": ["附近有二十四小时药店吗？", "Is there a 24-hour pharmacy nearby?"],
  "emergency:20": ["我受伤了，请叫救护车。", "I'm injured. Please call an ambulance."],
  "basics:15": ["这里可以把日元换成美元吗？", "Can I exchange yen for dollars here?"],
  "basics:16": ["我想兑换一些美元。", "I'd like to exchange some money for U.S. dollars."],
  "basics:17": ["可以把人民币换成美元吗？", "Can I exchange Chinese yuan for U.S. dollars?"],
  "basics:18": ["费用是零美元。", "The fee is zero dollars."]
};

const japaneseOverrides = {
  "airport:15": ["这是排队过安检的队伍吗？", "これは保安検査の列ですか？", "これはほあんけんさのれつですか？"],
  "airport:24": ["我已经在 Visit Japan Web 提交了申报。", "Visit Japan Webで申告を提出しました。", "びじっとじゃぱんうぇぶでしんこくをていしゅつしました。"],
  "airport:30": ["外国护照应该排哪一队？", "外国のパスポートはどの列ですか？", "がいこくのぱすぽーとはどのれつですか？"],
  "transport:1": ["可以刷交通 IC 卡乘车吗？", "交通系ICカードで乗れますか？", "こうつうけいあいしーかーどでのれますか？"],
  "transport:3": ["去东京的列车从哪个站台出发？", "東京行きの列車は何番ホームですか？", "とうきょうゆきのれっしゃはなんばんほーむですか？"],
  "transport:5": ["请给我一张去京都的单程票。", "京都までの片道切符を一枚ください。", "きょうとまでのかたみちきっぷをいちまいください。"],
  "transport:11": ["去大阪的新干线在哪里乘坐？", "大阪行きの新幹線はどこから乗りますか？", "おおさかゆきのしんかんせんはどこからのりますか？"],
  "transport:12": ["我错过了新干线，可以改签吗？", "新幹線に乗り遅れました。変更できますか？", "しんかんせんにのりおくれました。へんこうできますか？"],
  "transport:14": ["这是直达新干线吗？", "これは直通の新幹線ですか？", "これはちょくつうのしんかんせんですか？"],
  "transport:28": ["请加满普通汽油。", "レギュラー満タンでお願いします。", "れぎゅらーまんたんでおねがいします。"],
  "hotel:2": ["我想预订一家日式旅馆。", "旅館を予約したいです。", "りょかんをよやくしたいです。"],
  "food:2": ["午餐有每日套餐吗？", "ランチの日替わり定食はありますか？", "らんちのひがわりていしょくはありますか？"],
  "shopping:20": ["标价含税吗？", "表示価格は税込みですか？", "ひょうじかかくはぜいこみですか？"],
  "shopping:23": ["可以找开五千日元吗？", "五千円札を崩せますか？", "ごせんえんさつをくずせますか？"],
  "shopping:30": ["可以办理免税吗？", "免税手続きはできますか？", "めんぜいてつづきはできますか？"],
  "emergency:2": ["附近有夜间营业的药店吗？", "近くに夜間営業の薬局はありますか？", "ちかくにやかんえいぎょうのやっきょくはありますか？"],
  "emergency:20": ["我受伤了，请叫救护车。", "けがをしました。救急車を呼んでください。", "けがをしました。きゅうきゅうしゃをよんでください。"],
  "emergency:24": ["请拨打119叫救护车。", "119番で救急車を呼んでください。", "ひゃくじゅうきゅうばんできゅうきゅうしゃをよんでください。"],
  "basics:15": ["这里可以把人民币换成日元吗？", "ここで人民元を円に両替できますか？", "ここでじんみんげんをえんにりょうがえできますか？"],
  "basics:16": ["我想兑换一些日元。", "日本円に両替したいです。", "にほんえんにりょうがえしたいです。"],
  "basics:17": ["可以把美元换成日元吗？", "ドルを円に両替できますか？", "どるをえんにりょうがえできますか？"],
  "basics:18": ["费用是零日元。", "料金はゼロ円です。", "りょうきんはぜろえんです。"],
  "basics:22": ["我们明天去京都。", "明日は京都へ行きます。", "あしたはきょうとへいきます。"]
};

const kanaMap = Object.fromEntries([
  "kya:きゃ,kyu:きゅ,kyo:きょ,sha:しゃ,shu:しゅ,sho:しょ,cha:ちゃ,chu:ちゅ,cho:ちょ,nya:にゃ,nyu:にゅ,nyo:にょ,hya:ひゃ,hyu:ひゅ,hyo:ひょ,mya:みゃ,myu:みゅ,myo:みょ,rya:りゃ,ryu:りゅ,ryo:りょ,gya:ぎゃ,gyu:ぎゅ,gyo:ぎょ,ja:じゃ,ju:じゅ,jo:じょ,bya:びゃ,byu:びゅ,byo:びょ,pya:ぴゃ,pyu:ぴゅ,pyo:ぴょ",
  "shi:し,chi:ち,tsu:つ,fu:ふ,ji:じ",
  "ka:か,ki:き,ku:く,ke:け,ko:こ,sa:さ,su:す,se:せ,so:そ,ta:た,te:て,to:と,na:な,ni:に,nu:ぬ,ne:ね,no:の,ha:は,hi:ひ,he:へ,ho:ほ,ma:ま,mi:み,mu:む,me:め,mo:も,ya:や,yu:ゆ,yo:よ,ra:ら,ri:り,ru:る,re:れ,ro:ろ,wa:わ,wo:を,ga:が,gi:ぎ,gu:ぐ,ge:げ,go:ご,za:ざ,zu:ず,ze:ぜ,zo:ぞ,da:だ,de:で,do:ど,ba:ば,bi:び,bu:ぶ,be:べ,bo:ぼ,pa:ぱ,pi:ぴ,pu:ぷ,pe:ぺ,po:ぽ",
  "a:あ,i:い,u:う,e:え,o:お,n:ん"
].flatMap((group) => group.split(",").map((pair) => pair.split(":"))));

function romanToHiragana(value) {
  let input = value.toLowerCase().normalize("NFKD").replace(/[\u0304\u0302]/g, "-");
  let output = "";
  while (input) {
    const punctuation = input.match(/^[\s.,!?;:'()\-/]+/);
    if (punctuation) { output += punctuation[0].replace(/-/g, "ー"); input = input.slice(punctuation[0].length); continue; }
    if (/^n(?=[^aeiouy]|$)/.test(input)) { output += "ん"; input = input.slice(1); continue; }
    if (/^([bcdfghjkmprstvwxyz])\1/.test(input)) { output += "っ"; input = input.slice(1); continue; }
    const key = Object.keys(kanaMap).sort((a, b) => b.length - a.length).find((item) => input.startsWith(item));
    if (key) { output += kanaMap[key]; input = input.slice(key.length); continue; }
    output += input[0]; input = input.slice(1);
  }
  return output.replace(/\s+/g, "").replace(/ー+/g, "ー");
}

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
async function translate(text) {
  if (cache[text]) return cache[text];
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  for (const [key, value] of Object.entries({ client: "gtx", sl: target === "en" ? "es" : "en", tl: target, dt: "t", q: text })) url.searchParams.set(key, value);
  if (target === "ja") url.searchParams.append("dt", "rm");
  const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!response.ok) throw new Error(`translation failed: ${response.status}`);
  const payload = await response.json();
  const translated = payload[0].map((part) => part[0] || "").join("").trim();
  if (!translated) throw new Error(`empty translation: ${text}`);
  const romanization = target === "ja" ? payload[0].find((part) => part?.[2])?.[2] : null;
  cache[text] = target === "ja" ? [translated, romanToHiragana(romanization || translated)] : translated;
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2) + "\n", "utf8");
  await sleep(100);
  return cache[text];
}

(async () => {
  const result = {};
  for (const [scene, rows] of Object.entries(source)) {
    result[scene] = [];
    for (let index = 0; index < rows.length; index += 1) {
      const key = `${scene}:${index + 1}`;
      const override = target === "en" ? englishOverrides[key] : target === "ja" ? japaneseOverrides[key] : null;
      const translated = override ? null : await translate(rows[index][1]);
      result[scene].push(override || (target === "ja" ? [rows[index][0], translated[0], translated[1]] : [rows[index][0], translated]));
      process.stdout.write(`\r${target}: ${scene} ${index + 1}/${rows.length}   `);
    }
  }
  fs.writeFileSync(outputPath, `"use strict";\n\n// Reviewed scenario phrases; no slot templates.\nmodule.exports = ${JSON.stringify(result, null, 2)};\n`, "utf8");
  process.stdout.write(`\nWrote ${outputPath}\n`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
