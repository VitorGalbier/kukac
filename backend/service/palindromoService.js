function palindromo(inicial, final) {
    //primeiro array que terá todos os números
    let arr = []
    //array que estará filtrado
    var palindromoPronto = []

    if(inicial >= final){
        console.log("Os valores digitados não são válidos")
    }else{
        //criando o array com os números passados pelo usuário
        for (inicial; inicial <= final; inicial++) {
            if (inicial > 10) {
                arr.push(inicial)
            }
        }
        arr.map((el) => {
            //transformando em string e invertendo
            let numeroInvertido = el.toString().split('').reverse().join('')
            //comparando os elementos para criar o novo array
            if (el == numeroInvertido) {
                palindromoPronto.push(numeroInvertido)
            }
            return palindromoPronto
        }
        )
    }

    //invertendo os elementos do array
    console.log(palindromoPronto)
}