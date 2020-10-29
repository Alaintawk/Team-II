import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OrdersComponent,
    AddCustomerComponent,
    AboutUsComponent,
    EditCustomerComponent,
    CustomersComponent,
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
