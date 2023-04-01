function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function capitalize(s) {
    return s.slice(0,1).toUpperCase() + s.slice(1).toLowerCase();
}

let playerScore, computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

    if (playerSelection == computerSelection) {
        return "Tie! " + playerSelection + " and " + computerSelection; 
    }  else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")
    ) {
        return "You Win! "; 
    } else {
        return "You Lose! "; 
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        console.log("Computer Choice: " + computerSelection);
        let playerSelection = prompt("Enter Your Choice (Rock/Paper/Scissors): ");
        console.log("Player Choice: " + capitalize(playerSelection));
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();