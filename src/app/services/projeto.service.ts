import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projeto } from '../model/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private baseUrl = 'http://localhost:3000/projetos';

  constructor(private http: HttpClient) {} 



  async salvarProjeto(projeto: Projeto): Promise<Projeto> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projeto),
    });
    if (!response.ok) {
      throw new Error('Erro ao salvar projeto');
    }
    return await response.json();
  }

  // private handleError(error: any): Promise<any> {
  //   console.error('Ocorreu um erro:', error);
  //   return Promise.reject(error.message || error);
  // }
}
