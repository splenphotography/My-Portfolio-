// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentIndex = index;
}

// Automatic slideshow
function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
}

// Click on dots
function currentSlide(index) {
    showSlide(index);
}

// Initialize
showSlide(0);
setInterval(nextSlide, 4000); // Change every 4 seconds
