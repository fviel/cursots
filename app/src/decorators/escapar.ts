export function escapar(
    target: any,
    key: String,
    descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: any[]) {

            //minha tentativa fazendo o replane no args, mas o professor fez o replace no retorno
            //args = args.map(itemArgs => {
            //    itemArgs = itemArgs.replace(/<script>[\s\S]*?<\/script>/, '');
            //});

            let retorno = descriptor.value.apply(this, args);
            if (typeof retorno === 'string') {
                retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
            }
            return retorno;
        }
    return descriptor;
}