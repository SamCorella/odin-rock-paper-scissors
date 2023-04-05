function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function capitalize(s) {
    return s.slice(0,1).toUpperCase() + s.slice(1).toLowerCase();
}

let playerScore = 0, computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

    if (playerSelection == computerSelection) {
        return "Tie! " + playerSelection + " and " + computerSelection; 
    }  else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
        playerScore += 1;
        return "You Win! "; 
    } else {
        computerScore += 1;
        return "You Lose! "; 
    }
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        const computerSelection = getComputerChoice();
        console.log("Computer Choice: " + computerSelection);

        const playerSelection = prompt("Player: " + playerScore + " Computer: " + computerScore + "\nEnter Your Choice (Rock/Paper/Scissors): ");
        console.log("Player Choice: " + capitalize(playerSelection));

        console.log(playRound(playerSelection, computerSelection));
        
        if (playerScore == 5) {
            console.log("You scored 5 points. You won!");
        } else if (computerScore == 5) {
            console.log("Computer wins. Game Over.");
        }
    }
}

game();