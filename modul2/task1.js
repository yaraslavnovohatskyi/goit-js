// "use strict";
// //№1
// const fruits = ["яблоки", "бананы", "апельсины"];
// console.log(fruits); 

// console.log(fruits[1]); 
// fruits[1] = "киви";
// console.log(fruits); 
// fruits[3] = "грушы";
// fruits[4] = "виноград";
// fruits[5] = "персики";
// console.log(fruits); 

// //№2
// const test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
// const score1 = 12;

// for (let i = 0; i < test1.length; i += 1) {
//   if (test1[i] < score1) {
//     continue;
//   }
//   console.log("test-1", test1[i]);
// }

// //№3
// const test2 = [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
// const score2 = 15;

// for (let i = 0; i < test2.length; i += 1) {
//   if (test2[i] < score2) {
//     continue;
//   }
//   console.log("test-2", test2[i]);
// }


// //№24
// const test3 = [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];
// const score3 = 16;

// for (let i = 0; i < test3.length; i += 1) {
//   if (test3[i] < score3) {
//     continue;
//   }
//   console.log("test-3", test3[i]);
// }


// //№5
// const tests = [
//   [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12],
//   [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20],
//   [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22]
// ];

// for (let i = 0; i < tests.length; i += 1) {
//   console.log(tests[i]);
//   for (let j = 0; j < tests[i].length; j += 1) {
//     console.log(tests[i][j]);
//   }
// }