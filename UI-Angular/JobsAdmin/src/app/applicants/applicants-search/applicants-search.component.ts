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

export class ApplicantsSearchComponent implements OnInit {

  totalRecords = 0;
  filter = new ApplicantsFilter();
  applicants = [];
  applicantsFullname;
  display;
  email = '';
  codeJob = this.router.snapshot.params['code'];
  title = this.router.snapshot.params['title'];

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
  ) {  }

  ngOnInit() {


    if (this.codeJob) {
      this.filterJobByCode ();
    }

  }

  search(page = 0) {
    this.filter.page = page;

    this.applicantsService.search(this.filter)
      .then(result => {
        this.totalRecords = result.total;
        this.applicants = result.applicants;
      });
  }

  filterJobByCode () {

  }

  changePage(event: LazyLoadEvent) {
    const page = event.first / event.rows;
    this.search(page);
  }

  // confirmationDelete(applicant: any) {
  //   this.confirmation.confirm({
  //     message: 'Are you sure you want to delete?',
  //     accept: () => {
  //       this.delete(applicant);
  //     }
  //   });
  // }

  // delete(applicant: any) {
  //   this.applicantsService.delete(applicant.code)
  //     .then(() => {
  //       if (this.grid.first === 0) {
  //         this.search();
  //       } else {
  //         this.grid.first = 0;
  //       }

  //       this.toasty.success('Deleted successfully!');
  //     })
  //     .catch(erro => this.errorHandler.handle(erro));
  // }



}
