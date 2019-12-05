import { Component, OnInit, TemplateRef} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PedidoService} from '../service/pedido.service';
import {Pedido} from '../../model/pedido';
import { ApiService } from '../service/cliente.service';

export interface PeriodicElement {
    idpedido: number;
    titulo: string;
    precoFinal: number;
    tamanho: number;
    quantidade:number;
    fotos: string;
}

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css']
})
export class ListarPedidosComponent implements OnInit {
  
  public pedidos: Pedido[];
  cliente:any
  public id_clienteAtual: number;

  displayedColumns: string[] = ['fotos','idpedido', 'titulo', 'precoFinal', 'tamanho', 'quantidade'];
  dataSource =  new MatTableDataSource();

  constructor(private clienteService: ApiService, private pedidoService: PedidoService) { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.id_clienteAtual = this.cliente['idcliente']
    this.pedidoService.listarPedidoFinalizado(this.id_clienteAtual).subscribe(res => {
      console.log(res[0])
      this.dataSource.data = res;
    }, err => {
      console.log(err);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
