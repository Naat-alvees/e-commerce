import { Component, OnInit,TemplateRef} from '@angular/core';
import { ApiService} from '../service/cliente.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Cliente } from '../../model/cliente';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-informacoes-cliente',
  templateUrl: './informacoes-cliente.component.html',
  styleUrls: ['./informacoes-cliente.component.css']
})
export class InformacoesClienteComponent implements OnInit {
  cliente:any
  idCliente:number
  idClienteAtual:number
  

  public modalEditar: BsModalRef;
  public modalExcluir: BsModalRef;


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

  constructor(private loginService: LoginService,private apiService:ApiService,private modalService: BsModalService) { }

  ngOnInit() {
    
    this.cliente = JSON.parse(localStorage.getItem('cliente'))
    this.idCliente = this.cliente['idcliente']
  }

  openModalEditar(template: TemplateRef<any>) {
    this.modalEditar = this.modalService.show(template, {class: 'modal-dialog-centered'});
    this.preencheFormularioEditar()
  }

  openModalExcluirConta(template: TemplateRef<any>) {
    this.modalExcluir = this.modalService.show(template, {class: 'modal-dialog-centered'});
    this.idClienteAtual = this.cliente['idcliente']
  }

  preencheFormularioEditar(){

    this.formularioEditar.patchValue({
      nome: this.cliente['nome'],
      email: this.cliente['email'],
      telefone: this.cliente['telefone'],
      rua: this.cliente['rua'],
      numero: this.cliente['numero'],
      complemento: this.cliente['complemento'],
      bairro: this.cliente['bairro'],
      cidade: this.cliente['cidade'],
      estado: this.cliente['estado'],
    });
  }


  editarCliente(): void{
    this.apiService.updateCliente(this.idCliente, this.formularioEditar.value).subscribe( res => {
      this.apiService.getCliente(this.idCliente).subscribe(res => {
        localStorage.setItem('cliente',JSON.stringify(res[0]))
        this.modalEditar.hide()
        this.ngOnInit()
      })
      
    }, (err) => {
      console.log(err);
    });
  }

  excluirConta(): void{
    this.apiService.deleteCliente(this.idClienteAtual).subscribe(res =>{
      this.modalExcluir.hide()
      localStorage.setItem('estaLogado',JSON.stringify(false))
      this.Logout()
    }, (err) => {
      console.log(err);
    });

  }

  Logout():void{
    this.loginService.logout()
    location.href = "http://localhost:4200/"
      
  }

}
