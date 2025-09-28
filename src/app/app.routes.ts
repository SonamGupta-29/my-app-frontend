import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
     { path: '', redirectTo: '/login', pathMatch: 'full' }, //default rooute
     {path: 'dashboard', component: DashboardComponent },
     { path: 'login', component: LoginComponent },
     {path: 'register', component: RegisterComponent},
     {path: '**', redirectTo: 'login' } //wildcard route
];
