'use strict';

// Theme
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

// Sound toggle
const soundToggle = document.getElementById('soundToggle');

function syncSoundToggle() {
  const on = localStorage.getItem('soundEnabled') !== 'off';
  soundToggle.classList.toggle('on', on);
  soundToggle.setAttribute('aria-checked', on);
}
syncSoundToggle();

soundToggle.addEventListener('click', () => {
  const wasOn = localStorage.getItem('soundEnabled') !== 'off';
  localStorage.setItem('soundEnabled', wasOn ? 'off' : 'on');
  syncSoundToggle();
  if (!wasOn) SoundFX.complete(); // sample when switching on
});

// Reset all progress
const resetBtn = document.getElementById('resetAllBtn');
resetBtn.addEventListener('click', () => {
  if (!resetBtn.classList.contains('confirming')) {
    resetBtn.classList.add('confirming');
    resetBtn.textContent = 'Click again to confirm';
    setTimeout(() => {
      resetBtn.classList.remove('confirming');
      resetBtn.textContent = 'Reset';
    }, 3000);
    return;
  }

  resetBtn.classList.remove('confirming');

  localStorage.removeItem('completed');
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('completedLines_')) keysToRemove.push(key);
  }
  keysToRemove.forEach(k => localStorage.removeItem(k));

  resetBtn.textContent = '✓ Done';
  resetBtn.style.borderColor = 'var(--diff-beginner)';
  resetBtn.style.color = 'var(--diff-beginner)';
  setTimeout(() => {
    resetBtn.textContent = 'Reset';
    resetBtn.style.borderColor = '';
    resetBtn.style.color = '';
  }, 2000);
});

// Board theme picker
(function () {
  const grid = document.getElementById('boardThemeGrid');
  if (!grid || !window.BOARD_THEMES) return;
  const current = window.getBoardTheme();

  window.BOARD_THEMES.forEach((t) => {
    const el = document.createElement('div');
    el.className = 'board-swatch' + (t.id === current ? ' selected' : '');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', t.name + ' board');
    el.innerHTML =
      '<div class="board-swatch-preview">' +
        '<span style="background:' + t.light + '"></span>' +
        '<span style="background:' + t.dark + '"></span>' +
        '<span style="background:' + t.dark + '"></span>' +
        '<span style="background:' + t.light + '"></span>' +
      '</div>' +
      '<div class="board-swatch-name">' + t.name + '</div>';
    el.addEventListener('click', () => {
      window.setBoardTheme(t.id);
      grid.querySelectorAll('.board-swatch').forEach((s) => s.classList.remove('selected'));
      el.classList.add('selected');
      if (window.SoundFX) SoundFX.move();
    });
    grid.appendChild(el);
  });
})();

// ── Backup: export / import progress ────────────────────────────
// Backs up the ENTIRE localStorage (streak, mastery, review schedule, stats,
// preferences) as one JSON file. This is the only way to move progress
// between devices or survive a reinstall — there is no server/account.
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const importFile = document.getElementById('importFile');

exportBtn?.addEventListener('click', () => {
  const data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key) data[key] = localStorage.getItem(key);
  }
  const payload = {
    app: 'ChessOpenings',
    exportedAt: new Date().toISOString(),
    data
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const stamp = typeof todayStr === 'function' ? todayStr() : new Date().toISOString().split('T')[0];
  a.href = url;
  a.download = `chessopenings-backup-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);

  exportBtn.textContent = '✓ Saved';
  setTimeout(() => { exportBtn.textContent = 'Export'; }, 2000);
});

importBtn?.addEventListener('click', () => {
  if (!importBtn.classList.contains('confirming')) {
    importBtn.classList.add('confirming');
    importBtn.textContent = 'Choose file to confirm';
    setTimeout(() => {
      importBtn.classList.remove('confirming');
      importBtn.textContent = 'Import';
    }, 4000);
    return;
  }
  importFile.click();
});

importFile?.addEventListener('change', () => {
  const file = importFile.files && importFile.files[0];
  importFile.value = ''; // allow picking the same file again later
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      if (!payload || payload.app !== 'ChessOpenings' || typeof payload.data !== 'object') {
        throw new Error('not a ChessOpenings backup file');
      }
      Object.keys(payload.data).forEach(key => {
        localStorage.setItem(key, payload.data[key]);
      });
      importBtn.classList.remove('confirming');
      importBtn.textContent = '✓ Restored — reloading…';
      setTimeout(() => window.location.reload(), 900);
    } catch (e) {
      importBtn.classList.remove('confirming');
      importBtn.textContent = 'Invalid file';
      importBtn.style.borderColor = 'var(--diff-advanced)';
      importBtn.style.color = 'var(--diff-advanced)';
      setTimeout(() => {
        importBtn.textContent = 'Import';
        importBtn.style.borderColor = '';
        importBtn.style.color = '';
      }, 2500);
    }
  };
  reader.readAsText(file);
});
