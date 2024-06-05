const Choices = ['Rock', 'Paper', 'Scissor'];
const playerChoice = document.getElementById('playerselect');
const computerChoice = document.getElementById('computerselect');
const resultDisplay = document.getElementById('resultdisplay');
const playerCount = document.getElementById('playercount');
const computerCount = document.getElementById('computercount');
const winOrLose = document.getElementById('winorlose');
const resetBtn=document.querySelector('.resetBtn');
let playerScore = 0;
let computerScore = 0;
let interval = null;



//function to select player choice and show result

function playRound(playerSelect) {

    const computerSelect = Choices[(Math.floor(Math.random() * Choices.length))];
    let result = "";
    if (playerSelect === computerSelect) {
        result = 'Its a tie!! Rematch';
    }
    else if (playerSelect === 'Rock' && computerSelect === 'Scissor') {
        result = 'Player wins!';

    }
    else if (playerSelect === 'Paper' && computerSelect === 'Rock') {
        result = 'Player wins!';

    }
    else if (playerSelect === 'Scissor' && computerSelect === 'Paper') {
        result = 'Player wins!';

    }
    else {
        result = 'Player lose!!';

    }


    displayimage(playerSelect, "image1")
    displayimage(computerSelect, "image2")

    resultDisplay.textContent = result;

    checkWinner(result);

    playerCount.textContent = 'Player Win: ' + playerScore;
    computerCount.textContent = 'Computer Win: ' + computerScore;
    stopAfterFive(playerScore,computerScore);


}

function displayimage(select, id) {
    let img = document.createElement("img");
    if (select === "Rock") {
        img.src = "img/fist.png";
    }
    else if (select === "Paper") {
        img.src = "img/hand-paper.png";
    }
    else if (select === "Scissor") {
        img.src = "img/scissors.png";
    }
    else {
        img.src = "dfsd"
    }
    let src = document.getElementById(id);
    src.innerHTML = "";
    src.appendChild(img);

}

function checkWinner(resultCheck) {
    if (resultCheck === 'Player wins!') {
        ++playerScore;

    }
    if (resultCheck === 'Player lose!!') {
        ++computerScore;

    }
    
}

function stopAfterFive(player,computer){
    if(player === 5 || computer === 5){
        clearInterval(interval);
        win(player, computer);
    }

}




function win(playerPoint, computerPoint) {
    if (playerPoint === 5) {
        winOrLose.innerHTML = `<span class="win">You win!! Lovely</span>`;


    }
    if (computerPoint === 5) {
        winOrLose.innerHTML = `<span class="loose">You loose!! Better Try Next time</span>`;
    }

}
function restart() {
    location.reload();
    
}

resetBtn.addEventListener('click',restart);