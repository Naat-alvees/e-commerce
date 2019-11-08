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
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
