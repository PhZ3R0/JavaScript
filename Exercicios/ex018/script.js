let selvalue = document.getElementById('sel')
let numvalue = document.getElementById('num')
let number = Number(numvalue.value)   
let numberlist = []

function InList(n) {
    if (numberlist.indexOf(n) == -1) {
        return 'Não está na lista'
    }   else {
        return 'Está na lista'
    }
}
function IsValid(n) {
    if (n == 10) {
        return 'Número valido'
    }   else {
        return 'Número inválido'
    }
}
function AddNumber() {
    if (InList(number) == 'Não está na lista' && IsValid(number) == 'Número valido') {
        numberlist.push(number)
        selvalue.innerHTML += `<option>Valor ${numberlist} adicionado!</option>`
    }   else if (InList(number == 'Está na lista')) {
        alert('O número já está na lista')
    }   else if (IsValid(number) == 'Número inválido') {
        alert('Número invalido (deve ser entre 1 e 100)')
    }
}
