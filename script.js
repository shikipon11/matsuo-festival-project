// =========================
// script.js
// =========================

// 企画ごとの情報
const projects = [

  {
    number: 1,
    title: "フォトスポット",
    category: ["体験", "展示"],
    places: [{ building: "教室棟", floor: "4階" }],
    images: []
  },
  {
    number: 2,
    title: "お化け屋敷",
    category: ["体験"],
    places: [{ building: "教室棟", floor: "4階" }],
    images: ["images/有志企画_page-0001 (1).jpg"]
  },
  {
    number: 3,
    title: "謎解き",
    category: ["体験"],
    places: [{ building: "教室棟", floor: "4階" }],
    images: ["images/有志企画_page-0001 (1).jpg"]
  },
  {
    number: 4,
    title: "写真",
    category: ["展示", "販売"],
    places: [{ building: "教室棟", floor: "4階" }],
    images: ["images/写真班.png"]
  },
  {
    number: 5,
    title: "CAM",
    category: ["展示"],
    places: [{ building: "教室棟", floor: "4階" }],
    images: ["images/CAM班.PNG"]
  },
  {
    number: 6,
    title: "総合社会研究",
    category: ["体験", "展示"],
    places: [{ building: "教室棟", floor: "3階" }],
    images: ["images/総合社会研究班.JPG"]
  },
  {
    number: 7,
    title: "書道",
    category: ["体験", "展示"],
    places: [{ building: "教室棟", floor: "3階" }],
    images: ["images/書道班.jpg"]
  },
  {
    number: 8,
    title: "手相",
    category: ["体験"],
    places: [{ building: "教室棟", floor: "3階" }],
    images: ["images/手相同好会.jpg"]
  },
  {
    number: 9,
    title: "競技かるた",
    category: ["体験"],
    places: [{ building: "教室棟", floor: "2階" }],
    images: ["images/競技かるた班.jpg"]
  },
  {
    number: 10,
    title: "美術",
    category: ["体験", "展示", "販売"],
    places: [
      { building: "教室棟", floor: "2階" },
      { building: "管理棟", floor: "1階" },
      { building: "その他", floor: "渡り廊下" }
    ],
    images: ["images/美術班.png"]
  },
  {
    number: 11,
    title: "文芸",
    category: ["体験", "展示"],
    places: [{ building: "教室棟", floor: "2階" }],
    images: ["images/文芸班.png"]
  },
  {
    number: 12,
    title: "松尾菜地域応援",
    category: ["展示", "飲食"],
    places: [{ building: "教室棟", floor: "1階" }],
    images: ["images/松尾菜.png"]
  },
  {
    number: 13,
    title: "全校制作",
    category: ["展示"],
    places: [{ building: "その他", floor: "渡り廊下" }],
    images: ["images/IMG_0653.JPG"]
  },
  {
    number: 14,
    title: "カンボジア井戸プロ",
    category: ["販売"],
    places: [{ building: "管理棟", floor: "2階" }],
    images: ["images/カンボジア.png"]
  },
  {
    number: 15,
    title: "数学",
    category: ["体験"],
    places: [{ building: "管理棟", floor: "2階" }],
    images: ["images/数学研究同好会.png"]
  },
  {
    number: 16,
    title: "被服",
    category: ["体験", "販売"],
    places: [{ building: "管理棟", floor: "2階" }],
    images: ["images/被服班.png"]
  },
  {
    number: 17,
    title: "英語",
    category: ["体験", "飲食"],
    places: [{ building: "管理棟", floor: "2階" }],
    images: ["images/英語班.jpeg"]
  },
  {
    number: 18,
    title: "図書",
    category: ["体験", "飲食"],
    places: [{ building: "管理棟", floor: "2階" }],
    images: ["images/図書館.png"]
  },
  {
    number: 19,
    title: "茶道",
    category: ["飲食", "パフォーマンス"],
    places: [{ building: "管理棟", floor: "1階" }],
    images: ["images/茶道班.png"]
  },
  {
    number: 20,
    title: "ものづくり販売",
    category: ["販売"],
    places: [{ building: "その他", floor: "昇降口（中）" }],
    images: []
  },
  {
    number: 21,
    title: "食品科学",
    category: ["飲食"],
    places: [{ building: "管理棟", floor: "1階" }],
    images: ["images/食品科学班.JPG"]
  },
  {
    number: 22,
    title: "化学",
    category: ["体験", "パフォーマンス"],
    places: [{ building: "管理棟", floor: "3階" }],
    images: ["images/化学班.png"]
  },
  {
    number: 23,
    title: "天文気象",
    category: ["展示"],
    places: [{ building: "管理棟", floor: "3階" }],
    images: ["images/天文班.png"]
  },
  {
    number: 24,
    title: "棋道",
    category: ["体験"],
    places: [{ building: "管理棟", floor: "3階" }],
    images:["images/棋道班.jpg"]
  },
  {
    number: 25,
    title: "クイズ",
    category: ["体験"],
    places: [{ building: "管理棟", floor: "3階" }],
    images: ["images/総合文化部クイズ班_page-0001.jpg"]
  },
  {
    number: 26,
    title: "吹奏楽/書道/ダンス",
    category: ["パフォーマンス"],
    places: [{ building: "その他", floor: "第一体育館メイン" }],
    images: ["images/吹奏楽班コンサート.jpg", "images/書道班.jpg", "images/ダンス班_page-0001.jpg"]
  },
  {
    number: 27,
    title: "卓球",
    category: ["体験"],
    places: [{ building: "その他", floor: "第一体育館ギャラリー" }],
    images: ["images/卓球.jpg"]
  },
  {
    number: 28,
    title: "ちびっこ広場",
    category: ["体験"],
    places: [{ building: "その他", floor: "定時棟 1階" }],
    images: []
  },
  {
    number: 29,
    title: "合唱/小さな音楽会",
    category: ["パフォーマンス"],
    places: [{ building: "その他", floor: "音楽室" }],
    images: ["images/混声合唱班_page-0001.jpg", "images/小さな音楽会.png"]
  },
  {
    number: 30,
    title: "剣道",
    category: ["体験"],
    places: [{ building: "その他", floor: "格技室" }],
    images:["images/剣道.jpg"]
  },
  {
    number: 31,
    title: "弓道",
    category: ["体験"],
    places: [{ building: "その他", floor: "ピロティ" }],
    images: ["images/弓道班.JPG"]
  },
  {
    number: 32,
    title: "現代音楽/吹奏楽",
    category: ["パフォーマンス"],
    places: [{ building: "その他", floor: "中庭（野外ステージ）" }],
    images: ["images/現代音楽_page-0001.jpg", "images/吹奏楽班ステージ.jpg"]
  },
  {
    number: 33,
    title: "放送",
    category: ["体験"],
    places: [{ building: "その他", floor: "昇降口(外)" }],
    images: ["images/放送班 - 1.png"]
  },
  {
    number: 34,
    title: "演劇",
    category: ["パフォーマンス"],
    places: [{ building: "その他", floor: "同窓会館　1階" }],
    images: ["images/演劇班.jpg"]
  },
  {
    number: 35,
    title: "室内楽/合唱",
    category: ["パフォーマンス"],
    places: [{ building: "その他", floor: "同窓会館　2階" }],
    images: ["images/室内楽班.png", "images/混声合唱班_page-0001.jpg"]
  }

];

