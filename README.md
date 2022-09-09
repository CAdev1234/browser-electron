 <div align="center">
  <h1>Sample Browser</h1>

  <blockquote>Minimal Browser built with Typescript, React, Electron, Webpack 5 and Babel 7</blockquote>
</div>
<br />

## 📦 Libraries

- Electron 17
- React 17
- Webpack 5
- Babel 7
- Hot reloading (`npm start`)
<br />

## ⚙️ Getting Started

```
git clone https://github.com/CAdev1234/browser-electron.git
```
```
cd browser-electron
```
```
npm install
```
```
npm run Start
```

> ⚠️ Note: This boilerplate uses `nodeIntegration` by default, which allows your renderer code to access node. Only use this boilerplate if you are running trusted code in your app. Alternatively, you can change this setting in `src/main/index.ts` and adjust accordingly.

## 💎 Features
### UI Elements
- Url Input
- Buttons(Back, Forward, Refresh)
- Webview
- Loading Icon
### Functions
- Navigation function(back, forward, refresh)
- Page Navigation
- Load WebView according to submitted Url
- WebView history
