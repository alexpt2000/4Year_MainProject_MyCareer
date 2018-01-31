import { LoginFormComponent } from './login/login-form/login-form.component';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardDemoComponent} from './dashboard/dashboarddemo.component';

import { JobsSearchComponent } from './jobs/jobs-search/jobs-search.component';

export const routes: Routes = [
    {path: '', component: DashboardDemoComponent},
    {path: 'listjobs', component: JobsSearchComponent},
    {path: 'login', component: LoginFormComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);


