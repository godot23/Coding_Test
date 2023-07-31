let quizDiv = document.querySelector("#quiz");
let questionText = document.querySelector("#question");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let startGame = document.querySelector("#startGameButton");
let timerTime = document.querySelector("#timerTime");

let timer = 10;
let currentQuestion = 0;
let totalScore = 0;

let questions = [{question: "Which programming language is the worst?", answers: ["R", "Python", "Java", "Javascript"], correctAnswer: "Javascript"},
{question: "Which programming language is the best", answers: ["R", "Java", "Python", "Javascript"], correctAnswer: "R"}]



startGame.textContent = "Click here to start game";

startGame.addEventListener("click", function(event){
    startGame.remove();
    timerTime.textContent = timer;
    timerStart();
    renderQuestion();
})

function timerStart(){
    let timerId = setInterval(function(){
        timer -= 1;
        timerTime.textContent = timer;
        if (timer === 0){
            clearInterval(timerId);
            endOfGame();
        }
    }, 1000);
}

function renderQuestion(){

questionText.textContent = questions[currentQuestion].question;
questionButton1.textContent = questions[currentQuestion].answers[0];
questionButton2.textContent = questions[currentQuestion].answers[1];
questionButton3.textContent = questions[currentQuestion].answers[2];
questionButton4.textContent = questions[currentQuestion].answers[3];
}

function endOfGame(){
    questionText.remove();
    questionButton1.remove();
    questionButton2.remove();
    questionButton3.remove();
    questionButton4.remove();
    questionText.remove();
    timerTime.remove();
}

quizDiv.addEventListener("click", function(event){
    if(event.target.matches("button")){
        if(event.target.innerText === questions[currentQuestion].correctAnswer)
            {
                currentQuestion++;
                totalScore++;
                renderQuestion();
            }
        else{
            timer -= 10;
            renderQuestion;
        }
        console.log(event.target.innerText);
        console.log("correct answer:" + questions[currentQuestion].correctAnswer);
        currentQuestion++;
        renderQuestion();
        
    }
})