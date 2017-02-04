/*

Task description
Write a function:

function solution(A);

that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

For example, given:

  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2
the function should return 5.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

Copyright 2009–2017 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    //handle exception
    if(A.length ==0 ) return  1;
    if(A.length == 1 && A[0] == 1) return 2;
    if(A.length == 1 && A[0] <= 0) return 1;
    //sort the array
    A.sort(function(a,b){
        return (a-b);
        });
    
    //find the lowest number in the array
    var lowestNum = Math.min.apply( Math, A );
      
    //loop through 
    for(var i=0; i<A.length; i++) {
        var searchNum = i+1;
        //var searchNum = lowestNum+i;
        //var searchVar = ","+searchNum+","
        //console.log(searchVar);
        if(A.indexOf(searchNum) < 0) return searchNum;
    }
    //out of the loop
    //then
     //add the length of the array to the lowest number all the other number are in array
    return  lowestNum+ Array.length
}