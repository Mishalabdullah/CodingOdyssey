const { app, BrowserWindow } = require("electron");
const db = require("./scripts/database");
// Include the Node.js 'path' module at the top of your file
const path = require("node:path");

// Modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
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

// ipcMain.on("add-record", (event, data) => {
//   const {
//     name,
//     email,
//     occupation,
//     qualification,
//     blood,
//     age,
//     phone,
//     address,
//     image,
//   } = data;
//   db.run(
//     "INSERT INTO Members (name, email, occupation, qualification, blood_group, age, phone_number, address, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
//     [name, email, occupation, qualification, blood, age, phone, address, image],
//     function (err) {
//       if (err) {
//         event.reply("add-record-error", err.message);
//       } else {
//         event.reply("add-record-success", "Record inserted successfully.");
//       }
//     }
//   );
// });
