$(document).ready(function () {

    // Navbar toggle
    $('.menu-btn').click(function () {
        $('.nav-links').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation
    var typed = new Typed(".typing-text", {
        strings: ["Graphic Designer", "Video Designer", "Creative Storyteller", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Scroll reveal logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});

// Particles.js config
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#007bff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#007bff", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": { "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
});
