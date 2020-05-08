"use strict";
// это импорт данных из файла users.js
//(файл users.js нужно создать и скопировать в него массив, который указан в конце, после заданий)

import * as allUsers from "/users.js";
let users = allUsers.default;

console.log("массив объектов пользователей", users);



// ================ 1 ====================

const getUserNames = (users) => {
 
  return users.map((user) => user.name);
};

console.log("task 1: ", getUserNames(users));
[
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
];

// ================ 2 ===================

const getUsersWithEyeColor = (users, color) => {
  // твой код
  return users.filter((user) => user.eyeColor === color);
};

console.log("task 2: ", getUsersWithEyeColor(users, "blue")); 

// // ================ 3 ====================

const getUsersWithGender = (users, gender) => {
 
  users = users.filter((user) => user.gender === gender);
  console.log(users);
  return users.map((user) => user.name);
};

console.log("task 3: ", getUsersWithGender(users, "male")); 

// // ================ 4 ====================

const getInactiveUsers = (users) => {
 
  return users.filter((user) => !user.isActive);
};

console.log("task 4: ", getInactiveUsers(users)); 

// // ================ 5 ====================

const getUserWithEmail = (users, email) => {
  
  return users.find((user) => user.email === email);
};

console.log("task 5: ", getUserWithEmail(users, "shereeanthony@kog.com")); 
console.log("task 5: ", getUserWithEmail(users, "elmahead@omatom.com")); 

// // ================ 6 ====================

const getUsersWithAge = (users, min, max) => {
  
  return users.filter((user) => user.age >= min && user.age <= max);
};

console.log("task 6: ", getUsersWithAge(users, 20, 30)); 

console.log("task 6: ", getUsersWithAge(users, 30, 40));


// // ================ 7 ====================

const calculateTotalBalance = (users) => {
 
  return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log("task 7: ", calculateTotalBalance(users)); 

// // ================ 8 ====================

const getUsersWithFriend = (users, friendName) => {
 
  return users
    .filter((user) => user.friends.indexOf(friendName) !== -1)
    .map((user) => user.name);
};

console.log("task 8: ", getUsersWithFriend(users, "Briana Decker")); 
console.log("task 8: ", getUsersWithFriend(users, "Goldie Gentry")); 

// // ================ 9 ====================

const getNamesSortedByFriendsCount = (users) => {
  
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

console.log("task 9: ", getNamesSortedByFriendsCount(users));

// // ================ 10 ====================

const getSortedUniqueSkills = (users) => {
  
  return users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .filter((user, index, arr) => arr.indexOf(user) === index)
    .sort();
};

console.log("task 9: ", getSortedUniqueSkills(users));
