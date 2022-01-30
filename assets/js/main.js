/* QUESTIONS ACCORDION */
const accordionItems = document.querySelectorAll(".questions__item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/* FİLTERS */
const filters = document.querySelectorAll(".colleaction__btn");

filters.forEach((filter) => {
  filter.addEventListener("click", function () {
    let selectedFilter = filter.getAttribute("data-filter");
    let itemsToHide = document.querySelectorAll(
      `.colleaction__container .cardOne__item:not([data-filter='${selectedFilter}'])`
    );
    let itemsToShow = document.querySelectorAll(
      `.colleaction__container [data-filter='${selectedFilter}']`
    );

    if (selectedFilter == "all") {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll(
        ".colleaction__container [data-filter]"
      );
    }

    itemsToHide.forEach((el) => {
      el.classList.add("hide");
      el.classList.remove("show");
    });

    itemsToShow.forEach((el) => {
      el.classList.remove("hide");
      el.classList.add("show");
    });
  });
});

/* ACTIVE NAV LINK */
document.addEventListener("DOMContentLoaded", function () {
  const selector = ".nav__link";
  const elems = Array.from(document.querySelectorAll(selector));
  const navigation = document.querySelector(".nav__list");

  function makeActive(evt) {
    const target = evt.target;

    if (!target || !target.matches(selector)) {
      return;
    }

    elems.forEach((elem) => elem.classList.remove("active-link"));
    evt.target.classList.add("active-link");
  }

  navigation.addEventListener("mousedown", makeActive);
});

/* ACTIVE BUTTON */
document.addEventListener("DOMContentLoaded", function () {
  const selector = ".colleaction__btn";
  const elems = Array.from(document.querySelectorAll(selector));
  const navigation = document.querySelector(".colleaction__head");

  function makeActive(evt) {
    const target = evt.target;

    if (!target || !target.matches(selector)) {
      return;
    }

    elems.forEach((elem) => elem.classList.remove("active-btn"));
    evt.target.classList.add("active-btn");
  }

  navigation.addEventListener("mousedown", makeActive);
});

/* HERO SWIPER */
let homeSwiper = new Swiper(".hero-swiper", {
  spaceBetween: 30,
  loop: "true",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* FEATURED SWIPER */

var featuredSwiper = new Swiper(".custom-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(`.hero-swiper`);
