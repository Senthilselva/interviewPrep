/*

A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Assume that:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.
Complexity:

expected worst-case time complexity is O(1);
expected worst-case space complexity is O(1).
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 6.4.0)
    //since we know Y>X
    var distance = Y-X;
    //Check to see if distance is > d
    
    if (distance < D || distance ==D) return 1;
    
    var totalJump = Math.ceil(distance/D);
    
    return totalJump
}

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 6.4.0)
    var frogPos = X;
    var jumpCount = 0;
    // while( frogPos < Y){
    //     frogPos += D;
    //     jumpCount++;
    // }
    //console.log(jumpCount); 
    var distance = Y - X;
    //console.log(distance);
    jumpCount  = Math.floor(distance/D) 
    if (distance % D > 0 ) jumpCount++;
    //console.log(jumpCount);
    return jumpCount;
}