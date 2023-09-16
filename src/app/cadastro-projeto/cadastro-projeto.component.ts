import {
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projeto } from '../model/projeto';

import { NgForm } from '@angular/forms';
import { ProjetoService } from '../services/projeto.service';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css'],
})
export class CadastroProjetoComponent {
  @ViewChild('form') form!: NgForm;
  @Input() projeto: Projeto;
  id: string | undefined;

  exibirMensagem = false;
  mostrarSalvar = false;

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private route: ActivatedRoute,
    private projetoService: ProjetoService
  ) {
    this.projeto = new Projeto('', '', '', new Date(), new Date(), 0, 0);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.projetoService
          .buscarDetalhesProjetoPorId(this.id)
          .subscribe((data) => {
            this.projeto = data[0];
          });
      }
    });
  }

  validarDataAnterior(): boolean {
    const currentDate = new Date();
    const selectedDate = new Date(this.projeto.previsaoDataInicial);
    return selectedDate < currentDate;
  }

  validarDataFinal(): boolean {
    const currentDate = new Date(this.projeto.previsaoDataInicial);
    const selectedDate = new Date(this.projeto.previsaoDataFinal);
    return selectedDate <= currentDate;
  }

  salvarProjeto() {
    if (!this.projeto.id) {
      this.salvarProjetoService();
    } else {
      this.atualizarProjetoService();
    }
  }

  salvarProjetoService() {
    this.projetoService
      .salvarProjeto(this.projeto)
      .then(() => {
        this.mostrarSalvar = true;
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = 'Cadastro realizado com sucesso!';
      })
      .catch((error) => {
        console.error('Erro ao salvar projeto', error);
        this.mostrarSalvar = false;
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = 'Erro ao realizar cadastro!';
      });
  }

  atualizarProjetoService() {
    this.projetoService
      .atualizarProjeto(this.projeto)
      .subscribe(() => {
        this.mostrarSalvar = true;
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = 'Cadastro atualizado com sucesso!';
      },
      (error) => {
        console.error('Erro ao atualizar projeto', error);
        this.mostrarSalvar = false;
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = 'Erro ao atualizar cadastro!';
      });
  }

  novoCadastro() {
    this.isShowMessage = false;
    this.isSuccess = false;
    this.mostrarSalvar = false;
    this.form.reset();
  }
}
