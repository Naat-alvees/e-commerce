import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProdutoService } from '../service/produto.service';
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
  public modalSalvar: BsModalRef;

  produtoForm: FormGroup;
  isLoadingResults = false;
  reader = new FileReader();
  arrayFotos: Array<Fotos>;
  fotos: Fotos;
  idProdutoFoto:number;

  constructor(private router: Router, private produtoService: ProdutoService, private formBuilder: FormBuilder,private modalService: BsModalService) { }

  ngOnInit() {
    this.produtoForm = this.formBuilder.group({
    'titulo' : [null, Validators.required],
    'descricao' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
    'preco' : [null, Validators.required],
    'qtdP' : [null, Validators.compose([Validators.required, Validators.min(1)])],
    'qtdM' : [null, Validators.compose([Validators.required, Validators.min(1)])],
    'qtdG' : [null, Validators.compose([Validators.required,  Validators.min(1)])],
    'categoria': [null, Validators.required],
    'fotos' : [null, Validators.required]
    });
  }

 addProduto(form: NgForm, template: TemplateRef<any>) {
  this.produtoService.addProduto(form).subscribe(res => {
    //console.log(res)
    this.modalSalvar = this.modalService.show(template, {class: 'modal-dialog-centered'});
    this.idProdutoFoto = Number(res)
    //console.log(this.idProdutoFoto)
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
  this.produtoForm.controls['qtdG'].setValue("");
  this.produtoForm.controls['qtdG'].setErrors(null);
  this.produtoForm.controls['categoria'].setValue(0);
  this.produtoForm.controls['categoria'].setErrors(null);
  this.produtoForm.controls['fotos'].setValue("");
  this.produtoForm.controls['fotos'].setErrors(null);
}

onFileChange(event) {
  this.arrayFotos  = new Array<Fotos>();
  console.log("Tamanho: ", event.target.files.length)
  if(event.target.files && event.target.files.length > 0) {
    for (let index = 0; index < event.target.files.length; index++) {
      let reader = new FileReader();
      let file = event.target.files[index];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fotos = new Fotos()
        this.fotos.foto = reader.result
        this.arrayFotos.push(this.fotos)
        console.log(this.arrayFotos)
      };
    }
    
  }
}

enviaFoto(){
  for (let i = 0; i < this.arrayFotos.length; i++) {
    this.arrayFotos[i].idproduto = this.idProdutoFoto
    this.produtoService.addFotos(this.arrayFotos[i]).subscribe(res => {
    //console.log(res)
    }, (err) => {
      console.log(err);
    });
  }
}

}
