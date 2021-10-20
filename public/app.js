let burger = document.getElementById("burger");
let nav = document.getElementById("nav");
let cross = document.getElementById("cross");
let icons = document.getElementById("icons");

burger.addEventListener("click", () => {
  setTimeout(() => {
    nav.classList.toggle("hidden");
    icons.classList.toggle("hidden");
    cross.classList.toggle("hidden");
    burger.classList.toggle("hidden");
  }, 300);
});
cross.addEventListener("click", () => {
  setTimeout(() => {
    nav.classList.toggle("hidden");
    icons.classList.toggle("hidden");
    cross.classList.toggle("hidden");
    burger.classList.toggle("hidden");
  }, 300);
});
