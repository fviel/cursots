//Essa função externa serve apenas para eu poder passar parâmetros para o meu decorator
//mas ela não é essencial, pois o que preciso mesmo seria somente a função anônima abaixo

//se eu não mais for passar essa função, eu usaria o decorator como @inpecionar, ou seja, sem o () ao final
export function inpecionar(){ 
    //função anônima que de fato executa o código do decorator
    return function(
    target: any,
    key: String,
    descriptor: PropertyDescriptor){

            const metodoOriginal = descriptor.value;

            descriptor.value = function(... args:Array<any>){

                console.log(`*** Nome método: ${key}`);
                console.log(`****** Parâmetros: ${JSON.stringify(args)}`);

                const retorno = metodoOriginal.apply(this, args);

                console.log(`****** Retorno: ${JSON.stringify(retorno)}`);
                return retorno;
            }


            return descriptor;
    };
}