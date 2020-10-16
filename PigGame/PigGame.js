/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores,roundscore,turn,playingStatus;
init();

document.querySelector(".btn-roll").addEventListener("click",rollDice);

function rollDice(){
    if(playingStatus){
        var dice = Math.floor(Math.random()*6) + 1;
        var diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src='dice-'+dice+".png";
        if(dice != 1){
            roundscore += dice;
            document.getElementById("current-"+turn).textContent = roundscore;
        }
        else{
            total();
        }
    }
    
}
document.querySelector(".btn-hold").addEventListener("click",function(){
    if(playingStatus){
        scores[turn] += roundscore;
        document.getElementById("score-"+turn).textContent = scores[turn];
        if(scores[turn] >= 20){
            document.getElementById("name-"+turn).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".player-"+turn+"-panel").classList.add("winner");
            document.querySelector(".player-"+turn+"-panel").classList.remove("active");
            playingStatus = false;
        }
        else{
            total();    
        }
    }
});
function total(){
    turn === 0 ? turn = 1 : turn = 0; 
   document.querySelector(".dice").style.display = "none";
   roundscore = 0;
   
   document.getElementById("current-0").textContent = 0;
   document.getElementById("current-1").textContent = 0;
   
   document.querySelector(".player-0-panel").classList.toggle("active");
   document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click",init);

function init(){
    scores = [0,0];
    roundscore = 0;
    turn = 0;
    playingStatus = true;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector(".dice").style.display = "none";
    document.getElementById("name-0").textContent = "Player 0";
    document.getElementById("name-1").textContent = "Player 1";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}
