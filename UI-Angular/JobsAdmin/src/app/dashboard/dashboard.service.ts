
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import * as moment from 'moment';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class DashboardService {

  apiUrl: string;


  constructor(private http: AuthHttp) {
    this.apiUrl = `${environment.apiUrl}/dashboard`;
  }


  totalJobs(): Promise<any> {
    return this.http.get(`${this.apiUrl}/totaljobs`)
      .toPromise()
      .then(response => response.json());
  }

  totalApplicants(): Promise<any> {
    return this.http.get(`${this.apiUrl}/totalapplicants`)
      .toPromise()
      .then(response => response.json());
  }

  totalNewApplicants(): Promise<any> {
    return this.http.get(`${this.apiUrl}/totalnewapplicants`)
      .toPromise()
      .then(response => response.json());
  }

}
