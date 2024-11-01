const isTouchDevice = ontouchstart in window;
const dropdown = document.querySelector(".dropdown");
const menuIcon = document.querySelector("i");
const dropdownContent = document.querySelector(".dropdown-content");


if (isTouchDevice){
  dropdown.ontouchstart = (e) => {
    menuIcon.classList.toggle("fa-angle-down");
    menuIcon.classList.toggle("fa-angle-right");
    dropdownContent.classList.toggle("hidden");
  }
} else {
  dropdown.onclick = (e) => {
    menuIcon.classList.toggle("fa-angle-down");
    menuIcon.classList.toggle("fa-angle-right");
    dropdownContent.classList.toggle("hidden");
  }

} 