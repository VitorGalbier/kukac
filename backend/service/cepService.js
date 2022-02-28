const axios = require('axios')


async function cepService(str) {
    try {
        const array = str.map(async (element) => {
            const { data } = await axios.get(`https://viacep.com.br/ws/${element}/json/`)
            return data
        });
        const result = await Promise.all(array)
        return result;
    }
    catch (erro) {
        console.log(erro)
    }
}

module.exports = cepService