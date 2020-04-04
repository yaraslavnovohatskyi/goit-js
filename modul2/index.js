"use strict";
// const arr = [];
// console.log(arr);
// const students = ["Den","Nick","Dave","Helen"];
// console.log(students);
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);
// students[0] = "Roy";
// console.log(students[0]);
// console.log(students);
// students[4]="Mary";
// console.log(students[4]);
// console.log(students);
// console.log(students.length);
// students.length = 6;
// console.log(students.length);
// console.log(students);
// console.log(students[5]);
// students.length = 4;
// console.log(students);
// for (let i = 0; i < students.length; i+=1){
//     console.log("students ithem:", students[i]);
// }
// for(let i = 0; i < 5; i += 2){
//     students.push(`student-${i}`);
// }
// console.log("students list:",students);
// console.log(students.length);
// for(const student of students){
//     console.log(student);
// }
// const house = ["flat-1","flat-2","flat-3","flat-4","flat-5",];
// for(const aFlat of house){
//     console.log(aFlat);
// }
// const name = "Aleksandra is a teacher!";
// console.log(name);
// for(const character of name){
//     console.log(character);
// }
// const week = ["пн","вт","ср","чт","пт","сб","вс",];
// for(const aDay of week){
//     console.log(aDay);
// }
// let studentName;
// console.log("имя студента", studentName);

// const studentsNew = [
//   "Roy",
//   "Nick",
//   "Dave",
//   "Helen",
//   "Mary",
//   "Sarah",
//   "Charly",
//   "Bob"
// ];
// const studentsNotNew = [
//   "Roy",
//   "Nick",
//   "Dave",
//   "Dick",
//   "Mary",
//   "Olga",
//   "Charly",
//   "Bob"
// ];
// studentName = studentsNotNew[Math.floor(studentsNotNew.length * Math.random())];
// console.log("список студентов", studentsNew);
// let message;

// for (const student of studentsNew) {
//   if (student === studentName) {
//     message = "A student with this name already is in the database";
//     break;
//   }
//   message = "Welcome in our database of unique names!";
// }
// console.log(`${studentName}, ${message}`);
// const carsList = [
//   "BMW",
//   "Toyota",
//   "Mersedes",
//   "Porshe",
//   "Audi",
//   "Lexus",
//   "Honda",
//   "Mazda",
//   "Land Rover",
//   "Nissan",
//   "Subaru"
// ];
// const myCar = "Land Rover";
// let myCar = myCars[Math.floor(carlist.length*Math.random())];
// //console.log(car);
// let newMessage = "У меня не било еще такой машини!А жаль...";
// for(const car of carslist){
//   if(car === myCar){
//     message = "Оу, у меня била такая тачка!"
//     break;
//   }
// }
// let newMessage ="У меня не било еще такой машини!А жаль..."
// console.log(message);*/




//№2
// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);
// a = 10;
// console.log(a);
// console.log(b)
// let lastName = "Hrevtsova";
// let newLastName = lastName;
// console.log(lastName);
// console.log(newLastName);
// lastName = "Boreikina";
// console.log(lastName);
// console.log(newLastName);

// const units = ["alfa","beta","gamma"];
// const newUnits = units;
// console.log(units);
// console.log(newUnits);
// units[0] = "1";
// console.log(units);
// console.log(newUnits);
// units.push("delta");
// console.log(units);
// console.log(newUnits);
// newUnits.unshift("epsilon");
// console.log(units);
// console.log(units);

// units.pop("");
// console.log(units);
// console.log(newUnits);
// units.pop("gamma");
// console.log(units);
// newUnits.shift();
// console.log(newUnits);
// console.log(units);

// console.log(units.join(""));
// console.log(units.join(", "));
// console.log(units.join("-"));

// const msg = "Welcome to my world!"
// console.log(msg.split(" "));
// console.log(msg.split(""));

// console.log(units.indexOf("beta"));
// console.log(units.indexOf("b"));

// console.log(msg.includes("to"));
// console.log(msg.includes("WORLD"));
// console.log(msg.includes("world"));
// console.log(msg.includes("!"));
// console.log(msg.includes("t"));

