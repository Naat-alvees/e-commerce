import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  public pagamentoCartao: boolean = false;
  public pagamentoBoleto: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  public selectCartao() : void{
    console.log(this.pagamentoCartao)
    this.pagamentoCartao = true;
    this.pagamentoBoleto = false;
    console.log(this.pagamentoCartao)
  }

  public selectBoleto() : void{
    this.pagamentoCartao = false;
    this.pagamentoBoleto = true;
  }
}
