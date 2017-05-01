function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var binaryArr = []
    for(;N; N = N/2){
        N= Math.floor(N)
        binaryArr.push(N % 2);    
    }
    console.log(binaryArr)
    var ArrN = binaryArr;
    var numZero = 0;
    var zeros = [];
    for(var i = 1; i<ArrN.length; i++)
    {
        if(ArrN[i] == 1){
            zeros.push(numZero);
            numZero = 0;
        } else {
            numZero++;
        }
    }
    return Math.max.apply(Math, zeros);
    
}


/*
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

Write a function:

function solution(N);
that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.

Assume that:

N is an integer within the range [1..2,147,483,647].
Complexity:

expected worst-case time complexity is O(log(N));
expected worst-case space complexity is O(1).

*/

/* 100 % */
function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var binN = (N >>> 0).toString(2)
    let maxCount = 0;
    let count =0;
    binN = binN.split("");
    //console.log(binN);
    
    for(let i=0; i < binN.length; i++){
       
        if(binN[i] == 1){
            if (count > maxCount) maxCount = count;
            count = 0;
        }
        else {
            count++;
        }
    }
    return maxCount;
}