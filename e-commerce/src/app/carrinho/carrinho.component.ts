import { Component, OnInit } from '@angular/core';
import {PedidoService} from '../service/pedido.service'
import {Produto} from '../../model/produto'
import {Pedido} from '../../model/pedido'

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private produtos: Produto[];
  private quantidadeProduto: number;
  private soma: number;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.getProdutosSacola(Number(localStorage.getItem('idCliente'))).subscribe(res => {
      this.produtos = res;
      //this.quantidadeProduto = this.produtos.length
      //console.log(this.produtos[0].data)
      console.log(this.produtos)
    }, (err) => {
      console.log(err);
    });
  }

  excluirProdutoSacola(produto: Produto){
    let pedido: Pedido = new Pedido();
      pedido.idCliente = Number(localStorage.getItem('idCliente'));
      pedido.idProduto = produto.idproduto;
      this.pedidoService.removeProdutoSacola(pedido).subscribe(res => {
        this.ngOnInit()
      }, (err) => {
        console.log(err);
      });
  }

  calculaPrecoTotal(){
    
  }

  escolheTamanho(tamanho,produto: Produto){
    produto.tamanhoEscolhido = tamanho;
    console.log(this.produtos)
  }

  aumentaQuantidade(produto: Produto){
    produto.quantidaEscolhida++;
  }

  diminuiQuantidade(produto: Produto){

  }


}
