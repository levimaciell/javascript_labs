let sideA, sideB, sideC;

document.getElementById("button1").onclick = function(){

    sideA = Number(document.getElementById("textBox1").value);
    sideB = Number(document.getElementById("textBox2").value);

    sideC = Math.sqrt(((Math.pow(sideA, 2)) + (Math.pow(sideB, 2))));

    document.getElementById("lab3").innerHTML = "Side C: " + sideC;
}


console.log(sideC);