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
    loadComponent(".title-component", "./components/title.html"),
    loadComponent(".about-component", "./components/about.html"),
    loadComponent(".activities-component", "./components/activities.html"),
    loadComponent(".window-component", "./components/window.html"),
  ]).then(() => {
    checkOverflow();

    // Trigger para el evento de resize
    window.addEventListener("resize", checkOverflow);
  });
});

const aboutComponents = document.querySelectorAll(".about-component");

function checkOverflow() {
  aboutComponents.forEach((aboutComponent) => {
    const aboutElement = aboutComponent.querySelector(".about");
    if (!aboutElement) return;

    const aboutComponentStyle = getComputedStyle(aboutComponent);
    // La maxima altura del contenido para no causar overflow
    const aboutComponentMaxHeight =
      aboutComponent.clientHeight -
      parseFloat(aboutComponentStyle.paddingTop) -
      parseFloat(aboutComponentStyle.paddingBottom);
    // Altura que el contenido ocupa sin scrolls
    const aboutElementRealHeight = aboutElement.scrollHeight;

    if (aboutElementRealHeight > aboutComponentMaxHeight) {
      aboutComponent.classList.add("overflow");
    } else if (aboutElementRealHeight < aboutComponentMaxHeight) {
      aboutComponent.classList.remove("overflow");
    }
  });
}
