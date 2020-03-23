"use strict";
//№1
const var1 = 1;
const var2 = 0;
const var3 = true;
console.log(var1 > var2);
console.log(var1 == var3);
console.log(var1 === var3);
console.log(var1 != var3);
console.log(var2 != var3);
console.log(var1 > var2 == var3);
console.log(var1 > var2 > var3);
//№2
let val;
console.log(isNaN(val));
console.log(typeof val);
val = "River";
console.log(isNaN(val));
console.log(typeof val);
val = "Mountin";
console.log(isNaN(val));
console.log(typeof val);
val = 232;
console.log(isNaN(val));
console.log(typeof val);
val = true;
console.log(isNaN(val));
console.log(typeof val);
val = null;
console.log(isNaN(val));
console.log(typeof val);
//№3
const alfa = 0.2;
const beta = 0.4;
let result = (alfa * 10 + beta * 10)/10;
console.log(result);
//№4
let tetra = "12px";
console.log(tetra);
tetra = 12 + "px";
console.log(tetra);
tetra = "13.34em";
console.log(tetra);
tetra = 13.34 + "em";
console.log(tetra);
//№5
console.log(Math.min(2,34,99,3,22,36,733,18));
console.log(Math.max(2,34,99,3,22,36,733,18));
//№6
let random;
randome - (Math.random() * (19-3) + 3);
console.log("toFixed(0):",random.toFixed(0));
