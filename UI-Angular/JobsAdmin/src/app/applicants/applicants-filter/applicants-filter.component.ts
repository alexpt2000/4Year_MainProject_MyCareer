import { Component, OnInit, NgModule, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';

import { ApplicantsService } from './../applicants.service';

import { BrowserModule } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Form, EmailValidator } from '@angular/forms';
import { AuthService } from 'app/security/auth.service';
import { ErrorHandlerService } from 'app/core/error-handler.service';


@Component({
  selector: 'app-applicants-filter',
  templateUrl: './applicants-filter.component.html',
  styleUrls: ['./applicants-filter.component.css']
})

export class ApplicantsFilterComponent implements OnInit {

  totalRecords = 0;
  applicants = [];
  applicantsFullname;
  display;
  email = '';
  codeJob = this.router.snapshot.params['code'];
  title = 'List of Applicants';

  rating1 = 5;
  rating2 = 1;
  rating3 = 3;

  @ViewChild('table') grid;

  constructor(
    private applicantsService: ApplicantsService,
    private toasty: ToastyService,
    private auth: AuthService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private router: ActivatedRoute,
    private _location: Location,
  ) { }


  ngOnInit() {
    this.load();
  }

  load() {
    if (this.codeJob) {
      this.loadApplicantByJob();
      this.title = 'Position - ' +  this.router.snapshot.params['title'];
    } else {
      this.loadApplicants()
    }
  }


  loadApplicantByJob() {
    this.applicantsService.findApplicanByJobCode(this.codeJob)
      .then(applicants => {
        this.applicants = applicants;
      });
  }

  loadApplicants() {
    this.applicantsService.findApplicants()
      .then(applicants => {
        this.applicants = applicants;
      });
  }

  confirmationDeleteApplicant(applicant: any) {
    this.confirmation.confirm({
      message: 'Are you sure you want to delete?',
      accept: () => {
        this.deleteApplicant(applicant);
      }
    });
  }

  deleteApplicant(applicant: any) {
    this.applicantsService.deleteApplicant(applicant.code, applicant.applicant.code)
      .then(() => {
        this.load();
        this.toasty.success('Deleted successfully!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  backClicked() {
    this._location.back();
  }


}
