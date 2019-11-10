import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-esporte',
  templateUrl: './esporte.component.html',
  styleUrls: ['./esporte.component.css']
})
export class EsporteComponent implements OnInit {

  public administrador: boolean = true;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
