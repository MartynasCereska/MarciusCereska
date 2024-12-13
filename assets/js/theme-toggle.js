
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Check saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
    localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
  });
});
