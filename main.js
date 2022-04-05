const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navslide = $(".nav--slide")
const button = $(".header--menu__icon")
const navslideSmall = $(".nav--slide--small")
const menuIcon = $('.menu-icon')

const toggle = () => {
    button.onclick = () => {
        navslide.classList.toggle('nav--active')
        navslideSmall.classList.toggle("nav--active")
        menuIcon.setAttribute('style', 'animation: buttonClick .5s ease')
        setTimeout(() => {
            menuIcon.setAttribute('style', 'animation: ""')
        }, 200)
    }

}
toggle()


