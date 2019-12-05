import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Produto } from 'src/model/produto';
import { Router } from '@angular/router';
import { Pedido } from 'src/model/pedido';
import {PedidoService} from '../service/pedido.service'

@Component({
  selector: 'app-descricao-produto',
  templateUrl: './descricao-produto.component.html',
  styleUrls: ['./descricao-produto.component.css']
})
export class DescricaoProdutoComponent implements OnInit {

  public id_produto: number;
  public produto: Produto = new Produto();
  public tamEscolhido: string;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService, private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    this.id_produto = this.route.snapshot.params['idproduto'];
    this.tamEscolhido = "P"
    //Le o produto 
    this.produtoService.getProduto(this.id_produto).subscribe(res => {
      this.produto = res[0];
      this.produtoService.getFotosProduto(this.id_produto).subscribe(res => {
        this.produto.fotos = res;
        console.log(this.produto.fotos)
        }, err => {
        console.log(err);
      });

      }, err => {
      console.log(err);
    });
  }

  addProdutoSacola(){
    console.log(this.produto)
    if(JSON.parse(localStorage.getItem('estaLogado'))){
      let pedido: Pedido = new Pedido();
      pedido.idCliente = Number(localStorage.getItem('idCliente'));
      pedido.idProduto = this.id_produto;
      pedido.tamanho = this.tamEscolhido
      console.log(pedido)
      this.pedidoService.addProdutoSacola(pedido).subscribe(res => {
        this.router.navigate(['/carrinho'])
      }, (err) => {
        console.log(err);
      });
      
    }
    else{
      console.log("Não estou logado")
      this.router.navigate(['/login'])
    }
  }

  escolheTamanho(tamanho){
    this.tamEscolhido = tamanho;
  }

}
