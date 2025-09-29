import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './components/routeguards/auth.guard';

export const routes: Routes = [
     { path: '', redirectTo: '/login', pathMatch: 'full' }, //default rooute
     { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
     { path: 'login', component: LoginComponent },
     {path: 'register', component: RegisterComponent},
     {path: '**', redirectTo: 'login' } //wildcard route
];
