/*Dropdowns*/

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Utilities
function checkArray(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    return false;
  }
}

// Slideshow images to preload
var imagesPath = [
'images/wallpaper-site_1.jpg',
'images/wallpaper-site_2.jpg',
'images/wallpaper-site_3.jpg',
'images/wallpaper-site_4.jpg',
'images/wallpaper-site_5.jpg',
'images/wallpaper-site_6.jpg',
'images/wallpaper-site_7.jpg',
'images/wallpaper-site_8.jpg',
'images/wallpaper-site_9.jpg',
'images/wallpaper-site_10.jpg',
'images/wallpaper-site_11.jpg',
'images/wallpaper-site_12.jpg',
'images/wallpaper-site_13.jpg',
'images/wallpaper-site_14.jpg',
'images/wallpaper-site_15.jpg',
'images/wallpaper-site_16.jpg',
'images/wallpaper-site_17.jpg',
'images/wallpaper-site_18.jpg',
'images/wallpaper-site_19.jpg',
'images/wallpaper-site_20.jpg'
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
                el.style.backgroundColor="rgba(0,0,0,0.2)";
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

    //Fix Elements
    function stickyElements() {
      let scroll = window.scrollY;
      let header = document.querySelector('header');
      let footer = document.querySelector('footer');
      let cta = document.querySelector('.cta');

      let headerHeight = header.offsetHeight;
      let sizeFooterHeight = footer.offsetHeight;

      if (scroll > (headerHeight / 2)) {
        header.classList.add('header-fixed');
      } else {
        header.classList.remove('header-fixed');
      }

      if (scroll > sizeFooterHeight) {
        footer.classList.add('scrolling');
      } else {
        footer.classList.remove('scrolling');
      }

      if (scroll > 268) {
        cta.classList.add('button-fixed');
      } else {
        cta.classList.remove('button-fixed');
      }

    }


    // Listen to scroll event with throttle
    window.addEventListener('scroll', _.throttle(function() {
      // Sticky navbar on scroll
      //stickyNavbar();

      // Elements fixed on scroll
      stickyElements();

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

    //Responsive Nav Menu
    $('.toggle-nav-mobile').click(function(){
      $('.header-nav').addClass('display');
    })
    $('.bg').click(function(){
      $('.header-nav').removeClass('display');
    })

    // Scrollspy
    $('.scrollspy').scrollSpy();

    //Display Dropdown
    $('.dropbtn').click(function(){
      $(this).parent().find('.dropdown-content').toggle();
    })


  })(jQuery);