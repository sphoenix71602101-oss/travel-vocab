(function () {
  "use strict";
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

  window.TRAVEL_SEARCH = Object.freeze({ normalizeSearchText, entrySearchScore, searchEntries });
})();
