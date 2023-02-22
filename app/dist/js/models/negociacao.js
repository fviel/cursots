export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    toString() {
        return `Data: ${this.data},
                Quantidade: ${this.quantidade},
                Valor:${this.valor}`;
    }
    imprimirComoTexto() {
        console.log(this.toString);
    }
    imprimirComoJson() {
        console.log(JSON.stringify(this, null, 2));
    }
    ehIgual(negociacao) {
        if (this.data.getDay() === negociacao.data.getDay()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear()
            && this.valor == negociacao.valor
            && this.quantidade == negociacao.quantidade) {
            return true;
        }
        return false;
    }
}
