document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
  
      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const messageValue = messageInput.value.trim();
  
      if (nameValue === '') {
        showError(nameInput, 'Name is required');
      } else {
        showSuccess(nameInput);
      }
  
      if (emailValue === '') {
        showError(emailInput, 'Email is required');
      } else if (!isValidEmail(emailValue)) {
        showError(emailInput, 'Please enter a valid email address');
      } else {
        showSuccess(emailInput);
      }
  
      if (messageValue === '') {
        showError(messageInput, 'Message is required');
      } else {
        showSuccess(messageInput);
        // Call a function to display success popup here
        displaySuccessPopup();
      }
    });
  
    function showError(input, message) {
      const formControl = input.parentElement;
      formControl.classList.add('error');
      const errorMessage = formControl.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.textContent = message;
      }
    }
  
    function showSuccess(input) {
      const formControl = input.parentElement;
      formControl.classList.remove('error');
      formControl.classList.add('success');
      const errorMessage = formControl.querySelector('.error-message');
      if (errorMessage) {
        errorMessage.textContent = '';
      }
    }
  
    function isValidEmail(email) {
      // Basic email validation regex
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    function displaySuccessPopup() {
      // You can implement your own logic here to display a success popup
      alert('Form submitted successfully!'); // Example: Display an alert as a popup
    }
  });
  