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

}



// SKILL BLOCK
// 1. On load open a deafult tab
// 2. When a tab is clicked hide the other tabs content and show that tabs content
// 3. Toggle between tabs

const onTabClick = (event) => {
    event.preventDefault(); // stopping # in anchour tag from taking you to bottom of the page
    let activeTabs = document.querySelectorAll('.active');

    // Deactivate exisiting active tab and panel
    activeTabs.forEach(function(tab) {
        tab.className = tab.className.replace('active', '');
    });

    // activate the new tab and panel which has been cliked on
    event.target.parentElement.className += ' active'; // setting the className of the parent element to active
    // getting the href of the link
    // The id's of the panes match the href so that splitting it allows you to add the class active to all elements with id of that name.
    document.getElementById(event.target.href.split('#')[1]).className += ' active'; // just want the text not the #
}


const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick); // false added so js knows we need no more options








