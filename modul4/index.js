// "use strict"
// // const highOrderFunc = function (callbackFunk){
// //     const message = "Вот так работает колбєк";
// //     callbackFunk(message);
// // };
// // const showMessage = function (Ilia) {
// //     console.log(Ilia);
// // };
// // highOrderFunc(showMessage);

// // const printMessage = function (message) {
// //     console.log(message);
// // };

// // const higherOrderFunction = function (callback) {
// //     const string = "HOCs are awesome";
// //     callback(string);
// // };
// // higherOrderFunction(printMessage);
// // const showHeroes = function (heroes) {
// //     console.log(heroes);
// // };
// // const mainFunc = function (heroes) {
// // console.log(heroes);
// // };
// // const mainFunc = function (callback) {
// //     const heroes = ["Batman", "Robin"];
// //    for (const hero of heroes){
// //     callback(hero);
// //    }
// // };
// // mainFunc(showHeroes);
// // const repeatlog = function (n) {
// //     let result;
// //     for (let i = 0; i < n; i += 1) {
// //         result = i;
// //         console.log("каждая итерация", i);
// //     }
// // console.log("каждая итерация", result);
// // };
// //repeatLog(5);



// // const showResult = function(result){
// //     console.log (result);
// // };
// // const showResultWithComment = function (value) {
// //     console.log("коментарий к результату:", value);
// // };
// // const repeat = function (num, action) {
// //     for(let i = 0; i< num; i += 1){
// //         action(i);
// //     }
// // };
// // repeat(3, showResult);

// // repeat(3, showResultWithComment);

// // const myArr = [];
// // console.log("массив обьявлен", myArr);
// // repeat(5,(value) => {
// //     myArr.push(`element ${value + 1 }`);
// // })



// // const filterFunc = function (array, cbFunc) {
// //     const filteredArr = [];
// //     for(const el of array) {
// //         const ok = cbFunc(el);
// //     if(ok) {
// //     filteredArr.push(el);
// //     }
// // }
// // return filteredArr;
// // };
// // const fruits = [
// //     {name: "apples", quantity: 200, isFresh: true},
// //     {name: "grapes", quantity: 150, isFresh: false},
// //     {name: "bananas", quantity: 100, isFresh: true},
// // ];
// // const freshFruits = filterFunc(fruits,(fruit) => fruit.isFresh);
// // console.log("только свежие:", freshFruits);
// // const fruitsWithQuantity = filterFunc(fruits,(fruit) => fruit.quantity >= 120);
// // console.log("те , что больше 120:", fruitsWithQuantity);

// // const firstChildFunc = function () {
// //     console.log("Виполнилась 1я вложеная функция");
// // };

// // const secondChildFunc = function () {
// //     console.log("Виполнилась 2я вложеная функция");
// // };

// // const parentFunc = function () {
// //     console.log("Начала выполняться родительская функция");
// //     firstChildFunc();
// //     secondChildFunc();
// //     console.log("Закончила выполняться родительская функция")
// // };
// // parentFunc();

// // const x = 10;
// // const y = 20;
// // const summ = function (z) {
// //     const x = 100;
// //     console.log("значение x внутри ф-и", x);
// //     return console.log(x + y + z);
// // };
// // console.log("значение x глобально", x);
// // summ(30);

// // const createCounter = function(){
// //     let privateValue = 0;
// //     const increment = function(){
// //         privateValue += 1;
// //         console.log(privateValue);
// //     };
// //     return{
// //         increment,
// //     };
// // };
// // const counterA = createCounter();
// // counterA.increment();
// // counterA.increment();
// // counterA.increment();
// // const counterB = createCounter();
// // counterB.increment();
// // counterB.increment();
// // counterB.increment();

// // const makeDish = function(shefName, dish) {
// //     console.log(`${shefName} is cooking ${dish}`);
// // };
// // makeDish("Ilia", "apple pie");
// // makeDish("Ilia", "apple pie");
// // makeDish("Ilia", "apple pie");
// // const makeShef = function (name) {
// // return funchun makeDish(dish){
// // console.log(`${name} is cooling ${dish}`);
// //     };
// // };
// // const kirill = makeShef("Kiril");
// // kirill("cheesecake");

// // const dima = makeShef("Dima");
// // dima("pancakes");

// const petya = {
//     name: "Petya",
//     showThis() {
//         console.log(this);
//     },
//     showName(){
//         console.log(this.name);
//     },
// };
// petya.showThis();
// petya.showName();
// function showThis() {
//     console.log("this in showThis: ", this);
// }
// showThis();
// const user = { name: "Mango" };

// user.showContext = showThis;

// user.showContext();

// const hotel = {
//     name: "Restort Hotel",
//     showThis() {
//         console.log(this);
//     },
// };
// const fn = function(callback) {

//     callback();
// };
// fn(hotel.showThis);
// const showThis1 = () => {
//     console.log("this in showThis: ", this);
// };
// showThis();
//  const user1 = {name: "Mango"};
//  user1.showContext = showThis1;
//  user1.showContext();

//  const hotel2 = {
//      name:"Resort hotel",
//      showThis() {
//          const fn = () => {
//              console.log("this in showThis:", this);
//          };
//          fn();
//          console.log("this in showThis: ", this );
//      },
//  };
//  hotel2.showThis();

//  const hotel3 = {
//      name: "Resort hotel",
//      showThis: function showThis() {
//          const context = this;
//          const fn = function fn() {
//              console.log("this in fn:", context);
//          };
//          fn();
//          console.log("this is showThis: ", this);
//      },
//  };
//  hotel3.showThis();
//  const greet = function () {
//      return `Wellcome to ${this.name} hotel!`;
//  };
//  const hotel4 = { name: "Resort Hotel"};
//  console.log(greet.call(hotel4));
//  console.log(greet.apply(hotel4));
//  const greet1 = function (guest,stars) {
// return`${guest}, welcome to ${stars}-stars ${this.name}!`;
//  };
//  const hotel5 = {name: "Resort Hotel"};
//  const motel = {name: "Sunlight Motel"};
//  console.log(greet1.call(hotel5, "Mango", 4));
//  const greet2 = function (guest,stars) {
//      return`${guest}, welcome to ${stars}-stars ${this.name}!`;
//  };
//  const hotel6 = { name: "Resort Hotel"};
//  const motel1 = {name: "Sunlight Motel"};
//  console.log(greet2.apply(hotel6,["Mfngo", 5]));
//  console.log(greet2.apply(hotel2,["Poly", 4]));
//  const greet3 = function (guest) {
//     return`${guest}, welcome to  ${this.name}!`;
// };
// const hotel7 = {name: "Resort Hotel"};
// const hotelGreeter = greet3.bind(hotel7,"Mango");
// console.log(hotelGreeter());
 
// const hotel8 = {
//     name: "Rixos", showThis() {
//         console.log(this);
//     },
// };
// const fn1 = function (callback) {
//     callback();
// };
// fn1(hotel8.showThis.bind(hotel8));
     
 