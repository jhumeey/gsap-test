gsap.registerPlugin(SplitText, ScrollTrigger);
document.fonts.ready.then(() => {
  let text = document.querySelector(".footer_big-text");
  gsap.set(text, { opacity: 1 });

  let mySplitText = SplitText.create(text, {
    type: "chars, words",
    charsClass: "char"
  });

  let chars = mySplitText.chars;

  gsap.from(chars, {
    scrollTrigger: {
      trigger: text,
      start: "top 80%", // when top of text hits 80% of viewport
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
