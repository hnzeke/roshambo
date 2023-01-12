Script.js

let userScore = 0
let compScore = 0
let clickCount = 0

function getComputerChoice () {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        result = "Rock";
        return result;
    } else if (result === 1) {
        result = "Paper";
        return result;
    } else {
        result = "Scissors";
        return result;
    }
}

function userInput () {
    let input = prompt("Rock, Paper, Scissors");
    input = input.toUpperCase()
    return input;
}

function lose(computerSelection, playerSelection) {
    let output = playerSelection.substr(1);
    playerSelection = playerSelection.substr(0, 1).toUpperCase() + output.toLowerCase();
    alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
    compScore += 1;
}

function win(computerSelection, playerSelection) {
    let output = playerSelection.substr(1);
    playerSelection = playerSelection.substr(0, 1).toUpperCase() + output.toLowerCase();
    alert(`You Win! ${playerSelection} beats ${computerSelection}`);
    userScore += 1;
}

function playRound (para) {
    let playerSelection = para;
    console.log(playerSelection);
    let computerSelection = getComputerChoice();
  
    if (computerSelection == "Rock") {
        switch (playerSelection.toUpperCase()) {
            case "PAPER":
                win(computerSelection, playerSelection);
                computerSelection = "";
                playerSelection = "";
                break;
            
            case "SCISSORS":
                lose(computerSelection, playerSelection);
                computerSelection = "";
                playerSelection = "";
                break;
            
            case "ROCK":
                alert("It's a Draw!");
                computerSelection = "";
                playerSelection = "";
                break;
        }
    } else if (computerSelection == "Paper") {
        switch (playerSelection.toUpperCase()) {
            case "SCISSORS":
                win(computerSelection, playerSelection);
                computerSelection = "";
                playerSelection = "";
                break;
            
            case "ROCK":
                lose(computerSelection, playerSelection);
                computerSelection = "";
                playerSelection = "";
                break;
            
            case "PAPER":
                alert("It's a Draw!");
                computerSelection = "";
                playerSelection = "";
                break;
        }
    } else if (computerSelection == "Scissors") {
        switch (playerSelection.toUpperCase()) {
            case "ROCK":
                win(computerSelection, playerSelection);
                computerSelection = "";
                playerSelection = "";
                break;
            
            case "PAPER":
                lose(computerSelection, playerSelection);
                computerSelection = "";
                playerSelection = "";
                break;
            
            case "SCISSORS":
                alert("It's a Draw!");
                computerSelection = "";
                playerSelection = "";
                break;
        }
    }
}

function game(arg) {
    
    
    if (clickCount !== 5) {
        playRound(arg);
    }
        /* for (let i = 0; i < 5; i++) {
      playRound(arg);
    }*/
    if (clickCount === 5) {
        if (userScore > compScore) {
            message.textContent = "Game Over. You Win";
        } else if (userScore < compScore) {
            message.textContent = "Game Over. You Lose";
        } else if (userScore == compScore) {
            message.textContent = "Game Over. It's a Draw";
        } 
    } 

} 



const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const message = document.querySelector('.message');

rockButton.addEventListener('click', function () {
    game(rockButton.classList.value)
    ++clickCount
    yourScore.textContent = userScore
    comScore.textContent = compScore
    if (clickCount === 5) {
        game()
        userScore = 0
        compScore = 0
    } else if (clickCount > 5) {
        message.textContent = ""
        clickCount = 0;
    }
});
paperButton.addEventListener('click', function () {
    game(paperButton.classList.value)
    ++clickCount
    yourScore.textContent = userScore
    comScore.textContent = compScore
    if (clickCount === 5) {
        game()
        userScore = 0
        compScore = 0
    } else if (clickCount > 5) {
        message.textContent = ""
        clickCount = 0;
    }
});
scissorsButton.addEventListener('click', function () {
    game((scissorsButton.classList.value))
    ++clickCount
    yourScore.textContent = userScore
    comScore.textContent = compScore
    if (clickCount === 5) {
        game()
        userScore = 0
        compScore = 0
    } else if (clickCount > 5) {
        message.textContent = ""
        clickCount = 0;
    }
});

const yourScore = document.querySelector('.yourScore');
const comScore = document.querySelector('.comScore');