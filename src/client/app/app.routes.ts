import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { DashboardRoutes } from './dashboard/index';

import { LoginComponent } from './login/index';

import { AuthGuard } from './_guards/index';

export const routes: Routes = [
	...LoginRoutes,
	...DashboardRoutes,
	{ path: '**', component: LoginComponent }
];
