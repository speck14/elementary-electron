# elementary-electron

## Elementary-electron workshop
https://github.com/maxogden/elementary-electron

### Versions
Electron: 9.4.4
Node: 12.22.6

### Notes:
- Cat picture won't load in Electron app <br>
Fix: https://github.com/maxogden/elementary-electron/issues/3
- PDF won't export <br>
Fix: https://github.com/maxogden/elementary-electron/issues/37
- PDF won't save using callbacks (which is what the workshop's save() function uses <br>
Fix: Use promises for that function (https://github.com/maxogden/elementary-electron/issues/36)
- KeyboardEvent.keyCode is deprecated <br>
Fix: use [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values)
