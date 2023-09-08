let siffra = 0; 

/*
var variabel = bryter block

let variabel = "nyare = blockvariabel, det samma gäller const"

*/

/*function plusClick(){
    siffra = siffra + 1
    document.getElementById("svar").innerHTML = siffra;
} */


//minussknapp

const minusknapp = document.getElementById("btnminus");
minusknapp.addEventListener("click", minusClick);

function minusClick(){
    siffra--;
    document.getElementById("svar").innerHTML = siffra;
}

const plusknapp = document.getElementById("btnplus");
plusknapp.addEventListener("click", plusClick);

function plusClick(){
    siffra++;
    document.getElementById("svar").innerHTML = siffra;
}


/*const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const gradient = ctx.createLinearGradient(20, 0, 220, 0);

gradient.addColorStop(0, "blue");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "white");


ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100); */
