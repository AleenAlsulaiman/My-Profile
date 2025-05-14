document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("darkModeToggle");
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
