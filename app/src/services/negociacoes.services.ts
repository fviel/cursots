import { NegociacaoDoDia } from "../interfaces/negociacao.do.dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesServices {


    public obterNegociacoes(): Promise<Negociacao[]> {
        //[{"montante":200.5,"vezes":2},{"montante":100.2,"vezes":5},{"montante":50.5,"vezes":1},{"montante":70.5,"vezes":2}]
        /*
            Usando a API fetch que já está globalmente disponível no navegador
            Fetch é uma API assíncrona, por isso preciso usar promisses
        */
        return fetch('http://localhost:8080/dados')
            .then(res => {
                //converte a resposta em uma promisse de objeto JSON
                return res.json();
            })
            //mapeia essa resposta em um array do tipo any, pois são os elementos do JSON
            //.then((dados:any[]) =>{
            //mas posso fazer melhor: Criar uma interface NegociacaoDoDia e assim garantir que ela será respeitada
            .then((dados: NegociacaoDoDia[]) => {
                return dados.map(dadoDeHoje => {
                    //return dados.map(dadoDeHoje : any => {
                    return new Negociacao(
                        new Date(), //observe na resposta dos erviço que ele não responde a data, então eu a insiro
                        dadoDeHoje.vezes as number,
                        dadoDeHoje.montante as number);
                });
            });
    }
}