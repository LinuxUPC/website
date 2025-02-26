const sidebar = document.getElementById("sidebar");
const sidebarButton = document.getElementById("sidebarCollapse");
sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  adjustSidebarTop();
  sidebarButton.blur();
});

function adjustSidebarTop() {
  const topBar = document.querySelector(".top-bar");
  let topBarHeight = topBar.clientHeight;

  if (getComputedStyle(sidebarButton).display != "none" && !sidebar.classList.contains("show")) {
    const remInPixels = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    topBarHeight += 0.5 * remInPixels;
  }

  sidebar.style.top = `${topBarHeight}px`;
  sidebar.style.maxHeight = `calc(100vh - ${topBarHeight}px)`;
}

adjustSidebarTop();
window.addEventListener("resize", adjustSidebarTop);
window.addEventListener("scroll", adjustSidebarTop);
