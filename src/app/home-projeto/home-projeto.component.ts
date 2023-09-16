import { Component } from '@angular/core';
import { ProjetoService } from '../services/projeto.service';
import { Projeto } from '../model/projeto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-projeto',
  templateUrl: './home-projeto.component.html',
  styleUrls: ['./home-projeto.component.css']
})
export class HomeProjetoComponent {

  projetos: Projeto[] = [];
  erro: string = '';
  tabelaVisivel: boolean = false;

  constructor(private projetoService: ProjetoService, private router: Router){}


  ngOnInit() {
    this.carregarProjetos(); 
  }

  deletarProjeto(id: string){
    const confirmacao = window.confirm('Deseja excluir o item?');
    if (confirmacao) {
      this.projetoService.deletarProjeto(id).subscribe(
        () => {
          alert(`Projeto com ID ${id} excluído com sucesso.`);
          this.carregarProjetos();
        },
        error => {
          alert(`Erro ao deletar projeto com ID ${id}.`);
        }
      );
    }
  }  

  carregarProjetos(): void {
    this.projetoService.getTodosProjetos()
    .subscribe(
      (projetos) => {
        this.projetos = projetos;
        this.tabelaVisivel = projetos.length > 0;
      },
      (error) => {
        alert(error);
      }
    );
  }

  editarProjeto(projeto: Projeto) {
    this.router.navigate(['/editar', projeto.id]);
  }

}
