import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; 
import { ProdutosComponent} from './produtos/produtos.component'
import { DescricaoProdutoComponent} from './descricao-produto/descricao-produto.component'
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { InformacoesClienteComponent } from './informacoes-cliente/informacoes-cliente.component';
import { EditarSenhaClienteComponent } from './editar-senha-cliente/editar-senha-cliente.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component'
import { AdmClienteComponent } from './adm-cliente/adm-cliente.component'
import { AdmProdutosComponent } from './adm-produtos/adm-produtos.component'
import { NovoProdutoComponent } from './novo-produto/novo-produto.component'
import { SobreComponent } from './sobre/sobre.component'
import { PesquisarComponent} from './pesquisar/pesquisar.component'



const routes: Routes = [
  {
    path:'carrinho',
    component: CarrinhoComponent
  },
  {
    path:'adm-cliente',
    component: AdmClienteComponent
  },
  {
    path:'produtos',
    component: ProdutosComponent
  },
  { 
    path: 'produtos/:categoria', 
    component: ProdutosComponent 
  },
  {
    path:'adm-produtos',
    component: AdmProdutosComponent
  },
  {
    path:'novo-produto',
    component: NovoProdutoComponent
  },
  {
    path:'sobre',
    component: SobreComponent
  },
  {
    path:'descricao-produto',
    component: DescricaoProdutoComponent
  },
  {
    path:'descricao-produto/:idproduto',
    component: DescricaoProdutoComponent
  },
  { 
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'informacoes-cliente',
    component: InformacoesClienteComponent
  },
  {
    path: 'editar-senha-cliente',
    component: EditarSenhaClienteComponent
  },
  {
    path: 'finalizar-pedido',
    component: FinalizarPedidoComponent
  },
  {
    path: 'pesquisar/:pesquisa',
    component: PesquisarComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }