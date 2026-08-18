'use strict';

// Shared LOCAL-date helpers. Streaks, the activity heatmap and the Daily
// Review scheduler must all agree on what day "today" is — using UTC
// (toISOString().split('T')[0]) disagrees with local calendar dates for any
// user not near UTC, especially late evening / early morning. Every date
// computed anywhere in the app should go through these two functions.

function localDateStr(d) {
  const pad = n => String(n).padStart(2, '0');
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
}

function todayStr() {
  return localDateStr(new Date());
}

// n calendar days before `from` (or now), as a local YYYY-MM-DD string.
// Uses date-field arithmetic (setDate), not ms subtraction, so it's DST-safe.
function daysAgoStr(n, from) {
  const d = from ? new Date(from) : new Date();
  d.setDate(d.getDate() - n);
  return localDateStr(d);
}
