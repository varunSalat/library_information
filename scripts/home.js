// !SWIPER JS
//   <!-- Initialize Swiper -->
var swiper = new Swiper(".testi_container", {
  effect: "none",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 1000, // Delay between transitions in milliseconds
    disableOnInteraction: false, // Keep autoplay running even after user interaction
  },
});
