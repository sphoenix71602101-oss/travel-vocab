(function () {
  "use strict";

  const packs = new Map();

  window.registerContentPack = function registerContentPack(pack) {
    if (!pack || typeof pack.id !== "string" || packs.has(pack.id)) {
      throw new Error(`Invalid or duplicate content pack: ${pack?.id || "unknown"}`);
    }
    packs.set(pack.id, Object.freeze(pack));
  };

  window.TRAVEL_CONTENT = Object.freeze({
    get(id) { return packs.get(id) || null; },
    has(id) { return packs.has(id); },
    all() { return Array.from(packs.values()); }
  });
})();
