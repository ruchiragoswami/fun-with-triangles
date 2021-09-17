let selectForm = document.querySelector(".form-container");
let submitQuiz = document.querySelector("#btn-submitQuiz");
let showQuizResult = document.querySelector("#quizOutput");

const correctAnswers = ['90', 'right']; 

function calculateScore() {
    // event.preventDefault();
    let score = 0;
    let index =0;
    const data = new FormData(selectForm);
    for(let value of data.values()) {
        if (value === correctAnswers[index]){
            score = score +1;
        }
        index = index + 1;
    }
    console.log(score); 
    showQuizResult.innerText = "Your score is " + score; 
}

submitQuiz.addEventListener("click", calculateScore);