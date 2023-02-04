window.addEventListener('DOMContentLoaded', (e) => {
    const menu = document.querySelector('.nav-menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', (e) => {
        menu.classList.toggle('nav-menu_active')
        hamburger.classList.toggle('hamburger_active')
    });
    menuItem.forEach(item => {
        item.addEventListener(('click'), (e) => {
            menu.classList.toggle('nav-menu_active')
            hamburger.classList.toggle('hamburger_active')
        })
    });
});

