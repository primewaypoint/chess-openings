'use strict';

// Spaced-repetition scheduling for Daily Review (Leitner boxes).
// Pure, side-effect-free logic so it can be unit-tested in Node. The browser
// wrappers read/write localStorage; everything else is plain functions.
//
// Safety net: with an empty or corrupt schedule, every line defaults to
// "box 1, due today", so ordering collapses to random — i.e. it can never
// behave worse than the old random Daily Review.

(function (global) {

  // days until a line is due again, per box (1 = struggling, 5 = mastered)
  var INTERVALS = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 15 };
  var STORAGE_KEY = 'reviewSchedule';

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  // local-date string YYYY-MM-DD (optionally for a given Date)
  function todayStr(date) {
    var d = date || new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }

  function addDays(dateStr, n) {
    var parts = String(dateStr).split('-');
    var d = new Date(+parts[0], +parts[1] - 1, +parts[2]);
    d.setDate(d.getDate() + n);
    return todayStr(d);
  }

  function lineKey(openingId, lineId) {
    return openingId + '::' + lineId;
  }

  // Order a pool of { key, ... } items for review:
  //   earliest due date first (most overdue → today → soonest upcoming),
  //   then lowest box (struggling lines), then random for variety.
  function orderForReview(pool, schedule, today) {
    schedule = schedule || {};
    return pool
      .map(function (item) {
        var e = schedule[item.key] || { box: 1, due: today };
        return { item: item, due: e.due || today, box: e.box || 1, r: Math.random() };
      })
      .sort(function (a, b) {
        return a.due.localeCompare(b.due) || (a.box - b.box) || (a.r - b.r);
      })
      .map(function (x) { return x.item; });
  }

  function selectDueLines(pool, schedule, today, size) {
    return orderForReview(pool, schedule, today).slice(0, size);
  }

  // Returns a NEW schedule object with the result applied.
  function recordReviewResult(schedule, key, clean, today) {
    var next = {};
    for (var k in schedule) if (Object.prototype.hasOwnProperty.call(schedule, k)) next[k] = schedule[k];
    var cur = next[key] || { box: 1 };
    var box = clean ? Math.min((cur.box || 1) + 1, 5) : 1;
    next[key] = { box: box, due: addDays(today, INTERVALS[box]) };
    return next;
  }

  // ── browser localStorage wrappers ────────────────────────────────
  function getReviewSchedule() {
    try {
      var raw = global.localStorage.getItem(STORAGE_KEY);
      var obj = raw ? JSON.parse(raw) : {};
      return (obj && typeof obj === 'object') ? obj : {};
    } catch (e) { return {}; }
  }

  function saveReviewSchedule(schedule) {
    try { global.localStorage.setItem(STORAGE_KEY, JSON.stringify(schedule)); }
    catch (e) { /* ignore quota / private-mode errors */ }
  }

  var API = {
    INTERVALS: INTERVALS,
    STORAGE_KEY: STORAGE_KEY,
    todayStr: todayStr,
    addDays: addDays,
    lineKey: lineKey,
    orderForReview: orderForReview,
    selectDueLines: selectDueLines,
    recordReviewResult: recordReviewResult,
    getReviewSchedule: getReviewSchedule,
    saveReviewSchedule: saveReviewSchedule
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  global.ReviewSchedule = API;

})(typeof window !== 'undefined' ? window : globalThis);
