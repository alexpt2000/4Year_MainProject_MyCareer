import { ApplicantsService } from './../../applicants/applicants.service';
import { Jobs } from './../../core/model';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { JobsService } from './../jobs.service';
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


@Component({
  selector: 'app-jobs-add',
  templateUrl: './jobs-add.component.html',
  styleUrls: ['./jobs-add.component.css']
})
export class JobsAddComponent implements OnInit {

  job = new Jobs();
  titlePage = 'New Job';

  statusList = [
    { label: 'Open', value: 'Open' },
    { label: 'Close', value: 'Close' },
    { label: 'Pendent', value: 'Pendent' },
  ];


  constructor(
    private _location: Location,
    private toasty: ToastyService,
    private jobsService: JobsService,
    private route: ActivatedRoute,
    private title: Title,
    private jobService: JobsService,
    private errorHandler: ErrorHandlerService,

  ) {


  }

  ngOnInit() {
    const codeJob = this.route.snapshot.params['code'];
    this.title.setTitle('New Job');


    if (codeJob) {
      this.loadJobs(codeJob);
      this.titlePage = 'Edit Job';
    }
  }

  get editing() {
    return Boolean(this.job.code)
  }




  loadJobs(code: number) {
    this.jobService.findByCode(code)
      .then(job => {
        this.job = job;
        this.updateTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  save(form: FormControl) {
    if (this.editing) {
      this.updateJob(form);
    } else {
      this.addJob(form);
    }
  }

  backClicked() {
    this._location.back();
  }

  addJob(form: FormControl) {
    // this.applicant.job.code = this.router.snapshot.params['code'];
    // this.job.applicant_date = this.nowDate;
    // console.log(this.applicant.applicant_date);
    this.jobsService.add(this.job)
      .then(() => {
        this.toasty.success(`Hi the ${this.job.title} job has been successfully save.`);
        this.job = new Jobs();
        this.backClicked();
        // alert(`Email "${email}" now will receive alerts from MyCareer.`);
      })
  }

  updateJob(form: FormControl) {
    this.jobService.update(this.job)
      .then(job => {
        this.job = job;

        this.toasty.success('Successfully changed!');
        this.updateTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  updateTitle() {
    this.title.setTitle(`Edit: ${this.job.title}`);
  }

}
