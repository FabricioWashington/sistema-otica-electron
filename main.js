const path = require('path');
const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    const angularDevUrl = 'http://localhost:4200'; // URL do servidor Angular
    console.log("URL do Angular Dev:", angularDevUrl); // Verifique no console

    win.loadURL(angularDevUrl).catch((err) => {
        console.error("Erro ao carregar a URL do Angular:", err);
    });

    win.webContents.openDevTools(); // Abre as DevTools para verificar erros no console do navegador

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
