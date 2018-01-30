import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../seguranca/auth.guard';
import { JobswebSearchComponent } from './jobsweb-search/jobsweb-search.component';

const routes: Routes = [
  {
    path: 'jobsweb',
    component: JobswebSearchComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_PESSOA'] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class JobswebRoutingModule { }
