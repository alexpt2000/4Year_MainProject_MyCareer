import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../security/auth.guard';
import { ApplicantsAddComponent } from 'app/applicants/applicants-add/applicants-add.component';
import { ApplicantsSearchComponent } from 'app/applicants/applicants-search/applicants-search.component';
import { ApplicantsFilterComponent } from 'app/applicants/applicants-filter/applicants-filter.component';

const routes: Routes = [
  {
    path: 'applicants',
    component: ApplicantsSearchComponent,
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
  }

];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ApplicantsRoutingModule { }
