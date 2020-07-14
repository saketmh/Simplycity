/* Main Slider */

var $item = $('.carousel-item');
var $wHeight = $(window).height();

$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});


/* WOW ANIMATION */

//At the document ready event
$(function(){
  new WOW().init(); 
});

//also at the window load event
$(window).on('load', function(){

     new WOW().init(); 
});

/* Navbar on scroll */
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if(scroll >= 50) {
      $("#navbar").addClass("header-fix");
  } else {
      $("#navbar").removeClass("header-fix");
  }
});

$(window).scroll(function() {
  console.log('scroll happened');
});