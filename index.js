const Choices=['rock', 'paper' ,'scissors'];
const playerChoice=document.getElementById('playerselect');
const computerChoice=document.getElementById('computerselect');
const resultDisplay=document.getElementById('resultdisplay');
const playerCount=document.getElementById('playercount');
const computerCount=document.getElementById('computercount');
const winOrLose=document.getElementById('winorlose');
let playerScore=0;
let computerScore=0;
let results;

//function to select player choice and show result

function playRound(playerSelect){
    
    const computerSelect=Choices[(Math.floor(Math.random()*Choices.length))];
    let result="";
    if(playerSelect === computerSelect){
        result='Its a tie!! Rematch';
    }
    else if(playerSelect==='rock' && computerSelect==='scissors'){
        result='player wins';

    }
    else if(playerSelect==='paper' && computerSelect==='rock'){
        result='player wins';

    }
    else if(playerSelect ==='scissors' && computerSelect ==='paper'){
        result='player wins';

    }
    else{
        result='player lose!!';
        
    }
    
    playerChoice.textContent=`PLAYER: ${playerSelect}`;
    computerChoice.textContent=`COMPUTER: ${computerSelect}`;
    resultDisplay.textContent=result;

    checkWinner(result);
    
    playerCount.textContent= 'Player Win:'+ playerScore;
    computerCount.textContent= 'computer Win:'+ computerScore;


}

function checkWinner(resultCheck){
    if(resultCheck === 'player wins'){
        ++playerScore;
        
    }
    if(resultCheck === 'player lose!!'){
        ++computerScore;
        
    }
    win(playerScore,computerScore);
}

function win(playerPoint,computerPoint){
    if(playerPoint === 5){
        winOrLose.textContent= 'You win!!';
        
    }
    if(computerPoint === 5){
        winOrLose.textContent= 'You loose!!';

    }
}
function restart(){


}







