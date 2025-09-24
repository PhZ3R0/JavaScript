var idade = 90
if (idade < 16 ) {
    console.log('Não Vota')
}   else {
    if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto Opcional')
    } else {
        console.log('Vota obrigatoriamente')
    }
}