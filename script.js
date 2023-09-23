
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


// How can I add 1 point each to the score variables? And how can I tally up the score?

// How can I sum the points and declare the winner at the end of 5 games?

let playerScore = 0;
let computerScore = 0;
    
function playRound() {
    let playerInput = prompt('Choose your hand! Enter "Rock, Paper or Scissors"!')
    let playerSelection = playerInput.toLowerCase();
    let computerSelection = getComputerChoice();
    let result;
    if (playerSelection === computerSelection) {
        result = "It's a draw! You chose " + playerSelection + " and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;

    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            result = "You win! You chose " + playerSelection + " and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
        } else {
            computerScore++;
            result = "You lose! You chose " + playerSelection + " and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
        }        
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            result = "You win! You chose " + playerSelection + " and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
        } else {
            computerScore++;
            result = "You lose! You chose " + playerSelection + " and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            result = "You win! You chose " + playerSelection + " and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
        } else {
            computerScore++;
            result = "You lose! You chose " + playerSelection + " and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
        }
    }
    return console.log(result);
}

function finalScore (){
    let announcement;
    if (playerScore === computerScore) {
        announcement = "It's a draw! Your score: " + playerScore +  " vs. Computer score: " + computerScore;
        return announcement;
    } else if (playerScore > computerScore) {
        announcement = "You win! Your score: " + playerScore + " vs. Computer score: " + computerScore;
        return announcement;
    } else {
        announcement = "You lose! Your score: " + playerScore + " vs. Computer score: " + computerScore;
        return announcement;
    }
}

playRound();
playRound();
playRound();
playRound();
playRound();
console.log(finalScore());




/*
IF computerChoice was Rock === playerChoice is Paper {
	return you win
} else if computerChoice was Rock === playerChoice is Rock {
	return it’s a draw
} else if computerChoice was Rock === playerChoice is not Paper nor Rock {
	return you lose
}
*/

/*
function game () {
    for (let i = 0; i < 5; i++){
        
    }
}
*/





















/*




function playRound() {
    let playerInput = prompt('Choose your hand! Enter "Rock, Paper or Scissors"!')
    let playerSelection = playerInput.toLowerCase();
    let computerSelection = getComputerChoice();
    let result;
    let playerScore = 0;
    let computerScore = 0;
    if (playerSelection === computerSelection) {
        result = "It's a draw! You chose " + playerSelection + " and computer chose " + computerSelection + "."
    } else if (playerSelection === "rock") {
        result = computerSelection === "scissors" ? "You win! You chose " + playerSelection + " and computer chose " + computerSelection + "." : "You lose! You chose " + playerSelection + " and computer chose " + computerSelection + ".";
    } else if (playerSelection === "paper") {
        result = computerSelection === "rock" ? "You win! You chose " + playerSelection + " and computer chose " + computerSelection + "." : "You lose! You chose " + playerSelection + " and computer chose " + computerSelection + ".";
    } else if (playerSelection === "scissors") {
        result = computerSelection === "paper" ? "You win! You chose " + playerSelection + " and computer chose " + computerSelection + "." : "You lose! You chose " + playerSelection + " and computer chose " + computerSelection + ".";
    }
    return console.log(result);
}

playRound();
playRound();
playRound();
playRound();
playRound();




























let playerInput = prompt('Choose your hand! Enter "Rock, Paper or Scissors"!')
let playerSelection = playerInput.toLowerCase();
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

const playRound = () => {
    playerInput;
    playerSelection;
    computerSelection;    
    let result;
    if (playerSelection === computerSelection) {
        result = "It's a draw! You chose " + playerSelection + " and computer chose " + computerSelection + "."
    } else if (playerSelection === "rock") {
        result = computerSelection === "scissors" ? "You win! You chose " + playerSelection + " and computer chose " + computerSelection + "." : "You lose! You chose " + playerSelection + " and computer chose " + computerSelection + ".";
    } else if (playerSelection === "paper") {
        result = computerSelection === "rock" ? "You win! You chose " + playerSelection + " and computer chose " + computerSelection + "." : "You lose! You chose " + playerSelection + " and computer chose " + computerSelection + ".";
    } else if (playerSelection === "scissors") {
        result = computerSelection === "paper" ? "You win! You chose " + playerSelection + " and computer chose " + computerSelection + "." : "You lose! You chose " + playerSelection + " and computer chose " + computerSelection + ".";
    }
    //return result;
    return console.log(result);
}

const game = (func, n) => {
    for(let i=1; i<=n; i++){
        func()
    }
}

game(playRound, 2)
*/