import { Component, OnInit, TemplateRef} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../service/cliente.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Cliente } from '../../model/cliente';
import { FormGroup, FormControl, Validators } from '@angular/forms';


export interface PeriodicElement {
    idcliente: number;
    nome: string;
    email: string;
    telefone: string;
    rua:string;
    numero: number;
    complemento:string;
    bairro:string;
    cidade:string;
    estado:string;
}

@Component({
  selector: 'app-adm-cliente',
  templateUrl: './adm-cliente.component.html',
  styleUrls: ['./adm-cliente.component.css']
})
export class AdmClienteComponent implements OnInit {

  public modalEditar: BsModalRef;
  public modalExcluir: BsModalRef;

  public administrador: boolean = true;
  public clientes: Cliente[];

  public id_clienteAtual: number;

  public formularioEditar: FormGroup = new FormGroup({
    'nome': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required]),
    'telefone': new FormControl(null, [Validators.required]),
    'rua': new FormControl(null, [Validators.required]),
    'numero': new FormControl(null, [Validators.required]),
    'complemento': new FormControl(null, [Validators.required]),
    'bairro': new FormControl(null, [Validators.required]),
    'cidade': new FormControl(null, [Validators.required]),
    'estado': new FormControl(null, [Validators.required]),
  });

  displayedColumns: string[] = ['idcliente', 'nome', 'email', 'telefone', 'cidade', 'estado', 'edit', 'delete'];
  dataSource =  new MatTableDataSource();

  constructor(private clienteService: ApiService,private modalService: BsModalService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(res => {
      console.log(res)
      this.dataSource.data = res;
    }, err => {
      console.log(err);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openModalEditar(template: TemplateRef<any>, clienteAtual: Cliente) {
    this.modalEditar = this.modalService.show(template, {class: 'modal-dialog-centered'});
    this.preencheFormularioEditar(clienteAtual)
  }

  openModalExcluir(template: TemplateRef<any>, clienteAtual: Cliente) {
    this.modalExcluir = this.modalService.show(template, {class: 'modal-dialog-centered'});
    this.id_clienteAtual = clienteAtual.idcliente;
  }

  preencheFormularioEditar(clienteAtual: Cliente){
    console.log(clienteAtual.idcliente)
    this.id_clienteAtual = clienteAtual.idcliente;
    console.log(this.id_clienteAtual)
    this.formularioEditar.patchValue({
      nome: clienteAtual.nome,
      email: clienteAtual.email,
      telefone: clienteAtual.telefone,
      rua: clienteAtual.rua,
      numero: clienteAtual.numero,
      complemento: clienteAtual.complemento,
      bairro: clienteAtual.bairro,
      cidade: clienteAtual.cidade,
      estado: clienteAtual.estado,
    });
  }
  
  editarCliente(template: TemplateRef<any>): void{
    this.clienteService.updateCliente(this.id_clienteAtual, this.formularioEditar.value).subscribe( res => {
      this.modalEditar.hide();
      this.modalEditar = this.modalService.show(template, {class: 'modal-dialog-centered'});
      this.carregaClientes();
    }, (err) => {
      console.log(err);
    });
  }

  excluirCliente(template: TemplateRef<any>):void{
    this.clienteService.deleteCliente(this.id_clienteAtual).subscribe( res => {
      this.modalExcluir.hide();
      this.modalExcluir = this.modalService.show(template, {class: 'modal-dialog-centered'});
      this.carregaClientes();
    }, (err) => {
      console.log(err);
    });
  }

  carregaClientes(){
    this.clienteService.getClientes().subscribe(res => {
      console.log(res)
      this.dataSource.data = res;
    }, err => {
      console.log(err);
    });
  }

}
