(function () {
  "use strict";

  const destinations = [
    {
      id: "jp", contentPackId: "jp-ja", country: "日本", language: "日语", nativeLabel: "日本語",
      lang: "ja", status: "available", countryCode: "JP", flagSrc: "icons/flags/jp.png",
      resources: {
        pack: "languages/jp-ja/pack.js",
        beginner: ["languages/jp-ja/beginner/data.js", "languages/jp-ja/beginner/module.js"]
      },
      hero: { mobile: "images/heroes/jp-mobile.webp", wide: "images/heroes/jp-wide.webp" },
      beginnerMeta: {"curriculumVersion":2,"lessonIds":["a","ka","sa","ta","na","ha","ma","ya","ra","wa","voiced-ks","voiced-th","contracted","small-tsu","long-vowel","word-flow","mixed-scripts","sentence-particles"],"summary":"从声音开始，尝试读出日语"},
      mapPosition: { x: 86, y: 42 },
      preparation: {
        included: [
          { id: "stay-address", text: "保存住宿地址的日文写法" },
          { id: "local-transit", text: "确认当地交通卡或乘车支付方式" },
          { id: "power-standard", text: "确认设备适配 100V 电压与 A 型插头" }
        ],
        optional: [
          { id: "backup-cash", text: "准备少量备用现金" },
          { id: "place-screenshots", text: "保存常用地点的日文名称或截图" }
        ]
      }
    },
    {
      id: "us", contentPackId: "us-en", country: "美国", language: "英语", nativeLabel: "English",
      lang: "en", status: "available", countryCode: "US", flagSrc: "icons/flags/us.png",
      resources: {
        pack: "languages/us-en/pack.js",
        beginner: ["core/reading-course.js", "languages/us-en/beginner/data.js", "languages/us-en/beginner/audio.js", "languages/us-en/beginner/module.js"]
      },
      hero: { mobile: "images/heroes/us-mobile.webp", wide: "images/heroes/us-wide.webp" },
      beginnerMeta: {"curriculumVersion":2,"lessonIds":["en-01","en-02","en-03","en-04","en-05","en-06","en-07","en-08","en-09","en-10","en-11","en-12"],"summary":"从声音开始，尝试读出英语"},
      mapPosition: { x: 19, y: 40 },
      preparation: {
        included: [
          { id: "stay-contact", text: "保存住宿地址与联系人英文信息" },
          { id: "tax-tip-budget", text: "预留税费与小费预算" },
          { id: "power-standard", text: "确认设备适配 120V 电压与 A/B 型插头" }
        ],
        optional: [
          { id: "overseas-card", text: "准备可境外使用的银行卡" },
          { id: "driving-documents", text: "按需准备驾照与租车材料" }
        ]
      }
    },
    {
      id: "kr", contentPackId: "kr-ko", country: "韩国", language: "韩语", nativeLabel: "한국어",
      lang: "ko", status: "available", countryCode: "KR", flagSrc: "icons/flags/kr.png",
      resources: {
        pack: "languages/kr-ko/pack.js",
        beginner: ["languages/kr-ko/beginner/data.js", "languages/kr-ko/beginner/audio.js", "languages/kr-ko/beginner/module.js"]
      },
      hero: { mobile: "images/heroes/kr-mobile.webp", wide: "images/heroes/kr-wide.webp" },
      beginnerMeta: {"curriculumVersion":2,"lessonIds":["ko-01","ko-02","ko-03","ko-04","ko-05","ko-06","ko-07","ko-08","ko-09","ko-10","ko-11","ko-12","ko-13","ko-14","ko-15"],"summary":"从声音开始，尝试读出韩语"},
      mapPosition: { x: 82, y: 44 },
      preparation: {
        included: [
          { id: "stay-address", text: "保存住宿地址的韩文写法" },
          { id: "local-map", text: "确认本地地图与路线方案" },
          { id: "power-standard", text: "确认设备适配 220V 电压与 C/F 型插头" }
        ],
        optional: [
          { id: "local-transit", text: "确认当地交通卡或乘车支付方式" },
          { id: "place-screenshots", text: "保存常用地点的韩文名称或截图" }
        ]
      }
    },
    {
      id: "ru", contentPackId: "ru-ru", country: "俄罗斯", language: "俄语", nativeLabel: "Русский",
      lang: "ru", status: "available", countryCode: "RU", flagSrc: "icons/flags/ru.png",
      resources: {
        pack: "languages/ru-ru/pack.js",
        beginner: ["languages/ru-ru/beginner/data.js", "languages/ru-ru/beginner/audio.js", "languages/ru-ru/beginner/module.js"]
      },
      hero: { mobile: "images/heroes/ru-mobile.webp", wide: "images/heroes/ru-wide.webp" },
      beginnerMeta: {"curriculumVersion":2,"lessonIds":["ru-01","ru-02","ru-03","ru-04","ru-05","ru-06","ru-07","ru-08","ru-09","ru-10","ru-11","ru-12","ru-13","ru-14","ru-15"],"summary":"从声音开始，尝试读出俄语"},
      mapPosition: { x: 68, y: 27 },
      preparation: {
        included: [
          { id: "stay-address", text: "保存住宿地址的俄文写法" },
          { id: "offline-map", text: "准备离线地图与关键地址截图" },
          { id: "power-standard", text: "确认设备适配 220V 电压与 C/F 型插头" }
        ],
        optional: [
          { id: "communication", text: "确认可用的本地通信方案" },
          { id: "payment-backup", text: "准备可用的支付方式与备用现金" }
        ]
      }
    },
    {
      id: "es", contentPackId: "es-es", country: "西班牙", language: "西班牙语", nativeLabel: "Español",
      lang: "es", status: "available", countryCode: "ES", flagSrc: "icons/flags/es.png",
      resources: {
        pack: "languages/es-es/pack.js",
        beginner: ["core/reading-course.js", "languages/es-es/beginner/data.js", "languages/es-es/beginner/audio.js", "languages/es-es/beginner/module.js"]
      },
      hero: { mobile: "images/heroes/es-mobile.jpg", wide: "images/heroes/es-wide.jpg" },
      beginnerMeta: {"curriculumVersion":2,"lessonIds":["es-01","es-02","es-03","es-04","es-05","es-06","es-07","es-08","es-09","es-10","es-11","es-12"],"summary":"从声音开始，尝试读出西班牙语"},
      mapPosition: { x: 47, y: 42 },
      preparation: {
        included: [
          { id: "stay-address", text: "保存住宿地址的西班牙语写法" },
          { id: "intercity-transit", text: "确认跨城交通票据与站点名称" },
          { id: "power-standard", text: "确认设备适配 230V 电压与 C/F 型插头" }
        ],
        optional: [
          { id: "offline-map", text: "准备常用地点的离线地图" },
          { id: "payment-backup", text: "确认境外支付方式与备用现金" }
        ]
      }
    }
  ];

  window.TRAVEL_DESTINATIONS = Object.freeze({
    all: Object.freeze(destinations.map((destination) => Object.freeze(destination))),
    defaultHero: Object.freeze({ mobile: "images/heroes/default-mobile.webp", wide: "images/heroes/default-wide.webp" })
  });
})();
