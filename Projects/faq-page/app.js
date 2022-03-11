// Method One: Traversing the DOM
const btn = document.querySelector(".question-btn");
console.log(btn); 

const answerText = document.querySelector(".answer"); 
console.log(answerText); 

btn.addEventListener("click", function(){
    answerText.classList.add="show-text"; 
})




//Method Two: Using Selectors Inside The Element