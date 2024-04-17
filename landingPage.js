const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = testimonialSlider.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.testimonials .prev');
const nextButton = document.querySelector('.testimonials .next');

let currentTestimonial = 0;

function showTestimonial(n) {
  testimonials.forEach(testimonial => testimonial.classList.remove('active'));
  testimonials[n].classList.add('active');
  currentTestimonial = n;
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

// Show the first testimonial by default
showTestimonial(currentTestimonial);

// Add event listeners for navigation buttons
prevButton.addEventListener('click', prevTestimonial);
nextButton.addEventListener('click', nextTestimonial);

// Automatically rotate the testimonials every 5 seconds
setInterval(nextTestimonial, 5000);