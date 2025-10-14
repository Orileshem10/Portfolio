const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const closeBtn = document.getElementById("close-btn");

const contact = document.getElementById("contact-section");
const contactBtn = document.getElementById("contact-button");
const closeContactBtn = document.getElementById("close-contact-btn");


menuIcon.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

contactBtn.addEventListener("click", () => {
  contact.classList.add("active");
});

closeContactBtn.addEventListener("click", () => {
  contact.classList.remove("active");
});