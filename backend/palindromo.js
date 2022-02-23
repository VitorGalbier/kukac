function palindromo(inicial, final) {
    //primeiro array que terá todos os números
    let arr = []
    //array que estará filtrado
    var palindromoPronto = []

    //criando o array com os números passados pelo usuário
    for (inicial; inicial <= final; inicial++) {
        if (inicial > 10) {
            arr.push(inicial)
        }
    }

    //invertendo os elementos do array
    arr.map((el) => {
        //transformando em string e invertendo
        let numeroInvertido = el.toString().split('').reverse().join('')
        //comparando os elementos para criar o novo array
        if (el == numeroInvertido) {
            palindromoPronto.push(numeroInvertido)
        }
    }
    )
    console.log(palindromoPronto)
}

palindromo(1, 1000)