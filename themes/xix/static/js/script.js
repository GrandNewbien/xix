$(document).ready(function () {
    console.log("Test")

    var responsiveDuration = "100%";
    if ($( window ).width() <= 500) {
      responsiveDuration = "100%"
    };

    var controller = new ScrollMagic.Controller();

    // Scene Handler
    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".car1", // point of execution
      duration:  responsiveDuration,
      triggerHook: 0,
      pushFollowers: false, 
      reverse: true 
    })
    .setPin(".hero1") // the element we want to pin
    .setClassToggle(".car1", "fade-in")
    .addTo(controller)
    .addIndicators();
    
    // Scene2 Handler
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".car2", // point of execution
      duration: responsiveDuration, 
      triggerHook: 0,
      pushFollowers: false, 
      reverse: true
    })
    .setPin(".hero2") // the element we want to pin
    .setClassToggle(".car2", "fade-in")
    .addTo(controller)
    .addIndicators();

    var scene3 = new ScrollMagic.Scene({
        triggerElement: ".car3", // point of execution
        duration: responsiveDuration,
        triggerHook: 0,
        pushFollowers: false, 
        reverse: true
      })
      .setPin(".hero3") // the element we want to pin
      .setClassToggle(".car3", "fade-in")
      .addTo(controller)
      .addIndicators();
// **** MOBILE VIEW ****
      if ($( window ).width() <= 500) {


        }
  });