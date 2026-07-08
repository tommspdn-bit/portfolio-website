// Hero slideshow
const slides = document.querySelectorAll(".hero-slide");

if (slides.length > 0) {
  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
  }, 4000);
}

// Gallery lightbox
const galleryImages = document.querySelectorAll(".project-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightbox img");

if (galleryImages.length > 0 && lightbox && lightboxImage) {
  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.src;
      lightbox.classList.add("active");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImage.src = "";
  });
}

// Graphic Design thumbnail hover swap with fade
const brandingCard = document.querySelector(".branding-card");

if (brandingCard) {
  const brandingImage = brandingCard.querySelector("img");

  brandingCard.addEventListener("mouseenter", () => {
    brandingImage.style.opacity = "0";

    setTimeout(() => {
      brandingImage.src = "assets/WNB.png";
      brandingImage.style.opacity = "1";
    }, 150);
  });

  brandingCard.addEventListener("mouseleave", () => {
    brandingImage.style.opacity = "0";

    setTimeout(() => {
      brandingImage.src = "assets/BNW.png";
      brandingImage.style.opacity = "1";
    }, 150);
  });
}