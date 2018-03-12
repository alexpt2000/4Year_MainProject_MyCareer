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
import * as _ from 'lodash';


@Component({
  selector: 'app-applicants-add-notes',
  templateUrl: './applicants-add-notes.component.html',
  styleUrls: ['./applicants-add-notes.component.css']
})
export class ApplicantsAddNotesComponent implements OnInit {

  applicant = new ApplicantNotes();
  applicantNewQuestion = new ApplicantQuestions();
  applicantNewQuestionAverage = []

  applicantQuestions: any;
  titlePage = '';


  selectedTypeQuestion = '';
  selectedQuestion = '';

  type_question = [];
  type_questionFilter = [];
  type_questionFilterDropdown = [];

  question: any;
  questionFilter: any;

  averageScore = 0;
  countScore = 0;

  i = 0;

  constructor(
    private _location: Location,
    private toasty: ToastyService,
    private applicantsService: ApplicantsService,
    private route: ActivatedRoute,
    private title: Title,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService,
    private confirmation: ConfirmationService,
  ) {  }

  /**
   */
  ngOnInit() {
    const codeApplicant = this.route.snapshot.params['code'];
    this.title.setTitle('Evaluate applicant');
    this.loadApplicantNotes(codeApplicant);
    this.loadApplicantQuestinons(codeApplicant);
    this.listTypeQuestions();

  }

  /**
   */
  newQuestion() {
    this.applicantNewQuestion = new ApplicantQuestions();
  }

  /**
   * @param  {} val
   */
  onSelect(val) {
    this.questionFilter = this.question.filter(x => x.id === val);
  }
  /**
   */
  get editing() {
    return Boolean(this.applicant.code)
  }

  /**
   * Load the list of Applicant notes
   *
   * @param  {number} code
   */
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

  /**
   */
  addApplicantNotes() {
    const codeApplicant1 = this.route.snapshot.params['code'];
    this.applicant.applicant.code = codeApplicant1;

    this.applicantsService.addApplicanNotes(this.applicant)
      .then(() => {
        this.applicant = new ApplicantNotes();
        this.loadApplicantNotes(codeApplicant1);
      })
  }


  /**
   * Load the list of Applicant QUestions
   *
   * @param  {number} code
   */
  loadApplicantQuestinons(code: number) {
    this.applicantsService.findByCodeApplicantQuestions(code)
      .then(applicantQuestions => {
        this.applicantQuestions = applicantQuestions;

        this.countScore = 0;
        this.averageScore = 0;

        // tslint:disable-next-line:forin
        for (const k in this.applicantQuestions) {
          this.averageScore += this.applicantQuestions[k].score;
          this.countScore++;
        }

        this.averageScore = this.averageScore / this.countScore;

        this.applicant.score_questions = this.averageScore;

        this.updateApplicantScoreQuestions();

      })
      .catch(erro => {

      });
  }

  /**
   */
  updateApplicantScoreQuestions() {
    this.applicantsService.updateApplicantNotes(this.applicant)
      .then(applicant => {
        this.applicant = applicant;
        this.updateTitle();
      })
  }


  /**
   * @param  {FormControl} form
   */
  addApplicantQuestinons(form: FormControl) {
    const codeApplicantAdd = this.route.snapshot.params['code'];
    this.applicantNewQuestion.applicant.code = codeApplicantAdd;

    this.applicantsService.addApplicanQuestion(this.applicantNewQuestion)
      .then(() => {
        this.applicantNewQuestion = new ApplicantQuestions();
        this.loadApplicantQuestinons(codeApplicantAdd);
      })
  }

  /**
   * @param  {any} code
   */
  confirmationDeleteQuestion(code: any) {
    this.confirmation.confirm({
      message: 'Are you sure you want to delete?',
      accept: () => {
        this.deleteQuestion(code);
      }
    });
  }

  /**
   * @param  {any} code
   */
  deleteQuestion(code: any) {
    const codeApplicantDel = this.route.snapshot.params['code'];
    this.applicantsService.deleteQuestion(code)
      .then(() => {
        this.toasty.success('Deleted successfully!');
        this.loadApplicantQuestinons(codeApplicantDel);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  /**
   * @param  {any} code
   */
  findByCodeQuestions(code: any) {
    this.applicantsService.findByCodeQuestions(code)
      .then(applicantQuestions => {
        this.applicantNewQuestion = applicantQuestions[0];
      })
      .catch(erro => {
        // this.addApplicantQuestinons();
      });
  }

  /**
   * @param  {FormControl} form
   */
  updateApplicant(form: FormControl) {
    this.applicantsService.updateApplicantNotes(this.applicant)
      .then(applicant => {
        this.applicant = applicant;

        this.toasty.success('Successfully changed!');
        this.updateTitle();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  /**
   */
  updateTitle() {
    this.title.setTitle(`Evaluate: ${this.applicant.applicant.fullname}`);
    this.titlePage = this.applicant.applicant.fullname;
  }

  /**
   */
  backClicked() {
    this._location.back();
  }



  /**
   * Load the list of Questions
   */
  listTypeQuestions() {

    this.applicantsService.listTypeQuestions()
      .then(resultQuestion => {
        this.type_question = resultQuestion
          .map(a => ({ label: a.type_question, value: a.type_question }),
          this.question = resultQuestion
            .map(q => ({ label: q.question, value: q.question, id: q.type_question })));

        for (this.i = 0; this.i < this.type_question.length; this.i++) {
          if (this.type_questionFilter.indexOf(this.type_question[this.i].label) === -1) {
            this.type_questionFilter.push(this.type_question[this.i].label);
            this.type_questionFilterDropdown.push({ label: this.type_question[this.i].label, value: this.type_question[this.i].value });
          }
        }

      })
      .catch(erro => this.errorHandler.handle(erro));

  }

}
