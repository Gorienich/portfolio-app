document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll('.progress');
  
  progressBars.forEach(bar => {
      const skillValue = bar.getAttribute('data-skill');
      bar.style.width = skillValue; // Set the width based on data-skill value
  });
});



// Toggle visibility of scroll-to-top button based on scroll position
const scrollToTopBtn = document.querySelector('.scroll-to-top');

function toggleVisibility() {
  if (window.scrollY > 300) { // Button appears after scrolling 300px down
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
}

// Event listener for scrolling
window.addEventListener('scroll', toggleVisibility);

// Smooth scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

});
