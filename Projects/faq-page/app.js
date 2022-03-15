// Method One: Traversing the DOM
const btns = document.querySelectorAll(".question-btn");
console.log(btns); 

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        //Select <article class="question">, not just the button
        //This applies the .show-text styles to the entire container, not just the button
        //console.log(e.currentTarget.parentElement.parentElement); 
        const question = e.currentTarget.parentElement.parentElement; 
        question.classList.toggle("show-text"); 
        //toggle() toggles between hide and show
    });
});


//Method Two: Using Selectors Inside The Element