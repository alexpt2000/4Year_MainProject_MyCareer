import { Component, OnInit, NgModule, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';

import { JobsFilter, JobsService } from './../jobs.service';

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
  selector: 'app-jobs-search',
  templateUrl: './jobs-search.component.html',
  styleUrls: ['./jobs-search.component.css']
})


export class JobsSearchComponent {


  totalRecords = 0;
  filter = new JobsFilter();
  jobsweb = [];
  jobTitle;
  jobDescription = '';
  display;
  email = '';
  @ViewChild('table') grid;

  constructor(
    private jobsService: JobsService,
    private toasty: ToastyService,
    private auth: AuthService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService
  ) {  }


  search(page = 0) {
    this.filter.page = page;

    this.jobsService.search(this.filter)
      .then(result => {
        this.totalRecords = result.total;
        this.jobsweb = result.jobsweb;
      });
  }

  changePage(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

  showJobDetails(job: any) {
    this.jobTitle = job.title;
    this.jobDescription = job.description;
    this.display = true;
  }

  confirmationDelete(job: any) {
    this.confirmation.confirm({
      message: 'Are you sure you want to delete?',
      accept: () => {
        this.delete(job);
      }
    });
  }

  delete(job: any) {
    this.jobsService.delete(job.code)
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
