const topButton = document.querySelector(".back-to-top");
const sections = [...document.querySelectorAll(".section[id]")];
const navLinks = [...document.querySelectorAll(".nav a")];

function updateScrollState() {
  topButton.classList.toggle("is-visible", window.scrollY > 480);

  const current = sections.findLast((section) => {
    return section.getBoundingClientRect().top <= 130;
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
