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
        beginner: ["languages/us-en/beginner/data.js", "languages/us-en/beginner/audio.js", "languages/us-en/beginner/module.js"]
      },
      hero: { mobile: "images/heroes/us-mobile.webp", wide: "images/heroes/us-wide.webp" },
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
      hero: { mobile: "images/heroes/kr-mobile.png", wide: "images/heroes/kr-wide.png" },
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
      hero: { mobile: "images/heroes/ru-mobile.png", wide: "images/heroes/ru-wide.png" },
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
        beginner: ["languages/es-es/beginner/data.js", "languages/es-es/beginner/audio.js", "languages/es-es/beginner/module.js"]
      },
      hero: { mobile: "images/heroes/es-mobile.jpg", wide: "images/heroes/es-wide.jpg" },
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
