import { Applicants } from './../model';

import { ApplicantService } from 'app/applicant/applicant.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { Location } from '@angular/common';
import { Form } from '@angular/forms';





@Component({
  selector: 'app-applicant-add',
  templateUrl: './applicant-add.component.html',
  styleUrls: ['./applicant-add.component.css']
})
export class ApplicantAddComponent implements OnInit {
  text: string;

  applicant = new Applicants();

  constructor(
    private applicantService: ApplicantService,
    private router: ActivatedRoute,
    private toasty: ToastyService,
    private _location: Location
  ) { }

  ngOnInit() {
    console.log(this.router.snapshot.params['code']);
  }

  backClicked () {
    this._location.back();
  }

  addApplicant(form: FormControl) {
    this.applicant.job.code = this.router.snapshot.params['code'];
    this.applicantService.addApplicant( this.applicant )
      .then(() => {
        this.toasty.success(`Your application was successfully made.`);
        this.applicant = new Applicants();
        // alert(`Email "${email}" now will receive alerts from MyCareer.`);
      })
  }

}
