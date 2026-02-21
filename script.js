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
console.log(getComputerChoice())

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will,
// return one of the valid choices depending on what the user inputs
// assuming the user always enters a valid choice(no reprompting)
function getHumanChoice(){
    let choose = prompt("Enter your choice: rock, paper, or scissors")
    return choose.toLowerCase().trim()
}
//.toLowerCase for capitalisation and case sensitivity,
// trim(), to accomodate empty space promted by the user
console.log(getHumanChoice())

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

let humanScore = 0;
let computerScore = 0;
