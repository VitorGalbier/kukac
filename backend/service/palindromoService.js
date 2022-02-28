function palindromoService(inicial, final) {
    let arr = []
    let palindromoPronto = []

    if(inicial >= final){
        return "Os valores digitados não são válidos"
    }else{
        for (inicial; inicial <= final; inicial++) {
            if (inicial > 10) {
                arr.push(inicial)
            }
        }
        arr.map((el) => {
            let numeroInvertido = el.toString().split('').reverse().join('')
            if (el == numeroInvertido) {
                palindromoPronto.push(numeroInvertido)
            }
        }
        )
    }
    return palindromoPronto
}

module.exports = palindromoService
