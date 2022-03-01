function caixaService (valorProduto, dinheiro){

        let valor = dinheiro -valorProduto
        let resto = valor%100
        let notasCem = (valor-resto)/100
        let resto2 = resto%10
        let notaDez = (resto - resto2)/10
        let notaUm = resto2
        return "foram " + notasCem + " notas de cem, " +
        notaDez + " notas de dez, " + notaUm + " notas de um."
}

module.exports = caixaService