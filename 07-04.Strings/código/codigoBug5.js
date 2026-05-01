function findMax(arr) {
    let max = arr[0];


    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < max) {
            max = arr[i];
        }
    }


    return max - 2;
}


console.log(findMax([10, 20, 5, 30]));