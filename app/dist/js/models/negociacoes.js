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
    toString() {
        let resposta = "";
        for (let negociacao of this.negociacoes) {
            resposta = resposta + negociacao.toString;
        }
        return resposta;
    }
    imprimirComoTexto() {
        console.log(this.toString);
    }
    imprimirComoJson() {
        console.log(JSON.stringify(this, null, 2));
    }
    obterQuantidadeElementos() {
        return this.negociacoes.length;
    }
    ehIgual(negociacoes) {
        if (this.negociacoes.length === negociacoes.obterQuantidadeElementos()) {
            return true;
        }
        return false;
    }
}
