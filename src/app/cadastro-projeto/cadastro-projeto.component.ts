import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css']
})
export class CadastroProjetoComponent {

  constructor(private route: ActivatedRoute, private router: Router){}

  @Input() mensagem: string = '';

  mensagemOutput: string = '';

  receberOutput(msg: string) {
    this.mensagemOutput = msg;
  }

  ngOnInit(){
    this.route.queryParams.subscribe((params) => {
      console.log(params['numero'])
  });
  }


}
