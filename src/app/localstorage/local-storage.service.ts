import { Injectable } from '@angular/core';
import { Projeto } from '../model/projeto';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  listaDeProjetos: Projeto[] = [];

  constructor() { }
  
  salvarProjeto(projeto: Projeto) {

    const listaSalva = localStorage.getItem('projetos');

    if (listaSalva) {
      this.listaDeProjetos = JSON.parse(listaSalva);
    }

    this.listaDeProjetos.push(projeto);

    localStorage.setItem('projetos', JSON.stringify(this.listaDeProjetos));
  }

}
