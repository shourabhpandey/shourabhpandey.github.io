const roles = ["AI/ML", "DevOps", "MLOps", "DevRel"];
let index = 0;
const roleText = document.getElementById("roleText");

// Set initial state
roleText.textContent = roles[0];
roleText.style.opacity = 1;
roleText.style.transition = "opacity 0.5s ease-in-out";

function updateRole() {
  // Fade out
  roleText.style.opacity = 0;
  
  // Wait for fade out, then change text and fade in
  setTimeout(() => {
    index = (index + 1) % roles.length;
    roleText.textContent = roles[index];
    roleText.style.opacity = 1;
  }, 500);
}

// Update every 3 seconds
setInterval(updateRole, 3000);

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
