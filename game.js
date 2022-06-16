var choices = ["paper","rock","scissors"];
var i = Math.floor(Math.random() * 3);

var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;

function score(){
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}

setInterval(score, 5);

function game(UserChoice){
    if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
        win(UserChoice);
    }
    else if(UserChoice === ComChoice){
        draw(UserChoice);
    }
    else{
        lose(UserChoice);
    }
    function continuGame(){
        i = Math.floor(Math.random() * 3);
        ComChoice = choices[i];
    }
    setTimeout(continuGame, 1200);
    if (UserPoints == 5 || ComPoints == 5){
        UserPoints = 0;
        ComPoints =0;
    }
}

function win(bn){
    UserPoints++;
    document.getElementById("who").innerHTML = "You win!";
    var bn = document.getElementById(bn);
}

function draw(bn){
    document.getElementById("who").innerHTML = "It's a Draw.";
    var bn = document.getElementById(bn);
}
function lose(bn){
    ComPoints++;
    document.getElementById("who").innerHTML = "You lose...";
    var bn = document.getElementById(bn);
}