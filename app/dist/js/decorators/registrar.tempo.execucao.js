export function registrarTempoExecucao(exibirEmSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            if (exibirEmSegundos) {
                console.log(`${propertyKey} - tempo de execução: ${(t2 - t1) / 1000} segundos`);
            }
            else {
                console.log(`${propertyKey} - tempo de execução: ${(t2 - t1)} milisegundos`);
            }
            return retorno;
        };
        return descriptor;
    };
}
