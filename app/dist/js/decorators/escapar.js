export function escapar(target, key, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        console.log(`Decorator escapar: retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
