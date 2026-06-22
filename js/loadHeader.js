fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('global-header').innerHTML = data;

    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const menu = document.getElementById("menu");

    if (menuButton && closeButton && menu) {
      menuButton.addEventListener("click", () => {
        menu.classList.add("menu-active");
        menu.classList.remove("menu-inactive");
      });

      closeButton.addEventListener("click", () => {
        menu.classList.remove("menu-active");
        menu.classList.add("menu-inactive");
      });

      const menuLinks = menu.querySelectorAll("a");
      menuLinks.forEach(link => {
        link.addEventListener("click", () => {
          menu.classList.remove("menu-active");
          menu.classList.add("menu-inactive");
        });
      });
    }

    setActiveNavLink();

    window.addEventListener("hashchange", setActiveNavLink);
  })
  .catch(error => console.error("Error loading header:", error));


function setActiveNavLink() {
  const links = document.querySelectorAll(".header a, .menu a");

  const currentPage = getCurrentPage();
  const currentHash = window.location.hash;

  links.forEach(link => {
    link.classList.remove("active");

    const linkUrl = new URL(link.getAttribute("href"), window.location.href);
    const linkPage = getPageFromPath(linkUrl.pathname);
    const linkHash = linkUrl.hash;

    /*
      Rule 1:
      If current page + hash match exactly, activate it.
      Example:
      current = index.html#case-studies
      link    = index.html#case-studies
    */
    if (linkPage === currentPage && linkHash && linkHash === currentHash) {
      link.classList.add("active");
      return;
    }

    /*
      Rule 2:
      If current page has no hash, activate page link.
      Example:
      current = about.html
      link    = about.html
    */
    if (linkPage === currentPage && !currentHash && !linkHash) {
      link.classList.add("active");
      return;
    }

    /*
      Rule 3:
      If current page is about.html#contact,
      activate Contact, not About.
    */
    if (linkPage === currentPage && currentHash && linkHash === currentHash) {
      link.classList.add("active");
    }
  });
}


function getCurrentPage() {
  return getPageFromPath(window.location.pathname);
}


function getPageFromPath(pathname) {
  const page = pathname.split("/").pop();

  if (!page || page === "") {
    return "index.html";
  }

  return page;
}