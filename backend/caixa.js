// Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais. Considerando que alguém está pagando uma compra, escreva um algoritmo que mostre o número mínimo de notas que o caixa deve fornecer como troco. Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do troco. Suponha que o sistema monetário não utilize moedas. O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário.

function caixa (valor){
    let resto = valor%100
    let notasCem = (valor-resto)/100
    console.log(notasCem)
    let resto2 = resto%10
    let notaDez = (resto - resto2)/10
    console.log(notaDez)
    let notaUm = resto2
    console.log(notaUm)
}

caixa(668)