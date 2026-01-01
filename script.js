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

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

/* Start slideshow */
showSlide(slideIndex);
setInterval(nextSlide, 5000); // 5 seconds

<script>
  window.onload = function () {
    if (!localStorage.getItem("newYearPopupShown")) {
      document.getElementById("newYearPopup").style.display = "flex";
    }
  };

  function closePopup() {
    document.getElementById("newYearPopup").style.display = "none";
    localStorage.setItem("newYearPopupShown", "true");
  }
</script>
