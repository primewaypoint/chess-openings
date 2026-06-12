// Study page logic

const Study = (function () {
  'use strict';

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

  // ── Streak ───────────────────────────────────────────────────────
  function getStreakData() {
    try { return JSON.parse(localStorage.getItem('streakData') || '{"count":0,"lastDate":null}'); }
    catch { return { count: 0, lastDate: null }; }
  }

  function updateStreak() {
    const res = recordStreakDay(); // shared with review mode — see streak.js
    if (!res.isNew) return res.count;
    renderStreakDisplay(res.count);
    bumpStreakWidget();
    SoundFX.streak();
    showStreakToast(res.count);
    return res.count;
  }

  function renderStreakDisplay(count) {
    const el = document.getElementById('streakCount');
    const widget = document.getElementById('streakWidget');
    if (el) el.textContent = count;
    if (widget) widget.classList.toggle('zero', count === 0);
  }

  function showStreakToast(count) {
    const toast = document.getElementById('streakToast');
    const msg   = document.getElementById('streakToastMsg');
    if (!toast || !msg) return;
    msg.textContent = count === 1 ? 'Streak started! Keep it going.' : `${count} day streak! Well done.`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  // Init streak display (shows 0 when the streak expired)
  renderStreakDisplay(getEffectiveStreak(getStreakData()));

  // ── URL param ────────────────────────────────────────────────────
  const params = new URLSearchParams(window.location.search);
  const openingId = params.get('id');
  const openingSide = params.get('side') || 'both'; // 'white' | 'black' | 'both'

  document.getElementById('backBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  const opening = OPENINGS.find(o => o.id === openingId);
  if (!opening) {
    document.getElementById('panelTitle').textContent = 'Opening not found';
    return {};
  }

  // ── State ────────────────────────────────────────────────────────
  let activeTab = 'learn';
  let currentLineIdx = 0;
  let currentMoveIdx = 0;
  let practiceIdx = 0;
  let board = null;
  let game = new Chess();

  // ── Init panel UI ────────────────────────────────────────────────
  document.getElementById('panelTitle').textContent = opening.name;
  document.getElementById('panelBadge').innerHTML =
    `<span class="badge badge-${opening.difficulty}">${opening.difficulty}</span>`;
  if (opening.eco)
    document.getElementById('panelEco').textContent = opening.eco;

  // ── Variants ─────────────────────────────────────────────────────
  function buildVariants() {
    const container = document.getElementById('variantList');
    container.innerHTML = '';
    if (!opening.lines || opening.lines.length <= 1) {
      document.getElementById('variantsSection').style.display = 'none';
      return;
    }
    opening.lines.forEach((line, idx) => {
      const el = document.createElement('div');
      el.className = 'variant-item' + (idx === currentLineIdx ? ' active' : '');
      el.textContent = line.name || `Line ${idx + 1}`;
      el.addEventListener('click', () => selectVariant(idx));
      container.appendChild(el);
    });
  }

  function selectVariant(idx) {
    currentLineIdx = idx;
    buildVariants();
    if (activeTab === 'learn') {
      currentMoveIdx = 0;
      game = new Chess();
      renderMoveList();
      updateBoardLearn();
    } else {
      cancelAutoPlay();
      practiceIdx = 0;
      game = new Chess();
      rebuildBoard();
      setPracticeExplanation('');
      updatePracticeUI();
      updateProgress();
      autoPlayOpponentMove();
    }
  }

  // ── Board ────────────────────────────────────────────────────────
  function rebuildBoard() {
    $('#studyBoard').empty();
    board = Chessboard('studyBoard', {
      position: game.fen(),
      pieceTheme: '../assets/pieces/{piece}.png',
      showNotation: true,
      orientation: openingSide === 'black' ? 'black' : 'white',
      moveSpeed: 180,
      snapSpeed: 80,
      snapbackSpeed: 180,
      appearSpeed: 150,
      draggable: activeTab === 'practice',
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: onSnapEnd
    });
    highlightLastMove();
    clearSelection(); // squares were recreated — drop any stale click selection
  }

  // Update board + last-move highlight in one place
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

  // Rebuild board on window resize so it fills the new container size
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(rebuildBoard, 120);
  });

  // ── Learn mode ───────────────────────────────────────────────────
  function currentLine() {
    return opening.lines && opening.lines[currentLineIdx];
  }

  function renderMoveList() {
    const line = currentLine();
    const list = document.getElementById('moveList');
    list.innerHTML = '';
    if (!line || !line.moves) return;

    line.moves.forEach((move, idx) => {
      const el = document.createElement('div');
      el.className = 'move-item';
      if (idx < currentMoveIdx)  el.classList.add('played');
      if (idx === currentMoveIdx - 1) el.classList.add('active');

      const num = Math.floor(idx / 2) + 1;
      el.textContent = (idx % 2 === 0 ? `${num}. ` : '... ') + move;
      el.addEventListener('click', () => jumpToMove(idx + 1));
      list.appendChild(el);
    });

    list.querySelector('.active')?.scrollIntoView({ block: 'nearest' });
  }

  function updateBoardLearn(animate) {
    setBoardPosition(animate);
    updateNavButtons();
    updateProgress();

    const line = currentLine();
    const expl = line?.explanations?.[currentMoveIdx - 1];
    document.getElementById('explanationBox').textContent =
      expl || (currentMoveIdx === 0 ? 'Press Next to start.' : '');
  }

  function updateNavButtons() {
    const total = currentLine()?.moves?.length || 0;
    document.getElementById('btnFirst').disabled = currentMoveIdx === 0;
    document.getElementById('btnPrev').disabled  = currentMoveIdx === 0;
    document.getElementById('btnNext').disabled  = currentMoveIdx >= total;
    document.getElementById('btnLast').disabled  = currentMoveIdx >= total;
  }

  function updateProgress() {
    const total = currentLine()?.moves?.length || 1;
    const idx = activeTab === 'practice' ? practiceIdx : currentMoveIdx;
    document.getElementById('progressBar').style.width =
      Math.round((idx / total) * 100) + '%';
    if (idx >= total) markLineComplete(currentLineIdx);
  }

  function jumpToMove(target, animate) {
    game = new Chess();
    const line = currentLine();
    if (line) line.moves.slice(0, target).forEach(m => game.move(m));
    currentMoveIdx = target;
    renderMoveList();
    updateBoardLearn(animate);
  }

  function goNext() {
    const line = currentLine();
    if (!line || currentMoveIdx >= line.moves.length) return;
    const moved = game.move(line.moves[currentMoveIdx]);
    currentMoveIdx++;
    if (moved) { if (moved.captured) SoundFX.capture(); else SoundFX.move(); }
    renderMoveList();
    updateBoardLearn(true);
  }

  function goPrev()  { if (currentMoveIdx > 0) jumpToMove(currentMoveIdx - 1, true); }
  function goFirst() { jumpToMove(0); }
  function goLast()  { jumpToMove(currentLine()?.moves?.length || 0); }

  function reset() {
    currentMoveIdx = 0;
    game = new Chess();
    renderMoveList();
    updateBoardLearn();
  }

  document.addEventListener('keydown', e => {
    if (e.target instanceof Element && e.target.matches('input, textarea')) return;
    const key = e.key.toLowerCase();

    if (e.key === '?')  { toggleShortcutsOverlay(); return; }
    if (e.key === 'Escape') { toggleShortcutsOverlay(false); return; }
    if (key === 'l') { switchTab('learn');    return; }
    if (key === 'p') { switchTab('practice'); return; }
    if (key === 'r') { activeTab === 'learn' ? reset() : resetPractice(); return; }

    if (activeTab === 'learn') {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Home') goFirst();
      else if (e.key === 'End') goLast();
    } else {
      if (e.key === 'ArrowRight') practiceNext();
      else if (e.key === 'ArrowLeft') practicePrev();
      else if (e.key === 'Home') practiceFirst();
      else if (key === 'h') showHint();
    }
  });

  // ── Shortcuts overlay ────────────────────────────────────────────
  function toggleShortcutsOverlay(force) {
    const ov = document.getElementById('shortcutsOverlay');
    if (!ov) return;
    if (force === undefined) ov.classList.toggle('open');
    else ov.classList.toggle('open', force);
  }

  document.getElementById('shortcutsOverlay')
    ?.addEventListener('click', () => toggleShortcutsOverlay(false));

  // ── Tab switch ───────────────────────────────────────────────────
  function switchTab(tab) {
    cancelAutoPlay();
    activeTab = tab;
    document.getElementById('tabLearn').classList.toggle('active', tab === 'learn');
    document.getElementById('tabPractice').classList.toggle('active', tab === 'practice');
    document.getElementById('learnContent').style.display    = tab === 'learn'    ? '' : 'none';
    document.getElementById('practiceContent').style.display = tab === 'practice' ? '' : 'none';

    if (tab === 'learn') {
      currentMoveIdx = 0;
      game = new Chess();
      rebuildBoard();
      renderMoveList();
      updateBoardLearn();
    } else {
      practiceIdx = 0;
      game = new Chess();
      rebuildBoard();
      setPracticeExplanation('');
      updatePracticeUI();
      updateProgress();
      autoPlayOpponentMove();
    }
  }

  // ── Practice mode ────────────────────────────────────────────────
  function isUserTurn() {
    if (openingSide === 'both') return true;
    if (openingSide === 'white') return practiceIdx % 2 === 0;
    return practiceIdx % 2 === 1; // black opening: user plays black (odd moves)
  }

  let autoPlayTimer = null;

  function cancelAutoPlay() {
    clearTimeout(autoPlayTimer);
    autoPlayTimer = null;
  }

  function autoPlayOpponentMove() {
    if (openingSide === 'both') return;
    const line = currentLine();
    if (!line || practiceIdx >= line.moves.length) return;
    const shouldAuto =
      (openingSide === 'white' && practiceIdx % 2 === 1) ||
      (openingSide === 'black' && practiceIdx % 2 === 0);
    if (!shouldAuto) return;

    cancelAutoPlay();
    const scheduledIdx = practiceIdx;
    autoPlayTimer = setTimeout(() => {
      autoPlayTimer = null;
      // State may have changed while waiting (tab switch, nav buttons, reset)
      if (activeTab !== 'practice' || practiceIdx !== scheduledIdx) return;
      clearSelection();
      const move = game.move(line.moves[practiceIdx]);
      if (!move) return;
      practiceIdx++;
      setBoardPosition(true);
      if (move.captured) SoundFX.capture(); else SoundFX.move();
      flashSquare(move.to, 'opponent');
      setPracticeExplanation(line.explanations?.[practiceIdx - 1]);
      updatePracticeUI();
      updateProgress();
    }, 450);
  }

  function setPracticeExplanation(text) {
    const el = document.getElementById('practiceExplanation');
    if (!el) return;
    el.textContent = text || '';
    el.style.display = text ? '' : 'none';
  }

  function onDragStart(source, piece) {
    // Only the user's pieces, on the user's turn — blocked pieces fall
    // through to the click handler so they can be capture targets
    if (activeTab !== 'practice') return false;
    if (!isUserTurn()) return false;
    if (piece.charAt(0) !== game.turn()) return false;
    const line = currentLine();
    if (!line || practiceIdx >= line.moves.length) return false;
  }

  function onDrop(source, target) {
    // Press-and-release on one square is a click, not a drag:
    // toggle the selection (the real click event is swallowed by the
    // drag clone, so it never reaches the board's click listener)
    if (source === target) {
      if (selectedSquare === source) clearSelection();
      else selectSquare(source);
      return 'snapback';
    }
    return tryUserMove(source, target, false);
  }

  function tryUserMove(source, target, viaClick) {
    clearSelection();
    if (activeTab !== 'practice') return 'snapback';
    if (!isUserTurn()) return 'snapback';

    const line = currentLine();
    if (!line || practiceIdx >= line.moves.length) return 'snapback';

    const expected = line.moves[practiceIdx];

    // Try the move on a temp instance to get SAN
    const temp = new Chess(game.fen());
    const moved = temp.move({ from: source, to: target, promotion: 'q' });
    if (!moved) return 'snapback';

    if (moved.san === expected) {
      const played = game.move({ from: source, to: target, promotion: 'q' });
      Stats.recordMove(true);
      // Clicked moves need the board updated now; dragged pieces are already there
      if (viaClick) setBoardPosition(true);
      if (played.captured) SoundFX.capture(); else SoundFX.move();
      flashSquare(target, 'correct');
      showCheckBadge(target);
      practiceIdx++;
      setPracticeExplanation(line.explanations?.[practiceIdx - 1]);
      highlightLastMove();
      setTimeout(() => {
        setBoardPosition(true);
        updatePracticeUI();
        updateProgress();
        autoPlayOpponentMove();
      }, 280);
      return;
    } else {
      Stats.recordMove(false);
      SoundFX.wrong();
      flashSquare(target, 'wrong');
      const attacker = findAttackerAfterMove(source, target);
      if (attacker) drawArrow(attacker, target);
      const status = document.getElementById('practiceStatus');
      status.textContent = 'Wrong move — try again';
      status.className = 'practice-status wrong';
      setTimeout(() => updatePracticeUI(), 1200);
      return 'snapback';
    }
  }

  function onSnapEnd() {
    setBoardPosition(true);
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
    // Dot on every legal destination, ring on captures
    game.moves({ square: sq, verbose: true }).forEach(m => {
      const el = document.querySelector(`#studyBoard .square-${m.to}`);
      if (el) el.classList.add(m.captured ? 'square-dest-capture' : 'square-dest');
    });
  }

  // Handles clicks on squares chessboard.js does NOT drag (empty squares
  // and opponent pieces) — selecting own pieces happens in onDrop above
  document.getElementById('studyBoard').addEventListener('click', e => {
    if (activeTab !== 'practice') return;
    const sqEl = e.target.closest('[class*="square-"]');
    if (!sqEl) return;
    const match = sqEl.className.match(/square-([a-h][1-8])/);
    if (!match) return;
    const sq = match[1];
    const piece = game.get(sq);
    if (piece && piece.color === game.turn() && isUserTurn()) return; // drag path owns this
    if (!selectedSquare) return;
    const from = selectedSquare;
    clearSelection();
    tryUserMove(from, sq, true);
  });

  let practiceComplete = false;

  function updatePracticeUI() {
    const line  = currentLine();
    const total = line?.moves?.length || 0;
    const status = document.getElementById('practiceStatus');
    const nextBtn = document.getElementById('nextLineBtn');

    if (practiceIdx >= total) {
      status.textContent = '✓ Line complete!';
      status.className = 'practice-status complete';
      if (!practiceComplete) {
        practiceComplete = true;
        SoundFX.complete();
        Stats.recordLine(opening.id);
      }
      markLineComplete(currentLineIdx);
      updateStreak();
      if (nextBtn) {
        // When every line is done, offer the way out instead of looping forever
        const lines = opening.lines || [];
        let done;
        try { done = new Set(JSON.parse(localStorage.getItem('completedLines_' + opening.id) || '[]')); }
        catch { done = new Set(); }
        const allDone = lines.length > 0 && lines.every((l, i) => done.has(l.id || i));
        if (allDone) {
          nextBtn.textContent = '✓ All lines done — Back to openings';
          nextBtn.dataset.mode = 'home';
          nextBtn.style.display = '';
        } else {
          nextBtn.textContent = 'Next line ►';
          nextBtn.dataset.mode = 'next';
          nextBtn.style.display = lines.length > 1 ? '' : 'none';
        }
      }
    } else {
      practiceComplete = false;
      if (nextBtn) nextBtn.style.display = 'none';
      let txt;
      if (openingSide === 'both') {
        txt = practiceIdx % 2 === 0 ? "White's turn" : "Black's turn";
      } else if (isUserTurn()) {
        txt = 'Your turn';
      } else {
        txt = '...';
      }
      status.textContent = txt;
      status.className = 'practice-status';
    }
    updatePracticeNavButtons();
  }

  function updatePracticeNavButtons() {
    const total = currentLine()?.moves?.length || 0;
    const first = document.getElementById('btnPracticeFirst');
    const prev  = document.getElementById('btnPracticePrev');
    const next  = document.getElementById('btnPracticeNext');
    if (first) first.disabled = practiceIdx === 0;
    if (prev)  prev.disabled  = practiceIdx === 0;
    if (next)  next.disabled  = practiceIdx >= total;
  }

  function practicePrev() {
    if (practiceIdx <= 0) return;
    cancelAutoPlay();
    clearSelection();
    practiceIdx--;
    // Step past the opponent's move so Back always lands on the user's turn
    if (openingSide !== 'both' && !isUserTurn() && practiceIdx > 0) practiceIdx--;
    game = new Chess();
    const line = currentLine();
    if (line) line.moves.slice(0, practiceIdx).forEach(m => game.move(m));
    setBoardPosition();
    setPracticeExplanation(line?.explanations?.[practiceIdx - 1]);
    updatePracticeUI();
    updateProgress();
    if (practiceIdx === 0) autoPlayOpponentMove();
  }

  function practiceFirst() {
    cancelAutoPlay();
    clearSelection();
    practiceIdx = 0;
    game = new Chess();
    setBoardPosition();
    setPracticeExplanation('');
    updatePracticeUI();
    updateProgress();
    autoPlayOpponentMove();
  }

  function practiceNext() {
    const line = currentLine();
    if (!line || practiceIdx >= line.moves.length) return;
    cancelAutoPlay();
    clearSelection();
    const moved = game.move(line.moves[practiceIdx]);
    practiceIdx++;
    if (moved) { if (moved.captured) SoundFX.capture(); else SoundFX.move(); }
    setBoardPosition(true);
    setPracticeExplanation(line.explanations?.[practiceIdx - 1]);
    updatePracticeUI();
    updateProgress();
    autoPlayOpponentMove();
  }

  function nextLineIdx() {
    const total = opening.lines?.length || 0;
    if (total <= 1) return -1;
    let done;
    try { done = new Set(JSON.parse(localStorage.getItem('completedLines_' + opening.id) || '[]')); }
    catch { done = new Set(); }
    // Prefer the next line not yet completed, wrapping around
    for (let i = 1; i <= total; i++) {
      const idx = (currentLineIdx + i) % total;
      if (!done.has(opening.lines[idx].id || idx)) return idx;
    }
    return (currentLineIdx + 1) % total;
  }

  function goToNextLine() {
    const btn = document.getElementById('nextLineBtn');
    if (btn && btn.dataset.mode === 'home') {
      window.location.href = 'index.html';
      return;
    }
    const idx = nextLineIdx();
    if (idx >= 0) selectVariant(idx);
  }

  function findAttackerAfterMove(source, target) {
    try {
      const temp = new Chess(game.fen());
      if (!temp.move({ from: source, to: target, promotion: 'q' })) return null;
      const capture = temp.moves({ verbose: true }).find(m => m.to === target && m.captured);
      return capture ? capture.from : null;
    } catch { return null; }
  }

  function drawArrow(fromSq, toSq) {
    const boardEl = document.getElementById('studyBoard');
    const boardSize = boardEl.offsetWidth;
    const sq = boardSize / 8;
    const flipped = openingSide === 'black';

    function center(s) {
      const col = s.charCodeAt(0) - 97;
      const row = parseInt(s[1]) - 1;
      return {
        x: flipped ? (7 - col) * sq + sq / 2 : col * sq + sq / 2,
        y: flipped ? row * sq + sq / 2 : (7 - row) * sq + sq / 2
      };
    }

    boardEl.querySelector('.board-arrow')?.remove();
    const a = center(fromSq), b = center(toSq);
    const ang = Math.atan2(b.y - a.y, b.x - a.x);
    const hs = sq * 0.32, sw = sq * 0.15;
    const color = 'rgba(200,50,50,0.84)';
    const ns = 'http://www.w3.org/2000/svg';

    const svg = document.createElementNS(ns, 'svg');
    svg.classList.add('board-arrow');
    svg.setAttribute('width', boardSize);
    svg.setAttribute('height', boardSize);
    svg.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;z-index:10';

    const ex = b.x - hs * Math.cos(ang), ey = b.y - hs * Math.sin(ang);
    const line = document.createElementNS(ns, 'line');
    Object.entries({ x1: a.x, y1: a.y, x2: ex, y2: ey,
      stroke: color, 'stroke-width': sw, 'stroke-linecap': 'round' })
      .forEach(([k, v]) => line.setAttribute(k, v));
    svg.appendChild(line);

    const poly = document.createElementNS(ns, 'polygon');
    poly.setAttribute('points', [
      `${b.x},${b.y}`,
      `${b.x - hs * Math.cos(ang - Math.PI / 6)},${b.y - hs * Math.sin(ang - Math.PI / 6)}`,
      `${b.x - hs * Math.cos(ang + Math.PI / 6)},${b.y - hs * Math.sin(ang + Math.PI / 6)}`
    ].join(' '));
    poly.setAttribute('fill', color);
    svg.appendChild(poly);

    boardEl.appendChild(svg);
    setTimeout(() => svg.remove(), 1400);
  }

  function showCheckBadge(square) {
    const el = document.querySelector(`#studyBoard .square-${square}`);
    if (!el) return;
    el.querySelectorAll('.check-badge').forEach(b => b.remove());
    const badge = document.createElement('div');
    badge.className = 'check-badge';
    badge.innerHTML = `<svg viewBox="0 0 12 12" fill="none"><path d="M1.5 6l3 3 6-6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    el.appendChild(badge);
    setTimeout(() => badge.remove(), 1000);
  }

  function flashSquare(square, type) {
    const el = document.querySelector(`.square-${square}`);
    if (!el) return;
    const cls = type === 'correct' ? 'flash-correct' : type === 'opponent' ? 'flash-opponent' : 'flash-wrong';
    el.classList.add(cls);
    setTimeout(() => el.classList.remove('flash-correct', 'flash-wrong', 'flash-opponent'), 600);
  }

  function showHint() {
    const line = currentLine();
    if (!line || practiceIdx >= line.moves.length) return;
    const temp = new Chess(game.fen());
    const move = temp.move(line.moves[practiceIdx]);
    if (!move) return;
    const el = document.querySelector(`.square-${move.from}`);
    if (el) {
      el.style.background = 'rgba(200, 180, 40, 0.4)';
      setTimeout(() => { el.style.background = ''; }, 1500);
    }
  }

  function resetPractice() {
    cancelAutoPlay();
    practiceIdx = 0;
    game = new Chess();
    rebuildBoard();
    setPracticeExplanation('');
    updatePracticeUI();
    updateProgress();
    autoPlayOpponentMove();
  }

  // ── Opening progress reset ───────────────────────────────────────
  function resetOpeningProgress() {
    const btn = document.getElementById('resetProgressBtn');
    if (!btn) return;

    if (!btn.classList.contains('confirming')) {
      btn.classList.add('confirming');
      btn.textContent = 'Click again to confirm';
      setTimeout(() => {
        btn.classList.remove('confirming');
        btn.textContent = '↺ Reset opening progress';
      }, 3000);
      return;
    }

    btn.classList.remove('confirming');
    btn.textContent = '↺ Reset opening progress';

    localStorage.removeItem('completedLines_' + opening.id);
    try {
      const completed = new Set(JSON.parse(localStorage.getItem('completed') || '[]'));
      completed.delete(opening.id);
      localStorage.setItem('completed', JSON.stringify([...completed]));
    } catch {}

    document.getElementById('progressBar').style.width = '0%';
  }

  // ── Completion tracking ──────────────────────────────────────────
  function markLineComplete(lineIdx) {
    const line = currentLine();
    if (!line) return;

    // Track completed lines per opening
    const key = 'completedLines_' + opening.id;
    try {
      const lines = new Set(JSON.parse(localStorage.getItem(key) || '[]'));
      lines.add(line.id || lineIdx);
      localStorage.setItem(key, JSON.stringify([...lines]));
    } catch {}

    // Mark opening as fully completed when all lines done
    const allLines = opening.lines?.length || 1;
    try {
      const lines = new Set(JSON.parse(localStorage.getItem('completedLines_' + opening.id) || '[]'));
      if (lines.size >= allLines) {
        const completed = new Set(JSON.parse(localStorage.getItem('completed') || '[]'));
        if (!completed.has(opening.id)) {
          completed.add(opening.id);
          localStorage.setItem('completed', JSON.stringify([...completed]));
          celebrateOpeningComplete();
        }
      }
    } catch {}
  }

  // ── Celebration ──────────────────────────────────────────────────
  function celebrateOpeningComplete() {
    if (document.querySelector('.celebration-overlay')) return;
    SoundFX.fanfare();
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

    const card = document.createElement('div');
    card.className = 'celebration-card';
    card.innerHTML = `
      <svg viewBox="0 0 18 14" fill="none">
        <path d="M1 13h16M1 13L3.5 5.5L7 9.5L9 1.5L11 9.5L14.5 5.5L17 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="celebration-title">Opening mastered!</div>
      <div class="celebration-name">${opening.name}</div>`;
    overlay.appendChild(card);

    document.body.appendChild(overlay);
    setTimeout(() => overlay.remove(), 4200);
  }

  // ── Init ─────────────────────────────────────────────────────────
  buildVariants();
  rebuildBoard();
  renderMoveList();
  updateBoardLearn();

  return { goNext, goPrev, goFirst, goLast, reset, switchTab, showHint, resetPractice, practicePrev, practiceFirst, practiceNext, goToNextLine, resetOpeningProgress };

})();
