// Method One: Traversing the DOM
const btns = document.querySelectorAll(".question-btn");
// console.log(btns); 

const answerText = document.querySelector(".answer"); 
// console.log(answerText); 

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        console.log(e.this); 
    });
});




//Method Two: Using Selectors Inside The Element