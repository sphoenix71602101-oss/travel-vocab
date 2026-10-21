(function () {
  "use strict";

  const STORAGE_KEY = "yujianWorld.favorites.v1";

  function normalizeSearchText(value, locale) {
    return String(value == null ? "" : value)
      .normalize("NFKC")
      .toLocaleLowerCase(locale || "zh-CN")
      .trim()
      .replace(/[\s.,!?，。！？、；;：:'"“”‘’（）()【】\[\]・·…—_\-/\\]+/g, "");
  }

  function entrySearchScore(entry, query, locale) {
    const needle = normalizeSearchText(query, locale);
    if (!needle) return Number.POSITIVE_INFINITY;
    const fields = [entry?.zh, entry?.text, entry?.pronunciation]
      .map((value) => normalizeSearchText(value, locale))
      .filter(Boolean);
    if (fields.some((value) => value === needle)) return 0;
    if (fields.some((value) => value.startsWith(needle))) return 1;
    if (fields.some((value) => value.includes(needle))) return 2;
    return Number.POSITIVE_INFINITY;
  }

  function searchEntries(entries, query, locale) {
    return (entries || [])
      .map((entry, index) => ({ entry, index, score: entrySearchScore(entry, query, locale) }))
      .filter((item) => Number.isFinite(item.score))
      .sort((left, right) => left.score - right.score || left.index - right.index)
      .map((item) => item.entry);
  }

  function createStore(storage) {
    function readEnvelope() {
      try {
        const raw = JSON.parse(storage?.getItem(STORAGE_KEY) || "null");
        return raw && typeof raw === "object" && raw.packs && typeof raw.packs === "object"
          ? { packs: { ...raw.packs } }
          : { packs: {} };
      } catch (error) {
        return { packs: {} };
      }
    }

    function writeEnvelope(envelope) {
      try {
        storage?.setItem(STORAGE_KEY, JSON.stringify(envelope));
        return true;
      } catch (error) {
        return false;
      }
    }

    function sanitizeIds(input, entries) {
      const validIds = new Set((entries || []).map((entry) => entry.id));
      return Array.isArray(input)
        ? Array.from(new Set(input.filter((id) => typeof id === "string" && validIds.has(id))))
        : [];
    }

    function getIds(packId, entries) {
      if (!packId) return [];
      const envelope = readEnvelope();
      const ids = sanitizeIds(envelope.packs[packId], entries);
      if (JSON.stringify(ids) !== JSON.stringify(envelope.packs[packId] || [])) {
        envelope.packs[packId] = ids;
        writeEnvelope(envelope);
      }
      return ids;
    }

    function toggle(packId, entryId, entries) {
      const envelope = readEnvelope();
      const ids = sanitizeIds(envelope.packs[packId], entries);
      const index = ids.indexOf(entryId);
      const favorite = index < 0;
      if (favorite) ids.unshift(entryId);
      else ids.splice(index, 1);
      envelope.packs[packId] = ids;
      writeEnvelope(envelope);
      return { favorite, ids };
    }

    return { getIds, toggle };
  }

  const store = createStore(window.localStorage);
  window.TRAVEL_FAVORITES = Object.freeze({
    STORAGE_KEY,
    normalizeSearchText,
    entrySearchScore,
    searchEntries,
    createStore,
    getIds: store.getIds,
    toggle: store.toggle
  });
})();
