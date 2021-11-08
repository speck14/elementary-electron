'use strict'

const electron = require('electron');

electron.app.on('ready', function() {
  const mainWindow = new electron.BrowserWindow({width: 600, height: 800})
  mainWindow.loadURL('file://' + __dirname + '/index.html');
})