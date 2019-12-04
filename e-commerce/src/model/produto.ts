import { Fotos } from 'src/model/fotos';
export class Produto{
    idproduto: number;
    titulo: string;
    descricao: string;
    preco: string;
    qtdP: number;
    qtdM: number;
    qtdG: number;
    fotos: Array<Fotos>;
    categoria: string;
    quantidaEscolhida: number = 1;
    tamanhoEscolhido: string;
}