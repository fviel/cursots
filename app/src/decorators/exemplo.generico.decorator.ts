export function exemploGeralDecorator(){
    return function(
    target: any,
    key: String,
    descriptor: PropertyDescriptor){

            const metodoOriginal = descriptor.value;

            descriptor.value = function(... args:Array<any>){

                //executa o método decorado com seus params
                const retorno = metodoOriginal.apply(this, args);
                return retorno;
            }


            return descriptor;
    };
}