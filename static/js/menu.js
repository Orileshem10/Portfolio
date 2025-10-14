const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const closeBtn = document.getElementById("close-btn");

const contact = document.getElementById("contact-section");
const contactBtn = document.getElementById("contact-button");
const closeContactBtn = document.getElementById("close-contact-btn");
const UnityCanvas = document.getElementById("unity-canvas");


menuIcon.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

contactBtn.addEventListener("click", () => {
  UnityCanvas.blur(); // Remove focus from Unity canvas
  contact.classList.add("active");
});

closeContactBtn.addEventListener("click", () => {
  contact.classList.remove("active");
});

