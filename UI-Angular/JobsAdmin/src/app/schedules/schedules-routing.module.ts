import { SchedulesAddComponent } from 'app/schedules/schedules-add/schedules-add.component';
import { SchedulesSearchComponent } from './schedules-search/schedules-search.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../security/auth.guard';


const routes: Routes = [
  {
    path: 'schedules',
    component: SchedulesSearchComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_READ_SCHEDULE'] }
  },
  {
    path: 'schedules/newschedule',
    component: SchedulesAddComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADD_SCHEDULE'] }
  },
  {
    path: 'schedules/:code',
    component: SchedulesAddComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADD_SCHEDULE'] }
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }
