const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");
const closeBtn = document.getElementById("close-btn");
const UnityCanvas = document.getElementById("unity-canvas");


menuIcon.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

