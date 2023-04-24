const hamburguesa = document.querySelector(`.header .nav-bar .nav-list .hamburger`)

const mobileMenu = document.querySelector(`.header .nav-bar .nav-list ul`)

const header = document.querySelector(`.header.container`)



hamburguesa.addEventListener(`click`, () => {
    hamburguesa.classList.toggle(`active`)
    mobileMenu.classList.toggle(`active`)
})

document.addEventListener(`scroll`, ()=>{
    const scrollPosition = window.scrollY;
    if(scrollPosition > 250){
        header.style.backgroundColor = "29323c";
    } else{
        header.style.backgroundColor = "transparent";
    }
})