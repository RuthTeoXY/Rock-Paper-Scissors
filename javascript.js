let choice = ["rock", "paper", "scissors"];
const whowins = document.querySelector(".who-win");
const score = document.querySelector(".score");
const overall = document.querySelector(".overall");

function computerPlay() {
  //use random number then generates a random item from choice array
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(x, y) {
  if (x.toLowerCase() === y.toLowerCase()) {
    whowins.textContent = "It's a draw!";
    return "It's a draw!";
  } else if (x.toLowerCase() === "rock" && y.toLowerCase() === "scissors") {
    whowins.textContent = "You Win! Rock beats Scissors!";
    return "You Win!";
  } else if (x.toLowerCase() === "paper" && y.toLowerCase() === "rock") {
    whowins.textContent = "You Win! Paper beats Rock!";
    return "You Win!";
  } else if (x.toLowerCase() === "scissors" && y.toLowerCase() === "paper") {
    whowins.textContent = "You Win! Scissors beats Paper!";
    return "You Win!";
  } else {
    whowins.textContent = "You Lose!";
    return "You Lose!";
  }
}

function countScore(result) {
  if (result === "You Lose!") {
    computerScore += 1;
  } else if (result === "You Win!") {
    playerScore += 1;
  }
}

let playerScore = 0;
let computerScore = 0;

function playplay(e) {
  countScore(playRound(e.target.id, computerPlay()));
  score.textContent = `Computer score ${computerScore} Player score ${playerScore}`;
  declare();
}

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", playplay);
});

function declare() {
  if (playerScore === 5) {
    overall.textContent = "You are a master!";
    btns.forEach((btn) => {
      btn.removeEventListener("click", playplay);
    });
  }
  if (computerScore === 5) {
    overall.textContent = "Better luck next time!";
    btns.forEach((btn) => {
      btn.removeEventListener("click", playplay);
    });
  }
}
// function reset() {
//   if (overall.textContent != "") {
//     playerScore = 0;
//     computerScore = 0;
//     overall.textContent = "";
//   }
// }

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt("Rock, Paper or Scissors?");
//     const computerSelection = computerPlay();
//     const result = playRound(playerSelection, computerSelection);
//     if (result === "You Lose!") {
//       computerScore += 1;
//       console.log("computer score" + computerScore);
//     } else if (result === "You Win!") {
//       playerScore += 1;
//       console.log("player score" + playerScore);
//     }
//     getP().textContent = `Computer score ${computerScore} Player score ${playerScore}`;
//   }
//   if (playerScore > computerScore) {
//     return "Player Wins!";
//   } else if (playerScore < computerScore) {
//     return "Computer Wins!";
//   }
//   return "Draw!";
// }
