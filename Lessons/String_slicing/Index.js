/*
    Slice generates a new string without changing the original one
*/


let fullName =  "Levi Maciel";
let firstName;
let lastName;

firstName = fullName.slice(0,4);
lastName = fullName.slice(5);

//another way
lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);