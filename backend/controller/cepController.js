const cepService = require('../service/cepService')

const cepController = async (req, res) => {
    const {str} = req.body;
    const result = await cepService(str)
    console.log("Cheguei aqui")
    return res.send(result);}

module.exports = cepController