const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector('.nav-menu')
const header = document.querySelector('header')
const section = document.querySelector('section')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    header.classList.toggle("active")
    section.classList.toggle("active")
})