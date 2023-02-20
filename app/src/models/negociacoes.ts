import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
        console.log(`Adiconado o ${negociacao.data}`)
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
