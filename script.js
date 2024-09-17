/*========== Menu Icon Navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*========== Scroll Sections Active Link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let resume = document.getElementById("resumeLink");

resume.addEventListener("click", function() {
    window.open("assets/Veda Yakkali - Resume.pdf", "_blank");
});

window.onscroll = () => {

    sections.forEach(sec => {
        // let top = window.screenY;
        let top = window.scrollY || document.documentElement.scrollTop;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*========== Sticky Navbar ==========*/
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========== Remove Menu Icon Navbar When Click Navbar Link (Scroll)) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*========== Swiper ==========*/


/*========== Dark/Light Mode ==========*/
let darkmodeicon = document.querySelector('#darkmode');

darkmodeicon.onclick = () => {
    darkmodeicon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/*========== Scroll Reveal ==========*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 100,
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.skills-container, .projects-box, .contact-container',  {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img',  {origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content',  {origin: 'right'});
