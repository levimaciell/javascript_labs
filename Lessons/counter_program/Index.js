let count = 0;

document.getElementById("decrease").onclick = () => {
    count--;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("reset").onclick = () => {
    count = 0;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("increase").onclick = () => {
    count++;
    document.getElementById("count").innerHTML = count;
}