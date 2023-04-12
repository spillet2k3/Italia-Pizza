
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