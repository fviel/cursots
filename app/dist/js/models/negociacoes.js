export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
        console.log(`Adiconado o ${negociacao.data}`);
    }
    lista() {
        return this.negociacoes;
    }
}
