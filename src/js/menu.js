function menuEvent() {
  let btn = document.querySelector(".header-nav__controls");
  let target = document.querySelector(".header-nav");
  function openMenu() {
    target.classList.toggle("opened");
  }
  btn.addEventListener("click", openMenu);
}

export { menuEvent };
