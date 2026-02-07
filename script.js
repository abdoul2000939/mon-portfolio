document.addEventListener("DOMContentLoaded", () => {
  const projectBtn = document.getElementById("projectBtn");
  const projectDetail = document.getElementById("projectDetail");

  projectBtn.addEventListener("click", () => {
    // Toggle de la visibilité
    projectDetail.classList.toggle("hidden");

    // Changement du style du bouton
    if (projectDetail.classList.contains("hidden")) {
      projectBtn.style.backgroundColor = "#2563eb";
      projectBtn.innerHTML =
        '<i class="fas fa-lightbulb"></i> Voir ce que j\'ai appris de ce projet';
    } else {
      projectBtn.style.backgroundColor = "#dc2626"; // Rouge pour fermer
      projectBtn.innerHTML = '<i class="fas fa-times"></i> Fermer les détails';
    }
  });
});
