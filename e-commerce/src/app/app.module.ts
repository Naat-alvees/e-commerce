import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';
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
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { AdmClienteComponent } from './adm-cliente/adm-cliente.component';
import { AdmProdutosComponent } from './adm-produtos/adm-produtos.component';

import {CdkTableModule} from '@angular/cdk/table';
import { MatFormFieldModule, MatTableModule, MatInputModule, MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SobreComponent } from './sobre/sobre.component';
import { FormsModule }   from '@angular/forms';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

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
    CarrinhoComponent,
    NovoProdutoComponent,
    AdmClienteComponent,
    FinalizarPedidoComponent,
    AdmProdutosComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkTableModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    ModalModule.forRoot(),
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/cliente']
      }
    }),
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
