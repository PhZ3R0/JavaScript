var number = document.getElementById('num')
var tab = document.getElementById('tabuada')
function CriarTabuada() {
    var ConvertedNumber = Number(number.value)
    tab.innerHTML = ``
    if (number.value.length == 0) {
        alert('Numero inválido!')
        tab.innerHTML = '<option>Digite um numero acima!</option>'
    }   else {
        for (let c=0; c <= 10;c++) {
            tab.innerHTML += `<option>${ConvertedNumber} x ${c} = ${ConvertedNumber*c}</option>`
        }
    }
}