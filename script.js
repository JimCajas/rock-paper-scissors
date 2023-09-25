// Return computer's hand randomly
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
    // Convert the player's choice into a lowercase variable so it can be always compared with computer's choice
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