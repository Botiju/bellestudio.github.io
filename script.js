// 把 projects-data.js 裡的作品資料畫成頁面上的區塊
(function () {
  const container = document.getElementById("projects");

  const EMOTION_TILES = [
    { cls: "angry", label: "生氣" },
    { cls: "sad", label: "難過" },
    { cls: "anxious", label: "焦慮" },
    { cls: "overwhelm", label: "崩潰" },
    { cls: "happy", label: "開心" },
  ];

  function renderVisual(visual) {
    if (visual !== "emotion-tiles") return "";
    const tiles = EMOTION_TILES.map(
      (t) => `<div class="emotion-tile ${t.cls}">${t.label}</div>`
    ).join("");
    return `<div class="emotion-tiles" aria-hidden="true">${tiles}</div>`;
  }

  function renderProject(p) {
    const status = p.status
      ? `<span class="project-status">${p.status}</span>`
      : "";

    const tags = (p.tags || [])
      .map((t) => `<span>${t}</span>`)
      .join("");

    const link = p.link
      ? `<a class="project-link" href="${p.link.url}">${p.link.label} →</a>`
      : "";

    return `
      <article class="project">
        <h2 class="project-title">${p.title}${status}</h2>
        ${renderVisual(p.visual)}
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">${tags}</div>
        ${link}
      </article>
    `;
  }

  if (container && Array.isArray(window.PROJECTS)) {
    container.innerHTML = window.PROJECTS.map(renderProject).join("");
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
