// landing/static/landing/js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navContent = document.querySelector('.nav-content');

    if (menuToggle && navContent) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navContent.classList.toggle('active');

            // Optional: Prevent scrolling when menu is open
            document.body.style.overflow = navContent.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Product Carousel Logic
    const slides = document.querySelectorAll('.product-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const intervalTime = 3000; // 3 seconds

        setInterval(() => {
            // Remove active class from current slide
            slides[currentSlide].classList.remove('active');

            // Move to next slide
            currentSlide = (currentSlide + 1) % slides.length;

            // Add active class to new slide
            slides[currentSlide].classList.add('active');
        }, intervalTime);
    }
});
