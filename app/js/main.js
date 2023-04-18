
  const menuList = document.querySelector(".menu__list");
  const body = document.querySelector("body");
  const openMenu = document.querySelector(".menu__btn");
  const closeMenu = document.querySelector(".menu__close");

  openMenu.addEventListener("click", () => {
    if (!menuList.classList.contains("open")) {
      menuList.classList.add("open");
      body.classList.add("hidden");
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

  /**Pizza logik */
  
  const pizzaItems = document.querySelectorAll(".pizza__item");
  const descrItems = document.querySelectorAll(".pizza__descr");
  const pizzaContainer = document.querySelector(".pizza__box");

  closeDescrItems(descrItems);
  showDescrItem(descrItems, 0);
  detectTranslate(pizzaItems, 0);

  pizzaItems.forEach((item, id) => {
    item.addEventListener("mouseover", () => {
      closeDescrItems(descrItems);
      showDescrItem(descrItems, id);
      detectTranslate(pizzaItems, id);
    });
    item.addEventListener("mouseout", () => {
      closeDescrItems(descrItems);
       showDescrItem(descrItems, id);
       detectTranslate(pizzaItems, id);
    });
  });



  function showDescrItem(arr, id) {
    arr[id].classList.add("show");
    arr[id].classList.remove("none");
  }

  function closeDescrItems(arr) {
    arr.forEach((item, id) => {
      item.classList.remove("show");
      item.classList.add("none");
      pizzaItems[id].classList.remove("translateTopLeft");
      pizzaItems[id].classList.remove("translateTopRigth");
      pizzaItems[id].classList.remove("translateBottomLeft");
      pizzaItems[id].classList.remove("translateBottomRight");
    });
  }


function detectTranslate(arr, id) {
  switch (id) {
    case 0:
      arr[id].classList.add("translateTopLeft");
      break;
    case 1:
      arr[id].classList.add("translateTopRigth");
      break;
    case 2:
      arr[id].classList.add("translateBottomLeft");
      break;
    case 3:
      arr[id].classList.add("translateBottomRight");
      break;
  }
}


