import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes-cliente',
  templateUrl: './informacoes-cliente.component.html',
  styleUrls: ['./informacoes-cliente.component.css']
})
export class InformacoesClienteComponent implements OnInit {
  cliente:any
  constructor() { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('cliente'))
  }

}
