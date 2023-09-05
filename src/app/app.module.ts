import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CadastroProjetoComponent } from './cadastro-projeto/cadastro-projeto.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeProjetoComponent } from './home-projeto/home-projeto.component';
import { DetalheProjetoComponent } from './detalhe-projeto/detalhe-projeto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    CabecalhoComponent,
    CadastroProjetoComponent,
    HomeProjetoComponent,
    DetalheProjetoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
