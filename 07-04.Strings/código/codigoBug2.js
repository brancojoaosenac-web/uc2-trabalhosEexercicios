

function multiplyArray(arr) {
var result = 1;


    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }


    return result;
}


console.log(multiplyArray([1, 2, 3, 4]));