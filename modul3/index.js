// "use strict";
// // const object = {
// //     key: value,
// //     key: value
// // };
// // const frontend = {
// //     language_1: "HTNL",
// //     language_2: "CSS",
// //     language_3: "Js",
// // };
// // console.log("frontend",frontend);
// // const student = {
// //     name: "Aleksandra",
// //     lastName: "Hrevtsova",
// //     age: 31,
// //     sex: "female",
// //     course: frontend,
// //     passExam: true
// // };
// // console.log("student",student);
// // console.log(student.name);
// // console.log(student.lastName);
// // console.log(student.age);
// // console.log(student.sex);
// // console.log(student.course);
// // console.log(student.passExam);
// // console.log(frontend["language_1"]);
// // console.log(frontend["language_2"]);
// // console.log(frontend["language_3"]);
// // student.lastName = "O'Hurn";
// // console.log("student", student);
// // frontend["language_3"] = "Jvascript";
// // console.log(frontend["language_3"]);
// // console.log("frontend", frontend);
// // student.address = "Hrestova Stalihradu, 6";
// // console.log("student", student);
// // student["phone number"] = "+38 050 071 53 30";
// // console.log(student["phone number"]);
// // console.log("student", student);
// // delete frontend.language_1;
// // console.log(frontend.language_1);
// // console.log("frontend", frontend);
// // delete frontend.language_1;
// // console.log(frontend.language_2);
// // console.log("frontend", frontend);
// // const myTeacher = "Shasha Hrevtsova";
// // const course = "fronteend";
// // const group_17 = {
// //     myTeacher,
// //     course,
// //     count: 10
// // };
// // console.log(group_17);
// // const key = "test";
// // const getKey = function() {
// //     return "score";
// // };
// // const testResult = {
// //     [key]: "2",
// //     [getKey()]: 22
// // };
// // console.log(testResult);


// // const myProducts = {
// //     milk: 0.5,
// //     eggs: 10,
// //     apples: 5,
// //     toCheck() {
// //         console.log("Проверь наличие");
// //     },
// //     oranges: 10
// // };
// // myProducts.toCheck();
// // console.log("myProducts", myProducts);
// // myProducts.toBuySweets = function(){
// //     console.log("Ну купи же уже что-то сладигькоке!");
// // };myProducts.toBuySweets();
// // console.log("myProducts with new method", myProducts);
// // delete myProducts.toBuySweets;
// // console.log("myProducts without new method", myProducts);
// // const product = {
// //     type:"wellness & spa",
// //     category: "hair care",
// //     productName: "shampoo",
// //     price: 76.94,
// //     showProductName() {
// //         console.log(this.productName);
// //     },
// //     changePrice(value) {
// //         this.price = value;
// //     }
// // };
// // product.showProductName();
// // product.changePrice(89.5);
// // console.log(product.price);

