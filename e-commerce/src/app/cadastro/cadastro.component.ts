import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'; 
import { ApiService } from '../service/cliente.service'; 
import { Cliente } from 'src/model/cliente'; 
 
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit { 
  public phoneModel = ''
  public mask = ['(', /[1-9]/, /\d/, ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  
  clienteForm: FormGroup; 
  isLoadingResults = false; 
     
constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder){ } 

ngOnInit() { 
    this.clienteForm = this.formBuilder.group({ 
    'nome' : [null, Validators.required], 
    'email' : [null, Validators.email], 
    'telefone' : [null, Validators.required], 
    'rua' : [null,Validators.required], 
    'numero' : [null,Validators.required], 
    'complemento' : [null], 
    'bairro' : [null,Validators.required], 
    'cidade' : [null,Validators.required], 
    'estado' : [null,Validators.required], 
    'senha' : [null,Validators.required] 
  }); 
} 

addCliente(form: NgForm)  
{ 
  this.api.addCliente(form).subscribe(res => { 
      console.log(form); 
      }, (err) => { 
        console.log(err); 
      }); 
      this.clienteForm.controls['nome'].setValue(""); 
      this.clienteForm.controls['nome'].setErrors(null); 
      this.clienteForm.controls['email'].setValue(""); 
      this.clienteForm.controls['email'].setErrors(null); 
      this.clienteForm.controls['telefone'].setValue(""); 
      this.clienteForm.controls['telefone'].setErrors(null); 
      this.clienteForm.controls['rua'].setValue(""); 
      this.clienteForm.controls['rua'].setErrors(null); 
      this.clienteForm.controls['numero'].setValue(""); 
      this.clienteForm.controls['numero'].setErrors(null); 
      this.clienteForm.controls['complemento'].setValue(""); 
      this.clienteForm.controls['complemento'].setErrors(null); 
      this.clienteForm.controls['bairro'].setValue(""); 
      this.clienteForm.controls['bairro'].setErrors(null); 
      this.clienteForm.controls['cidade'].setValue(""); 
      this.clienteForm.controls['cidade'].setErrors(null); 
      this.clienteForm.controls['estado'].setValue(""); 
      this.clienteForm.controls['estado'].setErrors(null); 
      this.clienteForm.controls['senha'].setValue(""); 
      this.clienteForm.controls['senha'].setErrors(null); 
  } 
} 
