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
  i = 0;

  selectedTypeQuestion = '';
  selectedQuestion = '';

  typeQuestion = [];
  question: any;


  constructor(
    private _location: Location,
    private toasty: ToastyService,
    private applicantsService: ApplicantsService,
    private route: ActivatedRoute,
    private title: Title,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit() {
    const codeApplicant = this.route.snapshot.params['code'];
    this.title.setTitle('Evaluate applicant');
    this.loadApplicantNotes(codeApplicant);
    this.listTypeQuestions();

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
      .catch(erro => {
        this.addApplicantNotes();
      });
  }


  addApplicantNotes() {
    const codeApplicant1 = this.route.snapshot.params['code'];
    this.applicant.applicant.code = codeApplicant1;

    this.applicantsService.addApplicanNotes(this.applicant)
      .then(() => {
        this.applicant = new ApplicantNotes();
        this.loadApplicantNotes(codeApplicant1);
      })
  }


  updateApplicant(form: FormControl) {
    this.applicantsService.updateApplicantNotes(this.applicant)
      .then(applicant => {
        this.applicant = applicant;

        this.toasty.success('Successfully changed!');
        this.updateTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  updateTitle() {
    this.title.setTitle(`Evaluate: ${this.applicant.applicant.fullname}`);
    this.titlePage = this.applicant.applicant.fullname;
  }


  backClicked() {
    this._location.back();
  }


  // Load the list of Questions
  listTypeQuestions() {

    this.applicantsService.listTypeQuestions()
      .then(typeQuestion => {
        this.typeQuestion = typeQuestion
          .map(a => ({ label: a.type_question, value: a.type_question }),
          this.question = typeQuestion
            .map(q => ({ label: q.question, value: q.question })));
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

}
