(function () {
  "use strict";
  window.registerBeginnerModule(window.createReadingCourse({
  "id": "es-es-beginner",
  "legacyKey": "es",
  "languageLabel": "西班牙语",
  "speechLabel": "西班牙西语",
  "locale": "es-ES",
  "summary": "从五个元音开始，尝试读出西语",
  "intro": "从五个稳定元音开始，练习看着拼写读出单词和短句。"
,
  getData: () => window.ES_BEGINNER_DATA,
  getAudio: () => window.ES_BEGINNER_AUDIO
  }));
})();
