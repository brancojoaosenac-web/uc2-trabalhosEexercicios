function VerificarFaculdade(ensinoMedioConcluido,idade,CursandoOutraFaculdade) {

if (!ensinoMedioConcluido) {

console.log("Não pode estudar na faculdade");

} else if (idade < 18) {

console.log("Não pode estudar na faculdade");

} else if (CursandoOutraFaculdade) {

console.log("Não pode estudar na faculdade");

} else {

console.log("Pode estudar na faculdade");

}
}

let ensinoMedioConcluido = true;
let idade = 20;
let CursandoOutraFaculdade = false;

VerificarFaculdade(ensinoMedioConcluido, idade, CursandoOutraFaculdade)