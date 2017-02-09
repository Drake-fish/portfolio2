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

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
var items = document.querySelectorAll(".timeline li");

// code for the isElementInViewport function

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
