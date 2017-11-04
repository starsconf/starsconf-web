// Utilities
function checkArray(arr) {
    if (!Array.isArray(arr) || !arr.length) {
        return false;
    }
}

// Slideshow images to preload
var imagesPath = [
    'assets/img/wallpaper-site_16.jpg',
    'assets/img/wallpaper-site_12.jpg',
    'assets/img/wallpaper-site_1.jpg',
    'assets/img/wallpaper-site_4.jpg',
    'assets/img/wallpaper-site_9.jpg',
    'assets/img/wallpaper-site_6.jpg',
    'assets/img/wallpaper-site_5.jpg',
    'assets/img/wallpaper-site_3.jpg',
    'assets/img/wallpaper-site_7.jpg',
    'assets/img/wallpaper-site_10.jpg',
    'assets/img/wallpaper-site_11.jpg',
    'assets/img/wallpaper-site_8.jpg',
    'assets/img/wallpaper-site_2.jpg',
    'assets/img/wallpaper-site_14.jpg',
    'assets/img/wallpaper-site_15.jpg',
    'assets/img/wallpaper-site_13.jpg',
    'assets/img/wallpaper-site_17.jpg'
];

// Store newly created images
var images = [];

// Image preloader
function preloader(arr) {
    checkArray(arr);
    for (var i = 0; i < arr.length; i++) {
        var img = new Image();
        img.src = arr[i];
        images[i] = img;
    }
}

// Preload images
preloader(imagesPath);

// Auto invoked function
(function($) {
  'use strict';

    // Check if the user agent is mobile
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Check if the element is visible in the viewport
    function isInViewport(element) {
        if (!element || element.nodeType != 1) {
            return false;
        }

        var bounds = element.getBoundingClientRect();

        return (
            bounds.top < window.innerHeight && 
            bounds.bottom > 0
        );
    }

    // Image Slideshow
    var slideshow = document.getElementById('background');
    var slideAnimate;
    var slideState = true;
    // Store last active slide
    var current = 0;

    

    // Play slideshow
    function playSlideshow(el, images) {
        checkArray(images);
        if (!el || el.nodeType != 1) {
            return false;
        }
        // Add transition to the block
        el.style.transition = 'background-color 1s ease-out';
        // Use imagesLoaded to check if all images loaded
        var imgLoad = imagesLoaded(images);
        // Don't start until all images are ready
        imgLoad.on('done', function() {
            slideAnimate = setInterval(function() {
                current = (current != images.length - 1) ? current + 1 : 0;
                for (var i = 0; i < images.length; i++) {
                    el.style.backgroundColor="black";
                    setTimeout(function() {
                        el.style.backgroundColor="rgba(0,0,0,0.7)";
                        el.style.backgroundImage="url('" + images[current].src + "')";
                    }, 700)
                }
            }, 6000);
        })
    }

    // Stop slideshow
    function stopSlideshow() {
        clearInterval(slideAnimate);
    }

    // Initialize slideshow only if isn't mobile
    if (!isMobile()) {
       playSlideshow(slideshow, images); 
    }

    // Fix navbar
    function stickyNavbar() {
        var scroll = window.scrollY;
        var navbar = document.querySelector('.top-header');
        var header = document.querySelector('.home-header');

        if (!navbar || !header) {
            return false;
        }

        var navbarHeight = navbar.offsetHeight;
        var headerHeight = header.offsetHeight - navbarHeight;

        if (scroll > (navbarHeight / 2) && scroll < headerHeight) {
            navbar.classList.remove('full-bg');
            navbar.classList.add('not-bg');
        } else if (scroll > headerHeight) {
            navbar.classList.add('full-bg');
        } else {
            navbar.classList.remove('full-bg', 'not-bg');
        }
    }

    // Listen to scroll event with throttle
    window.addEventListener('scroll', _.throttle(function() {

        // Sticky navbar on scroll
        stickyNavbar();

        // Disable slideshow when out of the viewport
        if (isInViewport(slideshow)) {
            if (!slideState && !isMobile()) {
                playSlideshow(slideshow, images);
                slideState = true;
            }
        } else {
            stopSlideshow();
            slideState = false;
        }
    }, 100), false);

    /*
    **********************************************
    * jQuery stuff
    **********************************************
    */

    //Sidenav Responsive
    $(".button-collapse").sideNav({
        menuWidth: 220,
        edge: 'right',
        closeOnClick: false,
        draggable: true
    });

    // Scrollspy
    $('.scrollspy').scrollSpy();


})(jQuery);