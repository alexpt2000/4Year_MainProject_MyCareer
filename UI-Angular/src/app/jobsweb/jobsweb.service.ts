import { URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';
import { Pessoa } from './../core/model';

export class JobswebFilter {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class JobswebService {

  apiUrl: string;

  constructor(private http: AuthHttp) {
    this.apiUrl = `${environment.apiUrl}/jobsweb`;
  }

  pesquisar(filtro: JobswebFilter): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.apiUrl}`, { search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const jobsweb = responseJson.content;

        const resultado = {
          jobsweb,
          total: responseJson.totalElements
        };

        return resultado;
      })
  }

  listarTodas(): Promise<any> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().content);
  }

  // excluir(codigo: number): Promise<void> {
  //   return this.http.delete(`${this.apiUrl}/${codigo}`)
  //     .toPromise()
  //     .then(() => null);
  // }

  // mudarStatus(codigo: number, ativo: boolean): Promise<void> {
  //   return this.http.put(`${this.apiUrl}/${codigo}/ativo`, ativo)
  //     .toPromise()
  //     .then(() => null);
  // }

  // adicionar(pessoa: Pessoa): Promise<Pessoa> {
  //   return this.http.post(this.apiUrl, JSON.stringify(pessoa))
  //     .toPromise()
  //     .then(response => response.json());
  // }

  // atualizar(pessoa: Pessoa): Promise<Pessoa> {
  //   return this.http.put(`${this.apiUrl}/${pessoa.codigo}`,
  //       JSON.stringify(pessoa))
  //     .toPromise()
  //     .then(response => response.json() as Pessoa);
  // }

  // buscarPorCodigo(codigo: number): Promise<Pessoa> {
  //   return this.http.get(`${this.apiUrl}/${codigo}`)
  //     .toPromise()
  //     .then(response => response.json() as Pessoa);
  // }

}
