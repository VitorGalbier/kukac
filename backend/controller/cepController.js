const cepService = require('../service/cepService')

const cepController = async (req, res) => {
    const {str} = req.body;
    const result = await cepService(str)
    return res.send(result);}

module.exports = cepController