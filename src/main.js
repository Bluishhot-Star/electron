const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')
const { 
  SEND_MAIN_PING 
} = require('./constants'); 





// const { width, height } = screen.getPrimaryDisplay().workAreaSize;

const initialWidth = 800;
const initialHeight = 600;
const aspectRatio = initialWidth / initialHeight;

function createWindow () {  
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL("http://localhost:3000") 

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // 윈도우 비율 유지 X
  // mainWindow.on('resize', () => {
  //   mainWindow.webContents.send('window-resized', mainWindow.getSize());
  // });

  // 윈도우 비율 유지하며 크기 조절
  mainWindow.on('resize', () => {
    const { width, height } = mainWindow.getBounds();
    const calculatedHeight = Math.round(width / aspectRatio);
    
    if (calculatedHeight <= height) {
      mainWindow.setSize(width, calculatedHeight);
    } else {
      const calculatedWidth = Math.round(height * aspectRatio);
      mainWindow.setSize(calculatedWidth, height);
    }
  });
}  





// app.on('ready', createWindow);

ipcMain.on(SEND_MAIN_PING, (event, arg)=>{ 
  console.log('Main received a ping!!!'); 
}) 



app.whenReady().then(() => {
  createWindow()

  //for MacOS
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
//for Window, Linux
//when close 
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})