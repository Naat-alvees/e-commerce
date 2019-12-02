import { Component, OnInit, TemplateRef} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';


export interface PeriodicElement {
    idpedido: number;
    titulo: string;
    preco: number;
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
  
  displayedColumns: string[] = ['idpedido', 'titulo', 'preco', 'tamanho', 'quantidade', 'fotos'];
  dataSource =  new MatTableDataSource();

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
