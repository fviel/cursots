export function registrarTempoExecucao(exibirEmSegundos: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        //guarda uma referência para o método original
        const metodoOriginal = descriptor.value;

        //agora sobrescreve o comportamento do método original, tratando a sua lista de argumentos
        descriptor.value = function (...args: any[]) {
            const t1 = performance.now();

            //executa o método original, recuperando o ponteiro do this e encaminhando o array de parâmetros
            const retorno = metodoOriginal.apply(this, args);

            const t2 = performance.now();

            if (exibirEmSegundos) {
                console.log(`${propertyKey} - tempo de execução: ${(t2 - t1) / 1000} segundos`);
            } else {
                console.log(`${propertyKey} - tempo de execução: ${(t2 - t1)} milisegundos`);
            }

            return retorno;
        };

        return descriptor;
    }
}

/*
target - Target pode ser a função contrutora de uma classe, e se estiver em uma método estático, será o prototype deste método
propertyKey - me dá o nome do método decorado em formato string
descriptor - tem referência pro método original

Esqueleto exempo de um decorator:
export function registrarTempoExecucao(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        return descriptor;
    }    
}
*/