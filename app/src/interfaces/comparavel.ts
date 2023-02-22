import { Negociacao } from "../models/negociacao";

export interface Comparavel<T>{
    ehIgual(objeto :T ):boolean;
}