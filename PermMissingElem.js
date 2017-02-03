// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


//*******************************
//Better Solution - still fails
//**************************
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
   //if empty array
    if (A.length == 0) return 1;
    
     A= A.sort();
    // console.log(A);
    for(var i = 0; i < A.length ; i++) {
        if (A[i] == i+2) return i+1
    }
    return i+1;
    
}


//***************************************************
//Not Correct should retake the test
//*****************************************************
function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
   
    //if length is 0 or 1 return A
    if(A.length ==0) return A;
    if(A.length ==1) return A[0];
    
    
     A = A.sort();
   // console.log(A)
   var i = (A.length-1)/2;
     i = Math.ceil(i)
    while(i == A[i-1]){
        //Checking to see if consecutive numbers are differenr
        if(A[i-1] == i && A[i] != i+1) return i+1;
        if((A[i-1] != i) && (A[i] ==i-1)) return i
        
        
        //console.log(A[i])
        if(A[i-1] != i){
            i = i - Math.ceil(i/2);
        } else {
            i = i + Math.ceil(i/2);
        }
     
     // console.log(A[i]);     
        
    }
   // console.log(A[i]);
    
}