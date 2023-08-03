let finalScore = localStorage.getItem("score");
let initials = localStorage.getItem("initials");
let scoreTableEl = document.querySelector("#highScoreTable");
let scoreTable = JSON.parse(window.localStorage.getItem("score")) || []

score();

function score(){
    console.log("final score:", finalScore);
    console.log("score table:", scoreTable);
    scoreTableEl.append(scoreTable.initals, scoreTable.score);
    // scoreTableEl.append(initials);
    // scoreTableEl.append(finalScore);
}