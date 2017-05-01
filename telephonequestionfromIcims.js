function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    S = S.replace(/\s/g, '');
    S = S.replace(/-/g, '');
    if(S == "") return "";
    S = S.split(""); 
    if(S.length <= 0) return S.join("");
    for(var i = 0; i < S.length; i+=3){
        S.splice(i,0,"-");
        i++;
    }
    var i = S.length;
   //console.log(S[i-2]);
    if(S[i-2] == "-") {
        S[i-2] = S[i-3];
        S[i-3] = "-"
    }
    S.shift();
    //console.log(S.join(""));
    return S.join("");
    
}