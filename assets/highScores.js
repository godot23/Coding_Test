let finalScore = localStorage.getItem("score");
let initials = localStorage.getItem("initials");
let scoreTable = JSON.parse(window.localStorage.getItem("scoreTable")) || [];

score();

function score(){
    console.log(finalScore);
    console.log(initials);
    scoreTable.push(finalScore, initials);


    
    window.localStorage.setItem("scoreTable", JSON.stringify(scoreTable));
}


