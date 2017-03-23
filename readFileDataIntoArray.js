const { csvFormat } = require('d3-dsv');
const { readFileSync, writeFileSync } = require('fs');
const numbers = readFileSync('./tesco-title-numbers.csv', 
  {encoding: 'utf8'}).trim().split('\n');
console.dir(numbers); //Displays an interactive list of the properties of the specified JavaScript object.

