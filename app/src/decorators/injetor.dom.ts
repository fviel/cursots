export function injetorDom(seletor: string) {
    return function (
        target: any,
        key: string) {

        //Busca o elemento do DOM com base no seletor
        const getter = function () {
            //vou sobrescrever esse geter no prototype da classe
            const elemento = document.querySelector(seletor);
            console.log(`Buscando o elemento do DOM com o seletor ${seletor} para injetar em ${key}`);
            return elemento;
        }

        //sobrescreve o meu recém criado método getter no método get da classe alvo
        Object.defineProperty(target, key, {
            get: getter
        });

    };
}