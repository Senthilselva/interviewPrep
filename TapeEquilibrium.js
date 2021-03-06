/* 
A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7 
P = 2, difference = |4 − 9| = 5 
P = 3, difference = |6 − 7| = 1 
P = 4, difference = |10 − 3| = 7 
Write a function:

function solution(A);

that, given a non-empty zero-indexed array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Assume that:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var rightSum = A.reduce( (a,b) => a+b);
   var leftSum = 0;
   var smallnumber = Math.abs(rightSum);
   
   for(i = 0; i < A.length; i++){
       rightSum -= A[i];
       leftSum += A[i];
       var temp = Math.abs(leftSum - rightSum);
       //console.log(temp);
       if( temp < smallnumber) smallnumber = temp;
   }
   
  // console.log(smallnumber);
   return smallnumber;
       
}









function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    if(A.length == 0) return 0;
    
    var diffArr =[];
    for(var i = 1; i< A.length; i++){
        //slice the array right at i
        var frontArr = A.slice(0,i)
        var backArr = A.slice(i)
        
        // find the sum of both arrays
        var frontArrSum = frontArr.reduce(function(a, b) {
                            return a + b;
                        }, 0);

        var backArrSum = backArr.reduce(function(a, b) {
                            return a + b;
                        }, 0);
                        
        //find the diff and store in new array
        diffArr.push(Math.abs(frontArrSum - backArrSum));
    
    }
    
    //return the min val of array
    return Math.min.apply( Math, diffArr );
}