for (i = 1; i < 10; i++){
    let result;
    let win = "You win!";
    let lost = "You lost!";
    let tie = "You tied!";
    let playerSelection = playerChoice();
    let computerSelection = getComputerChoice();

    function getComputerChoice() {
        let computerNo = Math.floor(Math.random() * 3) + 1;

        if (computerNo === 1) {
            return("rock");
        } else if (computerNo === 2) {
            return("paper");
        } else {
            return("sissors");
        };
    }
    console.log(getComputerChoice());

    function playerChoice() {
        let playerAns = prompt("Pick Rock Paper or Sissors").toLowerCase();
        console.log(playerAns);
        return(playerAns);
    }

    // console.log(playerChoice());

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                return("lost");
            } else if (computerSelection === "rock") {
                return("tie");
            } else {
                return("win");
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "paper") {
                return("tie");
            } else if (computerSelection === "rock") {
                return("win");
            } else {
                return("lost");
            }
        } else if (playerSelection === "sissors") {
            if (computerSelection === "paper") {
                return("win");
            } else if (computerSelection === "rock") {
                return("lost");
            } else {
                return("tie");
            }
        } else {
            return("error");
        }
    }
    console.log(playRound(playerSelection, computerSelection))
}

    // for (i = 1; i < 5; i++) {
    //     getComputerChoice();
    //     playerChoice();
    //     console.log(playRound(playerSelection, computerSelection));
    // }


    // for (i = 0; i < 10; i++) {
    //     getComputerChoice();
    //     console.log(getComputerChoice());
    //     playerChoice();
    //     playRound(playerSelection, computerSelection)
    //     console.log(playRound(playerSelection, computerSelection));
    // }