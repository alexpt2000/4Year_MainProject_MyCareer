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

  /**
   * @param  {AuthHttp} privatehttp
   */
  constructor(private http: AuthHttp) {
    this.apiUrl = `${environment.apiUrl}/applicants`;
  }

  /**
   * @param  {ApplicantsFilter} filter
   * @returns Promise
   */
  search(filter: ApplicantsFilter): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filter.page.toString());
    params.set('size', filter.itensPage.toString());

    if (filter.fullname) {
      params.set('fullname', filter.fullname);
    }

    /**
     * @param  {} `${this.apiUrl}`
     * @param  {params}} {search
     */
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

  /**
   * @returns Promise
   */
  listAll(): Promise<any> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().content);
  }


  /**
   * Return the list of applicats to serve the shedules dropdown
   *
   * @returns Promise
   */
  listApplicants(): Promise<any> {
    return this.http.get(`${this.apiUrl}/list`)
      .toPromise()
      .then(response => {
        const applicant = response.json() as Applicants;
      return applicant;
    });
  }

  /**
   * @param  {number} code
   * @param  {number} codeQ
   * @returns Promise
   */
  deleteApplicant(code: number, codeQ: number): Promise<void> {
    return this.http.delete(`${this.apiUrl}/${code}/${codeQ}`)
      .toPromise()
      .then(() => null);
  }

  /**
   * @param  {Applicants} applicant
   * @returns Promise
   */
  add(applicant: Applicants): Promise<Applicants> {
    return this.http.post(this.apiUrl, JSON.stringify(applicant))
      .toPromise()
      .then(response => response.json());
  }

  /**
   * @param  {Applicants} applicant
   * @returns Promise
   */
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

  /**
   * @param  {ApplicantNotes} applicant
   * @returns Promise
   */
  updateApplicantNotes(applicant: ApplicantNotes): Promise<ApplicantNotes> {
    return this.http.put(`${this.apiUrl}/applicantnotes/${applicant.code}`,
      JSON.stringify(applicant))
      .toPromise()
      .then(response => {
        const applicantChange = response.json() as ApplicantNotes;
        return applicantChange;
      });
  }

  /**
   * @param  {number} code
   * @returns Promise
   */
  findByCode(code: number): Promise<Applicants> {

    return this.http.get(`${this.apiUrl}/${code}`)
      .toPromise()
      .then(response => {
        const applicant = response.json() as Applicants;

        this.convertStringToDate([applicant]);

        return applicant;
      });
  }


  /**
   * Applocants Notes
   *
   * @param  {ApplicantNotes} applicant
   * @returns Promise
   */
  addApplicanNotes(applicant: ApplicantNotes): Promise<ApplicantNotes> {
    return this.http.post(`${this.apiUrl}/applicantnotes`, JSON.stringify(applicant))
      .toPromise()
      .then(response => response.json());
  }

  /**
   * @param  {number} code
   * @returns Promise
   */
  findByCodeApplicantNotes(code: number): Promise<ApplicantNotes> {
    return this.http.get(`${this.apiUrl}/applicantnotes/${code}`)
      .toPromise()
      .then(response => {
        const applicant = response.json() as ApplicantNotes;
        // this.convertStringToDate([applicant]);
        return applicant;
      });
  }


  /**
   * @param  {ApplicantQuestions} applicantQuestion
   * @returns Promise
   */
  addApplicanQuestion(applicantQuestion: ApplicantQuestions): Promise<ApplicantQuestions> {

    return this.http.post(`${this.apiUrl}/questions`, JSON.stringify(applicantQuestion))
      .toPromise()
      .then(response => response.json());
  }

  /**
   * @param  {number} code
   * @returns Promise
   */
  findByCodeApplicantQuestions(code: number): Promise<ApplicantQuestions> {
    return this.http.get(`${this.apiUrl}/questions/${code}`)
      .toPromise()
      .then(response => {
        const applicantQuestions = response.json() as ApplicantQuestions;
        // this.convertStringToDate([applicant]);
        return applicantQuestions;
      });
  }


  /**
   * @param  {number} code
   * @returns Promise
   */
  deleteQuestion(code: number): Promise<void> {
    return this.http.delete(`${this.apiUrl}/questions/${code}`)
      .toPromise()
      .then(() => null);
  }

  /**
   * @param  {number} code
   * @returns Promise
   */
  findByCodeQuestions(code: number): Promise<ApplicantQuestions> {
    return this.http.get(`${this.apiUrl}/questions/question/${code}`)
      .toPromise()
      .then(response => response.json() as ApplicantQuestions);
  }

  /**
   * @param  {Applicants[]} applicants
   */
  private convertStringToDate(applicants: Applicants[]) {
    for (const applicant of applicants) {
      applicant.applicant_date = moment(applicant.applicant_date,
        'YYYY-MM-DD').toDate();

    }
  }



  /**
   * Applicants Notes
   *
   * @param  {number} code
   * @returns Promise
   */
  findApplicanByJobCode(code: number): Promise<any> {
    return this.http.get(`${this.apiUrl}/job/${code}`)
      .toPromise()
      .then(response => {
        const applicant = response.json() as ApplicantNotes;
        return applicant;
      });
  }

  /**
   * @returns Promise
   */
  findApplicants(): Promise<any> {
    return this.http.get(`${this.apiUrl}`)
      .toPromise()
      .then(response => {
        const applicant = response.json() as ApplicantNotes;
        return applicant;
      });
  }

  /**
   * @param  {ApplicantNotes[]} applicants
   */
  private convertStringToDateNotes(applicants: ApplicantNotes[]) {
    for (const appl of applicants) {
      appl.applicant.applicant_date = moment(appl.applicant.applicant_date,
        'YYYY-MM-DD').toDate();

    }
  }


  /**
   * Load the list of Questions
   *
   * @returns Promise
   */
  listTypeQuestions(): Promise<any> {
    return this.http.get(`${this.apiUrl}/listquestions`)
      .toPromise()
      .then(response => response.json() as ListQuestions);
  }


}
