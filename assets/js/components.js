// Load a component into a selector
function loadComponent(selector, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;

            if (callback) { callback(); } // Recursively load more components
        })
        .catch(error => console.error(`Error loading component in ${file}:`, error));
}

// Load components on page load event
document.addEventListener("DOMContentLoaded", () => {
    //loadComponent("#window-container", "../../components/window.html");
});