

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { dashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    OrdersComponent,
    AddCustomerComponent,
    AboutUsComponent,
    DashboardComponent,
    EditCustomerComponent,
    CustomersComponent,
  ],
  imports: [
    BrowserModule,
   dashboardRoutingModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }