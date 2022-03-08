//This hex array includes all the numeric and letter values that can make up a 
//hex color. So by looping 6 random items from this array will generate a random hex # color.
//ex. #f15025

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Grab button element
const btn = document.querySelector(".btn"); 
// console.log(btn); 

//Grab span element with class of color
const color = document.querySelector(".color");
// console.log(color);  

//Create an eventListener when button is clicked
btn.addEventListener("click", function(){
    let hexColor = "#"; //this variable will hold the randomly generated hex value
    //Create a loop that loops over the hex array 6 times and adds this to the hexColor var
    for(let i = 0; i < 6;  i++){
        hexColor += hex[getRandomNumber()]; 
    } 
    //Grab body and change background color upon click
    document.body.style.backgroundColor = hexColor;
    //Grab span text and change to new value of hexColor upon click
    color.innerText = hexColor; 
});

//Create function to generate random # to point to an index position during each loop iteration.
//Invoke this function in the eventListener for loop.
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length); 
}