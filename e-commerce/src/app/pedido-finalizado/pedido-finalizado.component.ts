import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-finalizado',
  templateUrl: './pedido-finalizado.component.html',
  styleUrls: ['./pedido-finalizado.component.css']
})
export class PedidoFinalizadoComponent implements OnInit {

  private mensagem: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.mensagem = this.route.snapshot.params['mensagem'];
  }

}
