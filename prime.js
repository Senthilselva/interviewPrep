/*largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
var LargestPrimeFactor = function(num){
	var n = Math.round(Math.sqrt(num));
    for(var i = n ; i > 1; i--){
    	if(num%i == 0){
    	   if(isPrime(i) == true) return i;
    	}

    }
   	
}

var isPrime = function(num){
	var i = num-1;
	if(i = 1) return true;
	if( i%num == 0) return false;
	else return isPrime(i);
}

var k =LargestPrimeFactor(13195);
console.log(k);


k =LargestPrimeFactor(600851475143);
console.log(k);

function returnHighestPrime(num) {

	if (num == 0 || num == 1) return num;

	for (var i = 2; i <= num; i++) {

		if (i == num) return num;

		if (num % i == 0) return returnHighestPrime(num / i);
	}
}

for (var i = 0; i < 30; i++) {
	console.log(i, returnHighestPrime(i));
}
