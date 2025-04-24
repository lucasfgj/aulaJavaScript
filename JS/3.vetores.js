const listaNomes = ['Marta', 'jose', 'Maria']
console.log(listaNomes)

console.log('\n Exibindo o primeiro elemento:')
console.log(listaNomes[0])

console.log('\n Exibindo o segundo elemento:')
console.log(listaNomes[1])

console.log('\n Exibindo o terceiro elemento:')
console.log(listaNomes[2])

console.log('\n Adicionar elemento ao vetor:')
listaNomes.push('Marilia')
console.log(listaNomes)

console.log('\n Adicionar elemento ao vetor:')
listaNomes.push('Michele')
console.log(listaNomes)

console.log('\n Adicionar elemento ao vetor:')
listaNomes.push('Isabella')
console.log(listaNomes)

console.log('\n Removendo um elemento especifico:')
listaNomes.splice(2,1)
console.log(listaNomes)

console.log('\n Removendo um elemento especifico:')
listaNomes.shift()
console.log(listaNomes)

console.log('\n Removendo um elemento especifico:')
listaNomes.pop()
console.log(listaNomes)

