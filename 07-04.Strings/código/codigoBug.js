function process(numbers) {
    let result = 0;


    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            result += numbers[i];
        }
    }


    return result;
}


console.log(process([2, 4, 6]));