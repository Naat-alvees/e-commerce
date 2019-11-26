export class Produto{
    idproduto: number;
    titulo: string;
    descricao: string;
    preco: string;
    qtdP: number;
    qtdM: number;
    qtdG: number;
    fotos: Array<Fotos> = new Array<Fotos>();
    categoria: string;
}