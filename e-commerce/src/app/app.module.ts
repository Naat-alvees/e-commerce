import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { MenuCategoriasComponent } from './menu-categorias/menu-categorias.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { InformacoesClienteComponent } from './informacoes-cliente/informacoes-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { EditarSenhaClienteComponent } from './editar-senha-cliente/editar-senha-cliente.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DescricaoProdutoComponent } from './descricao-produto/descricao-produto.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AppComponent,
    LoginComponent,
    MenuCategoriasComponent,
    CadastroComponent,
    HomeComponent,
    ProdutosComponent,
    DescricaoProdutoComponent,
    InformacoesClienteComponent,
    EditarClienteComponent,
    EditarSenhaClienteComponent,
    RodapeComponent ,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
