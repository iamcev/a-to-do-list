const {app,BrowserWindow} = require('electron');
let win;
var createWindow = () => {
  let win = new BrowserWindow({width:500,height:500,icon:'todologo.png'})
  win.setMenu(null);
  win.loadFile('index.html')
  win.on('closed', () => {
    win = null
  })
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
