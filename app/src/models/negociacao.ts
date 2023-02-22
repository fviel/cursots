import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../interfaces/imprimivel.js";

export class Negociacao implements Imprimivel, Comparavel<Negociacao>{
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {
        //se herdei, precisa chamar o construtor da super
        //super();
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public toString():string{
        return `Data: ${this.data},
                Quantidade: ${this.quantidade},
                Valor:${this.valor}`
    }

    public imprimirComoTexto(): void{
        console.log(this.toString);
    }

    public imprimirComoJson(): void{
        console.log(JSON.stringify(this, null,2));
    }

    public ehIgual(negociacao:Negociacao):boolean{
        if(this.data.getDay() === negociacao.data.getDay() 
        && this.data.getMonth() === negociacao.data.getMonth() 
        && this.data.getFullYear() === negociacao.data.getFullYear()
        && this.valor == negociacao.valor
        && this.quantidade == negociacao.quantidade){
            return true;
        }
        return false;
    }
}