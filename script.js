$(document).ready(function () {

    // Navbar toggle
    $('.menu-btn').on('click', function () {
        $('.nav-links').toggleClass("active");
        $('.menu-btn i').toggleClass("fa-bars fa-times");
    });

    // Close navbar on link click
    $('.nav-links a').on('click', function() {
        $('.nav-links').removeClass("active");
        $('.menu-btn i').removeClass("fa-times").addClass("fa-bars");
    });

    // Typing animation
    if ($(".typing-text").length) {
        var typed = new Typed(".typing-text", {
            strings: ["Graphic Designer", "Video Designer", "Creative Storyteller", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Scroll reveal logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('active');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // --- Work Filtering Logic ---
    function filterWork(category) {
        console.log("Filtering for:", category);
        const boxes = $('.work-container .box');
        
        boxes.each(function() {
            const itemCategory = $(this).attr('data-category');
            if (itemCategory === category) {
                $(this).removeClass('hide').show();
            } else {
                $(this).addClass('hide').hide();
            }
        });
    }

    $('.filter-btn').on('click', function() {
        const filter = $(this).attr('data-filter');
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        filterWork(filter);
    });

    // Initial filter on load (Brand Identity)
    filterWork('brand');

    // --- Lightbox / Slideshow Logic ---
    let currentItems = [];
    let currentIndex = 0;

    function openLightbox(index) {
        const item = currentItems[index];
        $('#lightbox-img').attr('src', item.src);
        $('#lightbox-caption h3').text(item.title);
        $('#lightbox-caption p').text(item.desc);
        $('#lightbox').addClass('active');
        $('body').css('overflow', 'hidden');
        currentIndex = index;
    }

    function closeLightbox() {
        $('#lightbox').removeClass('active');
        $('body').css('overflow', 'auto');
    }

    $(document).on('click', '.work-container .box', function(event) {
        const externalLink = $(this).attr('data-link');
        if (externalLink) {
            window.open(externalLink, '_blank');
            return;
        }

        currentItems = [];
        $('.work-container .box:not(.hide)').each(function(i) {
            const img = $(this).find('img').attr('src');
            const title = $(this).find('h3').text();
            const desc = $(this).find('p').text();
            currentItems.push({ src: img, title: title, desc: desc });
            
            if ($(this).is(event.currentTarget)) {
                currentIndex = i;
            }
        });
        
        if (currentItems.length > 0) {
            openLightbox(currentIndex);
        }
    });

    $('#lightbox-close, #lightbox-back').on('click', function() {
        closeLightbox();
    });

    $('#lightbox-next').on('click', function() {
        if (currentItems.length > 1) {
            currentIndex = (currentIndex + 1) % currentItems.length;
            openLightbox(currentIndex);
        }
    });

    $('#lightbox-prev').on('click', function() {
        if (currentItems.length > 1) {
            currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
            openLightbox(currentIndex);
        }
    });

    $('#lightbox').on('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });

});

// Particles.js config
if (document.getElementById("particles-js")) {
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
}
