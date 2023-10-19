const { app, BrowserWindow } = require("electron");
// Include the Node.js 'path' module at the top of your file
const path = require("node:path");

// Modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Use the full path to the HTML file
  win.loadFile(path.join(__dirname, "pages/index.html"));
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
