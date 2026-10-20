(function () {
  "use strict";
  // Small controls share a 24-unit grid, rounded 1.8-unit strokes and currentColor.
  // Colorful scene illustrations remain separate from these functional symbols.
  const shapes = Object.freeze({
    home: '<path d="m3.5 10 8.5-7 8.5 7v9a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2Z"/><path d="M9 21v-8h6v8"/>',
    review: '<path d="M3.5 9A9 9 0 1 1 3 15M3 4v5h5"/><path d="M12 7v5l3 2"/>',
    tools: '<rect x="3" y="7" width="18" height="14" rx="3"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M9 11v3m6-3v3"/>',
    me: '<circle cx="12" cy="7.5" r="4"/><path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',
    show: '<rect x="2.5" y="4" width="19" height="16" rx="3"/><path d="M7 10V8h3m7 6v2h-3m-7 0 10-8"/>',
    weak: '<circle cx="11" cy="13" r="8"/><circle cx="11" cy="13" r="4"/><path d="m11 13 9-9m-4 0h4v4"/>',
    learn: '<path d="M12 6C9 4 6 3.5 3 4v15c3-.5 6 0 9 2 3-2 6-2.5 9-2V4c-3-.5-6 0-9 2Zm0 0v15M6 8l3 1M6 12l3 1"/>',
    reading: '<path d="M12 8C9 6 6 5.5 3 6v13c3-.5 6 0 9 2 3-2 6-2.5 9-2v-8M12 8v13m4-15a3 3 0 0 1 3 3m-3-7a7 7 0 0 1 7 7"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    arrowRight: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    arrowLeft: '<path d="M20 12H4m6-6-6 6 6 6"/>',
    speaker: '<path d="M4 9v6h4l5 4V5L8 9Zm12-1a5 5 0 0 1 0 8m3-11a9 9 0 0 1 0 14"/>',
    favorite: '<path d="m12 3 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 17.2l-5.56 2.92 1.06-6.2L3 9.53l6.22-.9L12 3Z"/>'
  });
  function render(name) {
    if (!Object.prototype.hasOwnProperty.call(shapes, name)) return "";
    return `<svg class="interface-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${shapes[name]}</svg>`;
  }
  window.TRAVEL_ICONS = Object.freeze({ render });
})();
