import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();

const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}


//-----------------------------------------------------
//-- Exemplo de integração com um botão bootstrap
//-----------------------------------------------------

const botaoImportar = document.querySelector('#botao-importar');
if (botaoImportar) {
    //Como não trabalharei com event nem this, posso usar arrow function
    botaoImportar.addEventListener('click', () =>{
        controller.importarDados();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o botão importar existe.');
}
