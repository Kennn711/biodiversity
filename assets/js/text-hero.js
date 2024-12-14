const slides = document.querySelectorAll(".slide");
const heroSection = document.querySelector(".hero");

const backgrounds = Array.from(slides).map((slide) => slide.dataset.background);

let currentSlide = 0;
const totalSlides = slides.length;

function setBackground(index) {
  heroSection.style.backgroundImage = `url('${backgrounds[index]}')`;
}

function showSlide(index) {
  if (index < 0 || index >= totalSlides) return;

  setBackground(index);

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setBackground(currentSlide);
showSlide(currentSlide);

setInterval(nextSlide, 4000);
