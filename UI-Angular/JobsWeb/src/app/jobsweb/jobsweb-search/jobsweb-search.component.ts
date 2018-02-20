import { Component, OnInit, NgModule } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { JobswebService } from './../jobsweb.service';

import { BrowserModule } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Form, EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-jobsweb-search',
  templateUrl: './jobsweb-search.component.html',
  styleUrls: ['./jobsweb-search.component.css']
})


export class JobswebSearchComponent implements OnInit {

  jobsweb = [];
  jobTitle;
  jobDescription = '';
  display;
  email = '';
  msgs: any;

  constructor(
    private jobswebService: JobswebService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobswebService.loadJobs()
      .then(result => {
        this.jobsweb = result;
      });
  }

  showJobDetails(job: any) {
    this.jobTitle = job.title;
    this.jobDescription = job.description;
    this.display = true;
  }


  addAlert(email: any) {
    this.jobswebService.addAlert({ email })
      .then(() => {
        this.toasty.success(`Email "${email}" now will receive alerts from MyCareer.`);
        this.email = '';
      })
      .catch(erro => this.toasty.error(`Email "${email}" is already registered.`));
    this.email = '';
  }

}
