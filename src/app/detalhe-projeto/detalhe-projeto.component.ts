import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-detalhe-projeto',
  templateUrl: './detalhe-projeto.component.html',
  styleUrls: ['./detalhe-projeto.component.css']
})
export class DetalheProjetoComponent {

  @Output() eventoOutput: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit() {
    this.eventoOutput.emit("mensagem output event emitter");
  }



}
