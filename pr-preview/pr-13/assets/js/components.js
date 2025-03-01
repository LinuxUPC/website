// Load a component into a selector
function loadComponent(selector, file) {
  return fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.innerHTML = data;
      });
    })
    .catch((error) =>
      console.error(`Error loading component in ${file}:`, error)
    );
}

// Load components on page load event
document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    loadComponent(".main-title", "./components/title.html"),
    loadComponent(".about-component", "./components/about.html"),
    loadComponent(".activities-component", "./components/activities.html"),
    loadComponent(".activities-title", "./components/activities-title.html"),
  ]).then(() => {
    loadComponent(".window-component", "./components/window.html").then(() => {
      /**
       * ! Chapuzon historico, esto es para que el boton de maximice de la card de activitiats de main redirija a activities.html.
       * Es una tonteria de feature ademas xd.
      */
      const maximizeButton = document.querySelector(
        ".activities-component .maximize-icon"
      );
      maximizeButton.addEventListener("click", () => {
        location.href = "activities.html";
      });
    });
  });
});