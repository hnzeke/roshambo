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

let computerSelection = getComputerChoice();

function userInput () {
    let input = prompt("Rock, Paper, Scissors");
    input = input.toUpperCase()
    return input;
}

let playerSelection = userInput();

function lose(computerSelection, playerSelection) {
    let output = playerSelection.substr(1);
    playerSelection = playerSelection.substr(0, 1) + output.toLowerCase();
    alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
}

function win(computerSelection, playerSelection) {
    let output = playerSelection.substr(1);
    playerSelection = playerSelection.substr(0, 1) + output.toLowerCase();
    alert(`You Win! ${playerSelection} beats ${computerSelection}`);
}

function playRound () {
    if (computerSelection == "Rock") {
        switch (playerSelection) {
            case "PAPER":
                win(computerSelection, playerSelection);
                break;
            
            case "SCISSORS":
                lose(computerSelection, playerSelection);
                break;
            
            case "ROCK":
                alert("It's a Draw!");
                break;
        }
    } else if (computerSelection == "Paper") {
        switch (playerSelection) {
            case "SCISSORS":
                win(computerSelection, playerSelection);
                break;
            
            case "ROCK":
                lose(computerSelection, playerSelection);
                break;
            
            case "PAPER":
                alert("It's a Draw!");
                break;
        }
    } else if (computerSelection == "Scissors") {
        switch (playerSelection) {
            case "ROCK":
                win(computerSelection, playerSelection);
                break;
            
            case "PAPER":
                lose(computerSelection, playerSelection);
                break;
            
            case "SCISSORS":
                alert("It's a Draw!");
                break;
        }
    }
}