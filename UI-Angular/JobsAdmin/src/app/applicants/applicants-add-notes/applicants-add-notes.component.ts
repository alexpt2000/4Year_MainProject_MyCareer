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
  i = 0;
  testAlex: any;

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
    private auth: AuthService,
    private confirmation: ConfirmationService,
  ) { }

  ngOnInit() {
    const codeApplicant = this.route.snapshot.params['code'];
    this.title.setTitle('Evaluate applicant');
    this.loadApplicantNotes(codeApplicant);
    this.loadApplicantQuestinons(codeApplicant);
    this.listTypeQuestions();

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


    addApplicantQuestinons() {
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
          this.outro = applicantQuestions[0];
          console.log(this.outro.question);
          this.applicantNewQuestion.question = this.outro.question;
          console.log(this.applicantNewQuestion.question);
          // this.updateTitle();
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
      .then(typeQuestion => {
        this.typeQuestion = typeQuestion
          .map(a => ({ label: a.type_question, value: a.type_question }),
          this.question = typeQuestion
            .map(q => ({ label: q.question, value: q.question })));
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

}
