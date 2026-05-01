// =========================
// EXERCÍCIO 1 - VARIÁVEIS BÁSICAS
// =========================

// Crie uma variável chamada name (nome) e atribua a ela o seu nome (string).
// Crie uma variável chamada age (idade) e atribua a ela sua idade (number).
// Crie uma variável chamada isStudent (éEstudante) e atribua true (boolean).

let name = "Joao"
let age = 26
let isStudent = true

// =========================
// EXERCÍCIO 2 - TYPEOF
// =========================

// Usando as variáveis do exercício anterior,
// descubra o tipo de cada uma usando typeof.
//
// Armazene os resultados em:
// typeName (tipoNome)
// typeAge (tipoIdade)
// typeIsStudent (tipoEstudante)

let typeName = typeof name
let typeAge = typeof age 
let typeisStudent = typeof isStudent


// =========================
// EXERCÍCIO 3 - CONVERSÃO DE TIPOS
// =========================

// Crie uma variável chamada numberString (numeroString) com valor "100".
//

let  numberString = "100"

// Converta essa string para number

let convertedNumber = Number(numberString);
let backToString = convertedNumber.toString();

// e armazene em convertedNumber (numeroConvertido).
//
// Depois, converta de volta para string
// e armazene em backToString (numeroDeNovoString).



// =========================
// EXERCÍCIO 4 - OPERAÇÕES SIMPLES
// =========================

// Crie duas variáveis:
// firstNumber (primeiroNumero) = 8
let firstNumber = 8
// secondNumber (segundoNumero) = 4
let secondNumber = 4
//
// Crie variáveis com os resultados:
// sum (soma) → soma dos dois números
// subtraction (subtracao) → diferença entre os números
// multiplication (multiplicacao) → multiplicação
// division (divisao) → divisão

let sum = (firstNumber + secondNumber);
let subtraction = (firstNumber - secondNumber);
let multiplication = (firstNumber * secondNumber);
let division = (firstNumber / secondNumber);

// =========================
// EXERCÍCIO 5 - MONTANDO EXPRESSÃO 1
// =========================

// Crie uma variável chamada result1 (resultado1).

//
// Monte uma expressão que:
// 1. Some 10 com 5
// 2. Depois multiplique o resultado por 2
//
// IMPORTANTE:
// - Use parênteses para garantir que a soma aconteça primeiro


let result1 = ((10 + 5) * 2 ); 


// =========================
// EXERCÍCIO 6 - MONTANDO EXPRESSÃO 2
// =========================

// Crie uma variável chamada result2 (resultado2).
//
// Monte uma expressão que:
// 1. Multiplique 5 por 2
// 2. Depois some 10 ao resultado


let result2 = ((5 * 2) + 10);


// =========================
// EXERCÍCIO 7 - MONTANDO EXPRESSÃO 3
// =========================

// Crie uma variável chamada result3 (resultado3).
//
// Monte uma expressão que:
// 1. Divida 20 por 4
// 2. Multiplique 3 por 2
// 3. Some os resultados dessas duas operações
// 4. Subtraia 6 do resultado final
//


let result3 = ((20 / 4) + (3 * 2 ) - 6);


// =========================
// EXERCÍCIO 8 - EXPRESSÃO COMPLEXA
// =========================

// Crie uma variável chamada result4 (resultado4).
//
// Monte uma expressão que:
// 1. Some 10 com 2
// 2. Some 3 com 1
// 3. Multiplique os resultados dessas duas somas
// 4. Divida tudo por (2 + 2)
// 5. Depois some com o resultado de:
//    - multiplicar 5 por (2 + 3)
//

let result4 = ((((10 + 2) * (3 + 1)) / (2 + 2)) + (5 * (2 + 3)));


// =========================
// EXERCÍCIO 9 - OPERADORES COMPARATIVOS
// =========================

// Crie duas variáveis:
// x = 15
// y = 10
//
// Crie variáveis booleanas:
//
// isEqual (éIgual) → verificar se x é igual a y
// isDifferent (éDiferente) → verificar se x é diferente de y
// isGreater (éMaior) → verificar se x é maior que y
// isLess (éMenor) → verificar se x é menor que y
// isGreaterOrEqual (éMaiorOuIgual) → verificar se x é maior ou igual a y
// isLessOrEqual (éMenorOuIgual) → verificar se x é menor ou igual a y

let x = 15
let y = 10

let isEqual = (15 === 10);
let isDifferent = (15 !== 10);
let isGreater = (15 > 10);
let isLess = (15 < 10);
let isGreaterOrEqual = (15 >= 10);
let isLessOrEqual = (15 <= 10)

console.log(isEqual, isDifferent, isGreater, isLess, isGreaterOrEqual, isLessOrEqual)

// =========================
// EXERCÍCIO 10 - OPERADORES LÓGICOS
// =========================

// Crie duas variáveis:
// isAdult (éAdulto) = true
// hasLicense (temCarteira) = false
//

let isAdult = true
let hasLicense = false

// Crie:
//
// canDrive (podeDirigir)
// → deve ser verdadeiro apenas se a pessoa for adulta E tiver carteira
//
let canDrive = isAdult && hasLicense

// cannotDrive (naoPodeDirigir)
// → deve ser o contrário de canDrive
//
let cannotDrive = isAdult ?? hasLicense

// canEnterParty (podeEntrarFesta)
// → deve ser verdadeiro se a pessoa for adulta OU tiver carteira




// =========================
// EXERCÍCIO 11 - DESAFIO FINAL (TUDO JUNTO)
// =========================

// Crie uma variável chamada finalResult (resultadoFinal).
//
// Monte uma expressão que:
//
// PARTE 1:
// 1. Some 10 com 5
// 2. Multiplique por 2
// 3. Verifique se o resultado é maior que 20
//
let part1 = ((10 + 5) * 2) > 20 

// PARTE 2:
// 4. Divida 30 por 3
// 5. Verifique se o resultado é igual a 10
// 6. Multiplique 5 por 2
// 7. Verifique se esse resultado é menor que 9
// 8. Use OU (OR) entre as duas verificações acima
//
let part2 = ((30 / 3 ) === 10) || (( 5 * 2 ) < 9)


// PARTE FINAL:
// 9. Use E (AND) entre o resultado da PARTE 1 e da PARTE 2
//

FinalResult = (part1 && part2)

// IMPORTANTE:
// - Resolva na ordem correta
// - Use parênteses para garantir a lógica correta



