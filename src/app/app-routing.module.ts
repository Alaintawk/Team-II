import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

{path: 'aboutUS',
component : AboutUsComponent},
{path: 'login',
component : LoginComponent},
{path: 'register',
component : RegisterComponent},
{path: 'dashboard',
component : DashboardComponent},
{path: 'add-customer',
component : AddCustomerComponent},
{path: 'orders',
component : OrdersComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
