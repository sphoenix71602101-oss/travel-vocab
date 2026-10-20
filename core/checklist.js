(function () {
  "use strict";

  const STORAGE_KEY = "yujianWorld.checklist.v2";
  const LEGACY_STORAGE_KEY = "yujianWorld.checklist.v1";
  const CATEGORIES = Object.freeze([
    Object.freeze({ id: "documents", name: "证件与预订" }),
    Object.freeze({ id: "money", name: "资金与通讯" }),
    Object.freeze({ id: "clothing", name: "衣物与随身" }),
    Object.freeze({ id: "health", name: "洗护与健康" }),
    Object.freeze({ id: "digital", name: "数码设备" }),
    Object.freeze({ id: "before-leaving", name: "出门前确认" })
  ]);
  const DEFAULT_DEFINITIONS = Object.freeze([
    ["passport", "护照 / 身份证", "documents"],
    ["visa", "签证与入境材料", "documents"],
    ["tickets", "机票 / 车票", "documents"],
    ["booking", "酒店与行程单", "documents"],
    ["insurance", "旅行保险", "documents"],
    ["cards", "银行卡 / 现金", "money"],
    ["sim", "电话卡 / eSIM / 国际漫游", "money"],
    ["outfits", "换洗衣物", "clothing"],
    ["medicine", "常用药", "health"],
    ["phone", "手机", "digital"],
    ["charger", "充电器与充电线", "digital"],
    ["power-bank", "充电宝", "digital"],
    ["adapter", "转换插头", "digital"],
    ["utilities", "检查门窗、水电与燃气", "before-leaving"],
    ["essentials", "证件、钱包、手机随身", "before-leaving"]
  ].map(Object.freeze));
  const LEGACY_DEFAULT_DEFINITIONS = Object.freeze([
    ["passport", "护照 / 身份证", "documents"], ["visa", "签证与入境材料", "documents"],
    ["tickets", "机票 / 车票", "documents"], ["booking", "酒店与行程单", "documents"],
    ["insurance", "旅行保险", "documents"], ["cards", "银行卡", "money"],
    ["cash", "现金 / 外币", "money"], ["mobile-pay", "手机支付可正常使用", "money"],
    ["sim", "电话卡 / eSIM / 国际漫游", "money"], ["outfits", "换洗衣物", "clothing"],
    ["underwear", "内衣与袜子", "clothing"], ["shoes", "舒适的鞋", "clothing"],
    ["weather", "雨具 / 防晒用品", "clothing"], ["toiletries", "洗漱用品", "health"],
    ["medicine", "常用药", "health"], ["prescription", "处方药与药品证明", "health"],
    ["tissues", "纸巾 / 湿巾", "health"], ["phone", "手机", "digital"],
    ["charger", "充电器与充电线", "digital"], ["power-bank", "充电宝", "digital"],
    ["adapter", "转换插头", "digital"], ["earphones", "耳机", "digital"],
    ["utilities", "检查门窗、水电与燃气", "before-leaving"], ["trash", "处理垃圾", "before-leaving"],
    ["essentials", "证件、钱包、手机随身", "before-leaving"], ["home-care", "安排家庭、宠物或植物照看", "before-leaving"]
  ].map(Object.freeze));
  const CATEGORY_IDS = new Set(CATEGORIES.map((category) => category.id));
  const DEFAULT_BY_ID = new Map(DEFAULT_DEFINITIONS.map((entry) => [`default-${entry[0]}`, entry]));
  const LEGACY_BY_ID = new Map(LEGACY_DEFAULT_DEFINITIONS.map((entry) => [`default-${entry[0]}`, entry]));

  function createDefaultModel() {
    return {
      commonItems: DEFAULT_DEFINITIONS.map(([id, text, categoryId]) => ({ id: `default-${id}`, text, categoryId, checked: false })),
      destinations: {}
    };
  }

  function cleanItems(input) {
    const seen = new Set();
    const items = [];
    (Array.isArray(input) ? input : []).forEach((item) => {
      const id = typeof item?.id === "string" ? item.id.trim().slice(0, 120) : "";
      const text = typeof item?.text === "string" ? item.text.trim().slice(0, 80) : "";
      if (!id || !text || seen.has(id) || !CATEGORY_IDS.has(item.categoryId)) return;
      seen.add(id);
      items.push({ id, text, categoryId: item.categoryId, checked: item.checked === true });
    });
    return items;
  }

  function uniqueIds(input) {
    return [...new Set((Array.isArray(input) ? input : []).filter((id) => typeof id === "string" && id.trim()).map((id) => id.trim().slice(0, 80)))];
  }

  function normalizeDestinations(input) {
    if (!input || typeof input !== "object") return {};
    const destinations = {};
    Object.entries(input).forEach(([destinationId, state]) => {
      const id = String(destinationId || "").trim().slice(0, 40);
      if (!id || !state || typeof state !== "object") return;
      destinations[id] = { checkedIds: uniqueIds(state.checkedIds), addedIds: uniqueIds(state.addedIds) };
    });
    return destinations;
  }

  function normalizeModel(input) {
    if (!input || !Array.isArray(input.commonItems)) return createDefaultModel();
    return { commonItems: cleanItems(input.commonItems), destinations: normalizeDestinations(input.destinations) };
  }

  function migrateLegacyModel(input) {
    if (!input || !Array.isArray(input.items)) return createDefaultModel();
    const commonItems = [];
    const seen = new Set();
    cleanItems(input.items).forEach((item) => {
      if (seen.has(item.id)) return;
      const legacy = LEGACY_BY_ID.get(item.id);
      const current = DEFAULT_BY_ID.get(item.id);
      if (current) {
        const unchanged = legacy && item.text === legacy[1] && item.categoryId === legacy[2];
        commonItems.push(unchanged
          ? { id: item.id, text: current[1], categoryId: current[2], checked: item.checked }
          : { ...item });
        seen.add(item.id);
        return;
      }
      if (legacy && item.text === legacy[1] && item.categoryId === legacy[2]) return;
      commonItems.push({ ...item });
      seen.add(item.id);
    });
    return { commonItems, destinations: {} };
  }

  function normalizePreparation(preparation) {
    const seen = new Set();
    const clean = (items) => (Array.isArray(items) ? items : []).flatMap((item) => {
      const id = typeof item?.id === "string" ? item.id.trim().slice(0, 80) : "";
      const text = typeof item?.text === "string" ? item.text.trim().slice(0, 100) : "";
      if (!id || !text || seen.has(id)) return [];
      seen.add(id);
      return [{ id, text }];
    });
    return { included: clean(preparation?.included), optional: clean(preparation?.optional) };
  }

  function destinationItems(model, destinationId, preparation) {
    if (!destinationId) return [];
    const normalized = normalizeModel(model);
    const catalog = normalizePreparation(preparation);
    const state = normalized.destinations[destinationId] || { checkedIds: [], addedIds: [] };
    const checked = new Set(state.checkedIds);
    const added = new Set(state.addedIds);
    return [
      ...catalog.included.map((item) => ({ ...item, checked: checked.has(item.id), optional: false })),
      ...catalog.optional.filter((item) => added.has(item.id)).map((item) => ({ ...item, checked: checked.has(item.id), optional: true }))
    ];
  }

  function availableRecommendations(model, destinationId, preparation) {
    if (!destinationId) return [];
    const normalized = normalizeModel(model);
    const added = new Set(normalized.destinations[destinationId]?.addedIds || []);
    return normalizePreparation(preparation).optional.filter((item) => !added.has(item.id));
  }

  function summarize(model, destinationId, preparation) {
    const normalized = normalizeModel(model);
    const items = [...normalized.commonItems, ...destinationItems(normalized, destinationId, preparation)];
    const total = items.length;
    const completed = items.filter((item) => item.checked).length;
    return { total, completed, remaining: total - completed, percentage: total ? Math.round((completed / total) * 100) : 0 };
  }

  function createStore(storage, createId) {
    let sequence = 0;
    const idFactory = createId || (() => `custom-${Date.now()}-${sequence += 1}`);

    function write(model) {
      const normalized = normalizeModel(model);
      try {
        storage?.setItem(STORAGE_KEY, JSON.stringify(normalized));
        return { ok: true, model: normalized };
      } catch (error) {
        return { ok: false, model: normalized };
      }
    }

    function read() {
      try {
        const current = storage?.getItem(STORAGE_KEY);
        if (current != null) {
          const raw = JSON.parse(current);
          const normalized = normalizeModel(raw);
          if (JSON.stringify(raw) !== JSON.stringify(normalized)) write(normalized);
          return normalized;
        }
        const legacy = storage?.getItem(LEGACY_STORAGE_KEY);
        if (legacy == null) return createDefaultModel();
        const migrated = migrateLegacyModel(JSON.parse(legacy));
        write(migrated);
        return migrated;
      } catch (error) {
        return createDefaultModel();
      }
    }

    function ensureDestination(model, destinationId) {
      if (!model.destinations[destinationId]) model.destinations[destinationId] = { checkedIds: [], addedIds: [] };
      return model.destinations[destinationId];
    }

    function getModel() { return read(); }
    function addItem(text, categoryId) {
      const cleanText = String(text || "").trim().slice(0, 80);
      if (!cleanText || !CATEGORY_IDS.has(categoryId)) return { ok: false, model: read() };
      const model = read();
      model.commonItems.push({ id: idFactory(), text: cleanText, categoryId, checked: false });
      return write(model);
    }
    function updateItem(itemId, changes) {
      const model = read();
      const item = model.commonItems.find((candidate) => candidate.id === itemId);
      const text = String(changes?.text || "").trim().slice(0, 80);
      const categoryId = changes?.categoryId;
      if (!item || !text || !CATEGORY_IDS.has(categoryId)) return { ok: false, model };
      item.text = text;
      item.categoryId = categoryId;
      return write(model);
    }
    function deleteItem(itemId) {
      const model = read();
      const nextItems = model.commonItems.filter((item) => item.id !== itemId);
      if (nextItems.length === model.commonItems.length) return { ok: false, model };
      model.commonItems = nextItems;
      return write(model);
    }
    function setChecked(itemId, checked) {
      const model = read();
      const item = model.commonItems.find((candidate) => candidate.id === itemId);
      if (!item) return { ok: false, model };
      item.checked = checked === true;
      return write(model);
    }
    function setRecommendationChecked(destinationId, recommendationId, checked, preparation) {
      const model = read();
      const visibleIds = new Set(destinationItems(model, destinationId, preparation).map((item) => item.id));
      if (!visibleIds.has(recommendationId)) return { ok: false, model };
      const state = ensureDestination(model, destinationId);
      const checkedIds = new Set(state.checkedIds);
      if (checked) checkedIds.add(recommendationId);
      else checkedIds.delete(recommendationId);
      state.checkedIds = [...checkedIds];
      return write(model);
    }
    function addRecommendation(destinationId, recommendationId, preparation) {
      const model = read();
      const optionalIds = new Set(normalizePreparation(preparation).optional.map((item) => item.id));
      if (!destinationId || !optionalIds.has(recommendationId)) return { ok: false, model };
      const state = ensureDestination(model, destinationId);
      if (!state.addedIds.includes(recommendationId)) state.addedIds.push(recommendationId);
      return write(model);
    }
    function removeRecommendation(destinationId, recommendationId, preparation) {
      const model = read();
      const optionalIds = new Set(normalizePreparation(preparation).optional.map((item) => item.id));
      const state = model.destinations[destinationId];
      if (!state || !optionalIds.has(recommendationId) || !state.addedIds.includes(recommendationId)) return { ok: false, model };
      state.addedIds = state.addedIds.filter((id) => id !== recommendationId);
      state.checkedIds = state.checkedIds.filter((id) => id !== recommendationId);
      return write(model);
    }
    function resetChecks(destinationId) {
      const model = read();
      model.commonItems.forEach((item) => { item.checked = false; });
      if (destinationId && model.destinations[destinationId]) model.destinations[destinationId].checkedIds = [];
      return write(model);
    }
    function restoreDefaults() { return write(createDefaultModel()); }

    return {
      getModel, addItem, updateItem, deleteItem, setChecked, setRecommendationChecked,
      addRecommendation, removeRecommendation, resetChecks, restoreDefaults
    };
  }

  const store = createStore(window.localStorage);
  window.TRAVEL_CHECKLIST = Object.freeze({
    STORAGE_KEY,
    LEGACY_STORAGE_KEY,
    CATEGORIES,
    DEFAULT_DEFINITIONS,
    LEGACY_DEFAULT_DEFINITIONS,
    createDefaultModel,
    normalizeModel,
    migrateLegacyModel,
    destinationItems,
    availableRecommendations,
    summarize,
    createStore,
    getModel: store.getModel,
    addItem: store.addItem,
    updateItem: store.updateItem,
    deleteItem: store.deleteItem,
    setChecked: store.setChecked,
    setRecommendationChecked: store.setRecommendationChecked,
    addRecommendation: store.addRecommendation,
    removeRecommendation: store.removeRecommendation,
    resetChecks: store.resetChecks,
    restoreDefaults: store.restoreDefaults
  });
})();
