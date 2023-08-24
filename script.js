// Gets a random number from my array
function getComputerChoice() {
    let cpuOptions = ["rock", "scissors", "paper"]
    var cpuChoice = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
    return cpuChoice;
}

// send the function to a variable so easy to use
var computerSelection = getComputerChoice();

var playerChoice = prompt("Choose rock, scissors or paper")
console.log(playerChoice)

console.log(playerChoice, computerSelection)

function playround(playerChoice, computerSelection) {
    let outcome;

    if (playerChoice === computerSelection) {
        outcome = "draw"
     }  else if (playerChoice === "scissors" && computerSelection === "paper" ) {
        outcome = "player wins";
     }  else if (playerChoice === "scissors" && computerSelection === "rock") {
        outcome = "You lose";
     }  else if (playerChoice === "paper" && computerSelection === "scissors" ) {
        outcome = "you lose";
     }  else if (playerChoice === "paper" && computerSelection === "rock") {
        outcome = "You win";
     }  else if (playerChoice === "rock" && computerSelection === "paper" ) {
        outcome = "you lose";
     }  else if (playerChoice === "rock" && computerSelection === "scissors") {
        outcome = "You win";
     }  else {
        (playerChoice !== "rock" || "scissors" || "paper") 
        outcome = "Not a selection";
     }
        console.log(outcome)
    }
playround(playerChoice, computerSelection)