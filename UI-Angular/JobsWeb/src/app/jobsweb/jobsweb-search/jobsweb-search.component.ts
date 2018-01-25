import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/api';

import { JobswebFilter, JobswebService } from './../jobsweb.service';




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

  constructor(private jobswebService: JobswebService) {

  }


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
        alert(`Email "${email}" now will receive alerts from MyCareer.`);
        this.email = null
      })
  }

}
