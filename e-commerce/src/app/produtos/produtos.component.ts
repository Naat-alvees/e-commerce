import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Produto } from '../../model/produto';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  public modalEditar: BsModalRef;
  public modalExcluir: BsModalRef;

  public categoria: String;
  public administrador: boolean = true;
  public produtos: Produto[];

  public id_produtoAtual: number;

  public formularioEditar: FormGroup = new FormGroup({
    'titulo': new FormControl(null, [Validators.required]),
    'descricao': new FormControl(null, [Validators.required]),
    'preco': new FormControl(null, [Validators.required]),
    'qtdP': new FormControl(null, [Validators.required]),
    'qtdM': new FormControl(null, [Validators.required]),
    'qtdG': new FormControl(null, [Validators.required]),
  });

  constructor(private modalService: BsModalService, private apiService : ApiService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe((parametro: any) =>{
      this.categoria = parametro.categoria;
      this.carregaProdutos();
    })
    
  }
  
  openModalEditar(template: TemplateRef<any>, produtoAtual: Produto) {
    this.modalEditar = this.modalService.show(template, {class: 'modal-dialog-centered'});
    this.preencheFormularioEditar(produtoAtual)
  }

  openModalExcluir(template: TemplateRef<any>, produtoAtual: Produto) {
    this.modalExcluir = this.modalService.show(template, {class: 'modal-dialog-centered'});
    this.id_produtoAtual = produtoAtual.idproduto;
  }

  preencheFormularioEditar(produtoAtual: Produto){
    this.id_produtoAtual = produtoAtual.idproduto;
    this.formularioEditar.patchValue({
      titulo: produtoAtual.titulo,
      descricao: produtoAtual.descricao,
      preco: produtoAtual.preco,
      qtdP: produtoAtual.qtdP,
      qtdM: produtoAtual.qtdM,
      qtdG: produtoAtual.qtdG,
    });
  }
  
  editarProduto(): void{
    this.apiService.updateProduto(this.id_produtoAtual, this.formularioEditar.value).subscribe( res => {
      this.carregaProdutos();
      this.modalEditar.hide();
    }, (err) => {
      console.log(err);
    });
  }

  excluirProduto():void{
    this.apiService.deleteProduto(this.id_produtoAtual).subscribe( res => {
      this.modalExcluir.hide();
      this.carregaProdutos();
    }, (err) => {
      console.log(err);
    });
  }

  carregaProdutos(){
    this.apiService.getProdutosByCategoria(this.categoria).subscribe(res => {
      this.produtos = res;
    }, err => {
      console.log(err);
    });
  }
}
