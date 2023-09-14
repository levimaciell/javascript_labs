/*
    Ternary operator = Shortcut for an 'if/else'
    It uses 3 operands:
    1. a condition with ?
    2. expression if true ':'
    3. expression if false

    condition ? trueExpression : false expression
*/

let adult = checkAge(40);

function checkAge(age){
    return age >= 18 ? "You are an adult" : "You are not adult";
}

console.log(adult);




