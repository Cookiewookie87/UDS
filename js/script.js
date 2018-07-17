// navigation selection
const navigation = document.querySelector("ul.navigation");
const navigationToggleButton = document.querySelector(".navigation-toggle");
const navigationList = document.querySelectorAll(".navigation a");
const navigationToggleIcon = navigationToggleButton.querySelector("i");
const logo = document.getElementById("logo");
const navWrap = document.querySelector(".nav-wrap ul");

// background image selector
const backgroundImgDiv = document.querySelector(".bg");
const previousImgBtn = document.querySelector(".prev");
const nextImgBtn = document.querySelector(".next");
const imgDotBtn = Array.from(document.querySelectorAll(".dot"));
const arrImg = ['url("img/0.jpg")', 'url("img/1.jpg")', 'url("img/2.jpg")', 'url("img/3.jpg")'];
const dot0 = document.querySelector(".dot-0");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
let startImgIndex = 0;
let currentIndex = 0;



// navigation functions
function toggleNav() {
    navigation.classList.toggle("active");
    if (navigationToggleIcon.classList.contains("fa-bars")) { 
        navigationToggleIcon.classList.remove("fa-bars");
        navigationToggleIcon.classList.add("fa-times");
    } else {
        navigationToggleIcon.classList.add("fa-bars");
        navigationToggleIcon.classList.remove("fa-times");
    }
}
 
function navLink() {
    navigation.classList.remove("active");
    navigationToggleIcon.classList.add("fa-bars");
    navigationToggleIcon.classList.remove("fa-times");
}

// background image functions
function nextImgShow() {
    startImgIndex++;
    if (startImgIndex === arrImg.length) {
        startImgIndex = 0;
    }
    currentIndex = startImgIndex;
    backgroundImgDiv.style.backgroundImage = arrImg[startImgIndex];
    toggleDotActive(currentIndex);
    clearInterval(interval);
    interval = setInterval(nextImgShow, 2000);
    
}

function previousImgShow() {
    startImgIndex--;
    if (startImgIndex === -1) {
        startImgIndex = (arrImg.length - 1);
    }
    currentIndex = startImgIndex;
    backgroundImgDiv.style.backgroundImage = arrImg[startImgIndex];
    toggleDotActive(currentIndex);
    clearInterval(interval);
    interval = setInterval(nextImgShow, 2000);
    
}

function dotBtnNavigate() { 
    if (this.classList.contains("dot-0")) {
        dotBtnSet(0);
    } else if (this.classList.contains("dot-1")) {
        dotBtnSet(1);
    } else if (this.classList.contains("dot-2")) {
        dotBtnSet(2);
    } else if (this.classList.contains("dot-3")) {
        dotBtnSet(3);
    }
}

function dotBtnSet (number) {
    backgroundImgDiv.style.backgroundImage = arrImg[number];
    startImgIndex = number;
    currentIndex = number;
    toggleDotActive(currentIndex);
    clearInterval(interval);
    interval = setInterval(nextImgShow, 2000);
}

function toggleDotActive(currentIndex) {
    switch(currentIndex) {
        case 0:
            dot0.classList.add("dot-active");
            dot1.classList.remove("dot-active");
            dot2.classList.remove("dot-active");
            dot3.classList.remove("dot-active");
            break;
        case 1:
            dot0.classList.remove("dot-active");
            dot1.classList.add("dot-active");
            dot2.classList.remove("dot-active");
            dot3.classList.remove("dot-active");
            break;
        case 2:
            dot0.classList.remove("dot-active");
            dot1.classList.remove("dot-active");
            dot2.classList.add("dot-active");
            dot3.classList.remove("dot-active");
            break;
        case 3:
            dot0.classList.remove("dot-active");
            dot1.classList.remove("dot-active");
            dot2.classList.remove("dot-active");
            dot3.classList.add("dot-active");
            break;
        default:
            break;
    }
}

// navigation events
navigationToggleButton.addEventListener("click", toggleNav);
navigationList.forEach(item => item.addEventListener("click", navLink));

// background image event
nextImgBtn.addEventListener("click", nextImgShow)

previousImgBtn.addEventListener("click", previousImgShow);
imgDotBtn.forEach(btn => btn.addEventListener("click", dotBtnNavigate));

// for touch devices (carousel navigate)
const gestureZone = document.querySelector('.img-wrap');
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

// for touch devices function (carousel navigate)
function handleGesture() {
    if (touchendX <= touchstartX) {
        nextImgShow();
    }
    
    if (touchendX >= touchstartX) {
        previousImgShow();
    }
}

var interval = setInterval(nextImgShow, 2000);
// navigation events
navigationToggleButton.addEventListener("click", toggleNav);
navigationList.forEach(item => item.addEventListener("click", navLink));

// background image event
nextImgBtn.addEventListener("click", nextImgShow);
previousImgBtn.addEventListener("click", previousImgShow);
imgDotBtn.forEach(btn => btn.addEventListener("click", dotBtnNavigate));

// for touch devices events (carousel navigate)
gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);


