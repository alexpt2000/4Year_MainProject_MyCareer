import { Component, OnInit, NgModule } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import {BrowserModule} from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Form, EmailValidator } from '@angular/forms';
import { JobsFilter, JobsService } from '../jobs.service';
import { SidebarModule } from 'primeng/components/sidebar/sidebar';




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

  constructor(
    private jobswebService: JobsService,
    private toasty: ToastyService
  ) {  }


  search(page = 0) {
    this.filter.page = page;

    this.jobswebService.search(this.filter)
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


  addAlert(email: any) {
    this.jobswebService.addAlert( {email} )
      .then(() => {
        this.toasty.success(`Email "${email}" now will receive alerts from MyCareer.`);
        this.email = '';
        // alert(`Email "${email}" now will receive alerts from MyCareer.`);
      })
      .catch(erro => this.toasty.error(`Email "${email}" is already registered.`));
      this.email = '';
  }

}
