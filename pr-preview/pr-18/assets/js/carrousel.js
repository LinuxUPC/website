const contentElement = document.querySelectorAll(".content");
function maxHeightCarrousel() {
  contentElement.forEach((element) => {
    const infoElement = element.querySelector(".info");
    const carouselElement = element.querySelector(".carousel");
    if (carouselElement.clientHeight + 1 > infoElement.clientHeight) {
      carouselElement.style.maxHeight = infoElement.clientHeight + "px";
    } else {
      carouselElement.style.maxHeight = "";
    }
  });
}

window.addEventListener("resize", () => {
  maxHeightCarrousel();
});
maxHeightCarrousel();

// Rotate carrousel elements
const carrouselListElements = document.querySelectorAll(".carousel-inner");
function scrollCarrousel(index, direction) {
    const carrouselListElement = carrouselListElements[index];
    const activeElement = carrouselListElement.querySelector(".active");
    let newActiveElement;

    if (direction === "next") {
        newActiveElement = activeElement.nextElementSibling || carrouselListElement.firstElementChild;
    } else if (direction === "prev") {
        newActiveElement = activeElement.previousElementSibling || carrouselListElement.lastElementChild;
    }

    if (newActiveElement) {
        activeElement.classList.remove("active");
        newActiveElement.classList.add("active");
    }
}

// Event listeners for carrousel buttons
const carrouselNextButtons = document.querySelectorAll(".carousel .next");
carrouselNextButtons.forEach((element, index) => {
    element.addEventListener("click", () => {
        scrollCarrousel(index, "next");
    });
});

const carrouselPrevButtons = document.querySelectorAll(".carousel .prev");
carrouselPrevButtons.forEach((element, index) => {
    element.addEventListener("click", () => {
        scrollCarrousel(index, "prev");
    });
});

