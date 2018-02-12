import { Title } from '@angular/platform-browser';
import { Applicants, ApplicantNotes, ListQuestions, ApplicantQuestions } from './../core/model';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import * as moment from 'moment';

import 'rxjs/add/operator/toPromise';


export class ApplicantsFilter {
  fullname: string;
  page = 0;
  itensPage = 15;
}

@Injectable()
export class ApplicantsService {

  apiUrl: string;


  constructor(private http: AuthHttp) {
    this.apiUrl = `${environment.apiUrl}/applicants`;
  }

  search(filter: ApplicantsFilter): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filter.page.toString());
    params.set('size', filter.itensPage.toString());

    if (filter.fullname) {
      params.set('fullname', filter.fullname);
    }

    return this.http.get(`${this.apiUrl}`, { search: params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const applicants = responseJson.content;

        const result = {
          applicants,
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


  listApplicants(): Promise<any> {
    return this.http.get(`${this.apiUrl}`)
      .toPromise()
      .then(response => response.json().content);
  }

  delete(code: number): Promise<void> {
    return this.http.delete(`${this.apiUrl}/${code}`)
      .toPromise()
      .then(() => null);
  }

  add(applicant: Applicants): Promise<Applicants> {
    return this.http.post(this.apiUrl, JSON.stringify(applicant))
      .toPromise()
      .then(response => response.json());
  }


  update(applicant: Applicants): Promise<Applicants> {
    return this.http.put(`${this.apiUrl}/${applicant.code}`,
      JSON.stringify(applicant))
      .toPromise()
      .then(response => {
        const applicantChange = response.json() as Applicants;

        this.convertStringToDate([applicantChange]);

        return applicantChange;
      });
  }


  updateApplicantNotes(applicant: ApplicantNotes): Promise<ApplicantNotes> {
    return this.http.put(`${this.apiUrl}/applicantnotes/${applicant.code}`,
      JSON.stringify(applicant))
      .toPromise()
      .then(response => {
        const applicantChange = response.json() as ApplicantNotes;

        // this.convertStringToDate([applicantChange]);

        return applicantChange;
      });
  }

  findByCode(code: number): Promise<Applicants> {

    return this.http.get(`${this.apiUrl}/${code}`)
      .toPromise()
      .then(response => {
        const applicant = response.json() as Applicants;

        this.convertStringToDate([applicant]);

        return applicant;
      });
  }

  // Applocants Notes
  addApplicanNotes(applicant: ApplicantNotes): Promise<ApplicantNotes> {
    return this.http.post(`${this.apiUrl}/applicantnotes`, JSON.stringify(applicant))
      .toPromise()
      .then(response => response.json());
  }

  findByCodeApplicantNotes(code: number): Promise<ApplicantNotes> {
    return this.http.get(`${this.apiUrl}/applicantnotes/${code}`)
      .toPromise()
      .then(response => {
        const applicant = response.json() as ApplicantNotes;
        // this.convertStringToDate([applicant]);
        return applicant;
      });
  }

  // Applicants Questions

  addApplicanQuestion(applicantQuestion: ApplicantQuestions): Promise<ApplicantQuestions> {
    console.log(applicantQuestion);

    return this.http.post(`${this.apiUrl}/questions`, JSON.stringify(applicantQuestion))
      .toPromise()
      .then(response => response.json());
  }

  findByCodeApplicantQuestions(code: number): Promise<ApplicantQuestions> {
    return this.http.get(`${this.apiUrl}/questions/${code}`)
      .toPromise()
      .then(response => {
        const applicantQuestions = response.json() as ApplicantQuestions;
        // this.convertStringToDate([applicant]);
        return applicantQuestions;
      });
  }

  deleteQuestion(code: number): Promise<void> {
    return this.http.delete(`${this.apiUrl}/questions/${code}`)
      .toPromise()
      .then(() => null);
  }

  findByCodeQuestions(code: number): Promise<ApplicantQuestions> {
    return this.http.get(`${this.apiUrl}/questions/question/${code}`)
      .toPromise()
      .then(response => response.json() as ApplicantQuestions);
  }


  // ******************************

  findByJobCode(code: number): Promise<any> {
    return this.http.get(`${this.apiUrl}/job/${code}`)
      .toPromise()
      .then(response => {
        const applicant = response.json() as Applicants;

        this.convertStringToDate([applicant]);

        return applicant;
      });
  }

  private convertStringToDate(applicants: Applicants[]) {
    for (const applicant of applicants) {
      applicant.applicant_date = moment(applicant.applicant_date,
        'YYYY-MM-DD').toDate();

    }
  }


  // Load the list of Questions
  listTypeQuestions(): Promise<any> {
    return this.http.get(`${this.apiUrl}/listquestions`)
      .toPromise()
      .then(response => response.json() as ListQuestions);
  }


}