// const redFrutits = ["apple","strawberry","chery","cranberry"];
// const fruit = prompt("Enter a fruit please");
// if (redFrutits.includes(fruit)) {
//   console.log("it's a red fruit");
// } else {
// console.log("it's not a red fruit");
// }

const numList = [0,1,2,3,4,5,6,7];
console.log(numList.slice(0,3));
console.log(numList.slice(1,2));
console.log(numList.slice(1,5));
console.log(numList.slice(1));
console.log(numList.slice(3));
console.log(numList.slice());
console.log(numList.slice(-1));
console.log(numList.slice(-2));
console.log(numList.slice(-3));

const newNumlist = numList.slice(-4);
console.log("newNumList",newNumlist);

console.log("numList",numList);
const spliceArr = numList.splice(0,2);
console.log("spliseArr",spliceArr);
console.log("numList",numList);
console.log("numList",numList.splice(0,0,1));
console.log("numList",numList);
console.log("numList",numList.splice(7,0,"8","9"));
console.log("numList",numList);
console.log("numList",numList.splice(3,0,9889));
console.log("numList",numList);
console.log("numList",numList.splice(3,1,"Js"));
console.log("numList",numList);
console.log("numList",numList.splice(3,3,"ALFA"));
console.log("numList",numList);
console.log("numList",numList.splice(3,3,"BETA","GAMMA"));
console.log("numList",numList);

const arr1 = ["Hello"];
const arr2 = ["World!"];
const lang = arr1.concat(arr2);
console.log(lang.join(", "));
const test1 = [4,12,6,16,13,8,13,4,15,11,14,10,15,12];
const test2 = ["17",13,4,15,10,12,16,21,13,8,14,18,15,20];
const test3 = ["20",12,16,22,13,8,13,4,15,10,14,18,15,22];
const allTests = test1.concat(test2).concat(test3);
console.log(allTests);

const add = function(a,b,c){
  return a + b + c;
};
const result = add(1,2,3);
console.log(result);
console.log(add(5,10,15));
console.log(add(299,14,121));
// // ПОРЯДОК ВЫПОЛНЕНИЯ КОДА
// // объявление
const fn1 = function() {
  console.log("1я функция начала выполняться"); // 2.1 - done
  // // вызов
  fn2(); // DONE
  console.log("Продолжение выполнения 1й функции после выхода из 2й функции"); // 2.3 - done
};

const fn2 = function() {
  console.log("Выполняется 2я функция"); // 2.2 - done
  //   fn1();
};

// // // вызов
console.log("Начато выполнение основного кода"); // 1 - done
fn1(); // 2 - done
console.log("Продолжение выполнения основного кода после выхода из 1й функции"); // 3 -done

// // параметры по умолчанию
// const count = function(a = 0, b = 10, c = 1) {
//   console.log(`countFrom = ${a}, countTo = ${b}, step = ${c}`);

//   for (let i = a; i <= b; i += c) {
//     console.log(i);
//   }
// };

// count(1, 5); // a = 1, b = 5, | c = 1 - подставится из дефолтного параметра
// count(2); // a = 2, | b = 10, c = 1 - подставятся из дефолтного параметра
// count(undefined, 5, 2); // a = 0, b = 5, c = 2
// count(); // a = 0, b = 10, c = 1

// const wantToBuy = function(meat = "chicken", eggs = "austich", milk = "cow") {
//   console.log(meat, eggs, milk);
// };

// wantToBuy("pork", "chicken", "coconut"); // значения по умолчанию не применились
// wantToBuy(); // отразятся все значения по умолчанию
// wantToBuy("pork"); // обновится только первій параметр
// wantToBuy(undefined, undefined, "coconut"); // заменит только третий параметр по умолчанию

// псевдомассив ARGUMENTS (спец локальная переменная)
// хранит все аргументы, как псевдомассив
// может содержать отличное от параметров число аргументов

// const sum = function() {
//   let total = 0;
//   //         элемент псевдомассива arguments
//   for (const argument of arguments) {
//     // total += argument;
//     total = total + argument;
//     // 0 = 0 + 1й аргумент (2) - 1я итерация
//     // 2 = 2 + 2й аргумент (4) - 2я итерация
//     // 6 = 6 + 3й аргумент (6) - 3я итерация
//     // 12 = 12 + 4й аргумент (8) - 3я итерация
//     console.log(`итерация с ${argument}`, total);
//   }
//   return total;
// };

