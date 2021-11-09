'use strict'

const electron = require('electron');

electron.app.on('ready', function() {
  var mainWindow = new electron.BrowserWindow({
    width: 600,
    height: 800,
    //the workshop didn't have this line, but the cat pic won't load without it. Found in this issue: https://github.com/maxogden/elementary-electron/issues/3
    webPreferences: {
        nodeIntegration: true,
    //this line also wasn't in the workshop, but exporting pdf won't work without it. Fix found: https://github.com/maxogden/elementary-electron/issues/37
        enableRemoteModule: true
    }});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
});