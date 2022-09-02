// Dropdown
const items = [];
const firstItem = document.querySelector("#firstDrop");
const secondItem = document.querySelector("#secondDrop");
const icons = [...document.querySelectorAll(".rotate")];

const firstIcon = document.querySelector(
  ".aside-menu__content__list__list-item__drop__item__link::after"
);

items.push(firstItem);
items.push(secondItem);

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    item.children[2].classList.toggle("drop");
    icons[index].classList.toggle("down");
  });
});

// Aside
const aside = document.querySelector(".aside-menu");
const asideOpen = document.querySelector("#aside-btn");
const asideClose = document.querySelector("#close-btn");

asideOpen.addEventListener("click", (e) => {
  aside.classList.add("show");
  asideOpen.classList.add("show");
});

asideClose.addEventListener("click", (e) => {
  aside.classList.remove("show");
  asideOpen.classList.remove("show");
});

// Blog
const wrappers = [...document.querySelectorAll(".blog__second-row__wrapper")];

const firstClass = [
  ...document.querySelectorAll(
    ".blog__second-row__wrapper__content__btn__label"
  ),
];
const secondClass = [
  ...document.querySelectorAll(
    ".blog__second-row__wrapper__content__btn__wrapper"
  ),
];
const thirdClass = [
  ...document.querySelectorAll(".blog__second-row__wrapper__img"),
];
const fourthClass = [
  ...document.querySelectorAll(
    ".blog__second-row__wrapper__content__header__link"
  ),
];

wrappers.forEach((wrapper, index) => {
  wrapper.addEventListener("mouseover", (e) => {
    firstClass[index].classList.add("show");
    secondClass[index].classList.add("show");
    thirdClass[index].classList.add("show");
    fourthClass[index].classList.add("show");
  });
});

wrappers.forEach((wrapper, index) => {
  wrapper.addEventListener("mouseleave", (e) => {
    firstClass[index].classList.remove("show");
    secondClass[index].classList.remove("show");
    thirdClass[index].classList.remove("show");
    fourthClass[index].classList.remove("show");
  });
});

// Toggle Button
const btn = document.querySelector(".pricing__header__choice__toggle");
const prices = document.querySelectorAll(
  ".pricing__content__change__price__box__div"
);
const states = document.querySelectorAll(
  ".pricing__content__change__state__box__div"
);

btn.addEventListener("click", () => {
  btn.classList.toggle("toggleBtn");

  if (btn.classList.contains("toggleBtn")) {
    prices.forEach((price) => {
      price.classList.add("change");
    });
    states.forEach((state) => {
      state.classList.add("change");
    });
  } else {
    prices.forEach((price) => {
      price.classList.remove("change");
    });
    states.forEach((state) => {
      state.classList.remove("change");
    });
  }
});
