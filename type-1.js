document.addEventListener("DOMContentLoaded", function () {
    let currentInstance = null;

    document.querySelectorAll(".work_column").forEach((card) => {
      const target = card.querySelector(".typewriter-target");

      card.addEventListener("mouseenter", () => {
        const text = card.querySelector(".typewriter-text")?.textContent.trim();

        // Clear previous typing instance
        if (currentInstance) {
          currentInstance.destroy();
        }

        target.innerHTML = ""; // Clear previous text

        // Start typing in this card's target
        currentInstance = new TypeIt(target, {
          strings: [text],
          cursorChar: "_",
          speed: 50,
          waitUntilVisible: true,
        }).go();
      });

      card.addEventListener("mouseleave", () => {
        if (currentInstance) {
          currentInstance.destroy();
          currentInstance = null;
        }

        // Remove the text when hovering out
        target.innerHTML = "";
      });
    });
  });