// // const myCars = {
// //     subaru: "Forester",
// //     mazda: "626",
// //     volkswagen: "Golf",
// //     landRover: "Range Rover"
// // };
// // for (const key in myCars) {
// //     console.log("key:", key);
// // }
// // for(const key in myCars) {
// //     console.log("value:", myCars[key]);
// // }
// // const hero = {
// //     name: "Black Cat",
// //     power: 100,
// //     lifes: 9,
// //     speed: 45, 
// // };
// // console.log("my hero", hero);
// // const keysOfHero = Object.keys(hero);
// // console.log(keysOfHero);
// // for(const key of keysOfHero) {
// //     console.log("key: ", key);
// //     console.log("value: ", hero[key])
// // }
// // const entriesOfHero = Object.entries(hero);
// // console.log("entries Of Hero", entriesOfHero);
// // for(const entry of entriesOfHero) {
// //     const key = entry[0];
// //     const value = entry[1];
// //     console.log(`${key}: ${value}`);
// // }
// // const valuesOfHero = Object.entries(hero);
// // console.log("values Of Hero", entriesOfHero);
// // const testScore = {
// //     test_1: 16,
// //     test_2: 21,
// //     test_3: 22,
// //     test_4: 23
// // };
// // const arrValues = Object.values(testsScore);
// // console.log(arrValues);
// // let totalScore = 0;
// // for(const value of arrValues) {
// //     totalScore += value;
// //     console.log("totalScore на каждой итерации", totalScore);
// // }
// // console.log(totalScore);
// // let age = 0;
// // const life = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// // // life.push(15);
// // for (const year of life){
// //     // age = age + year ;
// //     age += 1;
// //     console.log("возраст Дант сечас", age);
// // }
// // console.log("возраст Дант сечас", age);
// // console.log(life);
// const test1 = [18,14,12,21,17,29];
// const minTest1 = Math.min(test1);
// console.log(minTest1);
// const test2 = [18,14,12,21,17,29];
// const minTest2 = Math.min(...test2);
// console.log(minTest2);
// const marvelHeroes = [
//     "Captain Marvel",
//     "Thanos",
//     "Black Panter",
//     "Goose the Cat",
//     "Black Widow",
//     "Captain America"
//   ];
// // const copyOfMarvelHeroes = [...marvelHeroes];
// console.log("marvelHeroes", marvelHeroes);
// //console.log("copyOfMarvelHeroes", copyOfMarvelHeroes);
// // console.log(
// //     "marvelHeroes === copyOfMarvelHeroes ",
// //     marvelHeroes  === copyOfMarvelHeroes 
// // );
// const copyOfMarvelHeroes = [...marvelHeroes, "Hulk", "Spider-Man"];
// console.log("copyOfMarvelHeroes ", copyOfMarvelHeroes )
// const firstNum = [1,2,3];
// const secondNum = [4,5,6];
// //const allNums = [...firstNum, ...secondNum];
// const allNums = [...secondNum, ...firstNum];
// console.log(allNums);
// const notAllNums = [...firstNum.slice(0,1), ...secondNum.slice(-1)];
// console.log("notAllNums", notAllNums);
// const updatedNums = [
//     ...firstNum.slice(0,2),
//     "Js is the best",
//     ...secondNum.slice(-2)
// ];
// console.log("updatedNums",updatedNums);
// const mod_1 = { test:2, hw: 3, addit: 2 };
// const mod_2 = { test: 4, hw: 6 };
// //const mod_3 = Object.assign({}, mod_1, mod_2);
// //console.log("mod_3", mod_3);
// const mod_3 = { ...mod_1, ...mod_2 };
// console.log("mod_3", mod_3);
// const a = { x: 1, y: 2 };
// const b = { x: 0, y: 3 };
// const c = { ...a, ...b, x: 5, j: 10, z: 15 };
// console.log(c);

// const hotel = {
//   hotelName: "Resort Hotel",
//   stars: 5,
//   capacity: 100
// };
// console.log(hotel);
// const {
//   hotelName, stars, status = 5 } = hotel;
//   console.log(hotel);
//   console.log(`hotelName - ${hotelName}, stars - ${stars}, status - ${status}`);
//   let myProducts = { fruits: "apples", vegetables: "tomatoes", meet: "ghghgh"};
//   console.log(myProducts.fruits);
//   let {fruits,vegetables} = myProducts;
//   console.log(fruits);
//   console.log(vegetables);

//   const hotel14 = {
//     name4: 5,
//     capacity4: 100,
//     fgfgfg: ""
//   };
//   const{ name4, ...rest } = hotel14;
//   console.log("hotel14 name4", name4); 
//   console.log("hotel14 rest", rest);
//   console.log(hotel14);

//   const rgb = [100, 205, 100];

// const [red, green, blue] = rgb;

// // console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// // // // // // Red: 100, Green: 205, Blue: 100

// // const // При деструктуризации массивов переменной может быть присвоено значение
// //   // отдельно от ее объявления.
// //   // const rgb1 = [200, 255, 100];
// //   // let = red1, green1, blue1;

// //   [red1, green1, blue1] = rgb1;

// // console.log(`Red: ${red1}, Green: ${green1}, Blue: ${blue1}`);
// // // Red: 200, Green: 255, Blue: 100

// // // Если переменных больше чем элементов массива, им будет присвоено undefined,
// // // поэтому можно указывать значения по умолчанию.
// const rgb2 = [200, 100, 255];

// const [red2, green2, blue2, alfa2 = 5] = rgb2;
// console.log(alfa2);
// // console.log(`Red: ${red2}, Green: ${green2}, Blue: ${blue2}, Alfa: ${alfa2}`);
// // // Red: 200, Green: 100, Blue: 255, Alfa: 0.3

// // // можно распаковать и присвоить оставшуюся часть элементов массива переменной
// const rgb3 = [200, 255, 100];

// const [red3, ...colors] = rgb3;
// console.log(red3); // 200 - переменная
// console.log(colors); // [255, 100] - скопирован по ссылке

// // и будет принимать все изменения исходного массива
// console.log(`Red: ${red3}, Colors: ${colors}`);
// // // Red: 200, Colors: [255, 100]

// // // Элементы можно пропускать. Допустим из массива rgb необходимо взять только последнее значение.
// // // Используется это крайне редко.
// const rgb4 = [200, 100, 255];

// const [, , blue4] = rgb4;

// console.log(`Blue: ${blue4}`); // Blue: 255
