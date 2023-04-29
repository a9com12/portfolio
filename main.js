"use strict";


//Make navbar
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--scroll");
    } else {
        navbar.classList.remove("navbar--scroll");

    }
});