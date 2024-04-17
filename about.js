document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const aboutImage = document.querySelector('.about-image');

    // Function to handle image hover effect
    function handleImageHover() {
        // Add CSS class on image hover
        this.classList.add('hovered');
    }

    // Function to handle image mouseout
    function handleImageMouseOut() {
        // Remove CSS class on mouseout
        this.classList.remove('hovered');
    }

    // Add mouseover and mouseout event listeners to the about image
    aboutImage.addEventListener('mouseover', handleImageHover);
    aboutImage.addEventListener('mouseout', handleImageMouseOut);

    // Additional JavaScript functionality for the About page can be added here
});
