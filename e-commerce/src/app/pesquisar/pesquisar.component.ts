import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  pesquisa: string
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((parametro: any) =>{
      this.pesquisa = parametro.pesquisa;
      console.log("Pesquisar")
      console.log(this.pesquisa)
    })
    this.filtraPesquisa(this.pesquisa);
  }

  filtraPesquisa(pesquisa: string){
    //faz consulta no banco
  }

}
