import { Component, OnInit, NgModule, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';

import { ApplicantsFilter, ApplicantsService } from './../applicants.service';

import {BrowserModule} from '@angular/platform-browser'
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
  selector: 'app-applicants-search',
  templateUrl: './applicants-search.component.html',
  styleUrls: ['./applicants-search.component.css']
})

export class ApplicantsSearchComponent {

  totalRecords = 0;
  filter = new ApplicantsFilter();
  applicantsweb = [];
  applicantsFullname;
  display;
  email = '';
  @ViewChild('table') grid;

  constructor(
    private applicantsService: ApplicantsService,
    private toasty: ToastyService,
    private auth: AuthService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) {  }


  search(page = 0) {
    this.filter.page = page;

    this.applicantsService.search(this.filter)
      .then(result => {
        this.totalRecords = result.total;
        this.applicantsweb = result.applicantsweb;
      });
  }

  changePage(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

  // showJobDetails(job: any) {
  //   this.jobTitle = job.title;
  //   this.jobDescription = job.description;
  //   this.display = true;
  // }

  confirmationDelete(applican: any) {
    this.confirmation.confirm({
      message: 'Are you sure you want to delete?',
      accept: () => {
        this.delete(applican);
      }
    });
  }

  delete(applican: any) {
    this.applicantsService.delete(applican.code)
      .then(() => {
        if (this.grid.first === 0) {
          this.search();
        } else {
          this.grid.first = 0;
        }

        this.toasty.success('Deleted successfully!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



}
