import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  

  public categoria: String;
  public administrador: boolean = true;
  public modalEditar: BsModalRef;
  public modalExcluir: BsModalRef;
  public produtos: Produto[];


  constructor(private modalService: BsModalService, private apiService : ApiService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe((parametro: any) =>{
      this.categoria = parametro.categoria;
      this.apiService.getProdutosByCategoria(this.categoria).subscribe(res => {
        this.produtos = res;
      }, err => {
        console.log(err);
      });
  
    })
  }

  
  openModalEditar(template: TemplateRef<any>) {
    this.modalEditar = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

  openModalExcluir(template: TemplateRef<any>) {
    this.modalExcluir = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

  atualizaProdutos(){
    
  }
  

}
