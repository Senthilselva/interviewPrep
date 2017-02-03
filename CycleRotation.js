/*
A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.

For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.

Write a function:

function solution(A, K);

that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].

*/


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    for(var i =0; i<K; i++){
        var lastnum = A.splice(-1,1)
       // console.log(lastnum)
       //push puts the element in the back 
       //unshit puts it in the front of an array
        A.unshift(lastnum[0]);
       // console.log(A)
    }
    return A;
}

//Better solution
function solution(A, K) {
    K = K % A.length;
    if (A.length === 0 || A.length === 1 || K === 0) {
        return A;
    }

    let part = A.splice(A.length - K);
    return part.concat(A);
}
