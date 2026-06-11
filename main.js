const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Hide the File/Edit/View menu bar on Windows and Linux.
// macOS keeps its system menu bar (needed for Cmd+Q, Cmd+C, etc.)
if (process.platform !== 'darwin') Menu.setApplicationMenu(null);

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    frame: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    titleBarStyle: 'default',
    title: 'ChessOpenings'
  });

  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
