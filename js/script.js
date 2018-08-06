// navigation selection
const navigationTwo = document.querySelector("ul.navigationTwo");
const navigationToggleButton = document.querySelector(".navigation-toggle");
const navigationListTwo = document.querySelectorAll(".navigationTwo .scroll_anchor");
const navigationToggleIcon = navigationToggleButton.querySelector("i");
const logo = document.getElementById("logo");
const navWrap = document.querySelector(".nav-wrap ul");

// background image selector
const backgroundImgDiv = document.querySelector(".bg");
const previousImgBtn = document.querySelector(".prev");
const nextImgBtn = document.querySelector(".next");
const imgDotBtn = Array.from(document.querySelectorAll(".dot"));
let arrImg;
const imgIntervalSpeed = 5000 // 5 seconds
const arrImgSmall = 
[
    'url("img/carousel/UDSspletna0_comp_800.jpg")', 
    'url("img/carousel/UDSspletna1_comp_800.jpg")',
    'url("img/carousel/UDSspletna2_comp_800.jpg")', 
    'url("img/carousel/UDSspletna3_comp_800.jpg")',
    'url("img/carousel/UDSspletna4_comp_800.jpg")',
    'url("img/carousel/UDSspletna5_comp_800.jpg")',
];

const arrImgBig = 
[
    'url("img/carousel/UDSspletna0_comp_1600.jpg")', 
    'url("img/carousel/UDSspletna1_comp_1600.jpg")',
    'url("img/carousel/UDSspletna2_comp_1600.jpg")', 
    'url("img/carousel/UDSspletna3_comp_1600.jpg")',
    'url("img/carousel/UDSspletna4_comp_1600.jpg")',
    'url("img/carousel/UDSspletna5_comp_1600.jpg")',
];
const dot0 = document.querySelector(".dot-0");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const dot4 = document.querySelector(".dot-4");
const dot5 = document.querySelector(".dot-5");
let startImgIndex = 0;
let currentIndex = 0;
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

// background image functions
function nextImgShow() {
    imgSizing();
    startImgIndex++;
    if (startImgIndex === arrImg.length) {
        startImgIndex = 0;
    }
    currentIndex = startImgIndex;
    backgroundImgDiv.style.backgroundImage = arrImg[startImgIndex];
    toggleDotActive(currentIndex);
    clearInterval(interval);
    interval = setInterval(nextImgShow, imgIntervalSpeed);
    
}

function previousImgShow() {
    imgSizing();
    startImgIndex--;
    if (startImgIndex === -1) {
        startImgIndex = (arrImg.length - 1);
    }
    currentIndex = startImgIndex;
    backgroundImgDiv.style.backgroundImage = arrImg[startImgIndex];
    toggleDotActive(currentIndex);
    clearInterval(interval);
    interval = setInterval(nextImgShow, imgIntervalSpeed);
    
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
    } else if (this.classList.contains("dot-4")) {
        dotBtnSet(4);
    } else if (this.classList.contains("dot-5")) {
        dotBtnSet(5);
    }
}

function imgSizing() {
    if(window.innerWidth < 800) {
        arrImg = arrImgSmall;
    } else {
        arrImg = arrImgBig;
    }
}

function dotBtnSet (number) {
    backgroundImgDiv.style.backgroundImage = arrImg[number];
    startImgIndex = number;
    currentIndex = number;
    toggleDotActive(currentIndex);
    clearInterval(interval);
    interval = setInterval(nextImgShow, imgIntervalSpeed);
}

function toggleDotActive(currentIndex) {
    switch(currentIndex) {
        case 0:
            dot0.classList.add("dot-active");
            dot1.classList.remove("dot-active");
            dot2.classList.remove("dot-active");
            dot3.classList.remove("dot-active");
            dot4.classList.remove("dot-active");
            dot5.classList.remove("dot-active");
            break;
        case 1:
            dot0.classList.remove("dot-active");
            dot1.classList.add("dot-active");
            dot2.classList.remove("dot-active");
            dot3.classList.remove("dot-active");
            dot4.classList.remove("dot-active");
            dot5.classList.remove("dot-active")
            break;
        case 2:
            dot0.classList.remove("dot-active");
            dot1.classList.remove("dot-active");
            dot2.classList.add("dot-active");
            dot3.classList.remove("dot-active");
            dot4.classList.remove("dot-active");
            dot5.classList.remove("dot-active")
            break;
        case 3:
            dot0.classList.remove("dot-active");
            dot1.classList.remove("dot-active");
            dot2.classList.remove("dot-active");
            dot3.classList.add("dot-active");
            dot4.classList.remove("dot-active");
            dot5.classList.remove("dot-active")
            break;
        case 4:
            dot0.classList.remove("dot-active");
            dot1.classList.remove("dot-active");
            dot2.classList.remove("dot-active");
            dot3.classList.remove("dot-active");
            dot4.classList.add("dot-active");
            dot5.classList.remove("dot-active")
            break;
        case 5:
            dot0.classList.remove("dot-active");
            dot1.classList.remove("dot-active");
            dot2.classList.remove("dot-active");
            dot3.classList.remove("dot-active");
            dot4.classList.remove("dot-active");
            dot5.classList.add("dot-active")
            break;
        default:
            break;
    }
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
        navLinks[0].classList.remove("navBtn-active");
        navLinks[1].classList.remove("navBtn-active");
        navLinks[2].classList.remove("navBtn-active");
        navLinks[3].classList.remove("navBtn-active");
    }
    if (title1Pos <= nav.clientHeight && title2Pos > nav.clientHeight) { 
        navLinks[0].classList.add("navBtn-active");
        navLinks[1].classList.remove("navBtn-active");
        navLinks[2].classList.remove("navBtn-active");
        navLinks[3].classList.remove("navBtn-active");
    }
    if (title2Pos <= nav.clientHeight && title3Pos > nav.clientHeight) { 
        navLinks[0].classList.remove("navBtn-active");
        navLinks[1].classList.add("navBtn-active");
        navLinks[2].classList.remove("navBtn-active");
        navLinks[3].classList.remove("navBtn-active");
    }
    if (title3Pos <= nav.clientHeight && title4Pos > nav.clientHeight) { 
        navLinks[0].classList.remove("navBtn-active");
        navLinks[1].classList.remove("navBtn-active");
        navLinks[2].classList.add("navBtn-active");
        navLinks[3].classList.remove("navBtn-active");
    }
    if (title4Pos <= nav.clientHeight) { 
        navLinks[0].classList.remove("navBtn-active");
        navLinks[1].classList.remove("navBtn-active");
        navLinks[2].classList.remove("navBtn-active");
        navLinks[3].classList.add("navBtn-active");
    }
}

// navigation events
navigationToggleButton.addEventListener("click", toggleNav);
navigationListTwo.forEach(item => item.addEventListener("click", navLink));

// background image event
nextImgBtn.addEventListener("click", nextImgShow)

previousImgBtn.addEventListener("click", previousImgShow);
imgDotBtn.forEach(btn => btn.addEventListener("click", dotBtnNavigate));

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

var interval = setInterval(nextImgShow, imgIntervalSpeed);
// navigation events
navigationToggleButton.addEventListener("click", toggleNav);
navigationListTwo.forEach(item => item.addEventListener("click", navLink));
document.addEventListener("scroll", scrollPage);

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


