// файл, который позволяет из веб-приложения сделать десктоп-приложение

// установка глобальной переменной
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = true;

// импорт нужных библиотек
const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

// создание переменной
let mainWindow;

// функция создания окошка с приложением
function createWindow() {
  // прописывание настроек для окна с приложением
  mainWindow = new BrowserWindow({
    width: 980,
    minWidth: 980,
    height: 685,
    minHeight: 685,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // прописывание точки входа в приложение
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `dist/car-vision/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );

  // описывается действие, которое произойдет, если окно с приложением закроется.
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

// открытие главного окна с приложением
app.on("ready", createWindow);

// обработка эвента с закрытием окна
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});
