(function () {
  "use strict";
  window.TravelAppModules ||= {};
  window.TravelAppModules["validation"] = {
    exports: ["validateData"],
    create(ctx) {
  const { DESTINATION_OPTIONS, state } = ctx;
  function validateData() {
    const problems = [];
    const packs = window.TRAVEL_CONTENT?.all() || [];
    if (state.destinationId && !packs.length) return ["找不到目的地语言包。"];
    const destinationIds = new Set();
    DESTINATION_OPTIONS.forEach((destination) => {
      ["id", "contentPackId", "country", "language", "nativeLabel", "lang", "status", "countryCode", "flagSrc"].forEach((field) => {
        if (typeof destination[field] !== "string" || !destination[field].trim()) problems.push(`目的地 ${destination.id || "未知"} 的 ${field} 字段无效。`);
      });
      if (destinationIds.has(destination.id)) problems.push(`目的地 ID 重复：${destination.id}`);
      destinationIds.add(destination.id);
      if (!['available', 'coming-soon'].includes(destination.status)) problems.push(`目的地状态无效：${destination.id}`);
      if (destination.id === state.destinationId && !window.TRAVEL_CONTENT.has(destination.contentPackId)) problems.push(`当前目的地缺少内容包：${destination.id}`);
    });
    packs.forEach((pack) => {
      const scenes = new Map(pack.scenes.map((scene) => [scene.id, new Set(scene.situations.map((item) => item.id))]));
      const ids = new Set();
      const exampleIds = new Set();
      pack.entries.forEach((entry, index) => {
        ["id", "sceneId", "situationId", "zh", "text", "kind", "direction", "intent"].forEach((field) => {
          if (typeof entry?.[field] !== "string" || !entry[field].trim()) problems.push(`${pack.id} 第 ${index + 1} 条的 ${field} 字段无效。`);
        });
        if (pack.pronunciationLabel && !entry.pronunciation?.trim()) problems.push(`${pack.id}/${entry.id} 缺少读音。`);
        if (ids.has(entry.id)) problems.push(`${pack.id} 词条 ID 重复：${entry.id}`);
        ids.add(entry.id);
        if (!scenes.has(entry.sceneId)) problems.push(`${pack.id} 未知旅行场景：${entry.sceneId}`);
        else if (!scenes.get(entry.sceneId).has(entry.situationId)) problems.push(`${pack.id} 未知小情境：${entry.sceneId}/${entry.situationId}`);
        if (entry.example) {
          ["id", "zh", "text"].forEach((field) => {
            if (typeof entry.example[field] !== "string" || !entry.example[field].trim()) problems.push(`${pack.id}/${entry.id} 例句 ${field} 无效。`);
          });
          if (exampleIds.has(entry.example.id)) problems.push(`${pack.id} 例句 ID 重复：${entry.example.id}`);
          exampleIds.add(entry.example.id);
        }
      });
      pack.scenes.forEach((scene) => {
        if (!Array.isArray(scene.homeTopics) || scene.homeTopics.length !== 4) problems.push(`${pack.id} 首页摘要无效：${scene.id}`);
        scene.situations.forEach((situation) => {
          if (!pack.entries.some((entry) => entry.sceneId === scene.id && entry.situationId === situation.id)) problems.push(`${pack.id} 小情境没有内容：${scene.id}/${situation.id}`);
        });
      });
    });
    return problems;
  }

  return { validateData };
    }
  };
})();
