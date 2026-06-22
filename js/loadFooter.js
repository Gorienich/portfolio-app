fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    const footer = document.getElementById('global-footer');
    if (footer) {
      footer.innerHTML = data;
    }
  })
  .catch(error => console.error('Error loading footer:', error));
