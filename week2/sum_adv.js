
function sum1(n) { // 公式解
    return n*(n+1)/2;
}

function sum2(n) {  // 遞迴
    if (n == 1) return 1;
    return sum2(n-1) + n;
}

function sum3(n) { // 先建立一個1,2,...n 的array 再全部加起來
    let arr = Array.from({ length: n }, (ele, index) => index + 1);
    return arr.reduce((ele, sum) => sum + ele, 0);
}



let n = 4;
console.log(sum1(n));
console.log(sum2(n));
console.log(sum3(n));
