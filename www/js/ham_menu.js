const toggleButton = document.getElementById("toggleMenu");
const menuItems = document.getElementById("menu-items");

toggleButton.addEventListener("click", function () {
  menuItems.classList.toggle("hidden");
  menuItems.classList.toggle("grid");
});
