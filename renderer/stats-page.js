'use strict';

// Statistics page
(function () {

  // ── Theme ────────────────────────────────────────────────────────
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') document.body.classList.add('light');
  syncThemeIcon();

  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    syncThemeIcon();
  });

  function syncThemeIcon() {
    const light = document.body.classList.contains('light');
    document.getElementById('iconMoon').style.display = light ? 'none' : '';
    document.getElementById('iconSun').style.display  = light ? ''     : 'none';
  }

  // ── Data ─────────────────────────────────────────────────────────
  const activity = Stats.activity();
  const accuracy = Stats.accuracy();
  const perOpening = Stats.perOpening();

  function getCompleted() {
    try { return new Set(JSON.parse(localStorage.getItem('completed') || '[]')); }
    catch { return new Set(); }
  }

  // ── Hero cards ───────────────────────────────────────────────────
  document.getElementById('statStreak').textContent =
    getEffectiveStreak(getStreakDataGlobal());

  const totalLines = Object.values(activity).reduce((a, b) => a + b, 0);
  document.getElementById('statLines').textContent = totalLines;

  let c = 0, w = 0;
  Object.values(accuracy).forEach(d => { c += d.c || 0; w += d.w || 0; });
  document.getElementById('statAccuracy').textContent =
    (c + w) > 0 ? Math.round((c / (c + w)) * 100) + '%' : '—';

  const completed = getCompleted();
  document.getElementById('statMastered').textContent =
    `${completed.size}/${OPENINGS.length}`;

  // ── Heatmap (GitHub style: columns = weeks, rows = Sun–Sat) ──────
  function renderHeatmap() {
    const container = document.getElementById('heatmap');
    const monthsEl = document.getElementById('heatmapMonths');
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    // Fit as many full weeks as the card width allows (17px per column)
    const wrap = document.querySelector('.heatmap-wrap');
    const labels = document.querySelector('.heatmap-daylabels');
    const avail = (wrap ? wrap.clientWidth : 600) - (labels ? labels.offsetWidth : 26) - 14;
    const WEEKS = Math.max(16, Math.min(52, Math.floor(avail / 17)));
    document.getElementById('activityTitle').textContent =
      `Activity — last ${WEEKS} weeks`;

    // Start on the Sunday WEEKS-1 weeks back
    const start = new Date(today);
    start.setDate(today.getDate() - today.getDay() - (WEEKS - 1) * 7);

    function level(n) {
      if (!n) return 0;
      if (n === 1) return 1;
      if (n <= 3) return 2;
      if (n <= 6) return 3;
      return 4;
    }

    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Month of each week's first day, so partial first months can be skipped
    const weekMonth = [];
    for (let week = 0; week < WEEKS; week++) {
      const d = new Date(start);
      d.setDate(start.getDate() + week * 7);
      weekMonth.push(d.getMonth());
    }

    let cellIdx = 0;
    for (let week = 0; week < WEEKS; week++) {
      // Month label above the first column of each new month — skipped for
      // partial months at either edge so labels never overlap or overflow
      const label = document.createElement('span');
      const isNewMonth = week === 0 || weekMonth[week] !== weekMonth[week - 1];
      const tooShortStart = week === 0 && WEEKS > 1 && weekMonth[1] !== weekMonth[0];
      const tooCloseToEnd = week >= WEEKS - 2;
      if (isNewMonth && !tooShortStart && !tooCloseToEnd)
        label.textContent = MONTHS[weekMonth[week]];
      monthsEl.appendChild(label);

      const col = document.createElement('div');
      col.className = 'heatmap-col';
      for (let day = 0; day < 7; day++) {
        const d = new Date(start);
        d.setDate(start.getDate() + week * 7 + day);
        const dateStr = d.toISOString().split('T')[0];
        const cell = document.createElement('div');

        if (dateStr > todayStr) {
          cell.className = 'heat-cell future';
        } else {
          const n = activity[dateStr] || 0;
          cell.className = 'heat-cell l' + level(n);
          cell.title = `${dateStr} — ${n} line${n !== 1 ? 's' : ''}`;
          if (dateStr === todayStr) cell.classList.add('today');
          // Subtle wave-in so the grid feels alive on load
          cell.style.animationDelay = Math.min(cellIdx * 4, 500) + 'ms';
        }
        col.appendChild(cell);
        cellIdx++;
      }
      container.appendChild(col);
    }
  }
  renderHeatmap();

  // ── Most trained openings ────────────────────────────────────────
  function renderTopOpenings() {
    const entries = Object.entries(perOpening)
      .map(([id, count]) => ({ opening: OPENINGS.find(o => o.id === id), count }))
      .filter(e => e.opening)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
    if (entries.length === 0) return;

    const box = document.getElementById('topOpenings');
    box.innerHTML = '';
    const max = entries[0].count;

    entries.forEach(({ opening, count }, idx) => {
      const row = document.createElement('a');
      row.className = 'top-opening-row';
      row.href = `study.html?id=${opening.id}&side=${OPENING_SIDES[opening.id] || 'both'}`;
      row.innerHTML = `
        <span class="top-opening-rank">${idx + 1}</span>
        <span class="top-opening-name">${opening.name}</span>
        <span class="top-opening-count">${count} line${count !== 1 ? 's' : ''}</span>
        <span class="top-opening-bar"><span class="top-opening-fill ${opening.difficulty}" style="width:${Math.round((count / max) * 100)}%"></span></span>`;
      box.appendChild(row);
    });
  }
  renderTopOpenings();

  // ── Progress by difficulty ───────────────────────────────────────
  function renderDifficultyProgress() {
    const box = document.getElementById('difficultyProgress');
    const order = ['beginner', 'intermediate', 'advanced', 'fun'];

    order.forEach(diff => {
      const all = OPENINGS.filter(o => o.difficulty === diff);
      const done = all.filter(o => completed.has(o.id)).length;
      const pct = all.length ? Math.round((done / all.length) * 100) : 0;

      const row = document.createElement('div');
      row.className = 'diff-progress-row';
      row.innerHTML = `
        <div class="diff-progress-top">
          <span class="badge badge-${diff}">${diff}</span>
          <span class="diff-progress-count">${done}/${all.length}</span>
        </div>
        <div class="diff-progress-bar"><div class="diff-progress-fill ${diff}" style="width:${pct}%"></div></div>`;
      box.appendChild(row);
    });
  }
  renderDifficultyProgress();

})();
