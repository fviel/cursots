/**
 * Este é um decorator que preenche o valor de um atributo, criando um método getter para ele
 * @param seletor nome do componente do DOM a ser passado como atributo
 * @returns 
 */

export function injetorDom(seletor: string) {
    return function (
        target: any,
        key: string) {

        let elemento: HTMLElement;

        //Busca o elemento do DOM com base no seletor
        const getter = function () {
            //é tipo uym cache, pra num ficar buscando elemento o tempo todo, se já definido, então ok
            if (!elemento) {
                console.log(`Buscando o elemento do DOM com o seletor ${seletor} para injetar em ${key}`);
                //vou sobrescrever esse geter no prototype da classe
                elemento = document.querySelector(seletor) as HTMLElement;                
            }else{
                console.log(`Não precisei buscar ${seletor} no DOM, pois já está em memória`)
            }

            //vou sobrescrever esse geter no prototype da classe
            //const elemento = document.querySelector(seletor);
            
            return elemento;
        }

        //sobrescreve o meu recém criado método getter no método get da classe alvo
        Object.defineProperty(target, key, {
            get: getter
        });

    };
}