// =========================
// 設定
// =========================

const API_URL =
  "https://script.google.com/macros/s/AKfycbztXzBSMkZiU0wbBNnO_efdR6kqW3emGrNo8H3vOvnkWBaO7QVjKU3pauSBXumYzThP/exec";

const categoryClasses = {
  "飲食": "food",
  "展示": "exhibition",
  "体験": "experience",
  "パフォーマンス": "performance",
  "販売": "sale"
};

const categoryTextClasses = {
  "飲食": "food-text",
  "展示": "exhibition-text",
  "体験": "experience-text",
  "パフォーマンス": "performance-text",
  "販売": "sale-text"
};

let congestionData = {};

// =========================
// 混雑状況
// =========================

function getStatusLabel(status) {
  switch (status) {
    case "empty":
      return "🟢 空いてる";
    case "normal":
      return "🟡 やや混雑";
    case "busy":
      return "🔴 大変混雑";
    case "limit":
      return "⚫ 休止中";
    default:
      return "⚪ 読み込み中";
  }
}

function getStatusClass(status) {
  switch (status) {
    case "empty":
      return "status-empty";
    case "normal":
      return "status-normal";
    case "busy":
      return "status-busy";
    case "limit":
      return "status-limit";
    default:
      return "status-default";
  }
}

