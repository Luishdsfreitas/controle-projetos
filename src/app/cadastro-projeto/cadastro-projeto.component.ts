import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projeto } from '../model/projeto';
import { LocalStorageService } from '../localstorage/local-storage.service';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css']
})
export class CadastroProjetoComponent {

  projeto: Projeto;
  exibirMensagem = false;

  constructor(private localStorage: LocalStorageService) {
    this.projeto = new Projeto('', '', new Date(), new Date(), 0, 0);
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
    console.log('Projeto a ser salvo:', this.projeto);
    this.localStorage.salvarProjeto(this.projeto);
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
