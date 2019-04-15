// drop down nav js code
export const navSlide = () => {
    const burger = document.querySelector('.navbar__burger');
    const navbar__ul = document.querySelector('.navbar__ul');

    burger.addEventListener('click', ()=>{
        navbar__ul.classList.toggle('navbar--active');
        
    })
}