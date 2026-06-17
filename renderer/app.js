// Main page logic

(function () {
  'use strict';

  // ── Side mapping (shared with review mode — see sides.js) ───────
  const SIDE = OPENING_SIDES;

  // ── Theme ────────────────────────────────────────────────────────
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') document.body.classList.add('light');
  syncThemeIcon();

  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    syncThemeIcon();
    renderGrid();
  });

  function syncThemeIcon() {
    const light = document.body.classList.contains('light');
    document.getElementById('iconMoon').style.display = light ? 'none' : '';
    document.getElementById('iconSun').style.display  = light ? ''     : 'none';
  }

  // ── Streak ───────────────────────────────────────────────────────
  function getStreakData() {
    try { return JSON.parse(localStorage.getItem('streakData') || '{"count":0,"lastDate":null}'); }
    catch { return { count: 0, lastDate: null }; }
  }

  function renderStreak() {
    const count = getEffectiveStreak(getStreakData());
    const el = document.getElementById('streakCount');
    const widget = document.getElementById('streakWidget');
    if (el) el.textContent = count;
    if (widget) widget.classList.toggle('zero', count === 0);
  }

  renderStreak();

  // ── Filter state ─────────────────────────────────────────────────
  let activeDifficulty = 'all';
  let activeSide = 'both';
  let favoritesOnly = false;
  let searchQuery = '';

  // ── Favorites ────────────────────────────────────────────────────
  function getFavorites() {
    try { return new Set(JSON.parse(localStorage.getItem('favorites') || '[]')); }
    catch { return new Set(); }
  }

  function toggleFavorite(id) {
    const favs = getFavorites();
    if (favs.has(id)) favs.delete(id); else favs.add(id);
    localStorage.setItem('favorites', JSON.stringify([...favs]));
  }

  // ── Dropdown logic ───────────────────────────────────────────────
  const filtersBtn = document.getElementById('filtersBtn');
  const filtersDropdown = document.getElementById('filtersDropdown');

  filtersBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    filtersDropdown.classList.toggle('open');
    filtersBtn.classList.toggle('active', filtersDropdown.classList.contains('open'));
  });

  document.addEventListener('click', () => {
    filtersDropdown.classList.remove('open');
    filtersBtn.classList.remove('active');
  });

  filtersDropdown.addEventListener('click', e => e.stopPropagation());

  // Filter option clicks
  filtersDropdown.querySelectorAll('.filter-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const type  = opt.dataset.type;
      const value = opt.dataset.value;

      // Deselect siblings
      opt.closest('div[id]').querySelectorAll('.filter-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');

      if (type === 'difficulty') activeDifficulty = value;
      if (type === 'side') activeSide = value;
      if (type === 'show') favoritesOnly = value === 'favorites';

      updateFilterBadge();
      updateActiveChips();
      renderGrid();
    });
  });

  function updateFilterBadge() {
    const count = (activeDifficulty !== 'all' ? 1 : 0) + (activeSide !== 'both' ? 1 : 0) + (favoritesOnly ? 1 : 0);
    const badge = document.getElementById('filtersBadge');
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);
  }

  function updateActiveChips() {
    const container = document.getElementById('activeFilters');
    container.innerHTML = '';

    if (activeDifficulty !== 'all') {
      container.appendChild(makeChip(
        activeDifficulty.charAt(0).toUpperCase() + activeDifficulty.slice(1),
        () => { resetFilter('difficulty'); }
      ));
    }
    if (activeSide !== 'both') {
      container.appendChild(makeChip(
        activeSide === 'white' ? 'White pieces' : 'Black pieces',
        () => { resetFilter('side'); }
      ));
    }
    if (favoritesOnly) {
      container.appendChild(makeChip('Favorites', () => { resetFilter('show'); }));
    }
  }

  function makeChip(label, onRemove) {
    const chip = document.createElement('div');
    chip.className = 'active-chip';
    chip.innerHTML = `${label}<button>×</button>`;
    chip.querySelector('button').addEventListener('click', onRemove);
    return chip;
  }

  function resetFilter(type) {
    if (type === 'difficulty') {
      activeDifficulty = 'all';
      document.querySelectorAll('[data-type="difficulty"]').forEach(o => o.classList.remove('selected'));
      document.querySelector('[data-type="difficulty"][data-value="all"]').classList.add('selected');
    }
    if (type === 'side') {
      activeSide = 'both';
      document.querySelectorAll('[data-type="side"]').forEach(o => o.classList.remove('selected'));
      document.querySelector('[data-type="side"][data-value="both"]').classList.add('selected');
    }
    if (type === 'show') {
      favoritesOnly = false;
      document.querySelectorAll('[data-type="show"]').forEach(o => o.classList.remove('selected'));
      document.querySelector('[data-type="show"][data-value="all"]')?.classList.add('selected');
    }
    updateFilterBadge();
    updateActiveChips();
    renderGrid();
  }

  // ── Search (debounced so the grid isn't rebuilt on every keystroke) ──
  let searchTimer;
  document.getElementById('searchInput').addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderGrid();
    }, 120);
  });

  // ── Helpers ──────────────────────────────────────────────────────
  function getCompleted() {
    try { return new Set(JSON.parse(localStorage.getItem('completed') || '[]')); }
    catch { return new Set(); }
  }

  function getCompletedLines(openingId) {
    try { return new Set(JSON.parse(localStorage.getItem('completedLines_' + openingId) || '[]')); }
    catch { return new Set(); }
  }

  // Thumbnail FENs are computed once and cached
  const fenCache = {};
  function thumbFen(opening) {
    if (!(opening.id in fenCache)) {
      fenCache[opening.id] = positionFromMoves(opening.lines?.[0]?.moves || []);
    }
    return fenCache[opening.id];
  }

  function positionFromMoves(moves) {
    try {
      const game = new Chess();
      moves.forEach(m => game.move(m));
      return game.fen();
    } catch { return 'start'; }
  }

  // ── Daily Review banner ──────────────────────────────────────────
  function reviewPoolSize() {
    let n = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith('completedLines_')) continue;
      try { n += JSON.parse(localStorage.getItem(key) || '[]').length; } catch {}
    }
    return n;
  }

  function renderReviewBanner() {
    const el = document.getElementById('reviewBanner');
    if (!el) return;
    const pool = reviewPoolSize();
    if (pool === 0) { el.style.display = 'none'; return; }

    const today = new Date().toISOString().split('T')[0];
    // Dismissed banners stay hidden for the rest of the day only
    if (localStorage.getItem('reviewBannerHidden') === today) {
      el.style.display = 'none';
      return;
    }

    const doneToday = localStorage.getItem('dailyReviewDate') === today;
    el.style.display = '';
    el.classList.toggle('done', doneToday);
    el.innerHTML = `
      <div class="review-banner-left">
        <div class="review-banner-icon">
          <svg viewBox="0 0 18 18" fill="none">
            <rect x="2" y="4.5" width="10" height="11" rx="1.6" stroke="currentColor" stroke-width="1.4"/>
            <path d="M5.5 2.5h9A1.5 1.5 0 0116 4v9.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
            <path d="M4.8 10l1.7 1.7 2.9-3.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div>
          <div class="review-banner-title">Daily Review</div>
          <div class="review-banner-sub">${doneToday
            ? 'Done for today — come back tomorrow or review again'
            : "Test your memory on lines you've already learned"}</div>
        </div>
      </div>
      <div class="review-banner-right">
        <button class="review-banner-btn">${doneToday ? '✓ Review again' : 'Start review →'}</button>
        <button class="review-banner-close" title="Hide for today">×</button>
      </div>`;

    el.querySelector('.review-banner-btn').addEventListener('click', () => {
      window.location.href = 'review.html';
    });

    el.querySelector('.review-banner-close').addEventListener('click', () => {
      localStorage.setItem('reviewBannerHidden', today);
      el.style.display = 'none';
    });
  }

  renderReviewBanner();

  // ── Render grid ──────────────────────────────────────────────────
  // Thumbnails are only built when the card scrolls into view —
  // rendering 265 boards at once would create ~17k DOM nodes.
  let thumbObserver = null;

  function renderGrid() {
    const grid = document.getElementById('openingsGrid');
    const completed = getCompleted();
    const favorites = getFavorites();

    const filtered = OPENINGS.filter(o => {
      const matchDiff = activeDifficulty === 'all' || o.difficulty === activeDifficulty;
      const openingSide = SIDE[o.id] || 'both';
      const matchSide = activeSide === 'both' || openingSide === activeSide || openingSide === 'both';
      const matchFav = !favoritesOnly || favorites.has(o.id);
      const matchSearch = !searchQuery ||
        o.name.toLowerCase().includes(searchQuery) ||
        o.description.toLowerCase().includes(searchQuery) ||
        (o.eco && o.eco.toLowerCase().includes(searchQuery));
      return matchDiff && matchSide && matchFav && matchSearch;
    });

    grid.innerHTML = '';

    if (thumbObserver) thumbObserver.disconnect();
    thumbObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        thumbObserver.unobserve(entry.target);
        const opening = OPENINGS.find(o => o.id === entry.target.dataset.openingId);
        if (!opening) return;
        Chessboard(entry.target.id, {
          position: thumbFen(opening),
          pieceTheme: '../assets/pieces/{piece}.png',
          showNotation: false,
          orientation: (SIDE[opening.id] || 'both') === 'black' ? 'black' : 'white'
        });
      });
    }, { rootMargin: '300px' });

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="empty-state">No openings match your filters.</div>';
      return;
    }

    filtered.forEach((opening, cardIdx) => {
      const boardId = 'thumb-' + opening.id;
      // Progress is measured against essential lines only — "deeper" lines are
      // optional bonus and never lower the percentage or block 100%.
      const essentials = essentialLines(opening);
      const totalLines = essentials.length || 1;
      const completedLines = getCompletedLines(opening.id);
      const essentialIds = new Set(essentials.map((l, i) => l.id || i));
      const completedEssential = [...completedLines].filter(id => essentialIds.has(id)).length;
      const progressPct = Math.min(100, Math.round((completedEssential / totalLines) * 100));
      const isDone = completed.has(opening.id);
      const isFav = favorites.has(opening.id);

      const card = document.createElement('div');
      card.className = 'opening-card';
      // Staggered entrance, capped so deep cards don't wait
      card.style.animationDelay = Math.min(cardIdx, 12) * 28 + 'ms';
      card.innerHTML = `
        <button class="fav-btn${isFav ? ' active' : ''}" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
          <svg viewBox="0 0 24 24"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9z"/></svg>
        </button>
        <div class="card-board" id="${boardId}"></div>
        <div class="card-content">
          <div class="card-name">${opening.name}</div>
          <div class="card-desc">${opening.description}</div>
          <div class="card-footer">
            <span class="badge badge-${opening.difficulty}">${opening.difficulty}</span>
            <span style="font-size:11.5px;color:var(--text-muted)">${totalLines} line${totalLines !== 1 ? 's' : ''}</span>
          </div>
          <div class="card-progress-bar">
            <div class="card-progress-fill ${opening.difficulty}" style="width:${progressPct}%"></div>
          </div>
          <div class="card-play-link">
            ${isDone ? '✓ Completed' : '→ Start training'}
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        const side = SIDE[opening.id] || 'both';
        window.location.href = `study.html?id=${opening.id}&side=${side}`;
      });

      card.querySelector('.fav-btn').addEventListener('click', e => {
        e.stopPropagation();
        toggleFavorite(opening.id);
        const nowFav = getFavorites().has(opening.id);
        e.currentTarget.classList.toggle('active', nowFav);
        e.currentTarget.title = nowFav ? 'Remove from favorites' : 'Add to favorites';
        if (favoritesOnly && !nowFav) renderGrid();
      });

      grid.appendChild(card);

      const boardEl = card.querySelector('.card-board');
      boardEl.dataset.openingId = opening.id;
      thumbObserver.observe(boardEl);
    });
  }

  renderGrid();

})();
