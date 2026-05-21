const filme = {
    nome: 'coracoes de ferro',
    elenco:['Brad Pitt', 'Cristina Wolfe', 'Logan Lerman', 'Alicia Von Rittberg'],
    Lancamento: 2014,
    Assistido: true,
}

filme.personagens = ['Iron man', 'Tirulipa', 'Hulk Magrelo', 'Mendigata']

console.log(`
    Ator: ${filme.elenco[0]} interpreta: ${filme.personagens[0]}   
    Ator: ${filme.elenco[1]} interpreta: ${filme.personagens[1]}
    Ator: ${filme.elenco[2]} interpreta: ${filme.personagens[2]}    
    Ator: ${filme.elenco[3]} interpreta: ${filme.personagens[3]}
`)

filme.elenco[0] = 'xuxa'

console.log(filme)

//console.log(filme.nome, filme['elenco'])
//console.log(filme['elenco'])

