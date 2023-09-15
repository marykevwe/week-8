const prompt = require("prompt-sync")();
const choices = ['rock', 'paper', 'scissors'];

function ComputerChoice() {
  let choice = Math.floor(Math.random() * choices.length);
  return choices[choice];
}

function PlayerChoice() {
  let Playerinput = prompt("Enter your choice (Rock, Paper, or Scissors):").toLowerCase();

  if (Playerinput === 'rock') {
    console.log("You picked rock");
    return 'rock';
  }
  if (Playerinput === 'paper') {
    console.log("You picked paper");
    return 'paper';
  }
  if (Playerinput === 'scissors') {
    console.log("You picked scissors");
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a Tie, Try Again!!!");
    return "It's a Tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    console.log('You Win!');
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
      console.log('Rock smashes Scissors');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      console.log('Scissors cuts Paper');
    } else {
      console.log('Paper covers Rock');
    }
    return 'You Win!';
  } else {
    console.log('You Lose!');
    if (computerSelection === 'rock' && playerSelection === 'scissors') {
      console.log('Rock smashes Scissors');
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
      console.log('Scissors cuts Paper');
    } else {
      console.log('Paper covers Rock');
    }
    return 'You Lose!';
  }
}


function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = PlayerChoice();
    const computerSelection = ComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith('You Win!')) {
      playerScore++;
    } else if (result.startsWith('You Lose!')) {
      computerScore++;
    }
  }

  console.log('Game Over!');
  console.log('Player Score: ' + playerScore);
  console.log('Computer Score: ' + computerScore);

  if (playerScore > computerScore) {
    console.log('You win the game!');
  } else if (playerScore < computerScore) {
    console.log('Computer wins the game!');
  } else {
    console.log("It's a tie game!");
  }
}


game();
