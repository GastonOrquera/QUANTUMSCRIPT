// var hamburger = document.querySelector('.hamburger');

// var nav = document.querySelector('nav');

// var navLinks = document.querySelectorAll('nav a');



// hamburger.onclick = function () {
//     nav.classList.toggle('active');

// }

// navLinks.forEach(function (link) {
//     link.addEventListener('click', function () {
//         nav.classList.remove('active');
//     });
// });







var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('nav');
var navLinks = document.querySelectorAll('nav a');

hamburger.onclick = function () {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
};

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});


ScrollReveal().reveal('.scroll-reveal', {
    origin: 'top',
    distance: '20px',
    duration: 1000,
    easing: 'cubic-bezier(0.5,0,0,1)',
    interval: 200
});

ScrollReveal().reveal('.scroll-revealLeft', {
    origin: 'left',
    distance: '20px',
    duration: 1000,
    easing: 'cubic-bezier(0.5,0,0,1)',
    interval: 100
});

