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
