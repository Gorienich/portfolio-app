fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('global-footer').innerHTML = data;

    // Toggle footer visibility on mobile
    const footer = document.getElementById("footer");
    const toggleFooterButton = document.getElementById("toggleFooter");

    toggleFooterButton.addEventListener("click", () => {
      if (footer.style.display === "none" || footer.style.display === "") {
        footer.style.display = "block";
        toggleFooterButton.textContent = "v"; // Change arrow to down
      } else {
        footer.style.display = "none";
        toggleFooterButton.textContent = "^"; // Change arrow to up
      }
    });
  })
  .catch(error => console.error('Error loading footer:', error));
