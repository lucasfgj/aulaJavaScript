const listadeNumeros = [1, 2, 3, 4, 6, 8]

console.log(`Listando todos os valores da Lista`)
console.log(listadeNumeros)

console.log(`\nMultiplicando valores por 2.`)
const dobrados = listadeNumeros.map(n => n * 2)
console.log(dobrados)

console.log(`\n Filtrando elementos pares.`)
const pares = listadeNumeros.filter(n => n % 2 == 0)
console.log(pares)

console.log(`\n Somando todos os numeros da lista.`)
const soma = listadeNumeros.reduce((soma, atual) => soma + atual, 0)
console.log(soma)

