const { app, BrowserWindow, session, ipcMain } = require('electron')
const path = require('path')
require('dotenv').config()

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1100,
    minHeight: 700,
    title: 'StratCaddi',
    backgroundColor: '#eff0f0',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // Grant all media permissions automatically
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    const allowed = ['media','microphone','audioCapture','mediaKeySystem']
    callback(allowed.includes(permission))
  })

  session.defaultSession.setPermissionCheckHandler((webContents, permission) => {
    const allowed = ['media','microphone','audioCapture','mediaKeySystem']
    return allowed.includes(permission)
  })

  // Remove CSP that blocks speech recognition
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ["default-src * 'unsafe-inline' 'unsafe-eval' data: blob:"]
      }
    })
  })

  win.loadFile('index.html')
  win.setMenuBarVisibility(false)
}

// Expose API key to renderer via IPC
ipcMain.handle('get-api-key', () => {
  return process.env.ANTHROPIC_API_KEY || ''
})

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
