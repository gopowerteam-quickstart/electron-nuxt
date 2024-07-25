import { app as e, BrowserWindow as o } from "electron";
e.whenReady().then(() => {
  console.log(process.env.VITE_DEV_SERVER_URL, 123123123), new o().loadURL(process.env.VITE_DEV_SERVER_URL);
});
