async function loadArticle() {
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get("id");

  const root = document.getElementById("articleRoot");

  if (!articleId) {
    root.innerHTML = `
      <h1>Article not found</h1>
      <p>No article ID was provided.</p>
      <a class="article-btn" href="articles.html">Back to Articles</a>
    `;
    return;
  }

  try {
    const response = await fetch("data/articles.json");
    const articles = await response.json();

    const article = articles.find(item => item.id === articleId);

    if (!article) {
      root.innerHTML = `
        <h1>Article not found</h1>
        <p>The requested article does not exist.</p>
        <a class="article-btn" href="articles.html">Back to Articles</a>
      `;
      return;
    }

    document.title = `${article.title} | Egor Grebenuk`;

 const tagsHtml = article.tags
  .map(tag => `
    <a class="article-tag tag-link" href="articles.html?tag=${encodeURIComponent(tag)}">
      ${tag}
    </a>
  `)
  .join("");

    const sectionsHtml = article.sections
      .map(section => {
        const paragraphs = section.content
          ? section.content.map(text => `<p>${text}</p>`).join("")
          : "";

        const list = section.list
          ? `<ul>${section.list.map(item => `<li>${item}</li>`).join("")}</ul>`
          : "";

        return `
          <section class="article-section">
            <h2>${section.heading}</h2>
            ${paragraphs}
            ${list}
          </section>
        `;
      })
      .join("");

    const sourcesHtml = article.sources
      .map(source => `
        <li>
          <a href="${source.url}" target="_blank" rel="noopener">
            ${source.label}
          </a>
        </li>
      `)
      .join("");

    root.innerHTML = `
      <header class="article-full-header">
        <p class="section-kicker">${article.category}</p>
        <h1>${article.title}</h1>
        <p class="article-lead">${article.summary}</p>

        <div class="article-meta-row">
          <span>${article.date}</span>
          <span>${article.readingTime}</span>
        </div>

        <div class="article-tags">
          ${tagsHtml}
        </div>
      </header>

      <figure class="article-cover">
        <img src="${article.coverImage}" alt="${article.title}" />
      </figure>

      ${sectionsHtml}

      <section class="article-section">
        <h2>Repository</h2>
        <p>
          <a href="${article.repo.url}" target="_blank" rel="noopener">
            ${article.repo.label}
          </a>
        </p>
      </section>

      <section class="article-section sources-section">
        <h2>Sources & Official Documentation</h2>
        <ul>
          ${sourcesHtml}
        </ul>
      </section>

      <section class="article-actions article-bottom-actions">
        <a class="article-btn" href="articles.html">Back to Articles</a>
        <button class="share-btn" type="button" onclick="shareCurrentArticle()">
          <i class="fas fa-share-nodes"></i> Share Article
        </button>
      </section>
    `;

  } catch (error) {
    root.innerHTML = `
      <h1>Error loading article</h1>
      <p>Could not load article data.</p>
      <a class="article-btn" href="articles.html">Back to Articles</a>
    `;
    console.error(error);
  }
}

function shareCurrentArticle() {
  const url = window.location.href;
  const title = document.title;

  if (navigator.share) {
    navigator.share({
      title,
      text: "Read this technical article.",
      url
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url)
      .then(() => alert("Article link copied to clipboard."))
      .catch(() => alert("Could not copy link."));
  }
}



loadArticle();