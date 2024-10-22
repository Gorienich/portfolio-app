fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('global-header').innerHTML = data;

    // Add event listeners after the header is loaded
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", () => {
      menu.classList.add("menu-active");
      menu.classList.remove("menu-inactive");
    });

    closeButton.addEventListener("click", () => {
      menu.classList.remove("menu-active");
      menu.classList.add("menu-inactive");
    });

    // Close the menu when a link is clicked
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove("menu-active");
        menu.classList.add("menu-inactive");
      });
    });
  })
  .catch(error => console.error('Error loading header:', error));
