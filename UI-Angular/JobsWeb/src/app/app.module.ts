import { ApplicantAddComponent } from 'app/applicant/applicant-add/applicant-add.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ToastyModule } from 'ng2-toasty';

import { JobswebService } from './jobsweb/jobsweb.service';
import { JobswebModule } from 'app/jobsweb/jobsweb.module';

import { CustomFormsModule } from 'ng2-validation';

import { ApplicantModule } from 'app/applicant/applicant.module';
import { ApplicantService } from 'app/applicant/applicant.service';
import { JobswebSearchComponent } from 'app/jobsweb/jobsweb-search/jobsweb-search.component';


const routes: Routes = [
  {path: '', component: JobswebSearchComponent},
  {path: 'applicantadd/:code/:title', component: ApplicantAddComponent}
];

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
    RouterModule.forRoot(routes),
    ToastyModule.forRoot(),

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
