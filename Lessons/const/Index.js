/* 
    const = is a variable that cannot have the value changed
*/

const PI = 3.14159
let radius;
let circumference;

radius = Number(window.prompt("Enter the radius of a circle"));

circumference = 2*PI*radius;

console.log("The circumference is:", circumference);
