import { Schedules } from './../core/model';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { AuthHttp } from 'angular2-jwt';
import * as moment from 'moment';

import 'rxjs/add/operator/toPromise';


export class SchedulesFilter {
  title: string;
  page = 0;
  itensPage = 15;
}

@Injectable()
export class SchedulesService {

  apiUrl: string;


  constructor(private http: AuthHttp) {
    this.apiUrl = `${environment.apiUrl}/schedules`;
  }

  search(): Promise<any> {

    return this.http.get(`${this.apiUrl}`)
      .toPromise()
      .then(response => {
        const schedule = response.json() as Schedules;

        // this.convertStringToDate([schedule]);

        return schedule;
      })
  }


  // console.log(code)
  // return this.http.get(`${this.apiUrl}/job/${code}`)
  // .toPromise()
  // .then(response => {
  //   const applicant = response.json() as Applicants;

  //   this.convertStringToDate([applicant]);

  //   return applicant;
  // });



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

  add(schedule: Schedules): Promise<Schedules> {
    return this.http.post(this.apiUrl, JSON.stringify(schedule))
      .toPromise()
      .then(response => response.json());
  }

  update(schedule: Schedules): Promise<Schedules> {
    return this.http.put(`${this.apiUrl}/${schedule.code}`,
      JSON.stringify(schedule))
      .toPromise()
      .then(response => {
        const scheduleChange = response.json() as Schedules;

        // this.convertStringToDate([scheduleChange]);

        return scheduleChange;
      });
  }

  findByCode(code: number): Promise<Schedules> {
    return this.http.get(`${this.apiUrl}/${code}`)
      .toPromise()
      .then(response => {
        const schedule = response.json() as Schedules;

        this.convertStringToDate([schedule]);

        return schedule;
      });
  }

  private convertStringToDate(schedules: Schedules[]) {
    for (const schedule of schedules) {
      schedule.start = moment(schedule.start, 'YYYY-MM-DD HH:mm').toDate();
    }

    for (const schedule of schedules) {
      schedule.end = moment(schedule.end, 'YYYY-MM-DD HH:mm').toDate();
    }
  }


}
