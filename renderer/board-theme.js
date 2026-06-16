'use strict';

// Shared board appearance — applies the saved colour scheme on every page that
// shows a chessboard. Pure CSS class on <body>; the square colours are overridden
// in style.css, so no extra image assets are needed.

window.BOARD_THEMES = [
  { id: 'classic', name: 'Classic', light: '#f0d9b5', dark: '#b58863' },
  { id: 'green',   name: 'Green',   light: '#eeeed2', dark: '#769656' },
  { id: 'blue',    name: 'Ocean',   light: '#dee3e6', dark: '#8ca2ad' },
  { id: 'walnut',  name: 'Walnut',  light: '#e8d0aa', dark: '#9e6b41' },
  { id: 'slate',   name: 'Slate',   light: '#dcdcdc', dark: '#8f8f8f' }
];

function getBoardTheme() {
  var saved = localStorage.getItem('boardTheme') || 'classic';
  return window.BOARD_THEMES.some(function (t) { return t.id === saved; }) ? saved : 'classic';
}

function applyBoardTheme(id) {
  window.BOARD_THEMES.forEach(function (t) {
    document.body.classList.remove('board-' + t.id);
  });
  if (id && id !== 'classic') document.body.classList.add('board-' + id);
}

// expose for the settings picker
window.getBoardTheme = getBoardTheme;
window.setBoardTheme = function (id) {
  localStorage.setItem('boardTheme', id);
  applyBoardTheme(id);
};

// apply immediately on load (before the board renders, so there is no flash)
applyBoardTheme(getBoardTheme());
