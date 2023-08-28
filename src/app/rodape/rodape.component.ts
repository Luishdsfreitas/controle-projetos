import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {

  anoCorrente: number;

  constructor() {
    this.anoCorrente = new Date().getFullYear();
  }

}
