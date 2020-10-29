import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

{path: '' ,
redirectTo: 'login' ,
pathMatch: 'full'},

{path: 'dashboard',
component : DashboardComponent},

{path: 'register',
component : RegisterComponent},

{path: 'dashboard',
component : DashboardComponent},

{path: 'login',
component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
