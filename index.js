const Choices = ['Rock', 'Paper', 'Scissors'];
const playerChoice = document.getElementById('playerselect');
const computerChoice = document.getElementById('computerselect');
const resultDisplay = document.getElementById('resultdisplay');
const playerCount = document.getElementById('playercount');
const computerCount = document.getElementById('computercount');
const winOrLose = document.getElementById('winorlose');
// const buttonResult=document.querySelector('#buttonresult');
let playerScore = 0;
let computerScore = 0;


//function to select player choice and show result

function playRound(playerSelect) {

    const computerSelect = Choices[(Math.floor(Math.random() * Choices.length))];
    let result = "";
    console.log(computerselect)
    if (playerSelect === computerselect) {
        result = 'Its a tie!! Rematch';
        console.log(playerSelect)
        console.log(computerselect)
    }
    else if (playerSelect === 'Rock' && computerSelect === 'Scissors') {
        result = 'player wins';

    }
    else if (playerSelect === 'Paper' && computerSelect === 'Rock') {
        result = 'player wins';

    }
    else if (playerSelect === 'Scissors' && computerSelect === 'Paper') {
        result = 'player wins';

    }
    else {
        result = 'player lose!!';

    }

    playerChoice.textContent = `PLAYER: ${playerSelect}`;

    displayimage(playerSelect,"image1")
    displayimage(computerselect,"image2")

    computerChoice.textContent = `COMPUTER: ${computerSelect}`;
    resultDisplay.textContent = result;

    checkWinner(result);

    playerCount.textContent = 'Player Win: ' + playerScore;
    computerCount.textContent = 'computer Win: ' + computerScore;


}

function displayimage(select,id){
    var img = document.createElement("img");
    if (select === "Rock"){
        img.src = "img/fist.png";
    }
    else if (select === "Paper"){
        img.src = "img/hand-paper.png";
    }
    else if (select === "Scissor"){
        img.src = "img/scissors.png";
    }
    else{
        img.src = "dfsd"
    }
    var src = document.getElementById(id);
    src.innerHTML = "";
    src.appendChild(img);

}

function checkWinner(resultCheck) {
    if (resultCheck === 'player wins') {
        ++playerScore;

    }
    if (resultCheck === 'player lose!!') {
        ++computerScore;

    }
    win(playerScore, computerScore);
}

function win(playerPoint, computerPoint) {
    if (playerPoint === 5) {
        winOrLose.textContent = 'You win!!';


    }
    if (computerPoint === 5) {
        winOrLose.textContent = 'You loose!!';

    }


}
function restart() {
    location.reload;

}







