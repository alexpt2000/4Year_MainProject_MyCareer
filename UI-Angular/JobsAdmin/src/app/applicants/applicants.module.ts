import { CommonModule } from '@angular/common';
import { ApplicantsSearchComponent } from './applicants-search/applicants-search.component';
import { ApplicantsAddComponent } from 'app/applicants/applicants-add/applicants-add.component';
import { NgModule } from '@angular/core';
import { ApplicantsRoutingModule } from 'app/applicants/applicants-routing.module';
import { RouterModule } from '@angular/router';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import {PanelModule} from 'primeng/components/panel/panel';
import {CaptchaModule} from 'primeng/components/captcha/captcha';
import {SidebarModule} from 'primeng/components/sidebar/sidebar';
import {EditorModule} from 'primeng/components/editor/editor';
import {GrowlModule} from 'primeng/components/growl/growl';

import { SharedModule } from './../shared/shared.module';
import { JobsSearchComponent } from 'app/jobs/jobs-search/jobs-search.component';

import { CustomFormsModule } from 'ng2-validation'
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import { CalendarModule } from 'primeng/components/calendar/calendar';

import { FormsModule } from '@angular/forms';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputMaskModule,
    PanelModule,
    CaptchaModule,
    SidebarModule,
    EditorModule,
    GrowlModule,
    CustomFormsModule,
    SharedModule,
    RouterModule,
    DropdownModule,
    CalendarModule,
    ApplicantsRoutingModule
  ],
  declarations: [
    ApplicantsSearchComponent,
    ApplicantsAddComponent
  ],
  exports: [
    ApplicantsSearchComponent
  ]
})
export class ApplicantsModule { }
