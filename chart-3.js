
document.fonts.ready.then(() => {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  let text = document.querySelector(".footer_big-text");
let cont = document.querySelector(".section-footer");
  gsap.set(text, { opacity: 1 });

  let mySplitText = SplitText.create(text, {
    type: "chars, words",
    charsClass: "char"
  });

  let chars = mySplitText.chars;

  gsap.from(chars, {
    scrollTrigger: {
      trigger: cont,
      start: "top 90%", // when top of text hits 80% of viewport
      toggleActions: "play none none none", // or "play none none reverse" if you  want it to reverse
    },
    duration: 3,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.05,
    onComplete: () => {
      mySplitText.revert();
      text.removeAttribute("aria-hidden");
    }
  });
});
