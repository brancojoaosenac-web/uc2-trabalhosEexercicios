// CRIE UM ARRAY
let raças = ["Dobermann", "Pitbull" , "Pastor Alemao", "Golden", "Fila"]

let ask = require("readline-sync")
let EscolhaDoUsuario = ask.question("Escolha um numero de 1 a 5:")

EscolhaDoUsuario = Number(EscolhaDoUsuario)

console.log(`Sua escolha foi: ${raças[EscolhaDoUsuario -1]}`)


// CRIE UM ARRAY //
let cores = ["azul", "branco", "preto", "amarelo", "verde", "marron"]
//  DETERMINE O TAMANHO DE UM ARRAY //
console.log (cores.length)
// ADICIONE MAIS UM ELEMENTO // 
cores.push("rosa")
// REMOVA OS NUMEROS 4 E 5 
cores.splice(3, 2)
// DETERMINE O NOVO TAMANHO DO ARRAY //
console.log(cores.length)
