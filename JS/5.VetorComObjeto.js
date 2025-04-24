//Vetor com Objetos
const usuarios = [
    {nome: 'Marta', idade: 25},
    {nome: 'Maria', idade: 50},
    {nome: 'Marcos', idade: 33},
    {nome: 'Marcola', idade: 13}
]
//Função Lambida.
// percorrer vetor
usuarios.forEach((usuarios) => 
    console.log(`Nome: ${usuarios.nome} tem ${usuarios.idade}.`))

//Filtrando por idade menor que 18 anos.
console.log(`\n Filtrando por idade menor que 18 anos.`)
const menorIdade = usuarios.filter((usuarios) => usuarios.idade < 18)

menorIdade.forEach((usuarios) => 
    console.log(`Nome: ${usuarios.nome} tem ${usuarios.idade}`))


console.log(`\nRetornando apenas Nomes da lista.`)
const listaNomes = usuarios.map(u => u.nome)
listaNomes.forEach((nome) => 
    console.log(`Nome: ${nome}.`))

console.log(`\nRetornando apenas Nomes da lista numerada.`)
const listaNumeradaNomes = usuarios.map(u => u.nome)
listaNomes.forEach((nome, index) => 
    console.log(`${++index}: Nome: ${nome}.`))


const usuarioEncontrado = usuarios.find(u => u.nome === 'Marta')
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`)

console.log(`\n Somando todas as idades na lista`)
const somaIdades = usuarios.reduce((total, u) => total + u.idade, 0)
console.log(`soma: ${somaIdades}`)
