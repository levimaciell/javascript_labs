/* How to declare variables:
Either: var, let, const
Variables have good names and...

*/

let age = 30;
let firstName = "James Kenneth";
let student = false

console.log(firstName);
console.log(age)
console.log(student);
console.log("Hello",firstName,"how are you doing")

//Changing html with an id
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "Are you a student? " + student;
document.getElementById("p3").innerHTML = "You are " + age + " year old";


