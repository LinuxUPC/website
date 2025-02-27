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
  ]).then(() => {
    loadComponent(".window-component", "./components/window.html");
  });
});