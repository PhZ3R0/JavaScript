let num = [5,8,2,9,3]

console.log(`Nosso vetor é o ${num}`)
num.push(6)
console.log(`O valor ${num[3]} foi adicionado!`)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} unidades de tamanho`)

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)