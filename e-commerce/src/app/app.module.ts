import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { EditarSenhaClienteComponent } from './editar-senha-cliente/editar-senha-cliente.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DescricaoProdutoComponent } from './descricao-produto/descricao-produto.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { AdmClienteComponent } from './adm-cliente/adm-cliente.component';
import { AdmProdutosComponent } from './adm-produtos/adm-produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';


import {CdkTableModule} from '@angular/cdk/table';
import { MatFormFieldModule, MatTableModule, MatInputModule, MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SobreComponent } from './sobre/sobre.component';
import { LoginService } from './service/login.service';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { PedidoFinalizadoComponent } from './pedido-finalizado/pedido-finalizado.component';


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
    EditarSenhaClienteComponent,
    RodapeComponent ,
    CarrinhoComponent,
    NovoProdutoComponent,
    AdmClienteComponent,
    FinalizarPedidoComponent,
    AdmProdutosComponent,
    SobreComponent,
    PesquisarComponent,
    ListarPedidosComponent,
    PedidoFinalizadoComponent
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
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    TextMaskModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
