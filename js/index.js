let burgerBtn = document.getElementById("burgerBtn");
let sideMenu = document.getElementById("sideMenu");
let x = document.getElementById("x");
let overlay = document.getElementById("overlay");

let navElements = document.querySelectorAll(".nav-items-burger a");

burgerBtn.addEventListener("click", function () {
  sideMenu.style.transform = "translateX(0%)";
  sideMenu.style.opacity = "1";
  overlay.style.display = "block";
});

x.addEventListener("click", function () {
  sideMenu.style.transform = "translateX(100%)";
  sideMenu.style.opacity = "0";
  overlay.style.display = "none";
});

navElements.forEach((element) => {
  element.addEventListener("click", function () {
    sideMenu.style.transform = "translateX(100%)";
    sideMenu.style.opacity = "0";
    overlay.style.display = "none";
  });
});
