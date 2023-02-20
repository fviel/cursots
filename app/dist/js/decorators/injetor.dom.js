export function injetorDom(seletor) {
    return function (target, key) {
        const getter = function () {
            const elemento = document.querySelector(seletor);
            console.log(`Buscando o elemento do DOM com o seletor ${seletor} para injetar em ${key}`);
            return elemento;
        };
        Object.defineProperty(target, key, {
            get: getter
        });
    };
}
