document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     Smooth Scroll
  ========================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* =========================
     Slideshow
  ========================= */
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = "none";
      dots[i].classList.remove("active");
    });

    slides[index].style.display = "block";
    dots[index].classList.add("active");
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  window.currentSlide = function (index) {
    slideIndex = index;
    showSlide(slideIndex);
  };

  if (slides.length > 0) {
    showSlide(slideIndex);
    setInterval(nextSlide, 5000); // 5 seconds
  }

  /* =========================
     Happy New Year Popup
  ========================= */
  const popup = document.getElementById("newYearPopup");

  if (popup && !localStorage.getItem("newYearPopupShown")) {
    popup.style.display = "flex";
  }

  window.closePopup = function () {
    if (popup) {
      popup.style.display = "none";
      localStorage.setItem("newYearPopupShown", "true");
    }
  };

});
