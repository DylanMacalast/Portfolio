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


// SKILL BLOCK
// get all elements with tab content class and hide them
const tabContent = document.getElementsByClassName('tab__content');
for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
}

// get all elements with class="skills__nav--link" and remove class active


