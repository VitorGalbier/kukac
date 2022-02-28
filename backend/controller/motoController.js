const moto = require ('../entities/moto')
const db = require ('../database/veiculoDB')

function motoController(req, res){

    const {modelo, ano_de_fabricacao, marca, qtd_passageiros} = req.body
    const bike = new moto(modelo, ano_de_fabricacao, marca, qtd_passageiros)
    db.moto.push(bike)
    return res.json(bike)
}

module.exports = motoController