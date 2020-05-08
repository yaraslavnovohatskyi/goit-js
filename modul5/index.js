// "use strict"
// // const test1 = 16;
// // const test2 = 22;
// // const test3 = 23;
// // const score = (test1,test2,test3) => {
// //     return console.log(test1 + test2 + test3);
// // };
// // score(test1, test2, test3);
// // const totalSore = {
// //      test1 = 16,
// //      test2 = 22,
// //     test3 = 23, 
// //     toGetSum() {
// //         return this.test1 + this.test2 + this.test3;  
// //     },
// // };
// // console.log(totalScore.toGetSum());
// // const Project = function(title,theme,clients) {
// //     this.title = title;
// //     this.theme= theme;
// //     this.clients = clients;
// // };
// const Project = function(title,theme,clients) {
//     this.title = title;
//     this.theme = theme;
//     this.clients = clients;
// };
// const Human = function(arms,legs,head,body) {
//     this.arms = arms;
//     this.legs = legs;
//     this.head = head;
//     this.body = body;
// };
// const Ilia = new Human(2,2,1,1);
// console.log(Ilia);
// const Dima = new Human(2,2,1);
// console.log(Dima);
// const project = new Project("habit's manager","human","all types");
// console.log(project);
// const project_fe = new Project("App","to do list", "all types");
// console.log(project_fe);
// // Добовление методов
// const Movie = function (name, rate, category) {
//     this.name = name;
//     this.rate = rate;
//     this.category = category;
//     this.countUser = 0;
  
//     this.greet = function (userName) {
//       console.log(`Hello ${userName}, welcome to ${this.name}`);
//     };
  
//     this.addUser = function (newUser) {
//       this.countUser += newUser;
//       console.log(this.countUser);
//     };
  
//     this.removeUser = function (newUser) {
//       this.countUser -= newUser;
//       console.log(this.countUser);
//     };
//   };
  
//   const movi = new Movie("Hero", 9, 100);
//   console.log(movi);
  
//  const House = function (newColors,countFloors) {
//      this.color = newColors;
//      this.floors = countFloors;
//      this.window = 20;
//      this.doors = 2;
//      this.walls = 2.8;
//  };
//  const myHouse = new House("red",6);
//  console.log(myHouse);
//  myHouse.floors = 6;
//  console.log(myHouse);

//  const salesManager_1 = {
//     name: "Olena",
//     sales: 5,
//     sell(product) {
//       this.sales += 1;
//       return `Manager ${this.name} sold ${product}`;
//     },
//   };
//   console.log(salesManager_1.sales);
// console.log(salesManager_1.sell("Club Card"));
// console.log(salesManager_1.sell("Training Card"));
// console.log(salesManager_1.sales); 

// const salesManager_2 = {
//   name: "Kostya",
//   sales: 10,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}`;
//   },
// };

// console.log(salesManager_2.sales);
// console.log(salesManager_2.sell("Club Card"));
// console.log(salesManager_2.sell("Training Card"));
// console.log(salesManager_2.sales); 

// const teacher = { lang_1: "HTML"};
// const child = {lang_2: "CSS"};
// child._photo_ = teacher;
// console.log(child.log_1);
// console.log(child.lang_2)
// const child2 = {lang_1: "Js", lang_2: "CSS"}
// child._photo_ = teacher;
// console.log(child.log_1);
// console.log(child.lang_2)

// const animal = { eats: true }; 
// const cat = Object.create(animal); 
// console.log(cat);
// cat.barks = true;
// cat.eats = false;
// console.log(cat);
// console.log(cat.barks);
// console.log(cat.eats);
// const parentProd = { color: "red", count: 7 };
// const childProd = Object.create(parentProd);
// childProd.price = 30;

// for (const key in childProd) {
//   console.log("__proto__ key: ", key);
// }
// for (const key in childProd) {
//     if (!childProd.hasOwnProperty(key)) continue; 
//     console.log("own property: ", key);
//   }
  
//   const childProdKeys = Object.keys(childProd); 
//   console.log(childProdKeys);
  
