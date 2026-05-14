const ask = require("readline-sync");

let soma = 0;

let numero = Number(ask.question("Digite um numero:"))

while(numero != 0){

    soma = soma + numero;

    numero = Number(ask.question("Digite outro numero ou digite 0 para encerrar: "));
}

console.log("A soma é:", soma);