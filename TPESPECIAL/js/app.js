const navSlider = () => {
    const navIcon = document.querySelector('.navIcon');
    const nav = document.querySelector('nav');
    const closeIcon = document.querySelector('.closeLogo');
    const navLinks = document.querySelectorAll('navBar li');
    const logoTitle = document.querySelector('h1');
    navIcon.addEventListener('click', () => {
        nav.classList.add('navBar-Active');
        logoTitle.classList.add('titleNavOpen');
        /*navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';

            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index/5 + 1}s`
            }

        });
        */

    });
    closeIcon.addEventListener('click', () => {
        nav.classList.remove('navBar-Active');
        logoTitle.classList.remove('titleNavOpen');
    });
}
const imageSlider = () => {
    const imgIcon = document.querySelector('.arrowImg');
    const img = document.querySelector('.mainImg');
    imgIcon.addEventListener('click', () => {
        console.log(img.src);
        if (img.src.includes('homeImage1.jpg')) {
            img.src = "images/homeImage2.jpg";
            console.log('puto');
        } else {
            img.src = "images/homeImage1.jpg";
            console.log('puto1');
        }

    });

}
navSlider();
imageSlider();