import { environment } from './../../environments/environment.prod';
import { Applicants } from './model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApplicantService {

  apiUrl: string;

  //apiUrl = 'http://localhost:8080';
  // http://localhost:8080/alertsweb

  constructor(private http: Http) {
    this.apiUrl = `${environment.apiUrl}`;
   }

  addApplicant(applicant: Applicants): Promise<Applicants> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${this.apiUrl}/applicantsweb`, JSON.stringify(applicant), { headers })
      .toPromise()
      .then(response => response.json());
  }

}
