function sum1(ary) {
    // Method 1
    if (Array.isArray(ary)) {
        return ary.reduce((element,sum)=>element + sum, 0)    
    }
    return "Not an array\n";
}

function sum2(ary) {
    // Method 2
    if (Array.isArray(ary)) {
        let sum = 0;
        ary.forEach(ele => sum += ele);   
        return sum; 
    }
    return "Not an array\n";
}

function sum3(ary) {
    // Method 3
    if (Array.isArray(ary)) {
        let sum = 0;
        ary.every(ele => sum += ele);   
        return sum; 
    }
    return "Not an array\n";
}

function sum4(ary) {
    // Method 4
    if (Array.isArray(ary)) {
        let sum = 0;
        ary.filter(ele => sum += ele);   
        return sum; 
    }
    return "Not an array\n";
}


// 由Method 2 ~ 4 可以猜測：如果array的method會把array裡面的元素都選擇過一遍時，就可以適用
// let sum = 0;
// ary.method(ele => sum += ele);   的方法，最後輸出sum

let arr1 = [1, 2, 3, 4, 5] // 15
let arr2 = [1, 1, 1] // 3
let arr3 = [100, 11451] // 11551

let arr = arr3;

console.log(sum1(arr));

console.log(sum2(arr));

console.log(sum3(arr));

console.log(sum4(arr));



