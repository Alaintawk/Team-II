import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
{
path: 'dashboard',
component: DashboardComponent,
children: [
    {
      path: '',
      redirectTo: 'customers',
      pathMatch: 'full'
    },
    {path: 'aboutUS',
    component : AboutUsComponent},
    {path: 'add-customer',
    component : AddCustomerComponent},
    {path: 'orders',
    component : OrdersComponent},
    {path: 'edit-customer',
    component : EditCustomerComponent},

],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
