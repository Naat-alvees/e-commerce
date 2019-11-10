import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; 
import { FemininoComponent } from './feminino/feminino.component'
import { MasculinoComponent } from './masculino/masculino.component'
import { InfantilComponent } from './infantil/infantil.component'
import { EsporteFinoComponent } from './esporte-fino/esporte-fino.component'
import { EsporteComponent} from './esporte/esporte.component'
import { DescricaoProdutoComponent} from './descricao-produto/descricao-produto.component'
import { InformacoesClienteComponent } from './informacoes-cliente/informacoes-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { EditarSenhaClienteComponent } from './editar-senha-cliente/editar-senha-cliente.component';


const routes: Routes = [
  {
    path:'feminino',
    component: FemininoComponent
  },
  {
    path:'masculino',
    component: MasculinoComponent
  },
  {
    path:'infantil',
    component: InfantilComponent
  },
  {
    path:'esporte-fino',
    component: EsporteFinoComponent
  },
  {
    path:'esporte',
    component: EsporteComponent
  },
  {
    path:'descricao-produto',
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
    path: 'editar-cliente',
    component: EditarClienteComponent
  },
  {
    path: 'editar-senha-cliente',
    component: EditarSenhaClienteComponent
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
