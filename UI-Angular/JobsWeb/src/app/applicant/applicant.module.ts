import { ApplicantAddComponent } from 'app/applicant/applicant-add/applicant-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from 'primeng/components/common/shared';
import {FileUploadModule} from 'primeng/components/fileupload/fileupload';


@NgModule({
  imports: [
    CommonModule,
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
    FileUploadModule
  ],
  declarations: [
    ApplicantAddComponent
  ],
  exports: [
    ApplicantAddComponent
  ]
})
export class ApplicantModule { }

