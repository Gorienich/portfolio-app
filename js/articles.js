const grid = document.getElementById("articlesGrid");
const featuredContainer = document.getElementById("featuredArticle");
const searchInput = document.getElementById("articleSearch");
const categoryFilter = document.getElementById("categoryFilter");
const emptyState = document.getElementById("emptyState");

let activeCategory = "All";
let articles = [];

async function loadArticles() {
  try {
    const response = await fetch("data/articles.json");

    if (!response.ok) {
      throw new Error(`Failed to load articles.json: ${response.status}`);
    }

    articles = await response.json();
    renderArticles();
  } catch (error) {
    console.error("Error loading articles:", error);

    grid.innerHTML = "";
    featuredContainer.innerHTML = "";
    emptyState.style.display = "block";
    emptyState.innerHTML = `
      <h2>Could not load articles</h2>
      <p>Check that <code>data/articles.json</code> exists and is valid JSON.</p>
    `;
  }
}

function createArticleCard(article, isFeatured = false) {
  const tagHtml = article.tags
    .map(tag => `<span class="article-tag">${tag}</span>`)
    .join("");

  const sourcesHtml = article.sources
    .map(source => `
      <a href="${source.url}" target="_blank" rel="noopener">
        <i class="fas fa-link"></i> ${source.label}
      </a>
    `)
    .join("");

  return `
    <article class="${isFeatured ? "article-card featured-card" : "article-card"}">
      <div class="article-topline">
        <span class="article-category">${article.category}</span>
        <span class="article-meta">${article.readingTime}</span>
      </div>

      ${article.coverImage ? `
        <div class="article-card-image">
          <img src="${article.coverImage}" alt="${article.title}">
        </div>
      ` : ""}

      <h2>${article.title}</h2>

      <p class="article-summary">${article.summary}</p>

      <div class="article-tags">
        ${tagHtml}
      </div>

      <div class="article-sources">
        <p>Sources</p>
        ${sourcesHtml}
      </div>

      <div class="article-actions">
        <a class="article-btn" href="article.html?id=${article.id}">
          Read Article
        </a>

        <button class="share-btn" type="button" onclick="shareArticle('${article.title}', '${article.id}')">
          <i class="fas fa-share-nodes"></i> Share
        </button>
      </div>
    </article>
  `;
}

function renderArticles() {
  const searchValue = searchInput.value.toLowerCase().trim();

  const filtered = articles.filter(article => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;

    const searchableText = [
      article.title,
      article.category,
      article.summary,
      article.tags.join(" "),
      article.sources.map(source => source.label).join(" ")
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(searchValue);

    return matchesCategory && matchesSearch;
  });

  const featured = articles.find(article => article.featured);

  if (featured && activeCategory === "All" && !searchValue) {
    featuredContainer.innerHTML = `
      <div class="featured-heading">
        <p class="section-kicker">Featured Note</p>
        <h2>Currently Highlighted</h2>
      </div>
      ${createArticleCard(featured, true)}
    `;
  } else {
    featuredContainer.innerHTML = "";
  }

  grid.innerHTML = filtered
    .filter(article => !(article.featured && activeCategory === "All" && !searchValue))
    .map(article => createArticleCard(article))
    .join("");

  emptyState.style.display = filtered.length === 0 ? "block" : "none";
}

function shareArticle(title, id) {
  const url = `${window.location.origin}${window.location.pathname.replace("articles.html", "article.html")}?id=${id}`;

  if (navigator.share) {
    navigator.share({
      title,
      text: `Read this technical note: ${title}`,
      url
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url)
      .then(() => alert("Article link copied to clipboard."))
      .catch(() => alert("Could not copy link."));
  }
}

searchInput.addEventListener("input", renderArticles);

categoryFilter.addEventListener("click", event => {
  if (!event.target.matches("button")) return;

  categoryFilter.querySelectorAll("button").forEach(button => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");
  activeCategory = event.target.dataset.category;

  renderArticles();
});

loadArticles();