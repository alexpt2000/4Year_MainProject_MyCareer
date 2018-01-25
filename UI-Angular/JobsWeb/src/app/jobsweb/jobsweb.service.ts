import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

export class JobswebFilter {
  title: string;
  page = 0;
  itensPage = 20;
}

@Injectable()
export class JobswebService {

  apiUrl = 'http://localhost:8080';
  // http://localhost:8080/alertsweb

  constructor(private http: Http) { }

  search(filter: JobswebFilter): Promise<any> {
    const params = new URLSearchParams();
    // const headers = new Headers();

    // headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    params.set('page', filter.page.toString());
    params.set('size', filter.itensPage.toString());

    if (filter.title) {
      params.set('title', filter.title);
    }

    return this.http.get(`${this.apiUrl}/jobsweb`, { search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const jobsweb = responseJson.content;

        const result = {
          jobsweb,
          total: responseJson.totalElements
        };

        return result;
      })
  }

  addAlert(email: any): Promise<any> {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post(`${this.apiUrl}/alertsweb`, JSON.stringify(email), { headers })
      .toPromise()
      .then(response => response.json());
  }

}
