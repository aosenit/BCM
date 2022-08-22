const nav = document.querySelector(".headerNav ul");
const lists = document.querySelectorAll(".headerNav li");
const menu = document.querySelector(".headerMenu");
const main = document.querySelector(".main");
const hero = document.querySelector(".hero");
const open = document.querySelector(".open");
const closes = document.querySelector(".close");

//add event listeners
menu.addEventListener("click", handleMenu);
closes.classList.add("displayNone");

lists.forEach((list) => list.addEventListener("click", handleLists));

function checkNav() {
  if (closes.classList.contains("displayNone")) {
    closes.classList.remove("displayNone");
    open.classList.add("displayNone");
    main.classList.add("displayNone");
    hero.classList.add("displayNone");
  } else {
    closes.classList.add("displayNone");
    open.classList.remove("displayNone");
    main.classList.remove("displayNone");
    hero.classList.add("displayNone");
  }
}

function handleMenu() {
  nav.classList.toggle("hide");
  checkNav();
}

function handleLists() {
  lists.forEach((list) => list.classList.remove("active"));
  this.classList.add("active");
  nav.classList.remove("hide");
  checkNav();
}
