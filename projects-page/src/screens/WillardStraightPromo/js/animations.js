$(document).ready(function(){
'use strict';
//This is for the anchors, and the slide animation for sections of the page.
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 1000);
      return false;
      }
    }
  });

  //This is for the hover effect on news articles
  $(".squareShape").mouseover(function() {
    $(this).css("border-color","#a88c5d")
  });
  $(".squareShape").mouseleave(function() {
    $(this).css("border-color","gray")
  });

  //Slick carousel slider timings.
  $('.slider-for').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
});