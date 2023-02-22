import { injetorDom } from '../decorators/injetor.dom.js';
import { inpecionar } from '../decorators/inspecionar.js';
import { registrarTempoExecucao } from '../decorators/registrar.tempo.execucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { NegociacaoDoDia } from '../interfaces/negociacao.do.dia.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesServices } from '../services/negociacoes.services.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
    @injetorDom('#data')
    private inputData: HTMLInputElement;
    @injetorDom('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @injetorDom('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    //private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesServices = new NegociacoesServices();

    constructor() {
        //Comentados, pois os atributos viraram um getter via decorator
        //this.inputData = <HTMLInputElement>document.querySelector('#data');
        //this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        //this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @registrarTempoExecucao(true)
    @inpecionar()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        negociacao.imprimirComoJson();
        this.atualizaView();
        this.limparFormulario()
    }

    //@registrarTempoExecucao()
    @inpecionar()
    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }

    @registrarTempoExecucao()
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    @registrarTempoExecucao()
    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

    /**
     * Chama a camada de serviços
     */
    public importarDados(): void {
        this.negociacoesServices
            .obterNegociacoes()
            //neste ponto, ts converte o array dados:any[] para negociacoesDeHoje:Negociacao[] devido ao return
            .then(negociacoesDeHoje => {
                //para cada elemento do array, adiciona a negociação
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
                //atualiza a minha view
                this.negociacoesView.update(this.negociacoes);
            });
    }
}
