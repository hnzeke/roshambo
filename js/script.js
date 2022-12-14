function getComputerChoice () {
    result = Math.floor(Math.random() * 3);
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

getComputerChoice();
