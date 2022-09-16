let totalRounds = 0;

const computerSelection = getComputerChoice();
const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')
const currentRound = document.querySelector('#currentRound')
const gameWinner = document.querySelector('#gameWinner');

const btns = document.querySelectorAll('button');
btns.forEach((button) => {

    button.addEventListener('click', () => {
        let playerSelection;

        if (button.id == "Rock") playerSelection = "ROCK"; 
        if (button.id == "Paper") playerSelection = "PAPER"; 
        if (button.id == "Scissor") playerSelection = "SCISSORS";

        playGame(playerSelection) && totalRounds++;

        if (totalRounds === 10) {
            endGame();
        }
        currentRound.textContent = totalRounds;

    });
});

function endGame(playerScore, computerScore) {

        if (playerScore > computerScore) {
        gameWinner.textContent = "The player wins"; 
        }

        else if (computerScore == playerScore) {
            gameWinner.textContent = "Its a tie";
        }

        else if (computerScore > playerScore)  {
        gameWinner.textContent = "The computer wins"; 
        }
   
}

function  getComputerChoice() {
    
const options = ["ROCK","PAPER","SCISSORS"] //Options from which the getComputerChoice function selects from. 
    return options[Math.floor(Math.random() * options.length)]
      // creates a variable called choice which holds the result from the options 
}


function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')

    if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        computerScore.textContent = parseInt(computerScore.textContent) +1;
        return 1;
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        console.log("You win!")
        playerScore.textContent = parseInt(playerScore.textContent) +1;
        return 1;
    }

    else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        console.log("You win!")
        playerScore.textContent = parseInt(playerScore.textContent) +1;
        return 1;
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        console.log("You lose!")
        computerScore.textContent = parseInt(computerScore.textContent) +1;
        return 1;
    }

    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        console.log("You win!")
        playerScore.textContent = parseInt(playerScore.textContent) +1;
        return 1;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        console.log("You lose!")
        computerScore.textContent = parseInt(computerScore.textContent) +1;
        return 1;
    }

    else if (playerSelection == computerSelection) {
        console.log("You Tie!")
    }

    else {
        console.log("Please choose a correct button")
    }

     
    
}


function updateScore() {

}