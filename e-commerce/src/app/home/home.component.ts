import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var teste = localStorage.getItem('cliente')
    console.log('teste',JSON.parse(teste))
    console.log(localStorage.getItem('tipoCliente'))
  }

}
