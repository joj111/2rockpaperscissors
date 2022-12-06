//score
let playerScore = 0;
let computerScore = 0;
//score

const result = document.querySelector(".result");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");
const re = document.querySelector(".game");

let playerPick = "";

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        console.log("ROCK")
        return("ROCK");
    } else if (choice === 1) {
        console.log("PAPER")
        return("PAPER");
    } else {
        console.log("SCISSORS")
        return("SCISSORS");
    };
}

function playerChoice() {
    const answer = prompt("PICK ROCK PAPER OR SCISSORS").toUpperCase();
    console.log(answer);
    return(answer);
}
 
function round(player, computer) {
    if (player === computer) {
        console.log("TIE")
        result.textContent = "It's a tie!"
        return("TIE");
    } else if (player === "ROCK" && computer === "PAPER") {
        console.log("LOSS")
        computerScore++;
        cScore.textContent = `Computer Score: ${computerScore}`;
        result.textContent = "It's a loss!";
        return("LOSS");
    } else if (player === "ROCK" && computer === "SCISSORS") {
        console.log("WIN")
        playerScore++;
        pScore.textContent = `Player Score: ${playerScore}`;
        result.textContent = "It's a win!"
        return("WIN");
    } else if (player === "PAPER" && computer === "SCISSORS") {
        console.log("LOSS")
        computerScore++;
        cScore.textContent = `Computer Score: ${computerScore}`;
        result.textContent = "It's a loss!"
        return("LOSS");
    } else if (player === "PAPER" && computer === "ROCK") {
        console.log("WIN")
        playerScore++;
        pScore.textContent = `Player Score: ${playerScore}`;
        result.textContent = "It's a win!"
        return("WIN");
    } else if (player === "SCISSORS" && computer === "ROCK") {
        console.log("LOSS")
        computerScore++;
        cScore.textContent = `Computer Score: ${computerScore}`;
        result.textContent = "It's a loss!"
        return("LOSS");
    } else if (player === "SCISSORS" && computer === "PAPER") {
        console.log("WIN")
        playerScore++;
        pScore.textContent = `Player Score: ${playerScore}`;
        result.textContent = "It's a win!"
        return("WIN");
    }
}

// function game() {
//     playerScore = 0;
//     computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         round(playerChoice(), getComputerChoice());
//     }
//     if (computerScore === playerScore) {
//         console.log("THE WHOLE GAME WAS A DRAW")
//     } else if (playerScore > computerScore) {
//         console.log("EASY WIN TOO EASY")
//     } else {
//         console.log("YOU LOST IMAGINE HAHAHA")
//     }
// }

// game()


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function endGame() {
    if (computerScore >= 5) {
        re.textContent = "YOU LOST IMAGINE HAHAHA";
        console.log("YOU LOST IMAGINE HAHAHA");
        computerScore = 0;
        playerScore = 0;
        cScore.textContent = `Computer Score: ${computerScore}`;
        pScore.textContent = `Player Score: ${playerScore}`;
    } else if (playerScore >= 5) {
        re.textContent = "EASY WIN TOO EASY";
        console.log("EASY WIN TOO EASY");
        computerScore = 0;
        playerScore = 0;
        cScore.textContent = `Computer Score: ${computerScore}`;
        pScore.textContent = `Player Score: ${playerScore}`;
    };
};

rock.addEventListener("click", () => {
    playerPick = "ROCK";
    console.log("ROCK");
    round(playerPick, getComputerChoice());
    endGame();
});

paper.addEventListener("click", () => {
    playerPick = "PAPER";
    console.log("PAPER");
    round(playerPick, getComputerChoice());
    endGame();
});

scissors.addEventListener("click", () => {
    playerPick = "SCISSORS";
    console.log("SCISSORS");
    round(playerPick, getComputerChoice());
    endGame();
});