window.addEventListener("DOMContentLoaded", () => {
    const brand = document.querySelector('.navbar_brand');

    if (brand) {
      brand.addEventListener('click', () => {
        setTimeout(() => {
          gsap.to('.my-element', {
            rotation: 360,
            duration: 2,
            ease: 'bounce.out'
          });
        }, 10000); // 10-second delay
      });
    }
  });
