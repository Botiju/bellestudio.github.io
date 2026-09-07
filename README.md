# Boti — 作品集

純 HTML / CSS / JS 的個人 App 作品集網站,沒有任何 build 流程,可以直接丟上 GitHub Pages。

## 檔案結構

```
.
├── index.html          網站主結構
├── style.css            樣式
├── projects-data.js     作品資料(之後加新作品改這裡就好)
├── script.js             把作品資料畫成頁面
└── README.md
```

## 加新作品

打開 `projects-data.js`,在 `PROJECTS` 陣列裡多加一個物件即可,檔案裡已經有格式範例和註解。不用改 HTML 或 CSS。

## 換掉 GitHub 連結

`index.html` 裡的 `#github-link` 目前是預留連結,記得改成你自己的 GitHub 網址:

```html
<a href="https://github.com/你的帳號" class="footer-link" id="github-link">GitHub</a>
```

## 放上 GitHub 並開啟 Pages

1. 在 GitHub 建一個新的 repository(例如 `boti-portfolio`)。
2. 在這個資料夾裡執行:
   ```bash
   git init
   git add .
   git commit -m "init: portfolio site"
   git branch -M main
   git remote add origin https://github.com/你的帳號/boti-portfolio.git
   git push -u origin main
   ```
3. 到 repository 的 **Settings → Pages**,Source 選 `main` branch、資料夾選 `/ (root)`,存檔。
4. 等一兩分鐘,網站就會出現在 `https://你的帳號.github.io/boti-portfolio/`。

## 本機預覽

不需要安裝任何東西,用瀏覽器直接打開 `index.html` 就能看,或用 VS Code 的 Live Server 之類的擴充功能會比較方便(改檔案會自動重整)。

## 之後可以做的事

- 幫每個作品補真的截圖或短影片,取代目前的色塊視覺(`emotion-tiles` 只是「情緒小夥伴」專屬的示意畫法)。
- 作品變多之後,可以考慮幫 `.projects` 加篩選或分類。
