import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { SecurityModule } from './security/security.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ScheduleModule} from 'primeng/primeng';

import {PanelModule} from 'primeng/primeng';
import { JobsModule } from 'app/jobs/jobs.module';
import { ApplicantsAddComponent } from './applicants/applicants-add/applicants-add.component';
import { ApplicantsSearchComponent } from './applicants/applicants-search/applicants-search.component';
import { ApplicantsModule } from 'app/applicants/applicants.module';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ApplicantsAddComponent,
    ApplicantsSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    CoreModule,
    LancamentosModule,
    PessoasModule,
    JobsModule,
    ApplicantsModule,
    SecurityModule,
    AppRoutingModule,
    ScheduleModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
