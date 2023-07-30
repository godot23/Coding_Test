let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let questionButton5 = document.querySelector("#answer5");


let timer = 100;
let currentQuestion = 0;
renderQuestion();

let timerId = setInterval(function(){
    timer -= 1;
    
}, 1000);

let questions = [{question: "Which programming language is the worst?", answers: ["R", "Python", "Java", "Javascript"], correctAnswer: "Javascript"},
{question: "Which programming language is the best", answers: ["R", "Java", "Python", "Javascript"], correctAnswer: "R"}]



function renderQuestion(){
console.log(questions[0].question);
console.log(questions[0].answers[0]);
console.log(questions[0].answers[1]);
console.log(questions[0].answers[2]);
console.log(questions[0].answers[3]);
console.log(questions[currentQuestion].correctAnswer);
}

quizDiv.addEventListener("click", function(event){
    if(event.target.matches("button")){
        console.log("clicked!");
        console.log(event.target.innerText);
        console.log("correct answer:" + questions[currentQuestion].correctAnswer);
        currentQuestion++;
        renderQuestion();
        
    }
})