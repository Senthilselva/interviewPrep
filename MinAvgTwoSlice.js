/*
A non-empty zero-indexed array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

function solution(A);

that, given a non-empty zero-indexed array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
the function should return 1, as explained above.

Assume that:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).




*/




// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var smallestTwo = {};
    var smallestThree ={};
    var twoAvg = 0;
    var threeAvg =0;
     
    //handle exception
    if(A.length <= 2) return 0;
    
    if(A.length == 3) {
        var first = (A[0]+A[1])/2;
        var second = (A[1]+A[2])/2;
        var three = A[1]+A[2]+A[3]/3
        if(three < second) return 1;
            
            
        if(first <= second) return 0;
        return 1;
    }
        
    

    smallestTwo.num = 0
    smallestTwo.Avg = (A[0]+A[1])/2
    
    smallestThree.num = 0
    smallestThree.Avg = (A[0]+A[1]+A[2])/3
    
    //added -1 since we cannot find the avg of last number
    for(var i=1; i<A.length-1; i++){
        if((i < A.length - 2)) threeAvg = (A[i]+A[i+1]+A[i+2])/3;
        
        twoAvg = (A[i]+A[i+1])/2
        
        if(twoAvg < smallestTwo.Avg){
            smallestTwo.num = i;
            smallestTwo.Avg = twoAvg;
        }
        
        if(threeAvg < smallestThree.Avg){
            smallestThree.num = i;
            smallestThree.Avg = threeAvg;
        }
         
        // console.log(smallestTwo);
       //  console.log(smallestThree);
    }
    
    if(smallestTwo.Avg == smallestThree.Avg){
        if(smallestTwo.num < smallestThree.num) return smallestTwo.num;
        return smallestThree.num;
    }
    
    if(smallestTwo.Avg < smallestThree.Avg) return smallestTwo.num;
    
    return smallestThree.num;
}