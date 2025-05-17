import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import WOW from 'wow.js';

$(document).ready(() => {
    // Spinner
    const spinner = () => {
        const spinnerElement = document.getElementById('spinner');
        if (spinnerElement) {
            setTimeout(() => {
                spinnerElement.classList.remove('show');
            }, 1);
        }
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Back to top button
    const backToTop = () => {
        const backToTopButton = document.querySelector('.back-to-top');
        if (backToTopButton) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTopButton.style.display = 'block';
                } else {
                    backToTopButton.style.display = 'none';
                }
            });

            backToTopButton.addEventListener('click', () => {
                scrollToTop(1500);
            });
        }
    };
    backToTop();

    function scrollToTop(duration) {
        var start = window.pageYOffset;
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        function scroll() {
            var now = 'now' in window.performance ? performance.now() : new Date().getTime();
            var time = Math.min(1, ((now - startTime) / duration));
            window.scroll(0, Math.ceil((easeInOutExpo(time) * (0 - start)) + start));
            if (time < 1) requestAnimationFrame(scroll);
        }
        requestAnimationFrame(scroll);
    }

    function easeInOutExpo(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
    }

    // Blog carousel
    $(".blog-carousel").slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Testimonial carousel
    $(".testimonial-carousel").slick({
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    });

    // Fonction pour faire défiler les images toutes les 5 secondes
    function showNextSlide() {
        const currentIndex = $('.carousel-item.active').index();
        const slides = $('.carousel-item');
        slides.eq(currentIndex).removeClass('active');
        const nextIndex = (currentIndex + 1) % slides.length;
        slides.eq(nextIndex).addClass('active');
    }
  
    // Appeler la fonction pour afficher la prochaine image toutes les 5 secondes
    setInterval(showNextSlide, 4000);
});
const body = $("body");
    const modeToggle = $(".mode-toggle");
    const sidebar = $("nav");
    const sidebarToggle = $(".sidebar-toggle");

    let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark") {
        body.toggleClass("dark");
    }

    let getStatus = localStorage.getItem("status");
    if (getStatus && getStatus === "close") {
        sidebar.toggleClass("close");
    }

    modeToggle.on("click", function() {
        body.toggleClass("dark");
        if (body.hasClass("dark")) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    });

    sidebarToggle.on("click", function() {
        sidebar.toggleClass("close");
        if (sidebar.hasClass("close")) {
            localStorage.setItem("status", "close");
        } else {
            localStorage.setItem("status", "open");
        }
    });
    $(document).ready(function() {
        // Add active class to clicked links in sidebar
        $('.nav-links li').click(function() {
          $('.nav-links li').removeClass('active');
          $(this).addClass('active');
        });
      });