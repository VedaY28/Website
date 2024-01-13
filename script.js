/*========== Menu Icon Navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


/*========== Scroll Sections Active Link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {


    /*========== Sticky Navbar ==========*/
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========== Remove Menu Icon Navbar When Click Navbar Link (Scroll)) ==========*/

};


/*========== Swiper ==========*/


/*========== Dark/Light Mode ==========*/


/*========== Scroll Reveal ==========*/