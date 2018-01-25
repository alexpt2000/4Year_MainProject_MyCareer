import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { SharedModule } from './../shared/shared.module';
import { JobswebSearchComponent } from 'app/jobsweb/jobsweb-search/jobsweb-search.component';
import {PanelModule} from 'primeng/components/panel/panel';
import {CaptchaModule} from 'primeng/components/captcha/captcha';
import { JobswebDetailsComponent } from './jobsweb-details/jobsweb-details.component';




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

    SharedModule
  ],
  declarations: [
    JobswebSearchComponent,
    JobswebDetailsComponent
  ],
  exports: [
    JobswebSearchComponent,
    JobswebDetailsComponent
  ]
})
export class JobswebModule { }
