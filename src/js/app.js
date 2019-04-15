// NAV BAR
export const navSlide = () => {
    const burger = document.querySelector('.navbar__burger');
    const navbar__ul = document.querySelector('.navbar__ul');

    //toggle nav
    burger.addEventListener('click', ()=>{
        navbar__ul.classList.toggle('navbar--active');

         //burger animation
        burger.classList.toggle('toggle');
    });

   ;
}

