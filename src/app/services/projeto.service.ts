import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Projeto } from '../model/projeto';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
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


  getTodosProjetos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.baseUrl).pipe(
      catchError((error) => {
        console.error('Erro ao buscar projetos:', error);
        return throwError(
          'Ocorreu um erro ao buscar projetos. Por favor, tente novamente mais tarde.'
        );
      })
    );
  }

  atualizarProjeto(projeto: Projeto): Observable<Projeto> {
    const url = `${this.baseUrl}/${projeto.id}`;

    return this.http.put<Projeto>(url, projeto)
    .pipe(
      catchError((error) => {
        console.error('Erro ao atualizar projeto:', error);
        return throwError(
          'Ocorreu um erro ao atualizar o projeto. Por favor, tente novamente mais tarde.'
        );
      })
    );
  }

  buscarDetalhesProjetoPorId(id: string): Observable<Projeto[]> {
    const query: HttpParams = new HttpParams().set('id', id);
    const options = id ? {params: query} : {};
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Projeto[]>(this.baseUrl, options).pipe(
      catchError((error) => {
        console.error('Erro ao buscar projetos:', error);
        return throwError(
          'Ocorreu um erro ao buscar detalhe. Por favor, tente novamente mais tarde.'
        );
      })
    );
  }

  deletarProjeto(id: string): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError((error) => {
        console.error('Erro ao deletar projeto:', error);
        return throwError(
          'Ocorreu um erro ao deletar projeto. Por favor, tente novamente mais tarde.'
        );
      })
    );
  }

}
