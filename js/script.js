// navigation selection
const navigationTwo = document.querySelector("ul.navigationTwo");
const navigationToggleButton = document.querySelector(".navigation-toggle");
const navigationListTwo = document.querySelectorAll(".navigationTwo .scroll_anchor");
const navigationToggleIcon = navigationToggleButton.querySelector("i");
const logo = document.getElementById("logo");
const navWrap = document.querySelector(".nav-wrap ul");

// background image selector
const arrImg = Array.from(document.querySelectorAll(".carouselImg"));
const previousImgBtn = document.querySelector(".prev");
const nextImgBtn = document.querySelector(".next");
let startImgIndex = 0;
let currentIndex = 0;
const dot0 = document.querySelector(".dot-0");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const dot4 = document.querySelector(".dot-4");
const dot5 = document.querySelector(".dot-5");
const dots = Array.from(document.querySelectorAll(".dot"));
const imgIntervalSpeed = 5000;
let interval = setInterval(nextImgShow, imgIntervalSpeed);

// navigation anchor scroll
const nav = document.querySelector(".nav");
const navLinks = Array.from(document.querySelectorAll(".navigation a"));
const navLinksTwo = Array.from(document.querySelectorAll(".navigationTwo .scroll_anchor"));
const navAnchor = Array.from(document.querySelectorAll(".main-title"));

// copy text
const emailText = document.querySelector(".email");
emailText.innerHTML = "&#100;&#97;&#110;&#99;&#101;&#115;&#116;&#117;&#100;&#105;&#111;&#46;&#117;&#100;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"

// navigation functions
function toggleNav() {
    navigationTwo.classList.toggle("active");
    if (navigationToggleIcon.classList.contains("fa-bars")) { 
        navigationToggleIcon.classList.remove("fa-bars");
        navigationToggleIcon.classList.add("fa-times");
    } else {
        navigationToggleIcon.classList.add("fa-bars");
        navigationToggleIcon.classList.remove("fa-times");
    }
}
function navLink() {
    navigationTwo.classList.remove("active");
    navigationToggleIcon.classList.add("fa-bars");
    navigationToggleIcon.classList.remove("fa-times");
}
function nextImgShow() {
    startImgIndex++;
    if (startImgIndex === arrImg.length) {
        startImgIndex = 0;
    }
    currentIndex = startImgIndex;
    arrImg.forEach(img => img.classList.remove("carouselImg--active"));
    arrImg[startImgIndex].classList.add("carouselImg--active");
    toggleDotActive(currentIndex);
    clearInterval(interval);
    interval = setInterval(nextImgShow, imgIntervalSpeed);
}
function previousImgShow() {
    startImgIndex--;
    if (startImgIndex === -1) {
        startImgIndex = (arrImg.length - 1);
    }
    currentIndex = startImgIndex;
    arrImg.forEach(img => img.classList.remove("carouselImg--active"));
    arrImg[startImgIndex].classList.add("carouselImg--active");
    toggleDotActive(currentIndex);
    clearInterval(interval);
    interval = setInterval(nextImgShow, imgIntervalSpeed);
}
function toggleDotActive(currentIndex) {
    dots.forEach(dot => dot.classList.remove("dot-active"));
    dots[currentIndex].classList.add("dot-active");
}
function dotBtnNavigate() { 
    let dotIndex = dots.indexOf(this);
    console.log(arrImg[dotIndex]);
    arrImg.forEach(img => img.classList.remove("carouselImg--active"));
    arrImg[dotIndex].classList.add("carouselImg--active");
    toggleDotActive(dotIndex);
    startImgIndex = dotIndex;
    currentIndex = dotIndex;
    clearInterval(interval);
    interval = setInterval(nextImgShow, imgIntervalSpeed);
}

// anchor scroll function
function scrollTo(element) {
    let elementCoord = element.getBoundingClientRect();
    if (element.classList.contains("main-title")) { 
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: elementCoord.top + window.scrollY - nav.clientHeight
        });
    } else {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: 0
        });
    }
}
function scrollPage() { 
    const title1 = navAnchor[0].getBoundingClientRect();
    const title1Pos = title1.top - 1;
    const title2 = navAnchor[1].getBoundingClientRect();
    const title2Pos = title2.top - 1;
    const title3 = navAnchor[2].getBoundingClientRect();
    const title3Pos = title3.top - 1;
    const title4 = navAnchor[3].getBoundingClientRect();
    const title4Pos = title4.top - 1;

    if (title1Pos > nav.clientHeight) { 
        navLinks.forEach(link => link.classList.remove("navBtn-active"));
    }
    if (title1Pos <= nav.clientHeight && title2Pos > nav.clientHeight) { 
        navLinks.forEach(link => link.classList.remove("navBtn-active"));
        navLinks[0].classList.add("navBtn-active");
    }
    if (title2Pos <= nav.clientHeight && title3Pos > nav.clientHeight) { 
        navLinks.forEach(link => link.classList.remove("navBtn-active"));
        navLinks[1].classList.add("navBtn-active");
    }
    if (title3Pos <= nav.clientHeight && title4Pos > nav.clientHeight) { 
        navLinks.forEach(link => link.classList.remove("navBtn-active"));
        navLinks[2].classList.add("navBtn-active");
    }
    if (title4Pos <= nav.clientHeight) { 
        navLinks.forEach(link => link.classList.remove("navBtn-active"));
        navLinks[3].classList.add("navBtn-active");
    }
}

// navigation events
navigationToggleButton.addEventListener("click", toggleNav);
navigationListTwo.forEach(item => item.addEventListener("click", navLink));

// background image event
nextImgBtn.addEventListener("click", nextImgShow);
previousImgBtn.addEventListener("click", previousImgShow);
dots.forEach(btn => btn.addEventListener("click", dotBtnNavigate));

// anchor scroll event
navLinks.forEach(link => link.addEventListener("click", function(e) {
    e.preventDefault();
    let navIndex = navLinks.indexOf(link);
    navAnchor[navIndex].classList.add("navBtn-active");
    scrollTo(navAnchor[navIndex]);
}));
navLinksTwo.forEach(link => link.addEventListener("click", function(e) {
    e.preventDefault();
    let navIndexTwo = navLinksTwo.indexOf(link);
    scrollTo(navAnchor[navIndexTwo]);
}));
logo.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo(logo);
});

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

// navigation events
navigationToggleButton.addEventListener("click", toggleNav);
navigationListTwo.forEach(item => item.addEventListener("click", navLink));
document.addEventListener("scroll", scrollPage);

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


