function cmp(a, b) { return a - b; }

function solution(A, B) {
    var n = A.length;
    var m = B.length;
    A.sort(cmp);
    B.sort(cmp);
    var i = 0;
    for (var k = 0; k < n; k++) {
        if (i < m && B[i] < A[k])
            i += 1; 
        if (A[k] == B[i])
            return A[k];
    }
    if(m <= n) return -1; else for(;i<m;i++){ if (A[n-1] == B[i]) return B[i]; } return -1; 
}