import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './routeguards/auth.guard';
import { RolesResolver } from './roles.resolver';

export const routes: Routes = [
     { path: '', redirectTo: '/login', pathMatch: 'full' }, //default rooute
     { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], resolve: { roles: RolesResolver }},
     { path: 'login', component: LoginComponent },
     {path: 'register', component: RegisterComponent },
     {path: '**', redirectTo: 'login' } //wildcard route
];
