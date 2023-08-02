let finalScore = localStorage.getItem("score");
let initials = localStorage.getItem("initials");
let scoreTableEl = document.querySelector("#highScoreTable");
let scoreTable = JSON.parse(window.localStorage.getItem("scoreTable")) || []

score();

function score(){
    scoreTableEl.append(scoreTable);
    scoreTableEl.append(initials);
    scoreTableEl.append(finalScore);

    localStorage.setItem("scoreTable", initials, finalScore);
}