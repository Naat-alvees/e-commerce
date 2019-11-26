import { Component, OnInit,TemplateRef} from '@angular/core';
import { ApiService} from '../service/cliente.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Cliente } from '../../model/cliente';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-informacoes-cliente',
  templateUrl: './informacoes-cliente.component.html',
  styleUrls: ['./informacoes-cliente.component.css']
})
export class InformacoesClienteComponent implements OnInit {
  cliente:any
  idCliente:number
  public modalEditar: BsModalRef;


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

  constructor(private apiService:ApiService,private modalService: BsModalService) { }

  ngOnInit() {
    this.cliente = JSON.parse(localStorage.getItem('cliente'))
    this.idCliente = this.cliente['idcliente']
    console.log(this.cliente['nome'])
  }

  openModalEditar(template: TemplateRef<any>) {
    this.modalEditar = this.modalService.show(template, {class: 'modal-dialog-centered'});
    this.preencheFormularioEditar()
  }

  preencheFormularioEditar(){
    console.log(this.cliente)
    
    // this.id_produtoAtual = produtoAtual.idproduto;
    // console.log(this.id_produtoAtual)
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
      console.log(res)
      this.apiService.getCliente(this.idCliente).subscribe(res => {
        console.log("|||||||||||||||||||||")
        console.log(res)
        localStorage.setItem('cliente',JSON.stringify(res))
        this.modalEditar.hide();
        this.ngOnInit()
      })
      
    }, (err) => {
      console.log(err);
    });
  }

}
