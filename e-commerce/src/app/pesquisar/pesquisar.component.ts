import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  pesquisa: string
  public produtos: Produto[];
  quantidadeProdutos: number

  constructor(private route: ActivatedRoute, private produtoService : ProdutoService) { }

  ngOnInit() {
    this.route.params.subscribe((parametro: any) =>{
      this.pesquisa = parametro.pesquisa;
      console.log("Pesquisar")
      console.log(this.pesquisa)
      this.filtraPesquisa(this.pesquisa);
    })
    
  }

  filtraPesquisa(pesquisa: string){
    this.produtoService.getProdutosFiltro(pesquisa).subscribe( res => {
      this.produtos = res
      this.quantidadeProdutos = this.produtos.length
      console.log(this.produtos)
    }, (err) => {
      console.log(err);
    });
  }

}
