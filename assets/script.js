let quizDiv = document.querySelector("#quiz");
let h1El = document.querySelector("h1");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let startGame = document.querySelector("#startGameButton");
let timerTime = document.querySelector("#timerTime");

let timer = 100;
let currentQuestion = 0;

let questions = [{question: "Which programming language is the worst?", answers: ["R", "Python", "Java", "Javascript"], correctAnswer: "Javascript"},
{question: "Which programming language is the best", answers: ["R", "Java", "Python", "Javascript"], correctAnswer: "R"}]

renderQuestion();

startGame.textContent = "Click here to start game";

let timerId = setInterval(function(){
    timer -= 1;
    
}, 1000);

function renderQuestion(){
timerTime.textContent = timer;
h1El.textContent = questions[currentQuestion].question;
questionButton1.textContent = questions[currentQuestion].answers[0];
questionButton2.textContent = questions[currentQuestion].answers[1];
questionButton3.textContent = questions[currentQuestion].answers[2];
questionButton4.textContent = questions[currentQuestion].answers[3];
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