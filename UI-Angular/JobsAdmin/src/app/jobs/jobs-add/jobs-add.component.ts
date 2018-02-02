import { BrowserModule } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { Form, EmailValidator } from '@angular/forms';

import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Jobs } from 'app/jobs/model';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-jobs-add',
  templateUrl: './jobs-add.component.html',
  styleUrls: ['./jobs-add.component.css']
})
export class JobsAddComponent implements OnInit {

  job = new Jobs();


  statusList = [
    { label: 'Open', value: 'Open' },
    { label: 'Close', value: 'Close' },
    { label: 'Pendent', value: 'Pendent' },
  ];


  constructor(
    private _location: Location
  ) {


  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  addJob(form: FormControl) {
    // this.applicant.job.code = this.router.snapshot.params['code'];
    // this.applicant.applicant_date = this.nowDate;
    // // console.log(this.applicant.applicant_date);
    // this.applicantService.addApplicant( this.applicant )
    //   .then(() => {
    //     this.toasty.success(`Hi ${this.applicant.fullname} your application has been successfully applied.`);
    //     this.applicant = new Applicants();
    //     this.backClicked ();
    //     // alert(`Email "${email}" now will receive alerts from MyCareer.`);
    //   })
  }

}
