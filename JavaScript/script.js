// Number Section and Start Icon Scrool Top
let iconScroolTop = document.querySelector(".icon-top");
let numberSpan = document.querySelectorAll(".num");
let sectionLanding = document.querySelector(".landing");
let started = false;
window.onscroll = function () {
  if (window.scrollY > sectionLanding.offsetTop) {
    if (!started) {
      numberSpan.forEach((num) => {
        startcount(num);
      });
    }
    started = true;
  }
  if (scrollY >= 600) {
    iconScroolTop.style.opacity = "1";
  } else {
    iconScroolTop.style.opacity = "0";
  }
};

function startcount(el) {
  let num = el.dataset.num;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == num) {
      clearInterval(count);
    }
  }, 2000 / num);
}
// Dark Mode
let sunIcon = document.querySelector(".sun");
let moonIcon = document.querySelector(".moon");
let setTheme = document.body;
let IconToggleDark = document.querySelector(".toggleDark");
let flicker = document.querySelector(".flicker");
let toggleDark = document.querySelector(".toggleDark");
IconToggleDark.addEventListener("click", () => {
  setTheme.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
if (localStorage.getItem("theme") === "dark") {
  setTheme.classList.add("dark");
  setTheme.style.transition = ".8s";
  flicker.classList.remove("open");
}
toggleDark.addEventListener("click", (eo) => {
  flicker.classList.toggle("open");
});
localStorage.setItem(
  "icondark",
  flicker.classList.contains("open") ? "open" : "noopen"
);
if (localStorage.getItem("icondark") === "noopen") {
  flicker.classList.add("open");
} else {
  flicker.classList.remove("open");
}
// Show Menu Box When Click On Menu Icon
let menuIcon = document.querySelector("#menu");
let menuBox = document.querySelector(".menu-box");
menuIcon.addEventListener("click", () => {
  menuBox.classList.toggle("open");
});
// Loader Section
let loader = document.querySelector(".loader");
let topLoader = document.querySelector(".topLoader");
let bottomLoader = document.querySelector(".bottomLoader");
window.onload = () => {
  setTimeout(() => {
    loader.style.display = "none";
    topLoader.classList.add("open");
    bottomLoader.classList.add("open");
  }, 3000);
};


console.log("jndcjnd");
document.body.addEventListener("click",() => {
  if (menuBox.classList.contains("open")) {
    menuBox.classList.add("open")
  }
  console.log("yes");
})
