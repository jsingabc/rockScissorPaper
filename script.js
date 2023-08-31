//title top of page
var titleBox = document.createElement('div');
titleBox.setAttribute('id', 'titleBox');
document.body.appendChild(titleBox)
document.getElementById("titleBox").style.backgroundColor = "blue";
document.getElementById("titleBox").style.color = "white";

//h1 in the title box
var headOne = document.createElement('h1');
headOne.setAttribute('id', 'headOne');
headOne.textContent = "Rock Scissors Paper";
titleBox.appendChild(headOne)

//image container
var imageContainer = document.createElement('div');
imageContainer.setAttribute('id', 'imageContainer');
document.body.appendChild(imageContainer);

//image details
var imageDiv = document.createElement('img');
imageDiv.setAttribute('id', 'imageDiv');
imageDiv.setAttribute("src", "photo.jpg")
imageDiv.setAttribute("height", "400");
imageDiv.setAttribute("width", "700")
imageDiv.setAttribute("alt", "image");
imageContainer.appendChild(imageDiv);


//variable for game
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
// variable to get cpu choice
var computerSelection = getComputerChoice();

   // main function to get winner of function 
const playround = (computerSelection, playerChoice)  => {
     
     // run a ALERTs for each win or lose

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
    if (cpu === 3){
      alert("cpu wins, game over")
      return location.reload();
    } else if (player === 3) {
      alert("player wins, game over")
          return location.reload();
    }
    return `cpu score was ${cpu} and player score was ${player}`
{

   }
}

//update then score
function updateScore(){
   //run game score to check if 3 is reached
   resultDiv.textContent = gameScore()
   //add score count to the bottom of screen
   resultDiv.textContent = ` cpu: ${cpu} player: ${player} draw: ${draw} `
   document.body.appendChild(resultDiv)
   }

//***************************************************


//*****************BUTTONS***************************
//container for the buttons
var container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);
document.getElementById("container").style.backgroundColor = "blue";


//rock button
var rock = document.createElement('button');
rock.className = "rock";
rock.textContent = "Rock"
container.appendChild(rock);

//rock button listener
rock.addEventListener('click', (e) => {
      var playerChoice = "rock";
      var computerSelection = getComputerChoice();
      playround(computerSelection, playerChoice); 

      e.stopPropagation()
      console.log(e)
      updateScore()
});

//scissors button
var scissors = document.createElement('button');
scissors.className = "scissors";
scissors.textContent = "Scissors"
container.appendChild(scissors);

//scissors button listener
scissors.addEventListener('click', (e) => {
   var playerChoice = "scissors";
   var computerSelection = getComputerChoice();
   playround(computerSelection, playerChoice);   

   e.stopPropagation()
   console.log(e)
   updateScore()
});

//paper button
var paper = document.createElement('button');
paper.className = "paper";
paper.textContent = "Paper"
container.appendChild(paper);

//paper button listener
paper.addEventListener('click', (e) => {
   var playerChoice = "paper";
   var computerSelection = getComputerChoice();
   playround(computerSelection, playerChoice); 

   e.stopPropagation()
   console.log(e)
   updateScore()
});

//create a result div, give class, append to body
var resultDiv = document.createElement('div');
resultDiv.className = "resultDiv";
document.body.appendChild(resultDiv);


