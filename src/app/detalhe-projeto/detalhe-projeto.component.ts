import { Component, EventEmitter, Output } from '@angular/core';
import { Projeto } from '../model/projeto';
import { ActivatedRoute } from '@angular/router';
import { ProjetoService } from '../services/projeto.service';

@Component({
  selector: 'app-detalhe-projeto',
  templateUrl: './detalhe-projeto.component.html',
  styleUrls: ['./detalhe-projeto.component.css']
})
export class DetalheProjetoComponent {

  projeto:Projeto | undefined;
  id: string | undefined;

  constructor(private projetoService: ProjetoService, private route: ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.projetoService.buscarDetalhesProjetoPorId(this.id)
          .subscribe((data) => {
            this.projeto = data[0];
          });
      }
    });
  }

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