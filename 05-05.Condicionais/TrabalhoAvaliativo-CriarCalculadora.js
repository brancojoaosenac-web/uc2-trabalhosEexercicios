const ask = require("readline-sync");

let operacao = ask.question("Digite a operacao (+, -, *, /, %): ");

let numero1 = Number(ask.question("Digite o primeiro numero: "));
let numero2 = Number(ask.question("Digite o segundo numero: "));


// FUNÇÕES

function adicao(n1, n2) {
    return n1 + n2;
}

function subtracao(n1, n2) {
    return n1 - n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function divisao(n1, n2) {
    return n1 / n2;
}

function porcentagem(n1, n2) {
    return n1 * n2 / 100;
}


// SWITCH

let resultado;

switch(operacao) {

    case "+":
        resultado = adicao(numero1, numero2);
        break;

    case "-":
        resultado = subtracao(numero1, numero2);
        break;

    case "*":
        resultado = multiplicacao(numero1, numero2);
        break;

    case "/":
        resultado = divisao(numero1, numero2);
        break;

    case "%":
        resultado = porcentagem(numero1, numero2);
        break;

    default:
        resultado = "Operacao invalida";
}

console.log("Resultado:", resultado);