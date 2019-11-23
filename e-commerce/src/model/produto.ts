import { Fotos } from 'src/model/fotos';
export class Produto{
    _id: number;
    titulo: string;
    descricao: string;
    preco: string;
    qtdP: number;
    qtdM: number;
    qtdG: number;
    fotos: Fotos = new Fotos();
    categoria: string;
}