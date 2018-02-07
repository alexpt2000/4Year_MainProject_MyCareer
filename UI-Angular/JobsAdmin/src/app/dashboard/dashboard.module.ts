import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScheduleModule, PanelModule} from 'primeng/primeng';
import { DashboardComponent } from 'app/dashboard/dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    ScheduleModule,
    PanelModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
  ]
})
export class DashboardModule { }
