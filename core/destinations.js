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
      hero: { mobile: "images/heroes/jp-mobile.webp", wide: "images/heroes/jp-wide.webp" }
    },
    {
      id: "us", contentPackId: "us-en", country: "美国", language: "英语", nativeLabel: "English",
      lang: "en", status: "available", countryCode: "US", flagSrc: "icons/flags/us.png",
      resources: {
        pack: "languages/us-en/pack.js",
        beginner: ["languages/us-en/beginner/data.js", "languages/us-en/beginner/audio.js", "languages/us-en/beginner/module.js"]
      },
      hero: { mobile: "images/heroes/us-mobile.webp", wide: "images/heroes/us-wide.webp" }
    },
    {
      id: "kr", contentPackId: "kr-ko", country: "韩国", language: "韩语", nativeLabel: "한국어",
      lang: "ko", status: "available", countryCode: "KR", flagSrc: "icons/flags/kr.png",
      resources: {
        pack: "languages/kr-ko/pack.js",
        beginner: ["languages/kr-ko/beginner/data.js", "languages/kr-ko/beginner/audio.js", "languages/kr-ko/beginner/module.js"]
      },
      hero: { mobile: "images/heroes/kr-mobile.png", wide: "images/heroes/kr-wide.png" }
    },
    { id: "ru", contentPackId: "ru-ru", country: "俄罗斯", language: "俄语", nativeLabel: "Русский", lang: "ru", status: "coming-soon", countryCode: "RU", flagSrc: "icons/flags/ru.png" },
    { id: "es", contentPackId: "es-es", country: "西班牙", language: "西班牙语", nativeLabel: "Español", lang: "es", status: "coming-soon", countryCode: "ES", flagSrc: "icons/flags/es.png" }
  ];

  window.TRAVEL_DESTINATIONS = Object.freeze({
    all: Object.freeze(destinations.map((destination) => Object.freeze(destination))),
    defaultHero: Object.freeze({ mobile: "images/heroes/default-mobile.webp", wide: "images/heroes/default-wide.webp" })
  });
})();
