$(document).ready(function () {

// ScrollMagic***************************************************

  var responsiveDuration = "100%";
  if ($( window ).width() <= 500) {
    responsiveDuration = "100%"
  };

  var controller = new ScrollMagic.Controller();

  // Scene Handler
  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".car1",
    duration:  responsiveDuration,
    triggerHook: 0,
    pushFollowers: false, 
    reverse: true 
  })
  .setPin(".hero1")
  .setClassToggle(".car1", "fade-in")
  .addTo(controller)
  .addIndicators();
  
  // Scene2 Handler
  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".car2",
    duration: responsiveDuration, 
    triggerHook: 0,
    pushFollowers: false, 
    reverse: true
  })
  .setPin(".hero2")
  .setClassToggle(".car2", "fade-in")
  .addTo(controller)
  .addIndicators();

  var scene3 = new ScrollMagic.Scene({
      triggerElement: ".car3",
      duration: responsiveDuration,
      triggerHook: 0,
      pushFollowers: false, 
      reverse: true
    })
    .setPin(".hero3")
    .setClassToggle(".car3", "fade-in")
    .addTo(controller)
    .addIndicators();


// Slick*********************************************************
  $('.slider').slick({
    fade: true,
    cssEase: 'linear'
  });


// **** MOBILE VIEW ****
      if ($( window ).width() <= 500) {


        }
  });