import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public administrador: boolean = true;
  public modalEditar: BsModalRef;
  public modalExcluir: BsModalRef;


  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    
  }
  openModalEditar(template: TemplateRef<any>) {
    this.modalEditar = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

  openModalExcluir(template: TemplateRef<any>) {
    this.modalExcluir = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

}
