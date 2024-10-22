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

  /* form falidation */
// Validate the phone input to remove non-numeric characters and limit to 10 digits
function validatePhone(input) {
  input.value = input.value.replace(/\D/g, ''); // Remove non-numeric chars
  if (input.value.length > 10) {
    input.value = input.value.slice(0, 10); // Limit to 10 digits
  }
}

// Validate form inputs
function validateForm() {
  let isValid = true;

  // Get form fields
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Get error display elements
  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");

  // Clear previous errors
  nameError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  // Name validation
  if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
    nameError.textContent = "Please enter a valid name (letters only).";
    isValid = false;
  }

  // Phone validation
  if (phone.length !== 10) {
    phoneError.textContent = "Phone number must be exactly 10 digits.";
    isValid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Subject validation
  if (subject === "" || subject.length > 50) {
    subjectError.textContent = "Subject cannot be empty and must be under 50 characters.";
    isValid = false;
  }

  // Message validation
  if (message === "" || message.length > 256) {
    messageError.textContent = "Message cannot be empty and must be under 256 characters.";
    isValid = false;
  }

  return isValid;
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  if (validateForm()) {
    // If validation is successful, send the form data
    const formData = new FormData(this);

    // Example: You could send the data using fetch or XMLHttpRequest here
    fetch('/submit-form', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Handle success response
      alert("Form submitted successfully!");
      this.reset(); // Reset form after successful submission
    })
    .catch(error => {
      // Handle error response
      alert("Error submitting the form. Please try again.");
    });
  }
});



});
