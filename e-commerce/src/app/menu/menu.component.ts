import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private administrador: number = 0;
  private islogged: boolean = false

  constructor(private loginService: LoginService, private router: Router) { }



  public Logout():void{
    this.loginService.logout()
    location.href = "http://localhost:4200/"
      
  }

  
  ngOnInit() {
    this.administrador = parseInt(localStorage.getItem('tipoCliente'))
    this.islogged = JSON.parse(localStorage.getItem('estaLogado'))
    console.log(this.islogged);
    

  }

}
