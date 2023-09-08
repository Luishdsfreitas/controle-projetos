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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProjetoService } from './services/projeto.service';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [ProjetoService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
