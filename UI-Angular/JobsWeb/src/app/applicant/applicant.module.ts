import { ApplicantAddComponent } from 'app/applicant/applicant-add/applicant-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ApplicantAddComponent
  ],
  exports: [
    ApplicantAddComponent
  ]
})
export class ApplicantModule { }

