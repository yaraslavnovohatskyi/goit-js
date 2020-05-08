// "use strict";

// class Hero_1 {
//     constructor(name,xp){
//         this.name = name;
//         this.xp = xp;
//     }
// }
// const newHero_1 = new Hero_1("Sonia",1000);
// console.log(newHero_1);
// console.log(
//     "cравнениє прототипа єкзеипляра и обєкта функции-конструктора героя",
//     newHero_1.__proto__ === Hero_1.prototype
// );
// class Hero_2 {
//     constructor(name,xp){
//         this.name = name;
//         this.xp =xp;
//     }

// gainXp() {
//     console.log(`Hero ${this.name}, xp ${this.xp}`);
// }
// }
// const newHero_2 = new Hero_2("Sonia",1000);
// console.log(newHero_2);
// //  СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ - не идут в prototype
// // не работает в браузерах, кроме Хрома (от 74 версии)
// class Hero_3 {
//   //доступны только конструктору
//   static staticProp = "abc";
//   static staticMethod() {}
//   //доступны только конструктору
//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp() {
//     // этот метод запишется в свойство prototype
//     console.log(`Hero ${this.name}, xp ${this.xp}`);
//   } // то же самое, что и Hero.prototype.gainXp в ES5
// }
// console.log(Hero_3.staticProp); // abc
// console.log(Hero_3.staticMethod()); // undefined

// const newHero_3 = new Hero_3("Sonia", 1000);
// console.log(newHero_3);

// class Hero_4 {
//     constructor(name, xp) {
//       this._name = name;
//       this.xp = xp;
//     }
//     // changeName(name) { // обычный метод
//     //   this._name = name;
//     // }
//     // getName() {  // обычный метод
//     //   return console.log(this.name);
//     // }
    
//     // сеттер записывает
//     set name(newName) {
//       this._name = newName;
//     }
//     // геттер читает
//     get name() {
//       return console.log(this._name);
//     }
//   }
//   const newHero_4 = new Hero_4("Sonia", 1000);
//   console.log(newHero_4);
//   // newHero_4.changeName("Alf"); // обычный метод класса
//   // newHero_4.getName(); // обычный метод класса
//   newHero_4.name = "Drago"; // сеттер
//   newHero_4.name; // геттер
  