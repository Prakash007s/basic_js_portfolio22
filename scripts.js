document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typed.js for animated text
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Frontend Developer', 'Graphics Designer', 'Photographer'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    });
});
