import { Component, OnInit } from '@angular/core';
import {PedidoService} from '../service/pedido.service'
import {Produto} from '../../model/produto'
import {Pedido} from '../../model/pedido'
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private produtos: Produto[];
  private quantidadeProduto: number;
  private soma: number;

  constructor(private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    this.soma = 0;
    this.quantidadeProduto = 0;
    this.pedidoService.getProdutosSacola(Number(localStorage.getItem('idCliente'))).subscribe(res => {
      this.produtos = res;
      
      for (let index = 0; index < this.produtos.length; index++) {
        this.produtos[index].quantidadeEscolhida = 1;
        this.quantidadeProduto++;
        this.soma += this.produtos[index].preco;
      }
      console.log(this.produtos)
      
    }, (err) => {
      console.log(err);
    });
  }

  excluirProdutoSacola(produto: Produto){
    console.log(produto)
    let pedido: Pedido = new Pedido();
      pedido.idCliente = Number(localStorage.getItem('idCliente'));
      pedido.idProduto = produto.idproduto;
      this.pedidoService.removeProdutoSacola(pedido).subscribe(res => {
        this.ngOnInit()
      }, (err) => {
        console.log(err);
      });
  }

  escolheTamanho(tamanho,produto: Produto){
    produto.tamanhoEscolhido = tamanho;
    console.log(this.produtos)
  }

  aumentaQuantidade(produto: Produto){
    let qntMaxima = 0
    if(produto.tamanhoEscolhido == 'P'){
      qntMaxima = produto.qtdP
    } else if( produto.tamanhoEscolhido == 'M'){
      qntMaxima = produto.qtdM
    } else if( produto.tamanhoEscolhido == 'G'){
      qntMaxima = produto.qtdG
    }

    if(!((produto.quantidadeEscolhida+1) > qntMaxima)){
        produto.quantidadeEscolhida++;
        this.quantidadeProduto++;
        this.soma += produto.preco;
    }
      
  }

  diminuiQuantidade(produto: Produto){
    if(!(produto.quantidadeEscolhida-1 < 1)){
      produto.quantidadeEscolhida--;
      this.quantidadeProduto--;
      this.soma -= produto.preco;
    }
    
  }


continuarPedido(){
  for (let index = 0; index < this.produtos.length; index++) {
    let pedido:Pedido = new Pedido();
    pedido.idCliente = Number(localStorage.getItem('idCliente'));
    pedido.idProduto = this.produtos[index].idproduto;
    pedido.quantidade = this.produtos[index].quantidadeEscolhida;
    pedido.tamanho = this.produtos[index].tamanhoEscolhido;
    this.pedidoService.atualizarQuantidadeProdutos(pedido).subscribe(res => {
      this.router.navigate(['/finalizar-pedido'])
    }, (err) => {
      console.log(err);
    });
    
  }
}

}
