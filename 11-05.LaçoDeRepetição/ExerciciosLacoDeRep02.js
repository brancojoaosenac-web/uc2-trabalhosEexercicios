const numeros = [1,3,37,48,30, 57, 84]
let maior = numeros[0];

for(let i = 0; i < numeros.length; i++) {
     if(numeros[i] > maior){

        maior = numeros[i];

    }
}
console.log(`O MAIOR NUMERO É: ${maior}`);