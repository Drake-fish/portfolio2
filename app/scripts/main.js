import $ from 'jquery';



$('.nav-links').hide();
$('.contact-modal').hide();
$('.fail-modal').hide();

$('.nav-accent').animate({
  width:'100%'
},500);

function animateMenu(){
  $('.top').toggleClass('animate-top');
  $('.bottom').toggleClass('animate-bottom');

  $('.nav-links').slideToggle('slow');
  $('.middle').toggle('fast');
}

$('.hamburger').click(()=>{
  animateMenu();
});
$('.nav-links').click(()=>{
  animateMenu();
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

// scroll events on navigation
$(".scroll").click(function(event){
    //prevent the default action for the click event
    event.preventDefault();

    //get the full url - like mysitecom/index.htm#home
    var full_url = this.href;
    console.log(full_url);
    //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
    var parts = full_url.split("#");
    var trgt = parts[1];

    //get the top offset of the target anchor
    var target_offset = $("#"+trgt).offset();
    var target_top = target_offset.top;

    //goto that anchor by setting the body scroll top to anchor top
    $('html, body').animate({scrollTop:target_top}, 500);
});
$(document).ajaxSend((evt, xhr, opts) => {
    if (opts.url.includes('backendless')) {
        console.log('interception backendless headers');
        xhr.setRequestHeader('application-id', '38118210-F01F-BA0E-FF2F-635F7259B000');
        xhr.setRequestHeader('secret-key', '0BD17D38-705B-6EB5-FFBB-7D1C7405C600');
        xhr.setRequestHeader('application-type', 'REST');
        if (window.localStorage.getItem('user-token')) {
            xhr.setRequestHeader('user-token', window.localStorage.getItem('user-token'));
        }

    }
});
$('.submit').click((e)=>{
  var name=$('.contact-name').val();
  var email=$('.email').val();
  var message=$('.message').val();
  if(name==='' || email==='' || message ===''){
    e.preventDefault();
    $('.fail-modal').fadeIn();
    setTimeout(()=>{
      $('.fail-modal').fadeOut();
    },3000);
  }else{
    handleSubmit(e);
  }
});
function handleSubmit(e){

    var name=$('.contact-name').val();
    var email=$('.email').val();
    var message=$('.message').val();
    e.preventDefault();
      $.ajax({
          type: 'POST',
          url: 'https://api.backendless.com/v1/messaging/email',
          contentType: 'application/json',
          data: JSON.stringify({
              subject: name,
              bodyparts:{
                textmessage:message +' '+ email
              },
              to:['drake_fish@yahoo.com']
          }),
          success:(response)=>{
            $('.contact-modal').fadeIn();
            setTimeout(()=>{
              $('.contact-modal').fadeOut();
            },3000);
            $('.contact-name').val('');
            $('.email').val('');
            $('.message').val('');
          }
      });
    }
