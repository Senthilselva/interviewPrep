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