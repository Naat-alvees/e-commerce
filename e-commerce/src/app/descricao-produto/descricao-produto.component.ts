import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from 'src/model/produto';

@Component({
  selector: 'app-descricao-produto',
  templateUrl: './descricao-produto.component.html',
  styleUrls: ['./descricao-produto.component.css']
})
export class DescricaoProdutoComponent implements OnInit {

  public id_produto: number;
  public produto: Produto = new Produto();

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit() {
    this.id_produto = this.route.snapshot.params['idproduto'];
    
    //Le o produto 
    this.produtoService.getProduto(this.id_produto).subscribe(res => {
      this.produto = res[0];
      console.log(this.produto)
      }, err => {
      console.log(err);
    });
  }

}
