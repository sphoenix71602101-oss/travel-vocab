(function () {
  "use strict";

  const STORAGE_KEY = "yujianWorld.checklist.v1";
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
    ["cards", "银行卡", "money"],
    ["cash", "现金 / 外币", "money"],
    ["mobile-pay", "手机支付可正常使用", "money"],
    ["sim", "电话卡 / eSIM / 国际漫游", "money"],
    ["outfits", "换洗衣物", "clothing"],
    ["underwear", "内衣与袜子", "clothing"],
    ["shoes", "舒适的鞋", "clothing"],
    ["weather", "雨具 / 防晒用品", "clothing"],
    ["toiletries", "洗漱用品", "health"],
    ["medicine", "常用药", "health"],
    ["prescription", "处方药与药品证明", "health"],
    ["tissues", "纸巾 / 湿巾", "health"],
    ["phone", "手机", "digital"],
    ["charger", "充电器与充电线", "digital"],
    ["power-bank", "充电宝", "digital"],
    ["adapter", "转换插头", "digital"],
    ["earphones", "耳机", "digital"],
    ["utilities", "检查门窗、水电与燃气", "before-leaving"],
    ["trash", "处理垃圾", "before-leaving"],
    ["essentials", "证件、钱包、手机随身", "before-leaving"],
    ["home-care", "安排家庭、宠物或植物照看", "before-leaving"]
  ].map(Object.freeze));

  function createDefaultModel() {
    return {
      items: DEFAULT_DEFINITIONS.map(([id, text, categoryId]) => ({ id: `default-${id}`, text, categoryId, checked: false }))
    };
  }

  function normalizeModel(input) {
    if (!input || !Array.isArray(input.items)) return createDefaultModel();
    const categoryIds = new Set(CATEGORIES.map((category) => category.id));
    const seen = new Set();
    const items = [];
    input.items.forEach((item) => {
      const id = typeof item?.id === "string" ? item.id.trim() : "";
      const text = typeof item?.text === "string" ? item.text.trim().slice(0, 80) : "";
      if (!id || !text || seen.has(id) || !categoryIds.has(item.categoryId)) return;
      seen.add(id);
      items.push({ id, text, categoryId: item.categoryId, checked: item.checked === true });
    });
    return { items };
  }

  function summarize(model) {
    const normalized = normalizeModel(model);
    const total = normalized.items.length;
    const completed = normalized.items.filter((item) => item.checked).length;
    return { total, completed, percentage: total ? Math.round((completed / total) * 100) : 0 };
  }

  function createStore(storage, createId) {
    let sequence = 0;
    const idFactory = createId || (() => `custom-${Date.now()}-${sequence += 1}`);

    function read() {
      try {
        const raw = storage?.getItem(STORAGE_KEY);
        return raw == null ? createDefaultModel() : normalizeModel(JSON.parse(raw));
      } catch (error) {
        return createDefaultModel();
      }
    }

    function write(model) {
      const normalized = normalizeModel(model);
      try {
        storage?.setItem(STORAGE_KEY, JSON.stringify(normalized));
        return { ok: true, model: normalized };
      } catch (error) {
        return { ok: false, model: normalized };
      }
    }

    function getModel() { return read(); }
    function addItem(text, categoryId) {
      const cleanText = String(text || "").trim().slice(0, 80);
      if (!cleanText || !CATEGORIES.some((category) => category.id === categoryId)) return { ok: false, model: read() };
      const model = read();
      model.items.push({ id: idFactory(), text: cleanText, categoryId, checked: false });
      return write(model);
    }
    function updateItem(itemId, changes) {
      const model = read();
      const item = model.items.find((candidate) => candidate.id === itemId);
      const text = String(changes?.text || "").trim().slice(0, 80);
      const categoryId = changes?.categoryId;
      if (!item || !text || !CATEGORIES.some((category) => category.id === categoryId)) return { ok: false, model };
      item.text = text;
      item.categoryId = categoryId;
      return write(model);
    }
    function deleteItem(itemId) {
      const model = read();
      const nextItems = model.items.filter((item) => item.id !== itemId);
      if (nextItems.length === model.items.length) return { ok: false, model };
      model.items = nextItems;
      return write(model);
    }
    function setChecked(itemId, checked) {
      const model = read();
      const item = model.items.find((candidate) => candidate.id === itemId);
      if (!item) return { ok: false, model };
      item.checked = checked === true;
      return write(model);
    }
    function resetChecks() {
      const model = read();
      model.items.forEach((item) => { item.checked = false; });
      return write(model);
    }
    function restoreDefaults() { return write(createDefaultModel()); }

    return { getModel, addItem, updateItem, deleteItem, setChecked, resetChecks, restoreDefaults };
  }

  const store = createStore(window.localStorage);
  window.TRAVEL_CHECKLIST = Object.freeze({
    STORAGE_KEY,
    CATEGORIES,
    DEFAULT_DEFINITIONS,
    createDefaultModel,
    normalizeModel,
    summarize,
    createStore,
    getModel: store.getModel,
    addItem: store.addItem,
    updateItem: store.updateItem,
    deleteItem: store.deleteItem,
    setChecked: store.setChecked,
    resetChecks: store.resetChecks,
    restoreDefaults: store.restoreDefaults
  });
})();
