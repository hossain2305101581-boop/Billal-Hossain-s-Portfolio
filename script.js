// Mobile navigation, current year, and front-end contact form demo.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".year").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const formNote = document.querySelector("#formNote");
    formNote.textContent = "Thanks! Your form passed the browser checks. This demo does not send the message to a server.";
    formNote.classList.add("success-note");
    contactForm.reset();
  });
}
