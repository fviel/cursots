import { Comparavel } from '../interfaces/comparavel.js';
import { Imprimivel } from '../interfaces/imprimivel.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes  implements Imprimivel, Comparavel<Negociacoes> {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
        console.log(`Adiconado o ${negociacao.data}`)
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public toString():string{
        let resposta = "";
        for(let negociacao of this.negociacoes){
            resposta = resposta + negociacao.toString;
        }
        return resposta;
    }

    public imprimirComoTexto(): void{
        console.log(this.toString);
    }

    public imprimirComoJson(): void{
        console.log(JSON.stringify(this, null,2));
    }

    public obterQuantidadeElementos() : number{
        return this.negociacoes.length;
    }

    /**
     * 
     * @param negociacoes Implementação jaguara, só pra ter uma comparação qualquer, sei que está falha
     * @returns 
     */
    public ehIgual(negociacoes:Negociacoes):boolean{
        if(this.negociacoes.length === negociacoes.obterQuantidadeElementos()){
            return true;
        }
        return false;
    }
}
