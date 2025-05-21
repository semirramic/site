gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // Desktop
  "(min-width: 768px)": function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-container",
        start: "top top",
        endTrigger: ".CARD",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        markers: true, // remove in production
      }
    });

    const desktopSteps = [
      { scale: 1.5, origin: "50% 51%", opacity: 1 },
      { scale: 3, origin: "50% 52%", opacity: 1 },
      { scale: 5, origin: "50% 53%", opacity: 1 },
      { scale: 7.5, origin: "50% 54%", opacity: 1 },
      { scale: 11, origin: "50% 55%", opacity: 0 },
      { scale: 20, origin: "50% 100%", opacity: 0 },
    ];

    desktopSteps.forEach(step => {
      tl.to(".logo-container", {
        scale: step.scale,
        transformOrigin: step.origin,
        opacity: step.opacity,
      });
    });
  },

  // Mobile
  "(max-width: 767px)": function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-container",
        start: "top top",
        endTrigger: ".CARD",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        markers: true, // remove in production
      }
    });

    const mobileSteps = [
      { scale: 1, origin: "50% 55%", opacity: 1 },
      { scale: 6, origin: "50% 75%", opacity: 1 },
      { scale: 8, origin: "50% 100%", opacity: 0 },
    ];

    mobileSteps.forEach(step => {
      tl.to(".logo-container", {
        scale: step.scale,
        transformOrigin: step.origin,
        opacity: step.opacity,
      });
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









      





 


