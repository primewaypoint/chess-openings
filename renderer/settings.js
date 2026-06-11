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