// // console.log(sum(1, 2, 3)); // 6
// console.log(sum(2, 4, 6, 8)); // 20
// // console.log(sum(5, 10, 15, 20)); // 50

// преобразование псевдомассива
// (псевдомассивы не имеют большинства методов массивов, но...)

// // 1
// const fn = function() {
// В переменной args будет полноценный массив
//     const args = Array.from(arguments);
// };

// 2
// const fn = function(...args) {
//   // В переменной args будет полноценный массив
// };

// GUARD CLAUSE
// 1 - with if...else
// const takeCash = function(amount, balance) {
//   if (amount === 0) {
//     console.log("Enter the summ please");
//   } else if (amount > balance) {
//     console.log("No money, no honey");
//   } else {
//     console.log("Please take your cash");
//   }
// };

// takeCash(0, 300);
// takeCash(500, 300);
// takeCash(100, 300);

// 2 - with operator return;
// const takeCash1 = function(amount1, balance1) {
//   if (amount1 === 0) {
//     console.log("Enter the summ plese");
//     return;
//   }
//   if (amount1 > balance1) {
//     console.log("No money, no honey");
//     return;
//   }
//   console.log("Please take your cash");
// };
// takeCash1(0, 300);
// takeCash1(500, 300);
// takeCash1(100, 300);

// FUNCTION DECLARATION (without variable)

// такую функцию можно вызвать до ее объявления - надо быть осторожным с такой записью

// console.log(summNumbers(1, 2, 3));
// modalMsg("Hello World!");

// function summNumbers(a, b, c) {
//   return a + b + c;
// }

// function modalMsg(str) {
//   console.log(str);
// }

// GLOBAL SCOPE && LOCAL SCOPE == FUNCTION SCOPE || BLOCK SCOPE

// ====================== GLOBAL SCOPE ======================
// let b = 100;
// console.log(b);

// function relative() {
//   console.log(b);
//   let a = 34;
//   console.log(a);
//   // ============ LOCAL FUNCTION relative() SCOPE ===========
//   if (true) {
//     let a = 5;
//     console.log(a);
//     console.log(b);
//     // LOCAL BLOCK SCOPE
//   }
//   // ============ LOCAL FUNCTION relative() SCOPE ===========
//   function child() {
//     // let a = 10;
//     // console.log(a);
//     console.log(b);
//     // LOCAL FUNCTION child() SCOPE
//   }
//   console.log(b);
//   // ============ LOCAL FUNCTION relative() SCOPE ===========
// }
// // console.log(a);
// console.log(relative());

// ====================== GLOBAL SCOPE ======================

// const myName = "Sasha";
// // ==1==
// const fullName = function() {
//   const myLastName = "Hrevtsova";

//   return myName + " " + myLastName;
// };

// console.log(fullName()); // Sasha Hrevtsova
// console.log(myName); // Sasha
// // console.log(myLastName); // Uncaught ReferenceError:

// // ==2==
// const anotherFullName = function() {
//   const myLastName = "O'Hurn";

//   return myName + " " + myLastName;
// };

// console.log(anotherFullName()); // Sasha O'Hurn
// console.log(myName); // Sasha
// // console.log(myLastName); // Uncaught ReferenceError:

// HOISTING - поднятие/всплытие элемента в начало ОВ,где он был объявлен
// В FUNCTION DECLARATION (without variable)
// В ПЕРЕМЕННОЙ, объявленной через ключевое слово var

// ==1==
// console.log(value);
// value = 5;

// if (true) {
//   console.log(value); // 5
//   var value = 10;
//   console.log(value); // 10
// }

// value = 15;
// console.log(value); //15

// // ARROW FUNCTIONS
const myFunction = function(a, b, c) {
  return a + b + c;
};
console.log(myFunction(1, 2, 3)); // 6

// // // ||
const myArrowFunction = (a, b, c) => a + b + c;
// console.log(myArrowFunction(1, 2, 3)); // 6

// // ARROW FUNCTIONS & arguments --> ...args
// const myNewArrowFunction = (...args) => console.log(args);
// myNewArrowFunction(1, 2, 3); // [1, 2, 3]

