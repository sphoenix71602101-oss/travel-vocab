(function () {
  "use strict";
  window.registerBeginnerModule(window.createReadingCourse({
  "id": "us-en-beginner",
  "legacyKey": "en",
  "languageLabel": "英语",
  "speechLabel": "美式英语",
  "locale": "en-US",
  "summary": "从声音开始，尝试读出英语",
  "intro": "从英语声音开始，练习看着拼写读出单词和短句。"
,
  getData: () => window.EN_BEGINNER_DATA,
  getAudio: () => window.EN_BEGINNER_AUDIO
  }));
})();
