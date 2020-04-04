 "use strict";

//№1
const authors = [
  "William Shakespeare",
  "Guy de Maupassant",
  "Dante Alighieri",
  "Mikhail Bulgakov",
  "Albert Camus",
  "Erich Maria Remarque"
];

//№2
const scores = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
scores.shift();
scores.shift();
scores.pop();
scores.pop();
scores.pop();
console.log(scores); 

//№3
const results = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];

const removeFromStart = results.splice(0, 2);
const removeFromEnd = results.splice(-3);

console.log(removeFromStart); 
console.log(removeFromEnd); 
console.log(results); 


//№4
const partOfResults = results.slice(2, 7);
console.log("partOfResults", partOfResults); 


//№5
const doubleResults = results.slice();
console.log("doubleResults", doubleResults); 


//№6
let oddResults = [];
let evenResults = [];
for (let i = 0; i < doubleResults.length; i += 1) {
  console.log(doubleResults[i]);
  
  if (doubleResults[i] % 2 === 0) {
    evenResults.unshift(doubleResults[i]);
  } else {
    oddResults.unshift(doubleResults[i]);
  }
}
console.log("нечетные числа", oddResults); 
console.log("четные числа", evenResults); 


//№7
const AllResults = oddResults.concat(evenResults);
console.log("AllResults", AllResults); 

let includesOne = [];

for (let i = 0; i < AllResults.length; i += 1) {
  let item = AllResults[i] + "";
  console.log(item);
  if (item.includes(1)) {
    includesOne.push(+item);
  }
}
console.log("includesOne", includesOne); 
