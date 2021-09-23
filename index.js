const readlineSync = require("readline-sync");
const chalk= require('chalk');

console.log(chalk.black.bold.bgYellow("  Let's find out how well do you know me!! 🧐  \n"));

const userName = readlineSync.question(chalk.red.bold(" 😄 Please enter your name : "));

console.log(chalk.red(
  "\nHi " +
    userName +
    ". Get ready for Level 1. 🤩\nEnter a/ b/ c for each question to answer. For each correct answer you will get 2 points."
));

console.log('\n----------------------------------------------------------\n');

let score = 0;

const question1 = {
  que: "What is my Real Name?\na.Dnyaneshwar\nb.Bruce Wayne\nc.John Wick",
  ans: "a",
  description: "Yeah , I wish. But Correct answer is a.Dnyaneshwar",
};

const question2 = {
  que: "Where do i live?\na.Aurangabad \nb.Mumbai \nc.Pune ",
  ans: "c",
  description: "I live in Pune.",
};

const question3 = {
  que: "When is my birthday?\na.10Th December \nb.9Th December \nc.8Th December",
  ans: "c",
  description: "See you forgot it again. 8Th December.",
};

const question4 = {
  que: "Who is my favourite Superhero?\na.Iron Man \nb.Batman \nc.Superman",
  ans: "b",
  description: "I love Batman!!.",
};

const question5 = {
  que: "Which is my favourite color?\na.Black \nb.Pista \nc.Blue",
  ans: "a",
  description: "I love Black Black Black 🙃",
};

const question6 = {
  que: "Which is my favourite IPL team?\na.CSK \nb.MIa \nc.KKR",
  ans: "c",
  description: "It's c.KKR, KORBO LORBO JEETBO 👑",
};

const question7 = {
  que: "Which movie is my favourite one?\na.The Godfather \nb.The Dark Knight \nc.The Shawshank Redemption",
  ans: "b",
  description: "This one was easy. Correct Answer is b.The Dark Knight",
};

const question8 = {
  que: "Which is my favourite Sitcom?\na.Friends \nb.The Big Bang Theory \nc.Seinfeld",
  ans: "c",
  description: "Sorry Friends Fans. But It's Seinfeld",
};

const question9 = {
  que: "Which is my favourite biryani spot in Pune?\na.Aroma's Hyderabad House \nb.SP's Biryani \nc.P K Biryani",
  ans: "a",
  description: "Correct Ans is a.Aroma's Hyderabad House",
};

const question10 = {
  que: "Which is my favourite Number?\na.7 \nb.9 \nc.42",
  ans: "b",
  description: "It's 9",
};

//saving all questions in array
const questionSet = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];

//posting quiz and validating answers

for(let i=0; i<questionSet.length; i++){
if(i===3){
  if(score>=4){
  console.log("Congratulations! You have entered Level 2 🤩");
  }
  else{
    console.log("Aww! you failed level 1");
    break;
  }
}
if(i===6){
  if(score>=8){
  console.log("Congratulations! You have entered Final Level 🤩. Get ready for the toughest questions.");
  }
  else{
    console.log("Aww! you failed level 2");
    break;
  }
}
checkScore(i+1,questionSet[i].que, questionSet[i].ans, questionSet[i].description);
}

//Printing final score
console.log("Yay! Your Final Score is "+score);

//function to validate answers and update score
function checkScore(queNo, checkQue, checkAns, description){
  
  const userAns= readlineSync.keyIn(chalk.cyanBright("\n"+queNo+") "+checkQue+ "\n"),{limit: '$<a-c>'});
  if(userAns===checkAns){
    console.log(chalk.green("You are absolutely right. You get 2 points 🎉"));
    score+=2;
  }
  else{
    console.log(chalk.redBright(`You are wrong.\n${description}`));
  }
  console.log(chalk.yellowBright("Your current score is " +score));
  console.log('\n----------------------------------------------------------\n');
}
