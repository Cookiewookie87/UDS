const navigation = document.querySelector("ul.navigation");
const navigationToggleButton = document.querySelector(".navigation-toggle");
const navigationList = document.querySelectorAll(".navigation a");

function toggleNav() {
    navigation.classList.toggle("active");
}
function navLink() {
    navigation.classList.remove("active");
}
navigationToggleButton.addEventListener("click", toggleNav);
navigationList.forEach(item => item.addEventListener("click", navLink));
