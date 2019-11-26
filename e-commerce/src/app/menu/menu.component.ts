import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private administrador: number = 0;
  private islogged: boolean = false;

  pesquisar: string;

  public pesquisarForm: FormGroup = new FormGroup({
    'pesquisar': new FormControl(null, [Validators.required])
  });

  constructor(private loginService: LoginService, private router: Router , private formBuilder: FormBuilder) { }



  public Logout():void{
    this.loginService.logout()
    location.href = "http://localhost:4200/"
      
  }
  
  ngOnInit() {
    this.administrador = parseInt(localStorage.getItem('tipoCliente'))
    this.islogged = JSON.parse(localStorage.getItem('estaLogado'))
    console.log(this.islogged);
  }

  addProduto(form: NgForm):void{
    this.pesquisar = form['pesquisar'];
    this.router.navigate(['/pesquisar', this.pesquisar]);
  }

}
