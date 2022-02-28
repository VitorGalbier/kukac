interface Veiculo{
    modelo : string;
    ano_de_fabricacao : number;
    marca : string;
}

class Moto implements Veiculo{
    modelo: string;
    ano_de_fabricacao: number;
    marca: string;
    qtd_passageiros: number;

    constructor(modelo: string, ano_de_fabricacao: number, marca: string, qtd_passageiros: number) {
            this.modelo = modelo;
            this.ano_de_fabricacao = ano_de_fabricacao;
            this.marca = marca;
            this.qtd_passageiros = qtd_passageiros;
    }
}

module.exports = Moto