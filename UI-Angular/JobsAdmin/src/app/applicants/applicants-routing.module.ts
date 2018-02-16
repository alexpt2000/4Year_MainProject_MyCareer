import { SchedulesAddComponent } from './../schedules/schedules-add/schedules-add.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../security/auth.guard';
import { ApplicantsAddComponent } from 'app/applicants/applicants-add/applicants-add.component';
import { ApplicantsFilterComponent } from 'app/applicants/applicants-filter/applicants-filter.component';
import { ApplicantsAddNotesComponent } from 'app/applicants/applicants-add-notes/applicants-add-notes.component';

const routes: Routes = [
  {
    path: 'applicants',
    component: ApplicantsFilterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_READ_APPLICANT'] }
  },
  {
    path: 'applicants/newapplicant',
    component: ApplicantsAddComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADD_APPLICANT'] }
  },
  {
    path: 'applicants/:code',
    component: ApplicantsAddComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADD_APPLICANT'] }
  },
  {
    path: 'applied/:code/:title',
    component: ApplicantsFilterComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_READ_APPLICANT'] }
  },
  {
    path: 'schedules/newschedule/:fullname',
    component: SchedulesAddComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADD_SCHEDULE'] }
  },
  {
    path: 'applicantnotes/:code',
    component: ApplicantsAddNotesComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADD_APPLICANT'] }
  }

];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ApplicantsRoutingModule { }
