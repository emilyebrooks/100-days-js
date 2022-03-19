/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleMenu() {
  var barMenu = document.querySelector("#nav-links");
  if (barMenu.style.display === "block") {
    barMenu.style.display = "none";
  } else {
    barMenu.style.display = "block";
  }
}

const btns = document.querySelectorAll(".qa-button"); 
// console.log(btns); 


btns.forEach(function (btn) {
  btn.addEventListener("click", function(e) {
    const toggleAnswer = e.currentTarget.parentElement.parentElement; 
    console.log(toggleAnswer); 
    toggleAnswer.classList.toggle("show-answer"); 
  });
});



