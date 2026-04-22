import hero1 from "../assets/hero.png";
import hero2 from "../assets/hero2.webp";
document.addEventListener("DOMContentLoaded", () => {
  const heroImages = [hero1, hero2];

  const hero = document.querySelector(".hero");
  const counter = document.querySelector(".hero__counter");

  const swiper = new Swiper(".hero__slider", {
    loop: true,

    navigation: {
      nextEl: ".hero__nav-button--next",
      prevEl: ".hero__nav-button--prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    simulateTouch: false,
    noSwiping: true,

    on: {
      init: function () {
        updateUI(this);
      },

      slideChange: function () {
        updateUI(this);
      },
    },
  });

  function updateUI(swiper) {
    hero.style.backgroundImage = `url(${heroImages[swiper.realIndex]})`;

    counter.textContent = `${swiper.realIndex + 1} / ${heroImages.length}`;
  }
});
