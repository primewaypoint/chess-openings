'use strict';

// Shared streak modal — included by index.html and study.html

function getStreakDataGlobal() {
  try {
    return JSON.parse(localStorage.getItem('streakData') ||
      '{"count":0,"lastDate":null,"completedDates":[]}');
  } catch {
    return { count: 0, lastDate: null, completedDates: [] };
  }
}

// Returns 0 when the streak is broken (last completed line was before yesterday)
function getEffectiveStreak(data) {
  if (!data.lastDate || !data.count) return 0;
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  return (data.lastDate === today || data.lastDate === yesterday) ? data.count : 0;
}

function initStreakModal() {
  const widget  = document.getElementById('streakWidget');
  const overlay = document.getElementById('streakModal');
  if (!widget || !overlay) return;

  widget.addEventListener('click', () => {
    renderStreakModal();
    overlay.classList.add('open');
  });

  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') overlay.classList.remove('open');
  });
}

function renderStreakModal() {
  const data  = getStreakDataGlobal();
  const count = getEffectiveStreak(data);

  const flameEl = document.getElementById('streakModalFlame');
  if (flameEl) flameEl.classList.toggle('zero', count === 0);

  const countEl = document.getElementById('streakModalCount');
  if (countEl) countEl.textContent = count === 1 ? '1 day streak' : `${count} day streak`;

  const msgEl = document.getElementById('streakModalMsg');
  if (msgEl) {
    let msg;
    if      (count === 0)  msg = 'Start a streak by completing a line today!';
    else if (count === 1)  msg = 'Great start! Come back tomorrow.';
    else if (count < 7)    msg = `${count} days in a row — keep it up!`;
    else if (count === 7)  msg = "A full week! You're on fire.";
    else if (count < 30)   msg = `${count} days strong. Incredible!`;
    else                   msg = `${count} days. Absolutely unstoppable.`;
    msgEl.textContent = msg;
  }

  // Reconstruct any missing dates from count+lastDate (handles old data without completedDates)
  const completedDates = new Set(data.completedDates || []);
  if (count > 0 && data.lastDate) {
    const base = new Date(data.lastDate + 'T12:00:00');
    for (let i = 0; i < count; i++) {
      const d = new Date(base.getTime() - i * 86400000);
      completedDates.add(d.toISOString().split('T')[0]);
    }
  }
  renderWeekDots([...completedDates]);
}

function renderWeekDots(completedDates) {
  const container = document.getElementById('streakWeek');
  if (!container) return;

  const today      = new Date();
  const todayStr   = today.toISOString().split('T')[0];
  const dayOfWeek  = today.getDay(); // 0=Sun
  const labels     = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const completed  = new Set(completedDates);

  container.innerHTML = '';

  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - dayOfWeek + i);
    const dateStr  = d.toISOString().split('T')[0];
    const isToday  = dateStr === todayStr;
    const isDone   = completed.has(dateStr);
    const isFuture = dateStr > todayStr;

    const col   = document.createElement('div');
    col.className = 'week-col';

    const label = document.createElement('div');
    label.className = 'week-label' + (isToday ? ' today' : '');
    label.textContent = labels[i];

    const dot = document.createElement('div');
    dot.className = 'week-dot' +
      (isDone             ? ' done'   : '') +
      (isToday && !isDone ? ' today'  : '') +
      (isFuture           ? ' future' : '');

    col.appendChild(label);
    col.appendChild(dot);
    container.appendChild(col);
  }
}

document.addEventListener('DOMContentLoaded', initStreakModal);
