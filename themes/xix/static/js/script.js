$(document).ready(function () {
    console.log("Test")
    var controller = new ScrollMagic.Controller();

    // Scene Handler
    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".car1", // point of execution
      duration: $(window).height(),
      triggerHook: 0, 
      reverse: true 
    })
    .setPin(".hero1") // the element we want to pin
    .setClassToggle(".car1", "fade-in")
    .addTo(controller)
    .addIndicators();
    
    // Scene2 Handler
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".car2", // point of execution
      duration:$(window).height(), 
      triggerHook: 0,
      reverse: true
    })
    .setPin(".hero2") // the element we want to pin
    .setClassToggle(".car2", "fade-in")
    .addTo(controller)
    .addIndicators();

    var scene3 = new ScrollMagic.Scene({
        triggerElement: ".car3", // point of execution
        duration:$(window).height(),
        triggerHook: 0,
        reverse: true
      })
      .setPin(".hero3") // the element we want to pin
      .setClassToggle(".car3", "fade-in")
      .addTo(controller)
      .addIndicators();
  });