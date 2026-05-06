
function isEqual(num1, num2) {   
    if (num1 === num2) {
        return`${num1} e ${num2} sao iguais`

    } else {
        return`${num1} e ${num2} sao diferentes` 
    }
}


let firstNumber = 5
let secondNumber = 5

console.log(isEqual(firstNumber, secondNumber))



/*-----------------------------------------------------------*/




function diferentes(num5, num6){    
    if (num5 > num6) {
        return`${num5} e maior que ${num6} `
    } else if (num5 < num6){    
        return`${num5} e menor que ${num6}`
    } else {   
        return `${num5} e igual ${num6}`
    }

}

let num5 = 10
let num6 = 20

console.log(diferentes(num5, num6))

