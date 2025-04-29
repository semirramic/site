
    // LOGO IN ANIM

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
          end: () => "+=" + window.innerHeight * 2,
          scrub: true,
          pin: true,
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
          end: () => "+=" + window.innerHeight * 1.5,
          scrub: true,
          pin: true,
        }
      });
    }

  });

  // Background fade to black for all devices
  gsap.to("body", {
    backgroundColor: "#000",
    color: "#fff",
    scrollTrigger: {
      trigger: ".logo-container",
      start: "bottom top",
      end: () => "+=" + window.innerHeight,
      scrub: true,
    }
  });

      // LOGO IN ANIM

      





 


