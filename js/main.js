// Burger
const burger = document.querySelector("#burger"),
  nav = document.querySelector("#nav"),
  body = document.querySelector("#body");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("nav--active");
  body.classList.toggle("stop-scroll");
});

// Modal
const modalParent = document.querySelector("#modal-parent"),
  callFormBtn = document.querySelector("#call-btn"),
  modal = document.querySelector("#modal"),
  modalClose = document.querySelector("#modal-close");

callFormBtn.addEventListener("click", () => showModal());

modalClose.addEventListener("click", (e) => closeModal());

modalParent.addEventListener("click", (e) =>
  e.target === modalParent ? closeModal() : ""
);

window.addEventListener("keydown", (e) =>
  e.key === "Escape" ? closeModal() : ""
);

function closeModal() {
  modalParent.classList.remove("modal-parent--open");
  body.classList.remove("stop-scroll");
}

function showModal() {
  modalParent.classList.add("modal-parent--open");
  body.classList.add("stop-scroll");
}

// ======= Slider ==========
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  navigation: {
    nextEl: "#swiper-next",
    prevEl: "#swiper-prev",
  },
});
