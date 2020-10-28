import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers/customers.component';

import { EditCustomerComponent } from './edit-customer/edit-customer.component';

import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [

{path: 'aboutUS',
component : AboutUsComponent},


{path: 'add-customer',
component : AddCustomerComponent},
{path: 'orders',
component : OrdersComponent},

{path: 'edit-customer',
component : EditCustomerComponent},

{path: 'customers',
component : CustomersComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class dashboardRoutingModule { }
