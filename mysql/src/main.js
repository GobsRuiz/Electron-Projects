const { app, BrowserWindow, Notification } = require('electron')
const { getConnection } = require('./database');
require('electron-reload')(__dirname);

async function saveUser(user) {
  try {
    const conn = getConnection();
    
    const set = (await conn).query('INSERT INTO user SET ?', user);
  
    new Notification({
      title: 'Electron Mysql',
      body: 'Um novo usuário foi cadastrado'
    }).show();
  } catch (error) {
    console.log(error)
  }
}

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, 
      enableRemoteModule: true
    }
  })

  win.loadFile('src/index.html')
}

app.allowRendererProcessReuse = false;
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


module.exports = {
  saveUser,
}
