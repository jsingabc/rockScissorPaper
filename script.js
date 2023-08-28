let player = 0
let cpu = 0
let draw = 0

// this function creates a loop 5 times
function game () {
    for (let i = 0; i < 5; i++) {
        playround(); 
    }
}

// this function gets me a random choice from CPU
function getComputerChoice() {
    let cpuOptions = ["rock", "scissors", "paper"]
    var cpuChoice = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
    return cpuChoice;
}

// main function to get winner of function 
   const playround = ()  => {
     // gets a better variable for computer choice
     var computerSelection = getComputerChoice();
     // get me player choice
     var playerChoice = prompt("Choose rock, scissors or paper").toLowerCase()
     // if else loop to get results var
     // run a ALERT for each win or lose
    if (playerChoice === computerSelection) {
        alert("draw")
        result = draw++
     }  else if (playerChoice === "scissors" && computerSelection === "paper" ) {
        alert("player wins")
        result = player++
     }  else if (playerChoice === "scissors" && computerSelection === "rock") {
        alert("cpu wins")
        result = cpu++
     }  else if (playerChoice === "paper" && computerSelection === "scissors" ) {
        alert("cpu wins")
        result =  cpu++
     }  else if (playerChoice === "paper" && computerSelection === "rock") {
        alert("player wins")
        result =  player++
     }  else if (playerChoice === "rock" && computerSelection === "paper" ) {
        alert("cpu wins")
        result =  cpu++
     }  else if (playerChoice === "rock" && computerSelection === "scissors") {
        alert("player wins")
        result =  player++
     }  else {
        (playerChoice !== "rock" || "scissors" || "paper") 
        result =  "Not a selection";
     }
     // return the winner to function
     return result;
    }

// function to track who won and game score
function gameScore(){
    if (cpu > player){
        return "cpu wins"
    } else if (cpu < player) {
        return "player wins"
    }
    return `cpu score was ${cpu} and player score was ${player}`
{

}}

// call the game
game()
// print the scores
console.log("cpu: ",cpu, "player: ", player, "draw: ", draw)
// print the winner
console.log(gameScore())
