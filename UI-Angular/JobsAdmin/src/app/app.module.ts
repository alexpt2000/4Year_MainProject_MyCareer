import { ApplicantsModule } from './applicants/applicants.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SecurityModule } from './security/security.module';
import { AppRoutingModule } from './app-routing.module';

import { ScheduleModule } from 'primeng/primeng';

import { PanelModule } from 'primeng/primeng';
import { JobsModule } from 'app/jobs/jobs.module';
import { DashboardModule } from 'app/dashboard/dashboard.module';
import { SchedulesModule } from 'app/schedules/schedules.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CoreModule,
    DashboardModule,
    JobsModule,
    ApplicantsModule,
    SchedulesModule,
    SecurityModule,
    AppRoutingModule,
    ScheduleModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
