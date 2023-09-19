let computerSelection = getComputerChoice();

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    }  else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

console.log(computerSelection)

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = "It's a draw!"
    } else if (playerSelection == "rock") {
        result = computerSelection == "scissors" ? "You win!" : "You lose!";
    } else if (playerSelection == "paper") {
        result = computerSelection == "rock" ? "You win!" : "You lose!";
    } else if (playerSelection == "scissors") {
        result = computerSelection == "paper" ? "You win!" : "You lose!";
    }
    return result;
}

const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));



/*
IF computerChoice was Rock === playerChoice is Paper {
	return you win
} else if computerChoice was Rock === playerChoice is Rock {
	return it’s a draw
} else if computerChoice was Rock === playerChoice is not Paper nor Rock {
	return you lose
}
*/
