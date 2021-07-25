"use strict";
let readlineSync = require("readline-sync");

console.log("  Let's find out how well do you know me!! 🧐  \n");

let userName = readlineSync.question(" 😄 Please enter your name : ");

console.log(
  "\nHi " +
    userName +
    ". Get ready for Level 1. 🤩\nEnter a/ b/ c for each question to answer. For each correct answer you will get 2 points."
);

let score = 0;

let question1 = {
  que: "What is my Real Name?\na.Dnyaneshwar\nb.Bruce Wayne\nc.John Wick",
  ans: "a",
  description: "Yeah , I wish. But Correct answer is a.Dnyaneshwar",
};

let question2 = {
  que: "Where do i live?\na.Aurangabad \nb.Mumbai \nc.Pune ",
  ans: "c",
  description: "I live in Pune.",
};

let question3 = {
  que: "What is my birthdate?\na.10Th December \nb.9Th December \nc.8Th December",
  ans: "c",
  description: "See you forgot it again. 8Th December.",
};

let question4 = {
  que: "Who is my favourite Superhero?\na.Iron Man \nb.Batman \nc.Superman",
  ans: "b",
  description: "I love Batman!!.",
};

let question5 = {
  que: "Which is my favourite color?\na.Black \nb.Pista \nc.Blue",
  ans: "a",
  description: "I love Black Black Black 🙃",
};

let question6 = {
  que: "Which is my favourite IPL team?\na.CSK \nb.MIa \nc.KKR",
  ans: "c",
  description: "It's c.KKR, KORBO LORBO JEETBO 👑",
};

let question7 = {
  que: "Which movie is my favourite one?a.The Godfather \nb.The Dark Knight \nc.The Shawshank Redemption",
  ans: "b",
  description: "This one was easy. Correct Answer is b.The Dark Knight",
};

let question8 = {
  que: "Which is my favourite Sitcom?\na.Friends \nb.The Big Bang Theory \nc.Seinfeld",
  ans: "c",
  description: "Sorry Friends Fans. But It's Seinfeld",
};

let question9 = {
  que: "Which is my favourite biryani spot in Pune?\na.Aroma's Hyderabad House \nb.SP's Biryani \nc.P K Biryani",
  ans: "a",
  description: "Correct Ans is a.Aroma's Hyderabad House",
};

let question10 = {
  que: "Which is my favourite Number?\na.7 \nb.9 \nc.42",
  ans: "b",
  description: "It's 9",
};

//saving all questions in array
let questionSet1 = [
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
