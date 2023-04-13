let playerScore = 0, computerScore = 0;

const choices = document.querySelectorAll('.player-selection');
const container = document.querySelector('#results-container');
const playAgainBtn = document.querySelector('#play-again');
const selected = document.createElement('div');
const results = document.createElement('p');
const scores = document.createElement('p');
container.appendChild(selected);
container.appendChild(results);
container.appendChild(scores);

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function endGame() {
    choices.forEach((button) => button.classList.toggle('disabled'));
    playAgainBtn.style.display = 'block';
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    selected.innerHTML = "<p>Player Selected: " + playerSelection + "</p><p>Computer Selected: " + computerSelection + "</p>";

    if (playerSelection == computerSelection) {
        return "Tie!"; 

    }  else if ( // Player Wins Round
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        playerScore += 1;
        if (playerScore == 5) {
            endGame();
            return "Player Wins!"; 
        }

        return "You Win!";

    } else { // Computer Wins Round
        computerScore += 1;
        if (computerScore == 5) {
            endGame();
            return "Computer Wins!"; 
        }

        return "You Lose!";
    }
}

choices.forEach((button) => {
    button.addEventListener('click', () => {
        results.textContent = playRound(button.id);
        scores.textContent = "Player: " + playerScore + " Computer: " + computerScore; 
    });
});

playAgainBtn.addEventListener('click', () => {
    selected.innerHTML = "<p>Player Selected:</p><p>Computer Selected:</p>";
    playerScore = 0;
    computerScore = 0;
    scores.textContent = "Player: " + playerScore + " Computer: " + computerScore; 
    choices.forEach((button) => button.classList.toggle('disabled'));
    playAgainBtn.style.display ='none';
})