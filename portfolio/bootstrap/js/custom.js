gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // Desktop
  "(min-width: 768px)": function() {
    gsap.to(".logo-container", {
      opacity: 0,
      scale: 15,
      transformOrigin: "50% 55%",
      scrollTrigger: {
        trigger: ".logo-container",
        start: "top top",
        endTrigger: ".CARD",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        markers: true,
      }
    });
  },

  // Mobile
  "(max-width: 767px)": function() {
    gsap.to(".logo-container", {
      opacity: 0,
      scale: 8,
      transformOrigin: "50% 55%",
      scrollTrigger: {
        trigger: ".logo-container",
        start: "top top",
        endTrigger: ".CARD",
        end: ".CARD",
        scrub: true,
        pin: true,
        markers: true,
      }
    });
  }

});

// Background fade
gsap.to("body", {
  backgroundColor: "#000",
  color: "#fff",
  scrollTrigger: {
    trigger: ".logo-container",
    start: "bottom top",
    end: () => "+=" + window.innerHeight,
    scrub: true,
    markers: true,
  }
});








      





 


