import { Jobs, Schedules } from './../../core/model';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { BrowserModule } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { Form, EmailValidator } from '@angular/forms';

import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { SchedulesService } from 'app/schedules/schedules.service';


@Component({
  selector: 'app-schedules-add',
  templateUrl: './schedules-add.component.html',
  styleUrls: ['./schedules-add.component.css']
})
export class SchedulesAddComponent implements OnInit {

  schedule = new Schedules();
  titlePage = 'New Schedule';


  constructor(
    private _location: Location,
    private toasty: ToastyService,
    private schedulesService: SchedulesService,
    private route: ActivatedRoute,
    private title: Title,
    private errorHandler: ErrorHandlerService,

  ) {


  }

  ngOnInit() {
    const codeSchedule = this.route.snapshot.params['code'];
    this.title.setTitle('New Job');

    if (codeSchedule) {
      this.loadSchedule(codeSchedule);
      this.titlePage = 'Edit Schedule';
    }
  }

  get editing() {
    return Boolean(this.schedule.code)
  }

  loadSchedule(code: number) {
    this.schedulesService.findByCode(code)
      .then(schedule => {
        this.schedule = schedule;
        this.updateTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  save(form: FormControl) {
    if (this.editing) {
      this.updateSchedule(form);
    } else {
      this.addSchedule(form);
    }
  }

  backClicked() {
    this._location.back();
  }

  addSchedule(form: FormControl) {
    // this.applicant.job.code = this.router.snapshot.params['code'];
    // this.job.applicant_date = this.nowDate;
    // console.log(this.applicant.applicant_date);
    this.schedulesService.add(this.schedule)
      .then(() => {
        this.toasty.success(`Hi the ${this.schedule.title} job has been successfully save.`);
        this.schedule = new Schedules();
        this.backClicked();
        // alert(`Email "${email}" now will receive alerts from MyCareer.`);
      })
  }

  updateSchedule(form: FormControl) {
    this.schedulesService.update(this.schedule)
      .then(schedule => {
        this.schedule = schedule;

        this.toasty.success('Successfully changed!');
        this.updateTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  updateTitle() {
    this.title.setTitle(`Edit: ${this.schedule.title}`);
  }

}
