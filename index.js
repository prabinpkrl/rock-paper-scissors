console.log('hello');

const computeroutput=getComputerChoice();
console.log("computer choice:", computeroutput);

function getComputerChoice(){
    const Choices=['rock', 'paper' ,'scissors'];
    const randomSelect=Math.floor(Math.random()*Choices.length);
    return Choices[randomSelect];
}

function playRound(playerSelection, computerSelection){
     playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return 'Its a tie!! Rematch';
    }
    else if(playerSelection==='rock' && computerSelection==='scissors'){
        return 'player wins';
    }
    else if(playerSelection==='paper' && computerSelection==='rock'){
        return 'player wins';
    }
    else if(playerSelection==='scissors' && computerSelection==='paper'){
        return 'player wins';
    }
    else{
        return 'player lose!!';
    }

}


function game(){
    let playerScore=0;
    let computerScore=0;

    for(let i=0; i<5; i++){
        const playerSelection = prompt("Enter your:");
        const computerSelection = getComputerChoice();
        const roundResult= (playRound(playerSelection, computerSelection));
        
        if(roundResult.includes('win')){
            playerScore++;
        }
        else if(roundResult.includes('lose')){
            computerScore++;
        }
        console.log(roundResult);
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game.");
      } else if (playerScore < computerScore) {
        console.log("Sorry! You lose the game.");
      } else {
        console.log("It's a tie game.");
      }
}
game();

