let player = 0
let cpu = 0
let draw = 0


// this function creates a loop 5 times
/*function game () {
    for (let i = 0; i < 5; i++) {
        playround(); 
    }
}
*/

// this function gets me a random choice from CPU
function getComputerChoice() {
    let cpuOptions = ["rock", "scissors", "paper"]
    var cpuChoice = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
    return cpuChoice;
}

var computerSelection = getComputerChoice();

   // main function to get winner of function 
const playround = (computerSelection, playerChoice)  => {
     
     //gets variable for computer choice
     //var computerSelection = getComputerChoice();
      
     // if else loop to get results var
     // run a ALERT for each win or lose

      console.log(playerChoice);
      console.log(computerSelection);

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

//******************SCORES*****************

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

function updateScore(){
   resultDiv.textContent = gameScore()
   resultDiv.textContent = ` cpu: ${cpu} player: ${player} draw: ${draw} `
   document.body.appendChild(resultDiv)

   if (player === 3) {
      return "player wins game over";
   }
   else if (cpu === 3) {
      return " cpu wins game over";
     }
   }


// call the game
//game()

// print the scores
//console.log("cpu: ",cpu, "player: ", player, "draw: ", draw)

// print the winner
//console.log(gameScore())
//***********************************


//*****************BUTTONS***************************
//container for the buttons
var container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);

//rock button
var rock = document.createElement('button');
rock.className = "rock";
rock.textContent = "Rock"
container.appendChild(rock);

rock.addEventListener('click', (e) => {
      var playerChoice = "rock";
      playround(computerSelection, playerChoice); 
      
      e.stopPropagation()
      console.log(e)
      console.log(gameScore());
      updateScore()

});

//scissors button
var scissors = document.createElement('button');
scissors.className = "scissors";
scissors.textContent = "Scissors"
container.appendChild(scissors);

scissors.addEventListener('click', (e) => {
   var playerChoice = "scissors";
   playround(computerSelection, playerChoice); 
   gameScore();
   document.body.appendChild = gameScore()
   

   e.stopPropagation()
   console.log(e)
   console.log(gameScore());
   updateScore()
});

//paper button
var paper = document.createElement('button');
paper.className = "paper";
paper.textContent = "Paper"
container.appendChild(paper);

paper.addEventListener('click', (e) => {
   var playerChoice = "paper";
   playround(computerSelection, playerChoice); 
   gameScore();

   e.stopPropagation()
   console.log(e)
   console.log(gameScore());
   updateScore()
});


var resultDiv = document.createElement('div');
resultDiv.className = "resultDiv";
//resultDiv.textContent = gameScore();
//resultDiv.textContent = `cpu: ${cpu} player: ${player} draw: ${draw} `
document.body.appendChild(resultDiv);

