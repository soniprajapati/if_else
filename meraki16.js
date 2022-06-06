let readlineSync = require("readline-sync");
 
var Moves = ['rock', 'paper', 'scissors'];
var randommove = Moves[Math.floor(Math.random() * Moves.length)];
//this is we are using random()
 
var Name= readlineSync.question("What is your name: ")
console.log("hi "+ Name )
console.log("choose any move in rock paper scissors")
var playerMove = readlineSync.question("Which move you want to do? ");
 
if (playerMove == randommove){
   console.log("Match Draw");
}
else if(playerMove =="rock" && randommove == "paper"){
   console.log("computer won the match");
}
else if(playerMove=="rock" && randommove == "scissors"){
   console.log(Name+" Won the match");
}
else if(playerMove=="scissors" && randommove == "rock"){
   console.log("computer won the match");
}
else if(playerMove=="scissors" && randommove == "paper"){
   console.log(Name+" Won the match");
}
else if(playerMove=="paper" && randommove == "rock"){
   console.log(Name+" Won the match");
}
else if(playerMove=="paper" && randommove == "scissors"){
   console.log("computer won the match");
}