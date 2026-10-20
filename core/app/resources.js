(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules.resources = {
    exports: ["loadContentPack", "loadBeginnerModule", "beginnerHomeSummary"],
    create({ DESTINATION_OPTIONS }) {
      const scripts = new Map();
      const contents = new Map();
      const beginners = new Map();
      function loadScript(path) {
        if (!scripts.has(path)) {
          const promise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = path;
            script.onload = resolve;
            script.onerror = () => { script.remove(); reject(new Error("无法加载 " + path)); };
            document.body.append(script);
          }).catch((error) => { scripts.delete(path); throw error; });
          scripts.set(path, promise);
        }
        return scripts.get(path);
      }
      function destinationFor(packId) {
        const destination = DESTINATION_OPTIONS.find((item) => item.contentPackId === packId && item.status === "available");
        if (!destination) throw new Error("未知语言包：" + packId);
        return destination;
      }
      function loadContentPack(packId) {
        if (!contents.has(packId)) contents.set(packId, Promise.resolve().then(() => loadScript(destinationFor(packId).resources.pack)).then(() => {
          if (!window.TRAVEL_CONTENT.has(packId)) throw new Error("语言包不完整：" + packId);
        }).catch((error) => { contents.delete(packId); throw error; }));
        return contents.get(packId);
      }
      function loadBeginnerModule(packId) {
        if (!beginners.has(packId)) beginners.set(packId, loadContentPack(packId).then(async () => {
          for (const path of destinationFor(packId).resources.beginner || []) await loadScript(path);
          const module = window.TRAVEL_BEGINNER.get(window.TRAVEL_CONTENT.get(packId).features.beginnerModule);
          if (!module) throw new Error("认读课程不完整");
          const problem = module.validateData?.();
          if (problem) throw new Error(problem);
        }).catch((error) => { beginners.delete(packId); throw error; }));
        return beginners.get(packId);
      }
      function beginnerHomeSummary(destination, progress) {
        if (!destination) return "选择目的地后开始";
        const meta = destination.beginnerMeta;
        if (!meta) return "课程筹备中";
        if (progress?.curriculumVersion !== meta.curriculumVersion) return meta.summary;
        if (progress.placementPassed) return "已通过认读测试";
        if (progress.challengeDone) return "认读挑战已完成";
        const count = new Set((Array.isArray(progress.completedLessons) ? progress.completedLessons : []).filter((id) => meta.lessonIds.includes(id))).size;
        return count ? `已完成 ${count} / ${meta.lessonIds.length} 节短课` : meta.summary;
      }
      return { loadContentPack, loadBeginnerModule, beginnerHomeSummary };
    }
  };
})();
