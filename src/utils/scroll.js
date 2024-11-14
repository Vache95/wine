const menuBody = document.querySelector('.menu');

document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo(0, 0);
    const header = document.querySelector('.header');
    const threshold = 200;
    const colorChangeThreshold = 100;
    let lastScrollY = 0;
    let isHidden = false;


    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (window.innerWidth <= 992) {
            menuBody.style.display = 'none'
        }


        if (currentScrollY > threshold) {
            if (currentScrollY > lastScrollY && !isHidden) {
                header.classList.add('hidden');
                isHidden = true;
            } else if (currentScrollY < lastScrollY && isHidden) {
                header.classList.remove('hidden');
                isHidden = false;
            }
        } else if (isHidden) {
            header.classList.remove('hidden');
            isHidden = false;
        }


        if (currentScrollY > colorChangeThreshold && window.innerWidth >= 992) {
            header.classList.add('scrolled');
        } else if (window.innerWidth >= 992) {
            header.classList.remove('scrolled');
        } else if (window.innerWidth <= 992) {
            header.classList.add('scrolled')
        }

        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
});




