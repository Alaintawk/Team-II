import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/dashboard/about-us/about-us.component';
import { AddCustomerComponent } from './components/dashboard/add-customer/add-customer.component';
import { AyriBnossLAngularComponent } from './components/dashboard/ayri-bnoss-l-angular/ayri-bnoss-l-angular.component';
import { ContactUsComponent } from './components/dashboard/contact-us/contact-us.component';
import { CustomersComponent } from './components/dashboard/customers/customers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditCustomerComponent } from './components/dashboard/edit-customer/edit-customer.component';
import { OrdersComponent } from './components/dashboard/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
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
component : OrdersComponent},

{path: 'edit-customer',
component : EditCustomerComponent},

{path: 'customers',
component : CustomersComponent},
{path: 'samer',
component : ContactUsComponent
},

{path: 'ayre',
component : AyriBnossLAngularComponent 
},

{path: '',
component : DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
