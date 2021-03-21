




function addition(a,b){
var a = prompt("Input the first number: ");
var b = prompt("Input the the second number: ");
var c= +a + +b;  //for some reason processes it as a string instead of integers
    alert(c);
    myFunction();
}

function subtract(a,b){
var a = prompt("Input the first number: ");
var b = prompt("Input the the second number: ");
var c = a - b;
    alert(c);
}

function multi(a,b){
var a = prompt("Input the first number: ");
var b = prompt("Input the the second number: ");
var c = a * b;
    alert(c);
}

function divide(a,b){
var a = prompt("Input the first number: ");
var b = prompt("Input the the second number: ");
var c = a / b;
    alert(c);
}

function exponent(a, b){
var a = prompt("Input the base number: ");
var b = prompt("Input the exponent power: ");
var c = Math.pow(a, b)
    alert(c);
}

function square(a){
var a = prompt("Input number: ");
var c = Math.sqrt(a);
    alert(c);
}






