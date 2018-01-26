import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { JobswebService } from './jobsweb/jobsweb.service';
import { JobswebModule } from 'app/jobsweb/jobsweb.module';

import { CustomFormsModule } from 'ng2-validation';

import { ApplicantModule } from 'app/applicant/applicant.module';
import { ApplicantService } from 'app/applicant/applicant.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CustomFormsModule,
    FormsModule,

    JobswebModule,
    ApplicantModule
  ],
  providers: [
    JobswebService,
    ApplicantService,
    CustomFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
