let quizDiv = document.querySelector("#quiz");
let questionText = document.querySelector("#question");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let startGame = document.querySelector("#startGameButton");
let timerTime = document.querySelector("#timerTime");
let savedScore;
let initials = "aa";

let timer = 30;
let currentQuestion = 0;
let totalScore = 0;
if(localStorage != undefined){
    savedScore = parseInt(localStorage.getItem("High Score"));
}
else{
    savedScore = 0;
}

let questions = 

[{question: "What command is used to upload a string so that it's data persists even when the browser refreshes?", answers: ["Function", "querySelector", "localStorage", "Remove"], correctAnswer: "localStorage"},

{question: "What should you be putting before the first instance of every variable that you wish to be editable later?", answers: ["let", "var", "const", "function"], correctAnswer: "let"},

{question: "Which command allows you to remove an element from the screen?", answers:["textContent", "localStorage", "remove", "delete"], correctAnswer: "remove"},

{question: "What should come at the end of a series of if statements if you want some code to execute by default?", answers: ["else", "else if", "for", "switch"], correctAnswer: "else"},

{question: "What should you use to allow users to interact with your website through clicking, pressing buttons, or some other kind of input?", answers: ["setInterval", "addEventListener", "event", "matches"], correctAnswer: "addEventListener"},

{question: "How do you clear a timer once it hits zero, so that it doesn't go into negatives?", answers: ["setInterval", "remove", "clearInterval(ID)", "timer === 0"], correctAnswer: "clearInterval(ID)"},

{question: "How do you set text within a non-user editable field?", answers: ["innerText", "textContent", "editText", "setInterval"], correctAnswer: "textContent"}];



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
        if (timer <= 0){
            clearInterval(timerId);
            endOfGame();
        }
    }, 1000);
}

function renderQuestion(){
    if(currentQuestion >= questions.length){
        endOfGame()
    }
    else{
    questionText.textContent = questions[currentQuestion].question;
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1];
    questionButton3.textContent = questions[currentQuestion].answers[2];
    questionButton4.textContent = questions[currentQuestion].answers[3];
    }
}

function endOfGame(){
    questionButton1.remove();
    questionButton2.remove();
    questionButton3.remove();
    questionButton4.remove();
    timerTime.remove();

    let newScore = {
        score: totalScore, initals: initials,
    };

    window.localStorage.setItem("score", JSON.stringify(newScore));
    window.localStorage.setItem("initials", initials);
    window.location.href = "highScores.html";
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
            renderQuestion();
        }
        console.log(event.target.innerText);
        console.log("correct answer:" + questions[currentQuestion].correctAnswer);
        currentQuestion++;
        renderQuestion();
        
    }
})