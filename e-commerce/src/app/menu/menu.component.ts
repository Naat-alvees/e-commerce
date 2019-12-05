import { Component, OnInit} from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators,FormControl} from '@angular/forms';
import { ApiService } from '../service/cliente.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private administrador: number = 0;
  private islogged: boolean = false;
  private nome: string;
  private htmlStr : string;
  private idCliente: number;

  pesquisar: string;
  
  public pesquisarForm: FormGroup = new FormGroup({
    'pesquisar': new FormControl(null, [Validators.required])
  });

  constructor(private loginService: LoginService, private apiService:ApiService,private router: Router , private formBuilder: FormBuilder) { }



  public Logout():void{
    this.loginService.logout()
    location.href = "http://localhost:4200/"
      
  }
  
  ngOnInit() {
    this.administrador = parseInt(localStorage.getItem('tipoCliente'))
    this.islogged = JSON.parse(localStorage.getItem('estaLogado'))
    
    if(this.islogged == true){

      this.nome = JSON.parse(localStorage.getItem('cliente'))
      this.idCliente = this.nome['idcliente']
      var nomeAtualizado = this.nome['nome'].split(" ");
      this.htmlStr = "<div *ngIf = 'islogged'> Olá " + nomeAtualizado[0] + "</div>"
      //this.exibirNome();
    }
  }

  addProduto(form: NgForm):void{
    this.pesquisar = form['pesquisar'];
    this.router.navigate(['/pesquisar', this.pesquisar]);
  }

  // exibirNome(): void{
  //     this.apiService.getCliente(this.idCliente).subscribe(res => {
  //     localStorage.setItem('cliente',JSON.stringify(res[0]))
  //     var nomeAtualizado = this.nome['nome'].split(" ");
  //     this.htmlStr = "<div *ngIf = 'islogged'> Olá " + nomeAtualizado[0] + "</div>"
  //     this.ngOnInit()
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
}
