let choice = ["rock", "paper", "scissors"];

function computerPlay() {
  //use random number then generates a random item from choice array
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(x, y) {
  if (x.toLowerCase() === y.toLowerCase()) {
    alert("It's a draw!");
    return "It's a draw!";
  } else if (x.toLowerCase() === "rock" && y.toLowerCase() === "scissors") {
    alert("You Win! Rock beats Scissors!");
    return "You Win!";
  } else if (x.toLowerCase() === "paper" && y.toLowerCase() === "rock") {
    alert("You Win! Paper beats Rock!");
    return "You Win!";
  } else if (x.toLowerCase() === "scissors" && y.toLowerCase() === "paper") {
    alert("You Win! Scissors beats Paper!");
    return "You Win!";
  } else {
    alert("You Lose!");
    return "You Lose!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors?");
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    if (result === "You Lose!") {
      computerScore += 1;
      console.log("computer score" + computerScore);
    } else if (result === "You Win!") {
      playerScore += 1;
      console.log("player score" + playerScore);
    }
    getP().textContent = `Computer score ${computerScore} Player score ${playerScore}`;
  }
  if (playerScore > computerScore) {
    return "Player Wins!";
  } else if (playerScore < computerScore) {
    return "Computer Wins!";
  }
  return "Draw!";
}

function getP() {
  return document.querySelector("p");
}

game();
