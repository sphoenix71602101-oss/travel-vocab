(function () {
  "use strict";

  const STORAGE_KEY = "yujianWorld.trips.v1";
  const STATUS_UNKNOWN = "unknown";
  const STATUS_NOT_YET = "not-yet";
  const STATUS_VISITED = "visited";
  const SAVED_STATUSES = new Set([STATUS_NOT_YET, STATUS_VISITED]);

  function normalizeStatuses(input, destinationIds) {
    const validIds = new Set(destinationIds || []);
    const source = input && typeof input === "object" ? input : {};
    return Object.fromEntries(Object.entries(source).filter(([id, status]) => validIds.has(id) && SAVED_STATUSES.has(status)));
  }

  function createStore(storage) {
    function read(destinationIds) {
      try {
        const raw = JSON.parse(storage?.getItem(STORAGE_KEY) || "null");
        return normalizeStatuses(raw?.destinations, destinationIds);
      } catch (error) {
        return {};
      }
    }

    function write(destinations) {
      try {
        storage?.setItem(STORAGE_KEY, JSON.stringify({ destinations }));
        return true;
      } catch (error) {
        return false;
      }
    }

    function getAll(destinationIds) {
      const destinations = read(destinationIds);
      try {
        const raw = JSON.parse(storage?.getItem(STORAGE_KEY) || "null");
        if (raw && JSON.stringify(raw.destinations || {}) !== JSON.stringify(destinations)) write(destinations);
      } catch (error) { /* malformed data is ignored */ }
      return { ...destinations };
    }

    function getStatus(destinationId, destinationIds) {
      return getAll(destinationIds)[destinationId] || STATUS_UNKNOWN;
    }

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
  window.TRAVEL_TRIPS = Object.freeze({
    STORAGE_KEY,
    STATUS_UNKNOWN,
    STATUS_NOT_YET,
    STATUS_VISITED,
    normalizeStatuses,
    createStore,
    getAll: store.getAll,
    getStatus: store.getStatus,
    setStatus: store.setStatus,
    clearStatus: store.clearStatus
  });
})();
