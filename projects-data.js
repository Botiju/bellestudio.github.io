// ============================================================
// 作品資料
// 之後要加新作品時,直接在下面的陣列多加一個物件就好,
// 不用動 HTML 或 CSS。欄位說明:
//
//   title       作品名稱
//   status      狀態標籤,例如「開發中」「已上架」,不需要可留空字串 ""
//   description 一段簡短介紹
//   tags        標籤陣列,顯示成小圓角膠囊
//   link        { label, url } 作品連結(GitHub / 商店頁 / demo),沒有就整個欄位留 null
//   visual      "emotion-tiles" 會畫出五色小卡視覺(專屬情緒小夥伴用)
//               其他作品可以先留 null,之後再補真的截圖或視覺
// ============================================================

const PROJECTS = [
  {
    title: "情緒小夥伴",
    status: "開發中 · Flutter",
    description:
      "挑一張情緒卡,把當下的感覺放進對的容器裡。生氣、難過、焦慮、崩潰、開心,五種情緒各自對應一個抒發練習——打沙包、抱抱對話、吹泡泡呼吸、砸東西、寫感恩日記。每次抒發都會存成心情日記,方便回頭看看自己怎麼走過來的。原本是 React / Tailwind 的原型,現在正在移植成 Flutter,準備推上 iOS 和 Android。",
    tags: ["Flutter", "情緒陪伴", "iOS / Android"],
    link: null,
    visual: "emotion-tiles",
  },

  // 之後補新作品,照這個格式在下面加一個物件即可,例如:
  // {
  //   title: "作品名稱",
  //   status: "已上架",
  //   description: "一兩句話的介紹。",
  //   tags: ["標籤一", "標籤二"],
  //   link: { label: "查看專案", url: "https://github.com/你的帳號/專案名" },
  //   visual: null,
  // },
];
