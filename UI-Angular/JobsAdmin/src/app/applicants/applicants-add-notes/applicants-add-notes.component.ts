import { ErrorHandlerService } from './../../core/error-handler.service';
import { Applicants, ApplicantNotes } from './../../core/model';
import { ApplicantsService } from 'app/applicants/applicants.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { Location } from '@angular/common';
import { Form, EmailValidator } from '@angular/forms';

import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-applicants-add-notes',
  templateUrl: './applicants-add-notes.component.html',
  styleUrls: ['./applicants-add-notes.component.css']
})
export class ApplicantsAddNotesComponent implements OnInit {

  applicant = new ApplicantNotes();
  titlePage = '';


  constructor(
    private _location: Location,
    private toasty: ToastyService,
    private applicantsService: ApplicantsService,
    private route: ActivatedRoute,
    private title: Title,
    private errorHandler: ErrorHandlerService,

  ) {


  }

  ngOnInit() {
    const codeApplicant = this.route.snapshot.params['code'];
    this.title.setTitle('Evaluate applicant');

    // if (codeApplicant) {
      this.loadApplicantNotes(codeApplicant);
     // this.titlePage = 'Evaluate applicant - ' + this.applicant.score;
    // }
  }

  get editing() {
    return Boolean(this.applicant.code)
  }

  loadApplicantNotes(code: number) {
    this.applicantsService.findByCodeApplicantNotes(code)
      .then(applicant => {
        this.applicant = applicant;
        this.updateTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  backClicked() {
    this._location.back();
  }

 // TODO ********************************
  // save(form: FormControl) {
  //   if (this.editing) {
  //     this.updateApplicant(form);
  //   } else {
  //     this.addApplicantNotes(form);
  //   }
  // }

  // addApplicantNotes(form: FormControl) {
  //   // this.applicant.job.code = this.router.snapshot.params['code'];
  //   // this.job.applicant_date = this.nowDate;
  //   // console.log(this.applicant.applicant_date);
  //   this.applicantsService.add(this.applicant)
  //     .then(() => {
  //       this.toasty.success(`Hi the ${this.applicant.fullname} job has been successfully save.`);
  //       this.applicant = new Applicants();
  //       this.backClicked();
  //       // alert(`Email "${email}" now will receive alerts from MyCareer.`);
  //     })
  // }

  // updateApplicant(form: FormControl) {
  //   this.applicantsService.update(this.applicant)
  //     .then(applicant => {
  //       this.applicant = applicant;

  //       this.toasty.success('Successfully changed!');
  //       this.updateTitle();
  //     })
  //     .catch(erro => this.errorHandler.handle(erro));
  // }

  updateTitle() {
    this.title.setTitle(`Evaluate: ${this.applicant.applicant.fullname}`);
    this.titlePage = 'Evaluate applicant - ' + this.applicant.applicant.fullname;
  }

}
