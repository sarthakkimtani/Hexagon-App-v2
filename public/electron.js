// Modules to control application life and create native browser window
const electron = require("electron");
const { app, BrowserWindow, Menu } = require("electron");

const path = require("path");
const isDev = require("electron-is-dev");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let mainMenu = Menu.buildFromTemplate(require("./mainMenu.js"));

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 980,
    height: 695,
    minWidth: 980,
    minHeight: 695,
    maxWidth: 980,
    maxHeight: 695,
    maximizable: false,
    title: "Hexagon - A Wallpaper App",
    webPreferences: {
      nodeIntegration: "true",
    },
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  Menu.setApplicationMenu(mainMenu);
  createWindow();
});

app.on("window-all-closed", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
