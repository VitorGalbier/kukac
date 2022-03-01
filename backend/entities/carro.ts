interface Veiculo{
    modelo : string;
    ano_de_fabricacao : number;
    marca : string;
}

class Carro implements Veiculo {
    modelo: string;
    ano_de_fabricacao: number;
    marca: string;
    qtd_portas: number

    constructor(modelo: string, ano_de_fabricacao: number, marca: string, qtd_portas: number) {
            this.modelo = modelo;
            this.ano_de_fabricacao = ano_de_fabricacao;
            this.marca = marca;
            this.qtd_portas = qtd_portas;
    }
}

module.exports = Carro
