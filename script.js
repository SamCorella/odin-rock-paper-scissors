function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

let playerScore = 0, computerScore = 0;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        return "Tie! " + playerSelection + " and " + computerSelection; 
    }  else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
        playerScore += 1;
        return "You Win! " + playerSelection + " beats " + computerSelection; 
    } else {
        computerScore += 1;
        return "You Lose! " + computerSelection + " beats " + playerSelection; 
    }
}

const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const results = document.createElement('p');
const scores = document.createElement('p');
container.appendChild(results);
container.appendChild(scores);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        results.textContent = playRound(button.id);
        scores.textContent = "Player: " + playerScore + "\nComputer: " + computerScore;
    });
});