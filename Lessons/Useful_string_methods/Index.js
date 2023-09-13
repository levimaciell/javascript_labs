// some string properties

let user = "levi maciel";
console.log(user);
console.log("Name length = " + user.length);
console.log("Name first letter = " + user.charAt(0));
console.log("Index of the first 'v' found = " + user.indexOf("v"));
console.log("Index of the last 'e' found = " + user.lastIndexOf("e"));

user = "   levi maciel       "
console.log("broken user = " + user);
user = user.trim();
console.log("Fixed user = " + user);
console.log("Uppercase user = " + user.toUpperCase());
console.log("Lowercase user = " + user.toLowerCase());

let number = "111222333444";
console.log(number);
number = number.replaceAll("1", ":)")
console.log(number);
