import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/dashboard/orders/orders.component';
import { AddCustomerComponent } from './components/dashboard/add-customer/add-customer.component';
import { AboutUsComponent } from './components/dashboard/about-us/about-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { EditCustomerComponent } from './components/dashboard/edit-customer/edit-customer.component';
import { CustomersComponent } from './components/dashboard/customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersComponent,
    AddCustomerComponent,
    AboutUsComponent,
    DashboardComponent,
    RegisterComponent,
    EditCustomerComponent,
    CustomersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
