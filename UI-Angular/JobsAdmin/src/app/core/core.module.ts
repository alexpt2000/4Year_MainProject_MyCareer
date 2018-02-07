import { ApplicantsService } from './../applicants/applicants.service';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationService } from 'primeng/components/common/api';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ToastyModule } from 'ng2-toasty';
import { JwtHelper } from 'angular2-jwt';

import { AuthService } from './../security/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotauthorizedComponent } from './not-authorized.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {MenubarModule} from 'primeng/components/menubar/menubar';

import {MenuModule} from 'primeng/components/menu/menu';
import { JobsService } from 'app/jobs/jobs.service';
import { DashboardService } from 'app/dashboard/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    MenubarModule,
    MenuModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    NotauthorizedComponent
  ],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    DashboardService,
    JobsService,
    ApplicantsService,
    ErrorHandlerService,
    AuthService,

    ConfirmationService,
    JwtHelper,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
