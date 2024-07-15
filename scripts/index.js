//BURGER TRANSFORMATION
const burgerLines = document.querySelectorAll(".burger-line");
const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  burgerLines.forEach((line) => {
    line.classList.toggle("active-burger");
  });
  document.querySelector(".nav-link-container").classList.toggle("active-nav");
});
const navAllLinks = document.querySelectorAll(".nav-link-container li");
navAllLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerLines.forEach((line) => {
      line.classList.remove("active-burger");
      document
        .querySelector(".nav-link-container")
        .classList.remove("active-nav");
    });
  });
});
