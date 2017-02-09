import $ from 'jquery';


$('.nav-links').hide();

$('.nav-accent').animate({
  width:'100%'
},500);

$('.hamburger').click(()=>{
  $('.top').toggleClass('animate-top');
  $('.bottom').toggleClass("animate-bottom");

  $('.nav-links').slideToggle('slow');
  $('.middle').toggle('fast');
});
$(document).ready(()=>{
$('.name').animate({left:'0',opacity:1},500);
setTimeout(()=>{
  $('.attributes').animate({marginTop:'.5rem',opacity:1},500);
},500);
});
$(window).scroll(function(){
  if($(this).scrollTop()>5){
    $('.welcome').animate({opacity:1},500);
  }
  if($(this).scrollTop()>50){
    $('.skills').animate({opacity:1},500);

  }
});







var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
