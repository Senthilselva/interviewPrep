'use strict';

const isInteger = ((value) => {
  if (typeof value === 'number'){
    if (Math.floor(value) == value){ 
    	console.log(value + " is an integer")
    	return true;
    }
    console.log(value + " is a number but not integer")
	return false;
  }
  else
  	console.log(value + " is not a number")
    return false;
});

module.exports = isInteger;
