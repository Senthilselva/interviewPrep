//any other file
/*
var calculate = require("./calculate")

var num1 = 10;
var num2 = 5;

console.log(calculate.add(10,5)) //willdisplay 15

console.log(calculate.subtract(10,5))  // will display 10 
*/


var timeCode = require('./timecode');
var timenow = new Date();
console.log(timeCode(timenow))