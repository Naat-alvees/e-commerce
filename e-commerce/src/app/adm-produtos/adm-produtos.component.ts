import { Component, OnInit, TemplateRef } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ProdutoService } from '../service/produto.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Produto } from '../../model/produto';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface PeriodicElement {
  idproduto: number;
  titulo: string;
  descricao: string;
  preco: string;
  qtdP: number;
  qtdM: number;
  qtdG: number;
  categoria: string;
}

@Component({
  selector: 'app-adm-produtos',
  templateUrl: './adm-produtos.component.html',
  styleUrls: ['./adm-produtos.component.css']
})
export class AdmProdutosComponent implements OnInit {

  public modalEditar: BsModalRef;
  public modalExcluir: BsModalRef;

  public categoria: String;
  public administrador: boolean = true;
  public produtos: Produto[];

  public id_produtoAtual: number;

  public formularioEditar: FormGroup = new FormGroup({
    'titulo': new FormControl(null, [Validators.required]),
    'descricao': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(4)])),
    'preco': new FormControl(null, [Validators.required]),
    'qtdP': new FormControl(null, Validators.compose([Validators.required, Validators.min(1)])),
    'qtdM': new FormControl(null, Validators.compose([Validators.required, Validators.min(1)])),
    'qtdG': new FormControl(null, Validators.compose([Validators.required, Validators.min(1)])),
  });

  displayedColumns: string[] = ['idproduto', 'titulo', 'descricao', 'preco', 'qtdP', 'qtdM', 'qtdG', 'categoria', 'edit', 'delete'];
  dataSource =  new MatTableDataSource();

  constructor(private produtoService: ProdutoService,private modalService: BsModalService) { }

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(res => {
      console.log(res)
      this.dataSource.data = res;
    }, err => {
      console.log(err);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
    console.log(produtoAtual.idproduto)
    this.id_produtoAtual = produtoAtual.idproduto;
    console.log(this.id_produtoAtual)
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
    this.produtoService.updateProduto(this.id_produtoAtual, this.formularioEditar.value).subscribe( res => {
      this.modalEditar.hide();
      this.carregaProdutos();
    }, (err) => {
      console.log(err);
    });
  }

  excluirProduto():void{
    this.produtoService.deleteProduto(this.id_produtoAtual).subscribe( res => {
      this.modalExcluir.hide();
      this.carregaProdutos();
    }, (err) => {
      console.log(err);
    });
  }

  carregaProdutos(){
    this.produtoService.getProdutos().subscribe(res => {
      console.log(res)
      this.dataSource.data = res;
    }, err => {
      console.log(err);
    });
  }

}
