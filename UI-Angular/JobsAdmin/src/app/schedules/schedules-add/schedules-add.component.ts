import { ApplicantsService } from './../../applicants/applicants.service';
import { Jobs, Schedules, Applicants } from './../../core/model';
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
  applicants = [];
  fullnameDopdown: boolean;

  titlePage = 'New Schedule';

  statusList = [
    { label: 'Open', value: 'Open' },
    { label: 'Close', value: 'Close' },
    { label: 'Pendent', value: 'Pendent' },
  ];


  constructor(
    private _location: Location,
    private toasty: ToastyService,
    private schedulesService: SchedulesService,
    private applicantsService: ApplicantsService,
    private route: ActivatedRoute,
    private title: Title,
    private errorHandler: ErrorHandlerService,

  ) {


  }

  ngOnInit() {
    const codeSchedule = this.route.snapshot.params['code'];
    const fullnameSchedule = this.route.snapshot.params['fullname'];
    this.title.setTitle('New Job');

    this.loadApplicants();

    if (codeSchedule) {
      this.loadSchedule(codeSchedule);
      this.titlePage = 'Edit Schedule';
    }

    if (fullnameSchedule) {
      this.schedule.title = 'Intv - ' + fullnameSchedule;
      this.titlePage = 'New Schedule - ' + fullnameSchedule;
      this.fullnameDopdown = true;
    }

  }

  get editing() {
    return Boolean(this.schedule.code)
  }


  clearCalendar() {
    // this.schedule.start = null;
    this.schedule.end = null;
  }

  loadApplicants() {

    this.applicantsService.listApplicants()
    .then(applicants => {
      this.applicants = applicants
        .map(a => ({ label: a.fullname, value: a.fullname }));
    })
    .catch(erro => this.errorHandler.handle(erro));

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
