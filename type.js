
const playerText = document.querySelector("#Player")
const computerText = document.querySelector("#Computer")
const resultText = document.querySelector("#Result")
const choiceBtn = document.querySelectorAll(".choiceBtn")
const timeText = document.getElementById("Time")
var time = 6;
let player;
let computer;
let result;
computerTurn();
checkWinner();
countDown();
computerText.textContent = `Computer: ${computer}`;
choiceBtn.forEach(button => button.addEventListener('click',()=>{
    player = button.textContent
    playerText.textContent = `Player: ${player}`;
    resultText.textContent = checkWinner();
    if(resultText.textContent == "YOU WIN"){
        setTimeout(function(){location.reload()}, 1000);
    }
}));
function computerTurn(){
   const randNum = Math.floor(Math.random()*3) + 1
   switch(randNum){
    case 1:
        computer = "FIRE"
        break;
    case 2:
        computer = "WATER"
        break;
    case 3:
        computer = "GRASS"
        break;
   }
}
function checkWinner(){
    if(computer == player){
        return "DRAW"
    }else if(computer == "WATER"){
        return(player == "GRASS")?"YOU WIN":"YOU LOSE"
    }else if(computer == "FIRE"){
        return(player == "WATER")?"YOU WIN":"YOU LOSE"  
    }else if(computer == "WATER"){
        return(player == "GRASS")?"YOU WIN":"YOU LOSE"
    }else if(computer == "GRASS"){
        return(player == "FIRE")?"YOU WIN":"YOU LOSE"
}
}
function countDown(){
    time--;
    if(time>=0){
        setTimeout(countDown,1000)
    }else if(time<=0){
        alert("You Lose")
    }
    timeText.textContent = `Timer: ${time}`;
}
