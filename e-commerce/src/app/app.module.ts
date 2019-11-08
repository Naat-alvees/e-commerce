import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { MenuCategoriasComponent } from './menu-categorias/menu-categorias.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { FemininoComponent } from './feminino/feminino.component';
import { MasculinoComponent } from './masculino/masculino.component';
import { InfantilComponent } from './infantil/infantil.component';
import { EsporteFinoComponent } from './esporte-fino/esporte-fino.component';
import { EsporteComponent } from './esporte/esporte.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AppComponent,
    LoginComponent,
    MenuCategoriasComponent,
    CadastroComponent,
    HomeComponent,
    FemininoComponent,
    MasculinoComponent,
    InfantilComponent,
    EsporteFinoComponent,
    EsporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
