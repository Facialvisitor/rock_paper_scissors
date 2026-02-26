// Create a new function named getComputerChoice.

// Write the code so that getComputerChoice will randomly,
// return one of the following string values: “rock”, “paper” or “scissors”,
// (manipulating Math.random method for this).

function getComputerChoice(){
  let rps = Math.floor(Math.random() * 3) 
   if (rps === 0 ) return "rock";

   else if ( rps === 1) return "paper";

   else return "scissors"
}

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will,
// return one of the valid choices depending on what the user inputs
// assuming the user always enters a valid choice(no reprompting)

function getHumanChoice(){
    let choose = prompt("Enter your choice: rock, paper, or scissors")
    return choose.toLowerCase().trim()
}


// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.



// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. 
// Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.



function playGame(){
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice){

        console.log(`You choose: ${humanChoice}`)
        console.log(`Computer chooses: ${computerChoice}`)
    
    if (humanChoice === computerChoice) {
        console.log('Its a tie!')
        return;
    }
        
    
   if ( (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") ){
    console.log(`${humanChoice} beats ${computerChoice}, You win!`);
    humanScore++;
   }

   else  {
    console.log(`${computerChoice} beats ${humanChoice}, You lose!`);
   computerScore++;
}
    
   console.log(`Score - You ${humanScore} : Computer ${computerScore}`)

}

    console.log("\n--- Round 1 ---")
    playRound(getHumanChoice(), getComputerChoice());

    console.log("\n--- Round 2 ---")
    playRound(getHumanChoice(), getComputerChoice());

    console.log("\n--- Round 3 ---")
    playRound(getHumanChoice(), getComputerChoice());

    console.log("\n--- Round 4 ---")
    playRound(getHumanChoice(), getComputerChoice());

    console.log("\n--- Round 5 ---")
    playRound(getHumanChoice(), getComputerChoice());

    console.log("\n=== GAME OVER ===");
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore){
        console.log("You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("You lost the game");
    }
    else {
        console.log("It was a tie");
    }
    
}
playGame();