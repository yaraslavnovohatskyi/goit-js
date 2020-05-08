// "use strict"

// const array = [1,2,4,8,27,23,21];
// const filterArray = [];
// for(let i = 0; i < array.length; i += 1) {
//     if (array[1] > 3) {
//         filterArray.push(array[i]);
//     }
// }
// console.log("imperative", filterArray);
// const filteredNumber = array.filter((value) => {
//     return value > 3;
// });
// console.log("declarative", filteredNumber);

// console.log("исходний массив", array);
// const dirtyMultiply = (arr,value) => {
//     for(let j = 0; j < arr.length; j += 1) {
//         arr[j] *= value;
//     }
// };
// console.log("исходний массив",array);
// dirtyMultiply(array,5);
// console.log("измененний исходний массив", array);
// const cleanMultiply = (arr,value) => {
//     const result = [];
//     for(let k = 0; k < arr.length; k += 1) {
//         result.push(arr[k] * value);
//     }
//     return result;
// };

// console.log(
//     "новий массив в результате виполнения фуекции",
//     cleanMultiply(array, 5)
// );
// console.log("не изменившийся исходний массив", array);

// const arrNumber = [1,4,3,14,16,2,90];
// for(let i = 0; i < arrNumber.length; i += 1) {
//     console.log(arrNumber[i]);
// }
// arrNumber.forEach((num, idx) =>
// console.log(`forEach: index ${idx}, value ${num}`)
// );

// const tests = ["test-1","test-2","test-3","test-4","test-5","test-6"];
// tests.forEach((test) => console.log(test));

// console.log("исходний массив", arrNumber);
// const doubleNumbers = arrNumber.map((num) => num * 2);
// console.log("map:",doubleNumbers);
// console.log("исходний массив",arrNumber);

// const users = [
//     {name: "jack", isActive: true},
//     {name: "john", isActive: false},
//     {name: "Susan", isActive: true},
// ];
// const names = users.map((user) => user.name);
// console.log("map: ", names); 

// console.log("исходник", arrNumber);

// const filteredArray = arrNumber.filter((el) => el > 10);
// console.log("filter-1:", filteredArray);

// const filteredArray1 = arrNumber.filter((num) => num < 5);
// console.log("filte-2:", filteredArray1);

// const filteredArray2 = arrNumber.filter((num) => num === 5);
// console.log("filter-3:", filteredArray2);

// // example 2

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.

// const activeUsers = users.filter((user) => user.isActive);
// console.log("filter:", activeUsers);

// const inActiveUsers = users.filter((user) => !user.isActive);
// console.log("filter:", inActiveUsers);

// // === Array.prototype.find() ===

// // будет искать до первого совпадения,
// // после чего прервет свое выполнение.

// // Применяет callback-функцию к каждому элементу исходного массива и если результат ее
// // выполнения имеет значение true, то возвращает этот элемент и завершает свое выполнение.
// // Если ничего не найдено, вернет undefined.

// // array.find(callback[currentValue, index, array])

// // Используется для поиска уникального элемента массива
// // Перебирает
// // Не изменяет
// // Возвращает элемент

// // example 1
// const newArr = [1, 2, 3, 2, 1];

// const nextToThree = newArr.find((el) => el > 3);
// console.log("find:", nextToThree); // undefined

// const beforeThree = newArr.find((num) => num < 2);
// console.log("find:", beforeThree); // 1

// const five = newArr.find((num) => num === 5);
// console.log("find:", five); // undefined

// // example 2

// const newUsers = [
//   { id: "000", name: "Mango", isActive: true },
//   { id: "001", name: "Poly", isActive: false },
//   { id: "002", name: "Ajax", isActive: true },
//   { id: "003", name: "Chelsey", isActive: false },
// ];

// const user = newUsers.find((el) => el.id === "002");
// console.log(user); // {id: "002", name: "Ajax", isActive: true}

// const getUserById = (array, id) => array.find((el) => el.id === id);

// console.log(getUserById(newUsers, "003")); // {id: "003", name: "Chelsey", isActive: false}
// console.log(getUserById(newUsers, "01")); // undefined

// // === Array.prototype.every(), Array.prototype.some() ===

// // === Array.prototype.every(), Array.prototype.some() ===Метод every проверяет,
// // прошли ли все элементы массива тест, предоставляемый callback-функцией. Возвращает true,
// // если вызов callback-функции вернет true для каждого элемента в array
// // array.every(callback[currentValue, index, array])
// // Метод some проверяет, проходит ли по крайней мере один элемент в массиве тест,
// //  предоставляемый callback-функцией. Возвращает true, если вызов callback-функции
// // вернет true хотябы для одного элемента в array.
// // array.some(callback[(currentValue, index, array)]);
// // Перебирает
// // Не изменяет
// // Возвращает true или false

// // // example 1


// // // example 1

// const sumNums = [1, 20, 31, 4, 500];
// const isBig = (val) => val >= 10;

// console.log(sumNums.every(isBig)); // false
// // как лог оператор && - вернет true, когда все true

// console.log(sumNums.some(isBig)); // true
// // как лог оператор || - вернет true, когда хотя бы один элемент true

// const isBig1 = (val) => val >= 1;
// console.log(sumNums.every(isBig1)); // true
// console.log(sumNums.some(isBig1)); // true

// const isBig2 = (val) => val >= 501;
// console.log(sumNums.every(isBig2)); // false
// console.log(sumNums.some(isBig2)); // false

// // example 2

// const fruits = [
//   { name: "apples", amount: 3 },
//   { name: "bananas", amount: 10 },
//   { name: "oranges", amount: 1 },
// ];

// console.log("initial array", sumNums);
// const newSum = sumNums.reduce((acc,value) => acc + value, 0);
// console.log(newSum);
// let total = 0;
// for (let el of sumNums) {
//     total += el;
// }
// console.log(total);


// const tweets = [
//     { id: "000", likes: 5, tags: ["js", "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//   ];
//   const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes);

// const countLikes = (tweets) =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(countLikes(tweets));

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// console.log("все теги обьектов", tags);

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// // === Array.prototype.sort() === Позволяет сортировать элементы массива на месте.
// // Помимо возврата отсортированного массива метод sort также отсортирует массив,
// // на котором он был вызван. По умолчанию метод sort сортирует, преобразуя элементы к строке.

// // Перебирает
// // Изменяет
// // Возвращает коллекцию

// const alpha = [1, 3, 5, 7, 4, 8, 2, 6];

// console.log("before sort:", alpha);
// console.log("after sort", alpha.sort());

// const clients = ["Jane", "Jack", "Cecile", "Arlo", "Susan"];
// console.log("before sort:", clients);
// console.log("after sort", clients.sort());