import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProjetoComponent } from './home-projeto/home-projeto.component';
import { CadastroProjetoComponent } from './cadastro-projeto/cadastro-projeto.component';

const routes: Routes = [{path: '', component: HomeProjetoComponent},
                        {path: 'cadastro', component: CadastroProjetoComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
