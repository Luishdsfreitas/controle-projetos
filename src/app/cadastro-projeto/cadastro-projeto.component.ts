import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projeto } from '../model/projeto';

import { NgForm } from '@angular/forms';
import { ProjetoService } from '../services/projeto.service';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css']
})
export class CadastroProjetoComponent {
  @ViewChild('form') form!: NgForm;

  @Input() projeto: Projeto;
  exibirMensagem = false;
  mostrarSalvar = false;

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private projetoService: ProjetoService) {
    this.projeto = new Projeto('', '', '', new Date(), new Date(), 0, 0);
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
      this.mostrarSalvar = true;
      this.isShowMessage = true;
      this.isSuccess = true;
      this.message = 'Erro ao realizar cadastro!';
    });
  }

  novoCadastro(){
    this.isShowMessage = false;
    this.isSuccess = false;
    this.mostrarSalvar = false;
    this.form.reset();
  }

  // constructor(private route: ActivatedRoute, private router: Router){}

  // @Input() mensagem: string = '';

  // mensagemOutput: string = '';

  // numero: number | undefined;

  // receberOutput(msg: string) {
  //   this.mensagemOutput = msg;
  // }

  // ngOnInit(){
  //   this.route.queryParams.subscribe((params) => {
  //     this.numero = (params['numero'])
  // });
  // }


}
