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
  constructor(private loginService: LoginService, private router: Router) { }



  public Logout():void{
    this.loginService.logout()
    this.router.navigate([""])
      
  }

  
  ngOnInit() {
    this.administrador = parseInt(localStorage.getItem('tipoCliente'))

  }

}
