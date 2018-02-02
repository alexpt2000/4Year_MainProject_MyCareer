import { Jobs } from './../core/model';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import * as moment from 'moment';

import 'rxjs/add/operator/toPromise';


export class JobsFilter {
  title: string;
  page = 0;
  itensPage = 15;
}

@Injectable()
export class JobsService {

  apiUrl: string;


  constructor(private http: AuthHttp) {
    this.apiUrl = `${environment.apiUrl}/jobs`;
  }

  search(filter: JobsFilter): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filter.page.toString());
    params.set('size', filter.itensPage.toString());

    if (filter.title) {
      params.set('title', filter.title);
    }

    return this.http.get(`${this.apiUrl}`, { search: params })
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

  listAll(): Promise<any> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().content);
  }

  delete(code: number): Promise<void> {
    return this.http.delete(`${this.apiUrl}/${code}`)
      .toPromise()
      .then(() => null);
  }

  add(job: Jobs): Promise<Jobs> {
    return this.http.post(this.apiUrl, JSON.stringify(job))
      .toPromise()
      .then(response => response.json());
  }

  update(job: Jobs): Promise<Jobs> {
    return this.http.put(`${this.apiUrl}/${job.code}`,
      JSON.stringify(job))
      .toPromise()
      .then(response => {
        const jobChange = response.json() as Jobs;

        this.convertStringToDate([jobChange]);

        return jobChange;
      });
  }

  findByCode(code: number): Promise<Jobs> {
    return this.http.get(`${this.apiUrl}/${code}`)
      .toPromise()
      .then(response => {
        const job = response.json() as Jobs;

        this.convertStringToDate([job]);

        return job;
      });
  }

  private convertStringToDate(jobs: Jobs[]) {
    for (const job of jobs) {
      job.publication = moment(job.publication,
        'YYYY-MM-DD').toDate();

    }
  }


}
