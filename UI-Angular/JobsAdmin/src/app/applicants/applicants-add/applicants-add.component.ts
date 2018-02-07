import { ErrorHandlerService } from './../../core/error-handler.service';
import { Applicants } from './../../core/model';
import { ApplicantsService } from 'app/applicants/applicants.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { Location } from '@angular/common';
import { Form, EmailValidator } from '@angular/forms';

import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-applicants-add',
  templateUrl: './applicants-add.component.html',
  styleUrls: ['./applicants-add.component.css']
})
export class ApplicantsAddComponent implements OnInit {

  applicant = new Applicants();
  titlePage = 'New Applicant';

  statusList = [
    { label: 'New applicant', value: 'New applicant' },
    { label: 'In process', value: 'In process' },
    { label: 'Did not pass', value: 'Did not pass' },
    { label: 'Accepted', value: 'Accepted' },
    { label: 'Did not accept', value: 'Did not accept' },
    { label: 'Missing requirements', value: 'Missing requirements' },
  ];


  constructor(
    private _location: Location,
    private toasty: ToastyService,
    private applicantsService: ApplicantsService,
    private route: ActivatedRoute,
    private title: Title,
    private errorHandler: ErrorHandlerService,

  ) {


  }

  ngOnInit() {
    const codeApplicant = this.route.snapshot.params['code'];
    this.title.setTitle('New Job');

    if (codeApplicant) {
      this.loadApplicant(codeApplicant);
      this.titlePage = 'Edit Application';
    }
  }

  get editing() {
    return Boolean(this.applicant.code)
  }

  loadApplicant(code: number) {
    this.applicantsService.findByCode(code)
      .then(applicant => {
        this.applicant = applicant;
        this.updateTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  save(form: FormControl) {
    if (this.editing) {
      this.updateApplicant(form);
    } else {
      this.addApplicant(form);
    }
  }

  backClicked() {
    this._location.back();
  }

  addApplicant(form: FormControl) {
    // this.applicant.job.code = this.router.snapshot.params['code'];
    // this.job.applicant_date = this.nowDate;
    // console.log(this.applicant.applicant_date);
    this.applicantsService.add(this.applicant)
      .then(() => {
        this.toasty.success(`Hi the ${this.applicant.fullname} job has been successfully save.`);
        this.applicant = new Applicants();
        this.backClicked();
        // alert(`Email "${email}" now will receive alerts from MyCareer.`);
      })
  }

  updateApplicant(form: FormControl) {
    this.applicantsService.update(this.applicant)
      .then(applicant => {
        this.applicant = applicant;

        this.toasty.success('Successfully changed!');
        this.updateTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  updateTitle() {
    this.title.setTitle(`Edit: ${this.applicant.fullname}`);
  }

}
