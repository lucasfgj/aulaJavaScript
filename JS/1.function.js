function somar(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function multiplicacao(a , b){
    return a * b
}

function divisao(a , b){
    return a / b
}

function restoDivisao(a, b){
    return a % b
}

const soma = somar(2, 3)
const subtracao = subtrair(2,5)
const multiplicar = multiplicacao(2, 5)
const dividir = divisao( 10, 2)
const restoDividir = restoDivisao(5, 2)


console.log(`Soma ${soma}`)
console.log(`Subtração ${subtracao}`)
console.log(`Multiplicação ${multiplicar}`)
console.log(`Divisão ${dividir}`)
console.log(`Resto da Divisão ${restoDividir}`)


