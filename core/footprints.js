(function () {
  "use strict";

  const STORAGE_KEY = "yujianWorld.footprints.v2";
  const LEGACY_STORAGE_KEY = "yujianWorld.trips.v1";
  const STATUS_UNKNOWN = "unknown";
  const STATUS_VISITED = "visited";
  const STATUS_WISHLIST = "wishlist";
  const SAVED_STATUSES = new Set([STATUS_VISITED, STATUS_WISHLIST]);

  function normalizeStatuses(input, destinationIds) {
    const validIds = new Set(destinationIds || []);
    const source = input && typeof input === "object" ? input : {};
    return Object.fromEntries(Object.entries(source).filter(([id, status]) => validIds.has(id) && SAVED_STATUSES.has(status)));
  }

  function migrateLegacyStatuses(input, destinationIds) {
    const validIds = new Set(destinationIds || []);
    const source = input && typeof input === "object" ? input : {};
    return Object.fromEntries(Object.entries(source).filter(([id, status]) => validIds.has(id) && status === STATUS_VISITED));
  }

  function createStore(storage) {
    function write(destinations) {
      try {
        storage?.setItem(STORAGE_KEY, JSON.stringify({ destinations }));
        return true;
      } catch (error) {
        return false;
      }
    }

    function read(destinationIds) {
      try {
        const current = storage?.getItem(STORAGE_KEY);
        if (current != null) {
          const raw = JSON.parse(current);
          const destinations = normalizeStatuses(raw?.destinations, destinationIds);
          if (JSON.stringify(raw?.destinations || {}) !== JSON.stringify(destinations)) write(destinations);
          return destinations;
        }

        const legacy = storage?.getItem(LEGACY_STORAGE_KEY);
        if (legacy == null) return {};
        const destinations = migrateLegacyStatuses(JSON.parse(legacy)?.destinations, destinationIds);
        write(destinations);
        return destinations;
      } catch (error) {
        return {};
      }
    }

    function getAll(destinationIds) { return { ...read(destinationIds) }; }
    function getStatus(destinationId, destinationIds) { return getAll(destinationIds)[destinationId] || STATUS_UNKNOWN; }
    function setStatus(destinationId, status, destinationIds) {
      const validIds = new Set(destinationIds || []);
      if (!validIds.has(destinationId) || !SAVED_STATUSES.has(status)) return false;
      const destinations = read(destinationIds);
      destinations[destinationId] = status;
      return write(destinations);
    }
    function clearStatus(destinationId, destinationIds) {
      const destinations = read(destinationIds);
      delete destinations[destinationId];
      return write(destinations);
    }

    return { getAll, getStatus, setStatus, clearStatus };
  }

  const store = createStore(window.localStorage);
  window.TRAVEL_FOOTPRINTS = Object.freeze({
    STORAGE_KEY,
    LEGACY_STORAGE_KEY,
    STATUS_UNKNOWN,
    STATUS_VISITED,
    STATUS_WISHLIST,
    normalizeStatuses,
    migrateLegacyStatuses,
    createStore,
    getAll: store.getAll,
    getStatus: store.getStatus,
    setStatus: store.setStatus,
    clearStatus: store.clearStatus
  });
})();
