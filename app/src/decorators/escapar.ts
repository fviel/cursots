export function escapar(
    target: any,
    key: String,
    descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Modificando o prototype ${target.constructor.name} e adicionando getter para a proptiedade ${key}`)
        //Na linha abaixo não pode usar descriptor.value, caso contrário irá gerar um loop infinito que irá exceder a pilha de chamadas
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        //console.log(`Decorator escapar: retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    }
    return descriptor;
}

/*
    Exemplo de map:
            minha tentativa fazendo o replane no args, mas o professor fez o replace no retorno
            args = args.map(itemArgs => {
                itemArgs = itemArgs.replace(/<script>[\s\S]*?<\/script>/, '');
            });
*/