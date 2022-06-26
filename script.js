const hamburgerMenu = document.querySelector(".material-symbols-outlined");
const nav = document.querySelector("nav");

function openNav () {
  nav.style.left = 0;
  hamburgerMenu.href = "javascript:closeNav()";
}

function closeNav () {
  nav.style.left = "-200px";
  hamburgerMenu.href = "javascript:openNav()";
}