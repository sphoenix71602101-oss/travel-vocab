(function (app) {
  "use strict";

  function normalize(hash) {
    const value = String(hash || "").replace(/^#\/?/, "").replace(/^\/+|\/+$/g, "");
    return value || "learn";
  }

  function parse(hash) {
    const path = normalize(hash);
    const parts = path.split("/").filter(Boolean);
    if (parts[0] === "learn" && parts[1]) {
      return { name: parts[1] === "foundation" ? "foundation" : "scenario", path, id: parts[1], section: "learn" };
    }
    if (["learn", "self-test", "tools", "me"].includes(parts[0])) {
      return { name: parts[0], path: parts[0], section: parts[0] };
    }
    return { name: "learn", path: "learn", section: "learn" };
  }

  function create(onChange) {
    const notify = () => onChange(parse(window.location.hash));
    window.addEventListener("hashchange", notify);
    return {
      start() {
        if (!window.location.hash) window.location.replace("#/learn");
        else notify();
      },
      navigate(path) {
        const target = `#/${normalize(path)}`;
        if (window.location.hash === target) notify();
        else window.location.hash = target;
      },
      current() {
        return parse(window.location.hash);
      }
    };
  }

  app.router = { create, parse };
})(window.TravelVocabApp = window.TravelVocabApp || {});
