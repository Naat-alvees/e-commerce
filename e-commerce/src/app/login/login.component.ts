import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from 'src/model/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: FormGroup = new FormGroup(
    {
      'email': new FormControl(""),
      'senha': new FormControl("")
    }
  )
  constructor(private loginService: LoginService, private router: Router) { }
  

  public tLogin(): void {
    this.loginService.login(this.login.value.email, this.login.value.senha).subscribe((cliente: Cliente) => {
        
      console.log(cliente)
      if (cliente === undefined) {
        
        this.loginService.isLogged = false
        alert("Falha ao realizar login!Email ou senha incorreta")
        return
      }else{
        this.loginService.cliente = cliente
        this.loginService.isLogged = true
        localStorage.setItem('cliente',JSON.stringify(cliente))
        localStorage.setItem('tipoCliente',cliente.administrador.toString())
        this.router.navigate([""])

      };
    }) 
  }

  
  

  ngOnInit() {
  }


}
