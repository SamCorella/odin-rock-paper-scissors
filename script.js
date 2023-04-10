let playerScore = 0, computerScore = 0;

const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const choices = document.createElement('div');
const results = document.createElement('p');
const scores = document.createElement('p');
container.appendChild(choices);
container.appendChild(results);
container.appendChild(scores);

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    choices.innerHTML = "<p>Player Choice: " + playerSelection + "</p><p>Computer Choice: " + computerSelection + "</p>";

    if (playerSelection == computerSelection) {
        return "Tie!"; 

    }  else if ( // Player Wins Round
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
        playerScore += 1;
        if (playerScore == 5) {
            buttons.forEach((button) => button.classList.add('disabled'));
            return "Player Wins! Reload to play again."; 
        }

        return "You Win!";

    } else { // Computer Wins Round
        computerScore += 1;
        if (computerScore == 5) {
            buttons.forEach((button) => button.classList.add('disabled'));
            return "Computer Wins! Reload to try again."; 
        }

        return "You Lose!";
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results.textContent = playRound(button.id);
        scores.textContent = "Player: " + playerScore + " Computer: " + computerScore; 
    });
});
