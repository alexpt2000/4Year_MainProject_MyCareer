import { ConfirmationService } from 'primeng/components/common/api';
import { AuthService } from './../../security/auth.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Applicants, ApplicantNotes, ApplicantQuestions } from './../../core/model';
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
  applicantNewQuestion = new ApplicantQuestions();
  outro = new ApplicantQuestions();


  applicantQuestions: any;
  titlePage = '';


  selectedTypeQuestion = '';
  selectedQuestion = '';

  type_question: any;
  type_questionFilter: any;
  question: any;
  questionFilter: any;

  constructor(
    private _location: Location,
    private toasty: ToastyService,
    private applicantsService: ApplicantsService,
    private route: ActivatedRoute,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService,
    private confirmation: ConfirmationService,
  ) {

  }

  ngOnInit() {
    const codeApplicant = this.route.snapshot.params['code'];
    this.title.setTitle('Evaluate applicant');
    this.loadApplicantNotes(codeApplicant);
    this.loadApplicantQuestinons(codeApplicant);
    this.listTypeQuestions();

    // this.type_questionFilter =  Array.from(new Set(this.type_question));

    // this.type_questionFilter = _.uniqBy(this.type_question, 'label');
    // console.log(this.type_question);
    // console.log(this.type_questionFilter);


    // this.type_question.forEach(e => this.type_questionFilter.add(JSON.stringify(e)));
    // this.type_questionFilter = Array.from(this.type_questionFilter).map(e => JSON.parse(e));

    // const uniqueObjects = Array.from(new Set(this.type_question.map((x) => JSON.stringify(x)))).map((y) => JSON.parse(y.toString()));
    // console.log(this.type_questionFilter);

  }


  onSelect(val) {
    this.questionFilter = this.question.filter(x => x.id === val);
  }

  get editing() {
    return Boolean(this.applicant.code)
  }


  // Load the list of Applicant notes
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

  // Load the list of Applicant QUestions
  loadApplicantQuestinons(code: number) {
    this.applicantsService.findByCodeApplicantQuestions(code)
      .then(applicantQuestions => {
        this.applicantQuestions = applicantQuestions;
        this.updateTitle();
      })
      .catch(erro => {
        // this.addApplicantQuestinons();
      });
  }


  addApplicantQuestinons(form: FormControl) {
    const codeApplicantAdd = this.route.snapshot.params['code'];
    this.applicantNewQuestion.applicant.code = codeApplicantAdd;

    this.applicantsService.addApplicanQuestion(this.applicantNewQuestion)
      .then(() => {
        this.applicantNewQuestion = new ApplicantQuestions();
        this.loadApplicantQuestinons(codeApplicantAdd);
      })
  }


  confirmationDeleteQuestion(code: any) {
    this.confirmation.confirm({
      message: 'Are you sure you want to delete?',
      accept: () => {
        this.deleteQuestion(code);
      }
    });
  }

  deleteQuestion(code: any) {
    const codeApplicantDel = this.route.snapshot.params['code'];
    this.applicantsService.deleteQuestion(code)
      .then(() => {
        this.toasty.success('Deleted successfully!');
        this.loadApplicantQuestinons(codeApplicantDel);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


  findByCodeQuestions(code: any) {
    this.applicantsService.findByCodeQuestions(code)
      .then(applicantQuestions => {
        this.applicantNewQuestion = applicantQuestions[0];
      })
      .catch(erro => {
        // this.addApplicantQuestinons();
      });
  }


  // *****************************************
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
      .then(resultQuestion => {
        this.type_question = resultQuestion
          .map(a => ({ label: a.type_question, value: a.type_question }),
          this.question = resultQuestion
            .map(q => ({ label: q.question, value: q.question, id: q.type_question })));
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

}
