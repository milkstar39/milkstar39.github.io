// =========================
// Mobile Menu
// =========================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", isOpen);
  });

  const navLinks = nav.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}
