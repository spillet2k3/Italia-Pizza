$(function () {
  const menuList = document.querySelector(".menu__list");
  const body = document.querySelector("body");
  const openMenu = document.querySelector(".menu__btn");
  const closeMenu = document.querySelector(".menu__close");

  openMenu.addEventListener("click", () => {
    if (!menuList.classList.contains("open")) {
      menuList.classList.add("open");
      body.classList.add('hidden');
    } else {
      menuList.classList.remove("open");
      body.classList.remove("hidden");
    }
  });

  closeMenu.addEventListener("click", () => {
    if (menuList.classList.contains("open")) {
      menuList.classList.remove("open");
       body.classList.remove("hidden");
    } else {
      menuList.classList.add("open");
       body.classList.add("hidden");
    }
  });
});
