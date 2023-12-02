let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move");
};

window.onscroll = function(){
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    }else {
        header.classList.remove("navbar-fixed");
    }
    navbar.classList.remove("open-menu")
    menu.classList.remove("move");
}