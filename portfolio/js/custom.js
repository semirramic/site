gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // Desktop
  /*"(min-width: 768px)": function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-container",
        start: "top top",
        endTrigger: ".CARD",
        end: "bottom bottom",
        scrub: true,
        pin: true,
      }
    });

    const desktopSteps = [
      { scale: 1.5, origin: "50% 51%", opacity: 1 },
      { scale: 3, origin: "50% 52%", opacity: 1 },
      { scale: 5, origin: "50% 53%", opacity: 1 },
      { scale: 7, origin: "50% 54%", opacity: 1 },
      { scale: 7, origin: "50% 55%", opacity: 0 },
      { scale: 7, origin: "50% 100%", opacity: 0 },
    ];

    desktopSteps.forEach(step => {
      tl.to(".logo-container", {
        scale: step.scale,
        transformOrigin: step.origin,
        opacity: step.opacity,
      });
    });
  },*/

  // Mobile
"(max-width: 767px)": function () {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".logo-container",
      start: "top top",
      end: "+=1213",
      scrub: true,
      pin: true,
      markers:true,
      onUpdate: (self) => {
        let progress = self.progress.toFixed(1);
        if (progress == 1) {
          //document.querySelector(".pin-spacer").style.opacity = 0;
        }
      }
    }
  });

  const mobileSteps = [
    { scale: 1, origin: "0% 0%", opacity: 1, display: "block" },
    { scale: 3, origin: "50% 65%", opacity: 1, display: "block" },
    { scale: 5, origin: "50% 75%", opacity: 0.9, display: "block" },
    { scale: 7, origin: "50% 85%", opacity: 0.8, display: "block" },
    { scale: 7, origin: "50% 100%", opacity: 0, display: "none" },
  ];

  mobileSteps.forEach(step => {
    tl.to(".SR", {
      scale: step.scale,
      transformOrigin: step.origin,
      opacity: step.opacity,
      ease: "none",
    });
  });
}
});

