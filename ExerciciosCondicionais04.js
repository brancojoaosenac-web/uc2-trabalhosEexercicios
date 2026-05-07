const ask = require('readline-sync');

let pokemonUm = ask.question('Escolha um pokemon incial: ');

function pokemonInicial(POKEMON) {
    switch (POKEMON.toLowerCase()) {
        case 'bulbassauro':
            console.log('Tipo: Planta Veneno')
            break
        case 'charmander':
            console.log('Tipo: Fogo')
            break
        case 'squirtle':
            console.log('Tipo: Água')
            break
        default:
            console.log('Pokemon não encontrado')
            break
    }

}

pokemonInicial(pokemonUm)