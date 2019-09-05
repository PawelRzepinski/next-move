const burger = document.querySelector(".burger");
const menu = document.querySelector(".navigation");
const lineUp = document.querySelector(".line--top");
const lineMiddle = document.querySelector(".line--middle");
const lineBottom = document.querySelector(".line--down")

function menuAction() {
    lineUp.classList.toggle("up--move");
    lineMiddle.classList.toggle("middle--move");
    lineBottom.classList.toggle("bottom--move");
    menu.classList.toggle("navigation--active");
    burger.classList.toggle("burger--position");
}

burger.addEventListener("click", menuAction);