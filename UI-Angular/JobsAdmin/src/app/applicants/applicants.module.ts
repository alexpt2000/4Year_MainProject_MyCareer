import { CommonModule } from '@angular/common';
import { ApplicantsSearchComponent } from './applicants-search/applicants-search.component';
import { ApplicantsAddComponent } from 'app/applicants/applicants-add/applicants-add.component';
import { ApplicantsFilterComponent } from 'app/applicants/applicants-filter/applicants-filter.component';
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
import {RatingModule} from 'primeng/components/rating/rating';
import { ApplicantsAddNotesComponent } from 'app/applicants/applicants-add-notes/applicants-add-notes.component';
import { TabViewModule, SpinnerModule } from 'primeng/primeng';





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
    RatingModule,
    ApplicantsRoutingModule,
    TabViewModule,
    SpinnerModule


  ],
  declarations: [
    ApplicantsSearchComponent,
    ApplicantsAddComponent,
    ApplicantsAddNotesComponent,
    ApplicantsFilterComponent
  ],
  exports: [
    ApplicantsSearchComponent,
    ApplicantsFilterComponent
  ]
})
export class ApplicantsModule { }
