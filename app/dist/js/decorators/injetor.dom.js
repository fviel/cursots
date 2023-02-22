export function injetorDom(seletor) {
    return function (target, key) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                console.log(`Buscando o elemento do DOM com o seletor ${seletor} para injetar em ${key}`);
                elemento = document.querySelector(seletor);
            }
            else {
                console.log(`Não precisei buscar ${seletor} no DOM, pois já está em memória`);
            }
            return elemento;
        };
        Object.defineProperty(target, key, {
            get: getter
        });
    };
}
