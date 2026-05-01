// =========================================
// LISTA DE EXERCÍCIOS - JAVASCRIPT
// =========================================



// =========================================
// EXERCÍCIO 1
// Crie variáveis para armazenar:
// - seu nome
// - sua idade
// - se você gosta de programar
//
// Imprima tudo em uma única frase
// =========================================

let ask = require("readline-sync")

let meuNome = ask.question('qual seu nome?')
let minhaIdade = ask.question('qual sua idade?')
let Pergunta1 = ask.question('voce gosta de programar?')
console.log(meuNome,minhaIdade,Pergunta1)




// =========================================
// EXERCÍCIO 2
// Crie duas variáveis com números.
//
// Mostre no console:
// - soma
// - multiplicação
// - divisão
// - resto da divisão
// =========================================


let v1 = (10)

let v2 = (20)

console.log('soma:', (v1 + v2))
console.log('multiplicaçao:',(v1 * v2))
console.log('divisão',(v1 / v2))
console.log("resto da diferença",(v1 % v2))





// =========================================
// EXERCÍCIO 3
// Crie duas variáveis com números.
//
// Mostre no console o resultado das comparações:
// - são iguais
// - são diferentes
// - o primeiro é maior
// - o segundo é menor ou igual
// =========================================

let vv1 = 10
let vv2 = 20

console.log("São iguais:", vv1 === vv2);
console.log("São diferentes:", vv1 !== vv2);
console.log("O primeiro é maior:", vv1 > vv2);
console.log("O segundo é menor ou igual:", vv1 <= vv2);





// =========================================
// EXERCÍCIO 4
// Crie três variáveis booleanas:
// a = true
// b = false
// c = true
//
// Mostre no console o resultado das seguintes operações:
// - a e b
// - b e c
// - a e c
// - a ou b
// - b ou c
// - negação de a
// - negação de b
// =========================================

// Criando as variáveis
let a = true;
let b = false;
let c = true;

// Operações
console.log("a e b:", a && b);
console.log("b e c:", b && c);
console.log("a e c:", a && c);

console.log("a ou b:", a || b);
console.log("b ou c:", b || c);

console.log("negação de a:", !a);
console.log("negação de b:", !b);



// =========================================
// EXERCÍCIO 5
// Peça ao usuário um número.
//
// Crie outra variável com esse mesmo valor,
// mas convertido para texto.
//
// Mostre:
// - valor e tipo da primeira
// - valor e tipo da segunda
// =========================================

// Pedindo um número ao usuário
let ask = require("readline-sync")
let numero = Number(ask.question("Digite um numero: ",));

// Convertendo para texto
let numeroTexto = String(numero);

// Mostrando valor e tipo
console.log("Valor:", numero, "| Tipo:", typeof numero);
console.log("Valor:", numeroTexto, "| Tipo:", typeof numeroTexto);



// =========================================
// EXERCÍCIO 6
// Crie uma variável com o seguinte valor:
// "   Aprender Javascript é legal   "
//
// Faça as seguintes operações:
// - remover os espaços no início e no fim
// - transformar toda a frase em maiúsculo
//
// Mostre:
// - a frase original
// - a frase sem espaços
// - a frase em maiúsculo
// - o tamanho da frase original
// - o tamanho da frase sem espaços
// =========================================

let 


// =========================================
// EXERCÍCIO 7
// Peça ao usuário uma frase sobre javascript.
//
// Faça as seguintes operações:
// - verifique se a frase contém a palavra "javascript"
// - substitua todas as ocorrências de "javascript" por "JS"
//
// Mostre:
// - a frase original
// - o resultado da verificação (true ou false)
// - a frase modificada
// =========================================





// =========================================
// EXERCÍCIO 8
// Crie um array com pelo menos 5 elementos.
//
// Mostre:
// - o tamanho do array
// - o primeiro elemento
// - o último elemento
// =========================================





// =========================================
// EXERCÍCIO 9
// Crie um array com os números: 10, 20, 30, 40 e 50.
//
// Faça as seguintes alterações no array:
// - adicione os números 60 e 70 ao final
// - remova o primeiro elemento do array
// - remova o número que agora está na posição 2
//
// Mostre:
// - o array final
// - o tamanho do array antes e depois das alterações
// =========================================





// =========================================
// EXERCÍCIO 10
// Crie um array com nomes.
//
// Peça ao usuário um nome.
//
// Mostre:
// - se o nome informado existe no array
// =========================================





// =========================================
// EXERCÍCIO 11
// Peça ao usuário um nome (pode estar em qualquer formato).
//
// Crie outra variável com esse nome:
// - sem espaços no início e no fim
// - todo em minúsculas
// - com apenas a primeira letra em maiúscula
//
// Mostre:
// - o nome original
// - o nome formatado
// - o tamanho dos dois
// =========================================





// =========================================
// EXERCÍCIO 12
// Peça ao usuário uma frase.
//
// Crie outra variável baseada nessa frase com as seguintes alterações:
// - todas as letras em minúsculo
// - remover espaços no início e no fim
// - substituir todas as vogais "a" por "i"
//
// Mostre:
// - a frase original
// - a frase modificada
// - o tamanho das duas frases
// =========================================





// =========================================
// EXERCÍCIO 13
// Crie um array com 10 números.
//
// Remova o terceiro, o quarto e o sétimo elemento do array.
// Adicione um elemento entre o novo terceiro e o novo quarto elemento.
//
// Mostre o resultado
// =========================================





// =========================================
// EXERCÍCIO 14
// Crie uma variável sem valor.
//
// Mostre o tipo dela.
//
// Depois atribua um valor e mostre o tipo novamente.
// =========================================





// =========================================
// EXERCÍCIO 15
// Peça ao usuário:
// - nome
// - idade
//
// Crie uma frase que combine tudo usando texto e variáveis.
// =========================================