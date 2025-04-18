window.addEventListener("DOMContentLoaded", () => {
    gsap.to('.my-element', {
      rotation: 360,
      duration: 2,
      ease: 'bounce.out',
      delay: 10 // delay in seconds
    });
  });