// =========================
// 要素取得
// =========================

const contentArea = document.getElementById("content-area");
const tabButtons = document.querySelectorAll(".tab-button");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalPlace = document.getElementById("modal-place");
const modalNumber = document.getElementById("modal-number");
const modalCategoryTag = document.getElementById("modal-category-tag");
const modalImages = document.getElementById("modal-images");

// =========================
// ハンバーガーメニュー
// =========================

const menuButton = document.getElementById("menu-button");
const headerNav = document.getElementById("header-nav");

menuButton.addEventListener("click", event => {
  event.stopPropagation();
  headerNav.classList.toggle("open");
});

document.addEventListener("click", event => {
  const isNav = headerNav.contains(event.target);
  const isButton = menuButton.contains(event.target);

  if (!isNav && !isButton) {
    headerNav.classList.remove("open");
  }
});

// =========================
// スケジュール開閉
// =========================

const scheduleToggle = document.getElementById("schedule-toggle");
const scheduleDropdown = document.getElementById("schedule-dropdown");

scheduleToggle.addEventListener("click", event => {
  event.stopPropagation();
  scheduleDropdown.classList.toggle("open");
});

document.addEventListener("click", event => {
  const isDropdown = scheduleDropdown.contains(event.target);
  const isButton = scheduleToggle.contains(event.target);

  if (!isDropdown && !isButton) {
    scheduleDropdown.classList.remove("open");
  }
});

// =========================
// 表示更新
// =========================

function refreshCurrentView() {
  const activeTab = document.querySelector(".tab-button.active").dataset.tab;

  if (activeTab === "number") {
    renderNumberView();
  }

  if (activeTab === "category") {
    renderCategoryView();
  }

  if (activeTab === "place") {
    renderPlaceView();
  }
}

