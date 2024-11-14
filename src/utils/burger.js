const iconMenu = document.querySelector('.menu__icon');
const link = document.querySelector('.menu__list');
const menuBody = document.querySelector('.menu');


if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuBody.style.display = 'block'

        if (document.body.style.overflow === 'hidden') {
            document.body.style.overflow = 'scroll'
        } else {
            document.body.style.overflow = 'hidden'
        }
    });

}


if (link) {
    link.addEventListener("click", function (e) {
        if (e.target.closest('.menu__item') && window.innerWidth <= 992) {
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        }
        document.body.style.overflow = 'scroll'
    });
}