const nav = document.getElementById("nav");
const navBtn = document.getElementById("mobile-toggle-icon");
const navLinks = document.getElementById("nav").childNodes;

const tnslider = tns({
  container: ".slider",
  slideby: 1,
  speed: 700,
  nav: true,
  navPosition: "bottom",
  autoPlay: true,
  autoPlayTimeout: 7000,
  autoPlayButtonOutput: false,
  controlsContainer: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
});

navBtn.addEventListener("click", () => {
  nav.classList.toggle("showNav");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.style.left = "-100%";
  });
});
