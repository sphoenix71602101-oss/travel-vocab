(function () {
  "use strict";

  const modules = new Map();
  const requiredMethods = ["createProgress", "normalizeProgress", "getHomeSummary", "renderRoute"];

  window.registerBeginnerModule = function registerBeginnerModule(module) {
    if (!module || typeof module.id !== "string" || !module.id.trim() || modules.has(module.id)
      || requiredMethods.some((method) => typeof module[method] !== "function")) {
      throw new Error(`Invalid or duplicate beginner module: ${module?.id || "unknown"}`);
    }
    modules.set(module.id, Object.freeze(module));
  };

  window.TRAVEL_BEGINNER = Object.freeze({
    get(id) { return modules.get(id) || null; },
    has(id) { return modules.has(id); },
    all() { return Array.from(modules.values()); }
  });
}());
