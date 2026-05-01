function average(numbers) {
    let total = 0;


    numbers.forEach(n => {
        total += n;
    });


    return total / numbers.length;
}


console.log(average([10, 10, 10]));