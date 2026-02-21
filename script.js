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