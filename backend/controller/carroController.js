const carro = require ('../entities/carro')
const db = require ('../database/veiculoDB')

function carroController(req, res){
    console.log("Cheguei")
    const {modelo, ano_de_fabricacao, marca, qtd_portas} = req.body
    const car = new carro(modelo, ano_de_fabricacao, marca, qtd_portas)
    db.carros.push(car)
    return res.json(car)
}

module.exports = carroController