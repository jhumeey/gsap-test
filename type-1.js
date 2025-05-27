document.addEventListener("DOMContentLoaded", function () {
  let currentInstance = null;

  document.querySelectorAll(".work_column").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const text = card.querySelector(".typewriter-text")?.textContent.trim();
      const target = card.querySelector(".typewriter-target");

      // Clear previous typing instance if any
      if (currentInstance) {
        currentInstance.destroy();
      }

      // Clear the target's content
      target.innerHTML = "";

      // Start typing in this card's target
      currentInstance = new TypeIt(target, {
        strings: [text],
        speed: 50,
        waitUntilVisible: true,
      }).go();
    });
  });
});
