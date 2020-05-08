"use strict";

// ======================= 1 ==========================

class User {
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}

const mango1 = new User("Mango", 2, 20);
mango1.getInfo(); 

const poly1 = new User("Poly", 3, 17);
poly1.getInfo(); 

