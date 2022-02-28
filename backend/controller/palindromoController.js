const palindromo = require ('../service/palindromoService')

const palindromoController = (req, res) => {
    return res.json(palindromo(req.body.inicial, req.body.final));}

module.exports = palindromoController