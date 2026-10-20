(function () {
  "use strict";
  const DAY = 86400000;
  const integer = (value, fallback = 0) => Number.isSafeInteger(value) && value >= 0 ? value : fallback;
  function normalize(record, now) {
    const schedule = record?.reviewSchedule;
    if (schedule?.version === 1 && Number.isSafeInteger(schedule.dueAt) && schedule.dueAt >= 0) {
      return { version: 1, dueAt: schedule.dueAt, intervalDays: Math.max(1, Math.min(90, integer(schedule.intervalDays, 1))), streak: integer(schedule.streak) };
    }
    const lastSeen = integer(record?.lastSeen);
    return { version: 1, dueAt: lastSeen ? lastSeen + DAY : now, intervalDays: 1, streak: 0 };
  }
  function first(now) { return { version: 1, dueAt: now + DAY, intervalDays: 1, streak: 0 }; }
  // Counters already include the current review answer. Early correct practice never postpones a due date.
  function answer(record, correct, now) {
    const previous = normalize(record, now);
    if (!correct) return first(now);
    if (previous.dueAt > now) return previous;
    const streak = previous.streak + 1;
    const accuracy = Math.min(1, integer(record.reviewCorrect) / Math.max(1, integer(record.reviewAttempts)));
    const multiplier = Math.min(3, 1.5 + accuracy + 0.1 * Math.min(streak, 5));
    const overdue = Math.min((now - previous.dueAt) / DAY, previous.intervalDays * 0.25);
    const intervalDays = Math.max(1, Math.min(90, Math.ceil((previous.intervalDays + overdue) * multiplier)));
    return { version: 1, dueAt: now + intervalDays * DAY, intervalDays, streak };
  }
  function dueEntries(entries, learning, now) {
    const weak = new Set(learning.weakIds || []);
    return entries.filter((entry) => learning.byId[entry.id]?.status === "mastered" && normalize(learning.byId[entry.id], now).dueAt <= now)
      .sort((a, b) => normalize(learning.byId[a.id], now).dueAt - normalize(learning.byId[b.id], now).dueAt || Number(weak.has(b.id)) - Number(weak.has(a.id)));
  }
  window.TRAVEL_REVIEW = Object.freeze({ DAY, normalize, first, answer, dueEntries });
})();
