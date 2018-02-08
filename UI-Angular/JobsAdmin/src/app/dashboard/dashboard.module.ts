import { TriStateCheckboxModule } from 'primeng/components/tristatecheckbox/tristatecheckbox';
import { SchedulesRoutingModule } from 'app/schedules/schedules-routing.module';
import { RouterModule } from '@angular/router';
import { GrowlModule } from 'primeng/components/growl/growl';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { ButtonModule } from 'primeng/components/button/button';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from 'app/shared/shared.module';
import { ScheduleModule, PanelModule, InputTextModule, TooltipModule, InputMaskModule, DropdownModule } from 'primeng/primeng';



@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    PanelModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DataTableModule,
    TooltipModule,
    InputMaskModule,
    GrowlModule,
    CustomFormsModule,
    SharedModule,
    RouterModule,
    SchedulesRoutingModule,
    DropdownModule,
    TriStateCheckboxModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
  ]
})
export class DashboardModule { }
