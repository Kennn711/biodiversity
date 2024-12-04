document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.remove("transparent");
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      navbar.classList.add("transparent");
    }
  });

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.add("transparent");
  }
});
