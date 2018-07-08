
const navButton = document.querySelector(".menu_btn");
const phoneMenu = document.querySelector(".small_menu");
const header = document.querySelector("header");
const menu = document.querySelector(".big_menu");

navButton.addEventListener("click", function () {
    phoneMenu.style.display = "block";
    menu.classList.toggle("small_menu");
});
