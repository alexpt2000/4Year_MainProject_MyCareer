import { Jobs } from './../applicant/model';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobswebService {

  apiUrl = 'http://localhost:8080';
  // http://localhost:8080/alertsweb

  constructor(private http: Http) { }

  loadJobs(): Promise<any> {
    return this.http.get(`${this.apiUrl}/jobsweb`)
      .toPromise()
      .then(response => {
        const jobs = response.json() as Jobs;
        return jobs;
      });
  }

  addAlert(email: any): Promise<any> {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post(`${this.apiUrl}/alertsweb`, JSON.stringify(email), { headers })
      .toPromise()
      .then(response => response.json());
  }

}
