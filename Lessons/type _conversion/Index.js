/* 
How to get user input

Easy way with a window prompt
Hard way with a html textbox

*/

//noob
//let username = window.prompt("Please type your name: ");
//console.log(username);

//pro
/* What this does: The button when clicked gets the
text in the textbox, and print in console and alters the lable
inner html with the new name */

let username; 
document.getElementById("mybutton").onclick = function(){
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = "Hello " + username;
}
