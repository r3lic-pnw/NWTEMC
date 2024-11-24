const dropdown = document.querySelector(".dropdown");
const menuIcon = document.querySelector("i");
const dropdownContent = document.querySelector(".dropdown-content");

updateDateTime();
setInterval(updateDateTime, 1000);

dropdown.ontouchstart = (e) => {
  menuIcon.classList.toggle("fa-angle-down");
  menuIcon.classList.toggle("fa-angle-right");
  dropdownContent.classList.toggle("hidden");
}

dropdown.onclick = (e) => {
  menuIcon.classList.toggle("fa-angle-down");
  menuIcon.classList.toggle("fa-angle-right");
  dropdownContent.classList.toggle("hidden");
}



function updateDateTime() {
  const timeSpan = document.querySelector("#time-span");
  const currentTime = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  timeSpan.textContent = currentTime.toLocaleDateString('en-US', options);
}