let num = document.getElementById('num')
let lista = document.getElementById('sel')
let res = document.getElementById('res')
let valores = []

function isValid (n) {
    // o numero tem que estar entre 1 e 100
    if (n >= 1 && n <=100) {
        return true
    }   else {
        return false
    }
}
function inList(n) {
    if (valores.indexOf(n) == -1) {
        return 'Não está na lista'
    }   else {
        return 'Está na lista'
    }
}


function AddNumber() {
    if (isValid(num.value) == true  && inList(num.value) == 'Não está na lista') {
        valores.push(Number(num.value))
        lista.innerHTML += `<option> O valor ${num.value} foi adicionado! </option>`
        res.innerHTML = ''
    }   else if (isValid(num.value) == false) {
        alert('Valor inválido')
    }   else if (inList(num.value) == 'Está na lista') {
        alert('Valor já inserido na lista')
    }
    num.value=''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    }   else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores ) {
            soma += valores[pos]
            if (valores[pos] > valores[0]) {
                maior = valores[pos]
                if (valores[pos] < valores[0]) {
                    menor = valores[pos]
                }
            }   
        }
        media = soma/tot
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p> A média de todos os valores é ${media}`
        
    }
}
    

