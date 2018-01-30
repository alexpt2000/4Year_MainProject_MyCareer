import { Component, OnInit, NgModule } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { JobswebFilter, JobswebService } from './../jobsweb.service';

import {BrowserModule} from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';



@Component({
  selector: 'app-jobsweb-search',
  templateUrl: './jobsweb-search.component.html',
  styleUrls: ['./jobsweb-search.component.css']
})


export class JobswebSearchComponent {


  totalRecords = 0;
  filter = new JobswebFilter();
  jobsweb = [];
  jobTitle;
  jobDescription = '';
  display;
  email = null;

  constructor(
    private jobswebService: JobswebService,
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
    this.jobswebService.addAlert({ email })
      .then(() => {
        this.toasty.success(`Email "${email}" now will receive alerts from MyCareer.`);
        // alert(`Email "${email}" now will receive alerts from MyCareer.`);
        this.email = null
      })
      .catch(erro => this.toasty.error(`Email "${email}" is already registered.`));
  }

}
