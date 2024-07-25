import { app, BrowserWindow } from 'electron'

app.whenReady().then(() => {
  console.log(process.env.VITE_DEV_SERVER_URL,123123123)
  new BrowserWindow().loadURL(process.env.VITE_DEV_SERVER_URL as string)
})