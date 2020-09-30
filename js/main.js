//переменные
const btnBurger = document.querySelector(".btn-burger");
const catalog = document.querySelector(".catalog");
const btnClose = document.querySelector(".btn-close");
const subCatalog = document.querySelector(".subcatalog");
const subCatalogHeader = document.querySelector(".subcatalog-header");
const btnReturn = document.querySelector(".btn-return");

//создание overlay
const overlay = document.createElement("div");        
overlay.classList.add("overlay");
document.body.insertAdjacentElement("beforeend", overlay);

//Функция для открытия меню
const openMenu = () => {
  catalog.classList.add("open");
  overlay.classList.add("active"); 
};

//Функция для закрытия меню
const closeMenu = () => {
  catalog.classList.remove("open");
  overlay.classList.remove("active");
  closeSubMenu();
};

//открытие доп меню
const openSubMenu = (event) => {
  event.preventDefault();
  const itemList = event.target.closest(".catalog-list__item");
  if (itemList) {
    subCatalogHeader.innerHTML = itemList.innerHTML; 
    subCatalog.classList.add("subopen");
  }
};

//Закрытие доп меню
const closeSubMenu = () => {
  subCatalog.classList.remove("subopen");
};

//Ивенты
btnBurger.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
catalog.addEventListener("click", openSubMenu);
btnReturn.addEventListener("click", closeSubMenu);

//Ивент для отлавливания закрытия меню при нажатии на клавишу
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") closeMenu();
});
