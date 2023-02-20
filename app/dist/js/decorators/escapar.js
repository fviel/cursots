export function escapar(target, key, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = descriptor.value.apply(this, args);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
