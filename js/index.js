document.addEventListener("DOMContentLoaded", function() {
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
});


