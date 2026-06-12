'use strict';

// Training statistics — localStorage-backed, shared by study, review and stats pages
const Stats = (function () {

  function today() { return new Date().toISOString().split('T')[0]; }

  function load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch { return fallback; }
  }

  function save(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

  // Keep only the most recent N dates so storage never grows unbounded
  function trim(obj, max) {
    const keys = Object.keys(obj).sort();
    while (keys.length > max) delete obj[keys.shift()];
    return obj;
  }

  // Practice move attempts per day: { "2026-06-12": { c: 12, w: 3 } }
  function recordMove(correct) {
    const acc = load('stats_accuracy', {});
    const d = today();
    if (!acc[d]) acc[d] = { c: 0, w: 0 };
    if (correct) acc[d].c++; else acc[d].w++;
    save('stats_accuracy', trim(acc, 370));
  }

  // Lines completed per day { "2026-06-12": 4 } + per-opening totals
  function recordLine(openingId) {
    const act = load('stats_activity', {});
    const d = today();
    act[d] = (act[d] || 0) + 1;
    save('stats_activity', trim(act, 370));

    const per = load('stats_openings', {});
    per[openingId] = (per[openingId] || 0) + 1;
    save('stats_openings', per);
  }

  return {
    recordMove,
    recordLine,
    accuracy:   () => load('stats_accuracy', {}),
    activity:   () => load('stats_activity', {}),
    perOpening: () => load('stats_openings', {})
  };
})();
