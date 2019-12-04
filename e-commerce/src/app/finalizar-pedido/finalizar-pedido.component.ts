import { Component, OnInit } from '@angular/core';
import {PedidoService} from '../service/pedido.service'
import {Produto} from '../../model/produto'
import { Cliente } from 'src/model/cliente';
import { Pedido } from '../../model/pedido'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  public pagamentoCartao: boolean = false;
  public pagamentoBoleto: boolean = false;
  public soma:number;
  private produtos: Produto[];
  private cliente: Cliente;
  private pedidoFinalizado: Pedido = new Pedido();
  private escolhaFormaPagamento:boolean= false;

  public formularioPagamentoCartao: FormGroup = new FormGroup({
    'numeroCartao': new FormControl(null, [Validators.required]),
    'nome': new FormControl(null, [Validators.required]),
    'validade': new FormControl(null, [Validators.required]),
    'codigoSeg': new FormControl(null, [Validators.required]),
  });

  constructor(private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.soma = 0;
    this.pedidoService.getProdutosSacola(Number(localStorage.getItem('idCliente'))).subscribe(res => {
      this.produtos = res;
      
      for (let index = 0; index < this.produtos.length; index++) {
        this.soma += this.produtos[index].preco * this.produtos[index].quantidadeEscolhida;
      }
      console.log(this.produtos)
      
    }, (err) => {
      console.log(err);
    });
  }
  
  public selectCartao() : void{
    console.log(this.pagamentoCartao)
    this.pagamentoCartao = true;
    this.pagamentoBoleto = false;
    this.escolhaFormaPagamento = true;
    console.log(this.pagamentoCartao)
  }

  public selectBoleto() : void{
    this.pagamentoCartao = false;
    this.pagamentoBoleto = true;
    this.escolhaFormaPagamento = true;
  }

  finalizarPedido(){
    this.pedidoFinalizado.idCliente = this.cliente.idcliente
    if(this.pagamentoCartao){
      this.pedidoFinalizado.formaPagamento = "C";
      this.pedidoFinalizado.nomeCartao = this.formularioPagamentoCartao.value['nome'];
      this.pedidoFinalizado.numeroCartao = this.formularioPagamentoCartao.value['numeroCartao'];
      this.pedidoFinalizado.vencimento = this.formularioPagamentoCartao.value['validade'];
      this.pedidoFinalizado.codSeguranca = this.formularioPagamentoCartao.value['codigoSeg'];
    }else{
      this.pedidoFinalizado.formaPagamento = "B";
    }
    console.log(this.pedidoFinalizado)
    this.pedidoService.finalizarPedido(this.pedidoFinalizado).subscribe(res => {
      this.router.navigate(['/pedido-finalizado', 'Sucesso']);
    }, (err) => {
      console.log(err);
      this.router.navigate(['/pedido-finalizado', 'Erro']);
    });
   
  }
}
