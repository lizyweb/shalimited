document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
        $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    }
  });
   
  // Blog carousel
  $(".blog-carousel").owlCarousel({
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    center: false,
    dots: false,
    loop: true,
    margin: 50,
    nav: true,
    speed: 100,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:3
        }
    }
  });

  // Spinner
  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
  };
  spinner();

});