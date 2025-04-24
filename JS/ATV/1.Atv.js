
const verificarValor = (numero) => numero > 0 ? `Positivo` : `Negativo`

const valores = verificarValor(5)

console.log(valores)


//Vetor com 3 notas, e calcule a media 

const notas = [5, 7, 8]

console.log(`\n A media aritimetica é: `)
const soma = notas.reduce((soma, atual) => soma + atual, 0)
const media = soma / 3
console.log(`notas: ${notas}`)
console.log(media)
