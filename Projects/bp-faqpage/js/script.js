/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMenu() {
  var barMenu = document.querySelector("#nav-links");
  if (barMenu.style.display === "block") {
    barMenu.style.display = "none";
  } else {
    barMenu.style.display = "block";
  }
}
