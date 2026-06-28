const topButton = document.querySelector(".back-to-top");
const sections = [...document.querySelectorAll(".section[id]")];
const navLinks = [...document.querySelectorAll(".nav a")];

function updateScrollState() {
  topButton.classList.toggle("is-visible", window.scrollY > 480);

  let current = null;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 130) {
      current = section;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", current && link.hash === `#${current.id}`);
  });
}

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();
