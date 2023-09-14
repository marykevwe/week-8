let choices = ['Rock', 'Paper', 'Scissors'];
let Payerinput = prompt("Enter your choice (Rock, Paper, or Scissors):").toLocaleLowerCase();

function ComputerChoice() {  
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
  }

function PayerChoice() {
    if (payerinput === "rock"){
        console.log("you pick rock");
        return "rock";
    }
    if (payerinput === "Paper"){
        console.log("you pick Paper");
        return "Paper";
}
if (payerinput === "Scissors"){
    console.log("you pick Scissors");
    return "Scissors";
}
}