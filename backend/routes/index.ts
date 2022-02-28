const Router = require('express')
const palindromoController = require('../controller/palindromoController')
const caixaController = require('../controller/caixaController')
const cepController = require('../controller/cepController')
const carroController = require('../controller/carroController')
const motoController = require ('../controller/motoController')
const router = Router(); 

router.post('/palindromo', palindromoController)
router.post('/caixa', caixaController)
router.post('/cep', cepController)
router.post('/carro', carroController)
router.post('/moto', motoController)

module.exports = router