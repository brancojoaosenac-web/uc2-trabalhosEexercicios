

const ask = require('readline-sync');


let nome = ask.question("Qual seu nome?")
let idade = Number(ask.question("Qual sua idade?"))
let cidade = ask.question("Qual sua cidade natal?")
let hobbie1 = ask.question("Digite dseu primeiro hobby: ");
let hobbie2 = ask.question("Digite dois hobbies separados por virgula: ");


let user1 = criarUsuario(nome, idade, cidade, [hobbie1, hobbie2])

console.clear()
console.log(user1)

let hobbiesDoUser1 = formatarHobbies(user1[3]) 

console.log(hobbiesDoUser1)