async function loadCongestion() {
  try {
    const response = await fetch(API_URL);
    congestionData = await response.json();

    const now = new Date();
    document.getElementById("last-update").textContent =
      `最終更新：${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

    refreshCurrentView();
  } catch (error) {
    console.error(error);
  }
}

// 最初に画面表示
renderNumberView();

// 混雑状況取得
loadCongestion();

// 15分ごと更新
setInterval(loadCongestion, 900000);

// =========================
// タブ切り替え
// =========================

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const tab = button.dataset.tab;

    if (tab === "number") {
      renderNumberView();
    }

    if (tab === "category") {
      renderCategoryView();
    }

    if (tab === "place") {
      renderPlaceView();
    }
  });
});

// =========================
// 番号順
// =========================

function renderNumberView() {
  contentArea.innerHTML = "";

  const maxNumber = Math.max(...projects.map(project => project.number));

  for (let start = 1; start <= maxNumber; start += 10) {
    const end = Math.min(start + 9, maxNumber);

    createSection(
      `${start}〜${end}`,
      projects.filter(
        project => project.number >= start && project.number <= end
      )
    );
  }
}

// =========================
// カテゴリ順
// =========================

function renderCategoryView() {
  contentArea.innerHTML = "";

  ["販売", "飲食", "展示", "体験", "パフォーマンス"].forEach(category => {
    createSection(
      category,
      projects.filter(project => project.category.includes(category))
    );
  });
}

// =========================
// 場所順
// =========================

function renderPlaceView() {
  contentArea.innerHTML = "";

  ["教室棟", "管理棟", "その他"].forEach(building => {
    createSection(
      building,
      projects.filter(project =>
        project.places.some(place => place.building === building)
      )
    );
  });
}

// =========================
// セクション生成
// =========================

function createSection(title, data) {
  const section = document.createElement("div");
  section.className = "section";

  const header = document.createElement("div");
  header.className = "section-header";

  const titleElement = document.createElement("span");
  titleElement.textContent = title;
  titleElement.classList.add("section-title");

  const titleClass = categoryTextClasses[title];
  if (titleClass) {
    titleElement.classList.add(titleClass);
  }

  const icon = document.createElement("span");
  icon.className = "toggle-icon";
  icon.textContent = "∨";

  header.appendChild(titleElement);
  header.appendChild(icon);

  const list = document.createElement("div");
  list.className = "project-list";

  // =========================
  // カード生成
  // =========================

  data.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";

    // 各セクションの最初の1枚にチュートリアル表示
    if (index === 0) {
      card.classList.add("tutorial");
    }

    const status = congestionData[project.number] || "";

    const categoryTags = project.category
      .map(category => {
        const categoryClass = categoryClasses[category] || "";

        return `
          <div class="tag ${categoryClass}">
            ${category}
          </div>
        `;
      })
      .join("");

    const placeTags = project.places
      .map(place => `
        <div class="tag place">
          ${place.building}
        </div>
      `)
      .join("");

    card.innerHTML = `
      <div class="project-top">
        <div class="project-circle">
          ${project.number}
        </div>

        <div class="project-title">
          ${project.title}
        </div>

        <div class="project-congestion ${getStatusClass(status)}">
          ${getStatusLabel(status)}
        </div>
      </div>

      <div class="project-tags">
        ${categoryTags}
        ${placeTags}
      </div>
    `;

    // =========================
    // モーダル
    // =========================

    card.addEventListener("click", () => {
      document
        .querySelectorAll(".project-card.tutorial")
        .forEach(tutorialCard => {
          tutorialCard.classList.remove("tutorial");
        });

      modalNumber.textContent = project.number;
      modalTitle.textContent = project.title;

      modalCategoryTag.innerHTML = "";

      project.category.forEach(category => {
        const categoryClass = categoryClasses[category] || "";

        modalCategoryTag.innerHTML += `
          <div class="tag ${categoryClass}">
            ${category}
          </div>
        `;
      });

      modalImages.innerHTML = "";

      if (project.images.length > 0) {
        if (project.images.length === 1) {
          modalImages.classList.add("single-image");
        } else {
          modalImages.classList.remove("single-image");
        }

        project.images.forEach(image => {
          const img = document.createElement("img");
          img.src = image;
          img.alt = project.title;
          modalImages.appendChild(img);
        });
      } else {
        modalImages.classList.remove("single-image");
        modalImages.innerHTML = "<p>NO IMAGE</p>";
      }

      // 1か所の企画は従来と同じ「場所：...」形式で表示
      if (project.places.length === 1) {
        const place = project.places[0];

        if (place.building === "その他") {
          modalPlace.textContent = `場所：${place.floor}`;
        } else {
          modalPlace.textContent = `場所：${place.building} ${place.floor}`;
        }
      } else {
        // 複数場所の企画は従来と同じ複数行表示
        modalPlace.innerHTML = project.places
          .map(place => {
            if (place.building === "その他") {
              return `${place.floor}`;
            }

            return `${place.building} ${place.floor}`;
          })
          .join("<br>");
      }

      const commonImg = document.createElement("img");
      commonImg.src = "images/map.jpg";
      commonImg.alt = "map";
      commonImg.className = "common-image";

      document.querySelector(".common-image")?.remove();
      modalPlace.insertAdjacentElement("afterend", commonImg);

      modal.classList.add("show");
    });

    list.appendChild(card);
  });

  // =========================
  // セクション開閉
  // =========================

  header.addEventListener("click", () => {
    list.classList.toggle("open");

    if (list.classList.contains("open")) {
      icon.textContent = "∧";
    } else {
      icon.textContent = "∨";
    }
  });

  section.appendChild(header);
  section.appendChild(list);
  contentArea.appendChild(section);
}

// =========================
// モーダルを閉じる
// =========================

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  document.querySelector(".common-image")?.remove();
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.remove("show");
    document.querySelector(".common-image")?.remove();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    modal.classList.remove("show");
    document.querySelector(".common-image")?.remove();
  }
});

// =========================
// 隠し演出
// =========================

const heroTitle = document.getElementById("hero-title");
let secretCount = 0;

heroTitle.addEventListener("click", () => {
  secretCount++;

  if (secretCount >= 5) {
    heroTitle.classList.add("secret-active");
    createConfetti();
    secretCount = 0;

    setTimeout(() => {
      heroTitle.classList.remove("secret-active");
    }, 1000);
  }
});

// =========================
// 紙吹雪生成
// =========================

function createConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.setProperty("--drift", Math.random());

    const colors = [
      "#ff4d6d",
      "#ffd60a",
      "#4cc9f0",
      "#80ed99",
      "#b388eb"
    ];

    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    const size = Math.random() * 8 + 6;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    document.body.appendChild(confetti);

    confetti.style.animationDelay = Math.random() * 1.5 + "s";

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}
