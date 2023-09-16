import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProjetoComponent } from './home-projeto/home-projeto.component';
import { CadastroProjetoComponent } from './cadastro-projeto/cadastro-projeto.component';
import { DetalheProjetoComponent } from './detalhe-projeto/detalhe-projeto.component';

const routes: Routes = [{path: '', component: HomeProjetoComponent},
                        {path: 'cadastro', component: CadastroProjetoComponent},
                        {path: 'editar/:id', component: CadastroProjetoComponent},
                        {path: 'detalhes/:id', component: DetalheProjetoComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
