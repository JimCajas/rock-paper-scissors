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

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const divRound = document.querySelector(".round");
const divResult = document.querySelector(".result");
const body = document.querySelector("body");
const container = document.querySelector(".container");

// Play one game and return the result to console
function playRoundRock() {
    // Bring computer's choice for this game
    let computerSelection = getComputerChoice();
    // Store the result of this game to be returned
    let result = "test";
    
    if (computerSelection === "rock"){
        result = "It's a draw! You chose rock and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
    } else if (computerSelection === "paper") {
        computerScore++;
        result = "You lose! You chose rock and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
    } else {
        playerScore++;
        result = "You win! You chose rock and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
    }

    return result;

    // Display a tie game message and will not add to the scores
    /*
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
    */
    
}

function playRoundPaper() {
    let computerSelection = getComputerChoice();
    let result = "test";
    
    if (computerSelection === "paper"){
        result = "It's a draw! You chose paper and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
    } else if (computerSelection === "rock") {
        playerScore++;
        result = "You win! You chose paper and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
    } else {
        computerScore++;
        result = "You lose! You chose paper and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
    }
    return result;   
}

function playRoundScissors() {
    let computerSelection = getComputerChoice();
    let result = "test";
    
    if (computerSelection === "scissors"){
        result = "It's a draw! You chose scissors and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
    } else if (computerSelection === "rock") {
        computerScore++;
        result = "You lose! You chose scissors and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
    } else {
        playerScore++;
        result = "You win! You chose scissors and computer chose " + computerSelection + ". " + "Your score: " + playerScore + " vs. Computer score: " + computerScore;
    }
    return result;   
}

// Declare the winner at the end of the set by checking who has won more
function finalScore(){
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

btnRock.addEventListener("click", () => {
    playRoundRock();
    if (playerScore === 5 || computerScore === 5) {
        const finalOutput = finalScore();
        const p = document.createElement("p");
        p.textContent = finalOutput;
        divResult.appendChild(p);
        const endGame = document.createElement("p");
        endGame.textContent = "Thanks for playing!";
        divResult.appendChild(endGame);
        body.removeChild(container);

    } else (playerScore > 5 || computerScore > 5) 
        result = "Your score: " + playerScore + " vs. Computer score: " + computerScore;
        const pRound = document.createElement("p");
        pRound.textContent = result;
        divRound.appendChild(pRound);
})

btnPaper.addEventListener("click", () => {
    playRoundPaper();
    if (playerScore === 5 || computerScore === 5) {
        const finalOutput = finalScore();
        const p = document.createElement("p");
        p.textContent = finalOutput;
        divResult.appendChild(p);
        const endGame = document.createElement("p");
        endGame.textContent = "Thanks for playing!";
        divResult.appendChild(endGame);
        body.removeChild(container);

    } else (playerScore > 5 || computerScore > 5) 
        result = "Your score: " + playerScore + " vs. Computer score: " + computerScore;
        const pRound = document.createElement("p");
        pRound.textContent = result;
        divRound.appendChild(pRound);    
})

btnScissors.addEventListener("click", () => {
    playRoundScissors();
    if (playerScore === 5 || computerScore === 5) {
        const finalOutput = finalScore();
        const p = document.createElement("p");
        p.textContent = finalOutput;
        divResult.appendChild(p);
        const endGame = document.createElement("p");
        endGame.textContent = "Thanks for playing!";
        divResult.appendChild(endGame);
        body.removeChild(container);

    } else (playerScore > 5 || computerScore > 5) 
        result = "Your score: " + playerScore + " vs. Computer score: " + computerScore;
        const pRound = document.createElement("p");
        pRound.textContent = result;
        divRound.appendChild(pRound);
})



/*
// Play 1 set of 5 games and display the winner with the total game won
playRound();
playRound();
playRound();
playRound();
playRound();
console.log(finalScore());
*/
