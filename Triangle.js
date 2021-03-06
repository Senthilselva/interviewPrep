/*
A zero-indexed array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
Triplet (0, 2, 4) is triangular.

Write a function:

function solution(A);

that, given a zero-indexed array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
the function should return 1, as explained above. Given array A such that:

  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1
the function should return 0.

Assume that:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

*/


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    sortedArray = A;

    sortedArray.sort(function(a,b) {
            return a-b;
    });
    var value1=0, value2=0, value3=0;
    
    for(var i = 0; i < sortedArray.length ; i++){
        if((sortedArray[i] < sortedArray[i-1] + sortedArray[i-2]) &&
            (sortedArray[i-1] < sortedArray[i] + sortedArray[i-2]) &&
            (sortedArray[i-2] < sortedArray[i-1] + sortedArray[i])){
                return 1
            }
    }
    
    return 0
    
    
}