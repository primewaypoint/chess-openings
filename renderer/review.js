'use strict';

// Daily Review — quiz over lines the user has already completed
const Review = (function () {

  const SESSION_SIZE = 5;

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

  document.getElementById('backBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  // ── Streak display ───────────────────────────────────────────────
  function renderStreakDisplay() {
    const count = getEffectiveStreak(getStreakDataGlobal());
    const el = document.getElementById('streakCount');
    const widget = document.getElementById('streakWidget');
    if (el) el.textContent = count;
    if (widget) widget.classList.toggle('zero', count === 0);
  }
  renderStreakDisplay();

  // ── Build session from completed lines ───────────────────────────
  function buildPool() {
    const pool = [];
    OPENINGS.forEach(opening => {
      if (!opening.lines) return;
      let done;
      try { done = new Set(JSON.parse(localStorage.getItem('completedLines_' + opening.id) || '[]')); }
      catch { done = new Set(); }
      opening.lines.forEach((line, idx) => {
        const lid = line.id || idx;
        if (done.has(lid)) pool.push({
          opening,
          lineIdx: idx,
          key: window.ReviewSchedule ? ReviewSchedule.lineKey(opening.id, lid) : null
        });
      });
    });
    return pool;
  }

  const pool = buildPool();
  if (pool.length === 0) {
    document.querySelector('.study-layout').style.display = 'none';
    document.getElementById('reviewEmpty').style.display = '';
    return {};
  }

  // Pick the session. With the spaced-repetition module, prioritise the lines
  // most due for review (struggling / overdue first). If that module is somehow
  // unavailable, fall back to the old random pick — so it can never be worse.
  let session;
  if (window.ReviewSchedule) {
    const today = ReviewSchedule.todayStr();
    const schedule = ReviewSchedule.getReviewSchedule();
    session = ReviewSchedule.selectDueLines(pool, schedule, today, SESSION_SIZE);
  } else {
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    session = pool.slice(0, SESSION_SIZE);
  }

  // Record a line's review result into the spaced-repetition schedule.
  function recordScheduleResult(key, clean) {
    if (!window.ReviewSchedule || !key) return;
    const today = ReviewSchedule.todayStr();
    const sched = ReviewSchedule.getReviewSchedule();
    ReviewSchedule.saveReviewSchedule(
      ReviewSchedule.recordReviewResult(sched, key, clean, today)
    );
  }

  // ── State ────────────────────────────────────────────────────────
  let qIdx = 0;           // which line of the session
  let practiceIdx = 0;    // move index in the current line
  let board = null;
  let game = new Chess();
  let mistakes = 0;
  let correctMoves = 0;
  let autoPlayTimer = null;
  let finished = false;
  const lineResults = []; // 'clean' | 'mistake' | 'skipped'
  let lineHadMistake = false;

  function current()     { return session[qIdx]; }
  function currentLine() { return current().opening.lines[current().lineIdx]; }
  function currentSide() { return OPENING_SIDES[current().opening.id] || 'both'; }

  // ── Board ────────────────────────────────────────────────────────
  function rebuildBoard() {
    $('#studyBoard').empty();
    board = Chessboard('studyBoard', {
      position: game.fen(),
      pieceTheme: '../assets/pieces/{piece}.png',
      showNotation: true,
      orientation: currentSide() === 'black' ? 'black' : 'white',
      moveSpeed: 180,
      snapSpeed: 80,
      snapbackSpeed: 180,
      appearSpeed: 150,
      draggable: true,
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: () => setBoardPosition(true)
    });
    highlightLastMove();
    clearSelection();
  }

  function setBoardPosition(animate) {
    if (board) board.position(game.fen(), animate === true);
    highlightLastMove();
  }

  function highlightLastMove() {
    document.querySelectorAll('#studyBoard .square-lastmove')
      .forEach(el => el.classList.remove('square-lastmove'));
    const history = game.history({ verbose: true });
    const last = history[history.length - 1];
    if (!last) return;
    [last.from, last.to].forEach(sq => {
      const el = document.querySelector(`#studyBoard .square-${sq}`);
      if (el) el.classList.add('square-lastmove');
    });
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(rebuildBoard, 120);
  });

  // ── Turn logic (same rules as Practice mode) ─────────────────────
  function isUserTurn() {
    const side = currentSide();
    if (side === 'both') return true;
    if (side === 'white') return practiceIdx % 2 === 0;
    return practiceIdx % 2 === 1;
  }

  function cancelAutoPlay() {
    clearTimeout(autoPlayTimer);
    autoPlayTimer = null;
  }

  function autoPlayOpponentMove() {
    const side = currentSide();
    if (side === 'both') return;
    const line = currentLine();
    if (!line || practiceIdx >= line.moves.length) return;
    const shouldAuto =
      (side === 'white' && practiceIdx % 2 === 1) ||
      (side === 'black' && practiceIdx % 2 === 0);
    if (!shouldAuto) return;

    cancelAutoPlay();
    const scheduledIdx = practiceIdx;
    const scheduledQ = qIdx;
    autoPlayTimer = setTimeout(() => {
      autoPlayTimer = null;
      if (finished || qIdx !== scheduledQ || practiceIdx !== scheduledIdx) return;
      clearSelection();
      const move = game.move(line.moves[practiceIdx]);
      if (!move) return;
      practiceIdx++;
      setBoardPosition(true);
      if (move.captured) SoundFX.capture(); else SoundFX.move();
      flashSquare(move.to, 'opponent');
      updateStatus();
      updateProgress();
      checkLineDone();
    }, 450);
  }

  // ── Moves ────────────────────────────────────────────────────────
  function onDragStart(source, piece) {
    if (finished) return false;
    if (!isUserTurn()) return false;
    if (piece.charAt(0) !== game.turn()) return false;
    const line = currentLine();
    if (!line || practiceIdx >= line.moves.length) return false;
  }

  function onDrop(source, target) {
    if (source === target) {
      if (selectedSquare === source) clearSelection();
      else selectSquare(source);
      return 'snapback';
    }
    return tryUserMove(source, target, false);
  }

  function tryUserMove(source, target, viaClick) {
    clearSelection();
    if (finished) return 'snapback';
    if (!isUserTurn()) return 'snapback';

    const line = currentLine();
    if (!line || practiceIdx >= line.moves.length) return 'snapback';

    const expected = line.moves[practiceIdx];
    const temp = new Chess(game.fen());
    const moved = temp.move({ from: source, to: target, promotion: 'q' });
    if (!moved) return 'snapback';

    if (moved.san === expected) {
      const played = game.move({ from: source, to: target, promotion: 'q' });
      Stats.recordMove(true);
      correctMoves++;
      if (viaClick) setBoardPosition(true);
      if (played.captured) SoundFX.capture(); else SoundFX.move();
      flashSquare(target, 'correct');
      practiceIdx++;
      highlightLastMove();
      setTimeout(() => {
        if (finished) return;
        setBoardPosition(true);
        updateStatus();
        updateProgress();
        if (!checkLineDone()) autoPlayOpponentMove();
      }, 280);
      return;
    } else {
      Stats.recordMove(false);
      mistakes++;
      lineHadMistake = true;
      renderMistakes();
      SoundFX.wrong();
      flashSquare(target, 'wrong');
      const status = document.getElementById('practiceStatus');
      status.textContent = 'Wrong move — try again';
      status.className = 'practice-status wrong';
      setTimeout(() => { if (!finished) updateStatus(); }, 1200);
      return 'snapback';
    }
  }

  // ── Click-to-move ────────────────────────────────────────────────
  let selectedSquare = null;

  function clearSelection() {
    selectedSquare = null;
    document.querySelectorAll('#studyBoard .square-selected, #studyBoard .square-dest, #studyBoard .square-dest-capture')
      .forEach(el => el.classList.remove('square-selected', 'square-dest', 'square-dest-capture'));
  }

  function selectSquare(sq) {
    clearSelection();
    selectedSquare = sq;
    document.querySelector(`#studyBoard .square-${sq}`)?.classList.add('square-selected');
    game.moves({ square: sq, verbose: true }).forEach(m => {
      const el = document.querySelector(`#studyBoard .square-${m.to}`);
      if (el) el.classList.add(m.captured ? 'square-dest-capture' : 'square-dest');
    });
  }

  document.getElementById('studyBoard').addEventListener('click', e => {
    if (finished) return;
    const sqEl = e.target.closest('[class*="square-"]');
    if (!sqEl) return;
    const match = sqEl.className.match(/square-([a-h][1-8])/);
    if (!match) return;
    const sq = match[1];
    const piece = game.get(sq);
    if (piece && piece.color === game.turn() && isUserTurn()) return;
    if (!selectedSquare) return;
    const from = selectedSquare;
    clearSelection();
    tryUserMove(from, sq, true);
  });

  function flashSquare(square, type) {
    const el = document.querySelector(`.square-${square}`);
    if (!el) return;
    const cls = type === 'correct' ? 'flash-correct' : type === 'opponent' ? 'flash-opponent' : 'flash-wrong';
    el.classList.add(cls);
    setTimeout(() => el.classList.remove('flash-correct', 'flash-wrong', 'flash-opponent'), 600);
  }

  function showHint() {
    const line = currentLine();
    if (finished || !line || practiceIdx >= line.moves.length) return;
    const temp = new Chess(game.fen());
    const move = temp.move(line.moves[practiceIdx]);
    if (!move) return;
    const el = document.querySelector(`.square-${move.from}`);
    if (el) {
      el.style.background = 'rgba(200, 180, 40, 0.4)';
      setTimeout(() => { el.style.background = ''; }, 1500);
    }
  }

  // ── Session flow ─────────────────────────────────────────────────
  function loadCurrent() {
    cancelAutoPlay();
    practiceIdx = 0;
    lineHadMistake = false;
    game = new Chess();

    const { opening } = current();
    const line = currentLine();
    document.getElementById('panelTitle').textContent = opening.name;
    document.getElementById('panelBadge').innerHTML =
      `<span class="badge badge-${opening.difficulty}">${opening.difficulty}</span>`;
    document.getElementById('panelLine').textContent = line.name || `Line ${current().lineIdx + 1}`;

    renderSessionDots();
    rebuildBoard();
    updateStatus();
    updateProgress();
    autoPlayOpponentMove();
  }

  function renderSessionDots() {
    const box = document.getElementById('reviewSession');
    box.innerHTML = '';
    session.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'review-dot' +
        (i < qIdx ? ' done ' + (lineResults[i] === 'clean' ? 'clean' : lineResults[i] === 'skipped' ? 'skipped' : 'mistake') : '') +
        (i === qIdx ? ' current' : '');
      box.appendChild(dot);
    });
    const label = document.createElement('span');
    label.className = 'review-session-label';
    label.textContent = `${Math.min(qIdx + 1, session.length)} of ${session.length}`;
    box.appendChild(label);
  }

  function renderMistakes() {
    const el = document.getElementById('reviewMistakes');
    if (mistakes === 0) { el.style.display = 'none'; return; }
    el.style.display = '';
    el.textContent = `${mistakes} mistake${mistakes !== 1 ? 's' : ''} this session`;
  }

  function updateStatus() {
    const line = currentLine();
    const status = document.getElementById('practiceStatus');
    if (practiceIdx >= line.moves.length) {
      status.textContent = '✓ Line complete!';
      status.className = 'practice-status complete';
    } else if (currentSide() === 'both') {
      status.textContent = practiceIdx % 2 === 0 ? "White's turn" : "Black's turn";
      status.className = 'practice-status';
    } else if (isUserTurn()) {
      status.textContent = 'Your turn';
      status.className = 'practice-status';
    } else {
      status.textContent = '...';
      status.className = 'practice-status';
    }
  }

  function updateProgress() {
    const total = currentLine().moves.length || 1;
    document.getElementById('progressBar').style.width =
      Math.round((practiceIdx / total) * 100) + '%';
  }

  function checkLineDone() {
    const line = currentLine();
    if (practiceIdx < line.moves.length) return false;
    SoundFX.complete();
    Stats.recordLine(current().opening.id);
    lineResults[qIdx] = lineHadMistake ? 'mistake' : 'clean';
    recordScheduleResult(current().key, !lineHadMistake);
    setTimeout(nextLine, 900);
    return true;
  }

  function skipLine() {
    if (finished) return;
    cancelAutoPlay();
    lineResults[qIdx] = 'skipped';
    nextLine();
  }

  function nextLine() {
    if (finished) return;
    if (qIdx + 1 >= session.length) { finish(); return; }
    qIdx++;
    loadCurrent();
  }

  function finish() {
    finished = true;
    cancelAutoPlay();

    localStorage.setItem('dailyReviewDate', new Date().toISOString().split('T')[0]);

    // Daily Review counts toward the streak
    const res = recordStreakDay();
    renderStreakDisplay();
    if (res.isNew) {
      bumpStreakWidget();
      SoundFX.streak();
    }

    const reviewed = lineResults.filter(r => r !== 'skipped').length;
    const clean = lineResults.filter(r => r === 'clean').length;
    const pct = (correctMoves + mistakes) > 0
      ? Math.round((correctMoves / (correctMoves + mistakes)) * 100) : 0;

    document.getElementById('summaryPct').textContent = pct + '%';
    document.getElementById('summaryTitle').textContent =
      mistakes === 0 && reviewed > 0 ? 'Perfect review!' :
      pct >= 80 ? 'Great memory!' : 'Review complete';
    document.getElementById('summaryLines').textContent = reviewed;
    document.getElementById('summaryCorrect').textContent = correctMoves;
    document.getElementById('summaryMistakes').textContent = mistakes;

    if (mistakes === 0 && reviewed > 0) {
      SoundFX.fanfare();
      confetti();
    }

    document.getElementById('reviewSummary').classList.add('open');
  }

  function confetti() {
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    const colors = ['#e8b54d', '#4caf6e', '#5a9fd4', '#d46a5a', '#b07cc6'];
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = (Math.random() * 0.8) + 's';
      piece.style.animationDuration = (2.4 + Math.random() * 1.6) + 's';
      piece.style.setProperty('--drift', (Math.random() * 160 - 80) + 'px');
      if (i % 3 === 0) {
        piece.style.borderRadius = '50%';
        piece.style.width = piece.style.height = '9px';
      }
      overlay.appendChild(piece);
    }
    document.body.appendChild(overlay);
    setTimeout(() => overlay.remove(), 4200);
  }

  // ── Keyboard ─────────────────────────────────────────────────────
  document.addEventListener('keydown', e => {
    if (e.target instanceof Element && e.target.matches('input, textarea')) return;
    if (e.key === 'h' || e.key === 'H') showHint();
  });

  // ── Init ─────────────────────────────────────────────────────────
  loadCurrent();

  return { showHint, skipLine };

})();
