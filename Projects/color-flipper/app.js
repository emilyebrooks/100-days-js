//Set list of colors for basic flip
const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "pink", "yellow", "lightblue"];

//Grab the button element
const btn = document.getElementById("btn");
// console.log(btn); 

//Grab the span element with class of color
const color = document.querySelector(".color"); 
// console.log(color); 

//Add event listener for clicking on the button
btn.addEventListener("click", function(){
    //get random number between 0-3 to pull from an index position in the colors array
    const randomNumber = getRandomNumber();
    console.log(randomNumber); 
    document.body.style.backgroundColor = colors[randomNumber]; //Target the background color of the entire body and change it to green when button is clicked.
    color.textContent = colors[randomNumber]; //Grab the text inside colors span. Replace with text in the index position of the colors array. 
});

//Create function to generate a true random number
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length); //Multiply the random # (0 - 0.99) by length of the array, then round down to match an actual index position
}