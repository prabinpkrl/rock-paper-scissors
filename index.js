const Choices=['rock', 'paper' ,'scissors'];
const playerChoice=document.getElementById('playerselect');
const computerChoice=document.getElementById('computerselect');
const resultDisplay=document.getElementById('resultdisplay');
const playerCount=document.getElementById('playercount');
const computerCount=document.getElementById('computercount');
const winOrLose=document.getElementById('winorlose');
let playerScore=0;
let computerScore=0;
let resultss;


function playRound(playerSelect){
    
    const computerselect=Choices[(Math.floor(Math.random()*Choices.length))];
    let result="";
    if(playerSelect === computerselect){
        result='Its a tie!! Rematch';
    }
    else if(playerSelect==='rock' && computerselect==='scissors'){
        result='player wins';
        playerScore++;
    }
    else if(playerSelect==='paper' && computerselect==='rock'){
        result='player wins';
        playerScore++;
    }
    else if(playerSelect==='scissors' && computerselect==='paper'){
        result='player wins';
        playerScore++;
    }
    else{
        result='player lose!!';
        computerScore++;
    }
    
    playerChoice.textContent=`PLAYER: ${playerSelect}`;
    computerChoice.textContent=`COMPUTER: ${computerselect}`;
    resultDisplay.textContent=result;
    playerCount.textContent= 'Player Win:'+ playerScore;
    computerCount.textContent= 'computer Win:'+ computerScore;

    if(playerScore === 5){
        winOrLose.textContent= 'Yay! YOU WIN';
    }
    else{
        winOrLose.textContent= 'SAD! YOU LOSE';
    }

}







