import { Fotos } from 'src/model/fotos';
export class Produto{
    idproduto: number;
    titulo: string;
    descricao: string;
    preco: number;
    qtdP: number;
    qtdM: number;
    qtdG: number;
    fotos: Array<Fotos> = new Array<Fotos>();
    fotoPrincipal: Fotos;
    categoria: string;
    quantidadeEscolhida: number = 1;
    tamanhoEscolhido: string;
}