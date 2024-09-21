
function sum1(n) {
    return n*(n+1)/2;
}

function sum2(n) {
    let arr = Array(n).fill(1,0);
    return arr.reduce((ele, sum) => sum += ele);
}



let n = 4;
console.log(sum2(n));

