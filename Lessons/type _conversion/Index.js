/* 
    Type conversion =  change one type to another
    Useful when you have to convert a string onto a number, or vice versa
*/

/*
let age = window.prompt("How old are you?");
age += 1;
console.log("Happy birthday!", "you are",age,"years old");
This generates a problem, cause 22 years old become 221 years old. We're concatenating strings
*/

/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);

age += 1;
console.log("Happy birthday!", "you are",age,"years old");*/

let x;
let y;
let z;

x = Number("3.14");
console.log(x, typeof x);

y = String(3.14);
console.log(y, typeof y);

z = Boolean(2 < 3);
console.log(z, typeof z);