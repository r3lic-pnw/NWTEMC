const menu = document.querySelector(".dropdown");
const menuIcon = document.querySelector("i");
menu.onclick = (e) => {
  menuIcon.classList.toggle("fa-angle-down");
  menuIcon.classList.toggle("fa-angle-right");
}