function countGreaterThanTen(numbers) {
    let count = 0;


    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > "10") {
            count++;
        }
    }


    return count 
}


console.log(countGreaterThanTen([5, 12, 8, 20, 3]));