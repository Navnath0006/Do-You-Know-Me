
console.log("Welcome to my CLI Quiz.");
console.log("");
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What's your Name ? ");
console.log("Welcome " + userName+"\n");

console.log("Do YOU KNOW Navnath 🔊");
console.log("\n");
//function play
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
  }
  else {
    console.log("wrong")
  }
  console.log("score is : " + score);
  console.log("---------------");
}


//Array of Object

var questions = [
  {
    question: "Where do I Live ?",
    answer: "latur"
  },
  {
    question: "My favorite superhero would be ?",
    answer: "ironman"
  },
  {
    question: "Where do I work (Company) ?",
    answer: "wipro"
  }
];


//for loop for execution of array

for (var i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];
  //console.log(currentquestion);
  play(currentquestion.question, currentquestion.answer);
}

console.log("YAY!!! You SCORED :", score);

var highscore = [
  {
    name: "Navnath",
    score: 3
  },
  {
    name: "Abhay",
    score: 3
  }
];

for (var i = 0; i < highscore.length; i++) {
  var hs = highscore[i];

  if (score >= hs.score) {
    console.log("Yay!!! You Beaten ", hs.name);
    break;
  }
  else {
    console.log("Ohhh You lost");
    console.log(hs.name, " have highscore ", hs.score);
    break;
  }
}

