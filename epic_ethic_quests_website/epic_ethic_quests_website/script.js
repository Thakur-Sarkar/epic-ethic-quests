// Epic Ethic Quests demo data.
// Replace each videoId with the ID from your own YouTube URL.
// Example: https://www.youtube.com/watch?v=AbCdEf12345 -> videoId is AbCdEf12345
// You can replace imageUrl with your own thumbnail URL. Leave it empty to use the emoji illustration.

const stories = [
  {
    id: 1,
    title: "The Little Fox and the Golden Star",
    description: "A curious fox follows a falling star and learns that kindness shines brighter than gold.",
    language: "English",
    category: "Moral",
    duration: "3:42",
    emoji: "🦊",
    background: "#f8d7bb",
    videoId: "M7lc1UVf-VE",
    imageUrl: ""
  },
  {
    id: 2,
    title: "जादुई जंगल का रहस्य",
    description: "एक बहादुर बच्चा जादुई जंगल में एक ऐसा रहस्य खोजता है जो सबकी मदद करता है।",
    language: "Hindi",
    category: "Fantasy",
    duration: "5:10",
    emoji: "🌳",
    background: "#c9ead9",
    videoId: "ScMzIvxBSi4",
    imageUrl: ""
  },
  {
    id: 3,
    title: "The Brave Little Turtle",
    description: "A tiny turtle discovers that courage is not about being big; it is about never giving up.",
    language: "English",
    category: "Adventure",
    duration: "4:05",
    emoji: "🐢",
    background: "#cde9e7",
    videoId: "ysz5S6PUM-U",
    imageUrl: ""
  },
  {
    id: 4,
    title: "ईमानदार लकड़हारा",
    description: "एक लकड़हारे की ईमानदारी उसे ऐसा इनाम दिलाती है जिसकी उसने कभी कल्पना नहीं की थी।",
    language: "Hindi",
    category: "Moral",
    duration: "2:58",
    emoji: "🪓",
    background: "#f4dfad",
    videoId: "jNQXAC9IVRw",
    imageUrl: ""
  },
  {
    id: 5,
    title: "A Door to the Moon",
    description: "Mia finds a tiny door in her garden and steps into a moonlit world full of wonder.",
    language: "English",
    category: "Fantasy",
    duration: "0:58",
    emoji: "🌙",
    background: "#d9d5fb",
    videoId: "aqz-KE-bpKQ",
    imageUrl: ""
  },
  {
    id: 6,
    title: "आधी रात की परछाई",
    description: "एक रहस्यमयी परछाई के पीछे छिपी सच्चाई जानने के लिए दो दोस्त निकल पड़ते हैं।",
    language: "Hindi",
    category: "Mystery",
    duration: "0:45",
    emoji: "🔦",
    background: "#cdd9f1",
    videoId: "LXb3EKWsInQ",
    imageUrl: ""
  }
];

const storyGrid = document.getElementById("storyGrid");
const searchInput = document.getElementById("searchInput");
const languageFilter = document.getElementById("languageFilter");
const categoryFilter = document.getElementById("categoryFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.querySelector(".main-nav");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function getFilteredStories() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase();
  const language = languageFilter.value;
  const category = categoryFilter.value;

  return stories.filter((story) => {
    const searchable = `${story.title} ${story.description} ${story.category} ${story.language}`.toLocaleLowerCase();
    return searchable.includes(searchTerm)
      && (language === "all" || story.language === language)
      && (category === "all" || story.category === category);
  });
}

function renderStories() {
  const filteredStories = getFilteredStories();
  resultCount.textContent = filteredStories.length;
  emptyState.hidden = filteredStories.length !== 0;
  storyGrid.hidden = filteredStories.length === 0;

  storyGrid.innerHTML = filteredStories.map((story) => {
    const thumb = story.imageUrl
      ? `<img src="${escapeHTML(story.imageUrl)}" alt="${escapeHTML(story.title)} thumbnail" loading="lazy" onerror="this.remove()">`
      : `<div class="thumb-placeholder" aria-hidden="true">${escapeHTML(story.emoji)}</div>`;

    return `
      <article class="story-card" style="--thumb-bg:${escapeHTML(story.background)}">
        <div class="story-thumb">
          ${thumb}
          <span class="duration">${escapeHTML(story.duration)}</span>
        </div>
        <div class="story-content">
          <div class="story-tags">
            <span class="tag">${escapeHTML(story.category)}</span>
            <span class="tag language">${escapeHTML(story.language)}</span>
          </div>
          <h3>${escapeHTML(story.title)}</h3>
          <p>${escapeHTML(story.description)}</p>
          <div class="story-actions">
            <button class="watch-button" type="button" data-watch="${story.id}">Watch story <span>→</span></button>
            <span class="story-type">${story.category === "Shorts" || story.duration.startsWith("0:") ? "Short video" : "Full story"}</span>
          </div>
        </div>
      </article>`;
  }).join("");
}

function openVideo(storyId) {
  const story = stories.find((item) => item.id === Number(storyId));
  if (!story) return;

  document.getElementById("modalTitle").textContent = story.title;
  document.getElementById("modalMeta").textContent = `${story.language} · ${story.category} · ${story.duration}`;
  document.getElementById("modalDescription").textContent = story.description;

  // Use YouTube's embed URL. Some sample IDs may not be playable; replace them with your own.
  videoFrame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(story.videoId)}?autoplay=1&rel=0" title="${escapeHTML(story.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  document.getElementById("youtubeLink").href = `https://www.youtube.com/watch?v=${encodeURIComponent(story.videoId)}`;

  videoModal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeVideo() {
  videoModal.hidden = true;
  videoFrame.innerHTML = ""; // Stops playback when the modal closes.
  document.body.style.overflow = "";
}

searchInput.addEventListener("input", renderStories);
languageFilter.addEventListener("change", renderStories);
categoryFilter.addEventListener("change", renderStories);
storyGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-watch]");
  if (button) openVideo(button.dataset.watch);
});
document.getElementById("modalClose").addEventListener("click", closeVideo);
document.getElementById("modalBackdrop").addEventListener("click", closeVideo);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !videoModal.hidden) closeVideo();
});
document.getElementById("resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  languageFilter.value = "all";
  categoryFilter.value = "all";
  renderStories();
});
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }
});
document.getElementById("year").textContent = new Date().getFullYear();

renderStories();
