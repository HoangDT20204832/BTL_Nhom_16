const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navbars_l = $$('.navbarItem')

navbars_l.forEach(function (navbar, index) {
    navbar.onclick = function () {
        $('.navbarItem.active').classList.remove('active')
        navbar.classList.add('active')
    }
})