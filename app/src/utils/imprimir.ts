
import { Imprimivel } from "./imprimivel.js";

/**
 *  Imprimo qualquer objeto que herde de Imprimivel
 * @param objetos - objetos que herdam de Imprimivel
 */
export function imprimir(...objetos:Array<Imprimivel>){
    for(let objeto of objetos){
        console.log(objeto.toString());
    }
}