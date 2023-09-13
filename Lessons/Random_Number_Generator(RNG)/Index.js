/*
    Random function from math generates a number between 0 and 1
    To get an integer, you multiply and round id
*/


let number = Math.round(Math.random() * 6) + 1;
let number2 = Math.round(Math.random() * 12) + 1;
let number3 = Math.round(Math.random() * 2000) + 1;

document.getElementById("lb1").innerHTML = number;
document.getElementById("lb2").innerHTML = number2;
document.getElementById("lb3").innerHTML = number3;

document.getElementById("bt").onclick = () => {
    number = Math.round(Math.random() * 6) + 1;
    number2 = Math.round(Math.random() * 12) + 1;
    number3 = Math.round(Math.random() * 2000) + 1;

    document.getElementById("lb1").innerHTML = number;
    document.getElementById("lb2").innerHTML = number2;
    document.getElementById("lb3").innerHTML = number3;

}
