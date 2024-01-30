var hamburger = document.querySelector('.hamburger');

var nav = document.querySelector('nav');

var navLinks = document.querySelectorAll('nav a');

var title = document.querySelector('.titleMain');

hamburger.onclick = function () {
    nav.classList.toggle('active');
    title.classList.toggle('active');
}

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
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