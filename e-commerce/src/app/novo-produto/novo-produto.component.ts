import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Produto } from 'src/model/produto';
import { Fotos } from 'src/model/fotos';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  produtoForm: FormGroup;
  isLoadingResults = false;
  reader = new FileReader();
  arrayFotos: Array<Fotos> = new Array<Fotos>();
  fotos: Fotos;
  idProdutoFoto:number;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.produtoForm = this.formBuilder.group({
    'titulo' : [null, Validators.required],
    'descricao' : [null, [Validators.required, Validators.minLength(4)]],
    'preco' : [null, Validators.required],
    'qtdP' : [null, [Validators.required, Validators.min(1)]],
    'qtdM' : [null, Validators.required],
    'qtdG' : [null, Validators.required],
    'categoria': [null, Validators.required]
    });
  }

 addProduto(form: NgForm) {
  this.api.addProduto(form).subscribe(res => {
    this.idProdutoFoto = Number(res)
    this.enviaFoto()
  }, (err) => {
    console.log(err);
  });
  this.produtoForm.controls['titulo'].setValue("");
  this.produtoForm.controls['titulo'].setErrors(null);
  this.produtoForm.controls['descricao'].setValue("");
  this.produtoForm.controls['descricao'].setErrors(null);
  this.produtoForm.controls['preco'].setValue(0);
  this.produtoForm.controls['preco'].setErrors(null);
  this.produtoForm.controls['qtdP'].setValue("");
  this.produtoForm.controls['qtdP'].setErrors(null);
  this.produtoForm.controls['qtdM'].setValue("");
  this.produtoForm.controls['qtdM'].setErrors(null);
  this.produtoForm.controls['qtdG'].setValue(0);
  this.produtoForm.controls['qtdG'].setErrors(null);
  this.produtoForm.controls['categoria'].setValue(0);
  this.produtoForm.controls['categoria'].setErrors(null);
}

onFileChange(event) {
  if(event.target.files && event.target.files.length > 0) {
    for (let index = 0; index < event.target.files.length; index++) {
      let reader = new FileReader();
      let file = event.target.files[index];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fotos = new Fotos()
        this.fotos.ft = reader.result
        this.arrayFotos.push(this.fotos)
      };
    }
    
  }
}

enviaFoto(){
  for (let i = 0; i < this.arrayFotos.length; i++) {
    this.arrayFotos[i].idproduto = this.idProdutoFoto
    this.api.addFotos(this.arrayFotos[i]).subscribe(res => {
    console.log(res)
    }, (err) => {
      console.log(err);
    });
  }
}
}
