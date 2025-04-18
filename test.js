window.addEventListener("DOMContentLoaded", () => {
  console.log('External JS is running joppp'); // ✅ this should show

  const brand = document.querySelector('.navbar_brand');
  console.log('Navbar brand:', brand);   // ✅ check if this logs null or the element

  if (brand) {
    brand.addEventListener('click', () => {
      console.log('Navbar brand clicked');
      setTimeout(() => {
        gsap.to('.hero_heading', {
          rotation: 360,
          duration: 2,
          ease: 'bounce.out'
        });
      }, 10000);
    });
  }
});
