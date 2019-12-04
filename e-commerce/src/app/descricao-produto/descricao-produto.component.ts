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

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService, private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    this.id_produto = this.route.snapshot.params['idproduto'];
    this.produto.tamanhoEscolhido = 'P'
    //Le o produto 
    this.produtoService.getProduto(this.id_produto).subscribe(res => {
      this.produto = res[0];
      console.log(this.produto)
      }, err => {
      console.log(err);
    });
  }

  addProdutoSacola(){
    if(JSON.parse(localStorage.getItem('estaLogado'))){
      //console.log(localStorage.getItem('idCliente'))
      let pedido: Pedido = new Pedido();
      pedido.idCliente = Number(localStorage.getItem('idCliente'));
      pedido.idProduto = this.id_produto;
      pedido.tamanho = this.produto.tamanhoEscolhido
      console.log(pedido)
      this.pedidoService.addProdutoSacola(pedido).subscribe(res => {
 
      }, (err) => {
        console.log(err);
      });
      this.router.navigate(['/carrinho'])
    }
    else{
      console.log("Não estou logado")
      this.router.navigate(['/login'])
    }
  }

  escolheTamanho(tamanho){
    this.produto.tamanhoEscolhido = tamanho;
  }

}
