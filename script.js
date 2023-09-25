
// return computer's hand randomly
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

// Initialize player score and computer score so result of each game can be added
let playerScore = 0;
let computerScore = 0;
    
// Play one game and return the result to console
function playRound() {
    // Receive player's choice and store it temporarily 
    let playerInput = prompt('Choose your hand! Enter "Rock, Paper or Scissors"!')
    // Convert the player's choice into a lowercase variable
    let playerSelection = playerInput.toLowerCase();
    // Bring computer's choice for this game
    let computerSelection = getComputerChoice();
    // Store the result of this game to be returned
    let result;
    // Display a tie game message and will not add to the scores
    if (playerSelection === computerSelection) {
        result = "It's a draw! You chose " + playerSelection + " and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
    // Display the winner of the game and add the score to the winner's score
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

// Declare the winner at the end of the set by checking who has won more
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

// Play 1 set of 5 games and display the winner with the total game won
playRound();
playRound();
playRound();
playRound();
playRound();
console.log(finalScore());








// How can I add 1 point each to the score variables? And how can I tally up the score?

// How can I sum the points and declare the winner at the end of 5 games?



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