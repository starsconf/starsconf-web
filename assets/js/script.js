//Preload images first 

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
var images = Array(
    "assets/img/wallpaper-site_1.jpg",
    "assets/img/wallpaper-site_12.jpg",
    "assets/img/wallpaper-site_13.jpg",
    "assets/img/wallpaper-site_4.jpg",
    "assets/img/wallpaper-site_9.jpg",
    "assets/img/wallpaper-site_6.jpg",
    "assets/img/wallpaper-site_5.jpg",
    "assets/img/wallpaper-site_3.jpg",
    "assets/img/wallpaper-site_7.jpg",
    "assets/img/wallpaper-site_10.jpg",
    "assets/img/wallpaper-site_11.jpg",
    "assets/img/wallpaper-site_8.jpg",
    "assets/img/wallpaper-site_2.jpg",
    "assets/img/wallpaper-site_14.jpg",
    "assets/img/wallpaper-site_15.jpg",
    "assets/img/wallpaper-site_16.jpg",
    "assets/img/wallpaper-site_17.jpg"
    )
;

$([images[0],images[1],images[2],images[3],images[4],images[5],images[6],images[7],images[8],images[9],images[10],images[11],images[12],images[13],images[14],images[15],images[16]]).preload();

// Usage:

var currimg = 0;


$(document).ready(function(){
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (!isMobile()) {
        //CHANGE BACKGROUND IMAGES
       
        function loadimg(){   
           $('#background').animate({ opacity: 1 }, 800,function(){
                //finished animating, minifade out and fade new back in           
                $('#background').animate({ opacity: 0.7 }, 400,function(){ 
                    currimg++;
                    if(currimg > images.length-1){
                        currimg=0;
                    }
                    var newimage = images[currimg];
                
                    //swap out bg src                
                    $('#background').css("background-image", "url("+newimage+")"); 
                    //animate fully back in
                    $('#background').animate({ opacity: 1 }, 800,function(){
                        //set timer for next
                        setTimeout(loadimg,4000);
                    });

                });
            
            });
         }
         setTimeout(loadimg,4000);
         
    

    }
     //Fix header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
            $('.top-header').addClass('bg-scroll-header').fadeIn();
        } else {
            $('.top-header').removeClass('bg-scroll-header');
        }
    });

    $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
});