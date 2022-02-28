const caixaService = require('../service/caixaService')

const caixaController = (req, res) => {
    return res.json(caixaService(req.body.valorProduto, req.body.dinheiro));}

module.exports = caixaController;