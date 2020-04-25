"use strict";

//№1
// const toPassTests = function() {
//   console.log(
//     "Прежде чем, как выполнить это задание у тебя должно быть сдано пять тестов!"
//   );
// };
// toPassTests();


//№2
// let age;

// const checkAge = function(age) {
//   age = +prompt("Enter your age please");
//   if (age >= 18) {
//     return alert("Here you are! You are got access!");
//   } else {
//     return alert("Sorry, you can`t to get access");
//   }
// };

//  checkAge();


 //№3
// // == function EXPRESSION ==
// const toGetCost = function(message, pricePerWord) {
//   let words = message.split(" ");
//   let wordsCount = words.length;
//     // return (pricePerWord = wordsCount * Number(pricePerWord));
//     // return (pricePerWord = wordsCount * pricePerWord);
//   return (pricePerWord *= wordsCount);
// };

// // == arrow function ==
// const toGetCost = (message, pricePerWord) =>
//   (pricePerWord *= message.split(" ").length);


// console.log(toGetCost("To be, or not to be, that is the question", 10)); // 100

// console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); // 160

// console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); // 280

// console.log(toGetCost("Or to take arms against a sea of troubles", 20)); // 180

//№4

// const logItems = function(array) {
//   // твой код
//   for (let i = 0; i < array.length; i += 1) {
//     // console.log(array[i]);
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// };

// logItems([
//   "Wolverine",
//   "Thor",
//   "Iron Man",
//   "Deadpool",
//   "Nick Fury",
//   "Colossus"
// ]);

// logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);


//№5 

const checkTheWord = function(message) {
  let msg = message.toLowerCase();
  if (msg.includes("great") || msg.includes("know")) {
    return true;
  }
  return false;
};
 // ARROW FUNCTION
// const checkTheWord = message =>
//   message.toLowerCase().includes("great") ||
//   message.toLowerCase().includes("know")
//     ? true
//     : false;

console.log(checkTheWord("Than fly to others that we know not of?")); 
console.log(checkTheWord("Thus conscience does make cowards of us all")); 
console.log(checkTheWord("And enterprises of great pitch and moment")); 
console.log(checkTheWord("And lose the name of action")); 

// №6 

const countTestsScore = function() {
  let totalSum = 0;
  for (const argument of arguments) {
    totalSum += argument;
     console.log("тот", totalSum);
  }
  return console.log("тот", totalSum);
};

countTestsScore(12, 25, 27); 
countTestsScore(12, 25, 27, 25); 
countTestsScore(12, 25, 27, 25, 28);

// №7 

 const myNewArrowFunction = (...args) => console.log(args);

myNewArrowFunction(1, 2, 3); 
myNewArrowFunction(100, 200, 300, 400, 500); 
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"); 