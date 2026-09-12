(function (app) {
  "use strict";

  const paths = {
    learn: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/>',
    test: '<path d="M9 4h6l1 3H8l1-3Z"/><path d="M7 6H5v15h14V6h-2"/><path d="m8 14 2.5 2.5L16 11"/>',
    tools: '<path d="M14.5 6.5a4 4 0 0 0 4.8 5.8l-7 7a2 2 0 0 1-2.8-2.8l7-7a4 4 0 0 0 5-5l-2.7 2.7-2-2L19.5 2a4 4 0 0 0-5 4.5Z"/>',
    profile: '<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
    plane: '<path d="m12 3-2 7-6 3v2l7-1.5V19l-2 2h6l-2-2v-5.5l7 1.5v-2l-6-3-2-7Z"/>',
    train: '<rect x="5" y="3" width="14" height="15" rx="3"/><path d="M8 21l2-3m6 3-2-3M8 8h8m-8 5h.01M16 13h.01"/>',
    bed: '<path d="M3 19V7m0 8h18v4m0-7a3 3 0 0 0-3-3h-6v6m-9-4h9"/>',
    utensils: '<path d="M7 3v7m-3-7v5a3 3 0 0 0 6 0V3M7 10v11M16 3v18m0-18c3 2 4 5 4 8h-4"/>',
    bag: '<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
    map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15m6-12v15"/>',
    message: '<path d="M4 4h16v12H9l-5 4V4Z"/><path d="M8 9h8m-8 3h5"/>',
    medical: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z"/>',
    speaker: '<path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M16 8a5 5 0 0 1 0 8"/>',
    check: '<path d="m6.5 12.5 3.4 3.4 7.6-8"/>',
    chevron: '<path d="m9 5 7 7-7 7"/>',
    arrow: '<path d="m15 18-6-6 6-6"/>',
    foundation: '<path d="M4 20h16M6 20V9h12v11M4 9l8-6 8 6M9 13h6m-6 4h6"/>'
  };

  function icon(name, className) {
    const body = paths[name] || paths.learn;
    return `<svg class="${className || "icon"}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
  }

  app.icons = { icon };
})(window.TravelVocabApp = window.TravelVocabApp || {});
