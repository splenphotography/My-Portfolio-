document.addEventListener("DOMContentLoaded", function () {

  /* =========================
      Smooth Scroll
  ========================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
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
      if (dots[i]) {
        dots[i].classList.remove("active");
      }
    });

    if (slides[index]) {
      slides[index].style.display = "block";
    }
    if (dots[index]) {
      dots[index].classList.add("active");
    }
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
      Navbar Show on Scroll
  ========================= */
  const navbar = document.getElementById("navbar");

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        navbar.classList.add("show");
      } else {
        navbar.classList.remove("show");
      }
    });
  }

  /* =========================
      Contact Form with EmailJS
  ========================= */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const templateParams = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
      };

      // Replace 'service_id' and 'template_id' with your actual EmailJS credentials
      emailjs.send('service_id', 'template_id', templateParams)
        .then(function () {
          alert('Message sent successfully!');
          contactForm.reset();
        }, function (error) {
          alert('Failed to send message. Please try again.');
          console.error('EmailJS error:', error);
        });
    });
  }
});
